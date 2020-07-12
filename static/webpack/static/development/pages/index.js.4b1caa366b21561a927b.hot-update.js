webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Story/Story.js":
/*!*********************************************!*\
  !*** ./components/molecules/Story/Story.js ***!
  \*********************************************/
/*! exports provided: default, StoryVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StoryVanilla\", function() { return Story; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/hackerNewsApi */ \"./services/hackerNewsApi.js\");\n/* harmony import */ var _util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/styleComponentUtil/withStyles */ \"./util/styleComponentUtil/withStyles.js\");\n/* harmony import */ var _Story_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Story.style */ \"./components/molecules/Story/Story.style.js\");\n/* harmony import */ var _atoms_Anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Anchor */ \"./components/atoms/Anchor/index.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util */ \"./util/index.js\");\nvar _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/molecules/Story/Story.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Story = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(_c = _s(function Story(_ref) {\n  _s();\n\n  var storyId = _ref.storyId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      storyData = _useState[0],\n      setStoryData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // to={storyData.url} title={storyData.title}\n    console.log(storyData.url);\n    Object(_services_hackerNewsApi__WEBPACK_IMPORTED_MODULE_1__[\"getSingleStory\"])(storyId).then(function (storyData) {\n      return storyData && storyData.url && setStoryData(storyData);\n    });\n  }, []);\n  return storyData && storyData.url ? __jsx(_Story_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledStory\"], {\n    className: \"row col-xs-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(_atoms_Anchor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    forceClick: true,\n    href: storyData.url,\n    title: storyData.title,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"heading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, storyData.title), __jsx(\"div\", {\n    className: \"second-row row middle-xs between-xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: \"news-type\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"News Type: \".concat(storyData.type)), __jsx(\"span\", {\n    className: \"story-posted-time\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"mapTime\"])(storyData.time))), __jsx(\"p\", {\n    className: \"submitted-name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Submitted By: \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 59\n    }\n  }, \"\".concat(storyData.by)))), __jsx(\"hr\", {\n    className: \"mid-line\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })) : null;\n}, \"ikY4qqTYUb8KS57gUYqL51j2+JE=\"));\n_c2 = Story;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c3 = Object(_util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Story, _Story_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Story$memo\");\n$RefreshReg$(_c2, \"Story\");\n$RefreshReg$(_c3, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9TdG9yeS9TdG9yeS5qcz9lZWI1Il0sIm5hbWVzIjpbIlN0b3J5IiwibWVtbyIsInN0b3J5SWQiLCJ1c2VTdGF0ZSIsInN0b3J5RGF0YSIsInNldFN0b3J5RGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJnZXRTaW5nbGVTdG9yeSIsInRoZW4iLCJ0aXRsZSIsInR5cGUiLCJtYXBUaW1lIiwidGltZSIsImJ5Iiwid2l0aFN0eWxlcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0Msa0RBQUksU0FBQyxTQUFTRCxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVkUsT0FBVSxRQUFWQSxPQUFVOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEVBQUQsQ0FEQztBQUFBLE1BQ3BDQyxTQURvQztBQUFBLE1BQ3pCQyxZQUR5Qjs7QUFHM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFTLENBQUNLLEdBQXRCO0FBQ0FDLGtGQUFjLENBQUNSLE9BQUQsQ0FBZCxDQUF3QlMsSUFBeEIsQ0FBNkIsVUFBQVAsU0FBUztBQUFBLGFBQUlBLFNBQVMsSUFBSUEsU0FBUyxDQUFDSyxHQUF2QixJQUE4QkosWUFBWSxDQUFDRCxTQUFELENBQTlDO0FBQUEsS0FBdEM7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBT0EsU0FBT0EsU0FBUyxJQUFJQSxTQUFTLENBQUNLLEdBQXZCLEdBRUgsTUFBQyx3REFBRDtBQUFhLGFBQVMsRUFBQyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFRLGNBQVUsRUFBRSxJQUFwQjtBQUEwQixRQUFJLEVBQUVMLFNBQVMsQ0FBQ0ssR0FBMUM7QUFBK0MsU0FBSyxFQUFFTCxTQUFTLENBQUNRLEtBQWhFO0FBQXVFLFVBQU0sRUFBQyxRQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCUixTQUFTLENBQUNRLEtBQWxDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF3Q1IsU0FBUyxDQUFDUyxJQUFsRCxFQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNDLHFEQUFPLENBQUNWLFNBQVMsQ0FBQ1csSUFBWCxDQUE1QyxDQUZGLENBRkYsRUFNRTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVVYLFNBQVMsQ0FBQ1ksRUFBcEIsRUFBaEQsQ0FORixDQURGLEVBU0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FGRyxHQWNILElBZEo7QUFlRCxDQXpCaUIsa0NBQWxCO01BQU1oQixLO0FBMkJTLHFFQUFBaUIsbUZBQVUsQ0FBQ2pCLEtBQUQsRUFBUWtCLG9EQUFSLENBQXpCO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9TdG9yeS9TdG9yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0U2luZ2xlU3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oYWNrZXJOZXdzQXBpJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uLy4uLy4uL3V0aWwvc3R5bGVDb21wb25lbnRVdGlsL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHN0eWxlcywgeyBTdHlsZWRTdG9yeSB9IGZyb20gJy4vU3Rvcnkuc3R5bGUnO1xuaW1wb3J0IEFuY2hvciBmcm9tICcuLi8uLi9hdG9tcy9BbmNob3InXG5pbXBvcnQgeyBtYXBUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCdcblxuY29uc3QgU3RvcnkgPSBtZW1vKGZ1bmN0aW9uIFN0b3J5KHtzdG9yeUlkfSkge1xuICBjb25zdCBbc3RvcnlEYXRhLCBzZXRTdG9yeURhdGFdID0gdXNlU3RhdGUoe30pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyB0bz17c3RvcnlEYXRhLnVybH0gdGl0bGU9e3N0b3J5RGF0YS50aXRsZX1cbiAgICBjb25zb2xlLmxvZyhzdG9yeURhdGEudXJsKVxuICAgIGdldFNpbmdsZVN0b3J5KHN0b3J5SWQpLnRoZW4oc3RvcnlEYXRhID0+IHN0b3J5RGF0YSAmJiBzdG9yeURhdGEudXJsICYmIHNldFN0b3J5RGF0YShzdG9yeURhdGEpKVxuICB9LCBbXSk7XG4gIFxuICBcbiAgcmV0dXJuIHN0b3J5RGF0YSAmJiBzdG9yeURhdGEudXJsXG4gICAgPyAoXG4gICAgICA8U3R5bGVkU3RvcnkgY2xhc3NOYW1lPVwicm93IGNvbC14cy0xMlwiPlxuICAgICAgICA8QW5jaG9yIGZvcmNlQ2xpY2s9e3RydWV9IGhyZWY9e3N0b3J5RGF0YS51cmx9IHRpdGxlPXtzdG9yeURhdGEudGl0bGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57c3RvcnlEYXRhLnRpdGxlfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZC1yb3cgcm93IG1pZGRsZS14cyBiZXR3ZWVuLXhzXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXdzLXR5cGVcIj57YE5ld3MgVHlwZTogJHtzdG9yeURhdGEudHlwZX1gfTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0b3J5LXBvc3RlZC10aW1lXCI+e21hcFRpbWUoc3RvcnlEYXRhLnRpbWUpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJtaXR0ZWQtbmFtZVwiPntgU3VibWl0dGVkIEJ5OiBgfTxzcGFuPntgJHtzdG9yeURhdGEuYnl9YH08L3NwYW4+PC9wPlxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm1pZC1saW5lXCIgLz5cbiAgICAgIDwvU3R5bGVkU3Rvcnk+XG4gICAgKVxuICAgIDogbnVsbFxufSk7XG4gXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKFN0b3J5LCBzdHlsZXMpO1xuXG5leHBvcnQgeyBTdG9yeSBhcyBTdG9yeVZhbmlsbGEgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Story/Story.js\n");

/***/ })

})