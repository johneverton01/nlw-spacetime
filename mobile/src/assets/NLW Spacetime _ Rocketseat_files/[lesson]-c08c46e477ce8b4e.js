(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9940],{99556:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]/[track]/[lesson]",function(){return i(51830)}])},862:function(e,t,i){"use strict";i.d(t,{B:function(){return p}});var n=i(85893),r=i(25675),a=i(60155),o=i(74296),s=i(3621),l=(0,s.zo)("div",{display:"flex",width:"100%",height:"100%",padding:"$6",border:"1px solid $grey-600",borderRadius:"$sm",maxWidth:"35.375rem",marginLeft:"$6","> span":{alignSelf:"flex-start"},variants:{disabled:{true:{pointerEvents:"none",opacity:.7}},list:{true:{height:"unset",maxWidth:"46rem",background:"$grey-800",border:"1px solid $grey-800",marginBottom:"$6",marginLeft:"unset"}}},"@media (max-width: 959px)":{marginTop:"2.75rem",alignSelf:"center",marginLeft:"unset"}}),d=(0,s.zo)("div",{display:"grid",gridTemplateAreas:'"flag name tag" ". description description" ". status status"',columnGap:"$6",alignItems:"center","@media (max-width: 613px)":{gridTemplateAreas:'"tag tag" "flag name" "description description" "status status"',gridTemplateColumns:"2.5rem 1fr"},"@media (min-width: 960px) and (max-width: 1024px)":{gridTemplateAreas:'"tag tag" "flag name" "description description" "status status"',gridTemplateColumns:"2.5rem 1fr"},variants:{list:{true:{"@media (max-width: 613px)":{gridTemplateColumns:"3.5rem 1fr"},"@media (min-width: 960px) and (max-width: 1024px)":{gridTemplateColumns:"3.5rem 1fr"}}}}}),c=(0,s.zo)("div",{gridArea:"flag",position:"relative",width:"2.5rem",height:"2.5rem",variants:{list:{true:{width:"3.5rem",height:"3.5rem"}}}}),u=(0,s.zo)("span",{gridArea:"tag",display:"flex",justifySelf:"flex-end",width:"fit-content",height:"fit-content",fontSize:"$sm",fontWeight:700,padding:"$2 $4",borderRadius:"$sm",textTransform:"uppercase",variants:{color:{yellow:{background:"$warning-low",color:"$warning-light"},red:{background:"$danger-low",color:"$danger-light"}},top:{true:{"@media (max-width: 613px)":{marginBottom:"$6"},"@media (min-width: 960px) and (max-width: 1024px)":{marginBottom:"$6"}}}},"@media (max-width: 589px)":{display:"flex",alignSelf:"flex-end",marginLeft:"unset"},"@media (max-width: 613px)":{padding:"$2 $4",justifySelf:"flex-start"},"@media (min-width: 960px) and (max-width: 1024px)":{justifySelf:"flex-start"}}),m=(0,s.zo)("div",{gridArea:"status",display:"flex",width:"100%",justifyContent:"flex-start",alignItems:"center",variants:{list:{true:{justifyContent:"space-between"}}},"@mobile":{display:"block"}}),p=function(e){var t=e.name,i=e.description,s=e.descriptionComplement,p=e.tagText,v=e.released,h=e.completed,f=e.url,x=e.award,g=e.list;return t?(0,n.jsx)(l,{disabled:!v&&!h,list:!!g,children:(0,n.jsxs)(d,{list:!!g,children:[(0,n.jsx)(c,{list:!!g,children:(0,n.jsx)(r.default,{src:"/assets/icons/event/flag-icon.svg",layout:"fill",objectFit:"cover"})}),(0,n.jsx)(o.X6,{size:"sm",css:{gridArea:"name",marginTop:"unset","@media (max-width: 599px)":{fontSize:"$xl"}},children:t||"Mission Checkpoint"}),p&&(0,n.jsx)(u,{color:"yellow",top:!0,children:p}),(0,n.jsxs)(o.xv,{css:{gridArea:"description",marginBottom:"1.875rem"},children:[i||"Conclua o desafio da nossa miss\xe3o. Responda o formul\xe1rio e concorra a brindes do evento."," ",(0,n.jsx)(o.xv,{as:"span",children:s})]}),(0,n.jsxs)(m,{list:!!g,children:[x&&(0,n.jsxs)(o.xv,{css:{color:"$success-light",maxWidth:"22.5rem","@mobile":{maxWidth:"unset",marginBottom:"2.125rem"}},children:["Pr\xeamio: ",(0,n.jsx)(o.xv,{as:"span",children:x})]}),v&&!h&&t&&(0,n.jsx)(o.Qj,{href:f,css:{display:"flex",justifyContent:"flex-start",height:"20px",svg:{marginLeft:"$2"},span:{display:"inline-flex",alignItems:"center",verticalAlign:"middle"}},variant:"primary",size:"md",rightIcon:(0,n.jsx)(a.qvS,{size:"24"}),target:"_blank",rel:"noopener noreferrer",children:"Formul\xe1rio de entrega"}),!v&&!h&&(0,n.jsx)(u,{color:"yellow",children:"Em breve"}),v&&h&&t&&(0,n.jsx)(u,{color:"red",children:"Encerrado"})]})]})}):null}},45809:function(e,t,i){"use strict";i.d(t,{A:function(){return p}});var n=i(28520),r=i.n(n),a=i(85893),o=i(11163),s=i(67294),l=i(86922),d=i(60899);function c(e,t,i,n,r,a,o){try{var s=e[a](o),l=s.value}catch(d){return void i(d)}s.done?t(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function o(e){c(a,n,r,o,s,"next",e)}function s(e){c(a,n,r,o,s,"throw",e)}o(void 0)}))}}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var p=function(e){return function(t){var i=(0,s.useState)(!0),n=i[0],c=i[1],p=(0,d.aC)(),v=p.user,h=p.isRecoveringUserSession,f=(0,o.useRouter)();return(0,s.useEffect)((function(){function e(){return(e=u(r().mark((function e(){var t,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=f.query.slug,(null===v||void 0===v||null===(t=v.events)||void 0===t?void 0:t.find((function(e){return(null===e||void 0===e?void 0:e.slug)===i})))?c(!1):f.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h||function(){e.apply(this,arguments)}()}),[h,f,v]),n?(0,a.jsx)(l.I,{}):(0,a.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){m(e,t,i[t])}))}return e}({},t))}}},51830:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return ne},default:function(){return ie}});var n=i(28520),r=i.n(n),a=i(85893),o=i(23855),s=i(42699),l=i(19981),d=i(5152),c=i(67294),u=i(11163),m=i(60155),p=i(74296),v=i(3621),h=(0,v.zo)("a",{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxHeight:"7.625rem",padding:"$4",borderRadius:"$sm",background:"$grey-800",border:"2px solid $grey-800",variants:{disabled:{true:{pointerEvents:"none",opacity:.5}}},"&:hover":{border:"2px solid $rocketseat-dark"},"@media (max-width: 959px)":{maxWidth:"35.375rem"},"@media (max-width: 1151px)":{maxHeight:"9.875rem"}}),f=(0,v.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",background:"$rocketseat-mid",borderRadius:"$sm",maxWidth:"4rem",width:"100%",height:"7.625rem",color:"$white","@media (min-width: 1152px)":{maxHeight:"5.625rem"}}),x=(0,v.zo)("div",{width:"100%",padding:"3px",marginLeft:"$6"}),g=function(e){var t=e.title,i=e.description,n=e.url,r=e.icon;return(0,a.jsxs)(h,{href:n,target:"_blank",rel:"noopener noreferrer",disabled:(null===n||void 0===n?void 0:n.includes("undefined"))||!n,children:[(0,a.jsx)(f,{children:(0,a.jsx)(r,{size:32})}),(0,a.jsxs)(x,{children:[(0,a.jsx)(p.X6,{size:"sm",css:{"@media (max-width: 424px)":{fontSize:"$md"}},children:t}),(0,a.jsx)(p.xv,{size:"sm",css:{maxWidth:"16rem","@media (max-width: 424px)":{marginTop:"$2"}},children:i})]}),(0,a.jsx)(m.mzm,{size:24,style:{color:"#8D8D99"}})]})},w=i(97343),y=i(38971),b=(0,v.zo)("section",{display:"flex",justifyContent:"space-between",width:"100%",height:"100%",marginTop:"$12",marginBottom:"3.75rem","a + a":{marginLeft:"$6"},"@media (max-width: 959px)":{flexDirection:"column",alignItems:"center","a + a":{marginLeft:"unset",marginTop:"$6"}}}),j=function(){var e=(0,u.useRouter)(),t=(0,y.C)().extraSources,i=(null===e||void 0===e?void 0:e.query).track,n={materials:[{title:"Material complementar",description:"Acesse os materiais necess\xe1rios para acompanhar as aulas",url:null===t||void 0===t?void 0:t.extraSource,icon:m.jyt},{title:"Wallpapers",description:"Baixe wallpapers exclusivos do evento e personalize a sua m\xe1quina",url:null===t||void 0===t?void 0:t.wallpapers,icon:m.Dxo},{title:"D\xfavidas?",description:"Acesse a comunidade no Discord e evolua com outros devs",url:(0,w.k)(i),icon:m.P4D}]};return(0,a.jsx)(b,{children:null===n||void 0===n?void 0:n.materials.map((function(e){var t=e.title,i=e.description,n=e.url,r=e.icon;return(0,a.jsx)(g,{title:t,description:i,url:n,icon:r},t)}))})},S=i(33913),k=i(25675),$=i(62286),T=i(24762),E=i(3191);var _=i(41664),C=(0,v.zo)("div",{display:"flex",flexDirection:"column",width:"100%",maxWidth:"42.75rem"}),z=(0,v.zo)("div",{display:"flex",alignItems:"center",div:{margin:"auto 0"}}),P=function(){var e,t,i,n,r,o,s=(0,y.C)().lessonDetails;return(0,a.jsxs)(C,{children:[(0,a.jsx)(p.X6,{css:{marginBottom:"4px"},children:null===s||void 0===s?void 0:s.title}),(0,a.jsx)(p.xv,{css:{marginBottom:"$6"},children:null===s||void 0===s?void 0:s.description}),(0,a.jsxs)(z,{children:[(0,a.jsx)(_.default,{href:(null===s||void 0===s||null===(e=s.educator)||void 0===e?void 0:e.profileUrl)||"#",prefetch:!1,children:(0,a.jsx)("a",{children:(0,a.jsx)(p.qE,{src:null===s||void 0===s||null===(t=s.educator)||void 0===t?void 0:t.avatarUrl,name:null===s||void 0===s||null===(i=s.educator)||void 0===i?void 0:i.name,theme:"educator",css:{marginRight:"$4"}})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(_.default,{href:(null===s||void 0===s||null===(n=s.educator)||void 0===n?void 0:n.profileUrl)||"#",prefetch:!1,children:(0,a.jsx)("a",{children:(0,a.jsx)(p.X6,{css:{fontSize:"$md"},children:null===s||void 0===s||null===(r=s.educator)||void 0===r?void 0:r.name})})}),(0,a.jsx)(p.xv,{css:{fontSize:"$sm",marginTop:"unset"},children:null===s||void 0===s||null===(o=s.educator)||void 0===o?void 0:o.bio})]})]})]})},O=i(56264),A=i(862),B=i(46683),D=i(3995),I=(0,v.zo)("div",{display:"flex",flexDirection:"column"}),N=(0,v.zo)("div",{display:"flex",width:"100%",transition:"height 0.5s linear",height:"calc((100vw - $6 - $6 - 320px) * 0.5625)",variants:{showSidebar:{false:{justifyContent:"center",maxHeight:"calc(100vh - 5.5rem)",height:"calc(100vh - 5.5rem)","@media (max-width: 1024px)":{maxHeight:"calc(100vh - 8.5rem)",height:"calc(100vh - 8.5rem)"}}}},"@media (max-width: 959px)":{height:"100%",width:"unset",margin:"0 -$6",".player-sidebar":{display:"none"}},"@media (min-width: 960px)":{".player-sidebar":{display:"unset"}},"@media (min-width: 1441px)":{maxHeight:"37.69rem"}}),R=(0,v.zo)("div",{position:"relative",width:"calc(100% - 320px)",height:"0",maxWidth:"67rem",minHeight:"315px",maxHeight:"37.69rem",paddingBottom:"calc((100vw - $6 - $6 - 320px) * 0.5625)",transition:"width 0.5s linear",iframe:{display:"block",position:"absolute",width:"100%",height:"100%",top:"0",left:"0",border:"0"},variants:{showSidebar:{false:{width:"100%",maxWidth:"100%",maxHeight:"calc(100vh - 5.5rem)",paddingBottom:"calc((100vh - 5.5rem))","@media (max-width: 1024px)":{maxHeight:"calc(100vh - 8.5rem)",paddingBottom:"calc((100vh - 8.5rem))"}}}},"@media (max-width: 959px)":{width:"100%",minHeight:"auto",paddingBottom:"56.25%"},"@media (min-width: 1441px)":{paddingBottom:"37.69rem"}}),W=(0,v.zo)("div",{position:"absolute",height:"80px",width:"104px",padding:"$4",zIndex:10,right:"0",top:"0",display:"flex",justifyContent:"flex-end",variants:{showSidebar:{true:{display:"none"}}}}),H=(0,v.zo)("div",{position:"relative",width:"calc(100% - 320px)",height:"auto",variants:{showSidebar:{false:{width:"100%"}}},"@media (max-width: 959px)":{width:"100%",minHeight:"auto",paddingBottom:"56.25%"},"@media (min-width: 1441px)":{maxHeight:"37.69rem"}}),L=(0,v.zo)("section",{display:"flex",justifyContent:"space-between",width:"100%",marginTop:"$6","@media (max-width: 959px)":{flexDirection:"column"}});function Z(e,t,i,n,r,a,o){try{var s=e[a](o),l=s.value}catch(d){return void i(d)}s.done?t(l):Promise.resolve(l).then(n,r)}function q(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function o(e){Z(a,n,r,o,s,"next",e)}function s(e){Z(a,n,r,o,s,"throw",e)}o(void 0)}))}}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function U(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){X(e,t,i[t])}))}return e}var F=function(){var e,t,i,n,s,l,d=(0,c.useState)(!0),m=d[0],v=d[1],h=(0,u.useRouter)(),f=(0,c.useRef)(null),x=(0,y.C)().lessonDetails,g=function(){var e=(0,c.useState)(!0),t=e[0],i=e[1],n=(0,c.useState)(0),r=n[0],a=n[1],o=(0,c.useCallback)((function(){a(0)}),[]);return(0,c.useEffect)((function(){if(t){var e=setTimeout((function(){a(r+1)}),1e3);return function(){return clearInterval(e)}}}),[r,t]),{seconds:r,resetTimer:o,pauseTimer:function(){return i(!1)},resumeTimer:function(){return i(!0)}}}(),w=g.seconds,b=g.pauseTimer,j=g.resumeTimer,_=g.resetTimer,C=(0,S.Z)((0,o.Z)(null===x||void 0===x?void 0:x.releasedAt)),z=(0,S.Z)((0,o.Z)(null===x||void 0===x?void 0:x.unavailableAt)),Z="/assets/images/event",X="".concat(Z,z?"/unavailable.png":"/empty-state.png"),F=(null===h||void 0===h?void 0:h.query).slug,G=(0,B.v)(F),M=C&&!z&&!!x.video_id,V=(0,c.useMemo)((function(){return{event:null===G||void 0===G?void 0:G.slug,trail:null===G||void 0===G?void 0:G.trail,lesson:null===x||void 0===x?void 0:x.video_id}}),[G,x]),J=(0,c.useCallback)((function(e){var t="event_tracking_".concat(V.event,"_").concat(V.trail,"_").concat(V.lesson),i=(0,$.parseCookies)()[t],n=function(e){switch(!0){case e>=80&&e<90:return 80;case e>=90:return 90;default:return 50}}(e);return i?Number(i)<Number(n)?((0,$.setCookie)(null,t,String(n)),void window.analytics.track("Event lesson view",U({},V,{percentage:n}))):void 0:((0,$.setCookie)(null,t,String(n)),void window.analytics.track("Event lesson view",U({},V,{percentage:n})))}),[V]),K=(0,c.useCallback)((function(){v(!0)}),[m]);return(0,c.useEffect)((function(){if(f.current){if(120===w){var e=f.current.getDuration(),t=f.current.getCurrentTime(),i=Math.floor(100*t/e);i>=50&&J(i),_()}}}),[w,_,J]),(0,a.jsxs)(I,{children:[(0,a.jsxs)(N,{showSidebar:m,children:[M?(0,a.jsxs)(R,{showSidebar:m,children:[(0,a.jsxs)(W,{showSidebar:m,"data-tip":!0,"data-for":"show-navigation",onClick:K,children:[(0,a.jsx)(p.hU,{variant:"primary",icon:(0,a.jsx)(D.Z,{}),onClick:K}),(0,a.jsx)(T.Z,{id:"show-navigation",backgroundColor:"#09090A",place:"bottom",effect:"solid",offset:{right:60,top:24},children:(0,a.jsx)(p.xv,{as:"span",children:"Exibir navega\xe7\xe3o"})})]}),(0,a.jsx)(E.Z,{videoId:null===x||void 0===x?void 0:x.video_id,title:null===x||void 0===x?void 0:x.title,"data-cookieconsent":"marketing",opts:{playerVars:{autohide:2,showinfo:0,rel:0,modestbrading:1,color:"white",autoplay:0}},onReady:function(e){f.current=e.target},onPlay:q(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.getCurrentTime()<1&&window.analytics.track("Event lesson view",U({},V,{percentage:0}));case 1:case"end":return e.stop()}}),e)}))),onEnd:q(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.analytics.track("Event lesson finish",V);case 1:case"end":return e.stop()}}),e)}))),onStateChange:function(e){[-1,0,2].includes(f.current.getPlayerState())?b():j()}},null===x||void 0===x?void 0:x.video_id)]}):(0,a.jsx)(H,{showSidebar:m,children:(0,a.jsx)(k.default,{src:X,alt:"Banner com dois astronautas informando que a aula n\xe3o est\xe1 dispon\xedvel",layout:"fill"})}),(0,a.jsx)("div",{className:"player-sidebar",children:(0,a.jsx)(O.J,{showSidebar:m,setShowSidebar:v,showPlayerElements:M})})]}),(0,a.jsxs)(L,{children:[(0,a.jsx)(P,{}),(0,a.jsx)(A.B,{name:null===x||void 0===x||null===(e=x.checkpoint)||void 0===e?void 0:e.name,description:null===x||void 0===x||null===(t=x.checkpoint)||void 0===t?void 0:t.description,tagText:null===x||void 0===x||null===(i=x.checkpoint)||void 0===i?void 0:i.tagText,released:null===x||void 0===x||null===(n=x.checkpoint)||void 0===n?void 0:n.released,completed:null===x||void 0===x||null===(s=x.checkpoint)||void 0===s?void 0:s.completed,url:null===x||void 0===x||null===(l=x.checkpoint)||void 0===l?void 0:l.url})]})]})},G=i(14289),M=i(1181),V=i(28375),J=i(62345),K=i(45809),Q=(0,v.zo)("div",{display:"flex",flexDirection:"column",width:"100%",margin:"auto",maxWidth:"87rem",padding:"0 $6"});function Y(e,t,i,n,r,a,o){try{var s=e[a](o),l=s.value}catch(d){return void i(d)}s.done?t(l):Promise.resolve(l).then(n,r)}function ee(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var a=e.apply(t,i);function o(e){Y(a,n,r,o,s,"next",e)}function s(e){Y(a,n,r,o,s,"throw",e)}o(void 0)}))}}var te=(0,d.default)(ee(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.e(3900).then(i.bind(i,73900)).then((function(e){return e.Banner})));case 1:case"end":return e.stop()}}),e)}))),{loadableGenerated:{webpack:function(){return[73900]},modules:["../modules/events/pages/Player/index.tsx -> ~/modules/events/pages/Player/components/Sections/Banner"]}}),ie=(ee(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{paths:[],fallback:"blocking"});case 1:case"end":return e.stop()}}),e)}))),ee(r().mark((function e(t){var i,n,a,d,c,u,m,p,v,h,f,x;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.params,n=i.slug,a=i.track,d=i.lesson,c=n,e.prev=2,e.next=5,V.e.getServerPage({context:M.w,variables:{slug:n}},null);case 5:if(u=e.sent,m=u.props.data.event,p=new Date,v=(0,o.Z)(m.endsAt),h=(0,o.Z)(m.offerEndsAt),f=(0,s.Z)(p,v),!(0,s.Z)(p,h)){e.next=14;break}return e.abrupt("return",{redirect:{destination:"/",permanent:!1}});case 14:if(!f){e.next=16;break}return e.abrupt("return",{redirect:{destination:"/events/".concat(n,"/mission-complete"),permanent:!1}});case 16:return e.next=18,V.XW.getServerPage({context:M.w,variables:{track:a,lessonSlug:d,event:c,currentDate:(0,l.Z)(p)}},null);case 18:return x=e.sent,e.abrupt("return",{props:x.props,revalidate:600});case 22:return e.prev=22,e.t0=e.catch(2),e.abrupt("return",{redirect:{destination:"/",permanent:!1}});case 25:case"end":return e.stop()}}),e,null,[[2,22]])}))),(0,G.CG)(V.XW.withPage((function(e){var t,i,n;return{context:M.w,variables:{track:null===(t=e.query)||void 0===t?void 0:t.track,lessonSlug:null===(i=e.query)||void 0===i?void 0:i.lesson,event:null===(n=e.query)||void 0===n?void 0:n.slug,currentDate:(0,l.Z)(new Date)}}}))((0,K.A)((function(e){var t,i=e.data,n=(0,y.C)().dispatch;return(0,c.useEffect)((function(){n({type:"SET_EVENT_INFO",payload:null===i||void 0===i?void 0:i.eventInfo}),n({type:"SET_EVENT_TRACKS",payload:null===i||void 0===i?void 0:i.eventTracks}),n({type:"SET_LESSONS_LIST",payload:null===i||void 0===i?void 0:i.lessonsList}),n({type:"SET_LESSON_DETAILS",payload:null===i||void 0===i?void 0:i.lessonDetails[0]}),n({type:"SET_EXTRA_SOURCES",payload:null===i||void 0===i?void 0:i.extraSources[0]}),n({type:"SET_BANNER_INFO",payload:null===i||void 0===i?void 0:i.bannerInfo[0]}),n({type:"SET_TOPBANNER_INFO",payload:null===i||void 0===i?void 0:i.topbannerInfo[0]})}),[i,n]),(0,a.jsx)(J.i,{title:null===i||void 0===i||null===(t=i.eventInfo)||void 0===t?void 0:t.title,children:(0,a.jsxs)(Q,{children:[(0,a.jsx)(F,{}),(0,a.jsx)(j,{}),(null===i||void 0===i?void 0:i.bannerInfo)&&(0,a.jsx)(te,{})]})})}))))),ne=!0}},function(e){e.O(0,[9774,9866,2091,1060,6282,2444,5224,2345,2888,179],(function(){return t=99556,e(e.s=t);var t}));var t=e.O();_N_E=t}]);