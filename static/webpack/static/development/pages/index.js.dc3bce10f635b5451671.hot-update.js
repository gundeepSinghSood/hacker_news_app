webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/templates/HomePage/HomePage.js":
/*!***************************************************!*\
  !*** ./components/templates/HomePage/HomePage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Anchor */ \"./components/atoms/Anchor/index.js\");\n/* harmony import */ var _services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hackerNewsApi */ \"./services/hackerNewsApi.js\");\n/* harmony import */ var _organisms_TopStories_TopStories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/TopStories/TopStories */ \"./components/organisms/TopStories/TopStories.js\");\n/* harmony import */ var _organisms_SectionHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../organisms/SectionHeading */ \"./components/organisms/SectionHeading/index.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/index */ \"./util/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/templates/HomePage/HomePage.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      storyIds = _useState[0],\n      setStoryIds = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_2__[\"getToStoriesID\"])().then(function (ids) {\n      setStoryIds(ids);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_util_index__WEBPACK_IMPORTED_MODULE_5__[\"isMobile\"])() && __jsx(_organisms_SectionHeading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    sectionTitle: \"Top News\",\n    sectionPara: \"Some of top trending news on stories from the Hacker News API\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 22\n    }\n  }), __jsx(_organisms_TopStories_TopStories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    storyIds: storyIds,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(HomePage, \"Q/S4cBBIAd5tDXHPzpG8WieIXSU=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9Ib21lUGFnZS9Ib21lUGFnZS5qcz82NjkyIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJzdG9yeUlkcyIsInNldFN0b3J5SWRzIiwidXNlRWZmZWN0IiwiZ2V0VG9TdG9yaWVzSUQiLCJ0aGVuIiwiaWRzIiwiaXNNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNkQyxRQURjO0FBQUEsTUFDSkMsV0FESTs7QUFJckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxrRkFBYyxHQUFHQyxJQUFqQixDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDM0JKLGlCQUFXLENBQUNJLEdBQUQsQ0FBWDtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDRSxtRUFDR0MsNERBQVEsTUFBTSxNQUFDLGlFQUFEO0FBQWdCLGdCQUFZLEVBQUMsVUFBN0I7QUFBd0MsZUFBVyxFQUFDLCtEQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGpCLEVBRUUsTUFBQyx3RUFBRDtBQUFZLFlBQVEsRUFBRU4sUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQWhCRDs7R0FBTUYsUTs7S0FBQUEsUTtBQWtCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy9Ib21lUGFnZS9Ib21lUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuY2hvciBmcm9tICcuLi8uLi9hdG9tcy9BbmNob3InO1xuaW1wb3J0IHsgZ2V0VG9TdG9yaWVzSUQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oYWNrZXJOZXdzQXBpJztcbmltcG9ydCBUb3BTdG9yaWVzIGZyb20gJy4uLy4uL29yZ2FuaXNtcy9Ub3BTdG9yaWVzL1RvcFN0b3JpZXMnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJy4uLy4uL29yZ2FuaXNtcy9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvaW5kZXgnO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0b3J5SWRzLCBzZXRTdG9yeUlkc10gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUb1N0b3JpZXNJRCgpLnRoZW4oaWRzID0+IHtcbiAgICAgIHNldFN0b3J5SWRzKGlkcylcbiAgICB9KVxuICB9LCBbXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNNb2JpbGUoKSAmJiA8U2VjdGlvbkhlYWRpbmcgc2VjdGlvblRpdGxlPSdUb3AgTmV3cycgc2VjdGlvblBhcmE9J1NvbWUgb2YgdG9wIHRyZW5kaW5nIG5ld3Mgb24gc3RvcmllcyBmcm9tIHRoZSBIYWNrZXIgTmV3cyBBUEknIC8+fVxuICAgICAgPFRvcFN0b3JpZXMgc3RvcnlJZHM9e3N0b3J5SWRzfSAvPlxuICAgIDwvPlxuICApXG59XG4gXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/templates/HomePage/HomePage.js\n");

/***/ })

})