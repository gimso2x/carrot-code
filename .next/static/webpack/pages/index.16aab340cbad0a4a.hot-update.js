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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tweetUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tweetUpload */ \"./components/tweetUpload/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    _s();\n    // const { user, error } = useUser();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/users/me\"), me = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(me);\n        if (!me && error) {\n            router.push(\"/create-account\");\n        }\n    }, [\n        me,\n        error\n    ]);\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/tweet\"), data = ref1.data, mutate = ref1.mutate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d54059865252451f\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return fetch(\"/api/login-out\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    }).then(function() {\n                    // router.push('/')\n                    });\n                },\n                className: \"jsx-d54059865252451f\",\n                /*#__PURE__*/ children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tweetUpload__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: mutate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            me && (data === null || data === void 0 ? void 0 : data.tweets.map(function(tweet, idx) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d54059865252451f\" + \" \" + \"tweet\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d54059865252451f\",\n                            children: [\n                                \"\\uB0B4\\uC6A9 : \",\n                                tweet.content\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d54059865252451f\",\n                            children: [\n                                \"\\uC791\\uC131\\uC790:\",\n                                tweet.user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, idx, true, {\n                    fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this1);\n            })),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d54059865252451f\",\n                children: \".tweet.jsx-d54059865252451f{padding:5px;border:3px solid#888;margin-bottom:5px}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n}, \"9b1Hs0hqUDv0ePMBZhhB2wIacd4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBRVg7QUFDQztBQUNoQjs7QUFFekIsK0RBQWUsY0FBTTs7O0lBQ25CLHFDQUFxQztJQUNyQyxJQUE0QkksR0FBdUIsR0FBdkJBLCtDQUFNLENBQUMsZUFBZSxDQUFDLEVBQTNDQyxFQUFRLEdBQVlELEdBQXVCLENBQTNDQyxJQUFJLEVBQU1FLEtBQUssR0FBS0gsR0FBdUIsQ0FBakNHLEtBQUs7SUFFdkIsSUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCRSxnREFBUyxDQUFDLFdBQU07UUFDZE0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQ0EsRUFBRSxJQUFJQyxLQUFLLEVBQUU7WUFDaEJDLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDaEM7S0FDRixFQUFFO1FBQUNMLEVBQUU7UUFBRUMsS0FBSztLQUFDLENBQUMsQ0FBQztJQUNoQixJQUF5QkgsSUFBb0IsR0FBcEJBLCtDQUFNLENBQUMsWUFBWSxDQUFDLEVBQXJDQyxJQUFJLEdBQWFELElBQW9CLENBQXJDQyxJQUFJLEVBQUVPLE1BQU0sR0FBS1IsSUFBb0IsQ0FBL0JRLE1BQU07SUFFcEIscUJBQ0UsOERBQUNDLEtBQUc7OzswQkFDRiw4REFBQ0MsUUFBTTtnQkFDTEMsT0FBTyxFQUFFOzJCQUNQQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3RCQyxNQUFNLEVBQUUsTUFBTTt3QkFDZEMsT0FBTyxFQUFFOzRCQUNQLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ25DO3FCQUNGLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFdBQU07b0JBQ1osbUJBQW1CO3FCQUNwQixDQUFDO2lCQUFBOzt3Q0FFTCxRQUVEOzs7OztxQkFBUzswQkFDVCw4REFBQ25CLCtEQUFXO2dCQUFDWSxNQUFNLEVBQUVBLE1BQU07Ozs7O3FCQUFJO1lBQzlCTixFQUFFLElBQUlELENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFRLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsSUFBSSxDQUFFZSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEdBQUc7cUNBQ2pDLDhEQUFDVixLQUFHOzhEQUFxQixPQUFPOztzQ0FDOUIsOERBQUNBLEtBQUc7OztnQ0FBQyxpQkFBSztnQ0FBS1MsS0FBSyxDQUFDRSxPQUFPOzs7Ozs7a0NBQU87c0NBQy9CLDhEQUFIWCxLQUFHOzs7Z0NBQUMscUJBQUk7Z0NBQUNTLEtBQUssQ0FBQ0csSUFBSSxDQUFDQyxJQUFJOzs7Ozs7a0NBQU87O21CQUZ4QkgsR0FBRzs7OzswQkFHUDthQUNQLENBQUM7Ozs7Ozs7Ozs7YUFRRSxDQUNOO0NBQ0g7O1FBM0M2Qm5CLDJDQUFNO1FBRW5CSCxrREFBUztRQU9DRywyQ0FBTTs7SUFrQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VldFVwbG9hZCBmcm9tIFwiQC9jb21wb25lbnRzL3R3ZWV0VXBsb2FkXCI7XG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiQC9saWIvY2xpZW50L3VzZVVzZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gY29uc3QgeyB1c2VyLCBlcnJvciB9ID0gdXNlVXNlcigpO1xuICBjb25zdCB7IGRhdGE6IG1lLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS91c2Vycy9tZVwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZSlcbiAgICBpZiAoIW1lICYmIGVycm9yKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9jcmVhdGUtYWNjb3VudFwiKTtcbiAgICB9XG4gIH0sIFttZSwgZXJyb3JdKTtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUihcIi9hcGkvdHdlZXRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGZldGNoKFwiL2FwaS9sb2dpbi1vdXRcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxUd2VldFVwbG9hZCBtdXRhdGU9e211dGF0ZX0gLz5cbiAgICAgIHttZSAmJiBkYXRhPy50d2VldHMubWFwKCh0d2VldCwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cInR3ZWV0XCI+XG4gICAgICAgICAgPGRpdj7rgrTsmqkgOiB7dHdlZXQuY29udGVudH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PuyekeyEseyekDp7dHdlZXQudXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudHdlZXQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJUd2VldFVwbG9hZCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwiZGF0YSIsIm1lIiwiZXJyb3IiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm11dGF0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJpZHgiLCJjb250ZW50IiwidXNlciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});