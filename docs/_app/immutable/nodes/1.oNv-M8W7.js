import{s as d,n as m,c as f}from"../chunks/scheduler.rGTiESYz.js";import{S as _,i as h,e as v,t as u,c as $,a as E,b as p,d as b,f as S,g as l,s as g}from"../chunks/index.JLxAIofn.js";import{s as x}from"../chunks/entry.SmO8B-pL.js";const q=()=>{const s=x;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},y={subscribe(s){return q().page.subscribe(s)}};function C(s){let e,r=s[0].status+"",n,o,i=s[0].error.message+"",c;return{c(){e=v("h1"),n=u(r),o=u(": "),c=u(i)},l(a){e=$(a,"H1",{});var t=E(e);n=p(t,r),o=p(t,": "),c=p(t,i),t.forEach(b)},m(a,t){S(a,e,t),l(e,n),l(e,o),l(e,c)},p(a,[t]){t&1&&r!==(r=a[0].status+"")&&g(n,r),t&1&&i!==(i=a[0].error.message+"")&&g(c,i)},i:m,o:m,d(a){a&&b(e)}}}function H(s,e,r){let n;return f(s,y,o=>r(0,n=o)),[n]}let z=class extends _{constructor(e){super(),h(this,e,H,C,d,{})}};export{z as component};
