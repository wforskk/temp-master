exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./component/Layout/Layout.module.scss
var Layout_module = __webpack_require__(958);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./component/AppBar/AppBar.module.scss
var AppBar_module = __webpack_require__(351);
var AppBar_module_default = /*#__PURE__*/__webpack_require__.n(AppBar_module);
;// CONCATENATED MODULE: ./component/AppBar/AppBar.tsx




const AppBar = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: (AppBar_module_default()).appBar
});

/* harmony default export */ var AppBar_AppBar = (AppBar);
;// CONCATENATED MODULE: ./component/Layout/Layout.tsx






const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: (Layout_module_default()).appWrapper,
  children: [/*#__PURE__*/jsx_runtime_.jsx(AppBar_AppBar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Layout_module_default()).main,
    children: children
  }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Layout_module_default()).footer,
    children: "footer"
  })]
});

/* harmony default export */ var Layout_Layout = (Layout);

/***/ }),

/***/ 351:
/***/ (function(module) {

// Exports
module.exports = {
	"appBar": "AppBar_appBar__UM_fM",
	"fadeIn": "AppBar_fadeIn__1rRJV"
};


/***/ }),

/***/ 958:
/***/ (function(module) {

// Exports
module.exports = {
	"appWrapper": "Layout_appWrapper__xZvDt",
	"main": "Layout_main__2g4Bv",
	"footer": "Layout_footer__2wVCP",
	"fadeIn": "Layout_fadeIn__3E9pl"
};


/***/ })

};
;