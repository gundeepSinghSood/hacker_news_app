webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Story/Story.js":
/*!*********************************************!*\
  !*** ./components/molecules/Story/Story.js ***!
  \*********************************************/
/*! exports provided: default, StoryVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StoryVanilla\", function() { return Story; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/hackerNewsApi */ \"./services/hackerNewsApi.js\");\n/* harmony import */ var _util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/styleComponentUtil/withStyles */ \"./util/styleComponentUtil/withStyles.js\");\n/* harmony import */ var _Story_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Story.style */ \"./components/molecules/Story/Story.style.js\");\n/* harmony import */ var _atoms_Anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Anchor */ \"./components/atoms/Anchor/index.js\");\nvar _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/molecules/Story/Story.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Story = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(_c = _s(function Story(_ref) {\n  _s();\n\n  var storyId = _ref.storyId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      storyData = _useState[0],\n      setStoryData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_1__[\"getSingleStory\"])(storyId).then(function (storyData) {\n      return storyData && storyData.url && setStoryData(storyData);\n    });\n  }, []);\n  return storyData && storyData.url ? __jsx(_atoms_Anchor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    to: storyData && storyData.url && storyData.url,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_Story_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledStory\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, storyData.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"News Type: \".concat(storyData.type)), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Submitted By: \".concat(storyData.by)))) : null;\n}, \"ikY4qqTYUb8KS57gUYqL51j2+JE=\"));\n_c2 = Story;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c3 = Object(_util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Story, _Story_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Story$memo\");\n$RefreshReg$(_c2, \"Story\");\n$RefreshReg$(_c3, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9TdG9yeS9TdG9yeS5qcz9lZWI1Il0sIm5hbWVzIjpbIlN0b3J5IiwibWVtbyIsInN0b3J5SWQiLCJ1c2VTdGF0ZSIsInN0b3J5RGF0YSIsInNldFN0b3J5RGF0YSIsInVzZUVmZmVjdCIsImdldFNpbmdsZVN0b3J5IiwidGhlbiIsInVybCIsInRpdGxlIiwidHlwZSIsImJ5Iiwid2l0aFN0eWxlcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0Msa0RBQUksU0FBQyxTQUFTRCxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVkUsT0FBVSxRQUFWQSxPQUFVOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEVBQUQsQ0FEQztBQUFBLE1BQ3BDQyxTQURvQztBQUFBLE1BQ3pCQyxZQUR5Qjs7QUFHM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxrRkFBYyxDQUFDTCxPQUFELENBQWQsQ0FBd0JNLElBQXhCLENBQTZCLFVBQUFKLFNBQVM7QUFBQSxhQUFJQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ0ssR0FBdkIsSUFBOEJKLFlBQVksQ0FBQ0QsU0FBRCxDQUE5QztBQUFBLEtBQXRDO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUtBLFNBQU9BLFNBQVMsSUFBSUEsU0FBUyxDQUFDSyxHQUF2QixHQUVILE1BQUMscURBQUQ7QUFBUSxNQUFFLEVBQUVMLFNBQVMsSUFBSUEsU0FBUyxDQUFDSyxHQUF2QixJQUE4QkwsU0FBUyxDQUFDSyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJTCxTQUFTLENBQUNNLEtBQWQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQWtCTixTQUFTLENBQUNPLElBQTVCLEVBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFxQlAsU0FBUyxDQUFDUSxFQUEvQixFQUhGLENBREYsQ0FGRyxHQVVILElBVko7QUFXRCxDQW5CaUIsa0NBQWxCO01BQU1aLEs7QUFxQlMscUVBQUFhLG1GQUFVLENBQUNiLEtBQUQsRUFBUWMsb0RBQVIsQ0FBekI7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N0b3J5L1N0b3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTaW5nbGVTdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2hhY2tlck5ld3NBcGknO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vLi4vLi4vdXRpbC9zdHlsZUNvbXBvbmVudFV0aWwvd2l0aFN0eWxlcyc7XG5pbXBvcnQgc3R5bGVzLCB7IFN0eWxlZFN0b3J5IH0gZnJvbSAnLi9TdG9yeS5zdHlsZSc7XG5pbXBvcnQgQW5jaG9yIGZyb20gJy4uLy4uL2F0b21zL0FuY2hvcidcblxuY29uc3QgU3RvcnkgPSBtZW1vKGZ1bmN0aW9uIFN0b3J5KHtzdG9yeUlkfSkge1xuICBjb25zdCBbc3RvcnlEYXRhLCBzZXRTdG9yeURhdGFdID0gdXNlU3RhdGUoe30pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRTaW5nbGVTdG9yeShzdG9yeUlkKS50aGVuKHN0b3J5RGF0YSA9PiBzdG9yeURhdGEgJiYgc3RvcnlEYXRhLnVybCAmJiBzZXRTdG9yeURhdGEoc3RvcnlEYXRhKSlcbiAgfSwgW10pO1xuICBcbiAgXG4gIHJldHVybiBzdG9yeURhdGEgJiYgc3RvcnlEYXRhLnVybFxuICAgID8gKFxuICAgICAgPEFuY2hvciB0bz17c3RvcnlEYXRhICYmIHN0b3J5RGF0YS51cmwgJiYgc3RvcnlEYXRhLnVybH0+XG4gICAgICAgIDxTdHlsZWRTdG9yeT5cbiAgICAgICAgICA8cD57c3RvcnlEYXRhLnRpdGxlfTwvcD5cbiAgICAgICAgICA8cD57YE5ld3MgVHlwZTogJHtzdG9yeURhdGEudHlwZX1gfTwvcD5cbiAgICAgICAgICA8cD57YFN1Ym1pdHRlZCBCeTogJHtzdG9yeURhdGEuYnl9YH08L3A+XG4gICAgICAgIDwvU3R5bGVkU3Rvcnk+XG4gICAgICA8L0FuY2hvcj5cbiAgICApXG4gICAgOiBudWxsXG59KTtcbiBcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoU3RvcnksIHN0eWxlcyk7XG5cbmV4cG9ydCB7IFN0b3J5IGFzIFN0b3J5VmFuaWxsYSB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Story/Story.js\n");

/***/ })

})