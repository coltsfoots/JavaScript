(function(t){function e(e){for(var o,l,i=e[0],c=e[1],s=e[2],f=0,p=[];f<i.length;f++)l=i[f],n[l]&&p.push(n[l][0]),n[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=r[0]))}return t}var o={},n={app:0},a=[];function l(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=o,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(r,o,function(e){return t[e]}.bind(null,o));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var o=r("64a9"),n=r.n(o);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100vh",width:"100vw"},attrs:{id:"echarts"}})},i=[],c=r("313e"),s=r.n(c),u={data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(document.getElementById("echarts"));var t=function(){for(var t=[],e=1;e<13;e++)t.push(e+"month");return t}();this.chart.setOption({backgroundColor:"#344b58",title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["female","male","average"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"female",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"male",type:"bar",stack:"total",itemStyle:{normal:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})}}},f=u,p=r("2877"),d=Object(p["a"])(f,l,i,!1,null,null,null),h=d.exports,b={name:"app",components:{HelloWorld:h}},y=b,m=(r("034f"),Object(p["a"])(y,n,a,!1,null,null,null)),v=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,r){}});
//# sourceMappingURL=app.8183a596.js.map