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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tweetUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tweetUpload */ \"./components/tweetUpload/index.tsx\");\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/client/useUser */ \"./lib/client/useUser.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), user = ref.user, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (!user && error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        user,\n        error,\n        router\n    ]);\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"/api/tweet\"), data = ref1.data, mutate = ref1.mutate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d54059865252451f\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return fetch(\"/api/login-out\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    }).then(function() {\n                        router.replace(\"/create-account\");\n                    });\n                },\n                className: \"jsx-d54059865252451f\",\n                /*#__PURE__*/ children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tweetUpload__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: mutate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            user && (data === null || data === void 0 ? void 0 : data.tweets.map(function(tweet, idx) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d54059865252451f\" + \" \" + \"tweet\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/tweet/\".concat(tweet.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-d54059865252451f\",\n                                children: [\n                                    \"\\uB0B4\\uC6A9 : \",\n                                    tweet.content\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-d54059865252451f\",\n                                children: [\n                                    \"\\uC791\\uC131\\uC790:\",\n                                    tweet.user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this1)\n                }, idx, false, {\n                    fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this1);\n            })),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d54059865252451f\",\n                children: \".tweet.jsx-d54059865252451f{padding:5px;border:3px solid#888;margin-bottom:5px}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n}, \"vE6/R2Rdd/M3kUuSNNbXb42FhFE=\", false, function() {\n    return [\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ1I7QUFDZDtBQUNXO0FBQ0M7QUFDaEI7O0FBRXpCLCtEQUFlLGNBQU07OztJQUNuQixJQUF3QkMsR0FBUyxHQUFUQSwrREFBTyxFQUFFLEVBQXpCTSxJQUFJLEdBQVlOLEdBQVMsQ0FBekJNLElBQUksRUFBRUMsS0FBSyxHQUFLUCxHQUFTLENBQW5CTyxLQUFLO0lBRW5CLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSSxDQUFDRSxJQUFJLElBQUlDLEtBQUssRUFBRTtZQUNsQkMsTUFBTSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuQztLQUNGLEVBQUU7UUFBQ0gsSUFBSTtRQUFFQyxLQUFLO1FBQUVDLE1BQU07S0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBeUJILElBQW9CLEdBQXBCQSwrQ0FBTSxDQUFDLFlBQVksQ0FBQyxFQUFyQ0ssSUFBSSxHQUFhTCxJQUFvQixDQUFyQ0ssSUFBSSxFQUFFQyxNQUFNLEdBQUtOLElBQW9CLENBQS9CTSxNQUFNO0lBRXBCLHFCQUNFLDhEQUFDQyxLQUFHOzs7MEJBQ0YsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRTsyQkFDUEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO3dCQUN0QkMsTUFBTSxFQUFFLE1BQU07d0JBQ2RDLE9BQU8sRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQztxQkFDRixDQUFDLENBQUNDLElBQUksQ0FBQyxXQUFNO3dCQUNaVixNQUFNLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUNuQyxDQUFDO2lCQUFBOzt3Q0FFTCxRQUVEOzs7OztxQkFBUzswQkFDVCw4REFBQ1YsK0RBQVc7Z0JBQUNZLE1BQU0sRUFBRUEsTUFBTTs7Ozs7cUJBQUk7WUFDOUJMLElBQUksSUFBSUksQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxJQUFJLENBQUVTLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsR0FBRztxQ0FDbkMsOERBQUNWLEtBQUc7OERBQXFCLE9BQU87OEJBQzlCLDRFQUFDWCxrREFBSTt3QkFBQ3NCLElBQUksRUFBRSxTQUFRLENBQVcsT0FBVEYsS0FBSyxDQUFDRyxFQUFFLENBQUU7OzBDQUNoQyw4REFBQ1osS0FBRzs7O29DQUFDLGlCQUFLO29DQUFLUyxLQUFLLENBQUNJLE9BQU87Ozs7OztzQ0FBTzswQ0FDL0IsOERBQUhiLEtBQUc7OztvQ0FBQyxxQkFBSTtvQ0FBQ1MsS0FBSyxDQUFDZixJQUFJLENBQUNvQixJQUFJOzs7Ozs7c0NBQU87Ozs7Ozs4QkFDekI7bUJBSkNKLEdBQUc7Ozs7MEJBS1A7YUFDUCxDQUFDOzs7Ozs7Ozs7O2FBUUUsQ0FDTjtDQUNIOztRQTVDeUJ0QiwyREFBTztRQUVoQkUsa0RBQVM7UUFNQ0csMkNBQU07O0lBb0MvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXRVcGxvYWQgZnJvbSBcIkAvY29tcG9uZW50cy90d2VldFVwbG9hZFwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIkAvbGliL2NsaWVudC91c2VVc2VyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciwgZXJyb3IgfSA9IHVzZVVzZXIoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgZXJyb3IpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgfSwgW3VzZXIsIGVycm9yLCByb3V0ZXJdKTtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUihcIi9hcGkvdHdlZXRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGZldGNoKFwiL2FwaS9sb2dpbi1vdXRcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY3JlYXRlLWFjY291bnRcIik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFR3ZWV0VXBsb2FkIG11dGF0ZT17bXV0YXRlfSAvPlxuICAgICAge3VzZXIgJiYgZGF0YT8udHdlZXRzLm1hcCgodHdlZXQsIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJ0d2VldFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldC5pZH1gfT5cbiAgICAgICAgICA8ZGl2PuuCtOyaqSA6IHt0d2VldC5jb250ZW50fTwvZGl2PlxuICAgICAgICAgIDxkaXY+7J6R7ISx7J6QOnt0d2VldC51c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudHdlZXQge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjODg4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJUd2VldFVwbG9hZCIsInVzZVVzZXIiLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VyIiwiZXJyb3IiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiZGF0YSIsIm11dGF0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJpZHgiLCJocmVmIiwiaWQiLCJjb250ZW50IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});