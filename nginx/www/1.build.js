webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Brand_vue__ = __webpack_require__(57);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a3d780e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Brand_vue__ = __webpack_require__(68);
function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Brand_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a3d780e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Brand_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maikeCode_js__ = __webpack_require__(27);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    formId: {
      type: String,
      default: ''
    }
  },
  created: function created() {
    Object(__WEBPACK_IMPORTED_MODULE_0__maikeCode_js__["a" /* default */])(this.formId);
  },
  mounted: function mounted() {
    var maike = document.querySelector('#mkin' + this.formId);
    this.$refs.ifrem.append(maike);
  },

  components: {}
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/btn_bg.png?d31477fd340a42c1cb8455aa4e5910f7";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video_bg.jpg?870ce3830c37d147acf9ee352dce40a3";

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_maike_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b9bc5e8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_maike_vue__ = __webpack_require__(28);
function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8b9bc5e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_maike_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b9bc5e8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_maike_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7b982303", content, true, {});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "div[data-v-8b9bc5e8]{height:auto}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: jiantong.liu
 * @Date: 2018-08-17 16:46:53
 * @Last Modified by: jiantong.liu
 * @Last Modified time: 2018-12-06 16:07:47
 */

/* eslint-disable */
function maikeCode(formId) {
  (function (h) {
    function n(a) {
      return null === a ? null : a.scrollHeight > a.clientHeight ? a : n(a.parentNode);
    }
    function t(b) {
      if (b.data) {
        var f = JSON.parse(b.data);
        !f.height || p || q || (d.style.height = +f.height + "px");
        if (f.getter) {
          b = {};
          var f = [].concat(f.getter),
              k,
              h = f.length,
              m,
              c,
              g,
              e;
          for (k = 0; k < h; k++) {
            m = k;
            c = f[k] || {};
            c.n && (m = c.n);
            g = null;
            try {
              switch (c.t) {
                case "window":
                  e = window;
                  break;
                case "scrollParent":
                  e = n(a) || window;
                  break;
                default:
                  e = a;
              }
              if (c.e) {
                if ("rect" === c.v) {
                  g = {};
                  var l = e.getBoundingClientRect();
                  g = {
                    top: l.top,
                    left: l.left,
                    width: l.width,
                    height: l.height
                  };
                } else g = e[c.v].apply(e, [].concat(c.e)) || !0;
              } else c.s ? (e[c.v] = c.s, g = !0) : g = e[c.v] || !1;
            } catch (u) {}
            b[m] = g;
          }
          b.innerState = !p && !q;
          a.contentWindow.postMessage(JSON.stringify({ queryRes: b }), "*");
        }
      }
    }
    for (var r = h.document, b = r.documentElement; b.childNodes.length && 1 == b.lastChild.nodeType;) {
      b = b.lastChild;
    }var d = b.parentNode,
        a = r.createElement("iframe");
    d.style.overflowY = "auto";
    d.style.overflowX = "hidden";
    var p = d.style.height && "auto" !== d.style.height,
        q = "absolute" === d.style.position || window.getComputedStyle && "absolute" === window.getComputedStyle(d, null).getPropertyValue("position") || d.currentStyle && "absolute" === d.currentStyle.position;
    h.addEventListener && h.addEventListener("message", t, !1);
    a.src = "http://hwcareer.mikecrm.com/" + formId;
    a.id = "mkin" + formId;
    a.onload = function () {
      a.contentWindow.postMessage(JSON.stringify({ cif: 1 }), "*");
    };
    a.frameBorder = 0;
    a.scrolling = "no";
    a.style.display = "block";
    a.style.minWidth = "100%";
    a.style.width = "100px";
    a.style.height = "100%";
    a.style.border = "none";
    a.style.overflow = "auto";
    d.insertBefore(a, b);
  })(window);
}

