webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/Anchor/Anchor.js":
/*!*******************************************!*\
  !*** ./components/atoms/Anchor/Anchor.js ***!
  \*******************************************/
/*! exports provided: default, AnchorVanilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnchorVanilla\", function() { return Anchor; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/styleComponentUtil/withStyles */ \"./util/styleComponentUtil/withStyles.js\");\n/* harmony import */ var _Anchor_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Anchor.style */ \"./components/atoms/Anchor/Anchor.style.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gunsood/Documents/Projects/Hacker_News_Article_App/hacker-news-app/components/atoms/Anchor/Anchor.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n/**\n * Anchor component to handle all the click events\n * @module Anchor\n */\n\n\n\n\n\nvar Anchor = function Anchor(props) {\n  var children = props.children,\n      to = props.to,\n      as = props.as,\n      className = props.className,\n      noLink = props.noLink,\n      inheritedStyles = props.inheritedStyles,\n      handleLinkClick = props.handleLinkClick,\n      shallow = props.shallow,\n      scroll = props.scroll,\n      forceClick = props.forceClick,\n      hoverAnimation = props.hoverAnimation,\n      viewmorebutton = props.viewmorebutton,\n      target = props.target,\n      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"children\", \"to\", \"as\", \"className\", \"noLink\", \"inheritedStyles\", \"handleLinkClick\", \"shallow\", \"scroll\", \"forceClick\", \"hoverAnimation\", \"viewmorebutton\", \"target\"]);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: to,\n    as: as,\n    shallow: shallow,\n    scroll: scroll,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, forceClick ? __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"\".concat(className, \" \").concat(hoverAnimation ? 'hover-animation' : ''),\n    onClick: handleLinkClick,\n    target: target,\n    rel: target ? 'noopener' : null\n  }, other, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), children) : __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"\".concat(className)\n  }, other, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), children));\n};\n\n_c = Anchor;\nAnchor.defaultProps = {\n  noLink: false,\n  to: '',\n  as: '',\n  inheritedStyles: '',\n  shallow: false,\n  scroll: true,\n  forceClick: false,\n  handleLinkClick: 'function',\n  viewmorebutton: 'true'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_util_styleComponentUtil_withStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Anchor, _Anchor_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Anchor\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL0FuY2hvci9BbmNob3IuanM/Y2Y1ZiJdLCJuYW1lcyI6WyJBbmNob3IiLCJwcm9wcyIsImNoaWxkcmVuIiwidG8iLCJhcyIsImNsYXNzTmFtZSIsIm5vTGluayIsImluaGVyaXRlZFN0eWxlcyIsImhhbmRsZUxpbmtDbGljayIsInNoYWxsb3ciLCJzY3JvbGwiLCJmb3JjZUNsaWNrIiwiaG92ZXJBbmltYXRpb24iLCJ2aWV3bW9yZWJ1dHRvbiIsInRhcmdldCIsIm90aGVyIiwiZGVmYXVsdFByb3BzIiwid2l0aFN0eWxlcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFFcEJDLFFBRm9CLEdBZ0JsQkQsS0FoQmtCLENBRXBCQyxRQUZvQjtBQUFBLE1BR3BCQyxFQUhvQixHQWdCbEJGLEtBaEJrQixDQUdwQkUsRUFIb0I7QUFBQSxNQUlwQkMsRUFKb0IsR0FnQmxCSCxLQWhCa0IsQ0FJcEJHLEVBSm9CO0FBQUEsTUFLcEJDLFNBTG9CLEdBZ0JsQkosS0FoQmtCLENBS3BCSSxTQUxvQjtBQUFBLE1BTXBCQyxNQU5vQixHQWdCbEJMLEtBaEJrQixDQU1wQkssTUFOb0I7QUFBQSxNQU9wQkMsZUFQb0IsR0FnQmxCTixLQWhCa0IsQ0FPcEJNLGVBUG9CO0FBQUEsTUFRcEJDLGVBUm9CLEdBZ0JsQlAsS0FoQmtCLENBUXBCTyxlQVJvQjtBQUFBLE1BU3BCQyxPQVRvQixHQWdCbEJSLEtBaEJrQixDQVNwQlEsT0FUb0I7QUFBQSxNQVVwQkMsTUFWb0IsR0FnQmxCVCxLQWhCa0IsQ0FVcEJTLE1BVm9CO0FBQUEsTUFXcEJDLFVBWG9CLEdBZ0JsQlYsS0FoQmtCLENBV3BCVSxVQVhvQjtBQUFBLE1BWXBCQyxjQVpvQixHQWdCbEJYLEtBaEJrQixDQVlwQlcsY0Fab0I7QUFBQSxNQWFwQkMsY0Fib0IsR0FnQmxCWixLQWhCa0IsQ0FhcEJZLGNBYm9CO0FBQUEsTUFjcEJDLE1BZG9CLEdBZ0JsQmIsS0FoQmtCLENBY3BCYSxNQWRvQjtBQUFBLE1BZWpCQyxLQWZpQixzR0FnQmxCZCxLQWhCa0I7O0FBa0J0QixTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVFLEVBQVo7QUFBZ0IsTUFBRSxFQUFFQyxFQUFwQjtBQUF3QixXQUFPLEVBQUVLLE9BQWpDO0FBQTBDLFVBQU0sRUFBRUMsTUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxVQUFVLEdBQ1Q7QUFDRSxhQUFTLFlBQUtOLFNBQUwsY0FBa0JPLGNBQWMsR0FBRyxpQkFBSCxHQUF1QixFQUF2RCxDQURYO0FBRUUsV0FBTyxFQUFFSixlQUZYO0FBR0UsVUFBTSxFQUFFTSxNQUhWO0FBSUUsT0FBRyxFQUFFQSxNQUFNLEdBQUcsVUFBSCxHQUFnQjtBQUo3QixLQUtNQyxLQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNR2IsUUFOSCxDQURTLEdBVVQ7QUFDRSxhQUFTLFlBQUtHLFNBQUw7QUFEWCxLQUVNVSxLQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFHR2IsUUFISCxDQVhKLENBREY7QUFvQkQsQ0F0Q0Q7O0tBQU1GLE07QUF3Q05BLE1BQU0sQ0FBQ2dCLFlBQVAsR0FBc0I7QUFDcEJWLFFBQU0sRUFBRSxLQURZO0FBRXBCSCxJQUFFLEVBQUUsRUFGZ0I7QUFHcEJDLElBQUUsRUFBRSxFQUhnQjtBQUlwQkcsaUJBQWUsRUFBRSxFQUpHO0FBS3BCRSxTQUFPLEVBQUUsS0FMVztBQU1wQkMsUUFBTSxFQUFFLElBTlk7QUFPcEJDLFlBQVUsRUFBRSxLQVBRO0FBUXBCSCxpQkFBZSxFQUFFLFVBUkc7QUFTcEJLLGdCQUFjLEVBQUU7QUFUSSxDQUF0QjtBQVllLHFFQUFBSSxtRkFBVSxDQUFDakIsTUFBRCxFQUFTa0IscURBQVQsQ0FBekI7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvQW5jaG9yL0FuY2hvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5jaG9yIGNvbXBvbmVudCB0byBoYW5kbGUgYWxsIHRoZSBjbGljayBldmVudHNcbiAqIEBtb2R1bGUgQW5jaG9yXG4gKi9cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgdHlwZSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi8uLi8uLi91dGlsL3N0eWxlQ29tcG9uZW50VXRpbC93aXRoU3R5bGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BbmNob3Iuc3R5bGUnO1xuXG5jb25zdCBBbmNob3IgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICB0byxcbiAgICBhcyxcbiAgICBjbGFzc05hbWUsXG4gICAgbm9MaW5rLFxuICAgIGluaGVyaXRlZFN0eWxlcyxcbiAgICBoYW5kbGVMaW5rQ2xpY2ssXG4gICAgc2hhbGxvdyxcbiAgICBzY3JvbGwsXG4gICAgZm9yY2VDbGljayxcbiAgICBob3ZlckFuaW1hdGlvbixcbiAgICB2aWV3bW9yZWJ1dHRvbixcbiAgICB0YXJnZXQsXG4gICAgLi4ub3RoZXJcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17dG99IGFzPXthc30gc2hhbGxvdz17c2hhbGxvd30gc2Nyb2xsPXtzY3JvbGx9PlxuICAgICAge2ZvcmNlQ2xpY2sgPyAoXG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7aG92ZXJBbmltYXRpb24gPyAnaG92ZXItYW5pbWF0aW9uJyA6ICcnfWB9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTGlua0NsaWNrfVxuICAgICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICAgIHJlbD17dGFyZ2V0ID8gJ25vb3BlbmVyJyA6IG51bGx9XG4gICAgICAgICAgey4uLm90aGVyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICB7Li4ub3RoZXJ9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5BbmNob3IuZGVmYXVsdFByb3BzID0ge1xuICBub0xpbms6IGZhbHNlLFxuICB0bzogJycsXG4gIGFzOiAnJyxcbiAgaW5oZXJpdGVkU3R5bGVzOiAnJyxcbiAgc2hhbGxvdzogZmFsc2UsXG4gIHNjcm9sbDogdHJ1ZSxcbiAgZm9yY2VDbGljazogZmFsc2UsXG4gIGhhbmRsZUxpbmtDbGljazogJ2Z1bmN0aW9uJyxcbiAgdmlld21vcmVidXR0b246ICd0cnVlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoQW5jaG9yLCBzdHlsZXMpO1xuXG5leHBvcnQgeyBBbmNob3IgYXMgQW5jaG9yVmFuaWxsYSB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/Anchor/Anchor.js\n");

/***/ })

})