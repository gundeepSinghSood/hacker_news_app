webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./util/styleComponentUtil/globalStyles.js":
/*!*************************************************!*\
  !*** ./util/styleComponentUtil/globalStyles.js ***!
  \*************************************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_modern_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled/modern-normalize */ \"./node_modules/@styled/modern-normalize/dist/index.js\");\n/* harmony import */ var _styled_modern_normalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_modern_normalize__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  body {\\n    background: \", \";\\n    color: \", \";\\n    font-family: BalooDa-Regular, Arial, Roboto, sans-serif;\\n    transition: all 0.50s linear;\\n  }\\n  \\n  main {\\n    margin-top: 7rem;\\n  }\\n  \\n  @font-face {\\n    font-family: 'BalooDa-Regular';\\n    src: url('/fonts/BalooDa2-Regular.ttf');\\n    font-weight: 400;\\n    font-style: normal;\\n    font-display: swap;\\n  }\\n  \\n    @font-face {\\n    font-family: 'BalooDa-Bold';\\n    src: url('/fonts/BalooDa2-Bold.ttf');\\n    font-weight: 900;\\n    font-style: normal;\\n    font-display: swap;\\n  }\\n  \\n  @media only screen and (max-width : 320px) {\\n    .is-mobile {\\n      display: none;\\n    }\\n  }\\n  \\n  \", \"\\n  \\n  .page-transition-enter {\\n    opacity: 0;\\n    transform: translate3d(0, 20px, 0);\\n  }\\n  .page-transition-enter-active {\\n    opacity: 1;\\n    transform: translate3d(0, 0, 0);\\n    transition: opacity \", \"ms, transform \", \"ms;\\n  }\\n  .page-transition-exit {\\n    opacity: 1;\\n  }\\n  .page-transition-exit-active {\\n    opacity: 0;\\n    transition: opacity \", \"ms;\\n  }\\n  .loading-indicator-appear,\\n  .loading-indicator-enter {\\n    opacity: 0;\\n  }\\n  .loading-indicator-appear-active,\\n  .loading-indicator-enter-active {\\n    opacity: 1;\\n    transition: opacity \", \"ms;\\n  }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.body;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.text;\n}, _styled_modern_normalize__WEBPACK_IMPORTED_MODULE_2___default.a, 100, 100, 100, 100);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL3N0eWxlQ29tcG9uZW50VXRpbC9nbG9iYWxTdHlsZXMuanM/ZjQ0ZSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiYm9keSIsInRleHQiLCJtb2Rlcm5Ob3JtYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxZQUFZLEdBQUdDLDJFQUFILG9CQUVQO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFyQjtBQUFBLENBRk8sRUFHWjtBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0UsSUFBckI7QUFBQSxDQUhZLEVBa0NyQkMsK0RBbENxQixFQTJDQyxHQTNDRCxFQTJDcUIsR0EzQ3JCLEVBa0RDLEdBbERELEVBMkRDLEdBM0RELENBQWxCIiwiZmlsZSI6Ii4vdXRpbC9zdHlsZUNvbXBvbmVudFV0aWwvZ2xvYmFsU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgbW9kZXJuTm9ybWFsaXplIGZyb20gXCJAc3R5bGVkL21vZGVybi1ub3JtYWxpemVcIjtcblxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9keX07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgZm9udC1mYW1pbHk6IEJhbG9vRGEtUmVndWxhciwgQXJpYWwsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41MHMgbGluZWFyO1xuICB9XG4gIFxuICBtYWluIHtcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICB9XG4gIFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vRGEtUmVndWxhcic7XG4gICAgc3JjOiB1cmwoJy9mb250cy9CYWxvb0RhMi1SZWd1bGFyLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuICBcbiAgICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vRGEtQm9sZCc7XG4gICAgc3JjOiB1cmwoJy9mb250cy9CYWxvb0RhMi1Cb2xkLnR0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMzIwcHgpIHtcbiAgICAuaXMtbW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAke21vZGVybk5vcm1hbGl6ZX1cbiAgXG4gIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbiAgfVxuICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHsxMDB9bXMsIHRyYW5zZm9ybSAkezEwMH1tcztcbiAgfVxuICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7MTAwfW1zO1xuICB9XG4gIC5sb2FkaW5nLWluZGljYXRvci1hcHBlYXIsXG4gIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLWFjdGl2ZSxcbiAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7MTAwfW1zO1xuICB9XG4gIGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/styleComponentUtil/globalStyles.js\n");

/***/ })

})