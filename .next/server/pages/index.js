(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./component/Layout/Layout.tsx + 1 modules
var Layout = __webpack_require__(258);
;// CONCATENATED MODULE: ./utils/Template.ts
/** Dummy user data. */
const TemplateData = [{
  keyName: 'key'
}];
;// CONCATENATED MODULE: ./pages/index.tsx






const IndexPage = prop => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "main"
      })
    })
  });
};

IndexPage.getInitialProps = async () => {
  const template = TemplateData;
  return {
    template
  };
};

/* harmony default export */ var pages = (IndexPage);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [258], function() { return __webpack_exec__(894); });
module.exports = __webpack_exports__;

})();