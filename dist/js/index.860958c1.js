(function(e){function t(t){for(var r,a,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={index:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ffb4")},ffb4:function(e,t,n){"use strict";n.r(t);n("0fae");var r=n("2b0e"),i=n("750b"),o=n("5c96"),a=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-drawer",{attrs:{title:"通话设置",visible:e.drawer,"with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[n("el-form",{staticStyle:{padding:"20px"},attrs:{size:"small"}},[e._v(" 通话设置 "),n("el-divider"),n("el-form-item",{attrs:{label:"分辨率"}},[n("el-select",{staticStyle:{width:"100%"},model:{value:e.datas.resolution,callback:function(t){e.$set(e.datas,"resolution",t)},expression:"datas.resolution"}},e._l(e.resolutionOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"初始码率"}},[n("el-input")],1),n("el-form-item",{attrs:{label:"最小码率"}},[n("el-input")],1),n("el-form-item",{attrs:{label:"最大码率"}},[n("el-input")],1),n("el-form-item",{attrs:{label:"帧率设置"}},[n("el-input")],1),n("el-form-item",{attrs:{label:"音频输入设备"}},[n("el-select",{staticStyle:{width:"100%"},model:{value:e.datas.audioDeviceId,callback:function(t){e.$set(e.datas,"audioDeviceId",t)},expression:"datas.audioDeviceId"}},e._l(e.audioDevices,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label||"未命名",value:e.deviceId}})})),1)],1),n("el-form-item",{attrs:{label:"视频输入设备"}},[n("el-select",{staticStyle:{width:"100%"},model:{value:e.datas.videoDeviceId,callback:function(t){e.$set(e.datas,"videoDeviceId",t)},expression:"datas.videoDeviceId"}},e._l(e.videoDevices,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label||"未命名",value:e.deviceId}})})),1)],1)],1)],1)],1)},u=[],c=n("9ab4"),s=Object.keys(RongRTC.Resolution).map((function(e){var t=e.split("_").map((function(e){return parseInt(e)})),n=t[0],r=t[1];return{width:n,height:r,label:t.join(" * "),value:t.join("*")}})).sort((function(e,t){return e.width-t.width})),d=Object(i["b"])({setup:function(e,t){var n=this,r=(t.root,Object(i["e"])(!1)),o=Object(i["d"])(s),a=Object(i["d"])([]),l=Object(i["d"])([]),u=Object(i["d"])({resolution:s[0].value,defaultRate:300,maxRate:1e3,minRate:100,frameRate:"",audioDeviceId:"",videoDeviceId:""}),d=function(){return Object(c["a"])(n,void 0,void 0,(function(){var e,t;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.mediaDevices.enumerateDevices()];case 1:return e=n.sent(),[3,3];case 2:return t=n.sent(),console.error(t),[2];case 3:return e.forEach((function(e){e.deviceId;switch(e.kind){case"audioinput":a.push(e);break;case"videoinput":l.push(e);break}})),a.length>0&&(u.audioDeviceId=a[0].deviceId),l.length>0&&(u.videoDeviceId=l[0].deviceId),[2]}}))}))};return Object(i["c"])((function(){return Object(c["a"])(n,void 0,void 0,(function(){return Object(c["b"])(this,(function(e){return document.getElementById("btn_settings").onclick=function(){r.value=!0},d(),RongSeal.getDataFromVue=function(){return Object.assign({},u)},[2]}))}))})),{drawer:r,datas:u,resolutionOptions:o,audioDevices:a,videoDevices:l}}}),f=d,v=n("2877"),b=Object(v["a"])(f,l,u,!1,null,null,null),p=b.exports;r["default"].use(i["a"]),r["default"].use(a.a),r["default"].config.productionTip=!1,window.console.warn("Code Version：b4d6da82a792858d194bfc71dcd9fea50d71abc9\n"),window.console.warn("Demo Version：3.2.5"),new r["default"]({render:function(e){return e(p)}}).$mount("#vue-app")}});