"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2345],{49458:function(e,t,i){i.d(t,{E:function(){return s}});var n=i(85893),r=i(25675),o=i(67294),a=i(74296),s=function(e){var t=e.className,i=e.url,s=e.alt,l=e.height,d=e.objectFit,c=e.objectPosition,u=(0,o.useState)(3),h=u[0],x=u[1];return(0,n.jsx)(a.xu,{css:{position:"relative",display:"block",maxHeight:"".concat(l,"px"),width:l*h},className:t,children:(0,n.jsx)(r.default,{src:i,alt:s,width:l*h,height:l,onLoadingComplete:function(e){var t=e.naturalWidth,i=e.naturalHeight;return x(t/i)},objectFit:d,objectPosition:c})})}},97343:function(e,t,i){i.d(t,{k:function(){return r}});var n=i(38971),r=function(e){var t,i=(0,n.C)(),r=i.extraSources,o=i.eventTracks,a=(null===o||void 0===o||null===(t=o.tracks)||void 0===t?void 0:t.length)>1?"".concat(null===r||void 0===r?void 0:r.community,"-").concat(e):"".concat(null===r||void 0===r?void 0:r.community);return"https://discord-service.rocketseat.dev/signin/".concat(a)}},62345:function(e,t,i){i.d(t,{i:function(){return ue}});var n=i(85893),r=i(9008),o=i(11163),a=i(67294),s=i(30552),l=i(41664),d=i(60155),c=i(2200),u=i(60899),h=i(49458),x=i(42699),v=i(23855),g=i(38971),f=i(3621),m=(0,f.zo)("nav",{display:"flex",height:"5.5rem",justifyContent:"center",alignItems:"center",margin:"auto","@media (max-width: 1024px)":{width:"100%",maxHeight:"4rem",background:"$grey-900",height:"3rem",borderBottom:"1px solid $grey-600"}}),p=(0,f.zo)("a",{display:"flex",alignItems:"center",height:"100%",padding:"0 $4",fontSize:"$md",fontWeight:"$regular",color:"$grey-300",borderBottom:"2px solid transparent",transition:"color 0.2s, border-color 0.2s",cursor:"pointer","&:hover":{color:"$grey-100"},variants:{active:{true:{borderColor:"$rocketseat-mid",fontWeight:"$bold",color:"$grey-100"}}}}),j=function(){var e=(0,o.useRouter)(),t=(0,g.C)().lessonsList,i=null===e||void 0===e?void 0:e.query,r=i.slug,a=i.track,s=new Date,d=null===t||void 0===t?void 0:t.filter((function(e){return(0,x.Z)(s,(0,v.Z)(null===e||void 0===e?void 0:e.releasedAt))})),c=null===d||void 0===d?void 0:d.slice(-1)[0],u="/events/".concat(r,"/").concat(a,"/").concat(null===c||void 0===c?void 0:c.slug),h=e.asPath.includes("/events/".concat(r,"/").concat(a))&&!e.pathname.includes("challenges");return(0,n.jsxs)(m,{children:[(0,n.jsx)(l.default,{href:u,passHref:!0,children:(0,n.jsx)(p,{active:h,children:"Assistir"})}),(0,n.jsx)(l.default,{href:"/events/".concat(r,"/").concat(a,"/challenges"),passHref:!0,children:(0,n.jsx)(p,{active:e.pathname.includes("challenges"),children:"Desafios"})})]})},b=i(97343),y=i(46683),k=i(74296),w=i(28520),$=i.n(w),z=i(72132),C=i(27114),E=(0,f.zo)("div",{display:"flex",flexDirection:"column",maxWidth:"31.125rem",borderRaidus:"5px"});function I(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(d){return void i(d)}s.done?t(l):Promise.resolve(l).then(n,r)}var S=function(e){var t,i=e.track,r=e.onClose,s=(0,o.useRouter)(),l=(0,g.C)().eventInfo,c=(null===s||void 0===s?void 0:s.query).slug,u=function(e){var t,i=null===l||void 0===l||null===(t=l.trackEvents)||void 0===t?void 0:t.map((function(e){return{slug:null===e||void 0===e?void 0:e.slug,text:null===e||void 0===e?void 0:e.changeTrackText}})).filter((function(t){return(null===t||void 0===t?void 0:t.slug)===e}))[0];return null===i||void 0===i?void 0:i.text},h=u("explorer"===i?"ignite":"explorer"),x=(0,a.useCallback)((t=$().mark((function e(){var t;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="explorer"===i?"ignite":"explorer",e.next=4,C.h.put("/user/event/".concat(c),{trail:t,customFields:[{field:57,value:t}]});case 4:z.Am.success("Trilha alterada com sucesso!"),s.push("/events/".concat(c)).then((function(){return s.reload()})),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),z.Am.error("Ocorreu um erro ao tentar trocar de trilha.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function a(e){I(o,n,r,a,s,"next",e)}function s(e){I(o,n,r,a,s,"throw",e)}a(void 0)}))}),[r,s]);return(0,n.jsx)(k.AB,{css:{maxWidth:"31.125rem",borderRaidus:"5px"},children:(0,n.jsxs)(E,{children:[(0,n.jsxs)(k.xu,{css:{display:"flex",justifyContent:"center",borderRadius:"5px 5px 0 0",background:"linear-gradient(90deg, $grey-700 0%, $grey-800 100%)",padding:"1.188rem 0"},children:[(0,n.jsx)(k.X6,{children:"Trocar de trilha"}),(0,n.jsx)(k.hU,{icon:(0,n.jsx)(d.bjh,{size:24}),variant:"tertiary",onClick:r,css:{position:"absolute",right:10,top:10}})]}),(0,n.jsxs)(k.xv,{css:{margin:"$6",textAlign:"center"},children:["Tem certeza que quer trocar para a ",(0,n.jsx)("strong",{children:h}),"?",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Voc\xea passar\xe1 a acessar as aulas e receber notifica\xe7\xf5es da nova miss\xe3o escolhida."]}),(0,n.jsxs)(k.xu,{css:{display:"flex",justifyContent:"center",marginBottom:"$6",button:{width:"8.5rem",textTransform:"uppercase"},"button + button":{marginLeft:"$2"}},children:[(0,n.jsx)(k.zx,{variant:"secondary",onClick:r,children:"Cancelar"}),(0,n.jsx)(k.zx,{onClick:x,id:"confirm-change-track-button",children:"Sim"})]})]})})},T=(0,f.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden",maxWidth:"30rem",minHeight:"17.5rem",border:"1px solid $grey-600",borderRadius:"$sm",padding:"$6",variants:{noPointer:{true:{"&:hover":{border:"1px solid $grey-600"}}}},"&:hover":{border:"2px solid $rocketseat-dark"},"@media (max-width: 959px)":{".track-card-logo":{maxHeight:"44px",maxWidth:"180px"}}}),O=(0,f.zo)("span",{position:"absolute",width:"8.75rem",height:"4rem",top:"-0.625rem",right:"-3rem",paddingBottom:"$2",background:"$rocketseat-mid",transform:"rotate(45deg)",display:"flex",alignItems:"end",justifyContent:"center",color:"$white",fontSize:"$xs",fontWeight:700,textTransform:"uppercase"}),R=(0,f.zo)("div",{display:"flex",justifyContent:"flex-end",alignSelf:"flex-end",width:"100%",variants:{current:{true:{justifyContent:"space-between"}}}}),P=(0,f.zo)("button",{background:"transparent",border:"none",color:"$grey-300"}),A=function(e){var t=e.title,i=e.track,r=e.logoSrc,s=e.trackSrc,c=e.description,u=e.handleClick,x=e.seeTrackAvailable,v=(0,a.useState)(!1),g=v[0],f=v[1],m=t.toLocaleLowerCase()===i,p=(0,a.useCallback)((function(){f((function(e){return!e}))}),[]);return(0,n.jsxs)(T,{onClick:function(){x&&(o.default.push(s),u())},noPointer:!x,children:[m&&(0,n.jsx)(O,{children:"Sua trilha"}),(0,n.jsx)(h.E,{url:r,alt:"Track logo",height:52,objectFit:"contain",objectPosition:"left",className:"track-card-logo"}),(0,n.jsx)(k.xv,{css:{marginBottom:"1.625rem"},children:c}),(0,n.jsxs)(R,{current:!m,children:[!m&&(0,n.jsxs)(k.u_,{open:g,onOpenChange:p,children:[(0,n.jsx)(k.iq,{asChild:!0,children:(0,n.jsx)(P,{onClick:function(e){return e.stopPropagation()},children:"Trocar de trilha"})}),(0,n.jsx)(S,{track:i,onClose:p})]}),x&&(0,n.jsx)(l.default,{href:s,prefetch:!1,passHref:!0,children:(0,n.jsx)(k.Qj,{href:s,variant:"primary",rightIcon:(0,n.jsx)(d.qvS,{size:"24"}),css:{pointerEvents:"auto"},onClick:u,children:"Ver trilha"})})]})]})},W=(0,f.zo)("div",{display:"flex",zIndex:"30"}),q=(0,f.zo)("button",{display:"flex",width:"100%",height:"100%",maxWidth:"26.399rem",background:"transparent",border:"none",".logo":{display:"flex",alignItems:"center",height:"100%","> div":{marginRight:"16px"}},"@media (max-width: 959px)":{display:"none"}}),L=(0,f.zo)("ul",{display:"flex",position:"absolute",top:"5.5rem",left:"0",right:"0",width:"100%",transition:"all 0.3s ease",background:"$grey-900",justifyContent:"center",alignItems:"center",borderTop:"1px solid $grey-600",borderBottom:"1px solid $grey-600",zIndex:10,padding:"$6","li + li":{marginLeft:"$6"},"@media (max-width: 959px)":{top:"0",height:"100%",padding:"$5 $6",borderTop:"unset",borderBottom:"unset",overflow:"auto","li + li":{marginLeft:"unset",marginTop:"$6"}}}),D=(0,f.zo)("div",{display:"flex",maxWidth:"87rem","@media (max-width: 959px)":{flexDirection:"column",height:"100%",justifyContent:"flex-start"}}),H=function(e){var t,i=e.track,r=e.type,s=(0,o.useRouter)(),l=(0,a.useRef)(null),c=(0,a.useState)(!1),u=c[0],f=c[1],m=(0,g.C)(),p=m.eventInfo,j=(m.topbannerInfo,s.query.track),b=j||i,y=null===p||void 0===p?void 0:p.trackEvents.filter((function(e){return(null===e||void 0===e?void 0:e.slug)===b}))[0],w=new Date,$=(0,x.Z)(w,(0,v.Z)(p.startedAt)),z=(0,a.useCallback)((function(){f((function(e){return!e}))}),[]),C=function(e){var t,i,n,r=null===e||void 0===e?void 0:e.target,o="confirm-change-track-button",a=(null===r||void 0===r?void 0:r.id)!==o&&(null===r||void 0===r||null===(t=r.parentNode)||void 0===t||null===(i=t.parentElement)||void 0===i?void 0:i.id)!==o;!(null===(n=l.current)||void 0===n?void 0:n.contains(e.target))&&a&&f(!1)};return(0,a.useEffect)((function(){return document.addEventListener("click",C,!0),function(){document.removeEventListener("click",C)}}),[C]),(0,n.jsxs)(W,{children:["dropdown"===r&&(0,n.jsx)(q,{onClick:z,children:(0,n.jsxs)("span",{className:"logo",children:[(0,n.jsx)(h.E,{url:null===y||void 0===y||null===(t=y.trackLogo)||void 0===t?void 0:t.url,alt:"Track logo",height:32,objectFit:"contain"}),u?(0,n.jsx)(d.AZg,{size:"24",color:"c4c4cc"}):(0,n.jsx)(d.CgR,{size:"24",color:"c4c4cc"})]})}),"button"===r&&(0,n.jsx)(k.zx,{size:"md",variant:"secondary",onClick:z,css:{width:"100%",marginBottom:"$2",textTransform:"uppercase"},children:"Ver trilhas"}),u?(0,n.jsx)(L,{ref:l,children:(0,n.jsxs)(D,{children:["button"===r&&(0,n.jsxs)(k.xu,{children:[(0,n.jsx)(k.X6,{css:{marginBottom:"$10"},children:"Ver trilhas"}),(0,n.jsx)(k.hU,{icon:(0,n.jsx)(d.bjh,{size:20}),variant:"tertiary",onClick:z,css:{position:"absolute",right:10,top:10}})]}),null===p||void 0===p?void 0:p.trackEvents.map((function(e){var t=e.slug,r=e.description,o=e.trackLogo.url,a=e.route;return(0,n.jsx)("li",{children:(0,n.jsx)(A,{title:t,track:i,logoSrc:o,trackSrc:a,description:r,handleClick:z,seeTrackAvailable:$})},t)}))]})}):null]})},F=(0,f.zo)("div",{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",height:"5.5rem",background:"$grey-900",borderBottom:"1px solid $grey-600",padding:"0 $6",top:"0",zIndex:20,position:"sticky","@media (max-width: 959px)":{maxHeight:"4rem"},"@media (max-width: 1024px)":{borderBottom:"1px solid transparent"}}),N=(0,f.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%",maxWidth:"87rem",margin:"0 auto"}),B=(0,f.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%","> a":{marginRight:"$4"},"> div":{marginRight:"$4","@media (max-width: 959px)":{width:"100%"}},"@media (max-width: 959px)":{width:"100%"}}),Z=(0,f.zo)("div",{height:"32px",border:"1px solid $grey-600","@media (max-width: 959px)":{display:"none"}}),_=(0,f.zo)("div",{display:"flex","@media (max-width: 1024px)":{display:"none"}}),M=(0,f.zo)("div",{display:"flex",alignItems:"center","> button":{textTransform:"uppercase"},"@media (max-width: 959px)":{display:"none"}}),V=function(e){var t,i,r=e.menuOpen,a=e.handleMenuOpen,s=e.asLoggedOut,x=void 0!==s&&s,v=e.showNav,f=void 0===v||v,m=(0,u.aC)().isAuthenticated,p=(0,o.useRouter)(),w=(0,g.C)(),$=w.eventInfo,z=w.eventTracks,C=(null===p||void 0===p?void 0:p.query).slug,E=(0,y.v)(C),I=null===E||void 0===E?void 0:E.trail,S=(0,b.k)(I),T=(null===z||void 0===z||null===(t=z.tracks)||void 0===t?void 0:t.length)>1;return(0,n.jsx)(F,{children:!x&&m&&(0,n.jsxs)(N,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(l.default,{href:"/events",prefetch:!1,passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(d.dUf,{color:"#c4c4cc",size:24})})}),(null===$||void 0===$||null===(i=$.logo)||void 0===i?void 0:i.url)&&(0,n.jsx)(h.E,{url:null===$||void 0===$?void 0:$.logo.url,alt:"Event logo",height:24,objectFit:"contain",objectPosition:"left"}),T&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z,{}),(0,n.jsx)(H,{track:I,type:"dropdown"})]})]}),f&&(0,n.jsx)(_,{children:(0,n.jsx)(j,{})}),(0,n.jsxs)(M,{children:[(0,n.jsx)(k.zx,{as:"a",leftIcon:(0,n.jsx)(d.rkH,{size:"24"}),size:"md",variant:"primary",href:S,target:"_blank",rel:"noopener noreferrer",css:{textTransform:"uppercase"},children:"Entrar na comunidade"}),(0,n.jsx)(c.d,{})]}),(0,n.jsx)(k.hU,{onClick:a,variant:"tertiary",icon:r?(0,n.jsx)(d.IOM,{size:"32",color:"#8257e5"}):(0,n.jsx)(d.lIk,{size:"32",color:"#8257e5"}),css:{"@media (min-width: 960px)":{display:"none"}}})]})})},U=i(56264),X=(0,f.zo)("div",{display:"flex",width:"320px",height:"calc(100vh - 4rem - 3rem)",background:"$grey-800",position:"absolute",zIndex:"10",top:"3rem",right:"0",bottom:"0",variants:{hideNav:{true:{top:"0",height:"calc(100vh - 4rem)"}}},"@media (min-width: 960px)":{display:"none"}}),J=(0,f.zo)("div",{display:"flex",flexDirection:"column",width:"100%",margin:"0 auto"}),G=(0,f.zo)("div",{display:"flex",flexDirection:"column",width:"100%",padding:"$6",borderTop:"1px solid $grey-600","button + button":{marginTop:"$2"}}),Q=function(e){var t,i=e.menuOpen,r=e.showNav,s=void 0===r||r,l=(0,o.useRouter)(),c=(0,g.C)().eventTracks,u=(null===l||void 0===l?void 0:l.query).slug,h=(0,y.v)(u),x=null===h||void 0===h?void 0:h.trail,v=(0,b.k)(x),f=(null===c||void 0===c||null===(t=c.tracks)||void 0===t?void 0:t.length)>1;return(0,a.useEffect)((function(){return document.body.style.overflow=i?"hidden":"unset",function(){document.body.style.overflow="unset"}}),[i]),i&&(0,n.jsx)(X,{hideNav:!s,children:(0,n.jsxs)(J,{children:[s&&(0,n.jsx)(U.J,{showPlayerElements:!1}),(0,n.jsxs)(G,{children:[f&&(0,n.jsx)(H,{track:x,type:"button"}),(0,n.jsx)(k.zx,{as:"a",leftIcon:(0,n.jsx)(d.rkH,{size:"24"}),size:"md",variant:"primary",href:v,target:"_blank",rel:"noopener noreferrer",css:{textTransform:"uppercase"},children:"Entrar na comunidade"})]})]})})},K=(0,f.zo)("div",{display:"flex",alignItems:"center",width:"100%",height:"3.5rem",background:"$warning-low","@media (max-width: 800px)":{height:"6.5rem"}}),Y=(0,f.zo)("div",{display:"flex",alignItems:"center",maxWidth:"87rem",margin:"0 auto",svg:{minWidth:"20px",minHeight:"20px"},"@media (max-width: 800px)":{marginLeft:"$6",marginRight:"$6"}}),ee=(0,f.zo)("button",{background:"transparent",border:"none",color:"$warning-light",fontWeight:700}),te=function(){var e=(0,o.useRouter)(),t=(0,a.useState)(!1),i=t[0],r=t[1],s=(null===e||void 0===e?void 0:e.query).slug,l=(0,y.v)(s),c=null===l||void 0===l?void 0:l.trail,u=(0,a.useCallback)((function(){r((function(e){return!e}))}),[]);return(0,n.jsx)(K,{children:(0,n.jsxs)(Y,{children:[(0,n.jsx)(d.SZZ,{size:24,color:"#fba94c"}),(0,n.jsxs)(k.xv,{css:{marginLeft:"$4",marginTop:"0"},children:["Ei, dev! Essa n\xe3o \xe9 sua trilha inicial, mas se voc\xea tem certeza que quer trocar de miss\xe3o,"," ",(0,n.jsxs)(k.u_,{open:i,onOpenChange:u,children:[(0,n.jsx)(k.iq,{asChild:!0,children:(0,n.jsx)(ee,{children:"clique aqui"})}),(0,n.jsx)(S,{track:c,onClose:u})]}),"."]})]})})},ie=i(50918),ne=(0,f.zo)("a",{display:"flex",alignItems:"center",width:"100%",height:"3.184rem",background:"#065e7c","&:hover":{textDecoration:"underline",textDecorationColor:"#ffffff"},"@media (max-width: 959px)":{height:"4.5rem"}}),re=(0,f.zo)("div",{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"87rem",margin:"0 auto",width:"100%","> div":{minWidth:"28px"},span:{width:"fit-content"},"@media (max-width: 800px)":{marginLeft:"$6",marginRight:"$6"},"@media (max-width: 455px)":{svg:{width:"fit-content"}}}),oe=(0,f.zo)("a",{display:"flex",alignItems:"center",width:"100%",height:"3.184rem",background:"$ignite-dark","&:hover":{textDecoration:"underline",textDecorationColor:"#ffffff"},"@media (max-width: 959px)":{height:"4.5rem"}}),ae=(0,f.zo)("div",{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"87rem",margin:"0 auto",width:"100%","> div":{minWidth:"26.95px"},span:{width:"fit-content"},"@media (max-width: 800px)":{marginLeft:"$6",marginRight:"$6"},"@media (max-width: 455px)":{svg:{width:"fit-content"}}}),se={explorer:function(){var e=(0,g.C)().topbannerInfo,t=(0,ie.a)("(max-width: 768px)");return(0,n.jsx)(ne,{href:null===e||void 0===e?void 0:e.cta,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(re,{children:[(0,n.jsx)(h.E,{url:t?"/assets/logos/event/explorer-simbol-white.svg":"/assets/logos/event/explorer-white.svg",alt:"Ignite logo",height:28}),(0,n.jsx)(k.xv,{as:"span",css:{marginLeft:"$6",marginRight:"$2",marginTop:"0",color:"#ffffff","@mobile":{marginLeft:"$4"}},children:null===e||void 0===e?void 0:e.text}),(0,n.jsx)(d.qvS,{color:"#86E9FF",size:20})]})})},ignite:function(){var e=(0,g.C)().topbannerInfo,t=(0,ie.a)("(max-width: 768px)");return(0,n.jsx)(oe,{href:null===e||void 0===e?void 0:e.cta,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(ae,{children:[(0,n.jsx)(h.E,{url:t?"/assets/logos/event/ignite-simbol-white.svg":"/assets/logos/event/ignite-white.svg",alt:"Ignite logo",height:26.95}),(0,n.jsx)(k.xv,{as:"span",css:{marginLeft:"$6",marginRight:"$2",marginTop:"0",color:"#ffffff","@mobile":{marginLeft:"$4"}},children:null===e||void 0===e?void 0:e.text}),(0,n.jsx)(d.qvS,{color:"#00B37E",size:20})]})})}},le=function(){var e=(0,g.C)().topbannerInfo;if(!e)return null;var t=se[null===e||void 0===e?void 0:e.track];return(0,n.jsx)(t,{})},de=(0,f.zo)("div",{display:"flex",flexDirection:"column",width:"100%",height:"100%",".infinite-scroll-component":{overflowX:"hidden !important"},variants:{hideOverFlow:{true:{overflowX:"hidden"}}}}),ce=(0,f.zo)("div",{display:"none","@media (max-width: 1024px)":{display:"flex",position:"relative",zIndex:"20"}}),ue=function(e){var t,i=e.children,l=e.title,d=e.hideOverflow,c=void 0!==d&&d,u=e.showNav,h=void 0===u||u,x=(0,o.useRouter)(),v=(0,g.C)(),f=v.topbannerInfo,m=v.eventTracks,p=(0,a.useState)(!1),b=p[0],k=p[1],w=x.query,$=w.slug,z=w.track,C=(0,y.v)($),E=(null===C||void 0===C?void 0:C.trail)===z,I=(null===m||void 0===m||null===(t=m.tracks)||void 0===t?void 0:t.length)>1;return(0,n.jsxs)(de,{hideOverFlow:c,children:[(0,n.jsx)(r.default,{children:(0,n.jsxs)("title",{children:[l," | Rocketseat"]})}),f&&(0,n.jsx)(le,{}),(0,n.jsx)(V,{menuOpen:b,handleMenuOpen:function(){k(!b)},showNav:h}),(0,n.jsxs)(ce,{children:[h&&(0,n.jsx)(j,{}),(0,n.jsx)(Q,{menuOpen:b,showNav:h})]}),I&&!E&&h&&(0,n.jsx)(te,{}),(0,n.jsx)("section",{children:i}),(0,n.jsx)(s.$,{title:"Rocketseat",size:"large"})]})}},3995:function(e,t,i){i.d(t,{Z:function(){return a},n:function(){return l}});var n=i(85893),r=i(25675);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e){return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){o(e,t,i[t])}))}return e}({},e,{children:(0,n.jsx)(r.default,{src:"/assets/icons/event/menu-left.svg",width:"24",height:"24",alt:"Vetor gr\xe1fico com s\xedmbolo de menu com uma seta para a esquerda",objectFit:"cover",quality:100})}))}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e){return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){s(e,t,i[t])}))}return e}({},e,{children:(0,n.jsx)(r.default,{src:"/assets/icons/event/menu-right.svg",width:"24",height:"24",alt:"Vetor gr\xe1fico com s\xedmbolo de menu com uma seta para a direita",objectFit:"cover",quality:100})}))}},56264:function(e,t,i){i.d(t,{J:function(){return O}});var n=i(85893),r=i(67294),o=i(24762),a=i(50918),s=i(33913),l=i(32912),d=i(29081),c=i(41664),u=i(11163),h=i(60155),x=i(38971),v={class:"Aula pr\xe1tica",live:"Ao vivo",special:"Especial"},g=i(3621),f=(0,g.zo)("div",{variants:{noPointer:{true:{cursor:"not-allowed"}}}}),m=(0,g.zo)("a",{display:"flex",flexDirection:"column",maxWidth:"100%",margin:"$4 $6 $6",minWidth:"266px",variants:{noPointer:{true:{pointerEvents:"none"}}}}),p=(0,g.zo)("span",{color:"$grey-300",fontSize:"$sm",lineHeight:"22.4px",textTransform:"capitalize"}),j=(0,g.zo)("div",{padding:"$4",borderRadius:"4px",border:"1px solid $grey-600",marginTop:"$2",position:"relative","&:hover":{borderColor:"$rocketseat-dark","> span":{borderColor:"$rocketseat-dark"}},variants:{active:{true:{background:"$rocketseat-dark",color:"$grey-100"}},notAvailable:{true:{background:"$grey-800"}},noPointer:{true:{pointerEvents:"none"}}}}),b=(0,g.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center"}),y=(0,g.zo)("span",{display:"flex",fontWeight:"500",alignItems:"center",fontSize:"$sm",svg:{marginRight:"4px"},variants:{available:{true:{color:"$success-light"},false:{color:"$warning-light"}},active:{true:{color:"$grey-100"}}}}),k=(0,g.zo)("span",{display:"flex",padding:"$2 $3",fontSize:"$xs",lineHeight:"$xs",fontWeight:"700",borderRadius:"5px",textTransform:"uppercase",variants:{active:{true:{background:"$rocketseat-light",color:"$rocketseat-low"},false:{background:"$grey-700",color:"$grey-100"}},notAvailable:{true:{background:"$grey-700",color:"$grey-100"}}}}),w=(0,g.zo)("strong",{display:"block",marginTop:"$4",color:"$grey-100",fontSize:"$md"}),$=(0,g.zo)("span",{position:"absolute",width:"0.859rem",height:"0.859rem",borderRadius:"2px",borderTop:"1px solid $grey-600",borderLeft:"1px solid $grey-600",left:"-3%",top:"calc(50% - 0.859rem/2)",transform:"matrix(0.71, -0.68, 0.74, 0.71, 0, 0)",background:"$rocketseat-dark"}),z=function(e){var t,i,r=e.title,o=e.slug,a=e.availableAt,g=e.releasedAt,z=e.type,C=e.track,E=(0,u.useRouter)(),I=(0,x.C)().lessonsList,S=null!==(i=null===E||void 0===E||null===(t=E.query)||void 0===t?void 0:t.lesson)&&void 0!==i?i:I[0].slug,T=(0,s.Z)(g),O=(null===E||void 0===E?void 0:E.query).slug,R=(0,l.Z)(a,"EEEE' \u2022 'd' de 'MMMM' \u2022 'k'h'mm",{locale:d.Z}),P=o===S,A=v[z],W=T?"/events/".concat(O,"/").concat(C,"/").concat(o):"/events/".concat(O);return(0,n.jsx)(f,{noPointer:!T,children:(0,n.jsx)(c.default,{href:W,prefetch:!1,passHref:!0,children:(0,n.jsxs)(m,{noPointer:!T,onClick:function(){localStorage.setItem("@Event:watching-lesson",o)},children:[(0,n.jsx)(p,{children:R}),(0,n.jsxs)(j,{active:P,notAvailable:!T,noPointer:!T,children:[P&&T?(0,n.jsx)($,{}):null,(0,n.jsxs)(b,{children:[T?(0,n.jsxs)(y,{available:T,active:P,children:[(0,n.jsx)(h.GcF,{size:20}),"Aula liberada"]}):(0,n.jsxs)(y,{available:!1,children:[(0,n.jsx)(h.gMo,{size:20}),"Em breve"]}),(0,n.jsx)(k,{active:P,notAvailable:!T,children:A})]}),(0,n.jsx)(w,{children:r})]})]})})})},C=i(74296),E=i(3995),I=(0,g.zo)("aside",{display:"flex",flexDirection:"column",width:"320px",height:"100%",background:"$grey-800",transition:"width 0.5s linear",overflow:"hidden",variants:{showSidebar:{false:{width:0}}},"@media (min-width: 960px)":{maxHeight:"100%"},"@media (max-width: 959px)":{maxHeight:"calc(100% - 9.5rem)",height:"100%"}}),S=(0,g.zo)("div",{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"$4 $6",fontWeight:"700",lineHeight:"2rem",fontSize:"1.25rem",background:"linear-gradient(90deg, #29292E 0%, #202024 100%)",span:{lineHeight:"unset"}}),T=(0,g.zo)("div",{height:"100%",display:"flex",overflow:"auto",flexDirection:"column",background:"$grey-800",minWidth:"266px"}),O=function(e){var t=e.showSidebar,i=e.setShowSidebar,s=e.showPlayerElements,l=(0,x.C)().lessonsList,d=(0,a.a)("(max-width: 959px)"),c=(0,r.useCallback)((function(){i(!1)}),[t]);return(0,n.jsxs)(I,{showSidebar:t,children:[(0,n.jsxs)(S,{children:[(0,n.jsx)(C.xv,{as:"span",children:"Conte\xfados"}),!d&&s&&(0,n.jsxs)(C.xu,{"data-tip":!0,"data-for":"hide-navigation",children:[(0,n.jsx)(C.hU,{variant:"tertiary",icon:(0,n.jsx)(E.n,{}),onClick:c}),(0,n.jsx)(o.Z,{id:"hide-navigation",backgroundColor:"#09090A",place:"top",effect:"solid",children:(0,n.jsx)(C.xv,{as:"span",children:"Esconder navega\xe7\xe3o"})})]})]}),(0,n.jsx)(T,{children:null===l||void 0===l?void 0:l.map((function(e){var t=e.id,i=e.slug,r=e.title,o=e.lessonType,a=e.availableAt,s=e.releasedAt,l=e.track,d=e.video_id;return(0,n.jsx)(z,{title:r,slug:i,availableAt:new Date(a),releasedAt:new Date(s),type:o,track:l,video_id:d},t)}))})]})}}}]);