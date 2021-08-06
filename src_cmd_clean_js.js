"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktwowind"] = self["webpackChunktwowind"] || []).push([["src_cmd_clean_js"],{

/***/ "./src/cmd/clean.js":
/*!**************************!*\
  !*** ./src/cmd/clean.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var src_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/state */ \"./src/state/index.js\");\n\n\nfunction cleanCMD() {\n  document.querySelector('.cmd-result').innerHTML = '';\n}\n\nfunction cleanResult() {\n  document.querySelector('.markdown-body').innerHTML = '';\n  src_state__WEBPACK_IMPORTED_MODULE_0__.default.markdownCount = 0;\n}\n/**\r\n * 清除cmd结果\r\n * @date 2021-07-31\r\n * @param {string} args\r\n */\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(args) {\n  switch (args) {\n    case 'cmd':\n      cleanCMD();\n\n    case 'result':\n      cleanResult();\n\n    default:\n      '';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY21kL2NsZWFuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBSEE7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R3b3dpbmQvLi9zcmMvY21kL2NsZWFuLmpzPzA2OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlIGZyb20gJ3NyYy9zdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNNRCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbWQtcmVzdWx0JykuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuUmVzdWx0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcmtkb3duLWJvZHknKS5pbm5lckhUTUwgPSAnJztcclxuICAgIHN0YXRlLm1hcmtkb3duQ291bnQgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiDmuIXpmaRjbWTnu5PmnpxcclxuICogQGRhdGUgMjAyMS0wNy0zMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYXJnc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHN3aXRjaCAoYXJncykge1xyXG4gICAgICAgIGNhc2UgJ2NtZCc6IGNsZWFuQ01EKCk7XHJcbiAgICAgICAgY2FzZSAncmVzdWx0JzogY2xlYW5SZXN1bHQoKTtcclxuICAgICAgICBkZWZhdWx0OiAnJztcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/cmd/clean.js\n");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst state = {\n  // markdown显示数\n  markdownCount: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (state);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d293aW5kLy4vc3JjL3N0YXRlL2luZGV4LmpzPzNiMjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAvLyBtYXJrZG93buaYvuekuuaVsFxyXG4gICAgbWFya2Rvd25Db3VudDogMCxcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/state/index.js\n");

/***/ })

}]);