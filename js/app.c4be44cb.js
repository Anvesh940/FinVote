(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},r={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/FinVote/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var v=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10cd":function(t,e,a){"use strict";a("3d8f")},"29ec":function(t,e,a){},"3d8f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("Header"),a("Drawer"),a("v-main",[a("v-container",{staticClass:"pa-8 pt-5",attrs:{fluid:""}},[a("router-view")],1)],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"deep-purple",dark:"","clipped-left":"",sytle:"z-index: 40"}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer.apply(null,arguments)}}}),a("v-toolbar-title",[t._v("Finastra")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",target:"_blank",name:"help-url"}},[a("v-icon",[t._v("mdi-help-circle-outline")])],1),a("v-btn",{attrs:{icon:"",target:"_blank",name:"settings"}},[a("v-icon",[t._v("mdi-cog")])],1),a("UserProfile")],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{bottom:"","min-width":"200px",rounded:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-avatar",{attrs:{size:"48"}},[a("v-icon",[t._v("mdi-account")])],1)],1)]}}])},[a("v-card",[a("v-list-item-content",{staticClass:"justify-center"},[a("div",{staticClass:"mx-auto text-center"},[a("v-avatar",[a("v-icon",[t._v("mdi-account")])],1),a("h3",[t._v(t._s(t.userData.userLoginId))]),a("p",{staticClass:"text-caption mt-1"},[t._v(" "+t._s(t.userData.emailId)+" ")]),a("v-divider",{staticClass:"my-3"}),a("v-btn",{attrs:{depressed:"",rounded:"",text:""},on:{click:t.handleLogout}},[t._v(" Logout ")])],1)])],1)],1)],1)},c=[],v={name:"userProfile",components:{},data:function(){return{modalConfig:{enabled:!1,persistent:!0,saveButton:"yes",cancelButton:"no",title:"confirm",width:450},modalContent:"logout",userData:{userLoginId:"User",emailId:"user@finastra.com"}}},methods:{handleLogout:function(){this.$router.push({name:"Login"})}}},d=v,u=a("2877"),p=a("6544"),m=a.n(p),h=a("8212"),b=a("8336"),f=a("b0af"),_=a("ce7e"),g=a("132d"),w=a("5d23"),V=a("e449"),C=Object(u["a"])(d,l,c,!1,null,null,null),x=C.exports;m()(C,{VAvatar:h["a"],VBtn:b["a"],VCard:f["a"],VDivider:_["a"],VIcon:g["a"],VListItemContent:w["a"],VMenu:V["a"]});var y=new i["a"]({}),I=y,j={name:"Header",data:function(){return{group:null,drawer:!1,drawerItems:[],mini:!0}},components:{UserProfile:x},methods:{toggleDrawer:function(){this.drawer=!this.drawer,this.mini=!this.mini,I.$emit("toggleDrawer",!0)}}},k=j,L=a("40dc"),T=a("5bc1"),S=a("2fa4"),P=a("2a7f"),O=Object(u["a"])(k,n,o,!1,null,null,null),D=O.exports;m()(O,{VAppBar:L["a"],VAppBarNavIcon:T["a"],VBtn:b["a"],VIcon:g["a"],VSpacer:S["a"],VToolbarTitle:P["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"appDrawer elevation-1",attrs:{right:t.$vuetify.rtl,app:"",width:"200",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"body-2"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},E=[],M={name:"Drawer",data:function(){return{group:"",items:[],drawer:!1}},created:function(){var t=this;I.$on("toggleDrawer",(function(e){t.drawer=!t.drawer}))}},N=M,F=(a("9482"),a("8860")),H=a("da13"),$=a("1baa"),B=a("34c3"),R=a("f774"),U=Object(u["a"])(N,A,E,!1,null,"7e4bfecc",null),J=U.exports;m()(U,{VDivider:_["a"],VIcon:g["a"],VList:F["a"],VListItem:H["a"],VListItemContent:w["a"],VListItemGroup:$["a"],VListItemIcon:B["a"],VListItemTitle:w["c"],VNavigationDrawer:R["a"]});var z={name:"App",components:{Header:D,Drawer:J},data:function(){return{}}},K=z,q=a("7496"),G=a("a523"),W=a("f6c4"),Q=Object(u["a"])(K,r,s,!1,null,null,null),X=Q.exports;m()(Q,{VApp:q["a"],VContainer:G["a"],VMain:W["a"]});var Y=a("f309");i["a"].use(Y["a"]);var Z=new Y["a"]({}),tt=a("8c4f"),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"my-5"},[a("v-row",[a("v-col",{staticClass:"text-h5 font-weight-bold ma-5",attrs:{cols:"8"}},[t._v(" Hi, Kiran ")]),a("v-col",{staticClass:"mr-5",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"text-h4"},[t._v("22")]),a("div",[t._v("Liked Projects")])]),a("v-col",{staticClass:"mr-5",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"text-h4"},[t._v("34")]),a("div",[t._v("Interested")])])],1)],1),a("v-row",[a("v-col",[a("v-card",[a("v-app-bar",{attrs:{elevation:"0"}},[a("v-toolbar-title",{staticClass:"text-h6 pl-0"},[t._v(" Top Teams ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-list",{attrs:{"three-line":""}},[t._l(t.trendingItems,(function(e,i){return[e.header?a("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?a("v-divider",{key:i,attrs:{inset:e.inset}}):t._e(),e.title?a("v-list-item",{key:e.title},[a("v-list-item-avatar",[e.avatar?a("v-img",{attrs:{src:e.avatar}}):a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-account-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",[t._v("View")])],1)],1):t._e()]})),a("v-card-actions",[a("v-spacer"),a("v-btn",[t._v("View All")])],1)],2)],1)],1),a("v-col",[a("v-card",[a("v-app-bar",{attrs:{elevation:"0"}},[a("v-toolbar-title",{staticClass:"text-h6 pl-0"},[t._v(" Trending Projects ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-list",{attrs:{"three-line":""}},[t._l(t.trendingItems,(function(e,i){return[e.header?a("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?a("v-divider",{key:i,attrs:{inset:e.inset}}):t._e(),e.title?a("v-list-item",{key:e.title},[a("v-list-item-avatar",[e.avatar?a("v-img",{attrs:{src:e.avatar}}):a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-account-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-thumb-up-outline")])],1)],1),a("v-list-item-action",[a("v-btn",{on:{click:t.viewProject}},[t._v("View")])],1)],1):t._e()]}))],2)],1)],1)],1),a("v-row",[a("v-col",{staticClass:"text-h5 font-weight-bold my-4"},[t._v(" PROJECTS ")])],1),a("v-row",t._l(t.projects,(function(e,i){return a("v-col",{key:i},[a("v-card",{staticClass:"mx-auto",attrs:{"min-width":"350",outlined:"",elevation:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6 mb-1"},[t._v(" "+t._s(e.title)+" ")]),a("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1),a("v-list-item-avatar",{attrs:{rounded:"",size:"80",color:"grey"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"font-weight-bold",attrs:{text:"",color:"deep-purple"},on:{click:t.viewProject}},[t._v("View")])],1)],1)],1)})),1)],1)},at=[],it={data:function(){return{trendingItems:[{title:"FINVOTE",subtitle:"A web page to show case all the hacka ideas"},{divider:!0},{title:"FINSHARE",subtitle:"Share ideas accross the organisation"}],projects:[{title:"FINVOTE",subtitle:"A web page to show case all the hacka ideas"},{title:"FINSHARE",subtitle:"Share ideas accross the organisation"},{title:"FINVOTE",subtitle:"A web page to show case all the hacka ideas"},{title:"FINSHARE",subtitle:"Share ideas accross the organisation"},{title:"FINVOTE",subtitle:"A web page to show case all the hacka ideas"},{title:"FINSHARE",subtitle:"Share ideas accross the organisation"},{title:"FINVOTE",subtitle:"A web page to show case all the hacka ideas"},{title:"FINSHARE",subtitle:"Share ideas accross the organisation"}]}},methods:{viewProject:function(){this.$router.push({name:"Project"})}}},rt=it,st=a("99d9"),nt=a("62ad"),ot=a("adda"),lt=a("1800"),ct=a("8270"),vt=a("0fd9"),dt=a("e0c7"),ut=Object(u["a"])(rt,et,at,!1,null,null,null),pt=ut.exports;m()(ut,{VAppBar:L["a"],VBtn:b["a"],VCard:f["a"],VCardActions:st["a"],VCol:nt["a"],VDivider:_["a"],VIcon:g["a"],VImg:ot["a"],VList:F["a"],VListItem:H["a"],VListItemAction:lt["a"],VListItemAvatar:ct["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:vt["a"],VSpacer:S["a"],VSubheader:dt["a"],VToolbarTitle:P["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container ma-0 pa-0"},[a("div",{staticClass:"item1"},[a("v-card",{staticClass:"my-5"},[a("v-row",[a("v-col",{staticClass:"text-h5 font-weight-bold ma-5",attrs:{cols:"8"}},[t._v(" "+t._s(t.project.projectName)+" ")]),a("v-col",{staticClass:"mr-5",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"text-h4"},[t._v(t._s(t.project.like))]),a("div",[t._v("VOTE")])]),a("v-col",{staticClass:"mr-5",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"text-h4"},[t._v(t._s(t.project.vote))]),a("div",[t._v("LIKE")])]),a("v-col",{staticClass:"mr-5",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"text-h4"},[t._v(t._s(t.project.contribute))]),a("div",[t._v("CONTRIBUTE")])])],1)],1)],1),a("div",{staticClass:"item2"},[a("v-card",[a("v-app-bar",{attrs:{elevation:"0"}},[a("v-toolbar-title",{staticClass:"text-h6 pl-0"},[t._v(" Project Details ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Description")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.project.projectDetails.description)+" ")]),a("v-list-item-title",{staticClass:"mt-4"},[t._v("Technologies Used")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.project.projectDetails.technologies)+" ")]),a("v-list-item-title",{staticClass:"mt-4"},[t._v("Duration")]),a("v-list-item-subtitle",[t._v(" 4 Months ")]),a("v-list-item-title",{staticClass:"mt-4"},[t._v("Team Name")]),a("v-list-item-subtitle",[t._v(" FinVote ")])],1)],1),a("v-card-actions",{staticClass:"mt-0 pt-0 justify-end"},[a("v-list-item-action",[a("v-btn",[t._v("Download Synopsis")])],1),a("v-list-item-action",[a("v-btn",[t._v("Project Demo")])],1)],1)],1)],1),a("div",{staticClass:"item3"},[a("v-card",[a("v-app-bar",{attrs:{elevation:"0"}},[a("v-toolbar-title",{staticClass:"text-h6 pl-0"},[t._v(" Team Members - "+t._s(t.project.numberOfMembers)+" ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,i){return[e.header?a("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?a("v-divider",{key:i,attrs:{inset:e.inset}}):a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{rounded:""}},[t._v("+"+t._s(e.xp)+"xp")])],1)],1)]}))],2)],1)],1),a("div",{staticClass:"item4"},[a("v-card",[a("v-app-bar",{attrs:{elevation:"0"}},[a("v-toolbar-title",{staticClass:"text-h6 pl-0"},[t._v(" FeedBack / Appreciation ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("v-textarea",{staticClass:"ml-2 mr-2 mt-4",attrs:{"auto-grow":"",filled:"",color:"deep-purple",rows:"4"}}),a("v-card-actions",{staticClass:"mt-0 pt-0 justify-end"},[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$refs.form.reset()}}},[t._v(" Clear ")]),a("v-btn",{staticClass:"white--text",attrs:{disabled:!t.form,loading:t.isLoading,color:"deep-purple accent-4",depressed:""}},[t._v(" Submit ")])],1)],1)],1)])},ht=[],bt={data:function(){return{project:{projectName:"FINVOTE",like:23,vote:55,contribute:12,numberOfMembers:4,projectDetails:{description:"Most companies have been fueled by innovation and change to develop new and competent products that can better engage customers, thereby affecting the bottom line. However, this approach has turned most innovations into a race to see who can come up with the most profitable idea, putting profit ahead of utility. When the same C-suite executive publishes a book decades later, quoting that utility should take precedence over profit, the irony is obvious. This is largely due to the fact that implementation decision-making power is concentrated in the hands of a small group.",technologies:"Vue JS, HTML5, CSS3"}},items:[{title:"Umashankar",avatar:"/kiran.jpg",subtitle:"UI Developer",xp:25},{divider:!0,inset:!0},{title:"Kiran",avatar:"/kiran.jpg",subtitle:"UI Developer",xp:35},{divider:!0,inset:!0},{title:"Anvesh",avatar:"/kiran.jpg",subtitle:"UI Developer",xp:55}]}}},ft=bt,_t=(a("10cd"),a("a844")),gt=Object(u["a"])(ft,mt,ht,!1,null,null,null),wt=gt.exports;m()(gt,{VAppBar:L["a"],VBtn:b["a"],VCard:f["a"],VCardActions:st["a"],VCol:nt["a"],VDivider:_["a"],VIcon:g["a"],VImg:ot["a"],VList:F["a"],VListItem:H["a"],VListItemAction:lt["a"],VListItemAvatar:ct["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:vt["a"],VSpacer:S["a"],VSubheader:dt["a"],VTextarea:_t["a"],VToolbarTitle:P["a"]});var Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"my-5 mx-auto",attrs:{width:"70%",height:"600px"}},[i("v-row",{staticClass:"pa-5 pl-5",staticStyle:{height:"100%"}},[i("v-col",{staticClass:"ma-6",attrs:{cols:"5"}},[i("v-row",{staticClass:"mb-5"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:a("cf05"),"max-width":"70px"}})],1),i("v-row",{staticClass:"font-weight-bold  darken-4 text-h5 mb-4"},[t._v(" FINVOTE ")]),i("v-row",[i("v-text-field",{attrs:{outlined:"",label:"Username"}})],1),i("v-row",[i("v-text-field",{attrs:{outlined:"",label:"Password"}})],1),i("v-row",[i("v-spacer"),i("v-btn",{attrs:{fab:"",small:"",color:"deep-purple"},on:{click:t.handleLogin}},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-right")])],1)],1)],1),i("v-col",[i("v-card",{attrs:{elevation:"0",color:"grey lighten-2",rounded:"0",width:"100%",height:"100%"}})],1)],1)],1)},Ct=[],xt={data:function(){return{}},methods:{handleLogin:function(){this.$router.push({name:"Dashboard"})}}},yt=xt,It=a("8654"),jt=Object(u["a"])(yt,Vt,Ct,!1,null,null,null),kt=jt.exports;m()(jt,{VBtn:b["a"],VCard:f["a"],VCol:nt["a"],VIcon:g["a"],VImg:ot["a"],VRow:vt["a"],VSpacer:S["a"],VTextField:It["a"]}),i["a"].use(tt["a"]);var Lt=[{path:"/",redirect:{name:"Login"}},{path:"/login",name:"Login",component:kt},{path:"/dashboard",name:"Dashboard",component:pt},{path:"/dashboard/project",name:"Project",component:wt}],Tt=new tt["a"]({mode:"history",base:"/",routes:Lt}),St=Tt;i["a"].config.productionTip=!1,new i["a"]({vuetify:Z,router:St,render:function(t){return t(X)}}).$mount("#app")},9482:function(t,e,a){"use strict";a("29ec")},cf05:function(t,e,a){t.exports=a.p+"img/logo.e2d82329.png"}});
//# sourceMappingURL=app.c4be44cb.js.map