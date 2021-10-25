/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById('game-canvas');\n  canvas.width = 500;\n  canvas.height = 500;\n  const ctx = canvas.getContext('2d');\n\n  // let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 10, color: 'red' })\n  // obj.draw(ctx);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// const obj = new MovingObject({pos: [30,30], vel: [10,10], radius: []})\nfunction MovingObject(data) {\n  this.pos = data.pos;\n  this.vel = data.vel;\n  this.radius = data.radius;\n  this.color = data.color;\n}\n\n\n\n// console.log(new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// }));\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;