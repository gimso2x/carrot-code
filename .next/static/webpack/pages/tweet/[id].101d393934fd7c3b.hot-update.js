"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Tweet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref.data, mutate = ref.mutate;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b3e1b6a7c9b96113\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b3e1b6a7c9b96113\" + \" \" + \"head\",\n                /*#__PURE__*/ children: data.tweet.user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b3e1b6a7c9b96113\" + \" \" + \"content\",\n                children: data.tweet.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b3e1b6a7c9b96113\" + \" \" + \"like\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b3e1b6a7c9b96113\",\n                children: \"\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_s(Tweet, \"vWR+zoTcPcFv0Pztqd6zJCr1vAc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Tweet;\nvar _c;\n$RefreshReg$(_c, \"Tweet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNmOztBQUVWLFNBQVNFLEtBQUssR0FBRzs7SUFDOUIsSUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLElBQXlCQyxHQUV4QixHQUZ3QkEsK0NBQU0sQ0FDN0JFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLEdBQUcsYUFBWSxDQUFrQixPQUFoQkYsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsQ0FBRSxHQUFHLElBQUksQ0FDekQsRUFGT0MsSUFBSSxHQUFhTCxHQUV4QixDQUZPSyxJQUFJLEVBQUVDLE1BQU0sR0FBS04sR0FFeEIsQ0FGYU0sTUFBTTtJQUlwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBRWxCLHFCQUNFLDhEQUFDSSxLQUFHOzs7MEJBQ0YsOERBQUNBLEtBQUc7MERBQVcsTUFBTTt3Q0FBRUosSUFBSSxDQUFDSyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsSUFBSTs7Ozs7b0JBQU87MEJBQ2xELDhEQUFDSCxLQUFHOzBEQUFXLFNBQVM7MEJBQUVKLElBQUksQ0FBQ0ssS0FBSyxDQUFDRyxPQUFPOzs7OztvQkFBTzswQkFDbkQsOERBQUNKLEtBQUc7MERBQVcsTUFBTTs7Ozs7b0JBQU87Ozs7Ozs7Ozs7WUFFeEIsQ0FDTjtDQUNIO0dBaEJ1QlIsS0FBSzs7UUFDWkYsa0RBQVM7UUFDQ0MsMkNBQU07OztBQUZUQyxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUihcclxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj57ZGF0YS50d2VldC51c2VyLm5hbWV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntkYXRhLnR3ZWV0LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiPjwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwiVHdlZXQiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwiZGF0YSIsIm11dGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ0d2VldCIsInVzZXIiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});