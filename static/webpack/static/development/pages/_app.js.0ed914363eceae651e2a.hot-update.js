webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/molecules/Search/Search.js":
/*!***********************************************!*\
  !*** ./components/molecules/Search/Search.js ***!
  \***********************************************/
/*! exports provided: default, SearchVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchVanilla\", function() { return Search; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/styleComponentUtil/withStyles */ \"./util/styleComponentUtil/withStyles.js\");\n/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.style */ \"./components/molecules/Search/Search.style.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/molecules/Search/Search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var className = _ref.className;\n  var searchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var buttonInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var searchAnimation = function searchAnimation() {\n    console.log(searchInput.current.classList);\n    searchBtn.classList.toggle(\"close\");\n    input.classList.toggle(\"square\");\n  };\n\n  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledSearch\"], {\n    className: \"\".concat(className),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    id: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"input\",\n    \"class\": \"input\",\n    id: \"search-input\",\n    ref: searchInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"reset\",\n    \"class\": \"search\",\n    id: \"search-btn\",\n    onClick: searchAnimation,\n    ref: buttonInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Search, \"043bey7C06/qIu8sU3N1msz0P9o=\");\n\n_c = Search;\nSearch.propTypes = {};\nSearch.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Search, _Search_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Search\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2gvU2VhcmNoLmpzPzY0ZDEiXSwibmFtZXMiOlsiU2VhcmNoIiwiY2xhc3NOYW1lIiwic2VhcmNoSW5wdXQiLCJ1c2VSZWYiLCJidXR0b25JbnB1dCIsInNlYXJjaEFuaW1hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY2xhc3NMaXN0Iiwic2VhcmNoQnRuIiwidG9nZ2xlIiwiaW5wdXQiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJ3aXRoU3R5bGVzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBaUI7QUFBQTs7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDN0IsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxFQUExQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7O0FBRUQsTUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBVyxDQUFDTSxPQUFaLENBQW9CQyxTQUFoQztBQUNBQyxhQUFTLENBQUNELFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0FDLFNBQUssQ0FBQ0gsU0FBTixDQUFnQkUsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDRCxHQUpEOztBQU1BLFNBQ0UsTUFBQywwREFBRDtBQUFjLGFBQVMsWUFBS1YsU0FBTCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsYUFBTSxPQUF0QztBQUE4QyxNQUFFLEVBQUMsY0FBakQ7QUFBZ0UsT0FBRyxFQUFFQyxXQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGFBQU0sUUFBM0I7QUFBb0MsTUFBRSxFQUFDLFlBQXZDO0FBQW9ELFdBQU8sRUFBRUcsZUFBN0Q7QUFBOEUsT0FBRyxFQUFFRCxXQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBUUQsQ0FsQkQ7O0dBQU1KLE07O0tBQUFBLE07QUFvQk5BLE1BQU0sQ0FBQ2EsU0FBUCxHQUFtQixFQUFuQjtBQUVBYixNQUFNLENBQUNjLFlBQVAsR0FBc0IsRUFBdEI7QUFFZSxxRUFBQUMsbUZBQVUsQ0FBQ2YsTUFBRCxFQUFTZ0IscURBQVQsQ0FBekI7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaC9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vLi4vLi4vdXRpbC9zdHlsZUNvbXBvbmVudFV0aWwvd2l0aFN0eWxlcyc7XG5pbXBvcnQgc3R5bGVzLCB7IFN0eWxlZFNlYXJjaCB9IGZyb20gJy4vU2VhcmNoLnN0eWxlJztcblxuXG5cbmNvbnN0IFNlYXJjaCA9ICh7Y2xhc3NOYW1lfSkgPT4ge1xuICAgY29uc3Qgc2VhcmNoSW5wdXQgPSB1c2VSZWYoKTtcbiAgIGNvbnN0IGJ1dHRvbklucHV0ID0gdXNlUmVmKCk7XG4gIFxuICBjb25zdCBzZWFyY2hBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXQuY3VycmVudC5jbGFzc0xpc3QpXG4gICAgc2VhcmNoQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZVwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwic3F1YXJlXCIpO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTZWFyY2ggY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH0+XG4gICAgICA8Zm9ybSBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0XCIgY2xhc3M9XCJpbnB1dFwiIGlkPVwic2VhcmNoLWlucHV0XCIgcmVmPXtzZWFyY2hJbnB1dH0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwicmVzZXRcIiBjbGFzcz1cInNlYXJjaFwiIGlkPVwic2VhcmNoLWJ0blwiIG9uQ2xpY2s9e3NlYXJjaEFuaW1hdGlvbn0gcmVmPXtidXR0b25JbnB1dH0+PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9TdHlsZWRTZWFyY2g+XG4gIClcbn07XG5cblNlYXJjaC5wcm9wVHlwZXMgPSB7fTtcblxuU2VhcmNoLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKFNlYXJjaCwgc3R5bGVzKTtcblxuZXhwb3J0IHsgU2VhcmNoIGFzIFNlYXJjaFZhbmlsbGEgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Search/Search.js\n");

/***/ })

})