webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/molecules/Search/Search.js":
/*!***********************************************!*\
  !*** ./components/molecules/Search/Search.js ***!
  \***********************************************/
/*! exports provided: default, SearchVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchVanilla\", function() { return Search; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/styleComponentUtil/withStyles */ \"./util/styleComponentUtil/withStyles.js\");\n/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.style */ \"./components/molecules/Search/Search.style.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/index */ \"./util/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/molecules/Search/Search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var className = _ref.className;\n  var searchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var buttonInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var input = document.getElementById(\"search-input\");\n    var searchBtn = document.getElementById(\"search-btn\");\n\n    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__[\"isMobile\"])()) {\n      searchBtn.classList.toggle(\"close\");\n      input.classList.toggle(\"square\");\n    }\n  }, []);\n\n  var searchAnimation = function searchAnimation() {\n    var input = document.getElementById(\"search-input\");\n    var searchBtn = document.getElementById(\"search-btn\");\n    searchBtn.classList.toggle(\"close\");\n    input.classList.toggle(\"square\");\n  };\n\n  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledSearch\"], {\n    className: \"\".concat(className, \" row end-xs col-xs-6 col-lg-4\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    id: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"input\",\n    \"class\": \"input\",\n    placeholder: \"Search\",\n    id: \"search-input\",\n    ref: searchInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"reset\",\n    \"class\": \"search\",\n    id: \"search-btn\",\n    onClick: !Object(_util_index__WEBPACK_IMPORTED_MODULE_4__[\"isMobile\"])() && searchAnimation,\n    ref: buttonInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Search, \"A2s9f8N+3vkJ0x2UtwLKAXis7vY=\");\n\n_c = Search;\nSearch.propTypes = {};\nSearch.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Search, _Search_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Search\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2gvU2VhcmNoLmpzPzY0ZDEiXSwibmFtZXMiOlsiU2VhcmNoIiwiY2xhc3NOYW1lIiwic2VhcmNoSW5wdXQiLCJ1c2VSZWYiLCJidXR0b25JbnB1dCIsInVzZUVmZmVjdCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJ0biIsImlzTW9iaWxlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2VhcmNoQW5pbWF0aW9uIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwid2l0aFN0eWxlcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWlCO0FBQUE7O0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQzdCLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sRUFBMUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWQ7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjs7QUFFQSxRQUFJRSw0REFBUSxFQUFaLEVBQWdCO0FBQ2RELGVBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsT0FBM0I7QUFDQU4sV0FBSyxDQUFDSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixRQUF2QjtBQUNEO0FBQ0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFVRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTVAsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBZDtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0FDLGFBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsT0FBM0I7QUFDQU4sU0FBSyxDQUFDSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixRQUF2QjtBQUNELEdBTEQ7O0FBT0EsU0FDRSxNQUFDLDBEQUFEO0FBQWMsYUFBUyxZQUFLWCxTQUFMLGtDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsYUFBTSxPQUF0QztBQUE4QyxlQUFXLEVBQUMsUUFBMUQ7QUFBbUUsTUFBRSxFQUFDLGNBQXRFO0FBQXFGLE9BQUcsRUFBRUMsV0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixhQUFNLFFBQTNCO0FBQW9DLE1BQUUsRUFBQyxZQUF2QztBQUFvRCxXQUFPLEVBQUUsQ0FBQ1EsNERBQVEsRUFBVCxJQUFlRyxlQUE1RTtBQUE2RixPQUFHLEVBQUVULFdBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREY7QUFRRCxDQTdCRDs7R0FBTUosTTs7S0FBQUEsTTtBQStCTkEsTUFBTSxDQUFDYyxTQUFQLEdBQW1CLEVBQW5CO0FBRUFkLE1BQU0sQ0FBQ2UsWUFBUCxHQUFzQixFQUF0QjtBQUVlLHFFQUFBQyxtRkFBVSxDQUFDaEIsTUFBRCxFQUFTaUIscURBQVQsQ0FBekI7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaC9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi8uLi8uLi91dGlsL3N0eWxlQ29tcG9uZW50VXRpbC93aXRoU3R5bGVzJztcbmltcG9ydCBzdHlsZXMsIHsgU3R5bGVkU2VhcmNoIH0gZnJvbSAnLi9TZWFyY2guc3R5bGUnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2luZGV4JztcblxuY29uc3QgU2VhcmNoID0gKHtjbGFzc05hbWV9KSA9PiB7XG4gICBjb25zdCBzZWFyY2hJbnB1dCA9IHVzZVJlZigpO1xuICAgY29uc3QgYnV0dG9uSW5wdXQgPSB1c2VSZWYoKTtcbiAgIFxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKTtcbiAgICBcbiAgICBpZiAoaXNNb2JpbGUoKSkge1xuICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZVwiKTtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJzcXVhcmVcIik7XG4gICAgfVxuICAgfSwgW10pO1xuICBcbiAgY29uc3Qgc2VhcmNoQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIik7XG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnRuXCIpO1xuICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcInNxdWFyZVwiKTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VhcmNoIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByb3cgZW5kLXhzIGNvbC14cy02IGNvbC1sZy00YH0+XG4gICAgICA8Zm9ybSBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0XCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgaWQ9XCJzZWFyY2gtaW5wdXRcIiByZWY9e3NlYXJjaElucHV0fSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJyZXNldFwiIGNsYXNzPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2gtYnRuXCIgb25DbGljaz17IWlzTW9iaWxlKCkgJiYgc2VhcmNoQW5pbWF0aW9ufSByZWY9e2J1dHRvbklucHV0fT48L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L1N0eWxlZFNlYXJjaD5cbiAgKVxufTtcblxuU2VhcmNoLnByb3BUeXBlcyA9IHt9O1xuXG5TZWFyY2guZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoU2VhcmNoLCBzdHlsZXMpO1xuXG5leHBvcnQgeyBTZWFyY2ggYXMgU2VhcmNoVmFuaWxsYSB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Search/Search.js\n");

/***/ })

})