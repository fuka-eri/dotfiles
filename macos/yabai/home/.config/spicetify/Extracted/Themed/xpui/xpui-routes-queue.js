"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3727],{22578:(e,t,a)=>{a.d(t,{$:()=>d});var n=a(67294),r=a(64593),i=a(20657),l=a(8341),u=a(89952),s=a(76303),o=a(52883),c=a(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const d=({children:e,usePlayingItem:t})=>{let a=m(e);(e=>{const{mainLandmarkRef:t}=(0,c.Oh)(),a=(0,o.k6)(),r=(0,n.useRef)(a.length<2);r.current=a.length<2,(0,n.useEffect)((()=>{const a=t.current;a&&!r.current&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t])})(e);const d=(0,l.Y)(s.o9)===u.PO.PLAYING,p=(0,l.Y)((e=>null==e?void 0:e.item));return p&&(d||t)&&((0,u.G_)(p)?a=[p.name,p.artists.map((e=>e.name)).join(i.ag.getSeparator())].join(" • "):(0,u.iw)(p)?a=[p.name,p.show.name].join(" • "):(0,u.k6)(p)&&(a=m(i.ag.get("ad-formats.advertisement")))),n.createElement(r.q,{defaultTitle:"Spotify",defer:!1},n.createElement("title",null,a))}},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},1463:(e,t,a)=>{a.d(t,{n:()=>U});var n=a(67294),r=a(94184),i=a.n(r),l=a(52883),u=a(28760),s=a(62312),o=a(41374),c=a(20657),m=a(32648),d=a(64005),p=a(85951);var E=a(32626),g=a(43031),v=a(30005),y=a(21691);const f="main-topBar-contentArea",b="muYk5XIwKmqR9iNibk_f",h="queue-tabBar-headerItem",x="queue-tabBar-moreButton",k="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",P="queue-tabBar-active",O="queue-tabBar-headerItemLink",N="queue-tabBar-header",w="queue-tabBar-chevron",I=({items:e,activeItemId:t})=>n.createElement(v.v,null,e.map((e=>e.disabled?n.createElement(y.s,{key:e.uri,disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick},e.title):n.createElement(y.s,{key:e.uri,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:C,activeClassName:P,onClick:e.handleClick},e.title)))),U=n.memo((({isCentered:e,links:t,landmarkLabel:a,className:r})=>{var v;const y=(0,n.useRef)(null),[C,U]=(0,n.useState)([]),[D,T]=(0,n.useState)(0),[A,S]=(0,n.useState)([]),R=null!==(v=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,n.useContext)(m.VX),r=(0,d.y)((e=>{null!=e&&e.width&&t(e.width)}),250);return(0,p.y)({refOrElement:a,observeOnly:"width",onResize:r}),e}())&&void 0!==v?v:1/0,{pathname:L}=(0,l.TH)(),q=t.find((e=>e.to===L));return(0,n.useEffect)((()=>{y.current&&T(y.current.clientWidth)}),[R]),(0,n.useEffect)((()=>{if(!y.current)return;const e=Array.from(y.current.children).map((e=>e.clientWidth));U(e)}),[t]),(0,n.useEffect)((()=>{if(!y.current)return;if(C.slice(0,-1).reduce(((e,t)=>e+t),0)<=D)return void S([]);const e=C.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;C.forEach(((e,n)=>{D>=a+e?a+=e:t.push(n)})),S(t)}),[D,C]),n.createElement("nav",{className:i()(r,f),"aria-label":a},n.createElement("ul",{className:e?b:N,ref:y},t.filter(((e,t)=>!A.includes(t))).map((e=>{var t;return(null!==(t=null==e?void 0:e.render)&&void 0!==t?t:e=>e)(n.createElement("li",{key:e.to,className:h},e.disabled?n.createElement("div",{className:O},n.createElement(u.Dy,{variant:"mestoBold"},e.title)):n.createElement(g.O,{exact:!0,className:O,activeClassName:P,to:e.to,onClick:e.handleClick},n.createElement(u.Dy,{variant:"mestoBold"},e.title))))})),A.length||0===C.length?n.createElement("li",{className:h},n.createElement(E.xV,{renderInline:!0,menu:n.createElement(I,{items:t.filter(((e,t)=>A.includes(t))),activeItemId:null==q?void 0:q.itemId})},((e,t,a)=>n.createElement("button",{className:i()(x,{[k]:q}),type:"button",onClick:t,ref:a},n.createElement(u.Dy,{variant:"mestoBold"},q?q.title:c.ag.get("more")),e?n.createElement(s.U,{iconSize:16,className:w}):n.createElement(o.i,{iconSize:16,className:w}))))):null))}))},41239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Be});var n=a(67294),r=a(73305),i=a(72125),l=a(35796),u=a(9832),s=a(68960),o=a(28760),c=a(20657),m=a(80053);const d="gTvMl6pwfRD9PobMSB5x",p="hNAQG0TAe2WFYyf_iZEB",E="Zhzrb2k9nQRActS2lp4U",g=()=>n.createElement("div",{className:d},n.createElement(m.Y,{iconSize:64}),n.createElement(o.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:p},c.ag.get("history.empty-title")),n.createElement("p",null,c.ag.get("history.empty-description")));var v=a(69518),y=a.n(v),f=a(28248),b=a(47991),h=a(42922),x=a(59713),k=a.n(x),C=a(19719),P=a(26529);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const w=[];function I(e,t=!0){const[a,r]=(0,n.useState)({});return(0,n.useEffect)((()=>{if(!t)return;const n=Array.from(new Set(e)),i=n.filter((e=>y().isTrack(e)&&!a[e])),l=n.filter((e=>y().isEpisode(e)&&!a[e])),u=i.length?C.fQ.getTracks(P.b.getInstance(),i.map((e=>y().from(e).getBase62Id()))).then((e=>e.body.tracks||w)):Promise.resolve(w),s=l.map((e=>C.UY.getEpisodeGraphQL(P.b.getInstance(),y().from(e).getBase62Id()).then((e=>(null==e?void 0:e.body)||{})).catch((t=>(console.error(t),{uri:e})))));Promise.all([u,...s]).then((([e,...t])=>{const a={},n={};e.forEach((e=>{var t;a[(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri]=e})),t.forEach((e=>{n[e.uri]=e})),(e.length>0||t.length>0)&&r((e=>N(N(N({},e),a),n)))}))}),[e,a,t]),e.map((e=>a[e]))}var U=a(42781),D=a(49961),T=a(25988),A=a(26921),S=a(86213),R=a(27481),L=a(83384),q=a(82760),_=a(18261),M=a(85576),j=a(87257),Q=a(57978),B=a(26010),G=a(84242),$=a(84788);const F=n.memo((({uri:e,name:t,duration_ms:a,index:r,imgUrl:i,artists:l,album:u,isExplicit:s,isMOGEFRestricted:o,type:m})=>{var d;const{useCurrentAvailability:p}=(0,n.useContext)(B.I),[E,g]=p(e),{isActive:v,isPlaying:f,triggerPlay:b,togglePlay:x}=(0,G.n)({uri:e},{featureIdentifier:"history"}),{badges:k,hasBadges:C}=(0,$.r)({offlineAvailability:g,isExplicit:s,isMOGEFRestricted:o}),P=E,O=(null==l?void 0:l.map((e=>e.name)).join(c.ag.getSeparator()))||"";let N;var w;y().isEpisode(e)?N=n.createElement(T.k,{uri:e,contextUri:e,showUri:null==l||null===(w=l[0])||void 0===w?void 0:w.uri}):y().isLocalTrack(e)?N=n.createElement(A.N,{uri:e,contextUri:e}):y().isTrack(e)&&(N=n.createElement(S.$,{uri:e,contextUri:e,albumUri:null==u?void 0:u.uri,artists:l}));return n.createElement(h.ZP,{value:"row",index:r},n.createElement(_._,{menu:N},n.createElement(q.c,{uri:e,contextUri:e,index:r,ariaRowIndex:r,onTriggerPlay:()=>{b()},isActive:v,isPlayable:P,ageRestricted:o,dragMetadata:{name:t,createdBy:O}},n.createElement(R.vZ,{ariaColIndex:0},n.createElement(R.VG,{uri:e,src:i,isPlaying:f,isActive:v,isLocked:!1,onClick:()=>{x()},isEpisode:y().isEpisode(e),playAriaLabel:c.ag.get("tracklist.a11y.play",t,O)}),n.createElement(R.vm,null,n.createElement(R.Wh,{titleText:t},t),C&&n.createElement(R.g3,null,k.download&&n.createElement(M.G,{size:16}),k.explicit&&n.createElement(j.N,null),k.nineteen&&n.createElement(Q.X,{className:L.Z.nineteen,size:16})),n.createElement(R.K9,null,y().isTrack(e)?n.createElement(R.T6,{artists:l}):l[0].name))),n.createElement(R.UA,{ariaColIndex:2},n.createElement(R.BM,{nonInteractive:y().isLocalTrack(e),uri:u.uri,name:u.name,creatorUri:null==l||null===(d=l[0])||void 0===d?void 0:d.uri},u.name)),n.createElement(R.mU,{ariaColIndex:1},!y().isLocalTrack(e)&&n.createElement(R.qS,{uri:e,type:m}),n.createElement(R.A$,{duration:a}),n.createElement(R.Zv,{menu:N,label:c.ag.get("more.label.track",t,O)})))))}),((e,t)=>e.uri===t.uri)),W=n.memo((({items:e})=>{const t=I(e.map((e=>e.uri))),a=(0,n.useMemo)((()=>t.map(((t,a)=>e[a].isLocal?e[a]:t))),[t,e]),r=(0,n.useCallback)(((e,t)=>{if((r=e).type===U.p.TRACK&&y().isTrack(r.uri)){var a;const r=(0,D.X)(null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return n.createElement(F,{key:t+e.uri,index:t,uri:(0,b.$)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==r?void 0:r.url)||"",album:e.album,artists:e.artists,isExplicit:e.explicit,isMOGEFRestricted:(e.tags||[]).includes("MOGEF-19+"),type:U.p.TRACK})}var r,i,l;if((e=>e.type===U.p.EPISODE)(e)){var u;const a=(0,D.X)(null===(u=e.show)||void 0===u?void 0:u.images,{desiredSize:40});return n.createElement(F,{key:t+e.uri,index:t,uri:(0,b.$)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==a?void 0:a.url)||"",album:{name:e.show.name,uri:e.show.uri},artists:[{name:e.show.publisher,uri:""}],isExplicit:e.explicit,isMOGEFRestricted:!1,type:U.p.EPISODE})}return(e=>e.type===U.p.TRACK&&y().isLocalTrack(e.uri))(e)?n.createElement(F,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration,imgUrl:e.imageUrl||"",album:{name:(null===(i=e.album)||void 0===i?void 0:i.name)||"",uri:""},artists:[{name:(null===(l=e.artist)||void 0===l?void 0:l.name)||"",uri:""}],isExplicit:e.isExplicit,isMOGEFRestricted:!1,type:U.p.LOCAL_FILES}):n.createElement(f.hU,{height:`${f.dN}px`})}),[]),i=(0,n.useMemo)((()=>[f.QD.TITLE,f.QD.ALBUM_OR_PODCAST,f.QD.DURATION]),[]),l=(0,n.useCallback)((e=>e.uri),[]);return n.createElement(n.Fragment,null,n.createElement(h.ZP,{value:"play-history-tracklist"},n.createElement(f.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:i,renderRow:r,resolveUri:l,tracks:a,nrTracks:a.length,rowPlaceholder:f.hU,limit:50})))})),Z="dt3fysZYdQ6hhWfpmjAu",K="n6LsTkKvpO88xeRyRTdw",z=()=>{const e=(0,u.U5)();return e&&e.items.length>0?n.createElement("div",{className:Z},n.createElement(o.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:K},c.ag.get("view.recently-played")),n.createElement(W,{items:e.items})):n.createElement(g,null)};var Y=a(94184),H=a.n(Y),X=a(70369),V=a(67892),J=a(23716),ee=a(34891),te=a(86081);var ae=a(14472),ne=a(24209);const re=({onClick:e})=>n.createElement(ne.P,{onClick:e,buttonSize:"sm"},c.ag.get("queue.clear-queue"));var ie=a(73012),le=a(21770),ue=a(99450),se=(a(29298),a(85105));const oe="i9rTNwKyT_NMDghd8q65",ce="DXBMXJD8Zoj4V8MxIVTB",me="UEtqSfWDubkNdPIaEkfA",de="I_Rc74Je7W4sk6KAVR05",pe=n.memo((({onClose:e,onConfirm:t,isOpen:a,itemCount:r})=>{const i=(0,n.useCallback)((a=>{t(),e(a)}),[t,e]),l=c.ag.get("queue.confirm-title",r);return n.createElement(se.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:l,isOpen:a},n.createElement("div",{className:oe},n.createElement(o.Dy,{as:"h2",variant:"cello",className:ce},l),n.createElement(o.Dy,{as:"p",variant:"mesto",className:me,paddingBottom:ie.g4V},c.ag.get("queue.confirm-message")),n.createElement("div",{className:H()("encore-light-theme",de)},n.createElement(le.oM,{onClick:e},c.ag.get("queue.cancel-button")),n.createElement(ue.D,{onClick:i},c.ag.get("queue.confirm-button")))))}));var Ee=a(76),ge=a(17470);const ve=()=>n.createElement("div",{className:d},n.createElement(ge.S,{iconSize:64}),n.createElement(o.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:p},c.ag.get("queue.empty-title")),n.createElement("p",null,c.ag.get("queue.empty-description")),n.createElement(Ee.OL,{to:"/search",className:E},n.createElement(ue.D,{colorSet:"invertedLight"},c.ag.get("queue.fine-something"))));let ye;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(ye||(ye={}));var fe=a(56802),be=a(89952);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ke=(e,t)=>{const a=I(e.slice(0,50).map((e=>e.uri)),t);return t?e.reduce(((e,t,n)=>(a[n]&&e.push(((e,t)=>(0,be.G_)(e)&&(e=>"track"===e.type)(t)?xe(xe({},e),{},{name:t.name,album:xe(xe({},e.album),{},{name:t.album.name,images:t.album.images,uri:t.album.uri}),artists:t.artists.map((e=>({name:e.name,uri:e.uri,type:U.p.ARTIST}))),duration:{milliseconds:t.duration_ms},isExplicit:t.explicit,is19PlusOnly:(t.tags||[]).includes("MOGEF-19+")}):(0,be.iw)(e)&&(e=>"episode"===e.type)(t)?xe(xe({},e),{},{name:t.name,show:xe(xe({},e.show),{},{name:t.show.name,images:t.show.images,uri:t.show.uri}),duration:{milliseconds:t.duration_ms}}):e)(t,a[n])),e)),[]):e};var Ce=a(47307),Pe=a(22345),Oe=a(99191),Ne=a(69691);let we;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local"}(we||(we={}));const Ie=n.memo((({uri:e,uid:t,contextUri:a,name:r,duration_ms:i,artists:l,index:u,rowNumberOffset:s,imgUrl:o,isExplicit:m,isPlayable:d,isMOGEFRestricted:p,album:E,type:g,section:v,usePlayContextItem:f,isAutoPlay:b=!1,isEnhanced:x})=>{var k;const C=(0,J.g)(),{useCurrentAvailability:P}=(0,n.useContext)(B.I),[O,N]=P(e),{triggerPlay:w,togglePlay:I}=f({uid:t,uri:e,index:u}),{isActive:U,isPlaying:D}=(0,Ne.$o)(e),G=(0,n.useCallback)((()=>{t?w({},(()=>C.skipToNext({uri:e,uid:t}))):w()}),[C,w,e,t]),F=(0,n.useCallback)((()=>{t?I({},(()=>C.skipToNext({uri:e,uid:t}))):I()}),[C,I,e,t]),W=d&&(y().isLocalTrack(e)||O),Z=g===we.TRACK,K=g===we.EPISODE,z=g===we.CHAPTER,Y=K&&"video"===(null==E?void 0:E.mediaType),H=g===we.LOCAL,X=(null==l?void 0:l.map((e=>e.name)).join(c.ag.getSeparator()))||"",{badges:V,hasBadges:ee}=(0,$.r)({offlineAvailability:N,isExplicit:m,isMOGEFRestricted:p,isEnhanced:x});let te;te=K?n.createElement(T.k,{uri:e,uid:b?void 0:t,showUri:E.uri,contextUri:a}):z?n.createElement(Pe.r,{uri:e,uid:b?void 0:t,showUri:E.uri,contextUri:a}):H?n.createElement(A.N,{uri:e,uid:b?void 0:t,contextUri:a}):n.createElement(S.$,{uri:e,uid:b?void 0:t,albumUri:E.uri,artists:l,contextUri:a});const ae=(0,n.useCallback)(((a,n)=>{const{meta:r,uris:i}=a,l=i.map((e=>({uri:e,uid:null})));let u;u=n===q.W.Before?{before:{uri:e,uid:null!=t?t:null}}:{after:{uri:e,uid:null!=t?t:null}},r.section===ye.NowPlaying?C.addToQueue(l):r.origin===ye.NowPlaying?C.insertIntoQueue(l,u):C.reorderQueue(l,u)}),[C,t,e]),ne=(0,n.useCallback)(((a,n)=>{const{uids:r}=a,i=r.map((e=>({uri:"",uid:e})));let l;l=n===q.W.Before?{before:{uri:e,uid:null!=t?t:null}}:{after:{uri:e,uid:null!=t?t:null}},C.reorderQueue(i,l)}),[C,t,e]),re=b?[]:[Oe.aN[y().Type.TRACK],Oe.aN[y().Type.EPISODE]];return n.createElement(h.ZP,{value:"row",index:u},n.createElement(_._,{menu:te},n.createElement(q.c,{uri:e,contextUri:a,index:u,onTriggerPlay:G,isActive:v===ye.NowPlaying&&U,ariaRowIndex:u,isPlayable:W,ageRestricted:p,dragMetadata:{name:r,createdBy:X,sectionId:v},onInsert:(e,t,a,n,r)=>{ae({uris:e,dropIndex:t,meta:r},a)},onMove:(e,t,a,n)=>{ne({uids:e,dropIndex:t,meta:n},a)},allowedDropTypes:re},n.createElement(R.Dd,{ariaColIndex:0},n.createElement(R.Du,{uri:e,playAriaLabel:c.ag.get("tracklist.a11y.play",r,X),isPlaying:v===ye.NowPlaying&&D,isActive:v===ye.NowPlaying&&U,onClick:()=>{F()}},n.createElement(R.km,null,u+s+1))),n.createElement(R.vZ,{ariaColIndex:1},n.createElement(R.lD,{src:o,isVideo:Y,isEpisode:K||z}),n.createElement(R.vm,null,n.createElement(R.Wh,{titleText:r},r),ee&&n.createElement(R.g3,null,V.enhanced&&n.createElement(Ce._,{iconSize:16,className:L.Z.enhanced,title:c.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":c.ag.get("web-player.enhance.button_text_enhanced")}),V.download&&n.createElement(M.G,{size:16}),V.explicit&&n.createElement(j.N,null),V.nineteen&&n.createElement(Q.X,{className:L.Z.nineteen,size:16})),n.createElement(R.K9,null,Z&&n.createElement(R.T6,{artists:l}),(K||H)&&!Y&&X))),n.createElement(R.UA,{ariaColIndex:2},n.createElement(R.BM,{nonInteractive:H,uri:E.uri,name:E.name,creatorUri:null==l||null===(k=l[0])||void 0===k?void 0:k.uri},E.name)),n.createElement(R.mU,{ariaColIndex:3},!H&&n.createElement(R.qS,{uri:e,type:g}),n.createElement(R.A$,{duration:i}),n.createElement(R.Zv,{menu:te,label:c.ag.get("more.label.track",r,X)})))))}),((e,t)=>e.uri===t.uri&&e.index===t.index)),Ue=n.memo((({tracks:e,ariaLabel:t,contextUri:a,rowNumberOffset:r=0,section:i,usePlayContextItem:l})=>{const u=(0,fe.o)(),s=(0,J.g)(),o=ke(e,!s.getCapabilities().hasDecoratedQueue),c=(0,n.useCallback)(((e,t)=>{u({intent:"remove-from-queue",type:"click"}),s.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(t)}),[s,u]),m=(0,n.useCallback)(((e,t)=>{if((0,be.iw)(e)){var u,s;const o=(0,D.X)(null===(u=e.show)||void 0===u?void 0:u.images,{desiredSize:40});return n.createElement(Ie,{key:`${t}${r}${e.uid}`,index:t,rowNumberOffset:r,imgUrl:(null==o?void 0:o.url)||"",uri:(0,b.$)(e),uid:null!==(s=e.uid)&&void 0!==s?s:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:we.EPISODE,section:i,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,be.G7)(e)){var o;const u=(0,D.X)(e.images||void 0,{desiredSize:40});return n.createElement(Ie,{key:`${t}${r}${e.uid}`,index:t,rowNumberOffset:r,imgUrl:(null==u?void 0:u.url)||"",uri:(0,b.$)(e),uid:null!==(o=e.uid)&&void 0!==o?o:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:we.CHAPTER,section:i,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,be.G_)(e)||(0,be.RB)(e)){var c,m,d,p,E;const u=(0,D.X)(null==e||null===(c=e.album)||void 0===c?void 0:c.images,{desiredSize:40}),s=e.type===U.p.TRACK?e:null;return n.createElement(Ie,{key:`${t}${r}${e.uid}`,index:t,rowNumberOffset:r,imgUrl:(null==u?void 0:u.url)||"",uri:(0,b.$)(e),uid:null!==(m=e.uid)&&void 0!==m?m:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:null!==(d=null==s?void 0:s.isExplicit)&&void 0!==d&&d,isPlayable:!0,isMOGEFRestricted:null!==(p=null==s?void 0:s.is19PlusOnly)&&void 0!==p&&p,type:null!=s&&s.isLocal?we.LOCAL:we.TRACK,section:i,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===(null===(E=e.metadata)||void 0===E?void 0:E.provider)})}return n.createElement(f.Lb,{height:`${f.dN}px`})}),[r,a,i,l]),d=(0,n.useMemo)((()=>[f.QD.INDEX,f.QD.TITLE,f.QD.ALBUM,f.QD.DURATION]),[]),p=(0,n.useCallback)((e=>e.uri),[]),E=(0,n.useCallback)((e=>{var t;return null!==(t=e.uid)&&void 0!==t?t:e.uri}),[]);return o&&n.createElement(f.Pv,{ariaLabel:t,tracks:o,nrTracks:o.length,onRemove:c,renderRow:m,resolveUri:p,resolveUid:E,columns:d})})),De="rHpv7osDRvs3SUPMpQ_g",Te="DG9CsoFIptJhAneKoo_F",Ae="jf2HafzDEI9jn7Yo05eM",Se="H3Puuvc2nV0GoZRrfpRS",Re="HckHyQocDDePWQL2baOY",Le=()=>{const{uri:e,description:t}=(0,ae.$)(),a=(0,J.g)(),{current:r,nextUp:i,queued:l}=function(){const e=(0,J.g)(),[t,a]=(0,n.useState)(e.getQueue());return(0,te.G)(ee.rg.QUEUE_UPDATE,(e=>a(e.data))),t}(),[u,s]=(0,n.useState)(!1),m=(0,n.useCallback)((()=>{s(!1)}),[s]),d=(0,n.useCallback)((()=>{a.clearQueue(),s(!1)}),[a]),p=(0,n.useCallback)((()=>{s(!0)}),[s]),{usePlayContextItem:E}=(0,G.n)({uri:null!=e?e:""},{featureIdentifier:"queue"}),g="autoplay"===(null==r?void 0:r.provider),v=i.filter((e=>g?e:"autoplay"!==e.provider)),y=!(null==l||!l.length),f=!(null==v||!v.length);return!1===(r||y||f)?n.createElement(ve,null):n.createElement("section",{className:De},n.createElement(X.$,null,c.ag.get("queue.page-title")),n.createElement(o.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:Te},c.ag.get("playback-control.queue")),r&&e&&n.createElement(n.Fragment,null,n.createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},c.ag.get("queue.now-playing")),n.createElement(h.ZP,{value:"now-playing"},n.createElement(Ue,{ariaLabel:c.ag.get("queue.now-playing"),tracks:[r],contextUri:e,section:ye.NowPlaying,usePlayContextItem:E}))),y&&e&&n.createElement(n.Fragment,null,n.createElement("div",{className:H()(Re,Ae)},n.createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},c.ag.get("queue.next-in-queue")),y&&n.createElement(re,{onClick:p})),n.createElement(h.ZP,{value:"next-in-queue"},n.createElement(Ue,{ariaLabel:c.ag.get("queue.next-in-queue"),tracks:l,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:ye.NextInQueue,usePlayContextItem:E}))),f&&e&&n.createElement(n.Fragment,null,n.createElement(o.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:H()(Ae,"standalone-ellipsis-one-line")},t&&!g?n.createElement(n.Fragment,null,c.ag.get("queue.next-from")," ",n.createElement(V.r,{className:Se,to:e},t)):c.ag.get("queue.next-up")),n.createElement(h.ZP,{value:"next-up"},n.createElement(Ue,{ariaLabel:c.ag.get("queue.next-up"),tracks:v,rowNumberOffset:1+((null==l?void 0:l.length)||0),contextUri:"spotify:app:queue:NextUp",section:ye.NextUp,usePlayContextItem:E}))),n.createElement(pe,{itemCount:(null==l?void 0:l.length)||0,isOpen:u,onClose:m,onConfirm:d}))};var qe=a(1463),_e=a(28638),Me=a(26089);const je="queue-tabBar-nav",Qe=()=>{const e=(0,s.Y)(),t=(0,n.useCallback)((e=>n.createElement(Me.v,{placement:"bottomEnd",arrow:"topStart",title:"Manage play order with Premium",message:"With Premium you can turn off suffle play, plus listen ad-free and offline"},e)),[]),a=(0,n.useMemo)((()=>[{title:c.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:t,disabled:e},{title:c.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,t]);return n.createElement(_e.w,null,n.createElement(qe.n,{className:je,links:a}))},Be=()=>{const e=(0,u.nF)(),t=(0,s.Y)();return n.createElement("section",{className:"contentSpacing"},t&&n.createElement(i.A,{from:"/queue",to:"/history"}),e&&n.createElement(l.N,{path:"/history",pageId:r.W.NOWPLAYING_HISTORY},n.createElement(z,null)),n.createElement(l.N,{path:"/queue",pageId:r.W.NOWPLAYING_QUEUE},n.createElement(n.Suspense,{fallback:null},n.createElement(Le,null))),e&&n.createElement(Qe,null))}},47991:(e,t,a)=>{a.d(t,{$:()=>n});const n=e=>{var t;return(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri}}}]);
//# sourceMappingURL=xpui-routes-queue.js.map