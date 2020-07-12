module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-page-transitions"
var external_next_page_transitions_ = __webpack_require__("57kg");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled/modern-normalize"
var modern_normalize_ = __webpack_require__("8nsp");
var modern_normalize_default = /*#__PURE__*/__webpack_require__.n(modern_normalize_);

// CONCATENATED MODULE: ./util/styleComponentUtil/globalStyles.js


const GlobalStyles = external_styled_components_["createGlobalStyle"]`
  body {
    background: ${({
  theme
}) => theme.body};
    color: ${({
  theme
}) => theme.text};
    font-family: BalooDa-Regular, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  main {
    margin-top: 7rem;
  }
  
  @font-face {
    font-family: 'BalooDa-Regular';
    src: url('/fonts/BalooDa2-Regular.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
    @font-face {
    font-family: 'BalooDa-Bold';
    src: url('/fonts/BalooDa2-Bold.ttf');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  
  @media only screen and (max-width : 640px) {
    .is-mobile {
      display: none;
    }
  }
  
  ${modern_normalize_default.a}
  
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${100}ms, transform ${100}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${100}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${100}ms;
  }
  `;
// EXTERNAL MODULE: ./public/styles/vendor/index.css
var vendor = __webpack_require__("5v/5");

// EXTERNAL MODULE: ./util/styleComponentUtil/withStyles.js
var withStyles = __webpack_require__("5pVi");

// CONCATENATED MODULE: ./components/organisms/ThemeToggler/ThemeToggler.style.js

/* harmony default export */ var ThemeToggler_style = (Object(external_styled_components_["css"])([".fa-sun-o{font-size:24px;}"]));
const Button = external_styled_components_default.a.button.withConfig({
  componentId: "hho54j-0"
})(["{background:transparent;border:none;color:", ";border-radius:30px;outline:none;cursor:pointer;font-size:0.8rem;padding:0 0.6rem;.fa-sun-o{font-size:30px;}}"], ({
  theme
}) => theme.text);
// CONCATENATED MODULE: ./components/organisms/ThemeToggler/ThemeToggler.js
var __jsx = external_react_default.a.createElement;




const ThemeToggler = ({
  theme,
  toggleTheme
}) => {
  return __jsx("div", {
    className: "row end-xs col-xs-2 col-xs-offset-1 col-lg-1"
  }, __jsx(Button, {
    onClick: toggleTheme
  }, __jsx("i", {
    className: "fa fa-sun-o",
    "aria-hidden": "true"
  })));
};

/* harmony default export */ var ThemeToggler_ThemeToggler = (Object(withStyles["a" /* default */])(ThemeToggler, ThemeToggler_style));

// CONCATENATED MODULE: ./components/organisms/ThemeToggler/index.js

// CONCATENATED MODULE: ./components/molecules/Search/Search.style.js

/* harmony default export */ var Search_style = (Object(external_styled_components_["css"])([""]));
const StyledSearch = external_styled_components_default.a.div.withConfig({
  componentId: "sc-1li6vwi-0"
})(["{position:relative;input{box-sizing:border-box;width:20px;height:20px;border:3px solid ", ";border-radius:50%;background:none;color:", ";font-size:16px;font-weight:400;font-family:Roboto;outline:0;transition:width 0.4s ease-in-out,border-radius 0.8s ease-in-out,padding 0.2s;transition-delay:0.4s;}.search{background:none;position:absolute;top:0px;right:0;height:30px;width:30px;padding:0;border-radius:100%;outline:0;border:0;color:inherit;cursor:pointer;transition:0.2s ease-in-out;&:before{content:\"\";position:absolute;width:12px;height:2px;background-color:", ";-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin-top:9px;margin-left:3px;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}}.close{-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;-webkit-transition-delay:0.4s;transition-delay:0.4s;&:before{content:\"\";position:absolute;width:20px;height:3px;margin-top:-1px;margin-left:-13px;background-color:", ";-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}&::after{content:\"\";position:absolute;width:20px;height:3px;background-color:", ";margin-top:-1px;margin-left:-13px;cursor:pointer;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}}.square{box-sizing:border-box;padding:0 40px 0 10px;width:300px;height:30px;border:none;border-bottom:2px solid ", ";border-radius:0;background:none;color:", ";font-family:", ";font-size:22px;font-weight:400;outline:0;-webkit-transition:width 0.4s ease-in-out,border-radius 0.4s ease-in-out,padding 0.2s;transition:width 0.4s ease-in-out,border-radius 0.4s ease-in-out,padding 0.2s;-webkit-transition-delay:0.4s,0s,0.4s;transition-delay:0.4s,0s,0.4s;@media only screen and (max-width:640px){width:230px;}}}"], ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.text, ({
  theme
}) => theme.highLight, ({
  theme
}) => theme.text, ({
  theme
}) => theme.fontFamilyRegular);
// EXTERNAL MODULE: ./util/index.js
var util = __webpack_require__("4WT4");

