(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-723c4604"],{f05e:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return u}));var a=e("b775");function r(t){return Object(a["a"])({url:"/payments",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/payments/"+t,method:"get"})}},f45f:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("payment data")]),t._v(" "),e("pre",[t._v(t._s(t.payment))])])},r=[],u=e("f05e"),c={name:"PaymentShow",components:{},params:["id"],data:function(){return{payment:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(u["a"])(this.$route.params.id).then((function(n){t.payment=n}))}}},i=c,o=e("2877"),s=Object(o["a"])(i,a,r,!1,null,null,null);n["default"]=s.exports}}]);