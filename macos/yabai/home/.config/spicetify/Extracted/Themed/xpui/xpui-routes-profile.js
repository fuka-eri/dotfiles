"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{30523:(e,t,a)=>{a.d(t,{P:()=>p});var r=a(67154),i=a.n(r),l=a(67294),n=a(5843),o=a(20657),s=a(18261),u=a(43480),d=a(36590),m=a(51079),c=a(47418),g=a(11186);const p=l.memo((e=>{const{images:t,name:a,uri:r,onClick:p,isHero:v,testId:f,index:h,requestId:b}=e;let y;const E=(0,l.useCallback)((()=>l.createElement(m.x,{isCircular:!0,isHero:v,images:t,FallbackComponent:e=>l.createElement(n.a,i()({iconSize:64},e))})),[t,v]),k=(0,l.useCallback)((()=>v?l.createElement(g.k,null,o.ag.get("card.tag.profile")):o.ag.get("card.tag.profile")),[v]);return y=v?l.createElement(c.Z,{index:h,onClick:p,headerText:a,featureIdentifier:"profile",uri:r,isPlayable:!1,renderCardImage:E,renderSubHeaderContent:k,testId:f,requestId:b}):l.createElement(d.C,{index:h,onClick:p,headerText:a,featureIdentifier:"profile",uri:r,isPlayable:!1,renderCardImage:E,renderSubHeaderContent:k,testId:f,requestId:b}),l.createElement(s._,{menu:l.createElement(u.I,{uri:r})},y)}))},22578:(e,t,a)=>{a.d(t,{$:()=>c});var r=a(67294),i=a(64593),l=a(20657),n=a(8341),o=a(89952),s=a(76303),u=a(52883),d=a(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const c=({children:e,usePlayingItem:t})=>{let a=m(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),a=(0,u.k6)(),i=(0,r.useRef)(a.length<2);i.current=a.length<2,(0,r.useEffect)((()=>{const a=t.current;a&&!i.current&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t])})(e);const c=(0,n.Y)(s.o9)===o.PO.PLAYING,g=(0,n.Y)((e=>null==e?void 0:e.item));return g&&(c||t)&&((0,o.G_)(g)?a=[g.name,g.artists.map((e=>e.name)).join(l.ag.getSeparator())].join(" • "):(0,o.iw)(g)?a=[g.name,g.show.name].join(" • "):(0,o.k6)(g)&&(a=m(l.ag.get("ad-formats.advertisement")))),r.createElement(i.q,{defaultTitle:"Spotify",defer:!1},r.createElement("title",null,a))}},70369:(e,t,a)=>{a.d(t,{$:()=>r.$});var r=a(22578)},37338:(e,t,a)=>{a.d(t,{T:()=>m});var r=a(67294),i=a(99191),l=a(25678),n=a(33732),o=a(42273),s=a(22023);const u="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer",m=function({onClick:e,name:t,images:a,canEdit:m,placeholderType:c,shape:g=o.Kc.SQUARE,dragUri:p=""}){const[v,f]=(0,n.RH)(a),h=(0,l.VO)(v,f)===l.KO.loaded,b=(0,i.O1)([p],t);return r.createElement("div",{className:u,"data-testid":`${c}-image`,draggable:!!p,onDragStart:b},r.createElement(o.Oe,{loading:"eager",name:t,images:a,placeholderType:c,shape:g}),m&&r.createElement("div",{className:d},r.createElement(s.F,{overlay:h,onClick:e,rounded:g===o.Kc.CIRCLE})))}},28231:(e,t,a)=>{a.d(t,{S:()=>u});var r=a(67294),i=a(38124),l=a(28760);const n="CmR9tHJ5ta6oWJlKBm3k",o="artist-artistVerifiedBadge-badge",s="bn2UNQDs5GLY5rjp5Ljh",u=({text:e})=>r.createElement("span",{className:n},r.createElement("div",{className:`${o} ${s}`}),r.createElement(i.T,{semanticColor:"textAnnouncement",className:o,iconSize:24}),e?r.createElement(l.Dy,{variant:"mesto"},e):null)},71685:(e,t,a)=>{a.r(t),a.d(t,{default:()=>gt});var r=a(67294),i=a(52883),l=a(69518),n=a.n(l),o=a(73305),s=a(35796),u=a(94184),d=a.n(u),m=a(20657),c=a(30523),g=a(1663),p=a(19480),v=a(48327),f=a(19719);const h={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",buddyFeedMinWidth:"72px",buddyFeedEmptyMinWidth:"270px",buddyFeedInitialWidth:"270px",buddyFeedMaxWidth:"384px",container:"yOe_xPT64Wi01yatD5IV",background:"IG4oVuJI3tVI46Ozz0Tj",overlay:"TyrshqzSwgfwihKjwE_3",loggedOut:"USCN36iKqya8vtyqSrFc",historyButtons:"wgbE5y7apYq2FJMFJ39J",icon:"OkR029QvBP9w1NE3QARd",button:"OdrPFSqGXrkpks3vlCm_",forward:"eT0XuDy1tU1TOwGZyIwn",topbarContentWrapper:"wtnquVBZWBNNGbtaOeZG",topbarContent:"afxsJGFbodKGelOf2HIC",UpgradeButton:"yFo6K6vG4LJrhED3CTLM",indicators:"TMejcdPXVjrwMkwBmfEI",contentArea:"KkxTOy6M3_iAI8UADD4S",back:"r4c4tLr5JCs4Y3Zz5zpR",user:"umiKMm5NVr5UeBJCHS6U",section:"jzhwZKbfx4vrC_MYd_7c",subPage:"MWWPQQjbjRfoGdPD8D68",imageContainer:"rMpf7sfaPDcj387_52fA",topTrackSubPage:"kWCnF32FrVtGHmTy8QeV",header:"uJxNEI2k7x8UCDdMKELt",title:"wDIZ2yYKjfGI68I4cZ98"},b=e=>{var t;const{uri:a}=e,{data:i,loading:l,error:n}=(0,v.J)(f.n5.getFollowers,[a]),o=null==i||null===(t=i.body)||void 0===t?void 0:t.profiles;return l?r.createElement(g.h,{hasError:null!==n,errorMessage:m.ag.get("error.not_found.title.page")}):r.createElement(p.P,{className:d()("contentSpacing",h.subPage),title:m.ag.get("followers"),total:null==o?void 0:o.length,showAll:!0},null==o?void 0:o.map(((e,t)=>r.createElement(c.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]}))))},y=e=>{var t;const{uri:a}=e,{data:i,loading:l,error:n}=(0,v.J)(f.n5.getFollowing,[a]),o=null==i||null===(t=i.body)||void 0===t?void 0:t.profiles;return l?r.createElement(g.h,{hasError:null!==n,errorMessage:m.ag.get("error.not_found.title.page")}):r.createElement(p.P,{className:d()("contentSpacing",h.subPage),title:m.ag.get("following"),total:null==o?void 0:o.length,showAll:!0},null==o?void 0:o.map(((e,t)=>r.createElement(c.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]}))))};var E=a(46458),k=a(95661),I=a(89477),P=a(46309),O=a(43480),w=a(70369),N=a(37338),_=a(42273),x=a(98778),S=a(59482),R=a(72907),D=a(28760),C=a(10149),T=a(6060),A=a(99450),U=a(85105),j=a(50119),M=a(95184),L=a(45133),H=a(25678),W=a(33732);const J="F8_EX1AeKxXNSeh1qiHq",F="valcBm4lLe9qFBcg0sFY",B="tAIzXn8C9KriGwGuBfWg",G="PsrXxenHUFXYM1ub1xWw",K="U_VWfeeLWnDPhUTxCmrQ",z=function({onClickEdit:e,onClickRemove:t,name:a,images:i}){const[l,n]=(0,W.RH)(i),o=(0,H.VO)(l,n)===H.KO.loaded;return r.createElement("div",{className:J},r.createElement(_.Oe,{loading:"eager",name:a,images:i,placeholderType:"user",shape:_.Kc.CIRCLE}),r.createElement("div",{className:d()(F,{[G]:o})},r.createElement("button",{className:B,"aria-haspopup":"true",onClick:e,type:"button"},r.createElement(D.Dy,{variant:"ballad"},m.ag.get("user.edit-details.choose-photo"))),r.createElement("div",{className:d()(K,"icon")},r.createElement(L.y,{iconSize:48,"aria-hidden":!0})),r.createElement("button",{className:B,onClick:t,type:"button"},r.createElement(D.Dy,{variant:"ballad"},m.ag.get("user.edit-details.remove-photo")))))};var Q=a(26529),Y=a(16516),Z=a(15429),X=a(59713),V=a.n(X),q=a(62100);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){V()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const te={paths:""},ae={encode(e,t=q.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ee({},te);for(i.paths=[];a.pos<r;){const e=a.uint32();if(e>>>3==1)i.paths.push(a.string());else a.skipType(7&e)}return i},fromJSON(e){const t=ee({},te);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t=ee({},te);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};var re=a(43720),ie=a(48764).Buffer;function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){V()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const oe={value:0},se={value:!1},ue={value:""};const de={encode:(e,t=q.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},oe);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.int32();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},oe);return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t=ne({},oe);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},me={encode:(e,t=q.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},se);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.bool();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},se);return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t=ne({},se);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ce={encode:(e,t=q.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},ue);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.string();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},ue);return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t=ne({},ue);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};q.util.Long!==re&&(q.util.Long=re,(0,q.configure)());const ge=globalThis;ge.atob,ge.btoa;function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(a),!0).forEach((function(t){V()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const fe={maxWidth:0,maxHeight:0,url:""},he={},be={},ye={encode:(e,t=q.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ve({},fe);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.maxWidth=a.int32();break;case 2:i.maxHeight=a.int32();break;case 3:i.url=a.string();break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=ve({},fe);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t=ve({},fe);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},Ee={encode(e,t=q.Writer.create()){void 0!==e.username&&void 0!==e.username&&ce.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ce.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)ye.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&me.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&me.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&me.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&me.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&me.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&me.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&me.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&de.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ve({},he);for(i.images=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.username=ce.decode(a,a.uint32()).value;break;case 2:i.name=ce.decode(a,a.uint32()).value;break;case 3:i.images.push(ye.decode(a,a.uint32()));break;case 4:i.verified=me.decode(a,a.uint32()).value;break;case 5:i.editProfileDisabled=me.decode(a,a.uint32()).value;break;case 6:i.reportAbuseDisabled=me.decode(a,a.uint32()).value;break;case 7:i.abuseReportedName=me.decode(a,a.uint32()).value;break;case 8:i.abuseReportedImage=me.decode(a,a.uint32()).value;break;case 9:i.hasSpotifyName=me.decode(a,a.uint32()).value;break;case 10:i.hasSpotifyImage=me.decode(a,a.uint32()).value;break;case 11:i.color=de.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=ve({},he);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(ye.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t=ve({},he);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(ye.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?ye.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},ke={encode:(e,t=q.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ae.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&Ee.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new q.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ve({},be);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.mask=ae.decode(a,a.uint32());break;case 2:i.userProfile=Ee.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=ve({},be);return void 0!==e.mask&&null!==e.mask?t.mask=ae.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=Ee.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t=ve({},be);return void 0!==e.mask&&null!==e.mask?t.mask=ae.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=Ee.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?ae.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?Ee.toJSON(e.userProfile):void 0),t}},Ie=`${Y.XA}/identity`;async function Pe(e,t,{name:a,imageUploadToken:r}){void 0!==a&&await async function(e,t,a){const r=ke.encode(ke.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(Ie).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,Z.C)(t))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(r.finish()).withoutMarket().send()}(e,t,a),void 0!==r&&(null!==r?await async function(e,t,a){await e.build().withHost(Ie).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,Z.C)(t))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,r):await async function(e,t){await e.build().withHost(Ie).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,Z.C)(t))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}const Oe={type:"error",get message(){return m.ag.get("user.edit-details.error.file-size-exceeded",4)}},we={type:"error",get message(){return m.ag.get("user.edit-details.error.too-small",300,300)}},Ne={type:"error",get message(){return m.ag.get("user.edit-details.error.missing-name")}},_e={type:"error",get message(){return m.ag.get("user.edit-details.error.failed-to-save")}},xe={type:"error",get message(){return m.ag.get("user.edit-details.error.file-upload-failed")}};function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(a),!0).forEach((function(t){V()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function De(e){return{type:"setLoading",loading:e}}function Ce(e){return{type:"setMessage",message:e}}function Te(e,t){switch(t.type){case"setName":return Re(Re({},e),{},{name:t.name});case"setMessage":return Re(Re({},e),{},{message:t.message,loading:!1});case"setLoading":return Re(Re({},e),{},{loading:t.loading,message:null});case"setImageData":return Re(Re({},e),{},{imageData:t.data,removeImage:!1});case"setImageToken":return Re(Re({},e),{},{imageToken:t.token,removeImage:!1});case"removeImage":return Re(Re({},e),{},{imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0});default:return e}}const Ae={container:"XwNfIrI6_hCa_9_T2cQB",content:"so0bdX3oZH6YW5_nGxIR",header:"aM3plU4zzDqjWlvUHGYb",closeBtn:"zHeo4VUxytwm6Ptr0QyA",image:"vAeyAmeLkDEDKdL9Hou0",imageLoadingContainer:"dnmzO6yYKkxUV8jl7O1Z",textElement:"oN9QVvJKEtdTH3HGfCu1",name:"uj7hczcCH1dZpse8Kfmi",textElementLabel:"wvLAEV5wF5C5ej6rvimT",labelText:"gAQfzAUp1FuSXODeZJfP",nameInput:"dMhJaxli87_22jb_3d9x",save:"MDb7QhAtHeyM4gKj8j8t",disclaimer:"zGbjZMZ1DTx4futEbN9l"},Ue=r.memo((({uri:e,name:t,image:a,onClose:i,shouldOpenImagePicker:l})=>{const[n,o]=(0,j.Hs)(),[s,u]=function({name:e,image:t}){return(0,r.useReducer)(Te,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),c=(0,r.useMemo)((()=>{const e=s.imageData||s.image;return e?[{url:e,width:300,height:300}]:[]}),[s.image,s.imageData]);(0,r.useEffect)((()=>{l&&o()}),[o,l]);const g=(0,r.useCallback)((e=>{e===j.Hy.FILE_TOO_BIG?u(Ce(Oe)):e===j.Hy.IMAGE_TOO_SMALL&&u(Ce(we))}),[u]),p=(0,r.useCallback)((()=>{u({type:"removeImage"})}),[u]),v=(0,r.useCallback)((async t=>{t.preventDefault();if(0!==s.name.trim().length){u(De(!0));try{const t=s.removeImage?null:s.imageToken;await async function(e,{name:t,imageUploadToken:a}){await Pe(Q.b.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:s.name,imageUploadToken:t}),i({name:s.name,image:s.imageData||s.image})}catch(e){u(Ce(_e))}}else u(Ce(Ne))}),[u,i,s.image,s.imageData,s.imageToken,s.name,s.removeImage,e]);return r.createElement(U.Z,{isOpen:!0,contentLabel:m.ag.get("user.edit-details.title"),onRequestClose:()=>i()},r.createElement("div",{className:Ae.container},r.createElement("div",{className:Ae.header},r.createElement(D.Dy,{as:"h1",className:Ae.heading,variant:"canon"},m.ag.get("user.edit-details.title")),r.createElement("button",{className:Ae.closeBtn,onClick:()=>i(),"aria-label":m.ag.get("close")},r.createElement(C.k,{iconSize:16}))),s.message&&r.createElement(M.X,{isErrorMessage:"error"===s.message.type,message:s.message.message}),r.createElement("form",{className:Ae.content,onSubmit:v},r.createElement(j.uL,{isOpen:n,minImageWidth:300,minImageHeight:300,maxFileSizeMB:4,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(u(Ce(null)),u({type:"setImageData",data:a}),t)try{u(De(!0));const e=await async function(e){const t=await Q.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!t.body)throw new Error("No upload token recieved");return t.body.uploadToken}(t);u({type:"setImageToken",token:e}),u(De(!1))}catch{u(Ce(xe))}},onError:g}),r.createElement("div",{className:Ae.image},r.createElement(z,{name:t,images:c,onClickEdit:o,onClickRemove:p}),s.loading&&r.createElement("div",{className:Ae.imageLoadingContainer},r.createElement(T.T,null))),r.createElement("div",{className:Ae.name},r.createElement("label",{htmlFor:"user-edit-name",className:Ae.textElementLabel},r.createElement(D.Dy,{variant:"finaleBold",className:Ae.labelText},m.ag.get("user.edit-details.name-label"))),r.createElement("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:d()(Ae.textElement,Ae.nameInput),onChange:e=>{u(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:m.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:s.name})),r.createElement("div",{className:Ae.save},r.createElement(A.D,{colorSet:"invertedLight",onClick:v,disabled:s.loading},m.ag.get("save"))),r.createElement(D.Dy,{as:"p",variant:"finaleBold",className:Ae.disclaimer},m.ag.get("image-upload.legal-disclaimer")))))}));var je=a(56802),Me=a(4236),Le=a(94321),He=a(29255),We=a(52983),Je=a(30947),Fe=a(20246),Be=a(18261),Ge=a(14535),Ke=a(43620),ze=a(46146),Qe=a(49961),Ye=a(74563),Ze=a(28231),Xe=a(13218),Ve=a(28248),qe=a(95880),$e=a(47991),et=a(42922),tt=a(84242),at=a(42781);const rt=r.memo((({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,uri:i})=>{const l=(0,Z.C)(i),o=n().userToplistURI(l,"tracks").toURI(),s=(0,r.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:u}=(0,tt.n)({uri:o,pages:[{items:e.map((e=>({type:at.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),d=(0,r.useCallback)(((e,t)=>{var a;const i=(0,Qe.X)(null==e||null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return r.createElement(qe.SS,{key:t+e.uri,index:t,uri:(0,$e.$)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==i?void 0:i.url)||"",contextUri:o,usePlayContextItem:u})}),[o,u]),c=(0,r.useMemo)((()=>[Ve.QD.INDEX,Ve.QD.TITLE,Ve.QD.ALBUM,Ve.QD.DURATION]),[]),g=(0,r.useCallback)((e=>e.uri),[]);return r.createElement(et.ZP,{value:"user-top-tracks-tracklist"},r.createElement(Ve.Pv,{ariaLabel:m.ag.get("top_tracks_this_month"),renderRow:d,nrTracks:s.length,tracks:s,resolveUri:g,hasHeaderRow:t,columns:c}))}),((e,t)=>e.tracks===t.tracks)),it=r.memo((({tracks:e,title:t,tagline:a,seeAllUri:i,className:l,uri:n})=>{if(!e||0===e.length)return null;const o=e.length>4;return r.createElement("section",{className:l},r.createElement(Xe.r,{title:t,tagline:a,seeAllUri:i,hasMoreElements:o}),r.createElement(rt,{tracks:e,uri:n,nrTracksVisible:4}))}),((e,t)=>e.tracks===t.tracks));function lt(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,shouldOpenImagePicker:!1};default:return e}}const nt=({uri:e})=>{var t,a;const i=(0,E.v9)(He.Gf),l=(0,E.v9)(He.A$),o=(0,E.I0)(),[s,u]=(0,ze.H)(e),b=(0,r.useMemo)((()=>(0,Qe.X)(l)),[l]),[{isModalOpen:y,shouldOpenImagePicker:D},C]=function(){const[e,t]=(0,r.useReducer)(lt,{isModalOpen:!1,shouldOpenImagePicker:!1});return[e,t]}(),T=(0,je.o)(),A=!(0,Me.k)(),{data:U,loading:j}=(0,v.J)(f.n5.getProfile,[{uri:e,playlists:10,artists:10}]),M=null==U?void 0:U.body,L=null==M?void 0:M.public_playlists,H=null==M?void 0:M.is_verified,W=(null==M?void 0:M.is_current_user)||!1,J=null==M?void 0:M.recently_played_artists,F=W?(null==b?void 0:b.url)||"":(null==M?void 0:M.image_url)||"",B=(0,Z.C)(e),G=(0,E.v9)(Le.C7),K=(W?i:null==M?void 0:M.name)||"",z=(0,Ke.Z)((null==M?void 0:M.image_url)||null),{data:Q,loading:Y}=(0,v.J)(f.n5.getFollowing,[e]),X=null==Q||null===(t=Q.body)||void 0===t?void 0:t.profiles,{data:V,loading:q}=(0,v.J)(f.n5.getFollowers,[e]),$=null==V||null===(a=V.body)||void 0===a?void 0:a.profiles,ee=(0,r.useMemo)((()=>(e=>e?f.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(W)),[W]),te=(0,r.useMemo)((()=>(e=>e?f.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(W&&!G)),[W,G]),{data:ae,loading:re}=(0,v.J)(ee,[]),{data:ie,loading:le}=(0,v.J)(te,[]),ne=null==ae?void 0:ae.body,oe=null==ie?void 0:ie.body,se=(0,r.useCallback)((()=>{T({targetUri:e,intent:s?"unfollow":"follow",type:"click"}),u(!s)}),[s,T,u,e]),ue=(0,r.useCallback)((e=>{C({type:"CLOSE_MODAL"}),e&&(o((0,We.dL)(e.name)),o((0,We.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[o,C]),de=(0,r.useCallback)((()=>C({type:"OPEN_MODAL"})),[C]),me=(0,r.useCallback)((()=>{C({type:"OPEN_MODAL_WITH_IMAGEPICKER"})}),[C]),ce=(0,r.useMemo)((()=>[{url:F}]),[F]);if(!M||j||Y||q||le||re)return r.createElement(g.h,{hasError:!1,errorMessage:m.ag.get("error.not_found.title.page")});const ge={total:M.followers_count},pe=d()("contentSpacing",h.section,h.shelf);return r.createElement("div",{className:h.user},r.createElement(w.$,null,K),r.createElement(_.gF,{backgroundColor:z},r.createElement(S.W,null,r.createElement(R.i,{text:K})),r.createElement(Be._,{menu:r.createElement(O.I,{uri:M.uri})},r.createElement("div",{className:h.imageContainer},r.createElement(N.T,{canEdit:W,name:K,images:ce,onClick:me,placeholderType:"user",shape:_.Kc.CIRCLE}))),r.createElement(_.sP,null,r.createElement(_.dy,{small:!0,uppercase:!0},H?r.createElement(Ze.S,{text:m.ag.get("card.tag.profile")}):m.ag.get("card.tag.profile")),r.createElement(Be._,{menu:r.createElement(O.I,{uri:M.uri})},r.createElement(_.xd,{canEdit:W,editTitle:m.ag.get("playlist.edit-details.title"),onClick:de},K)),r.createElement(_.QS,{totalFollowers:ge.total,totalFollowing:null==X?void 0:X.length,publicPlaylists:M.total_public_playlists_count,userUri:e}))),r.createElement(Je.o,{backgroundColor:z},r.createElement(Je.F,null,!W&&r.createElement(x.r,null,r.createElement(Ge.e,{isFollowing:Boolean(s),onClick:se,disabled:A})),r.createElement(Fe.y,{menu:r.createElement(O.I,{uri:M.uri,onEditProfileCallback:de})},r.createElement(k.z,{label:m.ag.get("more.label.context",K)})))),r.createElement(p.P,{className:pe,total:(null==ne?void 0:ne.total)||0,title:m.ag.get("top_artists_this_month"),tagline:m.ag.get("only_visible_to_you"),seeAllUri:n().profileURI(B,["top","artists"]).toURI()},null==ne?void 0:ne.items.map(((e,t)=>r.createElement(I.I,{index:t,key:e.uri,uri:e.uri,name:e.name,images:e.images})))),r.createElement(it,{className:pe,title:m.ag.get("top_tracks_this_month"),tagline:m.ag.get("only_visible_to_you"),seeAllUri:n().profileURI(B,["top","tracks"]).toURI(),uri:e,tracks:null==oe?void 0:oe.items}),r.createElement(p.P,{className:pe,total:M.total_public_playlists_count,title:m.ag.get("public_playlists"),seeAllUri:n().profileURI(B,["playlists"]).toURI()},null==L?void 0:L.map(((e,t)=>r.createElement(P.Z,{index:t,key:e.uri,uri:e.uri,name:e.name,images:[{url:(0,Ye.p)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?m.ag.get("user.followers",e.followers_count):""})))),null!=J&&J.length?r.createElement(p.P,{className:pe,total:null==J?void 0:J.length,title:m.ag.get("recently_played_artists"),seeAllUri:n().profileURI(B,["recently-played-artists"]).toURI()},null==J?void 0:J.map(((e,t)=>r.createElement(I.I,{index:t,key:e.uri,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,null!=$&&$.length?r.createElement(p.P,{className:pe,title:m.ag.get("followers"),total:null==$?void 0:$.length,seeAllUri:n().profileURI(B,["followers"]).toURI()},null==$?void 0:$.map(((e,t)=>r.createElement(c.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,null!=X&&X.length?r.createElement(p.P,{className:pe,title:m.ag.get("following"),total:null==X?void 0:X.length,seeAllUri:n().profileURI(B,["following"]).toURI()},null==X?void 0:X.map(((e,t)=>r.createElement(c.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,W&&y?r.createElement(Ue,{uri:e,name:K,image:F,onClose:ue,shouldOpenImagePicker:D}):null)},ot=e=>{const{uri:t}=e,{data:a,loading:i,error:l}=(0,v.J)(f.n5.getPlaylists,[{uri:t}]),n=null==a?void 0:a.body,{public_playlists:o,total_public_playlists_count:s=0}=n||{};return i?r.createElement(g.h,{hasError:null!==l,errorMessage:m.ag.get("error.not_found.title.page")}):r.createElement(p.P,{className:d()("contentSpacing",h.subPage),total:s,title:m.ag.get("public_playlists"),showAll:!0},null==o?void 0:o.map(((e,t)=>r.createElement(P.Z,{index:t,key:e.uri,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?m.ag.get("user.followers",e.followers_count):"",images:[{url:(0,Ye.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]}))))},st=e=>{var t;const{uri:a}=e,{data:i,loading:l,error:n}=(0,v.J)(f.n5.getRecentlyPlayedArtists,[{uri:a,limit:50}]),o=null==i||null===(t=i.body)||void 0===t?void 0:t.artists;return l?r.createElement(g.h,{hasError:null!==n,errorMessage:m.ag.get("error.not_found.title.page")}):r.createElement(p.P,{className:d()("contentSpacing",h.subPage),total:null==o?void 0:o.length,title:m.ag.get("recently_played_artists"),showAll:!0},null==o?void 0:o.map(((e,t)=>r.createElement(I.I,{index:t,key:e.uri,name:e.name,uri:e.uri,images:[{url:e.image_url}]}))))},ut=()=>{const{data:e,loading:t,error:a}=(0,v.J)(f.n5.getUserTopArtists),i=null==e?void 0:e.body;return t?r.createElement(g.h,{hasError:null!==a,errorMessage:m.ag.get("error.not_found.title.page")}):i?r.createElement(p.P,{className:d()("contentSpacing",h.subPage),total:i.items.length,title:m.ag.get("top_artists_this_month"),tagline:m.ag.get("only_visible_to_you"),showAll:!0},i.items.map(((e,t)=>r.createElement(I.I,{key:e.uri,index:t,uri:e.uri,name:e.name,images:e.images})))):null},dt=({uri:e})=>{const{data:t,loading:a,error:i}=(0,v.J)(f.n5.getProfile,[{uri:e}]),l=null==t?void 0:t.body,n=(null==l?void 0:l.is_current_user)||!1;return l&&!a&&n?r.createElement(ut,null):r.createElement(g.h,{hasError:null!==i,errorMessage:m.ag.get("error.not_found.title.page")})},mt=({uri:e})=>{const{data:t,loading:a,error:i}=(0,v.J)(f.n5.getUserTopTracks,[{offset:0,limit:50}]),l=null==t?void 0:t.body;return a?r.createElement(g.h,{hasError:null!==i,errorMessage:m.ag.get("error.not_found.title.page")}):l?r.createElement("div",{className:d()("contentSpacing",h.subPage,h.topTrackSubPage)},r.createElement("div",{className:h.header},r.createElement(D.Dy,{as:"h1",variant:"canon",className:h.title},m.ag.get("top_tracks_this_month")),r.createElement(D.Dy,{as:"p",variant:"mesto"},m.ag.get("only_visible_to_you"))),r.createElement(rt,{tracks:l.items,uri:e,hasHeaderRow:!0})):null},ct=({uri:e})=>{const{data:t,loading:a,error:i}=(0,v.J)(f.n5.getProfile,[{uri:e}]),l=null==t?void 0:t.body,n=(null==l?void 0:l.is_current_user)||!1;return l&&!a&&n?r.createElement(mt,{uri:e}):r.createElement(g.h,{hasError:null!==i,errorMessage:m.ag.get("error.not_found.title.page")})},gt=r.memo((()=>{const{userId:e}=(0,i.UO)(),t=decodeURIComponent(e),a=n().profileURI(t).toURI();return r.createElement("section",null,r.createElement(s.N,{exact:!0,path:"/user/:userId/playlists",pageId:o.W.PROFILE_PLAYLISTS},r.createElement(ot,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId/top/tracks",pageId:o.W.PROFILE_TOP_TRACKS},r.createElement(ct,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId/top/artists",pageId:o.W.PROFILE_TOP_ARTISTS},r.createElement(dt,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId/recently-played-artists",pageId:o.W.PROFILE_RECENTLY_PLAYED_ARTISTS},r.createElement(st,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId/following",pageId:o.W.PROFILE_FOLLOWING},r.createElement(y,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId/followers",pageId:o.W.PROFILE_FOLLOWERS},r.createElement(b,{uri:a})),r.createElement(s.N,{exact:!0,path:"/user/:userId",pageId:o.W.PROFILE},r.createElement(nt,{uri:a})))}))},47991:(e,t,a)=>{a.d(t,{$:()=>r});const r=e=>{var t;return(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri}},14535:(e,t,a)=>{a.d(t,{e:()=>d});var r=a(67294),i=a(20657),l=a(94184),n=a.n(l);const o="aAr9nYtPsG7P2LRzciXc",s="fBTYgGyvIbHizHIj7AAX",u="oUzIIkcyBdRs7hrwbwIo",d=r.memo((({isFollowing:e,onClick:t,disabled:a=!1,buttonText:l})=>{const d=e?i.ag.get("following"):i.ag.get("follow");return r.createElement("button",{type:"button",className:n()(o,{[s]:e,[u]:a}),onClick:t},l||d)}))}}]);
//# sourceMappingURL=xpui-routes-profile.js.map