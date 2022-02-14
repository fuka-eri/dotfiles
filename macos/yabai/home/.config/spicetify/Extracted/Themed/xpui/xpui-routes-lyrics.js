"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6025],{22578:(e,t,r)=>{r.d(t,{$:()=>m});var a=r(67294),n=r(64593),i=r(20657),l=r(8341),c=r(89952),s=r(76303),o=r(52883),u=r(24183);function d(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const m=({children:e,usePlayingItem:t})=>{let r=d(e);(e=>{const{mainLandmarkRef:t}=(0,u.Oh)(),r=(0,o.k6)(),n=(0,a.useRef)(r.length<2);n.current=r.length<2,(0,a.useEffect)((()=>{const r=t.current;r&&!n.current&&e&&(r.setAttribute("aria-label",e),r.focus())}),[e,t])})(e);const m=(0,l.Y)(s.o9)===c.PO.PLAYING,v=(0,l.Y)((e=>null==e?void 0:e.item));return v&&(m||t)&&((0,c.G_)(v)?r=[v.name,v.artists.map((e=>e.name)).join(i.ag.getSeparator())].join(" • "):(0,c.iw)(v)?r=[v.name,v.show.name].join(" • "):(0,c.k6)(v)&&(r=d(i.ag.get("ad-formats.advertisement")))),a.createElement(n.q,{defaultTitle:"Spotify",defer:!1},a.createElement("title",null,r))}},70369:(e,t,r)=>{r.d(t,{$:()=>a.$});var a=r(22578)},14412:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ye});var a=r(67294),n=r(91247),i=r(46458),l=r(69518),c=r.n(l),s=r(73012),o=r(87577),u=r(49207),d=r(31595),m=r(45106),v=r(8341),y=r(55799),p=r(49104),g=r(70369),b=r(10001),f=r(88767),E=r(96511),k=r(48015);var h=r(68120);function O(e,t,r){const{startTimeMs:a,words:n}=e,i=r[t+1];return{start:a||0,end:i&&i.startTimeMs?i.startTimeMs:1/0,text:n}}function N(e){const t=function(e){return{r:e>>16&255,g:e>>8&255,b:255&e}}(e);return k.I.fromRGB(t).toCSS(k.j.RGB)}const S=(e,t,r=!1)=>{const a=["lyrics",{uri:e,image:t,vocalRemoval:r}],{data:n,isLoading:i,isError:l}=(0,f.useQuery)(a,(async()=>e&&t&&c().isTrack(e)?await async function(e,t,r){try{var a;const l=await(0,h.S)(e,t,r);return{hasLyrics:!0,isTimeSynced:(i=l.lyrics.syncType,"LINE_SYNCED"===i||"SYLLABLE_SYNCED"===i),syncType:l.lyrics.syncType,lyrics:l.lyrics.lines.map(O),colors:(n=l.colors,{text:N(n.text),activeText:N(n.highlightText),background:N(n.background)}),provider:l.lyrics.provider,providerDisplayName:l.lyrics.providerDisplayName,providerLyricsId:l.lyrics.providerLyricsId,hasVocalRemoval:null!==(a=l.hasVocalRemoval)&&void 0!==a&&a}}catch(e){if(e instanceof E.m&&404===e.status)return{hasLyrics:!1};throw e}var n,i}(e,t,r):{hasLyrics:!1}),{cacheTime:18e5});return{data:null!=n?n:null,loading:i,error:l}};var L=r(20657),I=r(38470);const w="lyrics-lyrics-container",D="IIFWQwWvkxpl3swKeHSx",T="ihTTWcgqNLcQ_cg7Bubg",x="T67LFP0PElpfkkLuegQt",j="AEfhRyqGa3vzQrgfdwWE",P="LvLs_UgYs7ps5KdoCr0h",_="sBjjiOPNOtqSuitK1cLZ",B="lyrics-lyrics-background",G="_T5UDP2tItG9WGdwO5Yi",F="YRcOaDMQH71HylItIhW6",C="vUzb9hvfXJN11OcnaszM",A="Re403AJffPPuZmX7LRJj",Y="EKdvOmPl7kNCDg_yuma8",R=a.memo((({version:e})=>{const t=[L.ag.get("web-player.lyrics.noLyrics0"),L.ag.get("web-player.lyrics.noLyrics1"),L.ag.get("web-player.lyrics.noLyrics2"),L.ag.get("web-player.lyrics.noLyrics3")];let r;switch(e){case"ad":r=L.ag.get("web-player.lyrics.ad");break;case"error":r=L.ag.get("web-player.lyrics.error");break;case"unavailable":r=t[Math.floor(Math.random()*t.length)];break;default:(0,I.U)(e)}return a.createElement("div",{className:x},a.createElement("span",{className:Y},r))}));var U=r(59713),V=r.n(U),W=r(28760),z=r(23716),M=r(52759),q=r(24643),J=r(8271);function H(e){const{trackUri:t,format:r,provider:n,providerLyricsId:i,syncType:l,playbackId:c}=e,[s,o]=(0,a.useState)(!1),[u,d]=(0,a.useState)(0),m=(0,a.useMemo)((()=>(0,q.N)({lyrics_format:r,track_uri:t,provider:n,provider_lyrics_id:i,sync_type:l,playback_id:c})),[r,n,i,l,t,c]);(0,a.useEffect)((()=>{o(!1),d(0)}),[m]);const v=(0,J.s4)();return(0,a.useEffect)((()=>{s||u>=140&&(v.send(m),o(!0))}),[u,s,m,v]),d}var K=r(70131),Q=r(32648);const Z="XhqhT8BYwh_Ebk_zFHvA",$="HiVDAl0LvHLB_YdI9xwQ",X="gaHIufRWhoWbiT8S6zuM",ee="t0iEG6xYBDhK_mFvkCp0",te="KnFq2ijXFdOtyl4Iebjv",re="Qo3OkrSis5IWlP9Tchbr",ae="I4K12o0qDoITOLr2AEs0",ne="OYiGFGZJDIZ4FF4ZTDK2",ie=a.memo((({onObserve:e,text:t,lineNumber:r,activeLineIndex:i,isTimeSynced:l,handleLyricsClick:c})=>{const{ref:s,inView:o}=(0,K.YD)({threshold:0,triggerOnce:!0});(0,a.useEffect)((()=>{o&&e(t)}),[o,e,t]);const u=(0,a.useRef)(),d=(0,a.useRef)(!0),m=(0,a.useContext)(Q.VX);return(0,a.useEffect)((()=>{if(l&&i===r||l&&0===r&&i<0){var e,t,a;const r=null===(e=u.current)||void 0===e?void 0:e.getBoundingClientRect().top,n=null===(t=m.scrollNodeRef.current)||void 0===t?void 0:t.getBoundingClientRect().height,l=n/4;if((r<l||r>n-l)&&!d.current&&i>=0)return;const c=d.current?"auto":"smooth";null===(a=u.current)||void 0===a||a.scrollIntoView({behavior:c,block:"center",inline:"center"})}d.current=!1}),[i,l,r,u,m]),a.createElement("div",{dir:"auto",className:(0,n.cx)(X,{[ee]:i===r,[te]:i>r,[re]:!l}),"data-testid":"fullscreen-lyric",ref:e=>{s(e),u.current=e||void 0},onClick:e=>c(e,r)},t)}));function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){V()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const se={start:0,end:1,text:""},oe=a.memo((({trackUri:e,data:t})=>{const{lyrics:r=[],provider:n,providerLyricsId:i,providerDisplayName:l,syncType:c,isTimeSynced:s}=t,[o]=(0,M.z)(500,(t=>{var r;return(null==t||null===(r=t.item)||void 0===r?void 0:r.uri)===e})),u=(0,v.Y)((e=>{var t;return null!==(t=null==e?void 0:e.playbackId)&&void 0!==t?t:void 0})),d=H({trackUri:e,format:"fullscreen",provider:n,providerLyricsId:i,syncType:c,playbackId:u}),m=(0,a.useCallback)((e=>{e.length>1&&d((t=>t+e.length))}),[d]),y=(0,a.useMemo)((()=>[se,se,...r].map(((e,t)=>ce(ce({},e),{},{lineNumber:t})))),[r]),p=s?y.findIndex((({start:e,end:t})=>o>=e&&o<t)):-1,g=(0,z.g)(),b=(e,t)=>{if(s){e.target.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),g.seekTo(y[t].start);const r=g.getState();r&&!r.isPaused||g.resume()}};return a.createElement("div",{className:Z},a.createElement("div",{className:$},!s&&a.createElement(W.Dy,{as:"p",variant:"mesto",className:ne,dir:"auto"},L.ag.get("web-player.lyrics.unsynced")),y.map((({text:e,lineNumber:t})=>a.createElement(ie,{key:t,text:e,lineNumber:t,activeLineIndex:p,isTimeSynced:s,onObserve:m,handleLyricsClick:b}))),l&&a.createElement(W.Dy,{as:"p",variant:"mesto",className:ae,dir:"auto"},L.ag.get("web-player.lyrics.providedBy",l))))}));var ue=r(94184),de=r.n(ue),me=r(57518),ve=r(7762),ye=r(27808),pe=r(26912),ge=r(62312),be=r(41374),fe=r(32626),Ee=r(30005),ke=r(36652),he=r(21691),Oe=r(66587);const Ne="qnJd7AVNVGM33NxaibzG",Se="tPJJwfJAQV0WDsE9Kfmd",Le=[{volume:Oe.B.SING_ALONG_OFF,icon:a.createElement(me.D,{iconSize:16}),get label(){return L.ag.get("singalong.off")}},{volume:Oe.B.HIGH,icon:a.createElement(ve.d,{iconSize:16}),get label(){return L.ag.get("singalong.more-vocal")}},{volume:Oe.B.LOW,icon:a.createElement(ye.J,{iconSize:16}),get label(){return L.ag.get("singalong.less-vocal")}}],Ie=a.memo((({currentTrackUri:e})=>{const{isSupported:t,volume:r,setVocalVolume:n}=(e=>{const t=(0,y.$)(),[r,n]=(0,a.useState)(Oe.B.SING_ALONG_OFF),{isSupported:i}=t.getCapabilities();return(0,a.useEffect)((()=>{t.setStatus(Oe.q.DISABLED).then((()=>{n(Oe.B.SING_ALONG_OFF)}))}),[e,t]),(0,a.useEffect)((()=>()=>{t.setStatus(Oe.q.DISABLED)}),[t]),{isSupported:i,volume:r,setVocalVolume:(0,a.useCallback)((async e=>{e===Oe.B.SING_ALONG_OFF?await t.setStatus(Oe.q.DISABLED):await t.setStatus(Oe.q.ENABLED),await t.setVocalVolume(e),n(e)}),[t])}})(e),i=(0,a.useCallback)((e=>{t&&n(e.volume)}),[t,n]);if(!t)return null;const l=Le.find((e=>e.volume===r)),c=(null==l?void 0:l.volume)===Oe.B.SING_ALONG_OFF;return a.createElement(fe.yj,{menu:a.createElement(Ee.v,null,a.createElement(ke.F,null,L.ag.get("singalong.title")),Le.map((e=>a.createElement(he.s,{role:"menuitemradio","aria-checked":r===e.volume,"aria-label":e.label,key:e.volume,onClick:()=>i(e),icon:e.icon,iconPosition:"leading"},e.label))))},((e,t,r)=>a.createElement("button",{onClick:t,ref:r,type:"button",className:de()(Ne,{[Se]:c})},c?a.createElement(a.Fragment,null,a.createElement(pe.r,{iconSize:16}),a.createElement(W.Dy,{variant:"mesto"},L.ag.get("singalong.button"))):a.createElement(a.Fragment,null,l.icon,a.createElement(W.Dy,{variant:"mesto"},l.label)),e?a.createElement(ge.U,{iconSize:16}):a.createElement(be.i,{iconSize:16}))))}));function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){V()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Te={start:0,end:1,text:""},xe={"--line-count":3},je=a.memo((({trackUri:e,data:t})=>{const{lyrics:r=[],provider:n,providerLyricsId:i,providerDisplayName:l,syncType:c}=t,[s]=(0,M.z)(500,(t=>{var r;return(null==t||null===(r=t.item)||void 0===r?void 0:r.uri)===e})),o=(0,v.Y)((e=>{var t;return null!==(t=null==e?void 0:e.playbackId)&&void 0!==t?t:void 0})),u=H({trackUri:e,format:"card",provider:n,providerLyricsId:i,syncType:c,playbackId:o}),d=(0,a.useMemo)((()=>[Te,Te,...r].map(((e,t)=>De(De({},e),{},{lineNumber:t})))),[r]),m=d.findIndex((({start:e,end:t})=>s>=e&&s<t)),y=(0,a.useMemo)((()=>{const e=Math.max(m-1,0);return d.slice(e,e+3+2)}),[m,d]);return(0,a.useEffect)((()=>{u((e=>d.reduce(((e,{text:t,lineNumber:r})=>{const a=t.length>1?t.length:0;return e+=m===r?a:0}),e)))}),[d,m,u]),a.createElement("div",{className:_,style:xe},a.createElement("div",{className:C},y.map((({text:e,lineNumber:t},r)=>{const n={"--animation-index":r};return a.createElement("p",{className:A,style:n,key:t,dir:"auto"},e)}))),l&&a.createElement(W.Dy,{as:"p",variant:"mesto",className:G,dir:"auto"},L.ag.get("web-player.lyrics.providedBy",l)))})),Pe=a.memo((({onObserve:e,text:t})=>{const{ref:r,inView:n}=(0,K.YD)({threshold:0});return(0,a.useEffect)((()=>{n&&e(t)}),[n,e,t]),a.createElement("p",{className:A,ref:r,dir:"auto","data-testid":"unsynced-lyric"},t)})),_e=a.memo((({trackUri:e,data:t})=>{const{lyrics:r=[],provider:n,providerLyricsId:i,providerDisplayName:l,syncType:c}=t,o=(0,v.Y)((e=>{var t;return null!==(t=null==e?void 0:e.playbackId)&&void 0!==t?t:void 0})),u=H({trackUri:e,format:"fullscreen",provider:n,providerLyricsId:i,syncType:c,playbackId:o}),d=(0,a.useCallback)((e=>{e.length>1&&u((t=>t+e.length))}),[u]);return a.createElement("div",{className:j},a.createElement(W.Dy,{as:"p",variant:"ballad",className:P,paddingBottom:s.mGT},L.ag.get("web-player.lyrics.unsynced")),a.createElement("div",null,r.map((({text:t},r)=>a.createElement(Pe,{key:e+r,onObserve:d,text:t})))),l&&a.createElement(W.Dy,{as:"p",variant:"mesto",className:G,dir:"auto"},L.ag.get("web-player.lyrics.providedBy",l)))})),Be=a.createElement("div",{className:T},a.createElement(b.H,null)),Ge=a.createElement(R,{version:"error"}),Fe=a.createElement(R,{version:"ad"}),Ce=a.createElement(R,{version:"unavailable"}),Ae={active:s.ixZ,inactive:s.Snx,background:s.tGJ,messaging:s.ixZ},Ye=()=>{var e,t,r,l;const s=(0,y.$)(),{isSupported:b}=s.getCapabilities(),f=(0,o.W6)(u.cp),E=(0,o.W6)(u.bD),k=f&&b,h=(0,m.O)(),O=(0,v.Y)((e=>e),((e,t)=>{var r,a;return(null==e||null===(r=e.item)||void 0===r?void 0:r.uri)===(null==t||null===(a=t.item)||void 0===a?void 0:a.uri)})),N=null==O?void 0:O.item,L=(null==N?void 0:N.uri)||"",I=(0,p.o)((null==N?void 0:N.images)||void 0,{desiredLabel:"large",desiredSize:600}),{data:T,loading:x,error:j}=S(L,I||(null==N||null===(e=N.images)||void 0===e?void 0:e[0].url)||"",k);let P=Ae;null!=T&&T.hasLyrics&&(P={active:T.colors.activeText,inactive:T.colors.text,background:T.colors.background,messaging:T.colors.text}),(0,d.Y)(P.background,Ae.background);const _=null==O||null===(t=O.nextItems)||void 0===t?void 0:t[0];S((null==_?void 0:_.uri)||"",(null==_||null===(r=_.images)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.url)||"",k);let G=Be,C=!1;if(L)if(c().isAd(L))G=Fe;else if(j)G=Ge;else if(x)G=Be;else if(T)if(T.hasLyrics){var A,Y;const e=null!==(A=null===(Y=h.activeDevice)||void 0===Y?void 0:Y.isLocal)&&void 0!==A&&A;C=k&&T.hasVocalRemoval&&e,G=E?a.createElement(oe,{trackUri:L,data:T,key:L}):T.isTimeSynced?a.createElement(je,{trackUri:L,data:T}):a.createElement(_e,{trackUri:L,data:T})}else G=Ce;const R=(0,i.v9)((e=>e.ads.leaderboard.isEnabled)),U={"--lyrics-color-active":P.active,"--lyrics-color-inactive":P.inactive,"--lyrics-color-background":P.background,"--lyrics-color-messaging":P.messaging};return a.createElement(a.Fragment,null,a.createElement(g.$,{usePlayingItem:!0},"Spotify"),a.createElement("div",{className:(0,n.cx)(w,{[D]:R}),style:U},a.createElement("div",{className:B}),G,C?a.createElement("div",{className:F},a.createElement(Ie,{currentTrackUri:L})):null))}}}]);
//# sourceMappingURL=xpui-routes-lyrics.js.map