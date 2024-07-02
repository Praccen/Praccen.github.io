/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY_TYPE: () => (/* binding */ ARRAY_TYPE),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   RANDOM: () => (/* binding */ RANDOM),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   setMatrixArrayType: () => (/* binding */ setMatrixArrayType),
/* harmony export */   toRadian: () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glMatrix: () => (/* reexport module object */ _common_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   mat2: () => (/* reexport module object */ _mat2_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   mat2d: () => (/* reexport module object */ _mat2d_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   mat3: () => (/* reexport module object */ _mat3_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   mat4: () => (/* reexport module object */ _mat4_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   quat: () => (/* reexport module object */ _quat_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   quat2: () => (/* reexport module object */ _quat2_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   vec2: () => (/* reexport module object */ _vec2_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   vec3: () => (/* reexport module object */ _vec3_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   vec4: () => (/* reexport module object */ _vec4_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LDU: () => (/* binding */ LDU),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromMat2d: () => (/* binding */ fromMat2d),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

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
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
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
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

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
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
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
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

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
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

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
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
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
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
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
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
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
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
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
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
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
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
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
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
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
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

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
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
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
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

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
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

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
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
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
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
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
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
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
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

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
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

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
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

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
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

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
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromQuat2: () => (/* binding */ fromQuat2),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   fromRotationTranslationScaleOrigin: () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   fromXRotation: () => (/* binding */ fromXRotation),
/* harmony export */   fromYRotation: () => (/* binding */ fromYRotation),
/* harmony export */   fromZRotation: () => (/* binding */ fromZRotation),
/* harmony export */   frustum: () => (/* binding */ frustum),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   lookAt: () => (/* binding */ lookAt),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   orthoNO: () => (/* binding */ orthoNO),
/* harmony export */   orthoZO: () => (/* binding */ orthoZO),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   perspectiveFromFieldOfView: () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   perspectiveNO: () => (/* binding */ perspectiveNO),
/* harmony export */   perspectiveZO: () => (/* binding */ perspectiveZO),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
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
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

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
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
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
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
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
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
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
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
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
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
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
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
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
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
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
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
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
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
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
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
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
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
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
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
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
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

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
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

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
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


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
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

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
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


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
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

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
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


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
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
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
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
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
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

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
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

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
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

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
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

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
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
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
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

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
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

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
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
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
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
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
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
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
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
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
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

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
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
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
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
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
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

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
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

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
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
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
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
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
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

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
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

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
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

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
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   calculateW: () => (/* binding */ calculateW),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   exp: () => (/* binding */ exp),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getAngle: () => (/* binding */ getAngle),
/* harmony export */   getAxisAngle: () => (/* binding */ getAxisAngle),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   ln: () => (/* binding */ ln),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   rotationTo: () => (/* binding */ rotationTo),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxes: () => (/* binding */ setAxes),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqlerp: () => (/* binding */ sqlerp),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
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
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_3__.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationValues: () => (/* binding */ fromRotationTranslationValues),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getDual: () => (/* binding */ getDual),
/* harmony export */   getReal: () => (/* binding */ getReal),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateAroundAxis: () => (/* binding */ rotateAroundAxis),
/* harmony export */   rotateByQuatAppend: () => (/* binding */ rotateByQuatAppend),
/* harmony export */   rotateByQuatPrepend: () => (/* binding */ rotateByQuatPrepend),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setDual: () => (/* binding */ setDual),
/* harmony export */   setReal: () => (/* binding */ setReal),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__.create();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getRotation(outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getTranslation(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat2: () => (/* binding */ transformMat2),
/* harmony export */   transformMat2d: () => (/* binding */ transformMat2d),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
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

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   bezier: () => (/* binding */ bezier),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   hermite: () => (/* binding */ hermite),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

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
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

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
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
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

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
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
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
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
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
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

/***/ }),

/***/ "./code/index.ts":
/*!***********************!*\
  !*** ./code/index.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./src/main */ "./code/src/main.ts"), exports);


/***/ }),

/***/ "./code/src/Engine/AssetHandling/MeshStore.ts":
/*!****************************************************!*\
  !*** ./code/src/Engine/AssetHandling/MeshStore.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GeometryPass_1 = __webpack_require__(/*! ../Rendering/ShaderPrograms/DeferredRendering/GeometryPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts");
const Heightmap_1 = __webpack_require__(/*! ../Objects/GraphicsObjects/Heightmap */ "./code/src/Engine/Objects/GraphicsObjects/Heightmap.ts");
const Mesh_1 = __webpack_require__(/*! ../Objects/GraphicsObjects/Mesh */ "./code/src/Engine/Objects/GraphicsObjects/Mesh.ts");
const Octree_1 = __webpack_require__(/*! ../Objects/Octree */ "./code/src/Engine/Objects/Octree.ts");
const WebUtils_1 = __webpack_require__(/*! ../Utils/WebUtils */ "./code/src/Engine/Utils/WebUtils.ts");
const Texture_1 = __webpack_require__(/*! ../Rendering/Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class MeshStore {
    constructor(textureStore) {
        this.meshMap = new Map();
        this.heightmapMap = new Map();
        this.octreeMap = new Map();
        this.textureStore = textureStore;
    }
    getMesh(path, printWarnings = true) {
        let mesh = this.meshMap.get(path);
        if (mesh) {
            return mesh;
        }
        if (printWarnings) {
            console.warn("Trying to get mesh " + path + " before loading it");
        }
        return null;
    }
    loadMesh(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let mesh = this.meshMap.get(path);
            if (mesh) {
                return mesh;
            }
            let newVertices = yield this.parseObjContent(path);
            this.meshMap.set(path, new Mesh_1.default(GeometryPass_1.geometryPass, newVertices));
            return this.meshMap.get(path);
        });
    }
    getHeightmap(path, printWarnings = true) {
        let heightmap = this.heightmapMap.get(path);
        if (heightmap) {
            return heightmap;
        }
        if (printWarnings) {
            console.warn("Trying to get heightmap " + path + " before loading it");
        }
        return null;
    }
    loadHeightmap(path, useTextureSizeForResolution = true, x = 2, y = 2, sizePerX = 1.0, sizePerY = 1.0) {
        return __awaiter(this, void 0, void 0, function* () {
            let heightmap = this.heightmapMap.get(path);
            if (heightmap) {
                return heightmap;
            }
            let newHeightmap = new Heightmap_1.default(GeometryPass_1.geometryPass);
            if (!useTextureSizeForResolution) {
                newHeightmap.createPlane(x, y, sizePerX, sizePerY);
            }
            yield newHeightmap.readHeightDataFromTexture(path, useTextureSizeForResolution);
            this.heightmapMap.set(path, newHeightmap);
            return newHeightmap;
        });
    }
    getOctree(path, printWarnings = true) {
        let octree = this.octreeMap.get(path);
        if (octree && octree.triangles.length == 0) {
            return octree.octree;
        }
        if (printWarnings) {
            console.warn("Trying to get octree " + path + " before loading it");
        }
        return null;
    }
    loadOctree(path, smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode, timeLimit = Infinity) {
        return __awaiter(this, void 0, void 0, function* () {
            let startTime = Date.now();
            let octree = this.octreeMap.get(path);
            if (octree && octree.triangles.length == 0) {
                return { octree: octree.octree, doneLoading: true };
            }
            if (octree == undefined) {
                // Immediately make it defined, but with no content, to only do the initialization once
                this.octreeMap.set(path, {
                    octree: null,
                    triangles: null,
                });
                octree = this.octreeMap.get(path);
                let triangles = new Array();
                if (path.endsWith(".obj")) {
                    let mesh = this.getMesh(path, false);
                    if (!mesh) {
                        console.warn("Trying to get octree for " + path + " before loading " + path);
                        return null;
                    }
                    mesh.setupTriangles(triangles);
                }
                else {
                    let heightmap = this.getHeightmap(path, false);
                    if (!heightmap) {
                        console.warn("Trying to get octree for " + path + " before loading " + path);
                        return null;
                    }
                    heightmap.setupTriangles(triangles);
                }
                octree.triangles = triangles;
                let octPath = "Assets/octrees/" + path.split("/").pop().split(".")[0] + ".oct";
                let fetched = false;
                try {
                    const response = yield fetch(octPath);
                    if (response.ok) {
                        fetched = true;
                        console.log("Loaded octree from " + octPath);
                        const octContent = yield response.text();
                        octree.octree = new Octree_1.default(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create(), smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode);
                        octree.octree.parseOct(octContent);
                        octree.triangles.length = 0;
                    }
                }
                catch (e) {
                }
                if (!fetched) {
                    console.log("Did not find an octree to load from " +
                        octPath +
                        ". Generating it from scratch.");
                    let minVec = gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity);
                    let maxVec = gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity);
                    for (let tri of triangles) {
                        for (let vertex of tri.getTransformedVertices()) {
                            gl_matrix_1.vec3.max(maxVec, maxVec, vertex);
                            gl_matrix_1.vec3.min(minVec, minVec, vertex);
                        }
                    }
                    octree.octree = new Octree_1.default(minVec, maxVec, smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode);
                }
            }
            while (octree.octree != undefined &&
                octree.triangles != undefined &&
                octree.triangles.length > 0 &&
                Date.now() - startTime < timeLimit) {
                octree.octree.addShape(octree.triangles.pop());
            }
            if (octree.triangles != undefined && octree.triangles.length == 0) {
                octree.octree.prune();
                // console.groupCollapsed("octree for " + path);
                // octree.octree.print();
                // console.groupEnd();
            }
            return {
                octree: octree.octree,
                doneLoading: octree.triangles != undefined && octree.triangles.length == 0,
            };
        });
    }
    downloadOctrees() {
        for (let octree of this.octreeMap) {
            let data = octree[1].octree.getDataString();
            WebUtils_1.WebUtils.DownloadFile(octree[0].split("/").pop().split(".")[0] + ".oct", data);
        }
    }
    parseObjContent(meshPath) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            https://webglfundamentals.org/webgl/lessons/webgl-load-obj.html
            */
            const response = yield fetch(meshPath);
            const objContent = yield response.text();
            const lines = objContent.split("\n");
            let vertexPositions = new Array();
            let vertexTexCoords = new Array();
            let vertexNormals = new Array();
            let vertices = new Array();
            let mtls = new Map();
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
                                            mtls.set(lastMtl, { diffuseColor: gl_matrix_1.vec3.create(), specularColor: gl_matrix_1.vec3.create(), emissionColor: gl_matrix_1.vec3.create(), dissolve: 1.0, spriteIndex: index });
                                            index++;
                                        }
                                    }
                                    else if (row.startsWith("Kd") && lastMtl != "") {
                                        const colorValues = row.split(/\s+/).filter((element) => {
                                            return element != "Kd";
                                        });
                                        if (colorValues.length > 2) {
                                            gl_matrix_1.vec3.set(mtls.get(lastMtl).diffuseColor, parseFloat(colorValues[0]), parseFloat(colorValues[1]), parseFloat(colorValues[2]));
                                        }
                                    }
                                    else if (row.startsWith("Ks") && lastMtl != "") {
                                        const colorValues = row.split(/\s+/).filter((element) => {
                                            return element != "Ks";
                                        });
                                        if (colorValues.length > 2) {
                                            gl_matrix_1.vec3.set(mtls.get(lastMtl).specularColor, parseFloat(colorValues[0]), parseFloat(colorValues[1]), parseFloat(colorValues[2]));
                                        }
                                    }
                                    else if (row.startsWith("Ke") && lastMtl != "") {
                                        const colorValues = row.split(/\s+/).filter((element) => {
                                            return element != "Ke";
                                        });
                                        if (colorValues.length > 2) {
                                            gl_matrix_1.vec3.set(mtls.get(lastMtl).emissionColor, parseFloat(colorValues[0]), parseFloat(colorValues[1]), parseFloat(colorValues[2]));
                                        }
                                    }
                                    else if (row.startsWith("d") && lastMtl != "") {
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
                                let tempTexture = new Texture_1.default(false);
                                tempTexture.setTextureData(diffuseTextureData, index, 1);
                                this.textureStore.setTexture(mtlPath, tempTexture);
                                let specularTextureData = new Uint8Array(index * 4);
                                for (let mtl of mtls) {
                                    specularTextureData[mtl[1].spriteIndex * 4 + 0] = mtl[1].specularColor[0] * 255;
                                    specularTextureData[mtl[1].spriteIndex * 4 + 1] = mtl[1].specularColor[1] * 255;
                                    specularTextureData[mtl[1].spriteIndex * 4 + 2] = mtl[1].specularColor[2] * 255;
                                    specularTextureData[mtl[1].spriteIndex * 4 + 3] = 255;
                                }
                                tempTexture = new Texture_1.default(false);
                                tempTexture.setTextureData(specularTextureData, index, 1);
                                this.textureStore.setTexture(mtlPath.substring(0, mtlPath.length - 4) + "_spec.mtl", tempTexture);
                                let emissionTextureData = new Uint8Array(index * 4);
                                for (let mtl of mtls) {
                                    emissionTextureData[mtl[1].spriteIndex * 4 + 0] = mtl[1].emissionColor[0] * 255;
                                    emissionTextureData[mtl[1].spriteIndex * 4 + 1] = mtl[1].emissionColor[1] * 255;
                                    emissionTextureData[mtl[1].spriteIndex * 4 + 2] = mtl[1].emissionColor[2] * 255;
                                    emissionTextureData[mtl[1].spriteIndex * 4 + 3] = 255;
                                }
                                tempTexture = new Texture_1.default(false);
                                tempTexture.setTextureData(emissionTextureData, index, 1);
                                this.textureStore.setTexture(mtlPath.substring(0, mtlPath.length - 4) + "_emission.mtl", tempTexture);
                            }
                        }
                        catch (e) {
                        }
                    }
                }
                else if (line.startsWith("usemtl") && mtls.size > 0) {
                    usingMtl = line.split(/\s+/)[1];
                }
                else if (line.startsWith("vt")) {
                    // Texture coordinates
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "vt";
                    });
                    vertexTexCoords.push(gl_matrix_1.vec2.fromValues(parseFloat(coords[0]), parseFloat(coords[1])));
                }
                else if (line.startsWith("vn")) {
                    // Normal
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "vn";
                    });
                    vertexNormals.push(gl_matrix_1.vec3.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2])));
                }
                else if (line.startsWith("v")) {
                    // Position
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "v";
                    });
                    vertexPositions.push(gl_matrix_1.vec3.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2])));
                }
                else if (line.startsWith("f")) {
                    // Faces
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "f";
                    });
                    for (let i = 0; i < coords.length - 2; i++) {
                        for (let j = 0; j < 3; j++) {
                            let index = j == 0 ? 0 : i + j; // 0 if j is zero, otherwize i +j
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
                                vertices[last - 1].texCoordIndex = parseInt(indices[1]) - 1; // Can be empty, texCoordIndex will then be NaN
                            }
                            if (indices.length > 2) {
                                vertices[last - 1].normalIndex = parseInt(indices[2]) - 1;
                            }
                            if (usingMtl != "") {
                                const mtl = mtls.get(usingMtl);
                                if (mtl != undefined) {
                                    vertices[last - 1].mtlIndex = mtl.spriteIndex;
                                }
                                else {
                                    console.warn("usemtl " + usingMtl + ", there is no such mtl");
                                }
                            }
                        }
                    }
                }
                else if (line.startsWith("#")) {
                    // A comment, ignore
                }
                else if (line.length > 0) {
                    // Unhandled keywords
                    // console.warn("OBJ loader: Unhandled keyword " + line.split(/\s+/)[0]);
                }
            }
            let returnArr = new Float32Array(vertices.length * 8); // 3 * pos + 3 * norm + 2 * tx
            for (let i = 0; i < vertices.length; i++) {
                if (!isNaN(vertices[i].posIndex)) {
                    returnArr[i * 8] = vertexPositions[vertices[i].posIndex][0];
                    returnArr[i * 8 + 1] = vertexPositions[vertices[i].posIndex][1];
                    returnArr[i * 8 + 2] = vertexPositions[vertices[i].posIndex][2];
                }
                else {
                    returnArr[i * 8] = 0.0;
                    returnArr[i * 8 + 1] = 0.0;
                    returnArr[i * 8 + 2] = 0.0;
                }
                if (!isNaN(vertices[i].normalIndex)) {
                    returnArr[i * 8 + 3] = vertexNormals[vertices[i].normalIndex][0];
                    returnArr[i * 8 + 4] = vertexNormals[vertices[i].normalIndex][1];
                    returnArr[i * 8 + 5] = vertexNormals[vertices[i].normalIndex][2];
                }
                else {
                    returnArr[i * 8 + 3] = 1.0;
                    returnArr[i * 8 + 4] = 0.0;
                    returnArr[i * 8 + 5] = 0.0;
                }
                if (!isNaN(vertices[i].mtlIndex)) {
                    returnArr[i * 8 + 6] = vertices[i].mtlIndex / mtls.size + (0.5 / mtls.size);
                    returnArr[i * 8 + 7] = 0.5;
                }
                else if (!isNaN(vertices[i].texCoordIndex)) {
                    returnArr[i * 8 + 6] = vertexTexCoords[vertices[i].texCoordIndex][0];
                    returnArr[i * 8 + 7] = vertexTexCoords[vertices[i].texCoordIndex][1];
                }
                else {
                    returnArr[i * 8 + 6] = 0.0;
                    returnArr[i * 8 + 7] = 0.0;
                }
            }
            return returnArr;
        });
    }
}
exports["default"] = MeshStore;


/***/ }),

/***/ "./code/src/Engine/AssetHandling/TextureStore.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/AssetHandling/TextureStore.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CubeMap_1 = __webpack_require__(/*! ../Rendering/Textures/CubeMap */ "./code/src/Engine/Rendering/Textures/CubeMap.ts");
const Texture_1 = __webpack_require__(/*! ../Rendering/Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
class TextureStore {
    constructor() {
        this.textures = new Map();
        this.cubeMaps = new Map();
    }
    setTexture(path, texture) {
        this.textures.set(path, texture);
    }
    getTexture(path) {
        let tex = this.textures.get(path);
        if (tex) {
            return tex;
        }
        let newTexture = new Texture_1.default();
        const CSSPrefix = "CSS:";
        if (path.startsWith(CSSPrefix)) {
            // Hex value color
            newTexture.createFromCSSColorValue(path.substring(CSSPrefix.length));
        }
        else {
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
        let newCubeMap = new CubeMap_1.default();
        newCubeMap.loadCubemap([
            path + "/right.png",
            path + "/left.png",
            path + "/bottom.png",
            path + "/top.png",
            path + "/front.png",
            path + "/back.png",
        ]);
        this.cubeMaps.set(path, newCubeMap);
        return newCubeMap;
    }
}
exports["default"] = TextureStore;


/***/ }),

/***/ "./code/src/Engine/Audio/AudioPlayer.ts":
/*!**********************************************!*\
  !*** ./code/src/Engine/Audio/AudioPlayer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class AudioPlayer {
    constructor() {
        this.sound_effects_dir = "Assets/Audio/Effects";
        this.songs_dir = "Assets/Audio/Music";
        this.sound_effects = {};
        this.songs = {};
        this.sound_effects_volume_multilpliers = {};
        this.songs_volume_multilpliers = {};
        this.active = false;
        const sound_effect_files = [];
        const sound_effect_volume_multilpliers_list = [];
        let count = 0;
        for (const file of sound_effect_files) {
            this.sound_effects[file.split(".")[0]] = new Audio(this.sound_effects_dir + "/" + file);
            this.sound_effects_volume_multilpliers[file.split(".")[0]] =
                sound_effect_volume_multilpliers_list[count];
            count++;
        }
        const song_files = [];
        const song_files_volume_multilpliers_list = [];
        count = 0;
        for (const file of song_files) {
            this.songs[file.split(".")[0]] = new Audio(this.songs_dir + "/" + file);
            this.songs_volume_multilpliers[file.split(".")[0]] =
                song_files_volume_multilpliers_list[count];
            count++;
        }
        for (let sound in this.sound_effects) {
            this.sound_effects[sound].preload = "auto";
        }
        for (let sound in this.songs) {
            this.songs[sound].preload = "auto";
        }
        this.setMusicVolume(1.0);
        this.setSoundEffectVolume(1.0);
    }
    playAudio(key, loop, volumeMultiplier) {
        if (!volumeMultiplier) {
            volumeMultiplier = 1;
        }
        if (this.sound_effects[key]) {
            this.sound_effects[key].loop = loop;
            this.active && this.sound_effects[key].play();
        }
        else if (this.songs[key]) {
            this.songs[key].loop = loop;
            this.active && this.songs[key].play();
        }
    }
    setAudioVolume(key, volume) {
        if (this.sound_effects[key] &&
            this.sound_effects_volume_multilpliers[key]) {
            this.sound_effects[key].volume = Math.min(volume * this.sound_effects_volume_multilpliers[key], 1);
        }
        else if (this.songs[key] && this.songs_volume_multilpliers[key]) {
            this.songs[key].volume = Math.min(volume * this.songs_volume_multilpliers[key], 1);
        }
    }
    setMusicVolume(volume) {
        Object.keys(this.songs).forEach((key) => {
            this.songs[key].volume = Math.min(volume * this.songs_volume_multilpliers[key], 1);
        });
    }
    setSoundEffectVolume(volume) {
        Object.keys(this.sound_effects).forEach((key) => {
            this.sound_effects[key].volume = Math.min(volume * this.sound_effects_volume_multilpliers[key], 1);
        });
    }
    setAudioTime(key, time) {
        if (this.sound_effects[key]) {
            this.sound_effects[key].currentTime = time;
        }
        else if (this.songs[key]) {
            this.songs[key].currentTime = time;
        }
    }
    pauseAudio(key) {
        if (this.sound_effects[key]) {
            this.sound_effects[key].pause();
        }
        else if (this.songs[key]) {
            this.songs[key].pause();
        }
    }
    stopAll() {
        Object.keys(this.songs).forEach((key) => {
            this.songs[key].pause();
            this.songs[key].currentTime = 0;
        });
        Object.keys(this.sound_effects).forEach((key) => {
            this.sound_effects[key].pause();
            this.sound_effects[key].currentTime = 0;
        });
    }
}
exports["default"] = AudioPlayer;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/BoundingBoxComponent.ts":
/*!****************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/BoundingBoxComponent.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const OBB_1 = __webpack_require__(/*! ../../Physics/Shapes/OBB */ "./code/src/Engine/Physics/Shapes/OBB.ts");
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
class BoundingBoxComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.BOUNDINGBOX);
        this.boundingBox = new OBB_1.default();
    }
    /**
     * Sets up the bounding box based on the vertices in a graphics object
     * @param graphicsObj The graphics object
     */
    setup(graphicsObj) {
        let minVec = gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity);
        let maxVec = gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity);
        let vertices = graphicsObj.getVertexPositions();
        for (let vertex of vertices) {
            gl_matrix_1.vec3.max(maxVec, maxVec, vertex);
            gl_matrix_1.vec3.min(minVec, minVec, vertex);
        }
        this.boundingBox.setMinAndMaxVectors(minVec, maxVec);
    }
    /**
     * Update the transform matrix used for the bounding box
     * @param matrix Optional: Will set a new matrix to use for the bounding box. If no matrix is sent, it will use the previously set matrix but mark the box to be updated.
     */
    updateTransformMatrix(matrix) {
        if (matrix) {
            this.boundingBox.setTransformMatrix(matrix);
        }
        else {
            this.boundingBox.setUpdateNeeded();
        }
    }
}
exports["default"] = BoundingBoxComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/CollisionComponent.ts":
/*!**************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/CollisionComponent.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
class CollisionComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.COLLISION);
        this.isStatic = false;
        this.isImmovable = false;
        this.isDynamic = false;
        this.collisionCoefficient = 0.0;
        this.frictionCoefficient = 0.0;
        this.mass = 1.0;
    }
}
exports["default"] = CollisionComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/Component.ts":
/*!*****************************************************!*\
  !*** ./code/src/Engine/ECS/Components/Component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Component = exports.ComponentTypeEnum = void 0;
const GameMachine_1 = __webpack_require__(/*! ../../../Game/GameMachine */ "./code/src/Game/GameMachine.ts");
var ComponentTypeEnum;
(function (ComponentTypeEnum) {
    ComponentTypeEnum[ComponentTypeEnum["BOUNDINGBOX"] = 0] = "BOUNDINGBOX";
    ComponentTypeEnum[ComponentTypeEnum["CAMERAFOCUS"] = 1] = "CAMERAFOCUS";
    ComponentTypeEnum[ComponentTypeEnum["COLLISION"] = 2] = "COLLISION";
    ComponentTypeEnum[ComponentTypeEnum["GRAPHICS"] = 3] = "GRAPHICS";
    ComponentTypeEnum[ComponentTypeEnum["MESHCOLLISION"] = 4] = "MESHCOLLISION";
    ComponentTypeEnum[ComponentTypeEnum["MOVEMENT"] = 5] = "MOVEMENT";
    ComponentTypeEnum[ComponentTypeEnum["PARTICLESPAWNER"] = 6] = "PARTICLESPAWNER";
    ComponentTypeEnum[ComponentTypeEnum["POINTLIGHT"] = 7] = "POINTLIGHT";
    ComponentTypeEnum[ComponentTypeEnum["POSITION"] = 8] = "POSITION";
    ComponentTypeEnum[ComponentTypeEnum["POSITIONPARENT"] = 9] = "POSITIONPARENT";
})(ComponentTypeEnum = exports.ComponentTypeEnum || (exports.ComponentTypeEnum = {}));
class Component {
    constructor(type) {
        this._type = type;
    }
    destructor() { }
    get type() {
        return this._type;
    }
    updateGui(overlayRendering, parentDiv, objectPlacer) { }
    addTextEdit(overlayRendering, div, label, variable, index) {
        let propEditText = overlayRendering.getNewEditText(div);
        propEditText.textString = label;
        propEditText.textSize = 20;
        propEditText.scaleWithWindow = true;
        let object = this;
        for (let step of variable) {
            object = object[step];
            if (object == undefined) {
                return;
            }
        }
        if (index == undefined) {
            propEditText.getInputElement().value = object.toString();
        }
        else {
            propEditText.getInputElement().value = object[index].toString();
        }
    }
    ;
    addCheckbox(overlayRendering, div, label, variable, index) {
        let propCheckbox = overlayRendering.getNewCheckbox(div);
        propCheckbox.textString = label;
        propCheckbox.textSize = 20;
        propCheckbox.scaleWithWindow = true;
        let object = this;
        for (let step of variable) {
            object = object[step];
            if (object == undefined) {
                return;
            }
        }
        if (index == undefined) {
            propCheckbox.getInputElement().checked = Boolean(object);
        }
        else {
            propCheckbox.getInputElement().checked = Boolean(object[index]);
        }
    }
    updateTextEdit(div, label, variable, index) {
        for (let child of div.children) {
            if (child.textString == label) {
                if ((child).getInputElement() != document.activeElement) {
                    let object = this;
                    for (let step of variable) {
                        object = object[step];
                        if (object == undefined) {
                            return;
                        }
                    }
                    if (index == undefined) {
                        (child).getInputElement().value = object.toString();
                    }
                    else {
                        (child).getInputElement().value = object[index].toString();
                    }
                }
                else {
                    let val = parseFloat((child).getInputElement().value);
                    if (GameMachine_1.input.mouseRightClicked) {
                        let mouseChange = (GameMachine_1.input.mousePosition.x - GameMachine_1.input.mousePosition.previousX);
                        GameMachine_1.input.mousePosition.previousX = GameMachine_1.input.mousePosition.x;
                        if (GameMachine_1.input.keys["SHIFT"]) {
                            val += (mouseChange) * 0.01;
                        }
                        else {
                            val += (mouseChange) * 0.1;
                        }
                        val = Math.round(val * 100) / 100;
                        (child).getInputElement().value = val.toString();
                    }
                    let object = this;
                    let prev = null;
                    for (let step of variable) {
                        prev = object;
                        object = object[step];
                        if (object == undefined) {
                            return;
                        }
                    }
                    if (index == undefined && typeof (object) == "number") {
                        prev[variable[variable.length - 1]] = val;
                    }
                    else {
                        if (typeof (object[index]) == "number") {
                            object[index] = val;
                        }
                    }
                }
            }
        }
    }
    updateCheckbox(div, label, variable, index) {
        for (let child of div.children) {
            if (child.textString == label) {
                if ((child).getInputElement() != document.activeElement) {
                    let object = this;
                    for (let step of variable) {
                        object = object[step];
                        if (object == undefined) {
                            return;
                        }
                    }
                    if (index == undefined) {
                        (child).getInputElement().checked = Boolean(object);
                    }
                    else {
                        (child).getInputElement().checked = Boolean(object[index]);
                    }
                }
                else {
                    let val = (child).getInputElement().checked;
                    let object = this;
                    let prev = null;
                    for (let step of variable) {
                        prev = object;
                        object = object[step];
                        if (object == undefined) {
                            return;
                        }
                    }
                    if (index == undefined && typeof (object) == "boolean") {
                        prev[variable[variable.length - 1]] = val;
                    }
                    else {
                        if (typeof (object[index]) == "boolean") {
                            object[index] = val;
                        }
                    }
                }
            }
        }
    }
}
exports.Component = Component;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/GraphicsComponent.ts":
/*!*************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/GraphicsComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
const Game_1 = __webpack_require__(/*! ../../../Game/States/Game */ "./code/src/Game/States/Game.ts");
class GraphicsComponent extends Component_1.Component {
    constructor(object) {
        super(Component_1.ComponentTypeEnum.GRAPHICS);
        this.object = object;
    }
    destructor() {
        Game_1.default.getInstanceNoSa().rendering.scene.deleteGraphicsBundle(this.object);
    }
    updateGui(overlayRendering, parentDiv, objectPlacer) {
        for (let i = 1; i < parentDiv.children.length; i++) {
            if (parentDiv.children[i].textString == Component_1.ComponentTypeEnum[this.type]) {
                // Next should be a div that should hold the text edits
                if ((parentDiv.children[i + 1]).children.length == 0) {
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "EmissionR", ["object", "emissionColor"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "EmissionG", ["object", "emissionColor"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "EmissionB", ["object", "emissionColor"], 2);
                }
                else {
                    this.updateTextEdit(parentDiv.children[i + 1], "EmissionR", ["object", "emissionColor"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "EmissionG", ["object", "emissionColor"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "EmissionB", ["object", "emissionColor"], 2);
                }
            }
        }
    }
}
exports["default"] = GraphicsComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/MeshCollisionComponent.ts":
/*!******************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/MeshCollisionComponent.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
const Octree_1 = __webpack_require__(/*! ../../Objects/Octree */ "./code/src/Engine/Objects/Octree.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class MeshCollisionComponent extends Component_1.Component {
    constructor(octree, graphicsObject) {
        super(Component_1.ComponentTypeEnum.MESHCOLLISION);
        this.octree = octree;
        if (graphicsObject) {
            this.setup(graphicsObject, 0.1, 100);
        }
    }
    /**
     * Sets up the triangles based on the vertices in a graphics object
     * @param graphicsObj The graphics object
     */
    setup(graphicsObj, smallestNodeSizeMultiplicator, maxShapesPerNode) {
        let triangles = new Array();
        graphicsObj.setupTriangles(triangles);
        let minVec = gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity);
        let maxVec = gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity);
        for (let tri of triangles) {
            for (let vertex of tri.getTransformedVertices()) {
                gl_matrix_1.vec3.max(maxVec, maxVec, vertex);
                gl_matrix_1.vec3.min(minVec, minVec, vertex);
            }
        }
        this.octree = new Octree_1.default(minVec, maxVec, smallestNodeSizeMultiplicator, maxShapesPerNode);
        this.octree.addShapes(triangles);
        this.octree.prune();
    }
}
exports["default"] = MeshCollisionComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/MovementComponent.ts":
/*!*************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/MovementComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
class MovementComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.MOVEMENT);
        this.constantAcceleration = gl_matrix_1.vec3.fromValues(0.0, -9.8, 0.0);
        this.accelerationDirection = gl_matrix_1.vec3.create();
        this.acceleration = 6.0;
        this.velocity = gl_matrix_1.vec3.create();
        this.drag = 4.0;
        this.onGround = false;
        this.jumpPower = 5.0;
        this.jumpRequested = false;
        this.jumpAllowed = false;
        this.momentum = gl_matrix_1.quat.create();
    }
}
exports["default"] = MovementComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/PointLightComponent.ts":
/*!***************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/PointLightComponent.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Game_1 = __webpack_require__(/*! ../../../Game/States/Game */ "./code/src/Game/States/Game.ts");
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
class PointLightComponent extends Component_1.Component {
    constructor(pointLight) {
        super(Component_1.ComponentTypeEnum.POINTLIGHT);
        this.pointLight = pointLight;
        this.posOffset = gl_matrix_1.vec3.create();
    }
    destructor() {
        Game_1.default.getInstanceNoSa().rendering.scene.deletePointLight(this.pointLight);
    }
    updateGui(overlayRendering, parentDiv, objectPlacer) {
        for (let i = 1; i < parentDiv.children.length; i++) {
            if (parentDiv.children[i].textString == Component_1.ComponentTypeEnum[this.type]) {
                // Next should be a div that should hold the text edits
                if ((parentDiv.children[i + 1]).children.length == 0) {
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "R", ["pointLight", "colour"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "G", ["pointLight", "colour"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "B", ["pointLight", "colour"], 2);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosOffsetX", ["posOffset"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosOffsetY", ["posOffset"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosOffsetZ", ["posOffset"], 2);
                    this.addCheckbox(overlayRendering, parentDiv.children[i + 1], "CastShadow", ["pointLight", "castShadow"]);
                }
                else {
                    this.updateTextEdit(parentDiv.children[i + 1], "R", ["pointLight", "colour"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "G", ["pointLight", "colour"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "B", ["pointLight", "colour"], 2);
                    this.updateTextEdit(parentDiv.children[i + 1], "PosOffsetX", ["posOffset"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "PosOffsetY", ["posOffset"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "PosOffsetZ", ["posOffset"], 2);
                    this.updateCheckbox(parentDiv.children[i + 1], "CastShadow", ["pointLight", "castShadow"]);
                }
            }
        }
    }
}
exports["default"] = PointLightComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/Components/PositionComponent.ts":
/*!*************************************************************!*\
  !*** ./code/src/Engine/ECS/Components/PositionComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ./Component */ "./code/src/Engine/ECS/Components/Component.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class PositionComponent extends Component_1.Component {
    constructor(componentType) {
        super(componentType ? componentType : Component_1.ComponentTypeEnum.POSITION);
        this.position = gl_matrix_1.vec3.create();
        this.rotation = gl_matrix_1.quat.create();
        this.scale = gl_matrix_1.vec3.fromValues(1.0, 1.0, 1.0);
        this.origin = gl_matrix_1.vec3.create();
        this.matrix = gl_matrix_1.mat4.create();
    }
    calculateMatrix(matrix) {
        gl_matrix_1.mat4.translate(matrix, matrix, this.position);
        gl_matrix_1.mat4.multiply(matrix, matrix, gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), this.rotation));
        gl_matrix_1.mat4.scale(matrix, matrix, this.scale);
        gl_matrix_1.mat4.translate(matrix, matrix, gl_matrix_1.vec3.negate(gl_matrix_1.vec3.create(), this.origin));
    }
    updateGui(overlayRendering, parentDiv, objectPlacer) {
        for (let i = 1; i < parentDiv.children.length; i++) {
            if (parentDiv.children[i].textString == Component_1.ComponentTypeEnum[this.type]) {
                // Next should be a div that should hold the text edits
                if ((parentDiv.children[i + 1]).children.length == 0) {
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosX", ["position"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosY", ["position"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "PosZ", ["position"], 2);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "RotX", ["rotation"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "RotY", ["rotation"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "RotZ", ["rotation"], 2);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "RotW", ["rotation"], 3);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "ScaleX", ["scale"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "ScaleY", ["scale"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "ScaleZ", ["scale"], 2);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "OriginX", ["origin"], 0);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "OriginY", ["origin"], 1);
                    this.addTextEdit(overlayRendering, parentDiv.children[i + 1], "OriginZ", ["origin"], 2);
                }
                else {
                    this.updateTextEdit(parentDiv.children[i + 1], "PosX", ["position"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "PosY", ["position"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "PosZ", ["position"], 2);
                    this.updateTextEdit(parentDiv.children[i + 1], "RotX", ["rotation"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "RotY", ["rotation"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "RotZ", ["rotation"], 2);
                    this.updateTextEdit(parentDiv.children[i + 1], "RotW", ["rotation"], 3);
                    this.updateTextEdit(parentDiv.children[i + 1], "ScaleX", ["scale"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "ScaleY", ["scale"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "ScaleZ", ["scale"], 2);
                    this.updateTextEdit(parentDiv.children[i + 1], "OriginX", ["origin"], 0);
                    this.updateTextEdit(parentDiv.children[i + 1], "OriginY", ["origin"], 1);
                    this.updateTextEdit(parentDiv.children[i + 1], "OriginZ", ["origin"], 2);
                }
            }
        }
    }
}
exports["default"] = PositionComponent;


/***/ }),

/***/ "./code/src/Engine/ECS/ECSManager.ts":
/*!*******************************************!*\
  !*** ./code/src/Engine/ECS/ECSManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CollisionSystem_1 = __webpack_require__(/*! ./Systems/CollisionSystem */ "./code/src/Engine/ECS/Systems/CollisionSystem.ts");
const MovementSystem_1 = __webpack_require__(/*! ./Systems/MovementSystem */ "./code/src/Engine/ECS/Systems/MovementSystem.ts");
const GraphicsSystem_1 = __webpack_require__(/*! ./Systems/GraphicsSystem */ "./code/src/Engine/ECS/Systems/GraphicsSystem.ts");
const ParticleSpawnerSystem_1 = __webpack_require__(/*! ./Systems/ParticleSpawnerSystem */ "./code/src/Engine/ECS/Systems/ParticleSpawnerSystem.ts");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./code/src/Engine/ECS/Entity.ts");
const CameraFocusSystem_1 = __webpack_require__(/*! ./Systems/CameraFocusSystem */ "./code/src/Engine/ECS/Systems/CameraFocusSystem.ts");
const PositionMatrixUpdateSystem_1 = __webpack_require__(/*! ./Systems/PositionMatrixUpdateSystem */ "./code/src/Engine/ECS/Systems/PositionMatrixUpdateSystem.ts");
class ECSManager {
    constructor(rendering) {
        this.camera = rendering.camera;
        this.rendering = rendering;
        this.systems = new Map();
        this.entityCounter = 0;
        this.entities = new Array();
        this.entityAdditionQueue = new Array();
        this.entityDeletionQueue = new Array();
        this.componentAdditionQueue = new Array();
        this.componentRemovalQueue = new Array();
        this.initializeSystems();
    }
    initializeSystems() {
        this.systems.set("COLLISION", new CollisionSystem_1.default());
        this.systems.set("MOVEMENT", new MovementSystem_1.default());
        this.systems.set("POSITIONMATRIXUPDATE", new PositionMatrixUpdateSystem_1.default());
        this.systems.set("GRAPHICS", new GraphicsSystem_1.default());
        this.systems.set("PARTICLE", new ParticleSpawnerSystem_1.default());
        this.systems.set("CAMERAFOCUS", new CameraFocusSystem_1.default(this.rendering.camera));
    }
    update(dt) {
        // Add new entities
        this.addQueuedEntities();
        // For all entities, remove/add components
        // Remove/add entities from systems
        this.addQueuedComponents();
        this.removeComponents();
        this.removeEntitiesMarkedForDeletion();
        this.systems.get("MOVEMENT").update(dt);
        this.systems.get("POSITIONMATRIXUPDATE").update(dt);
        this.systems.get("GRAPHICS").update(dt);
        this.systems.get("COLLISION").update(dt);
    }
    updateRenderingSystems(dt, updateCameraFocus = true) {
        this.systems.get("PARTICLE").update(dt);
        if (updateCameraFocus) {
            this.systems.get("CAMERAFOCUS").update(dt);
        }
    }
    createEntity() {
        const length = this.entityAdditionQueue.push(new Entity_1.default(this.entityCounter++));
        return this.entityAdditionQueue[length - 1];
    }
    addComponent(entity, component) {
        this.componentAdditionQueue.push({ entity, component });
    }
    removeEntity(entityID) {
        if (this.getEntity(entityID)) {
            this.entityDeletionQueue.push(entityID);
            for (const comp of this.getEntity(entityID).components) {
                this.removeComponent(this.getEntity(entityID), comp.type);
            }
        }
    }
    removeComponent(entity, componentType) {
        this.componentRemovalQueue.push({ entity, componentType });
    }
    getEntity(entityID) {
        for (const entity of this.entities) {
            if (entity.id == entityID) {
                return entity;
            }
        }
        return null;
    }
    getSystem(type) {
        return this.systems.get(type);
    }
    // Private
    addQueuedEntities() {
        for (const newEntity of this.entityAdditionQueue) {
            // Add to manager
            const length = this.entities.push(newEntity);
            // Add to systems
            for (let system of this.systems) {
                system[1].addEntity(this.entities[length - 1]);
            }
        }
        // Empty queue
        this.entityAdditionQueue.length = 0;
    }
    addQueuedComponents() {
        for (const compEntityPair of this.componentAdditionQueue) {
            // If enitity does not already have component, proceed
            if (!compEntityPair.entity.hasComponent(compEntityPair.component.type)) {
                compEntityPair.entity.components.push(compEntityPair.component);
                for (let system of this.systems) {
                    // If entity is not already belonging to the system, try and add it
                    if (!system[1].containsEntity(compEntityPair.entity.id)) {
                        system[1].addEntity(compEntityPair.entity);
                    }
                }
            }
        }
        // Empty queue
        this.componentAdditionQueue.length = 0;
    }
    removeEntitiesMarkedForDeletion() {
        for (let entityId of this.entityDeletionQueue) {
            // Delete in systems
            for (let system of this.systems) {
                system[1].removeEntity(entityId);
            }
            // Delete in manager
            let index = this.entities.findIndex((e) => e.id == entityId);
            if (index != -1) {
                this.entities.splice(index, 1);
            }
        }
        // Empty queue
        this.entityDeletionQueue.length = 0;
    }
    removeComponents() {
        for (const compEntityPair of this.componentRemovalQueue) {
            // Remove component from entity
            let index = compEntityPair.entity.components.findIndex((c) => c.type == compEntityPair.componentType);
            if (index != -1) {
                compEntityPair.entity.components[index].destructor();
                compEntityPair.entity.components.splice(index, 1);
            }
            // Remove entity from system if it no longer lives up to the requirements of being in the system
            for (let system of this.systems) {
                system[1].removeFaultyEntity(compEntityPair.entity.id);
            }
        }
        // Empty queue
        this.componentRemovalQueue.length = 0;
    }
}
exports["default"] = ECSManager;


/***/ }),

/***/ "./code/src/Engine/ECS/Entity.ts":
/*!***************************************!*\
  !*** ./code/src/Engine/ECS/Entity.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Entity {
    constructor(id) {
        this.id = id;
        this.components = new Array();
    }
    hasComponent(type) {
        return this.components.some((c) => c.type == type);
    }
    getComponent(type) {
        return this.components.find((c) => c.type == type);
    }
}
exports["default"] = Entity;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/CameraFocusSystem.ts":
/*!**********************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/CameraFocusSystem.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class CameraFocusSystem extends System_1.default {
    constructor(camera) {
        super([Component_1.ComponentTypeEnum.POSITION, Component_1.ComponentTypeEnum.CAMERAFOCUS]);
        this.camera = camera;
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (!posComp) {
                posComp = e.getComponent(Component_1.ComponentTypeEnum.POSITION);
            }
            let camFocusComp = (e.getComponent(Component_1.ComponentTypeEnum.CAMERAFOCUS));
            let tempMatrix = gl_matrix_1.mat4.create();
            posComp.calculateMatrix(tempMatrix);
            let camPosVector = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create(), tempMatrix);
            let camPos = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camPosVector, camFocusComp.focusPoint), camFocusComp.offset);
            this.camera.setPosition(camPos);
            this.camera.setDir(gl_matrix_1.vec3.negate(gl_matrix_1.vec3.create(), camFocusComp.offset));
        }
    }
}
exports["default"] = CameraFocusSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/CollisionSystem.ts":
/*!********************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/CollisionSystem.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const IntersectionTester_1 = __webpack_require__(/*! ../../Physics/IntersectionTester */ "./code/src/Engine/Physics/IntersectionTester.ts");
const CollisionSolver_1 = __webpack_require__(/*! ../../Physics/CollisionSolver */ "./code/src/Engine/Physics/CollisionSolver.ts");
const Triangle_1 = __webpack_require__(/*! ../../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class CollisionSystem extends System_1.default {
    constructor() {
        super([
            Component_1.ComponentTypeEnum.COLLISION,
            Component_1.ComponentTypeEnum.BOUNDINGBOX,
            Component_1.ComponentTypeEnum.POSITION,
        ]);
        // Optional MESHCOLLISION, MOVEMENT
        this.lastCollisionPoint = gl_matrix_1.vec3.create();
    }
    update(dt) {
        let information = new Array();
        // First update the bounding box for all entities that are not static
        for (let e of this.entities) {
            let collisionComp = (e.getComponent(Component_1.ComponentTypeEnum.COLLISION));
            if (collisionComp.isStatic) {
                continue;
            }
            let bbComp = (e.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX));
            bbComp.updateTransformMatrix();
            let movComp = (e.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
            if (movComp) {
                movComp.onGround = false;
            }
        }
        // Now do collisions
        for (let i = 0; i < this.entities.length; i++) {
            const e1 = this.entities[i];
            let e1CollisionComp = (e1.getComponent(Component_1.ComponentTypeEnum.COLLISION));
            let e1BoundingBoxComp = (e1.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX));
            let e1MeshCollisionComp = (e1.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION));
            for (let j = i + 1; j < this.entities.length; j++) {
                const e2 = this.entities[j];
                if (e1.id == e2.id) {
                    // Don't collide with self
                    continue;
                }
                let e2CollisionComp = (e2.getComponent(Component_1.ComponentTypeEnum.COLLISION));
                if ((e1CollisionComp.isStatic || e1CollisionComp.isImmovable) && (e2CollisionComp.isStatic || e2CollisionComp.isImmovable)) {
                    continue;
                }
                let e2BoundingBoxComp = (e2.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX));
                let e2MeshCollisionComp = (e2.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION));
                information.length = 0;
                if (e1MeshCollisionComp || e2MeshCollisionComp) {
                    // At least one of the entities have mesh collision
                    // Start by checking bounding boxes, but don't save information
                    if (IntersectionTester_1.IntersectionTester.identifyIntersection([e1BoundingBoxComp.boundingBox], [e2BoundingBoxComp.boundingBox])) {
                        let e1ShapeArray = new Array();
                        let e2ShapeArray = new Array();
                        if (e1MeshCollisionComp) {
                            // Entity 1 has mesh collision, check e2 bb versus e1 mesh octree
                            // By first giving e2 bb inverse matrix of e1 matrix
                            e2BoundingBoxComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), e1BoundingBoxComp.boundingBox.getTransformMatrix()));
                            // Then check against mesh octree (now in e1 local coords)
                            let localE1ShapeArray = new Array();
                            e1MeshCollisionComp.octree.getShapesForCollision(e2BoundingBoxComp.boundingBox, localE1ShapeArray);
                            // Reset the inverse matrix
                            e2BoundingBoxComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.create());
                            // Apply actual matrices on the resulting shape array (only triangles since this is a mesh)
                            for (let shape of localE1ShapeArray) {
                                let index = e1ShapeArray.push(new Triangle_1.default()) - 1;
                                let shapeOriginalVertices = shape.getOriginalVertices();
                                e1ShapeArray[index].setVertices(shapeOriginalVertices[0], shapeOriginalVertices[1], shapeOriginalVertices[2]);
                                e1ShapeArray[index].setTransformMatrix(e1BoundingBoxComp.boundingBox.getTransformMatrix());
                            }
                        }
                        else {
                            // Entity 1 does not have mesh collision, use the bounding box for intersection testing
                            e1ShapeArray.push(e1BoundingBoxComp.boundingBox);
                        }
                        if (e2MeshCollisionComp) {
                            // Entity 2 has mesh collision, check e1 bb versus e2 mesh octree
                            // By first giving e1 bb inverse matrix of e2 matrix
                            e1BoundingBoxComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), e2BoundingBoxComp.boundingBox.getTransformMatrix()));
                            // Then get the shapes from the octree (now in e2 local coords)
                            let localE2ShapeArray = new Array();
                            e2MeshCollisionComp.octree.getShapesForCollision(e1BoundingBoxComp.boundingBox, localE2ShapeArray);
                            // Reset the inverse matrix
                            e1BoundingBoxComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.create());
                            // Apply actual matrices on the resulting shape array (only triangles since this is a mesh)
                            for (let shape of localE2ShapeArray) {
                                let index = e2ShapeArray.push(new Triangle_1.default()) - 1;
                                let shapeOriginalVertices = shape.getOriginalVertices();
                                e2ShapeArray[index].setVertices(shapeOriginalVertices[0], shapeOriginalVertices[1], shapeOriginalVertices[2]);
                                e2ShapeArray[index].setTransformMatrix(e2BoundingBoxComp.boundingBox.getTransformMatrix());
                            }
                        }
                        else {
                            // Entity 2 does not have mesh collision, use the bounding box for intersection testing
                            e2ShapeArray.push(e2BoundingBoxComp.boundingBox);
                        }
                        // We now have our updated shape arrays to intersection test, let's do it!
                        IntersectionTester_1.IntersectionTester.identifyIntersectionInformation(e1ShapeArray, e2ShapeArray, information);
                    }
                }
                else {
                    // None of the entities have mesh collision, do collision with bounding boxes, and save information
                    IntersectionTester_1.IntersectionTester.identifyIntersectionInformation([e1BoundingBoxComp.boundingBox], [e2BoundingBoxComp.boundingBox], information);
                }
                if (information.length > 0) {
                    CollisionSolver_1.CollisionSolver.handleCollision(information, e1, e2);
                    if (e1CollisionComp.isDynamic || e2CollisionComp.isDynamic) {
                        gl_matrix_1.vec3.copy(this.lastCollisionPoint, information[0].point);
                    }
                }
            }
        }
    }
}
exports["default"] = CollisionSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/GraphicsSystem.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/GraphicsSystem.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const ESCUtils_1 = __webpack_require__(/*! ../../Utils/ESCUtils */ "./code/src/Engine/Utils/ESCUtils.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class GraphicsSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION]);
        // Optional ComponentTypeEnum.GRAPHICS, ComponentTypeEnum.POINTLIGHT, ComponentTypeEnun.POSITIONPARENT
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
            let graphComp = (e.getComponent(Component_1.ComponentTypeEnum.GRAPHICS));
            let posParentComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (graphComp && posComp) {
                gl_matrix_1.mat4.identity(graphComp.object.modelMatrix);
                if (posParentComp) {
                    posParentComp.calculateMatrix(graphComp.object.modelMatrix);
                    gl_matrix_1.mat4.copy(posParentComp.matrix, graphComp.object.modelMatrix);
                }
                posComp.calculateMatrix(graphComp.object.modelMatrix);
            }
            let pointLightComp = (e.getComponent(Component_1.ComponentTypeEnum.POINTLIGHT));
            if (pointLightComp && (posComp || posParentComp)) {
                gl_matrix_1.vec3.add(pointLightComp.pointLight.position, ESCUtils_1.ECSUtils.CalculatePosition(e), pointLightComp.posOffset);
            }
        }
    }
}
exports["default"] = GraphicsSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/MovementSystem.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/MovementSystem.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class MovementSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION, Component_1.ComponentTypeEnum.MOVEMENT]);
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (posComp == undefined) {
                posComp = e.getComponent(Component_1.ComponentTypeEnum.POSITION);
            }
            let movComp = (e.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
            let oldVel = gl_matrix_1.vec3.clone(movComp.velocity);
            // Do movement calculations
            gl_matrix_1.vec3.add(movComp.velocity, movComp.velocity, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), movComp.accelerationDirection, movComp.acceleration * dt));
            gl_matrix_1.vec3.add(movComp.velocity, movComp.velocity, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), movComp.constantAcceleration, dt));
            movComp.jumpAllowed = movComp.jumpAllowed || movComp.onGround;
            if (movComp.jumpAllowed && movComp.jumpRequested) {
                movComp.velocity[1] = movComp.jumpPower;
                movComp.onGround = false;
                movComp.jumpRequested = false;
                movComp.jumpAllowed = false;
            }
            //Drag
            let dragVec = gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), movComp.velocity, -1.0);
            dragVec[1] = 0.0;
            let magnitude = gl_matrix_1.vec3.len(dragVec);
            gl_matrix_1.vec3.add(movComp.velocity, movComp.velocity, gl_matrix_1.vec3.scale(dragVec, gl_matrix_1.vec3.normalize(dragVec, dragVec), Math.min(movComp.drag * dt, magnitude)));
            //stop if velocity is too slow
            const accelerating = movComp.accelerationDirection[0] != 0.0 ||
                movComp.accelerationDirection[2] != 0.0;
            if (!accelerating && gl_matrix_1.vec3.sqrLen(movComp.velocity) < 0.001) {
                gl_matrix_1.vec3.scale(movComp.velocity, movComp.velocity, 0.0);
            }
            let displacement = gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), movComp.velocity, oldVel), 0.5 * dt);
            if (Math.abs(displacement[0]) > 0.001) {
                posComp.position[0] += displacement[0];
            }
            if (Math.abs(displacement[1]) > 0.001) {
                posComp.position[1] += displacement[1];
            }
            if (Math.abs(displacement[2]) > 0.001) {
                posComp.position[2] += displacement[2];
            }
            gl_matrix_1.vec3.set(movComp.accelerationDirection, 0.0, 0.0, 0.0);
            gl_matrix_1.quat.slerp(posComp.rotation, posComp.rotation, gl_matrix_1.quat.mul(gl_matrix_1.quat.create(), posComp.rotation, movComp.momentum), dt);
        }
    }
}
exports["default"] = MovementSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/ParticleSpawnerSystem.ts":
/*!**************************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/ParticleSpawnerSystem.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const ESCUtils_1 = __webpack_require__(/*! ../../Utils/ESCUtils */ "./code/src/Engine/Utils/ESCUtils.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class ParticleSpawnerSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.PARTICLESPAWNER]);
    }
    update(dt) {
        for (const e of this.entities) {
            let particleComp = (e.getComponent(Component_1.ComponentTypeEnum.PARTICLESPAWNER));
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (posComp == undefined) {
                posComp = e.getComponent(Component_1.ComponentTypeEnum.POSITION);
            }
            if (particleComp) {
                let currentParticle = Math.floor((particleComp.resetTimer / Math.max(particleComp.lifeTime, 0.00001)) *
                    particleComp.particleSpawner.getNumberOfParticles());
                particleComp.resetTimer += dt;
                let endParticle = Math.floor((particleComp.resetTimer / Math.max(particleComp.lifeTime, 0.00001)) *
                    particleComp.particleSpawner.getNumberOfParticles());
                for (currentParticle; currentParticle < endParticle; currentParticle++) {
                    particleComp.particleSpawner.resetParticleStartTime(currentParticle %
                        particleComp.particleSpawner.getNumberOfParticles());
                    if (posComp) {
                        particleComp.particleSpawner.setParticleStartPosition(currentParticle %
                            particleComp.particleSpawner.getNumberOfParticles(), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), ESCUtils_1.ECSUtils.CalculatePosition(e), particleComp.offset));
                    }
                }
                if (particleComp.resetTimer > particleComp.lifeTime) {
                    particleComp.resetTimer -= particleComp.lifeTime;
                }
            }
        }
    }
}
exports["default"] = ParticleSpawnerSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/PositionMatrixUpdateSystem.ts":
/*!*******************************************************************!*\
  !*** ./code/src/Engine/ECS/Systems/PositionMatrixUpdateSystem.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const System_1 = __webpack_require__(/*! ./System */ "./code/src/Engine/ECS/Systems/System.ts");
const Component_1 = __webpack_require__(/*! ../Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class PositionMatrixUpdateSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION]);
    }
    update(dt) {
        for (const e of this.entities) {
            // TODO: Add locic for position parent if that is ever needed. Or redo the whole position parent thing because it is not very nice to work with.
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
            gl_matrix_1.mat4.identity(posComp.matrix);
            posComp.calculateMatrix(posComp.matrix);
        }
    }
}
exports["default"] = PositionMatrixUpdateSystem;


/***/ }),

/***/ "./code/src/Engine/ECS/Systems/System.ts":
/*!***********************************************!*\
  !*** ./code/src/Engine/ECS/Systems/System.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class System {
    constructor(componentTypes) {
        this.requiredComponents = componentTypes;
        this.entities = new Array();
    }
    entityHasCorrectComponents(entity) {
        for (const type of this.requiredComponents) {
            if (!entity.hasComponent(type)) {
                return false;
            }
        }
        return true;
    }
    addEntity(entity) {
        if (this.entityHasCorrectComponents(entity)) {
            this.entities.push(entity);
            return true;
        }
        return false;
    }
    containsEntity(entityId) {
        return this.entities.some((c) => c.id == entityId);
    }
    removeFaultyEntity(entityId) {
        const index = this.entities.findIndex((c) => c.id == entityId);
        if (index != -1) {
            if (!this.entityHasCorrectComponents(this.entities[index])) {
                this.entities.splice(index, 1);
            }
        }
    }
    removeEntity(entityId) {
        const index = this.entities.findIndex((c) => c.id == entityId);
        if (index != -1) {
            this.entities.splice(index, 1);
        }
    }
    update(dt) {
        // Pure virtual possible?
    }
}
exports["default"] = System;


/***/ }),

/***/ "./code/src/Engine/Input/Input.ts":
/*!****************************************!*\
  !*** ./code/src/Engine/Input/Input.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const TextObject2D_1 = __webpack_require__(/*! ../Rendering/GUI/Objects/Text/TextObject2D */ "./code/src/Engine/Rendering/GUI/Objects/Text/TextObject2D.ts");
class Input {
    constructor() {
        this.keys = [];
        this.buttons = new Map();
        this.gamepads = new Array();
        this.mousePosition = { x: 0, y: 0, previousX: 0, previousY: 0 };
        this.mousePositionOnCanvas = { x: 0, y: 0, previousX: 0, previousY: 0 };
        this.mouseClicked = false;
        this.mouseRightClicked = false;
        this.mouseMovementSinceLast = gl_matrix_1.vec2.create();
        this.simulateTouchBasedOnMouse = false;
        this.touchUsed = false;
        //----Controls----
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values <-- for key codes
        let self = this;
        document.addEventListener("keydown", function (event) {
            self.keys[event.key.toUpperCase()] = true;
            self.touchUsed = false;
        });
        document.addEventListener("keyup", function (event) {
            self.keys[event.key.toUpperCase()] = false;
            self.touchUsed = false;
        });
        document.addEventListener("mousemove", function (event) {
            self.mouseMoveCallBack(event);
            self.mouseMovementSinceLast[0] += event.movementX;
            self.mouseMovementSinceLast[1] += event.movementY;
            self.mousePosition = {
                x: event.clientX,
                y: event.clientY,
                previousX: self.mousePosition.x,
                previousY: self.mousePosition.y,
            };
            self.mousePositionOnCanvas = {
                x: self.mousePosition.x - main_1.windowInfo.paddingX,
                y: self.mousePosition.y - main_1.windowInfo.paddingY,
                previousX: self.mousePositionOnCanvas.x,
                previousY: self.mousePositionOnCanvas.y,
            };
            if (self.simulateTouchBasedOnMouse && self.mouseClicked) {
                self.handleTouch([event]);
            }
        });
        document.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
                self.mouseClicked = true;
                if (self.simulateTouchBasedOnMouse) {
                    self.handleTouch([event]);
                }
            }
            else if (event.button == 2) {
                self.mouseRightClicked = true;
            }
        });
        document.addEventListener("mouseup", (event) => {
            if (event.button == 0) {
                self.mouseClicked = false;
                if (self.simulateTouchBasedOnMouse) {
                    self.handleTouch([]);
                }
            }
            else if (event.button == 2) {
                self.mouseRightClicked = false;
            }
        });
        document.addEventListener("touchstart", function (event) {
            self.handleTouch(event.touches);
        });
        document.addEventListener("touchmove", function (event) {
            event.preventDefault();
            self.handleTouch(event.touches);
        });
        document.addEventListener("touchend", function (event) {
            self.handleTouch(event.touches);
        });
        //----------------
        this.joystickLeftDirection = gl_matrix_1.vec2.create();
        this.joystickRightDirection = gl_matrix_1.vec2.create();
        this.repositionTouchControls = false;
        this.joystickLeftRadius = 0.1; // 10 % of the width
        this.joystickRightRadius = 0.1; // 10 % of the width
        this.screenAspectRatio = 16 / 9;
        this.joystickLeftBorder = new TextObject2D_1.default();
        this.joystickLeftBorder.center = true;
        this.joystickLeftBorder.scaleWithWindow = true;
        this.joystickLeftBorder.position = gl_matrix_1.vec2.fromValues(0.15, 0.8);
        this.joystickLeftBorder.size = 1920 * this.joystickLeftRadius * 2.0;
        this.joystickLeftBorder.textString = "⊕";
        this.joystickLeftBorder.getElement().style.opacity = "50%";
        this.joystickLeftBorder.setHidden(true);
        this.joystickLeftCenter = new TextObject2D_1.default();
        this.joystickLeftCenter.center = true;
        this.joystickLeftCenter.scaleWithWindow = true;
        gl_matrix_1.vec2.copy(this.joystickLeftCenter.position, this.joystickLeftBorder.position);
        this.joystickLeftCenter.size = 1920 * this.joystickLeftRadius;
        this.joystickLeftCenter.textString = "⚫";
        this.joystickLeftCenter.getElement().style.opacity = "50%";
        this.joystickLeftCenter.getElement().style.color = "red";
        this.joystickLeftCenter.setHidden(true);
        this.joystickRightBorder = new TextObject2D_1.default();
        this.joystickRightBorder.center = true;
        this.joystickRightBorder.scaleWithWindow = true;
        this.joystickRightBorder.position = gl_matrix_1.vec2.fromValues(0.85, 0.8);
        this.joystickRightBorder.size = 1920 * this.joystickRightRadius * 2.0;
        this.joystickRightBorder.textString = "⊕";
        this.joystickRightBorder.getElement().style.opacity = "50%";
        this.joystickRightBorder.setHidden(true);
        this.joystickRightCenter = new TextObject2D_1.default();
        this.joystickRightCenter.center = true;
        this.joystickRightCenter.scaleWithWindow = true;
        gl_matrix_1.vec2.copy(this.joystickRightCenter.position, this.joystickRightBorder.position);
        this.joystickRightCenter.size = 1920 * this.joystickRightRadius;
        this.joystickRightCenter.textString = "⚫";
        this.joystickRightCenter.getElement().style.opacity = "50%";
        this.joystickRightCenter.getElement().style.color = "red";
        this.joystickRightCenter.setHidden(true);
        this.buttonRadius = 0.05; // 5 % of the width
        this.aButton = new TextObject2D_1.default();
        this.aButton.center = true;
        this.aButton.scaleWithWindow = true;
        this.aButton.position[0] = 0.65;
        this.aButton.position[1] = 0.8;
        this.aButton.size = 1920 * this.buttonRadius * 2.0;
        this.aButton.textString = "🔴";
        this.aButton.getElement().style.opacity = "50%";
        this.aButton.setHidden(true);
        this.bButton = new TextObject2D_1.default();
        this.bButton.center = true;
        this.bButton.scaleWithWindow = true;
        this.bButton.position[0] = 0.75;
        this.bButton.position[1] = 0.55;
        this.bButton.size = 1920 * this.buttonRadius * 2.0;
        this.bButton.textString = "🔵";
        this.bButton.getElement().style.opacity = "50%";
        this.bButton.setHidden(true);
    }
    mouseMoveCallBack(event) {
        // Overload this if you want direct controll of the events
    }
    handleTouch(touches) {
        this.touchUsed = true;
        let joystickLeftBeingUsed = this.joystickLeftDirection[0] != 0.0 ||
            this.joystickLeftDirection[1] != 0.0;
        this.joystickLeftDirection[0] = 0.0;
        this.joystickLeftDirection[1] = 0.0;
        let joystickRightBeingUsed = this.joystickRightDirection[0] != 0.0 ||
            this.joystickRightDirection[1] != 0.0;
        this.joystickRightDirection[0] = 0.0;
        this.joystickRightDirection[1] = 0.0;
        for (const key of this.buttons.keys()) {
            this.buttons.set(key, false);
        }
        var paddingX = main_1.windowInfo.paddingX;
        var paddingY = main_1.windowInfo.paddingY;
        let width = main_1.windowInfo.resolutionWidth;
        let height = main_1.windowInfo.resolutionHeight;
        let joystickLeftRadiusInPixels = width * this.joystickLeftRadius;
        let joystickLeftCenter = gl_matrix_1.vec2.fromValues(paddingX + width * this.joystickLeftBorder.position[0], paddingY + height * this.joystickLeftBorder.position[1]); // In pixels
        let joystickRightRadiusInPixels = width * this.joystickRightRadius;
        let joystickRightCenter = gl_matrix_1.vec2.fromValues(paddingX + width * this.joystickRightBorder.position[0], paddingY + height * this.joystickRightBorder.position[1]); // In pixels
        let aButtonCenter = gl_matrix_1.vec2.fromValues(paddingX + width * this.aButton.position[0], paddingY + height * this.aButton.position[1]); // In pixels
        let bButtonCenter = gl_matrix_1.vec2.fromValues(paddingX + width * this.bButton.position[0], paddingY + height * this.bButton.position[1]); // In pixels
        for (let touch of touches) {
            let touchPos = gl_matrix_1.vec2.fromValues(touch.clientX, touch.clientY);
            // Handle touches not related to joystickLeft here, break if they are fulfilled
            if (gl_matrix_1.vec2.dist(touchPos, aButtonCenter) <
                this.buttonRadius * width) {
                if (this.repositionTouchControls) {
                    this.aButton.position[0] = (touchPos[0] - paddingX) / width;
                    this.aButton.position[1] = (touchPos[1] - paddingY) / height;
                }
                else {
                    this.buttons.set("A", true);
                }
                continue;
            }
            if (gl_matrix_1.vec2.dist(touchPos, bButtonCenter) <
                this.buttonRadius * width) {
                if (this.repositionTouchControls) {
                    this.bButton.position[0] = (touchPos[0] - paddingX) / width;
                    this.bButton.position[1] = (touchPos[1] - paddingY) / height;
                }
                else {
                    this.buttons.set("B", true);
                }
                continue;
            }
            // Handle joystickLeft
            let joystickLeftDistanceFromCenter = gl_matrix_1.vec2.subtract(gl_matrix_1.vec2.create(), touchPos, joystickLeftCenter);
            // If the joystickLeft was being used already, allow movement on the left size of the screen, otherwise allow movement within the joystickLeft border
            if ((joystickLeftBeingUsed ||
                gl_matrix_1.vec2.len(joystickLeftDistanceFromCenter) < joystickLeftRadiusInPixels) &&
                touchPos[0] < paddingX + width * 0.5) {
                if (this.repositionTouchControls) {
                    this.joystickLeftBorder.position[0] = (touchPos[0] - paddingX) / width;
                    this.joystickLeftBorder.position[1] = (touchPos[1] - paddingY) / height;
                }
                else {
                    this.joystickLeftDirection[0] =
                        joystickLeftDistanceFromCenter[0] / joystickLeftRadiusInPixels;
                    this.joystickLeftDirection[1] =
                        joystickLeftDistanceFromCenter[1] / joystickLeftRadiusInPixels;
                }
            }
            // Handle joystickRight
            let joystickRightDistanceFromCenter = gl_matrix_1.vec2.subtract(gl_matrix_1.vec2.create(), touchPos, joystickRightCenter);
            // If the joystickRight was being used already, allow movement on the left size of the screen, otherwise allow movement within the joystickRight border
            if ((joystickRightBeingUsed ||
                gl_matrix_1.vec2.len(joystickRightDistanceFromCenter) <
                    joystickRightRadiusInPixels) &&
                touchPos[0] > paddingX + width * 0.5) {
                if (this.repositionTouchControls) {
                    this.joystickRightBorder.position[0] = (touchPos[0] - paddingX) / width;
                    this.joystickRightBorder.position[1] =
                        (touchPos[1] - paddingY) / height;
                }
                else {
                    this.joystickRightDirection[0] =
                        joystickRightDistanceFromCenter[0] / joystickRightRadiusInPixels;
                    this.joystickRightDirection[1] =
                        joystickRightDistanceFromCenter[1] / joystickRightRadiusInPixels;
                }
            }
        }
    }
    getMouseMovement() {
        let diff = gl_matrix_1.vec2.clone(this.mouseMovementSinceLast);
        gl_matrix_1.vec2.set(this.mouseMovementSinceLast, 0.0, 0.0);
        return diff;
    }
    updateGamepad() {
        if (window.isSecureContext) {
            this.gamepads = navigator.getGamepads();
            for (const gp of this.gamepads) {
                if (!gp) {
                    continue;
                }
                this.touchUsed = false;
                if (Math.abs(gp.axes[0]) > 0.1) {
                    this.joystickLeftDirection[0] = gp.axes[0];
                }
                else {
                    this.joystickLeftDirection[0] = 0.0;
                }
                if (Math.abs(gp.axes[1]) > 0.1) {
                    this.joystickLeftDirection[1] = gp.axes[1];
                }
                else {
                    this.joystickLeftDirection[1] = 0.0;
                }
                this.touchUsed = false;
                if (Math.abs(gp.axes[2]) > 0.1) {
                    this.joystickRightDirection[0] = gp.axes[2];
                }
                else {
                    this.joystickRightDirection[0] = 0.0;
                }
                if (Math.abs(gp.axes[3]) > 0.1) {
                    this.joystickRightDirection[1] = gp.axes[3];
                }
                else {
                    this.joystickRightDirection[1] = 0.0;
                }
                for (const key of this.buttons.keys()) {
                    this.buttons.set(key, false);
                }
                if (gp.buttons[0].value > 0.5) {
                    this.buttons.set("A", true);
                    console.log("Pressed A");
                }
                if (gp.buttons[1].value > 0.5) {
                    this.buttons.set("B", true);
                    console.log("Pressed B");
                }
            }
        }
    }
    drawTouchControls() {
        this.joystickLeftBorder.setHidden(!this.touchUsed);
        this.joystickLeftCenter.setHidden(!this.touchUsed);
        this.joystickRightBorder.setHidden(!this.touchUsed);
        this.joystickRightCenter.setHidden(!this.touchUsed);
        this.aButton.setHidden(!this.touchUsed);
        this.bButton.setHidden(!this.touchUsed);
        if (this.touchUsed) {
            this.joystickLeftCenter.position[0] =
                this.joystickLeftBorder.position[0] +
                    this.joystickLeftDirection[0] * this.joystickLeftRadius;
            this.joystickLeftCenter.position[1] =
                this.joystickLeftBorder.position[1] +
                    this.joystickLeftDirection[1] *
                        (this.joystickLeftRadius * this.screenAspectRatio) -
                    0.01;
            this.joystickRightCenter.position[0] =
                this.joystickRightBorder.position[0] +
                    this.joystickRightDirection[0] * this.joystickRightRadius;
            this.joystickRightCenter.position[1] =
                this.joystickRightBorder.position[1] +
                    this.joystickRightDirection[1] *
                        (this.joystickRightRadius * this.screenAspectRatio) -
                    0.01;
            this.joystickLeftBorder.draw();
            this.joystickLeftCenter.draw();
            this.joystickRightBorder.draw();
            this.joystickRightCenter.draw();
            this.aButton.draw();
            this.bButton.draw();
        }
    }
}
exports["default"] = Input;


/***/ }),

/***/ "./code/src/Engine/Maths/MousePicking.ts":
/*!***********************************************!*\
  !*** ./code/src/Engine/Maths/MousePicking.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MousePicking = void 0;
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GameMachine_1 = __webpack_require__(/*! ../../Game/GameMachine */ "./code/src/Game/GameMachine.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const Ray_1 = __webpack_require__(/*! ../Physics/Shapes/Ray */ "./code/src/Engine/Physics/Shapes/Ray.ts");
var MousePicking;
(function (MousePicking) {
    function GetRay(camera) {
        let ndc = gl_matrix_1.vec2.fromValues(GameMachine_1.input.mousePositionOnCanvas.x, GameMachine_1.input.mousePositionOnCanvas.y);
        ndc[0] = (ndc[0] / main_1.windowInfo.resolutionWidth - 0.5) * 2.0;
        ndc[1] = (ndc[1] / main_1.windowInfo.resolutionHeight - 0.5) * -2.0;
        let mouseRayClip = gl_matrix_1.vec4.fromValues(ndc[0], ndc[1], -1.0, 1.0);
        let mouseRayCamera = gl_matrix_1.vec4.transformMat4(gl_matrix_1.vec4.create(), mouseRayClip, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), camera.getProjectionMatrix()));
        mouseRayCamera[2] = -1.0;
        mouseRayCamera[3] = 0.0;
        let mouseRayWorld4D = gl_matrix_1.vec4.transformMat4(gl_matrix_1.vec4.create(), mouseRayCamera, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), camera.getViewMatrix()));
        let dir = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(mouseRayWorld4D[0], mouseRayWorld4D[1], mouseRayWorld4D[2]));
        let ray = new Ray_1.default();
        ray.setDir(dir);
        ray.setStart(gl_matrix_1.vec3.clone(camera.getPosition()));
        return ray;
    }
    MousePicking.GetRay = GetRay;
})(MousePicking = exports.MousePicking || (exports.MousePicking = {}));


/***/ }),

/***/ "./code/src/Engine/Maths/SAT.ts":
/*!**************************************!*\
  !*** ./code/src/Engine/Maths/SAT.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SAT = void 0;
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
var SAT;
(function (SAT) {
    /**
     * Finds how big of an overlap there is between two sets of points along a vector.
     * @param overlapVector The vector to test along.
     * @param shapeAVertices Points in set A
     * @param shapeBVertices Points in set B
     * @param reverse An object holding a variable "value" that is set to true if the vector should be flipped in order to have the vector point from dataset B towards dataset A.
     * Is set by this function.
     * @returns How big the overlap is, returns -1.0 if there is no overlap.
     */
    function getOverlap(overlapVector, shapeAVertices, shapeBVertices, reverse, margin) {
        let maxA = gl_matrix_1.vec3.dot(overlapVector, shapeAVertices[0]);
        let minA = maxA;
        let maxB = gl_matrix_1.vec3.dot(overlapVector, shapeBVertices[0]);
        let minB = maxB;
        let tempDot = 0.0;
        for (let i = 1; i < shapeAVertices.length; i++) {
            tempDot = gl_matrix_1.vec3.dot(overlapVector, shapeAVertices[i]);
            minA = Math.min(tempDot, minA);
            maxA = Math.max(tempDot, maxA);
        }
        for (let i = 1; i < shapeBVertices.length; i++) {
            tempDot = gl_matrix_1.vec3.dot(overlapVector, shapeBVertices[i]);
            minB = Math.min(tempDot, minB);
            maxB = Math.max(tempDot, maxB);
        }
        let overlap1 = maxB - minA;
        let overlap2 = maxA - minB;
        if (overlap1 >= -margin && overlap2 >= -margin) {
            if (overlap1 > overlap2) {
                reverse.value = true;
                return overlap2;
            }
            else {
                reverse.value = false;
                return overlap1;
            }
        }
        return -1.0;
    }
    SAT.getOverlap = getOverlap;
    /**
     * Finds if two sets of vertices will overlap along an axis given their relative speed within the time frame (time input object).
     * Will alter the first collision time and last collision time in the info object, as well as copy the test vec to the intersectionVec in the info object
     * @param testVec The axis for overlap
     * @param shapeAVertices Vertices for shape A
     * @param shapeBVertices Vertices for shape B
     * @param relativeVelocity Relative velocity between the shapes
     * @param info info object which contains - time for first, last, max. Max is how soon the overlap has to happen to count. Also holds the intersection vector for the first overlap
     * @returns If an overlap happens within the timeframe (info.max)
     */
    function getContinousOverlap(testVec, shapeAVertices, shapeBVertices, relativeVelocity, info) {
        let minA = Infinity, minB = Infinity;
        let maxA = -Infinity, maxB = -Infinity;
        let tempDot = 0.0;
        for (const vert of shapeAVertices) {
            tempDot = gl_matrix_1.vec3.dot(vert, testVec);
            minA = Math.min(minA, tempDot);
            maxA = Math.max(maxA, tempDot);
        }
        for (const vert of shapeBVertices) {
            tempDot = gl_matrix_1.vec3.dot(vert, testVec);
            minB = Math.min(minB, tempDot);
            maxB = Math.max(maxB, tempDot);
        }
        //Following found here: https://www.geometrictools.com/Documentation/MethodOfSeparatingAxes.pdf
        let T;
        let speed = gl_matrix_1.vec3.dot(testVec, relativeVelocity);
        if (maxB <= minA) {
            if (speed <= 0.0) {
                // Interval (B) initially on ‘left’ of interval (A)
                return false; // Intervals moving apart
            }
            T = (minA - maxB) / speed;
            if (T > info.first) {
                info.first = T;
                gl_matrix_1.vec3.copy(info.intersectionVec, testVec);
            }
            if (info.first > info.max) {
                return false;
            } // Early exit
            T = (maxA - minB) / speed;
            if (T < info.last) {
                info.last = T;
            }
            if (info.first > info.last) {
                return false;
            } // Early exit
        }
        else if (maxA <= minB) {
            // Interval (B) initially on ‘right’ of interval (A)
            if (speed >= 0.0) {
                return false;
            } // Intervals moving apart
            T = (maxA - minB) / speed;
            if (T > info.first) {
                info.first = T;
                gl_matrix_1.vec3.copy(info.intersectionVec, testVec);
            }
            if (info.first > info.max) {
                return false;
            } // Early exit
            T = (minA - maxB) / speed;
            if (T < info.last) {
                info.last = T;
            }
            if (info.first > info.last) {
                return false;
            } // Early exit
        }
        else {
            // Interval (A) and interval (B) overlap
            if (speed > 0.0) {
                T = (maxA - minB) / speed;
                if (T < info.last) {
                    info.last = T;
                }
                if (info.first > info.last) {
                    return false;
                } // Early exit
            }
            else if (speed < 0.0) {
                T = (minA - maxB) / speed;
                if (T < info.last) {
                    info.last = T;
                }
                if (info.first > info.last) {
                    return false;
                } // Early exit
            }
        }
        return true;
    }
    SAT.getContinousOverlap = getContinousOverlap;
    /**
     * This will find the average point of intersection between two shapes along an axis.
     * This assumes that the shapes are intersecting and can not be used to find out IF two shapes are intersecting.
     * @param shapeA Shape A
     * @param shapeB Shape B
     * @param testAxis The axis to test along.
     * @returns The average point of intersection.
     */
    function getIntersectionPoint(shapeA, shapeB, testAxis) {
        let shapeAVertices = shapeA.getTransformedVertices();
        let shapeBVertices = shapeB.getTransformedVertices();
        let maxAPoints = new Array();
        let minAPoints = new Array();
        let maxBPoints = new Array();
        let minBPoints = new Array();
        let maxA = gl_matrix_1.vec3.dot(testAxis, shapeAVertices[0]);
        maxAPoints.push(0);
        let minA = maxA;
        minAPoints.push(0);
        let maxB = gl_matrix_1.vec3.dot(testAxis, shapeBVertices[0]);
        maxBPoints.push(0);
        let minB = maxB;
        minBPoints.push(0);
        let tempDot = 0.0;
        for (let i = 1; i < shapeAVertices.length; i++) {
            tempDot = gl_matrix_1.vec3.dot(testAxis, shapeAVertices[i]);
            if (tempDot < minA) {
                minA = tempDot;
                minAPoints.length = 0;
                minAPoints.push(i);
            }
            else if (Math.abs(tempDot - minA) < 0.0001) {
                minAPoints.push(i);
            }
            if (tempDot > maxA) {
                maxA = tempDot;
                maxAPoints.length = 0;
                maxAPoints.push(i);
            }
            else if (Math.abs(tempDot - maxA) < 0.0001) {
                maxAPoints.push(i);
            }
        }
        for (let i = 1; i < shapeBVertices.length; i++) {
            tempDot = gl_matrix_1.vec3.dot(testAxis, shapeBVertices[i]);
            if (tempDot < minB) {
                minB = tempDot;
                minBPoints.length = 0;
                minBPoints.push(i);
            }
            else if (Math.abs(tempDot - minB) < 0.0001) {
                minBPoints.push(i);
            }
            if (tempDot > maxB) {
                maxB = tempDot;
                maxBPoints.length = 0;
                maxBPoints.push(i);
            }
            else if (Math.abs(tempDot - maxB) < 0.0001) {
                maxBPoints.push(i);
            }
        }
        let overlap1 = Math.abs(maxB - minA);
        let overlap2 = Math.abs(maxA - minB);
        // let averagePoint = new Vec3();
        // let nrPoints = 0;
        let intersectionPoint = gl_matrix_1.vec3.create();
        if (overlap1 > overlap2) {
            // overlap2
            // for (const p of maxAPoints) {
            // 	averagePoint.add(shapeAVertices[p]);
            // 	nrPoints++;
            // }
            // for (const p of minBPoints) {
            // 	averagePoint.add(shapeBVertices[p]);
            // 	nrPoints++;
            // }
            if (maxAPoints.length == 1) {
                gl_matrix_1.vec3.copy(intersectionPoint, shapeAVertices[maxAPoints[0]]);
            }
            else if (minBPoints.length == 1) {
                gl_matrix_1.vec3.copy(intersectionPoint, shapeBVertices[minBPoints[0]]);
            }
        }
        else {
            // overlap1;
            // for (const p of minAPoints) {
            // 	averagePoint.add(shapeAVertices[p]);
            // 	nrPoints++;
            // }
            // for (const p of maxBPoints) {
            // 	averagePoint.add(shapeBVertices[p]);
            // 	nrPoints++;
            // }
            if (minAPoints.length == 1) {
                gl_matrix_1.vec3.copy(intersectionPoint, shapeAVertices[minAPoints[0]]);
            }
            else if (maxBPoints.length == 1) {
                gl_matrix_1.vec3.copy(intersectionPoint, shapeBVertices[maxBPoints[0]]);
            }
        }
        // averagePoint.multiply(1.0 / nrPoints);
        return intersectionPoint;
    }
    SAT.getIntersectionPoint = getIntersectionPoint;
    /**
     * Intersection testing of two shapes.
     * @param shapeA Shape A
     * @param shapeB Shape B
     * @param intersectionAxis The minimum translation vector (MTV).
     * This is the axis at which the shapes are intersecting the least.
     * Is set by this function.
     * Will always point from Shape B towards Shape A.
     * @param intersectionDepth An object holding a variable "depth" that will state how much the shapes are intersecting.
     * Is set by this function
     * @returns Boolean stating if the shapes intersect or not.
     */
    function getIntersection3D(shapeA, shapeB, intersectionAxis, intersectionDepth) {
        intersectionDepth.depth = Infinity;
        let shapeAVertices = shapeA.getTransformedVertices();
        let shapeBVertices = shapeB.getTransformedVertices();
        // Check normal and update intersection depth and axis if shallower than previous
        let checkNormal = function (normal) {
            let reverse = { value: false };
            let overlap = SAT.getOverlap(normal, shapeAVertices, shapeBVertices, reverse, shapeA.margin + shapeB.margin);
            if (overlap < 0.0) {
                return false;
            }
            if (overlap < intersectionDepth.depth) {
                intersectionDepth.depth = overlap;
                gl_matrix_1.vec3.copy(intersectionAxis, normal);
                if (reverse.value) {
                    gl_matrix_1.vec3.scale(intersectionAxis, intersectionAxis, -1);
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
        // The shapes are intersecting along all normals
        // Two cases are possible;
        // 1. The shapes are flat and coplanar -> We need to test the shapes in "2d", projected on the plane they are on
        // 2. The shapes are not flat and coplanar -> We need to test the cross products of all the edges of ShapeA with the edges of ShapeB
        // Lets start with the coplanar possibility, which can be checked by seeing if both shapes have only one normal, and the two shapes normals are perpendicular
        // Side note; If the normals are perpendicular, but the shapes are not coplanar, the previous tests would have found a seperating axis, so we wouldn't have gotten here
        if (shapeANormals.length == 1 && shapeBNormals.length == 1) {
            // Coplanar possible
            let crossVector = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), shapeANormals[0], shapeBNormals[0]);
            if (crossVector[0] == 0.0 &&
                crossVector[1] == 0.0 &&
                crossVector[2] == 0.0) {
                // Coplanar
                // Test the edge normals for all edges
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
                // There is an intersection, return it
                return true;
            }
        }
        // Calculate cross vectors of edges and test along the results
        for (const e1 of shapeA.getTransformedEdges()) {
            for (const e2 of shapeB.getTransformedEdges()) {
                const dotProd = gl_matrix_1.vec3.dot(e1, e2);
                if (dotProd < 0.99 && dotProd > -0.99) {
                    let testVec = gl_matrix_1.vec3.clone(e1);
                    gl_matrix_1.vec3.normalize(testVec, gl_matrix_1.vec3.cross(testVec, testVec, e2));
                    if (!checkNormal(testVec)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    SAT.getIntersection3D = getIntersection3D;
    /**
     * Check when an intersection will occur (if it happens before timeMax).
     * @param shapeA
     * @param shapeB
     * @param velocityA
     * @param velocityB
     * @param timeMax
     * @returns Returns time of intersection if there is one within timeMax, otherwise returns -1.0
     */
    function getContinousIntersection3D(shapeA, shapeB, velocityA, velocityB, timeMax) {
        // Treat shapeA as stationary and shapeB as moving
        let relativeVel = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), velocityB, velocityA);
        let info = { first: 0.0, last: Infinity, max: timeMax, intersectionVec: gl_matrix_1.vec3.create() };
        let shapeAVertices = shapeA.getTransformedVertices();
        let shapeBVertices = shapeB.getTransformedVertices();
        let shapeANormals = shapeA.getTransformedNormals();
        for (let normal of shapeANormals) {
            if (!getContinousOverlap(normal, shapeAVertices, shapeBVertices, relativeVel, info)) {
                return [-1.0, null];
            }
        }
        let shapeBNormals = shapeB.getTransformedNormals();
        for (let normal of shapeBNormals) {
            if (!getContinousOverlap(normal, shapeAVertices, shapeBVertices, relativeVel, info)) {
                return [-1.0, null];
            }
        }
        // The shapes are intersecting along all normals
        // Two cases are possible;
        // 1. The shapes are flat and coplanar -> We need to test the shapes in "2d", projected on the plane they are on
        // 2. The shapes are not flat and coplanar -> We need to test the cross products of all the edges of ShapeA with the edges of ShapeB
        // Lets start with the coplanar possibility, which can be checked by seeing if both shapes have only one normal, and the two shapes normals are perpendicular
        // Side note; If the normals are perpendicular, but the shapes are not coplanar, the previous tests would have found a seperating axis, so we wouldn't have gotten here
        if (shapeANormals.length == 1 && shapeBNormals.length == 1) {
            // Coplanar possible
            let crossVector = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), shapeANormals[0], shapeBNormals[0]);
            if (crossVector[0] == 0.0 &&
                crossVector[1] == 0.0 &&
                crossVector[2] == 0.0) {
                // Coplanar
                // Test the edge normals for all edges
                for (const AEdgeNormal of shapeA.getTransformedEdgeNormals()) {
                    if (!getContinousOverlap(AEdgeNormal, shapeAVertices, shapeBVertices, relativeVel, info)) {
                        return [-1.0, null];
                    }
                }
                for (const BEdgeNormal of shapeB.getTransformedEdgeNormals()) {
                    if (!getContinousOverlap(BEdgeNormal, shapeAVertices, shapeBVertices, relativeVel, info)) {
                        return [-1.0, null];
                    }
                }
                // There is an intersection
                // If the intersection is NOT exactly at 0.0 and never again, return it
                if (info.last == 0.0) {
                    return [-1.0, null];
                }
                return [info.first, info.intersectionVec];
            }
        }
        // Calculate cross vectors of edges and test along the results
        for (const e1 of shapeA.getTransformedEdges()) {
            for (const e2 of shapeB.getTransformedEdges()) {
                const dotProd = gl_matrix_1.vec3.dot(e1, e2);
                if (dotProd < 0.99 && dotProd > -0.99) {
                    let testVec = gl_matrix_1.vec3.clone(e1);
                    gl_matrix_1.vec3.normalize(testVec, gl_matrix_1.vec3.cross(testVec, testVec, e2));
                    if (!getContinousOverlap(testVec, shapeAVertices, shapeBVertices, relativeVel, info)) {
                        return [-1.0, null];
                    }
                }
            }
        }
        // If the intersection is NOT exactly at 0.0 and never again, return it
        if (info.last == 0.0) {
            return [-1.0, null];
        }
        return [info.first, info.intersectionVec];
    }
    SAT.getContinousIntersection3D = getContinousIntersection3D;
})(SAT = exports.SAT || (exports.SAT = {}));


/***/ }),

/***/ "./code/src/Engine/Objects/Camera.ts":
/*!*******************************************!*\
  !*** ./code/src/Engine/Objects/Camera.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
class Camera {
    constructor() {
        // ----View----
        this.pos = gl_matrix_1.vec3.create();
        this.dir = gl_matrix_1.vec3.fromValues(0.0, 0.0, -1.0);
        this.up = gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0);
        this.viewMatrix = gl_matrix_1.mat4.create();
        this.viewMatrixNeedsUpdate = true;
        // ------------
        // ----Proj----
        this.projectionMatrix = gl_matrix_1.mat4.create();
        this.projMatrixNeedsUpdate = true;
        this.ratio = 16.0 / 9.0;
        this.fov = 85.0 * Math.PI / 180;
        this.farPlaneDistance = 1000.0;
        // ------------
        this.viewProjMatrix = gl_matrix_1.mat4.create();
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
        let returnVec = gl_matrix_1.vec3.create();
        gl_matrix_1.vec3.cross(returnVec, this.dir, this.up);
        gl_matrix_1.vec3.normalize(returnVec, returnVec);
        return returnVec;
    }
    setPosition(pos) {
        gl_matrix_1.vec3.copy(this.pos, pos);
        this.viewMatrixNeedsUpdate = true;
    }
    translate(translation) {
        gl_matrix_1.vec3.add(this.pos, this.pos, translation);
        this.viewMatrixNeedsUpdate = true;
    }
    setDir(dir) {
        gl_matrix_1.vec3.normalize(this.dir, dir);
        this.viewMatrixNeedsUpdate = true;
    }
    setUp(up) {
        gl_matrix_1.vec3.normalize(this.up, up);
        this.viewMatrixNeedsUpdate = true;
    }
    setPitchJawDegrees(pitch, jaw) {
        gl_matrix_1.vec3.set(this.dir, Math.cos(pitch * Math.PI / 180) * Math.sin(jaw * Math.PI / 180), Math.sin(pitch * Math.PI / 180), Math.cos(pitch * Math.PI / 180) * Math.cos(jaw * Math.PI / 180));
        this.viewMatrixNeedsUpdate = true;
    }
    setPitchJawRadians(pitch, jaw) {
        gl_matrix_1.vec3.set(this.dir, Math.cos(pitch) * Math.sin(jaw), Math.sin(pitch), Math.cos(pitch) * Math.cos(jaw));
        this.viewMatrixNeedsUpdate = true;
    }
    setFOV(fov) {
        this.fov = fov * Math.PI / 180.0;
        this.projMatrixNeedsUpdate = true;
    }
    setAspectRatio(ratio) {
        this.ratio = ratio;
        this.projMatrixNeedsUpdate = true;
    }
    setFarPlaneDistance(distance) {
        this.farPlaneDistance = distance;
        this.projMatrixNeedsUpdate;
    }
    updateViewProjMatrix() {
        let updateViewProj = false;
        if (this.viewMatrixNeedsUpdate) {
            gl_matrix_1.mat4.lookAt(this.viewMatrix, this.pos, gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), this.pos, this.dir), this.up);
            this.viewMatrixNeedsUpdate = false;
            updateViewProj = true;
        }
        if (this.projMatrixNeedsUpdate) {
            gl_matrix_1.mat4.perspective(this.projectionMatrix, this.fov, this.ratio, 0.01, this.farPlaneDistance);
            this.projMatrixNeedsUpdate = false;
            updateViewProj = true;
        }
        if (updateViewProj) {
            gl_matrix_1.mat4.mul(this.viewProjMatrix, this.projectionMatrix, this.viewMatrix);
        }
    }
    bindViewProjMatrix(uniformLocation, skybox = false) {
        this.updateViewProjMatrix();
        if (skybox) {
            let tempViewMatrix = gl_matrix_1.mat4.lookAt(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.create(), this.dir, this.up);
            let tempViewProj = gl_matrix_1.mat4.mul(gl_matrix_1.mat4.create(), this.projectionMatrix, tempViewMatrix);
            main_1.gl.uniformMatrix4fv(uniformLocation, false, tempViewProj);
        }
        else {
            main_1.gl.uniformMatrix4fv(uniformLocation, false, this.viewProjMatrix);
        }
    }
}
exports["default"] = Camera;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsBundle.ts":
/*!***************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsBundle.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const Texture_1 = __webpack_require__(/*! ../Rendering/Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
class GraphicsBundle {
    constructor(diffuse, specular, graphicsObject, emissionMap) {
        this.diffuse = diffuse;
        this.specular = specular;
        if (emissionMap != undefined) {
            this.emission = emissionMap;
        }
        else {
            this.emission = new Texture_1.default();
            this.emission.setTextureData(new Uint8Array([0.0, 0.0, 0.0, 0.0]), 1, 1);
        }
        this.emissionColor = gl_matrix_1.vec3.fromValues(0.0, 0.0, 0.0);
        this.modelMatrix = gl_matrix_1.mat4.create();
        this.textureMatrix = gl_matrix_1.mat4.create();
        this.graphicsObject = graphicsObject;
    }
    draw(bindSpecialTextures = true) {
        this.diffuse.bind(0);
        if (bindSpecialTextures) {
            this.specular.bind(1);
            this.emission.bind(2);
        }
        let emissionColorU = this.graphicsObject.shaderProgram.getUniformLocation("emissionColor");
        if (emissionColorU[1]) {
            main_1.gl.uniform3fv(emissionColorU[0], this.emissionColor);
        }
        let modelReturn = this.graphicsObject.shaderProgram.getUniformLocation("modelMatrix");
        if (modelReturn[1]) {
            main_1.gl.uniformMatrix4fv(modelReturn[0], false, this.modelMatrix);
        }
        let textureReturn = this.graphicsObject.shaderProgram.getUniformLocation("textureMatrix");
        if (textureReturn[1]) {
            main_1.gl.uniformMatrix4fv(textureReturn[0], false, this.textureMatrix);
        }
        this.graphicsObject.draw();
    }
}
exports["default"] = GraphicsBundle;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/GodRayPlanes.ts":
/*!*****************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/GodRayPlanes.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
class GodRayPlanes extends GraphicsObject_1.default {
    constructor(shaderProgram) {
        super(shaderProgram);
        this.numPlanes = 50;
        this.fogMaxDistance = 100.0;
        this.bindVAO();
        this.unbindVAO();
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions
            -1.0, 1.0,
            -1.0, -1.0,
            1.0, -1.0,
            1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
    }
    draw() {
        this.bindVAO();
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("fogMaxDistance")[0], this.fogMaxDistance);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("numPlanes")[0], this.numPlanes);
        main_1.gl.drawElementsInstanced(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0, this.numPlanes);
    }
}
exports["default"] = GodRayPlanes;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts":
/*!*******************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class GraphicsObject {
    constructor(shaderProgram) {
        this.shaderProgram = shaderProgram;
        this.VAO = null;
        this.VBO = null;
        this.EBO = null; // Optional
        this.init();
    }
    init() {
        // Create buffers
        this.VAO = main_1.gl.createVertexArray();
        this.VBO = main_1.gl.createBuffer();
        this.EBO = main_1.gl.createBuffer();
        // Bind buffers
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.VBO);
        this.shaderProgram.setupVertexAttributePointers();
        main_1.gl.bindVertexArray(null);
    }
    bindVAO() {
        main_1.gl.bindVertexArray(this.VAO);
    }
    unbindVAO() {
        main_1.gl.bindVertexArray(null);
    }
    setVertexData(data) {
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.VBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, data, main_1.gl.STATIC_DRAW);
        main_1.gl.bindVertexArray(null);
    }
    setIndexData(data) {
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ELEMENT_ARRAY_BUFFER, this.EBO);
        main_1.gl.bufferData(main_1.gl.ELEMENT_ARRAY_BUFFER, data, main_1.gl.STATIC_DRAW);
        main_1.gl.bindVertexArray(null);
    }
    setupTriangles(triangles) { }
    getVertexPositions() {
        return null;
    }
    draw() {
        // Can this be virtual?
    }
}
exports["default"] = GraphicsObject;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/GrassSpawner.ts":
/*!*****************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/GrassSpawner.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
class GrassSpawner extends GraphicsObject_1.default {
    constructor(shaderProgram, numberOfStartingGrassStraws = 0) {
        super(shaderProgram);
        this.bindVAO();
        this.instanceVBO = main_1.gl.createBuffer();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, numberOfStartingGrassStraws * 7 * 4, main_1.gl.STATIC_DRAW);
        shaderProgram.setupInstancedVertexAttributePointers();
        this.unbindVAO();
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions  // uv
            0.0, 1.0, 0.5, 1.0,
            -0.1, 0.0, 0.0, 0.0,
            0.1, 0.0, 1.0, 0.0,
        ]);
        this.setVertexData(this.vertices);
        // All starting particles are initialized as size and position 0, so they wont be visable unless manually changed
        this.numGrassStraws = numberOfStartingGrassStraws;
    }
    setNumGrassStraws(amount) {
        this.numGrassStraws = amount;
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, this.numGrassStraws * 7 * 4, main_1.gl.STATIC_DRAW);
        this.unbindVAO();
    }
    getNumberOfGrassStraws() {
        return this.numGrassStraws;
    }
    setGrassStrawData(particleIndex, startPosition, size, tipOffset) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        let data = new Float32Array([
            startPosition[0],
            startPosition[1],
            startPosition[2],
            size,
            tipOffset[0],
            tipOffset[1],
            tipOffset[2],
        ]);
        this.bufferSubDataUpdate(particleIndex * 7, data);
        return true;
    }
    setGrassStrawPosition(particleIndex, position) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7, position);
        return true;
    }
    setGrassStrawSize(particleIndex, size) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7 + 3, new Float32Array([size]));
        return true;
    }
    setGrassTipOffset(particleIndex, offset) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7 + 4, offset);
        return true;
    }
    bufferSubDataUpdate(start, data) {
        if (start < 0 || start + data.length > this.numGrassStraws * 7) {
            return false;
        }
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferSubData(main_1.gl.ARRAY_BUFFER, start * 4, data);
        this.unbindVAO();
        return true;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawArraysInstanced(main_1.gl.TRIANGLES, 0, 3, this.numGrassStraws);
        this.unbindVAO();
    }
}
exports["default"] = GrassSpawner;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/Heightmap.ts":
/*!**************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/Heightmap.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const Triangle_1 = __webpack_require__(/*! ../../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
const Mesh_1 = __webpack_require__(/*! ./Mesh */ "./code/src/Engine/Objects/GraphicsObjects/Mesh.ts");
class Heightmap extends Mesh_1.default {
    constructor(shaderProgram) {
        super(shaderProgram, null);
        this.xResolution = 0;
        this.zResolution = 0;
        this.createPlane(2, 2, 1, 1);
        this.imageData = null;
    }
    setupTriangles(triangles) {
        triangles.length = 0; // Clear triangles
        for (let i = 0; i < this.indices.length; i += 3) {
            // Go through the vertices
            // Save the positions as shapes in the input array
            const length = triangles.push(new Triangle_1.default());
            triangles[length - 1].setVertices(gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i] * 8], this.vertices[this.indices[i] * 8 + 1], this.vertices[this.indices[i] * 8 + 2]), gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i + 1] * 8], this.vertices[this.indices[i + 1] * 8 + 1], this.vertices[this.indices[i + 1] * 8 + 2]), gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i + 2] * 8], this.vertices[this.indices[i + 2] * 8 + 1], this.vertices[this.indices[i + 2] * 8 + 2]));
        }
    }
    updateVertexData(x, z, values) {
        let offset = z * this.xResolution * 8 + x * 8;
        for (let i = 0; i < values.length; i++) {
            this.vertices[offset + i] = values[i];
        }
    }
    updateVertexHeight(x, z, height) {
        this.vertices[z * this.xResolution * 8 + x * 8 + 1] = height;
    }
    calculateVertexNormal(x, z) {
        if (x < 1 ||
            x > this.xResolution - 2 ||
            z < 1 ||
            z > this.zResolution - 2) {
            return;
        }
        let resultingNormal = gl_matrix_1.vec3.create();
        let middlePos = gl_matrix_1.vec3.fromValues(0.0, this.vertices[z * this.xResolution * 8 + x * 8 + 1], 0.0);
        let offsets = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
        ];
        let tempTriangle = new Triangle_1.default();
        for (let i = 0; i < 4; i++) {
            let first = i;
            let second = (i + 1) % 4;
            tempTriangle.setVertices(gl_matrix_1.vec3.fromValues(offsets[first][0] * this.xQuadSize, this.vertices[(z + offsets[first][1]) * this.xResolution * 8 +
                (x + offsets[first][0]) * 8 +
                1], offsets[first][1] * this.zQuadSize), middlePos, gl_matrix_1.vec3.fromValues(offsets[second][0] * this.xQuadSize, this.vertices[(z + offsets[second][1]) * this.xResolution * 8 +
                (x + offsets[second][0]) * 8 +
                1], offsets[second][1] * this.zQuadSize));
            gl_matrix_1.vec3.add(resultingNormal, resultingNormal, tempTriangle.getTransformedNormals()[0]);
        }
        gl_matrix_1.vec3.normalize(resultingNormal, resultingNormal);
        for (let i = 0; i < 3; i++) {
            this.vertices[z * this.xResolution * 8 + x * 8 + 3 + i] =
                resultingNormal[i];
        }
    }
    createPlane(xResolution, zResolution, xQuadSize, zQuadSize) {
        this.xResolution = Math.max(Math.ceil(xResolution), 2);
        this.zResolution = Math.max(Math.ceil(zResolution), 2);
        this.xQuadSize = xQuadSize;
        this.zQuadSize = zQuadSize;
        this.vertices = new Float32Array(this.xResolution * this.zResolution * 8).fill(0.0);
        for (let z = 0; z < this.zResolution; z++) {
            for (let x = 0; x < this.xResolution; x++) {
                this.updateVertexData(x, z, [
                    x * xQuadSize,
                    0.0,
                    z * zQuadSize,
                    0.0,
                    1.0,
                    0.0,
                    x / (this.xResolution - 1),
                    z / (this.zResolution - 1),
                ]);
            }
        }
        this.setVertexData(this.vertices);
        this.indices = new Int32Array((this.xResolution - 1) * (this.zResolution - 1) * 6).fill(0);
        for (let z = 0; z < this.zResolution - 1; z++) {
            for (let x = 0; x < this.xResolution - 1; x++) {
                let indicesOffset = z * (this.xResolution - 1) * 6 + x * 6;
                let topLeftIndex = z * this.xResolution + x;
                let bottomLeftIndex = topLeftIndex + this.xResolution;
                // Make the diagonals go zig zag to hide repeating patterns along the diagonals
                if ((z + x) % 2 == 0) {
                    this.indices[indicesOffset + 0] = topLeftIndex;
                    this.indices[indicesOffset + 1] = bottomLeftIndex;
                    this.indices[indicesOffset + 2] = bottomLeftIndex + 1;
                    this.indices[indicesOffset + 3] = topLeftIndex;
                    this.indices[indicesOffset + 4] = bottomLeftIndex + 1;
                    this.indices[indicesOffset + 5] = topLeftIndex + 1;
                }
                else {
                    this.indices[indicesOffset + 0] = topLeftIndex;
                    this.indices[indicesOffset + 1] = bottomLeftIndex;
                    this.indices[indicesOffset + 2] = topLeftIndex + 1;
                    this.indices[indicesOffset + 3] = topLeftIndex + 1;
                    this.indices[indicesOffset + 4] = bottomLeftIndex;
                    this.indices[indicesOffset + 5] = bottomLeftIndex + 1;
                }
            }
        }
        this.setIndexData(this.indices);
    }
    /**
     *
     * @param texturePath - texture path / URL
     * @param createResolutionFromPixels - if the plane should be recreated using the resolution of the picture
     */
    readHeightDataFromTexture(texturePath, createResolutionFromPixels = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let loadImage = function (src) {
                return new Promise((resolve, reject) => {
                    let img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = src;
                });
            };
            let resizeImage = function (image, newWidth, newHeight) {
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                canvas.width = newWidth;
                canvas.height = newHeight;
                ctx.drawImage(image, 0, 0, newWidth, newHeight);
                return ctx.getImageData(0, 0, newWidth, newHeight).data;
            };
            let texture = yield loadImage(texturePath);
            if (createResolutionFromPixels) {
                this.createPlane(texture.width, texture.height, 1.0, 1.0);
            }
            // Resize the image to the same resolution as our hightmap
            this.imageData = resizeImage(texture, this.xResolution, this.zResolution);
            // Go through the heightmap and set the height to the corrsponding pixel in the (resized) image
            for (let z = 0; z < this.zResolution; z++) {
                for (let x = 0; x < this.xResolution; x++) {
                    this.updateVertexHeight(x, z, this.imageData[x * 4 + z * this.xResolution * 4] / 255.0);
                }
            }
            // Calculate normals
            for (let z = 0; z < this.zResolution; z++) {
                for (let x = 0; x < this.xResolution; x++) {
                    this.calculateVertexNormal(x, z);
                }
            }
            this.setVertexData(this.vertices);
        });
    }
    getNormalFromWorldPosition(heightmapTransformMatrix, worldPosition, invertedTransformMatrix) {
        // Invert the transform matrix used for the heightmap
        let invertedMatrix;
        if (invertedTransformMatrix != undefined) {
            invertedMatrix = invertedTransformMatrix;
        }
        else {
            invertedMatrix = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), heightmapTransformMatrix);
        }
        // Take the world position and transform it into heightmap local coordinates
        let transformedPos = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(worldPosition[0], worldPosition[1], worldPosition[2]), invertedMatrix);
        return this.getNormal(transformedPos[0], transformedPos[2]);
    }
    getHeightFromWorldPosition(heightmapTransformMatrix, worldPosition, invertedTransformMatrix) {
        // Invert the transform matrix used for the heightmap
        let invertedMatrix;
        if (invertedTransformMatrix != undefined) {
            invertedMatrix = invertedTransformMatrix;
        }
        else {
            invertedMatrix = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), heightmapTransformMatrix);
        }
        // Take the world position and transform it into heightmap local coordinates
        let transformedPos = gl_matrix_1.vec4.transformMat4(gl_matrix_1.vec4.create(), gl_matrix_1.vec4.fromValues(worldPosition[0], worldPosition[1], worldPosition[2], 1.0), invertedTransformMatrix);
        // Get the height of the heightmap at the corresponding position
        let height = this.getHeight(transformedPos[0], transformedPos[2]);
        if (height == null) {
            return null;
        }
        transformedPos[1] = height; // set the y coord to the heightmap height
        transformedPos[3] = 1.0; // set the w to 1 to be able to transform the position back into world space
        gl_matrix_1.vec4.transformMat4(transformedPos, transformedPos, heightmapTransformMatrix); // To world space! :D
        return transformedPos[1];
    }
    getHeight(x, z) {
        if (x < 0 ||
            x > this.xResolution * this.xQuadSize ||
            z < 0 ||
            z > this.zResolution * this.zQuadSize) {
            return null;
        }
        // Find out what triangle to get the height from
        let baseX = Math.floor(x / this.xQuadSize);
        let baseZ = Math.floor(z / this.zQuadSize);
        let diffX = x - baseX * this.xQuadSize;
        let diffZ = z - baseZ * this.zQuadSize;
        let topRightHeight = this.imageData[(baseX + 1) * 4 + (baseZ + 0) * this.xResolution * 4] /
            255.0;
        let bottomLeftHeight = this.imageData[(baseX + 0) * 4 + (baseZ + 1) * this.xResolution * 4] /
            255.0;
        let topLeftHeight = this.imageData[(baseX + 0) * 4 + (baseZ + 0) * this.xResolution * 4] /
            255.0;
        let bottomRightHeight = this.imageData[(baseX + 1) * 4 + (baseZ + 1) * this.xResolution * 4] /
            255.0;
        if ((baseZ + baseX) % 2 == 0) {
            // Because of the zig-zagging mentioned in the createPlane indices set up
            /*
            Base
            |
            v
            +--------+ x
            |\    A  |
            |   \    |
            | B    \ |
            +--------+
            z
            */
            if (diffX > diffZ) {
                // A
                let kx = topLeftHeight - topRightHeight;
                let kz = bottomRightHeight - topRightHeight;
                diffX = 1 - diffX;
                return topRightHeight + kx * diffX + kz * diffZ;
            }
            else {
                // B
                let kx = bottomRightHeight - bottomLeftHeight;
                let kz = topLeftHeight - bottomLeftHeight;
                diffZ = 1 - diffZ;
                return bottomLeftHeight + kx * diffX + kz * diffZ;
            }
        }
        else {
            /*
            Base
            |
            v
            +--------+ x
            |  A    /|
            |    /   |
            | /    B |
            +--------+
            z
            */
            if (diffX < 1 - diffZ) {
                // A
                let kx = topRightHeight - topLeftHeight;
                let kz = bottomLeftHeight - topLeftHeight;
                return topLeftHeight + kx * diffX + kz * diffZ;
            }
            else {
                // B
                let kx = bottomLeftHeight - bottomRightHeight;
                let kz = topRightHeight - bottomRightHeight;
                diffX = 1 - diffX;
                diffZ = 1 - diffZ;
                return bottomRightHeight + kx * diffX + kz * diffZ;
            }
        }
    }
    getNormal(x, z) {
        let xCoord = Math.round(x / this.xQuadSize);
        let zCoord = Math.round(z / this.zQuadSize);
        if (xCoord < 0 ||
            xCoord > this.xResolution - 1 ||
            zCoord < 0 ||
            zCoord > this.zResolution - 1) {
            return null;
        }
        let normal = gl_matrix_1.vec3.fromValues(this.vertices[zCoord * this.xResolution * 8 + xCoord * 8 + 3], this.vertices[zCoord * this.xResolution * 8 + xCoord * 8 + 4], this.vertices[zCoord * this.xResolution * 8 + xCoord * 8 + 5]);
        return normal;
    }
    getVertices() {
        return this.vertices;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawElements(main_1.gl.TRIANGLES, this.indices.length, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports["default"] = Heightmap;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/Mesh.ts":
/*!*********************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/Mesh.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
const Triangle_1 = __webpack_require__(/*! ../../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class Mesh extends GraphicsObject_1.default {
    constructor(shaderProgram, vertices) {
        super(shaderProgram);
        this.vertices = vertices;
        this.setVertexData(this.vertices);
    }
    setupTriangles(triangles) {
        triangles.length = 0; // Clear triangles
        for (let i = 0; i < this.vertices.length; i += 8 * 3) {
            // Go through the vertices
            // Save the positions as shapes in the input array
            const length = triangles.push(new Triangle_1.default());
            triangles[length - 1].setVertices(gl_matrix_1.vec3.fromValues(this.vertices[i], this.vertices[i + 1], this.vertices[i + 2]), gl_matrix_1.vec3.fromValues(this.vertices[i + 8], this.vertices[i + 8 + 1], this.vertices[i + 8 + 2]), gl_matrix_1.vec3.fromValues(this.vertices[i + 16], this.vertices[i + 16 + 1], this.vertices[i + 16 + 2]));
        }
    }
    getVertexPositions() {
        let returnArr = new Array();
        for (let i = 0; i < this.vertices.length; i += 8) {
            returnArr.push(gl_matrix_1.vec3.fromValues(this.vertices[i], this.vertices[i + 1], this.vertices[i + 2]));
        }
        return returnArr;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawArrays(main_1.gl.TRIANGLES, 0, this.vertices.length / 8);
    }
}
exports["default"] = Mesh;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/ParticleSpawner.ts":
/*!********************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/ParticleSpawner.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
class ParticleSpawner extends GraphicsObject_1.default {
    constructor(shaderProgram, texture, numberOfStartingParticles = 0) {
        super(shaderProgram);
        this.texture = texture;
        this.bindVAO();
        this.instanceVBO = main_1.gl.createBuffer();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, numberOfStartingParticles * 11 * 4, main_1.gl.DYNAMIC_DRAW);
        shaderProgram.setupInstancedVertexAttributePointers();
        this.unbindVAO();
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions  // uv
            -0.5, 0.5, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0,
            0.5, -0.5, 1.0, 0.0,
            0.5, 0.5, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        // All starting particles are initialized as size and position 0, so they wont be visable unless manually changed
        this.numParticles = numberOfStartingParticles;
        this.fadePerSecond = 0.0;
        this.sizeChangePerSecond = 1.0;
    }
    setNumParticles(amount) {
        this.numParticles = amount;
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, this.numParticles * 11 * 4, main_1.gl.DYNAMIC_DRAW);
        this.unbindVAO();
    }
    getNumberOfParticles() {
        return this.numParticles;
    }
    setParticleData(particleIndex, startPosition, size, startVel, acceleration) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        let data = new Float32Array([
            startPosition[0],
            startPosition[1],
            startPosition[2],
            size,
            startVel[0],
            startVel[1],
            startVel[2],
            (Date.now() - main_1.applicationStartTime) * 0.001,
            acceleration[0],
            acceleration[1],
            acceleration[2],
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
        this.bufferSubDataUpdate(particleIndex * 11 + 7, new Float32Array([(Date.now() - main_1.applicationStartTime) * 0.001]));
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
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferSubData(main_1.gl.ARRAY_BUFFER, start * 4, data);
        this.unbindVAO();
        return true;
    }
    draw() {
        this.bindVAO();
        this.texture.bind(0);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("fadePerSecond")[0], this.fadePerSecond);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("sizeChangePerSecond")[0], this.sizeChangePerSecond);
        main_1.gl.drawElementsInstanced(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0, this.getNumberOfParticles());
        this.unbindVAO();
    }
}
exports["default"] = ParticleSpawner;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/PhongQuad.ts":
/*!**************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/PhongQuad.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
const Triangle_1 = __webpack_require__(/*! ../../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class PhongQuad extends GraphicsObject_1.default {
    constructor(shaderProgram) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions        // normals         // uv
            -0.5, 0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0,
            0.5, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
    }
    setupTriangles(triangles) {
        triangles.length = 0; // Clear triangles
        for (let i = 0; i < this.indices.length; i += 3) {
            // Go through the vertices
            // Save the positions as shapes in the input array
            const length = triangles.push(new Triangle_1.default());
            triangles[length - 1].setVertices(gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i] * 8], this.vertices[this.indices[i] * 8 + 1], this.vertices[this.indices[i] * 8 + 2]), gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i + 1] * 8], this.vertices[this.indices[i + 1] * 8 + 1], this.vertices[this.indices[i + 1] * 8 + 2]), gl_matrix_1.vec3.fromValues(this.vertices[this.indices[i + 2] * 8], this.vertices[this.indices[i + 2] * 8 + 1], this.vertices[this.indices[i + 2] * 8 + 2]));
        }
    }
    getVertexPositions() {
        let returnArr = new Array();
        for (let i = 0; i < this.vertices.length; i += 8) {
            returnArr.push(gl_matrix_1.vec3.fromValues(this.vertices[i], this.vertices[i + 1], this.vertices[i + 2]));
        }
        return returnArr;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawElements(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports["default"] = PhongQuad;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts":
/*!***************************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class ScreenQuad extends GraphicsObject_1.default {
    constructor(shaderProgram, textures) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions        // uv
            -1.0, 1.0, 0.0, 1.0,
            -1.0, -1.0, 0.0, 0.0,
            1.0, -1.0, 1.0, 0.0,
            1.0, 1.0, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        this.textures = textures;
        for (let texture of this.textures) {
            texture.setTexParameterI(main_1.gl.TEXTURE_WRAP_S, main_1.gl.CLAMP_TO_EDGE);
            texture.setTexParameterI(main_1.gl.TEXTURE_WRAP_T, main_1.gl.CLAMP_TO_EDGE);
        }
    }
    draw(bindTextures = true) {
        this.bindVAO();
        if (bindTextures) {
            for (let i = 0; i < this.textures.length; i++) {
                this.textures[i].bind(i);
            }
        }
        main_1.gl.drawElements(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports["default"] = ScreenQuad;


/***/ }),

/***/ "./code/src/Engine/Objects/GraphicsObjects/Skybox.ts":
/*!***********************************************************!*\
  !*** ./code/src/Engine/Objects/GraphicsObjects/Skybox.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GraphicsObject_1 = __webpack_require__(/*! ./GraphicsObject */ "./code/src/Engine/Objects/GraphicsObjects/GraphicsObject.ts");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class Skybox extends GraphicsObject_1.default {
    constructor(shaderProgram, texture) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions
            -0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5, /*7*/
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
            3, 2, 6,
            3, 6, 7,
            7, 6, 5,
            7, 5, 4,
            4, 5, 1,
            4, 1, 0,
            4, 0, 3,
            4, 3, 7,
            1, 5, 6,
            1, 6, 2,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        this.texture = texture;
    }
    draw() {
        this.bindVAO();
        this.texture.bind();
        main_1.gl.drawElements(main_1.gl.TRIANGLES, this.indices.length, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports["default"] = Skybox;


/***/ }),

/***/ "./code/src/Engine/Objects/Octree.ts":
/*!*******************************************!*\
  !*** ./code/src/Engine/Objects/Octree.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const IntersectionTester_1 = __webpack_require__(/*! ../Physics/IntersectionTester */ "./code/src/Engine/Physics/IntersectionTester.ts");
const OBB_1 = __webpack_require__(/*! ../Physics/Shapes/OBB */ "./code/src/Engine/Physics/Shapes/OBB.ts");
const Triangle_1 = __webpack_require__(/*! ../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
class TreeNode {
    constructor(size, position) {
        this.obb = new OBB_1.default();
        this.size = size;
        this.position = position;
        let halfSize = size * 0.5;
        this.obb.setMinAndMaxVectors(gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(-halfSize, -halfSize, -halfSize), this.position), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(halfSize, halfSize, halfSize), this.position));
        this.children = new Array();
        this.content = new Array();
    }
    /**
     * Create 8 child nodes
     * @returns if new children was created. Will be false if there already exists children for this node or the sizes of the children would be smaller than minNodeSize.
     */
    createChildren(minNodeSize) {
        let halfSize = this.size * 0.5;
        if (this.children.length == 0 && halfSize >= minNodeSize) {
            let quarterSize = this.size * 0.25;
            for (let x = -1; x < 2; x += 2) {
                for (let y = -1; y < 2; y += 2) {
                    for (let z = -1; z < 2; z += 2) {
                        this.children.push(new TreeNode(halfSize, gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(x * quarterSize, y * quarterSize, z * quarterSize), this.position)));
                    }
                }
            }
            return true;
        }
        return false;
    }
    checkIfContains(shape) {
        let minVec = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this.position, gl_matrix_1.vec3.fromValues(this.size / 2.0, this.size / 2.0, this.size / 2.0));
        let maxVec = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), this.position, gl_matrix_1.vec3.fromValues(this.size / 2.0, this.size / 2.0, this.size / 2.0));
        let shapeVertices = shape.getTransformedVertices();
        for (let vertex of shapeVertices) {
            let returnVal = true;
            for (let i = 0; i < 3; i++) {
                if (minVec[i] > vertex[i] || vertex[i] > maxVec[i]) {
                    returnVal = false;
                }
            }
            if (returnVal) {
                return true;
            }
        }
        return false;
    }
    subdivideTree(minNodeSize) {
        this.createChildren(minNodeSize);
        for (let child of this.children) {
            child.subdivideTree(minNodeSize);
        }
    }
    addShape(shape, minNodeSize, maxShapesPerNode) {
        if (this.checkIfContains(shape) &&
            IntersectionTester_1.IntersectionTester.identifyIntersection([shape], [this.obb])) {
            if (this.children.length == 0) {
                // Leaf node
                if (this.content.length >= maxShapesPerNode) {
                    // New children are needed
                    this.createChildren(minNodeSize); // This will create children if the size of the child nodes are still bigger than the minNodeSize
                }
            }
            if (this.children.length == 0) {
                // Still leaf node
                this.content.push(shape);
            }
            else {
                // No longer leaf node
                // Add all the content from this node to child nodes instead
                for (let shape of this.content) {
                    for (let child of this.children) {
                        child.addShape(shape, minNodeSize, maxShapesPerNode);
                    }
                }
                this.content.length = 0;
                // Keep going deeper
                for (let child of this.children) {
                    child.addShape(shape, minNodeSize, maxShapesPerNode);
                }
            }
        }
    }
    prune() {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].prune();
            if (this.children[i].content.length == 0 &&
                this.children[i].children.length == 0) {
                this.children.splice(i, 1);
                i--;
            }
        }
    }
    getShapesForCollision(boundingBox, shapeArray) {
        if (IntersectionTester_1.IntersectionTester.identifyIntersection([boundingBox], [this.obb])) {
            for (const child of this.children) {
                child.getShapesForCollision(boundingBox, shapeArray);
            }
            for (const shape of this.content) {
                shapeArray.push(shape);
            }
        }
    }
    getShapesForContinousCollision(boundingBox, velocity1, velocity2, shapeArray, maxTime = Infinity) {
        if (IntersectionTester_1.IntersectionTester.doContinousIntersection([boundingBox], velocity1, [this.obb], velocity2, maxTime)[0] >= 0.0) {
            for (const child of this.children) {
                child.getShapesForContinousCollision(boundingBox, velocity1, velocity2, shapeArray, maxTime);
            }
            for (const shape of this.content) {
                shapeArray.push(shape);
            }
        }
    }
    getShapesForRayCast(ray, shapeArray, maxDistance = Infinity) {
        if (IntersectionTester_1.IntersectionTester.doRayCast(ray, [this.obb], maxDistance) >= 0.0) {
            for (const child of this.children) {
                child.getShapesForRayCast(ray, shapeArray, maxDistance);
            }
            for (const shape of this.content) {
                shapeArray.push(shape);
            }
        }
    }
    print() {
        let result = "{\n";
        result += "s" + this.size + "\n";
        result += "p" + this.position + "\n";
        result += "[\n";
        for (let shape of this.content) {
            result +=
                "t[" +
                    shape.getOriginalVertices()[0] +
                    "], [" +
                    shape.getOriginalVertices()[1] +
                    "], [" +
                    shape.getOriginalVertices()[2] +
                    "]\n";
        }
        result += "]\n";
        if (this.children.length > 0) {
            for (let child of this.children) {
                result += child.print();
            }
        }
        result += "}\n";
        return result;
    }
}
class Octree {
    constructor(minVec, maxVec, smallestNodeSizeMultiplicator, maxShapesPerNode) {
        let baseNodeSize = maxVec[0] - minVec[0];
        baseNodeSize = Math.max(baseNodeSize, maxVec[1] - minVec[1]);
        baseNodeSize = Math.max(baseNodeSize, maxVec[2] - minVec[2]);
        this.baseNode = new TreeNode(baseNodeSize, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), minVec, maxVec), 0.5));
        this.minNodeSize = baseNodeSize * smallestNodeSizeMultiplicator;
        this.maxShapesPerNode = maxShapesPerNode;
    }
    addShape(shape) {
        this.baseNode.addShape(shape, this.minNodeSize, this.maxShapesPerNode);
    }
    addShapes(shapes) {
        for (let shape of shapes) {
            this.baseNode.addShape(shape, this.minNodeSize, this.maxShapesPerNode);
        }
    }
    prune() {
        this.baseNode.prune();
    }
    getShapesForCollision(boundingBox, shapeArray) {
        this.baseNode.getShapesForCollision(boundingBox, shapeArray);
    }
    getShapesForContinousCollision(boundingBox, velocity1, velocity2, shapeArray, maxTime = Infinity) {
        this.baseNode.getShapesForContinousCollision(boundingBox, velocity1, velocity2, shapeArray, maxTime);
    }
    getShapesForRayCast(ray, shapeArray, maxDistance = Infinity) {
        this.baseNode.getShapesForRayCast(ray, shapeArray, maxDistance);
    }
    getDataString() {
        let output = "";
        output += this.minNodeSize + "\n";
        output += this.maxShapesPerNode + "\n";
        output += this.baseNode.print();
        return output;
    }
    parseOct(input) {
        delete this.baseNode;
        let rows = input.split("\n");
        this.minNodeSize = parseFloat(rows[0]);
        this.maxShapesPerNode = parseInt(rows[1]);
        let currentNode = this.baseNode;
        let currentSize = 0.0;
        let parentQueue = new Array();
        for (let i = 3; i < rows.length; i++) {
            let row = rows[i];
            if (row == "{") {
                // Information for child node starts
            }
            else if (row == "[") {
                // Start of triangles
            }
            else if (row == "]") {
                // End of triangles
            }
            else if (row == "}") {
                // Node over, set currentNode to parent
                currentNode = parentQueue.pop();
            }
            else if (row.startsWith("s")) {
                row = row.substring(1);
                // Size of node
                currentSize = parseFloat(row);
            }
            else if (row.startsWith("p")) {
                row = row.substring(1);
                // Position of node
                let posArray = row.split(",").map((n) => parseFloat(n));
                let currentPos = gl_matrix_1.vec3.fromValues(posArray[0], posArray[1], posArray[2]);
                // The position is the last information needed to create the child node, so we do it
                // and set currentNode to the new child
                if (this.baseNode == undefined) {
                    this.baseNode = new TreeNode(currentSize, currentPos);
                    currentNode = this.baseNode;
                }
                else {
                    // Add current node to parent queue
                    parentQueue.push(currentNode);
                    let length = currentNode.children.push(new TreeNode(currentSize, currentPos));
                    currentNode = currentNode.children[length - 1];
                }
            }
            else if (row.startsWith("t")) {
                // Triangle
                // t[-3,3,1.5], [-3,3,2.5], [-4,3,1.5]
                row = row.substring(1);
                let points = row.split(", ");
                let tri = new Triangle_1.default();
                tri.setVertices(gl_matrix_1.vec3.fromValues.apply(null, points[0]
                    .substring(1, points[0].length - 1)
                    .split(",")
                    .map((n) => parseFloat(n))), gl_matrix_1.vec3.fromValues.apply(null, points[1]
                    .substring(1, points[1].length - 1)
                    .split(",")
                    .map((n) => parseFloat(n))), gl_matrix_1.vec3.fromValues.apply(null, points[2]
                    .substring(1, points[2].length - 1)
                    .split(",")
                    .map((n) => parseFloat(n))));
                currentNode.content.push(tri);
            }
        }
    }
}
exports["default"] = Octree;


/***/ }),

/***/ "./code/src/Engine/Physics/CollisionSolver.ts":
/*!****************************************************!*\
  !*** ./code/src/Engine/Physics/CollisionSolver.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollisionSolver = void 0;
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Component_1 = __webpack_require__(/*! ../ECS/Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const ESCUtils_1 = __webpack_require__(/*! ../Utils/ESCUtils */ "./code/src/Engine/Utils/ESCUtils.ts");
var CollisionSolver;
(function (CollisionSolver) {
    function getTranslationNeeded(intersectionInformation) {
        if (intersectionInformation.length == 0) {
            return gl_matrix_1.vec3.create();
        }
        // Displace along the axis which has the most depth
        let resultingVec = gl_matrix_1.vec3.create();
        let maxDepth = 0.0;
        for (let inf of intersectionInformation) {
            // Only displace for triangles if it is along the normal
            if (inf.shapeB.getTransformedNormals().length == 1) {
                if (gl_matrix_1.vec3.dot(inf.axis, inf.shapeB.getTransformedNormals()[0]) < 0.99) {
                    continue;
                }
            }
            if (inf.depth > maxDepth) {
                gl_matrix_1.vec3.copy(resultingVec, inf.axis);
                maxDepth = inf.depth;
            }
        }
        gl_matrix_1.vec3.scale(resultingVec, resultingVec, maxDepth);
        return resultingVec;
    }
    CollisionSolver.getTranslationNeeded = getTranslationNeeded;
    function updateMomentum(collisionComp, movComp, inf, entity, axis, change) {
        if (collisionComp.isDynamic) {
            let collisionPointOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), inf.point, ESCUtils_1.ECSUtils.CalculatePosition(entity));
            let rotationAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), axis, collisionPointOffset);
            if (gl_matrix_1.vec3.sqrLen(rotationAxis) > 0.0001) {
                gl_matrix_1.vec3.normalize(rotationAxis, rotationAxis);
                let axis = gl_matrix_1.vec3.create();
                let angle = gl_matrix_1.quat.getAxisAngle(axis, movComp.momentum);
                gl_matrix_1.vec3.normalize(axis, axis);
                let rotationImpact = angle * gl_matrix_1.vec3.dot(axis, rotationAxis);
                gl_matrix_1.vec3.scale(rotationAxis, rotationAxis, (gl_matrix_1.vec3.len(change) + rotationImpact) * gl_matrix_1.vec3.len(collisionPointOffset) * 5.0);
                gl_matrix_1.quat.mul(movComp.momentum, movComp.momentum, gl_matrix_1.quat.fromEuler(gl_matrix_1.quat.create(), rotationAxis[0], rotationAxis[1], rotationAxis[2]));
            }
            else {
                movComp.momentum = gl_matrix_1.quat.create();
            }
        }
    }
    function handleCollision(intersectionInformation, e1, e2) {
        let e1MovComp = (e1.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
        let e1CollisionComp = (e1.getComponent(Component_1.ComponentTypeEnum.COLLISION));
        let e2MovComp = (e2.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
        let e2CollisionComp = (e2.getComponent(Component_1.ComponentTypeEnum.COLLISION));
        for (let inf of intersectionInformation) {
            let axis = gl_matrix_1.vec3.clone(inf.axis);
            if (inf.shapeB.getTransformedNormals().length == 1) {
                gl_matrix_1.vec3.copy(axis, inf.shapeB.getTransformedNormals()[0]);
            }
            else if (inf.shapeA.getTransformedNormals().length == 1) {
                gl_matrix_1.vec3.copy(axis, inf.shapeA.getTransformedNormals()[0]);
                gl_matrix_1.vec3.negate(axis, axis); // Make sure axis is always pointing from b to a
            }
            let e1Vel = e1MovComp ? e1MovComp.velocity : gl_matrix_1.vec3.create();
            let e2Vel = e2MovComp ? e2MovComp.velocity : gl_matrix_1.vec3.create();
            let velDifference = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), e1Vel, e2Vel);
            let dotProd = gl_matrix_1.vec3.dot(velDifference, axis);
            if (dotProd < 0.0) {
                let eN = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), velDifference, axis), axis);
                if (gl_matrix_1.vec3.squaredLength(eN) > 0.0001) {
                    gl_matrix_1.vec3.normalize(eN, eN);
                }
                let e1Change = gl_matrix_1.vec3.create();
                let e2Change = gl_matrix_1.vec3.create();
                let collisionCoefficient = Math.max(e1CollisionComp.collisionCoefficient, e2CollisionComp.collisionCoefficient); // TODO: This can be calculated differently, will be based on material abilities in the future
                let frictionCoefficient = Math.max(e1CollisionComp.frictionCoefficient, e2CollisionComp.frictionCoefficient); // TODO: This can be calculated differently, will be based on material abilities in the future
                if (e1MovComp && !e1CollisionComp.isStatic && !e1CollisionComp.isImmovable && e2MovComp && !e2CollisionComp.isStatic && !e2CollisionComp.isImmovable) {
                    let v1Dot = gl_matrix_1.vec3.dot(e1Vel, axis);
                    let v2Dot = gl_matrix_1.vec3.dot(e2Vel, axis);
                    let tangentVel1 = gl_matrix_1.vec3.dot(e1Vel, eN);
                    let tangentVel2 = gl_matrix_1.vec3.dot(e2Vel, eN);
                    let u1Dot = ((e1CollisionComp.mass - collisionCoefficient * e2CollisionComp.mass) / (e1CollisionComp.mass + e2CollisionComp.mass)) * v1Dot + ((1.0 + collisionCoefficient) * e2CollisionComp.mass) / (e1CollisionComp.mass + e2CollisionComp.mass) * v2Dot;
                    let u2Dot = ((e2CollisionComp.mass - collisionCoefficient * e1CollisionComp.mass) / (e2CollisionComp.mass + e1CollisionComp.mass)) * v2Dot + ((1.0 + collisionCoefficient) * e1CollisionComp.mass) / (e2CollisionComp.mass + e1CollisionComp.mass) * v1Dot;
                    let frictionMagnitude1 = -1.0 * (((u1Dot - v1Dot) * frictionCoefficient) < 0.0 ? 1 : 0) * Math.min(Math.abs(tangentVel1), Math.abs((u1Dot - v1Dot) * frictionCoefficient));
                    let frictionMagnitude2 = -1.0 * (((u2Dot - v2Dot) * frictionCoefficient) < 0.0 ? 1 : 0) * Math.min(Math.abs(tangentVel2), Math.abs((u2Dot - v2Dot) * frictionCoefficient));
                    gl_matrix_1.vec3.scaleAndAdd(e1Change, e1Change, axis, (u1Dot - v1Dot));
                    gl_matrix_1.vec3.scaleAndAdd(e1Change, e1Change, eN, frictionMagnitude1);
                    gl_matrix_1.vec3.scaleAndAdd(e2Change, e2Change, axis, (u2Dot - v2Dot));
                    gl_matrix_1.vec3.scaleAndAdd(e2Change, e2Change, eN, frictionMagnitude2);
                }
                else if (!e1MovComp || e1CollisionComp.isStatic || e1CollisionComp.isImmovable) {
                    let inverseVelDifference = gl_matrix_1.vec3.negate(gl_matrix_1.vec3.create(), velDifference);
                    let v2Dot = gl_matrix_1.vec3.dot(inverseVelDifference, axis);
                    let relativeTangentVel = gl_matrix_1.vec3.dot(inverseVelDifference, eN);
                    let frictionMagnitude = Math.min(relativeTangentVel * frictionCoefficient, v2Dot * (1.0 + collisionCoefficient) + frictionCoefficient);
                    gl_matrix_1.vec3.scaleAndAdd(e2Change, e2Change, axis, -v2Dot * (1.0 + collisionCoefficient));
                    gl_matrix_1.vec3.scaleAndAdd(e2Change, e2Change, eN, -frictionMagnitude);
                }
                else if (!e2MovComp || e2CollisionComp.isStatic || e2CollisionComp.isImmovable) {
                    let v1Dot = gl_matrix_1.vec3.dot(velDifference, axis);
                    let relativeTangentVel = gl_matrix_1.vec3.dot(velDifference, eN);
                    let frictionMagnitude = Math.min(relativeTangentVel * frictionCoefficient, v1Dot * (1.0 + collisionCoefficient) + frictionCoefficient);
                    gl_matrix_1.vec3.scaleAndAdd(e1Change, e1Change, axis, -v1Dot * (1.0 + collisionCoefficient));
                    gl_matrix_1.vec3.scaleAndAdd(e1Change, e1Change, eN, -frictionMagnitude);
                }
                if (e1MovComp) {
                    gl_matrix_1.vec3.add(e1Vel, e1Vel, e1Change);
                    if (e1Change[1] > 0.0) {
                        e1MovComp.onGround = true;
                    }
                    updateMomentum(e1CollisionComp, e1MovComp, inf, e1, axis, e1Change);
                }
                if (e2MovComp) {
                    gl_matrix_1.vec3.add(e2Vel, e2Vel, e2Change);
                    if (e2Change[1] > 0.0) {
                        e2MovComp.onGround = true;
                    }
                    updateMomentum(e2CollisionComp, e2MovComp, inf, e2, axis, e2Change);
                }
                let displacement = CollisionSolver.getTranslationNeeded([inf]);
                if (!e1CollisionComp.isImmovable && !e1CollisionComp.isStatic) {
                    // Prioritize the parent position component if there is one
                    let posComp = (e1.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
                    // Otherwise move the position component
                    if (!posComp) {
                        posComp = (e1.getComponent(Component_1.ComponentTypeEnum.POSITION));
                    }
                    gl_matrix_1.vec3.add(posComp.position, posComp.position, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), displacement, gl_matrix_1.vec3.len(e1Change) / (gl_matrix_1.vec3.len(e1Change) + gl_matrix_1.vec3.len(e2Change))));
                }
                if (!e2CollisionComp.isImmovable && !e2CollisionComp.isStatic) {
                    // Prioritize the parent position component if there is one
                    let posComp = (e2.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
                    // Otherwise move the position component
                    if (!posComp) {
                        posComp = (e2.getComponent(Component_1.ComponentTypeEnum.POSITION));
                    }
                    gl_matrix_1.vec3.subtract(posComp.position, posComp.position, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), displacement, gl_matrix_1.vec3.len(e2Change) / (gl_matrix_1.vec3.len(e1Change) + gl_matrix_1.vec3.len(e2Change))));
                }
            }
        }
    }
    CollisionSolver.handleCollision = handleCollision;
})(CollisionSolver = exports.CollisionSolver || (exports.CollisionSolver = {}));


/***/ }),

/***/ "./code/src/Engine/Physics/IntersectionTester.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/Physics/IntersectionTester.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionTester = void 0;
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const SAT_1 = __webpack_require__(/*! ../Maths/SAT */ "./code/src/Engine/Maths/SAT.ts");
var IntersectionTester;
(function (IntersectionTester) {
    /**
     *
     */
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
            this.axis = gl_matrix_1.vec3.clone(axis);
            this.depth = depth;
            this.point = gl_matrix_1.vec3.clone(point);
            this.shapeA = shapeA;
            this.shapeB = shapeB;
        }
    }
    IntersectionTester.IntersectionInformation = IntersectionInformation;
    /**
     * Will check if there is an intersection between two meshes.
     * @param shapeArrayA List of shapes in physical object A.
     * @param shapeArrayB List of shapes in physical object B.
     * @returns if there is an intersection.
     */
    function identifyIntersection(shapeArrayA, shapeArrayB) {
        let intersectionAxis = gl_matrix_1.vec3.create();
        let intersectionDepth = { depth: Infinity };
        for (let shapeA of shapeArrayA) {
            for (let shapeB of shapeArrayB) {
                if (SAT_1.SAT.getIntersection3D(shapeA, shapeB, intersectionAxis, intersectionDepth)) {
                    return true;
                }
            }
        }
        return false;
    }
    IntersectionTester.identifyIntersection = identifyIntersection;
    /**
     * Finds the intersection information (axises, depths, and points) between two physical objects, if they intersect
     * @param shapeArrayA List of shapes in physical object A.
     * @param shapeArrayB List of shapes in physical object B.
     * @param intersectionInformation An array that gets filled with information about all intersections happening between the two objects.
     * @returns If there is an intersection.
     */
    function identifyIntersectionInformation(shapeArrayA, shapeArrayB, intersectionInformation) {
        let intersecting = false;
        let tempIntersectionAxis = gl_matrix_1.vec3.create();
        let tempIntersectionDepth = { depth: Infinity };
        for (let shapeA of shapeArrayA) {
            for (let shapeB of shapeArrayB) {
                if (SAT_1.SAT.getIntersection3D(shapeA, shapeB, tempIntersectionAxis, tempIntersectionDepth)) {
                    intersecting = true;
                    // Save information about intersection
                    intersectionInformation.push(new IntersectionInformation(tempIntersectionAxis, tempIntersectionDepth.depth, SAT_1.SAT.getIntersectionPoint(shapeA, shapeB, tempIntersectionAxis), shapeA, shapeB));
                }
            }
        }
        return intersecting;
    }
    IntersectionTester.identifyIntersectionInformation = identifyIntersectionInformation;
    /**
     * Finds the closest ray cast hit between a ray and an array of shapes
     * @param ray Ray shape
     * @param shapeArray shape array to cast against
     * @param maxDistance The furthest allowed hit
     * @param breakOnFirstHit If the first hit should be returned immediately
     * @returns the closest hit
     */
    function doRayCast(ray, shapeArray, maxDistance = Infinity, breakOnFirstHit = false) {
        let closestHit = -1.0;
        for (const shape of shapeArray) {
            let [dist, _] = SAT_1.SAT.getContinousIntersection3D(ray, shape, ray.getDir(), gl_matrix_1.vec3.create(), maxDistance);
            if (dist >= 0.0 && (dist < closestHit || closestHit < 0)) {
                closestHit = dist;
                maxDistance = closestHit;
                if (breakOnFirstHit) {
                    return closestHit;
                }
            }
        }
        return closestHit;
    }
    IntersectionTester.doRayCast = doRayCast;
    /**
     * Finds the closest continous collision hit between two shape arrays with velocities
     * @param shapeArrayA List of shapes in physical object A.
     * @param shapeArrayB List of shapes in physical object B.
     * @param maxDistance The furthest allowed hit
     * @param breakOnFirstHit If the first hit should be returned immediately
     * @returns the closest hit
     */
    function doContinousIntersection(shapeArrayA, shapeAVelocity, shapeArrayB, shapeBVelocity, maxDistance = Infinity, allow0Collision = true, breakOnFirstHit = false) {
        let earliestHit = -1.0;
        let intersectionVec = null;
        for (let shapeA of shapeArrayA) {
            for (let shapeB of shapeArrayB) {
                let [dist, iVec] = SAT_1.SAT.getContinousIntersection3D(shapeA, shapeB, shapeAVelocity, shapeBVelocity, maxDistance);
                if (((allow0Collision && dist >= 0.0) || (dist > 0.0)) && (dist < earliestHit || earliestHit < 0)) {
                    earliestHit = dist;
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
    IntersectionTester.doContinousIntersection = doContinousIntersection;
})(IntersectionTester = exports.IntersectionTester || (exports.IntersectionTester = {}));


/***/ }),

/***/ "./code/src/Engine/Physics/Shapes/OBB.ts":
/*!***********************************************!*\
  !*** ./code/src/Engine/Physics/Shapes/OBB.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Shape_1 = __webpack_require__(/*! ./Shape */ "./code/src/Engine/Physics/Shapes/Shape.ts");
class OBB extends Shape_1.default {
    constructor() {
        super();
        this.originalVertices = new Array();
        this.originalNormals = new Array();
        this.transformedVertices = new Array();
        this.transformedNormals = new Array();
        this.transformMatrix = gl_matrix_1.mat4.create();
        this.inverseMatrix = gl_matrix_1.mat4.create();
        this.verticesNeedsUpdate = false;
        this.normalsNeedsUpdate = false;
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
        this.originalNormals.push(gl_matrix_1.vec3.fromValues(1.0, 0.0, 0.0));
        this.originalNormals.push(gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0));
        this.originalNormals.push(gl_matrix_1.vec3.fromValues(0.0, 0.0, 1.0));
        this.originalVertices.length = 0;
        for (let i = 0; i < 8; i++) {
            this.originalVertices.push(gl_matrix_1.vec3.create());
        }
        gl_matrix_1.vec3.copy(this.originalVertices[0], minVec);
        gl_matrix_1.vec3.set(this.originalVertices[1], minVec[0], minVec[1], maxVec[2]);
        gl_matrix_1.vec3.set(this.originalVertices[2], minVec[0], maxVec[1], minVec[2]);
        gl_matrix_1.vec3.set(this.originalVertices[3], minVec[0], maxVec[1], maxVec[2]);
        gl_matrix_1.vec3.set(this.originalVertices[4], maxVec[0], minVec[1], minVec[2]);
        gl_matrix_1.vec3.set(this.originalVertices[5], maxVec[0], minVec[1], maxVec[2]);
        gl_matrix_1.vec3.set(this.originalVertices[6], maxVec[0], maxVec[1], minVec[2]);
        gl_matrix_1.vec3.copy(this.originalVertices[7], maxVec);
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
            let resultingMatrix = gl_matrix_1.mat4.mul(gl_matrix_1.mat4.create(), this.inverseMatrix, this.transformMatrix);
            for (const originalVertex of this.originalVertices) {
                this.transformedVertices.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), originalVertex, resultingMatrix));
            }
            this.verticesNeedsUpdate = false;
        }
        return this.transformedVertices;
    }
    getTransformedNormals() {
        if (this.normalsNeedsUpdate) {
            this.transformedNormals.length = 0;
            for (const originalNormal of this.originalNormals) {
                this.transformedNormals.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformMat3(gl_matrix_1.vec3.create(), originalNormal, gl_matrix_1.mat3.normalFromMat4(gl_matrix_1.mat3.create(), this.transformMatrix))));
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
}
exports["default"] = OBB;


/***/ }),

/***/ "./code/src/Engine/Physics/Shapes/Ray.ts":
/*!***********************************************!*\
  !*** ./code/src/Engine/Physics/Shapes/Ray.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Shape_1 = __webpack_require__(/*! ./Shape */ "./code/src/Engine/Physics/Shapes/Shape.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class Ray extends Shape_1.default {
    constructor() {
        super();
        this.start = gl_matrix_1.vec3.create();
        this.dir = gl_matrix_1.vec3.fromValues(0.0, 0.0, 1.0);
        this.inverseMatrix = gl_matrix_1.mat4.create();
    }
    setStart(start) {
        this.start = start;
    }
    setDir(dir) {
        gl_matrix_1.vec3.normalize(this.dir, dir);
    }
    getDir() {
        return this.getTransformedNormals()[0];
    }
    setStartAndDir(start, dir) {
        gl_matrix_1.vec3.copy(this.start, start);
        gl_matrix_1.vec3.normalize(this.dir, dir);
    }
    setInverseMatrix(matrix) {
        this.inverseMatrix = matrix;
    }
    getTransformedVertices() {
        return [gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), this.start, this.inverseMatrix)];
    }
    getTransformedNormals() {
        let start = this.getTransformedVertices()[0];
        let end = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), this.start, this.dir), this.inverseMatrix);
        return [gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), end, start)]; // Not normalized because we want to keep distances
    }
    getTransformedEdges() {
        return [];
    }
    getTransformedEdgeNormals() {
        return [];
    }
    ;
}
exports["default"] = Ray;


/***/ }),

/***/ "./code/src/Engine/Physics/Shapes/Shape.ts":
/*!*************************************************!*\
  !*** ./code/src/Engine/Physics/Shapes/Shape.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Shape {
    constructor() {
        this.margin = 0.0;
    }
    setUpdateNeeded() { }
    setTransformMatrix(matrix) { }
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
}
exports["default"] = Shape;


/***/ }),

/***/ "./code/src/Engine/Physics/Shapes/Triangle.ts":
/*!****************************************************!*\
  !*** ./code/src/Engine/Physics/Shapes/Triangle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Shape_1 = __webpack_require__(/*! ./Shape */ "./code/src/Engine/Physics/Shapes/Shape.ts");
class Triangle extends Shape_1.default {
    constructor() {
        super();
        this.originalVertices = new Array();
        this.originalNormal = gl_matrix_1.vec3.create();
        this.transformedVertices = new Array();
        this.transformedNormals = new Array(1);
        this.transformedEdges = new Array();
        this.transformedEdgeNormals = new Array();
        this.transformMatrix = gl_matrix_1.mat4.create();
        this.verticesNeedsUpdate = false;
        this.normalNeedsUpdate = false;
        this.edgesNeedsUpdate = false;
        this.edgeNormalsNeedsUpdate = false;
    }
    setVertices(vertex1, vertex2, vertex3) {
        this.originalVertices.length = 0;
        this.transformedEdges.length = 0;
        this.originalVertices.push(vertex1);
        this.originalVertices.push(vertex2);
        this.originalVertices.push(vertex3);
        gl_matrix_1.vec3.normalize(this.originalNormal, gl_matrix_1.vec3.cross(this.originalNormal, gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), vertex2, vertex1), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), vertex3, vertex2)));
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    setUpdateNeeded() {
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    setTransformMatrix(matrix) {
        this.transformMatrix = matrix;
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    getOriginalVertices() {
        return this.originalVertices;
    }
    getTransformedVertices() {
        if (this.verticesNeedsUpdate) {
            this.transformedVertices.length = 0;
            for (const originalVertex of this.originalVertices) {
                let transformedVertex = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(originalVertex[0], originalVertex[1], originalVertex[2]), this.transformMatrix);
                this.transformedVertices.push(transformedVertex);
            }
            this.verticesNeedsUpdate = false;
        }
        return this.transformedVertices;
    }
    getTransformedNormals() {
        if (this.normalNeedsUpdate) {
            this.transformedNormals.length = 0;
            this.transformedNormals.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformMat3(gl_matrix_1.vec3.create(), this.originalNormal, gl_matrix_1.mat3.normalFromMat4(gl_matrix_1.mat3.create(), this.transformMatrix))));
            this.normalNeedsUpdate = false;
        }
        return this.transformedNormals;
    }
    getTransformedEdges() {
        if (this.edgesNeedsUpdate) {
            this.getTransformedVertices(); // Force update of vertices
            this.transformedEdges.length = 0;
            this.transformedEdges.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this.transformedVertices[1], this.transformedVertices[0])));
            this.transformedEdges.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this.transformedVertices[2], this.transformedVertices[1])));
            this.transformedEdges.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this.transformedVertices[0], this.transformedVertices[2])));
            this.edgesNeedsUpdate = false;
        }
        return this.transformedEdges;
    }
    getTransformedEdgeNormals() {
        if (this.edgeNormalsNeedsUpdate) {
            this.getTransformedEdges(); // Force update of edges
            this.getTransformedNormals(); // Force update of normal
            this.transformedEdgeNormals.length = 0;
            this.transformedEdgeNormals.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), this.transformedEdges[0], this.transformedNormals[0])));
            this.transformedEdgeNormals.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), this.transformedEdges[1], this.transformedNormals[0])));
            this.transformedEdgeNormals.push(gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), this.transformedEdges[2], this.transformedNormals[0])));
            this.edgeNormalsNeedsUpdate = false;
        }
        return this.transformedEdgeNormals;
    }
}
exports["default"] = Triangle;


/***/ }),

/***/ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts":
/*!***************************************************************!*\
  !*** ./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class Framebuffer {
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
        this.fbo = main_1.gl.createFramebuffer();
        main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, this.fbo);
        this.setupAttachments();
        if (main_1.gl.checkFramebufferStatus(main_1.gl.FRAMEBUFFER) != main_1.gl.FRAMEBUFFER_COMPLETE) {
            console.warn("ERROR::FRAMEBUFFER:: Framebuffer is not complete!");
        }
        main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, null);
    }
    setupAttachments() {
        let attachments = new Array();
        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].setTextureData(null, this.width, this.height);
            if (this.textures[i].textureTarget == main_1.gl.TEXTURE_CUBE_MAP) {
                // This is a cube map, set the positive x as target and rendering loop will take care of switching target to the correct side 
                main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.COLOR_ATTACHMENT0 + i, main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X, this.textures[i].texture, 0);
                attachments.push(main_1.gl.COLOR_ATTACHMENT0 + i);
            }
            else {
                // This is a normal 2D texture, set TexParameters to something fitting for a framebuffer target, and set up the target.
                this.textures[i].setTexParameterI(main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR);
                this.textures[i].setTexParameterI(main_1.gl.TEXTURE_MAG_FILTER, main_1.gl.LINEAR);
                this.textures[i].setTexParameterI(main_1.gl.TEXTURE_WRAP_S, main_1.gl.CLAMP_TO_EDGE);
                this.textures[i].setTexParameterI(main_1.gl.TEXTURE_WRAP_T, main_1.gl.CLAMP_TO_EDGE);
                main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.COLOR_ATTACHMENT0 + i, main_1.gl.TEXTURE_2D, this.textures[i].texture, 0);
                attachments.push(main_1.gl.COLOR_ATTACHMENT0 + i);
            }
        }
        // Attach drawing targets
        main_1.gl.drawBuffers(attachments);
        if (this.depthTexture != undefined) {
            // There is a defined depth texture, null it's content with the correct width and height
            this.depthTexture.setTextureData(null, this.width, this.height);
            if (this.depthTexture.textureTarget == main_1.gl.TEXTURE_CUBE_MAP) {
                // The depth texture is a cube map, set the positive x as target and rendering loop will take care of switching target to the correct side 
                main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_ATTACHMENT, main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X, this.depthTexture.texture, 0);
            }
            else {
                // The depth texture is a normal 2D texture, set up the appropriate target
                main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_ATTACHMENT, main_1.gl.TEXTURE_2D, this.depthTexture.texture, 0);
            }
        }
        else {
            // We have no defined depth texture, use a render buffer instead
            this.rbo = main_1.gl.createRenderbuffer();
            main_1.gl.bindRenderbuffer(main_1.gl.RENDERBUFFER, this.rbo);
            main_1.gl.renderbufferStorage(main_1.gl.RENDERBUFFER, main_1.gl.DEPTH_STENCIL, this.width, this.height);
            main_1.gl.framebufferRenderbuffer(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_STENCIL_ATTACHMENT, main_1.gl.RENDERBUFFER, this.rbo);
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
            main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, this.fbo);
            main_1.gl.bindRenderbuffer(main_1.gl.RENDERBUFFER, this.rbo);
            main_1.gl.renderbufferStorage(main_1.gl.RENDERBUFFER, main_1.gl.DEPTH24_STENCIL8, width, height);
            main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, null);
        }
    }
    /**
     * Bind this framebuffer to the sent in target
     * @param target framebuffer target (for example gl.FRAMEBUFFER, gl.DRAW_FRAMEBUFFER, gl.READ_FRAMEBUFFER)
     */
    bind(target) {
        main_1.gl.bindFramebuffer(target, this.fbo);
    }
}
exports["default"] = Framebuffer;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Button.ts":
/*!*********************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Button.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ./GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class Button extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.textSize = 42;
        // make an input node and a label node
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
        if (this.onClickFunction != undefined) {
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
}
exports["default"] = Button;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Checkbox.ts":
/*!***********************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Checkbox.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ./GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class Checkbox extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.textSize = 42;
        // make an input node and a label node
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
}
exports["default"] = Checkbox;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Div.ts":
/*!******************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Div.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ./GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class Div extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
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
}
exports["default"] = Div;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts":
/*!************************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
class GuiObject {
    constructor(parentDiv) {
        this.removed = false;
        this.position2D = gl_matrix_1.vec2.create();
        this.fontSize = 42;
        this.scaleWithWindow = true;
        this.textString = "";
        this.center = false;
        // look up the guicontainer
        this.divContainerElement = (document.getElementById("guicontainer"));
        // make the div
        this.div = document.createElement("div");
        // assign it a CSS class
        this.div.className = "floating-div";
        if (parentDiv != undefined) {
            parentDiv.appendChild(this);
            this.div.style.position = "relative";
            this.hasParent = true;
        }
        else {
            // add it to the divcontainer
            this.divContainerElement.appendChild(this.div);
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
            this.div.style.fontSize =
                this.fontSize * (main_1.windowInfo.resolutionHeight / 1080.0) + "px";
        }
        else {
            this.div.style.fontSize = this.fontSize + "px";
        }
        if (this.center) {
            this.div.style.transform = "translate(-50%,-50%)";
        }
    }
    draw() { }
}
exports["default"] = GuiObject;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Progress.ts":
/*!***********************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Progress.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const GuiObject_1 = __webpack_require__(/*! ./GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class Progress extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.size = 42;
        // make a text node for its content
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
}
exports["default"] = Progress;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Slider.ts":
/*!*********************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Slider.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ./GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class Slider extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.textSize = 42;
        // make an input node and a label node
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
}
exports["default"] = Slider;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Text/EditText.ts":
/*!****************************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Text/EditText.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ../GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class EditText extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.textSize = 42;
        // make an input node and a label node
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
        if (this.onChangeFn != undefined) {
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
}
exports["default"] = EditText;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Text/TextObject2D.ts":
/*!********************************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Text/TextObject2D.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ../GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class TextObject2D extends GuiObject_1.default {
    constructor(parentDiv) {
        super(parentDiv);
        this.position = gl_matrix_1.vec2.create();
        this.size = 42;
    }
    draw() {
        this.position2D = this.position;
        this.fontSize = this.size;
        this.div.textContent = this.textString;
        this.drawObject();
    }
}
exports["default"] = TextObject2D;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/Objects/Text/TextObject3D.ts":
/*!********************************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/Objects/Text/TextObject3D.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GuiObject_1 = __webpack_require__(/*! ../GuiObject */ "./code/src/Engine/Rendering/GUI/Objects/GuiObject.ts");
class TextObject3D extends GuiObject_1.default {
    constructor() {
        super();
        this.position = gl_matrix_1.vec3.create();
        this.size = 42;
        this.scaleFontWithDistance = true;
    }
    setHidden(hidden) {
        super.setHidden(hidden);
        this.hidden = hidden;
    }
    draw3D(viewProj) {
        let pos = gl_matrix_1.vec4.fromValues(this.position[0], this.position[1], this.position[2], 1.0);
        let screenCoords = gl_matrix_1.vec4.transformMat4(gl_matrix_1.vec4.create(), pos, viewProj);
        screenCoords[0] =
            (screenCoords[0] / screenCoords[3] + 1.0) / 2.0;
        screenCoords[1] =
            1.0 - (screenCoords[1] / screenCoords[3] + 1.0) / 2.0;
        if (screenCoords[2] > 0.0 && !this.hidden) {
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
        }
        else {
            this.div.hidden = true;
        }
    }
}
exports["default"] = TextObject3D;


/***/ }),

/***/ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts":
/*!***********************************************************!*\
  !*** ./code/src/Engine/Rendering/GUI/OverlayRendering.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OverlayRendering = void 0;
const Button_1 = __webpack_require__(/*! ./Objects/Button */ "./code/src/Engine/Rendering/GUI/Objects/Button.ts");
const Checkbox_1 = __webpack_require__(/*! ./Objects/Checkbox */ "./code/src/Engine/Rendering/GUI/Objects/Checkbox.ts");
const Div_1 = __webpack_require__(/*! ./Objects/Div */ "./code/src/Engine/Rendering/GUI/Objects/Div.ts");
const Progress_1 = __webpack_require__(/*! ./Objects/Progress */ "./code/src/Engine/Rendering/GUI/Objects/Progress.ts");
const Slider_1 = __webpack_require__(/*! ./Objects/Slider */ "./code/src/Engine/Rendering/GUI/Objects/Slider.ts");
const EditText_1 = __webpack_require__(/*! ./Objects/Text/EditText */ "./code/src/Engine/Rendering/GUI/Objects/Text/EditText.ts");
const TextObject2D_1 = __webpack_require__(/*! ./Objects/Text/TextObject2D */ "./code/src/Engine/Rendering/GUI/Objects/Text/TextObject2D.ts");
const TextObject3D_1 = __webpack_require__(/*! ./Objects/Text/TextObject3D */ "./code/src/Engine/Rendering/GUI/Objects/Text/TextObject3D.ts");
class OverlayRendering {
    // -----------------------
    constructor(camera = null) {
        this.camera = camera;
        // ---- GUI rendering ----
        this.guiObjects3D = new Array();
        this.guiObjects2D = new Array();
        // -----------------------
    }
    setCamera(camera) {
        this.camera = camera;
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
                // Only change top level objects
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
                // Only change top level objects
                guiObject2D.setHidden(false);
            }
        }
        for (let guiObject3D of this.guiObjects3D) {
            guiObject3D.setHidden(false);
        }
    }
    getNew3DText() {
        const length = this.guiObjects3D.push(new TextObject3D_1.default());
        return this.guiObjects3D[length - 1];
    }
    getNew2DText(parentDiv) {
        const length = this.guiObjects2D.push(new TextObject2D_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewCheckbox(parentDiv) {
        const length = this.guiObjects2D.push(new Checkbox_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewButton(parentDiv) {
        const length = this.guiObjects2D.push(new Button_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewSlider(parentDiv) {
        const length = this.guiObjects2D.push(new Slider_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewEditText(parentDiv) {
        const length = this.guiObjects2D.push(new EditText_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewProgress(parentDiv) {
        const length = this.guiObjects2D.push(new Progress_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    getNewDiv(parentDiv) {
        const length = this.guiObjects2D.push(new Div_1.default(parentDiv));
        return this.guiObjects2D[length - 1];
    }
    draw() {
        // ---- GUI rendering ----
        if (this.camera != undefined) {
            for (let i = 0; i < this.guiObjects3D.length; i++) {
                if (!this.guiObjects3D[i].removed) {
                    this.guiObjects3D[i].draw3D(this.camera.getViewProjMatrix());
                }
                else {
                    this.guiObjects3D.splice(i, 1);
                    i--;
                }
            }
        }
        for (let i = 0; i < this.guiObjects2D.length; i++) {
            if (!this.guiObjects2D[i].removed) {
                this.guiObjects2D[i].draw();
            }
            else {
                this.guiObjects2D.splice(i, 1);
                i--;
            }
        }
        // -----------------------
    }
}
exports.OverlayRendering = OverlayRendering;


/***/ }),

/***/ "./code/src/Engine/Rendering/Lighting/DirectionalLight.ts":
/*!****************************************************************!*\
  !*** ./code/src/Engine/Rendering/Lighting/DirectionalLight.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class DirectionalLight {
    constructor(gl, shaderProgram) {
        gl = gl;
        this.shaderProgram = shaderProgram;
        this.direction = gl_matrix_1.vec3.fromValues(0.0, -1.0, -0.5);
        this.colour = gl_matrix_1.vec3.fromValues(0.2, 0.2, 0.2);
        this.ambientMultiplier = 0.1;
        this.lightProjectionBoxSideLength = 50.0;
    }
    bind() {
        main_1.gl.uniform3fv(this.shaderProgram.getUniformLocation("directionalLight.direction")[0], gl_matrix_1.vec3.normalize(this.direction, this.direction));
        main_1.gl.uniform3fv(this.shaderProgram.getUniformLocation("directionalLight.colour")[0], this.colour);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("directionalLight.ambientMultiplier")[0], this.ambientMultiplier);
    }
    calcAndSendLightSpaceMatrix(focusPos, offset, uniformLocation) {
        let cameraPos = gl_matrix_1.vec3.clone(focusPos);
        let offsetVec = gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), this.direction), offset);
        let lightSpaceMatrix = gl_matrix_1.mat4.ortho(gl_matrix_1.mat4.create(), -this.lightProjectionBoxSideLength, this.lightProjectionBoxSideLength, -this.lightProjectionBoxSideLength, this.lightProjectionBoxSideLength, 0.1, offset * 2.0); // Start by setting it to projection
        gl_matrix_1.vec3.subtract(cameraPos, cameraPos, offsetVec);
        let lightView = gl_matrix_1.mat4.lookAt(gl_matrix_1.mat4.create(), cameraPos, focusPos, gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0)); // This will make it impossible to have exactly straight down shadows, but I'm fine with that
        gl_matrix_1.mat4.mul(lightSpaceMatrix, lightSpaceMatrix, lightView);
        main_1.gl.uniformMatrix4fv(uniformLocation, false, lightSpaceMatrix);
    }
}
exports["default"] = DirectionalLight;


/***/ }),

/***/ "./code/src/Engine/Rendering/Lighting/PointLight.ts":
/*!**********************************************************!*\
  !*** ./code/src/Engine/Rendering/Lighting/PointLight.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const CubeMap_1 = __webpack_require__(/*! ../Textures/CubeMap */ "./code/src/Engine/Rendering/Textures/CubeMap.ts");
const Framebuffer_1 = __webpack_require__(/*! ../Framebuffers/Framebuffer */ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts");
class PointLight {
    constructor() {
        this.position = gl_matrix_1.vec3.fromValues(0.0, 0.0, 0.0);
        this.colour = gl_matrix_1.vec3.fromValues(1.0, 1.0, 1.0);
        this.constant = 1.0;
        this.linear = 0.07;
        this.quadratic = 0.017;
        this.castShadow = false;
        // this.depthMapGenerated = false;
        // this.radius = (-this.linear + Math.sqrt(this.linear * this.linear - 4.0 * this.quadratic * (this.constant - (256.0 / 5.0)))) / (2.0 * this.quadratic);
        this.pointShadowDepthMap = new CubeMap_1.default(false, main_1.gl.DEPTH_COMPONENT32F, main_1.gl.DEPTH_COMPONENT, main_1.gl.FLOAT);
        this.pointShadowDepthMap.setTextureData(null, 1024, 1024);
        this.pointShadowBuffer = new Framebuffer_1.default(1024, 1024, [], this.pointShadowDepthMap);
    }
    bind(lightIndex, depthMapIndex, shaderProgram) {
        let ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].position");
        if (ul[1]) {
            main_1.gl.uniform3fv(ul[0], this.position);
        }
        ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].colour");
        if (ul[1]) {
            main_1.gl.uniform3fv(ul[0], this.colour);
        }
        ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].constant");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.constant);
        }
        ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].linear");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.linear);
        }
        ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].quadratic");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.quadratic);
        }
        ul = shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].pointDepthMapIndex");
        if (ul[1]) {
            main_1.gl.uniform1i(ul[0], this.castShadow ? depthMapIndex : -1);
        }
    }
}
exports["default"] = PointLight;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/DefferedRendering/GeometryRenderPass.ts":
/*!****************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/DefferedRendering/GeometryRenderPass.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const Framebuffer_1 = __webpack_require__(/*! ../../Framebuffers/Framebuffer */ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts");
const GeometryPass_1 = __webpack_require__(/*! ../../ShaderPrograms/DeferredRendering/GeometryPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts");
const GrassShaderProgram_1 = __webpack_require__(/*! ../../ShaderPrograms/GrassShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/GrassShaderProgram.ts");
const Texture_1 = __webpack_require__(/*! ../../Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
class GeometryRenderPass {
    constructor() {
        this.outputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [
            new Texture_1.default(false, main_1.gl.RGBA32F, main_1.gl.RGBA, main_1.gl.FLOAT),
            new Texture_1.default(false, main_1.gl.RGBA32F, main_1.gl.RGBA, main_1.gl.FLOAT),
            new Texture_1.default(false),
            new Texture_1.default(false),
        ], null);
    }
    setResolution(x, y) {
        this.outputFramebuffer.setProportions(x, y);
    }
    draw(scene, camera) {
        main_1.gl.viewport(0.0, 0.0, main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        // Bind gbuffer and clear that with 0,0,0,0 (the alpha = 0 is important to be able to identify fragments in the lighting pass that have not been written with geometry)
        this.outputFramebuffer.bind(main_1.gl.FRAMEBUFFER);
        main_1.gl.clearColor(0.0, 0.0, 0.0, 0.0);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT | main_1.gl.STENCIL_BUFFER_BIT);
        GeometryPass_1.geometryPass.use();
        camera.bindViewProjMatrix(GeometryPass_1.geometryPass.getUniformLocation("viewProjMatrix")[0]);
        scene.renderScene(GeometryPass_1.geometryPass, true);
        GrassShaderProgram_1.grassShaderProgram.use();
        camera.bindViewProjMatrix(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("viewProjMatrix")[0]);
        main_1.gl.uniform3fv(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
        main_1.gl.uniform1f(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
        scene.renderGrass(GrassShaderProgram_1.grassShaderProgram, true);
    }
}
exports["default"] = GeometryRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/DefferedRendering/LightingRenderPass.ts":
/*!****************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/DefferedRendering/LightingRenderPass.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ScreenQuad_1 = __webpack_require__(/*! ../../../Objects/GraphicsObjects/ScreenQuad */ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts");
const LightingPass_1 = __webpack_require__(/*! ../../ShaderPrograms/DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class LightingRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(LightingPass_1.lightingPass, inputTextures);
    }
    setResolution(x, y) {
        this.outputFramebuffer.setProportions(x, y);
    }
    draw(scene, camera) {
        // Disable depth testing for screen quad(s) rendering
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Lighting pass ----
        LightingPass_1.lightingPass.use();
        main_1.gl.uniform3fv(LightingPass_1.lightingPass.getUniformLocation("camPos")[0], camera.getPosition());
        scene.directionalLight.bind();
        scene.directionalLight.calcAndSendLightSpaceMatrix(gl_matrix_1.vec3.clone(camera.getPosition()), 20.0, LightingPass_1.lightingPass.getUniformLocation("lightSpaceMatrix")[0]);
        // Point lights
        main_1.gl.uniform1i(LightingPass_1.lightingPass.getUniformLocation("nrOfPointLights")[0], scene.pointLights.length);
        // Bind pointLights, with counter as depthMapIndex
        let counter = 0;
        for (let i = 0; i < scene.pointLights.length; i++) {
            scene.pointLights[i].bind(i, counter, LightingPass_1.lightingPass);
            if (scene.pointLights[i].castShadow) {
                counter++;
            }
        }
        // Bind all textures except the point light depth maps
        for (let i = 0; i < this.screenQuad.textures.length; i++) {
            this.screenQuad.textures[i].bind(i);
        }
        // Then bind the point light depth maps 
        counter = this.screenQuad.textures.length;
        for (const pointLight of scene.pointLights) {
            if (counter - this.screenQuad.textures.length >= LightingPass_1.pointShadowsToAllocate) {
                break;
            }
            if (pointLight.castShadow) {
                pointLight.pointShadowDepthMap.bind(counter++);
            }
        }
        this.screenQuad.draw(false);
        // -----------------------
        // Enable depth test again
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports["default"] = LightingRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/FinishedOutputRenderPass.ts":
/*!****************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/FinishedOutputRenderPass.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const ScreenQuad_1 = __webpack_require__(/*! ../../Objects/GraphicsObjects/ScreenQuad */ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ShaderPrograms/ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
class FinishedOutputRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(ScreenQuadShaderProgram_1.screenQuadShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    draw() {
        main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Crt effect ----
        ScreenQuadShaderProgram_1.screenQuadShaderProgram.use();
        this.screenQuad.draw(true);
        // --------------------
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports["default"] = FinishedOutputRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/ParticleRenderPass.ts":
/*!**********************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/ParticleRenderPass.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const ParticleShaderProgram_1 = __webpack_require__(/*! ../ShaderPrograms/ParticleShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ParticleShaderProgram.ts");
const ScreenQuad_1 = __webpack_require__(/*! ../../Objects/GraphicsObjects/ScreenQuad */ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ShaderPrograms/ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
class ParticleRenderPass {
    constructor(inputTextures) {
        this.outputBuffer = null;
        this.textures = inputTextures;
        this.screenQuad = new ScreenQuad_1.default(ScreenQuadShaderProgram_1.screenQuadShaderProgram, inputTextures);
    }
    bindFramebuffers() {
        // Render result to screen or to crt framebuffer if doing crt effect after this.
        if (this.outputBuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputBuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw(scene, camera) {
        main_1.gl.clearBufferfv(main_1.gl.COLOR, 1, [0.0, 0.0, 0.0, 1.0]);
        if (scene.particleSpawners.length > 0) {
            // only do this if there are any particle spawners
            ParticleShaderProgram_1.particleShaderProgram.use();
            camera.bindViewProjMatrix(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("viewProjMatrix")[0]);
            main_1.gl.uniform3fv(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
            main_1.gl.uniform1f(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
            for (const particleSpawner of scene.particleSpawners.values()) {
                particleSpawner.draw();
            }
        }
        // this.bindFramebuffers();
        // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
        // // Blurred particles
        // blurTransparency.use();
        // this.screenQuad.draw(true);
        // Sharp particles
        // screenQuadShaderProgram.use();
        // this.textures[0].bind(0);
        // this.screenQuad.draw(false);
    }
}
exports["default"] = ParticleRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/PostProcessing/BloomRenderPass.ts":
/*!**********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/PostProcessing/BloomRenderPass.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const Framebuffer_1 = __webpack_require__(/*! ../../Framebuffers/Framebuffer */ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts");
const Texture_1 = __webpack_require__(/*! ../../Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
const ScreenQuad_1 = __webpack_require__(/*! ../../../Objects/GraphicsObjects/ScreenQuad */ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../../ShaderPrograms/ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const BloomExtraction_1 = __webpack_require__(/*! ../../ShaderPrograms/PostProcessing/BloomExtraction */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomExtraction.ts");
const BloomBlending_1 = __webpack_require__(/*! ../../ShaderPrograms/PostProcessing/BloomBlending */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomBlending.ts");
class BloomRenderPass {
    constructor(inputTextures) {
        this.bloomResolutionWidth = 1280;
        this.bloomResolutionHeight = 720;
        this.bloomExtractionOutputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false), new Texture_1.default(false)], null);
        this.bloomLevelsFramebuffers = new Array();
        for (let i = 1; i <= 5; i++) {
            this.bloomLevelsFramebuffers.push(new Framebuffer_1.default(this.bloomResolutionWidth * Math.pow(0.5, i), this.bloomResolutionHeight * Math.pow(0.5, i), [new Texture_1.default(false)], null));
        }
        this.screenQuad = new ScreenQuad_1.default(ScreenQuadShaderProgram_1.screenQuadShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    setResolution(x, y) {
        this.bloomExtractionOutputFramebuffer.setProportions(x, y);
    }
    bindFramebuffers() {
        // Render result to screen or to crt framebuffer if doing crt effect after this.
        if (this.outputFramebuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw() {
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // Extract the bloom areas
        this.bloomExtractionOutputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        BloomExtraction_1.bloomExtraction.use();
        this.screenQuad.draw(true);
        // Downscale the image and save every iteration
        ScreenQuadShaderProgram_1.screenQuadShaderProgram.use();
        this.bloomExtractionOutputFramebuffer.textures[1].bind(0);
        for (let i = 0; i < this.bloomLevelsFramebuffers.length; i++) {
            main_1.gl.viewport(0, 0, this.bloomResolutionWidth * Math.pow(0.5, i + 1), this.bloomResolutionHeight * Math.pow(0.5, i + 1));
            this.bloomLevelsFramebuffers[i].bind(main_1.gl.DRAW_FRAMEBUFFER);
            this.screenQuad.draw(false);
            this.bloomLevelsFramebuffers[i].textures[0].bind(0);
        }
        // Combine the normal image with bloom iterations
        BloomBlending_1.bloomBlending.use();
        main_1.gl.viewport(0, 0, main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        this.bloomExtractionOutputFramebuffer.textures[0].bind(0); // Normal scene
        // Bloom levels
        for (let i = 0; i < this.bloomLevelsFramebuffers.length; i++) {
            this.bloomLevelsFramebuffers[i].textures[0].bind(i + 1);
        }
        this.bindFramebuffers();
        this.screenQuad.draw(false);
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports["default"] = BloomRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/PostProcessing/CRTRenderPass.ts":
/*!********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/PostProcessing/CRTRenderPass.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const CrtShaderProgram_1 = __webpack_require__(/*! ../../ShaderPrograms/PostProcessing/CrtShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/CrtShaderProgram.ts");
const ScreenQuad_1 = __webpack_require__(/*! ../../../Objects/GraphicsObjects/ScreenQuad */ "./code/src/Engine/Objects/GraphicsObjects/ScreenQuad.ts");
class CRTRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(CrtShaderProgram_1.crtShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    bindFramebuffers() {
        if (this.outputFramebuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw() {
        this.bindFramebuffers();
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Crt effect ----
        CrtShaderProgram_1.crtShaderProgram.use();
        this.screenQuad.draw(true);
        // --------------------
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports["default"] = CRTRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/ShadowPasses/DirectionalShadowRenderPass.ts":
/*!********************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/ShadowPasses/DirectionalShadowRenderPass.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const Framebuffer_1 = __webpack_require__(/*! ../../Framebuffers/Framebuffer */ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts");
const GrassShadowPass_1 = __webpack_require__(/*! ../../ShaderPrograms/ShadowMapping/GrassShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/GrassShadowPass.ts");
const ShadowPass_1 = __webpack_require__(/*! ../../ShaderPrograms/ShadowMapping/ShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass.ts");
const Texture_1 = __webpack_require__(/*! ../../Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class DirectionalShadowRenderPass {
    // ------------------------
    constructor() {
        // ---- Shadow mapping ----
        this.shadowResolution = 4096;
        this.shadowOffset = 20.0;
        this.shadowBuffer = new Framebuffer_1.default(this.shadowResolution, this.shadowResolution, [], new Texture_1.default(false, main_1.gl.DEPTH_COMPONENT32F, main_1.gl.DEPTH_COMPONENT, main_1.gl.FLOAT));
        // ------------------------
    }
    setShadowMappingResolution(res) {
        this.shadowResolution = res;
        this.shadowBuffer.setProportions(res, res);
    }
    draw(scene, camera) {
        this.shadowBuffer.bind(main_1.gl.FRAMEBUFFER);
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        // ---- Shadow pass ----
        ShadowPass_1.shadowPass.use();
        main_1.gl.viewport(0, 0, this.shadowResolution, this.shadowResolution);
        main_1.gl.clearColor(1.0, 1.0, 1.0, 1.0);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT);
        // gl.enable(gl.CULL_FACE);
        // gl.cullFace(gl.FRONT);
        //Set uniforms
        scene
            .getDirectionalLight()
            .calcAndSendLightSpaceMatrix(gl_matrix_1.vec3.clone(camera.getPosition()), this.shadowOffset, ShadowPass_1.shadowPass.getUniformLocation("lightSpaceMatrix")[0]);
        //Render shadow pass
        scene.renderScene(ShadowPass_1.shadowPass, false);
        // Grass
        GrassShadowPass_1.grassShadowPass.use();
        //Set uniforms
        scene
            .getDirectionalLight()
            .calcAndSendLightSpaceMatrix(gl_matrix_1.vec3.clone(camera.getPosition()), this.shadowOffset, GrassShadowPass_1.grassShadowPass.getUniformLocation("lightSpaceMatrix")[0]);
        main_1.gl.uniform3fv(GrassShadowPass_1.grassShadowPass.getUniformLocation("cameraPos")[0], camera.getPosition());
        main_1.gl.uniform1f(GrassShadowPass_1.grassShadowPass.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
        scene.renderGrass(GrassShadowPass_1.grassShadowPass, false);
        // gl.disable(gl.CULL_FACE);
        // ---------------------
    }
}
exports["default"] = DirectionalShadowRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/ShadowPasses/PointShadowRenderPass.ts":
/*!**************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/ShadowPasses/PointShadowRenderPass.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const Camera_1 = __webpack_require__(/*! ../../../Objects/Camera */ "./code/src/Engine/Objects/Camera.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const PointShadowPass_1 = __webpack_require__(/*! ../../ShaderPrograms/ShadowMapping/PointShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/PointShadowPass.ts");
const LightingPass_1 = __webpack_require__(/*! ../../ShaderPrograms/DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
class PointShadowRenderPass {
    constructor() {
        this.shadowResolution = 1023;
    }
    setShadowMappingResolution(res) {
        this.shadowResolution = res;
    }
    draw(scene) {
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        main_1.gl.enable(main_1.gl.CULL_FACE);
        main_1.gl.cullFace(main_1.gl.FRONT);
        let pointLightCamera = new Camera_1.default();
        pointLightCamera.setFOV(90);
        pointLightCamera.setAspectRatio(1);
        pointLightCamera.setFarPlaneDistance(100.0);
        const directions = [gl_matrix_1.vec3.fromValues(1.0, 0.0, 0.0), gl_matrix_1.vec3.fromValues(-1.0, 0.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, -1.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, 0.0, -1.0), gl_matrix_1.vec3.fromValues(0.0, 0.0, 1.0)];
        const ups = [gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, 0.0, -1.0), gl_matrix_1.vec3.fromValues(0.0, 0.0, 1.0), gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0), gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0)];
        let counter = 0;
        for (let pointLight of scene.pointLights) {
            if (counter >= LightingPass_1.pointShadowsToAllocate) {
                break;
            }
            if (pointLight.castShadow /*&& !pointLight.depthMapGenerated*/) {
                counter++;
                // pointLight.depthMapGenerated = true;
                pointLightCamera.setPosition(pointLight.position);
                pointLight.pointShadowBuffer.bind(main_1.gl.FRAMEBUFFER);
                pointLight.pointShadowDepthMap.setTextureData(null, this.shadowResolution, this.shadowResolution); // Make sure the textures are correct size. TOOD: Is this super slow?
                for (let i = 0; i < directions.length; i++) {
                    pointLightCamera.setDir(directions[i]);
                    pointLightCamera.setUp(ups[i]);
                    main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_ATTACHMENT, main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, pointLight.pointShadowDepthMap.texture, 0);
                    // ---- Shadow pass ----
                    PointShadowPass_1.pointShadowPass.use();
                    main_1.gl.viewport(0, 0, this.shadowResolution, this.shadowResolution);
                    main_1.gl.clear(main_1.gl.DEPTH_BUFFER_BIT);
                    //Set uniforms          
                    pointLightCamera.bindViewProjMatrix(PointShadowPass_1.pointShadowPass.getUniformLocation("lightSpaceMatrix")[0]);
                    main_1.gl.uniform3fv(PointShadowPass_1.pointShadowPass.getUniformLocation("cameraPos")[0], pointLightCamera.getPosition());
                    //Render shadow pass
                    scene.renderScene(PointShadowPass_1.pointShadowPass, false);
                }
            }
        }
        main_1.gl.disable(main_1.gl.CULL_FACE);
    }
}
exports["default"] = PointShadowRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/SkyboxRenderPass.ts":
/*!********************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/SkyboxRenderPass.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const Skybox_1 = __webpack_require__(/*! ../../Objects/GraphicsObjects/Skybox */ "./code/src/Engine/Objects/GraphicsObjects/Skybox.ts");
const SkyboxShaderProgram_1 = __webpack_require__(/*! ../ShaderPrograms/Skybox/SkyboxShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/Skybox/SkyboxShaderProgram.ts");
class SkyboxRenderPass {
    constructor() {
        this.skybox = null;
    }
    setSkybox(cubemap) {
        this.skybox = new Skybox_1.default(SkyboxShaderProgram_1.skyboxShaderProgram, cubemap);
    }
    draw(camera) {
        if (this.skybox != undefined) {
            main_1.gl.enable(main_1.gl.DEPTH_TEST);
            SkyboxShaderProgram_1.skyboxShaderProgram.use();
            camera.bindViewProjMatrix(SkyboxShaderProgram_1.skyboxShaderProgram.getUniformLocation("viewProjMatrix")[0], true);
            main_1.gl.depthFunc(main_1.gl.LEQUAL);
            this.skybox.draw();
            main_1.gl.depthFunc(main_1.gl.LESS);
        }
    }
}
exports["default"] = SkyboxRenderPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/RenderPasses/Volumetric/VolumetricGodRayPass.ts":
/*!***********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/RenderPasses/Volumetric/VolumetricGodRayPass.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const GodRayPlanes_1 = __webpack_require__(/*! ../../../Objects/GraphicsObjects/GodRayPlanes */ "./code/src/Engine/Objects/GraphicsObjects/GodRayPlanes.ts");
const LightingPass_1 = __webpack_require__(/*! ../../ShaderPrograms/DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const VolumetricGodRayShaderProgram_1 = __webpack_require__(/*! ../../ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram.ts");
class VolumetricGodRayPass {
    constructor() {
        this.outputBuffer = null;
        this.godRayPlanes = new GodRayPlanes_1.default(VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram);
    }
    bindFramebuffers() {
        // Render result to screen or to crt framebuffer if doing crt effect after this.
        if (this.outputBuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputBuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw(scene, camera) {
        // this.bindFramebuffers();
        VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram.use();
        main_1.gl.enable(main_1.gl.BLEND);
        main_1.gl.blendFunc(main_1.gl.SRC_ALPHA, main_1.gl.ONE);
        camera.bindViewProjMatrix(VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram.getUniformLocation("viewProjMatrix")[0]);
        main_1.gl.uniform3fv(VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
        main_1.gl.uniform1f(VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram.getUniformLocation("fov")[0], camera.getFov());
        // Point lights
        main_1.gl.uniform1i(VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram.getUniformLocation("nrOfPointLights")[0], scene.pointLights.length);
        // Bind pointLights, with counter as depthMapIndex
        let counter = 0;
        for (let i = 0; i < scene.pointLights.length; i++) {
            scene.pointLights[i].bind(i, counter, VolumetricGodRayShaderProgram_1.volumetricGodRayShaderProgram);
            if (scene.pointLights[i].castShadow) {
                counter++;
            }
        }
        // Then bind the point light depth maps 
        counter = 0;
        for (const pointLight of scene.pointLights) {
            if (counter >= LightingPass_1.pointShadowsToAllocate) {
                break;
            }
            if (pointLight.castShadow) {
                pointLight.pointShadowDepthMap.bind(counter++);
            }
        }
        this.godRayPlanes.draw();
        main_1.gl.disable(main_1.gl.BLEND);
    }
}
exports["default"] = VolumetricGodRayPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/Rendering.ts":
/*!************************************************!*\
  !*** ./code/src/Engine/Rendering/Rendering.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const GameMachine_1 = __webpack_require__(/*! ../../Game/GameMachine */ "./code/src/Game/GameMachine.ts");
const Framebuffer_1 = __webpack_require__(/*! ./Framebuffers/Framebuffer */ "./code/src/Engine/Rendering/Framebuffers/Framebuffer.ts");
const Texture_1 = __webpack_require__(/*! ./Textures/Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
const Camera_1 = __webpack_require__(/*! ../Objects/Camera */ "./code/src/Engine/Objects/Camera.ts");
const DirectionalShadowRenderPass_1 = __webpack_require__(/*! ./RenderPasses/ShadowPasses/DirectionalShadowRenderPass */ "./code/src/Engine/Rendering/RenderPasses/ShadowPasses/DirectionalShadowRenderPass.ts");
const CRTRenderPass_1 = __webpack_require__(/*! ./RenderPasses/PostProcessing/CRTRenderPass */ "./code/src/Engine/Rendering/RenderPasses/PostProcessing/CRTRenderPass.ts");
const BloomRenderPass_1 = __webpack_require__(/*! ./RenderPasses/PostProcessing/BloomRenderPass */ "./code/src/Engine/Rendering/RenderPasses/PostProcessing/BloomRenderPass.ts");
const SkyboxRenderPass_1 = __webpack_require__(/*! ./RenderPasses/SkyboxRenderPass */ "./code/src/Engine/Rendering/RenderPasses/SkyboxRenderPass.ts");
const GeometryRenderPass_1 = __webpack_require__(/*! ./RenderPasses/DefferedRendering/GeometryRenderPass */ "./code/src/Engine/Rendering/RenderPasses/DefferedRendering/GeometryRenderPass.ts");
const LightingRenderPass_1 = __webpack_require__(/*! ./RenderPasses/DefferedRendering/LightingRenderPass */ "./code/src/Engine/Rendering/RenderPasses/DefferedRendering/LightingRenderPass.ts");
const ParticleRenderPass_1 = __webpack_require__(/*! ./RenderPasses/ParticleRenderPass */ "./code/src/Engine/Rendering/RenderPasses/ParticleRenderPass.ts");
const FinishedOutputRenderPass_1 = __webpack_require__(/*! ./RenderPasses/FinishedOutputRenderPass */ "./code/src/Engine/Rendering/RenderPasses/FinishedOutputRenderPass.ts");
const PointShadowRenderPass_1 = __webpack_require__(/*! ./RenderPasses/ShadowPasses/PointShadowRenderPass */ "./code/src/Engine/Rendering/RenderPasses/ShadowPasses/PointShadowRenderPass.ts");
const VolumetricGodRayPass_1 = __webpack_require__(/*! ./RenderPasses/Volumetric/VolumetricGodRayPass */ "./code/src/Engine/Rendering/RenderPasses/Volumetric/VolumetricGodRayPass.ts");
class Rendering {
    constructor(textureStore, scene) {
        this.textureStore = textureStore;
        this.scene = scene;
        this.camera = new Camera_1.default();
        this.resolutionWidth = main_1.windowInfo.resolutionWidth;
        this.resolutionHeight = main_1.windowInfo.resolutionHeight;
        // ---- Shadows ----
        this.directionalShadowRenderPass = new DirectionalShadowRenderPass_1.default();
        this.pointShadowRenderPass = new PointShadowRenderPass_1.default();
        // -----------------
        // ---- Deferred rendering ----
        this.geometryRenderPass = new GeometryRenderPass_1.default();
        let textureArray = new Array();
        for (let i = 0; i < this.geometryRenderPass.outputFramebuffer.textures.length; i++) {
            textureArray.push(this.geometryRenderPass.outputFramebuffer.textures[i]);
        }
        textureArray.push(this.directionalShadowRenderPass.shadowBuffer.depthTexture);
        this.lightingRenderPass = new LightingRenderPass_1.default(textureArray);
        // ----------------------------
        // ---- Particles ----
        this.particleFramebuffer = new Framebuffer_1.default(this.resolutionWidth, this.resolutionHeight, [new Texture_1.default(false), new Texture_1.default(false, main_1.gl.R32F, main_1.gl.RED, main_1.gl.FLOAT)], null);
        this.particleRenderPass = new ParticleRenderPass_1.default(this.particleFramebuffer.textures);
        // -------------------
        // ---- Skybox ----
        this.useSkybox = false;
        this.skyboxRenderPass = new SkyboxRenderPass_1.default();
        // ----------------
        // ---- Volumetric God Rays ----
        this.volumetricGodRayPass = new VolumetricGodRayPass_1.default();
        // -----------------------------
        // ---- Post processing ----
        // Crt effect
        this.useCrt = GameMachine_1.options.useCrt;
        this.crtFramebuffer = new Framebuffer_1.default(this.resolutionWidth, this.resolutionHeight, [new Texture_1.default(false)], null);
        this.crtRenderPass = new CRTRenderPass_1.default(this.crtFramebuffer.textures);
        // Bloom
        this.bloomExtractionInputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false)], null);
        this.bloomRenderPass = new BloomRenderPass_1.default(this.bloomExtractionInputFramebuffer.textures);
        this.useBloom = GameMachine_1.options.useBloom;
        // -------------------------¨
        this.finishedFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false)], null);
        this.finishedOutputRenderPass = new FinishedOutputRenderPass_1.default(this.finishedFramebuffer.textures);
        this.screenCaptureNextFrame = false;
        this.initGL();
    }
    initGL() {
        this.clearColour = { r: 0.15, g: 0.1, b: 0.1, a: 1.0 };
        main_1.gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
        // Enable depth test
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        //Enable alpha blending
        // gl.enable(gl.BLEND);
        // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        main_1.gl.disable(main_1.gl.BLEND);
        // Disable faceculling
        main_1.gl.cullFace(main_1.gl.BACK);
        main_1.gl.disable(main_1.gl.CULL_FACE);
    }
    reportCanvasResize(x, y) {
        this.resolutionWidth = x;
        this.resolutionHeight = y;
        this.geometryRenderPass.setResolution(x, y);
        this.particleFramebuffer.setProportions(x, y);
        this.crtFramebuffer.setProportions(x, y);
        this.finishedFramebuffer.setProportions(x, y);
        this.bloomExtractionInputFramebuffer.setProportions(x, y);
        this.bloomRenderPass.setResolution(x, y);
    }
    setSkybox(path) {
        this.skyboxRenderPass.setSkybox(this.textureStore.getCubeMap(path));
        // this.skyboxRenderPass.setSkybox(this.scene.pointLights[0].pointShadowDepthMap);
        this.useSkybox = true;
    }
    takeScreenshot(screenshotName) {
        var offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = main_1.gl.canvas.width;
        offscreenCanvas.height = main_1.gl.canvas.height;
        var ctx = offscreenCanvas.getContext("2d");
        ctx.drawImage(main_1.gl.canvas, 0, 0);
        const saveBlob = (function () {
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style.display = 'none';
            return function saveData(blob, fileName) {
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
            };
        }());
        offscreenCanvas.toBlob((blob) => {
            saveBlob(blob, screenshotName);
        });
    }
    draw(saveScreenshot = false, screenshotName = "screencapture") {
        if (this.resolutionWidth != main_1.windowInfo.resolutionWidth ||
            this.resolutionHeight != main_1.windowInfo.resolutionHeight) {
            this.reportCanvasResize(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        }
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        // ---- Shadow pass ----
        this.directionalShadowRenderPass.draw(this.scene, this.camera);
        this.pointShadowRenderPass.draw(this.scene);
        // ---------------------
        // ---- Geometry pass ----
        this.geometryRenderPass.draw(this.scene, this.camera);
        // -----------------------
        // Geometry pass over, start rendering to the particle framebuffer
        // this.particleFramebuffer.bind(gl.DRAW_FRAMEBUFFER);
        this.finishedFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        // Clear the output with the actual clear colour we have set
        main_1.gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT | main_1.gl.STENCIL_BUFFER_BIT);
        // ---- Lighting pass ----
        this.lightingRenderPass.draw(this.scene, this.camera);
        // -----------------------
        // Copy the depth buffer information from the gBuffer to the current depth buffer
        this.geometryRenderPass.outputFramebuffer.bind(main_1.gl.READ_FRAMEBUFFER);
        main_1.gl.blitFramebuffer(0, 0, this.resolutionWidth, this.resolutionHeight, 0, 0, this.resolutionWidth, this.resolutionHeight, main_1.gl.DEPTH_BUFFER_BIT, main_1.gl.NEAREST);
        // ---- Skybox ----
        if (this.useSkybox) {
            this.skyboxRenderPass.draw(this.camera);
        }
        // ----------------
        // ---- Particles ----
        // this.particleRenderPass.draw(this.scene, this.camera);
        // -------------------
        // Setup appropriate post processing framebuffer (or to finished directly)
        // if (this.useBloom) {
        // 	this.volumetricGodRayPass.outputBuffer =
        // 		this.bloomExtractionInputFramebuffer;
        // } else if (this.useCrt) {
        // 	this.volumetricGodRayPass.outputBuffer = this.crtFramebuffer;
        // } else {
        // 	this.volumetricGodRayPass.outputBuffer = this.finishedFramebuffer;
        // }
        // ---- Volumetric God Rays ----
        this.volumetricGodRayPass.draw(this.scene, this.camera);
        // -----------------------------
        // ---- Post processing ----
        if (this.useBloom) {
            if (this.useCrt) {
                this.bloomRenderPass.outputFramebuffer = this.crtFramebuffer;
            }
            else {
                this.bloomRenderPass.outputFramebuffer = null;
            }
            this.bloomRenderPass.draw();
        }
        if (this.useCrt) {
            this.crtRenderPass.draw();
        }
        // -------------------------
        if (!this.useCrt && !this.useBloom) {
            this.finishedOutputRenderPass.draw();
        }
        if (this.screenCaptureNextFrame || saveScreenshot) {
            this.takeScreenshot(screenshotName);
            this.screenCaptureNextFrame = false;
        }
    }
}
exports["default"] = Rendering;


/***/ }),

/***/ "./code/src/Engine/Rendering/Scene.ts":
/*!********************************************!*\
  !*** ./code/src/Engine/Rendering/Scene.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const DirectionalLight_1 = __webpack_require__(/*! ./Lighting/DirectionalLight */ "./code/src/Engine/Rendering/Lighting/DirectionalLight.ts");
const PointLight_1 = __webpack_require__(/*! ./Lighting/PointLight */ "./code/src/Engine/Rendering/Lighting/PointLight.ts");
const GraphicsBundle_1 = __webpack_require__(/*! ../Objects/GraphicsBundle */ "./code/src/Engine/Objects/GraphicsBundle.ts");
const GrassSpawner_1 = __webpack_require__(/*! ../Objects/GraphicsObjects/GrassSpawner */ "./code/src/Engine/Objects/GraphicsObjects/GrassSpawner.ts");
const ParticleSpawner_1 = __webpack_require__(/*! ../Objects/GraphicsObjects/ParticleSpawner */ "./code/src/Engine/Objects/GraphicsObjects/ParticleSpawner.ts");
const PhongQuad_1 = __webpack_require__(/*! ../Objects/GraphicsObjects/PhongQuad */ "./code/src/Engine/Objects/GraphicsObjects/PhongQuad.ts");
const GeometryPass_1 = __webpack_require__(/*! ./ShaderPrograms/DeferredRendering/GeometryPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts");
const LightingPass_1 = __webpack_require__(/*! ./ShaderPrograms/DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const GrassShaderProgram_1 = __webpack_require__(/*! ./ShaderPrograms/GrassShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/GrassShaderProgram.ts");
const ParticleShaderProgram_1 = __webpack_require__(/*! ./ShaderPrograms/ParticleShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ParticleShaderProgram.ts");
class Scene {
    constructor(textureStore, meshStore) {
        this.textureStore = textureStore;
        this.meshStore = meshStore;
        // ---- Graphics objects ----
        this.graphicBundles = new Array();
        this.grassSpawners = new Array();
        // --------------------------
        // ---- Lighting ----
        this.directionalLight = new DirectionalLight_1.default(main_1.gl, LightingPass_1.lightingPass);
        this.pointLights = new Array();
        // ------------------
        // ---- Particles ----
        this.particleSpawners = new Array();
        // -------------------
    }
    getNewPhongQuad(diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), new PhongQuad_1.default(GeometryPass_1.geometryPass)));
        return this.graphicBundles[length - 1];
    }
    getNewMesh(meshPath, diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), this.meshStore.getMesh(meshPath)));
        return this.graphicBundles[length - 1];
    }
    getNewHeightMap(heightmapPath, diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), this.meshStore.getHeightmap(heightmapPath)));
        return this.graphicBundles[length - 1];
    }
    getNewParticleSpawner(texturePath, numberOfStartingParticles = 0) {
        let length = this.particleSpawners.push(new ParticleSpawner_1.default(ParticleShaderProgram_1.particleShaderProgram, this.textureStore.getTexture(texturePath), numberOfStartingParticles));
        return this.particleSpawners[length - 1];
    }
    getNewGrassSpawner(diffuseTexturePath, specularTexturePath, numberOfStartingParticles = 0) {
        let length = this.grassSpawners.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffuseTexturePath), this.textureStore.getTexture(specularTexturePath), new GrassSpawner_1.default(GrassShaderProgram_1.grassShaderProgram, numberOfStartingParticles)));
        return this.grassSpawners[length - 1];
    }
    getNewPointLight() {
        const length = this.pointLights.push(new PointLight_1.default());
        return this.pointLights[length - 1];
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
    deleteParticleSpawner(particleSpawner) {
        this.particleSpawners = this.particleSpawners.filter((ps) => particleSpawner !== ps);
    }
    renderScene(shaderProgram, bindSpecialTextures = true) {
        for (let bundle of this.graphicBundles) {
            bundle.graphicsObject.shaderProgram = shaderProgram;
            bundle.draw(bindSpecialTextures);
        }
    }
    renderGrass(shaderProgram, bindSpecialTextures = true) {
        for (let bundle of this.grassSpawners) {
            bundle.graphicsObject.shaderProgram = shaderProgram;
            bundle.draw(bindSpecialTextures);
        }
    }
}
exports["default"] = Scene;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts":
/*!************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGeometryPass = exports.geometryPass = exports.geometryFragmentShaderSrc = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const geometryVertexShaderSrc = `#version 300 es
// If inputs change, also update GeometryPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

// If uniforms change, also update PhongShaderProgram to match
uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;
uniform mat4 textureMatrix;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    vec4 worldPos = modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));

	// Calculate normal matrix, should be done on CPU but I can't be bothered with implementing inverse of a matrix and don't want to find a good lib atm. Have found a lib now TODO: Move this to CPU
	mat3 normalMatrix = mat3(modelMatrix);
	normalMatrix = inverse(normalMatrix);
	normalMatrix = transpose(normalMatrix);

	fragNormal = normalize(normalMatrix * inNormal);
	fragPos = worldPos.xyz;

    gl_Position = viewProjMatrix * worldPos;
}`;
exports.geometryFragmentShaderSrc = `#version 300 es
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
	
	gColourSpec.rgb = texture(material.diffuse, texCoords).rgb;
	if ((emissionColor.r > 0.0 || emissionColor.g > 0.0 || emissionColor.b > 0.0) && emissionValue > 0.0) {
		gEmission.r = emissionColor.r * emissionMapValues.r;
		gEmission.g = emissionColor.g * emissionMapValues.g;
		gEmission.b = emissionColor.b * emissionMapValues.b;
	}
	else if (emissionValue > 0.0) {
		gEmission.rgb = emissionMapValues;
	}
    gColourSpec.a = texture(material.specular, texCoords).r;
	
	gPosition.rgb = fragPos;
	gNormal = vec4(fragNormal, 1.0);
}`;
class GeometryPass extends ShaderProgram_1.default {
    constructor() {
        super("GeometryPass", geometryVertexShaderSrc, exports.geometryFragmentShaderSrc);
        this.use();
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("textureMatrix");
        this.setUniformLocation("material.diffuse");
        this.setUniformLocation("material.specular");
        this.setUniformLocation("material.emission");
        this.setUniformLocation("emissionColor");
        main_1.gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("material.emission")[0], 2);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 8 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 3, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 6 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.geometryPass = null;
let createGeometryPass = function () {
    exports.geometryPass = new GeometryPass();
};
exports.createGeometryPass = createGeometryPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts":
/*!************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLightingPass = exports.lightingPass = exports.pointShadowsToAllocate = exports.pointLightsToAllocate = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
exports.pointLightsToAllocate = 8;
exports.pointShadowsToAllocate = 2;
let lightingFragmentShaderSrc;
class LightingPass extends ShaderProgram_1.default {
    constructor() {
        super("LightingPass", ScreenQuadShaderProgram_1.screenQuadVertexSrc, lightingFragmentShaderSrc);
        this.use();
        this.setUniformLocation("gPosition");
        this.setUniformLocation("gNormal");
        this.setUniformLocation("gColourSpec");
        this.setUniformLocation("gEmission");
        this.setUniformLocation("depthMap");
        main_1.gl.uniform1i(this.getUniformLocation("gPosition")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("gNormal")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("gColourSpec")[0], 2);
        main_1.gl.uniform1i(this.getUniformLocation("gEmission")[0], 3);
        main_1.gl.uniform1i(this.getUniformLocation("depthMap")[0], 4);
        for (let i = 0; i < exports.pointShadowsToAllocate; i++) {
            this.setUniformLocation("pointDepthMaps[" + i + "]");
            main_1.gl.uniform1i(this.getUniformLocation("pointDepthMaps[" + i + "]")[0], 5 + i);
        }
        for (let i = 0; i < exports.pointLightsToAllocate; i++) {
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
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.lightingPass = null;
let createLightingPass = function () {
    exports.pointShadowsToAllocate = Math.min(exports.pointShadowsToAllocate, main_1.gl.getParameter(main_1.gl.MAX_TEXTURE_IMAGE_UNITS) - 5);
    lightingFragmentShaderSrc =
        `#version 300 es
precision highp float;

#define NR_POINT_LIGHTS ` +
            exports.pointLightsToAllocate +
            `
#define NR_POINT_SHADOWS ` +
            exports.pointShadowsToAllocate +
            `

in vec2 texCoords;

layout (location = 0) out vec4 final_colour;
layout (location = 1) out float FragOpacity;

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
	
	// vec3 result = fragNormal;
	// vec3 result = diffuse;
	// vec3 result = vec3(specular, specular, specular);
    vec3 result = vec3(0.0f);
	result += CalcDirectionalLight(directionalLight, fragNormal, cameraDir, diffuse, specular, shininess, lightSpaceFragPos);

	for (int i = 0; i < nrOfPointLights; i++) {
		result += CalcPointLight(pointLights[i], fragNormal, fragPos, cameraDir, diffuse, specular, shininess);
	}

	final_colour = vec4(result + emission, 1.0f); // Set colour of fragment. Since we use screen door transparency, do not use alpha value
	FragOpacity = 0.0;
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
	// float bias = 0.001;
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
    // Below is ugly, but I have to unroll the loop to be able to acces the pointDepthMaps array with a compile time index, as run-time index is not allowed to access a sampler
    for (let i = 0; i < exports.pointShadowsToAllocate; i++) {
        if (i == 0) {
            lightingFragmentShaderSrc += `
	if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
        }
        else {
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
    exports.lightingPass = new LightingPass();
};
exports.createLightingPass = createLightingPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/GrassShaderProgram.ts":
/*!************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/GrassShaderProgram.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGrassShaderProgram = exports.grassShaderProgram = void 0;
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const GeometryPass_1 = __webpack_require__(/*! ./DeferredRendering/GeometryPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts");
const ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const grassVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;
layout (location = 1) in vec2 inTexCoords;

// Instanced attributes starts here
layout (location = 2) in vec3 inPos;
layout (location = 3) in float inSize;
layout (location = 4) in vec3 inTipOffset;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float currentTime;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    // Billboarding
    vec3 camDir = cameraPos - inPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
	// fragNormal = vec3(-rightVec.z, 0.0, rightVec.x);
    vec3 upVec = vec3(0.0, 1.0, 0.0);
	fragNormal = upVec;
	float size = inSize + length(camDir) * 0.0;
    rightVec = rightVec * inVertexPosition.x * size;
    upVec = upVec * inVertexPosition.y * size;
	fragPos = vec3(rightVec + upVec + inPos + (inTipOffset + vec3(sin(currentTime + inPos.x) * 0.1, 0.0, 0.0)) * inVertexPosition.y);
    gl_Position = viewProjMatrix * vec4(fragPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * size + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
}`;
class GrassShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("GrassShaderProgram", grassVertexShaderSrc, GeometryPass_1.geometryFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("texture0");
        main_1.gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("currentTime");
        this.setUniformLocation("material.diffuse");
        this.setUniformLocation("material.specular");
        this.setUniformLocation("material.emission");
        main_1.gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("material.emission")[0], 2);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
    setupInstancedVertexAttributePointers() {
        const stride = 7 * 4;
        main_1.gl.vertexAttribPointer(2, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(2);
        main_1.gl.vertexAttribDivisor(2, 1);
        main_1.gl.vertexAttribPointer(3, 1, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(3);
        main_1.gl.vertexAttribDivisor(3, 1);
        main_1.gl.vertexAttribPointer(4, 3, main_1.gl.FLOAT, false, stride, 4 * 4);
        main_1.gl.enableVertexAttribArray(4);
        main_1.gl.vertexAttribDivisor(4, 1);
    }
}
exports.grassShaderProgram = null;
let createGrassShaderProgram = function () {
    exports.grassShaderProgram = new GrassShaderProgram();
};
exports.createGrassShaderProgram = createGrassShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ParticleShaderProgram.ts":
/*!***************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ParticleShaderProgram.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createParticleShaderProgram = exports.particleShaderProgram = void 0;
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const particleVertexShaderSrc = `#version 300 es

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

out vec2 texCoords;
out float alpha;

void main() {
    // Calculate how long this has been alive
    float lifeTime = currentTime - inStartTime;

    // Calculate current position
    vec3 currentPos = inStartPosition + (inStartVel * lifeTime + (inConstantAcceleration * lifeTime) * lifeTime) / 2.0;

    // Billboarding
    vec3 camDir = cameraPos - currentPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
    vec3 upVec = normalize(cross(camDir, rightVec));
    rightVec = rightVec * inVertexPosition.x * (inSize + sizeChangePerSecond * lifeTime);
    upVec = upVec * inVertexPosition.y * (inSize + sizeChangePerSecond * lifeTime);
    gl_Position = viewProjMatrix * vec4(rightVec + upVec + currentPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * inSize + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
    alpha = max(1.0 - lifeTime * fadePerSecond, 0.0);
}`;
const particleFragmentShaderSrc = `#version 300 es
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
class ParticleShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("ParticleShaderProgram", particleVertexShaderSrc, particleFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("texture0");
        main_1.gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("currentTime");
        this.setUniformLocation("fadePerSecond");
        this.setUniformLocation("sizeChangePerSecond");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
    setupInstancedVertexAttributePointers() {
        const stride = 11 * 4;
        main_1.gl.vertexAttribPointer(2, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(2);
        main_1.gl.vertexAttribDivisor(2, 1);
        main_1.gl.vertexAttribPointer(3, 1, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(3);
        main_1.gl.vertexAttribDivisor(3, 1);
        main_1.gl.vertexAttribPointer(4, 3, main_1.gl.FLOAT, false, stride, 4 * 4);
        main_1.gl.enableVertexAttribArray(4);
        main_1.gl.vertexAttribDivisor(4, 1);
        main_1.gl.vertexAttribPointer(5, 1, main_1.gl.FLOAT, false, stride, 7 * 4);
        main_1.gl.enableVertexAttribArray(5);
        main_1.gl.vertexAttribDivisor(5, 1);
        main_1.gl.vertexAttribPointer(6, 3, main_1.gl.FLOAT, false, stride, 8 * 4);
        main_1.gl.enableVertexAttribArray(6);
        main_1.gl.vertexAttribDivisor(6, 1);
        // gl.vertexAttribPointer(7, 1, gl.FLOAT, false, stride, 11 * 4);
        // gl.enableVertexAttribArray(7);
        // gl.vertexAttribDivisor(7, 1);
    }
}
exports.particleShaderProgram = null;
let createParticleShaderProgram = function () {
    exports.particleShaderProgram = new ParticleShaderProgram();
};
exports.createParticleShaderProgram = createParticleShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PhongShaderProgram.ts":
/*!************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PhongShaderProgram.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPhongShaderProgram = exports.phongShaderProgram = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const LightingPass_1 = __webpack_require__(/*! ./DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const phongVertexShaderSrc = `#version 300 es
// If inputs change, also update PhongShaderProgram::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

// If uniforms change, also update PhongShaderProgram to match
uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;
uniform mat4 textureMatrix;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    vec4 worldPos = modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));
	fragPos = worldPos.xyz;

	// Calculate normal matrix, should be done on CPU but I can't be bothered with implementing inverse of a matrix and don't want to find a good lib atm
	mat3 normalMatrix = mat3(modelMatrix);
	normalMatrix = inverse(normalMatrix);
	normalMatrix = transpose(normalMatrix);

	fragNormal = normalize(normalMatrix * inNormal);
	
    gl_Position = viewProjMatrix * worldPos;
}`;
// let pointLightsToAllocate: number = 100;
const phongFragmentShaderSrc = `#version 300 es
precision highp float;

in vec3 fragPos;
in vec3 fragNormal;
in vec2 texCoords;

out vec4 final_colour;

struct Material {
	sampler2D diffuse;
	sampler2D specular;
};

uniform Material material;

struct PointLight {
	vec3 position;
	vec3 colour;

	float constant;
	float linear;
	float quadratic;
};

struct DirectionalLight {
	vec3 direction;
	vec3 colour;
	float ambientMultiplier;
};

#define NR_POINT_LIGHTS ` +
    LightingPass_1.pointLightsToAllocate +
    `

uniform DirectionalLight directionalLight;
uniform PointLight pointLights[NR_POINT_LIGHTS];
uniform int nrOfPointLights;
uniform vec3 camPos; //Used for specular lighting

vec3 CalcDirectionalLight(DirectionalLight light, vec3 normal, vec3 cameraDir, vec3 diffuse, float specular, float shininess);
vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 cameraDir, vec3 diffuse, float specular, float shininess);

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

	vec3 result = vec3(0.0f, 0.0f, 0.0f);

	float shininess = 32.0f;
	vec3 diffuse = texture(material.diffuse, texCoords).xyz;
	float specular = texture(material.specular, texCoords).r;
	
	vec3 cameraDir = normalize(camPos - fragPos); //Direction vector from fragment to camera
	
	result += CalcDirectionalLight(directionalLight, fragNormal, cameraDir, diffuse, specular, shininess);
	
	for (int i = 0; i < nrOfPointLights; i++) {
		result += CalcPointLight(pointLights[i], fragNormal, fragPos, cameraDir, diffuse, specular, shininess);	
	}

	final_colour = vec4(result, 1.0f); // Set colour of fragment. Since we use screen door transparency, do not use alpha value
}

// Calculates the colour when using a directional light
vec3 CalcDirectionalLight(DirectionalLight light, vec3 normal, vec3 cameraDir, vec3 diffuse, float specular, float shininess) {
	vec3 ambient = diffuse * light.ambientMultiplier; //Ambient lighting
	vec3 lightDir = normalize(-light.direction); //light direction from the fragment position

	// Diffuse shading
	float diff = max(dot(normal, lightDir), 0.0);

	// Specular shading
	vec3 reflectDir = reflect(-lightDir, normal);
	float spec = pow(max(dot(cameraDir, reflectDir), 0.0), shininess);

	// Combine results
	vec3 finalDiffuse = light.colour * diff * diffuse;
	vec3 finalSpecular = light.colour * spec * specular;
	
	vec3 lighting = (ambient + finalDiffuse + finalSpecular);
	return lighting;
}

// Calculates the colour when using a point light.
vec3 CalcPointLight(PointLight light, vec3 normal, vec3 fragPos, vec3 cameraDir, vec3 diffuse, float specular, float shininess) {
	vec3 lighting;
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
	lighting = finalDiffuse + finalSpecular;
	//lighting = finalSpecular;
	return lighting;
}`;
class PhongShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("PhongShaderProgram", phongVertexShaderSrc, phongFragmentShaderSrc);
        this.use();
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("textureMatrix");
        this.setUniformLocation("material.diffuse");
        this.setUniformLocation("material.specular");
        main_1.gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
        for (let i = 0; i < LightingPass_1.pointLightsToAllocate; i++) {
            this.setUniformLocation("pointLights[" + i + "].position");
            this.setUniformLocation("pointLights[" + i + "].colour");
            this.setUniformLocation("pointLights[" + i + "].constant");
            this.setUniformLocation("pointLights[" + i + "].linear");
            this.setUniformLocation("pointLights[" + i + "].quadratic");
        }
        this.setUniformLocation("directionalLight.direction");
        this.setUniformLocation("directionalLight.colour");
        this.setUniformLocation("directionalLight.ambientMultiplier");
        this.setUniformLocation("nrOfPointLights");
        this.setUniformLocation("camPos");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 8 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 3, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 6 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.phongShaderProgram = null;
let createPhongShaderProgram = function () {
    exports.phongShaderProgram = new PhongShaderProgram();
};
exports.createPhongShaderProgram = createPhongShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomBlending.ts":
/*!**********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomBlending.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBloomBlending = exports.bloomBlending = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const bloomBlendingFragmentSrc = `#version 300 es
precision highp float;

out vec4 fragColor;
  
in vec2 texCoords;

uniform sampler2D scene;
uniform sampler2D bloomBlur0;
uniform sampler2D bloomBlur1;
uniform sampler2D bloomBlur2;
uniform sampler2D bloomBlur3;
uniform sampler2D bloomBlur4;

void main()
{
    // const float gamma = 2.2;
    // const float exposure = 1.0;
    // vec3 hdrColor = texture(scene, texCoords).rgb;      
    // vec3 bloomColor = texture(bloomBlur, texCoords).rgb;
    // hdrColor += bloomColor; // additive blending
    // // tone mapping
    // vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
    // // also gamma correct while we're at it       
    // result = pow(result, vec3(1.0 / gamma));
    // fragColor = vec4(result, 1.0);

    vec3 result = texture(scene, texCoords).rgb;
	
	vec3 bloomColor = vec3(0.0, 0.0, 0.0);
	bloomColor += (texture(bloomBlur0, texCoords).rgb * 0.3);
	bloomColor += (texture(bloomBlur1, texCoords).rgb * 0.25);
	bloomColor += (texture(bloomBlur2, texCoords).rgb * 0.2);
	bloomColor += (texture(bloomBlur3, texCoords).rgb * 0.15);
	bloomColor += (texture(bloomBlur4, texCoords).rgb * 0.1);

    result += bloomColor; // additive blending
    fragColor = vec4(result, 1.0);
}`;
class BloomBlending extends ShaderProgram_1.default {
    constructor() {
        super("BloomBlending", ScreenQuadShaderProgram_1.screenQuadVertexSrc, bloomBlendingFragmentSrc);
        this.use();
        this.setUniformLocation("scene");
        this.setUniformLocation("bloomBlur0");
        this.setUniformLocation("bloomBlur1");
        this.setUniformLocation("bloomBlur2");
        this.setUniformLocation("bloomBlur3");
        this.setUniformLocation("bloomBlur4");
        main_1.gl.uniform1i(this.getUniformLocation("scene")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur0")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur1")[0], 2);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur2")[0], 3);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur3")[0], 4);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur4")[0], 5);
        this.setUniformLocation("horizontal");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.bloomBlending = null;
let createBloomBlending = function () {
    exports.bloomBlending = new BloomBlending();
};
exports.createBloomBlending = createBloomBlending;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomExtraction.ts":
/*!************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomExtraction.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBloomExtraction = exports.bloomExtraction = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const bloomExtractionFragmentSrc = `#version 300 es
precision highp float;

in vec2 texCoords;

layout (location = 0) out vec4 normalShaded;
layout (location = 1) out vec4 brightOnly;

uniform sampler2D inputTexture;

void main() {
	normalShaded = texture(inputTexture, texCoords);
    
    // check whether fragment output is higher than threshold, if so output as brightness color
    float brightness = normalShaded.r + normalShaded.g + normalShaded.b;
    if(brightness > 1.0) {
        brightOnly = normalShaded;
    }
    else {
        brightOnly = vec4(0.0, 0.0, 0.0, 1.0);
    }
}`;
class BloomExtraction extends ShaderProgram_1.default {
    constructor() {
        super("BloomExtraction", ScreenQuadShaderProgram_1.screenQuadVertexSrc, bloomExtractionFragmentSrc);
        this.use();
        this.setUniformLocation("inputTexture");
        main_1.gl.uniform1i(this.getUniformLocation("inputTexture")[0], 0);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.bloomExtraction = null;
let createBloomExtraction = function () {
    exports.bloomExtraction = new BloomExtraction();
};
exports.createBloomExtraction = createBloomExtraction;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BlurTransparency.ts":
/*!*************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BlurTransparency.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBlurTransparency = exports.blurTransparency = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const blurTransparencyFragmentSrc = `#version 300 es
precision highp float;

out vec4 fragColor;
  
in vec2 texCoords;

uniform sampler2D image;
uniform sampler2D mask;

void main()
{             
    vec2 texOffset = vec2(1.0 / float(textureSize(image, 0).x), 1.0 / float(textureSize(image, 0).y)); // gets size of single texel
    vec3 noBlurResult = texture(image, texCoords).rgb;
    int useBlur = 0;
    const int kernel = 3;

    vec3 weightsum = vec3(0);
    vec3 accumulation = vec3(0);

    for(int x = -kernel; x <= kernel; ++x)
    {
        for(int y = -kernel; y <= kernel; ++y)
        {
            vec2 coord = texCoords + vec2(texOffset.x * float(x), texOffset.y * float(y));

            if (texture(mask, coord).r > 0.0) {
                useBlur = 1;
            }

            accumulation += texture(image, coord).rgb;
            weightsum += 1.0;
        }
    }

    vec3 result;
    if (useBlur == 1) {
        result = accumulation / weightsum;
    } else {
        result = noBlurResult;
    }
    
    fragColor = vec4(result, 1.0);
}`;
class BlurTransparency extends ShaderProgram_1.default {
    constructor() {
        super("BlurTransparency", ScreenQuadShaderProgram_1.screenQuadVertexSrc, blurTransparencyFragmentSrc);
        this.use();
        this.setUniformLocation("image");
        this.setUniformLocation("mask");
        main_1.gl.uniform1i(this.getUniformLocation("image")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("mask")[0], 1);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.blurTransparency = null;
let createBlurTransparency = function () {
    exports.blurTransparency = new BlurTransparency();
};
exports.createBlurTransparency = createBlurTransparency;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/CrtShaderProgram.ts":
/*!*************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/CrtShaderProgram.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCrtShaderProgram = exports.crtShaderProgram = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const crtFragmentShaderSrc = `#version 300 es
precision highp float;
//
// PUBLIC DOMAIN CRT STYLED SCAN-LINE SHADER
//
//   by Timothy Lottes
//
// This is more along the style of a really good CGA arcade monitor.
// With RGB inputs instead of NTSC.
// The shadow mask example has the mask rotated 90 degrees for less chromatic aberration.
//
// Left it unoptimized to show the theory behind the algorithm.
//
// It is an example what I personally would want as a display option for pixel art games.
// Please take and use, change, or whatever.
//

out vec4 fragColor;
in vec2 texCoords;

uniform bool horizontal;
float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);


uniform sampler2D screenTexture;

//#define res (textureSize(screenTexture, 0).xy /6.0)
#define res (vec2(640, 360))

// Hardness of scanline.
//  -8.0 = soft
// -16.0 = medium
float hardScan=-8.0;

// Hardness of pixels in scanline.
// -2.0 = soft
// -4.0 = hard
float hardPix=-3.0;

// Display warp.
// 0.0 = none
// 1.0/8.0 = extreme
vec2 warp=vec2(1.0/32.0,1.0/24.0); 

// Amount of shadow mask.
float maskDark=0.5;
float maskLight=1.5;

//------------------------------------------------------------------------

// sRGB to Linear.
// Assuing using sRGB typed textures this should not be needed.
float ToLinear1(float c){return(c<=0.04045)?c/12.92:pow((c+0.055)/1.055,2.4);}
vec3 ToLinear(vec3 c){return vec3(ToLinear1(c.r),ToLinear1(c.g),ToLinear1(c.b));}

// Linear to sRGB.
// Assuing using sRGB typed textures this should not be needed.
float ToSrgb1(float c){return(c<0.0031308?c*12.92:1.055*pow(c,0.41666)-0.055);}
vec3 ToSrgb(vec3 c){return vec3(ToSrgb1(c.r),ToSrgb1(c.g),ToSrgb1(c.b));}

// Nearest emulated sample given floating point position and texel offset.
// Also zero's off screen.
vec3 Fetch(vec2 pos,vec2 off){
  pos=floor(pos*res+off)/res;
  if(max(abs(pos.x-0.5),abs(pos.y-0.5))>0.5)return vec3(0.0,0.0,0.0);
  return ToLinear(texture(screenTexture,pos.xy,-16.0).rgb);}

// Distance in emulated pixels to nearest texel.
vec2 Dist(vec2 pos){pos=pos*res;return -((pos-floor(pos))-vec2(0.5));}
    
// 1D Gaussian.
float Gaus(float pos,float scale){return exp2(scale*pos*pos);}

// 3-tap Gaussian filter along horz line.
vec3 Horz3(vec2 pos,float off){
  vec3 b=Fetch(pos,vec2(-1.0,off));
  vec3 c=Fetch(pos,vec2( 0.0,off));
  vec3 d=Fetch(pos,vec2( 1.0,off));
  float dst=Dist(pos).x;
  // Convert distance to weight.
  float scale=hardPix;
  float wb=Gaus(dst-1.0,scale);
  float wc=Gaus(dst+0.0,scale);
  float wd=Gaus(dst+1.0,scale);
  // Return filtered sample.
  return (b*wb+c*wc+d*wd)/(wb+wc+wd);}

// 5-tap Gaussian filter along horz line.
vec3 Horz5(vec2 pos,float off){
  vec3 a=Fetch(pos,vec2(-2.0,off));
  vec3 b=Fetch(pos,vec2(-1.0,off));
  vec3 c=Fetch(pos,vec2( 0.0,off));
  vec3 d=Fetch(pos,vec2( 1.0,off));
  vec3 e=Fetch(pos,vec2( 2.0,off));
  float dst=Dist(pos).x;
  // Convert distance to weight.
  float scale=hardPix;
  float wa=Gaus(dst-2.0,scale);
  float wb=Gaus(dst-1.0,scale);
  float wc=Gaus(dst+0.0,scale);
  float wd=Gaus(dst+1.0,scale);
  float we=Gaus(dst+2.0,scale);
  // Return filtered sample.
  return (a*wa+b*wb+c*wc+d*wd+e*we)/(wa+wb+wc+wd+we);}

// Return scanline weight.
float Scan(vec2 pos,float off){
  float dst=Dist(pos).y;
  return Gaus(dst+off,hardScan);}

// Allow nearest three lines to effect pixel.
vec3 Tri(vec2 pos){
  vec3 a=Horz3(pos,-1.0);
  vec3 b=Horz5(pos, 0.0);
  vec3 c=Horz3(pos, 1.0);
  float wa=Scan(pos,-1.0);
  float wb=Scan(pos, 0.0);
  float wc=Scan(pos, 1.0);
  return a*wa+b*wb+c*wc;}

// Distortion of scanlines, and end of screen alpha.
vec2 Warp(vec2 pos){
  pos=pos*2.0-1.0;    
  pos*=vec2(1.0+(pos.y*pos.y)*warp.x,1.0+(pos.x*pos.x)*warp.y);
  return pos*0.5+0.5;}

// Shadow mask.
vec3 Mask(vec2 pos){
  pos.x+=pos.y*3.0;
  vec3 mask=vec3(maskDark,maskDark,maskDark);
  pos.x=fract(pos.x/6.0);
  if(pos.x<0.333)mask.r=maskLight;
  else if(pos.x<0.666)mask.g=maskLight;
  else mask.b=maskLight;
  return mask;}    

// Draw dividing bars.
float Bar(float pos,float bar){pos-=bar;return pos*pos<4.0?0.0:1.0;}


void main() {
    vec2 resolution = vec2(textureSize(screenTexture, 0));
    vec2 pos=Warp(gl_FragCoord.xy/resolution.xy+vec2(-0.333,0.0));
    hardScan=-4.0;
    maskDark=maskLight=1.0;
    pos=Warp(gl_FragCoord.xy/resolution.xy);
    fragColor.rgb=Tri(pos)*Mask(gl_FragCoord.xy);
        
    fragColor.a=1.0;  
    fragColor.rgb=ToSrgb(fragColor.rgb);
}
`;
class CrtShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("CrtShaderProgram", ScreenQuadShaderProgram_1.screenQuadVertexSrc, crtFragmentShaderSrc);
        this.setUniformLocation("screenTexture");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.crtShaderProgram = null;
let createCrtShaderProgram = function () {
    exports.crtShaderProgram = new CrtShaderProgram();
};
exports.createCrtShaderProgram = createCrtShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/GaussianBlur.ts":
/*!*********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/GaussianBlur.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGaussianBlur = exports.gaussianBlur = void 0;
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ../ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const gaussianBlurFragmentSrc = `#version 300 es
precision highp float;

out vec4 fragColor;
  
in vec2 texCoords;

uniform sampler2D image;
  
uniform bool horizontal;
float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

void main()
{             
    vec2 texOffset = vec2(1.0 / float(textureSize(image, 0).x), 1.0 / float(textureSize(image, 0).y)); // gets size of single texel
    vec3 result = texture(image, texCoords).rgb * weight[0]; // current fragment's contribution
    if(horizontal)
    {
        for(int i = 1; i < 5; ++i)
        {
            result += texture(image, texCoords + vec2(texOffset.x * float(i), 0.0)).rgb * weight[i];
            result += texture(image, texCoords - vec2(texOffset.x * float(i), 0.0)).rgb * weight[i];
        }
    }
    else
    {
        for(int i = 1; i < 5; ++i)
        {
            result += texture(image, texCoords + vec2(0.0, texOffset.y * float(i))).rgb * weight[i];
            result += texture(image, texCoords - vec2(0.0, texOffset.y * float(i))).rgb * weight[i];
        }
    }
    fragColor = vec4(result, 1.0);
}`;
class GaussianBlur extends ShaderProgram_1.default {
    constructor() {
        super("GaussianBlur", ScreenQuadShaderProgram_1.screenQuadVertexSrc, gaussianBlurFragmentSrc);
        this.use();
        this.setUniformLocation("image");
        main_1.gl.uniform1i(this.getUniformLocation("image")[0], 0);
        this.setUniformLocation("horizontal");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.gaussianBlur = null;
let createGaussianBlur = function () {
    exports.gaussianBlur = new GaussianBlur();
};
exports.createGaussianBlur = createGaussianBlur;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts":
/*!*****************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScreenQuadShaderProgram = exports.screenQuadShaderProgram = exports.screenQuadVertexSrc = void 0;
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
exports.screenQuadVertexSrc = `#version 300 es

layout (location = 0) in vec2 inPos;
layout (location = 1) in vec2 inTexCoords;

out vec2 texCoords;

void main()
{
    texCoords = inTexCoords;
    gl_Position = vec4(inPos, 0.0, 1.0); 
}  
`;
const screenQuadFragmentSrc = `#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 texCoords;

uniform sampler2D screenTexture;

void main() {
	// Linearization of depth texture.
	// float depth = texture(screenTexture, texCoords).r;
	// depth = (2.0 * 0.01 ) / (100.0 + 0.01 - depth*(100.0 - 0.01));
	// FragColor = vec4(depth, depth, depth, 1.0);
    FragColor = texture(screenTexture, texCoords).rgba;
}
`;
class ScreenQuadShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("ScreenQuadShaderProgram", exports.screenQuadVertexSrc, screenQuadFragmentSrc);
        this.setUniformLocation("screenTexture");
        main_1.gl.uniform1i(this.uniformBindings["screenTexture"], 0);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.screenQuadShaderProgram = null;
let createScreenQuadShaderProgram = function () {
    exports.screenQuadShaderProgram = new ScreenQuadShaderProgram();
};
exports.createScreenQuadShaderProgram = createScreenQuadShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts":
/*!*******************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class ShaderProgram {
    constructor(shaderProgramName, vertexShaderName, fragmentShaderName, debugShaderCompilation = false) {
        this.shaderProgram = null;
        this.loadShaders(shaderProgramName, vertexShaderName, fragmentShaderName, debugShaderCompilation);
        this.uniformBindings = new Map();
    }
    loadShaders(shaderProgramName, vertexShaderString, fragmentShaderString, debugShaderCompilation) {
        // link shaders
        if (this.shaderProgram != null) {
            main_1.gl.deleteProgram(this.shaderProgram); // Delete in case this is not the first time this shader is created.
        }
        console.log("Compiling shader program: " + shaderProgramName);
        // vertex shader
        const vertexShader = main_1.gl.createShader(main_1.gl.VERTEX_SHADER);
        main_1.gl.shaderSource(vertexShader, vertexShaderString);
        main_1.gl.compileShader(vertexShader);
        // Check for shader compile errors
        if (!main_1.gl.getShaderParameter(vertexShader, main_1.gl.COMPILE_STATUS) ||
            debugShaderCompilation) {
            console.log("Vertex shader compiled successfully: " +
                main_1.gl.getShaderParameter(vertexShader, main_1.gl.COMPILE_STATUS));
            console.log("Vertex shader compiler log: \n" + main_1.gl.getShaderInfoLog(vertexShader));
        }
        // fragment shader
        const fragmentShader = main_1.gl.createShader(main_1.gl.FRAGMENT_SHADER);
        main_1.gl.shaderSource(fragmentShader, fragmentShaderString);
        main_1.gl.compileShader(fragmentShader);
        // Check for shader compile errors
        if (!main_1.gl.getShaderParameter(fragmentShader, main_1.gl.COMPILE_STATUS) ||
            debugShaderCompilation) {
            console.log("Fragment shader compiled successfully: " +
                main_1.gl.getShaderParameter(fragmentShader, main_1.gl.COMPILE_STATUS));
            console.log("Fragment shader compiler log: \n" + main_1.gl.getShaderInfoLog(fragmentShader));
        }
        this.shaderProgram = main_1.gl.createProgram();
        main_1.gl.attachShader(this.shaderProgram, vertexShader);
        main_1.gl.attachShader(this.shaderProgram, fragmentShader);
        main_1.gl.linkProgram(this.shaderProgram);
        // Check for linking errors?
        let linkedShaders = main_1.gl.getProgramParameter(this.shaderProgram, main_1.gl.LINK_STATUS);
        if (!linkedShaders || debugShaderCompilation) {
            console.log("Linked shaders successfully: " + linkedShaders);
            console.log("Linking shaders log: \n" + main_1.gl.getProgramInfoLog(this.shaderProgram));
        }
        // Delete shaders now that they have been made into a program
        main_1.gl.deleteShader(vertexShader);
        main_1.gl.deleteShader(fragmentShader);
    }
    use() {
        main_1.gl.useProgram(this.shaderProgram);
    }
    setupVertexAttributePointers() {
        // TODO: Pure virtual possible?
    }
    setupInstancedVertexAttributePointers() { }
    setUniformLocation(uniformName) {
        this.uniformBindings.set(uniformName, main_1.gl.getUniformLocation(this.shaderProgram, uniformName));
    }
    getUniformLocation(uniformName) {
        if (this.uniformBindings.has(uniformName)) {
            return [this.uniformBindings.get(uniformName), true];
        }
        // console.log("No uniform with name " + uniformName + "\n");
        return [0, false];
    }
}
exports["default"] = ShaderProgram;
// ShaderProgram::~ShaderProgram() {
//     glDeleteProgram(p_shaderProgram);
// }


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/GrassShadowPass.ts":
/*!***********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/GrassShadowPass.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGrassShadowPass = exports.grassShadowPass = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const ShadowPass_1 = __webpack_require__(/*! ./ShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass.ts");
const grassShadowVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;
layout (location = 1) in vec2 inTexCoords;

// Instanced attributes starts here
layout (location = 2) in vec3 inPos;
layout (location = 3) in float inSize;
layout (location = 4) in vec3 inTipOffset;

uniform mat4 lightSpaceMatrix;
uniform vec3 cameraPos;
uniform float currentTime;

out vec2 texCoords;

void main() {
    // Billboarding
    vec3 camDir = cameraPos - inPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
    vec3 upVec = vec3(0.0, 1.0, 0.0);
	float size = inSize + length(camDir) * 0.0;
    rightVec = rightVec * inVertexPosition.x * size;
    upVec = upVec * inVertexPosition.y * size;
	vec3 fragPos = vec3(rightVec + upVec + inPos + (inTipOffset + vec3(sin(currentTime + inPos.x) * 0.1, 0.0, 0.0)) * inVertexPosition.y);
    gl_Position = lightSpaceMatrix * vec4(fragPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * size + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
}`;
class GrassShadowPass extends ShaderProgram_1.default {
    constructor() {
        super("GrassShadowPass", grassShadowVertexShaderSrc, ShadowPass_1.shadowFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("texture0");
        main_1.gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
        this.setUniformLocation("lightSpaceMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("currentTime");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
    setupInstancedVertexAttributePointers() {
        const stride = 7 * 4;
        main_1.gl.vertexAttribPointer(2, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(2);
        main_1.gl.vertexAttribDivisor(2, 1);
        main_1.gl.vertexAttribPointer(3, 1, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(3);
        main_1.gl.vertexAttribDivisor(3, 1);
        main_1.gl.vertexAttribPointer(4, 3, main_1.gl.FLOAT, false, stride, 4 * 4);
        main_1.gl.enableVertexAttribArray(4);
        main_1.gl.vertexAttribDivisor(4, 1);
    }
}
exports.grassShadowPass = null;
let createGrassShadowPass = function () {
    exports.grassShadowPass = new GrassShadowPass();
};
exports.createGrassShadowPass = createGrassShadowPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/PointShadowPass.ts":
/*!***********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/PointShadowPass.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPointShadowPass = exports.pointShadowPass = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const pointShadowVertexShaderSrc = `#version 300 es
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
const pointShadowFragmentShaderSrc = `#version 300 es
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
class PointShadowPass extends ShaderProgram_1.default {
    constructor() {
        super("PointShadowPass", pointShadowVertexShaderSrc, pointShadowFragmentShaderSrc);
        this.use();
        this.setUniformLocation("lightSpaceMatrix");
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("textureMatrix");
        this.setUniformLocation("cameraPos");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 8 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 3, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 6 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.pointShadowPass = null;
let createPointShadowPass = function () {
    exports.pointShadowPass = new PointShadowPass();
};
exports.createPointShadowPass = createPointShadowPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass.ts":
/*!******************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createShadowPass = exports.shadowPass = exports.shadowFragmentShaderSrc = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const shadowVertexShaderSrc = `#version 300 es
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
exports.shadowFragmentShaderSrc = `#version 300 es
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
class ShadowPass extends ShaderProgram_1.default {
    constructor() {
        super("ShadowPass", shadowVertexShaderSrc, exports.shadowFragmentShaderSrc);
        this.use();
        this.setUniformLocation("lightSpaceMatrix");
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("textureMatrix");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 8 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 3, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 6 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.shadowPass = null;
let createShadowPass = function () {
    exports.shadowPass = new ShadowPass();
};
exports.createShadowPass = createShadowPass;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/SimpleShaderProgram.ts":
/*!*************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/SimpleShaderProgram.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSimpleShaderProgram = exports.simpleShaderProgram = void 0;
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ./ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const simpleVertexShaderSrc = `#version 300 es
// If inputs change, also update SimpleShaderProgram::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec4 inColor;
layout (location = 2) in vec2 inTexCoords;

// If uniforms change, also update SimpleShaderProgram to match
uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;
uniform mat4 textureMatrix;

out vec4 color;
out vec2 texCoords;

void main() {
    gl_Position = viewProjMatrix * modelMatrix * vec4(inPosition, 1.0);
    color = inColor;
    texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));
}`;
const simpleFragmentShaderSrc = `#version 300 es
precision highp float;

in vec4 color;
in vec2 texCoords;

// If uniforms change, also update SimpleShaderProgram to match
uniform sampler2D texture0;
uniform int useTexture;

out vec4 FragColor;

mat4 thresholdMatrix = mat4(
    1.0, 9.0, 3.0, 11.0,
    13.0, 5.0, 15.0, 7.0,
    4.0, 12.0, 2.0, 10.0,
    16.0, 8.0, 14.0, 6.0
    );

void main()
{
    if (useTexture == 1) {
        FragColor = texture(texture0, texCoords);
    }
    else {
        FragColor = color;
    }

    float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= FragColor.a) {
        discard;
    }

    FragColor.a = 1.0f; // Since we use screen door transparency, do not use alpha value
}`;
class SimpleShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("SimpleShaderProgram", simpleVertexShaderSrc, simpleFragmentShaderSrc);
        this.use();
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("textureMatrix");
        this.setUniformLocation("texture0");
        this.setUniformLocation("useTexture");
        main_1.gl.uniform1i(this.uniformBindings["texture0"], 0);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 9 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 4, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 7 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.simpleShaderProgram = null;
let createSimpleShaderProgram = function () {
    exports.simpleShaderProgram = new SimpleShaderProgram();
};
exports.createSimpleShaderProgram = createSimpleShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/Skybox/SkyboxShaderProgram.ts":
/*!********************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/Skybox/SkyboxShaderProgram.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSkyboxShaderProgram = exports.skyboxShaderProgram = exports.skyboxVertexSrc = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
exports.skyboxVertexSrc = `#version 300 es

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
const skyboxFragmentSrc = `#version 300 es
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
class SkyboxShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("SkyboxShaderProgram", exports.skyboxVertexSrc, skyboxFragmentSrc);
        this.setUniformLocation("skybox");
        main_1.gl.uniform1i(this.uniformBindings["skybox"], 0);
        this.setUniformLocation("viewProjMatrix");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 3 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
    }
}
exports.skyboxShaderProgram = null;
let createSkyboxShaderProgram = function () {
    exports.skyboxShaderProgram = new SkyboxShaderProgram();
};
exports.createSkyboxShaderProgram = createSkyboxShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram.ts":
/*!**********************************************************************************************!*\
  !*** ./code/src/Engine/Rendering/ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createVolumetricGodRayShaderProgram = exports.volumetricGodRayShaderProgram = void 0;
const main_1 = __webpack_require__(/*! ../../../../main */ "./code/src/main.ts");
const LightingPass_1 = __webpack_require__(/*! ../DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const ShaderProgram_1 = __webpack_require__(/*! ../ShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ShaderProgram.ts");
const volumetricGodRayVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float fogMaxDistance;
uniform float numPlanes;
uniform float fov;

out vec3 fragPos;
flat out float numberPlanes;
flat out float fogMD;
flat out int instanceID;

void main() {
	float recalculatedMaxDepth = fogMaxDistance * cos(fov/2.0); // Get the length along hypothenuse when closest is fogMaxDistance and angle is fov/2
	float currDepth = (recalculatedMaxDepth - (recalculatedMaxDepth / numPlanes) * float(gl_InstanceID));
	currDepth = (1.0/recalculatedMaxDepth) * pow(currDepth, 2.0);
	
	vec4 clipSpacePos = inverse(viewProjMatrix) * vec4(inVertexPosition.xy, 1.0, 1.0);
	vec3 worldPos = vec3(clipSpacePos.xyz / clipSpacePos.w);
	worldPos = cameraPos + normalize(worldPos - cameraPos) * currDepth;

	numberPlanes = numPlanes;
	fogMD = fogMaxDistance;
	instanceID = gl_InstanceID;
	
    fragPos = worldPos;
    gl_Position = viewProjMatrix * vec4(worldPos, 1.0);
}`;
let volumetricGodRayFragmentShaderSrc;
class VolumetricGodRaysShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("VolumetricGodRaysShaderProgram", volumetricGodRayVertexShaderSrc, volumetricGodRayFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("fogMaxDistance");
        this.setUniformLocation("numPlanes");
        this.setUniformLocation("fov");
        this.setUniformLocation("nrOfPointLights");
        for (let i = 0; i < LightingPass_1.pointShadowsToAllocate; i++) {
            this.setUniformLocation("pointDepthMaps[" + i + "]");
            main_1.gl.uniform1i(this.getUniformLocation("pointDepthMaps[" + i + "]")[0], i);
        }
        for (let i = 0; i < LightingPass_1.pointLightsToAllocate; i++) {
            this.setUniformLocation("pointLights[" + i + "].position");
            this.setUniformLocation("pointLights[" + i + "].colour");
            this.setUniformLocation("pointLights[" + i + "].constant");
            this.setUniformLocation("pointLights[" + i + "].linear");
            this.setUniformLocation("pointLights[" + i + "].quadratic");
            this.setUniformLocation("pointLights[" + i + "].pointDepthMapIndex");
        }
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 2 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
    }
}
exports.volumetricGodRayShaderProgram = null;
let createVolumetricGodRayShaderProgram = function () {
    volumetricGodRayFragmentShaderSrc = `#version 300 es
precision highp float;

#define NR_POINT_LIGHTS ` +
        LightingPass_1.pointLightsToAllocate +
        `
#define NR_POINT_SHADOWS ` +
        LightingPass_1.pointShadowsToAllocate +
        `
in vec3 fragPos;
flat in float numberPlanes;
flat in float fogMD;
flat in int instanceID;

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

uniform PointLight pointLights[NR_POINT_LIGHTS];
uniform int nrOfPointLights;

out vec4 FragColor;
const float far_plane = 100.0;

float CalcPointShadow(PointLight light, vec3 fragmentPos) {
	// get vector between fragment position and light position
    vec3 fragToLight = fragmentPos - light.position;
	fragToLight.y *= -1.0;
	fragToLight.z *= -1.0;
    // use the light to fragment vector to sample from the depth map
    float closestDepth = 1.0;`;
    // Below is ugly, but I have to unroll the loop to be able to acces the pointDepthMaps array with a compile time index, as run-time index is not allowed to access a sampler
    for (let i = 0; i < LightingPass_1.pointShadowsToAllocate; i++) {
        if (i == 0) {
            volumetricGodRayFragmentShaderSrc += `
	if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
        }
        else {
            volumetricGodRayFragmentShaderSrc += `
	else if (light.pointDepthMapIndex == ` + i + `) {
		closestDepth = texture(pointDepthMaps[` + i + `], fragToLight).r;
	}
	`;
        }
    }
    volumetricGodRayFragmentShaderSrc += `
    // it is currently in linear range between [0,1]. Re-transform back to original value
    closestDepth *= far_plane;
    // now get current linear depth as the length between the fragment and light position
    float currentDepth = length(fragToLight);
    // now test for shadows
    float bias = 0.0;
    float shadow = currentDepth -  bias > closestDepth ? 1.0 : 0.0;

    return shadow;
}

// Calculates the colour when using a point light.
vec4 CalcPointLight(PointLight light, vec3 fragmentPos) {
	if (light.pointDepthMapIndex >= 0 && light.pointDepthMapIndex < NR_POINT_SHADOWS && CalcPointShadow(light, fragmentPos) == 0.0) {
		float distance = max(length(light.position - fragmentPos), 20.0);
		float attenuation = 1.0f / (light.constant + light.linear * distance + light.quadratic * (distance * distance));

		// attenuation = attenuation * abs(((numberPlanes / 2.0) - float(instanceID))) * 0.05;

		return vec4(light.colour * attenuation, 0.03);
	} 
	return vec4(0.0, 0.0, 0.0, 0.0);
}

void main()
{
    vec4 result = vec4(0.0, 0.0, 0.0, 0.0);
	int effectedCounter = 0;
	for (int i = 0; i < nrOfPointLights; i++) {
		vec4 lightResult = CalcPointLight(pointLights[i], fragPos);
		if (lightResult.a > 0.0) {
			effectedCounter++;
			result += lightResult;
		}
	}
	result.a /= float(effectedCounter);

    FragColor = result;
}
`;
    exports.volumetricGodRayShaderProgram = new VolumetricGodRaysShaderProgram();
};
exports.createVolumetricGodRayShaderProgram = createVolumetricGodRayShaderProgram;


/***/ }),

/***/ "./code/src/Engine/Rendering/Textures/CubeMap.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/Rendering/Textures/CubeMap.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
const Texture_1 = __webpack_require__(/*! ./Texture */ "./code/src/Engine/Rendering/Textures/Texture.ts");
class CubeMap extends Texture_1.default {
    constructor(useMipMap = true, internalFormat = main_1.gl.RGBA, format = main_1.gl.RGBA, dataStorageType = main_1.gl.UNSIGNED_BYTE, textureTarget = main_1.gl.TEXTURE_CUBE_MAP) {
        super(useMipMap, internalFormat, format, dataStorageType, textureTarget);
        this.setTexParameterI(main_1.gl.TEXTURE_WRAP_R, main_1.gl.REPEAT);
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
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        if (face == undefined) {
            // Face not specified, set the data for all sides
            for (let i = 0; i < 6; i++) {
                main_1.gl.texImage2D(main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.internalFormat, this.width, this.height, 0, this.format, this.dataStorageType, data);
            }
        }
        else {
            // Face specified, set data for the specified face
            main_1.gl.texImage2D(face, 0, this.internalFormat, this.width, this.height, 0, this.format, this.dataStorageType, data);
        }
        // Unbind texture
        main_1.gl.bindTexture(this.textureTarget, null);
    }
    loadCubemap(URLs) {
        for (let i = 0; i < URLs.length; i++) {
            let image = new Image();
            image.crossOrigin = "";
            image.src = URLs[i];
            let self = this;
            image.addEventListener("load", function () {
                // Now that the image has loaded copy it to the texture and save the width/height.
                self.width = image.width;
                self.height = image.height;
                main_1.gl.bindTexture(self.textureTarget, self.texture);
                main_1.gl.texImage2D(main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, self.internalFormat, self.format, self.dataStorageType, image);
                self.sidesLoaded++;
                if (self.sidesLoaded >= 6) {
                    self.loadedFromFile = true;
                    if (self.useMipMap) {
                        main_1.gl.generateMipmap(self.textureTarget);
                        main_1.gl.texParameteri(self.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
                    }
                }
            });
        }
    }
}
exports["default"] = CubeMap;


/***/ }),

/***/ "./code/src/Engine/Rendering/Textures/Texture.ts":
/*!*******************************************************!*\
  !*** ./code/src/Engine/Rendering/Textures/Texture.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../../../main */ "./code/src/main.ts");
class Texture {
    constructor(useMipMap = true, internalFormat = main_1.gl.RGBA, format = main_1.gl.RGBA, dataStorageType = main_1.gl.UNSIGNED_BYTE, textureTarget = main_1.gl.TEXTURE_2D) {
        // this.missingTextureData = new Uint8Array([
        //     255, 255, 255, 255, 0, 0, 0, 255,
        //     0, 0, 0, 255, 255, 255, 255, 255
        // ]);
        this.useMipMap = useMipMap;
        this.internalFormat = internalFormat;
        this.format = format;
        this.dataStorageType = dataStorageType;
        this.textureTarget = textureTarget;
        // Generate texture
        this.texture = main_1.gl.createTexture();
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        // Set texture parameters
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_WRAP_S, main_1.gl.REPEAT);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_WRAP_T, main_1.gl.REPEAT);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.NEAREST);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MAG_FILTER, main_1.gl.NEAREST);
        main_1.gl.pixelStorei(main_1.gl.UNPACK_FLIP_Y_WEBGL, true);
        // Make a 1 by 1 empty texture
        this.setTextureData(null, 1, 1);
        main_1.gl.bindTexture(this.textureTarget, null);
    }
    setTextureData(data, width, height) {
        this.width = width;
        this.height = height;
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        main_1.gl.texImage2D(this.textureTarget, 0, this.internalFormat, width, height, 0, this.format, this.dataStorageType, data);
        if (this.useMipMap) {
            main_1.gl.generateMipmap(this.textureTarget);
            main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
        }
        main_1.gl.bindTexture(this.textureTarget, null);
        this.loadedFromFile = false;
    }
    bind(textureIndex = 0) {
        main_1.gl.activeTexture(main_1.gl.TEXTURE0 + textureIndex);
        main_1.gl.bindTexture(this.textureTarget, this.texture);
    }
    loadFromFile(URL) {
        let image = new Image();
        image.crossOrigin = "";
        image.src = URL;
        let self = this;
        image.addEventListener("load", function () {
            // Now that the image has loaded copy it to the texture and save the width/height.
            self.width = image.width;
            self.height = image.height;
            main_1.gl.bindTexture(self.textureTarget, self.texture);
            main_1.gl.texImage2D(self.textureTarget, 0, self.internalFormat, self.format, self.dataStorageType, image);
            if (self.useMipMap) {
                main_1.gl.generateMipmap(self.textureTarget);
                main_1.gl.texParameteri(self.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
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
            // Hex
            if (colorValue.length >= 7) {
                r = parseInt(colorValue.slice(1, 3), 16);
                g = parseInt(colorValue.slice(3, 5), 16);
                b = parseInt(colorValue.slice(5, 7), 16);
                if (colorValue.length == 9) {
                    a = parseInt(colorValue.slice(7, 9), 16);
                }
            }
        }
        else if (colorValue.startsWith("rgba(")) {
            let rfindResult = colorValue.lastIndexOf(")");
            let values = colorValue.substring("rgba(".length, rfindResult).split(",").map((value) => {
                return parseFloat(value);
            });
            r = values[0];
            g = values[1];
            b = values[2];
            a = values[3] * 255;
        }
        else if (colorValue.startsWith("rgb(")) {
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
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        main_1.gl.texParameteri(this.textureTarget, a, b);
        main_1.gl.bindTexture(this.textureTarget, null);
    }
}
exports["default"] = Texture;
// Texture::~Texture() {
// 	glDeleteTextures(1, &m_texture);
// }


/***/ }),

/***/ "./code/src/Engine/States/State.ts":
/*!*****************************************!*\
  !*** ./code/src/Engine/States/State.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatesEnum = void 0;
var StatesEnum;
(function (StatesEnum) {
    StatesEnum[StatesEnum["STAY"] = 0] = "STAY";
    StatesEnum[StatesEnum["LOADINGSCREEN"] = 1] = "LOADINGSCREEN";
    StatesEnum[StatesEnum["MAINMENU"] = 2] = "MAINMENU";
    StatesEnum[StatesEnum["OPTIONS"] = 3] = "OPTIONS";
    StatesEnum[StatesEnum["CONTROLS"] = 4] = "CONTROLS";
    StatesEnum[StatesEnum["GAME"] = 5] = "GAME";
    StatesEnum[StatesEnum["DEBUGMODE"] = 6] = "DEBUGMODE";
    StatesEnum[StatesEnum["LEVELSELECT"] = 7] = "LEVELSELECT";
})(StatesEnum = exports.StatesEnum || (exports.StatesEnum = {}));
class State {
    constructor() {
        this.gotoState = StatesEnum.STAY;
        this.initialized = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    reset() { }
    onExit(e) { }
    update(dt) { }
    prepareDraw(dt) { }
    draw() { }
}
exports["default"] = State;


/***/ }),

/***/ "./code/src/Engine/States/StateMachine.ts":
/*!************************************************!*\
  !*** ./code/src/Engine/States/StateMachine.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const State_1 = __webpack_require__(/*! ./State */ "./code/src/Engine/States/State.ts");
class StateMachine {
    constructor(startState) {
        this.fps = 0;
        // Frame timer variables
        this.lastTick = null;
        this.updateTimer = 0.0;
        this.fpsUpdateTimer = 0.0;
        this.frameCounter = 0;
        this.dt = 0.0;
        this.states = new Map();
        this.currentState = startState;
        this.firstLoop = true;
    }
    addState(stateEnum, stateType, minUpdateRate, state) {
        this.states.set(stateEnum, {
            stateType: stateType,
            minUpdateRate: minUpdateRate,
            state: state,
        });
        this.states.get(stateEnum).state.reset();
    }
    updateFrameTimers() {
        let now = Date.now();
        this.dt = (now - (this.lastTick || now)) * 0.001;
        this.lastTick = now;
        this.frameCounter++;
        this.fpsUpdateTimer += this.dt;
        if (this.fpsUpdateTimer > 0.5) {
            this.fps = this.frameCounter / this.fpsUpdateTimer;
            this.fpsUpdateTimer -= 0.5;
            this.frameCounter = 0;
        }
    }
    updateState(state, minUpdateRate) {
        this.updateFrameTimers();
        // Constant update rate
        this.updateTimer += this.dt;
        let updatesSinceRender = 0;
        if (minUpdateRate != undefined) {
            //Only update if update timer goes over update rate
            while (this.updateTimer >= minUpdateRate) {
                if (updatesSinceRender >= 20) {
                    // Too many updates, throw away the rest of dt (makes the game run in slow-motion)
                    this.updateTimer = 0;
                    break;
                }
                state.update(minUpdateRate);
                this.updateTimer -= minUpdateRate;
                updatesSinceRender++;
            }
        }
        if (updatesSinceRender == 0) {
            // dt is faster than min update rate, or no min update rate is set
            state.update(this.updateTimer);
            this.updateTimer = 0.0;
        }
        state.prepareDraw(this.dt);
        if (!this.firstLoop) {
            state.draw();
        }
        this.firstLoop = false;
    }
    runCurrentState() {
        return __awaiter(this, void 0, void 0, function* () {
            let currentState = this.states.get(this.currentState);
            if (!currentState.state.initialized) {
                yield currentState.state.init();
                currentState.state.initialized = true;
            }
            // Update the state
            this.updateState(currentState.state, currentState.minUpdateRate);
            // Check if we should change state
            if (currentState.state.gotoState != State_1.StatesEnum.STAY) {
                let oldState = currentState;
                this.currentState = currentState.state.gotoState;
                oldState.state.reset();
                oldState.state.initialized = false;
                oldState.state.gotoState = State_1.StatesEnum.STAY;
            }
            requestAnimationFrame(this.runCurrentState.bind(this));
        });
    }
    start() {
        requestAnimationFrame(this.runCurrentState.bind(this));
    }
}
exports["default"] = StateMachine;


/***/ }),

/***/ "./code/src/Engine/Utils/ESCUtils.ts":
/*!*******************************************!*\
  !*** ./code/src/Engine/Utils/ESCUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECSUtils = void 0;
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const Component_1 = __webpack_require__(/*! ../ECS/Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const IntersectionTester_1 = __webpack_require__(/*! ../Physics/IntersectionTester */ "./code/src/Engine/Physics/IntersectionTester.ts");
const Triangle_1 = __webpack_require__(/*! ../Physics/Shapes/Triangle */ "./code/src/Engine/Physics/Shapes/Triangle.ts");
var ECSUtils;
(function (ECSUtils) {
    /**
     * Calculates the position given all position effecting components (like PositionComponent, PositionParentComponent)
     * @param entity The entity for which to calculate the position
     * @returns The final position
     */
    function CalculatePosition(entity) {
        let posComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITION));
        let posParentComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
        let tempMatrix = gl_matrix_1.mat4.create();
        if (posComp == undefined) {
            if (posParentComp == undefined) {
                return null;
            }
            posParentComp.calculateMatrix(tempMatrix);
        }
        else {
            if (posParentComp != undefined) {
                posParentComp.calculateMatrix(tempMatrix);
            }
            posComp.calculateMatrix(tempMatrix);
        }
        let posVector = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.create(), tempMatrix);
        return gl_matrix_1.vec3.fromValues(posVector[0], posVector[1], posVector[2]);
    }
    ECSUtils.CalculatePosition = CalculatePosition;
    /**
     * Raycasts against a list of entities
     * @param ray Ray shape
     * @param entities Array of entities to test against
     * @returns Object with distance and entity ID of the closest hit
     */
    function RayCastAgainstEntityList(ray, entities) {
        let closest = Infinity;
        let eId = -1;
        for (let e of entities) {
            let bbComp = e.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
            if (bbComp == undefined) {
                continue;
            }
            bbComp.boundingBox.setUpdateNeeded();
            let dist = IntersectionTester_1.IntersectionTester.doRayCast(ray, [bbComp.boundingBox], closest); // Ray cast against bounding box, only caring about hits closer than the previous closest
            if (dist >= 0 && dist < closest) {
                // Boundingbox is closer than current closest hit
                // Ray cast against mesh if there is one, only caring about hits closer than the previous closest
                let meshColComp = e.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION);
                if (meshColComp != undefined) {
                    ray.setInverseMatrix(gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), bbComp.boundingBox.getTransformMatrix()));
                    let shapeArray = new Array();
                    meshColComp.octree.getShapesForRayCast(ray, shapeArray, closest);
                    dist = IntersectionTester_1.IntersectionTester.doRayCast(ray, shapeArray, closest);
                    ray.setInverseMatrix(gl_matrix_1.mat4.create());
                }
                if (dist >= 0.0 && dist < closest) {
                    // Hit is still closer than current closest
                    // Update the closest information and save the object for editing
                    closest = dist;
                    eId = e.id;
                }
            }
        }
        return { distance: closest, eId: eId };
    }
    ECSUtils.RayCastAgainstEntityList = RayCastAgainstEntityList;
    /**
     * Calculates when an entity (A) will collide with any of the entities in array "entities", if they remain on the same course and velocity (this will not take acceleration into account, so this needs to be recalculated if any forces/accelerations are applied to any involved entity)
     * @param entityA Entity A
     * @param entityAVel The velocity of Entity A
     * @param entities The other entities to test collision time against
     * @param max A cap of how far into the future this function will detect a collision
     * @param allow0Collision If collisions happening right now should be included in the test
     * @returns Object with time for collision, entity ID for which entity the collision will be with, and an intersecton vector with the normal of the surface entity will collide with.
     */
    function CalculateCollisionTime(entityA, entityAVel, entities, max, allow0Collision = true) {
        let earliest = Infinity;
        let eId = -1;
        let intersectionVec = null;
        let entityABBComp = entityA.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
        if (entityABBComp == undefined) {
            return { time: earliest, eId: eId, intersectionVec: intersectionVec };
        }
        entityABBComp.boundingBox.setUpdateNeeded();
        const entityAMeshColComp = entityA.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION);
        for (let entityB of entities) {
            let entityBBBComp = entityB.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
            if (entityBBBComp == undefined) {
                continue;
            }
            let entityBMovComp = entityB.getComponent(Component_1.ComponentTypeEnum.MOVEMENT);
            let entityBVel = gl_matrix_1.vec3.create();
            if (entityBMovComp != undefined) {
                gl_matrix_1.vec3.copy(entityBVel, entityBMovComp.velocity);
            }
            entityBBBComp.boundingBox.setUpdateNeeded();
            let [dist, iVec] = IntersectionTester_1.IntersectionTester.doContinousIntersection([entityABBComp.boundingBox], entityAVel, [entityBBBComp.boundingBox], entityBVel, Math.min(earliest, max));
            if (dist >= 0.0 && dist < earliest) {
                // Boundingbox collisions are closer than current closest hit
                // Continous collision check against mesh if there is one, only caring about hits closer than the previous closest
                let shapeBArray = new Array();
                const entityBMeshColComp = entityB.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION);
                if (entityBMeshColComp != undefined) {
                    const inverseMatrix = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), entityBBBComp.boundingBox.getTransformMatrix());
                    entityABBComp.boundingBox.setInverseMatrix(inverseMatrix);
                    let localShapeArray = new Array();
                    entityBMeshColComp.octree.getShapesForContinousCollision(entityABBComp.boundingBox, 
                    // Use velocities in local space for entity B
                    gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), entityAVel, inverseMatrix), gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), entityBVel, inverseMatrix), localShapeArray, Math.min(earliest, max));
                    entityABBComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.create());
                    // Convert shapes to world space
                    for (let shape of localShapeArray) {
                        let index = shapeBArray.push(new Triangle_1.default()) - 1;
                        let shapeOriginalVertices = shape.getOriginalVertices();
                        shapeBArray[index].setVertices(shapeOriginalVertices[0], shapeOriginalVertices[1], shapeOriginalVertices[2]);
                        shapeBArray[index].setTransformMatrix(entityBBBComp.boundingBox.getTransformMatrix());
                    }
                }
                else {
                    shapeBArray.push(entityBBBComp.boundingBox);
                }
                let shapeAArray = new Array();
                if (entityAMeshColComp != undefined) {
                    const inverseMatrix = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), entityABBComp.boundingBox.getTransformMatrix());
                    entityBBBComp.boundingBox.setInverseMatrix(inverseMatrix);
                    let localShapeArray = new Array();
                    entityAMeshColComp.octree.getShapesForContinousCollision(entityBBBComp.boundingBox, 
                    // Use velocities in local space for entity B
                    gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), entityBVel, inverseMatrix), gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), entityAVel, inverseMatrix), localShapeArray, Math.min(earliest, max));
                    entityBBBComp.boundingBox.setInverseMatrix(gl_matrix_1.mat4.create());
                    // Convert shapes to world space
                    for (let shape of localShapeArray) {
                        let index = shapeAArray.push(new Triangle_1.default()) - 1;
                        let shapeOriginalVertices = shape.getOriginalVertices();
                        shapeAArray[index].setVertices(shapeOriginalVertices[0], shapeOriginalVertices[1], shapeOriginalVertices[2]);
                        shapeAArray[index].setTransformMatrix(entityABBComp.boundingBox.getTransformMatrix());
                    }
                }
                else {
                    shapeAArray.push(entityABBComp.boundingBox);
                }
                [dist, iVec] = IntersectionTester_1.IntersectionTester.doContinousIntersection(shapeAArray, entityAVel, shapeBArray, entityBVel, Math.min(earliest, max), allow0Collision);
                if (((allow0Collision && dist >= 0.0) || dist > 0.0) && (dist < earliest || dist > 0.0)) {
                    // Hit is still closer than current closest
                    // Update the closest information and save the object for editing
                    earliest = dist;
                    eId = entityB.id;
                    intersectionVec = iVec;
                }
            }
        }
        return { time: earliest, eId: eId, intersectionVec: intersectionVec };
    }
    ECSUtils.CalculateCollisionTime = CalculateCollisionTime;
    /**
     * Assumes intersection, finds the smallest overlap
     * @param entityA entityA
     * @param entityB entityB
     * @returns Intersection information array, all intersections will point from EntityB to EntityA
     */
    function GetIntersectionInformation(entityA, entityB) {
        let entityABBComp = entityA.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
        if (entityABBComp == undefined) {
            return null;
        }
        let entityBBBComp = entityB.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
        if (entityBBBComp == undefined) {
            return null;
        }
        let info = new Array();
        IntersectionTester_1.IntersectionTester.identifyIntersectionInformation([entityABBComp.boundingBox], [entityBBBComp.boundingBox], info);
        return info;
    }
    ECSUtils.GetIntersectionInformation = GetIntersectionInformation;
})(ECSUtils = exports.ECSUtils || (exports.ECSUtils = {}));


/***/ }),

/***/ "./code/src/Engine/Utils/WebUtils.ts":
/*!*******************************************!*\
  !*** ./code/src/Engine/Utils/WebUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebUtils = void 0;
var WebUtils;
(function (WebUtils) {
    /**
     * Will get the content of cookie with name cookieName
     * @param cookieName Name of cookie
     * @returns Content
     */
    function GetCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    WebUtils.GetCookie = GetCookie;
    /**
     * Will set the content of a cookie
     * @param cookieName Cookie name
     * @param cookieValue Cookie value
     * @param daysToLast How long the cookie should be valid
     */
    function SetCookie(cookieName, cookieValue, daysToLast = 365) {
        const d = new Date();
        d.setTime(d.getTime() + daysToLast * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires;
    }
    WebUtils.SetCookie = SetCookie;
    /**
     * Delete cookie
     * @param cookieName Cookie name
     */
    function DeleteCookie(cookieName) {
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    WebUtils.DeleteCookie = DeleteCookie;
    /**
     * Will start a download of a file with filename and content text
     * @param filename File name
     * @param text Content
     */
    function DownloadFile(filename, text) {
        let element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    WebUtils.DownloadFile = DownloadFile;
    /**
     * Will download a file that exists on URL filepath, for example a resource file
     * @param filepath File path
     * @param filename File name
     */
    function DownloadExistingFile(filepath, filename) {
        let element = document.createElement("a");
        element.setAttribute("href", filepath);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    WebUtils.DownloadExistingFile = DownloadExistingFile;
})(WebUtils = exports.WebUtils || (exports.WebUtils = {}));


/***/ }),

/***/ "./code/src/Game/GameMachine.ts":
/*!**************************************!*\
  !*** ./code/src/Game/GameMachine.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateAccessible = exports.options = exports.input = void 0;
const AudioPlayer_1 = __webpack_require__(/*! ../Engine/Audio/AudioPlayer */ "./code/src/Engine/Audio/AudioPlayer.ts");
const Input_1 = __webpack_require__(/*! ../Engine/Input/Input */ "./code/src/Engine/Input/Input.ts");
const MeshStore_1 = __webpack_require__(/*! ../Engine/AssetHandling/MeshStore */ "./code/src/Engine/AssetHandling/MeshStore.ts");
const State_1 = __webpack_require__(/*! ../Engine/States/State */ "./code/src/Engine/States/State.ts");
const StateMachine_1 = __webpack_require__(/*! ../Engine/States/StateMachine */ "./code/src/Engine/States/StateMachine.ts");
const TextureStore_1 = __webpack_require__(/*! ../Engine/AssetHandling/TextureStore */ "./code/src/Engine/AssetHandling/TextureStore.ts");
const ControlsMenu_1 = __webpack_require__(/*! ./States/ControlsMenu */ "./code/src/Game/States/ControlsMenu.ts");
const DebugMode_1 = __webpack_require__(/*! ./States/DebugMode */ "./code/src/Game/States/DebugMode.ts");
const Game_1 = __webpack_require__(/*! ./States/Game */ "./code/src/Game/States/Game.ts");
const LoadingScreen_1 = __webpack_require__(/*! ./States/LoadingScreen */ "./code/src/Game/States/LoadingScreen.ts");
const Menu_1 = __webpack_require__(/*! ./States/Menu */ "./code/src/Game/States/Menu.ts");
const OptionsMenu_1 = __webpack_require__(/*! ./States/OptionsMenu */ "./code/src/Game/States/OptionsMenu.ts");
const WebUtils_1 = __webpack_require__(/*! ../Engine/Utils/WebUtils */ "./code/src/Engine/Utils/WebUtils.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
const LevelSelect_1 = __webpack_require__(/*! ./States/LevelSelect */ "./code/src/Game/States/LevelSelect.ts");
// Globals
exports.input = new Input_1.default();
exports.options = {
    useCrt: false,
    useBloom: false,
    foldableGrass: false,
    showFps: true,
    grassDensity: 10000,
    musicVolume: 0.05,
    effectVolume: 0.05,
};
/**
 * These are the variables available to all the states
 */
class StateAccessible {
}
exports.StateAccessible = StateAccessible;
class GameMachine extends StateMachine_1.default {
    constructor() {
        super(State_1.StatesEnum.LOADINGSCREEN);
        this.initializeOptions();
        this.stateAccessible = new StateAccessible();
        this.stateAccessible.textureStore = new TextureStore_1.default();
        this.stateAccessible.meshStore = new MeshStore_1.default(this.stateAccessible.textureStore);
        this.stateAccessible.audioPlayer = new AudioPlayer_1.default(),
            this.stateAccessible.restartGame = false,
            this.stateAccessible.localGame = true,
            this.stateAccessible.audioPlayer.setMusicVolume(exports.options.musicVolume);
        this.stateAccessible.audioPlayer.setSoundEffectVolume(exports.options.effectVolume);
        let game = Game_1.default.getInstance(this.stateAccessible);
        // Add states
        this.addState(State_1.StatesEnum.LOADINGSCREEN, LoadingScreen_1.default, 1 / 60.0, new LoadingScreen_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.MAINMENU, Menu_1.default, 1.0 / 60.0, new Menu_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.LEVELSELECT, LevelSelect_1.default, 1.0 / 60.0, new LevelSelect_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.OPTIONS, OptionsMenu_1.default, 1.0 / 60.0, new OptionsMenu_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.CONTROLS, ControlsMenu_1.default, 1.0 / 60.0, new ControlsMenu_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.GAME, Game_1.default, 1.0 / 144.0, game);
        this.stateAccessible.restartGame = true;
        this.addState(State_1.StatesEnum.DEBUGMODE, DebugMode_1.default, 1.0 / 144.0, new DebugMode_1.default(this.stateAccessible, game));
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.fpsDisplay = this.overlayRendering.getNew2DText();
        this.fpsDisplay.position[0] = 0.01;
        this.fpsDisplay.position[1] = 0.01;
        this.fpsDisplay.size = 18;
        this.fpsDisplay.scaleWithWindow = false;
        this.fpsDisplay.getElement().style.color = "lime";
    }
    onExit(e) {
        WebUtils_1.WebUtils.SetCookie("showFps", exports.options.showFps.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("useCrt", exports.options.useCrt.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("useBloom", exports.options.useBloom.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("volume", exports.options.musicVolume.toString());
        WebUtils_1.WebUtils.SetCookie("effectVolume", exports.options.effectVolume.toString());
        WebUtils_1.WebUtils.SetCookie("foldableGrass", exports.options.foldableGrass.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("grassDensity", exports.options.grassDensity.toString());
        for (let s of this.states) {
            s[1].state.onExit(e);
        }
    }
    initializeOptions() {
        exports.options.showFps = !(WebUtils_1.WebUtils.GetCookie("showFps") == "false");
        exports.options.useCrt = WebUtils_1.WebUtils.GetCookie("useCrt") == "true";
        exports.options.useBloom = WebUtils_1.WebUtils.GetCookie("useBloom") == "true";
        let volumeCookie = WebUtils_1.WebUtils.GetCookie("volume");
        if (volumeCookie != "") {
            exports.options.musicVolume = parseFloat(volumeCookie);
        }
        let effectVolumeCookie = WebUtils_1.WebUtils.GetCookie("effectVolume");
        if (effectVolumeCookie != "") {
            exports.options.effectVolume = parseFloat(effectVolumeCookie);
        }
        exports.options.foldableGrass = WebUtils_1.WebUtils.GetCookie("foldableGrass") == "true";
        let grassDensityCookie = WebUtils_1.WebUtils.GetCookie("grassDensity");
        if (grassDensityCookie != "") {
            exports.options.grassDensity = parseFloat(grassDensityCookie);
        }
    }
    runCurrentState() {
        const _super = Object.create(null, {
            runCurrentState: { get: () => super.runCurrentState }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.fpsDisplay.setHidden(!exports.options.showFps);
            this.fpsDisplay.textString = Math.round(this.fps) + "";
            this.overlayRendering.draw();
            _super.runCurrentState.call(this);
        });
    }
}
exports["default"] = GameMachine;


/***/ }),

/***/ "./code/src/Game/GolfBall.ts":
/*!***********************************!*\
  !*** ./code/src/Game/GolfBall.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const PositionComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/PositionComponent */ "./code/src/Engine/ECS/Components/PositionComponent.ts");
const MovementComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/MovementComponent */ "./code/src/Engine/ECS/Components/MovementComponent.ts");
const BoundingBoxComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/BoundingBoxComponent */ "./code/src/Engine/ECS/Components/BoundingBoxComponent.ts");
const GameMachine_1 = __webpack_require__(/*! ./GameMachine */ "./code/src/Game/GameMachine.ts");
const ESCUtils_1 = __webpack_require__(/*! ../Engine/Utils/ESCUtils */ "./code/src/Engine/Utils/ESCUtils.ts");
const MeshCollisionComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/MeshCollisionComponent */ "./code/src/Engine/ECS/Components/MeshCollisionComponent.ts");
const GraphicsComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/GraphicsComponent */ "./code/src/Engine/ECS/Components/GraphicsComponent.ts");
const Ray_1 = __webpack_require__(/*! ../Engine/Physics/Shapes/Ray */ "./code/src/Engine/Physics/Shapes/Ray.ts");
const Component_1 = __webpack_require__(/*! ../Engine/ECS/Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const AllCollisionEntities = "Box || Box Pink || Box Gray || Box Green || Diamond || Sphere || Museum || Police car";
const OnlyMovingCollisionEntities = "Moving Box"; // Doesn't actually exist yet
const BallScaleFactor = 0.5;
class GolfBall {
    constructor(scene, game, overlayRendering, meshStore) {
        this.scene = scene;
        this.game = game;
        this.meshStore = meshStore;
        this.bounceLimitDisplay = overlayRendering.getNew2DText();
        gl_matrix_1.vec2.set(this.bounceLimitDisplay.position, 0.5, 0.05);
        this.bounceLimitDisplay.center = true;
        this.bounceLimitDisplay.textString = "1";
        this.jawPitch = gl_matrix_1.vec2.create();
        this.mouseMovement = gl_matrix_1.vec2.create();
        GameMachine_1.input.mouseMoveCallBack = (event) => {
            if (GameMachine_1.input.mouseRightClicked) {
                let movX = event.movementX;
                let movY = event.movementY;
                if (Math.abs(movX) > window.innerWidth * 0.3) {
                    movX = 0.0;
                }
                if (Math.abs(movY) > window.innerHeight * 0.3) {
                    movY = 0.0;
                }
                gl_matrix_1.vec2.sub(this.mouseMovement, this.mouseMovement, gl_matrix_1.vec2.fromValues(movX, movY));
            }
        };
        this.direction = gl_matrix_1.vec3.create();
        this.nextDirection = gl_matrix_1.vec3.create();
        this.nextBounceVec = gl_matrix_1.vec3.create();
        this.nextBounceTime = Infinity;
        this.nextBounceEntityId = -1;
        this.lastBounceTime = 0.0;
        this.bounceLimit = 1;
        this.mouseWasPressed = true;
        this.mouseRightWasPressed = true;
        this.positionComp = new PositionComponent_1.default();
        gl_matrix_1.vec3.set(this.positionComp.scale, BallScaleFactor, BallScaleFactor, BallScaleFactor);
        this.entity = this.game.ecsManager.createEntity();
        this.game.ecsManager.addComponent(this.entity, this.positionComp);
        let boundingBoxComp = new BoundingBoxComponent_1.default();
        boundingBoxComp.boundingBox.setMinAndMaxVectors(gl_matrix_1.vec3.fromValues(-1.0, -1.0, -1.0), gl_matrix_1.vec3.fromValues(1.0, 1.0, 1.0));
        boundingBoxComp.updateTransformMatrix(this.positionComp.matrix);
        this.game.ecsManager.addComponent(this.entity, boundingBoxComp);
        // let collisionComp = new CollisionComponent();
        // collisionComp.mass = 20.0;
        // collisionComp.frictionCoefficient = 1.0;
        // collisionComp.collisionCoefficient = 0.0;
        // this.game.ecsManager.addComponent(this.entity, collisionComp);
        this.movComp = new MovementComponent_1.default();
        this.movComp.drag = 0.0;
        gl_matrix_1.vec3.zero(this.movComp.constantAcceleration);
        this.game.ecsManager.addComponent(this.entity, this.movComp);
        this.previewEntity = this.game.ecsManager.createEntity();
        this.previewPositionComp = new PositionComponent_1.default();
        gl_matrix_1.vec3.set(this.previewPositionComp.scale, 0.0, 0.0, 0.0);
        this.game.ecsManager.addComponent(this.previewEntity, this.previewPositionComp);
    }
    init() {
        if (!this.previewEntity.hasComponent(Component_1.ComponentTypeEnum.GRAPHICS)) {
            this.game.ecsManager.addComponent(this.previewEntity, new GraphicsComponent_1.default(this.scene.getNewMesh("Assets/objs/sphere.obj", "CSS:rgba(255, 255, 255, 0.5)", "Assets/objs/sphere_spec.mtl")));
        }
        if (!this.entity.hasComponent(Component_1.ComponentTypeEnum.MESHCOLLISION)) {
            let octree = this.meshStore.getOctree("Assets/objs/sphere.obj", false);
            if (octree != undefined) {
                let meshColComp = new MeshCollisionComponent_1.default(octree);
                this.game.ecsManager.addComponent(this.entity, meshColComp);
            }
        }
        this.respawn();
    }
    respawn() {
        gl_matrix_1.vec3.set(this.positionComp.position, 0.0, -1.5, 0.0);
        gl_matrix_1.vec3.set(this.movComp.velocity, 0.0, 0.0, 0.0);
        this.setCameraDirection(gl_matrix_1.vec3.fromValues(-1.0, 0.0, 0.0));
        gl_matrix_1.vec2.zero(this.mouseMovement);
        gl_matrix_1.vec3.zero(this.direction);
        gl_matrix_1.vec3.zero(this.nextDirection);
        gl_matrix_1.vec3.zero(this.nextBounceVec);
        gl_matrix_1.vec3.zero(this.previewPositionComp.scale);
        this.nextBounceTime = Infinity;
        this.lastBounceTime = 0.0;
        this.nextBounceEntityId = -1;
        this.currentBounces = 0;
    }
    saveNextCollisionInfo(continousCollisionInfo) {
        this.nextBounceTime = continousCollisionInfo.time;
        if (continousCollisionInfo.intersectionVec == undefined || gl_matrix_1.vec3.squaredLength(continousCollisionInfo.intersectionVec) == 0.0) {
            if (this.nextBounceTime != Infinity) {
                gl_matrix_1.vec3.normalize(this.nextBounceVec, gl_matrix_1.vec3.scale(this.nextBounceVec, this.direction, -1.0));
            }
        }
        else {
            gl_matrix_1.vec3.copy(this.nextBounceVec, continousCollisionInfo.intersectionVec);
        }
        this.nextBounceEntityId = continousCollisionInfo.eId;
        // Calculate next direction
        if (gl_matrix_1.vec3.equals(this.nextBounceVec, gl_matrix_1.vec3.fromValues(0, 0, 0)) || this.game.objectPlacer.getTypeOfEntity(this.nextBounceEntityId) == "Box Green") {
            // Can't calculate next, or the next one is the finish. Let's use the current direction 
            gl_matrix_1.vec3.copy(this.nextDirection, this.direction);
        }
        else {
            let dot = gl_matrix_1.vec3.dot(this.direction, this.nextBounceVec);
            gl_matrix_1.vec3.scaleAndAdd(this.nextDirection, this.direction, this.nextBounceVec, 2.0 * -dot);
        }
        // console.log(this.nextDirection);
        // console.log(this.nextBounceTime);
    }
    setCameraDirection(direction) {
        let newDir = gl_matrix_1.vec3.clone(direction);
        gl_matrix_1.vec3.normalize(newDir, newDir);
        this.game.rendering.camera.setDir(newDir);
        this.jawPitch[1] = Math.asin(newDir[1]) * 180 / Math.PI;
        this.jawPitch[0] = Math.atan2(newDir[0], newDir[2]) * 180 / Math.PI;
    }
    /**
     * This function does custom movement updates, not relying on the movement system (until not on collision path with anything, then the movement will be set to keep going).
     * TODO: Consider breaking this logic out to some system.
     * @param dt Time elapsed since last frame
     * @returns how much is left to process of the dt
     */
    doMovementAndBounces(dt) {
        let dtLeft = 0.0;
        if (GameMachine_1.input.mouseClicked) {
            if (!this.mouseWasPressed && gl_matrix_1.vec3.squaredLength(this.direction) == 0.0) {
                this.currentBounces = 0;
                gl_matrix_1.vec3.scale(this.direction, this.game.rendering.camera.getDir(), 40.0);
                gl_matrix_1.vec3.zero(this.movComp.velocity);
            }
            this.mouseWasPressed = true;
        }
        else {
            this.mouseWasPressed = false;
        }
        if (gl_matrix_1.vec3.squaredLength(this.direction) > 0.0) {
            if (this.nextBounceTime == Infinity) {
                let entities = this.game.objectPlacer.getEntitiesOfType(AllCollisionEntities); // All entities that should be collidable
                let continousCollisionInfo = ESCUtils_1.ECSUtils.CalculateCollisionTime(this.entity, this.direction, entities, Infinity, false);
                this.saveNextCollisionInfo(continousCollisionInfo);
            }
            else {
                let entitiesToGet = OnlyMovingCollisionEntities; // Only entities that will move and change velocity over time
                if (this.lastBounceTime < 0.05) {
                    entitiesToGet = AllCollisionEntities; // Sometimes next bounce gets messed up just in the beginning after bouncing, don't know why. This will update it correctly I hope.
                }
                let entities = this.game.objectPlacer.getEntitiesOfType(entitiesToGet);
                let continousCollisionInfo = ESCUtils_1.ECSUtils.CalculateCollisionTime(this.entity, this.direction, entities, this.nextBounceTime, false);
                if (continousCollisionInfo.time < this.nextBounceTime) {
                    this.saveNextCollisionInfo(continousCollisionInfo);
                }
            }
            if (this.nextBounceTime != Infinity) {
                let moveTime = Math.min(dt, this.nextBounceTime);
                gl_matrix_1.vec3.scaleAndAdd(this.positionComp.position, this.positionComp.position, this.direction, moveTime);
                this.lastBounceTime += moveTime;
                this.nextBounceTime -= moveTime;
                dtLeft = dt - moveTime;
                if (this.nextBounceTime <= 0.000001) {
                    if (this.game.objectPlacer.getTypeOfEntity(this.nextBounceEntityId) == "Box Green") {
                        // Finish reached!
                        // Stop the ball completely
                        gl_matrix_1.vec3.zero(this.direction);
                        this.currentBounces = 0;
                        // this.game.gotoState = StatesEnum.LEVELSELECT;
                    }
                    else if (this.currentBounces >= this.bounceLimit) {
                        this.setCameraDirection(this.nextDirection); // Set the camera to look in the direction of the next bounce
                        // Stop the ball completely
                        gl_matrix_1.vec3.zero(this.direction);
                        this.currentBounces = 0;
                    }
                    else {
                        // Reflect the movement vector along the intersectionVector
                        gl_matrix_1.vec3.copy(this.direction, this.nextDirection);
                        this.currentBounces++;
                    }
                    this.lastBounceTime = 0.0;
                    this.nextBounceTime = Infinity;
                }
            }
            else {
                gl_matrix_1.vec3.copy(this.movComp.velocity, this.direction);
                gl_matrix_1.vec3.zero(this.direction);
                this.lastBounceTime = 0.0;
                this.nextBounceTime = Infinity;
            }
        }
        return dtLeft;
    }
    update(dt) {
        let rightMouseClickedThisFrame = false;
        if (GameMachine_1.input.mouseRightClicked) {
            if (!this.mouseRightWasPressed) {
                document.getElementById("gameDiv").requestPointerLock();
                rightMouseClickedThisFrame = true;
            }
            this.mouseRightWasPressed = true;
        }
        else {
            if (this.mouseRightWasPressed) {
                document.exitPointerLock();
            }
            this.mouseRightWasPressed = false;
        }
        let movedMouse = false;
        if (gl_matrix_1.vec2.squaredLength(this.mouseMovement) > 0.0) {
            let sensitivity = 45.0; // TODO: move to options, and add a slider in options menu.
            gl_matrix_1.vec2.scaleAndAdd(this.jawPitch, this.jawPitch, this.mouseMovement, sensitivity * dt);
            this.jawPitch[0] = this.jawPitch[0] % 360;
            this.jawPitch[1] = Math.max(Math.min(this.jawPitch[1], 89), -89);
            this.game.rendering.camera.setPitchJawDegrees(this.jawPitch[1], this.jawPitch[0]);
            gl_matrix_1.vec2.zero(this.mouseMovement);
            movedMouse = true;
        }
        else if (!GameMachine_1.input.mouseRightClicked && gl_matrix_1.vec3.squaredLength(this.direction) > 0.0) {
            // Linear interpolation between direction and next direction when there is less than turnTime left to impact.
            const turnTime = 0.2;
            let newDir = gl_matrix_1.vec3.lerp(gl_matrix_1.vec3.create(), this.direction, this.nextDirection, Math.max(0.0, 1.0 - (this.nextBounceTime / Math.min(turnTime, this.lastBounceTime + this.nextBounceTime))));
            this.setCameraDirection(newDir);
        }
        if (GameMachine_1.input.mouseRightClicked) {
            if (movedMouse || rightMouseClickedThisFrame) {
                let entities = this.game.objectPlacer.getEntitiesOfType(AllCollisionEntities); // All entities that should be collidable
                // First do a ray cast to get a maximum distance
                let ray = new Ray_1.default();
                const dir = this.game.rendering.camera.getDir();
                ray.setStartAndDir(this.positionComp.position, dir);
                const distAndEid = ESCUtils_1.ECSUtils.RayCastAgainstEntityList(ray, entities);
                let continousCollisionInfo = ESCUtils_1.ECSUtils.CalculateCollisionTime(this.entity, dir, entities, distAndEid.distance, false);
                if (continousCollisionInfo.time < Infinity) {
                    gl_matrix_1.vec3.scaleAndAdd(this.previewPositionComp.position, this.positionComp.position, dir, continousCollisionInfo.time);
                    gl_matrix_1.vec3.set(this.previewPositionComp.scale, BallScaleFactor, BallScaleFactor, BallScaleFactor);
                }
                else {
                    gl_matrix_1.vec3.zero(this.previewPositionComp.scale);
                }
            }
        }
        else {
            gl_matrix_1.vec3.zero(this.previewPositionComp.scale);
        }
        let dtLeft = dt;
        while (dtLeft > 0.0) {
            dtLeft = this.doMovementAndBounces(dtLeft);
        }
        if (GameMachine_1.input.keys[" "]) {
            gl_matrix_1.vec3.zero(this.movComp.velocity);
            gl_matrix_1.vec3.zero(this.direction);
            this.lastBounceTime = 0.0;
            this.nextBounceTime = Infinity;
        }
        if (GameMachine_1.input.keys["P"]) {
            this.respawn();
        }
        for (let i = 0; i < 10; i++) {
            if (GameMachine_1.input.keys[i.toString()]) {
                this.bounceLimit = i;
            }
        }
        this.bounceLimitDisplay.textString = this.bounceLimit.toString();
        this.game.rendering.camera.setPosition(this.positionComp.position);
    }
}
exports["default"] = GolfBall;


/***/ }),

/***/ "./code/src/Game/ObjectPlacer.ts":
/*!***************************************!*\
  !*** ./code/src/Game/ObjectPlacer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BoundingBoxComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/BoundingBoxComponent */ "./code/src/Engine/ECS/Components/BoundingBoxComponent.ts");
const CollisionComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/CollisionComponent */ "./code/src/Engine/ECS/Components/CollisionComponent.ts");
const Component_1 = __webpack_require__(/*! ../Engine/ECS/Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const GraphicsComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/GraphicsComponent */ "./code/src/Engine/ECS/Components/GraphicsComponent.ts");
const MeshCollisionComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/MeshCollisionComponent */ "./code/src/Engine/ECS/Components/MeshCollisionComponent.ts");
const PositionComponent_1 = __webpack_require__(/*! ../Engine/ECS/Components/PositionComponent */ "./code/src/Engine/ECS/Components/PositionComponent.ts");
const WebUtils_1 = __webpack_require__(/*! ../Engine/Utils/WebUtils */ "./code/src/Engine/Utils/WebUtils.ts");
const Game_1 = __webpack_require__(/*! ./States/Game */ "./code/src/Game/States/Game.ts");
const ESCUtils_1 = __webpack_require__(/*! ../Engine/Utils/ESCUtils */ "./code/src/Engine/Utils/ESCUtils.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class Placement {
    constructor(modelPath, diffuseTexturePath, specularTexturePath, emissionTexturePath, addCollision = true, saveToTransform = true) {
        this.modelPath = modelPath;
        this.diffuseTexturePath = diffuseTexturePath;
        this.specularTexturePath = specularTexturePath;
        this.emissionTexturePath = emissionTexturePath;
        this.addCollision = addCollision;
        this.saveToTransforms = saveToTransform;
    }
}
class ObjectPlacer {
    constructor(meshStore, textureStore) {
        this.meshStore = meshStore;
        this.textureStore = textureStore;
        this.placements = new Map();
        this.entityPlacements = new Map();
        this.lastSavedPlacements = "";
        this.lastFileName = "";
    }
    load(scene, ecsManager, placementsFile = "Assets/placements/Placements.txt") {
        return __awaiter(this, void 0, void 0, function* () {
            this.scene = scene;
            this.ecsManager = ecsManager;
            this.game = Game_1.default.getInstanceNoSa();
            yield this.reload(placementsFile);
        });
    }
    reload(placementsFile = "Assets/placements/Placements.txt") {
        return __awaiter(this, void 0, void 0, function* () {
            this.downloadTransforms();
            if (this.ecsManager && this.game) {
                for (let ep of this.entityPlacements) {
                    this.selectNewObjectFromEntityId(ep[0]);
                    this.deleteCurrentObject(false);
                }
            }
            this.placements.clear();
            this.entityPlacements.clear();
            yield this.loadFromFile(placementsFile);
        });
    }
    loadFromFile(placementsFile) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the PlacementList code
            const placementsResponse = yield fetch("Assets/placements/PlacementList.js");
            if (placementsResponse.ok) {
                const content = yield placementsResponse.text();
                eval(content);
            }
            // Now read all transforms for the placements from Placements.txt
            const response = yield fetch(placementsFile);
            if (response.ok) {
                const content = yield response.text();
                this.lastSavedPlacements = content;
                if (content != "") {
                    let currentPlacementType = "";
                    for (let t of content.split("\n")) {
                        t = t.trim();
                        if (t == "") {
                            break;
                        }
                        if (t.startsWith("Placement:")) {
                            currentPlacementType = t.substring("Placement:".length);
                        }
                        else {
                            let [p, s, r, o] = t.split("|");
                            this.placeObject(currentPlacementType, gl_matrix_1.vec3.fromValues.apply(null, p.split(",").map((n) => parseFloat(n))), gl_matrix_1.vec3.fromValues.apply(null, s.split(",").map((n) => parseFloat(n))), gl_matrix_1.quat.fromValues.apply(null, r.split(",").map((n) => parseFloat(n))), gl_matrix_1.vec3.fromValues.apply(null, o.split(",").map((n) => parseFloat(n))));
                        }
                    }
                }
                const pathParts = placementsFile.split("/");
                this.lastFileName = pathParts[pathParts.length - 1];
            }
        });
    }
    makeCheckpoint() { }
    undo() { }
    getEntitiesOfType(type) {
        let types = type.split("||").map((value) => { return value.trim(); });
        let entities = new Array();
        for (let e of this.entityPlacements) {
            if (this.placements.has(e[1])) {
                if (types.includes(e[1])) {
                    entities.push(this.ecsManager.getEntity(e[0]));
                }
            }
        }
        return entities;
    }
    getTypeOfEntity(entityId) {
        let ep = this.entityPlacements.get(entityId);
        if (ep != undefined) {
            return ep;
        }
        else {
            return "";
        }
    }
    getCurrentObjectType() {
        if (this.currentlyEditingEntityId == undefined) {
            return "nothing";
        }
        let objectName = this.entityPlacements.get(this.currentlyEditingEntityId);
        if (objectName == undefined) {
            return "unknown";
        }
        return objectName;
    }
    placeObject(type, position, size, rotation, origin) {
        let placement = this.placements.get(type);
        if (placement == undefined) {
            return null;
        }
        let entity = this.ecsManager.createEntity();
        this.currentlyEditingEntityId = entity.id;
        this.entityPlacements.set(entity.id, type);
        let mesh = this.scene.getNewMesh(placement.modelPath, placement.diffuseTexturePath, placement.specularTexturePath);
        let graComp = new GraphicsComponent_1.default(mesh);
        this.ecsManager.addComponent(entity, graComp);
        let posComp = new PositionComponent_1.default();
        gl_matrix_1.vec3.copy(posComp.position, position);
        gl_matrix_1.vec3.copy(posComp.scale, size);
        gl_matrix_1.quat.copy(posComp.rotation, rotation);
        gl_matrix_1.vec3.copy(posComp.origin, origin);
        this.ecsManager.addComponent(entity, posComp);
        let boundingBoxComp = new BoundingBoxComponent_1.default();
        boundingBoxComp.setup(mesh.graphicsObject);
        boundingBoxComp.updateTransformMatrix(mesh.modelMatrix);
        this.ecsManager.addComponent(entity, boundingBoxComp);
        if (!placement.addCollision) {
            return entity;
        }
        // Collision stuff
        let collisionComp = new CollisionComponent_1.default();
        collisionComp.isStatic = true;
        this.ecsManager.addComponent(entity, collisionComp);
        let octree = this.meshStore.getOctree(placement.modelPath, false);
        if (octree == undefined) {
            return entity;
        }
        let meshColComp = new MeshCollisionComponent_1.default(octree);
        this.ecsManager.addComponent(entity, meshColComp);
        return entity;
    }
    rayCastToNonSelectedObjects(ray) {
        let testEntities = new Array();
        for (let e of this.ecsManager.entities) {
            if (e.id == this.currentlyEditingEntityId) {
                continue;
            }
            testEntities.push(e);
        }
        return ESCUtils_1.ECSUtils.RayCastAgainstEntityList(ray, testEntities).distance;
    }
    rayCastToSelectNewObject(ray, ignoreEntityId) {
        let testEntities = new Array();
        for (let e of this.ecsManager.entities) {
            if (e.id == ignoreEntityId) {
                continue;
            }
            testEntities.push(e);
        }
        let rayCastResult = ESCUtils_1.ECSUtils.RayCastAgainstEntityList(ray, testEntities);
        if (rayCastResult.eId >= 0) {
            this.currentlyEditingEntityId = rayCastResult.eId;
        }
        else {
            this.currentlyEditingEntityId = null;
        }
    }
    selectNewObjectFromEntityId(id) {
        this.currentlyEditingEntityId = id;
    }
    updateCurrentlyEditingObject(rotationChange, scaleChange, newPosition) {
        if (this.currentlyEditingEntityId != null) {
            let entity = this.ecsManager.getEntity(this.currentlyEditingEntityId);
            if (entity != undefined) {
                let posComp = entity.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT);
                if (posComp == undefined) {
                    posComp = entity.getComponent(Component_1.ComponentTypeEnum.POSITION);
                }
                if (posComp == undefined) {
                    return;
                }
                gl_matrix_1.quat.mul(posComp.rotation, posComp.rotation, gl_matrix_1.quat.fromEuler(gl_matrix_1.quat.create(), rotationChange[0], rotationChange[1], rotationChange[2]));
                gl_matrix_1.vec3.add(posComp.scale, posComp.scale, gl_matrix_1.vec3.fromValues(scaleChange, scaleChange, scaleChange));
                if (scaleChange != 0) {
                    posComp.scale[0] = Math.round(posComp.scale[0] * 10000) / 10000;
                    posComp.scale[1] = Math.round(posComp.scale[1] * 10000) / 10000;
                    posComp.scale[2] = Math.round(posComp.scale[2] * 10000) / 10000;
                }
                if (newPosition != undefined) {
                    newPosition[0] = Math.round(newPosition[0] * 100) / 100;
                    newPosition[1] = Math.round(newPosition[1] * 100) / 100;
                    newPosition[2] = Math.round(newPosition[2] * 100) / 100;
                    gl_matrix_1.vec3.copy(posComp.position, newPosition);
                }
            }
        }
    }
    deleteCurrentObject(setDownloadNeeded = true) {
        if (this.currentlyEditingEntityId != undefined) {
            let entity = this.ecsManager.getEntity(this.currentlyEditingEntityId);
            if (entity != undefined) {
                // Remove graphics bundle from scene
                // TODO: Make this automatic when entity is removed
                let graphicsComponent = entity.getComponent(Component_1.ComponentTypeEnum.GRAPHICS);
                if (graphicsComponent != undefined) {
                    this.scene.deleteGraphicsBundle(graphicsComponent.object);
                }
            }
            this.ecsManager.removeEntity(this.currentlyEditingEntityId);
            this.entityPlacements.delete(this.currentlyEditingEntityId);
        }
        this.currentlyEditingEntityId = null;
    }
    duplicateCurrentObject() {
        if (this.currentlyEditingEntityId != undefined) {
            let entityPlacement = this.entityPlacements.get(this.currentlyEditingEntityId);
            if (entityPlacement == undefined) {
                return;
            }
            let entity = this.ecsManager.getEntity(this.currentlyEditingEntityId);
            if (entity == undefined) {
                return;
            }
            let posComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (posComp == undefined) {
                posComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITION));
            }
            if (posComp == undefined) {
                return;
            }
            this.placeObject(entityPlacement, gl_matrix_1.vec3.clone(posComp.position), gl_matrix_1.vec3.clone(posComp.scale), gl_matrix_1.quat.clone(posComp.rotation), gl_matrix_1.vec3.clone(posComp.origin));
        }
    }
    downloadTransforms() {
        let transformsData = "";
        for (let [placementString, placement] of this.placements) {
            let printedHeader = false;
            if (!placement.saveToTransforms) {
                continue;
            }
            for (let ep of this.entityPlacements) {
                if (ep[1] == placementString) {
                    let entity = this.ecsManager.getEntity(ep[0]);
                    if (entity != undefined) {
                        let posComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
                        if (posComp == undefined) {
                            posComp = (entity.getComponent(Component_1.ComponentTypeEnum.POSITION));
                        }
                        if (posComp != undefined) {
                            if (!printedHeader) {
                                transformsData += "Placement:" + placementString + "\n";
                                printedHeader = true;
                            }
                            transformsData +=
                                posComp.position +
                                    "|" +
                                    posComp.scale +
                                    "|" +
                                    posComp.rotation +
                                    "|" +
                                    posComp.origin +
                                    "\n";
                        }
                    }
                }
            }
        }
        if (this.lastSavedPlacements === transformsData) {
            return false;
        }
        WebUtils_1.WebUtils.DownloadFile(this.lastFileName, transformsData);
        this.lastSavedPlacements = transformsData;
        return true;
    }
    onExit(e) {
        if (this.downloadTransforms()) {
            e.preventDefault();
            e.returnValue = "";
            return;
        }
        delete e["returnValue"];
    }
}
exports["default"] = ObjectPlacer;


/***/ }),

/***/ "./code/src/Game/States/ControlsMenu.ts":
/*!**********************************************!*\
  !*** ./code/src/Game/States/ControlsMenu.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const GameMachine_1 = __webpack_require__(/*! ../GameMachine */ "./code/src/Game/GameMachine.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
class ControlsMenu extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.backButton = this.overlayRendering.getNewButton();
        this.backButton.position[0] = 0.5;
        this.backButton.position[1] = 0.1;
        this.backButton.center = true;
        this.backButton.textSize = 30;
        this.backButton.textString = "Back";
        let self = this;
        this.backButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.OPTIONS;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlayRendering.show();
            GameMachine_1.input.touchUsed = true;
            GameMachine_1.input.simulateTouchBasedOnMouse = true;
            GameMachine_1.input.repositionTouchControls = true;
        });
    }
    reset() {
        this.overlayRendering.hide();
        GameMachine_1.input.touchUsed = false;
        GameMachine_1.input.simulateTouchBasedOnMouse = false;
        GameMachine_1.input.repositionTouchControls = false;
        GameMachine_1.input.drawTouchControls();
    }
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports["default"] = ControlsMenu;


/***/ }),

/***/ "./code/src/Game/States/DebugMenu.ts":
/*!*******************************************!*\
  !*** ./code/src/Game/States/DebugMenu.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Component_1 = __webpack_require__(/*! ../../Engine/ECS/Components/Component */ "./code/src/Engine/ECS/Components/Component.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
const GameMachine_1 = __webpack_require__(/*! ../GameMachine */ "./code/src/Game/GameMachine.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class DebugMenu {
    constructor(stateAccessible, game, debugMode) {
        this.overlay = new OverlayRendering_1.OverlayRendering();
        this.stateAccessible = stateAccessible;
        this.game = game;
        this.mouseOverGuiElement = false;
        let downloadOctreesButton = this.overlay.getNewButton();
        downloadOctreesButton.position[0] = 0.8;
        downloadOctreesButton.position[1] = 0.1;
        downloadOctreesButton.center = true;
        downloadOctreesButton.textSize = 40;
        downloadOctreesButton.textString = "Download \nOctrees";
        let self = this;
        downloadOctreesButton.onClick(function () {
            self.stateAccessible.meshStore.downloadOctrees();
        });
        let downloadTransformsButton = this.overlay.getNewButton();
        downloadTransformsButton.position[0] = 0.6;
        downloadTransformsButton.position[1] = 0.1;
        downloadTransformsButton.center = true;
        downloadTransformsButton.textSize = 40;
        downloadTransformsButton.textString = "Download \nTransforms";
        downloadTransformsButton.onClick(function () {
            self.game.objectPlacer.downloadTransforms();
        });
        let menuButton = this.overlay.getNewButton();
        menuButton.position[0] = 0.4;
        menuButton.position[1] = 0.1;
        menuButton.center = true;
        menuButton.textSize = 40;
        menuButton.textString = "Menu";
        menuButton.onClick(function () {
            debugMode.gotoState = State_1.StatesEnum.MAINMENU;
        });
        this.placementMenu = this.overlay.getNewDiv();
        this.placementMenu.getElement().style.backgroundColor = "gray";
        this.placementMenu.getElement().style.opacity = "70%";
        this.placementMenu.position[0] = 0.01;
        this.placementMenu.position[1] = 0.03;
        this.placementMenu.getElement().style.borderRadius = "5px";
        this.placementMenu.getElement().style.maxHeight = "50%";
        this.placementMenu.getElement().style.overflowY = "auto";
        this.placementMenu.getElement().style.resize = "vertical";
        // Prevent picking through gui element (also don't update the properties box when hovering the properties window)
        this.placementMenu.getElement().onmouseenter = () => {
            this.mouseOverGuiElement = true;
        };
        this.placementMenu.getElement().onmouseleave = () => {
            if (!GameMachine_1.input.mouseClicked) {
                this.mouseOverGuiElement = false;
            }
        };
        let placementMenuText = this.overlay.getNew2DText(this.placementMenu);
        placementMenuText.textString = "Placement menu";
        placementMenuText.getElement().style.backgroundColor = "dimgray";
        placementMenuText.getElement().style.width = "100%";
        placementMenuText.getElement().style.cursor = "move";
        placementMenuText.getElement().style.borderRadius = "5px";
        placementMenuText.getElement().onmousedown = () => {
            this.movingPlacementBox = true;
        };
        this.actionText = this.overlay.getNew2DText();
        this.actionText.position[0] = 0.4;
        this.actionText.position[1] = 0.01;
        this.actionText.size = 20;
        this.entitiesBox = this.overlay.getNewDiv();
        this.entitiesBox.getElement().style.backgroundColor = "gray";
        this.entitiesBox.getElement().style.opacity = "70%";
        this.entitiesBox.position[0] = 0.88;
        this.entitiesBox.position[1] = 0.03;
        this.entitiesBox.getElement().style.borderRadius = "5px";
        this.entitiesBox.getElement().style.height = "50%";
        this.entitiesBox.getElement().style.maxHeight = "100%";
        this.entitiesBox.getElement().style.overflowY = "auto";
        this.entitiesBox.getElement().style.resize = "vertical";
        // Prevent picking through gui element (also don't update the properties box when hovering the properties window)
        this.entitiesBox.getElement().onmouseenter = () => {
            this.mouseOverGuiElement = true;
        };
        this.entitiesBox.getElement().onmouseleave = () => {
            if (!GameMachine_1.input.mouseClicked) {
                this.mouseOverGuiElement = false;
            }
        };
        let entitiesText = this.overlay.getNew2DText(this.entitiesBox);
        entitiesText.textString = "Entities";
        entitiesText.getElement().style.backgroundColor = "dimgray";
        entitiesText.getElement().style.width = "100%";
        entitiesText.getElement().style.cursor = "move";
        entitiesText.getElement().style.borderRadius = "5px";
        entitiesText.getElement().onmousedown = () => {
            this.movingEntitiesBox = true;
        };
        this.propsBox = this.overlay.getNewDiv();
        this.propsBox.getElement().style.backgroundColor = "gray";
        this.propsBox.getElement().style.opacity = "70%";
        this.propsBox.position[0] = 0.01;
        this.propsBox.position[1] = 0.55;
        this.propsBox.getElement().style.borderRadius = "5px";
        this.propsBox.getElement().style.height = "40%";
        this.propsBox.getElement().style.maxHeight = "100%";
        this.propsBox.getElement().style.overflowY = "auto";
        this.propsBox.getElement().style.resize = "vertical";
        // Prevent picking through gui element (also don't update the properties box when hovering the properties window)
        this.propsBox.getElement().onmouseenter = () => {
            this.mouseOverGuiElement = true;
        };
        this.propsBox.getElement().onmouseleave = () => {
            if (!GameMachine_1.input.mouseClicked) {
                this.mouseOverGuiElement = false;
            }
        };
        let propertiesText = this.overlay.getNew2DText(this.propsBox);
        propertiesText.textString = "Properties";
        propertiesText.getElement().style.backgroundColor = "dimgray";
        propertiesText.getElement().style.width = "100%";
        propertiesText.getElement().style.cursor = "move";
        propertiesText.getElement().style.borderRadius = "5px";
        propertiesText.getElement().onmousedown = () => {
            this.movingPropsBox = true;
        };
        this.propsVisibleMemory = new Map();
        for (let comp of Object.keys(Component_1.ComponentTypeEnum).filter((v) => isNaN(Number(v)))) {
            let compBtn = this.overlay.getNewButton(this.propsBox);
            compBtn.textString = comp;
            compBtn.textSize = 20;
            compBtn.scaleWithWindow = true;
            compBtn.getInputElement().className = "listButton";
            compBtn.getElement().style.width = "100%";
            let compPropDiv = this.overlay.getNewDiv(this.propsBox);
            compBtn.onClick(() => {
                let hiddenStatus = compPropDiv.toggleHidden();
                this.propsVisibleMemory.set(Component_1.ComponentTypeEnum[comp], hiddenStatus);
            });
            compPropDiv.setHidden(true);
            compBtn.setHidden(false);
            this.propsVisibleMemory.set(Component_1.ComponentTypeEnum[comp], true);
        }
        let consoleCommandsTextEdit = this.overlay.getNewEditText();
        consoleCommandsTextEdit.position[0] = 0.5;
        consoleCommandsTextEdit.position[1] = 0.97;
        consoleCommandsTextEdit.center = true;
        consoleCommandsTextEdit.getElement().style.width = "80%";
        consoleCommandsTextEdit.getInputElement().style.width = "100%";
        consoleCommandsTextEdit.getInputElement().addEventListener("change", (ev) => {
            self.parseConsoleInput(consoleCommandsTextEdit.getInputElement().value);
            consoleCommandsTextEdit.getInputElement().value = "";
        });
        consoleCommandsTextEdit.getElement().onmouseenter = () => {
            this.mouseOverGuiElement = true;
        };
        consoleCommandsTextEdit.getElement().onmouseleave = () => {
            if (!GameMachine_1.input.mouseClicked) {
                this.mouseOverGuiElement = false;
            }
        };
        this.hidden = true;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlay.show();
            this.hidden = false;
            // Force the entities box to reload.
            let length = this.entitiesBox.children.length;
            if (length > 1) {
                this.entitiesBox.children[1].remove();
                this.entitiesBox.children.splice(1, 1);
            }
        });
    }
    parseConsoleInput(input) {
        if (input.startsWith("r ")) { // r x 45.2  should rotate current object by 45.2 degrees around x axis
            const args = input.split(" ");
            if (args.length == 3) {
                const index = ["x", "y", "z"].findIndex((string) => { return string == args[1]; });
                if (index != -1) {
                    const degrees = parseFloat(args[2]);
                    let rotChange = gl_matrix_1.vec3.create();
                    rotChange[index] = degrees;
                    this.game.objectPlacer.updateCurrentlyEditingObject(rotChange, 0, null);
                }
            }
        }
    }
    update(dt) {
        // Moving of boxes
        if (!GameMachine_1.input.mouseClicked) {
            this.movingPlacementBox = false;
            this.movingEntitiesBox = false;
            this.movingPropsBox = false;
        }
        if (this.movingPlacementBox) {
            gl_matrix_1.vec2.set(this.placementMenu.position, GameMachine_1.input.mousePositionOnCanvas.x / main_1.windowInfo.resolutionWidth, GameMachine_1.input.mousePositionOnCanvas.y / main_1.windowInfo.resolutionHeight);
        }
        if (this.movingEntitiesBox) {
            gl_matrix_1.vec2.set(this.entitiesBox.position, GameMachine_1.input.mousePositionOnCanvas.x / main_1.windowInfo.resolutionWidth, GameMachine_1.input.mousePositionOnCanvas.y / main_1.windowInfo.resolutionHeight);
        }
        if (this.movingPropsBox) {
            gl_matrix_1.vec2.set(this.propsBox.position, GameMachine_1.input.mousePositionOnCanvas.x / main_1.windowInfo.resolutionWidth, GameMachine_1.input.mousePositionOnCanvas.y / main_1.windowInfo.resolutionHeight);
        }
        // Update the placement menu if it is not synced with placements (+1 is because there is a text child as well)
        if (this.placementMenu.children.length !=
            this.game.objectPlacer.placements.size + 1) {
            for (let i = 1; i < this.placementMenu.children.length; i++) {
                this.placementMenu.children[i].remove();
                this.placementMenu.children.splice(i, 1);
                i--;
            }
            this.game.objectPlacer.placements.forEach((value, key) => {
                let objectSelector = this.overlay.getNewButton(this.placementMenu);
                objectSelector.textString = key.substring(key.lastIndexOf("/") + 1);
                objectSelector.textSize = 20;
                objectSelector.scaleWithWindow = true;
                objectSelector.getInputElement().className = "listButton";
                objectSelector.getElement().style.width = "100%";
                objectSelector.onClick(() => {
                    this.game.objectPlacer.placeObject(key, gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(1.0, 1.0, 1.0), gl_matrix_1.quat.create(), gl_matrix_1.vec3.create());
                });
            });
        }
        // Update the entities menu
        if (this.entitiesBox.children.length !=
            this.game.ecsManager.entities.length + 1) {
            for (let i = 1; i < this.entitiesBox.children.length; i++) {
                this.entitiesBox.children[i].remove();
                this.entitiesBox.children.splice(i, 1);
                i--;
            }
            this.game.ecsManager.entities.forEach((e) => {
                let entityBtn = this.overlay.getNewButton(this.entitiesBox);
                entityBtn.textString = "" + e.id;
                entityBtn.textSize = 20;
                entityBtn.scaleWithWindow = true;
                entityBtn.getInputElement().className = "listButton";
                entityBtn.getElement().style.width = "100%";
                entityBtn.onClick(() => {
                    this.game.objectPlacer.selectNewObjectFromEntityId(e.id);
                });
            });
        }
        for (let i = 1; i < this.entitiesBox.children.length; i++) {
            let eChild = this.entitiesBox.children[i];
            eChild.getElement().style.backgroundColor = "transparent";
            if (this.game.objectPlacer.currentlyEditingEntityId != undefined &&
                eChild.textString ==
                    "" + this.game.objectPlacer.currentlyEditingEntityId) {
                eChild.getElement().style.backgroundColor = "dimgray";
            }
        }
        if (this.game.objectPlacer.currentlyEditingEntityId != undefined) {
            let entity = this.game.ecsManager.getEntity(this.game.objectPlacer.currentlyEditingEntityId);
            for (let i = 1; i < this.propsBox.children.length; i += 2) {
                if (entity != undefined && entity.hasComponent(Component_1.ComponentTypeEnum[this.propsBox.children[i].textString])) {
                    this.propsBox.children[i].setHidden(false);
                    let hiddenStatus = this.propsVisibleMemory.get(Component_1.ComponentTypeEnum[this.propsBox.children[i].textString]);
                    if (hiddenStatus != undefined) {
                        this.propsBox.children[i + 1].setHidden(hiddenStatus);
                    }
                    entity.getComponent(Component_1.ComponentTypeEnum[this.propsBox.children[i].textString]).updateGui(this.overlay, this.propsBox, this.game.objectPlacer);
                }
                else {
                    this.propsBox.children[i].setHidden(true);
                    this.propsBox.children[i + 1].setHidden(true);
                }
            }
        }
        else {
            for (let i = 1; i < this.propsBox.children.length; i++) {
                this.propsBox.children[i].setHidden(true);
            }
        }
    }
    reset() {
        this.overlay.hide();
        this.hidden = true;
    }
    toggleHidden() {
        if (this.hidden) {
            this.overlay.show();
            this.hidden = false;
        }
        else {
            this.overlay.hide();
            this.hidden = true;
        }
    }
    draw() {
        this.overlay.draw();
    }
}
exports["default"] = DebugMenu;


/***/ }),

/***/ "./code/src/Game/States/DebugMode.ts":
/*!*******************************************!*\
  !*** ./code/src/Game/States/DebugMode.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const GameMachine_1 = __webpack_require__(/*! ../GameMachine */ "./code/src/Game/GameMachine.ts");
const MousePicking_1 = __webpack_require__(/*! ../../Engine/Maths/MousePicking */ "./code/src/Engine/Maths/MousePicking.ts");
const DebugMenu_1 = __webpack_require__(/*! ./DebugMenu */ "./code/src/Game/States/DebugMenu.ts");
const WebUtils_1 = __webpack_require__(/*! ../../Engine/Utils/WebUtils */ "./code/src/Engine/Utils/WebUtils.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
class DebugMode extends State_1.default {
    constructor(sa, game) {
        super();
        this.stateAccessible = sa;
        this.game = game;
        this.debugMenu = new DebugMenu_1.default(this.stateAccessible, this.game, this);
        this.lastMousePos = gl_matrix_1.vec2.fromValues(GameMachine_1.input.mousePosition.x, GameMachine_1.input.mousePosition.y);
        this.oWasPressed = true;
        this.pWasPressed = true;
        this.mouseWasPressed = false;
        this.cWasPressed = false;
        this.checkpointNeeded = false;
        this.checkpointTriggeredThisFrame = false;
        this.actionString = "";
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.debugMenu.init();
            let posCookie = WebUtils_1.WebUtils.GetCookie("debugPos");
            if (posCookie != "") {
                let coords = posCookie.split(",");
                if (coords.length == 3) {
                    this.game.rendering.camera.setPosition(gl_matrix_1.vec3.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2])));
                }
            }
            let dirCookie = WebUtils_1.WebUtils.GetCookie("debugDir");
            if (dirCookie != "") {
                let coords = dirCookie.split(",");
                if (coords.length == 3) {
                    this.game.rendering.camera.setDir(gl_matrix_1.vec3.fromValues(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2])));
                }
            }
            this.oWasPressed = true;
            this.pWasPressed = true;
            document.exitPointerLock();
        });
    }
    reset() {
        this.debugMenu.reset();
    }
    handleInput(dt) {
        if (GameMachine_1.input.keys["O"]) {
            if (!this.oWasPressed) {
                WebUtils_1.WebUtils.SetCookie("debug", "false");
                this.gotoState = State_1.StatesEnum.GAME;
            }
            this.oWasPressed = true;
        }
        else {
            this.oWasPressed = false;
        }
        if (GameMachine_1.input.keys["P"]) {
            if (!this.pWasPressed) {
                this.debugMenu.toggleHidden();
            }
            this.pWasPressed = true;
        }
        else {
            this.pWasPressed = false;
        }
        let moveVec = gl_matrix_1.vec3.create();
        let move = false;
        if (GameMachine_1.input.keys["W"]) {
            gl_matrix_1.vec3.add(moveVec, moveVec, this.game.rendering.camera.getDir());
            move = true;
        }
        if (GameMachine_1.input.keys["S"]) {
            gl_matrix_1.vec3.subtract(moveVec, moveVec, this.game.rendering.camera.getDir());
            move = true;
        }
        if (GameMachine_1.input.keys["A"]) {
            gl_matrix_1.vec3.subtract(moveVec, moveVec, this.game.rendering.camera.getRight());
            move = true;
        }
        if (GameMachine_1.input.keys["D"]) {
            gl_matrix_1.vec3.add(moveVec, moveVec, this.game.rendering.camera.getRight());
            move = true;
        }
        if (GameMachine_1.input.keys[" "]) {
            gl_matrix_1.vec3.add(moveVec, moveVec, gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0));
            move = true;
        }
        if (GameMachine_1.input.keys["SHIFT"]) {
            gl_matrix_1.vec3.subtract(moveVec, moveVec, gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0));
            move = true;
        }
        if (move) {
            gl_matrix_1.vec3.normalize(moveVec, moveVec);
            gl_matrix_1.vec3.scale(moveVec, moveVec, 15.0 * dt); // Speed
            this.game.rendering.camera.translate(moveVec);
        }
        let rotVec = gl_matrix_1.vec2.create();
        let rotate = false;
        if (GameMachine_1.input.mouseRightClicked &&
            !this.debugMenu.mouseOverGuiElement &&
            (GameMachine_1.input.mousePosition.x != GameMachine_1.input.mousePosition.previousX ||
                GameMachine_1.input.mousePosition.y != GameMachine_1.input.mousePosition.previousY)) {
            gl_matrix_1.vec2.set(rotVec, (GameMachine_1.input.mousePosition.previousY - GameMachine_1.input.mousePosition.y) * 0.2, (GameMachine_1.input.mousePosition.previousX - GameMachine_1.input.mousePosition.x) * 0.2);
            rotate = true;
        }
        if (rotate) {
            let rotMatrix = gl_matrix_1.mat4.create();
            let rotAmount = 90.0;
            let rightVec = gl_matrix_1.vec3.copy(gl_matrix_1.vec3.create(), this.game.rendering.camera.getRight());
            if (rotVec[1]) {
                gl_matrix_1.mat4.rotate(rotMatrix, rotMatrix, rotAmount * rotVec[1] * dt * Math.PI / 180.0, gl_matrix_1.vec3.fromValues(0.0, 1.0, 0.0));
            }
            if (rotVec[0]) {
                gl_matrix_1.mat4.rotate(rotMatrix, rotMatrix, rotAmount * rotVec[0] * dt * Math.PI / 180.0, rightVec);
            }
            let oldDir = this.game.rendering.camera.getDir();
            let newDir = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), oldDir, rotMatrix);
            this.game.rendering.camera.setDir(newDir);
        }
        if (GameMachine_1.input.mouseClicked && !this.debugMenu.mouseOverGuiElement) {
            // Holding mousebutton
            let rotChange = gl_matrix_1.vec3.create();
            let newPosition = null;
            let scaleChange = 0.0;
            let edited = false;
            if (GameMachine_1.input.keys["R"]) {
                if (GameMachine_1.input.keys["1"]) {
                    rotChange[0] = GameMachine_1.input.mousePosition.x - this.lastMousePos[0];
                }
                if (GameMachine_1.input.keys["2"]) {
                    rotChange[1] = GameMachine_1.input.mousePosition.x - this.lastMousePos[0];
                }
                if (GameMachine_1.input.keys["3"]) {
                    rotChange[2] = GameMachine_1.input.mousePosition.x - this.lastMousePos[0];
                }
                edited = true;
                this.actionString = "Rotating";
            }
            else if (GameMachine_1.input.keys["T"]) {
                let ray = MousePicking_1.MousePicking.GetRay(this.game.rendering.camera);
                let dist = Infinity;
                dist = this.game.objectPlacer.rayCastToNonSelectedObjects(ray);
                if (dist >= 0.0 && dist < Infinity) {
                    newPosition = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), this.game.rendering.camera.getPosition(), gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), ray.getDir(), dist));
                }
                this.actionString = "Moving";
                edited = true;
            }
            else if (GameMachine_1.input.keys["Y"]) {
                scaleChange = (this.lastMousePos[1] - GameMachine_1.input.mousePosition.y) * 0.001;
                edited = true;
                this.actionString = "Scaling";
            }
            if (edited) {
                this.game.objectPlacer.updateCurrentlyEditingObject(rotChange, scaleChange, newPosition);
                this.checkpointTriggeredThisFrame = true;
                this.checkpointNeeded = true;
            }
            else if (!this.mouseWasPressed) {
                // If we clicked the mouse button this frame
                // Try to select a new object to edit
                let ray = MousePicking_1.MousePicking.GetRay(this.game.rendering.camera);
                this.game.objectPlacer.rayCastToSelectNewObject(ray);
                this.actionString = "Selected ";
            }
            this.mouseWasPressed = true;
        }
        else {
            this.mouseWasPressed = false;
            this.actionString = "Currently selected:";
        }
        if (GameMachine_1.input.keys["DELETE"]) {
            this.game.objectPlacer.deleteCurrentObject();
            this.actionString = "Deleted object";
            this.checkpointTriggeredThisFrame = true;
            this.checkpointNeeded = true;
        }
        if (GameMachine_1.input.keys["C"]) {
            if (!this.cWasPressed) {
                this.game.objectPlacer.duplicateCurrentObject();
                this.actionString = "Duplicated object";
                this.checkpointTriggeredThisFrame = true;
                this.checkpointNeeded = true;
            }
            this.cWasPressed = true;
        }
        else {
            this.cWasPressed = false;
        }
    }
    update(dt) {
        this.checkpointTriggeredThisFrame = false;
        if (document.activeElement == document.getElementById("content")) {
            this.handleInput(dt);
        }
        gl_matrix_1.vec2.set(this.lastMousePos, GameMachine_1.input.mousePosition.x, GameMachine_1.input.mousePosition.y);
        let camPos = this.game.rendering.camera.getPosition();
        WebUtils_1.WebUtils.SetCookie("debugPos", camPos[0] + "," + camPos[1] + "," + camPos[2]);
        let camDir = this.game.rendering.camera.getDir();
        WebUtils_1.WebUtils.SetCookie("debugDir", camDir[0] + "," + camDir[1] + "," + camDir[2]);
        this.debugMenu.actionText.textString =
            this.actionString + " " + this.game.objectPlacer.getCurrentObjectType();
        this.debugMenu.update(dt);
        this.game.ecsManager.update(0.0);
        if (this.checkpointNeeded && !this.checkpointTriggeredThisFrame) {
            this.game.objectPlacer.makeCheckpoint();
            this.checkpointNeeded = false;
        }
    }
    prepareDraw(dt) {
        this.game.prepareDraw(dt, false);
    }
    draw() {
        this.game.rendering.draw();
        this.debugMenu.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports["default"] = DebugMode;


/***/ }),

/***/ "./code/src/Game/States/Game.ts":
/*!**************************************!*\
  !*** ./code/src/Game/States/Game.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ECSManager_1 = __webpack_require__(/*! ../../Engine/ECS/ECSManager */ "./code/src/Engine/ECS/ECSManager.ts");
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const Rendering_1 = __webpack_require__(/*! ../../Engine/Rendering/Rendering */ "./code/src/Engine/Rendering/Rendering.ts");
const GameMachine_1 = __webpack_require__(/*! ../GameMachine */ "./code/src/Game/GameMachine.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
const Scene_1 = __webpack_require__(/*! ../../Engine/Rendering/Scene */ "./code/src/Engine/Rendering/Scene.ts");
const ObjectPlacer_1 = __webpack_require__(/*! ../ObjectPlacer */ "./code/src/Game/ObjectPlacer.ts");
const WebUtils_1 = __webpack_require__(/*! ../../Engine/Utils/WebUtils */ "./code/src/Engine/Utils/WebUtils.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const GolfBall_1 = __webpack_require__(/*! ../GolfBall */ "./code/src/Game/GolfBall.ts");
const PointLightComponent_1 = __webpack_require__(/*! ../../Engine/ECS/Components/PointLightComponent */ "./code/src/Engine/ECS/Components/PointLightComponent.ts");
const PositionComponent_1 = __webpack_require__(/*! ../../Engine/ECS/Components/PositionComponent */ "./code/src/Engine/ECS/Components/PositionComponent.ts");
class Game extends State_1.default {
    static getInstance(sa) {
        if (!Game.instance) {
            Game.instance = new Game(sa);
        }
        return Game.instance;
    }
    static getInstanceNoSa() {
        return Game.instance;
    }
    constructor(sa) {
        super();
        this.stateAccessible = sa;
        this.objectPlacer = new ObjectPlacer_1.default(this.stateAccessible.meshStore, this.stateAccessible.textureStore);
        this.oWasPressed = true;
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.menuButton = this.overlayRendering.getNewButton();
        this.menuButton.position[0] = 0.9;
        this.menuButton.position[1] = 0.0;
        this.menuButton.textSize = 40;
        this.menuButton.getInputElement().style.background = "transparent";
        this.menuButton.getInputElement().style.borderColor = "transparent";
        this.menuButton.getInputElement().style.boxShadow = "none";
        this.menuButton.textString = "Menu";
        let self = this;
        this.menuButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.MAINMENU;
        });
        let crosshair = this.overlayRendering.getNew2DText();
        crosshair.position[0] = 0.5;
        crosshair.position[1] = 0.5;
        crosshair.center = true;
        crosshair.scaleWithWindow = true;
        crosshair.size = 10;
        crosshair.textString = "➕";
        this.scene = new Scene_1.default(this.stateAccessible.textureStore, this.stateAccessible.meshStore);
        this.rendering = new Rendering_1.default(this.stateAccessible.textureStore, this.scene);
        this.ecsManager = new ECSManager_1.default(this.rendering);
        this.golfBall = new GolfBall_1.default(this.scene, this, this.overlayRendering, this.stateAccessible.meshStore);
        this.createPointLight(gl_matrix_1.vec3.fromValues(-14.0, -5.0, 7.0), true, gl_matrix_1.vec3.fromValues(3.0, 0.8, 0.0));
        this.createPointLight(gl_matrix_1.vec3.fromValues(5.0, -5.0, -9.0), true, gl_matrix_1.vec3.fromValues(0.0, 0.8, 3.0));
        // this.createPointLight(vec3.fromValues(-20.0, -5.0, -14.0), true, vec3.fromValues(0.0, 2.0, 0.8));
        // this.createPointLight(vec3.fromValues(10.0, -5.0, -15.0), true, vec3.fromValues(2.0, 0.0, 0.8));
        // this.createPointLight(vec3.fromValues(10.0, -5.0, 15.0), true, vec3.fromValues(0.8, 2.0, 0.0));
    }
    createPointLight(position, castShadow, colour) {
        let pointLightEntity = this.ecsManager.createEntity();
        let pointLightComp = new PointLightComponent_1.default(this.scene.getNewPointLight());
        gl_matrix_1.vec3.set(pointLightComp.posOffset, 0.0, 2.0, 0.0);
        if (colour != undefined) {
            gl_matrix_1.vec3.copy(pointLightComp.pointLight.colour, colour);
        }
        // pointLightComp.pointLight.linear = 0.007;
        // pointLightComp.pointLight.quadratic = 0.005;
        pointLightComp.pointLight.castShadow = castShadow;
        this.ecsManager.addComponent(pointLightEntity, pointLightComp);
        let lightPosComp = new PositionComponent_1.default();
        gl_matrix_1.vec3.copy(lightPosComp.position, position);
        this.ecsManager.addComponent(pointLightEntity, lightPosComp);
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            // let colour = vec3.fromValues(0.10, 0.10, 0.15);
            let colour = gl_matrix_1.vec3.fromValues(0.0, 0.0, 0.0);
            this.rendering.clearColour.r = colour[0];
            this.rendering.clearColour.g = colour[1];
            this.rendering.clearColour.b = colour[2];
            let dirLight = this.scene.getDirectionalLight();
            dirLight.ambientMultiplier = 0.1;
            gl_matrix_1.vec3.set(dirLight.direction, 0.2, -0.9, -0.4);
            gl_matrix_1.vec3.copy(dirLight.colour, colour);
            this.rendering.setSkybox("Assets/textures/skyboxes/NightSky");
            yield this.objectPlacer.load(this.scene, this.ecsManager, this.stateAccessible.level);
            this.rendering.camera.setPosition(gl_matrix_1.vec3.fromValues(0.0, 2.0, 0.0));
            this.overlayRendering.setCamera(this.rendering.camera);
            this.golfBall.init();
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.stateAccessible.restartGame) {
                yield this.load();
                this.stateAccessible.restartGame = false;
            }
            this.overlayRendering.show();
            this.rendering.useCrt = GameMachine_1.options.useCrt;
            this.rendering.useBloom = GameMachine_1.options.useBloom;
            if (WebUtils_1.WebUtils.GetCookie("debug") == "true") {
                this.gotoState = State_1.StatesEnum.DEBUGMODE;
            }
            this.oWasPressed = true;
        });
    }
    reset() {
        if (this.overlayRendering) {
            this.overlayRendering.hide();
        }
        GameMachine_1.input.touchUsed = false;
        GameMachine_1.input.drawTouchControls();
    }
    onExit(e) {
        this.objectPlacer.onExit(e);
    }
    update(dt) {
        if (GameMachine_1.input.keys["O"]) {
            if (!this.oWasPressed) {
                this.gotoState = State_1.StatesEnum.DEBUGMODE;
                WebUtils_1.WebUtils.SetCookie("debug", "true");
            }
            this.oWasPressed = true;
        }
        else {
            this.oWasPressed = false;
        }
        this.golfBall.update(dt);
        this.ecsManager.update(dt);
    }
    prepareDraw(dt, updateCameraFocus = true) {
        this.ecsManager.updateRenderingSystems(dt, updateCameraFocus);
    }
    draw() {
        this.rendering.draw();
        this.overlayRendering.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports["default"] = Game;


/***/ }),

/***/ "./code/src/Game/States/LevelSelect.ts":
/*!*********************************************!*\
  !*** ./code/src/Game/States/LevelSelect.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const numLevels = 5;
class LevelSelect extends State_1.default {
    constructor(sa) {
        super();
        this.sa = sa;
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        for (let i = 1; i <= numLevels; i++) {
            let level1Button = this.overlayRendering.getNewButton();
            level1Button.position[0] = 0.5;
            level1Button.position[1] = 0.2 + i * 0.1;
            level1Button.center = true;
            level1Button.textString = "Level " + i;
            let self = this;
            level1Button.onClick(function () {
                self.gotoState = State_1.StatesEnum.GAME;
                self.sa.level = "Assets/placements/Level" + i + ".txt";
                self.sa.restartGame = true;
            });
        }
        let backButton = this.overlayRendering.getNewButton();
        backButton.position[0] = 0.5;
        backButton.position[1] = 0.2 + (numLevels + 1) * 0.1;
        backButton.center = true;
        backButton.textString = "Back";
        let self = this;
        backButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.MAINMENU;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlayRendering.show();
            document.exitPointerLock();
        });
    }
    reset() {
        this.overlayRendering.hide();
    }
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
    }
}
exports["default"] = LevelSelect;


/***/ }),

/***/ "./code/src/Game/States/LoadingScreen.ts":
/*!***********************************************!*\
  !*** ./code/src/Game/States/LoadingScreen.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
class LoadingScreen extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.sa = sa;
        // Crate GUI
        this.text = this.overlayRendering.getNew2DText();
        this.text.center = true;
        this.text.position[0] = 0.5;
        this.text.position[1] = 0.4;
        this.text.size = 50;
        this.statusText = "Loading assets ";
        this.progressBar = this.overlayRendering.getNewProgress();
        this.progressBar.center = true;
        this.progressBar.position[0] = 0.5;
        this.progressBar.position[1] = 0.5;
        this.progressBar.size = 50;
        this.progressBar.getProgressElement().style.borderRadius = "4px";
        this.progressBar.getProgressElement().max = 1.0;
        this.progressBar.getProgressElement().value = 0.0;
        this.progress = 0;
        this.timer = 0;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlayRendering.show();
            this.overlayRendering.draw();
            // Load all textures to avoid loading mid game
            let textures = [];
            const texturesResponse = yield fetch("Assets/textures/textures.txt");
            if (texturesResponse.ok) {
                const content = yield texturesResponse.text();
                for (let row of content.split("\n")) {
                    if (row.includes(".png") || row.includes(".jpg")) {
                        row = row.replace("\r", "");
                        textures.push("Assets/textures/" + row);
                    }
                }
            }
            let cubeMaps = ["Assets/textures/skyboxes/NightSky"];
            // Meshes to load
            let meshes = [];
            const objsResponse = yield fetch("Assets/objs/objs.txt");
            if (objsResponse.ok) {
                const content = yield objsResponse.text();
                for (let row of content.split("\n")) {
                    if (row.includes(".obj")) {
                        row = row.replace("\r", "");
                        meshes.push("Assets/objs/" + row);
                    }
                }
            }
            this.meshesRequested = meshes.length;
            this.meshesLoaded = 0;
            // Heightmaps to load
            let heightmaps = [
            // ["Assets/heightmaps/heightmap.png", false, 200, 200, 1.0, 1.0],
            ];
            this.heightmapsRequested = heightmaps.length;
            this.heightmapsLoaded = 0;
            // Octrees to create
            this.octreesToLoad = [
                // ["Assets/heightmaps/heightmap.png", 0.01, 10],
                ["Assets/objs/house.obj", 0.1, 20],
                ["Assets/objs/police_car.obj", 0.1, 20],
                ["Assets/objs/Diamond.obj", 0.1, 20],
                ["Assets/objs/sphere.obj", 0.1, 20],
            ];
            this.octreesRequested = this.octreesToLoad.length;
            this.octreesLoaded = 0;
            this.texturesToLoad = new Array();
            for (const texFile of textures) {
                this.texturesToLoad.push(this.sa.textureStore.getTexture(texFile));
            }
            for (const cubeMapFile of cubeMaps) {
                this.texturesToLoad.push(this.sa.textureStore.getCubeMap(cubeMapFile));
            }
            // Load meshes
            for (const meshFile of meshes) {
                this.sa.meshStore.loadMesh(meshFile).then(() => {
                    this.meshesLoaded++;
                });
            }
            // Load heightmaps
            for (const heightmapInfo of heightmaps) {
                this.sa.meshStore
                    .loadHeightmap.apply(this.sa.meshStore, heightmapInfo)
                    .then(() => {
                    this.heightmapsLoaded++;
                });
            }
        });
    }
    reset() {
        this.overlayRendering.hide();
    }
    update(dt) {
        let requestedAssets = this.texturesToLoad.length +
            this.meshesRequested +
            this.heightmapsRequested +
            this.octreesRequested;
        let texturesLoaded = 0;
        for (let tex of this.texturesToLoad) {
            if (tex.loadedFromFile) {
                texturesLoaded++;
            }
        }
        let loadedAssets = texturesLoaded +
            this.meshesLoaded +
            this.heightmapsLoaded +
            this.octreesLoaded;
        // When all meshes and heightmaps have been loaded, we can start processing octrees
        if (this.meshesLoaded == this.meshesRequested &&
            this.heightmapsLoaded == this.heightmapsRequested &&
            this.octreesToLoad.length > 0) {
            this.statusText = "Generating octrees ";
            let i = this.octreesToLoad.length - 1;
            let octreeToLoad = this.octreesToLoad[i];
            this.sa.meshStore
                .loadOctree(octreeToLoad[0], octreeToLoad[1], octreeToLoad[2], 10 /*Give a 10 ms deadline*/)
                .then((value) => {
                if (value.doneLoading) {
                    if (this.octreesToLoad[this.octreesToLoad.length - 1][0] ==
                        octreeToLoad[0]) {
                        this.octreesToLoad.pop(); // Done loading, remove it from the queue
                        this.octreesLoaded++; // And increase the number of octrees loaded
                    }
                }
            });
        }
        this.timer += dt;
        this.progress = loadedAssets / requestedAssets;
        this.progressBar.getProgressElement().value = this.progress;
        this.text.textString = this.statusText;
        for (let i = 4; i > 1; i--) {
            if (this.timer - Math.floor(this.timer) > 1.0 / i) {
                this.text.textString += "-";
            }
            else {
                this.text.textString += "_";
            }
        }
        this.text.textString += "  " + Math.ceil(this.progress * 100) + "%";
        if (this.progress >= 1.0 && this.timer >= 0.5) {
            this.gotoState = State_1.StatesEnum.MAINMENU;
        }
    }
    draw() {
        this.overlayRendering.draw();
    }
}
exports["default"] = LoadingScreen;


/***/ }),

/***/ "./code/src/Game/States/Menu.ts":
/*!**************************************!*\
  !*** ./code/src/Game/States/Menu.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./code/src/main.ts");
class Menu extends State_1.default {
    constructor(sa) {
        super();
        this.sa = sa;
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        let startButton = this.overlayRendering.getNewButton();
        startButton.position[0] = 0.5;
        startButton.position[1] = 0.2;
        startButton.center = true;
        startButton.textString = "Start";
        let self = this;
        startButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.LEVELSELECT;
        });
        let resumeButton = this.overlayRendering.getNewButton();
        resumeButton.position[0] = 0.5;
        resumeButton.position[1] = 0.4;
        resumeButton.center = true;
        resumeButton.textString = "Resume";
        resumeButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.GAME;
        });
        let optionsButton = this.overlayRendering.getNewButton();
        optionsButton.position[0] = 0.5;
        optionsButton.position[1] = 0.6;
        optionsButton.center = true;
        optionsButton.textString = "Options";
        optionsButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.OPTIONS;
        });
        let fullscreenButton = this.overlayRendering.getNewButton();
        fullscreenButton.position[0] = 0.5;
        fullscreenButton.position[1] = 0.8;
        fullscreenButton.center = true;
        fullscreenButton.textString = "Fullscreen";
        fullscreenButton.onClick(function () {
            document.getElementById("gameDiv").requestFullscreen();
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlayRendering.show();
            document.exitPointerLock();
            main_1.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT);
        });
    }
    reset() {
        this.overlayRendering.hide();
    }
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
    }
}
exports["default"] = Menu;


/***/ }),

/***/ "./code/src/Game/States/OptionsMenu.ts":
/*!*********************************************!*\
  !*** ./code/src/Game/States/OptionsMenu.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GameMachine_1 = __webpack_require__(/*! ../GameMachine */ "./code/src/Game/GameMachine.ts");
const State_1 = __webpack_require__(/*! ../../Engine/States/State */ "./code/src/Engine/States/State.ts");
const OverlayRendering_1 = __webpack_require__(/*! ../../Engine/Rendering/GUI/OverlayRendering */ "./code/src/Engine/Rendering/GUI/OverlayRendering.ts");
class OptionsMenu extends State_1.default {
    constructor(sa) {
        super();
        this.stateAccessible = sa;
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.crtCB = this.overlayRendering.getNewCheckbox();
        this.crtCB.position[0] = 0.4;
        this.crtCB.position[1] = 0.25;
        this.crtCB.textString = "CRT-effect ";
        this.crtCB.getInputElement().checked = GameMachine_1.options.useCrt;
        this.bloomCB = this.overlayRendering.getNewCheckbox();
        this.bloomCB.position[0] = 0.4;
        this.bloomCB.position[1] = 0.3;
        this.bloomCB.textString = "Bloom-effect ";
        this.bloomCB.getInputElement().checked = GameMachine_1.options.useBloom;
        this.grassCB = this.overlayRendering.getNewCheckbox();
        this.grassCB.position[0] = 0.4;
        this.grassCB.position[1] = 0.35;
        this.grassCB.textString = "Foldable grass ";
        this.grassCB.getInputElement().checked = GameMachine_1.options.foldableGrass;
        this.grassDensitySlider = this.overlayRendering.getNewSlider();
        this.grassDensitySlider.position[0] = 0.4;
        this.grassDensitySlider.position[1] = 0.4;
        this.grassDensitySlider.textString = "Grass density \r\n(requires restart)";
        this.grassDensitySlider.getInputElement().min = "1000";
        this.grassDensitySlider.getInputElement().max = "100000";
        this.grassDensitySlider.getInputElement().value = GameMachine_1.options.grassDensity + "";
        this.fpsDisplayCB = this.overlayRendering.getNewCheckbox();
        this.fpsDisplayCB.position[0] = 0.4;
        this.fpsDisplayCB.position[1] = 0.5;
        this.fpsDisplayCB.textString = "Fps counter ";
        this.fpsDisplayCB.getInputElement().checked = GameMachine_1.options.showFps;
        this.musicVolume = this.overlayRendering.getNewSlider();
        this.musicVolume.position[0] = 0.4;
        this.musicVolume.position[1] = 0.55;
        this.musicVolume.textString = "Music volume";
        this.musicVolume.getInputElement().min = "0";
        this.musicVolume.getInputElement().max = "100";
        this.musicVolume.getInputElement().value = GameMachine_1.options.musicVolume * 250 + "";
        this.effectVolume = this.overlayRendering.getNewSlider();
        this.effectVolume.position[0] = 0.4;
        this.effectVolume.position[1] = 0.6;
        this.effectVolume.textString = "Effects volume";
        this.effectVolume.getInputElement().min = "0";
        this.effectVolume.getInputElement().max = "100";
        this.effectVolume.getInputElement().value = GameMachine_1.options.effectVolume * 250 + "";
        this.controlsButton = this.overlayRendering.getNewButton();
        this.controlsButton.position[0] = 0.5;
        this.controlsButton.position[1] = 0.75;
        this.controlsButton.center = true;
        this.controlsButton.textString = "Controls";
        let self = this;
        this.controlsButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.CONTROLS;
        });
        this.backButton = this.overlayRendering.getNewButton();
        this.backButton.position[0] = 0.5;
        this.backButton.position[1] = 0.85;
        this.backButton.center = true;
        this.backButton.textString = "Back to main menu";
        this.backButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.MAINMENU;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlayRendering.show();
        });
    }
    reset() {
        this.overlayRendering.hide();
    }
    update(dt) {
        GameMachine_1.options.useCrt = this.crtCB.getChecked();
        GameMachine_1.options.useBloom = this.bloomCB.getChecked();
        GameMachine_1.options.foldableGrass = this.grassCB.getChecked();
        GameMachine_1.options.showFps = this.fpsDisplayCB.getChecked();
        GameMachine_1.options.grassDensity = this.grassDensitySlider.getValue();
        GameMachine_1.options.musicVolume = this.musicVolume.getValue() * 0.004;
        this.stateAccessible.audioPlayer.setMusicVolume(GameMachine_1.options.musicVolume);
        GameMachine_1.options.effectVolume = this.effectVolume.getValue() * 0.004;
        this.stateAccessible.audioPlayer.setSoundEffectVolume(GameMachine_1.options.effectVolume);
    }
    draw() {
        this.overlayRendering.draw();
    }
}
exports["default"] = OptionsMenu;


/***/ }),

/***/ "./code/src/main.ts":
/*!**************************!*\
  !*** ./code/src/main.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.windowInfo = exports.applicationStartTime = exports.gl = void 0;
const GameMachine_1 = __webpack_require__(/*! ./Game/GameMachine */ "./code/src/Game/GameMachine.ts");
const GeometryPass_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/GeometryPass.ts");
const LightingPass_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass */ "./code/src/Engine/Rendering/ShaderPrograms/DeferredRendering/LightingPass.ts");
const ParticleShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/ParticleShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ParticleShaderProgram.ts");
const GrassShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/GrassShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/GrassShaderProgram.ts");
const PhongShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PhongShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/PhongShaderProgram.ts");
const BloomBlending_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PostProcessing/BloomBlending */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomBlending.ts");
const BloomExtraction_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PostProcessing/BloomExtraction */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BloomExtraction.ts");
const CrtShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PostProcessing/CrtShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/CrtShaderProgram.ts");
const GaussianBlur_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PostProcessing/GaussianBlur */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/GaussianBlur.ts");
const ScreenQuadShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/ScreenQuadShaderProgram.ts");
const ShadowPass_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/ShadowPass.ts");
const SimpleShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/SimpleShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/SimpleShaderProgram.ts");
const GrassShadowPass_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/ShadowMapping/GrassShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/GrassShadowPass.ts");
const SkyboxShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/Skybox/SkyboxShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/Skybox/SkyboxShaderProgram.ts");
const BlurTransparency_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/PostProcessing/BlurTransparency */ "./code/src/Engine/Rendering/ShaderPrograms/PostProcessing/BlurTransparency.ts");
const gl_matrix_1 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
const PointShadowPass_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/ShadowMapping/PointShadowPass */ "./code/src/Engine/Rendering/ShaderPrograms/ShadowMapping/PointShadowPass.ts");
const VolumetricGodRayShaderProgram_1 = __webpack_require__(/*! ./Engine/Rendering/ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram */ "./code/src/Engine/Rendering/ShaderPrograms/Volumetric/VolumetricGodRayShaderProgram.ts");
exports.applicationStartTime = Date.now();
exports.windowInfo = {
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    paddingX: 0,
    paddingY: 0,
};
gl_matrix_1.glMatrix.setMatrixArrayType(Array);
function initWebGL() {
    let canvas = document.getElementById("gameCanvas");
    canvas.width = exports.windowInfo.resolutionWidth;
    canvas.height = exports.windowInfo.resolutionHeight;
    let tempGl = canvas.getContext("webgl2", { antialias: false });
    if (!tempGl.getExtension("EXT_color_buffer_float")) {
        alert("Rendering to floating point textures is not supported on this platform");
    }
    if (!tempGl.getExtension("OES_texture_float_linear")) {
        alert("Floating point rendering to FBO textures not supported");
    }
    if (!tempGl) {
        console.log("Failed to get rendering context for WebGL");
        return;
    }
    return tempGl;
}
const heightByWidth = 9 / 16;
const widthByHeight = 16 / 9;
const gameDiv = document.getElementById("gameDiv");
function resize(gl) {
    // Get the dimensions of the viewport
    let innerWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    let newGameHeight;
    let newGameWidth;
    // Determine game size
    if (heightByWidth > innerWindowSize.height / innerWindowSize.width) {
        newGameHeight = innerWindowSize.height;
        newGameWidth = newGameHeight * widthByHeight;
    }
    else {
        newGameWidth = innerWindowSize.width;
        newGameHeight = newGameWidth * heightByWidth;
    }
    let newGameX = (innerWindowSize.width - newGameWidth) / 2;
    let newGameY = (innerWindowSize.height - newGameHeight) / 2;
    // Center the game by setting the padding of the game
    gameDiv.style.padding = newGameY + "px " + newGameX + "px";
    // Resize game
    gameDiv.style.width = newGameWidth + "px";
    gameDiv.style.height = newGameHeight + "px";
    gl.canvas.width = newGameWidth; // This is not the same as style.width, so it won't be inherited by the css inherit property
    gl.canvas.height = newGameHeight; // This is not the same as style.height, so it won't be inherited by the css inherit property
    // Update the windowInfo resolution
    exports.windowInfo.resolutionWidth = newGameWidth;
    exports.windowInfo.resolutionHeight = newGameHeight;
    exports.windowInfo.paddingX = newGameX;
    exports.windowInfo.paddingY = newGameY;
}
function createShaders() {
    (0, GeometryPass_1.createGeometryPass)();
    (0, LightingPass_1.createLightingPass)();
    (0, BloomBlending_1.createBloomBlending)();
    (0, BloomExtraction_1.createBloomExtraction)();
    (0, CrtShaderProgram_1.createCrtShaderProgram)();
    (0, GaussianBlur_1.createGaussianBlur)();
    (0, BlurTransparency_1.createBlurTransparency)();
    (0, ShadowPass_1.createShadowPass)();
    (0, GrassShadowPass_1.createGrassShadowPass)();
    (0, PointShadowPass_1.createPointShadowPass)();
    (0, ParticleShaderProgram_1.createParticleShaderProgram)();
    (0, GrassShaderProgram_1.createGrassShaderProgram)();
    (0, PhongShaderProgram_1.createPhongShaderProgram)();
    (0, ScreenQuadShaderProgram_1.createScreenQuadShaderProgram)();
    (0, SimpleShaderProgram_1.createSimpleShaderProgram)();
    (0, SkyboxShaderProgram_1.createSkyboxShaderProgram)();
    (0, VolumetricGodRayShaderProgram_1.createVolumetricGodRayShaderProgram)();
}
let gameMachine;
/* main */
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    "use strict";
    // Set up webgl
    exports.gl = initWebGL();
    // Create all shaders
    createShaders();
    gameMachine = new GameMachine_1.default();
    // Resize to fit the current window
    resize(exports.gl);
    // Resize canvas in the future when window is resized
    window.addEventListener("resize", function () {
        resize(exports.gl);
    });
    window.addEventListener("beforeunload", function (e) {
        gameMachine.onExit(e);
    });
    window.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
    // Start the state machine
    gameMachine.start();
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./code/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map