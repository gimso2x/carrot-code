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

/***/ "./components/tweetUpload/index.tsx":
/*!******************************************!*\
  !*** ./components/tweetUpload/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TweetUpload; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/client/useMutation */ \"./lib/client/useMutation.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TweetUpload(param) {\n    var mutate = param.mutate;\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset;\n    var ref1 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/tweet\"), 2), uploadTweet = ref1[0], ref2 = ref1[1], loading = ref2.loading, data1 = ref2.data;\n    var onSubmit = function(data) {\n        // if (loading) return;\n        // uploadTweet(data);\n        uploadTweet(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data1 === null || data1 === void 0 ? void 0 : data1.ok) mutate();\n        reset();\n    }, [\n        data1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", _objectSpread({}, register(\"content\", {\n                required: true\n            })), void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\components\\\\tweetUpload\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"\\uD2B8\\uC717 \\uC5C5\\uB85C\\uB4DC\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\components\\\\tweetUpload\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssuk\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\components\\\\tweetUpload\\\\index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(TweetUpload, \"jWJt3RQTCW+My98LO6smkilSysE=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm,\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = TweetUpload;\nvar _c;\n$RefreshReg$(_c, \"TweetUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R3ZWV0VXBsb2FkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNqQjtBQUNROztBQU0zQixTQUFTRyxXQUFXLENBQUMsS0FBUSxFQUFFO1FBQVYsTUFBTyxHQUFQLEtBQVEsQ0FBUEMsTUFBTTs7SUFDekMsSUFBMENGLEdBQVMsR0FBVEEsd0RBQU8sRUFBRSxFQUEzQ0csUUFBUSxHQUEwQkgsR0FBUyxDQUEzQ0csUUFBUSxFQUFFQyxZQUFZLEdBQVlKLEdBQVMsQ0FBakNJLFlBQVksRUFBRUMsS0FBSyxHQUFLTCxHQUFTLENBQW5CSyxLQUFLO0lBQ3JDLElBQXlDUCxJQUF5QixrQkFBekJBLG1FQUFXLENBQUMsWUFBWSxDQUFDLE1BQTNEUSxXQUFXLEdBQXVCUixJQUF5QixHQUFoRCxTQUF1QkEsSUFBeUIsS0FBNUNTLE9BQU8sUUFBUEEsT0FBTyxFQUFFQyxLQUFJLFFBQUpBLElBQUk7SUFDbkMsSUFBTUMsUUFBUSxHQUFHLFNBQUNELElBQWdCLEVBQUs7UUFDckMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQkYsV0FBVyxDQUFDRSxJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUVEVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFHUyxLQUFJLGFBQUpBLEtBQUksV0FBSSxHQUFSQSxLQUFBQSxDQUFRLEdBQVJBLEtBQUksQ0FBRUUsRUFBRSxFQUFFUixNQUFNLEVBQUUsQ0FBQztRQUN0QkcsS0FBSyxFQUFFLENBQUM7S0FDVCxFQUFFO1FBQUNHLEtBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxxQkFDRSw4REFBQ0csTUFBSTtRQUFDRixRQUFRLEVBQUVMLFlBQVksQ0FBQ0ssUUFBUSxDQUFDOzswQkFDcEMsOERBQUNHLFVBQVEsb0JBQUtULFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQUVVLFFBQVEsRUFBRSxJQUFJO2FBQUUsQ0FBQzs7OztvQkFBYTswQkFDbEUsOERBQUNDLFFBQU07MEJBQUMsaUNBQU07Ozs7O29CQUFTOzs7Ozs7WUFDbEIsQ0FDUDtDQUNIO0dBcEJ1QmIsV0FBVzs7UUFDU0Qsb0RBQU87UUFDUkYsK0RBQVc7OztBQUY5QkcsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3R3ZWV0VXBsb2FkL2luZGV4LnRzeD9mMzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiQC9saWIvY2xpZW50L3VzZU11dGF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFVwbG9hZFR5cGUge1xyXG4gIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3ZWV0VXBsb2FkKHttdXRhdGV9KSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IFt1cGxvYWRUd2VldCwgeyBsb2FkaW5nLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oXCIvYXBpL3R3ZWV0XCIpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IFVwbG9hZFR5cGUpID0+IHtcclxuICAgIC8vIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICAvLyB1cGxvYWRUd2VldChkYXRhKTtcclxuICAgIHVwbG9hZFR3ZWV0KGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihkYXRhPy5vaykgbXV0YXRlKCk7XHJcbiAgICByZXNldCgpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgIDx0ZXh0YXJlYSB7Li4ucmVnaXN0ZXIoXCJjb250ZW50XCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgIDxidXR0b24+7Yq47JyXIOyXheuhnOuTnDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwidXNlRWZmZWN0IiwidXNlRm9ybSIsIlR3ZWV0VXBsb2FkIiwibXV0YXRlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsInVwbG9hZFR3ZWV0IiwibG9hZGluZyIsImRhdGEiLCJvblN1Ym1pdCIsIm9rIiwiZm9ybSIsInRleHRhcmVhIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tweetUpload/index.tsx\n");

/***/ })

});