webpackJsonp([1],{"4a/0":function(t,e){},"9/Vd":function(t,e){},E4DC:function(t,e){},"F/wA":function(t,e){},"c//G":function(t,e){},i2ez:function(t,e){},lVK7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("xg-header",{attrs:{fixed:"fixed",title:"记事本"}}),this._v(" "),e("router-view"),this._v(" "),e("xg-tab",{attrs:{fixed:"fixed"}})],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App",data:function(){return{on:!0}},computed:{}},n,!1,function(t){s("9/Vd")},null,null).exports,r=s("/ocq"),o={name:"Book",mounted:function(){var t=localStorage.getItem("notes")||"[]";this.notes=JSON.parse(t)},data:function(){return{selected:"all",notes:[]}},watch:{notes:{handler:function(t){console.log(t)},deep:!0}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"all"}},[t._v("全部")]),t._v(" "),s("mt-tab-item",{attrs:{id:"finish"}},[t._v("已完成")]),t._v(" "),s("mt-tab-item",{attrs:{id:"unfinish"}},[t._v("未完成")])],1),t._v(" "),s("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"all"}},t._l(t.notes,function(e,a){return s("xg-note-card",{key:a,attrs:{title:e.title,content:e.content,tagType:e.tagType,date:e.date},model:{value:e.finish,callback:function(s){t.$set(e,"finish",s)},expression:"note.finish"}})})),t._v(" "),s("mt-tab-container-item",{attrs:{id:"finish"}},t._l(t.notes.filter(function(t){return t.finish}),function(e,a){return s("xg-note-card",{key:a,attrs:{title:e.title,content:e.content,tagType:e.tagType,date:e.date},model:{value:e.finish,callback:function(s){t.$set(e,"finish",s)},expression:"note.finish"}})})),t._v(" "),s("mt-tab-container-item",{attrs:{id:"unfinish"}},t._l(t.notes.filter(function(t){return!t.finish}),function(e,a){return s("xg-note-card",{key:a,attrs:{title:e.title,content:e.content,tagType:e.tagType,date:e.date},model:{value:e.finish,callback:function(s){t.$set(e,"finish",s)},expression:"note.finish"}})}))],1)],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(t){s("F/wA")},null,null).exports,u=s("mvHQ"),d=s.n(u),f={data:function(){return{form:{title:"",content:"",tagType:"",date1:"",date2:"",finish:!1,collect:!1}}},methods:{resetForm:function(){this.$router.push("/")},submitForm:function(){var t=this;this.form.date2?this.form.date=this.form.date2:this.form.date=this.form.date1;var e=localStorage.getItem("notes")||"[]";(e=JSON.parse(e)).push(this.form),e=d()(e),localStorage.setItem("notes",e),this.$messagebox.alert("添加成功！").then(function(e){t.$router.push("/")})}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xg-form"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"40px"}},[s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"内容"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"时间"}},[s("el-col",{attrs:{span:11}},[s("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),s("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),t._v(" "),s("el-col",{attrs:{span:11}},[s("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"标签类型","label-width":"80px"}},[s("el-select",{attrs:{placeholder:"请选择标签类型"},model:{value:t.form.tagType,callback:function(e){t.$set(t.form,"tagType",e)},expression:"form.tagType"}},[s("el-option",{attrs:{label:"蓝色",value:""}}),t._v(" "),s("el-option",{attrs:{label:"绿色",value:"success"}}),t._v(" "),s("el-option",{attrs:{label:"灰色",value:"info"}}),t._v(" "),s("el-option",{attrs:{label:"黄色",value:"warning"}}),t._v(" "),s("el-option",{attrs:{label:"红色",value:"danger"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"是否完成","label-width":"80px"}},[s("el-switch",{model:{value:t.form.finish,callback:function(e){t.$set(t.form,"finish",e)},expression:"form.finish"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"是否收藏","label-width":"80px"}},[s("el-switch",{model:{value:t.form.collect,callback:function(e){t.$set(t.form,"collect",e)},expression:"form.collect"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交")]),t._v(" "),s("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var v=s("VU/8")(f,m,!1,function(t){s("i2ez")},"data-v-019bf1d1",null).exports;a.default.use(r.a);var h=new r.a({routes:[{path:"/",redirect:"/book"},{path:"/book",name:"Book",meta:{title:"记事本"},component:c},{path:"/new",meta:{title:"新建"},component:v}]});h.beforeEach(function(t,e,s){document.title=t.meta.title,s()});var j=h,p=s("Au9i"),b=s.n(p),g=s("zL8q"),x=s.n(g),_={success:"xg-note-card-icon-success",info:"xg-note-card-icon-info",warning:"xg-note-card-icon-warning",danger:"xg-note-card-icon-danger"},k={name:"XgNoteCard",mounted:function(){},props:{title:{type:String,default:"标题"},content:{type:String,default:"内容"},date:{type:[Date,Number,String],default:Date.now},tagType:String,value:Boolean},data:function(){return{}},computed:{isFinish:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},_tagType:function(){return _[this.tagType]||""},_formatDate:function(){return 1}},watch:{}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{"leave-active-class":"animated bounceOutLeft"}},[s("div",{staticClass:"xg-note-card"},[s("div",{staticClass:"xg-note-card-icon",class:t._tagType},[s("i",{staticClass:"icon icon-tag"})]),t._v(" "),s("div",{staticClass:"xg-note-card-btn"},[s("xg-checkbox",{model:{value:t.isFinish,callback:function(e){t.isFinish=e},expression:"isFinish"}})],1),t._v(" "),s("div",{staticClass:"xg-note-card-header"},[s("div",{staticClass:"xg-note-card-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"xg-note-card-date"},[t._v(t._s(t._f("formatDate")(t.date,!0)))])]),t._v(" "),s("div",{staticClass:"xg-note-card-content"},[t._v("\n      "+t._s(t.content)+"\n    ")])])])},staticRenderFns:[]};var w=s("VU/8")(k,y,!1,function(t){s("x9DH")},"data-v-1fc541f2",null).exports,C={name:"xg-tab",props:{fixed:Boolean}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"xg-tab",class:{"is-fixed":t.fixed}},[s("router-link",{staticClass:"xg-tab-item",attrs:{to:"/book"}},[s("div",{staticClass:"xg-tab-item-icon"},[s("i",{staticClass:"icon icon-book"})]),t._v(" "),s("div",{staticClass:"xg-tab-item-label"},[t._v("\n          记事本\n        ")])]),t._v(" "),s("router-link",{staticClass:"xg-tab-item",attrs:{to:"/new"}},[s("div",{staticClass:"xg-tab-item-icon"},[s("i",{staticClass:"icon icon-new"})]),t._v(" "),s("div",{staticClass:"xg-tab-item-label"},[t._v("\n          新建\n        ")])]),t._v(" "),s("router-link",{staticClass:"xg-tab-item",attrs:{to:"/collect"}},[s("div",{staticClass:"xg-tab-item-icon"},[s("i",{staticClass:"icon icon-collect"})]),t._v(" "),s("div",{staticClass:"xg-tab-item-label"},[t._v("\n          收藏\n        ")])]),t._v(" "),s("router-link",{staticClass:"xg-tab-item",attrs:{to:"/me"}},[s("div",{staticClass:"xg-tab-item-icon"},[s("i",{staticClass:"icon icon-user"})]),t._v(" "),s("div",{staticClass:"xg-tab-item-label"},[t._v("\n          我\n        ")])])],1),t._v(" "),t.fixed?s("div",{staticClass:"xg-tab is-placeholder"}):t._e()])},staticRenderFns:[]};var F=s("VU/8")(C,z,!1,function(t){s("4a/0")},"data-v-3d835a66",null).exports,V={name:"xg-header",props:{fixed:Boolean,title:String}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"xg-header",class:{"is-fixed":t.fixed}},[s("div",{staticClass:"xg-header-button is-left"},[s("router-link",{attrs:{to:"/"}},[s("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),s("h1",{staticClass:"xg-header-title",domProps:{textContent:t._s(t.title)}}),t._v(" "),s("div",{staticClass:"xg-header-button is-right"},[s("mt-button",{attrs:{icon:"more"}})],1)]),t._v(" "),t.fixed?s("div",{staticClass:"xg-header is-placeholder"}):t._e()])},staticRenderFns:[]};var S=s("VU/8")(V,E,!1,function(t){s("E4DC")},"data-v-0c449cf2",null).exports,T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"xg-checkbox-label"},[s("span",{staticClass:"xg-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"xg-checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var s=t.currentValue,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.currentValue=s.concat([null])):i>-1&&(t.currentValue=s.slice(0,i).concat(s.slice(i+1)))}else t.currentValue=n}}}),t._v(" "),s("span",{staticClass:"xg-checkbox-core"})])])},staticRenderFns:[]};var N=s("VU/8")({name:"xg-checkbox",props:["value"],data:function(){return{currentValue:this.value}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t)}}},T,!1,function(t){s("c//G")},"data-v-a48502ca",null).exports,O=s("PJh5");O.locale("zh-cn"),a.default.filter("formatDate",function(t,e){return t=O(t),e?t.fromNow():t.format("YYYY-MM-DD HH:mm")}),a.default.use(b.a),a.default.use(x.a),a.default.component(F.name,F),a.default.component(S.name,S),a.default.component(N.name,N),a.default.component(w.name,w),a.default.config.productionTip=!1,new a.default({router:j,render:function(t){return t(i)}}).$mount("#app")},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},x9DH:function(t,e){}},["lVK7"]);
//# sourceMappingURL=app.fc74d4229de9ee2d1d8a.js.map