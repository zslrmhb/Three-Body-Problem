import{s as K,e as I,c as A,b as T,f as g,p as b,g as z,n as G,V as x,t as le,l as U,d as ne,o as F,a2 as P,h as C,j as Ge,u as ie,k as Z,w as Ve,A as Xe,O as J,X as re,N as oe,S as ae,T as ce,U as fe,E as qe,x as N,a0 as me,i as ge,r as Ye,a3 as Ze,a4 as Je,a5 as Qe,y as se,$ as xe,a6 as $e,a7 as et,Y as tt,Z as lt,a8 as nt}from"../chunks/scheduler.KDv6XAsH.js";import{S as L,i as M,c as W,a as H,m as V,t as p,b as k,d as q,g as ue,e as he,f as it}from"../chunks/index.Ix5_6Suw.js";import{e as O}from"../chunks/each.-oqiv04n.js";import{r as rt,w as Q}from"../chunks/index.8218-dAn.js";import{d as st,I as Pe,g as Oe,a as Ke}from"../chunks/Icon.AsX2Xhqw.js";function ze(i,e,l){const t=i.slice();t[3]=e[l].title,t[4]=e[l].slides,t[7]=l;const n=t[2][t[0]].section===t[7];return t[5]=n,t}function Ee(i,e,l){const t=i.slice();t[8]=e[l];const n=t[8].i===t[0];return t[9]=n,t}function ot(i){let e;return{c(){e=I("div"),this.h()},l(l){e=A(l,"DIV",{class:!0}),T(e).forEach(g),this.h()},h(){b(e,"class","block svelte-s3rw5i")},m(l,t){z(l,e,t)},p:G,d(l){l&&g(e)}}}function at(i){let e,l=O(i[4]),t=[];for(let n=0;n<l.length;n+=1)t[n]=Ie(Ee(i,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ie()},l(n){for(let s=0;s<t.length;s+=1)t[s].l(n);e=ie()},m(n,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(n,s);z(n,e,s)},p(n,s){if(s&3){l=O(n[4]);let r;for(r=0;r<l.length;r+=1){const c=Ee(n,l,r);t[r]?t[r].p(c,s):(t[r]=Ie(c),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&g(e),x(t,n)}}}function Ie(i){let e;return{c(){e=I("div"),this.h()},l(l){e=A(l,"DIV",{class:!0}),T(e).forEach(g),this.h()},h(){b(e,"class","block svelte-s3rw5i"),P(e,"active",i[9])},m(l,t){z(l,e,t)},p(l,t){t&3&&P(e,"active",l[9])},d(l){l&&g(e)}}}function Ae(i){let e,l,t=i[7]+1+"",n,s,r,c=i[3]+"",a,f,o;function h(d,v){return d[5]?at:ot}let _=h(i),u=_(i);return{c(){e=I("div"),l=I("span"),n=le(t),s=I("span"),r=le("— "),a=le(c),f=U(),u.c(),o=U(),this.h()},l(d){e=A(d,"DIV",{class:!0});var v=T(e);l=A(v,"SPAN",{class:!0});var S=T(l);n=ne(S,t),s=A(S,"SPAN",{class:!0});var E=T(s);r=ne(E,"— "),a=ne(E,c),E.forEach(g),S.forEach(g),f=F(v),u.l(v),o=F(v),v.forEach(g),this.h()},h(){b(s,"class","title svelte-s3rw5i"),b(l,"class","text svelte-s3rw5i"),b(e,"class","chapter svelte-s3rw5i"),P(e,"active",i[5])},m(d,v){z(d,e,v),C(e,l),C(l,n),C(l,s),C(s,r),C(s,a),C(e,f),u.m(e,null),C(e,o)},p(d,v){v&2&&c!==(c=d[3]+"")&&Ge(a,c),_===(_=h(d))&&u?u.p(d,v):(u.d(1),u=_(d),u&&(u.c(),u.m(e,o))),v&5&&P(e,"active",d[5])},d(d){d&&g(e),u.d()}}}function ct(i){let e,l=O(i[1]),t=[];for(let n=0;n<l.length;n+=1)t[n]=Ae(ze(i,l,n));return{c(){e=I("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=A(n,"DIV",{class:!0});var s=T(e);for(let r=0;r<t.length;r+=1)t[r].l(s);s.forEach(g),this.h()},h(){b(e,"class","chapters svelte-s3rw5i")},m(n,s){z(n,e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,[s]){if(s&7){l=O(n[1]);let r;for(r=0;r<l.length;r+=1){const c=ze(n,l,r);t[r]?t[r].p(c,s):(t[r]=Ae(c),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},i:G,o:G,d(n){n&&g(e),x(t,n)}}}function ft(i,e,l){let{activeSlide:t}=e,{sections:n}=e,{allSlides:s}=e;return i.$$set=r=>{"activeSlide"in r&&l(0,t=r.activeSlide),"sections"in r&&l(1,n=r.sections),"allSlides"in r&&l(2,s=r.allSlides)},[t,n,s]}class ut extends L{constructor(e){super(),M(this,e,ft,ct,K,{activeSlide:0,sections:1,allSlides:2})}}const ht=()=>window?.visualViewport?.width||document.documentElement.clientWidth,dt=()=>window?.visualViewport?.height||document.documentElement.clientHeight,_t=rt({width:0,height:0},i=>{const e=()=>i({width:ht(),height:dt()});return e(),window.addEventListener("resize",st(e,250)),()=>{window.removeEventListener("resize",e)}});function mt(i){let e,l,t;return{c(){e=I("figure"),l=le("visual goes here"),this.h()},l(n){e=A(n,"FIGURE",{style:!0,class:!0});var s=T(e);l=ne(s,"visual goes here"),s.forEach(g),this.h()},h(){b(e,"style",t=`--offset: ${i[0]}px; --buffer: 2rem`),b(e,"class","svelte-4vfsg0")},m(n,s){z(n,e,s),C(e,l)},p(n,[s]){s&1&&t!==(t=`--offset: ${n[0]}px; --buffer: 2rem`)&&b(e,"style",t)},i:G,o:G,d(n){n&&g(e)}}}function gt(i,e,l){let t,n,s;Z(i,_t,o=>l(3,s=o));let{activeSlide:r}=e,c,a=!1;const f=async()=>{if(a){await Xe();const o=document.getElementById(`slide-${r}`);l(0,c=o.clientHeight+n)}};return Ve(()=>{a=!0,f()}),i.$$set=o=>{"activeSlide"in o&&l(1,r=o.activeSlide)},i.$$.update=()=>{i.$$.dirty&8&&l(2,t=s.width<600),i.$$.dirty&4&&(n=t?10:100),i.$$.dirty&10&&(s.width,f())},[c,r,t,s]}class bt extends L{constructor(e){super(),M(this,e,gt,mt,K,{activeSlide:1})}}function wt(i){let e;const l=i[2].default,t=oe(l,i,i[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&ae(t,l,n,n[3],e?fe(l,n[3],s,null):ce(n[3]),null)},i(n){e||(p(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function pt(i){let e,l;const t=[{name:"chevron-left"},i[1],{iconNode:i[0]}];let n={$$slots:{default:[wt]},$$scope:{ctx:i}};for(let s=0;s<t.length;s+=1)n=J(n,t[s]);return e=new Pe({props:n}),{c(){W(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){V(e,s,r),l=!0},p(s,[r]){const c=r&3?Oe(t,[t[0],r&2&&Ke(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(c.$$scope={dirty:r,ctx:s}),e.$set(c)},i(s){l||(p(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){q(e,s)}}}function vt(i,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"m15 18-6-6 6-6"}]];return i.$$set=r=>{l(1,e=J(J({},e),re(r))),"$$scope"in r&&l(3,n=r.$$scope)},e=re(e),[s,e,t,n]}class kt extends L{constructor(e){super(),M(this,e,vt,pt,K,{})}}const St=kt;function yt(i){let e;const l=i[2].default,t=oe(l,i,i[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&ae(t,l,n,n[3],e?fe(l,n[3],s,null):ce(n[3]),null)},i(n){e||(p(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function zt(i){let e,l;const t=[{name:"chevron-right"},i[1],{iconNode:i[0]}];let n={$$slots:{default:[yt]},$$scope:{ctx:i}};for(let s=0;s<t.length;s+=1)n=J(n,t[s]);return e=new Pe({props:n}),{c(){W(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){V(e,s,r),l=!0},p(s,[r]){const c=r&3?Oe(t,[t[0],r&2&&Ke(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(c.$$scope={dirty:r,ctx:s}),e.$set(c)},i(s){l||(p(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){q(e,s)}}}function Et(i,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"m9 18 6-6-6-6"}]];return i.$$set=r=>{l(1,e=J(J({},e),re(r))),"$$scope"in r&&l(3,n=r.$$scope)},e=re(e),[s,e,t,n]}class It extends L{constructor(e){super(),M(this,e,Et,zt,K,{})}}const At=It;function Te(i,e,l){const t=i.slice();return t[18]=e[l],t}function je(i){let e,l,t,n;const s=[jt,Tt],r=[];function c(a,f){return a[18]==="left"?0:a[18]==="right"?1:-1}return~(l=c(i))&&(t=r[l]=s[l](i)),{c(){e=I("span"),t&&t.c(),this.h()},l(a){e=A(a,"SPAN",{style:!0,class:!0});var f=T(e);t&&t.l(f),f.forEach(g),this.h()},h(){N(e,"font-size",i[4]),b(e,"class","svelte-jjzds")},m(a,f){z(a,e,f),~l&&r[l].m(e,null),n=!0},p(a,f){let o=l;l=c(a),l===o?~l&&r[l].p(a,f):(t&&(ue(),k(r[o],1,1,()=>{r[o]=null}),he()),~l?(t=r[l],t?t.p(a,f):(t=r[l]=s[l](a),t.c()),p(t,1),t.m(e,null)):t=null),(!n||f&16)&&N(e,"font-size",a[4])},i(a){n||(p(t),n=!0)},o(a){k(t),n=!1},d(a){a&&g(e),~l&&r[l].d()}}}function Tt(i){let e,l;return e=new At({props:{color:i[5],strokeWidth:i[6]}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){V(e,t,n),l=!0},p(t,n){const s={};n&32&&(s.color=t[5]),n&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function jt(i){let e,l;return e=new St({props:{color:i[5],strokeWidth:i[6]}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){V(e,t,n),l=!0},p(t,n){const s={};n&32&&(s.color=t[5]),n&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Ne(i){let e,l=i[9].includes(i[18]),t,n,s,r,c,a,f,o=l&&je(i);return{c(){e=I("button"),o&&o.c(),t=U(),this.h()},l(h){e=A(h,"BUTTON",{style:!0,"aria-label":!0,class:!0});var _=T(e);o&&o.l(_),t=F(_),_.forEach(g),this.h()},h(){N(e,"width",i[12](i[18])),N(e,"height",i[11](i[18])),b(e,"aria-label",n=i[18]),b(e,"class",s=i[18]+" "+i[7]+" svelte-jjzds"),e.disabled=r=i[2].includes(i[18]),P(e,"full",i[1])},m(h,_){z(h,e,_),o&&o.m(e,null),C(e,t),c=!0,a||(f=me(e,"click",function(){ge(i[13]("tap",i[18]))&&i[13]("tap",i[18]).apply(this,arguments)}),a=!0)},p(h,_){i=h,_&520&&(l=i[9].includes(i[18])),l?o?(o.p(i,_),_&520&&p(o,1)):(o=je(i),o.c(),p(o,1),o.m(e,t)):o&&(ue(),k(o,1,1,()=>{o=null}),he()),(!c||_&4104)&&N(e,"width",i[12](i[18])),(!c||_&2056)&&N(e,"height",i[11](i[18])),(!c||_&8&&n!==(n=i[18]))&&b(e,"aria-label",n),(!c||_&136&&s!==(s=i[18]+" "+i[7]+" svelte-jjzds"))&&b(e,"class",s),(!c||_&12&&r!==(r=i[2].includes(i[18])))&&(e.disabled=r),(!c||_&138)&&P(e,"full",i[1])},i(h){c||(p(o),c=!0)},o(h){k(o),c=!1},d(h){h&&g(e),o&&o.d(),a=!1,f()}}}function Nt(i){let e,l,t,n;qe(i[17]);let s=O(i[3]),r=[];for(let a=0;a<s.length;a+=1)r[a]=Ne(Te(i,s,a));const c=a=>k(r[a],1,1,()=>{r[a]=null});return{c(){e=I("section");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=A(a,"SECTION",{style:!0,class:!0});var f=T(e);for(let o=0;o<r.length;o+=1)r[o].l(f);f.forEach(g),this.h()},h(){N(e,"height",i[8]+"px"),b(e,"class","svelte-jjzds"),P(e,"debug",i[0])},m(a,f){z(a,e,f);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);l=!0,t||(n=[me(window,"keydown",function(){ge(i[10])&&i[10].apply(this,arguments)}),me(window,"resize",i[17])],t=!0)},p(a,[f]){if(i=a,f&15102){s=O(i[3]);let o;for(o=0;o<s.length;o+=1){const h=Te(i,s,o);r[o]?(r[o].p(h,f),p(r[o],1)):(r[o]=Ne(h),r[o].c(),p(r[o],1),r[o].m(e,null))}for(ue(),o=s.length;o<r.length;o+=1)c(o);he()}(!l||f&256)&&N(e,"height",i[8]+"px"),(!l||f&1)&&P(e,"debug",i[0])},i(a){if(!l){for(let f=0;f<s.length;f+=1)p(r[f]);l=!0}},o(a){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)k(r[f]);l=!1},d(a){a&&g(e),x(r,a),t=!1,Ye(n)}}}function Dt(i,e,l){let t,n,s,r,{debug:c=!1}=e,{enableKeyboard:a=!1}=e,{full:f=!1}=e,{showArrows:o=!1}=e,{disable:h=[]}=e,{directions:_=["left","right"]}=e,{size:u="64px"}=e,{arrowSize:d="48px"}=e,{arrowStroke:v="#000"}=e,{arrowStrokeWidth:S="2"}=e,{arrowPosition:E="center"}=e;const j=Ze();let D;function y(){l(8,D=window.innerHeight)}return i.$$set=m=>{"debug"in m&&l(0,c=m.debug),"enableKeyboard"in m&&l(14,a=m.enableKeyboard),"full"in m&&l(1,f=m.full),"showArrows"in m&&l(15,o=m.showArrows),"disable"in m&&l(2,h=m.disable),"directions"in m&&l(3,_=m.directions),"size"in m&&l(16,u=m.size),"arrowSize"in m&&l(4,d=m.arrowSize),"arrowStroke"in m&&l(5,v=m.arrowStroke),"arrowStrokeWidth"in m&&l(6,S=m.arrowStrokeWidth),"arrowPosition"in m&&l(7,E=m.arrowPosition)},i.$$.update=()=>{i.$$.dirty&65546&&l(12,t=m=>Array.isArray(u)?u[_.indexOf(m)]:f?"100%":u),i.$$.dirty&65538&&l(11,n=m=>["up","down"].includes(m)?u:f?"100%":u),i.$$.dirty&16392&&l(10,s=m=>{const $=m.key.replace("Arrow","").toLowerCase(),de=_.includes($);a&&de&&(m.preventDefault(),j("tap",$))}),i.$$.dirty&32776&&l(9,r=_.filter(m=>typeof o=="boolean"?o:o.includes(m)))},[c,f,h,_,d,v,S,E,D,r,s,n,t,j,a,o,u,y]}class Ct extends L{constructor(e){super(),M(this,e,Dt,Nt,K,{debug:0,enableKeyboard:14,full:1,showArrows:15,disable:2,directions:3,size:16,arrowSize:4,arrowStroke:5,arrowStrokeWidth:6,arrowPosition:7})}}function Wt(i){let e,l,t,n,s;const r=i[26].default,c=oe(r,i,i[25],null);return{c(){e=I("section"),l=I("div"),c&&c.c(),this.h()},l(a){e=A(a,"SECTION",{"aria-label":!0,class:!0});var f=T(e);l=A(f,"DIV",{class:!0,style:!0});var o=T(l);c&&c.l(o),o.forEach(g),f.forEach(g),this.h()},h(){b(l,"class","slides svelte-1ceqw5z"),b(l,"style",i[5]),b(e,"aria-label","carousel"),b(e,"class",t="slider "+i[0]+" svelte-1ceqw5z"),qe(()=>i[29].call(e))},m(a,f){z(a,e,f),C(e,l),c&&c.m(l,null),i[27](l),i[28](e),n=Je(e,i[29].bind(e)),s=!0},p(a,f){c&&c.p&&(!s||f[0]&33554432)&&ae(c,r,a,a[25],s?fe(r,a[25],f,null):ce(a[25]),null),(!s||f[0]&32)&&b(l,"style",a[5]),(!s||f[0]&1&&t!==(t="slider "+a[0]+" svelte-1ceqw5z"))&&b(e,"class",t)},i(a){s||(p(c,a),s=!0)},o(a){k(c,a),s=!1},d(a){a&&g(e),c&&c.d(a),i[27](null),i[28](null),n()}}}function Ht(i,e,l){let t,n,s,r,c,a,f,o,h,_,u,{$$slots:d={},$$scope:v}=e,{direction:S="horizontal"}=e,{duration:E="500ms"}=e,{timing:j="ease"}=e,{count:D=0}=e,{current:y=0}=e;const m=()=>_e(1),$=()=>_e(-1),de=w=>_e(w,!0);let X=0,Y=0,B,R,be=!1,ee,te,we,pe=Q(),ve=Q(),ke=Q(),Se=Q(),ye=Q();const _e=(w,Ue)=>{if(!be)return!1;const Fe=Ue?w:Y+w;l(14,Y=Math.max(0,Math.min(X-1,Fe))),l(6,y=Y)},Le=w=>{be=w[0].isIntersecting};Ve(()=>{l(13,X=te.children.length),l(7,D=X),ye.set(D),we=new IntersectionObserver(Le,{root:null,rootMargin:"-1px"}),we.observe(ee),l(2,R),l(1,B)});function Me(w){se[w?"unshift":"push"](()=>{te=w,l(4,te)})}function Be(w){se[w?"unshift":"push"](()=>{ee=w,l(3,ee)})}function Re(){B=this.clientWidth,R=this.clientHeight,l(1,B),l(2,R)}return i.$$set=w=>{"direction"in w&&l(0,S=w.direction),"duration"in w&&l(8,E=w.duration),"timing"in w&&l(9,j=w.timing),"count"in w&&l(7,D=w.count),"current"in w&&l(6,y=w.current),"$$scope"in w&&l(25,v=w.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&8195&&l(24,t=S==="horizontal"?`${X*B}px`:"100%"),i.$$.dirty[0]&8197&&l(23,n=S==="vertical"?`${X*R}px`:"100%"),i.$$.dirty[0]&16387&&l(22,s=S==="horizontal"?`${Y*B*-1}px`:0),i.$$.dirty[0]&16389&&l(21,r=S==="vertical"?`${Y*R*-1}px`:0),i.$$.dirty[0]&16777216&&l(20,c=`width: ${t};`),i.$$.dirty[0]&8388608&&l(19,a=`height: ${n};`),i.$$.dirty[0]&6291456&&l(18,f=`transform: translate3d(${s}, ${r}, 0);`),i.$$.dirty[0]&256&&l(17,o=`transition-duration: ${E};`),i.$$.dirty[0]&512&&l(16,h=`transition-timing-function: ${j};`),i.$$.dirty[0]&2031616&&l(5,_=`${c} ${a} ${f} ${o} ${h}`),i.$$.dirty[0]&1&&pe.set(S),i.$$.dirty[0]&2&&ve.set(B),i.$$.dirty[0]&4&&ke.set(R),i.$$.dirty[0]&64&&Se.set(y),i.$$.dirty[0]&32768&&Qe("Slider",u)},l(15,u={dir:pe,cur:Se,w:ve,h:ke,count:ye}),[S,B,R,ee,te,_,y,D,E,j,m,$,de,X,Y,u,h,o,f,a,c,r,s,n,t,v,d,Me,Be,Re]}class Vt extends L{constructor(e){super(),M(this,e,Ht,Wt,K,{direction:0,duration:8,timing:9,count:7,current:6,next:10,prev:11,jump:12},null,[-1,-1])}get next(){return this.$$.ctx[10]}get prev(){return this.$$.ctx[11]}get jump(){return this.$$.ctx[12]}}function qt(i,e){const l=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],t=r=>{s.forEach(c=>{r&&r.disable?c.setAttribute("tabindex",-1):c.removeAttribute("tabindex")})},n=l.join(", "),s=[...i.querySelectorAll(n)];return t(e),{update(r){t(r)},destroy(){s.forEach(r=>r.removeAttribute("tabindex"))}}}function Pt(i){let e,l,t,n,s,r,c;const a=i[16].default,f=oe(a,i,i[15],null);return{c(){e=I("div"),f&&f.c(),this.h()},l(o){e=A(o,"DIV",{id:!0,class:!0,role:!0,"aria-label":!0,"aria-current":!0});var h=T(e);f&&f.l(h),h.forEach(g),this.h()},h(){b(e,"id",l="slide-"+i[0]),b(e,"class","slide svelte-1h814z3"),b(e,"role","group"),b(e,"aria-label",t="slide "+(i[0]+1)+" of "+i[5]),b(e,"aria-current",i[1]),P(e,"visible",i[1]),N(e,"width",i[4]),N(e,"height",i[3])},m(o,h){z(o,e,h),f&&f.m(e,null),s=!0,r||(c=xe(n=qt.call(null,e,{disable:i[2]})),r=!0)},p(o,[h]){f&&f.p&&(!s||h&32768)&&ae(f,a,o,o[15],s?fe(a,o[15],h,null):ce(o[15]),null),(!s||h&1&&l!==(l="slide-"+o[0]))&&b(e,"id",l),(!s||h&33&&t!==(t="slide "+(o[0]+1)+" of "+o[5]))&&b(e,"aria-label",t),(!s||h&2)&&b(e,"aria-current",o[1]),n&&ge(n.update)&&h&4&&n.update.call(null,{disable:o[2]}),(!s||h&2)&&P(e,"visible",o[1]),h&16&&N(e,"width",o[4]),h&8&&N(e,"height",o[3])},i(o){s||(p(f,o),s=!0)},o(o){k(f,o),s=!1},d(o){o&&g(e),f&&f.d(o),r=!1,c()}}}function Ot(i,e,l){let t,n,s,r,c,a,f,o,h,{$$slots:_={},$$scope:u}=e;const{dir:d,cur:v,w:S,h:E,count:j}=$e("Slider");Z(i,d,y=>l(13,f=y)),Z(i,v,y=>l(11,c=y)),Z(i,S,y=>l(14,o=y)),Z(i,E,y=>l(12,a=y)),Z(i,j,y=>l(5,h=y));let{index:D}=e;return i.$$set=y=>{"index"in y&&l(0,D=y.index),"$$scope"in y&&l(15,u=y.$$scope)},i.$$.update=()=>{i.$$.dirty&24576&&l(4,t=f==="horizontal"?`${o}px`:"100%"),i.$$.dirty&12288&&l(3,n=f==="vertical"?`${a}px`:"100%"),i.$$.dirty&2049&&l(1,s=D===c),i.$$.dirty&2&&l(2,r=!s)},[D,s,r,n,t,h,d,v,S,E,j,c,a,f,o,u,_]}class Kt extends L{constructor(e){super(),M(this,e,Ot,Pt,K,{index:0})}}function De(i,e,l){const t=i.slice();return t[8]=e[l],t[10]=l,t}function Ce(i,e,l){const t=i.slice();return t[11]=e[l].type,t[12]=e[l].text,t}function Lt(i){let e,l,t=i[12]+"";return{c(){e=I(i[11]),l=new tt(!1),this.h()},l(n){e=A(n,(i[11]||"null").toUpperCase(),{class:!0});var s=T(e);l=lt(s,!1),s.forEach(g),this.h()},h(){l.a=null,nt(i[11])(e,{class:"slide-content svelte-1myyodm"})},m(n,s){z(n,e,s),l.m(t,e)},p:G,d(n){n&&g(e)}}}function We(i){let e=i[11]&&Lt(i);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,t){e&&e.m(l,t)},p(l,t){l[11]&&e.p(l,t)},d(l){e&&e.d(l)}}}function Mt(i){let e,l=O(i[8].text),t=[];for(let n=0;n<l.length;n+=1)t[n]=We(Ce(i,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=U()},l(n){for(let s=0;s<t.length;s+=1)t[s].l(n);e=F(n)},m(n,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(n,s);z(n,e,s)},p(n,s){if(s&8){l=O(n[8].text);let r;for(r=0;r<l.length;r+=1){const c=Ce(n,l,r);t[r]?t[r].p(c,s):(t[r]=We(c),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&g(e),x(t,n)}}}function He(i){let e,l;return e=new Kt({props:{index:i[10],$$slots:{default:[Mt]},$$scope:{ctx:i}}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){V(e,t,n),l=!0},p(t,n){const s={};n&32768&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Bt(i){let e,l,t=O(i[3]),n=[];for(let r=0;r<t.length;r+=1)n[r]=He(De(i,t,r));const s=r=>k(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=ie()},l(r){for(let c=0;c<n.length;c+=1)n[c].l(r);e=ie()},m(r,c){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(r,c);z(r,e,c),l=!0},p(r,c){if(c&8){t=O(r[3]);let a;for(a=0;a<t.length;a+=1){const f=De(r,t,a);n[a]?(n[a].p(f,c),p(n[a],1)):(n[a]=He(f),n[a].c(),p(n[a],1),n[a].m(e.parentNode,e))}for(ue(),a=t.length;a<n.length;a+=1)s(a);he()}},i(r){if(!l){for(let c=0;c<t.length;c+=1)p(n[c]);l=!0}},o(r){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)k(n[c]);l=!1},d(r){r&&g(e),x(n,r)}}}function Rt(i){let e,l,t,n,s,r,c,a,f,o;e=new ut({props:{activeSlide:i[1],sections:i[2],allSlides:i[3]}});function h(u){i[6](u)}let _={duration:"0",$$slots:{default:[Bt]},$$scope:{ctx:i}};return i[1]!==void 0&&(_.current=i[1]),n=new Vt({props:_}),i[5](n),se.push(()=>it(n,"current",h)),c=new bt({props:{activeSlide:i[1]}}),f=new Ct({props:{debug:!1,full:!0,directions:i[1]===0?["right"]:["left","right"],size:i[1]===0?"100%":["33%","67%"],enableKeyboard:!0,marginTop:0}}),f.$on("tap",i[4]),{c(){W(e.$$.fragment),l=U(),t=I("article"),W(n.$$.fragment),r=U(),W(c.$$.fragment),a=U(),W(f.$$.fragment),this.h()},l(u){H(e.$$.fragment,u),l=F(u),t=A(u,"ARTICLE",{class:!0});var d=T(t);H(n.$$.fragment,d),d.forEach(g),r=F(u),H(c.$$.fragment,u),a=F(u),H(f.$$.fragment,u),this.h()},h(){b(t,"class","svelte-1myyodm")},m(u,d){V(e,u,d),z(u,l,d),z(u,t,d),V(n,t,null),z(u,r,d),V(c,u,d),z(u,a,d),V(f,u,d),o=!0},p(u,[d]){const v={};d&2&&(v.activeSlide=u[1]),e.$set(v);const S={};d&32768&&(S.$$scope={dirty:d,ctx:u}),!s&&d&2&&(s=!0,S.current=u[1],et(()=>s=!1)),n.$set(S);const E={};d&2&&(E.activeSlide=u[1]),c.$set(E);const j={};d&2&&(j.directions=u[1]===0?["right"]:["left","right"]),d&2&&(j.size=u[1]===0?"100%":["33%","67%"]),f.$set(j)},i(u){o||(p(e.$$.fragment,u),p(n.$$.fragment,u),p(c.$$.fragment,u),p(f.$$.fragment,u),o=!0)},o(u){k(e.$$.fragment,u),k(n.$$.fragment,u),k(c.$$.fragment,u),k(f.$$.fragment,u),o=!1},d(u){u&&(g(l),g(t),g(r),g(a)),q(e,u),i[5](null),q(n),q(c,u),q(f,u)}}}function Ut(i,e,l){let t,n=0;const s=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],r=s.map((o,h)=>o.slides.map(_=>({..._,section:h}))).flat(),c=({detail:o})=>{o==="right"?t.next():t.prev(),window.scrollTo(0,0)};function a(o){se[o?"unshift":"push"](()=>{t=o,l(0,t)})}function f(o){n=o,l(1,n)}return[t,n,s,r,c,a,f]}class Ft extends L{constructor(e){super(),M(this,e,Ut,Rt,K,{})}}function Gt(i){let e,l;return e=new Ft({}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){V(e,t,n),l=!0},p:G,i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}class xt extends L{constructor(e){super(),M(this,e,null,Gt,K,{})}}export{xt as component};
