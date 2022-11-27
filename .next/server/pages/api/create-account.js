"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-account";
exports.ids = ["pages/api/create-account"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/create-account.ts":
/*!*************************************!*\
  !*** ./pages/api/create-account.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    const { name , email  } = req.body;\n    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (user) return res.status(200).end();\n    await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            name,\n            email\n        }\n    });\n    return res.status(201).end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLWFjY291bnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMEI7QUFFWCxlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNoQyxNQUFNQyxJQUFJLEdBQUcsTUFBTVAsK0RBQWtCLENBQUM7UUFDcENTLEtBQUssRUFBRTtZQUNMSixLQUFLO1NBQ047S0FDRixDQUFDO0lBQ0YsSUFBSUUsSUFBSSxFQUFFLE9BQU9KLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxNQUFNWCwyREFBYyxDQUFDO1FBQ25CYSxJQUFJLEVBQUU7WUFDSlQsSUFBSTtZQUNKQyxLQUFLO1NBQ047S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPRixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL2NyZWF0ZS1hY2NvdW50LnRzPzQxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiQC9saWIvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIGVtYWlsXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKHVzZXIpIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XHJcbiAgYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMSkuZW5kKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic3RhdHVzIiwiZW5kIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-account.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-account.ts"));
module.exports = __webpack_exports__;

})();