/* harmony default export */ __webpack_exports__["a"] = (maikeCode);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"ifrem",staticClass:"maikeBox"})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_1.jpg?69f443c631707702f39cdaf784521a64";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_2.jpg?65f9b05fed61e4a8d7d15a424e11e7ad";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_3.jpg?3a82692f3853ff4d00b6dd8a6a273f4e";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_4.jpg?6d1c9dfb9cc89477307637f0dff21e60";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_5.jpg?22f36cf407cbb110a46960a9ea5cfa69";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tab_item_6.jpg?49f3f2632df293c637eab1514155df79";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_1.jpg?5d0f4b193c8e19af691f48332a0ba8de";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_2.jpg?556696a726ffcdc3e5765a3c7fbdd496";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_3.jpg?33b98a0b09eae3df31b509d425cac71a";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_4.jpg?35376e3f4a8c64e7dda1789107480011";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico_5.jpg?9f4423d6e6fdbdf9041fa7e62d7041b4";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/stu_img.png?dc5e5db618f418d9d26330ddda9c4145";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file_img.png?fcbe4652068022fd91d1ca5c5b185d97";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/book_img.png?7382ea688c9a1fb22cb14ffb05e97225";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_bg.jpg?bbdfab7be7db4acf13de9d85399bbf71";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/br_bg.png?db8d18391410361464d2112b535f24a7";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/center_zixun_bg.jpg?7898d49857ca36fdfb00f41d49dc0095";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag_bg_1.jpg?9dc1ea44dcc3afe9202107c93137e2e3";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tag_bg_2.jpg?45b98c29a8da36851c770fe3add1aa9b";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/br_bg_1.jpg?4db7b8f47b2fe813391f54709efb5b1d";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shixisheng_bg.jpg?73868c397373beeee212e8f410d191ea";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shixisheng_bg_color.png?c24111b54c3d2b9358650c5bfd0f2729";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zhiye_bg.jpg?c23f50e9dd2b3398eb15cd66f672e633";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zhiye_bg_color.jpg?3f5ffebdbeb516c04f996c6f96f936bb";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mingqi_bg.jpg?a0cc5bdb45b45ef5eae2971887b2bd74";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mingqi_bg_color.jpg?c069260e264ec946252e32478e135249";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bt_img.jpg?a05cb2c10a4c3d2b8ad4eb723495cc14";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bt_img1.jpg?24d5465272b9688254a8367634d7d7c4";

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_maike_maike_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(67);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import util from '@/utils';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'brandb',
  components: {
    BrFooter: __WEBPACK_IMPORTED_MODULE_0__Footer_vue__["a" /* default */],
    Maike: __WEBPACK_IMPORTED_MODULE_1__components_common_maike_maike_vue__["a" /* default */]
  },
  metaInfo: {
    title: '新东方海威时代_大学生职业发展平台_提供高薪就业的权威求职服务机构', // set a title
    meta: [{ // set meta
      name: 'keywords',
      content: '新东方，海威时代，大学生实习，留学生找工作，海归高薪就业，应届生校招，名企校招内推'
    }, {
      name: 'description',
      content: '新东方海威时代专注于大学生职业测评与规划、留学专业选择、实习背景提升、名企全职保岗，一站式求职服务，全面助力就业成长。100%保岗承诺，提供就业保障。'
    }],
    script: [{ src: 'http://lead.soperson.com/20003428/10094837.js', type: 'text/javascript' }]
    // __dangerouslyDisableSanitizers: ['script']
  },
  data: function data() {
    return {
      showHw: true,
      showHot: false,
      headline: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* default */].headline,
      activity: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* default */].activity,
      ico_list: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* default */].iconList,
      productItem: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* default */].product[0],
      left: 0,
      iss: {
        index: 0,
        check: false
      },
      isz: {
        index: 1,
        check: true
      },
      ism: {
        index: 2,
        check: true
      }
    };
  },
  mounted: function mounted() {
    // util.ssr.createBaidu();
  },

  methods: {
    mouseover: function mouseover() {
      this.showHot = false;
      this.showHw = true;
    },
    mouseover1: function mouseover1() {
      this.showHw = false;
      this.showHot = true;
    },
    open: function open() {
      /* eslint-disable */
      doyoo.util.openChat('g=10079041');
      /* eslint-enable */
    },
    changePro: function changePro(ind) {
      this.productItem = __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* default */].product[ind];
      this.left = ind * 464;
      this.iss.check = !(ind === this.iss.index);
      this.isz.check = !(ind === this.isz.index);
      this.ism.check = !(ind === this.ism.index);
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  components: {}
});

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("487f7e02", content, true, {});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(21);
exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#main *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}body,dd,div,dl,dt,form,h1,h2,h3,h4,h5,h6,input,li,ol,option,p,select,table,td,textarea,th,tr,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:400;font:inherit}ol,ul{list-style:none}button,iframe,img,input,textarea{border:none;outline:none}button,input,select,textarea{font:inherit}b,em,i,strong{font-style:normal;font-weight:400}img{vertical-align:middle}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none;color:inherit}.clearfix{zoom:1}.clearfix:after{content:\"\";display:table;clear:both}body{font-size:14px;font-family:Heiti SC,STXihei,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,Tahoma,Geneva,sans-serif}.anim-opacity2{animation:1s opacity2 0s infinite;-webkit-animation:1s opacity2 0s infinite;-moz-animation:1s opacity2 0s infinite}@keyframes opacity2{0%{opacity:0}50%{opacity:.8}to{opacity:0}}@-webkit-keyframes opacity2{0%{opacity:0}50%{opacity:.8}to{opacity:0}}@-moz-keyframes opacity2{0%{opacity:0}50%{opacity:.8}to{opacity:0}}#main{margin:0 auto;min-width:1400px;overflow:hidden;color:#333;font-family:weiranyahei,Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,\"sans-serif\"}#main a:hover{text-decoration:none}.btn{display:inline-block;width:270px;height:56px;font-size:24px;color:#333;background:url(" + escape(__webpack_require__(22)) + ") no-repeat 50%;background-size:100% 100%;cursor:pointer}.clear1{overflow:auto;zoom:1}.mt_50{margin-top:50px!important}.mt_70{margin-top:70px!important}.mt_20{margin-top:20px!important}.mr_20{margin-right:20px}.img_100{width:100%}.text_wrap{display:inline-block;width:320px;word-wrap:break-word;vertical-align:top}.bottom_color{width:444px;height:50px;position:absolute;left:0;bottom:-100px;background:#f39700;transition:.5s ease-out}.color_gr{color:#7d7a7a}.btn_stic{display:inline-block;width:132px;height:48px;background:#f18d17;border-radius:4px;line-height:48px;font-size:22px;font-weight:700;box-sizing:border-box;padding-left:22px}.t_algin{margin:20px 0;text-align:center;color:#a6a5a5}.sj{position:relative;left:50%;margin-left:-40%;width:80%;border-bottom:2px solid #7e7c7b}.sj:after{content:\" \";position:absolute;left:50%;bottom:-36px;margin:0 0 0 -9px;border:18px solid transparent;border-top-color:#7e7c7b}.title{margin-bottom:20px;font-size:28px;color:#f39700}.center{width:1460px;min-width:1460px;margin:0 auto}.center h3{padding-bottom:24px;text-align:center;font-size:48px;color:#f39700}.center h3.tit{border-bottom:2px solid #333}.center img{width:100%}.br_bg{margin-bottom:80px}.banner{position:relative}.banner img{width:100%}.banner .banner_btn{position:absolute;bottom:50px;left:50%;margin:0 0 0 -135px}.text{margin-bottom:112px;font-size:18px}.text .text_item{width:678px;padding:0 34px}.core_item{margin:0 0 24px}.core_item dd{width:880px}.core_item dd p{font-size:18px}.video{padding:50px 0 100px;background:url(" + escape(__webpack_require__(23)) + ") no-repeat 50%;background-size:100% 100%}.mark{position:absolute;width:676px;height:212px;font-size:32px;line-height:212px;color:#fff;text-align:center}.mark_active{background:rgba(169,246,188,.6);color:#333}.dl_item{margin:0 60px 36px 50px}.dl_item img{width:100%}.book_box{margin-left:50px;background:#f4f4f5;margin-top:100px;width:1370px}.book_right{font-size:22px;color:#333}.auto-wrap{word-break:break-word;width:224px;display:inline-block;vertical-align:top}.icn_list{margin-top:84px;margin-left:40px;font-size:16px}.icn_list li{margin:0 36px;text-align:center}", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99883620_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(66);
function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-99883620"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_99883620_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7b10cdfe", content, true, {});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".footer[data-v-99883620]{background:#3e3a39;padding:35px 0}.foot[data-v-99883620]{width:1155px;margin:0 auto}.foot_erl[data-v-99883620]{width:119px;float:left}.foot_err[data-v-99883620]{float:left;padding-left:20px}.foot li[data-v-99883620]{float:left}.foot_erl h3[data-v-99883620],.zhushou[data-v-99883620]{text-align:center;color:#fff;padding-top:15px}.foot_err h3[data-v-99883620]{color:#fff;text-align:center}.border-right[data-v-99883620]{border-right:1px solid #fff;padding-right:20px}.foot_add[data-v-99883620]{padding-left:50px}.foot_add h3[data-v-99883620]{color:#fff;font-size:16px;line-height:30px}", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('ul',{staticClass:"foot clear"},[_c('li',{staticClass:"border-right"},[_c('div',{staticClass:"foot_erl"},[_c('img',{staticStyle:{"width":"119px"},attrs:{"src":"http://static.zhiye.xdf.cn/hwcareer/vue/mq/images/footer_03.png"}}),_vm._v(" "),_c('h3',[_vm._v("海威小助手")])]),_vm._v(" "),_c('div',{staticClass:"foot_err"},[_c('h3',[_vm._v("热门实习/全职机会")]),_vm._v(" "),_c('h3',[_vm._v("找实习/全职干货")]),_vm._v(" "),_c('h3',[_vm._v("最新校招动态")]),_vm._v(" "),_c('h3',[_vm._v("实用简历模板")]),_vm._v(" "),_c('h3',[_vm._v("简历写作公开课")]),_vm._v(" "),_c('h3',[_vm._v("笔试练习题")])])]),_vm._v(" "),_c('li',{staticStyle:{"padding-left":"20px","padding-right":"50px"}},[_c('img',{staticStyle:{"width":"119px"},attrs:{"src":"http://static.zhiye.xdf.cn/hwcareer/vue/mq/images/footer_05.png"}}),_vm._v(" "),_c('h3',{staticClass:"zhushou"},[_vm._v("海威时代公众号")])]),_vm._v(" "),_c('li',{staticClass:"juzhong",staticStyle:{"border-top":"5px solid #b2b0b0","border-bottom":"1px solid #b2b0b0","padding":"30px 0px"}},[_c('img',{staticClass:"fl",staticStyle:{"width":"84px"},attrs:{"src":"http://static.zhiye.xdf.cn/hwcareer/vue/mq/images/footer_08.png"}}),_vm._v(" "),_c('div',{staticClass:"fl",staticStyle:{"width":"200px","padding-left":"20px"}},[_c('h3',{staticStyle:{"color":"#fff","font-size":"14px"}},[_vm._v("咨询电话：")]),_vm._v(" "),_c('h3',{staticStyle:{"color":"#fff","font-size":"24px"}},[_vm._v("010-84158667")]),_vm._v(" "),_c('h3',{staticStyle:{"color":"#fff","font-size":"14px"}},[_vm._v("周一到周五  9：00-18：00")])])]),_vm._v(" "),_c('li',{staticClass:"foot_add"},[_c('h3',[_vm._v("北京市海淀区彩和坊路8号天创科技大厦1106")]),_vm._v(" "),_c('h3',[_vm._v("1106 Tianchuang Keji PIaza Haidian District")]),_vm._v(" "),_c('h3',[_vm._v("Beijing, 100080")]),_vm._v(" "),_c('h3',[_vm._v("(86) 010-84158667")]),_vm._v(" "),_c('h3',[_vm._v("http://zhiye.xdf.cn")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    headline: [{
        pic: __webpack_require__(29),
        url: 'https://mp.weixin.qq.com/s/yYGU_0GCwSSGtgP-6yjdLw',
        title: '新东方留学产品体系升级：录取力、学术力、就业力，海威时代全面支撑就业力提升',
        container: '就在昨天，新东方前途出国召开了一场主题为“聚焦三力 全面成长”的产品体系升级战略发布会。会上提到了新东方《2018年中国留学白皮书》：调查显示，目前58%的学生希望在出国前得到就业指导，这一数据比去年同期增长了17%.....'
    }, {
        pic: __webpack_require__(30),
        url: 'https://mp.weixin.qq.com/s/Qzc4SZYjrvkxK1orI55njA',
        title: '歪！听说来了这场讲座的留学生，都拿到了心仪offer',
        container: '10月28日（本周日），新东方前途出国将举办一场国际教育展，旨在聚焦录取力、学术力和就业力，为同学们解决新留学时期的新痛点。本次教育展更有几大亮点全面来袭：亮点一：环球名企助力背景提升项目，亮点二：现场好礼送不停.....'
    }, {
        pic: __webpack_require__(31),
        url: 'https://mp.weixin.qq.com/s/eZRncYm1kRSoE45C5OCPJQ',
        title: 'WLD访谈系列 | 逼格高，待遇好？为你揭开外资银行的神秘面纱',
        container: '职业探索是每个人从学生迈入职场的必经阶段。它不仅是同学们做好个人职业生涯规划的基础，也是了解社会、进入社会的一扇小窗。通过了解各行各业的组织架构、工作内容、工作环境等等，寻找自己的兴趣和定位，从而锁定奋斗目标.....'
    }],
    activity: [{
        pic: __webpack_require__(32),
        url: 'https://mp.weixin.qq.com/s/PFfEc75AOw_9WzzagWm7LA',
        title: '海威时代携众多名企亮相2018秋季留学英才招聘会',
        container: '为了给留学生们搭建一个更好、更便捷的就业平台，10月27日，由教育部留学服务中心主办的“2018秋季留学英才招聘会暨高端人才洽谈会”在北京展览馆举行。招聘会共提供岗位需求信息1500余个，吸引4300余名留学回国人员参加.....'
    }, {
        pic: __webpack_require__(33),
        url: 'https://mp.weixin.qq.com/s/Il4g0Mk_TUacPEYfKinGSA',
        title: '过个生日还可以这么任性？不需要锦鲤就可以独占C位',
        container: '前两天，牵动数百万网友心弦的“中国锦鲤”终于揭晓了，这位被支付宝全球独宠的网友“信小呆”也随即将微博认证改成了“2018支付宝中国锦鲤”，并发出了来自灵魂深处的拷问：“我下半生是不是不用工作了？？？”。.....'
    }, {
        pic: __webpack_require__(34),
        url: 'https://mp.weixin.qq.com/s/Qhlev79zQseEdDJgPRV1qw',
        title: '别人还在用功读书，我已经和大牛一起搞科研了',
        container: '从深蓝到Alpha Go，从画面增强到指纹、人脸识别技术，AI开始走进人们的生活，成为日常必不可少的一部分。AI的引力也从一场技术革命，逐渐走向了产业落地。这一次，AI跨界文物保护，跑到中国修起了长城。就在今年4月，英特尔公司.....'
    }],
    iconList: [{
        pic: __webpack_require__(35),
        text1: '导师一对一指导',
        text2: '定期和学员进行1对1答疑',
        text3: '帮学员答疑解惑'
    }, {
        pic: __webpack_require__(36),
        text1: '职业规划',
        text2: '职业核心能力测评',
        text3: '职业方向定位、职业目标设定'
    }, {
        pic: __webpack_require__(37),
        text1: '背景提升',
        text2: '从零到一',
        text3: '全面提高职场续航能力'
    }, {
        pic: __webpack_require__(38),
        text1: '面试/笔试真题',
        text2: '历年名企笔试真题',
        text3: '快速掌握笔面试答题技巧'
    }, {
        pic: __webpack_require__(39),
        text1: '保岗就业',
        text2: '上百家环球企业助力',
        text3: '名企内推，就业保障'
    }],
    product: [{
        title: '名企实习生',
        url: 'http://static.zhiye.xdf.cn/hwcareer/vue/mq/lymqsxs.html',
        disc: '专门帮助国内外在读学员提升个人背景和丰富实习经历的产品，通过国内外名企核心岗位实习机会，不仅帮助学员加强书本理论知识学习，还能有效地将所学知识灵活运用在实践中，提升学员个人职业背景，助力海外名校申请，成就未来职场新起点。',
        range: '提升申请软实力的留学生,增加职场经验的学生',
        icon: __webpack_require__(40),
        features: [{
            key: '',
            value: '指导职业规划与专业选择'
        }, {
            key: '',
            value: '一对一归国全职求职指导'
        }, {
            key: '',
            value: '各行各业名企导师资源'
        }]
    }, {
        title: '职业领航',
        url: 'http://static.zhiye.xdf.cn/hwcareer/vue/getOfferProj/offerplanning.html',
        disc: '提供求职意向与条件评估、职场探索、职业选择与职业定位、职业能力提升、简历深挖精修、面试讲练辅导、笔试题库练习等服务通过一对一个性化教练式指导的方式。提升学员内在求职能力、管理能力以及综合职业素养帮助学员迈稳职业生涯第一步，实现由学生向职业人身份的华丽蜕变。',
        range: '留学中或毕业后的留学生',
        icon: __webpack_require__(41),
        features: [{
            key: '',
            value: '指导职业规划与专业选择'
        }, {
            key: '',
            value: '一对一归国全职求职指导'
        }, {
            key: '',
            value: '各行各业名企导师资源'
        }]
    }, {
        title: '名企快通车',
        url: 'http://zhiye.xdf.cn/html/zy/fastpass.html',
        disc: '为初入职场人士打造的，从专业背景提升到入职实力名企的一站式求职服务聚焦应届生限时保岗服务全方位的测评和专业的职业生涯规划助求职者精准定位职业起点权威的行业企业信息和系统的理论与实操培训，助求职者熟练运用岗位必备技能定制化的面试辅导和模拟，助求职者在应聘各环节脱颖而出。',
        range: '应届毕业留学生',
        icon: __webpack_require__(42),
        features: [{
            key: '精准入行',
            value: '定位目标行业、企业和岗位'
        }, {
            key: '快速入职',
            value: '实现3个月快速入职'
        }, {
            key: '更高起点',
            value: '世界/国内五百强企业'
        }, {
            key: '限时保岗',
            value: '保障学生获得实力名企的正式全职岗位'
        }]
    }]
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"main"}},[_c('div',{staticClass:"banner"},[_c('img',{attrs:{"src":__webpack_require__(43),"alt":""}}),_vm._v(" "),_c('button',{staticClass:"btn banner_btn",on:{"click":_vm.open}},[_vm._v("获取适合我的方案")])]),_vm._v(" "),_c('div',{staticClass:"center mt_50"},[_c('h3',{staticClass:"tit"},[_vm._v("查看适合我的企业和岗位")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"center","margin-top":"20px","font-size":"18px"}},[_vm._v("请如实填写信息，我们将在两个工作日内跟您取得联系")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"center","font-size":"18px"}},[_vm._v("申请条件：本科及以上学历，海外留学生、国内二本以上学校优先申请")]),_vm._v(" "),_c('Maike',{staticStyle:{"height":"644px"},attrs:{"formId":"VBcCLDj"}}),_vm._v(" "),_c('img',{staticClass:"br_bg",attrs:{"src":__webpack_require__(44),"alt":""}}),_vm._v(" "),_vm._m(0)],1),_vm._v(" "),_c('div',{staticClass:"br"},[_c('img',{staticClass:"img_100",attrs:{"src":__webpack_require__(45),"alt":""}}),_vm._v(" "),_c('button',{staticClass:"btn",staticStyle:{"position":"relative","left":"50%","top":"-70px","margin-left":"-135px"},on:{"click":_vm.open}},[_vm._v("在线咨询")])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"center clear1 mt_50"},[_c('h3',[_c('ul',{staticClass:"clear1"},[_c('li',{staticClass:"fl",on:{"mouseover":_vm.mouseover}},[_c('div',{staticClass:"mark",class:{mark_active: _vm.showHw}},[_vm._v("海威头条")]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(46),"alt":""}})]),_vm._v(" "),_c('li',{staticClass:"fr",on:{"mouseover":_vm.mouseover1}},[_c('div',{staticClass:"mark",class:{mark_active: _vm.showHot}},[_vm._v("热门活动")]),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(47),"alt":""}})])])]),_vm._v(" "),_c('div',{staticClass:"sj",staticStyle:{"margin-top":"40px","margin-bottom":"40px"}}),_vm._v(" "),_vm._l((_vm.headline),function(item,ind){return _c('dl',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHw),expression:"showHw"}],key:(ind + "_dl"),staticClass:"clear1 dl_item"},[_c('dt',{staticClass:"fl",staticStyle:{"width":"394px","height":"164px","margin-right":"36px"}},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('img',{attrs:{"src":item.pic,"alt":""}})])]),_vm._v(" "),_c('dd',{staticClass:"fl",staticStyle:{"width":"920px"}},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('p',{staticClass:"title",staticStyle:{"font-size":"24px"}},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('p',{staticStyle:{"font-size":"20px"}},[_vm._v(_vm._s(item.container))])])])}),_vm._v(" "),_vm._l((_vm.activity),function(item,ind){return _c('dl',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHot),expression:"showHot"}],key:(ind + "_dl_1"),staticClass:"clear1 dl_item"},[_c('dt',{staticClass:"fl",staticStyle:{"width":"394px","height":"164px","margin-right":"36px"}},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('img',{attrs:{"src":item.pic,"alt":""}})])]),_vm._v(" "),_c('dd',{staticClass:"fl",staticStyle:{"width":"920px"}},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('p',{staticClass:"title",staticStyle:{"font-size":"24px"}},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('p',{staticStyle:{"font-size":"20px"}},[_vm._v(_vm._s(item.container))])])])})],2),_vm._v(" "),_c('div',{staticStyle:{"margin":"60px 0 0px 0"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":__webpack_require__(48),"alt":""}}),_vm._v(" "),_c('button',{staticClass:"btn",staticStyle:{"position":"relative","right":"-80%","top":"-140px"},on:{"click":_vm.open}},[_vm._v("在线咨询")])]),_vm._v(" "),_c('div',{staticClass:"center clear1"},[_c('ul',{staticStyle:{"margin-left":"50px","position":"relative","height":"210px"}},[_c('li',{staticClass:"fl mr_20",on:{"mouseover":function($event){_vm.changePro(0)}}},[_c('a',{attrs:{"href":"http://static.zhiye.xdf.cn/hwcareer/vue/mq/lymqsxs.html","target":"_blank"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.iss.check),expression:"iss.check"}],attrs:{"src":__webpack_require__(49),"alt":""}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.iss.check),expression:"!iss.check"}],attrs:{"src":__webpack_require__(50),"alt":""}})])]),_vm._v(" "),_c('li',{staticClass:"fl mr_20",on:{"mouseover":function($event){_vm.changePro(1)}}},[_c('a',{attrs:{"href":"http://static.zhiye.xdf.cn/hwcareer/vue/getOfferProj/offerplanning.html","target":"_blank"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.isz.check),expression:"isz.check"}],staticStyle:{"width":"100%"},attrs:{"src":__webpack_require__(51),"alt":""}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isz.check),expression:"!isz.check"}],attrs:{"src":__webpack_require__(52),"alt":""}})])]),_vm._v(" "),_c('li',{staticClass:"fl mr_20",on:{"mouseover":function($event){_vm.changePro(2)}}},[_c('a',{attrs:{"href":"http://zhiye.xdf.cn/html/zy/fastpass.html","target":"_blank"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.ism.check),expression:"ism.check"}],attrs:{"src":__webpack_require__(53),"alt":""}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.ism.check),expression:"!ism.check"}],attrs:{"src":__webpack_require__(54),"alt":""}})])]),_vm._v(" "),_c('li',{staticClass:"bottom_color",style:('left:' + _vm.left + 'px')})]),_vm._v(" "),_c('div',{staticClass:"clear1 book_box",staticStyle:{"height":"462px"}},[_c('dl',{staticClass:"fl",staticStyle:{"width":"890px","padding":"40px 30px 40px 60px"}},[_c('dt',{staticClass:"fr"},[_c('img',{staticStyle:{"width":"80%","margin":"84px 0 0"},attrs:{"src":_vm.productItem.icon,"alt":""}})]),_vm._v(" "),_c('dd',{staticStyle:{"width":"486px"}},[_c('a',{attrs:{"href":_vm.productItem.url,"target":"_blank"}},[_c('h5',{staticStyle:{"text-align":"center","font-size":"30px","margin-bottom":"50px"}},[_vm._v(_vm._s(_vm.productItem.title))]),_vm._v(" "),_c('p',{staticStyle:{"font-size":"22px","line-height":"36px"}},[_vm._v(_vm._s(_vm.productItem.disc))])])])]),_vm._v(" "),_c('div',{staticClass:"fl book_right"},[_c('div',{staticStyle:{"margin-top":"40px"}},[_c('span',{staticClass:"btn_stic"},[_vm._v("适合人群")]),_vm._v(" "),_c('p',{staticClass:"mt_20 color_gr"},[_vm._v(_vm._s(_vm.productItem.range))])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"40px"}},[_c('span',{staticClass:"btn_stic"},[_vm._v("亮点")]),_vm._v(" "),_vm._l((_vm.productItem.features),function(item,ind){return _c('p',{key:(ind + "_dmt"),class:ind === 0 ? 'mt_20' : ''},[(item.key)?_c('strong',[_vm._v(_vm._s(item.key)+"：")]):_vm._e(),_c('span',{staticClass:"color_gr text_wrap"},[_vm._v(_vm._s(item.value))])])})],2)])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('h3',[_vm._v("就业保障")]),_vm._v(" "),_c('div',{staticClass:"sj"}),_vm._v(" "),_c('ul',{staticClass:"icn_list clear1"},_vm._l((_vm.ico_list),function(item,ind){return _c('li',{key:(ind + "_icn"),staticClass:"fl"},[_c('div',{staticStyle:{"width":"208px","height":"190px"}},[_c('img',{attrs:{"src":item.pic,"alt":""}})]),_vm._v(" "),_c('div',{staticStyle:{"width":"208px","height":"170px"}},[_c('p',{staticStyle:{"font-weight":"700","margin-top":"60px"}},[_vm._v(_vm._s(item.text1))]),_vm._v(" "),_c('p',{staticStyle:{"margin":"10px 0"}},[_vm._v(_vm._s(item.text2))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.text3))])])])}))])]),_vm._v(" "),_c('br-footer')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text clear1"},[_c('p',{staticClass:"fl text_item text_item1"},[_vm._v("新东方教育科技集团，由1993年11月16日成立的北京新东方学校发展壮大而来，目前集团以语言培训为核心，拥有短期培训系统、基础教育系统、文化传播系统、科技产业系统、咨询服务系统等多个发展平台，是一家集教育培训、教育产品研发、教育服务等于一体的大型综合性教育科技集团。新东方教育科技集团于2006年9月7日在美国纽约证券交易所成功上市，成为中国大陆首家海外上市的教育培训机构。")]),_vm._v(" "),_c('p',{staticClass:"fr text_item"},[_vm._v("海威时代（Haiwei   Career）是新东方教育科技集团（NYSE:EDU）旗下专注于海归就业创业和国际化人才服务的专业公司。通过打造国内最完善的国际化人才库和大数据平台，协助企业更有效的获取、引进、留住国际化人才，同时为国际化人才提供文化适应、职业力提升、职业规划和生涯管理的服务。海威时代以人才为桥梁，链接企业的根本需求，重塑传统海归招聘模式，实现企业与国际化人才的双赢。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center mt_50"},[_c('h3',[_vm._v("新东方核心产业链重磅发布")]),_vm._v(" "),_c('div',{staticClass:"sj"}),_vm._v(" "),_c('dl',{staticClass:"core_item mt_70 clear1"},[_c('dt',{staticClass:"fl"},[_c('img',{attrs:{"src":__webpack_require__(55),"alt":""}}),_vm._v(" "),_c('p',{staticClass:"t_algin"},[_vm._v("俞老师在2015OTEC上")])]),_vm._v(" "),_c('dd',{staticClass:"fr"},[_c('h4',{staticClass:"title"},[_vm._v("俞敏洪老师在2015 OTEC峰会上，向到场嘉宾及海归隆重介绍新东方的又一布局——海威时代")]),_vm._v(" "),_c('p',[_vm._v("海威时代的成立将延展新东方此前在留学教育前端（如语言培训）、中间（如留学咨询）的优势，通过解决留学人才就业、创业的问题，将留学教育产业链打通，形成一个闭环。")]),_vm._v(" "),_c('p',[_vm._v("新东方的这一布局必将有利于海归创业者和求职者们更快地在这片生机勃勃的热土上再次生根发芽，真正让新东方利用好自身的国际视野优势，在汹涌澎湃的发展大势中引领和推动中国社会和经济向更高层次前进，成为世界舞台的主角。")])])]),_vm._v(" "),_c('dl',{staticClass:"core_item clear1"},[_c('dt',{staticClass:"fr"},[_c('img',{attrs:{"src":__webpack_require__(56),"alt":""}}),_vm._v(" "),_c('p',{staticClass:"t_algin"},[_vm._v("《2016中国留学白皮书》新闻发布会")])]),_vm._v(" "),_c('dd',[_c('h4',{staticClass:"title"},[_vm._v("海威时代俞仲秋：我们是归国就业的彩虹")]),_vm._v(" "),_c('p',[_vm._v("新东方大概十几年前就开始做这方面的布局，当时俞敏洪老师提出过一个口号，“新东方要成为出国留学的桥梁和归国就业的彩虹”，实际上现在启动了新东方海威时代就是要担当这个“彩虹”，彩虹跨在两端，一端服务于在国外的那些留学生，甚至是一些在国外已经生活、工作多年，但有意愿要回到中国来工作的海归人士。反过来在另一边，同时又为企业，包括政府、创业园区服务，为他们寻觅人才。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video"},[_c('div',{staticClass:"center",staticStyle:{"text-align":"center"}},[_c('iframe',{attrs:{"width":"910","height":"625","frameborder":"0","src":"https://v.qq.com/txp/iframe/player.html?vid=f0800ozs8ut","allowFullScreen":"true"}}),_vm._v(" "),_c('p',{staticStyle:{"color":"#fff","font-size":"18px","margin-top":"10px"}},[_vm._v("海威时代俞仲秋谈新东方“就业力”核心产业链")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
]);
//# sourceMappingURL=1.build.js.map