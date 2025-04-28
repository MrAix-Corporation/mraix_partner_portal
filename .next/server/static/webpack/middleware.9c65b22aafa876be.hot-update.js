"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    const token = request.cookies.get(\"token\");\n    const isAuthPage = request.nextUrl.pathname.startsWith(\"/auth\");\n    const isRegisterPage = request.nextUrl.pathname === \"/auth/register\";\n    // if (!token && !isAuthPage && !isRegisterPage) {\n    //   return NextResponse.redirect(new URL('/auth', request.url));\n    // }\n    // if (token && (isAuthPage || isRegisterPage)) {\n    //   return NextResponse.redirect(new URL('/', request.url));\n    // }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|favicon.ico).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0MsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDbEMsTUFBTUMsYUFBYUosUUFBUUssT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQztJQUN2RCxNQUFNQyxpQkFBaUJSLFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLO0lBRXBELGtEQUFrRDtJQUNsRCxpRUFBaUU7SUFDakUsSUFBSTtJQUVKLGlEQUFpRDtJQUNqRCw2REFBNkQ7SUFDN0QsSUFBSTtJQUVKLE9BQU9SLGtGQUFZQSxDQUFDVyxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQW9EO0FBQ2hFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldChcInRva2VuXCIpO1xuICBjb25zdCBpc0F1dGhQYWdlID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXV0aFwiKTtcbiAgY29uc3QgaXNSZWdpc3RlclBhZ2UgPSByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09IFwiL2F1dGgvcmVnaXN0ZXJcIjtcblxuICAvLyBpZiAoIXRva2VuICYmICFpc0F1dGhQYWdlICYmICFpc1JlZ2lzdGVyUGFnZSkge1xuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2F1dGgnLCByZXF1ZXN0LnVybCkpO1xuICAvLyB9XG5cbiAgLy8gaWYgKHRva2VuICYmIChpc0F1dGhQYWdlIHx8IGlzUmVnaXN0ZXJQYWdlKSkge1xuICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycsIHJlcXVlc3QudXJsKSk7XG4gIC8vIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1wiLygoPyFhcGl8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfGZhdmljb24uaWNvKS4qKVwiXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJpc0F1dGhQYWdlIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImlzUmVnaXN0ZXJQYWdlIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});