// CONCATENATED MODULE: ./components/molecules/Search/Search.js
var Search_jsx = external_react_default.a.createElement;





const Search = ({
  className
}) => {
  const searchInput = Object(external_react_["useRef"])();
  const buttonInput = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    if (Object(util["a" /* isMobile */])()) {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    }
  }, []);

  const searchAnimation = () => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };

  return Search_jsx(StyledSearch, {
    className: `${className} row end-xs col-xs-6 col-lg-4`
  }, Search_jsx("form", {
    id: "content"
  }, Search_jsx("input", {
    type: "text",
    name: "input",
    class: "input",
    placeholder: Object(util["a" /* isMobile */])() ? 'Search' : '',
    id: "search-input",
    ref: searchInput
  }), Search_jsx("button", {
    type: "reset",
    class: "search",
    id: "search-btn",
    onClick: !Object(util["a" /* isMobile */])() && searchAnimation,
    ref: buttonInput
  })));
};

Search.defaultProps = {};
/* harmony default export */ var Search_Search = (Object(withStyles["a" /* default */])(Search, Search_style));

// CONCATENATED MODULE: ./components/molecules/Search/index.js

// CONCATENATED MODULE: ./components/organisms/Header/Header.style.js

/* harmony default export */ var Header_style = (Object(external_styled_components_["css"])([""]));
const StyledHeader = external_styled_components_default.a.header.withConfig({
  componentId: "ejf1oe-0"
})(["{width:100%;top:0;background-color:", ";box-shadow:rgba(0,0,0,0.05) 0px 4px 8px 0px;position:fixed;min-height:4.6rem;z-index:101;.header-logo{color:", ";font-family:", ";}.header-container{min-height:4.6rem;}}"], ({
  theme
}) => theme.body, ({
  theme
}) => theme.highLight, props => props.theme.fontFamilyRegular);
// CONCATENATED MODULE: ./components/organisms/Header/Header.js
var Header_jsx = external_react_default.a.createElement;


 // import Filter from '../../molecules/Filter';




const Header = ({
  theme,
  themeToggler,
  className
}) => {
  return Header_jsx(StyledHeader, null, Header_jsx("div", {
    className: `container ${className}`
  }, Header_jsx("div", {
    className: "row middle-xs between-xs header-container"
  }, Header_jsx("h1", {
    className: "header-logo row end-xs col-lg-2 is-mobile"
  }, "Top News"), Header_jsx("div", {
    className: "row end-xs col-xs-12 col-lg-10"
  }, Header_jsx(Search_Search, null), Header_jsx(ThemeToggler_ThemeToggler, {
    theme: theme,
    toggleTheme: themeToggler
  })))));
};

Header.defaultProps = {};
/* harmony default export */ var Header_Header = (Object(withStyles["a" /* default */])(Header, Header_style));

