(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-views-order-confirmOrder"],{"3dca":function(t,e,i){"use strict";i.r(e);var o=i("8abf"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},"562d":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".coupon_box[data-v-698716c8]{margin:%?20?%;padding:%?20?%;-webkit-box-shadow:%?0?% %?0?% %?10?% #ddd;box-shadow:%?0?% %?0?% %?10?% #ddd;position:relative;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding-bottom:%?10?%;overflow:hidden}.coupon_box .left[data-v-698716c8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-bottom:%?1?% solid #eee;padding-bottom:%?20?%;position:relative}.coupon_box .left .ylq[data-v-698716c8]{width:%?60?%;height:%?45?%;position:absolute;top:0;right:%?140?%}.coupon_box .left .hui[data-v-698716c8]{width:%?40?%;height:%?40?%;font-size:%?22?%;color:#fff;background-color:rgba(255,84,110,.8);-webkit-border-radius:%?8?%;border-radius:%?8?%;line-height:%?40?%;text-align:center;display:inline-block;-webkit-transform:translateY(%?-5?%);transform:translateY(%?-5?%)}.coupon_box .left .left_top[data-v-698716c8]{width:80vw;display:block;font-size:%?26?%;font-weight:700}.left_top .hui_name[data-v-698716c8]{line-height:%?60?%;height:%?60?%;margin-left:%?20?%;display:inline-block;font-size:%?28?%}.left_bottom[data-v-698716c8]{font-size:%?24?%;font-weight:500;color:#333;height:%?60?%;line-height:%?60?%}.coupon_box .right[data-v-698716c8]{position:absolute;right:%?20?%;top:%?25?%;text-align:center}.coupon_box .right .money[data-v-698716c8]{font-size:%?45?%;margin-bottom:%?10?%}.coupon_box .right uni-text[data-v-698716c8]{font-size:%?24?%;color:#999}.coupon_box .bottom[data-v-698716c8]{height:%?60?%;line-height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:flex-start;align-content:flex-start;font-size:%?24?%;margin-top:%?10?%}.coupon_box .bottom uni-view[data-v-698716c8]{margin-right:%?20?%;color:#888}",""]),t.exports=e},"64e1":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"order"},[0==t.tapIndex?i("v-uni-view",{staticClass:"order_address"},[i("v-uni-image",{attrs:{src:"/static/images/home/bottom.png"}}),i("v-uni-view",{staticClass:"address_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setAddress.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weizhi_icon"},[i("v-uni-text",{staticClass:"iconfont icon-dizhi",style:"color:"+t.colors})],1),t.address.id?[i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"name"},[i("v-uni-text",{staticClass:"text1"},[t._v(t._s(t.address.consignee))]),i("v-uni-text",{staticClass:"phones"},[t._v(t._s(t.address.phone))])],1),i("v-uni-view",{staticClass:"address_name"},[t._v(t._s(t.address.district)+" "+t._s(t.address.detailedAddress))])],1)]:i("v-uni-view",{staticClass:"noaddress"},[t._v("请添加收货地址")])],2)],1):t._e(),t._l(t.goodsList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods"},[i("v-uni-view",{staticClass:"goods_data"},[i("v-uni-image",{attrs:{src:e.image,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"goods_title"},[i("v-uni-view",{staticClass:"g_name"},[t._v(t._s(e.name)+" "+t._s(e.subhead))]),i("v-uni-view",{staticClass:"goods_sku"},[t._v("规格:"),i("v-uni-text",{staticStyle:{"margin-right":"10upx"}},[t._v(t._s(t.formatAttr(e.attributeJson)))])],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"t1",style:"color:"+t.colors},[t._v("￥"+t._s(e.activityPrice||e.salePrice))]),i("v-uni-view",{staticClass:"t2"},[i("v-uni-text",[t._v("￥"+t._s(e.marketPrice))])],1),i("v-uni-view",{staticClass:"t3"},[t._v("x"+t._s(e.quantity))])],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"order_more"},[i("v-uni-view",{staticClass:"morelist"},[i("v-uni-text",{staticClass:"title"},[t._v("商品总价")]),i("v-uni-view",{staticClass:"right_title"},[t._v("￥"+t._s(t.sumprice))])],1),i("v-uni-view",{staticClass:"morelist"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"quan",style:"background:"+t.colors},[t._v("运")]),i("v-uni-text",[t._v("运费")])],1),i("v-uni-view",{staticClass:"right_title"},[t._v("￥0.00")])],1),i("v-uni-view",{staticClass:"morelist"},[i("v-uni-text",{staticClass:"title"},[t._v("实付款")]),i("v-uni-view",{staticClass:"right_title",style:"color:"+t.colors+";"},[t._v("￥"+t._s(t.sumprice))])],1)],1),i("v-uni-view",{staticClass:"bottom_btn"},[i("v-uni-view",{staticClass:"moneys"},[t._v("合计:"),i("v-uni-text",{style:"color:"+t.colors+";"},[t._v("￥"+t._s(t.sumprice))])],1),i("v-uni-view",{staticClass:"btns",style:"background:"+t.colors+";",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),1==t.couponshow?i("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"preventTouchMove"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hidecoupon.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"coupon",style:"bottom:"+(1==t.couponshow?"0upx":"")},[i("v-uni-view",{staticClass:"buyong",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notUsed()}}},[t._v("不使用优惠券")]),i("v-uni-scroll-view",{staticClass:"scrolls",attrs:{"scroll-y":!0}},[i("coupon",{attrs:{couponList:t.couponList},on:{onReceive:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}})],1)],1)],2)},n=[]},"8abf":function(t,e,i){"use strict";var o=i("4ea4");i("4160"),i("a15b"),i("d81d"),i("13d5"),i("a9e3"),i("b680"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=o(i("1da1")),n=o(i("95c7")),s=i("cced"),d=getApp(),r={data:function(){return{colors:"",couponshow:!1,modes:"",tapIndex:0,goodsList:(0,s.getGoodsData)(),couponIndex:0,nowprice:0,sumprice:0,address:{},addressId:void 0,couponList:[{money:30,reduce:5,date:"2020-02-09 2020-10-02",id:1,status:0,condition:["新人专享","仅在支付时使用","可与其他产品共享"]},{money:30,reduce:5,date:"2020-02-09 2020-10-02",id:2,status:0,condition:["新人专享"]}]}},components:{coupon:n.default},props:{},onLoad:function(t){(0,s.removeAddress)(),this.getSumPrice(),this.setData({colors:d.globalData.newColor})},onReady:function(){},onShow:function(){this.getAddress()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getAddress:function(){var t=this,e=getCurrentPages(),i=e[e.length-1],o=i._data.addressId,a={};o&&Object.assign(a,{id:o}),uni.$ajax("/api/address/info",a).then((function(e){t.addressId=o||e.id,t.address=e})).catch((function(t){return uni.showToast({title:t,icon:"none"})}))},getSumPrice:function(){var t=0;this.goodsList.forEach((function(e){var i=e.activityPrice||e.salePrice;t+=100*i*e.quantity/100})),this.sumprice=t.toFixed(2),this.nowprice=t.toFixed(2)},openCoupon:function(t){this.setData({couponshow:!0,couponIndex:t})},hidecoupon:function(){this.setData({couponshow:!1})},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.addressId){e.next=2;break}return e.abrupt("return",uni.showToast({title:"请选择您的收货地址",icon:"none"}));case 2:i=t.goodsList.map((function(t){var e={productId:t.productId,productSkuId:t.productSkuId,quantity:t.quantity};return t.id&&Object.assign(e,{id:t.id}),e})),uni.$ajax("/api/order/create",{addressId:t.addressId,products:i},"post").then((function(t){uni.navigateTo({url:"/pages/views/order/success"})})).catch((function(t){return uni.showToast({title:t,icon:"none"})}));case 4:case"end":return e.stop()}}),e)})))()},selectMode:function(){var t=this,e=["物流寄送","到店自提"];uni.showActionSheet({itemList:e,success:function(i){t.setData({modes:e[i.tapIndex],tapIndex:i.tapIndex})}})},setAddress:function(){uni.navigateTo({url:"/pages/views/user/myaddress?type=select"})},onReceive:function(t,e){this.couponshow=!1,this.goodsList[this.couponIndex].couponName="满"+t.money+"减"+t.reduce,this.goodsList[this.couponIndex].couponReduce=t.reduce,this.sumprice=this.sumprice-t.reduce},notUsed:function(){this.couponshow=!1,this.goodsList[this.couponIndex].couponName="",this.sumprice=this.sumprice+Number(this.goodsList[this.couponIndex].couponReduce)},formatAttr:function(t){return JSON.parse(t).map((function(t){return t.val})).join(" | ")}}};e.default=r},"95c7":function(t,e,i){"use strict";i.r(e);var o=i("a6a4"),a=i("ada0");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("dd2d");var s,d=i("f0c5"),r=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"698716c8",null,!1,o["a"],s);e["default"]=r.exports},a6a4:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.couponList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"coupon_box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onreceive(e,o)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"left_top"},[i("v-uni-text",{staticClass:"hui"},[t._v("券")]),i("v-uni-text",{staticClass:"hui_name"},[t._v("满"+t._s(e.money)+"减"+t._s(e.reduce))])],1),i("v-uni-view",{staticClass:"left_bottom"},[i("v-uni-text",[t._v("有效日期："+t._s(e.date))])],1),1==e.status?i("v-uni-image",{staticClass:"ylq",attrs:{src:"/static/images/goods/ylq.png"}}):t._e()],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"money"},[t._v("￥"+t._s(e.reduce))]),i("v-uni-text",[t._v("满"+t._s(e.money)+"可用")])],1),i("v-uni-view",{staticClass:"bottom"},t._l(e.condition,(function(e,o){return i("v-uni-view",{key:o},[t._v(t._s(o+1)+"."+t._s(e))])})),1)],1)})),1)},n=[]},ada0:function(t,e,i){"use strict";i.r(e);var o=i("eeed"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},aea1:function(t,e,i){var o=i("bcb7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("54c8c697",o,!0,{sourceMap:!1,shadowMode:!1})},b6ed:function(t,e,i){var o=i("562d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("d5c660f6",o,!0,{sourceMap:!1,shadowMode:!1})},bcb7:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";uni-page-body[data-v-042e4d48]{background-color:#fff}.order[data-v-042e4d48]{padding:%?20?% 4%}.mode[data-v-042e4d48]{height:%?80?%;line-height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;padding:0 %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?20?%;-webkit-box-shadow:%?0?% %?0?% %?10?% #ddd;box-shadow:%?0?% %?0?% %?10?% #ddd}.mode[data-v-042e4d48]:active{background-color:#f5f5f5}.mode .text1[data-v-042e4d48]{color:#999;font-size:%?24?%}.mode .text2[data-v-042e4d48]{font-size:%?24?%;color:#333;display:block;width:50%;font-weight:700}.mode uni-image[data-v-042e4d48]{width:%?40?%;height:%?40?%;display:block}.order_address[data-v-042e4d48]{height:%?150?%;width:100%;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;position:relative;-webkit-box-shadow:%?0?% %?0?% %?10?% #ddd;box-shadow:%?0?% %?0?% %?10?% #ddd}.order_address uni-image[data-v-042e4d48]{width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:10}.address_box[data-v-042e4d48]{width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weizhi_icon uni-text[data-v-042e4d48]{font-size:%?40?%;margin-left:%?10?%}.address_box .center[data-v-042e4d48]{margin-left:%?20?%}.address_box .center .name[data-v-042e4d48]{height:%?60?%;line-height:%?60?%}.address_box .center .name .text1[data-v-042e4d48]{font-size:%?26?%;font-weight:700;color:#333;display:inline-block;margin-right:%?20?%}.phones[data-v-042e4d48]{font-size:%?24?%;color:#999;z-index:0}.address_box .address_name[data-v-042e4d48]{font-size:%?26?%;font-weight:700;color:#333}.noaddress[data-v-042e4d48]{margin-left:%?40?%;font-weight:700;color:#333;font-size:%?26?%}.goods[data-v-042e4d48]{background-color:#fff;margin-top:%?20?%;-webkit-box-shadow:%?0?% %?0?% %?10?% #ddd;box-shadow:%?0?% %?0?% %?10?% #ddd;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?%;padding-bottom:%?10?%}.goods_data[data-v-042e4d48]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?15?%}.goods_data uni-image[data-v-042e4d48]{min-width:%?150?%;max-width:%?150?%;height:%?150?%;display:block;-webkit-border-radius:%?10?%;border-radius:%?10?%}.goods_title[data-v-042e4d48]{margin-left:%?20?%;line-height:%?40?%;width:100%}.goods_title .price[data-v-042e4d48]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%;line-height:%?40?%;margin-top:%?20?%;position:relative}.goods_title .price .t1[data-v-042e4d48]{font-size:%?30?%;font-weight:700;display:block}.goods_title .price .t2[data-v-042e4d48]{font-size:%?24?%;margin-left:%?15?%;display:block;color:#999;text-decoration:line-through}.goods_title .price .t3[data-v-042e4d48]{float:right;font-weight:700;font-size:%?28?%;color:#999;position:absolute;right:%?0?%;top:0}.goods_title .g_name[data-v-042e4d48]{font-size:%?26?%;font-weight:700;max-height:%?80?%;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods_title .goods_sku[data-v-042e4d48]{color:#999\n  /* margin-top: 20upx; */}.numbers[data-v-042e4d48]{\n  /* text-align: right; */}.shop[data-v-042e4d48]{margin-top:%?20?%;font-size:%?24?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center}.shop .iconfont[data-v-042e4d48]{margin-right:%?20?%}.order_more[data-v-042e4d48]{padding:0 2%;margin-top:%?20?%}.morelist[data-v-042e4d48]{height:%?80?%;line-height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% dashed #eee}.morelist .title[data-v-042e4d48]{color:#333;font-size:%?26?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.morelist .title .quan[data-v-042e4d48]{font-size:%?20?%;width:%?35?%;height:%?35?%;line-height:%?36?%;text-align:center;-webkit-border-radius:%?8?%;border-radius:%?8?%;margin-right:%?10?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}.morelist .right_title[data-v-042e4d48]{color:#999}.tips[data-v-042e4d48]{padding:%?10?% 0;margin-bottom:%?120?%}.tips .tips_name[data-v-042e4d48]{font-size:%?26?%;font-weight:700;line-height:%?60?%}.textarea_box[data-v-042e4d48]{min-height:%?100?%;width:100%;border:%?1?% solid #eee;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?%}.textarea_box uni-textarea[data-v-042e4d48]{font-size:%?24?%;height:%?150?%}.bottom_btn[data-v-042e4d48]{height:%?100?%;width:100vw;background-color:#fff;position:fixed;left:0;bottom:0;line-height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:0 %?30?%;z-index:100;font-weight:700}.bottom_btn .moneys[data-v-042e4d48]{font-size:%?28?%;font-weight:700;margin-right:%?100?%}.bottom_btn .btns[data-v-042e4d48]{font-size:%?28?%;color:#fff;height:%?60?%;line-height:%?60?%;padding:0 %?25?%;text-align:center;-webkit-border-radius:%?40?%;border-radius:%?40?%;margin-top:%?20?%;font-weight:700}\n/* 优惠券 */.coupon[data-v-042e4d48]{background-color:#fff;-webkit-border-radius:%?10?% %?10?% 0 0;border-radius:%?10?% %?10?% 0 0;position:fixed;left:0;bottom:%?-1000?%;z-index:150;-webkit-transition:all .3s;transition:all .3s}.coupon .buyong[data-v-042e4d48]{line-height:%?80?%;padding:0 4%;text-align:right;color:#999}.mask[data-v-042e4d48]{width:100%;height:100%;position:fixed;top:0;left:0;background:#000;z-index:10;opacity:.7}.scrolls[data-v-042e4d48]{width:100vw;height:55vh;z-index:500}body.?%PAGE?%[data-v-042e4d48]{background-color:#fff}',""]),t.exports=e},cb8a:function(t,e,i){"use strict";i.r(e);var o=i("64e1"),a=i("3dca");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("dc42");var s,d=i("f0c5"),r=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"042e4d48",null,!1,o["a"],s);e["default"]=r.exports},dc42:function(t,e,i){"use strict";var o=i("aea1"),a=i.n(o);a.a},dd2d:function(t,e,i){"use strict";var o=i("b6ed"),a=i.n(o);a.a},eeed:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},components:{},props:{colors:{type:String},couponList:{type:Array}},methods:{onreceive:function(t,e){1!=t.status&&this.$emit("onReceive",t,e)}}};e.default=o}}]);