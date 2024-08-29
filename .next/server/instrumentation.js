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
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("node:child_process");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:inspector":
/*!*********************************!*\
  !*** external "node:inspector" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("node:inspector");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:readline":
/*!********************************!*\
  !*** external "node:readline" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("node:readline");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:tls");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:worker_threads":
/*!**************************************!*\
  !*** external "node:worker_threads" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("node:worker_threads");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nvar _sentryCollisionFreeGlobalObject =  false ? 0 : typeof global != \"undefined\" ? global : typeof self != \"undefined\" ? self : {};\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__sentryBasePath\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\nasync function register() {\n    if (true) {\n        await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next@14.2.4_@babel+core@7.24.8_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1\"), __webpack_require__.e(\"vendor-chunks/@sentry+core@8.17.0\"), __webpack_require__.e(\"vendor-chunks/@sentry+node@8.17.0\"), __webpack_require__.e(\"vendor-chunks/@sentry+utils@8.17.0\"), __webpack_require__.e(\"vendor-chunks/@sentry+nextjs@8.17.0_@opentelemetry+api@1.9.0_@opentelemetry+core@1.25.1_@opentelemetry+api@_wkijsx6rvofhhknnh5kwotnes4\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+semantic-conventions@1.25.1\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+core@1.25.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+sdk-trace-base@1.25.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@sentry+opentelemetry@8.17.0_@opentelemetry+api@1.9.0_@opentelemetry+core@1.25.1_@opentelemet_ow7c37dm3l4bymc7i4etipzmaa\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+resources@1.25.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/semver@7.6.2\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-http@0.52.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation@0.52.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-mongodb@0.46.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-graphql@0.42.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-pg@0.43.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/resolve@1.22.8\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-express@0.41.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-hapi@0.40.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-redis-4@0.41.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-mysql@0.40.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/color-convert@2.0.1\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-fastify@0.38.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/debug@4.3.5\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-mongoose@0.40.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+context-async-hooks@1.25.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-koa@0.42.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-connect@0.38.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-nestjs-core@0.39.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-mysql2@0.40.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+instrumentation-ioredis@0.42.0_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/require-in-the-middle@7.3.0\"), __webpack_require__.e(\"vendor-chunks/@prisma+instrumentation@5.16.1\"), __webpack_require__.e(\"vendor-chunks/chalk@3.0.0\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+api-logs@0.52.1\"), __webpack_require__.e(\"vendor-chunks/is-core-module@2.14.0\"), __webpack_require__.e(\"vendor-chunks/color-name@1.1.4\"), __webpack_require__.e(\"vendor-chunks/ansi-styles@4.3.0\"), __webpack_require__.e(\"vendor-chunks/import-in-the-middle@1.9.0\"), __webpack_require__.e(\"vendor-chunks/stacktrace-parser@0.1.10\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+sql-common@0.40.1_@opentelemetry+api@1.9.0\"), __webpack_require__.e(\"vendor-chunks/ms@2.1.2\"), __webpack_require__.e(\"vendor-chunks/shimmer@1.2.1\"), __webpack_require__.e(\"vendor-chunks/@opentelemetry+redis-common@0.36.2\"), __webpack_require__.e(\"vendor-chunks/supports-color@7.2.0\"), __webpack_require__.e(\"vendor-chunks/function-bind@1.1.2\"), __webpack_require__.e(\"vendor-chunks/path-parse@1.0.7\"), __webpack_require__.e(\"vendor-chunks/@swc+helpers@0.5.5\"), __webpack_require__.e(\"vendor-chunks/module-details-from-path@1.0.3\"), __webpack_require__.e(\"vendor-chunks/has-flag@4.0.0\"), __webpack_require__.e(\"vendor-chunks/hasown@2.0.2\"), __webpack_require__.e(\"_instrument_node_modules_pnpm_opentelemetry_instrumentation_0_52_1__opentelemetry_api_1_9_0_n-832902\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sentry.server.config */ \"(instrument)/./sentry.server.config.ts\"));\n    }\n    if (false) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxtQ0FBbUMsTUFBNEIsR0FBR0MsQ0FBTUEsR0FBRyxPQUFPQyxVQUFVLGNBQWNBLFNBQVMsT0FBT0MsUUFBUSxjQUFjQSxPQUFPLENBQUM7QUFDNUpILGdDQUFnQyxDQUFDLCtCQUErQixHQUFHSTtBQUNuRUosZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUdJO0FBQ3JESixnQ0FBZ0MsQ0FBQyxtQkFBbUIsR0FBR0k7QUFDdkRKLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRXhELGVBQWVLO0lBQ3BCLElBQUlDLElBQTZCLEVBQVU7UUFDekMsTUFBTSxrbUpBQU87SUFDZjtJQUVBLElBQUlBLEtBQTZCLEVBQVEsRUFFeEM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1wcm9qZWN0Ly4vaW5zdHJ1bWVudGF0aW9uLnRzP2Q3ZDciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0ID0gdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB7fTtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiX19zZW50cnlSZXdyaXRlc1R1bm5lbFBhdGhfX1wiXSA9IHVuZGVmaW5lZDtcbl9zZW50cnlDb2xsaXNpb25GcmVlR2xvYmFsT2JqZWN0W1wiU0VOVFJZX1JFTEVBU0VcIl0gPSB1bmRlZmluZWQ7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIl9fc2VudHJ5QmFzZVBhdGhcIl0gPSB1bmRlZmluZWQ7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIl9fcmV3cml0ZUZyYW1lc0Rpc3REaXJfX1wiXSA9IFwiLm5leHRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FID09PSAnbm9kZWpzJykge1xuICAgIGF3YWl0IGltcG9ydCgnLi9zZW50cnkuc2VydmVyLmNvbmZpZycpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnKSB7XG4gICAgYXdhaXQgaW1wb3J0KCcuL3NlbnRyeS5lZGdlLmNvbmZpZycpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3QiLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9SVU5USU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();