// CONCATENATED MODULE: ./components/organisms/Header/index.js

// CONCATENATED MODULE: ./util/styleComponentUtil/Themes.js
const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  highLight: '#DC3D24',
  fontFamilyRegular: 'BalooDa-Regular'
};
const darkTheme = {
  // body: '#363537',
  body: '#232B2B',
  text: '#FAFAFA',
  highLight: '#DC3D24',
  toggleBorder: '#6B8096',
  background: '#232B2B',
  fontFamilyRegular: 'BalooDa-Regular'
};
// CONCATENATED MODULE: ./util/useDarkMode.js

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])('light');
  const {
    0: mountedComponent,
    1: setMountedComponent
  } = Object(external_react_["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => theme === 'light' ? setMode('dark') : setMode('light');

  Object(external_react_["useEffect"])(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};
// CONCATENATED MODULE: ./components/templates/Layout/Layout.js
var Layout_jsx = external_react_default.a.createElement;

 // Theming





const Layout = ({
  children,
  className
}) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return Layout_jsx("div", null);
  return Layout_jsx(external_styled_components_["ThemeProvider"], {
    theme: themeMode
  }, Layout_jsx(Header_Header, {
    theme: theme,
    themeToggler: themeToggler
  }), Layout_jsx("main", {
    className: `${className || ''} container`
  }, Layout_jsx("div", {
    className: "vertical-rule"
  }), Layout_jsx("div", {
    className: "col-xs-12 col-sm-11 col-sm-offset-2 col-lg-10 col-lg-offset-2"
  }, children)));
};

/* harmony default export */ var Layout_Layout = (Layout);
// CONCATENATED MODULE: ./components/templates/Layout/index.js

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Loader.js

var Loader_jsx = external_react_default.a.createElement;


const Loader = () => Loader_jsx("div", {
  className: "jsx-500249223" + " " + "loader"
}, Loader_jsx(style_default.a, {
  id: "500249223"
}, [".loader.jsx-500249223{border:8px solid #f3f3f3;border-top:8px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:spin-jsx-500249223 2s linear infinite;animation:spin-jsx-500249223 2s linear infinite;margin-left:auto;margin-right:auto;margin-top:40px;}", "@-webkit-keyframes spin-jsx-500249223{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes spin-jsx-500249223{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));

/* harmony default export */ var components_Loader = (Loader);
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;





const TIMEOUT = 100;

function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_next_page_transitions_["PageTransition"], {
    timeout: TIMEOUT,
    classNames: "page-transition",
    loadingComponent: _app_jsx(components_Loader, null),
    loadingDelay: 500,
    loadingTimeout: {
      enter: TIMEOUT,
      exit: 0
    },
    loadingClassNames: "loading-indicator"
  }, _app_jsx(Layout_Layout, null, _app_jsx(GlobalStyles, null), _app_jsx(Component, pageProps))));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4WT4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isBrowser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapTime; });
const isBrowser = () => typeof document !== 'undefined' && document.body && false;
const isMobile = () => isBrowser() && window.innerWidth < 960;
const mapTime = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }

  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }

  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }

  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }

  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};

/***/ }),

/***/ "57kg":
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "5pVi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* The component send styles in form of an object
e.g. withStyles(WrappedComponent, {
  [DESKTOP] : <desktop styles>
  [MOBILE] : <mobile styles>
});
Note: Keys are defined in constants
If the component doesn't want to send 2 styles, it can send styles directly and not as keyed object.
*/

/* harmony default export */ __webpack_exports__["a"] = ((WrappedComponent, styles) => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(WrappedComponent).withConfig({
  componentId: "sc-1wskuc3-0"
})(["", ";", ";"], styles || '', props => props.inheritedStyles || ''));

/***/ }),

/***/ "5v/5":
/***/ (function(module, exports) {



/***/ }),

/***/ "8nsp":
/***/ (function(module, exports) {

module.exports = require("@styled/modern-normalize");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });