(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d50d3e9"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function n(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"0fdf":function(t,e,a){},1148:function(t,e,a){"use strict";var r=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},"25a9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}));a("c975"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(e)){var s=a[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?s:n(s))}return e}function n(t){return("00"+t).substr(t.length)}function s(t,e){e||(e="-");var a,r=t.split(e),n=parseInt(r[0]);a=0==r[1].indexOf("0")?parseInt(r[1].substring(1)):parseInt(r[1]);var s=parseInt(r[2]),i=new Date(n,a-1,s);return i}},"25f0":function(t,e,a){"use strict";var r=a("6eeb"),n=a("825a"),s=a("d039"),i=a("ad6d"),l="toString",o=RegExp.prototype,c=o[l],u=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=l;(u||f)&&r(RegExp.prototype,l,(function(){var t=n(this),e=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in o)?i.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,a){"use strict";var r=a("6547").charAt,n=a("69f3"),s=a("7dd0"),i="String Iterator",l=n.set,o=n.getterFor(i);s(String,"String",(function(t){l(this,{type:i,string:String(t),index:0})}),(function(){var t,e=o(this),a=e.string,n=e.index;return n>=a.length?{value:void 0,done:!0}:(t=r(a,n),e.index+=t.length,{value:t,done:!1})}))},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"4d63":function(t,e,a){var r=a("83ab"),n=a("da84"),s=a("94ca"),i=a("7156"),l=a("9bf2").f,o=a("241c").f,c=a("44e7"),u=a("ad6d"),f=a("9f7f"),d=a("6eeb"),p=a("d039"),v=a("69f3").set,b=a("2626"),g=a("b622"),m=g("match"),y=n.RegExp,h=y.prototype,_=/a/g,C=/a/g,x=new y(_)!==_,S=f.UNSUPPORTED_Y,w=r&&s("RegExp",!x||S||p((function(){return C[m]=!1,y(_)!=_||y(C)==C||"/a/i"!=y(_,"i")})));if(w){var O=function(t,e){var a,r=this instanceof O,n=c(t),s=void 0===e;if(!r&&n&&t.constructor===O&&s)return t;x?n&&!s&&(t=t.source):t instanceof O&&(s&&(e=u.call(t)),t=t.source),S&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var l=i(x?new y(t,e):y(t,e),r?this:h,O);return S&&a&&v(l,{sticky:a}),l},j=function(t){t in O||l(O,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},E=o(y),A=0;while(E.length>A)j(E[A++]);h.constructor=O,O.prototype=h,d(n,"RegExp",O)}b("RegExp")},"4df4":function(t,e,a){"use strict";var r=a("0366"),n=a("7b0b"),s=a("9bdd"),i=a("e95a"),l=a("50c4"),o=a("8418"),c=a("35a1");t.exports=function(t){var e,a,u,f,d,p,v=n(t),b="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,y=void 0!==m,h=c(v),_=0;if(y&&(m=r(m,g>2?arguments[2]:void 0,2)),void 0==h||b==Array&&i(h))for(e=l(v.length),a=new b(e);e>_;_++)p=y?m(v[_],_):v[_],o(a,_,p);else for(f=h.call(v),d=f.next,a=new b;!(u=d.call(f)).done;_++)p=y?s(f,m,[u.value,_],!0):u.value,o(a,_,p);return a.length=_,a}},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"843b":function(t,e,a){"use strict";var r=a("0fdf"),n=a.n(r);n.a},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("44ad"),s=a("fc6a"),i=a("a640"),l=[].join,o=n!=Object,c=i("join",",");r({target:"Array",proto:!0,forced:o||!c},{join:function(t){return l.call(s(this),void 0===t?",":t)}})},a630:function(t,e,a){var r=a("23e7"),n=a("4df4"),s=a("1c7e"),i=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:n})},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("a691"),s=a("408a"),i=a("1148"),l=a("d039"),o=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){o.call({})}));r({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,a,r,l,o=s(this),d=n(t),p=[0,0,0,0,0,0],v="",b="0",g=function(t,e){var a=-1,r=e;while(++a<6)r+=t*p[a],p[a]=r%1e7,r=c(r/1e7)},m=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=c(a/t),a=a%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+i.call("0",7-a.length)+a}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(v="-",o=-o),o>1e-21)if(e=f(o*u(2,69,1))-69,a=e<0?o*u(2,-e,1):o/u(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),r=d;while(r>=7)g(1e7,0),r-=7;g(u(10,r,1),0),r=e-1;while(r>=23)m(1<<23),r-=23;m(1<<r),g(1,1),m(2),b=y()}else g(0,a),g(1<<-e,0),b=y()+i.call("0",d);return d>0?(l=b.length,b=v+(l<=d?"0."+i.call("0",d-l)+b:b.slice(0,l-d)+"."+b.slice(l-d))):b=v+b,b}})},b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");var r=a("06c5");function n(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return l=t.done,t},e:function(t){o=!0,i=t},f:function(){try{l||null==a["return"]||a["return"]()}finally{if(o)throw i}}}}},cc88:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-detail"},[a("div",{staticClass:"steps"},[a("el-steps",{attrs:{"align-center":"",active:parseInt(t.order.status)+1}},[a("el-step",{attrs:{title:"提交订单",description:t.formatTime(t.order.createTime)}}),a("el-step",{attrs:{title:"支付订单",description:t.formatTime(t.order.paymentTime)}}),a("el-step",{attrs:{title:"平台发货",description:t.formatTime(t.order.deliveryTime)}}),a("el-step",{attrs:{title:"确认收货",description:t.formatTime(t.order.receiveTime)}})],1)],1),a("el-card",{staticStyle:{"“margin-top":"15px"},attrs:{shadow:"never"}},[a("div",{staticClass:"operate-container"},[a("div",{staticClass:"text"},[a("i",{staticClass:"el-icon-warning",staticStyle:{"margin-left":"20px"}}),a("span",{staticClass:"color-danger"},[t._v("当前订单状态："+t._s(t._f("formatStatus")(t.order.status)))])]),1==t.order.status?a("div",{staticClass:"operate-button-container"},[a("el-button",{attrs:{size:"mini"}},[t._v("订单发货")])],1):t._e(),2==t.order.status?a("div",{staticClass:"operate-button-container"},[a("el-button",{attrs:{size:"mini"}},[t._v("订单跟踪")])],1):t._e(),3==t.order.status?a("div",{staticClass:"operate-button-container"},[a("el-button",{attrs:{size:"mini"},on:{click:t.handleDeleteOrder}},[t._v("删除订单")])],1):t._e()]),a("div",{staticStyle:{"margin-top":"20px"}},[a("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),a("span",{staticClass:"font-small"},[t._v("基本信息")])],1),a("div",{staticClass:"table-layout",staticStyle:{"margin-top":"20px"}},[a("el-row",[a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("订单编号")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("订单流水号")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("支付方式")])],1),a("el-row",[a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t.order.id))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t.order.code))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t._f("formatNudefined")(t._f("formatPayment")(t.order.payment_type))))])],1),a("el-row",[a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("配送方式")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("物流单号")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("自动确认收货时间")])],1),a("el-row",[a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t._f("formatNudefined")(t.order.ecp)))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t._f("formatNudefined")(t.order.postid)))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v("15天")])],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),a("span",{staticClass:"font-small"},[t._v("收货人信息")])],1),a("div",{staticClass:"table-layout",staticStyle:{"margin-top":"20px"}},[a("el-row",[a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("收货人")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("手机号")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:8}},[t._v("收货地址")])],1),a("el-row",[a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t.order.name))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t.order.tel))]),a("el-col",{staticClass:"table-cell",attrs:{span:8}},[t._v(t._s(t.order.address))])],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("svg-icon",{staticStyle:{color:"#606266"},attrs:{"icon-class":"marker"}}),a("span",{staticClass:"font-small"},[t._v("商品信息")])],1),a("div",{staticClass:"table-layout",staticStyle:{"margin-top":"20px"}},[a("el-row",[a("el-col",{staticClass:"table-cell-title",attrs:{span:3}},[t._v("商品编号")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("商品图片")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("商品名称")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:3}},[t._v("商品单价")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:3}},[t._v("商品参数")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:3}},[t._v("数量")]),a("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("总价")])],1),t._l(t.order.skus,(function(e,r){return a("div",{key:r},[a("el-row",[a("el-col",{staticClass:"table-cell",attrs:{span:3}},[t._v(t._s(e.id))]),a("el-col",{staticClass:"table-cell",attrs:{span:4}},[a("img",{staticStyle:{height:"40px"},attrs:{src:t.formatImg(e.imgs)}})]),a("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(e.title))]),a("el-col",{staticClass:"table-cell",attrs:{span:3}},[t._v("￥"+t._s(e.price))]),a("el-col",{staticClass:"table-cell",attrs:{span:3}},[t._v(t._s(t._f("foramtParam")(e.param)))]),a("el-col",{staticClass:"table-cell",attrs:{span:3}},[t._v(t._s(e.num))]),a("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v("￥"+t._s(t._f("formatPrice")(e.actual_price)))])],1)],1)}))],2),a("div",{staticStyle:{float:"right",margin:"20px"}},[t._v(" 合计："),a("span",{staticClass:"color-danger"},[t._v("￥"+t._s(t.order.money))])])])],1)},n=[],s=(a("a15b"),a("b680"),a("b85c")),i=a("5530"),l=a("25a9"),o=a("2f62"),c=a("f8b7"),u={props:["order_id","status"],methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])("order",["getDetail"])),{},{handleDeleteOrder:function(){var t=this;this.$confirm("此操作将永久删除该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["a"])({id:row.id}).then((function(e){200==e.data.code&&t.$router.back()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},formatTime:function(t){if(null==t||""===t)return"";var e=new Date(t);return Object(l["a"])(e,"yyyy-MM-dd hh:mm:ss")},formatImg:function(t){return console.log(),t&&JSON.parse(t)[0]}}),created:function(){this.getDetail({order_id:this.order_id,status:this.status}).then((function(t){console.log(t)}))},filters:{formatStatus:function(t){return 0==t?"待支付":1==t?"待发货":2==t?"已发货":3==t?"已完成":void 0},formatPayment:function(t){return 1==t?"微信":2==t?"支付宝":void 0},formatPrice:function(t){return t.toFixed(2)},formatNudefined:function(t){return t||"暂无"},foramtParam:function(t){var e=[];t=JSON.parse(t);var a,r=Object(s["a"])(t);try{for(r.s();!(a=r.n()).done;){var n=a.value;e.push(n["key"]+":"+n["value"])}}catch(i){r.e(i)}finally{r.f()}return e.join("+")}},computed:Object(i["a"])({},Object(o["c"])(["order"]))},f=u,d=(a("843b"),a("2877")),p=Object(d["a"])(f,r,n,!1,null,"bca5f18c",null);e["default"]=p.exports},d28b:function(t,e,a){var r=a("746f");r("iterator")},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),s=a("da84"),i=a("5135"),l=a("861d"),o=a("9bf2").f,c=a("e893"),u=s.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};c(d,u);var p=d.prototype=u.prototype;p.constructor=d;var v=p.toString,b="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;o(p,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=v.call(t);if(i(f,t))return"";var a=b?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,a){"use strict";var r=a("23e7"),n=a("861d"),s=a("e8b5"),i=a("23cb"),l=a("50c4"),o=a("fc6a"),c=a("8418"),u=a("b622"),f=a("1dde"),d=a("ae40"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),g=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var a,r,u,f=o(this),d=l(f.length),p=i(t,d),v=i(void 0===e?d:e,d);if(s(f)&&(a=f.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(f,p,v);for(r=new(void 0===a?Array:a)(m(v-p,0)),u=0;p<v;p++,u++)p in f&&c(r,u,f[p]);return r.length=u,r}})}}]);