"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7704],{90352:(e,t,n)=>{n.d(t,{n:()=>oe});var a=n(67294),r=n(50114),l=n(17213),c=n(69559),i=n(4236),o=n(13218),s=n(70296),m=n(67154),u=n.n(m),d=n(69518),E=n.n(d),h=n(62031),p=n(49058),g=n(5843),f=n(97605),v=n(20657),y=n(18261),k=n(4232),T=n(80507),b=n(25988),P=n(35410),_=n(86514),S=n(94184),C=n.n(S),I=n(52883),w=n(28760),x=n(43864),N=n(85592),B=n(34325),H=n(84242),M=n(1496),U=n(99191),F=n(56802),W=n(67892),A=n(80418),L=n(49961);const O="view-homeShortcutsGrid-shortcuts",R="view-homeShortcutsGrid-grid",D="view-homeShortcutsGrid-shortcutLink",z="view-homeShortcutsGrid-shortcut",G="view-homeShortcutsGrid-draggable",$="view-homeShortcutsGrid-imageContainer",q="view-homeShortcutsGrid-imageWrapper",Z="view-homeShortcutsGrid-image",X="CKxS_0I5yf3i15WAjzvE",J="view-homeShortcutsGrid-main",K="EzRmGRncgnv1zFgF4dqE",V="bPmmKmSPLKMhtJSaUJRX",Y="view-homeShortcutsGrid-PlayButtonContainer",j="s9c9x_mJq197U2hBzGtV",Q=a.memo((({images:e=[],fallbackIcon:t=h.U})=>{const n=(0,L.X)(e),r=null!=n&&n.url?q:X;return a.createElement("div",{className:$},a.createElement("div",{className:r},a.createElement(A.E,{className:Z,src:null==n?void 0:n.url,loading:"lazy",testid:"shortcut-image"},a.createElement(t,{"aria-hidden":!0}))))})),ee=a.memo((({index:e,item:t,fallbackIcon:n,showPlayButton:r,onContextMenu:l=(()=>{}),onTouchStart:c=(()=>{}),onTouchEnd:i=(()=>{})})=>{var o,m;const u=(0,I.k6)(),d=(0,F.o)(),{setColorFromUri:h,resetColor:p,clearColor:g}=(0,s.WQ)(),f=(0,B.G3)(t.uri,t.release_date,null===(o=t.resume_point)||void 0===o?void 0:o.resume_position_ms,null===(m=t.resume_point)||void 0===m?void 0:m.fully_played),{spec:v,logger:y}=(0,M.fU)(x.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:e,uri:t.uri}}),{isPlaying:k,isActive:T,togglePlay:b}=(0,H.n)({uri:t.uri},{featureIdentifier:"home",referrerIdentifier:"home"});const P=(0,a.useCallback)((()=>{d({targetUri:t.uri,intent:"navigate",type:"click"});const e=v.hitUiNavigate({destination:t.uri});y.logInteraction(e),u.push(E().from(t.uri).toURLPath(!0))}),[u,t.uri,y,d,v]),_=(0,a.useCallback)((()=>{h(t.uri)}),[t.uri,h]);(0,a.useEffect)((()=>()=>{g()}),[g]);const S=(0,M.Wi)(v),A=(0,U.O1)([t.uri],t.name);return a.createElement("div",{ref:S,className:z,onContextMenu:l,onTouchStart:c,onTouchEnd:i,onMouseEnter:_,onMouseLeave:p},a.createElement("div",{className:G,onDragStart:A},a.createElement(Q,{images:t.images,fallbackIcon:n}),a.createElement("div",{className:J},a.createElement(W.r,{to:t.uri,onClick:P,title:t.name},a.createElement(w.Dy,{as:"p",variant:"balladBold",className:K},t.name)),f&&a.createElement(B.Rd,{className:V}),r&&a.createElement("div",{className:C()(Y,{[j]:k})},a.createElement(N.fh,{isPlaying:k,onClick:function(){d({targetUri:t.uri,intent:k?"pause":"play",type:"click"});const e=v.playButtonFactory();let n;n=k?e.hitPause({itemToBePaused:t.uri}):T?e.hitResume({itemToBeResumed:t.uri}):e.hitPlay({itemToBePlayed:t.uri});const a=y.logInteraction(n);b({loggingParams:a})}}))),a.createElement("div",{onClick:P,className:D})))})),te=a.memo((e=>E().isCollection(e.item.uri)?a.createElement(ee,u()({},e,{fallbackIcon:h.U})):a.createElement(y._,{menu:a.createElement(P.X,{uri:e.item.uri})},a.createElement(ee,u()({},e,{fallbackIcon:h.U}))))),ne=a.memo((e=>a.createElement(y._,{menu:a.createElement(k.Y,{uri:e.item.uri})},a.createElement(ee,u()({},e,{fallbackIcon:p.c}))))),ae=a.memo((e=>a.createElement(y._,{menu:a.createElement(T.m,{uri:e.item.uri})},a.createElement(ee,u()({},e,{fallbackIcon:g.a}))))),re=a.memo((e=>a.createElement(y._,{menu:a.createElement(_.M,{uri:e.item.uri})},a.createElement(ee,u()({},e,{fallbackIcon:f.J,showPlayButton:!1}))))),le=a.memo((e=>a.createElement(y._,{menu:a.createElement(b.k,{uri:e.item.uri})},a.createElement(ee,u()({},e,{fallbackIcon:f.J,showPlayButton:!1})))));const ce=270,ie=a.memo((({title:e,tagline:t,items:n})=>{const{fetchMultipleColors:r}=(0,s.WQ)(),[l,m]=(0,a.useState)({minWidth:ce,itemHeight:80,showPlayButton:!0}),u=!(0,i.k)(),d=(0,a.useRef)(null),h=null!=e?e:(()=>{const e=(new Date).getHours();let t=v.ag.get("home.evening");return e>=5&&e<12?t=v.ag.get("home.morning"):e>=12&&e<18&&(t=v.ag.get("home.afternoon")),t})(),p=(0,a.useCallback)((()=>{if(!d.current)return;const e=d.current.offsetWidth,t=e<600?200:ce;const n=Math.min(Math.floor((e+24)/(t+24)),3);m({minWidth:t,showPlayButton:(e-24*(n-1))/n>=ce,itemHeight:e>=858?80:64})}),[]);if((0,c.a)((()=>{p()})),(0,a.useEffect)((()=>{p()}),[p]),(0,a.useEffect)((()=>{const e=(null==n?void 0:n.map(s.lh))||[];r(e)}),[n,r]),u||null==n||!n.length)return null;const g=64===l.itemHeight?12:16;return a.createElement("section",{className:O,"aria-label":h,ref:d},a.createElement(o.r,{title:h,titleVariant:"alto",tagline:t}),a.createElement("div",{className:R,style:{"--min-column-width":`${l.minWidth}px`,"--column-gap":"24px","--row-gap":`${g}px`,"--item-height":`${l.itemHeight}px`}},n.filter(((e,t)=>t<6)).map(((e,t)=>{const n=function(e){const t=(E().from(e)||{}).type;switch(t){case E().Type.ARTIST:return ae;case E().Type.ALBUM:case E().Type.COLLECTION_ALBUM:return ne;case E().Type.PLAYLIST:case E().Type.PLAYLIST_V2:return te;case E().Type.SHOW:return re;case E().Type.EPISODE:return le;case E().Type.COLLECTION:return te;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),re}}(e.uri);return a.createElement(n,{index:t,key:`${t}-${e.uri}`,item:e,showPlayButton:l.showPlayButton,shouldSetBackgroundColor:0===t})}))))})),oe=(0,r.P)(ie,(()=>null),(e=>(0,l.v)({from:"HomeShortcutsGrid",error:e})))},30386:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(67294),r=n(94184),l=n.n(r),c=n(73526),i=n(20657),o=n(70369),s=n(1663),m=n(13983),u=n(1496),d=n(23060),E=n(81993),h=n(38470),p=n(86868),g=n(18686),f=n(30343);const v=({spec:e,section:t,index:n})=>{var r,l;return a.createElement(u.Nh,{spec:e.shelvesFactory()},a.createElement(g.q,{total:t.sectionItems.totalCount,seeAllUri:t.uri,pageId:t.uri,title:null!==(r=null===(l=t.data.title)||void 0===l?void 0:l.text)&&void 0!==r?r:"",index:n,id:t.uri},t.sectionItems.items.map(f.x)))};var y=n(54358);const k=({spec:e,section:t,index:n})=>{var r,l;return a.createElement(u.Nh,{spec:e.shelvesFactory()},a.createElement(y.default,{title:null!==(r=null===(l=t.data.title)||void 0===l?void 0:l.text)&&void 0!==r?r:void 0,showAll:!1,index:n}))};var T=n(90352),b=n(28791);const P=({spec:e,section:t})=>{var n,r;return a.createElement(u.Nh,{spec:e.shortcutsFactory()},a.createElement(T.n,{items:t.sectionItems.items.map(b.l),title:null!==(n=null===(r=t.data.greeting)||void 0===r?void 0:r.text)&&void 0!==n?n:void 0}))},_=({spec:e,section:t,index:n})=>{var r;switch(null===(r=t.data)||void 0===r?void 0:r.__typename){case"HomeGenericSectionData":return a.createElement(v,{spec:e,section:(0,p.f)(t,t.data),index:n});case"HomeShortsSectionData":return a.createElement(P,{spec:e,section:(0,p.f)(t,t.data)});case"HomeRecentlyPlayedSectionData":return a.createElement(k,{spec:e,section:(0,p.f)(t,t.data),index:n});case null:case void 0:return null;default:return(0,h._)(t.data),null}},S=({spec:e,container:t})=>a.createElement(a.Fragment,null,t.sections.items.map(((t,n)=>a.createElement(_,{key:`${n}-${t.uri}`,spec:e,section:t,index:n}))));var C=n(16896);const I=({spec:e})=>{(0,m.z)("home");const{data:t,error:n,loading:r}=(0,E.b3)({},{cacheTime:18e5,staleTime:3e4});if(r||null!==n)return a.createElement(s.h,{hasError:null!==n,errorMessage:i.ag.get("error.generic")});const c=null==t?void 0:t.home;return"HomeSectionContainer"!==(null==c?void 0:c.__typename)?a.createElement(s.h,{hasError:!0,errorMessage:i.ag.get("error.generic")}):a.createElement("section",{"data-testid":"home-page"},a.createElement("div",{className:C.Z.home},a.createElement("div",{className:l()(C.Z.content,"contentSpacing")},a.createElement(S,{spec:e,container:c}))))},w=()=>{const{spec:e}=(0,u.fU)(c.createDesktopHomeEventFactory,{data:{identifier:"home",uri:"spotify:home"}});return a.createElement(u.Nh,{spec:e},a.createElement(o.$,null,i.ag.get("page.generic-title")),a.createElement(a.Suspense,{fallback:null},a.createElement(d.S,null)),a.createElement(I,{spec:e}))}},23060:(e,t,n)=>{n.d(t,{S:()=>o});var a=n(67294),r=n(87577),l=n(49207),c=n(28638),i=n(47402);const o=()=>(0,r.W6)(l.Jw)===l.pF.ONHOME?a.createElement(c.w,null,a.createElement(i.M,{onSearch:!1})):null}}]);
//# sourceMappingURL=home-v2.js.map