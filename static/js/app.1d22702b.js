(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["sub-vue-app"]=e():t["sub-vue-app"]=e()})(window,(function(){return function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function s(t){return l.p+"static/js/"+({about:"about",fail:"fail"}[t]||t)+"."+{about:"f4644b64",fail:"40a5c585"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="static/css/"+({about:"about",fail:"fail"}[t]||t)+"."+{about:"f95bf061",fail:"31d6cfe0"}[t]+".css",o=l.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===i||u===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],h.parentNode.removeChild(h),n(r)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",f.name="ChunkLoadError",f.type=i,f.request=a,n[1](f)}o[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/Vadmin/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp_sub-vue"]=window["webpackJsonp_sub-vue"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=u;return r.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("56d7")},"0246":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bootstrap",(function(){return $})),n.d(e,"mount",(function(){return W})),n.d(e,"unmount",(function(){return Y}));n("96cf");var i=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("leaflet")])],1),n("router-view")],1)},s=[],l=(n("034f"),n("2877")),c={},u=Object(l["a"])(c,r,s,!1,null,null,null),f=u.exports,h=(n("83f4"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loading?t._e():n("Map"),t.loading?n("Loading"):t._e()],1)}),d=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"out"},[n("div",{staticClass:"fade-in"},[n("div",{staticClass:"container"},[n("div",{staticClass:"one common"}),n("div",{staticClass:"two common"}),n("div",{staticClass:"three common"}),n("div",{staticClass:"four common"}),n("div",{staticClass:"five common"}),n("div",{staticClass:"six common"}),n("div",{staticClass:"seven common"}),n("div",{staticClass:"eight common"})]),n("div",{staticClass:"bar"},[n("div",{staticClass:"progress"})])])])}],g={name:"loading",components:{}},v=g,b=(n("5e94"),Object(l["a"])(v,p,m,!1,null,"1cad298c",null)),x=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"EC"}})},y=[],C=(n("99af"),n("b0c0"),n("2909")),E=n("d4ec"),j=n("bee2"),O=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object(E["a"])(this,t),!e)throw Error("boxId为必传项");this.boxId=e,this.config={priority:"top",partition:1.4,lineColor:"rgba(253, 129, 91, 0.8)",offset:[5,5],L1:{time:.3,long:40},L2:{time:.3,long:40},text:{time:.5,font:"14px Arial",color:"#fff",padding:[10,10],width:120,height:60,lineHeight:24,backgroundColor:"rgba(50, 50, 50, 0.5)",borderColor:"rgba(253, 129, 91, 1)",borderWidth:1,angle:{width:2,long:15}}},_.merge(this.config,n,{left:!1,top:!1})}return Object(j["a"])(t,[{key:"getPosOrSize",value:function(t,e){var n=this.config.L1.long*Math.sin(Math.PI/4),i=n+this.config.L2.long+this.config.text.width,a=n+this.config.text.height/2;if("size"===t)return this.config.width=i,this.config.height=a,{width:i,height:a};var o=document.getElementById(this.boxId),r=o.offsetWidth,s=o.offsetHeight,l=e[0],c=e[1];return this.config.left=!1,l+i>=r/this.config.partition&&(l=l-i-this.config.offset[0],this.config.left=!0),"top"===this.config.priority?(this.config.top=!0,c=c-a-this.config.offset[0],c<=0&&(c=e[1],this.config.top=!1),[l,c]):(this.config.top=!1,c+a>=s&&(c=c-a-this.config.offset[0],this.config.top=!0),[l,c])}},{key:"getTooltipDom",value:function(t){if(!t)throw Error("text为必传项");return this.clickTrigger(t)}},{key:"createTooltip",value:function(t){var e=this;setTimeout((function(n){e.t=new L("tCanvas",e.config,t)}),0)}},{key:"clickTrigger",value:function(t){this.createTooltip(t);var e=this.getPosOrSize("size");return'<canvas id="tCanvas" width="'.concat(e.width,'" height="').concat(e.height,'"></canvas>')}}]),t}(),L=function(){function t(e,n,i){Object(E["a"])(this,t),this.config=n,this.text=i,this.totalTime=0,this.over=!1,this.stage=new createjs.Stage(e),this.timeline=new TimelineMax({repeat:0}),this.g=new createjs.Graphics,this.lineShape=new createjs.Shape(this.g),this.textContainer=new createjs.Container,this.textShape=new createjs.Shape,this.textContainer.addChild(this.textShape),this.stage.addChild(this.lineShape,this.textContainer),this.init(),this.begin(),this.update()}return Object(j["a"])(t,[{key:"init",value:function(){this.start=[0,0],this.config.left&&(this.start[0]=this.config.width),this.config.top&&(this.start[1]=this.config.height)}},{key:"begin",value:function(){this.L1(),this.L2(),this.addText()}},{key:"L1",value:function(){var t=this,e=t.config,n=new TimelineMax,i={s:0},a=e.L1.long*Math.sin(Math.PI/4);t.config.left?t.config.top?this.L1End=[t.start[0]-a,t.start[1]-a]:this.L1End=[t.start[0]-a,t.start[1]+a]:t.config.top?this.L1End=[a,t.start[1]-a]:this.L1End=[a,a],n.to(i,e.L1.time,{s:1,onUpdate:function(){var n,o,r,s,l=i.s;t.config.left?t.config.top?(n=t.g.c().s(e.lineColor)).mt.apply(n,Object(C["a"])(t.start)).lt(t.start[0]-a*l,t.start[1]-a*l):(o=t.g.c().s(e.lineColor)).mt.apply(o,Object(C["a"])(t.start)).lt(t.start[0]-a*l,t.start[1]+a*l):t.config.top?(r=t.g.c().s(e.lineColor)).mt.apply(r,Object(C["a"])(t.start)).lt(a*l,t.start[1]-a*l):(s=t.g.c().s(e.lineColor)).mt.apply(s,Object(C["a"])(t.start)).lt(a*l,a*l);t.update()}}),this.timeline.add(n,this.totalTime),this.totalTime+=e.L1.time}},{key:"L2",value:function(){var t=this,e=t.config,n=new TimelineMax,i={s:0};n.to(i,e.L2.time,{s:1,onUpdate:function(){var n,a,o,r,s=i.s;t.config.left?(n=(a=t.g.c().s(e.lineColor)).mt.apply(a,Object(C["a"])(t.start))).lt.apply(n,Object(C["a"])(t.L1End)).lt(t.L1End[0]-e.L2.long*s,t.L1End[1]):(o=(r=t.g.c().s(e.lineColor)).mt.apply(r,Object(C["a"])(t.start))).lt.apply(o,Object(C["a"])(t.L1End)).lt(t.L1End[0]+e.L2.long*s,t.L1End[1]);t.update()}}),this.timeline.add(n,this.totalTime),this.totalTime+=e.L2.time}},{key:"addText",value:function(){var t=this,e=t.config,n=new TimelineMax,i={s:0},a=[t.L1End[0]+e.L2.long,t.L1End[1]];t.config.left&&(a=[t.L1End[0]-e.L2.long,t.L1End[1]]),n.to(i,e.text.time,{s:1,onStart:function(){var n,i,o,r=0;r=t.config.left?a[0]-e.text.width:a[0],(n=(i=(o=t.g.c().s(e.lineColor)).mt.apply(o,Object(C["a"])(t.start))).lt.apply(i,Object(C["a"])(t.L1End))).lt.apply(n,Object(C["a"])(a)),t.textContainer.x=r,t.textContainer.y=a[1]-e.text.height/2,t.textBorder(e.text.width,e.text.height-2),t.textC=new createjs.Text(t.text,e.text.font,e.text.color),t.textC.alpha=0,t.textC.lineHeight=e.text.lineHeight,t.textC.x=e.text.padding[0],t.textC.y=e.text.padding[1],t.textContainer.addChild(t.textC),t.textShape.graphics.c().f(e.text.backgroundColor).r(e.text.angle.width,e.text.angle.width,e.text.width-2*e.text.angle.width,e.text.height-2*e.text.angle.width),t.textShape.alpha=0,t.update()},onUpdate:function(){t.textC&&(t.textC.alpha=i.s,t.textShape.alpha=Math.sin(i.s*Math.PI*2.5),t.update())},onComplete:function(){t.over=!0}}),this.timeline.add(n,this.totalTime)}},{key:"textBorder",value:function(t,e){var n=1,i=new createjs.Shape,a=new createjs.Shape,o=this.config.text.borderColor;this.textContainer.addChild(i,a);var r=this.config.text.angle,s=r.width/2,l=new TimelineMax,c={s:0};i.graphics.c().s(o).ss(r.width).mt(s,r.long).lt(s,s).lt(r.long,s).mt(s,e-r.long).lt(s,e-s).lt(r.long,e-s).mt(t-r.long,0).lt(t-s,s).lt(t-s,r.long).mt(t-r.long,e).lt(t-s,e-s).lt(t-s,e-r.long),l.to(c,this.config.text.time/4,{s:1,onUpdate:function(){var e=c.s;a.graphics.c().s(o).ss(n).mt(s,s).lt((t-s)*e,s)}}).to(c,this.config.text.time/4,{s:0,onUpdate:function(){var i=1-c.s;a.graphics.c().s(o).ss(n).mt(s,s).lt(t-s,s).lt(t-s,(e-s)*i)}}).to(c,this.config.text.time/4,{s:1,onUpdate:function(){var i=c.s;a.graphics.c().s(o).ss(n).mt(s,s).lt(t-s,s).lt(t-s,e-s).lt(t-s-(t-2*s)*i,e-s)}}).to(c,this.config.text.time/4,{s:0,onUpdate:function(){var i=1-c.s;a.graphics.c().s(o).ss(n).mt(s,s).lt(t-s,s).lt(t-s,e-s).lt(s,e-s).lt(s,e-s-(e-2*s)*i)}}),this.timeline.add(l,this.totalTime)}},{key:"update",value:function(){this.stage.update()}}]),t}(),T=[{name:"鄂尔多斯",value:12},{name:"招远",value:12},{name:"舟山",value:12},{name:"齐齐哈尔",value:14},{name:"大庆",value:27},{name:"承德",value:25},{name:"厦门",value:26},{name:"汕尾",value:26},{name:"潮州",value:26},{name:"丹东",value:27},{name:"太仓",value:27},{name:"曲靖",value:27},{name:"烟台",value:28},{name:"福州",value:29},{name:"渭南",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"北京",value:79},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84}],k={海门:[121.15,31.89],鄂尔多斯:[109.781327,39.608266],招远:[120.38,37.35],舟山:[122.207216,29.985295],齐齐哈尔:[123.97,47.33],盐城:[120.13,33.38],赤峰:[118.87,42.28],青岛:[120.33,36.07],乳山:[121.52,36.89],金昌:[102.188043,38.520089],泉州:[118.58,24.93],莱西:[120.53,36.86],日照:[119.46,35.42],胶南:[119.97,35.88],南通:[121.05,32.08],拉萨:[91.11,29.97],云浮:[112.02,22.93],梅州:[116.1,24.55],文登:[122.05,37.2],上海:[121.48,31.22],攀枝花:[101.718637,26.582347],威海:[122.1,37.5],承德:[117.93,40.97],厦门:[118.1,24.46],汕尾:[115.375279,22.786211],潮州:[116.63,23.68],丹东:[124.37,40.13],太仓:[121.1,31.45],曲靖:[103.79,25.51],烟台:[121.39,37.52],福州:[119.3,26.08],瓦房店:[121.979603,39.627114],即墨:[120.45,36.38],抚顺:[123.97,41.97],玉溪:[102.52,24.35],张家口:[114.87,40.82],阳泉:[113.57,37.85],莱州:[119.942327,37.177017],湖州:[120.1,30.86],汕头:[116.69,23.39],昆山:[120.95,31.39],宁波:[121.56,29.86],湛江:[110.359377,21.270708],揭阳:[116.35,23.55],荣成:[122.41,37.16],连云港:[119.16,34.59],葫芦岛:[120.836932,40.711052],常熟:[120.74,31.64],东莞:[113.75,23.04],河源:[114.68,23.73],淮安:[119.15,33.5],泰州:[119.9,32.49],南宁:[108.33,22.84],营口:[122.18,40.65],惠州:[114.4,23.09],江阴:[120.26,31.91],蓬莱:[120.75,37.8],韶关:[113.62,24.84],嘉峪关:[98.289152,39.77313],广州:[113.23,23.16],延安:[109.47,36.6],太原:[112.53,37.87],清远:[113.01,23.7],中山:[113.38,22.52],昆明:[102.73,25.04],寿光:[118.73,36.86],盘锦:[122.070714,41.119997],长治:[113.08,36.18],深圳:[114.07,22.62],珠海:[113.52,22.3],宿迁:[118.3,33.96],咸阳:[108.72,34.36],铜川:[109.11,35.09],平度:[119.97,36.77],佛山:[113.11,23.05],海口:[110.35,20.02],江门:[113.06,22.61],章丘:[117.53,36.72],肇庆:[112.44,23.05],大连:[121.62,38.92],临汾:[111.5,36.08],吴江:[120.63,31.16],石嘴山:[106.39,39.04],沈阳:[123.38,41.8],苏州:[120.62,31.32],茂名:[110.88,21.68],嘉兴:[120.76,30.77],长春:[125.35,43.88],胶州:[120.03336,36.264622],银川:[106.27,38.47],张家港:[120.555821,31.875428],三门峡:[111.19,34.76],锦州:[121.15,41.13],南昌:[115.89,28.68],柳州:[109.4,24.33],三亚:[109.511909,18.252847],自贡:[104.778442,29.33903],吉林:[126.57,43.87],阳江:[111.95,21.85],泸州:[105.39,28.91],西宁:[101.74,36.56],宜宾:[104.56,29.77],呼和浩特:[111.65,40.82],成都:[104.06,30.67],大同:[113.3,40.12],镇江:[119.44,32.2],桂林:[110.28,25.29],张家界:[110.479191,29.117096],宜兴:[119.82,31.36],北海:[109.12,21.49],西安:[108.95,34.27],金坛:[119.56,31.74],东营:[118.49,37.46],牡丹江:[129.58,44.6],遵义:[106.9,27.7],绍兴:[120.58,30.01],扬州:[119.42,32.39],常州:[119.95,31.79],潍坊:[119.1,36.62],重庆:[106.54,29.59],台州:[121.420757,28.656386],南京:[118.78,32.04],滨州:[118.03,37.36],贵阳:[106.71,26.57],无锡:[120.29,31.59],本溪:[123.73,41.3],克拉玛依:[84.77,45.59],渭南:[109.5,34.52],马鞍山:[118.48,31.56],宝鸡:[107.15,34.38],焦作:[113.21,35.24],句容:[119.16,31.95],北京:[116.46,39.92],徐州:[117.2,34.26],衡水:[115.72,37.72],包头:[110,40.58],绵阳:[104.73,31.48],乌鲁木齐:[87.68,43.77],枣庄:[117.57,34.86],杭州:[120.19,30.26],淄博:[118.05,36.78],鞍山:[122.85,41.12],溧阳:[119.48,31.43],库尔勒:[86.06,41.68],安阳:[114.35,36.1],开封:[114.35,34.79],济南:[117,36.65],德阳:[104.37,31.13],温州:[120.65,28.01],九江:[115.97,29.71],邯郸:[114.47,36.6],临安:[119.72,30.23],兰州:[103.73,36.03],沧州:[116.83,38.33],临沂:[118.35,35.05],南充:[106.110698,30.837793],天津:[117.2,39.13],富阳:[119.95,30.07],泰安:[117.13,36.18],诸暨:[120.23,29.71],郑州:[113.65,34.76],哈尔滨:[126.63,45.75],聊城:[115.97,36.45],芜湖:[118.38,31.33],唐山:[118.02,39.63],平顶山:[113.29,33.75],邢台:[114.48,37.05],德州:[116.29,37.45],济宁:[116.59,35.38],荆州:[112.239741,30.335165],宜昌:[111.3,30.7],义乌:[120.06,29.32],丽水:[119.92,28.45],洛阳:[112.44,34.7],秦皇岛:[119.57,39.95],株洲:[113.16,27.83],石家庄:[114.48,38.03],莱芜:[117.67,36.19],常德:[111.69,29.05],保定:[115.48,38.85],湘潭:[112.91,27.87],金华:[119.64,29.12],岳阳:[113.09,29.37],长沙:[113,28.21],衢州:[118.88,28.97],廊坊:[116.7,39.53],菏泽:[115.480656,35.23375],合肥:[117.27,31.86],武汉:[114.31,30.52],大庆:[125.03,46.58]},S={data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=function(t){for(var e=[],n=0;n<t.length;n++){var i=k[t[n].name];i&&e.push({name:t[n].name,value:i.concat(t[n].value)})}return e},e=document.getElementById("EC"),n=echarts.init(e),i=new O("EC"),a={title:{top:20,text:"",subtext:"",left:"center",textStyle:{color:"#fff"}},backgroundColor:"transparent",tooltip:{trigger:"item",triggerOn:"click",backgroundColor:"transparent",position:function(t){var e=i.getPosOrSize("pos",t);return e},formatter:function(t){var e="地点：".concat(t.name,"\n数量：").concat(t.value[2]),n=i.getTooltipDom(e);return n}},legend:{show:!1},geo:{map:"china",label:{emphasis:{show:!1}},roam:!1,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#f00"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"Tooltip Test",type:"effectScatter",coordinateSystem:"geo",data:t(T),symbolSize:function(t){return t[2]/5},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};n.setOption(a,!0);var o=null,r=function(t){var e=0;o&&clearInterval(o),o=setInterval((function(t){n.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e}),e++,e>=T.length&&(e=0)}),1e4)};r();var s=null;e.addEventListener("mousemove",(function(t){s&&clearTimeout(s),o&&clearInterval(o),s=setTimeout((function(t){r()}),2e3)}))}}},P=S,I=(n("d396"),Object(l["a"])(P,w,y,!1,null,"7d814af9",null)),M=I.exports,A={name:"Home",components:{Loading:x,Map:M},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),2e3)}},N=A,B=(n("63e3"),Object(l["a"])(N,h,d,!1,null,"206a067c",null)),U=B.exports,H=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/404",component:function(){return n.e("fail").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404",hidden:!0}],R=H;a["a"].config.productionTip=!1,a["a"].use(o["a"]);var D=null,z=null;function $(){return K.apply(this,arguments)}function K(){return K=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}function W(){return Q.apply(this,arguments)}function Q(){return Q=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:D=new o["a"]({base:(window.__POWERED_BY_QIANKUN__,"/Vadmin/"),mode:"history",routes:R}),z=new a["a"]({router:D,render:function(t){return t(f)}}).$mount("#app");case 2:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}function Y(){return J.apply(this,arguments)}function J(){return J=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:z.$destroy(),z=null,D=null;case 3:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||W()},"5e94":function(t,e,n){"use strict";var i=n("0246"),a=n.n(i);a.a},"63e3":function(t,e,n){"use strict";var i=n("d2b4"),a=n.n(i);a.a},"83f4":function(t,e,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"85ec":function(t,e,n){},d2b4:function(t,e,n){},d396:function(t,e,n){"use strict";var i=n("f8ec"),a=n.n(i);a.a},f8ec:function(t,e,n){}})}));
//# sourceMappingURL=app.1d22702b.js.map