"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{19565:(e,t,a)=>{a.d(t,{u:()=>g});var l=a(67294),r=a(94184),n=a.n(r),i=a(28760),o=a(99450),s=a(51775),c=a(40771);const A="FvfvGU3jvHRskUU9v9_8",E="Q9AlbZn2EGzy3MTWXa8X",u="mxmxS0y8LiwSs5nueKPT",d="GXxVAveNFStY3pBI_NO4",m="eHcXC2s97InYP7rMNT0H",g=l.memo((e=>{const{children:t,message:a,title:r,linkTitle:g,linkTo:C,onClick:T,renderInline:y=!1}=e,{isXSOnly:p,isSMOnly:D}=(0,s.e)(),L=p||D;return l.createElement("section",{className:n()(A,{[E]:y})},t,l.createElement(i.Dy,{as:"h1",variant:L?"cello":"alto",className:d},r),l.createElement(i.Dy,{variant:L?"mesto":"ballad",className:m},a),g&&(C||T)&&l.createElement(o.D,{colorSet:"invertedLight",className:u,href:C,onClick:T,component:c.Z},g))}))},95289:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(67294),r=a(94184),n=a.n(r),i=a(28760),o=a(62312),s=a(41374),c=a(20246),A=a(58238),E=a(91883),u=a(30005),d=a(36652),m=a(21691),g=a(28248);const C=({heading:e,selected:t,onSelect:a,options:r,sortOrder:n})=>{let o;return n&&(n===g.kn.ASC||n===g.kn.SECONDARY_ASC?o=l.createElement(A.C,{iconSize:16}):n!==g.kn.DESC&&n!==g.kn.SECONDARY_DESC||(o=l.createElement(E.B,{iconSize:16}))),l.createElement(u.v,null,e?l.createElement(d.F,null,e):null,r.map((({key:e,value:r})=>l.createElement(m.s,{role:"menuitemradio","aria-checked":e===t.key&&!o,key:e,onClick:()=>a(e),icon:e===t.key&&o},l.createElement(i.Dy,{variant:"mesto"},r)))))},T="x-sortBox-sortDropdown",y="CbHJjxYxldG7uUPMYMaP";const p=({heading:e,options:t,selected:a,onSelect:r,isSelectionChanged:A,sortOrder:E,variant:u="mesto",semanticColor:d,disabled:m})=>{const[g]=t;a||(a=g);const p=A?A(a):a!==g;return l.createElement(c.y,{menu:l.createElement(C,{selected:a,options:t,onSelect:r,sortOrder:E,heading:e})},((e,t,r)=>l.createElement("button",{className:n()(T,{[y]:p}),onClick:e=>{m||t(e)},ref:r,type:"button"},l.createElement(i.Dy,{semanticColor:d,variant:u},a.value),e?l.createElement(o.U,{iconSize:16}):l.createElement(s.i,{iconSize:16}))))}},1834:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>i});var l=a(67294),r=a(22583),n=a(97641);const i=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:n.oT.ADDED_AT}),o=l.memo((function({uri:e,children:t,defaultSortOption:a}){return l.createElement(r.r,{uri:e,defaultState:a,sortContext:i},t)}))},97641:(e,t,a)=>{a.d(t,{Aq:()=>E,Bf:()=>b,EY:()=>T,G5:()=>D,JV:()=>h,MY:()=>s,Ru:()=>c,ZP:()=>y,a6:()=>g,aY:()=>f,e3:()=>m,ei:()=>o,o$:()=>u,oT:()=>i,pT:()=>P,rJ:()=>S,u3:()=>O,w0:()=>L});var l=a(20657),r=a(74483),n=a(9659);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const o={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},s={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return l.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return l.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return l.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return l.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return l.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return l.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],A={[i.ADDED_AT]:{field:r.lY.ADDED_AT,order:r.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:r.lY.NAME,order:r.As.ASC},[i.CREATOR_NAME]:{field:r.lY.ARTIST_NAME,order:r.As.ASC}},E=e=>{if(c.includes(e))return A[e]},u=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],d={[i.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:r.hx.NAME,order:r.As.ASC}},m=e=>{if(u.includes(e))return d[e]},g=[i.ADDED_AT,i.SHOW_ALPHABETICAL],C={[i.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[i.SHOW_ALPHABETICAL]:{field:r.aW.NAME,order:r.As.ASC}},T=e=>{if(g.includes(e))return C[e]},y=[i.ADDED_AT,i.BOOK_ALPHABETICAL],p={[i.ADDED_AT]:r.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:r.VN.NAME},D=e=>{if(y.includes(e))return p[e]},L=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],_={[i.ADDED_AT]:{field:n.bD.ADDED_AT,order:n.As.DESC},[i.RECENTLY_PLAYED]:{field:n.bD.RECENTLY_PLAYED,order:n.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:n.bD.NAME,order:n.As.ASC},[i.MOST_RELEVANT]:{field:n.bD.RELEVANCE,order:n.As.DESC},[i.CUSTOM_ORDER]:void 0},P=e=>{if(L.includes(e))return _[e]},f=i.ADDED_AT,O=i.ADDED_AT,S=i.ADDED_AT,b=i.MOST_RELEVANT,h=i.ADDED_AT},86652:(e,t,a)=>{a.d(t,{h:()=>d});var l=a(67294),r=a(98816),n=a(61048),i=a(45342),o=a(1496),s=a(95289),c=a(1834),A=a(97641);const E=l.memo((({sortOptions:e,onSort:t})=>{const{sortState:a,setSortState:r}=(0,l.useContext)(c.Q),n=(0,l.useCallback)((e=>{const a=A.ei[e];null==t||t(a),r(a)}),[t,r]),i=e.map((e=>A.MY[e])),o=A.MY[a];return l.createElement(s.A,{options:i,onSelect:n,selected:o})})),u="collection-searchBar-searchBar",d=l.memo((({filterPlaceholder:e,sortOptions:t})=>{const{spec:a,logger:s}=(0,o.fU)(r.createDesktopSearchBarEventFactory,{}),c=(0,l.useContext)(i.H),A=(0,l.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[s,a]),d=(0,l.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().hitClearFilter())}),[s,a]),m=(0,l.useCallback)((()=>{s.logInteraction(a.sortButtonFactory().hitSort())}),[s,a]);return l.createElement("div",{className:u},null!=c&&c.getCapabilities().canFilter?l.createElement(l.Suspense,{fallback:null},l.createElement(n.K,{placeholder:e,onFilter:A,onClear:d})):null,null!=c&&c.getCapabilities().canSort?l.createElement(E,{sortOptions:t,onSort:m}):null)}))},47032:(e,t,a)=>{a.d(t,{$:()=>l.$,Q:()=>l.Q});var l=a(1834)},38911:(e,t,a)=>{a.d(t,{Aq:()=>l.Aq,Bf:()=>l.Bf,EY:()=>l.EY,G5:()=>l.G5,JV:()=>l.JV,Ru:()=>l.Ru,ZP:()=>l.ZP,a6:()=>l.a6,aY:()=>l.aY,e3:()=>l.e3,o$:()=>l.o$,oT:()=>l.oT,pT:()=>l.pT,rJ:()=>l.rJ,u3:()=>l.u3,w0:()=>l.w0});var l=a(97641)},2708:(e,t,a)=>{a.r(t),a.d(t,{default:()=>de});var l=a(67294),r=a(24078),n=a(20657),i=a(19565),o=a(1663),s=a(1838),c=a(22423),A=a(47032),E=a(38911),u=a(4236),d=a(53646),m=a(45342),g=a(84242),C=a(89952),T=a(23609),y=a(55120),p=a(86652),D=a(30947),L=a(55911),_=a(74483);const P={[_.yW.NAME]:s.hI.TITLE,[_.yW.SHOW_NAME]:s.hI.SHOW,[_.yW.ADDED_AT]:s.hI.ADDED_AT},f=[E.oT.ADDED_AT,E.oT.CREATOR_NAME,E.oT.EPISODE_ALPHABETICAL],O={[E.oT.ADDED_AT]:{field:_.yW.ADDED_AT,order:_.As.DESC},[E.oT.CREATOR_NAME]:{field:_.yW.SHOW_NAME,order:_.As.ASC},[E.oT.EPISODE_ALPHABETICAL]:{field:_.yW.NAME,order:_.As.ASC}},S=e=>{if(f.includes(e))return O[e]},b=e=>{if(!f.includes(e))return;const t=S(e);if(null==t||!t.field)return;const a=P[t.field];if(!a)return;return s.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")};var h=a(96462);const R=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:i,togglePlay:o})=>{const{uri:s,name:c}=e,A=e.totalLength>0;return l.createElement(D.o,{backgroundColor:a},l.createElement(D.F,null,A&&l.createElement(y.$,{onClick:()=>o(),isPlaying:r,size:L.qE.lg,uri:s,disabled:!i,ariaPlayLabel:n.ag.get("playlist.a11y.play",c),ariaPauseLabel:n.ag.get("playlist.a11y.pause",c)}),t&&l.createElement("div",{className:h.Z.searchBoxContainer},l.createElement(p.h,{filterPlaceholder:n.ag.get("playlist.search_in_playlist"),sortOptions:f}))))};var I=a(59713),v=a.n(I),k=a(33241),N=a(42922),M=a(18864),B=a(37763),H=a.n(B),x=a(25988),w=a(68556),Y=a(95806),U=a(96525),W=a(99191),F=a(56802),V=a(18261),$=a(87257),j=a(57978),Z=a(75016),z=a(4383),G=a(26010),K=a(8341),X=a(5944),q=a(42781),J=a(84788);const Q={small:64,standard:300,large:640,xlarge:1024},ee=l.memo((({index:e,contextUri:t,episode:a,onRemove:r,usePlayContextItem:n})=>{var i,o,s,A;const E=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),d=a.uri,[m,C]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:T}=(0,l.useContext)(c.fo),y=(0,U.P)(),p=(0,W.O1)(),D=(0,M.jh)(),L=(0,F.o)(),[_]=(0,z.Z)(d,!0),{useCurrentAvailability:P}=(0,l.useContext)(G.I),[f]=P(d),O=(0,u.k)(),S=(0,K.Y)((e=>{var t;if((null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===a.uri){var l;const t=null!==(l=(0,X.k)(e))&&void 0!==l?l:0;return E.current=t,t}return 0})),{isPlaying:b,isActive:R,togglePlay:I}=n({uri:d,index:e}),{isPlaying:v,isActive:k,togglePlay:B}=(0,g.n)({uri:d,pages:[{items:[{type:q.p.EPISODE,uri:d,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{_||r()}),[_,r]),(0,l.useEffect)((()=>{b||a.duration.milliseconds<=E.current&&C(!0)}),[b,a.duration.milliseconds]);const ee=(0,l.useCallback)((e=>{e||(E.current=0),C(e)}),[]),te=(0,l.useCallback)((()=>{L({type:"click",targetUri:d,intent:"navigate"})}),[d,L]),ae=(0,l.useCallback)((()=>{O?(L({type:"click",intent:b?"pause":"play"}),I()):(L({type:"click",intent:v?"pause":"play"}),B())}),[O,b,v,L,I,B]),le=(0,l.useCallback)((e=>l.createElement(H(),{searchWords:[T],textToHighlight:e,findChunks:y,highlightClassName:h.Z.filterHighlight})),[T,y]),re=null!==(i=null===(o=a.podcastSubscription)||void 0===o?void 0:o.isPaywalled)&&void 0!==i&&i,ne=null!==(s=null===(A=a.podcastSubscription)||void 0===A?void 0:A.isUserSubscribed)&&void 0!==s&&s,{badges:ie}=(0,J.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:re});let oe=!1;return(R||!O&&k)&&(oe=!0),_?l.createElement(N.ZP,{value:"row",index:e},l.createElement(V._,{menu:l.createElement(x.k,{uri:d,showUri:a.show.uri,isPlayed:m,onMarkAsPlayed:ee})},l.createElement(w.X,{requestId:a.requestId,index:e,uri:d,uid:d,size:D,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Q[e.label]:null),height:e.height||(e.label?Q[e.label]:null)}))),isPaywalled:re,isUserSubscribed:ne,name:a.name,highlightText:le,showName:a.show.name,showUri:a.show.uri,description:a.description,isPlayable:a.isPlayable&&f,fullyPlayed:m,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:E.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const l=`${a.name} • ${a.show.name}`;p(e,[d],l,t)},handlePlaybackClick:ae,handleClick:te,isCurrentlyPlaying:oe,isPlaying:O?b:v,position:oe?S:void 0,episodeSharingInfo:null,onMarkAsPlayed:ee,badges:l.createElement(l.Fragment,null,ie.explicit&&l.createElement($.N,null),ie.paid&&l.createElement(Z.g,null),ie.nineteen&&l.createElement(j.X,{size:16})),playButtonWrapper:e=>l.createElement(Y.l,{enabled:re&&!ne,showUri:a.show.uri},e)}))):null})),te="p6DKqBcwmVtxmHt8ju43",ae="_OxEpxzAgJiTENfolVUN";function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ne=l.memo((({contextUri:e,usePlayContextItem:t})=>{const a=(0,l.useContext)(m.H),{sortState:r}=(0,l.useContext)(A.Q),[n,i]=(0,l.useState)({totalLength:0,offset:0,items:[],limit:50}),o=(0,l.useRef)(!1),s=(0,l.useRef)(0),E=(0,l.useRef)(0),{filter:u}=(0,l.useContext)(c.fo),d=(0,l.useCallback)((()=>{E.current++}),[]),{ref:g,breakpoint:C}=(0,M.Db)({[M.Uo.MEDIUM]:0,[M.Uo.LARGE]:600}),T=(0,l.useCallback)(((e=!1)=>{const t=s.current;null!==t&&(o.current||(o.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-E.current,limit:50,sort:S(r),filter:u});return E.current=0,t})(Number(t)).then((a=>{i((l=>{const r=Number(a.offset)+a.items.length,n=e?[]:[...l.items];return n.splice(Number(t),a.items.length,...a.items),s.current=r<a.totalLength?r:null,re(re({},a),{},{items:n})})),o.current=!1}))))}),[u,a,r]);return(0,l.useEffect)((()=>{s.current=0,T(!0)}),[T]),l.createElement(M.ZU.Provider,{value:C},l.createElement(N.ZP,{value:"track-list"},l.createElement("div",{ref:g},l.createElement(k.C,{onReachBottom:T,triggerOnInitialLoad:!0},n.items.map(((a,r)=>l.createElement("div",{className:ae,key:`${r}${a.uri}`},l.createElement("hr",{className:te,"aria-hidden":!0}),l.createElement(ee,{key:`${a.uri}/${r}`,index:r,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t}))))))))}));var ie=a(42273),oe=a(59482),se=a(72907),ce=a(44887),Ae=a(83209);const Ee=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:r,togglePlay:i})=>{const{uri:o,name:s,images:c,totalLength:A,owner:E}=e,u=(0,l.useMemo)((()=>({id:E.username,uri:E.uri,name:E.username,displayName:E.displayName||void 0,images:E.images||[]})),[E]);return l.createElement(ie.gF,{backgroundColor:t},l.createElement(oe.W,null,l.createElement(y.$,{size:L.qE.sm,onClick:()=>i(),isPlaying:a,uri:o,disabled:!r,ariaPlayLabel:n.ag.get("playlist.a11y.play",s),ariaPauseLabel:n.ag.get("playlist.a11y.pause",s)}),l.createElement(se.i,{text:s})),l.createElement(ie.Oz,{images:c,name:s,shape:ce.K.ROUNDED_CORNERS,renderImage:()=>l.createElement(Ae.$,null)}),l.createElement(ie.sP,null,l.createElement(ie.dy,{small:!0,uppercase:!0},n.ag.get("playlist")),l.createElement(ie.xd,{canEdit:!1,onClick:()=>{}},s),l.createElement(ie.QS,{creators:[u],totalEpisodes:A})))},ue=({metadata:e,canSort:t})=>{const a=(0,d.Y5)("#006450"),o=(0,u.k)(),{sortState:E}=(0,l.useContext)(A.Q),{filter:m}=(0,l.useContext)(c.fo),{isPlaying:T,togglePlay:y,usePlayContextItem:p}=(0,g.n)({uri:e.uri,metadata:{[C.sb.SORTING_CRITERIA]:b(E),[C.sb.FILTERING_PREDICATE]:(0,s.aK)(m)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return l.createElement("section",{className:h.Z.yourEpisodes,"data-testid":"your-episodes-page"},l.createElement(Ee,{metadata:e,backgroundColor:a,isPlaying:T,isOnline:o,togglePlay:y}),l.createElement("div",{className:h.Z.yourEpisodesContentWrapper},l.createElement(R,{metadata:e,backgroundColor:a,isPlaying:T,isOnline:o,togglePlay:y,canSort:t}),l.createElement("div",{className:"contentSpacing"},e.totalLength>0?l.createElement(ne,{contextUri:e.uri,usePlayContextItem:p}):l.createElement(i.u,{message:n.ag.get("collection.empty-page.episodes-subtitle"),title:n.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:n.ag.get("collection.empty-page.shows-cta"),renderInline:!0},l.createElement(r.G,null)))))},de=l.memo((()=>{const e=(0,l.useContext)(m.H).getCapabilities(),t=(0,T.x)();return t?l.createElement(A.$,{uri:t.uri,defaultSortOption:E.oT.ADDED_AT},l.createElement(c.hz,{uri:t.uri},l.createElement(ue,{metadata:t,canSort:e.canSort&&t.totalLength>0}))):l.createElement(o.h,{hasError:!1,errorMessage:n.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map