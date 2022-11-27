"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/client/useUser.ts":
/*!*******************************!*\
  !*** ./lib/client/useUser.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction useUser() {\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( false ? 0 : \"/api/me\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.ok) {\n            router.replace(\"/enter\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return {\n        user: data === null || data === void 0 ? void 0 : data.profile,\n        isLoading: !data && !error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVDtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxJQUF3QkQsR0FFdkIsR0FGdUJBLCtDQUFNLENBQzVCLE1BQTZCLEdBQUcsQ0FBSSxHQUFHLFNBQVMsQ0FDakQsRUFGT0UsSUFBSSxHQUFZRixHQUV2QixDQUZPRSxJQUFJLEVBQUVDLEtBQUssR0FBS0gsR0FFdkIsQ0FGYUcsS0FBSztJQUduQixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlHLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLEVBQUUsRUFBRTtZQUNwQkQsTUFBTSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7S0FDRixFQUFFO1FBQUNKLElBQUk7UUFBRUUsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUNuQixPQUFPO1FBQUVHLElBQUksRUFBRUwsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVNLE9BQU87UUFBRUMsU0FBUyxFQUFFLENBQUNQLElBQUksSUFBSSxDQUFDQyxLQUFLO0tBQUUsQ0FBQztDQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3VzZVVzZXIudHM/ZWQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IFwiL2FwaS9tZVwiXHJcbiAgKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgJiYgIWRhdGEub2spIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZW50ZXJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHJvdXRlcl0pO1xyXG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnByb2ZpbGUsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInVzZXIiLCJwcm9maWxlIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/client/useUser */ \"./lib/client/useUser.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), me = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!me && error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        me,\n        error,\n        router\n    ]);\n    console.log(me);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n}, \"qXcykVQsWt54zJRdwW3P86g4OPk=\", false, function() {\n    return [\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDSDtBQUNDOztBQUV6QywrREFBZSxjQUFNOztJQUNuQixJQUE0QkEsR0FBUyxHQUFUQSwrREFBTyxFQUFFLEVBQTdCSSxFQUFRLEdBQVlKLEdBQVMsQ0FBN0JJLElBQUksRUFBTUUsS0FBSyxHQUFLTixHQUFTLENBQW5CTSxLQUFLO0lBRXZCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSSxDQUFDRSxFQUFFLElBQUlDLEtBQUssRUFBRTtZQUNoQkMsTUFBTSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuQztLQUNGLEVBQUU7UUFBQ0gsRUFBRTtRQUFFQyxLQUFLO1FBQUVDLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFeEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxFQUFFLENBQUM7SUFFZixxQkFDRSw4REFBQ00sS0FBRztrQkFDRiw0RUFBQ0MsSUFBRTtzQkFBQyxPQUFLOzs7OztpQkFBSzs7Ozs7YUFDVixDQUNOO0NBQ0g7O1FBaEI2QlosMkRBQU87UUFFcEJDLGtEQUFTOztJQWN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVXNlciBmcm9tIFwiQC9saWIvY2xpZW50L3VzZVVzZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogbWUsIGVycm9yIH0gPSB1c2VVc2VyKCk7XG4gIFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1lICYmIGVycm9yKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9jcmVhdGUtYWNjb3VudFwiKTtcbiAgICB9XG4gIH0sIFttZSwgZXJyb3IsIHJvdXRlcl0pO1xuXG4gIGNvbnNvbGUubG9nKG1lKVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZGF0YSIsIm1lIiwiZXJyb3IiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});