(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commponent/home/recommend"],{"1e25":function(t,n,e){"use strict";e.r(n);var o=e("a478"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=r.a},"25d3":function(t,n,e){},a478:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("cced");function o(t){return u(t)||i(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}getApp();var s=function(){Promise.all([e.e("common/vendor"),e.e("pages/commponent/public/sku")]).then(function(){return resolve(e("22a0"))}.bind(null,e)).catch(e.oe)},f={components:{sku:s},data:function(){return{showModal:!1,nowList:{},newList:[],sku:"",tagImg:["/static/images/home/five.png"]}},props:{colors:{type:String},dataList:{type:Array},modes:{type:Boolean,default:!0},loading:{type:Boolean,default:!0},bottoms:{type:String,default:"0"}},created:function(){this.setDataList(this.dataList)},watch:{dataList:function(t){this.setDataList(t)}},methods:{setDataList:function(t){var n;console.log(t);var e=(n=[]).concat.apply(n,o(Array.from(t.reduce((function(t,n,e){return t[e%2].push(n),t}),{0:[],1:[],length:2}))));this.setData({newList:e})},onhide:function(){this.showModal=!1},addCart:function(t){console.log("点击了",t),this.showModal=!0,this.nowList=t},jumpDetails:function(n){t.navigateTo({url:"/pages/views/goods/goodsDetails?productId="+n.id})}}};n.default=f}).call(this,e("543d")["default"])},a7c3:function(t,n,e){"use strict";e.r(n);var o=e("f09a"),r=e("1e25");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("b9e8");var i,u=e("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"37ea540f",null,!1,o["a"],i);n["default"]=c.exports},b9e8:function(t,n,e){"use strict";var o=e("25d3"),r=e.n(o);r.a},f09a:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/commponent/home/recommend-create-component',
    {
        'pages/commponent/home/recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a7c3"))
        })
    },
    [['pages/commponent/home/recommend-create-component']]
]);
