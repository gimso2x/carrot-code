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
exports.id = "pages/api/tweet/[id]/fav";
exports.ids = ["pages/api/tweet/[id]/fav"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate =true , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Plz log in.\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlZSxTQUFTQSxXQUFXLENBQUMsRUFDbENDLE9BQU8sR0FDUEMsU0FBUyxFQUFHLElBQUksR0FDaEJDLE9BQU8sR0FDSSxFQUFFO0lBQ2IsT0FBTyxlQUNMQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDTjtRQUNkLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sUUFBUSxDQUFDSCxHQUFHLENBQUNFLE1BQU0sQ0FBUSxFQUFFO1lBQ3RELE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUlQLFNBQVMsSUFBSSxDQUFDRSxHQUFHLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xDLE9BQU9OLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUVDLEVBQUUsRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsYUFBYTthQUFFLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUk7WUFDRixNQUFNWCxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDekIsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU9ULEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUVFLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci93aXRoSGFuZGxlci50cz9hZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVR5cGUge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxudHlwZSBtZXRob2QgPSBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ1R5cGUge1xyXG4gIG1ldGhvZHM6IG1ldGhvZFtdO1xyXG4gIGhhbmRsZXI6IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZDtcclxuICBpc1ByaXZhdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcih7XHJcbiAgbWV0aG9kcyxcclxuICBpc1ByaXZhdGUgPSB0cnVlLFxyXG4gIGhhbmRsZXIsXHJcbn06IENvbmZpZ1R5cGUpIHtcclxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmIChyZXEubWV0aG9kICYmICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJpdmF0ZSAmJiAhcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBcIlBseiBsb2cgaW4uXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaXNQcml2YXRlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImluY2x1ZGVzIiwic3RhdHVzIiwiZW5kIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withSession.ts":
/*!***********************************!*\
  !*** ./lib/server/withSession.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession),\n/* harmony export */   \"withSsrSession\": () => (/* binding */ withSsrSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieConfig = {\n    cookieName: \"carrotsession\",\n    password: \"1231287493245927389572394579273894572394791asadsadasb\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieConfig);\n}\nfunction withSsrSession(handler) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionSsr)(handler, cookieConfig);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhTZXNzaW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNnRjtBQVVoRixNQUFNRSxZQUFZLEdBQXVCO0lBQ3ZDQyxVQUFVLEVBQUUsZUFBZTtJQUMzQkMsUUFBUSxFQUFFLHVEQUF1RDtJQUNqRUMsYUFBYSxFQUFFO1FBQ2JDLE1BQU0sRUFBRUMsYUFmQyxLQWV3QixZQUFZO0tBQzlDO0NBQ0Y7QUFFTSxTQUFTQyxjQUFjLENBQUNDLEVBQU8sRUFBRTtJQUN0QyxPQUFPVCwwRUFBdUIsQ0FBQ1MsRUFBRSxFQUFFUCxZQUFZLENBQUMsQ0FBQztDQUNsRDtBQUVNLFNBQVNRLGNBQWMsQ0FBQ0MsT0FBWSxFQUFFO0lBQzNDLE9BQU9WLHFFQUFrQixDQUFDVSxPQUFPLEVBQUVULFlBQVksQ0FBQyxDQUFDO0NBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvd2l0aFNlc3Npb24udHM/NmY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJcm9uU2Vzc2lvbk9wdGlvbnMgfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlLCB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiaXJvbi1zZXNzaW9uXCIge1xyXG4gIGludGVyZmFjZSBJcm9uU2Vzc2lvbkRhdGEge1xyXG4gICAgdXNlcj86IHtcclxuICAgICAgaWQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb29raWVDb25maWc6IElyb25TZXNzaW9uT3B0aW9ucyA9IHtcclxuICBjb29raWVOYW1lOiBcImNhcnJvdHNlc3Npb25cIixcclxuICBwYXNzd29yZDogXCIxMjMxMjg3NDkzMjQ1OTI3Mzg5NTcyMzk0NTc5MjczODk0NTcyMzk0NzkxYXNhZHNhZGFzYlwiLFxyXG4gIGNvb2tpZU9wdGlvbnM6IHtcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFwaVNlc3Npb24oZm46IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZShmbiwgY29va2llQ29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTc3JTZXNzaW9uKGhhbmRsZXI6IGFueSkge1xyXG4gIHJldHVybiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgY29va2llQ29uZmlnKTtcclxufVxyXG4iXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uQXBpUm91dGUiLCJ3aXRoSXJvblNlc3Npb25Tc3IiLCJjb29raWVDb25maWciLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwicHJvY2VzcyIsIndpdGhBcGlTZXNzaW9uIiwiZm4iLCJ3aXRoU3NyU2Vzc2lvbiIsImhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tweet/[id]/fav.ts":
/*!*************************************!*\
  !*** ./pages/api/tweet/[id]/fav.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n/* harmony import */ var _lib_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/server/withSession */ \"(api)/./lib/server/withSession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_withSession__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_server_withSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { query: { id  } , session: { user  }  } = req;\n    const alreadyExists = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav.findFirst({\n        where: {\n            tweetId: Number(id),\n            userId: user?.id\n        }\n    });\n    if (alreadyExists) {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav[\"delete\"]({\n            where: {\n                id: alreadyExists.id\n            }\n        });\n    } else {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fav.create({\n            data: {\n                user: {\n                    connect: {\n                        id: user?.id\n                    }\n                },\n                tweet: {\n                    connect: {\n                        id: Number(id)\n                    }\n                }\n            }\n        });\n    }\n    res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withSession__WEBPACK_IMPORTED_MODULE_2__.withApiSession)((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    methods: [\n        \"POST\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQvW2lkXS9mYXYudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxRTtBQUN2QztBQUM0QjtBQUUxRCxlQUFlRyxPQUFPLENBQ3BCQyxHQUFtQixFQUNuQkMsR0FBa0MsRUFDbEM7SUFDQSxNQUFNLEVBQ0pDLEtBQUssRUFBRSxFQUFFQyxFQUFFLEdBQUUsR0FDYkMsT0FBTyxFQUFFLEVBQUVDLElBQUksR0FBRSxHQUNsQixHQUFHTCxHQUFHO0lBQ1AsTUFBTU0sYUFBYSxHQUFHLE1BQU1ULDZEQUFvQixDQUFDO1FBQy9DWSxLQUFLLEVBQUU7WUFDTEMsT0FBTyxFQUFFQyxNQUFNLENBQUNSLEVBQUUsQ0FBQztZQUNuQlMsTUFBTSxFQUFFUCxJQUFJLEVBQUVGLEVBQUU7U0FDakI7S0FDRixDQUFDO0lBQ0YsSUFBSUcsYUFBYSxFQUFFO1FBQ2pCLE1BQU1ULDZEQUFpQixDQUFDO1lBQ3RCWSxLQUFLLEVBQUU7Z0JBQ0xOLEVBQUUsRUFBRUcsYUFBYSxDQUFDSCxFQUFFO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osTUFBTTtRQUNMLE1BQU1OLDBEQUFpQixDQUFDO1lBQ3RCa0IsSUFBSSxFQUFFO2dCQUNKVixJQUFJLEVBQUU7b0JBQ0pXLE9BQU8sRUFBRTt3QkFDUGIsRUFBRSxFQUFFRSxJQUFJLEVBQUVGLEVBQUU7cUJBQ2I7aUJBQ0Y7Z0JBQ0RjLEtBQUssRUFBRTtvQkFDTEQsT0FBTyxFQUFFO3dCQUNQYixFQUFFLEVBQUVRLE1BQU0sQ0FBQ1IsRUFBRSxDQUFDO3FCQUNmO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUNERixHQUFHLENBQUNpQixJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7Q0FDeEI7QUFFRCxpRUFBZXJCLHVFQUFjLENBQzNCRixtRUFBVyxDQUFDO0lBQ1Z3QixPQUFPLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDakJyQixPQUFPO0NBQ1IsQ0FBQyxDQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3R3ZWV0L1tpZF0vZmF2LnRzPzk1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiQC9saWIvc2VydmVyL3dpdGhIYW5kbGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCB7IHdpdGhBcGlTZXNzaW9uIH0gZnJvbSBcIkAvbGliL3NlcnZlci93aXRoU2Vzc2lvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cclxuKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgaWQgfSxcclxuICAgIHNlc3Npb246IHsgdXNlciB9XHJcbiAgfSA9IHJlcTtcclxuICBjb25zdCBhbHJlYWR5RXhpc3RzID0gYXdhaXQgY2xpZW50LmZhdi5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdHdlZXRJZDogTnVtYmVyKGlkKSxcclxuICAgICAgdXNlcklkOiB1c2VyPy5pZFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChhbHJlYWR5RXhpc3RzKSB7XHJcbiAgICBhd2FpdCBjbGllbnQuZmF2LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFscmVhZHlFeGlzdHMuaWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IGNsaWVudC5mYXYuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXI/LmlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0d2VldDoge1xyXG4gICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICBpZDogTnVtYmVyKGlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlcy5qc29uKHsgb2s6IHRydWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcGlTZXNzaW9uKFxyXG4gIHdpdGhIYW5kbGVyKHtcclxuICAgIG1ldGhvZHM6IFtcIlBPU1RcIl0sXHJcbiAgICBoYW5kbGVyXHJcbiAgfSlcclxuKTtcclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwiY2xpZW50Iiwid2l0aEFwaVNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsInNlc3Npb24iLCJ1c2VyIiwiYWxyZWFkeUV4aXN0cyIsImZhdiIsImZpbmRGaXJzdCIsIndoZXJlIiwidHdlZXRJZCIsIk51bWJlciIsInVzZXJJZCIsImRlbGV0ZSIsImNyZWF0ZSIsImRhdGEiLCJjb25uZWN0IiwidHdlZXQiLCJqc29uIiwib2siLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet/[id]/fav.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzPzJhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet/[id]/fav.ts"));
module.exports = __webpack_exports__;

})();