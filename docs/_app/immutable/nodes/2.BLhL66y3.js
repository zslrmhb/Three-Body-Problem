var MM=Object.defineProperty;var UM=(Q,A,I)=>A in Q?MM(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var Hg=(Q,A,I)=>(UM(Q,typeof A!="symbol"?A+"":A,I),I);import{s as ag,n as WB,e as mC,u as HC,g as TC,f as bC,z as VB,A as xC,B as zB,c as $C,C as CG,t as cn,D as NM,o as pt,d as ln,E as wn,F as WQ,G as JB,H as Dt,h as rB}from"../chunks/scheduler.BGcSciwg.js";import{S as sg,i as ng,e as li,c as wi,y as KM,o as FC,f as mA,d as fA,a as gE,n as EA,l as eA,h as tI,u as KA,k as eI,v as pA,w as FA,x as dA,t as GB,b as yB,q as bQ,m as xQ,j as EE,g as Gr}from"../chunks/index.ByIL9b6Q.js";import{s as Pt,a as Wt,b as Vt,c as yr,l as pM}from"../chunks/index.C6o6Eot1.js";import{d as Sn,w as fB,r as BG}from"../chunks/index.yBkgiAJL.js";function Gn(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const o in i)o in E||(g[o]=1);for(const o in E)C[o]||(I[o]=E[o],C[o]=1);Q[B]=E}else for(const o in i)C[o]=1}for(const i in g)i in I||(I[i]=void 0);return I}function yn(Q){return typeof Q=="object"&&Q!==null?Q:{}}class FM extends sg{constructor(A){super(),ng(this,A,null,null,ag,{})}}var QG=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},SD={exports:{}};(function(Q,A){(function(I,g){g(A)})(QG,function(I){function g(z,F){for(var b=0;b<F.length;b++){var d=F[b];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(z,d.key,d)}}function C(z,F,b){return F&&g(z.prototype,F),b&&g(z,b),z}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B,i,E,o,t,e,a,s,n,D,c,h,r,S=function(){return B||typeof window<"u"&&(B=window.gsap)&&B.registerPlugin&&B},l=1,G=[],M=[],U=[],k=Date.now,K=function(F,b){return b},q=function(){var F=n.core,b=F.bridge||{},d=F._scrollers,f=F._proxies;d.push.apply(d,M),f.push.apply(f,U),M=d,U=f,K=function(tA,gA){return b[tA](gA)}},y=function(F,b){return~U.indexOf(F)&&U[U.indexOf(F)+1][b]},N=function(F){return!!~D.indexOf(F)},T=function(F,b,d,f,Z){return F.addEventListener(b,d,{passive:f!==!1,capture:!!Z})},O=function(F,b,d,f){return F.removeEventListener(b,d,!!f)},H="scrollLeft",V="scrollTop",_=function(){return c&&c.isPressed||M.cache++},j=function(F,b){var d=function f(Z){if(Z||Z===0){l&&(E.history.scrollRestoration="manual");var tA=c&&c.isPressed;Z=f.v=Math.round(Z)||(c&&c.iOS?1:0),F(Z),f.cacheID=M.cache,tA&&K("ss",Z)}else(b||M.cache!==f.cacheID||K("ref"))&&(f.cacheID=M.cache,f.v=F());return f.v+f.offset};return d.offset=0,F&&d},IA={s:H,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:j(function(z){return arguments.length?E.scrollTo(z,AA.sc()):E.pageXOffset||o[H]||t[H]||e[H]||0})},AA={s:V,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:IA,sc:j(function(z){return arguments.length?E.scrollTo(IA.sc(),z):E.pageYOffset||o[V]||t[V]||e[V]||0})},oA=function(F,b){return(b&&b._ctx&&b._ctx.selector||B.utils.toArray)(F)[0]||(typeof F=="string"&&B.config().nullTargetWarn!==!1?console.warn("Element not found:",F):null)},sA=function(F,b){var d=b.s,f=b.sc;N(F)&&(F=o.scrollingElement||t);var Z=M.indexOf(F),tA=f===AA.sc?1:2;!~Z&&(Z=M.push(F)-1),M[Z+tA]||T(F,"scroll",_);var gA=M[Z+tA],OA=gA||(M[Z+tA]=j(y(F,d),!0)||(N(F)?f:j(function(KI){return arguments.length?F[d]=KI:F[d]})));return OA.target=F,gA||(OA.smooth=B.getProperty(F,"scrollBehavior")==="smooth"),OA},JA=function(F,b,d){var f=F,Z=F,tA=k(),gA=tA,OA=b||50,KI=Math.max(500,OA*3),og=function(nI,Lg){var wg=k();Lg||wg-tA>OA?(Z=f,f=nI,gA=tA,tA=wg):d?f+=nI:f=Z+(nI-Z)/(wg-gA)*(tA-gA)},XI=function(){Z=f=d?0:f,gA=tA=0},aI=function(nI){var Lg=gA,wg=Z,sC=k();return(nI||nI===0)&&nI!==f&&og(nI),tA===gA||sC-gA>KI?0:(f+(d?wg:-wg))/((d?sC:tA)-Lg)*1e3};return{update:og,reset:XI,getVelocity:aI}},CI=function(F,b){return b&&!F._gsapAllow&&F.preventDefault(),F.changedTouches?F.changedTouches[0]:F},QA=function(F){var b=Math.max.apply(Math,F),d=Math.min.apply(Math,F);return Math.abs(b)>=Math.abs(d)?b:d},GA=function(){n=B.core.globals().ScrollTrigger,n&&n.core&&q()},PA=function(F){return B=F||S(),!i&&B&&typeof document<"u"&&document.body&&(E=window,o=document,t=o.documentElement,e=o.body,D=[E,o,t,e],B.utils.clamp,r=B.core.context||function(){},s="onpointerenter"in e?"pointer":"mouse",a=qA.isTouch=E.matchMedia&&E.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in E||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,h=qA.eventTypes=("ontouchstart"in t?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in t?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l=0},500),GA(),i=1),i};IA.op=AA,M.cache=0;var qA=function(){function z(b){this.init(b)}var F=z.prototype;return F.init=function(d){i||PA(B)||console.warn("Please gsap.registerPlugin(Observer)"),n||GA();var f=d.tolerance,Z=d.dragMinimum,tA=d.type,gA=d.target,OA=d.lineHeight,KI=d.debounce,og=d.preventDefault,XI=d.onStop,aI=d.onStopDelay,kA=d.ignore,nI=d.wheelSpeed,Lg=d.event,wg=d.onDragStart,sC=d.onDragEnd,Fg=d.onDrag,JC=d.onPress,qI=d.onRelease,gQ=d.onRight,Ug=d.onLeft,pI=d.onUp,EB=d.onDown,MB=d.onChangeX,oI=d.onChangeY,fC=d.onChange,MI=d.onToggleX,Ai=d.onToggleY,nC=d.onHover,oB=d.onHoverEnd,tB=d.onMove,rg=d.ignoreCheck,AC=d.isNormalizer,IC=d.onGestureStart,$=d.onGestureEnd,rC=d.onWheel,UE=d.onEnable,ui=d.onDisable,CQ=d.onClick,Ii=d.scrollSpeed,eB=d.capture,gC=d.allowClicks,aB=d.lockAxis,OC=d.onLockAxis;this.target=gA=oA(gA)||t,this.vars=d,kA&&(kA=B.utils.toArray(kA)),f=f||1e-9,Z=Z||0,nI=nI||1,Ii=Ii||1,tA=tA||"wheel,touch,pointer",KI=KI!==!1,OA||(OA=parseFloat(E.getComputedStyle(e).lineHeight)||22);var qi,sB,rQ,$I,Zg,UB,LB,aA=this,mB=0,gi=0,Yi=d.passive||!og,CC=sA(gA,IA),Li=sA(gA,AA),NE=CC(),Jo=Li(),kC=~tA.indexOf("touch")&&!~tA.indexOf("pointer")&&h[0]==="pointerdown",mi=N(gA),Pg=gA.ownerDocument||o,DQ=[0,0,0],BQ=[0,0,0],Ci=0,xt=function(){return Ci=k()},BC=function(lI,Ig){return(aA.event=lI)&&kA&&~kA.indexOf(lI.target)||Ig&&kC&&lI.pointerType!=="touch"||rg&&rg(lI,Ig)},xa=function(){aA._vx.reset(),aA._vy.reset(),sB.pause(),XI&&XI(aA)},Hi=function(){var lI=aA.deltaX=QA(DQ),Ig=aA.deltaY=QA(BQ),xA=Math.abs(lI)>=f,fI=Math.abs(Ig)>=f;fC&&(xA||fI)&&fC(aA,lI,Ig,DQ,BQ),xA&&(gQ&&aA.deltaX>0&&gQ(aA),Ug&&aA.deltaX<0&&Ug(aA),MB&&MB(aA),MI&&aA.deltaX<0!=mB<0&&MI(aA),mB=aA.deltaX,DQ[0]=DQ[1]=DQ[2]=0),fI&&(EB&&aA.deltaY>0&&EB(aA),pI&&aA.deltaY<0&&pI(aA),oI&&oI(aA),Ai&&aA.deltaY<0!=gi<0&&Ai(aA),gi=aA.deltaY,BQ[0]=BQ[1]=BQ[2]=0),($I||rQ)&&(tB&&tB(aA),rQ&&(Fg(aA),rQ=!1),$I=!1),UB&&!(UB=!1)&&OC&&OC(aA),Zg&&(rC(aA),Zg=!1),qi=0},fo=function(lI,Ig,xA){DQ[xA]+=lI,BQ[xA]+=Ig,aA._vx.update(lI),aA._vy.update(Ig),KI?qi||(qi=requestAnimationFrame(Hi)):Hi()},uo=function(lI,Ig){aB&&!LB&&(aA.axis=LB=Math.abs(lI)>Math.abs(Ig)?"x":"y",UB=!0),LB!=="y"&&(DQ[2]+=lI,aA._vx.update(lI,!0)),LB!=="x"&&(BQ[2]+=Ig,aA._vy.update(Ig,!0)),KI?qi||(qi=requestAnimationFrame(Hi)):Hi()},Ti=function(lI){if(!BC(lI,1)){lI=CI(lI,og);var Ig=lI.clientX,xA=lI.clientY,fI=Ig-aA.x,rI=xA-aA.y,dI=aA.isDragging;aA.x=Ig,aA.y=xA,(dI||Math.abs(aA.startX-Ig)>=Z||Math.abs(aA.startY-xA)>=Z)&&(Fg&&(rQ=!0),dI||(aA.isDragging=!0),uo(fI,rI),dI||wg&&wg(aA))}},KE=aA.onPress=function(JI){BC(JI,1)||JI&&JI.button||(aA.axis=LB=null,sB.pause(),aA.isPressed=!0,JI=CI(JI),mB=gi=0,aA.startX=aA.x=JI.clientX,aA.startY=aA.y=JI.clientY,aA._vx.reset(),aA._vy.reset(),T(AC?gA:Pg,h[1],Ti,Yi,!0),aA.deltaX=aA.deltaY=0,JC&&JC(aA))},OI=aA.onRelease=function(JI){if(!BC(JI,1)){O(AC?gA:Pg,h[1],Ti,!0);var lI=!isNaN(aA.y-aA.startY),Ig=aA.isDragging,xA=Ig&&(Math.abs(aA.x-aA.startX)>3||Math.abs(aA.y-aA.startY)>3),fI=CI(JI);!xA&&lI&&(aA._vx.reset(),aA._vy.reset(),og&&gC&&B.delayedCall(.08,function(){if(k()-Ci>300&&!JI.defaultPrevented){if(JI.target.click)JI.target.click();else if(Pg.createEvent){var rI=Pg.createEvent("MouseEvents");rI.initMouseEvent("click",!0,!0,E,1,fI.screenX,fI.screenY,fI.clientX,fI.clientY,!1,!1,!1,!1,0,null),JI.target.dispatchEvent(rI)}}})),aA.isDragging=aA.isGesturing=aA.isPressed=!1,XI&&Ig&&!AC&&sB.restart(!0),sC&&Ig&&sC(aA),qI&&qI(aA,xA)}},pE=function(lI){return lI.touches&&lI.touches.length>1&&(aA.isGesturing=!0)&&IC(lI,aA.isDragging)},hQ=function(){return(aA.isGesturing=!1)||$(aA)},cQ=function(lI){if(!BC(lI)){var Ig=CC(),xA=Li();fo((Ig-NE)*Ii,(xA-Jo)*Ii,1),NE=Ig,Jo=xA,XI&&sB.restart(!0)}},lQ=function(lI){if(!BC(lI)){lI=CI(lI,og),rC&&(Zg=!0);var Ig=(lI.deltaMode===1?OA:lI.deltaMode===2?E.innerHeight:1)*nI;fo(lI.deltaX*Ig,lI.deltaY*Ig,0),XI&&!AC&&sB.restart(!0)}},FE=function(lI){if(!BC(lI)){var Ig=lI.clientX,xA=lI.clientY,fI=Ig-aA.x,rI=xA-aA.y;aA.x=Ig,aA.y=xA,$I=!0,XI&&sB.restart(!0),(fI||rI)&&uo(fI,rI)}},qo=function(lI){aA.event=lI,nC(aA)},Bi=function(lI){aA.event=lI,oB(aA)},_t=function(lI){return BC(lI)||CI(lI,og)&&CQ(aA)};sB=aA._dc=B.delayedCall(aI||.25,xa).pause(),aA.deltaX=aA.deltaY=0,aA._vx=JA(0,50,!0),aA._vy=JA(0,50,!0),aA.scrollX=CC,aA.scrollY=Li,aA.isDragging=aA.isGesturing=aA.isPressed=!1,r(this),aA.enable=function(JI){return aA.isEnabled||(T(mi?Pg:gA,"scroll",_),tA.indexOf("scroll")>=0&&T(mi?Pg:gA,"scroll",cQ,Yi,eB),tA.indexOf("wheel")>=0&&T(gA,"wheel",lQ,Yi,eB),(tA.indexOf("touch")>=0&&a||tA.indexOf("pointer")>=0)&&(T(gA,h[0],KE,Yi,eB),T(Pg,h[2],OI),T(Pg,h[3],OI),gC&&T(gA,"click",xt,!0,!0),CQ&&T(gA,"click",_t),IC&&T(Pg,"gesturestart",pE),$&&T(Pg,"gestureend",hQ),nC&&T(gA,s+"enter",qo),oB&&T(gA,s+"leave",Bi),tB&&T(gA,s+"move",FE)),aA.isEnabled=!0,JI&&JI.type&&KE(JI),UE&&UE(aA)),aA},aA.disable=function(){aA.isEnabled&&(G.filter(function(JI){return JI!==aA&&N(JI.target)}).length||O(mi?Pg:gA,"scroll",_),aA.isPressed&&(aA._vx.reset(),aA._vy.reset(),O(AC?gA:Pg,h[1],Ti,!0)),O(mi?Pg:gA,"scroll",cQ,eB),O(gA,"wheel",lQ,eB),O(gA,h[0],KE,eB),O(Pg,h[2],OI),O(Pg,h[3],OI),O(gA,"click",xt,!0),O(gA,"click",_t),O(Pg,"gesturestart",pE),O(Pg,"gestureend",hQ),O(gA,s+"enter",qo),O(gA,s+"leave",Bi),O(gA,s+"move",FE),aA.isEnabled=aA.isPressed=aA.isDragging=!1,ui&&ui(aA))},aA.kill=aA.revert=function(){aA.disable();var JI=G.indexOf(aA);JI>=0&&G.splice(JI,1),c===aA&&(c=0)},G.push(aA),AC&&N(gA)&&(c=aA),aA.enable(Lg)},C(z,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),z}();qA.version="3.12.5",qA.create=function(z){return new qA(z)},qA.register=PA,qA.getAll=function(){return G.slice()},qA.getById=function(z){return G.filter(function(F){return F.vars.id===z})[0]},S()&&B.registerPlugin(qA);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nA,VA,YA,HA,L,SA,rA,NA,DA,AI,TA,J,p,X,MA,cA,yA,jA,uA,WA,EI,yI,lA,TI,RI,SI,zA,_A,NI,m,RA,bA,iI,Y,UA=1,wA=Date.now,$A=wA(),XA=0,bI=0,HI=function(F,b,d){var f=R(F)&&(F.substr(0,6)==="clamp("||F.indexOf("max")>-1);return d["_"+b+"Clamp"]=f,f?F.substr(6,F.length-7):F},Cg=function(F,b){return b&&(!R(F)||F.substr(0,6)!=="clamp(")?"clamp("+F+")":F},tC=function z(){return bI&&requestAnimationFrame(z)},ZI=function(){return X=1},kg=function(){return X=0},lg=function(F){return F},Ji=function(F){return Math.round(F*1e5)/1e5||0},Na=function(){return typeof window<"u"},wE=function(){return nA||Na()&&(nA=window.gsap)&&nA.registerPlugin&&nA},RQ=function(F){return!!~rA.indexOf(F)},SE=function(F){return(F==="Height"?RA:YA["inner"+F])||L["client"+F]||SA["client"+F]},qt=function(F){return y(F,"getBoundingClientRect")||(RQ(F)?function(){return Ha.width=YA.innerWidth,Ha.height=RA,Ha}:function(){return RC(F)})},Ka=function(F,b,d){var f=d.d,Z=d.d2,tA=d.a;return(tA=y(F,"getBoundingClientRect"))?function(){return tA()[f]}:function(){return(b?SE(Z):F["client"+Z])||0}},sr=function(F,b){return!b||~U.indexOf(F)?qt(F):function(){return Ha}},IQ=function(F,b){var d=b.s,f=b.d2,Z=b.d,tA=b.a;return Math.max(0,(d="scroll"+f)&&(tA=y(F,d))?tA()-qt(F)()[Z]:RQ(F)?(L[d]||SA[d])-SE(f):F[d]-F["offset"+f])},po=function(F,b){for(var d=0;d<uA.length;d+=3)(!b||~b.indexOf(uA[d+1]))&&F(uA[d],uA[d+1],uA[d+2])},R=function(F){return typeof F=="string"},W=function(F){return typeof F=="function"},BA=function(F){return typeof F=="number"},iA=function(F){return typeof F=="object"},CA=function(F,b,d){return F&&F.progress(b?0:1)&&d&&F.pause()},vA=function(F,b){if(F.enabled){var d=F._ctx?F._ctx.add(function(){return b(F)}):b(F);d&&d.totalTime&&(F.callbackAnimation=d)}},II=Math.abs,sI="left",GI="top",FI="right",kI="bottom",cI="width",Qg="height",eC="Right",Mg="Left",BB="Top",ig="Bottom",QI="padding",_C="margin",Eg="Width",nQ="Height",Yg="px",SC=function(F){return YA.getComputedStyle(F)},Yt=function(F){var b=SC(F).position;F.style.position=b==="absolute"||b==="fixed"?b:"relative"},aC=function(F,b){for(var d in b)d in F||(F[d]=b[d]);return F},RC=function(F,b){var d=b&&SC(F)[MA]!=="matrix(1, 0, 0, 1, 0, 0)"&&nA.to(F,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),f=F.getBoundingClientRect();return d&&d.progress(0).kill(),f},fi=function(F,b){var d=b.d2;return F["offset"+d]||F["client"+d]||0},QB=function(F){var b=[],d=F.labels,f=F.duration(),Z;for(Z in d)b.push(d[Z]/f);return b},Lt=function(F){return function(b){return nA.utils.snap(QB(F),b)}},mt=function(F){var b=nA.utils.snap(F),d=Array.isArray(F)&&F.slice(0).sort(function(f,Z){return f-Z});return d?function(f,Z,tA){tA===void 0&&(tA=.001);var gA;if(!Z)return b(f);if(Z>0){for(f-=tA,gA=0;gA<d.length;gA++)if(d[gA]>=f)return d[gA];return d[gA-1]}else for(gA=d.length,f+=tA;gA--;)if(d[gA]<=f)return d[gA];return d[0]}:function(f,Z,tA){tA===void 0&&(tA=.001);var gA=b(f);return!Z||Math.abs(gA-f)<tA||gA-f<0==Z<0?gA:b(Z<0?f-F:f+F)}},pa=function(F){return function(b,d){return mt(QB(F))(b,d.direction)}},Fa=function(F,b,d,f){return d.split(",").forEach(function(Z){return F(b,Z,f)})},GC=function(F,b,d,f,Z){return F.addEventListener(b,d,{passive:!f,capture:!!Z})},yC=function(F,b,d,f){return F.removeEventListener(b,d,!!f)},da=function(F,b,d){d=d&&d.wheelHandler,d&&(F(b,"wheel",d),F(b,"touchmove",d))},sl={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ra={toggleActions:"play",anticipatePin:0},Ja={top:0,left:0,center:.5,bottom:1,right:1},fa=function(F,b){if(R(F)){var d=F.indexOf("="),f=~d?+(F.charAt(d-1)+1)*parseFloat(F.substr(d+1)):0;~d&&(F.indexOf("%")>d&&(f*=b/100),F=F.substr(0,d-1)),F=f+(F in Ja?Ja[F]*b:~F.indexOf("%")?parseFloat(F)*b/100:parseFloat(F)||0)}return F},ua=function(F,b,d,f,Z,tA,gA,OA){var KI=Z.startColor,og=Z.endColor,XI=Z.fontSize,aI=Z.indent,kA=Z.fontWeight,nI=HA.createElement("div"),Lg=RQ(d)||y(d,"pinType")==="fixed",wg=F.indexOf("scroller")!==-1,sC=Lg?SA:d,Fg=F.indexOf("start")!==-1,JC=Fg?KI:og,qI="border-color:"+JC+";font-size:"+XI+";color:"+JC+";font-weight:"+kA+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return qI+="position:"+((wg||OA)&&Lg?"fixed;":"absolute;"),(wg||OA||!Lg)&&(qI+=(f===AA?FI:kI)+":"+(tA+parseFloat(aI))+"px;"),gA&&(qI+="box-sizing:border-box;text-align:left;width:"+gA.offsetWidth+"px;"),nI._isStart=Fg,nI.setAttribute("class","gsap-marker-"+F+(b?" marker-"+b:"")),nI.style.cssText=qI,nI.innerText=b||b===0?F+"-"+b:F,sC.children[0]?sC.insertBefore(nI,sC.children[0]):sC.appendChild(nI),nI._offset=nI["offset"+f.op.d2],qa(nI,0,f,Fg),nI},qa=function(F,b,d,f){var Z={display:"block"},tA=d[f?"os2":"p2"],gA=d[f?"p2":"os2"];F._isFlipped=f,Z[d.a+"Percent"]=f?-100:0,Z[d.a]=f?"1px":0,Z["border"+tA+Eg]=1,Z["border"+gA+Eg]=0,Z[d.p]=b+"px",nA.set(F,Z)},xI=[],nr={},Ht,nl=function(){return wA()-XA>34&&(Ht||(Ht=requestAnimationFrame($Q)))},Fo=function(){(!lA||!lA.isPressed||lA.startX>SA.clientWidth)&&(M.cache++,lA?Ht||(Ht=requestAnimationFrame($Q)):$Q(),XA||yE("scrollStart"),XA=wA())},rr=function(){SI=YA.innerWidth,RI=YA.innerHeight},Tt=function(){M.cache++,!p&&!yI&&!HA.fullscreenElement&&!HA.webkitFullscreenElement&&(!TI||SI!==YA.innerWidth||Math.abs(YA.innerHeight-RI)>YA.innerHeight*.25)&&NA.restart(!0)},GE={},DM=[],rl=function z(){return yC(_I,"scrollEnd",z)||ME(!0)},yE=function(F){return GE[F]&&GE[F].map(function(b){return b()})||DM},YB=[],Dl=function(F){for(var b=0;b<YB.length;b+=5)(!F||YB[b+4]&&YB[b+4].query===F)&&(YB[b].style.cssText=YB[b+1],YB[b].getBBox&&YB[b].setAttribute("transform",YB[b+2]||""),YB[b+3].uncache=1)},Dr=function(F,b){var d;for(cA=0;cA<xI.length;cA++)d=xI[cA],d&&(!b||d._ctx===b)&&(F?d.kill(1):d.revert(!0,!0));bA=!0,b&&Dl(b),b||yE("revert")},hl=function(F,b){M.cache++,(b||!iB)&&M.forEach(function(d){return W(d)&&d.cacheID++&&(d.rec=0)}),R(F)&&(YA.history.scrollRestoration=NI=F)},iB,kE=0,cl,hM=function(){if(cl!==kE){var F=cl=kE;requestAnimationFrame(function(){return F===kE&&ME(!0)})}},ll=function(){SA.appendChild(m),RA=!lA&&m.offsetHeight||YA.innerHeight,SA.removeChild(m)},wl=function(F){return DA(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(b){return b.style.display=F?"none":"block"})},ME=function(F,b){if(XA&&!F&&!bA){GC(_I,"scrollEnd",rl);return}ll(),iB=_I.isRefreshing=!0,M.forEach(function(f){return W(f)&&++f.cacheID&&(f.rec=f())});var d=yE("refreshInit");WA&&_I.sort(),b||Dr(),M.forEach(function(f){W(f)&&(f.smooth&&(f.target.style.scrollBehavior="auto"),f(0))}),xI.slice(0).forEach(function(f){return f.refresh()}),bA=!1,xI.forEach(function(f){if(f._subPinOffset&&f.pin){var Z=f.vars.horizontal?"offsetWidth":"offsetHeight",tA=f.pin[Z];f.revert(!0,1),f.adjustPinSpacing(f.pin[Z]-tA),f.refresh()}}),iI=1,wl(!0),xI.forEach(function(f){var Z=IQ(f.scroller,f._dir),tA=f.vars.end==="max"||f._endClamp&&f.end>Z,gA=f._startClamp&&f.start>=Z;(tA||gA)&&f.setPositions(gA?Z-1:f.start,tA?Math.max(gA?Z:f.start+1,Z):f.end,!0)}),wl(!1),iI=0,d.forEach(function(f){return f&&f.render&&f.render(-1)}),M.forEach(function(f){W(f)&&(f.smooth&&requestAnimationFrame(function(){return f.target.style.scrollBehavior="smooth"}),f.rec&&f(f.rec))}),hl(NI,1),NA.pause(),kE++,iB=2,$Q(2),xI.forEach(function(f){return W(f.vars.onRefresh)&&f.vars.onRefresh(f)}),iB=_I.isRefreshing=!1,yE("refresh")},hr=0,Ya=1,bt,$Q=function(F){if(F===2||!iB&&!bA){_I.isUpdating=!0,bt&&bt.update(0);var b=xI.length,d=wA(),f=d-$A>=50,Z=b&&xI[0].scroll();if(Ya=hr>Z?-1:1,iB||(hr=Z),f&&(XA&&!X&&d-XA>200&&(XA=0,yE("scrollEnd")),TA=$A,$A=d),Ya<0){for(cA=b;cA-- >0;)xI[cA]&&xI[cA].update(0,f);Ya=1}else for(cA=0;cA<b;cA++)xI[cA]&&xI[cA].update(0,f);_I.isUpdating=!1}Ht=0},cr=[sI,GI,kI,FI,_C+ig,_C+eC,_C+BB,_C+Mg,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],La=cr.concat([cI,Qg,"boxSizing","max"+Eg,"max"+nQ,"position",_C,QI,QI+BB,QI+eC,QI+ig,QI+Mg]),cM=function(F,b,d){Ro(d);var f=F._gsap;if(f.spacerIsNative)Ro(f.spacerState);else if(F._gsap.swappedIn){var Z=b.parentNode;Z&&(Z.insertBefore(F,b),Z.removeChild(b))}F._gsap.swappedIn=!1},lr=function(F,b,d,f){if(!F._gsap.swappedIn){for(var Z=cr.length,tA=b.style,gA=F.style,OA;Z--;)OA=cr[Z],tA[OA]=d[OA];tA.position=d.position==="absolute"?"absolute":"relative",d.display==="inline"&&(tA.display="inline-block"),gA[kI]=gA[FI]="auto",tA.flexBasis=d.flexBasis||"auto",tA.overflow="visible",tA.boxSizing="border-box",tA[cI]=fi(F,IA)+Yg,tA[Qg]=fi(F,AA)+Yg,tA[QI]=gA[_C]=gA[GI]=gA[sI]="0",Ro(f),gA[cI]=gA["max"+Eg]=d[cI],gA[Qg]=gA["max"+nQ]=d[Qg],gA[QI]=d[QI],F.parentNode!==b&&(F.parentNode.insertBefore(b,F),b.appendChild(F)),F._gsap.swappedIn=!0}},lM=/([A-Z])/g,Ro=function(F){if(F){var b=F.t.style,d=F.length,f=0,Z,tA;for((F.t._gsap||nA.core.getCache(F.t)).uncache=1;f<d;f+=2)tA=F[f+1],Z=F[f],tA?b[Z]=tA:b[Z]&&b.removeProperty(Z.replace(lM,"-$1").toLowerCase())}},ma=function(F){for(var b=La.length,d=F.style,f=[],Z=0;Z<b;Z++)f.push(La[Z],d[La[Z]]);return f.t=F,f},wM=function(F,b,d){for(var f=[],Z=F.length,tA=d?8:0,gA;tA<Z;tA+=2)gA=F[tA],f.push(gA,gA in b?b[gA]:F[tA+1]);return f.t=F.t,f},Ha={left:0,top:0},Sl=function(F,b,d,f,Z,tA,gA,OA,KI,og,XI,aI,kA,nI){W(F)&&(F=F(OA)),R(F)&&F.substr(0,3)==="max"&&(F=aI+(F.charAt(4)==="="?fa("0"+F.substr(3),d):0));var Lg=kA?kA.time():0,wg,sC,Fg;if(kA&&kA.seek(0),isNaN(F)||(F=+F),BA(F))kA&&(F=nA.utils.mapRange(kA.scrollTrigger.start,kA.scrollTrigger.end,0,aI,F)),gA&&qa(gA,d,f,!0);else{W(b)&&(b=b(OA));var JC=(F||"0").split(" "),qI,gQ,Ug,pI;Fg=oA(b,OA)||SA,qI=RC(Fg)||{},(!qI||!qI.left&&!qI.top)&&SC(Fg).display==="none"&&(pI=Fg.style.display,Fg.style.display="block",qI=RC(Fg),pI?Fg.style.display=pI:Fg.style.removeProperty("display")),gQ=fa(JC[0],qI[f.d]),Ug=fa(JC[1]||"0",d),F=qI[f.p]-KI[f.p]-og+gQ+Z-Ug,gA&&qa(gA,Ug,f,d-Ug<20||gA._isStart&&Ug>20),d-=d-Ug}if(nI&&(OA[nI]=F||-.001,F<0&&(F=0)),tA){var EB=F+d,MB=tA._isStart;wg="scroll"+f.d2,qa(tA,EB,f,MB&&EB>20||!MB&&(XI?Math.max(SA[wg],L[wg]):tA.parentNode[wg])<=EB+1),XI&&(KI=RC(gA),XI&&(tA.style[f.op.p]=KI[f.op.p]-f.op.m-tA._offset+Yg))}return kA&&Fg&&(wg=RC(Fg),kA.seek(aI),sC=RC(Fg),kA._caScrollDist=wg[f.p]-sC[f.p],F=F/kA._caScrollDist*aI),kA&&kA.seek(Lg),kA?F:Math.round(F)},SM=/(webkit|moz|length|cssText|inset)/i,Gl=function(F,b,d,f){if(F.parentNode!==b){var Z=F.style,tA,gA;if(b===SA){F._stOrig=Z.cssText,gA=SC(F);for(tA in gA)!+tA&&!SM.test(tA)&&gA[tA]&&typeof Z[tA]=="string"&&tA!=="0"&&(Z[tA]=gA[tA]);Z.top=d,Z.left=f}else Z.cssText=F._stOrig;nA.core.getCache(F).uncache=1,b.appendChild(F)}},yl=function(F,b,d){var f=b,Z=f;return function(tA){var gA=Math.round(F());return gA!==f&&gA!==Z&&Math.abs(gA-f)>3&&Math.abs(gA-Z)>3&&(tA=gA,d&&d()),Z=f,f=tA,tA}},Ta=function(F,b,d){var f={};f[b.p]="+="+d,nA.set(F,f)},kl=function(F,b){var d=sA(F,b),f="_scroll"+b.p2,Z=function tA(gA,OA,KI,og,XI){var aI=tA.tween,kA=OA.onComplete,nI={};KI=KI||d();var Lg=yl(d,KI,function(){aI.kill(),tA.tween=0});return XI=og&&XI||0,og=og||gA-KI,aI&&aI.kill(),OA[f]=gA,OA.inherit=!1,OA.modifiers=nI,nI[f]=function(){return Lg(KI+og*aI.ratio+XI*aI.ratio*aI.ratio)},OA.onUpdate=function(){M.cache++,tA.tween&&$Q()},OA.onComplete=function(){tA.tween=0,kA&&kA.call(aI)},aI=tA.tween=nA.to(F,OA),aI};return F[f]=d,d.wheelHandler=function(){return Z.tween&&Z.tween.kill()&&(Z.tween=0)},GC(F,"wheel",d.wheelHandler),_I.isTouch&&GC(F,"touchmove",d.wheelHandler),Z},_I=function(){function z(b,d){VA||z.register(nA)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_A(this),this.init(b,d)}var F=z.prototype;return F.init=function(d,f){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bI){this.update=this.refresh=this.kill=lg;return}d=aC(R(d)||BA(d)||d.nodeType?{trigger:d}:d,Ra);var Z=d,tA=Z.onUpdate,gA=Z.toggleClass,OA=Z.id,KI=Z.onToggle,og=Z.onRefresh,XI=Z.scrub,aI=Z.trigger,kA=Z.pin,nI=Z.pinSpacing,Lg=Z.invalidateOnRefresh,wg=Z.anticipatePin,sC=Z.onScrubComplete,Fg=Z.onSnapComplete,JC=Z.once,qI=Z.snap,gQ=Z.pinReparent,Ug=Z.pinSpacer,pI=Z.containerAnimation,EB=Z.fastScrollEnd,MB=Z.preventOverlaps,oI=d.horizontal||d.containerAnimation&&d.horizontal!==!1?IA:AA,fC=!XI&&XI!==0,MI=oA(d.scroller||YA),Ai=nA.core.getCache(MI),nC=RQ(MI),oB=("pinType"in d?d.pinType:y(MI,"pinType")||nC&&"fixed")==="fixed",tB=[d.onEnter,d.onLeave,d.onEnterBack,d.onLeaveBack],rg=fC&&d.toggleActions.split(" "),AC="markers"in d?d.markers:Ra.markers,IC=nC?0:parseFloat(SC(MI)["border"+oI.p2+Eg])||0,$=this,rC=d.onRefreshInit&&function(){return d.onRefreshInit($)},UE=Ka(MI,nC,oI),ui=sr(MI,nC),CQ=0,Ii=0,eB=0,gC=sA(MI,oI),aB,OC,qi,sB,rQ,$I,Zg,UB,LB,aA,mB,gi,Yi,CC,Li,NE,Jo,kC,mi,Pg,DQ,BQ,Ci,xt,BC,xa,Hi,fo,uo,Ti,KE,OI,pE,hQ,cQ,lQ,FE,qo,Bi;if($._startClamp=$._endClamp=!1,$._dir=oI,wg*=45,$.scroller=MI,$.scroll=pI?pI.time.bind(pI):gC,sB=gC(),$.vars=d,f=f||d.animation,"refreshPriority"in d&&(WA=1,d.refreshPriority===-9999&&(bt=$)),Ai.tweenScroll=Ai.tweenScroll||{top:kl(MI,AA),left:kl(MI,IA)},$.tweenTo=aB=Ai.tweenScroll[oI.p],$.scrubDuration=function(xA){pE=BA(xA)&&xA,pE?OI?OI.duration(xA):OI=nA.to(f,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pE,paused:!0,onComplete:function(){return sC&&sC($)}}):(OI&&OI.progress(1).kill(),OI=0)},f&&(f.vars.lazy=!1,f._initted&&!$.isReverted||f.vars.immediateRender!==!1&&d.immediateRender!==!1&&f.duration()&&f.render(0,!0,!0),$.animation=f.pause(),f.scrollTrigger=$,$.scrubDuration(XI),Ti=0,OA||(OA=f.vars.id)),qI&&((!iA(qI)||qI.push)&&(qI={snapTo:qI}),"scrollBehavior"in SA.style&&nA.set(nC?[SA,L]:MI,{scrollBehavior:"auto"}),M.forEach(function(xA){return W(xA)&&xA.target===(nC?HA.scrollingElement||L:MI)&&(xA.smooth=!1)}),qi=W(qI.snapTo)?qI.snapTo:qI.snapTo==="labels"?Lt(f):qI.snapTo==="labelsDirectional"?pa(f):qI.directional!==!1?function(xA,fI){return mt(qI.snapTo)(xA,wA()-Ii<500?0:fI.direction)}:nA.utils.snap(qI.snapTo),hQ=qI.duration||{min:.1,max:2},hQ=iA(hQ)?AI(hQ.min,hQ.max):AI(hQ,hQ),cQ=nA.delayedCall(qI.delay||pE/2||.1,function(){var xA=gC(),fI=wA()-Ii<500,rI=aB.tween;if((fI||Math.abs($.getVelocity())<10)&&!rI&&!X&&CQ!==xA){var dI=(xA-$I)/CC,MC=f&&!fC?f.totalProgress():dI,PI=fI?0:(MC-KE)/(wA()-TA)*1e3||0,Wg=nA.utils.clamp(-dI,1-dI,II(PI/2)*PI/.185),vC=dI+(qI.inertia===!1?0:Wg),mg,Ng,Dg=qI,wQ=Dg.onStart,dg=Dg.onInterrupt,HB=Dg.onComplete;if(mg=qi(vC,$),BA(mg)||(mg=vC),Ng=Math.round($I+mg*CC),xA<=Zg&&xA>=$I&&Ng!==xA){if(rI&&!rI._initted&&rI.data<=II(Ng-xA))return;qI.inertia===!1&&(Wg=mg-dI),aB(Ng,{duration:hQ(II(Math.max(II(vC-MC),II(mg-MC))*.185/PI/.05||0)),ease:qI.ease||"power3",data:II(Ng-xA),onInterrupt:function(){return cQ.restart(!0)&&dg&&dg($)},onComplete:function(){$.update(),CQ=gC(),f&&(OI?OI.resetTo("totalProgress",mg,f._tTime/f._tDur):f.progress(mg)),Ti=KE=f&&!fC?f.totalProgress():$.progress,Fg&&Fg($),HB&&HB($)}},xA,Wg*CC,Ng-xA-Wg*CC),wQ&&wQ($,aB.tween)}}else $.isActive&&CQ!==xA&&cQ.restart(!0)}).pause()),OA&&(nr[OA]=$),aI=$.trigger=oA(aI||kA!==!0&&kA),Bi=aI&&aI._gsap&&aI._gsap.stRevert,Bi&&(Bi=Bi($)),kA=kA===!0?aI:oA(kA),R(gA)&&(gA={targets:aI,className:gA}),kA&&(nI===!1||nI===_C||(nI=!nI&&kA.parentNode&&kA.parentNode.style&&SC(kA.parentNode).display==="flex"?!1:QI),$.pin=kA,OC=nA.core.getCache(kA),OC.spacer?Li=OC.pinState:(Ug&&(Ug=oA(Ug),Ug&&!Ug.nodeType&&(Ug=Ug.current||Ug.nativeElement),OC.spacerIsNative=!!Ug,Ug&&(OC.spacerState=ma(Ug))),OC.spacer=kC=Ug||HA.createElement("div"),kC.classList.add("pin-spacer"),OA&&kC.classList.add("pin-spacer-"+OA),OC.pinState=Li=ma(kA)),d.force3D!==!1&&nA.set(kA,{force3D:!0}),$.spacer=kC=OC.spacer,uo=SC(kA),xt=uo[nI+oI.os2],Pg=nA.getProperty(kA),DQ=nA.quickSetter(kA,oI.a,Yg),lr(kA,kC,uo),Jo=ma(kA)),AC){gi=iA(AC)?aC(AC,sl):sl,aA=ua("scroller-start",OA,MI,oI,gi,0),mB=ua("scroller-end",OA,MI,oI,gi,0,aA),mi=aA["offset"+oI.op.d2];var _t=oA(y(MI,"content")||MI);UB=this.markerStart=ua("start",OA,_t,oI,gi,mi,0,pI),LB=this.markerEnd=ua("end",OA,_t,oI,gi,mi,0,pI),pI&&(qo=nA.quickSetter([UB,LB],oI.a,Yg)),!oB&&!(U.length&&y(MI,"fixedMarkers")===!0)&&(Yt(nC?SA:MI),nA.set([aA,mB],{force3D:!0}),xa=nA.quickSetter(aA,oI.a,Yg),fo=nA.quickSetter(mB,oI.a,Yg))}if(pI){var JI=pI.vars.onUpdate,lI=pI.vars.onUpdateParams;pI.eventCallback("onUpdate",function(){$.update(0,0,1),JI&&JI.apply(pI,lI||[])})}if($.previous=function(){return xI[xI.indexOf($)-1]},$.next=function(){return xI[xI.indexOf($)+1]},$.revert=function(xA,fI){if(!fI)return $.kill(!0);var rI=xA!==!1||!$.enabled,dI=p;rI!==$.isReverted&&(rI&&(lQ=Math.max(gC(),$.scroll.rec||0),eB=$.progress,FE=f&&f.progress()),UB&&[UB,LB,aA,mB].forEach(function(MC){return MC.style.display=rI?"none":"block"}),rI&&(p=$,$.update(rI)),kA&&(!gQ||!$.isActive)&&(rI?cM(kA,kC,Li):lr(kA,kC,SC(kA),BC)),rI||$.update(rI),p=dI,$.isReverted=rI)},$.refresh=function(xA,fI,rI,dI){if(!((p||!$.enabled)&&!fI)){if(kA&&xA&&XA){GC(z,"scrollEnd",rl);return}!iB&&rC&&rC($),p=$,aB.tween&&!rI&&(aB.tween.kill(),aB.tween=0),OI&&OI.pause(),Lg&&f&&f.revert({kill:!1}).invalidate(),$.isReverted||$.revert(!0,!0),$._subPinOffset=!1;var MC=UE(),PI=ui(),Wg=pI?pI.duration():IQ(MI,oI),vC=CC<=.01,mg=0,Ng=dI||0,Dg=iA(rI)?rI.end:d.end,wQ=d.endTrigger||aI,dg=iA(rI)?rI.start:d.start||(d.start===0||!aI?0:kA?"0 0":"0 100%"),HB=$.pinnedContainer=d.pinnedContainer&&oA(d.pinnedContainer,$),JQ=aI&&Math.max(0,xI.indexOf($))||0,uC=JQ,qC,ZC,dE,_a,PC,DC,fQ,Sr,pl,Ot,uQ,vt,Oa;for(AC&&iA(rI)&&(vt=nA.getProperty(aA,oI.p),Oa=nA.getProperty(mB,oI.p));uC--;)DC=xI[uC],DC.end||DC.refresh(0,1)||(p=$),fQ=DC.pin,fQ&&(fQ===aI||fQ===kA||fQ===HB)&&!DC.isReverted&&(Ot||(Ot=[]),Ot.unshift(DC),DC.revert(!0,!0)),DC!==xI[uC]&&(JQ--,uC--);for(W(dg)&&(dg=dg($)),dg=HI(dg,"start",$),$I=Sl(dg,aI,MC,oI,gC(),UB,aA,$,PI,IC,oB,Wg,pI,$._startClamp&&"_startClamp")||(kA?-.001:0),W(Dg)&&(Dg=Dg($)),R(Dg)&&!Dg.indexOf("+=")&&(~Dg.indexOf(" ")?Dg=(R(dg)?dg.split(" ")[0]:"")+Dg:(mg=fa(Dg.substr(2),MC),Dg=R(dg)?dg:(pI?nA.utils.mapRange(0,pI.duration(),pI.scrollTrigger.start,pI.scrollTrigger.end,$I):$I)+mg,wQ=aI)),Dg=HI(Dg,"end",$),Zg=Math.max($I,Sl(Dg||(wQ?"100% 0":Wg),wQ,MC,oI,gC()+mg,LB,mB,$,PI,IC,oB,Wg,pI,$._endClamp&&"_endClamp"))||-.001,mg=0,uC=JQ;uC--;)DC=xI[uC],fQ=DC.pin,fQ&&DC.start-DC._pinPush<=$I&&!pI&&DC.end>0&&(qC=DC.end-($._startClamp?Math.max(0,DC.start):DC.start),(fQ===aI&&DC.start-DC._pinPush<$I||fQ===HB)&&isNaN(dg)&&(mg+=qC*(1-DC.progress)),fQ===kA&&(Ng+=qC));if($I+=mg,Zg+=mg,$._startClamp&&($._startClamp+=mg),$._endClamp&&!iB&&($._endClamp=Zg||-.001,Zg=Math.min(Zg,IQ(MI,oI))),CC=Zg-$I||($I-=.01)&&.001,vC&&(eB=nA.utils.clamp(0,1,nA.utils.normalize($I,Zg,lQ))),$._pinPush=Ng,UB&&mg&&(qC={},qC[oI.a]="+="+mg,HB&&(qC[oI.p]="-="+gC()),nA.set([UB,LB],qC)),kA&&!(iI&&$.end>=IQ(MI,oI)))qC=SC(kA),_a=oI===AA,dE=gC(),BQ=parseFloat(Pg(oI.a))+Ng,!Wg&&Zg>1&&(uQ=(nC?HA.scrollingElement||L:MI).style,uQ={style:uQ,value:uQ["overflow"+oI.a.toUpperCase()]},nC&&SC(SA)["overflow"+oI.a.toUpperCase()]!=="scroll"&&(uQ.style["overflow"+oI.a.toUpperCase()]="scroll")),lr(kA,kC,qC),Jo=ma(kA),ZC=RC(kA,!0),Sr=oB&&sA(MI,_a?IA:AA)(),nI?(BC=[nI+oI.os2,CC+Ng+Yg],BC.t=kC,uC=nI===QI?fi(kA,oI)+CC+Ng:0,uC&&(BC.push(oI.d,uC+Yg),kC.style.flexBasis!=="auto"&&(kC.style.flexBasis=uC+Yg)),Ro(BC),HB&&xI.forEach(function(Zt){Zt.pin===HB&&Zt.vars.pinSpacing!==!1&&(Zt._subPinOffset=!0)}),oB&&gC(lQ)):(uC=fi(kA,oI),uC&&kC.style.flexBasis!=="auto"&&(kC.style.flexBasis=uC+Yg)),oB&&(PC={top:ZC.top+(_a?dE-$I:Sr)+Yg,left:ZC.left+(_a?Sr:dE-$I)+Yg,boxSizing:"border-box",position:"fixed"},PC[cI]=PC["max"+Eg]=Math.ceil(ZC.width)+Yg,PC[Qg]=PC["max"+nQ]=Math.ceil(ZC.height)+Yg,PC[_C]=PC[_C+BB]=PC[_C+eC]=PC[_C+ig]=PC[_C+Mg]="0",PC[QI]=qC[QI],PC[QI+BB]=qC[QI+BB],PC[QI+eC]=qC[QI+eC],PC[QI+ig]=qC[QI+ig],PC[QI+Mg]=qC[QI+Mg],NE=wM(Li,PC,gQ),iB&&gC(0)),f?(pl=f._initted,EI(1),f.render(f.duration(),!0,!0),Ci=Pg(oI.a)-BQ+CC+Ng,Hi=Math.abs(CC-Ci)>1,oB&&Hi&&NE.splice(NE.length-2,2),f.render(0,!0,!0),pl||f.invalidate(!0),f.parent||f.totalTime(f.totalTime()),EI(0)):Ci=CC,uQ&&(uQ.value?uQ.style["overflow"+oI.a.toUpperCase()]=uQ.value:uQ.style.removeProperty("overflow-"+oI.a));else if(aI&&gC()&&!pI)for(ZC=aI.parentNode;ZC&&ZC!==SA;)ZC._pinOffset&&($I-=ZC._pinOffset,Zg-=ZC._pinOffset),ZC=ZC.parentNode;Ot&&Ot.forEach(function(Zt){return Zt.revert(!1,!0)}),$.start=$I,$.end=Zg,sB=rQ=iB?lQ:gC(),!pI&&!iB&&(sB<lQ&&gC(lQ),$.scroll.rec=0),$.revert(!1,!0),Ii=wA(),cQ&&(CQ=-1,cQ.restart(!0)),p=0,f&&fC&&(f._initted||FE)&&f.progress()!==FE&&f.progress(FE||0,!0).render(f.time(),!0,!0),(vC||eB!==$.progress||pI||Lg)&&(f&&!fC&&f.totalProgress(pI&&$I<-.001&&!eB?nA.utils.normalize($I,Zg,0):eB,!0),$.progress=vC||(sB-$I)/CC===eB?0:eB),kA&&nI&&(kC._pinOffset=Math.round($.progress*Ci)),OI&&OI.invalidate(),isNaN(vt)||(vt-=nA.getProperty(aA,oI.p),Oa-=nA.getProperty(mB,oI.p),Ta(aA,oI,vt),Ta(UB,oI,vt-(dI||0)),Ta(mB,oI,Oa),Ta(LB,oI,Oa-(dI||0))),vC&&!iB&&$.update(),og&&!iB&&!Yi&&(Yi=!0,og($),Yi=!1)}},$.getVelocity=function(){return(gC()-rQ)/(wA()-TA)*1e3||0},$.endAnimation=function(){CA($.callbackAnimation),f&&(OI?OI.progress(1):f.paused()?fC||CA(f,$.direction<0,1):CA(f,f.reversed()))},$.labelToScroll=function(xA){return f&&f.labels&&($I||$.refresh()||$I)+f.labels[xA]/f.duration()*CC||0},$.getTrailing=function(xA){var fI=xI.indexOf($),rI=$.direction>0?xI.slice(0,fI).reverse():xI.slice(fI+1);return(R(xA)?rI.filter(function(dI){return dI.vars.preventOverlaps===xA}):rI).filter(function(dI){return $.direction>0?dI.end<=$I:dI.start>=Zg})},$.update=function(xA,fI,rI){if(!(pI&&!rI&&!xA)){var dI=iB===!0?lQ:$.scroll(),MC=xA?0:(dI-$I)/CC,PI=MC<0?0:MC>1?1:MC||0,Wg=$.progress,vC,mg,Ng,Dg,wQ,dg,HB,JQ;if(fI&&(rQ=sB,sB=pI?gC():dI,qI&&(KE=Ti,Ti=f&&!fC?f.totalProgress():PI)),wg&&kA&&!p&&!UA&&XA&&(!PI&&$I<dI+(dI-rQ)/(wA()-TA)*wg?PI=1e-4:PI===1&&Zg>dI+(dI-rQ)/(wA()-TA)*wg&&(PI=.9999)),PI!==Wg&&$.enabled){if(vC=$.isActive=!!PI&&PI<1,mg=!!Wg&&Wg<1,dg=vC!==mg,wQ=dg||!!PI!=!!Wg,$.direction=PI>Wg?1:-1,$.progress=PI,wQ&&!p&&(Ng=PI&&!Wg?0:PI===1?1:Wg===1?2:3,fC&&(Dg=!dg&&rg[Ng+1]!=="none"&&rg[Ng+1]||rg[Ng],JQ=f&&(Dg==="complete"||Dg==="reset"||Dg in f))),MB&&(dg||JQ)&&(JQ||XI||!f)&&(W(MB)?MB($):$.getTrailing(MB).forEach(function(dE){return dE.endAnimation()})),fC||(OI&&!p&&!UA?(OI._dp._time-OI._start!==OI._time&&OI.render(OI._dp._time-OI._start),OI.resetTo?OI.resetTo("totalProgress",PI,f._tTime/f._tDur):(OI.vars.totalProgress=PI,OI.invalidate().restart())):f&&f.totalProgress(PI,!!(p&&(Ii||xA)))),kA){if(xA&&nI&&(kC.style[nI+oI.os2]=xt),!oB)DQ(Ji(BQ+Ci*PI));else if(wQ){if(HB=!xA&&PI>Wg&&Zg+1>dI&&dI+1>=IQ(MI,oI),gQ)if(!xA&&(vC||HB)){var uC=RC(kA,!0),qC=dI-$I;Gl(kA,SA,uC.top+(oI===AA?qC:0)+Yg,uC.left+(oI===AA?0:qC)+Yg)}else Gl(kA,kC);Ro(vC||HB?NE:Jo),Hi&&PI<1&&vC||DQ(BQ+(PI===1&&!HB?Ci:0))}}qI&&!aB.tween&&!p&&!UA&&cQ.restart(!0),gA&&(dg||JC&&PI&&(PI<1||!Y))&&DA(gA.targets).forEach(function(dE){return dE.classList[vC||JC?"add":"remove"](gA.className)}),tA&&!fC&&!xA&&tA($),wQ&&!p?(fC&&(JQ&&(Dg==="complete"?f.pause().totalProgress(1):Dg==="reset"?f.restart(!0).pause():Dg==="restart"?f.restart(!0):f[Dg]()),tA&&tA($)),(dg||!Y)&&(KI&&dg&&vA($,KI),tB[Ng]&&vA($,tB[Ng]),JC&&(PI===1?$.kill(!1,1):tB[Ng]=0),dg||(Ng=PI===1?1:3,tB[Ng]&&vA($,tB[Ng]))),EB&&!vC&&Math.abs($.getVelocity())>(BA(EB)?EB:2500)&&(CA($.callbackAnimation),OI?OI.progress(1):CA(f,Dg==="reverse"?1:!PI,1))):fC&&tA&&!p&&tA($)}if(fo){var ZC=pI?dI/pI.duration()*(pI._caScrollDist||0):dI;xa(ZC+(aA._isFlipped?1:0)),fo(ZC)}qo&&qo(-dI/pI.duration()*(pI._caScrollDist||0))}},$.enable=function(xA,fI){$.enabled||($.enabled=!0,GC(MI,"resize",Tt),nC||GC(MI,"scroll",Fo),rC&&GC(z,"refreshInit",rC),xA!==!1&&($.progress=eB=0,sB=rQ=CQ=gC()),fI!==!1&&$.refresh())},$.getTween=function(xA){return xA&&aB?aB.tween:OI},$.setPositions=function(xA,fI,rI,dI){if(pI){var MC=pI.scrollTrigger,PI=pI.duration(),Wg=MC.end-MC.start;xA=MC.start+Wg*xA/PI,fI=MC.start+Wg*fI/PI}$.refresh(!1,!1,{start:Cg(xA,rI&&!!$._startClamp),end:Cg(fI,rI&&!!$._endClamp)},dI),$.update()},$.adjustPinSpacing=function(xA){if(BC&&xA){var fI=BC.indexOf(oI.d)+1;BC[fI]=parseFloat(BC[fI])+xA+Yg,BC[1]=parseFloat(BC[1])+xA+Yg,Ro(BC)}},$.disable=function(xA,fI){if($.enabled&&(xA!==!1&&$.revert(!0,!0),$.enabled=$.isActive=!1,fI||OI&&OI.pause(),lQ=0,OC&&(OC.uncache=1),rC&&yC(z,"refreshInit",rC),cQ&&(cQ.pause(),aB.tween&&aB.tween.kill()&&(aB.tween=0)),!nC)){for(var rI=xI.length;rI--;)if(xI[rI].scroller===MI&&xI[rI]!==$)return;yC(MI,"resize",Tt),nC||yC(MI,"scroll",Fo)}},$.kill=function(xA,fI){$.disable(xA,fI),OI&&!fI&&OI.kill(),OA&&delete nr[OA];var rI=xI.indexOf($);rI>=0&&xI.splice(rI,1),rI===cA&&Ya>0&&cA--,rI=0,xI.forEach(function(dI){return dI.scroller===$.scroller&&(rI=1)}),rI||iB||($.scroll.rec=0),f&&(f.scrollTrigger=null,xA&&f.revert({kill:!1}),fI||f.kill()),UB&&[UB,LB,aA,mB].forEach(function(dI){return dI.parentNode&&dI.parentNode.removeChild(dI)}),bt===$&&(bt=0),kA&&(OC&&(OC.uncache=1),rI=0,xI.forEach(function(dI){return dI.pin===kA&&rI++}),rI||(OC.spacer=0)),d.onKill&&d.onKill($)},xI.push($),$.enable(!1,!1),Bi&&Bi($),f&&f.add&&!CC){var Ig=$.update;$.update=function(){$.update=Ig,$I||Zg||$.refresh()},nA.delayedCall(.01,$.update),CC=.01,$I=Zg=0}else $.refresh();kA&&hM()},z.register=function(d){return VA||(nA=d||wE(),Na()&&window.document&&z.enable(),VA=bI),VA},z.defaults=function(d){if(d)for(var f in d)Ra[f]=d[f];return Ra},z.disable=function(d,f){bI=0,xI.forEach(function(tA){return tA[f?"kill":"disable"](d)}),yC(YA,"wheel",Fo),yC(HA,"scroll",Fo),clearInterval(J),yC(HA,"touchcancel",lg),yC(SA,"touchstart",lg),Fa(yC,HA,"pointerdown,touchstart,mousedown",ZI),Fa(yC,HA,"pointerup,touchend,mouseup",kg),NA.kill(),po(yC);for(var Z=0;Z<M.length;Z+=3)da(yC,M[Z],M[Z+1]),da(yC,M[Z],M[Z+2])},z.enable=function(){if(YA=window,HA=document,L=HA.documentElement,SA=HA.body,nA&&(DA=nA.utils.toArray,AI=nA.utils.clamp,_A=nA.core.context||lg,EI=nA.core.suppressOverwrites||lg,NI=YA.history.scrollRestoration||"auto",hr=YA.pageYOffset,nA.core.globals("ScrollTrigger",z),SA)){bI=1,m=document.createElement("div"),m.style.height="100vh",m.style.position="absolute",ll(),tC(),qA.register(nA),z.isTouch=qA.isTouch,zA=qA.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),TI=qA.isTouch===1,GC(YA,"wheel",Fo),rA=[YA,HA,L,SA],nA.matchMedia?(z.matchMedia=function(OA){var KI=nA.matchMedia(),og;for(og in OA)KI.add(og,OA[og]);return KI},nA.addEventListener("matchMediaInit",function(){return Dr()}),nA.addEventListener("matchMediaRevert",function(){return Dl()}),nA.addEventListener("matchMedia",function(){ME(0,1),yE("matchMedia")}),nA.matchMedia("(orientation: portrait)",function(){return rr(),rr})):console.warn("Requires GSAP 3.11.0 or later"),rr(),GC(HA,"scroll",Fo);var d=SA.style,f=d.borderTopStyle,Z=nA.core.Animation.prototype,tA,gA;for(Z.revert||Object.defineProperty(Z,"revert",{value:function(){return this.time(-.01,!0)}}),d.borderTopStyle="solid",tA=RC(SA),AA.m=Math.round(tA.top+AA.sc())||0,IA.m=Math.round(tA.left+IA.sc())||0,f?d.borderTopStyle=f:d.removeProperty("border-top-style"),J=setInterval(nl,250),nA.delayedCall(.5,function(){return UA=0}),GC(HA,"touchcancel",lg),GC(SA,"touchstart",lg),Fa(GC,HA,"pointerdown,touchstart,mousedown",ZI),Fa(GC,HA,"pointerup,touchend,mouseup",kg),MA=nA.utils.checkPrefix("transform"),La.push(MA),VA=wA(),NA=nA.delayedCall(.2,ME).pause(),uA=[HA,"visibilitychange",function(){var OA=YA.innerWidth,KI=YA.innerHeight;HA.hidden?(yA=OA,jA=KI):(yA!==OA||jA!==KI)&&Tt()},HA,"DOMContentLoaded",ME,YA,"load",ME,YA,"resize",Tt],po(GC),xI.forEach(function(OA){return OA.enable(0,1)}),gA=0;gA<M.length;gA+=3)da(yC,M[gA],M[gA+1]),da(yC,M[gA],M[gA+2])}},z.config=function(d){"limitCallbacks"in d&&(Y=!!d.limitCallbacks);var f=d.syncInterval;f&&clearInterval(J)||(J=f)&&setInterval(nl,f),"ignoreMobileResize"in d&&(TI=z.isTouch===1&&d.ignoreMobileResize),"autoRefreshEvents"in d&&(po(yC)||po(GC,d.autoRefreshEvents||"none"),yI=(d.autoRefreshEvents+"").indexOf("resize")===-1)},z.scrollerProxy=function(d,f){var Z=oA(d),tA=M.indexOf(Z),gA=RQ(Z);~tA&&M.splice(tA,gA?6:2),f&&(gA?U.unshift(YA,f,SA,f,L,f):U.unshift(Z,f))},z.clearMatchMedia=function(d){xI.forEach(function(f){return f._ctx&&f._ctx.query===d&&f._ctx.kill(!0,!0)})},z.isInViewport=function(d,f,Z){var tA=(R(d)?oA(d):d).getBoundingClientRect(),gA=tA[Z?cI:Qg]*f||0;return Z?tA.right-gA>0&&tA.left+gA<YA.innerWidth:tA.bottom-gA>0&&tA.top+gA<YA.innerHeight},z.positionInViewport=function(d,f,Z){R(d)&&(d=oA(d));var tA=d.getBoundingClientRect(),gA=tA[Z?cI:Qg],OA=f==null?gA/2:f in Ja?Ja[f]*gA:~f.indexOf("%")?parseFloat(f)*gA/100:parseFloat(f)||0;return Z?(tA.left+OA)/YA.innerWidth:(tA.top+OA)/YA.innerHeight},z.killAll=function(d){if(xI.slice(0).forEach(function(Z){return Z.vars.id!=="ScrollSmoother"&&Z.kill()}),d!==!0){var f=GE.killAll||[];GE={},f.forEach(function(Z){return Z()})}},z}();_I.version="3.12.5",_I.saveStyles=function(z){return z?DA(z).forEach(function(F){if(F&&F.style){var b=YB.indexOf(F);b>=0&&YB.splice(b,5),YB.push(F,F.style.cssText,F.getBBox&&F.getAttribute("transform"),nA.core.getCache(F),_A())}}):YB},_I.revert=function(z,F){return Dr(!z,F)},_I.create=function(z,F){return new _I(z,F)},_I.refresh=function(z){return z?Tt():(VA||_I.register())&&ME(!0)},_I.update=function(z){return++M.cache&&$Q(z===!0?2:0)},_I.clearScrollMemory=hl,_I.maxScroll=function(z,F){return IQ(z,F?IA:AA)},_I.getScrollFunc=function(z,F){return sA(oA(z),F?IA:AA)},_I.getById=function(z){return nr[z]},_I.getAll=function(){return xI.filter(function(z){return z.vars.id!=="ScrollSmoother"})},_I.isScrolling=function(){return!!XA},_I.snapDirectional=mt,_I.addEventListener=function(z,F){var b=GE[z]||(GE[z]=[]);~b.indexOf(F)||b.push(F)},_I.removeEventListener=function(z,F){var b=GE[z],d=b&&b.indexOf(F);d>=0&&b.splice(d,1)},_I.batch=function(z,F){var b=[],d={},f=F.interval||.016,Z=F.batchMax||1e9,tA=function(KI,og){var XI=[],aI=[],kA=nA.delayedCall(f,function(){og(XI,aI),XI=[],aI=[]}).pause();return function(nI){XI.length||kA.restart(!0),XI.push(nI.trigger),aI.push(nI),Z<=XI.length&&kA.progress(1)}},gA;for(gA in F)d[gA]=gA.substr(0,2)==="on"&&W(F[gA])&&gA!=="onRefreshInit"?tA(gA,F[gA]):F[gA];return W(Z)&&(Z=Z(),GC(_I,"refresh",function(){return Z=F.batchMax()})),DA(z).forEach(function(OA){var KI={};for(gA in d)KI[gA]=d[gA];KI.trigger=OA,b.push(_I.create(KI))}),b};var Ml=function(F,b,d,f){return b>f?F(f):b<0&&F(0),d>f?(f-b)/(d-b):d<0?b/(b-d):1},wr=function z(F,b){b===!0?F.style.removeProperty("touch-action"):F.style.touchAction=b===!0?"auto":b?"pan-"+b+(qA.isTouch?" pinch-zoom":""):"none",F===L&&z(SA,b)},ba={auto:1,scroll:1},GM=function(F){var b=F.event,d=F.target,f=F.axis,Z=(b.changedTouches?b.changedTouches[0]:b).target,tA=Z._gsap||nA.core.getCache(Z),gA=wA(),OA;if(!tA._isScrollT||gA-tA._isScrollT>2e3){for(;Z&&Z!==SA&&(Z.scrollHeight<=Z.clientHeight&&Z.scrollWidth<=Z.clientWidth||!(ba[(OA=SC(Z)).overflowY]||ba[OA.overflowX]));)Z=Z.parentNode;tA._isScroll=Z&&Z!==d&&!RQ(Z)&&(ba[(OA=SC(Z)).overflowY]||ba[OA.overflowX]),tA._isScrollT=gA}(tA._isScroll||f==="x")&&(b.stopPropagation(),b._gsapAllow=!0)},Ul=function(F,b,d,f){return qA.create({target:F,capture:!0,debounce:!1,lockAxis:!0,type:b,onWheel:f=f&&GM,onPress:f,onDrag:f,onScroll:f,onEnable:function(){return d&&GC(HA,qA.eventTypes[0],Kl,!1,!0)},onDisable:function(){return yC(HA,qA.eventTypes[0],Kl,!0)}})},yM=/(input|label|select|textarea)/i,Nl,Kl=function(F){var b=yM.test(F.target.tagName);(b||Nl)&&(F._gsapAllow=!0,Nl=b)},kM=function(F){iA(F)||(F={}),F.preventDefault=F.isNormalizer=F.allowClicks=!0,F.type||(F.type="wheel,touch"),F.debounce=!!F.debounce,F.id=F.id||"normalizer";var b=F,d=b.normalizeScrollX,f=b.momentum,Z=b.allowNestedScroll,tA=b.onRelease,gA,OA,KI=oA(F.target)||L,og=nA.core.globals().ScrollSmoother,XI=og&&og.get(),aI=zA&&(F.content&&oA(F.content)||XI&&F.content!==!1&&!XI.smooth()&&XI.content()),kA=sA(KI,AA),nI=sA(KI,IA),Lg=1,wg=(qA.isTouch&&YA.visualViewport?YA.visualViewport.scale*YA.visualViewport.width:YA.outerWidth)/YA.innerWidth,sC=0,Fg=W(f)?function(){return f(gA)}:function(){return f||2.8},JC,qI,gQ=Ul(KI,F.type,!0,Z),Ug=function(){return qI=!1},pI=lg,EB=lg,MB=function(){OA=IQ(KI,AA),EB=AI(zA?1:0,OA),d&&(pI=AI(0,IQ(KI,IA))),JC=kE},oI=function(){aI._gsap.y=Ji(parseFloat(aI._gsap.y)+kA.offset)+"px",aI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(aI._gsap.y)+", 0, 1)",kA.offset=kA.cacheID=0},fC=function(){if(qI){requestAnimationFrame(Ug);var AC=Ji(gA.deltaY/2),IC=EB(kA.v-AC);if(aI&&IC!==kA.v+kA.offset){kA.offset=IC-kA.v;var $=Ji((parseFloat(aI&&aI._gsap.y)||0)-kA.offset);aI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+$+", 0, 1)",aI._gsap.y=$+"px",kA.cacheID=M.cache,$Q()}return!0}kA.offset&&oI(),qI=!0},MI,Ai,nC,oB,tB=function(){MB(),MI.isActive()&&MI.vars.scrollY>OA&&(kA()>OA?MI.progress(1)&&kA(OA):MI.resetTo("scrollY",OA))};return aI&&nA.set(aI,{y:"+=0"}),F.ignoreCheck=function(rg){return zA&&rg.type==="touchmove"&&fC()||Lg>1.05&&rg.type!=="touchstart"||gA.isGesturing||rg.touches&&rg.touches.length>1},F.onPress=function(){qI=!1;var rg=Lg;Lg=Ji((YA.visualViewport&&YA.visualViewport.scale||1)/wg),MI.pause(),rg!==Lg&&wr(KI,Lg>1.01?!0:d?!1:"x"),Ai=nI(),nC=kA(),MB(),JC=kE},F.onRelease=F.onGestureStart=function(rg,AC){if(kA.offset&&oI(),!AC)oB.restart(!0);else{M.cache++;var IC=Fg(),$,rC;d&&($=nI(),rC=$+IC*.05*-rg.velocityX/.227,IC*=Ml(nI,$,rC,IQ(KI,IA)),MI.vars.scrollX=pI(rC)),$=kA(),rC=$+IC*.05*-rg.velocityY/.227,IC*=Ml(kA,$,rC,IQ(KI,AA)),MI.vars.scrollY=EB(rC),MI.invalidate().duration(IC).play(.01),(zA&&MI.vars.scrollY>=OA||$>=OA-1)&&nA.to({},{onUpdate:tB,duration:IC})}tA&&tA(rg)},F.onWheel=function(){MI._ts&&MI.pause(),wA()-sC>1e3&&(JC=0,sC=wA())},F.onChange=function(rg,AC,IC,$,rC){if(kE!==JC&&MB(),AC&&d&&nI(pI($[2]===AC?Ai+(rg.startX-rg.x):nI()+AC-$[1])),IC){kA.offset&&oI();var UE=rC[2]===IC,ui=UE?nC+rg.startY-rg.y:kA()+IC-rC[1],CQ=EB(ui);UE&&ui!==CQ&&(nC+=CQ-ui),kA(CQ)}(IC||AC)&&$Q()},F.onEnable=function(){wr(KI,d?!1:"x"),_I.addEventListener("refresh",tB),GC(YA,"resize",tB),kA.smooth&&(kA.target.style.scrollBehavior="auto",kA.smooth=nI.smooth=!1),gQ.enable()},F.onDisable=function(){wr(KI,!0),yC(YA,"resize",tB),_I.removeEventListener("refresh",tB),gQ.kill()},F.lockAxis=F.lockAxis!==!1,gA=new qA(F),gA.iOS=zA,zA&&!kA()&&kA(1),zA&&nA.ticker.add(lg),oB=gA._dc,MI=nA.to(gA,{ease:"power4",paused:!0,inherit:!1,scrollX:d?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yl(kA,kA(),function(){return MI.pause()})},onUpdate:$Q,onComplete:oB.vars.onComplete}),gA};_I.sort=function(z){return xI.sort(z||function(F,b){return(F.vars.refreshPriority||0)*-1e6+F.start-(b.start+(b.vars.refreshPriority||0)*-1e6)})},_I.observe=function(z){return new qA(z)},_I.normalizeScroll=function(z){if(typeof z>"u")return lA;if(z===!0&&lA)return lA.enable();if(z===!1){lA&&lA.kill(),lA=z;return}var F=z instanceof qA?z:kM(z);return lA&&lA.target===F.target&&lA.kill(),RQ(F.target)&&(lA=F),F},_I.core={_getVelocityProp:JA,_inputObserver:Ul,_scrollers:M,_proxies:U,bridge:{ss:function(){XA||yE("scrollStart"),XA=wA()},ref:function(){return p}}},wE()&&nA.registerPlugin(_I),I.ScrollTrigger=_I,I.default=_I,typeof window>"u"||window!==I?Object.defineProperty(I,"__esModule",{value:!0}):delete window.default})})(SD,SD.exports);var iG=SD.exports,GD={exports:{}};(function(Q,A){(function(I,g){g(A)})(QG,function(I){/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var g,C,B,i,E,o,t,e,a=function(){return typeof window<"u"},s=function(){return g||a()&&(g=window.gsap)&&g.registerPlugin&&g},n=function(k){return typeof k=="string"},D=function(k){return typeof k=="function"},c=function(k,K){var q=K==="x"?"Width":"Height",y="scroll"+q,N="client"+q;return k===B||k===i||k===E?Math.max(i[y],E[y])-(B["inner"+q]||i[N]||E[N]):k[y]-k["offset"+q]},h=function(k,K){var q="scroll"+(K==="x"?"Left":"Top");return k===B&&(k.pageXOffset!=null?q="page"+K.toUpperCase()+"Offset":k=i[q]!=null?i:E),function(){return k[q]}},r=function(k,K,q,y){if(D(k)&&(k=k(K,q,y)),typeof k!="object")return n(k)&&k!=="max"&&k.charAt(1)!=="="?{x:k,y:k}:{y:k};if(k.nodeType)return{y:k,x:k};var N={},T;for(T in k)N[T]=T!=="onAutoKill"&&D(k[T])?k[T](K,q,y):k[T];return N},S=function(k,K){if(k=o(k)[0],!k||!k.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var q=k.getBoundingClientRect(),y=!K||K===B||K===E,N=y?{top:i.clientTop-(B.pageYOffset||i.scrollTop||E.scrollTop||0),left:i.clientLeft-(B.pageXOffset||i.scrollLeft||E.scrollLeft||0)}:K.getBoundingClientRect(),T={x:q.left-N.left,y:q.top-N.top};return!y&&K&&(T.x+=h(K,"x")(),T.y+=h(K,"y")()),T},l=function(k,K,q,y,N){return!isNaN(k)&&typeof k!="object"?parseFloat(k)-N:n(k)&&k.charAt(1)==="="?parseFloat(k.substr(2))*(k.charAt(0)==="-"?-1:1)+y-N:k==="max"?c(K,q)-N:Math.min(c(K,q),S(k,K)[q]-N)},G=function(){g=s(),a()&&g&&typeof document<"u"&&document.body&&(B=window,E=document.body,i=document.documentElement,o=g.utils.toArray,g.config({autoKillThreshold:7}),t=g.config(),C=1)},M={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(k){g=k,G()},init:function(k,K,q,y,N){C||G();var T=this,O=g.getProperty(k,"scrollSnapType");T.isWin=k===B,T.target=k,T.tween=q,K=r(K,y,k,N),T.vars=K,T.autoKill=!!K.autoKill,T.getX=h(k,"x"),T.getY=h(k,"y"),T.x=T.xPrev=T.getX(),T.y=T.yPrev=T.getY(),e||(e=g.core.globals().ScrollTrigger),g.getProperty(k,"scrollBehavior")==="smooth"&&g.set(k,{scrollBehavior:"auto"}),O&&O!=="none"&&(T.snap=1,T.snapInline=k.style.scrollSnapType,k.style.scrollSnapType="none"),K.x!=null?(T.add(T,"x",T.x,l(K.x,k,"x",T.x,K.offsetX||0),y,N),T._props.push("scrollTo_x")):T.skipX=1,K.y!=null?(T.add(T,"y",T.y,l(K.y,k,"y",T.y,K.offsetY||0),y,N),T._props.push("scrollTo_y")):T.skipY=1},render:function(k,K){for(var q=K._pt,y=K.target,N=K.tween,T=K.autoKill,O=K.xPrev,H=K.yPrev,V=K.isWin,_=K.snap,j=K.snapInline,IA,AA,oA,sA,JA;q;)q.r(k,q.d),q=q._next;IA=V||!K.skipX?K.getX():O,AA=V||!K.skipY?K.getY():H,oA=AA-H,sA=IA-O,JA=t.autoKillThreshold,K.x<0&&(K.x=0),K.y<0&&(K.y=0),T&&(!K.skipX&&(sA>JA||sA<-JA)&&IA<c(y,"x")&&(K.skipX=1),!K.skipY&&(oA>JA||oA<-JA)&&AA<c(y,"y")&&(K.skipY=1),K.skipX&&K.skipY&&(N.kill(),K.vars.onAutoKill&&K.vars.onAutoKill.apply(N,K.vars.onAutoKillParams||[]))),V?B.scrollTo(K.skipX?IA:K.x,K.skipY?AA:K.y):(K.skipY||(y.scrollTop=K.y),K.skipX||(y.scrollLeft=K.x)),_&&(k===1||k===0)&&(AA=y.scrollTop,IA=y.scrollLeft,j?y.style.scrollSnapType=j:y.style.removeProperty("scroll-snap-type"),y.scrollTop=AA+1,y.scrollLeft=IA+1,y.scrollTop=AA,y.scrollLeft=IA),K.xPrev=K.x,K.yPrev=K.y,e&&e.update()},kill:function(k){var K=k==="scrollTo",q=this._props.indexOf(k);return(K||k==="scrollTo_x")&&(this.skipX=1),(K||k==="scrollTo_y")&&(this.skipY=1),q>-1&&this._props.splice(q,1),!this._props.length}};M.max=c,M.getOffset=S,M.buildGetter=h,s()&&g.registerPlugin(M),I.ScrollToPlugin=M,I.default=M,Object.defineProperty(I,"__esModule",{value:!0})})})(GD,GD.exports);var dM=GD.exports;function ai(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function EG(Q,A){Q.prototype=Object.create(A.prototype),Q.prototype.constructor=Q,Q.__proto__=A}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jB={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ht={duration:.5,overwrite:!1,delay:0},Yh,AB,pg,tQ=1e8,Gg=1/tQ,yD=Math.PI*2,RM=yD/4,JM=0,oG=Math.sqrt,fM=Math.cos,uM=Math.sin,dC=function(A){return typeof A=="string"},_g=function(A){return typeof A=="function"},Mi=function(A){return typeof A=="number"},Lh=function(A){return typeof A>"u"},VQ=function(A){return typeof A=="object"},pB=function(A){return A!==!1},mh=function(){return typeof window<"u"},va=function(A){return _g(A)||dC(A)},tG=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},IB=Array.isArray,kD=/(?:-?\.?\d|\.)+/gi,eG=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kr=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,aG=/[+-]=-?[.\d]+/,sG=/[^,'"\[\]\s]+/gi,qM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jg,LQ,MD,Hh,$B={},Xs={},nG,rG=function(A){return(Xs=no(A,$B))&&uB},Th=function(A,I){return console.warn("Invalid property",A,"set to",I,"Missing plugin? gsap.registerPlugin()")},Me=function(A,I){return!I&&console.warn(A)},DG=function(A,I){return A&&($B[A]=I)&&Xs&&(Xs[A]=I)||$B},Ue=function(){return 0},YM={suppressEvents:!0,isStart:!0,kill:!1},Ts={suppressEvents:!0,kill:!1},LM={suppressEvents:!0},bh={},CE=[],UD={},hG,_B={},Mr={},Fl=30,bs=[],xh="",_h=function(A){var I=A[0],g,C;if(VQ(I)||_g(I)||(A=[A]),!(g=(I._gsap||{}).harness)){for(C=bs.length;C--&&!bs[C].targetTest(I););g=bs[C]}for(C=A.length;C--;)A[C]&&(A[C]._gsap||(A[C]._gsap=new TG(A[C],g)))||A.splice(C,1);return A},Bo=function(A){return A._gsap||_h(eQ(A))[0]._gsap},cG=function(A,I,g){return(g=A[I])&&_g(g)?A[I]():Lh(g)&&A.getAttribute&&A.getAttribute(I)||g},FB=function(A,I){return(A=A.split(",")).forEach(I)||A},Xg=function(A){return Math.round(A*1e5)/1e5||0},KC=function(A){return Math.round(A*1e7)/1e7||0},at=function(A,I){var g=I.charAt(0),C=parseFloat(I.substr(2));return A=parseFloat(A),g==="+"?A+C:g==="-"?A-C:g==="*"?A*C:A/C},mM=function(A,I){for(var g=I.length,C=0;A.indexOf(I[C])<0&&++C<g;);return C<g},zs=function(){var A=CE.length,I=CE.slice(0),g,C;for(UD={},CE.length=0,g=0;g<A;g++)C=I[g],C&&C._lazy&&(C.render(C._lazy[0],C._lazy[1],!0)._lazy=0)},lG=function(A,I,g,C){CE.length&&!AB&&zs(),A.render(I,g,C||AB&&I<0&&(A._initted||A._startAt)),CE.length&&!AB&&zs()},wG=function(A){var I=parseFloat(A);return(I||I===0)&&(A+"").match(sG).length<2?I:dC(A)?A.trim():A},SG=function(A){return A},sQ=function(A,I){for(var g in I)g in A||(A[g]=I[g]);return A},HM=function(A){return function(I,g){for(var C in g)C in I||C==="duration"&&A||C==="ease"||(I[C]=g[C])}},no=function(A,I){for(var g in I)A[g]=I[g];return A},dl=function Q(A,I){for(var g in I)g!=="__proto__"&&g!=="constructor"&&g!=="prototype"&&(A[g]=VQ(I[g])?Q(A[g]||(A[g]={}),I[g]):I[g]);return A},$s=function(A,I){var g={},C;for(C in A)C in I||(g[C]=A[C]);return g},he=function(A){var I=A.parent||Jg,g=A.keyframes?HM(IB(A.keyframes)):sQ;if(pB(A.inherit))for(;I;)g(A,I.vars.defaults),I=I.parent||I._dp;return A},TM=function(A,I){for(var g=A.length,C=g===I.length;C&&g--&&A[g]===I[g];);return g<0},GG=function(A,I,g,C,B){g===void 0&&(g="_first"),C===void 0&&(C="_last");var i=A[C],E;if(B)for(E=I[B];i&&i[B]>E;)i=i._prev;return i?(I._next=i._next,i._next=I):(I._next=A[g],A[g]=I),I._next?I._next._prev=I:A[C]=I,I._prev=i,I.parent=I._dp=A,I},kn=function(A,I,g,C){g===void 0&&(g="_first"),C===void 0&&(C="_last");var B=I._prev,i=I._next;B?B._next=i:A[g]===I&&(A[g]=i),i?i._prev=B:A[C]===I&&(A[C]=B),I._next=I._prev=I.parent=null},oE=function(A,I){A.parent&&(!I||A.parent.autoRemoveChildren)&&A.parent.remove&&A.parent.remove(A),A._act=0},Qo=function(A,I){if(A&&(!I||I._end>A._dur||I._start<0))for(var g=A;g;)g._dirty=1,g=g.parent;return A},bM=function(A){for(var I=A.parent;I&&I.parent;)I._dirty=1,I.totalDuration(),I=I.parent;return A},ND=function(A,I,g,C){return A._startAt&&(AB?A._startAt.revert(Ts):A.vars.immediateRender&&!A.vars.autoRevert||A._startAt.render(I,!0,C))},xM=function Q(A){return!A||A._ts&&Q(A.parent)},Rl=function(A){return A._repeat?ct(A._tTime,A=A.duration()+A._rDelay)*A:0},ct=function(A,I){var g=Math.floor(A/=I);return A&&g===A?g-1:g},An=function(A,I){return(A-I._start)*I._ts+(I._ts>=0?0:I._dirty?I.totalDuration():I._tDur)},Mn=function(A){return A._end=KC(A._start+(A._tDur/Math.abs(A._ts||A._rts||Gg)||0))},Un=function(A,I){var g=A._dp;return g&&g.smoothChildTiming&&A._ts&&(A._start=KC(g._time-(A._ts>0?I/A._ts:((A._dirty?A.totalDuration():A._tDur)-I)/-A._ts)),Mn(A),g._dirty||Qo(g,A)),A},yG=function(A,I){var g;if((I._time||!I._dur&&I._initted||I._start<A._time&&(I._dur||!I.add))&&(g=An(A.rawTime(),I),(!I._dur||Ea(0,I.totalDuration(),g)-I._tTime>Gg)&&I.render(g,!0)),Qo(A,I)._dp&&A._initted&&A._time>=A._dur&&A._ts){if(A._dur<A.duration())for(g=A;g._dp;)g.rawTime()>=0&&g.totalTime(g._tTime),g=g._dp;A._zTime=-Gg}},HQ=function(A,I,g,C){return I.parent&&oE(I),I._start=KC((Mi(g)?g:g||A!==Jg?iQ(A,g,I):A._time)+I._delay),I._end=KC(I._start+(I.totalDuration()/Math.abs(I.timeScale())||0)),GG(A,I,"_first","_last",A._sort?"_start":0),KD(I)||(A._recent=I),C||yG(A,I),A._ts<0&&Un(A,A._tTime),A},kG=function(A,I){return($B.ScrollTrigger||Th("scrollTrigger",I))&&$B.ScrollTrigger.create(I,A)},MG=function(A,I,g,C,B){if(vh(A,I,B),!A._initted)return 1;if(!g&&A._pt&&!AB&&(A._dur&&A.vars.lazy!==!1||!A._dur&&A.vars.lazy)&&hG!==OB.frame)return CE.push(A),A._lazy=[B,C],1},_M=function Q(A){var I=A.parent;return I&&I._ts&&I._initted&&!I._lock&&(I.rawTime()<0||Q(I))},KD=function(A){var I=A.data;return I==="isFromStart"||I==="isStart"},OM=function(A,I,g,C){var B=A.ratio,i=I<0||!I&&(!A._start&&_M(A)&&!(!A._initted&&KD(A))||(A._ts<0||A._dp._ts<0)&&!KD(A))?0:1,E=A._rDelay,o=0,t,e,a;if(E&&A._repeat&&(o=Ea(0,A._tDur,I),e=ct(o,E),A._yoyo&&e&1&&(i=1-i),e!==ct(A._tTime,E)&&(B=1-i,A.vars.repeatRefresh&&A._initted&&A.invalidate())),i!==B||AB||C||A._zTime===Gg||!I&&A._zTime){if(!A._initted&&MG(A,I,C,g,o))return;for(a=A._zTime,A._zTime=I||(g?Gg:0),g||(g=I&&!a),A.ratio=i,A._from&&(i=1-i),A._time=0,A._tTime=o,t=A._pt;t;)t.r(i,t.d),t=t._next;I<0&&ND(A,I,g,!0),A._onUpdate&&!g&&PB(A,"onUpdate"),o&&A._repeat&&!g&&A.parent&&PB(A,"onRepeat"),(I>=A._tDur||I<0)&&A.ratio===i&&(i&&oE(A,1),!g&&!AB&&(PB(A,i?"onComplete":"onReverseComplete",!0),A._prom&&A._prom()))}else A._zTime||(A._zTime=I)},vM=function(A,I,g){var C;if(g>I)for(C=A._first;C&&C._start<=g;){if(C.data==="isPause"&&C._start>I)return C;C=C._next}else for(C=A._last;C&&C._start>=g;){if(C.data==="isPause"&&C._start<I)return C;C=C._prev}},lt=function(A,I,g,C){var B=A._repeat,i=KC(I)||0,E=A._tTime/A._tDur;return E&&!C&&(A._time*=i/A._dur),A._dur=i,A._tDur=B?B<0?1e10:KC(i*(B+1)+A._rDelay*B):i,E>0&&!C&&Un(A,A._tTime=A._tDur*E),A.parent&&Mn(A),g||Qo(A.parent,A),A},Jl=function(A){return A instanceof cB?Qo(A):lt(A,A._dur)},ZM={_start:0,endTime:Ue,totalDuration:Ue},iQ=function Q(A,I,g){var C=A.labels,B=A._recent||ZM,i=A.duration()>=tQ?B.endTime(!1):A._dur,E,o,t;return dC(I)&&(isNaN(I)||I in C)?(o=I.charAt(0),t=I.substr(-1)==="%",E=I.indexOf("="),o==="<"||o===">"?(E>=0&&(I=I.replace(/=/,"")),(o==="<"?B._start:B.endTime(B._repeat>=0))+(parseFloat(I.substr(1))||0)*(t?(E<0?B:g).totalDuration()/100:1)):E<0?(I in C||(C[I]=i),C[I]):(o=parseFloat(I.charAt(E-1)+I.substr(E+1)),t&&g&&(o=o/100*(IB(g)?g[0]:g).totalDuration()),E>1?Q(A,I.substr(0,E-1),g)+o:i+o)):I==null?i:+I},ce=function(A,I,g){var C=Mi(I[1]),B=(C?2:1)+(A<2?0:1),i=I[B],E,o;if(C&&(i.duration=I[1]),i.parent=g,A){for(E=i,o=g;o&&!("immediateRender"in E);)E=o.vars.defaults||{},o=pB(o.vars.inherit)&&o.parent;i.immediateRender=pB(E.immediateRender),A<2?i.runBackwards=1:i.startAt=I[B-1]}return new EC(I[0],i,I[B+1])},rE=function(A,I){return A||A===0?I(A):I},Ea=function(A,I,g){return g<A?A:g>I?I:g},XC=function(A,I){return!dC(A)||!(I=qM.exec(A))?"":I[1]},PM=function(A,I,g){return rE(g,function(C){return Ea(A,I,C)})},pD=[].slice,UG=function(A,I){return A&&VQ(A)&&"length"in A&&(!I&&!A.length||A.length-1 in A&&VQ(A[0]))&&!A.nodeType&&A!==LQ},WM=function(A,I,g){return g===void 0&&(g=[]),A.forEach(function(C){var B;return dC(C)&&!I||UG(C,1)?(B=g).push.apply(B,eQ(C)):g.push(C)})||g},eQ=function(A,I,g){return pg&&!I&&pg.selector?pg.selector(A):dC(A)&&!g&&(MD||!wt())?pD.call((I||Hh).querySelectorAll(A),0):IB(A)?WM(A,g):UG(A)?pD.call(A,0):A?[A]:[]},FD=function(A){return A=eQ(A)[0]||Me("Invalid scope")||{},function(I){var g=A.current||A.nativeElement||A;return eQ(I,g.querySelectorAll?g:g===A?Me("Invalid scope")||Hh.createElement("div"):A)}},NG=function(A){return A.sort(function(){return .5-Math.random()})},KG=function(A){if(_g(A))return A;var I=VQ(A)?A:{each:A},g=io(I.ease),C=I.from||0,B=parseFloat(I.base)||0,i={},E=C>0&&C<1,o=isNaN(C)||E,t=I.axis,e=C,a=C;return dC(C)?e=a={center:.5,edges:.5,end:1}[C]||0:!E&&o&&(e=C[0],a=C[1]),function(s,n,D){var c=(D||I).length,h=i[c],r,S,l,G,M,U,k,K,q;if(!h){if(q=I.grid==="auto"?0:(I.grid||[1,tQ])[1],!q){for(k=-tQ;k<(k=D[q++].getBoundingClientRect().left)&&q<c;);q<c&&q--}for(h=i[c]=[],r=o?Math.min(q,c)*e-.5:C%q,S=q===tQ?0:o?c*a/q-.5:C/q|0,k=0,K=tQ,U=0;U<c;U++)l=U%q-r,G=S-(U/q|0),h[U]=M=t?Math.abs(t==="y"?G:l):oG(l*l+G*G),M>k&&(k=M),M<K&&(K=M);C==="random"&&NG(h),h.max=k-K,h.min=K,h.v=c=(parseFloat(I.amount)||parseFloat(I.each)*(q>c?c-1:t?t==="y"?c/q:q:Math.max(q,c/q))||0)*(C==="edges"?-1:1),h.b=c<0?B-c:B,h.u=XC(I.amount||I.each)||0,g=g&&c<0?LG(g):g}return c=(h[s]-h.min)/h.max||0,KC(h.b+(g?g(c):c)*h.v)+h.u}},dD=function(A){var I=Math.pow(10,((A+"").split(".")[1]||"").length);return function(g){var C=KC(Math.round(parseFloat(g)/A)*A*I);return(C-C%1)/I+(Mi(g)?0:XC(g))}},pG=function(A,I){var g=IB(A),C,B;return!g&&VQ(A)&&(C=g=A.radius||tQ,A.values?(A=eQ(A.values),(B=!Mi(A[0]))&&(C*=C)):A=dD(A.increment)),rE(I,g?_g(A)?function(i){return B=A(i),Math.abs(B-i)<=C?B:i}:function(i){for(var E=parseFloat(B?i.x:i),o=parseFloat(B?i.y:0),t=tQ,e=0,a=A.length,s,n;a--;)B?(s=A[a].x-E,n=A[a].y-o,s=s*s+n*n):s=Math.abs(A[a]-E),s<t&&(t=s,e=a);return e=!C||t<=C?A[e]:i,B||e===i||Mi(i)?e:e+XC(i)}:dD(A))},FG=function(A,I,g,C){return rE(IB(A)?!I:g===!0?!!(g=0):!C,function(){return IB(A)?A[~~(Math.random()*A.length)]:(g=g||1e-5)&&(C=g<1?Math.pow(10,(g+"").length-2):1)&&Math.floor(Math.round((A-g/2+Math.random()*(I-A+g*.99))/g)*g*C)/C})},VM=function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];return function(C){return I.reduce(function(B,i){return i(B)},C)}},jM=function(A,I){return function(g){return A(parseFloat(g))+(I||XC(g))}},XM=function(A,I,g){return RG(A,I,0,1,g)},dG=function(A,I,g){return rE(g,function(C){return A[~~I(C)]})},zM=function Q(A,I,g){var C=I-A;return IB(A)?dG(A,Q(0,A.length),I):rE(g,function(B){return(C+(B-A)%C)%C+A})},$M=function Q(A,I,g){var C=I-A,B=C*2;return IB(A)?dG(A,Q(0,A.length-1),I):rE(g,function(i){return i=(B+(i-A)%B)%B||0,A+(i>C?B-i:i)})},Ne=function(A){for(var I=0,g="",C,B,i,E;~(C=A.indexOf("random(",I));)i=A.indexOf(")",C),E=A.charAt(C+7)==="[",B=A.substr(C+7,i-C-7).match(E?sG:kD),g+=A.substr(I,C-I)+FG(E?B:+B[0],E?0:+B[1],+B[2]||1e-5),I=i+1;return g+A.substr(I,A.length-I)},RG=function(A,I,g,C,B){var i=I-A,E=C-g;return rE(B,function(o){return g+((o-A)/i*E||0)})},AU=function Q(A,I,g,C){var B=isNaN(A+I)?0:function(n){return(1-n)*A+n*I};if(!B){var i=dC(A),E={},o,t,e,a,s;if(g===!0&&(C=1)&&(g=null),i)A={p:A},I={p:I};else if(IB(A)&&!IB(I)){for(e=[],a=A.length,s=a-2,t=1;t<a;t++)e.push(Q(A[t-1],A[t]));a--,B=function(D){D*=a;var c=Math.min(s,~~D);return e[c](D-c)},g=I}else C||(A=no(IB(A)?[]:{},A));if(!e){for(o in I)Oh.call(E,A,o,"get",I[o]);B=function(D){return Wh(D,E)||(i?A.p:A)}}}return rE(g,B)},fl=function(A,I,g){var C=A.labels,B=tQ,i,E,o;for(i in C)E=C[i]-I,E<0==!!g&&E&&B>(E=Math.abs(E))&&(o=i,B=E);return o},PB=function(A,I,g){var C=A.vars,B=C[I],i=pg,E=A._ctx,o,t,e;if(B)return o=C[I+"Params"],t=C.callbackScope||A,g&&CE.length&&zs(),E&&(pg=E),e=o?B.apply(t,o):B.call(t),pg=i,e},oe=function(A){return oE(A),A.scrollTrigger&&A.scrollTrigger.kill(!!AB),A.progress()<1&&PB(A,"onInterrupt"),A},it,JG=[],fG=function(A){if(A)if(A=!A.name&&A.default||A,mh()||A.headless){var I=A.name,g=_g(A),C=I&&!g&&A.init?function(){this._props=[]}:A,B={init:Ue,render:Wh,add:Oh,kill:hU,modifier:DU,rawVars:0},i={targetTest:0,get:0,getSetter:Ph,aliases:{},register:0};if(wt(),A!==C){if(_B[I])return;sQ(C,sQ($s(A,B),i)),no(C.prototype,no(B,$s(A,i))),_B[C.prop=I]=C,A.targetTest&&(bs.push(C),bh[I]=1),I=(I==="css"?"CSS":I.charAt(0).toUpperCase()+I.substr(1))+"Plugin"}DG(I,C),A.register&&A.register(uB,C,dB)}else JG.push(A)},hg=255,te={aqua:[0,hg,hg],lime:[0,hg,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,hg],navy:[0,0,128],white:[hg,hg,hg],olive:[128,128,0],yellow:[hg,hg,0],orange:[hg,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[hg,0,0],pink:[hg,192,203],cyan:[0,hg,hg],transparent:[hg,hg,hg,0]},Ur=function(A,I,g){return A+=A<0?1:A>1?-1:0,(A*6<1?I+(g-I)*A*6:A<.5?g:A*3<2?I+(g-I)*(2/3-A)*6:I)*hg+.5|0},uG=function(A,I,g){var C=A?Mi(A)?[A>>16,A>>8&hg,A&hg]:0:te.black,B,i,E,o,t,e,a,s,n,D;if(!C){if(A.substr(-1)===","&&(A=A.substr(0,A.length-1)),te[A])C=te[A];else if(A.charAt(0)==="#"){if(A.length<6&&(B=A.charAt(1),i=A.charAt(2),E=A.charAt(3),A="#"+B+B+i+i+E+E+(A.length===5?A.charAt(4)+A.charAt(4):"")),A.length===9)return C=parseInt(A.substr(1,6),16),[C>>16,C>>8&hg,C&hg,parseInt(A.substr(7),16)/255];A=parseInt(A.substr(1),16),C=[A>>16,A>>8&hg,A&hg]}else if(A.substr(0,3)==="hsl"){if(C=D=A.match(kD),!I)o=+C[0]%360/360,t=+C[1]/100,e=+C[2]/100,i=e<=.5?e*(t+1):e+t-e*t,B=e*2-i,C.length>3&&(C[3]*=1),C[0]=Ur(o+1/3,B,i),C[1]=Ur(o,B,i),C[2]=Ur(o-1/3,B,i);else if(~A.indexOf("="))return C=A.match(eG),g&&C.length<4&&(C[3]=1),C}else C=A.match(kD)||te.transparent;C=C.map(Number)}return I&&!D&&(B=C[0]/hg,i=C[1]/hg,E=C[2]/hg,a=Math.max(B,i,E),s=Math.min(B,i,E),e=(a+s)/2,a===s?o=t=0:(n=a-s,t=e>.5?n/(2-a-s):n/(a+s),o=a===B?(i-E)/n+(i<E?6:0):a===i?(E-B)/n+2:(B-i)/n+4,o*=60),C[0]=~~(o+.5),C[1]=~~(t*100+.5),C[2]=~~(e*100+.5)),g&&C.length<4&&(C[3]=1),C},qG=function(A){var I=[],g=[],C=-1;return A.split(BE).forEach(function(B){var i=B.match(Qt)||[];I.push.apply(I,i),g.push(C+=i.length+1)}),I.c=g,I},ul=function(A,I,g){var C="",B=(A+C).match(BE),i=I?"hsla(":"rgba(",E=0,o,t,e,a;if(!B)return A;if(B=B.map(function(s){return(s=uG(s,I,1))&&i+(I?s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:s.join(","))+")"}),g&&(e=qG(A),o=g.c,o.join(C)!==e.c.join(C)))for(t=A.replace(BE,"1").split(Qt),a=t.length-1;E<a;E++)C+=t[E]+(~o.indexOf(E)?B.shift()||i+"0,0,0,0)":(e.length?e:B.length?B:g).shift());if(!t)for(t=A.split(BE),a=t.length-1;E<a;E++)C+=t[E]+B[E];return C+t[a]},BE=function(){var Q="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",A;for(A in te)Q+="|"+A+"\\b";return new RegExp(Q+")","gi")}(),IU=/hsl[a]?\(/,YG=function(A){var I=A.join(" "),g;if(BE.lastIndex=0,BE.test(I))return g=IU.test(I),A[1]=ul(A[1],g),A[0]=ul(A[0],g,qG(A[1])),!0},Ke,OB=function(){var Q=Date.now,A=500,I=33,g=Q(),C=g,B=1e3/240,i=B,E=[],o,t,e,a,s,n,D=function c(h){var r=Q()-C,S=h===!0,l,G,M,U;if((r>A||r<0)&&(g+=r-I),C+=r,M=C-g,l=M-i,(l>0||S)&&(U=++a.frame,s=M-a.time*1e3,a.time=M=M/1e3,i+=l+(l>=B?4:B-l),G=1),S||(o=t(c)),G)for(n=0;n<E.length;n++)E[n](M,s,U,h)};return a={time:0,frame:0,tick:function(){D(!0)},deltaRatio:function(h){return s/(1e3/(h||60))},wake:function(){nG&&(!MD&&mh()&&(LQ=MD=window,Hh=LQ.document||{},$B.gsap=uB,(LQ.gsapVersions||(LQ.gsapVersions=[])).push(uB.version),rG(Xs||LQ.GreenSockGlobals||!LQ.gsap&&LQ||{}),JG.forEach(fG)),e=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&a.sleep(),t=e||function(h){return setTimeout(h,i-a.time*1e3+1|0)},Ke=1,D(2))},sleep:function(){(e?cancelAnimationFrame:clearTimeout)(o),Ke=0,t=Ue},lagSmoothing:function(h,r){A=h||1/0,I=Math.min(r||33,A)},fps:function(h){B=1e3/(h||240),i=a.time*1e3+B},add:function(h,r,S){var l=r?function(G,M,U,k){h(G,M,U,k),a.remove(l)}:h;return a.remove(h),E[S?"unshift":"push"](l),wt(),l},remove:function(h,r){~(r=E.indexOf(h))&&E.splice(r,1)&&n>=r&&n--},_listeners:E},a}(),wt=function(){return!Ke&&OB.wake()},WI={},gU=/^[\d.\-M][\d.\-,\s]/,CU=/["']/g,BU=function(A){for(var I={},g=A.substr(1,A.length-3).split(":"),C=g[0],B=1,i=g.length,E,o,t;B<i;B++)o=g[B],E=B!==i-1?o.lastIndexOf(","):o.length,t=o.substr(0,E),I[C]=isNaN(t)?t.replace(CU,"").trim():+t,C=o.substr(E+1).trim();return I},QU=function(A){var I=A.indexOf("(")+1,g=A.indexOf(")"),C=A.indexOf("(",I);return A.substring(I,~C&&C<g?A.indexOf(")",g+1):g)},iU=function(A){var I=(A+"").split("("),g=WI[I[0]];return g&&I.length>1&&g.config?g.config.apply(null,~A.indexOf("{")?[BU(I[1])]:QU(A).split(",").map(wG)):WI._CE&&gU.test(A)?WI._CE("",A):g},LG=function(A){return function(I){return 1-A(1-I)}},mG=function Q(A,I){for(var g=A._first,C;g;)g instanceof cB?Q(g,I):g.vars.yoyoEase&&(!g._yoyo||!g._repeat)&&g._yoyo!==I&&(g.timeline?Q(g.timeline,I):(C=g._ease,g._ease=g._yEase,g._yEase=C,g._yoyo=I)),g=g._next},io=function(A,I){return A&&(_g(A)?A:WI[A]||iU(A))||I},Go=function(A,I,g,C){g===void 0&&(g=function(o){return 1-I(1-o)}),C===void 0&&(C=function(o){return o<.5?I(o*2)/2:1-I((1-o)*2)/2});var B={easeIn:I,easeOut:g,easeInOut:C},i;return FB(A,function(E){WI[E]=$B[E]=B,WI[i=E.toLowerCase()]=g;for(var o in B)WI[i+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=WI[E+"."+o]=B[o]}),B},HG=function(A){return function(I){return I<.5?(1-A(1-I*2))/2:.5+A((I-.5)*2)/2}},Nr=function Q(A,I,g){var C=I>=1?I:1,B=(g||(A?.3:.45))/(I<1?I:1),i=B/yD*(Math.asin(1/C)||0),E=function(e){return e===1?1:C*Math.pow(2,-10*e)*uM((e-i)*B)+1},o=A==="out"?E:A==="in"?function(t){return 1-E(1-t)}:HG(E);return B=yD/B,o.config=function(t,e){return Q(A,t,e)},o},Kr=function Q(A,I){I===void 0&&(I=1.70158);var g=function(i){return i?--i*i*((I+1)*i+I)+1:0},C=A==="out"?g:A==="in"?function(B){return 1-g(1-B)}:HG(g);return C.config=function(B){return Q(A,B)},C};FB("Linear,Quad,Cubic,Quart,Quint,Strong",function(Q,A){var I=A<5?A+1:A;Go(Q+",Power"+(I-1),A?function(g){return Math.pow(g,I)}:function(g){return g},function(g){return 1-Math.pow(1-g,I)},function(g){return g<.5?Math.pow(g*2,I)/2:1-Math.pow((1-g)*2,I)/2})});WI.Linear.easeNone=WI.none=WI.Linear.easeIn;Go("Elastic",Nr("in"),Nr("out"),Nr());(function(Q,A){var I=1/A,g=2*I,C=2.5*I,B=function(E){return E<I?Q*E*E:E<g?Q*Math.pow(E-1.5/A,2)+.75:E<C?Q*(E-=2.25/A)*E+.9375:Q*Math.pow(E-2.625/A,2)+.984375};Go("Bounce",function(i){return 1-B(1-i)},B)})(7.5625,2.75);Go("Expo",function(Q){return Q?Math.pow(2,10*(Q-1)):0});Go("Circ",function(Q){return-(oG(1-Q*Q)-1)});Go("Sine",function(Q){return Q===1?1:-fM(Q*RM)+1});Go("Back",Kr("in"),Kr("out"),Kr());WI.SteppedEase=WI.steps=$B.SteppedEase={config:function(A,I){A===void 0&&(A=1);var g=1/A,C=A+(I?0:1),B=I?1:0,i=1-Gg;return function(E){return((C*Ea(0,i,E)|0)+B)*g}}};ht.ease=WI["quad.out"];FB("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(Q){return xh+=Q+","+Q+"Params,"});var TG=function(A,I){this.id=JM++,A._gsap=this,this.target=A,this.harness=I,this.get=I?I.get:cG,this.set=I?I.getSetter:Ph},pe=function(){function Q(I){this.vars=I,this._delay=+I.delay||0,(this._repeat=I.repeat===1/0?-2:I.repeat||0)&&(this._rDelay=I.repeatDelay||0,this._yoyo=!!I.yoyo||!!I.yoyoEase),this._ts=1,lt(this,+I.duration,1,1),this.data=I.data,pg&&(this._ctx=pg,pg.data.push(this)),Ke||OB.wake()}var A=Q.prototype;return A.delay=function(g){return g||g===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+g-this._delay),this._delay=g,this):this._delay},A.duration=function(g){return arguments.length?this.totalDuration(this._repeat>0?g+(g+this._rDelay)*this._repeat:g):this.totalDuration()&&this._dur},A.totalDuration=function(g){return arguments.length?(this._dirty=0,lt(this,this._repeat<0?g:(g-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},A.totalTime=function(g,C){if(wt(),!arguments.length)return this._tTime;var B=this._dp;if(B&&B.smoothChildTiming&&this._ts){for(Un(this,g),!B._dp||B.parent||yG(B,this);B&&B.parent;)B.parent._time!==B._start+(B._ts>=0?B._tTime/B._ts:(B.totalDuration()-B._tTime)/-B._ts)&&B.totalTime(B._tTime,!0),B=B.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&g<this._tDur||this._ts<0&&g>0||!this._tDur&&!g)&&HQ(this._dp,this,this._start-this._delay)}return(this._tTime!==g||!this._dur&&!C||this._initted&&Math.abs(this._zTime)===Gg||!g&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=g),lG(this,g,C)),this},A.time=function(g,C){return arguments.length?this.totalTime(Math.min(this.totalDuration(),g+Rl(this))%(this._dur+this._rDelay)||(g?this._dur:0),C):this._time},A.totalProgress=function(g,C){return arguments.length?this.totalTime(this.totalDuration()*g,C):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},A.progress=function(g,C){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-g:g)+Rl(this),C):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},A.iteration=function(g,C){var B=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(g-1)*B,C):this._repeat?ct(this._tTime,B)+1:1},A.timeScale=function(g,C){if(!arguments.length)return this._rts===-Gg?0:this._rts;if(this._rts===g)return this;var B=this.parent&&this._ts?An(this.parent._time,this):this._tTime;return this._rts=+g||0,this._ts=this._ps||g===-Gg?0:this._rts,this.totalTime(Ea(-Math.abs(this._delay),this._tDur,B),C!==!1),Mn(this),bM(this)},A.paused=function(g){return arguments.length?(this._ps!==g&&(this._ps=g,g?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Gg&&(this._tTime-=Gg)))),this):this._ps},A.startTime=function(g){if(arguments.length){this._start=g;var C=this.parent||this._dp;return C&&(C._sort||!this.parent)&&HQ(C,this,g-this._delay),this}return this._start},A.endTime=function(g){return this._start+(pB(g)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},A.rawTime=function(g){var C=this.parent||this._dp;return C?g&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?An(C.rawTime(g),this):this._tTime:this._tTime},A.revert=function(g){g===void 0&&(g=LM);var C=AB;return AB=g,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(g),this.totalTime(-.01,g.suppressEvents)),this.data!=="nested"&&g.kill!==!1&&this.kill(),AB=C,this},A.globalTime=function(g){for(var C=this,B=arguments.length?g:C.rawTime();C;)B=C._start+B/(Math.abs(C._ts)||1),C=C._dp;return!this.parent&&this._sat?this._sat.globalTime(g):B},A.repeat=function(g){return arguments.length?(this._repeat=g===1/0?-2:g,Jl(this)):this._repeat===-2?1/0:this._repeat},A.repeatDelay=function(g){if(arguments.length){var C=this._time;return this._rDelay=g,Jl(this),C?this.time(C):this}return this._rDelay},A.yoyo=function(g){return arguments.length?(this._yoyo=g,this):this._yoyo},A.seek=function(g,C){return this.totalTime(iQ(this,g),pB(C))},A.restart=function(g,C){return this.play().totalTime(g?-this._delay:0,pB(C))},A.play=function(g,C){return g!=null&&this.seek(g,C),this.reversed(!1).paused(!1)},A.reverse=function(g,C){return g!=null&&this.seek(g||this.totalDuration(),C),this.reversed(!0).paused(!1)},A.pause=function(g,C){return g!=null&&this.seek(g,C),this.paused(!0)},A.resume=function(){return this.paused(!1)},A.reversed=function(g){return arguments.length?(!!g!==this.reversed()&&this.timeScale(-this._rts||(g?-Gg:0)),this):this._rts<0},A.invalidate=function(){return this._initted=this._act=0,this._zTime=-Gg,this},A.isActive=function(){var g=this.parent||this._dp,C=this._start,B;return!!(!g||this._ts&&this._initted&&g.isActive()&&(B=g.rawTime(!0))>=C&&B<this.endTime(!0)-Gg)},A.eventCallback=function(g,C,B){var i=this.vars;return arguments.length>1?(C?(i[g]=C,B&&(i[g+"Params"]=B),g==="onUpdate"&&(this._onUpdate=C)):delete i[g],this):i[g]},A.then=function(g){var C=this;return new Promise(function(B){var i=_g(g)?g:SG,E=function(){var t=C.then;C.then=null,_g(i)&&(i=i(C))&&(i.then||i===C)&&(C.then=t),B(i),C.then=t};C._initted&&C.totalProgress()===1&&C._ts>=0||!C._tTime&&C._ts<0?E():C._prom=E})},A.kill=function(){oe(this)},Q}();sQ(pe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Gg,_prom:0,_ps:!1,_rts:1});var cB=function(Q){EG(A,Q);function A(g,C){var B;return g===void 0&&(g={}),B=Q.call(this,g)||this,B.labels={},B.smoothChildTiming=!!g.smoothChildTiming,B.autoRemoveChildren=!!g.autoRemoveChildren,B._sort=pB(g.sortChildren),Jg&&HQ(g.parent||Jg,ai(B),C),g.reversed&&B.reverse(),g.paused&&B.paused(!0),g.scrollTrigger&&kG(ai(B),g.scrollTrigger),B}var I=A.prototype;return I.to=function(C,B,i){return ce(0,arguments,this),this},I.from=function(C,B,i){return ce(1,arguments,this),this},I.fromTo=function(C,B,i,E){return ce(2,arguments,this),this},I.set=function(C,B,i){return B.duration=0,B.parent=this,he(B).repeatDelay||(B.repeat=0),B.immediateRender=!!B.immediateRender,new EC(C,B,iQ(this,i),1),this},I.call=function(C,B,i){return HQ(this,EC.delayedCall(0,C,B),i)},I.staggerTo=function(C,B,i,E,o,t,e){return i.duration=B,i.stagger=i.stagger||E,i.onComplete=t,i.onCompleteParams=e,i.parent=this,new EC(C,i,iQ(this,o)),this},I.staggerFrom=function(C,B,i,E,o,t,e){return i.runBackwards=1,he(i).immediateRender=pB(i.immediateRender),this.staggerTo(C,B,i,E,o,t,e)},I.staggerFromTo=function(C,B,i,E,o,t,e,a){return E.startAt=i,he(E).immediateRender=pB(E.immediateRender),this.staggerTo(C,B,E,o,t,e,a)},I.render=function(C,B,i){var E=this._time,o=this._dirty?this.totalDuration():this._tDur,t=this._dur,e=C<=0?0:KC(C),a=this._zTime<0!=C<0&&(this._initted||!t),s,n,D,c,h,r,S,l,G,M,U,k;if(this!==Jg&&e>o&&C>=0&&(e=o),e!==this._tTime||i||a){if(E!==this._time&&t&&(e+=this._time-E,C+=this._time-E),s=e,G=this._start,l=this._ts,r=!l,a&&(t||(E=this._zTime),(C||!B)&&(this._zTime=C)),this._repeat){if(U=this._yoyo,h=t+this._rDelay,this._repeat<-1&&C<0)return this.totalTime(h*100+C,B,i);if(s=KC(e%h),e===o?(c=this._repeat,s=t):(c=~~(e/h),c&&c===e/h&&(s=t,c--),s>t&&(s=t)),M=ct(this._tTime,h),!E&&this._tTime&&M!==c&&this._tTime-M*h-this._dur<=0&&(M=c),U&&c&1&&(s=t-s,k=1),c!==M&&!this._lock){var K=U&&M&1,q=K===(U&&c&1);if(c<M&&(K=!K),E=K?0:e%t?t:e,this._lock=1,this.render(E||(k?0:KC(c*h)),B,!t)._lock=0,this._tTime=e,!B&&this.parent&&PB(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),E&&E!==this._time||r!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(t=this._dur,o=this._tDur,q&&(this._lock=2,E=K?t:-1e-4,this.render(E,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!r)return this;mG(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=vM(this,KC(E),KC(s)),S&&(e-=s-(s=S._start))),this._tTime=e,this._time=s,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=C,E=0),!E&&s&&!B&&!c&&(PB(this,"onStart"),this._tTime!==e))return this;if(s>=E&&C>=0)for(n=this._first;n;){if(D=n._next,(n._act||s>=n._start)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(s-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(s-n._start)*n._ts,B,i),s!==this._time||!this._ts&&!r){S=0,D&&(e+=this._zTime=-Gg);break}}n=D}else{n=this._last;for(var y=C<0?C:s;n;){if(D=n._prev,(n._act||y<=n._end)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(y-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(y-n._start)*n._ts,B,i||AB&&(n._initted||n._startAt)),s!==this._time||!this._ts&&!r){S=0,D&&(e+=this._zTime=y?-Gg:Gg);break}}n=D}}if(S&&!B&&(this.pause(),S.render(s>=E?0:-Gg)._zTime=s>=E?1:-1,this._ts))return this._start=G,Mn(this),this.render(C,B,i);this._onUpdate&&!B&&PB(this,"onUpdate",!0),(e===o&&this._tTime>=this.totalDuration()||!e&&E)&&(G===this._start||Math.abs(l)!==Math.abs(this._ts))&&(this._lock||((C||!t)&&(e===o&&this._ts>0||!e&&this._ts<0)&&oE(this,1),!B&&!(C<0&&!E)&&(e||E||!o)&&(PB(this,e===o&&C>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(e<o&&this.timeScale()>0)&&this._prom())))}return this},I.add=function(C,B){var i=this;if(Mi(B)||(B=iQ(this,B,C)),!(C instanceof pe)){if(IB(C))return C.forEach(function(E){return i.add(E,B)}),this;if(dC(C))return this.addLabel(C,B);if(_g(C))C=EC.delayedCall(0,C);else return this}return this!==C?HQ(this,C,B):this},I.getChildren=function(C,B,i,E){C===void 0&&(C=!0),B===void 0&&(B=!0),i===void 0&&(i=!0),E===void 0&&(E=-tQ);for(var o=[],t=this._first;t;)t._start>=E&&(t instanceof EC?B&&o.push(t):(i&&o.push(t),C&&o.push.apply(o,t.getChildren(!0,B,i)))),t=t._next;return o},I.getById=function(C){for(var B=this.getChildren(1,1,1),i=B.length;i--;)if(B[i].vars.id===C)return B[i]},I.remove=function(C){return dC(C)?this.removeLabel(C):_g(C)?this.killTweensOf(C):(kn(this,C),C===this._recent&&(this._recent=this._last),Qo(this))},I.totalTime=function(C,B){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=KC(OB.time-(this._ts>0?C/this._ts:(this.totalDuration()-C)/-this._ts))),Q.prototype.totalTime.call(this,C,B),this._forcing=0,this):this._tTime},I.addLabel=function(C,B){return this.labels[C]=iQ(this,B),this},I.removeLabel=function(C){return delete this.labels[C],this},I.addPause=function(C,B,i){var E=EC.delayedCall(0,B||Ue,i);return E.data="isPause",this._hasPause=1,HQ(this,E,iQ(this,C))},I.removePause=function(C){var B=this._first;for(C=iQ(this,C);B;)B._start===C&&B.data==="isPause"&&oE(B),B=B._next},I.killTweensOf=function(C,B,i){for(var E=this.getTweensOf(C,i),o=E.length;o--;)$i!==E[o]&&E[o].kill(C,B);return this},I.getTweensOf=function(C,B){for(var i=[],E=eQ(C),o=this._first,t=Mi(B),e;o;)o instanceof EC?mM(o._targets,E)&&(t?(!$i||o._initted&&o._ts)&&o.globalTime(0)<=B&&o.globalTime(o.totalDuration())>B:!B||o.isActive())&&i.push(o):(e=o.getTweensOf(E,B)).length&&i.push.apply(i,e),o=o._next;return i},I.tweenTo=function(C,B){B=B||{};var i=this,E=iQ(i,C),o=B,t=o.startAt,e=o.onStart,a=o.onStartParams,s=o.immediateRender,n,D=EC.to(i,sQ({ease:B.ease||"none",lazy:!1,immediateRender:!1,time:E,overwrite:"auto",duration:B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale())||Gg,onStart:function(){if(i.pause(),!n){var h=B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale());D._dur!==h&&lt(D,h,0,1).render(D._time,!0,!0),n=1}e&&e.apply(D,a||[])}},B));return s?D.render(0):D},I.tweenFromTo=function(C,B,i){return this.tweenTo(B,sQ({startAt:{time:iQ(this,C)}},i))},I.recent=function(){return this._recent},I.nextLabel=function(C){return C===void 0&&(C=this._time),fl(this,iQ(this,C))},I.previousLabel=function(C){return C===void 0&&(C=this._time),fl(this,iQ(this,C),1)},I.currentLabel=function(C){return arguments.length?this.seek(C,!0):this.previousLabel(this._time+Gg)},I.shiftChildren=function(C,B,i){i===void 0&&(i=0);for(var E=this._first,o=this.labels,t;E;)E._start>=i&&(E._start+=C,E._end+=C),E=E._next;if(B)for(t in o)o[t]>=i&&(o[t]+=C);return Qo(this)},I.invalidate=function(C){var B=this._first;for(this._lock=0;B;)B.invalidate(C),B=B._next;return Q.prototype.invalidate.call(this,C)},I.clear=function(C){C===void 0&&(C=!0);for(var B=this._first,i;B;)i=B._next,this.remove(B),B=i;return this._dp&&(this._time=this._tTime=this._pTime=0),C&&(this.labels={}),Qo(this)},I.totalDuration=function(C){var B=0,i=this,E=i._last,o=tQ,t,e,a;if(arguments.length)return i.timeScale((i._repeat<0?i.duration():i.totalDuration())/(i.reversed()?-C:C));if(i._dirty){for(a=i.parent;E;)t=E._prev,E._dirty&&E.totalDuration(),e=E._start,e>o&&i._sort&&E._ts&&!i._lock?(i._lock=1,HQ(i,E,e-E._delay,1)._lock=0):o=e,e<0&&E._ts&&(B-=e,(!a&&!i._dp||a&&a.smoothChildTiming)&&(i._start+=e/i._ts,i._time-=e,i._tTime-=e),i.shiftChildren(-e,!1,-1/0),o=0),E._end>B&&E._ts&&(B=E._end),E=t;lt(i,i===Jg&&i._time>B?i._time:B,1,1),i._dirty=0}return i._tDur},A.updateRoot=function(C){if(Jg._ts&&(lG(Jg,An(C,Jg)),hG=OB.frame),OB.frame>=Fl){Fl+=jB.autoSleep||120;var B=Jg._first;if((!B||!B._ts)&&jB.autoSleep&&OB._listeners.length<2){for(;B&&!B._ts;)B=B._next;B||OB.sleep()}}},A}(pe);sQ(cB.prototype,{_lock:0,_hasPause:0,_forcing:0});var EU=function(A,I,g,C,B,i,E){var o=new dB(this._pt,A,I,0,1,ZG,null,B),t=0,e=0,a,s,n,D,c,h,r,S;for(o.b=g,o.e=C,g+="",C+="",(r=~C.indexOf("random("))&&(C=Ne(C)),i&&(S=[g,C],i(S,A,I),g=S[0],C=S[1]),s=g.match(kr)||[];a=kr.exec(C);)D=a[0],c=C.substring(t,a.index),n?n=(n+1)%5:c.substr(-5)==="rgba("&&(n=1),D!==s[e++]&&(h=parseFloat(s[e-1])||0,o._pt={_next:o._pt,p:c||e===1?c:",",s:h,c:D.charAt(1)==="="?at(h,D)-h:parseFloat(D)-h,m:n&&n<4?Math.round:0},t=kr.lastIndex);return o.c=t<C.length?C.substring(t,C.length):"",o.fp=E,(aG.test(C)||r)&&(o.e=0),this._pt=o,o},Oh=function(A,I,g,C,B,i,E,o,t,e){_g(C)&&(C=C(B||0,A,i));var a=A[I],s=g!=="get"?g:_g(a)?t?A[I.indexOf("set")||!_g(A["get"+I.substr(3)])?I:"get"+I.substr(3)](t):A[I]():a,n=_g(a)?t?sU:OG:Zh,D;if(dC(C)&&(~C.indexOf("random(")&&(C=Ne(C)),C.charAt(1)==="="&&(D=at(s,C)+(XC(s)||0),(D||D===0)&&(C=D))),!e||s!==C||RD)return!isNaN(s*C)&&C!==""?(D=new dB(this._pt,A,I,+s||0,C-(s||0),typeof a=="boolean"?rU:vG,0,n),t&&(D.fp=t),E&&D.modifier(E,this,A),this._pt=D):(!a&&!(I in A)&&Th(I,C),EU.call(this,A,I,s,C,n,o||jB.stringFilter,t))},oU=function(A,I,g,C,B){if(_g(A)&&(A=le(A,B,I,g,C)),!VQ(A)||A.style&&A.nodeType||IB(A)||tG(A))return dC(A)?le(A,B,I,g,C):A;var i={},E;for(E in A)i[E]=le(A[E],B,I,g,C);return i},bG=function(A,I,g,C,B,i){var E,o,t,e;if(_B[A]&&(E=new _B[A]).init(B,E.rawVars?I[A]:oU(I[A],C,B,i,g),g,C,i)!==!1&&(g._pt=o=new dB(g._pt,B,A,0,1,E.render,E,0,E.priority),g!==it))for(t=g._ptLookup[g._targets.indexOf(B)],e=E._props.length;e--;)t[E._props[e]]=o;return E},$i,RD,vh=function Q(A,I,g){var C=A.vars,B=C.ease,i=C.startAt,E=C.immediateRender,o=C.lazy,t=C.onUpdate,e=C.runBackwards,a=C.yoyoEase,s=C.keyframes,n=C.autoRevert,D=A._dur,c=A._startAt,h=A._targets,r=A.parent,S=r&&r.data==="nested"?r.vars.targets:h,l=A._overwrite==="auto"&&!Yh,G=A.timeline,M,U,k,K,q,y,N,T,O,H,V,_,j;if(G&&(!s||!B)&&(B="none"),A._ease=io(B,ht.ease),A._yEase=a?LG(io(a===!0?B:a,ht.ease)):0,a&&A._yoyo&&!A._repeat&&(a=A._yEase,A._yEase=A._ease,A._ease=a),A._from=!G&&!!C.runBackwards,!G||s&&!C.stagger){if(T=h[0]?Bo(h[0]).harness:0,_=T&&C[T.prop],M=$s(C,bh),c&&(c._zTime<0&&c.progress(1),I<0&&e&&E&&!n?c.render(-1,!0):c.revert(e&&D?Ts:YM),c._lazy=0),i){if(oE(A._startAt=EC.set(h,sQ({data:"isStart",overwrite:!1,parent:r,immediateRender:!0,lazy:!c&&pB(o),startAt:null,delay:0,onUpdate:t&&function(){return PB(A,"onUpdate")},stagger:0},i))),A._startAt._dp=0,A._startAt._sat=A,I<0&&(AB||!E&&!n)&&A._startAt.revert(Ts),E&&D&&I<=0&&g<=0){I&&(A._zTime=I);return}}else if(e&&D&&!c){if(I&&(E=!1),k=sQ({overwrite:!1,data:"isFromStart",lazy:E&&!c&&pB(o),immediateRender:E,stagger:0,parent:r},M),_&&(k[T.prop]=_),oE(A._startAt=EC.set(h,k)),A._startAt._dp=0,A._startAt._sat=A,I<0&&(AB?A._startAt.revert(Ts):A._startAt.render(-1,!0)),A._zTime=I,!E)Q(A._startAt,Gg,Gg);else if(!I)return}for(A._pt=A._ptCache=0,o=D&&pB(o)||o&&!D,U=0;U<h.length;U++){if(q=h[U],N=q._gsap||_h(h)[U]._gsap,A._ptLookup[U]=H={},UD[N.id]&&CE.length&&zs(),V=S===h?U:S.indexOf(q),T&&(O=new T).init(q,_||M,A,V,S)!==!1&&(A._pt=K=new dB(A._pt,q,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(IA){H[IA]=K}),O.priority&&(y=1)),!T||_)for(k in M)_B[k]&&(O=bG(k,M,A,V,q,S))?O.priority&&(y=1):H[k]=K=Oh.call(A,q,k,"get",M[k],V,S,0,C.stringFilter);A._op&&A._op[U]&&A.kill(q,A._op[U]),l&&A._pt&&($i=A,Jg.killTweensOf(q,H,A.globalTime(I)),j=!A.parent,$i=0),A._pt&&o&&(UD[N.id]=1)}y&&PG(A),A._onInit&&A._onInit(A)}A._onUpdate=t,A._initted=(!A._op||A._pt)&&!j,s&&I<=0&&G.render(tQ,!0,!0)},tU=function(A,I,g,C,B,i,E,o){var t=(A._pt&&A._ptCache||(A._ptCache={}))[I],e,a,s,n;if(!t)for(t=A._ptCache[I]=[],s=A._ptLookup,n=A._targets.length;n--;){if(e=s[n][I],e&&e.d&&e.d._pt)for(e=e.d._pt;e&&e.p!==I&&e.fp!==I;)e=e._next;if(!e)return RD=1,A.vars[I]="+=0",vh(A,E),RD=0,o?Me(I+" not eligible for reset"):1;t.push(e)}for(n=t.length;n--;)a=t[n],e=a._pt||a,e.s=(C||C===0)&&!B?C:e.s+(C||0)+i*e.c,e.c=g-e.s,a.e&&(a.e=Xg(g)+XC(a.e)),a.b&&(a.b=e.s+XC(a.b))},eU=function(A,I){var g=A[0]?Bo(A[0]).harness:0,C=g&&g.aliases,B,i,E,o;if(!C)return I;B=no({},I);for(i in C)if(i in B)for(o=C[i].split(","),E=o.length;E--;)B[o[E]]=B[i];return B},aU=function(A,I,g,C){var B=I.ease||C||"power1.inOut",i,E;if(IB(I))E=g[A]||(g[A]=[]),I.forEach(function(o,t){return E.push({t:t/(I.length-1)*100,v:o,e:B})});else for(i in I)E=g[i]||(g[i]=[]),i==="ease"||E.push({t:parseFloat(A),v:I[i],e:B})},le=function(A,I,g,C,B){return _g(A)?A.call(I,g,C,B):dC(A)&&~A.indexOf("random(")?Ne(A):A},xG=xh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_G={};FB(xG+",id,stagger,delay,duration,paused,scrollTrigger",function(Q){return _G[Q]=1});var EC=function(Q){EG(A,Q);function A(g,C,B,i){var E;typeof C=="number"&&(B.duration=C,C=B,B=null),E=Q.call(this,i?C:he(C))||this;var o=E.vars,t=o.duration,e=o.delay,a=o.immediateRender,s=o.stagger,n=o.overwrite,D=o.keyframes,c=o.defaults,h=o.scrollTrigger,r=o.yoyoEase,S=C.parent||Jg,l=(IB(g)||tG(g)?Mi(g[0]):"length"in C)?[g]:eQ(g),G,M,U,k,K,q,y,N;if(E._targets=l.length?_h(l):Me("GSAP target "+g+" not found. https://gsap.com",!jB.nullTargetWarn)||[],E._ptLookup=[],E._overwrite=n,D||s||va(t)||va(e)){if(C=E.vars,G=E.timeline=new cB({data:"nested",defaults:c||{},targets:S&&S.data==="nested"?S.vars.targets:l}),G.kill(),G.parent=G._dp=ai(E),G._start=0,s||va(t)||va(e)){if(k=l.length,y=s&&KG(s),VQ(s))for(K in s)~xG.indexOf(K)&&(N||(N={}),N[K]=s[K]);for(M=0;M<k;M++)U=$s(C,_G),U.stagger=0,r&&(U.yoyoEase=r),N&&no(U,N),q=l[M],U.duration=+le(t,ai(E),M,q,l),U.delay=(+le(e,ai(E),M,q,l)||0)-E._delay,!s&&k===1&&U.delay&&(E._delay=e=U.delay,E._start+=e,U.delay=0),G.to(q,U,y?y(M,q,l):0),G._ease=WI.none;G.duration()?t=e=0:E.timeline=0}else if(D){he(sQ(G.vars.defaults,{ease:"none"})),G._ease=io(D.ease||C.ease||"none");var T=0,O,H,V;if(IB(D))D.forEach(function(_){return G.to(l,_,">")}),G.duration();else{U={};for(K in D)K==="ease"||K==="easeEach"||aU(K,D[K],U,D.easeEach);for(K in U)for(O=U[K].sort(function(_,j){return _.t-j.t}),T=0,M=0;M<O.length;M++)H=O[M],V={ease:H.e,duration:(H.t-(M?O[M-1].t:0))/100*t},V[K]=H.v,G.to(l,V,T),T+=V.duration;G.duration()<t&&G.to({},{duration:t-G.duration()})}}t||E.duration(t=G.duration())}else E.timeline=0;return n===!0&&!Yh&&($i=ai(E),Jg.killTweensOf(l),$i=0),HQ(S,ai(E),B),C.reversed&&E.reverse(),C.paused&&E.paused(!0),(a||!t&&!D&&E._start===KC(S._time)&&pB(a)&&xM(ai(E))&&S.data!=="nested")&&(E._tTime=-Gg,E.render(Math.max(0,-e)||0)),h&&kG(ai(E),h),E}var I=A.prototype;return I.render=function(C,B,i){var E=this._time,o=this._tDur,t=this._dur,e=C<0,a=C>o-Gg&&!e?o:C<Gg?0:C,s,n,D,c,h,r,S,l,G;if(!t)OM(this,C,B,i);else if(a!==this._tTime||!C||i||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==e){if(s=a,l=this.timeline,this._repeat){if(c=t+this._rDelay,this._repeat<-1&&e)return this.totalTime(c*100+C,B,i);if(s=KC(a%c),a===o?(D=this._repeat,s=t):(D=~~(a/c),D&&D===KC(a/c)&&(s=t,D--),s>t&&(s=t)),r=this._yoyo&&D&1,r&&(G=this._yEase,s=t-s),h=ct(this._tTime,c),s===E&&!i&&this._initted&&D===h)return this._tTime=a,this;D!==h&&(l&&this._yEase&&mG(l,r),this.vars.repeatRefresh&&!r&&!this._lock&&this._time!==c&&this._initted&&(this._lock=i=1,this.render(KC(c*D),!0).invalidate()._lock=0))}if(!this._initted){if(MG(this,e?C:s,i,B,a))return this._tTime=0,this;if(E!==this._time&&!(i&&this.vars.repeatRefresh&&D!==h))return this;if(t!==this._dur)return this.render(C,B,i)}if(this._tTime=a,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(G||this._ease)(s/t),this._from&&(this.ratio=S=1-S),s&&!E&&!B&&!D&&(PB(this,"onStart"),this._tTime!==a))return this;for(n=this._pt;n;)n.r(S,n.d),n=n._next;l&&l.render(C<0?C:l._dur*l._ease(s/this._dur),B,i)||this._startAt&&(this._zTime=C),this._onUpdate&&!B&&(e&&ND(this,C,B,i),PB(this,"onUpdate")),this._repeat&&D!==h&&this.vars.onRepeat&&!B&&this.parent&&PB(this,"onRepeat"),(a===this._tDur||!a)&&this._tTime===a&&(e&&!this._onUpdate&&ND(this,C,!0,!0),(C||!t)&&(a===this._tDur&&this._ts>0||!a&&this._ts<0)&&oE(this,1),!B&&!(e&&!E)&&(a||E||r)&&(PB(this,a===o?"onComplete":"onReverseComplete",!0),this._prom&&!(a<o&&this.timeScale()>0)&&this._prom()))}return this},I.targets=function(){return this._targets},I.invalidate=function(C){return(!C||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(C),Q.prototype.invalidate.call(this,C)},I.resetTo=function(C,B,i,E,o){Ke||OB.wake(),this._ts||this.play();var t=Math.min(this._dur,(this._dp._time-this._start)*this._ts),e;return this._initted||vh(this,t),e=this._ease(t/this._dur),tU(this,C,B,i,E,e,t,o)?this.resetTo(C,B,i,E,1):(Un(this,0),this.parent||GG(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},I.kill=function(C,B){if(B===void 0&&(B="all"),!C&&(!B||B==="all"))return this._lazy=this._pt=0,this.parent?oe(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(C,B,$i&&$i.vars.overwrite!==!0)._first||oe(this),this.parent&&i!==this.timeline.totalDuration()&&lt(this,this._dur*this.timeline._tDur/i,0,1),this}var E=this._targets,o=C?eQ(C):E,t=this._ptLookup,e=this._pt,a,s,n,D,c,h,r;if((!B||B==="all")&&TM(E,o))return B==="all"&&(this._pt=0),oe(this);for(a=this._op=this._op||[],B!=="all"&&(dC(B)&&(c={},FB(B,function(S){return c[S]=1}),B=c),B=eU(E,B)),r=E.length;r--;)if(~o.indexOf(E[r])){s=t[r],B==="all"?(a[r]=B,D=s,n={}):(n=a[r]=a[r]||{},D=B);for(c in D)h=s&&s[c],h&&((!("kill"in h.d)||h.d.kill(c)===!0)&&kn(this,h,"_pt"),delete s[c]),n!=="all"&&(n[c]=1)}return this._initted&&!this._pt&&e&&oe(this),this},A.to=function(C,B){return new A(C,B,arguments[2])},A.from=function(C,B){return ce(1,arguments)},A.delayedCall=function(C,B,i,E){return new A(B,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:C,onComplete:B,onReverseComplete:B,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:E})},A.fromTo=function(C,B,i){return ce(2,arguments)},A.set=function(C,B){return B.duration=0,B.repeatDelay||(B.repeat=0),new A(C,B)},A.killTweensOf=function(C,B,i){return Jg.killTweensOf(C,B,i)},A}(pe);sQ(EC.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});FB("staggerTo,staggerFrom,staggerFromTo",function(Q){EC[Q]=function(){var A=new cB,I=pD.call(arguments,0);return I.splice(Q==="staggerFromTo"?5:4,0,0),A[Q].apply(A,I)}});var Zh=function(A,I,g){return A[I]=g},OG=function(A,I,g){return A[I](g)},sU=function(A,I,g,C){return A[I](C.fp,g)},nU=function(A,I,g){return A.setAttribute(I,g)},Ph=function(A,I){return _g(A[I])?OG:Lh(A[I])&&A.setAttribute?nU:Zh},vG=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e6)/1e6,I)},rU=function(A,I){return I.set(I.t,I.p,!!(I.s+I.c*A),I)},ZG=function(A,I){var g=I._pt,C="";if(!A&&I.b)C=I.b;else if(A===1&&I.e)C=I.e;else{for(;g;)C=g.p+(g.m?g.m(g.s+g.c*A):Math.round((g.s+g.c*A)*1e4)/1e4)+C,g=g._next;C+=I.c}I.set(I.t,I.p,C,I)},Wh=function(A,I){for(var g=I._pt;g;)g.r(A,g.d),g=g._next},DU=function(A,I,g,C){for(var B=this._pt,i;B;)i=B._next,B.p===C&&B.modifier(A,I,g),B=i},hU=function(A){for(var I=this._pt,g,C;I;)C=I._next,I.p===A&&!I.op||I.op===A?kn(this,I,"_pt"):I.dep||(g=1),I=C;return!g},cU=function(A,I,g,C){C.mSet(A,I,C.m.call(C.tween,g,C.mt),C)},PG=function(A){for(var I=A._pt,g,C,B,i;I;){for(g=I._next,C=B;C&&C.pr>I.pr;)C=C._next;(I._prev=C?C._prev:i)?I._prev._next=I:B=I,(I._next=C)?C._prev=I:i=I,I=g}A._pt=B},dB=function(){function Q(I,g,C,B,i,E,o,t,e){this.t=g,this.s=B,this.c=i,this.p=C,this.r=E||vG,this.d=o||this,this.set=t||Zh,this.pr=e||0,this._next=I,I&&(I._prev=this)}var A=Q.prototype;return A.modifier=function(g,C,B){this.mSet=this.mSet||this.set,this.set=cU,this.m=g,this.mt=B,this.tween=C},Q}();FB(xh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(Q){return bh[Q]=1});$B.TweenMax=$B.TweenLite=EC;$B.TimelineLite=$B.TimelineMax=cB;Jg=new cB({sortChildren:!1,defaults:ht,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jB.stringFilter=YG;var Eo=[],xs={},lU=[],ql=0,wU=0,pr=function(A){return(xs[A]||lU).map(function(I){return I()})},JD=function(){var A=Date.now(),I=[];A-ql>2&&(pr("matchMediaInit"),Eo.forEach(function(g){var C=g.queries,B=g.conditions,i,E,o,t;for(E in C)i=LQ.matchMedia(C[E]).matches,i&&(o=1),i!==B[E]&&(B[E]=i,t=1);t&&(g.revert(),o&&I.push(g))}),pr("matchMediaRevert"),I.forEach(function(g){return g.onMatch(g,function(C){return g.add(null,C)})}),ql=A,pr("matchMedia"))},WG=function(){function Q(I,g){this.selector=g&&FD(g),this.data=[],this._r=[],this.isReverted=!1,this.id=wU++,I&&this.add(I)}var A=Q.prototype;return A.add=function(g,C,B){_g(g)&&(B=C,C=g,g=_g);var i=this,E=function(){var t=pg,e=i.selector,a;return t&&t!==i&&t.data.push(i),B&&(i.selector=FD(B)),pg=i,a=C.apply(i,arguments),_g(a)&&i._r.push(a),pg=t,i.selector=e,i.isReverted=!1,a};return i.last=E,g===_g?E(i,function(o){return i.add(null,o)}):g?i[g]=E:E},A.ignore=function(g){var C=pg;pg=null,g(this),pg=C},A.getTweens=function(){var g=[];return this.data.forEach(function(C){return C instanceof Q?g.push.apply(g,C.getTweens()):C instanceof EC&&!(C.parent&&C.parent.data==="nested")&&g.push(C)}),g},A.clear=function(){this._r.length=this.data.length=0},A.kill=function(g,C){var B=this;if(g?function(){for(var E=B.getTweens(),o=B.data.length,t;o--;)t=B.data[o],t.data==="isFlip"&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return E.splice(E.indexOf(e),1)}));for(E.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,a){return a.g-e.g||-1/0}).forEach(function(e){return e.t.revert(g)}),o=B.data.length;o--;)t=B.data[o],t instanceof cB?t.data!=="nested"&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof EC)&&t.revert&&t.revert(g);B._r.forEach(function(e){return e(g,B)}),B.isReverted=!0}():this.data.forEach(function(E){return E.kill&&E.kill()}),this.clear(),C)for(var i=Eo.length;i--;)Eo[i].id===this.id&&Eo.splice(i,1)},A.revert=function(g){this.kill(g||{})},Q}(),SU=function(){function Q(I){this.contexts=[],this.scope=I,pg&&pg.data.push(this)}var A=Q.prototype;return A.add=function(g,C,B){VQ(g)||(g={matches:g});var i=new WG(0,B||this.scope),E=i.conditions={},o,t,e;pg&&!i.selector&&(i.selector=pg.selector),this.contexts.push(i),C=i.add("onMatch",C),i.queries=g;for(t in g)t==="all"?e=1:(o=LQ.matchMedia(g[t]),o&&(Eo.indexOf(i)<0&&Eo.push(i),(E[t]=o.matches)&&(e=1),o.addListener?o.addListener(JD):o.addEventListener("change",JD)));return e&&C(i,function(a){return i.add(null,a)}),this},A.revert=function(g){this.kill(g||{})},A.kill=function(g){this.contexts.forEach(function(C){return C.kill(g,!0)})},Q}(),In={registerPlugin:function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];I.forEach(function(C){return fG(C)})},timeline:function(A){return new cB(A)},getTweensOf:function(A,I){return Jg.getTweensOf(A,I)},getProperty:function(A,I,g,C){dC(A)&&(A=eQ(A)[0]);var B=Bo(A||{}).get,i=g?SG:wG;return g==="native"&&(g=""),A&&(I?i((_B[I]&&_B[I].get||B)(A,I,g,C)):function(E,o,t){return i((_B[E]&&_B[E].get||B)(A,E,o,t))})},quickSetter:function(A,I,g){if(A=eQ(A),A.length>1){var C=A.map(function(e){return uB.quickSetter(e,I,g)}),B=C.length;return function(e){for(var a=B;a--;)C[a](e)}}A=A[0]||{};var i=_B[I],E=Bo(A),o=E.harness&&(E.harness.aliases||{})[I]||I,t=i?function(e){var a=new i;it._pt=0,a.init(A,g?e+g:e,it,0,[A]),a.render(1,a),it._pt&&Wh(1,it)}:E.set(A,o);return i?t:function(e){return t(A,o,g?e+g:e,E,1)}},quickTo:function(A,I,g){var C,B=uB.to(A,no((C={},C[I]="+=0.1",C.paused=!0,C),g||{})),i=function(o,t,e){return B.resetTo(I,o,t,e)};return i.tween=B,i},isTweening:function(A){return Jg.getTweensOf(A,!0).length>0},defaults:function(A){return A&&A.ease&&(A.ease=io(A.ease,ht.ease)),dl(ht,A||{})},config:function(A){return dl(jB,A||{})},registerEffect:function(A){var I=A.name,g=A.effect,C=A.plugins,B=A.defaults,i=A.extendTimeline;(C||"").split(",").forEach(function(E){return E&&!_B[E]&&!$B[E]&&Me(I+" effect requires "+E+" plugin.")}),Mr[I]=function(E,o,t){return g(eQ(E),sQ(o||{},B),t)},i&&(cB.prototype[I]=function(E,o,t){return this.add(Mr[I](E,VQ(o)?o:(t=o)&&{},this),t)})},registerEase:function(A,I){WI[A]=io(I)},parseEase:function(A,I){return arguments.length?io(A,I):WI},getById:function(A){return Jg.getById(A)},exportRoot:function(A,I){A===void 0&&(A={});var g=new cB(A),C,B;for(g.smoothChildTiming=pB(A.smoothChildTiming),Jg.remove(g),g._dp=0,g._time=g._tTime=Jg._time,C=Jg._first;C;)B=C._next,(I||!(!C._dur&&C instanceof EC&&C.vars.onComplete===C._targets[0]))&&HQ(g,C,C._start-C._delay),C=B;return HQ(Jg,g,0),g},context:function(A,I){return A?new WG(A,I):pg},matchMedia:function(A){return new SU(A)},matchMediaRefresh:function(){return Eo.forEach(function(A){var I=A.conditions,g,C;for(C in I)I[C]&&(I[C]=!1,g=1);g&&A.revert()})||JD()},addEventListener:function(A,I){var g=xs[A]||(xs[A]=[]);~g.indexOf(I)||g.push(I)},removeEventListener:function(A,I){var g=xs[A],C=g&&g.indexOf(I);C>=0&&g.splice(C,1)},utils:{wrap:zM,wrapYoyo:$M,distribute:KG,random:FG,snap:pG,normalize:XM,getUnit:XC,clamp:PM,splitColor:uG,toArray:eQ,selector:FD,mapRange:RG,pipe:VM,unitize:jM,interpolate:AU,shuffle:NG},install:rG,effects:Mr,ticker:OB,updateRoot:cB.updateRoot,plugins:_B,globalTimeline:Jg,core:{PropTween:dB,globals:DG,Tween:EC,Timeline:cB,Animation:pe,getCache:Bo,_removeLinkedListItem:kn,reverting:function(){return AB},context:function(A){return A&&pg&&(pg.data.push(A),A._ctx=pg),pg},suppressOverwrites:function(A){return Yh=A}}};FB("to,from,fromTo,delayedCall,set,killTweensOf",function(Q){return In[Q]=EC[Q]});OB.add(cB.updateRoot);it=In.to({},{duration:0});var GU=function(A,I){for(var g=A._pt;g&&g.p!==I&&g.op!==I&&g.fp!==I;)g=g._next;return g},yU=function(A,I){var g=A._targets,C,B,i;for(C in I)for(B=g.length;B--;)i=A._ptLookup[B][C],i&&(i=i.d)&&(i._pt&&(i=GU(i,C)),i&&i.modifier&&i.modifier(I[C],A,g[B],C))},Fr=function(A,I){return{name:A,rawVars:1,init:function(C,B,i){i._onInit=function(E){var o,t;if(dC(B)&&(o={},FB(B,function(e){return o[e]=1}),B=o),I){o={};for(t in B)o[t]=I(B[t]);B=o}yU(E,B)}}}},uB=In.registerPlugin({name:"attr",init:function(A,I,g,C,B){var i,E,o;this.tween=g;for(i in I)o=A.getAttribute(i)||"",E=this.add(A,"setAttribute",(o||0)+"",I[i],C,B,0,0,i),E.op=i,E.b=o,this._props.push(i)},render:function(A,I){for(var g=I._pt;g;)AB?g.set(g.t,g.p,g.b,g):g.r(A,g.d),g=g._next}},{name:"endArray",init:function(A,I){for(var g=I.length;g--;)this.add(A,g,A[g]||0,I[g],0,0,0,0,0,1)}},Fr("roundProps",dD),Fr("modifiers"),Fr("snap",pG))||In;EC.version=cB.version=uB.version="3.12.5";nG=1;mh()&&wt();WI.Power0;WI.Power1;WI.Power2;WI.Power3;WI.Power4;WI.Linear;WI.Quad;WI.Cubic;WI.Quart;WI.Quint;WI.Strong;WI.Elastic;WI.Back;WI.SteppedEase;WI.Bounce;WI.Sine;WI.Expo;WI.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yl,AE,st,Vh,XE,Ll,jh,kU=function(){return typeof window<"u"},Ui={},OE=180/Math.PI,nt=Math.PI/180,Yo=Math.atan2,ml=1e8,Xh=/([A-Z])/g,MU=/(left|right|width|margin|padding|x)/i,UU=/[\s,\(]\S/,_Q={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fD=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},NU=function(A,I){return I.set(I.t,I.p,A===1?I.e:Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},KU=function(A,I){return I.set(I.t,I.p,A?Math.round((I.s+I.c*A)*1e4)/1e4+I.u:I.b,I)},pU=function(A,I){var g=I.s+I.c*A;I.set(I.t,I.p,~~(g+(g<0?-.5:.5))+I.u,I)},VG=function(A,I){return I.set(I.t,I.p,A?I.e:I.b,I)},jG=function(A,I){return I.set(I.t,I.p,A!==1?I.b:I.e,I)},FU=function(A,I,g){return A.style[I]=g},dU=function(A,I,g){return A.style.setProperty(I,g)},RU=function(A,I,g){return A._gsap[I]=g},JU=function(A,I,g){return A._gsap.scaleX=A._gsap.scaleY=g},fU=function(A,I,g,C,B){var i=A._gsap;i.scaleX=i.scaleY=g,i.renderTransform(B,i)},uU=function(A,I,g,C,B){var i=A._gsap;i[I]=g,i.renderTransform(B,i)},ug="transform",RB=ug+"Origin",qU=function Q(A,I){var g=this,C=this.target,B=C.style,i=C._gsap;if(A in Ui&&B){if(this.tfm=this.tfm||{},A!=="transform")A=_Q[A]||A,~A.indexOf(",")?A.split(",").forEach(function(E){return g.tfm[E]=ni(C,E)}):this.tfm[A]=i.x?i[A]:ni(C,A),A===RB&&(this.tfm.zOrigin=i.zOrigin);else return _Q.transform.split(",").forEach(function(E){return Q.call(g,E,I)});if(this.props.indexOf(ug)>=0)return;i.svg&&(this.svgo=C.getAttribute("data-svg-origin"),this.props.push(RB,I,"")),A=ug}(B||I)&&this.props.push(A,I,B[A])},XG=function(A){A.translate&&(A.removeProperty("translate"),A.removeProperty("scale"),A.removeProperty("rotate"))},YU=function(){var A=this.props,I=this.target,g=I.style,C=I._gsap,B,i;for(B=0;B<A.length;B+=3)A[B+1]?I[A[B]]=A[B+2]:A[B+2]?g[A[B]]=A[B+2]:g.removeProperty(A[B].substr(0,2)==="--"?A[B]:A[B].replace(Xh,"-$1").toLowerCase());if(this.tfm){for(i in this.tfm)C[i]=this.tfm[i];C.svg&&(C.renderTransform(),I.setAttribute("data-svg-origin",this.svgo||"")),B=jh(),(!B||!B.isStart)&&!g[ug]&&(XG(g),C.zOrigin&&g[RB]&&(g[RB]+=" "+C.zOrigin+"px",C.zOrigin=0,C.renderTransform()),C.uncache=1)}},zG=function(A,I){var g={target:A,props:[],revert:YU,save:qU};return A._gsap||uB.core.getCache(A),I&&I.split(",").forEach(function(C){return g.save(C)}),g},$G,uD=function(A,I){var g=AE.createElementNS?AE.createElementNS((I||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),A):AE.createElement(A);return g&&g.style?g:AE.createElement(A)},ZQ=function Q(A,I,g){var C=getComputedStyle(A);return C[I]||C.getPropertyValue(I.replace(Xh,"-$1").toLowerCase())||C.getPropertyValue(I)||!g&&Q(A,St(I)||I,1)||""},Hl="O,Moz,ms,Ms,Webkit".split(","),St=function(A,I,g){var C=I||XE,B=C.style,i=5;if(A in B&&!g)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1);i--&&!(Hl[i]+A in B););return i<0?null:(i===3?"ms":i>=0?Hl[i]:"")+A},qD=function(){kU()&&window.document&&(Yl=window,AE=Yl.document,st=AE.documentElement,XE=uD("div")||{style:{}},uD("div"),ug=St(ug),RB=ug+"Origin",XE.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$G=!!St("perspective"),jh=uB.core.reverting,Vh=1)},dr=function Q(A){var I=uD("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),g=this.parentNode,C=this.nextSibling,B=this.style.cssText,i;if(st.appendChild(I),I.appendChild(this),this.style.display="block",A)try{i=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Q}catch{}else this._gsapBBox&&(i=this._gsapBBox());return g&&(C?g.insertBefore(this,C):g.appendChild(this)),st.removeChild(I),this.style.cssText=B,i},Tl=function(A,I){for(var g=I.length;g--;)if(A.hasAttribute(I[g]))return A.getAttribute(I[g])},Ay=function(A){var I;try{I=A.getBBox()}catch{I=dr.call(A,!0)}return I&&(I.width||I.height)||A.getBBox===dr||(I=dr.call(A,!0)),I&&!I.width&&!I.x&&!I.y?{x:+Tl(A,["x","cx","x1"])||0,y:+Tl(A,["y","cy","y1"])||0,width:0,height:0}:I},Iy=function(A){return!!(A.getCTM&&(!A.parentNode||A.ownerSVGElement)&&Ay(A))},ro=function(A,I){if(I){var g=A.style,C;I in Ui&&I!==RB&&(I=ug),g.removeProperty?(C=I.substr(0,2),(C==="ms"||I.substr(0,6)==="webkit")&&(I="-"+I),g.removeProperty(C==="--"?I:I.replace(Xh,"-$1").toLowerCase())):g.removeAttribute(I)}},IE=function(A,I,g,C,B,i){var E=new dB(A._pt,I,g,0,1,i?jG:VG);return A._pt=E,E.b=C,E.e=B,A._props.push(g),E},bl={deg:1,rad:1,turn:1},LU={grid:1,flex:1},tE=function Q(A,I,g,C){var B=parseFloat(g)||0,i=(g+"").trim().substr((B+"").length)||"px",E=XE.style,o=MU.test(I),t=A.tagName.toLowerCase()==="svg",e=(t?"client":"offset")+(o?"Width":"Height"),a=100,s=C==="px",n=C==="%",D,c,h,r;if(C===i||!B||bl[C]||bl[i])return B;if(i!=="px"&&!s&&(B=Q(A,I,g,"px")),r=A.getCTM&&Iy(A),(n||i==="%")&&(Ui[I]||~I.indexOf("adius")))return D=r?A.getBBox()[o?"width":"height"]:A[e],Xg(n?B/D*a:B/100*D);if(E[o?"width":"height"]=a+(s?i:C),c=~I.indexOf("adius")||C==="em"&&A.appendChild&&!t?A:A.parentNode,r&&(c=(A.ownerSVGElement||{}).parentNode),(!c||c===AE||!c.appendChild)&&(c=AE.body),h=c._gsap,h&&n&&h.width&&o&&h.time===OB.time&&!h.uncache)return Xg(B/h.width*a);if(n&&(I==="height"||I==="width")){var S=A.style[I];A.style[I]=a+C,D=A[e],S?A.style[I]=S:ro(A,I)}else(n||i==="%")&&!LU[ZQ(c,"display")]&&(E.position=ZQ(A,"position")),c===A&&(E.position="static"),c.appendChild(XE),D=XE[e],c.removeChild(XE),E.position="absolute";return o&&n&&(h=Bo(c),h.time=OB.time,h.width=c[e]),Xg(s?D*B/a:D&&B?a/D*B:0)},ni=function(A,I,g,C){var B;return Vh||qD(),I in _Q&&I!=="transform"&&(I=_Q[I],~I.indexOf(",")&&(I=I.split(",")[0])),Ui[I]&&I!=="transform"?(B=de(A,C),B=I!=="transformOrigin"?B[I]:B.svg?B.origin:Cn(ZQ(A,RB))+" "+B.zOrigin+"px"):(B=A.style[I],(!B||B==="auto"||C||~(B+"").indexOf("calc("))&&(B=gn[I]&&gn[I](A,I,g)||ZQ(A,I)||cG(A,I)||(I==="opacity"?1:0))),g&&!~(B+"").trim().indexOf(" ")?tE(A,I,B,g)+g:B},mU=function(A,I,g,C){if(!g||g==="none"){var B=St(I,A,1),i=B&&ZQ(A,B,1);i&&i!==g?(I=B,g=i):I==="borderColor"&&(g=ZQ(A,"borderTopColor"))}var E=new dB(this._pt,A.style,I,0,1,ZG),o=0,t=0,e,a,s,n,D,c,h,r,S,l,G,M;if(E.b=g,E.e=C,g+="",C+="",C==="auto"&&(c=A.style[I],A.style[I]=C,C=ZQ(A,I)||C,c?A.style[I]=c:ro(A,I)),e=[g,C],YG(e),g=e[0],C=e[1],s=g.match(Qt)||[],M=C.match(Qt)||[],M.length){for(;a=Qt.exec(C);)h=a[0],S=C.substring(o,a.index),D?D=(D+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(D=1),h!==(c=s[t++]||"")&&(n=parseFloat(c)||0,G=c.substr((n+"").length),h.charAt(1)==="="&&(h=at(n,h)+G),r=parseFloat(h),l=h.substr((r+"").length),o=Qt.lastIndex-l.length,l||(l=l||jB.units[I]||G,o===C.length&&(C+=l,E.e+=l)),G!==l&&(n=tE(A,I,c,l)||0),E._pt={_next:E._pt,p:S||t===1?S:",",s:n,c:r-n,m:D&&D<4||I==="zIndex"?Math.round:0});E.c=o<C.length?C.substring(o,C.length):""}else E.r=I==="display"&&C==="none"?jG:VG;return aG.test(C)&&(E.e=0),this._pt=E,E},xl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},HU=function(A){var I=A.split(" "),g=I[0],C=I[1]||"50%";return(g==="top"||g==="bottom"||C==="left"||C==="right")&&(A=g,g=C,C=A),I[0]=xl[g]||g,I[1]=xl[C]||C,I.join(" ")},TU=function(A,I){if(I.tween&&I.tween._time===I.tween._dur){var g=I.t,C=g.style,B=I.u,i=g._gsap,E,o,t;if(B==="all"||B===!0)C.cssText="",o=1;else for(B=B.split(","),t=B.length;--t>-1;)E=B[t],Ui[E]&&(o=1,E=E==="transformOrigin"?RB:ug),ro(g,E);o&&(ro(g,ug),i&&(i.svg&&g.removeAttribute("transform"),de(g,1),i.uncache=1,XG(C)))}},gn={clearProps:function(A,I,g,C,B){if(B.data!=="isFromStart"){var i=A._pt=new dB(A._pt,I,g,0,0,TU);return i.u=C,i.pr=-10,i.tween=B,A._props.push(g),1}}},Fe=[1,0,0,1,0,0],gy={},Cy=function(A){return A==="matrix(1, 0, 0, 1, 0, 0)"||A==="none"||!A},_l=function(A){var I=ZQ(A,ug);return Cy(I)?Fe:I.substr(7).match(eG).map(Xg)},zh=function(A,I){var g=A._gsap||Bo(A),C=A.style,B=_l(A),i,E,o,t;return g.svg&&A.getAttribute("transform")?(o=A.transform.baseVal.consolidate().matrix,B=[o.a,o.b,o.c,o.d,o.e,o.f],B.join(",")==="1,0,0,1,0,0"?Fe:B):(B===Fe&&!A.offsetParent&&A!==st&&!g.svg&&(o=C.display,C.display="block",i=A.parentNode,(!i||!A.offsetParent)&&(t=1,E=A.nextElementSibling,st.appendChild(A)),B=_l(A),o?C.display=o:ro(A,"display"),t&&(E?i.insertBefore(A,E):i?i.appendChild(A):st.removeChild(A))),I&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B)},YD=function(A,I,g,C,B,i){var E=A._gsap,o=B||zh(A,!0),t=E.xOrigin||0,e=E.yOrigin||0,a=E.xOffset||0,s=E.yOffset||0,n=o[0],D=o[1],c=o[2],h=o[3],r=o[4],S=o[5],l=I.split(" "),G=parseFloat(l[0])||0,M=parseFloat(l[1])||0,U,k,K,q;g?o!==Fe&&(k=n*h-D*c)&&(K=G*(h/k)+M*(-c/k)+(c*S-h*r)/k,q=G*(-D/k)+M*(n/k)-(n*S-D*r)/k,G=K,M=q):(U=Ay(A),G=U.x+(~l[0].indexOf("%")?G/100*U.width:G),M=U.y+(~(l[1]||l[0]).indexOf("%")?M/100*U.height:M)),C||C!==!1&&E.smooth?(r=G-t,S=M-e,E.xOffset=a+(r*n+S*c)-r,E.yOffset=s+(r*D+S*h)-S):E.xOffset=E.yOffset=0,E.xOrigin=G,E.yOrigin=M,E.smooth=!!C,E.origin=I,E.originIsAbsolute=!!g,A.style[RB]="0px 0px",i&&(IE(i,E,"xOrigin",t,G),IE(i,E,"yOrigin",e,M),IE(i,E,"xOffset",a,E.xOffset),IE(i,E,"yOffset",s,E.yOffset)),A.setAttribute("data-svg-origin",G+" "+M)},de=function(A,I){var g=A._gsap||new TG(A);if("x"in g&&!I&&!g.uncache)return g;var C=A.style,B=g.scaleX<0,i="px",E="deg",o=getComputedStyle(A),t=ZQ(A,RB)||"0",e,a,s,n,D,c,h,r,S,l,G,M,U,k,K,q,y,N,T,O,H,V,_,j,IA,AA,oA,sA,JA,CI,QA,GA;return e=a=s=c=h=r=S=l=G=0,n=D=1,g.svg=!!(A.getCTM&&Iy(A)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(C[ug]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[ug]!=="none"?o[ug]:"")),C.scale=C.rotate=C.translate="none"),k=zh(A,g.svg),g.svg&&(g.uncache?(IA=A.getBBox(),t=g.xOrigin-IA.x+"px "+(g.yOrigin-IA.y)+"px",j=""):j=!I&&A.getAttribute("data-svg-origin"),YD(A,j||t,!!j||g.originIsAbsolute,g.smooth!==!1,k)),M=g.xOrigin||0,U=g.yOrigin||0,k!==Fe&&(N=k[0],T=k[1],O=k[2],H=k[3],e=V=k[4],a=_=k[5],k.length===6?(n=Math.sqrt(N*N+T*T),D=Math.sqrt(H*H+O*O),c=N||T?Yo(T,N)*OE:0,S=O||H?Yo(O,H)*OE+c:0,S&&(D*=Math.abs(Math.cos(S*nt))),g.svg&&(e-=M-(M*N+U*O),a-=U-(M*T+U*H))):(GA=k[6],CI=k[7],oA=k[8],sA=k[9],JA=k[10],QA=k[11],e=k[12],a=k[13],s=k[14],K=Yo(GA,JA),h=K*OE,K&&(q=Math.cos(-K),y=Math.sin(-K),j=V*q+oA*y,IA=_*q+sA*y,AA=GA*q+JA*y,oA=V*-y+oA*q,sA=_*-y+sA*q,JA=GA*-y+JA*q,QA=CI*-y+QA*q,V=j,_=IA,GA=AA),K=Yo(-O,JA),r=K*OE,K&&(q=Math.cos(-K),y=Math.sin(-K),j=N*q-oA*y,IA=T*q-sA*y,AA=O*q-JA*y,QA=H*y+QA*q,N=j,T=IA,O=AA),K=Yo(T,N),c=K*OE,K&&(q=Math.cos(K),y=Math.sin(K),j=N*q+T*y,IA=V*q+_*y,T=T*q-N*y,_=_*q-V*y,N=j,V=IA),h&&Math.abs(h)+Math.abs(c)>359.9&&(h=c=0,r=180-r),n=Xg(Math.sqrt(N*N+T*T+O*O)),D=Xg(Math.sqrt(_*_+GA*GA)),K=Yo(V,_),S=Math.abs(K)>2e-4?K*OE:0,G=QA?1/(QA<0?-QA:QA):0),g.svg&&(j=A.getAttribute("transform"),g.forceCSS=A.setAttribute("transform","")||!Cy(ZQ(A,ug)),j&&A.setAttribute("transform",j))),Math.abs(S)>90&&Math.abs(S)<270&&(B?(n*=-1,S+=c<=0?180:-180,c+=c<=0?180:-180):(D*=-1,S+=S<=0?180:-180)),I=I||g.uncache,g.x=e-((g.xPercent=e&&(!I&&g.xPercent||(Math.round(A.offsetWidth/2)===Math.round(-e)?-50:0)))?A.offsetWidth*g.xPercent/100:0)+i,g.y=a-((g.yPercent=a&&(!I&&g.yPercent||(Math.round(A.offsetHeight/2)===Math.round(-a)?-50:0)))?A.offsetHeight*g.yPercent/100:0)+i,g.z=s+i,g.scaleX=Xg(n),g.scaleY=Xg(D),g.rotation=Xg(c)+E,g.rotationX=Xg(h)+E,g.rotationY=Xg(r)+E,g.skewX=S+E,g.skewY=l+E,g.transformPerspective=G+i,(g.zOrigin=parseFloat(t.split(" ")[2])||!I&&g.zOrigin||0)&&(C[RB]=Cn(t)),g.xOffset=g.yOffset=0,g.force3D=jB.force3D,g.renderTransform=g.svg?xU:$G?By:bU,g.uncache=0,g},Cn=function(A){return(A=A.split(" "))[0]+" "+A[1]},Rr=function(A,I,g){var C=XC(I);return Xg(parseFloat(I)+parseFloat(tE(A,"x",g+"px",C)))+C},bU=function(A,I){I.z="0px",I.rotationY=I.rotationX="0deg",I.force3D=0,By(A,I)},RE="0deg",jt="0px",JE=") ",By=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.z,t=g.rotation,e=g.rotationY,a=g.rotationX,s=g.skewX,n=g.skewY,D=g.scaleX,c=g.scaleY,h=g.transformPerspective,r=g.force3D,S=g.target,l=g.zOrigin,G="",M=r==="auto"&&A&&A!==1||r===!0;if(l&&(a!==RE||e!==RE)){var U=parseFloat(e)*nt,k=Math.sin(U),K=Math.cos(U),q;U=parseFloat(a)*nt,q=Math.cos(U),i=Rr(S,i,k*q*-l),E=Rr(S,E,-Math.sin(U)*-l),o=Rr(S,o,K*q*-l+l)}h!==jt&&(G+="perspective("+h+JE),(C||B)&&(G+="translate("+C+"%, "+B+"%) "),(M||i!==jt||E!==jt||o!==jt)&&(G+=o!==jt||M?"translate3d("+i+", "+E+", "+o+") ":"translate("+i+", "+E+JE),t!==RE&&(G+="rotate("+t+JE),e!==RE&&(G+="rotateY("+e+JE),a!==RE&&(G+="rotateX("+a+JE),(s!==RE||n!==RE)&&(G+="skew("+s+", "+n+JE),(D!==1||c!==1)&&(G+="scale("+D+", "+c+JE),S.style[ug]=G||"translate(0, 0)"},xU=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.rotation,t=g.skewX,e=g.skewY,a=g.scaleX,s=g.scaleY,n=g.target,D=g.xOrigin,c=g.yOrigin,h=g.xOffset,r=g.yOffset,S=g.forceCSS,l=parseFloat(i),G=parseFloat(E),M,U,k,K,q;o=parseFloat(o),t=parseFloat(t),e=parseFloat(e),e&&(e=parseFloat(e),t+=e,o+=e),o||t?(o*=nt,t*=nt,M=Math.cos(o)*a,U=Math.sin(o)*a,k=Math.sin(o-t)*-s,K=Math.cos(o-t)*s,t&&(e*=nt,q=Math.tan(t-e),q=Math.sqrt(1+q*q),k*=q,K*=q,e&&(q=Math.tan(e),q=Math.sqrt(1+q*q),M*=q,U*=q)),M=Xg(M),U=Xg(U),k=Xg(k),K=Xg(K)):(M=a,K=s,U=k=0),(l&&!~(i+"").indexOf("px")||G&&!~(E+"").indexOf("px"))&&(l=tE(n,"x",i,"px"),G=tE(n,"y",E,"px")),(D||c||h||r)&&(l=Xg(l+D-(D*M+c*k)+h),G=Xg(G+c-(D*U+c*K)+r)),(C||B)&&(q=n.getBBox(),l=Xg(l+C/100*q.width),G=Xg(G+B/100*q.height)),q="matrix("+M+","+U+","+k+","+K+","+l+","+G+")",n.setAttribute("transform",q),S&&(n.style[ug]=q)},_U=function(A,I,g,C,B){var i=360,E=dC(B),o=parseFloat(B)*(E&&~B.indexOf("rad")?OE:1),t=o-C,e=C+t+"deg",a,s;return E&&(a=B.split("_")[1],a==="short"&&(t%=i,t!==t%(i/2)&&(t+=t<0?i:-i)),a==="cw"&&t<0?t=(t+i*ml)%i-~~(t/i)*i:a==="ccw"&&t>0&&(t=(t-i*ml)%i-~~(t/i)*i)),A._pt=s=new dB(A._pt,I,g,C,t,NU),s.e=e,s.u="deg",A._props.push(g),s},Ol=function(A,I){for(var g in I)A[g]=I[g];return A},OU=function(A,I,g){var C=Ol({},g._gsap),B="perspective,force3D,transformOrigin,svgOrigin",i=g.style,E,o,t,e,a,s,n,D;C.svg?(t=g.getAttribute("transform"),g.setAttribute("transform",""),i[ug]=I,E=de(g,1),ro(g,ug),g.setAttribute("transform",t)):(t=getComputedStyle(g)[ug],i[ug]=I,E=de(g,1),i[ug]=t);for(o in Ui)t=C[o],e=E[o],t!==e&&B.indexOf(o)<0&&(n=XC(t),D=XC(e),a=n!==D?tE(g,o,t,D):parseFloat(t),s=parseFloat(e),A._pt=new dB(A._pt,E,o,a,s-a,fD),A._pt.u=D||0,A._props.push(o));Ol(E,C)};FB("padding,margin,Width,Radius",function(Q,A){var I="Top",g="Right",C="Bottom",B="Left",i=(A<3?[I,g,C,B]:[I+B,I+g,C+g,C+B]).map(function(E){return A<2?Q+E:"border"+E+Q});gn[A>1?"border"+Q:Q]=function(E,o,t,e,a){var s,n;if(arguments.length<4)return s=i.map(function(D){return ni(E,D,t)}),n=s.join(" "),n.split(s[0]).length===5?s[0]:n;s=(e+"").split(" "),n={},i.forEach(function(D,c){return n[D]=s[c]=s[c]||s[(c-1)/2|0]}),E.init(o,n,a)}});var Qy={name:"css",register:qD,targetTest:function(A){return A.style&&A.nodeType},init:function(A,I,g,C,B){var i=this._props,E=A.style,o=g.vars.startAt,t,e,a,s,n,D,c,h,r,S,l,G,M,U,k,K;Vh||qD(),this.styles=this.styles||zG(A),K=this.styles.props,this.tween=g;for(c in I)if(c!=="autoRound"&&(e=I[c],!(_B[c]&&bG(c,I,g,C,A,B)))){if(n=typeof e,D=gn[c],n==="function"&&(e=e.call(g,C,A,B),n=typeof e),n==="string"&&~e.indexOf("random(")&&(e=Ne(e)),D)D(this,A,c,e,g)&&(k=1);else if(c.substr(0,2)==="--")t=(getComputedStyle(A).getPropertyValue(c)+"").trim(),e+="",BE.lastIndex=0,BE.test(t)||(h=XC(t),r=XC(e)),r?h!==r&&(t=tE(A,c,t,r)+r):h&&(e+=h),this.add(E,"setProperty",t,e,C,B,0,0,c),i.push(c),K.push(c,0,E[c]);else if(n!=="undefined"){if(o&&c in o?(t=typeof o[c]=="function"?o[c].call(g,C,A,B):o[c],dC(t)&&~t.indexOf("random(")&&(t=Ne(t)),XC(t+"")||t==="auto"||(t+=jB.units[c]||XC(ni(A,c))||""),(t+"").charAt(1)==="="&&(t=ni(A,c))):t=ni(A,c),s=parseFloat(t),S=n==="string"&&e.charAt(1)==="="&&e.substr(0,2),S&&(e=e.substr(2)),a=parseFloat(e),c in _Q&&(c==="autoAlpha"&&(s===1&&ni(A,"visibility")==="hidden"&&a&&(s=0),K.push("visibility",0,E.visibility),IE(this,E,"visibility",s?"inherit":"hidden",a?"inherit":"hidden",!a)),c!=="scale"&&c!=="transform"&&(c=_Q[c],~c.indexOf(",")&&(c=c.split(",")[0]))),l=c in Ui,l){if(this.styles.save(c),G||(M=A._gsap,M.renderTransform&&!I.parseTransform||de(A,I.parseTransform),U=I.smoothOrigin!==!1&&M.smooth,G=this._pt=new dB(this._pt,E,ug,0,1,M.renderTransform,M,0,-1),G.dep=1),c==="scale")this._pt=new dB(this._pt,M,"scaleY",M.scaleY,(S?at(M.scaleY,S+a):a)-M.scaleY||0,fD),this._pt.u=0,i.push("scaleY",c),c+="X";else if(c==="transformOrigin"){K.push(RB,0,E[RB]),e=HU(e),M.svg?YD(A,e,0,U,0,this):(r=parseFloat(e.split(" ")[2])||0,r!==M.zOrigin&&IE(this,M,"zOrigin",M.zOrigin,r),IE(this,E,c,Cn(t),Cn(e)));continue}else if(c==="svgOrigin"){YD(A,e,1,U,0,this);continue}else if(c in gy){_U(this,M,c,s,S?at(s,S+e):e);continue}else if(c==="smoothOrigin"){IE(this,M,"smooth",M.smooth,e);continue}else if(c==="force3D"){M[c]=e;continue}else if(c==="transform"){OU(this,e,A);continue}}else c in E||(c=St(c)||c);if(l||(a||a===0)&&(s||s===0)&&!UU.test(e)&&c in E)h=(t+"").substr((s+"").length),a||(a=0),r=XC(e)||(c in jB.units?jB.units[c]:h),h!==r&&(s=tE(A,c,t,r)),this._pt=new dB(this._pt,l?M:E,c,s,(S?at(s,S+a):a)-s,!l&&(r==="px"||c==="zIndex")&&I.autoRound!==!1?pU:fD),this._pt.u=r||0,h!==r&&r!=="%"&&(this._pt.b=t,this._pt.r=KU);else if(c in E)mU.call(this,A,c,t,S?S+e:e);else if(c in A)this.add(A,c,t||A[c],S?S+e:e,C,B);else if(c!=="parseTransform"){Th(c,e);continue}l||(c in E?K.push(c,0,E[c]):K.push(c,1,t||A[c])),i.push(c)}}k&&PG(this)},render:function(A,I){if(I.tween._time||!jh())for(var g=I._pt;g;)g.r(A,g.d),g=g._next;else I.styles.revert()},get:ni,aliases:_Q,getSetter:function(A,I,g){var C=_Q[I];return C&&C.indexOf(",")<0&&(I=C),I in Ui&&I!==RB&&(A._gsap.x||ni(A,"x"))?g&&Ll===g?I==="scale"?JU:RU:(Ll=g||{})&&(I==="scale"?fU:uU):A.style&&!Lh(A.style[I])?FU:~I.indexOf("-")?dU:Ph(A,I)},core:{_removeProperty:ro,_getMatrix:zh}};uB.utils.checkPrefix=St;uB.core.getStyleSaver=zG;(function(Q,A,I,g){var C=FB(Q+","+A+","+I,function(B){Ui[B]=1});FB(A,function(B){jB.units[B]="deg",gy[B]=1}),_Q[C[13]]=Q+","+A,FB(g,function(B){var i=B.split(":");_Q[i[1]]=C[i[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");FB("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(Q){jB.units[Q]="px"});uB.registerPlugin(Qy);var Xi=uB.registerPlugin(Qy)||uB;Xi.core.Tween;typeof window<"u"&&(Xi.registerPlugin(iG.ScrollTrigger),Xi.registerPlugin(dM.ScrollToPlugin));function vU(Q){let A,I=`<div class="flex flex-col gap-5 items-left relative"><h1 class="text-7xl sm:text-8xl md:text-9xl font-display drop-shadow-xl">Three <br/> Body <br/> Problem</h1> <div class="text-lg md:text-xl font-displayAlt text-right">Should philosophy guide experiments, or should experiments guide
			philosophy? <br/>
			- Liu Cixin, <i>The Three-Body Problem</i></div> <div class="relative top-0 right-0 font-displayAlt text-2xl sm:text-3xl md:text-4xl">By <a href="https://github.com/zslrmhb" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Hongbin Miao</a>
			&amp;
			<a href="https://github.com/Qz07" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Qirui Zheng</a></div></div>`;return{c(){A=li("div"),A.innerHTML=I,this.h()},l(g){A=wi(g,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),KM(A)!=="svelte-1c43ll0"&&(A.innerHTML=I),this.h()},h(){FC(A,"id","title"),FC(A,"class","relative lg:fixed lg:top-0 lg:left-0 lg:right-0 z-10 grid place-content-center pt-16 px-10 max-w-5xl mx-auto")},m(g,C){mA(g,A,C)},p:WB,i:WB,o:WB,d(g){g&&fA(A)}}}class ZU extends sg{constructor(A){super(),ng(this,A,null,vU,ag,{})}}function PU(Q){let A,I,g;const C=Q[3].default,B=mC(C,Q,Q[2],null);return{c(){A=li("section"),B&&B.c(),this.h()},l(i){A=wi(i,"SECTION",{id:!0,class:!0});var E=gE(A);B&&B.l(E),E.forEach(fA),this.h()},h(){FC(A,"id",Q[0]),FC(A,"class",I="prose prose-xl [&>*]:px-10 mb-60 "+Q[1])},m(i,E){mA(i,A,E),B&&B.m(A,null),g=!0},p(i,[E]){B&&B.p&&(!g||E&4)&&HC(B,C,i,i[2],g?bC(C,i[2],E,null):TC(i[2]),null),(!g||E&1)&&FC(A,"id",i[0]),(!g||E&2&&I!==(I="prose prose-xl [&>*]:px-10 mb-60 "+i[1]))&&FC(A,"class",I)},i(i){g||(EA(B,i),g=!0)},o(i){eA(B,i),g=!1},d(i){i&&fA(A),B&&B.d(i)}}}function WU(Q,A,I){let{$$slots:g={},$$scope:C}=A,{id:B=null}=A,{classNames:i=""}=A;return Q.$$set=E=>{"id"in E&&I(0,B=E.id),"classNames"in E&&I(1,i=E.classNames),"$$scope"in E&&I(2,C=E.$$scope)},[B,i,C,g]}class Jr extends sg{constructor(A){super(),ng(this,A,WU,PU,ag,{id:0,classNames:1})}}function VU(Q){let A,I;const g=Q[2].default,C=mC(g,Q,Q[1],null);return{c(){A=li("p"),C&&C.c(),this.h()},l(B){A=wi(B,"P",{id:!0,class:!0});var i=gE(A);C&&C.l(i),i.forEach(fA),this.h()},h(){FC(A,"id",Q[0]),FC(A,"class","")},m(B,i){mA(B,A,i),C&&C.m(A,null),I=!0},p(B,[i]){C&&C.p&&(!I||i&2)&&HC(C,g,B,B[1],I?bC(g,B[1],i,null):TC(B[1]),null),(!I||i&1)&&FC(A,"id",B[0])},i(B){I||(EA(C,B),I=!0)},o(B){eA(C,B),I=!1},d(B){B&&fA(A),C&&C.d(B)}}}function jU(Q,A,I){let{$$slots:g={},$$scope:C}=A,{id:B}=A;return Q.$$set=i=>{"id"in i&&I(0,B=i.id),"$$scope"in i&&I(1,C=i.$$scope)},[B,C,g]}class aQ extends sg{constructor(A){super(),ng(this,A,jU,VU,ag,{id:0})}}function XU(Q){let A;return{c(){A=li("div"),this.h()},l(I){A=wi(I,"DIV",{class:!0}),gE(A).forEach(fA),this.h()},h(){FC(A,"class","h-16")},m(I,g){mA(I,A,g)},p:WB,i:WB,o:WB,d(I){I&&fA(A)}}}class Za extends sg{constructor(A){super(),ng(this,A,null,XU,ag,{})}}function zU(Q){let A;return{c(){A=GB("This is part 1")},l(I){A=yB(I,"This is part 1")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function $U(Q){let A;return{c(){A=GB("This is part 2")},l(I){A=yB(I,"This is part 2")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function AN(Q){let A;return{c(){A=GB("This is part 3")},l(I){A=yB(I,"This is part 3")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function IN(Q){let A;return{c(){A=GB("This is part 4")},l(I){A=yB(I,"This is part 4")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function gN(Q){let A,I,g,C,B,i,E,o,t;return I=new aQ({props:{id:"st-1",class:"sticky bottom-0 text-center",$$slots:{default:[zU]},$$scope:{ctx:Q}}}),C=new aQ({props:{id:"st-2",$$slots:{default:[$U]},$$scope:{ctx:Q}}}),i=new aQ({props:{id:"st-3",$$slots:{default:[AN]},$$scope:{ctx:Q}}}),o=new aQ({props:{id:"st-4",$$slots:{default:[IN]},$$scope:{ctx:Q}}}),{c(){A=GB(`This is section 1
	`),KA(I.$$.fragment),g=tI(),KA(C.$$.fragment),B=tI(),KA(i.$$.fragment),E=tI(),KA(o.$$.fragment)},l(e){A=yB(e,`This is section 1
	`),pA(I.$$.fragment,e),g=eI(e),pA(C.$$.fragment,e),B=eI(e),pA(i.$$.fragment,e),E=eI(e),pA(o.$$.fragment,e)},m(e,a){mA(e,A,a),FA(I,e,a),mA(e,g,a),FA(C,e,a),mA(e,B,a),FA(i,e,a),mA(e,E,a),FA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(EA(I.$$.fragment,e),EA(C.$$.fragment,e),EA(i.$$.fragment,e),EA(o.$$.fragment,e),t=!0)},o(e){eA(I.$$.fragment,e),eA(C.$$.fragment,e),eA(i.$$.fragment,e),eA(o.$$.fragment,e),t=!1},d(e){e&&(fA(A),fA(g),fA(B),fA(E)),dA(I,e),dA(C,e),dA(i,e),dA(o,e)}}}function CN(Q){let A;return{c(){A=GB("This is part 5")},l(I){A=yB(I,"This is part 5")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function BN(Q){let A;return{c(){A=GB("This is part 6")},l(I){A=yB(I,"This is part 6")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function QN(Q){let A;return{c(){A=GB("This is part 7")},l(I){A=yB(I,"This is part 7")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function iN(Q){let A;return{c(){A=GB("This is part 8")},l(I){A=yB(I,"This is part 8")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function EN(Q){let A,I,g,C,B,i,E,o,t;return I=new aQ({props:{id:"st-5",$$slots:{default:[CN]},$$scope:{ctx:Q}}}),C=new aQ({props:{id:"st-6",$$slots:{default:[BN]},$$scope:{ctx:Q}}}),i=new aQ({props:{id:"st-7",$$slots:{default:[QN]},$$scope:{ctx:Q}}}),o=new aQ({props:{id:"st-8",$$slots:{default:[iN]},$$scope:{ctx:Q}}}),{c(){A=GB(`This is section 2
	`),KA(I.$$.fragment),g=tI(),KA(C.$$.fragment),B=tI(),KA(i.$$.fragment),E=tI(),KA(o.$$.fragment)},l(e){A=yB(e,`This is section 2
	`),pA(I.$$.fragment,e),g=eI(e),pA(C.$$.fragment,e),B=eI(e),pA(i.$$.fragment,e),E=eI(e),pA(o.$$.fragment,e)},m(e,a){mA(e,A,a),FA(I,e,a),mA(e,g,a),FA(C,e,a),mA(e,B,a),FA(i,e,a),mA(e,E,a),FA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(EA(I.$$.fragment,e),EA(C.$$.fragment,e),EA(i.$$.fragment,e),EA(o.$$.fragment,e),t=!0)},o(e){eA(I.$$.fragment,e),eA(C.$$.fragment,e),eA(i.$$.fragment,e),eA(o.$$.fragment,e),t=!1},d(e){e&&(fA(A),fA(g),fA(B),fA(E)),dA(I,e),dA(C,e),dA(i,e),dA(o,e)}}}function oN(Q){let A;return{c(){A=GB("This is part 9")},l(I){A=yB(I,"This is part 9")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function tN(Q){let A;return{c(){A=GB("This is part 10")},l(I){A=yB(I,"This is part 10")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function eN(Q){let A;return{c(){A=GB("This is part 11")},l(I){A=yB(I,"This is part 11")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function aN(Q){let A;return{c(){A=GB("This is part 12")},l(I){A=yB(I,"This is part 12")},m(I,g){mA(I,A,g)},d(I){I&&fA(A)}}}function sN(Q){let A,I,g,C,B,i,E,o,t;return I=new aQ({props:{id:"st-9",$$slots:{default:[oN]},$$scope:{ctx:Q}}}),C=new aQ({props:{id:"st-10",$$slots:{default:[tN]},$$scope:{ctx:Q}}}),i=new aQ({props:{id:"st-11",$$slots:{default:[eN]},$$scope:{ctx:Q}}}),o=new aQ({props:{id:"st-12",$$slots:{default:[aN]},$$scope:{ctx:Q}}}),{c(){A=GB(`This is section 3
	`),KA(I.$$.fragment),g=tI(),KA(C.$$.fragment),B=tI(),KA(i.$$.fragment),E=tI(),KA(o.$$.fragment)},l(e){A=yB(e,`This is section 3
	`),pA(I.$$.fragment,e),g=eI(e),pA(C.$$.fragment,e),B=eI(e),pA(i.$$.fragment,e),E=eI(e),pA(o.$$.fragment,e)},m(e,a){mA(e,A,a),FA(I,e,a),mA(e,g,a),FA(C,e,a),mA(e,B,a),FA(i,e,a),mA(e,E,a),FA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(EA(I.$$.fragment,e),EA(C.$$.fragment,e),EA(i.$$.fragment,e),EA(o.$$.fragment,e),t=!0)},o(e){eA(I.$$.fragment,e),eA(C.$$.fragment,e),eA(i.$$.fragment,e),eA(o.$$.fragment,e),t=!1},d(e){e&&(fA(A),fA(g),fA(B),fA(E)),dA(I,e),dA(C,e),dA(i,e),dA(o,e)}}}function nN(Q){let A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,h;return g=new Jr({props:{id:"section-1",class:"text-7xl",$$slots:{default:[gN]},$$scope:{ctx:Q}}}),B=new Za({}),E=new Jr({props:{id:"section-2",class:"",$$slots:{default:[EN]},$$scope:{ctx:Q}}}),t=new Za({}),a=new Jr({props:{id:"section-3",class:"",$$slots:{default:[sN]},$$scope:{ctx:Q}}}),n=new Za({}),c=new Za({}),{c(){A=li("div"),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment),i=tI(),KA(E.$$.fragment),o=tI(),KA(t.$$.fragment),e=tI(),KA(a.$$.fragment),s=tI(),KA(n.$$.fragment),D=tI(),KA(c.$$.fragment),this.h()},l(r){A=wi(r,"DIV",{id:!0,class:!0}),gE(A).forEach(fA),I=eI(r),pA(g.$$.fragment,r),C=eI(r),pA(B.$$.fragment,r),i=eI(r),pA(E.$$.fragment,r),o=eI(r),pA(t.$$.fragment,r),e=eI(r),pA(a.$$.fragment,r),s=eI(r),pA(n.$$.fragment,r),D=eI(r),pA(c.$$.fragment,r),this.h()},h(){FC(A,"id","title-spacer"),FC(A,"class","h-[2500px]")},m(r,S){mA(r,A,S),mA(r,I,S),FA(g,r,S),mA(r,C,S),FA(B,r,S),mA(r,i,S),FA(E,r,S),mA(r,o,S),FA(t,r,S),mA(r,e,S),FA(a,r,S),mA(r,s,S),FA(n,r,S),mA(r,D,S),FA(c,r,S),h=!0},p(r,[S]){const l={};S&1&&(l.$$scope={dirty:S,ctx:r}),g.$set(l);const G={};S&1&&(G.$$scope={dirty:S,ctx:r}),E.$set(G);const M={};S&1&&(M.$$scope={dirty:S,ctx:r}),a.$set(M)},i(r){h||(EA(g.$$.fragment,r),EA(B.$$.fragment,r),EA(E.$$.fragment,r),EA(t.$$.fragment,r),EA(a.$$.fragment,r),EA(n.$$.fragment,r),EA(c.$$.fragment,r),h=!0)},o(r){eA(g.$$.fragment,r),eA(B.$$.fragment,r),eA(E.$$.fragment,r),eA(t.$$.fragment,r),eA(a.$$.fragment,r),eA(n.$$.fragment,r),eA(c.$$.fragment,r),h=!1},d(r){r&&(fA(A),fA(I),fA(C),fA(i),fA(o),fA(e),fA(s),fA(D)),dA(g,r),dA(B,r),dA(E,r),dA(t,r),dA(a,r),dA(n,r),dA(c,r)}}}class rN extends sg{constructor(A){super(),ng(this,A,null,nN,ag,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="161",vE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ZE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,LD=1,Ey=2,DN=3,hN=0,$h=1,Nn=2,qQ=3,Ni=0,wB=1,TQ=2,Si=0,oo=1,Re=2,mD=3,HD=4,oy=5,zi=100,ty=101,ey=102,TD=103,bD=104,ay=200,sy=201,ny=202,ry=203,Bn=204,Qn=205,Dy=206,hy=207,cy=208,ly=209,wy=210,Sy=211,Gy=212,yy=213,ky=214,My=0,Uy=1,Ny=2,Je=3,Ky=4,py=5,Fy=6,dy=7,ta=0,Ry=1,Jy=2,Gi=0,fy=1,uy=2,qy=3,Ac=4,Yy=5,Ly=6,xD="attached",my="detached",Kn=300,Ki=301,eE=302,fe=303,ue=304,Ft=306,qe=1e3,zC=1001,Ye=1002,zg=1003,En=1004,cN=1004,VE=1005,lN=1005,fg=1006,we=1007,wN=1007,OQ=1008,SN=1008,yi=1009,Hy=1010,Ty=1011,pn=1012,Ic=1013,hi=1014,oQ=1015,Gt=1016,gc=1017,Cc=1018,QE=1020,by=1021,KB=1023,xy=1024,_y=1025,iE=1026,Do=1027,Oy=1028,Bc=1029,vy=1030,Qc=1031,ic=1033,_s=33776,Os=33777,vs=33778,Zs=33779,_D=35840,OD=35841,vD=35842,ZD=35843,Ec=36196,PD=37492,WD=37496,VD=37808,jD=37809,XD=37810,zD=37811,$D=37812,Ah=37813,Ih=37814,gh=37815,Ch=37816,Bh=37817,Qh=37818,ih=37819,Eh=37820,oh=37821,Ps=36492,th=36494,eh=36495,Zy=36283,ah=36284,sh=36285,nh=36286,Py=2200,Wy=2201,Vy=2202,Le=2300,me=2301,Ws=2302,zE=2400,$E=2401,He=2402,Fn=2500,oc=2501,GN=0,yN=1,kN=2,Te=3e3,ki=3001,jy=3200,Xy=3201,DE=0,zy=1,vB="",hC="srgb",jQ="srgb-linear",dn="display-p3",ea="display-p3-linear",be="linear",Sg="srgb",xe="rec709",_e="p3",MN=0,PE=7680,UN=7681,NN=7682,KN=7683,pN=34055,FN=34056,dN=5386,RN=512,JN=513,fN=514,uN=515,qN=516,YN=517,LN=518,rh=519,$y=512,Ak=513,Ik=514,tc=515,gk=516,Ck=517,Bk=518,Qk=519,Oe=35044,mN=35048,HN=35040,TN=35045,bN=35049,xN=35041,_N=35046,ON=35050,vN=35042,ZN="100",Dh="300 es",on=1035,vQ=2e3,ve=2001;class XQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const WC=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const to=Math.PI/180,yt=180/Math.PI;function XB(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(WC[Q&255]+WC[Q>>8&255]+WC[Q>>16&255]+WC[Q>>24&255]+"-"+WC[A&255]+WC[A>>8&255]+"-"+WC[A>>16&15|64]+WC[A>>24&255]+"-"+WC[I&63|128]+WC[I>>8&255]+"-"+WC[I>>16&255]+WC[I>>24&255]+WC[g&255]+WC[g>>8&255]+WC[g>>16&255]+WC[g>>24&255]).toLowerCase()}function xg(Q,A,I){return Math.max(A,Math.min(I,Q))}function ec(Q,A){return(Q%A+A)%A}function PN(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function WN(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function Se(Q,A,I){return(1-I)*Q+I*A}function VN(Q,A,I,g){return Se(Q,A,1-Math.exp(-I*g))}function jN(Q,A=1){return A-Math.abs(ec(Q,A*2)-A)}function XN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function zN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function $N(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function AK(Q,A){return Q+Math.random()*(A-Q)}function IK(Q){return Q*(.5-Math.random())}function gK(Q){Q!==void 0&&(vl=Q);let A=vl+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function CK(Q){return Q*to}function BK(Q){return Q*yt}function hh(Q){return(Q&Q-1)===0&&Q!==0}function QK(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function tn(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function iK(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),o=i(I/2),t=B((A+g)/2),e=i((A+g)/2),a=B((A-g)/2),s=i((A-g)/2),n=B((g-A)/2),D=i((g-A)/2);switch(C){case"XYX":Q.set(E*e,o*a,o*s,E*t);break;case"YZY":Q.set(o*s,E*e,o*a,E*t);break;case"ZXZ":Q.set(o*a,o*s,E*e,E*t);break;case"XZX":Q.set(E*e,o*D,o*n,E*t);break;case"YXY":Q.set(o*n,E*e,o*D,E*t);break;case"ZYZ":Q.set(o*D,o*n,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function lB(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function uI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const ik={DEG2RAD:to,RAD2DEG:yt,generateUUID:XB,clamp:xg,euclideanModulo:ec,mapLinear:PN,inverseLerp:WN,lerp:Se,damp:VN,pingpong:jN,smoothstep:XN,smootherstep:zN,randInt:$N,randFloat:AK,randFloatSpread:IK,seededRandom:gK,degToRad:CK,radToDeg:BK,isPowerOfTwo:hh,ceilPowerOfTwo:QK,floorPowerOfTwo:tn,setQuaternionFromProperEuler:iK,normalize:uI,denormalize:lB};class hA{constructor(A=0,I=0){hA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class YI{constructor(A,I,g,C,B,i,E,o,t){YI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t)}set(A,I,g,C,B,i,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=i,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],D=g[8],c=C[0],h=C[3],r=C[6],S=C[1],l=C[4],G=C[7],M=C[2],U=C[5],k=C[8];return B[0]=i*c+E*S+o*M,B[3]=i*h+E*l+o*U,B[6]=i*r+E*G+o*k,B[1]=t*c+e*S+a*M,B[4]=t*h+e*l+a*U,B[7]=t*r+e*G+a*k,B[2]=s*c+n*S+D*M,B[5]=s*h+n*l+D*U,B[8]=s*r+n*G+D*k,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*i*e-I*E*t-g*B*e+g*E*o+C*B*t-C*i*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*i-E*t,s=E*o-e*B,n=t*B-i*o,D=I*a+g*s+C*n;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/D;return A[0]=a*c,A[1]=(C*t-e*g)*c,A[2]=(E*g-C*i)*c,A[3]=s*c,A[4]=(e*I-C*o)*c,A[5]=(C*B-E*I)*c,A[6]=n*c,A[7]=(g*o-t*I)*c,A[8]=(i*I-g*B)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*i+t*E)+i+A,-C*t,C*o,-C*(-t*i+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(fr.makeScale(A,I)),this}rotate(A){return this.premultiply(fr.makeRotation(-A)),this}translate(A,I){return this.premultiply(fr.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new YI;function Ek(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const EK={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Et(Q,A){return new EK[Q](A)}function Ze(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function ok(){const Q=Ze("canvas");return Q.style.display="block",Q}const Zl={};function eo(Q){Q in Zl||(Zl[Q]=!0,console.warn(Q))}const Pl=new YI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new YI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[jQ]:{transfer:be,primaries:xe,toReference:Q=>Q,fromReference:Q=>Q},[hC]:{transfer:Sg,primaries:xe,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[ea]:{transfer:be,primaries:_e,toReference:Q=>Q.applyMatrix3(Wl),fromReference:Q=>Q.applyMatrix3(Pl)},[dn]:{transfer:Sg,primaries:_e,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(Wl),fromReference:Q=>Q.applyMatrix3(Pl).convertLinearToSRGB()}},oK=new Set([jQ,ea]),gg={enabled:!0,_workingColorSpace:jQ,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!oK.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=Pa[A].toReference,C=Pa[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return Pa[Q].primaries},getTransfer:function(Q){return Q===vB?be:Pa[Q].transfer}};function rt(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function ur(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let Lo;class ac{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{Lo===void 0&&(Lo=Ze("canvas")),Lo.width=A.width,Lo.height=A.height;const g=Lo.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=Lo}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Ze("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=rt(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(rt(I[g]/255)*255):I[g]=rt(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let tK=0;class Ao{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tK++}),this.uuid=XB(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(qr(C[i].image)):B.push(qr(C[i]))}else B=qr(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function qr(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?ac.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eK=0;class Og extends XQ{constructor(A=Og.DEFAULT_IMAGE,I=Og.DEFAULT_MAPPING,g=zC,C=zC,B=fg,i=OQ,E=KB,o=yi,t=Og.DEFAULT_ANISOTROPY,e=vB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eK++}),this.uuid=XB(),this.name="",this.source=new Ao(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new hA(0,0),this.repeat=new hA(1,1),this.center=new hA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ki?hC:vB),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Kn)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case qe:A.x=A.x-Math.floor(A.x);break;case zC:A.x=A.x<0?0:1;break;case Ye:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case qe:A.y=A.y-Math.floor(A.y);break;case zC:A.y=A.y<0?0:1;break;case Ye:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hC?ki:Te}set encoding(A){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===ki?hC:vB}}Og.DEFAULT_IMAGE=null;Og.DEFAULT_MAPPING=Kn;Og.DEFAULT_ANISOTROPY=1;class tg{constructor(A=0,I=0,g=0,C=1){tg.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],D=o[9],c=o[2],h=o[6],r=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-c)<.01&&Math.abs(D-h)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+c)<.1&&Math.abs(D+h)<.1&&Math.abs(t+n+r-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const l=(t+1)/2,G=(n+1)/2,M=(r+1)/2,U=(e+s)/4,k=(a+c)/4,K=(D+h)/4;return l>G&&l>M?l<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(l),C=U/g,B=k/g):G>M?G<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(G),g=U/C,B=K/C):M<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(M),g=k/B,C=K/B),this.set(g,C,B,I),this}let S=Math.sqrt((h-D)*(h-D)+(a-c)*(a-c)+(s-e)*(s-e));return Math.abs(S)<.001&&(S=1),this.x=(h-D)/S,this.y=(a-c)/S,this.z=(s-e)/S,this.w=Math.acos((t+n+r-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tk extends XQ{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new tg(0,0,A,I),this.scissorTest=!1,this.viewport=new tg(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===ki?hC:vB),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Og(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ao(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KQ extends tk{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Rn extends Og{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=zg,this.minFilter=zg,this.wrapR=zC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aK extends KQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new Rn(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class sc extends Og{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=zg,this.minFilter=zg,this.wrapR=zC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sK extends KQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new sc(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class nK extends KQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class vg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[i+0],n=B[i+1],D=B[i+2],c=B[i+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=D,A[I+3]=c;return}if(a!==c||o!==s||t!==n||e!==D){let h=1-E;const r=o*s+t*n+e*D+a*c,S=r>=0?1:-1,l=1-r*r;if(l>Number.EPSILON){const M=Math.sqrt(l),U=Math.atan2(M,r*S);h=Math.sin(h*U)/M,E=Math.sin(E*U)/M}const G=E*S;if(o=o*h+s*G,t=t*h+n*G,e=e*h+D*G,a=a*h+c*G,h===1-E){const M=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=M,t*=M,e*=M,a*=M}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[i],s=B[i+1],n=B[i+2],D=B[i+3];return A[I]=E*D+e*a+o*n-t*s,A[I+1]=o*D+e*s+t*a-E*n,A[I+2]=t*D+e*n+E*s-o*a,A[I+3]=e*D-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),s=o(g/2),n=o(C/2),D=o(B/2);switch(i){case"XYZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"YXZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"ZXY":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"ZYX":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"YZX":this._x=s*e*a+t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a-s*n*D;break;case"XZY":this._x=s*e*a-t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a+s*n*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(B-t)*n,this._z=(i-C)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+i)/n,this._z=(B+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(B-t)/n,this._x=(C+i)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(i-C)/n,this._x=(B+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(xg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+i*E+C*t-B*o,this._y=C*e+i*o+B*E-g*t,this._z=B*e+i*t+g*o-C*E,this._w=i*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=i*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u{constructor(A=0,I=0,g=0){u.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Vl.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Vl.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,o=A.w,t=2*(i*C-E*g),e=2*(E*I-B*C),a=2*(B*g-i*I);return this.x=I+o*t+i*a-E*e,this.y=g+o*e+E*t-B*a,this.z=C+o*a+B*e-i*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*i-g*o,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Yr.copy(this).projectOnVector(A),this.sub(Yr)}reflect(A){return this.sub(Yr.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new u,Vl=new vg;class SB{constructor(A=new u(1/0,1/0,1/0),I=new u(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(SQ.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(SQ.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=SQ.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let i=0,E=B.count;i<E;i++)A.isMesh===!0?A.getVertexPosition(i,SQ):SQ.fromBufferAttribute(B,i),SQ.applyMatrix4(A.matrixWorld),this.expandByPoint(SQ);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),Wa.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),Wa.copy(g.boundingBox)),Wa.applyMatrix4(A.matrixWorld),this.union(Wa)}const C=A.children;for(let B=0,i=C.length;B<i;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,SQ),SQ.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Xt),Va.subVectors(this.max,Xt),mo.subVectors(A.a,Xt),Ho.subVectors(A.b,Xt),To.subVectors(A.c,Xt),bi.subVectors(Ho,mo),xi.subVectors(To,Ho),fE.subVectors(mo,To);let I=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-fE.z,fE.y,bi.z,0,-bi.x,xi.z,0,-xi.x,fE.z,0,-fE.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-fE.y,fE.x,0];return!Lr(I,mo,Ho,To,Va)||(I=[1,0,0,0,1,0,0,0,1],!Lr(I,mo,Ho,To,Va))?!1:(ja.crossVectors(bi,xi),I=[ja.x,ja.y,ja.z],Lr(I,mo,Ho,To,Va))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,SQ).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(SQ).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Qi),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Qi=[new u,new u,new u,new u,new u,new u,new u,new u],SQ=new u,Wa=new SB,mo=new u,Ho=new u,To=new u,bi=new u,xi=new u,fE=new u,Xt=new u,Va=new u,ja=new u,uE=new u;function Lr(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){uE.fromArray(Q,B);const E=C.x*Math.abs(uE.x)+C.y*Math.abs(uE.y)+C.z*Math.abs(uE.z),o=A.dot(uE),t=I.dot(uE),e=g.dot(uE);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const rK=new SB,zt=new u,mr=new u;class gB{constructor(A=new u,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):rK.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;zt.subVectors(A,this.center);const I=zt.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(zt,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(mr.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(zt.copy(A.center).add(mr)),this.expandByPoint(zt.copy(A.center).sub(mr))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new u,Hr=new u,Xa=new u,_i=new u,Tr=new u,za=new u,br=new u;class yo{constructor(A=new u,I=new u(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,ii)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=ii.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(ii.copy(this.origin).addScaledVector(this.direction,I),ii.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){Hr.copy(A).add(I).multiplyScalar(.5),Xa.copy(I).sub(A).normalize(),_i.copy(this.origin).sub(Hr);const B=A.distanceTo(I)*.5,i=-this.direction.dot(Xa),E=_i.dot(this.direction),o=-_i.dot(Xa),t=_i.lengthSq(),e=Math.abs(1-i*i);let a,s,n,D;if(e>0)if(a=i*o-E,s=i*E-o,D=B*e,a>=0)if(s>=-D)if(s<=D){const c=1/e;a*=c,s*=c,n=a*(a+i*s+2*E)+s*(i*a+s+2*o)+t}else s=B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-D?(a=Math.max(0,-(-i*B+E)),s=a>0?-B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t):s<=D?(a=0,s=Math.min(Math.max(-B,-o),B),n=s*(s+2*o)+t):(a=Math.max(0,-(i*B+E)),s=a>0?B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t);else s=i>0?-B:B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(Hr).addScaledVector(Xa,s),n}intersectSphere(A,I){ii.subVectors(A.center,this.origin);const g=ii.dot(this.direction),C=ii.dot(ii)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,o=g+i;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,i=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,i=(A.min.y-s.y)*e),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,ii)!==null}intersectTriangle(A,I,g,C,B){Tr.subVectors(I,A),za.subVectors(g,A),br.crossVectors(Tr,za);let i=this.direction.dot(br),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;_i.subVectors(this.origin,A);const o=E*this.direction.dot(za.crossVectors(_i,za));if(o<0)return null;const t=E*this.direction.dot(Tr.cross(_i));if(t<0||o+t>i)return null;const e=-E*_i.dot(br);return e<0?null:this.at(e/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wI{constructor(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,h){wI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,h)}set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,h){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=B,r[5]=i,r[9]=E,r[13]=o,r[2]=t,r[6]=e,r[10]=a,r[14]=s,r[3]=n,r[7]=D,r[11]=c,r[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/bo.setFromMatrixColumn(A,0).length(),B=1/bo.setFromMatrixColumn(A,1).length(),i=1/bo.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=i*e,n=i*a,D=E*e,c=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+D*t,I[5]=s-c*t,I[9]=-E*o,I[2]=c-s*t,I[6]=D+n*t,I[10]=i*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,D=t*e,c=t*a;I[0]=s+c*E,I[4]=D*E-n,I[8]=i*t,I[1]=i*a,I[5]=i*e,I[9]=-E,I[2]=n*E-D,I[6]=c+s*E,I[10]=i*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,D=t*e,c=t*a;I[0]=s-c*E,I[4]=-i*a,I[8]=D+n*E,I[1]=n+D*E,I[5]=i*e,I[9]=c-s*E,I[2]=-i*t,I[6]=E,I[10]=i*o}else if(A.order==="ZYX"){const s=i*e,n=i*a,D=E*e,c=E*a;I[0]=o*e,I[4]=D*t-n,I[8]=s*t+c,I[1]=o*a,I[5]=c*t+s,I[9]=n*t-D,I[2]=-t,I[6]=E*o,I[10]=i*o}else if(A.order==="YZX"){const s=i*o,n=i*t,D=E*o,c=E*t;I[0]=o*e,I[4]=c-s*a,I[8]=D*a+n,I[1]=a,I[5]=i*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+D,I[10]=s-c*a}else if(A.order==="XZY"){const s=i*o,n=i*t,D=E*o,c=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+c,I[5]=i*e,I[9]=n*a-D,I[2]=D*a-n,I[6]=E*e,I[10]=c*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(DK,A,hK)}lookAt(A,I,g){const C=this.elements;return TB.subVectors(A,I),TB.lengthSq()===0&&(TB.z=1),TB.normalize(),Oi.crossVectors(g,TB),Oi.lengthSq()===0&&(Math.abs(g.z)===1?TB.x+=1e-4:TB.z+=1e-4,TB.normalize(),Oi.crossVectors(g,TB)),Oi.normalize(),$a.crossVectors(TB,Oi),C[0]=Oi.x,C[4]=$a.x,C[8]=TB.x,C[1]=Oi.y,C[5]=$a.y,C[9]=TB.y,C[2]=Oi.z,C[6]=$a.z,C[10]=TB.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],D=g[2],c=g[6],h=g[10],r=g[14],S=g[3],l=g[7],G=g[11],M=g[15],U=C[0],k=C[4],K=C[8],q=C[12],y=C[1],N=C[5],T=C[9],O=C[13],H=C[2],V=C[6],_=C[10],j=C[14],IA=C[3],AA=C[7],oA=C[11],sA=C[15];return B[0]=i*U+E*y+o*H+t*IA,B[4]=i*k+E*N+o*V+t*AA,B[8]=i*K+E*T+o*_+t*oA,B[12]=i*q+E*O+o*j+t*sA,B[1]=e*U+a*y+s*H+n*IA,B[5]=e*k+a*N+s*V+n*AA,B[9]=e*K+a*T+s*_+n*oA,B[13]=e*q+a*O+s*j+n*sA,B[2]=D*U+c*y+h*H+r*IA,B[6]=D*k+c*N+h*V+r*AA,B[10]=D*K+c*T+h*_+r*oA,B[14]=D*q+c*O+h*j+r*sA,B[3]=S*U+l*y+G*H+M*IA,B[7]=S*k+l*N+G*V+M*AA,B[11]=S*K+l*T+G*_+M*oA,B[15]=S*q+l*O+G*j+M*sA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],D=A[3],c=A[7],h=A[11],r=A[15];return D*(+B*o*a-C*t*a-B*E*s+g*t*s+C*E*n-g*o*n)+c*(+I*o*n-I*t*s+B*i*s-C*i*n+C*t*e-B*o*e)+h*(+I*t*a-I*E*n-B*i*a+g*i*n+B*E*e-g*t*e)+r*(-C*E*e-I*o*a+I*E*s+C*i*a-g*i*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],D=A[12],c=A[13],h=A[14],r=A[15],S=a*h*t-c*s*t+c*o*n-E*h*n-a*o*r+E*s*r,l=D*s*t-e*h*t-D*o*n+i*h*n+e*o*r-i*s*r,G=e*c*t-D*a*t+D*E*n-i*c*n-e*E*r+i*a*r,M=D*a*o-e*c*o-D*E*s+i*c*s+e*E*h-i*a*h,U=I*S+g*l+C*G+B*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return A[0]=S*k,A[1]=(c*s*B-a*h*B-c*C*n+g*h*n+a*C*r-g*s*r)*k,A[2]=(E*h*B-c*o*B+c*C*t-g*h*t-E*C*r+g*o*r)*k,A[3]=(a*o*B-E*s*B-a*C*t+g*s*t+E*C*n-g*o*n)*k,A[4]=l*k,A[5]=(e*h*B-D*s*B+D*C*n-I*h*n-e*C*r+I*s*r)*k,A[6]=(D*o*B-i*h*B-D*C*t+I*h*t+i*C*r-I*o*r)*k,A[7]=(i*s*B-e*o*B+e*C*t-I*s*t-i*C*n+I*o*n)*k,A[8]=G*k,A[9]=(D*a*B-e*c*B-D*g*n+I*c*n+e*g*r-I*a*r)*k,A[10]=(i*c*B-D*E*B+D*g*t-I*c*t-i*g*r+I*E*r)*k,A[11]=(e*E*B-i*a*B-e*g*t+I*a*t+i*g*n-I*E*n)*k,A[12]=M*k,A[13]=(e*c*C-D*a*C+D*g*s-I*c*s-e*g*h+I*a*h)*k,A[14]=(D*E*C-i*c*C-D*g*o+I*c*o+i*g*h-I*E*h)*k,A[15]=(i*a*C-e*E*C+e*g*o-I*a*o-i*g*s+I*E*s)*k,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,o=A.z,t=B*i,e=B*E;return this.set(t*i+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*i,0,t*o-C*E,e*o+C*i,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,o=I._w,t=B+B,e=i+i,a=E+E,s=B*t,n=B*e,D=B*a,c=i*e,h=i*a,r=E*a,S=o*t,l=o*e,G=o*a,M=g.x,U=g.y,k=g.z;return C[0]=(1-(c+r))*M,C[1]=(n+G)*M,C[2]=(D-l)*M,C[3]=0,C[4]=(n-G)*U,C[5]=(1-(s+r))*U,C[6]=(h+S)*U,C[7]=0,C[8]=(D+l)*k,C[9]=(h-S)*k,C[10]=(1-(s+c))*k,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=bo.set(C[0],C[1],C[2]).length();const i=bo.set(C[4],C[5],C[6]).length(),E=bo.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],GQ.copy(this);const t=1/B,e=1/i,a=1/E;return GQ.elements[0]*=t,GQ.elements[1]*=t,GQ.elements[2]*=t,GQ.elements[4]*=e,GQ.elements[5]*=e,GQ.elements[6]*=e,GQ.elements[8]*=a,GQ.elements[9]*=a,GQ.elements[10]*=a,I.setFromRotationMatrix(GQ),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i,E=vQ){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,D;if(E===vQ)n=-(i+B)/(i-B),D=-2*i*B/(i-B);else if(E===ve)n=-i/(i-B),D=-i*B/(i-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=D,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,i,E=vQ){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(i-B),s=(I+A)*t,n=(g+C)*e;let D,c;if(E===vQ)D=(i+B)*a,c=-2*a;else if(E===ve)D=B*a,c=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=c,o[14]=-D,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const bo=new u,GQ=new wI,DK=new u(0,0,0),hK=new u(1,1,1),Oi=new u,$a=new u,TB=new u,jl=new wI,Xl=new vg;class ko{constructor(A=0,I=0,g=0,C=ko.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(xg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-xg(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(xg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-xg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(xg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-xg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return jl.makeRotationFromQuaternion(A),this.setFromRotationMatrix(jl,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ko.DEFAULT_ORDER="XYZ";class Jn{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let cK=0;const zl=new u,xo=new vg,Ei=new wI,As=new u,$t=new u,lK=new u,wK=new vg,$l=new u(1,0,0),Aw=new u(0,1,0),Iw=new u(0,0,1),SK={type:"added"},GK={type:"removed"};class VI extends XQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cK++}),this.uuid=XB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=VI.DEFAULT_UP.clone();const A=new u,I=new ko,g=new vg,C=new u(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new wI},normalMatrix:{value:new YI}}),this.matrix=new wI,this.matrixWorld=new wI,this.matrixAutoUpdate=VI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=VI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return xo.setFromAxisAngle(A,I),this.quaternion.multiply(xo),this}rotateOnWorldAxis(A,I){return xo.setFromAxisAngle(A,I),this.quaternion.premultiply(xo),this}rotateX(A){return this.rotateOnAxis($l,A)}rotateY(A){return this.rotateOnAxis(Aw,A)}rotateZ(A){return this.rotateOnAxis(Iw,A)}translateOnAxis(A,I){return zl.copy(A).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis($l,A)}translateY(A){return this.translateOnAxis(Aw,A)}translateZ(A){return this.translateOnAxis(Iw,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?As.copy(A):As.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),$t.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt($t,As,this.up):Ei.lookAt(As,$t,this.up),this.quaternion.setFromRotationMatrix(Ei),C&&(Ei.extractRotation(C.matrixWorld),xo.setFromRotationMatrix(Ei),this.quaternion.premultiply(xo.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(SK)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(GK)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ei.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ei),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,i=C.length;B<i;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,A,lK),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,wK,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=i(A.geometries),o=i(A.materials),t=i(A.textures),e=i(A.images),a=i(A.shapes),s=i(A.skeletons),n=i(A.animations),D=i(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),D.length>0&&(g.nodes=D)}return g.object=C,g;function i(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}VI.DEFAULT_UP=new u(0,1,0);VI.DEFAULT_MATRIX_AUTO_UPDATE=!0;VI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yQ=new u,oi=new u,xr=new u,ti=new u,_o=new u,Oo=new u,gw=new u,_r=new u,Or=new u,vr=new u;class ZB{constructor(A=new u,I=new u,g=new u){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),yQ.subVectors(A,I),C.cross(yQ);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){yQ.subVectors(C,I),oi.subVectors(g,I),xr.subVectors(A,I);const i=yQ.dot(yQ),E=yQ.dot(oi),o=yQ.dot(xr),t=oi.dot(oi),e=oi.dot(xr),a=i*t-E*E;if(a===0)return B.set(0,0,0),null;const s=1/a,n=(t*o-E*e)*s,D=(i*e-E*o)*s;return B.set(1-n-D,D,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(A,I,g,C,B,i,E,o){return this.getBarycoord(A,I,g,C,ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,ti.x),o.addScaledVector(i,ti.y),o.addScaledVector(E,ti.z),o)}static isFrontFacing(A,I,g,C){return yQ.subVectors(g,I),oi.subVectors(A,I),yQ.cross(oi).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return yQ.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),yQ.cross(oi).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return ZB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return ZB.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return ZB.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return ZB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return ZB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;_o.subVectors(C,g),Oo.subVectors(B,g),_r.subVectors(A,g);const o=_o.dot(_r),t=Oo.dot(_r);if(o<=0&&t<=0)return I.copy(g);Or.subVectors(A,C);const e=_o.dot(Or),a=Oo.dot(Or);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return i=o/(o-e),I.copy(g).addScaledVector(_o,i);vr.subVectors(A,B);const n=_o.dot(vr),D=Oo.dot(vr);if(D>=0&&n<=D)return I.copy(B);const c=n*t-o*D;if(c<=0&&t>=0&&D<=0)return E=t/(t-D),I.copy(g).addScaledVector(Oo,E);const h=e*D-n*a;if(h<=0&&a-e>=0&&n-D>=0)return gw.subVectors(B,C),E=(a-e)/(a-e+(n-D)),I.copy(C).addScaledVector(gw,E);const r=1/(h+c+s);return i=c*r,E=s*r,I.copy(g).addScaledVector(_o,i).addScaledVector(Oo,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const ek={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Zr(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class ZA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=hC){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,gg.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=gg.workingColorSpace){return this.r=A,this.g=I,this.b=g,gg.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=gg.workingColorSpace){if(A=ec(A,1),I=xg(I,0,1),g=xg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=Zr(i,B,A+1/3),this.g=Zr(i,B,A),this.b=Zr(i,B,A-1/3)}return gg.toWorkingColorSpace(this,C),this}setStyle(A,I=hC){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=hC){const g=ek[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=rt(A.r),this.g=rt(A.g),this.b=rt(A.b),this}copyLinearToSRGB(A){return this.r=ur(A.r),this.g=ur(A.g),this.b=ur(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=hC){return gg.fromWorkingColorSpace(VC.copy(this),A),Math.round(xg(VC.r*255,0,255))*65536+Math.round(xg(VC.g*255,0,255))*256+Math.round(xg(VC.b*255,0,255))}getHexString(A=hC){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=gg.workingColorSpace){gg.fromWorkingColorSpace(VC.copy(this),I);const g=VC.r,C=VC.g,B=VC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+i)/2;if(E===i)o=0,t=0;else{const a=i-E;switch(t=e<=.5?a/(i+E):a/(2-i-E),i){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=gg.workingColorSpace){return gg.fromWorkingColorSpace(VC.copy(this),I),A.r=VC.r,A.g=VC.g,A.b=VC.b,A}getStyle(A=hC){gg.fromWorkingColorSpace(VC.copy(this),A);const I=VC.r,g=VC.g,C=VC.b;return A!==hC?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(vi),this.setHSL(vi.h+A,vi.s+I,vi.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(vi),A.getHSL(Is);const g=Se(vi.h,Is.h,I),C=Se(vi.s,Is.s,I),B=Se(vi.l,Is.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const VC=new ZA;ZA.NAMES=ek;let yK=0;class CB extends XQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yK++}),this.uuid=XB(),this.name="",this.type="Material",this.blending=oo,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bn,this.blendDst=Qn,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ZA(0,0,0),this.blendAlpha=0,this.depthFunc=Je,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=PE,this.stencilZFail=PE,this.stencilZPass=PE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(g.blending=this.blending),this.side!==Ni&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==Bn&&(g.blendSrc=this.blendSrc),this.blendDst!==Qn&&(g.blendDst=this.blendDst),this.blendEquation!==zi&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==Je&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==PE&&(g.stencilFail=this.stencilFail),this.stencilZFail!==PE&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==PE&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const o=B[E];delete o.metadata,i.push(o)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class hE extends CB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ZA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Di=kK();function kK(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,B[o]=t|e}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)i[o]=o<<23;i[31]=1199570944,i[32]=2147483648;for(let o=33;o<63;++o)i[o]=2147483648+(o-32<<23);i[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(E[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function NB(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=xg(Q,-65504,65504),Di.floatView[0]=Q;const A=Di.uint32View[0],I=A>>23&511;return Di.baseTable[I]+((A&8388607)>>Di.shiftTable[I])}function ee(Q){const A=Q>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[A]+(Q&1023)]+Di.exponentTable[A],Di.floatView[0]}const MK={toHalfFloat:NB,fromHalfFloat:ee},QC=new u,gs=new hA;class eg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Oe,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oQ,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return eo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)gs.fromBufferAttribute(this,I),gs.applyMatrix3(A),this.setXY(I,gs.x,gs.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyMatrix3(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyMatrix4(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyNormalMatrix(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.transformDirection(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=lB(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=uI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=lB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=lB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=lB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=lB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Oe&&(A.usage=this.usage),A}}class UK extends eg{constructor(A,I,g){super(new Int8Array(A),I,g)}}class NK extends eg{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class KK extends eg{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class pK extends eg{constructor(A,I,g){super(new Int16Array(A),I,g)}}class nc extends eg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class FK extends eg{constructor(A,I,g){super(new Int32Array(A),I,g)}}class rc extends eg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class dK extends eg{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=ee(this.array[A*this.itemSize]);return this.normalized&&(I=lB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=NB(I),this}getY(A){let I=ee(this.array[A*this.itemSize+1]);return this.normalized&&(I=lB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=NB(I),this}getZ(A){let I=ee(this.array[A*this.itemSize+2]);return this.normalized&&(I=lB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=NB(I),this}getW(A){let I=ee(this.array[A*this.itemSize+3]);return this.normalized&&(I=lB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=NB(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=NB(I),this.array[A+1]=NB(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=NB(I),this.array[A+1]=NB(g),this.array[A+2]=NB(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=NB(I),this.array[A+1]=NB(g),this.array[A+2]=NB(C),this.array[A+3]=NB(B),this}}class BI extends eg{constructor(A,I,g){super(new Float32Array(A),I,g)}}class RK extends eg{constructor(A,I,g){super(new Float64Array(A),I,g)}}let JK=0;const QQ=new wI,Pr=new VI,vo=new u,bB=new SB,Ae=new SB,UC=new u;class mI extends XQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JK++}),this.uuid=XB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ek(A)?rc:nc)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new YI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return QQ.makeRotationFromQuaternion(A),this.applyMatrix4(QQ),this}rotateX(A){return QQ.makeRotationX(A),this.applyMatrix4(QQ),this}rotateY(A){return QQ.makeRotationY(A),this.applyMatrix4(QQ),this}rotateZ(A){return QQ.makeRotationZ(A),this.applyMatrix4(QQ),this}translate(A,I,g){return QQ.makeTranslation(A,I,g),this.applyMatrix4(QQ),this}scale(A,I,g){return QQ.makeScale(A,I,g),this.applyMatrix4(QQ),this}lookAt(A){return Pr.lookAt(A),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new BI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new SB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new u(-1/0,-1/0,-1/0),new u(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];bB.setFromBufferAttribute(B),this.morphTargetsRelative?(UC.addVectors(this.boundingBox.min,bB.min),this.boundingBox.expandByPoint(UC),UC.addVectors(this.boundingBox.max,bB.max),this.boundingBox.expandByPoint(UC)):(this.boundingBox.expandByPoint(bB.min),this.boundingBox.expandByPoint(bB.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new u,1/0);return}if(A){const g=this.boundingSphere.center;if(bB.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];Ae.setFromBufferAttribute(E),this.morphTargetsRelative?(UC.addVectors(bB.min,Ae.min),bB.expandByPoint(UC),UC.addVectors(bB.max,Ae.max),bB.expandByPoint(UC)):(bB.expandByPoint(Ae.min),bB.expandByPoint(Ae.max))}bB.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)UC.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(UC));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)UC.fromBufferAttribute(E,t),o&&(vo.fromBufferAttribute(A,t),UC.add(vo)),C=Math.max(C,g.distanceToSquared(UC))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new eg(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let y=0;y<E;y++)t[y]=new u,e[y]=new u;const a=new u,s=new u,n=new u,D=new hA,c=new hA,h=new hA,r=new u,S=new u;function l(y,N,T){a.fromArray(C,y*3),s.fromArray(C,N*3),n.fromArray(C,T*3),D.fromArray(i,y*2),c.fromArray(i,N*2),h.fromArray(i,T*2),s.sub(a),n.sub(a),c.sub(D),h.sub(D);const O=1/(c.x*h.y-h.x*c.y);isFinite(O)&&(r.copy(s).multiplyScalar(h.y).addScaledVector(n,-c.y).multiplyScalar(O),S.copy(n).multiplyScalar(c.x).addScaledVector(s,-h.x).multiplyScalar(O),t[y].add(r),t[N].add(r),t[T].add(r),e[y].add(S),e[N].add(S),e[T].add(S))}let G=this.groups;G.length===0&&(G=[{start:0,count:g.length}]);for(let y=0,N=G.length;y<N;++y){const T=G[y],O=T.start,H=T.count;for(let V=O,_=O+H;V<_;V+=3)l(g[V+0],g[V+1],g[V+2])}const M=new u,U=new u,k=new u,K=new u;function q(y){k.fromArray(B,y*3),K.copy(k);const N=t[y];M.copy(N),M.sub(k.multiplyScalar(k.dot(N))).normalize(),U.crossVectors(K,N);const O=U.dot(e[y])<0?-1:1;o[y*4]=M.x,o[y*4+1]=M.y,o[y*4+2]=M.z,o[y*4+3]=O}for(let y=0,N=G.length;y<N;++y){const T=G[y],O=T.start,H=T.count;for(let V=O,_=O+H;V<_;V+=3)q(g[V+0]),q(g[V+1]),q(g[V+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new eg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new u,B=new u,i=new u,E=new u,o=new u,t=new u,e=new u,a=new u;if(A)for(let s=0,n=A.count;s<n;s+=3){const D=A.getX(s+0),c=A.getX(s+1),h=A.getX(s+2);C.fromBufferAttribute(I,D),B.fromBufferAttribute(I,c),i.fromBufferAttribute(I,h),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,D),o.fromBufferAttribute(g,c),t.fromBufferAttribute(g,h),E.add(e),o.add(e),t.add(e),g.setXYZ(D,E.x,E.y,E.z),g.setXYZ(c,o.x,o.y,o.z),g.setXYZ(h,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),i.fromBufferAttribute(I,s+2),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)UC.fromBufferAttribute(A,I),UC.normalize(),A.setXYZ(I,UC.x,UC.y,UC.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,D=0;for(let c=0,h=o.length;c<h;c++){E.isInterleavedBufferAttribute?n=o[c]*E.data.stride+E.offset:n=o[c]*e;for(let r=0;r<e;r++)s[D++]=t[n++]}return new eg(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new mI,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,o=i.length;E<o;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,e=i.length;t<e;t++){const a=i[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cw=new wI,qE=new yo,Cs=new gB,Bw=new u,Zo=new u,Po=new u,Wo=new u,Wr=new u,Bs=new u,Qs=new hA,is=new hA,Es=new hA,Qw=new u,iw=new u,Ew=new u,os=new u,ts=new u;class $g extends VI{constructor(A=new mI,I=new hE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){Bs.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(Wr.fromBufferAttribute(a,A),i?Bs.addScaledVector(Wr,e):Bs.addScaledVector(Wr.sub(I),e))}I.add(Bs)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),Cs.copy(g.boundingSphere),Cs.applyMatrix4(B),qE.copy(A.ray).recast(A.near),!(Cs.containsPoint(qE.origin)===!1&&(qE.intersectSphere(Cs,Bw)===null||qE.origin.distanceToSquared(Bw)>(A.far-A.near)**2))&&(Cw.copy(B).invert(),qE.copy(A.ray).applyMatrix4(Cw),!(g.boundingBox!==null&&qE.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,qE)))}_computeIntersections(A,I,g){let C;const B=this.geometry,i=this.material,E=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(i))for(let D=0,c=s.length;D<c;D++){const h=s[D],r=i[h.materialIndex],S=Math.max(h.start,n.start),l=Math.min(E.count,Math.min(h.start+h.count,n.start+n.count));for(let G=S,M=l;G<M;G+=3){const U=E.getX(G),k=E.getX(G+1),K=E.getX(G+2);C=es(this,r,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),c=Math.min(E.count,n.start+n.count);for(let h=D,r=c;h<r;h+=3){const S=E.getX(h),l=E.getX(h+1),G=E.getX(h+2);C=es(this,i,A,g,t,e,a,S,l,G),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(i))for(let D=0,c=s.length;D<c;D++){const h=s[D],r=i[h.materialIndex],S=Math.max(h.start,n.start),l=Math.min(o.count,Math.min(h.start+h.count,n.start+n.count));for(let G=S,M=l;G<M;G+=3){const U=G,k=G+1,K=G+2;C=es(this,r,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),c=Math.min(o.count,n.start+n.count);for(let h=D,r=c;h<r;h+=3){const S=h,l=h+1,G=h+2;C=es(this,i,A,g,t,e,a,S,l,G),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}}}function fK(Q,A,I,g,C,B,i,E){let o;if(A.side===wB?o=g.intersectTriangle(i,B,C,!0,E):o=g.intersectTriangle(C,B,i,A.side===Ni,E),o===null)return null;ts.copy(E),ts.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(ts);return t<I.near||t>I.far?null:{distance:t,point:ts.clone(),object:Q}}function es(Q,A,I,g,C,B,i,E,o,t){Q.getVertexPosition(E,Zo),Q.getVertexPosition(o,Po),Q.getVertexPosition(t,Wo);const e=fK(Q,A,I,g,Zo,Po,Wo,os);if(e){C&&(Qs.fromBufferAttribute(C,E),is.fromBufferAttribute(C,o),Es.fromBufferAttribute(C,t),e.uv=ZB.getInterpolation(os,Zo,Po,Wo,Qs,is,Es,new hA)),B&&(Qs.fromBufferAttribute(B,E),is.fromBufferAttribute(B,o),Es.fromBufferAttribute(B,t),e.uv1=ZB.getInterpolation(os,Zo,Po,Wo,Qs,is,Es,new hA),e.uv2=e.uv1),i&&(Qw.fromBufferAttribute(i,E),iw.fromBufferAttribute(i,o),Ew.fromBufferAttribute(i,t),e.normal=ZB.getInterpolation(os,Zo,Po,Wo,Qw,iw,Ew,new u),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:o,c:t,normal:new u,materialIndex:0};ZB.getNormal(Zo,Po,Wo,a.normal),e.face=a}return e}class Mo extends mI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const o=[],t=[],e=[],a=[];let s=0,n=0;D("z","y","x",-1,-1,g,I,A,i,B,0),D("z","y","x",1,-1,g,I,-A,i,B,1),D("x","z","y",1,1,A,g,I,C,i,2),D("x","z","y",1,-1,A,g,-I,C,i,3),D("x","y","z",1,-1,A,I,g,C,B,4),D("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new BI(t,3)),this.setAttribute("normal",new BI(e,3)),this.setAttribute("uv",new BI(a,2));function D(c,h,r,S,l,G,M,U,k,K,q){const y=G/k,N=M/K,T=G/2,O=M/2,H=U/2,V=k+1,_=K+1;let j=0,IA=0;const AA=new u;for(let oA=0;oA<_;oA++){const sA=oA*N-O;for(let JA=0;JA<V;JA++){const CI=JA*y-T;AA[c]=CI*S,AA[h]=sA*l,AA[r]=H,t.push(AA.x,AA.y,AA.z),AA[c]=0,AA[h]=0,AA[r]=U>0?1:-1,e.push(AA.x,AA.y,AA.z),a.push(JA/k),a.push(1-oA/K),j+=1}}for(let oA=0;oA<K;oA++)for(let sA=0;sA<k;sA++){const JA=s+sA+V*oA,CI=s+sA+V*(oA+1),QA=s+(sA+1)+V*(oA+1),GA=s+(sA+1)+V*oA;o.push(JA,CI,GA),o.push(CI,QA,GA),IA+=6}E.addGroup(n,IA,q),n+=IA,s+=j}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Mo(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function kt(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function DB(Q){const A={};for(let I=0;I<Q.length;I++){const g=kt(Q[I]);for(const C in g)A[C]=g[C]}return A}function uK(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function ak(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:gg.workingColorSpace}const sk={clone:kt,merge:DB};var qK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class AQ extends CB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qK,this.fragmentShader=YK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=kt(A.uniforms),this.uniformsGroups=uK(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class fn extends VI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wI,this.projectionMatrix=new wI,this.projectionMatrixInverse=new wI,this.coordinateSystem=vQ}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new u,ow=new hA,tw=new hA;class pC extends fn{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=yt*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return yt*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(Zi.x,Zi.y).multiplyScalar(-A/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(Zi.x,Zi.y).multiplyScalar(-A/Zi.z)}getViewSize(A,I){return this.getViewBounds(A,ow,tw),I.subVectors(tw,ow)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(to*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const o=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/o,I-=i.offsetY*g/t,C*=i.width/o,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const Vo=-90,jo=1;class nk extends VI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new pC(Vo,jo,A,I);C.layers=this.layers,this.add(C);const B=new pC(Vo,jo,A,I);B.layers=this.layers,this.add(B);const i=new pC(Vo,jo,A,I);i.layers=this.layers,this.add(i);const E=new pC(Vo,jo,A,I);E.layers=this.layers,this.add(E);const o=new pC(Vo,jo,A,I);o.layers=this.layers,this.add(o);const t=new pC(Vo,jo,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,i,E,o]=I;for(const t of I)this.remove(t);if(A===vQ)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===ve)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,i,E,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),D=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,i),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class aa extends Og{constructor(A,I,g,C,B,i,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:Ki,super(A,I,g,C,B,i,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class rk extends KQ{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===ki?hC:vB),this.texture=new aa(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:fg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new Mo(5,5,5),B=new AQ({name:"CubemapFromEquirect",uniforms:kt(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:wB,blending:Si});B.uniforms.tEquirect.value=I;const i=new $g(C,B),E=I.minFilter;return I.minFilter===OQ&&(I.minFilter=fg),new nk(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const Vr=new u,LK=new u,mK=new YI;class ri{constructor(A=new u(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Vr.subVectors(g,I).cross(LK.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Vr),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||mK.getNormalMatrix(A),C=this.coplanarPoint(Vr).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const YE=new gB,as=new u;class sa{constructor(A=new ri,I=new ri,g=new ri,C=new ri,B=new ri,i=new ri){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=vQ){const g=this.planes,C=A.elements,B=C[0],i=C[1],E=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],D=C[9],c=C[10],h=C[11],r=C[12],S=C[13],l=C[14],G=C[15];if(g[0].setComponents(o-B,s-t,h-n,G-r).normalize(),g[1].setComponents(o+B,s+t,h+n,G+r).normalize(),g[2].setComponents(o+i,s+e,h+D,G+S).normalize(),g[3].setComponents(o-i,s-e,h-D,G-S).normalize(),g[4].setComponents(o-E,s-a,h-c,G-l).normalize(),I===vQ)g[5].setComponents(o+E,s+a,h+c,G+l).normalize();else if(I===ve)g[5].setComponents(E,a,c,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),YE.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),YE.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(YE)}intersectsSprite(A){return YE.center.set(0,0,0),YE.radius=.7071067811865476,YE.applyMatrix4(A.matrixWorld),this.intersectsSphere(YE)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(as.x=C.normal.x>0?A.max.x:A.min.x,as.y=C.normal.y>0?A.max.y:A.min.y,as.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(as)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dk(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function HK(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,D=Q.createBuffer();Q.bindBuffer(e,D),Q.bufferData(e,a,s),t.onUploadCallback();let c;if(a instanceof Float32Array)c=Q.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)c=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=Q.UNSIGNED_SHORT;else if(a instanceof Int16Array)c=Q.SHORT;else if(a instanceof Uint32Array)c=Q.UNSIGNED_INT;else if(a instanceof Int32Array)c=Q.INT;else if(a instanceof Int8Array)c=Q.BYTE;else if(a instanceof Uint8Array)c=Q.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)c=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:c,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function B(t,e,a){const s=e.array,n=e._updateRange,D=e.updateRanges;if(Q.bindBuffer(a,t),n.count===-1&&D.length===0&&Q.bufferSubData(a,0,s),D.length!==0){for(let c=0,h=D.length;c<h;c++){const r=D[c];I?Q.bufferSubData(a,r.start*s.BYTES_PER_ELEMENT,s,r.start,r.count):Q.bufferSubData(a,r.start*s.BYTES_PER_ELEMENT,s.subarray(r.start,r.start+r.count))}e.clearUpdateRanges()}n.count!==-1&&(I?Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(Q.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");B(a.buffer,t,e),a.version=t.version}}return{get:i,remove:E,update:o}}class dt extends mI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,s=I/o,n=[],D=[],c=[],h=[];for(let r=0;r<e;r++){const S=r*s-i;for(let l=0;l<t;l++){const G=l*a-B;D.push(G,-S,0),c.push(0,0,1),h.push(l/E),h.push(1-r/o)}}for(let r=0;r<o;r++)for(let S=0;S<E;S++){const l=S+t*r,G=S+t*(r+1),M=S+1+t*(r+1),U=S+1+t*r;n.push(l,G,U),n.push(G,M,U)}this.setIndex(n),this.setAttribute("position",new BI(D,3)),this.setAttribute("normal",new BI(c,3)),this.setAttribute("uv",new BI(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new dt(A.width,A.height,A.widthSegments,A.heightSegments)}}var TK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_K=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WK=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$K=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ap=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IF=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,CF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BF=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oF=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rF=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GF=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yF=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MF=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pF=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fF=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_F=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,PF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$F=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ed=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,od=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ed=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DI={alphahash_fragment:TK,alphahash_pars_fragment:bK,alphamap_fragment:xK,alphamap_pars_fragment:_K,alphatest_fragment:OK,alphatest_pars_fragment:vK,aomap_fragment:ZK,aomap_pars_fragment:PK,batching_pars_vertex:WK,batching_vertex:VK,begin_vertex:jK,beginnormal_vertex:XK,bsdfs:zK,iridescence_fragment:$K,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Bp,color_fragment:Qp,color_pars_fragment:ip,color_pars_vertex:Ep,color_vertex:op,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:ap,displacementmap_pars_vertex:sp,displacementmap_vertex:np,emissivemap_fragment:rp,emissivemap_pars_fragment:Dp,colorspace_fragment:hp,colorspace_pars_fragment:cp,envmap_fragment:lp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Sp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:fp,envmap_vertex:yp,fog_vertex:kp,fog_pars_vertex:Mp,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:Kp,lightmap_fragment:pp,lightmap_pars_fragment:Fp,lights_lambert_fragment:dp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Jp,lights_toon_fragment:up,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Lp,lights_physical_fragment:mp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Tp,lights_fragment_maps:bp,lights_fragment_end:xp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Zp,map_fragment:Pp,map_pars_fragment:Wp,map_particle_fragment:Vp,map_particle_pars_fragment:jp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:zp,morphcolor_vertex:$p,morphnormal_vertex:AF,morphtarget_pars_vertex:IF,morphtarget_vertex:gF,normal_fragment_begin:CF,normal_fragment_maps:BF,normal_pars_fragment:QF,normal_pars_vertex:iF,normal_vertex:EF,normalmap_pars_fragment:oF,clearcoat_normal_fragment_begin:tF,clearcoat_normal_fragment_maps:eF,clearcoat_pars_fragment:aF,iridescence_pars_fragment:sF,opaque_fragment:nF,packing:rF,premultiplied_alpha_fragment:DF,project_vertex:hF,dithering_fragment:cF,dithering_pars_fragment:lF,roughnessmap_fragment:wF,roughnessmap_pars_fragment:SF,shadowmap_pars_fragment:GF,shadowmap_pars_vertex:yF,shadowmap_vertex:kF,shadowmask_pars_fragment:MF,skinbase_vertex:UF,skinning_pars_vertex:NF,skinning_vertex:KF,skinnormal_vertex:pF,specularmap_fragment:FF,specularmap_pars_fragment:dF,tonemapping_fragment:RF,tonemapping_pars_fragment:JF,transmission_fragment:fF,transmission_pars_fragment:uF,uv_pars_fragment:qF,uv_pars_vertex:YF,uv_vertex:LF,worldpos_vertex:mF,background_vert:HF,background_frag:TF,backgroundCube_vert:bF,backgroundCube_frag:xF,cube_vert:_F,cube_frag:OF,depth_vert:vF,depth_frag:ZF,distanceRGBA_vert:PF,distanceRGBA_frag:WF,equirect_vert:VF,equirect_frag:jF,linedashed_vert:XF,linedashed_frag:zF,meshbasic_vert:$F,meshbasic_frag:Ad,meshlambert_vert:Id,meshlambert_frag:gd,meshmatcap_vert:Cd,meshmatcap_frag:Bd,meshnormal_vert:Qd,meshnormal_frag:id,meshphong_vert:Ed,meshphong_frag:od,meshphysical_vert:td,meshphysical_frag:ed,meshtoon_vert:ad,meshtoon_frag:sd,points_vert:nd,points_frag:rd,shadow_vert:Dd,shadow_frag:hd,sprite_vert:cd,sprite_frag:ld},LA={common:{diffuse:{value:new ZA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YI},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YI},normalScale:{value:new hA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ZA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ZA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0},uvTransform:{value:new YI}},sprite:{diffuse:{value:new ZA(16777215)},opacity:{value:1},center:{value:new hA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YI},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0}}},NQ={basic:{uniforms:DB([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.fog]),vertexShader:DI.meshbasic_vert,fragmentShader:DI.meshbasic_frag},lambert:{uniforms:DB([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,LA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:DI.meshlambert_vert,fragmentShader:DI.meshlambert_frag},phong:{uniforms:DB([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,LA.lights,{emissive:{value:new ZA(0)},specular:{value:new ZA(1118481)},shininess:{value:30}}]),vertexShader:DI.meshphong_vert,fragmentShader:DI.meshphong_frag},standard:{uniforms:DB([LA.common,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.roughnessmap,LA.metalnessmap,LA.fog,LA.lights,{emissive:{value:new ZA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:DI.meshphysical_vert,fragmentShader:DI.meshphysical_frag},toon:{uniforms:DB([LA.common,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.gradientmap,LA.fog,LA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:DI.meshtoon_vert,fragmentShader:DI.meshtoon_frag},matcap:{uniforms:DB([LA.common,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,{matcap:{value:null}}]),vertexShader:DI.meshmatcap_vert,fragmentShader:DI.meshmatcap_frag},points:{uniforms:DB([LA.points,LA.fog]),vertexShader:DI.points_vert,fragmentShader:DI.points_frag},dashed:{uniforms:DB([LA.common,LA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:DI.linedashed_vert,fragmentShader:DI.linedashed_frag},depth:{uniforms:DB([LA.common,LA.displacementmap]),vertexShader:DI.depth_vert,fragmentShader:DI.depth_frag},normal:{uniforms:DB([LA.common,LA.bumpmap,LA.normalmap,LA.displacementmap,{opacity:{value:1}}]),vertexShader:DI.meshnormal_vert,fragmentShader:DI.meshnormal_frag},sprite:{uniforms:DB([LA.sprite,LA.fog]),vertexShader:DI.sprite_vert,fragmentShader:DI.sprite_frag},background:{uniforms:{uvTransform:{value:new YI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:DI.background_vert,fragmentShader:DI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:DI.backgroundCube_vert,fragmentShader:DI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:DI.cube_vert,fragmentShader:DI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:DI.equirect_vert,fragmentShader:DI.equirect_frag},distanceRGBA:{uniforms:DB([LA.common,LA.displacementmap,{referencePosition:{value:new u},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:DI.distanceRGBA_vert,fragmentShader:DI.distanceRGBA_frag},shadow:{uniforms:DB([LA.lights,LA.fog,{color:{value:new ZA(0)},opacity:{value:1}}]),vertexShader:DI.shadow_vert,fragmentShader:DI.shadow_frag}};NQ.physical={uniforms:DB([NQ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YI},clearcoatNormalScale:{value:new hA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YI},sheen:{value:0},sheenColor:{value:new ZA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YI},transmissionSamplerSize:{value:new hA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YI},attenuationDistance:{value:0},attenuationColor:{value:new ZA(0)},specularColor:{value:new ZA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YI},anisotropyVector:{value:new hA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YI}}]),vertexShader:DI.meshphysical_vert,fragmentShader:DI.meshphysical_frag};const ss={r:0,b:0,g:0};function wd(Q,A,I,g,C,B,i){const E=new ZA(0);let o=B===!0?0:1,t,e,a=null,s=0,n=null;function D(h,r){let S=!1,l=r.isScene===!0?r.background:null;l&&l.isTexture&&(l=(r.backgroundBlurriness>0?I:A).get(l)),l===null?c(E,o):l&&l.isColor&&(c(l,1),S=!0);const G=Q.xr.getEnvironmentBlendMode();G==="additive"?g.buffers.color.setClear(0,0,0,1,i):G==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(Q.autoClear||S)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),l&&(l.isCubeTexture||l.mapping===Ft)?(e===void 0&&(e=new $g(new Mo(1,1,1),new AQ({name:"BackgroundCubeMaterial",uniforms:kt(NQ.backgroundCube.uniforms),vertexShader:NQ.backgroundCube.vertexShader,fragmentShader:NQ.backgroundCube.fragmentShader,side:wB,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(M,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=l,e.material.uniforms.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,e.material.toneMapped=gg.getTransfer(l.colorSpace)!==Sg,(a!==l||s!==l.version||n!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null)):l&&l.isTexture&&(t===void 0&&(t=new $g(new dt(2,2),new AQ({name:"BackgroundMaterial",uniforms:kt(NQ.background.uniforms),vertexShader:NQ.background.vertexShader,fragmentShader:NQ.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=l,t.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,t.material.toneMapped=gg.getTransfer(l.colorSpace)!==Sg,l.matrixAutoUpdate===!0&&l.updateMatrix(),t.material.uniforms.uvTransform.value.copy(l.matrix),(a!==l||s!==l.version||n!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null))}function c(h,r){h.getRGB(ss,ak(Q)),g.buffers.color.setClear(ss.r,ss.g,ss.b,r,i)}return{getClearColor:function(){return E},setClearColor:function(h,r=1){E.set(h),o=r,c(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,c(E,o)},render:D}}function Sd(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},o=h(null);let t=o,e=!1;function a(H,V,_,j,IA){let AA=!1;if(i){const oA=c(j,_,V);t!==oA&&(t=oA,n(t.object)),AA=r(H,j,_,IA),AA&&S(H,j,_,IA)}else{const oA=V.wireframe===!0;(t.geometry!==j.id||t.program!==_.id||t.wireframe!==oA)&&(t.geometry=j.id,t.program=_.id,t.wireframe=oA,AA=!0)}IA!==null&&I.update(IA,Q.ELEMENT_ARRAY_BUFFER),(AA||e)&&(e=!1,K(H,V,_,j),IA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(IA).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function n(H){return g.isWebGL2?Q.bindVertexArray(H):B.bindVertexArrayOES(H)}function D(H){return g.isWebGL2?Q.deleteVertexArray(H):B.deleteVertexArrayOES(H)}function c(H,V,_){const j=_.wireframe===!0;let IA=E[H.id];IA===void 0&&(IA={},E[H.id]=IA);let AA=IA[V.id];AA===void 0&&(AA={},IA[V.id]=AA);let oA=AA[j];return oA===void 0&&(oA=h(s()),AA[j]=oA),oA}function h(H){const V=[],_=[],j=[];for(let IA=0;IA<C;IA++)V[IA]=0,_[IA]=0,j[IA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:_,attributeDivisors:j,object:H,attributes:{},index:null}}function r(H,V,_,j){const IA=t.attributes,AA=V.attributes;let oA=0;const sA=_.getAttributes();for(const JA in sA)if(sA[JA].location>=0){const QA=IA[JA];let GA=AA[JA];if(GA===void 0&&(JA==="instanceMatrix"&&H.instanceMatrix&&(GA=H.instanceMatrix),JA==="instanceColor"&&H.instanceColor&&(GA=H.instanceColor)),QA===void 0||QA.attribute!==GA||GA&&QA.data!==GA.data)return!0;oA++}return t.attributesNum!==oA||t.index!==j}function S(H,V,_,j){const IA={},AA=V.attributes;let oA=0;const sA=_.getAttributes();for(const JA in sA)if(sA[JA].location>=0){let QA=AA[JA];QA===void 0&&(JA==="instanceMatrix"&&H.instanceMatrix&&(QA=H.instanceMatrix),JA==="instanceColor"&&H.instanceColor&&(QA=H.instanceColor));const GA={};GA.attribute=QA,QA&&QA.data&&(GA.data=QA.data),IA[JA]=GA,oA++}t.attributes=IA,t.attributesNum=oA,t.index=j}function l(){const H=t.newAttributes;for(let V=0,_=H.length;V<_;V++)H[V]=0}function G(H){M(H,0)}function M(H,V){const _=t.newAttributes,j=t.enabledAttributes,IA=t.attributeDivisors;_[H]=1,j[H]===0&&(Q.enableVertexAttribArray(H),j[H]=1),IA[H]!==V&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,V),IA[H]=V)}function U(){const H=t.newAttributes,V=t.enabledAttributes;for(let _=0,j=V.length;_<j;_++)V[_]!==H[_]&&(Q.disableVertexAttribArray(_),V[_]=0)}function k(H,V,_,j,IA,AA,oA){oA===!0?Q.vertexAttribIPointer(H,V,_,IA,AA):Q.vertexAttribPointer(H,V,_,j,IA,AA)}function K(H,V,_,j){if(g.isWebGL2===!1&&(H.isInstancedMesh||j.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;l();const IA=j.attributes,AA=_.getAttributes(),oA=V.defaultAttributeValues;for(const sA in AA){const JA=AA[sA];if(JA.location>=0){let CI=IA[sA];if(CI===void 0&&(sA==="instanceMatrix"&&H.instanceMatrix&&(CI=H.instanceMatrix),sA==="instanceColor"&&H.instanceColor&&(CI=H.instanceColor)),CI!==void 0){const QA=CI.normalized,GA=CI.itemSize,PA=I.get(CI);if(PA===void 0)continue;const qA=PA.buffer,nA=PA.type,VA=PA.bytesPerElement,YA=g.isWebGL2===!0&&(nA===Q.INT||nA===Q.UNSIGNED_INT||CI.gpuType===Ic);if(CI.isInterleavedBufferAttribute){const HA=CI.data,L=HA.stride,SA=CI.offset;if(HA.isInstancedInterleavedBuffer){for(let rA=0;rA<JA.locationSize;rA++)M(JA.location+rA,HA.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=HA.meshPerAttribute*HA.count)}else for(let rA=0;rA<JA.locationSize;rA++)G(JA.location+rA);Q.bindBuffer(Q.ARRAY_BUFFER,qA);for(let rA=0;rA<JA.locationSize;rA++)k(JA.location+rA,GA/JA.locationSize,nA,QA,L*VA,(SA+GA/JA.locationSize*rA)*VA,YA)}else{if(CI.isInstancedBufferAttribute){for(let HA=0;HA<JA.locationSize;HA++)M(JA.location+HA,CI.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=CI.meshPerAttribute*CI.count)}else for(let HA=0;HA<JA.locationSize;HA++)G(JA.location+HA);Q.bindBuffer(Q.ARRAY_BUFFER,qA);for(let HA=0;HA<JA.locationSize;HA++)k(JA.location+HA,GA/JA.locationSize,nA,QA,GA*VA,GA/JA.locationSize*HA*VA,YA)}}else if(oA!==void 0){const QA=oA[sA];if(QA!==void 0)switch(QA.length){case 2:Q.vertexAttrib2fv(JA.location,QA);break;case 3:Q.vertexAttrib3fv(JA.location,QA);break;case 4:Q.vertexAttrib4fv(JA.location,QA);break;default:Q.vertexAttrib1fv(JA.location,QA)}}}}U()}function q(){T();for(const H in E){const V=E[H];for(const _ in V){const j=V[_];for(const IA in j)D(j[IA].object),delete j[IA];delete V[_]}delete E[H]}}function y(H){if(E[H.id]===void 0)return;const V=E[H.id];for(const _ in V){const j=V[_];for(const IA in j)D(j[IA].object),delete j[IA];delete V[_]}delete E[H.id]}function N(H){for(const V in E){const _=E[V];if(_[H.id]===void 0)continue;const j=_[H.id];for(const IA in j)D(j[IA].object),delete j[IA];delete _[H.id]}}function T(){O(),e=!0,t!==o&&(t=o,n(t.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:T,resetDefaultState:O,dispose:q,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:l,enableAttribute:G,disableUnusedAttributes:U}}function Gd(Q,A,I,g){const C=g.isWebGL2;let B;function i(e){B=e}function E(e,a){Q.drawArrays(B,e,a),I.update(a,B,1)}function o(e,a,s){if(s===0)return;let n,D;if(C)n=Q,D="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[D](B,e,a,s),I.update(a,B,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let D=0;D<s;D++)this.render(e[D],a[D]);else{n.multiDrawArraysWEBGL(B,e,0,a,0,s);let D=0;for(let c=0;c<s;c++)D+=a[c];I.update(D,B,1)}}this.setMode=i,this.render=E,this.renderInstances=o,this.renderMultiDraw=t}function yd(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const k=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(k){if(k==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=i||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),s=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=Q.getParameter(Q.MAX_TEXTURE_SIZE),D=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),c=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),h=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),r=Q.getParameter(Q.MAX_VARYING_VECTORS),S=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),l=s>0,G=i||A.has("OES_texture_float"),M=l&&G,U=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:D,maxAttributes:c,maxVertexUniforms:h,maxVaryings:r,maxFragmentUniforms:S,vertexTextures:l,floatFragmentTextures:G,floatVertexTextures:M,maxSamples:U}}function kd(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new ri,E=new YI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const D=a.clippingPlanes,c=a.clipIntersection,h=a.clipShadows,r=Q.get(a);if(!C||D===null||D.length===0||B&&!h)B?e(null):t();else{const S=B?0:g,l=S*4;let G=r.clippingState||null;o.value=G,G=e(D,s,l,n);for(let M=0;M!==l;++M)G[M]=I[M];r.clippingState=G,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=S}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,D){const c=a!==null?a.length:0;let h=null;if(c!==0){if(h=o.value,D!==!0||h===null){const r=n+c*4,S=s.matrixWorldInverse;E.getNormalMatrix(S),(h===null||h.length<r)&&(h=new Float32Array(r));for(let l=0,G=n;l!==c;++l,G+=4)i.copy(a[l]).applyMatrix4(S,E),i.normal.toArray(h,G),h[G+3]=i.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,h}}function Md(Q){let A=new WeakMap;function I(i,E){return E===fe?i.mapping=Ki:E===ue&&(i.mapping=eE),i}function g(i){if(i&&i.isTexture){const E=i.mapping;if(E===fe||E===ue)if(A.has(i)){const o=A.get(i).texture;return I(o,i.mapping)}else{const o=i.image;if(o&&o.height>0){const t=new rk(o.height);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class un extends fn{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const ot=4,ew=[.125,.215,.35,.446,.526,.582],jE=20,jr=new un,aw=new ZA;let Xr=null,zr=0,$r=0;const WE=(1+Math.sqrt(5))/2,Xo=1/WE,sw=[new u(1,1,1),new u(-1,1,1),new u(1,1,-1),new u(-1,1,-1),new u(0,WE,Xo),new u(0,WE,-Xo),new u(Xo,0,WE),new u(-Xo,0,WE),new u(WE,Xo,0),new u(-WE,Xo,0)];class ch{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Xr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Xr,zr,$r),A.scissorTest=!1,ns(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===Ki||A.mapping===eE?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Xr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:fg,minFilter:fg,generateMipmaps:!1,type:Gt,format:KB,colorSpace:jQ,depthBuffer:!1},C=nw(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nw(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ud(B)),this._blurMaterial=Nd(B,A,I)}return C}_compileMaterial(A){const I=new $g(this._lodPlanes[0],A);this._renderer.compile(I,jr)}_sceneToCubeUV(A,I,g,C){const E=new pC(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(aw),e.toneMapping=Gi,e.autoClear=!1;const n=new hE({name:"PMREM.Background",side:wB,depthWrite:!1,depthTest:!1}),D=new $g(new Mo,n);let c=!1;const h=A.background;h?h.isColor&&(n.color.copy(h),A.background=null,c=!0):(n.color.copy(aw),c=!0);for(let r=0;r<6;r++){const S=r%3;S===0?(E.up.set(0,o[r],0),E.lookAt(t[r],0,0)):S===1?(E.up.set(0,0,o[r]),E.lookAt(0,t[r],0)):(E.up.set(0,o[r],0),E.lookAt(0,0,t[r]));const l=this._cubeSize;ns(C,S*l,r>2?l:0,l,l),e.setRenderTarget(C),c&&e.render(D,E),e.render(A,E)}D.geometry.dispose(),D.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===Ki||A.mapping===eE;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dw()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rw());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new $g(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;ns(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(i,jr)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=sw[(C-1)%sw.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const o=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new $g(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,D=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*jE-1),c=B/D,h=isFinite(B)?1+Math.floor(e*c):jE;h>jE&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${jE}`);const r=[];let S=0;for(let k=0;k<jE;++k){const K=k/c,q=Math.exp(-K*K/2);r.push(q),k===0?S+=q:k<h&&(S+=2*q)}for(let k=0;k<r.length;k++)r[k]=r[k]/S;s.envMap.value=A.texture,s.samples.value=h,s.weights.value=r,s.latitudinal.value=i==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:l}=this;s.dTheta.value=D,s.mipInt.value=l-g;const G=this._sizeLods[C],M=3*G*(C>l-ot?C-l+ot:0),U=4*(this._cubeSize-G);ns(I,M,U,3*G,2*G),o.setRenderTarget(I),o.render(a,jr)}}function Ud(Q){const A=[],I=[],g=[];let C=Q;const B=Q-ot+1+ew.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let o=1/E;i>Q-ot?o=ew[i-Q+ot-1]:i===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,D=6,c=3,h=2,r=1,S=new Float32Array(c*D*n),l=new Float32Array(h*D*n),G=new Float32Array(r*D*n);for(let U=0;U<n;U++){const k=U%3*2/3-1,K=U>2?0:-1,q=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];S.set(q,c*D*U),l.set(s,h*D*U);const y=[U,U,U,U,U,U];G.set(y,r*D*U)}const M=new mI;M.setAttribute("position",new eg(S,c)),M.setAttribute("uv",new eg(l,h)),M.setAttribute("faceIndex",new eg(G,r)),A.push(M),C>ot&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function nw(Q,A,I){const g=new KQ(Q,A,I);return g.texture.mapping=Ft,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function ns(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Nd(Q,A,I){const g=new Float32Array(jE),C=new u(0,1,0);return new AQ({name:"SphericalGaussianBlur",defines:{n:jE,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rw(){return new AQ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Dw(){return new AQ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kd(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===fe||o===ue,e=o===Ki||o===eE;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new ch(Q)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new ch(Q));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",B),s.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function pd(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Fd(Q,A,I,g){const C={},B=new WeakMap;function i(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const D in s.attributes)A.remove(s.attributes[D]);for(const D in s.morphAttributes){const c=s.morphAttributes[D];for(let h=0,r=c.length;h<r;h++)A.remove(c[h])}s.removeEventListener("dispose",i),delete C[s.id];const n=B.get(s);n&&(A.remove(n),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return C[s.id]===!0||(s.addEventListener("dispose",i),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const D in s)A.update(s[D],Q.ARRAY_BUFFER);const n=a.morphAttributes;for(const D in n){const c=n[D];for(let h=0,r=c.length;h<r;h++)A.update(c[h],Q.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,D=a.attributes.position;let c=0;if(n!==null){const S=n.array;c=n.version;for(let l=0,G=S.length;l<G;l+=3){const M=S[l+0],U=S[l+1],k=S[l+2];s.push(M,U,U,k,k,M)}}else if(D!==void 0){const S=D.array;c=D.version;for(let l=0,G=S.length/3-1;l<G;l+=3){const M=l+0,U=l+1,k=l+2;s.push(M,U,U,k,k,M)}}else return;const h=new(Ek(s)?rc:nc)(s,1);h.version=c;const r=B.get(a);r&&A.remove(r),B.set(a,h)}function e(a){const s=B.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function dd(Q,A,I,g){const C=g.isWebGL2;let B;function i(n){B=n}let E,o;function t(n){E=n.type,o=n.bytesPerElement}function e(n,D){Q.drawElements(B,D,E,n*o),I.update(D,B,1)}function a(n,D,c){if(c===0)return;let h,r;if(C)h=Q,r="drawElementsInstanced";else if(h=A.get("ANGLE_instanced_arrays"),r="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[r](B,D,E,n*o,c),I.update(D,B,c)}function s(n,D,c){if(c===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let r=0;r<c;r++)this.render(n[r]/o,D[r]);else{h.multiDrawElementsWEBGL(B,D,0,E,n,0,c);let r=0;for(let S=0;S<c;S++)r+=D[S];I.update(r,B,1)}}this.setMode=i,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function Rd(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Jd(Q,A){return Q[0]-A[0]}function fd(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function ud(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new tg,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,D=n!==void 0?n.length:0;let c=B.get(e);if(c===void 0||c.count!==D){let H=function(){T.dispose(),B.delete(e),e.removeEventListener("dispose",H)};c!==void 0&&c.texture.dispose();const S=e.morphAttributes.position!==void 0,l=e.morphAttributes.normal!==void 0,G=e.morphAttributes.color!==void 0,M=e.morphAttributes.position||[],U=e.morphAttributes.normal||[],k=e.morphAttributes.color||[];let K=0;S===!0&&(K=1),l===!0&&(K=2),G===!0&&(K=3);let q=e.attributes.position.count*K,y=1;q>A.maxTextureSize&&(y=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const N=new Float32Array(q*y*4*D),T=new Rn(N,q,y,D);T.type=oQ,T.needsUpdate=!0;const O=K*4;for(let V=0;V<D;V++){const _=M[V],j=U[V],IA=k[V],AA=q*y*4*V;for(let oA=0;oA<_.count;oA++){const sA=oA*O;S===!0&&(i.fromBufferAttribute(_,oA),N[AA+sA+0]=i.x,N[AA+sA+1]=i.y,N[AA+sA+2]=i.z,N[AA+sA+3]=0),l===!0&&(i.fromBufferAttribute(j,oA),N[AA+sA+4]=i.x,N[AA+sA+5]=i.y,N[AA+sA+6]=i.z,N[AA+sA+7]=0),G===!0&&(i.fromBufferAttribute(IA,oA),N[AA+sA+8]=i.x,N[AA+sA+9]=i.y,N[AA+sA+10]=i.z,N[AA+sA+11]=IA.itemSize===4?i.w:1)}}c={count:D,texture:T,size:new hA(q,y)},B.set(e,c),e.addEventListener("dispose",H)}let h=0;for(let S=0;S<s.length;S++)h+=s[S];const r=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",r),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",c.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",c.size)}else{const n=s===void 0?0:s.length;let D=g[e.id];if(D===void 0||D.length!==n){D=[];for(let l=0;l<n;l++)D[l]=[l,0];g[e.id]=D}for(let l=0;l<n;l++){const G=D[l];G[0]=l,G[1]=s[l]}D.sort(fd);for(let l=0;l<8;l++)l<n&&D[l][1]?(E[l][0]=D[l][0],E[l][1]=D[l][1]):(E[l][0]=Number.MAX_SAFE_INTEGER,E[l][1]=0);E.sort(Jd);const c=e.morphAttributes.position,h=e.morphAttributes.normal;let r=0;for(let l=0;l<8;l++){const G=E[l],M=G[0],U=G[1];M!==Number.MAX_SAFE_INTEGER&&U?(c&&e.getAttribute("morphTarget"+l)!==c[M]&&e.setAttribute("morphTarget"+l,c[M]),h&&e.getAttribute("morphNormal"+l)!==h[M]&&e.setAttribute("morphNormal"+l,h[M]),C[l]=U,r+=U):(c&&e.hasAttribute("morphTarget"+l)===!0&&e.deleteAttribute("morphTarget"+l),h&&e.hasAttribute("morphNormal"+l)===!0&&e.deleteAttribute("morphNormal"+l),C[l]=0)}const S=e.morphTargetsRelative?1:1-r;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",S),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function qd(Q,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),C.get(o)!==t&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function i(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}class hc extends Og{constructor(A,I,g,C,B,i,E,o,t,e){if(e=e!==void 0?e:iE,e!==iE&&e!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===iE&&(g=hi),g===void 0&&e===Do&&(g=QE),super(null,C,B,i,E,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:zg,this.minFilter=o!==void 0?o:zg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const hk=new Og,ck=new hc(1,1);ck.compareFunction=tc;const lk=new Rn,wk=new sc,Sk=new aa,hw=[],cw=[],lw=new Float32Array(16),ww=new Float32Array(9),Sw=new Float32Array(4);function Rt(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=hw[C];if(B===void 0&&(B=new Float32Array(C),hw[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function cC(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function lC(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function qn(Q,A){let I=cw[A];I===void 0&&(I=new Int32Array(A),cw[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function Yd(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Ld(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2fv(this.addr,A),lC(I,A)}}function md(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(cC(I,A))return;Q.uniform3fv(this.addr,A),lC(I,A)}}function Hd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4fv(this.addr,A),lC(I,A)}}function Td(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;Sw.set(g),Q.uniformMatrix2fv(this.addr,!1,Sw),lC(I,g)}}function bd(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;ww.set(g),Q.uniformMatrix3fv(this.addr,!1,ww),lC(I,g)}}function xd(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;lw.set(g),Q.uniformMatrix4fv(this.addr,!1,lw),lC(I,g)}}function _d(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function Od(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2iv(this.addr,A),lC(I,A)}}function vd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cC(I,A))return;Q.uniform3iv(this.addr,A),lC(I,A)}}function Zd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4iv(this.addr,A),lC(I,A)}}function Pd(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function Wd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2uiv(this.addr,A),lC(I,A)}}function Vd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cC(I,A))return;Q.uniform3uiv(this.addr,A),lC(I,A)}}function jd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4uiv(this.addr,A),lC(I,A)}}function Xd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?ck:hk;I.setTexture2D(A||B,C)}function zd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||wk,C)}function $d(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Sk,C)}function AR(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||lk,C)}function IR(Q){switch(Q){case 5126:return Yd;case 35664:return Ld;case 35665:return md;case 35666:return Hd;case 35674:return Td;case 35675:return bd;case 35676:return xd;case 5124:case 35670:return _d;case 35667:case 35671:return Od;case 35668:case 35672:return vd;case 35669:case 35673:return Zd;case 5125:return Pd;case 36294:return Wd;case 36295:return Vd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return $d;case 36289:case 36303:case 36311:case 36292:return AR}}function gR(Q,A){Q.uniform1fv(this.addr,A)}function CR(Q,A){const I=Rt(A,this.size,2);Q.uniform2fv(this.addr,I)}function BR(Q,A){const I=Rt(A,this.size,3);Q.uniform3fv(this.addr,I)}function QR(Q,A){const I=Rt(A,this.size,4);Q.uniform4fv(this.addr,I)}function iR(Q,A){const I=Rt(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function ER(Q,A){const I=Rt(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function oR(Q,A){const I=Rt(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function tR(Q,A){Q.uniform1iv(this.addr,A)}function eR(Q,A){Q.uniform2iv(this.addr,A)}function aR(Q,A){Q.uniform3iv(this.addr,A)}function sR(Q,A){Q.uniform4iv(this.addr,A)}function nR(Q,A){Q.uniform1uiv(this.addr,A)}function rR(Q,A){Q.uniform2uiv(this.addr,A)}function DR(Q,A){Q.uniform3uiv(this.addr,A)}function hR(Q,A){Q.uniform4uiv(this.addr,A)}function cR(Q,A,I){const g=this.cache,C=A.length,B=qn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||hk,B[i])}function lR(Q,A,I){const g=this.cache,C=A.length,B=qn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||wk,B[i])}function wR(Q,A,I){const g=this.cache,C=A.length,B=qn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||Sk,B[i])}function SR(Q,A,I){const g=this.cache,C=A.length,B=qn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||lk,B[i])}function GR(Q){switch(Q){case 5126:return gR;case 35664:return CR;case 35665:return BR;case 35666:return QR;case 35674:return iR;case 35675:return ER;case 35676:return oR;case 5124:case 35670:return tR;case 35667:case 35671:return eR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return nR;case 36294:return rR;case 36295:return DR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return SR}}class yR{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=IR(I.type)}}class kR{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=GR(I.type)}}class MR{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const AD=/(\w+)(\])?(\[|\.)?/g;function Gw(Q,A){Q.seq.push(A),Q.map[A.id]=A}function UR(Q,A,I){const g=Q.name,C=g.length;for(AD.lastIndex=0;;){const B=AD.exec(g),i=AD.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&i+2===C){Gw(I,t===void 0?new yR(E,Q,A):new kR(E,Q,A));break}else{let a=I.map[E];a===void 0&&(a=new MR(E),Gw(I,a)),I=a}}}class Vs{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);UR(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function yw(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const NR=37297;let KR=0;function pR(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function FR(Q){const A=gg.getPrimaries(gg.workingColorSpace),I=gg.getPrimaries(Q);let g;switch(A===I?g="":A===_e&&I===xe?g="LinearDisplayP3ToLinearSRGB":A===xe&&I===_e&&(g="LinearSRGBToLinearDisplayP3"),Q){case jQ:case ea:return[g,"LinearTransferOETF"];case hC:case dn:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function kw(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+pR(Q.getShaderSource(A),i)}else return C}function dR(Q,A){const I=FR(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function RR(Q,A){let I;switch(A){case fy:I="Linear";break;case uy:I="Reinhard";break;case qy:I="OptimizedCineon";break;case Ac:I="ACESFilmic";break;case Ly:I="AgX";break;case Yy:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function JR(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.alphaToCoverage||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tt).join(`
`)}function fR(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tt).join(`
`)}function uR(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function qR(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function tt(Q){return Q!==""}function Mw(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Uw(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const YR=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(Q){return Q.replace(YR,mR)}const LR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mR(Q,A){let I=DI[A];if(I===void 0){const g=LR.get(A);if(g!==void 0)I=DI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return lh(I)}const HR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nw(Q){return Q.replace(HR,TR)}function TR(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function Kw(Q){let A=`precision ${Q.precision} float;
	precision ${Q.precision} int;
	precision ${Q.precision} sampler2D;
	precision ${Q.precision} samplerCube;
	`;return Q.isWebGL2&&(A+=`precision ${Q.precision} sampler3D;
		precision ${Q.precision} sampler2DArray;
		precision ${Q.precision} sampler2DShadow;
		precision ${Q.precision} samplerCubeShadow;
		precision ${Q.precision} sampler2DArrayShadow;
		precision ${Q.precision} isampler2D;
		precision ${Q.precision} isampler3D;
		precision ${Q.precision} isamplerCube;
		precision ${Q.precision} isampler2DArray;
		precision ${Q.precision} usampler2D;
		precision ${Q.precision} usampler3D;
		precision ${Q.precision} usamplerCube;
		precision ${Q.precision} usampler2DArray;
		`),Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function bR(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===$h?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===Nn?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===qQ&&(A="SHADOWMAP_TYPE_VSM"),A}function xR(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case Ki:case eE:A="ENVMAP_TYPE_CUBE";break;case Ft:A="ENVMAP_TYPE_CUBE_UV";break}return A}function _R(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case eE:A="ENVMAP_MODE_REFRACTION";break}return A}function OR(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case ta:A="ENVMAP_BLENDING_MULTIPLY";break;case Ry:A="ENVMAP_BLENDING_MIX";break;case Jy:A="ENVMAP_BLENDING_ADD";break}return A}function vR(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function ZR(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const o=bR(I),t=xR(I),e=_R(I),a=OR(I),s=vR(I),n=I.isWebGL2?"":JR(I),D=fR(I),c=uR(B),h=C.createProgram();let r,S,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(tt).join(`
`),r.length>0&&(r+=`
`),S=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(tt).join(`
`),S.length>0&&(S+=`
`)):(r=[Kw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tt).join(`
`),S=[n,Kw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==Gi?"#define TONE_MAPPING":"",I.toneMapping!==Gi?DI.tonemapping_pars_fragment:"",I.toneMapping!==Gi?RR("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",DI.colorspace_pars_fragment,dR("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(tt).join(`
`)),i=lh(i),i=Mw(i,I),i=Uw(i,I),E=lh(E),E=Mw(E,I),E=Uw(E,I),i=Nw(i),E=Nw(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,r=[D,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,S=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const G=l+r+i,M=l+S+E,U=yw(C,C.VERTEX_SHADER,G),k=yw(C,C.FRAGMENT_SHADER,M);C.attachShader(h,U),C.attachShader(h,k),I.index0AttributeName!==void 0?C.bindAttribLocation(h,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(h,0,"position"),C.linkProgram(h);function K(T){if(Q.debug.checkShaderErrors){const O=C.getProgramInfoLog(h).trim(),H=C.getShaderInfoLog(U).trim(),V=C.getShaderInfoLog(k).trim();let _=!0,j=!0;if(C.getProgramParameter(h,C.LINK_STATUS)===!1)if(_=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,h,U,k);else{const IA=kw(C,U,"vertex"),AA=kw(C,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(h,C.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+IA+`
`+AA)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||V==="")&&(j=!1);j&&(T.diagnostics={runnable:_,programLog:O,vertexShader:{log:H,prefix:r},fragmentShader:{log:V,prefix:S}})}C.deleteShader(U),C.deleteShader(k),q=new Vs(C,h),y=qR(C,h)}let q;this.getUniforms=function(){return q===void 0&&K(this),q};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=C.getProgramParameter(h,NR)),N},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(h),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=KR++,this.cacheKey=A,this.usedTimes=1,this.program=h,this.vertexShader=U,this.fragmentShader=k,this}let PR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new VR(A),I.set(A,g)),g}}class VR{constructor(A){this.id=PR++,this.code=A,this.usedTimes=0}}function jR(Q,A,I,g,C,B,i){const E=new Jn,o=new WR,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let D=C.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return t.add(y),y===0?"uv":`uv${y}`}function r(y,N,T,O,H){const V=O.fog,_=H.geometry,j=y.isMeshStandardMaterial?O.environment:null,IA=(y.isMeshStandardMaterial?I:A).get(y.envMap||j),AA=IA&&IA.mapping===Ft?IA.image.height:null,oA=c[y.type];y.precision!==null&&(D=C.getMaxPrecision(y.precision),D!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",D,"instead."));const sA=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,JA=sA!==void 0?sA.length:0;let CI=0;_.morphAttributes.position!==void 0&&(CI=1),_.morphAttributes.normal!==void 0&&(CI=2),_.morphAttributes.color!==void 0&&(CI=3);let QA,GA,PA,qA;if(oA){const HI=NQ[oA];QA=HI.vertexShader,GA=HI.fragmentShader}else QA=y.vertexShader,GA=y.fragmentShader,o.update(y),PA=o.getVertexShaderID(y),qA=o.getFragmentShaderID(y);const nA=Q.getRenderTarget(),VA=H.isInstancedMesh===!0,YA=H.isBatchedMesh===!0,HA=!!y.map,L=!!y.matcap,SA=!!IA,rA=!!y.aoMap,NA=!!y.lightMap,DA=!!y.bumpMap,AI=!!y.normalMap,TA=!!y.displacementMap,J=!!y.emissiveMap,p=!!y.metalnessMap,X=!!y.roughnessMap,MA=y.anisotropy>0,cA=y.clearcoat>0,yA=y.iridescence>0,jA=y.sheen>0,uA=y.transmission>0,WA=MA&&!!y.anisotropyMap,EI=cA&&!!y.clearcoatMap,yI=cA&&!!y.clearcoatNormalMap,lA=cA&&!!y.clearcoatRoughnessMap,TI=yA&&!!y.iridescenceMap,RI=yA&&!!y.iridescenceThicknessMap,SI=jA&&!!y.sheenColorMap,zA=jA&&!!y.sheenRoughnessMap,_A=!!y.specularMap,NI=!!y.specularColorMap,m=!!y.specularIntensityMap,RA=uA&&!!y.transmissionMap,bA=uA&&!!y.thicknessMap,iI=!!y.gradientMap,Y=!!y.alphaMap,UA=y.alphaTest>0,wA=!!y.alphaHash,$A=!!y.extensions;let XA=Gi;y.toneMapped&&(nA===null||nA.isXRRenderTarget===!0)&&(XA=Q.toneMapping);const bI={isWebGL2:a,shaderID:oA,shaderType:y.type,shaderName:y.name,vertexShader:QA,fragmentShader:GA,defines:y.defines,customVertexShaderID:PA,customFragmentShaderID:qA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:D,batching:YA,instancing:VA,instancingColor:VA&&H.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:nA===null?Q.outputColorSpace:nA.isXRRenderTarget===!0?nA.texture.colorSpace:jQ,alphaToCoverage:!!y.alphaToCoverage,map:HA,matcap:L,envMap:SA,envMapMode:SA&&IA.mapping,envMapCubeUVHeight:AA,aoMap:rA,lightMap:NA,bumpMap:DA,normalMap:AI,displacementMap:n&&TA,emissiveMap:J,normalMapObjectSpace:AI&&y.normalMapType===zy,normalMapTangentSpace:AI&&y.normalMapType===DE,metalnessMap:p,roughnessMap:X,anisotropy:MA,anisotropyMap:WA,clearcoat:cA,clearcoatMap:EI,clearcoatNormalMap:yI,clearcoatRoughnessMap:lA,iridescence:yA,iridescenceMap:TI,iridescenceThicknessMap:RI,sheen:jA,sheenColorMap:SI,sheenRoughnessMap:zA,specularMap:_A,specularColorMap:NI,specularIntensityMap:m,transmission:uA,transmissionMap:RA,thicknessMap:bA,gradientMap:iI,opaque:y.transparent===!1&&y.blending===oo&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:UA,alphaHash:wA,combine:y.combine,mapUv:HA&&h(y.map.channel),aoMapUv:rA&&h(y.aoMap.channel),lightMapUv:NA&&h(y.lightMap.channel),bumpMapUv:DA&&h(y.bumpMap.channel),normalMapUv:AI&&h(y.normalMap.channel),displacementMapUv:TA&&h(y.displacementMap.channel),emissiveMapUv:J&&h(y.emissiveMap.channel),metalnessMapUv:p&&h(y.metalnessMap.channel),roughnessMapUv:X&&h(y.roughnessMap.channel),anisotropyMapUv:WA&&h(y.anisotropyMap.channel),clearcoatMapUv:EI&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:yI&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lA&&h(y.clearcoatRoughnessMap.channel),iridescenceMapUv:TI&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:RI&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:SI&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:zA&&h(y.sheenRoughnessMap.channel),specularMapUv:_A&&h(y.specularMap.channel),specularColorMapUv:NI&&h(y.specularColorMap.channel),specularIntensityMapUv:m&&h(y.specularIntensityMap.channel),transmissionMapUv:RA&&h(y.transmissionMap.channel),thicknessMapUv:bA&&h(y.thicknessMap.channel),alphaMapUv:Y&&h(y.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(AI||MA),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!_.attributes.uv&&(HA||Y),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:H.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:JA,morphTextureStride:CI,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:y.dithering,shadowMapEnabled:Q.shadowMap.enabled&&T.length>0,shadowMapType:Q.shadowMap.type,toneMapping:XA,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:HA&&y.map.isVideoTexture===!0&&gg.getTransfer(y.map.colorSpace)===Sg,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===TQ,flipSided:y.side===wB,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:$A&&y.extensions.derivatives===!0,extensionFragDepth:$A&&y.extensions.fragDepth===!0,extensionDrawBuffers:$A&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:$A&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:$A&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$A&&y.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bI.vertexUv1s=t.has(1),bI.vertexUv2s=t.has(2),bI.vertexUv3s=t.has(3),t.clear(),bI}function S(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)N.push(T),N.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(l(N,y),G(N,y),N.push(Q.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function l(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function G(y,N){E.disableAll(),N.isWebGL2&&E.enable(0),N.supportsVertexTextures&&E.enable(1),N.instancing&&E.enable(2),N.instancingColor&&E.enable(3),N.matcap&&E.enable(4),N.envMap&&E.enable(5),N.normalMapObjectSpace&&E.enable(6),N.normalMapTangentSpace&&E.enable(7),N.clearcoat&&E.enable(8),N.iridescence&&E.enable(9),N.alphaTest&&E.enable(10),N.vertexColors&&E.enable(11),N.vertexAlphas&&E.enable(12),N.vertexUv1s&&E.enable(13),N.vertexUv2s&&E.enable(14),N.vertexUv3s&&E.enable(15),N.vertexTangents&&E.enable(16),N.anisotropy&&E.enable(17),N.alphaHash&&E.enable(18),N.batching&&E.enable(19),y.push(E.mask),E.disableAll(),N.fog&&E.enable(0),N.useFog&&E.enable(1),N.flatShading&&E.enable(2),N.logarithmicDepthBuffer&&E.enable(3),N.skinning&&E.enable(4),N.morphTargets&&E.enable(5),N.morphNormals&&E.enable(6),N.morphColors&&E.enable(7),N.premultipliedAlpha&&E.enable(8),N.shadowMapEnabled&&E.enable(9),N.useLegacyLights&&E.enable(10),N.doubleSided&&E.enable(11),N.flipSided&&E.enable(12),N.useDepthPacking&&E.enable(13),N.dithering&&E.enable(14),N.transmission&&E.enable(15),N.sheen&&E.enable(16),N.opaque&&E.enable(17),N.pointsUvs&&E.enable(18),N.decodeVideoTexture&&E.enable(19),N.alphaToCoverage&&E.enable(20),y.push(E.mask)}function M(y){const N=c[y.type];let T;if(N){const O=NQ[N];T=sk.clone(O.uniforms)}else T=y.uniforms;return T}function U(y,N){let T;for(let O=0,H=e.length;O<H;O++){const V=e[O];if(V.cacheKey===N){T=V,++T.usedTimes;break}}return T===void 0&&(T=new ZR(Q,N,y,B),e.push(T)),T}function k(y){if(--y.usedTimes===0){const N=e.indexOf(y);e[N]=e[e.length-1],e.pop(),y.destroy()}}function K(y){o.remove(y)}function q(){o.dispose()}return{getParameters:r,getProgramCacheKey:S,getUniforms:M,acquireProgram:U,releaseProgram:k,releaseShaderCache:K,programs:e,dispose:q}}function XR(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function zR(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function pw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Fw(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(a,s,n,D,c,h){let r=Q[A];return r===void 0?(r={id:a.id,object:a,geometry:s,material:n,groupOrder:D,renderOrder:a.renderOrder,z:c,group:h},Q[A]=r):(r.id=a.id,r.object=a,r.geometry=s,r.material=n,r.groupOrder=D,r.renderOrder=a.renderOrder,r.z=c,r.group=h),A++,r}function E(a,s,n,D,c,h){const r=i(a,s,n,D,c,h);n.transmission>0?g.push(r):n.transparent===!0?C.push(r):I.push(r)}function o(a,s,n,D,c,h){const r=i(a,s,n,D,c,h);n.transmission>0?g.unshift(r):n.transparent===!0?C.unshift(r):I.unshift(r)}function t(a,s){I.length>1&&I.sort(a||zR),g.length>1&&g.sort(s||pw),C.length>1&&C.sort(s||pw)}function e(){for(let a=A,s=Q.length;a<s;a++){const n=Q[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function $R(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new Fw,Q.set(g,[i])):C>=B.length?(i=new Fw,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function AJ(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new u,color:new ZA};break;case"SpotLight":I={position:new u,direction:new u,color:new ZA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new u,color:new ZA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new u,skyColor:new ZA,groundColor:new ZA};break;case"RectAreaLight":I={color:new ZA,position:new u,halfWidth:new u,halfHeight:new u};break}return Q[A.id]=I,I}}}function IJ(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let gJ=0;function CJ(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function BJ(Q,A){const I=new AJ,g=IJ(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new u);const B=new u,i=new wI,E=new wI;function o(e,a){let s=0,n=0,D=0;for(let T=0;T<9;T++)C.probe[T].set(0,0,0);let c=0,h=0,r=0,S=0,l=0,G=0,M=0,U=0,k=0,K=0,q=0;e.sort(CJ);const y=a===!0?Math.PI:1;for(let T=0,O=e.length;T<O;T++){const H=e[T],V=H.color,_=H.intensity,j=H.distance,IA=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)s+=V.r*_*y,n+=V.g*_*y,D+=V.b*_*y;else if(H.isLightProbe){for(let AA=0;AA<9;AA++)C.probe[AA].addScaledVector(H.sh.coefficients[AA],_);q++}else if(H.isDirectionalLight){const AA=I.get(H);if(AA.color.copy(H.color).multiplyScalar(H.intensity*y),H.castShadow){const oA=H.shadow,sA=g.get(H);sA.shadowBias=oA.bias,sA.shadowNormalBias=oA.normalBias,sA.shadowRadius=oA.radius,sA.shadowMapSize=oA.mapSize,C.directionalShadow[c]=sA,C.directionalShadowMap[c]=IA,C.directionalShadowMatrix[c]=H.shadow.matrix,G++}C.directional[c]=AA,c++}else if(H.isSpotLight){const AA=I.get(H);AA.position.setFromMatrixPosition(H.matrixWorld),AA.color.copy(V).multiplyScalar(_*y),AA.distance=j,AA.coneCos=Math.cos(H.angle),AA.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),AA.decay=H.decay,C.spot[r]=AA;const oA=H.shadow;if(H.map&&(C.spotLightMap[k]=H.map,k++,oA.updateMatrices(H),H.castShadow&&K++),C.spotLightMatrix[r]=oA.matrix,H.castShadow){const sA=g.get(H);sA.shadowBias=oA.bias,sA.shadowNormalBias=oA.normalBias,sA.shadowRadius=oA.radius,sA.shadowMapSize=oA.mapSize,C.spotShadow[r]=sA,C.spotShadowMap[r]=IA,U++}r++}else if(H.isRectAreaLight){const AA=I.get(H);AA.color.copy(V).multiplyScalar(_),AA.halfWidth.set(H.width*.5,0,0),AA.halfHeight.set(0,H.height*.5,0),C.rectArea[S]=AA,S++}else if(H.isPointLight){const AA=I.get(H);if(AA.color.copy(H.color).multiplyScalar(H.intensity*y),AA.distance=H.distance,AA.decay=H.decay,H.castShadow){const oA=H.shadow,sA=g.get(H);sA.shadowBias=oA.bias,sA.shadowNormalBias=oA.normalBias,sA.shadowRadius=oA.radius,sA.shadowMapSize=oA.mapSize,sA.shadowCameraNear=oA.camera.near,sA.shadowCameraFar=oA.camera.far,C.pointShadow[h]=sA,C.pointShadowMap[h]=IA,C.pointShadowMatrix[h]=H.shadow.matrix,M++}C.point[h]=AA,h++}else if(H.isHemisphereLight){const AA=I.get(H);AA.skyColor.copy(H.color).multiplyScalar(_*y),AA.groundColor.copy(H.groundColor).multiplyScalar(_*y),C.hemi[l]=AA,l++}}S>0&&(A.isWebGL2?Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=LA.LTC_FLOAT_1,C.rectAreaLTC2=LA.LTC_FLOAT_2):(C.rectAreaLTC1=LA.LTC_HALF_1,C.rectAreaLTC2=LA.LTC_HALF_2):Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=LA.LTC_FLOAT_1,C.rectAreaLTC2=LA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=LA.LTC_HALF_1,C.rectAreaLTC2=LA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=D;const N=C.hash;(N.directionalLength!==c||N.pointLength!==h||N.spotLength!==r||N.rectAreaLength!==S||N.hemiLength!==l||N.numDirectionalShadows!==G||N.numPointShadows!==M||N.numSpotShadows!==U||N.numSpotMaps!==k||N.numLightProbes!==q)&&(C.directional.length=c,C.spot.length=r,C.rectArea.length=S,C.point.length=h,C.hemi.length=l,C.directionalShadow.length=G,C.directionalShadowMap.length=G,C.pointShadow.length=M,C.pointShadowMap.length=M,C.spotShadow.length=U,C.spotShadowMap.length=U,C.directionalShadowMatrix.length=G,C.pointShadowMatrix.length=M,C.spotLightMatrix.length=U+k-K,C.spotLightMap.length=k,C.numSpotLightShadowsWithMaps=K,C.numLightProbes=q,N.directionalLength=c,N.pointLength=h,N.spotLength=r,N.rectAreaLength=S,N.hemiLength=l,N.numDirectionalShadows=G,N.numPointShadows=M,N.numSpotShadows=U,N.numSpotMaps=k,N.numLightProbes=q,C.version=gJ++)}function t(e,a){let s=0,n=0,D=0,c=0,h=0;const r=a.matrixWorldInverse;for(let S=0,l=e.length;S<l;S++){const G=e[S];if(G.isDirectionalLight){const M=C.directional[s];M.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(r),s++}else if(G.isSpotLight){const M=C.spot[D];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),M.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(r),D++}else if(G.isRectAreaLight){const M=C.rectArea[c];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),E.identity(),i.copy(G.matrixWorld),i.premultiply(r),E.extractRotation(i),M.halfWidth.set(G.width*.5,0,0),M.halfHeight.set(0,G.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),c++}else if(G.isPointLight){const M=C.point[n];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(r),n++}else if(G.isHemisphereLight){const M=C.hemi[h];M.direction.setFromMatrixPosition(G.matrixWorld),M.direction.transformDirection(r),h++}}}return{setup:o,setupView:t,state:C}}function dw(Q,A){const I=new BJ(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:i,pushShadow:E}}function QJ(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let o;return E===void 0?(o=new dw(Q,A),I.set(B,[o])):i>=E.length?(o=new dw(Q,A),E.push(o)):o=E[i],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class cc extends CB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class lc extends CB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const iJ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EJ=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oJ(Q,A,I){let g=new sa;const C=new hA,B=new hA,i=new tg,E=new cc({depthPacking:Xy}),o=new lc,t={},e=I.maxTextureSize,a={[Ni]:wB,[wB]:Ni,[TQ]:TQ},s=new AQ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new hA},radius:{value:4}},vertexShader:iJ,fragmentShader:EJ}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const D=new mI;D.setAttribute("position",new eg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new $g(D,s),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let r=this.type;this.render=function(U,k,K){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||U.length===0)return;const q=Q.getRenderTarget(),y=Q.getActiveCubeFace(),N=Q.getActiveMipmapLevel(),T=Q.state;T.setBlending(Si),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const O=r!==qQ&&this.type===qQ,H=r===qQ&&this.type!==qQ;for(let V=0,_=U.length;V<_;V++){const j=U[V],IA=j.shadow;if(IA===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(IA.autoUpdate===!1&&IA.needsUpdate===!1)continue;C.copy(IA.mapSize);const AA=IA.getFrameExtents();if(C.multiply(AA),B.copy(IA.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/AA.x),C.x=B.x*AA.x,IA.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/AA.y),C.y=B.y*AA.y,IA.mapSize.y=B.y)),IA.map===null||O===!0||H===!0){const sA=this.type!==qQ?{minFilter:zg,magFilter:zg}:{};IA.map!==null&&IA.map.dispose(),IA.map=new KQ(C.x,C.y,sA),IA.map.texture.name=j.name+".shadowMap",IA.camera.updateProjectionMatrix()}Q.setRenderTarget(IA.map),Q.clear();const oA=IA.getViewportCount();for(let sA=0;sA<oA;sA++){const JA=IA.getViewport(sA);i.set(B.x*JA.x,B.y*JA.y,B.x*JA.z,B.y*JA.w),T.viewport(i),IA.updateMatrices(j,sA),g=IA.getFrustum(),G(k,K,IA.camera,j,this.type)}IA.isPointLightShadow!==!0&&this.type===qQ&&S(IA,K),IA.needsUpdate=!1}r=this.type,h.needsUpdate=!1,Q.setRenderTarget(q,y,N)};function S(U,k){const K=A.update(c);s.defines.VSM_SAMPLES!==U.blurSamples&&(s.defines.VSM_SAMPLES=U.blurSamples,n.defines.VSM_SAMPLES=U.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new KQ(C.x,C.y)),s.uniforms.shadow_pass.value=U.map.texture,s.uniforms.resolution.value=U.mapSize,s.uniforms.radius.value=U.radius,Q.setRenderTarget(U.mapPass),Q.clear(),Q.renderBufferDirect(k,null,K,s,c,null),n.uniforms.shadow_pass.value=U.mapPass.texture,n.uniforms.resolution.value=U.mapSize,n.uniforms.radius.value=U.radius,Q.setRenderTarget(U.map),Q.clear(),Q.renderBufferDirect(k,null,K,n,c,null)}function l(U,k,K,q){let y=null;const N=K.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)y=N;else if(y=K.isPointLight===!0?o:E,Q.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const T=y.uuid,O=k.uuid;let H=t[T];H===void 0&&(H={},t[T]=H);let V=H[O];V===void 0&&(V=y.clone(),H[O]=V,k.addEventListener("dispose",M)),y=V}if(y.visible=k.visible,y.wireframe=k.wireframe,q===qQ?y.side=k.shadowSide!==null?k.shadowSide:k.side:y.side=k.shadowSide!==null?k.shadowSide:a[k.side],y.alphaMap=k.alphaMap,y.alphaTest=k.alphaTest,y.map=k.map,y.clipShadows=k.clipShadows,y.clippingPlanes=k.clippingPlanes,y.clipIntersection=k.clipIntersection,y.displacementMap=k.displacementMap,y.displacementScale=k.displacementScale,y.displacementBias=k.displacementBias,y.wireframeLinewidth=k.wireframeLinewidth,y.linewidth=k.linewidth,K.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const T=Q.properties.get(y);T.light=K}return y}function G(U,k,K,q,y){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===qQ)&&(!U.frustumCulled||g.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld);const O=A.update(U),H=U.material;if(Array.isArray(H)){const V=O.groups;for(let _=0,j=V.length;_<j;_++){const IA=V[_],AA=H[IA.materialIndex];if(AA&&AA.visible){const oA=l(U,AA,q,y);U.onBeforeShadow(Q,U,k,K,O,oA,IA),Q.renderBufferDirect(K,null,O,oA,U,IA),U.onAfterShadow(Q,U,k,K,O,oA,IA)}}}else if(H.visible){const V=l(U,H,q,y);U.onBeforeShadow(Q,U,k,K,O,V,null),Q.renderBufferDirect(K,null,O,V,U,null),U.onAfterShadow(Q,U,k,K,O,V,null)}}const T=U.children;for(let O=0,H=T.length;O<H;O++)G(T[O],k,K,q,y)}function M(U){U.target.removeEventListener("dispose",M);for(const K in t){const q=t[K],y=U.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}function tJ(Q,A,I){const g=I.isWebGL2;function C(){let Y=!1;const UA=new tg;let wA=null;const $A=new tg(0,0,0,0);return{setMask:function(XA){wA!==XA&&!Y&&(Q.colorMask(XA,XA,XA,XA),wA=XA)},setLocked:function(XA){Y=XA},setClear:function(XA,bI,HI,Cg,tC){tC===!0&&(XA*=Cg,bI*=Cg,HI*=Cg),UA.set(XA,bI,HI,Cg),$A.equals(UA)===!1&&(Q.clearColor(XA,bI,HI,Cg),$A.copy(UA))},reset:function(){Y=!1,wA=null,$A.set(-1,0,0,0)}}}function B(){let Y=!1,UA=null,wA=null,$A=null;return{setTest:function(XA){XA?VA(Q.DEPTH_TEST):YA(Q.DEPTH_TEST)},setMask:function(XA){UA!==XA&&!Y&&(Q.depthMask(XA),UA=XA)},setFunc:function(XA){if(wA!==XA){switch(XA){case My:Q.depthFunc(Q.NEVER);break;case Uy:Q.depthFunc(Q.ALWAYS);break;case Ny:Q.depthFunc(Q.LESS);break;case Je:Q.depthFunc(Q.LEQUAL);break;case Ky:Q.depthFunc(Q.EQUAL);break;case py:Q.depthFunc(Q.GEQUAL);break;case Fy:Q.depthFunc(Q.GREATER);break;case dy:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}wA=XA}},setLocked:function(XA){Y=XA},setClear:function(XA){$A!==XA&&(Q.clearDepth(XA),$A=XA)},reset:function(){Y=!1,UA=null,wA=null,$A=null}}}function i(){let Y=!1,UA=null,wA=null,$A=null,XA=null,bI=null,HI=null,Cg=null,tC=null;return{setTest:function(ZI){Y||(ZI?VA(Q.STENCIL_TEST):YA(Q.STENCIL_TEST))},setMask:function(ZI){UA!==ZI&&!Y&&(Q.stencilMask(ZI),UA=ZI)},setFunc:function(ZI,kg,lg){(wA!==ZI||$A!==kg||XA!==lg)&&(Q.stencilFunc(ZI,kg,lg),wA=ZI,$A=kg,XA=lg)},setOp:function(ZI,kg,lg){(bI!==ZI||HI!==kg||Cg!==lg)&&(Q.stencilOp(ZI,kg,lg),bI=ZI,HI=kg,Cg=lg)},setLocked:function(ZI){Y=ZI},setClear:function(ZI){tC!==ZI&&(Q.clearStencil(ZI),tC=ZI)},reset:function(){Y=!1,UA=null,wA=null,$A=null,XA=null,bI=null,HI=null,Cg=null,tC=null}}}const E=new C,o=new B,t=new i,e=new WeakMap,a=new WeakMap;let s={},n={},D=new WeakMap,c=[],h=null,r=!1,S=null,l=null,G=null,M=null,U=null,k=null,K=null,q=new ZA(0,0,0),y=0,N=!1,T=null,O=null,H=null,V=null,_=null;const j=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let IA=!1,AA=0;const oA=Q.getParameter(Q.VERSION);oA.indexOf("WebGL")!==-1?(AA=parseFloat(/^WebGL (\d)/.exec(oA)[1]),IA=AA>=1):oA.indexOf("OpenGL ES")!==-1&&(AA=parseFloat(/^OpenGL ES (\d)/.exec(oA)[1]),IA=AA>=2);let sA=null,JA={};const CI=Q.getParameter(Q.SCISSOR_BOX),QA=Q.getParameter(Q.VIEWPORT),GA=new tg().fromArray(CI),PA=new tg().fromArray(QA);function qA(Y,UA,wA,$A){const XA=new Uint8Array(4),bI=Q.createTexture();Q.bindTexture(Y,bI),Q.texParameteri(Y,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(Y,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let HI=0;HI<wA;HI++)g&&(Y===Q.TEXTURE_3D||Y===Q.TEXTURE_2D_ARRAY)?Q.texImage3D(UA,0,Q.RGBA,1,1,$A,0,Q.RGBA,Q.UNSIGNED_BYTE,XA):Q.texImage2D(UA+HI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,XA);return bI}const nA={};nA[Q.TEXTURE_2D]=qA(Q.TEXTURE_2D,Q.TEXTURE_2D,1),nA[Q.TEXTURE_CUBE_MAP]=qA(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(nA[Q.TEXTURE_2D_ARRAY]=qA(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),nA[Q.TEXTURE_3D]=qA(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1)),E.setClear(0,0,0,1),o.setClear(1),t.setClear(0),VA(Q.DEPTH_TEST),o.setFunc(Je),TA(!1),J(LD),VA(Q.CULL_FACE),DA(Si);function VA(Y){s[Y]!==!0&&(Q.enable(Y),s[Y]=!0)}function YA(Y){s[Y]!==!1&&(Q.disable(Y),s[Y]=!1)}function HA(Y,UA){return n[Y]!==UA?(Q.bindFramebuffer(Y,UA),n[Y]=UA,g&&(Y===Q.DRAW_FRAMEBUFFER&&(n[Q.FRAMEBUFFER]=UA),Y===Q.FRAMEBUFFER&&(n[Q.DRAW_FRAMEBUFFER]=UA)),!0):!1}function L(Y,UA){let wA=c,$A=!1;if(Y)if(wA=D.get(UA),wA===void 0&&(wA=[],D.set(UA,wA)),Y.isWebGLMultipleRenderTargets){const XA=Y.texture;if(wA.length!==XA.length||wA[0]!==Q.COLOR_ATTACHMENT0){for(let bI=0,HI=XA.length;bI<HI;bI++)wA[bI]=Q.COLOR_ATTACHMENT0+bI;wA.length=XA.length,$A=!0}}else wA[0]!==Q.COLOR_ATTACHMENT0&&(wA[0]=Q.COLOR_ATTACHMENT0,$A=!0);else wA[0]!==Q.BACK&&(wA[0]=Q.BACK,$A=!0);$A&&(I.isWebGL2?Q.drawBuffers(wA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(wA))}function SA(Y){return h!==Y?(Q.useProgram(Y),h=Y,!0):!1}const rA={[zi]:Q.FUNC_ADD,[ty]:Q.FUNC_SUBTRACT,[ey]:Q.FUNC_REVERSE_SUBTRACT};if(g)rA[TD]=Q.MIN,rA[bD]=Q.MAX;else{const Y=A.get("EXT_blend_minmax");Y!==null&&(rA[TD]=Y.MIN_EXT,rA[bD]=Y.MAX_EXT)}const NA={[ay]:Q.ZERO,[sy]:Q.ONE,[ny]:Q.SRC_COLOR,[Bn]:Q.SRC_ALPHA,[wy]:Q.SRC_ALPHA_SATURATE,[cy]:Q.DST_COLOR,[Dy]:Q.DST_ALPHA,[ry]:Q.ONE_MINUS_SRC_COLOR,[Qn]:Q.ONE_MINUS_SRC_ALPHA,[ly]:Q.ONE_MINUS_DST_COLOR,[hy]:Q.ONE_MINUS_DST_ALPHA,[Sy]:Q.CONSTANT_COLOR,[Gy]:Q.ONE_MINUS_CONSTANT_COLOR,[yy]:Q.CONSTANT_ALPHA,[ky]:Q.ONE_MINUS_CONSTANT_ALPHA};function DA(Y,UA,wA,$A,XA,bI,HI,Cg,tC,ZI){if(Y===Si){r===!0&&(YA(Q.BLEND),r=!1);return}if(r===!1&&(VA(Q.BLEND),r=!0),Y!==oy){if(Y!==S||ZI!==N){if((l!==zi||U!==zi)&&(Q.blendEquation(Q.FUNC_ADD),l=zi,U=zi),ZI)switch(Y){case oo:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case Re:Q.blendFunc(Q.ONE,Q.ONE);break;case mD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case HD:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case oo:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case Re:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case mD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case HD:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}G=null,M=null,k=null,K=null,q.set(0,0,0),y=0,S=Y,N=ZI}return}XA=XA||UA,bI=bI||wA,HI=HI||$A,(UA!==l||XA!==U)&&(Q.blendEquationSeparate(rA[UA],rA[XA]),l=UA,U=XA),(wA!==G||$A!==M||bI!==k||HI!==K)&&(Q.blendFuncSeparate(NA[wA],NA[$A],NA[bI],NA[HI]),G=wA,M=$A,k=bI,K=HI),(Cg.equals(q)===!1||tC!==y)&&(Q.blendColor(Cg.r,Cg.g,Cg.b,tC),q.copy(Cg),y=tC),S=Y,N=!1}function AI(Y,UA){Y.side===TQ?YA(Q.CULL_FACE):VA(Q.CULL_FACE);let wA=Y.side===wB;UA&&(wA=!wA),TA(wA),Y.blending===oo&&Y.transparent===!1?DA(Si):DA(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),E.setMask(Y.colorWrite);const $A=Y.stencilWrite;t.setTest($A),$A&&(t.setMask(Y.stencilWriteMask),t.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),t.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),X(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?VA(Q.SAMPLE_ALPHA_TO_COVERAGE):YA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function TA(Y){T!==Y&&(Y?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),T=Y)}function J(Y){Y!==iy?(VA(Q.CULL_FACE),Y!==O&&(Y===LD?Q.cullFace(Q.BACK):Y===Ey?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):YA(Q.CULL_FACE),O=Y}function p(Y){Y!==H&&(IA&&Q.lineWidth(Y),H=Y)}function X(Y,UA,wA){Y?(VA(Q.POLYGON_OFFSET_FILL),(V!==UA||_!==wA)&&(Q.polygonOffset(UA,wA),V=UA,_=wA)):YA(Q.POLYGON_OFFSET_FILL)}function MA(Y){Y?VA(Q.SCISSOR_TEST):YA(Q.SCISSOR_TEST)}function cA(Y){Y===void 0&&(Y=Q.TEXTURE0+j-1),sA!==Y&&(Q.activeTexture(Y),sA=Y)}function yA(Y,UA,wA){wA===void 0&&(sA===null?wA=Q.TEXTURE0+j-1:wA=sA);let $A=JA[wA];$A===void 0&&($A={type:void 0,texture:void 0},JA[wA]=$A),($A.type!==Y||$A.texture!==UA)&&(sA!==wA&&(Q.activeTexture(wA),sA=wA),Q.bindTexture(Y,UA||nA[Y]),$A.type=Y,$A.texture=UA)}function jA(){const Y=JA[sA];Y!==void 0&&Y.type!==void 0&&(Q.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function uA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function WA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function EI(){try{Q.texSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yI(){try{Q.texSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function TI(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function RI(){try{Q.texStorage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function SI(){try{Q.texStorage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zA(){try{Q.texImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _A(){try{Q.texImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function NI(Y){GA.equals(Y)===!1&&(Q.scissor(Y.x,Y.y,Y.z,Y.w),GA.copy(Y))}function m(Y){PA.equals(Y)===!1&&(Q.viewport(Y.x,Y.y,Y.z,Y.w),PA.copy(Y))}function RA(Y,UA){let wA=a.get(UA);wA===void 0&&(wA=new WeakMap,a.set(UA,wA));let $A=wA.get(Y);$A===void 0&&($A=Q.getUniformBlockIndex(UA,Y.name),wA.set(Y,$A))}function bA(Y,UA){const $A=a.get(UA).get(Y);e.get(UA)!==$A&&(Q.uniformBlockBinding(UA,$A,Y.__bindingPointIndex),e.set(UA,$A))}function iI(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),g===!0&&(Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},sA=null,JA={},n={},D=new WeakMap,c=[],h=null,r=!1,S=null,l=null,G=null,M=null,U=null,k=null,K=null,q=new ZA(0,0,0),y=0,N=!1,T=null,O=null,H=null,V=null,_=null,GA.set(0,0,Q.canvas.width,Q.canvas.height),PA.set(0,0,Q.canvas.width,Q.canvas.height),E.reset(),o.reset(),t.reset()}return{buffers:{color:E,depth:o,stencil:t},enable:VA,disable:YA,bindFramebuffer:HA,drawBuffers:L,useProgram:SA,setBlending:DA,setMaterial:AI,setFlipSided:TA,setCullFace:J,setLineWidth:p,setPolygonOffset:X,setScissorTest:MA,activeTexture:cA,bindTexture:yA,unbindTexture:jA,compressedTexImage2D:uA,compressedTexImage3D:WA,texImage2D:zA,texImage3D:_A,updateUBOMapping:RA,uniformBlockBinding:bA,texStorage2D:RI,texStorage3D:SI,texSubImage2D:EI,texSubImage3D:yI,compressedTexSubImage2D:lA,compressedTexSubImage3D:TI,scissor:NI,viewport:m,reset:iI}}function eJ(Q,A,I,g,C,B,i){const E=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(J,p){return n?new OffscreenCanvas(J,p):Ze("canvas")}function c(J,p,X,MA){let cA=1;if((J.width>MA||J.height>MA)&&(cA=MA/Math.max(J.width,J.height)),cA<1||p===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const yA=p?tn:Math.floor,jA=yA(cA*J.width),uA=yA(cA*J.height);a===void 0&&(a=D(jA,uA));const WA=X?D(jA,uA):a;return WA.width=jA,WA.height=uA,WA.getContext("2d").drawImage(J,0,0,jA,uA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+jA+"x"+uA+")."),WA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function h(J){return hh(J.width)&&hh(J.height)}function r(J){return E?!1:J.wrapS!==zC||J.wrapT!==zC||J.minFilter!==zg&&J.minFilter!==fg}function S(J,p){return J.generateMipmaps&&p&&J.minFilter!==zg&&J.minFilter!==fg}function l(J){Q.generateMipmap(J)}function G(J,p,X,MA,cA=!1){if(E===!1)return p;if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let yA=p;if(p===Q.RED&&(X===Q.FLOAT&&(yA=Q.R32F),X===Q.HALF_FLOAT&&(yA=Q.R16F),X===Q.UNSIGNED_BYTE&&(yA=Q.R8)),p===Q.RED_INTEGER&&(X===Q.UNSIGNED_BYTE&&(yA=Q.R8UI),X===Q.UNSIGNED_SHORT&&(yA=Q.R16UI),X===Q.UNSIGNED_INT&&(yA=Q.R32UI),X===Q.BYTE&&(yA=Q.R8I),X===Q.SHORT&&(yA=Q.R16I),X===Q.INT&&(yA=Q.R32I)),p===Q.RG&&(X===Q.FLOAT&&(yA=Q.RG32F),X===Q.HALF_FLOAT&&(yA=Q.RG16F),X===Q.UNSIGNED_BYTE&&(yA=Q.RG8)),p===Q.RGBA){const jA=cA?be:gg.getTransfer(MA);X===Q.FLOAT&&(yA=Q.RGBA32F),X===Q.HALF_FLOAT&&(yA=Q.RGBA16F),X===Q.UNSIGNED_BYTE&&(yA=jA===Sg?Q.SRGB8_ALPHA8:Q.RGBA8),X===Q.UNSIGNED_SHORT_4_4_4_4&&(yA=Q.RGBA4),X===Q.UNSIGNED_SHORT_5_5_5_1&&(yA=Q.RGB5_A1)}return(yA===Q.R16F||yA===Q.R32F||yA===Q.RG16F||yA===Q.RG32F||yA===Q.RGBA16F||yA===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),yA}function M(J,p,X){return S(J,X)===!0||J.isFramebufferTexture&&J.minFilter!==zg&&J.minFilter!==fg?Math.log2(Math.max(p.width,p.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?p.mipmaps.length:1}function U(J){return J===zg||J===En||J===VE?Q.NEAREST:Q.LINEAR}function k(J){const p=J.target;p.removeEventListener("dispose",k),q(p),p.isVideoTexture&&e.delete(p)}function K(J){const p=J.target;p.removeEventListener("dispose",K),N(p)}function q(J){const p=g.get(J);if(p.__webglInit===void 0)return;const X=J.source,MA=s.get(X);if(MA){const cA=MA[p.__cacheKey];cA.usedTimes--,cA.usedTimes===0&&y(J),Object.keys(MA).length===0&&s.delete(X)}g.remove(J)}function y(J){const p=g.get(J);Q.deleteTexture(p.__webglTexture);const X=J.source,MA=s.get(X);delete MA[p.__cacheKey],i.memory.textures--}function N(J){const p=J.texture,X=g.get(J),MA=g.get(p);if(MA.__webglTexture!==void 0&&(Q.deleteTexture(MA.__webglTexture),i.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let cA=0;cA<6;cA++){if(Array.isArray(X.__webglFramebuffer[cA]))for(let yA=0;yA<X.__webglFramebuffer[cA].length;yA++)Q.deleteFramebuffer(X.__webglFramebuffer[cA][yA]);else Q.deleteFramebuffer(X.__webglFramebuffer[cA]);X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer[cA])}else{if(Array.isArray(X.__webglFramebuffer))for(let cA=0;cA<X.__webglFramebuffer.length;cA++)Q.deleteFramebuffer(X.__webglFramebuffer[cA]);else Q.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let cA=0;cA<X.__webglColorRenderbuffer.length;cA++)X.__webglColorRenderbuffer[cA]&&Q.deleteRenderbuffer(X.__webglColorRenderbuffer[cA]);X.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let cA=0,yA=p.length;cA<yA;cA++){const jA=g.get(p[cA]);jA.__webglTexture&&(Q.deleteTexture(jA.__webglTexture),i.memory.textures--),g.remove(p[cA])}g.remove(p),g.remove(J)}let T=0;function O(){T=0}function H(){const J=T;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),T+=1,J}function V(J){const p=[];return p.push(J.wrapS),p.push(J.wrapT),p.push(J.wrapR||0),p.push(J.magFilter),p.push(J.minFilter),p.push(J.anisotropy),p.push(J.internalFormat),p.push(J.format),p.push(J.type),p.push(J.generateMipmaps),p.push(J.premultiplyAlpha),p.push(J.flipY),p.push(J.unpackAlignment),p.push(J.colorSpace),p.join()}function _(J,p){const X=g.get(J);if(J.isVideoTexture&&AI(J),J.isRenderTargetTexture===!1&&J.version>0&&X.__version!==J.version){const MA=J.image;if(MA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(MA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{GA(X,J,p);return}}I.bindTexture(Q.TEXTURE_2D,X.__webglTexture,Q.TEXTURE0+p)}function j(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){GA(X,J,p);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,X.__webglTexture,Q.TEXTURE0+p)}function IA(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){GA(X,J,p);return}I.bindTexture(Q.TEXTURE_3D,X.__webglTexture,Q.TEXTURE0+p)}function AA(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){PA(X,J,p);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,X.__webglTexture,Q.TEXTURE0+p)}const oA={[qe]:Q.REPEAT,[zC]:Q.CLAMP_TO_EDGE,[Ye]:Q.MIRRORED_REPEAT},sA={[zg]:Q.NEAREST,[En]:Q.NEAREST_MIPMAP_NEAREST,[VE]:Q.NEAREST_MIPMAP_LINEAR,[fg]:Q.LINEAR,[we]:Q.LINEAR_MIPMAP_NEAREST,[OQ]:Q.LINEAR_MIPMAP_LINEAR},JA={[$y]:Q.NEVER,[Qk]:Q.ALWAYS,[Ak]:Q.LESS,[tc]:Q.LEQUAL,[Ik]:Q.EQUAL,[Bk]:Q.GEQUAL,[gk]:Q.GREATER,[Ck]:Q.NOTEQUAL};function CI(J,p,X){if(p.type===oQ&&A.has("OES_texture_float_linear")===!1&&(p.magFilter===fg||p.magFilter===we||p.magFilter===VE||p.magFilter===OQ||p.minFilter===fg||p.minFilter===we||p.minFilter===VE||p.minFilter===OQ)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(Q.texParameteri(J,Q.TEXTURE_WRAP_S,oA[p.wrapS]),Q.texParameteri(J,Q.TEXTURE_WRAP_T,oA[p.wrapT]),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,oA[p.wrapR]),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,sA[p.magFilter]),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,sA[p.minFilter])):(Q.texParameteri(J,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(J,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE),(p.wrapS!==zC||p.wrapT!==zC)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,U(p.magFilter)),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,U(p.minFilter)),p.minFilter!==zg&&p.minFilter!==fg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),p.compareFunction&&(Q.texParameteri(J,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(J,Q.TEXTURE_COMPARE_FUNC,JA[p.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const MA=A.get("EXT_texture_filter_anisotropic");if(p.magFilter===zg||p.minFilter!==VE&&p.minFilter!==OQ||p.type===oQ&&A.has("OES_texture_float_linear")===!1||E===!1&&p.type===Gt&&A.has("OES_texture_half_float_linear")===!1)return;(p.anisotropy>1||g.get(p).__currentAnisotropy)&&(Q.texParameterf(J,MA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,C.getMaxAnisotropy())),g.get(p).__currentAnisotropy=p.anisotropy)}}function QA(J,p){let X=!1;J.__webglInit===void 0&&(J.__webglInit=!0,p.addEventListener("dispose",k));const MA=p.source;let cA=s.get(MA);cA===void 0&&(cA={},s.set(MA,cA));const yA=V(p);if(yA!==J.__cacheKey){cA[yA]===void 0&&(cA[yA]={texture:Q.createTexture(),usedTimes:0},i.memory.textures++,X=!0),cA[yA].usedTimes++;const jA=cA[J.__cacheKey];jA!==void 0&&(cA[J.__cacheKey].usedTimes--,jA.usedTimes===0&&y(p)),J.__cacheKey=yA,J.__webglTexture=cA[yA].texture}return X}function GA(J,p,X){let MA=Q.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(MA=Q.TEXTURE_2D_ARRAY),p.isData3DTexture&&(MA=Q.TEXTURE_3D);const cA=QA(J,p),yA=p.source;I.bindTexture(MA,J.__webglTexture,Q.TEXTURE0+X);const jA=g.get(yA);if(yA.version!==jA.__version||cA===!0){I.activeTexture(Q.TEXTURE0+X);const uA=gg.getPrimaries(gg.workingColorSpace),WA=p.colorSpace===vB?null:gg.getPrimaries(p.colorSpace),EI=p.colorSpace===vB||uA===WA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,p.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,p.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,EI);const yI=r(p)&&h(p.image)===!1;let lA=c(p.image,yI,!1,C.maxTextureSize);lA=TA(p,lA);const TI=h(lA)||E,RI=B.convert(p.format,p.colorSpace);let SI=B.convert(p.type),zA=G(p.internalFormat,RI,SI,p.colorSpace,p.isVideoTexture);CI(MA,p,TI);let _A;const NI=p.mipmaps,m=E&&p.isVideoTexture!==!0&&zA!==Ec,RA=jA.__version===void 0||cA===!0,bA=yA.dataReady,iI=M(p,lA,TI);if(p.isDepthTexture)zA=Q.DEPTH_COMPONENT,E?p.type===oQ?zA=Q.DEPTH_COMPONENT32F:p.type===hi?zA=Q.DEPTH_COMPONENT24:p.type===QE?zA=Q.DEPTH24_STENCIL8:zA=Q.DEPTH_COMPONENT16:p.type===oQ&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),p.format===iE&&zA===Q.DEPTH_COMPONENT&&p.type!==pn&&p.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),p.type=hi,SI=B.convert(p.type)),p.format===Do&&zA===Q.DEPTH_COMPONENT&&(zA=Q.DEPTH_STENCIL,p.type!==QE&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),p.type=QE,SI=B.convert(p.type))),RA&&(m?I.texStorage2D(Q.TEXTURE_2D,1,zA,lA.width,lA.height):I.texImage2D(Q.TEXTURE_2D,0,zA,lA.width,lA.height,0,RI,SI,null));else if(p.isDataTexture)if(NI.length>0&&TI){m&&RA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)_A=NI[Y],m?bA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,_A.width,_A.height,RI,SI,_A.data):I.texImage2D(Q.TEXTURE_2D,Y,zA,_A.width,_A.height,0,RI,SI,_A.data);p.generateMipmaps=!1}else m?(RA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height),bA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,lA.width,lA.height,RI,SI,lA.data)):I.texImage2D(Q.TEXTURE_2D,0,zA,lA.width,lA.height,0,RI,SI,lA.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){m&&RA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iI,zA,NI[0].width,NI[0].height,lA.depth);for(let Y=0,UA=NI.length;Y<UA;Y++)_A=NI[Y],p.format!==KB?RI!==null?m?bA&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,_A.width,_A.height,lA.depth,RI,_A.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,Y,zA,_A.width,_A.height,lA.depth,0,_A.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m?bA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,_A.width,_A.height,lA.depth,RI,SI,_A.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,Y,zA,_A.width,_A.height,lA.depth,0,RI,SI,_A.data)}else{m&&RA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)_A=NI[Y],p.format!==KB?RI!==null?m?bA&&I.compressedTexSubImage2D(Q.TEXTURE_2D,Y,0,0,_A.width,_A.height,RI,_A.data):I.compressedTexImage2D(Q.TEXTURE_2D,Y,zA,_A.width,_A.height,0,_A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m?bA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,_A.width,_A.height,RI,SI,_A.data):I.texImage2D(Q.TEXTURE_2D,Y,zA,_A.width,_A.height,0,RI,SI,_A.data)}else if(p.isDataArrayTexture)m?(RA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iI,zA,lA.width,lA.height,lA.depth),bA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,lA.width,lA.height,lA.depth,RI,SI,lA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,zA,lA.width,lA.height,lA.depth,0,RI,SI,lA.data);else if(p.isData3DTexture)m?(RA&&I.texStorage3D(Q.TEXTURE_3D,iI,zA,lA.width,lA.height,lA.depth),bA&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,lA.width,lA.height,lA.depth,RI,SI,lA.data)):I.texImage3D(Q.TEXTURE_3D,0,zA,lA.width,lA.height,lA.depth,0,RI,SI,lA.data);else if(p.isFramebufferTexture){if(RA)if(m)I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height);else{let Y=lA.width,UA=lA.height;for(let wA=0;wA<iI;wA++)I.texImage2D(Q.TEXTURE_2D,wA,zA,Y,UA,0,RI,SI,null),Y>>=1,UA>>=1}}else if(NI.length>0&&TI){m&&RA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)_A=NI[Y],m?bA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,RI,SI,_A):I.texImage2D(Q.TEXTURE_2D,Y,zA,RI,SI,_A);p.generateMipmaps=!1}else m?(RA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height),bA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,RI,SI,lA)):I.texImage2D(Q.TEXTURE_2D,0,zA,RI,SI,lA);S(p,TI)&&l(MA),jA.__version=yA.version,p.onUpdate&&p.onUpdate(p)}J.__version=p.version}function PA(J,p,X){if(p.image.length!==6)return;const MA=QA(J,p),cA=p.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,J.__webglTexture,Q.TEXTURE0+X);const yA=g.get(cA);if(cA.version!==yA.__version||MA===!0){I.activeTexture(Q.TEXTURE0+X);const jA=gg.getPrimaries(gg.workingColorSpace),uA=p.colorSpace===vB?null:gg.getPrimaries(p.colorSpace),WA=p.colorSpace===vB||jA===uA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,p.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,p.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,WA);const EI=p.isCompressedTexture||p.image[0].isCompressedTexture,yI=p.image[0]&&p.image[0].isDataTexture,lA=[];for(let Y=0;Y<6;Y++)!EI&&!yI?lA[Y]=c(p.image[Y],!1,!0,C.maxCubemapSize):lA[Y]=yI?p.image[Y].image:p.image[Y],lA[Y]=TA(p,lA[Y]);const TI=lA[0],RI=h(TI)||E,SI=B.convert(p.format,p.colorSpace),zA=B.convert(p.type),_A=G(p.internalFormat,SI,zA,p.colorSpace),NI=E&&p.isVideoTexture!==!0,m=yA.__version===void 0||MA===!0,RA=cA.dataReady;let bA=M(p,TI,RI);CI(Q.TEXTURE_CUBE_MAP,p,RI);let iI;if(EI){NI&&m&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,bA,_A,TI.width,TI.height);for(let Y=0;Y<6;Y++){iI=lA[Y].mipmaps;for(let UA=0;UA<iI.length;UA++){const wA=iI[UA];p.format!==KB?SI!==null?NI?RA&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,0,0,wA.width,wA.height,SI,wA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,_A,wA.width,wA.height,0,wA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):NI?RA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,0,0,wA.width,wA.height,SI,zA,wA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,_A,wA.width,wA.height,0,SI,zA,wA.data)}}}else{iI=p.mipmaps,NI&&m&&(iI.length>0&&bA++,I.texStorage2D(Q.TEXTURE_CUBE_MAP,bA,_A,lA[0].width,lA[0].height));for(let Y=0;Y<6;Y++)if(yI){NI?RA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lA[Y].width,lA[Y].height,SI,zA,lA[Y].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_A,lA[Y].width,lA[Y].height,0,SI,zA,lA[Y].data);for(let UA=0;UA<iI.length;UA++){const $A=iI[UA].image[Y].image;NI?RA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,0,0,$A.width,$A.height,SI,zA,$A.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,_A,$A.width,$A.height,0,SI,zA,$A.data)}}else{NI?RA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,SI,zA,lA[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_A,SI,zA,lA[Y]);for(let UA=0;UA<iI.length;UA++){const wA=iI[UA];NI?RA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,0,0,SI,zA,wA.image[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,_A,SI,zA,wA.image[Y])}}}S(p,RI)&&l(Q.TEXTURE_CUBE_MAP),yA.__version=cA.version,p.onUpdate&&p.onUpdate(p)}J.__version=p.version}function qA(J,p,X,MA,cA,yA){const jA=B.convert(X.format,X.colorSpace),uA=B.convert(X.type),WA=G(X.internalFormat,jA,uA,X.colorSpace);if(!g.get(p).__hasExternalTextures){const yI=Math.max(1,p.width>>yA),lA=Math.max(1,p.height>>yA);cA===Q.TEXTURE_3D||cA===Q.TEXTURE_2D_ARRAY?I.texImage3D(cA,yA,WA,yI,lA,p.depth,0,jA,uA,null):I.texImage2D(cA,yA,WA,yI,lA,0,jA,uA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,J),DA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,MA,cA,g.get(X).__webglTexture,0,NA(p)):(cA===Q.TEXTURE_2D||cA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&cA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,MA,cA,g.get(X).__webglTexture,yA),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function nA(J,p,X){if(Q.bindRenderbuffer(Q.RENDERBUFFER,J),p.depthBuffer&&!p.stencilBuffer){let MA=E===!0?Q.DEPTH_COMPONENT24:Q.DEPTH_COMPONENT16;if(X||DA(p)){const cA=p.depthTexture;cA&&cA.isDepthTexture&&(cA.type===oQ?MA=Q.DEPTH_COMPONENT32F:cA.type===hi&&(MA=Q.DEPTH_COMPONENT24));const yA=NA(p);DA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,yA,MA,p.width,p.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,yA,MA,p.width,p.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,MA,p.width,p.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,J)}else if(p.depthBuffer&&p.stencilBuffer){const MA=NA(p);X&&DA(p)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,MA,Q.DEPTH24_STENCIL8,p.width,p.height):DA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,MA,Q.DEPTH24_STENCIL8,p.width,p.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,p.width,p.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,J)}else{const MA=p.isWebGLMultipleRenderTargets===!0?p.texture:[p.texture];for(let cA=0;cA<MA.length;cA++){const yA=MA[cA],jA=B.convert(yA.format,yA.colorSpace),uA=B.convert(yA.type),WA=G(yA.internalFormat,jA,uA,yA.colorSpace),EI=NA(p);X&&DA(p)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,EI,WA,p.width,p.height):DA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,EI,WA,p.width,p.height):Q.renderbufferStorage(Q.RENDERBUFFER,WA,p.width,p.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function VA(J,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,J),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(p.depthTexture).__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),_(p.depthTexture,0);const MA=g.get(p.depthTexture).__webglTexture,cA=NA(p);if(p.depthTexture.format===iE)DA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,MA,0,cA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,MA,0);else if(p.depthTexture.format===Do)DA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,MA,0,cA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,MA,0);else throw new Error("Unknown depthTexture format")}function YA(J){const p=g.get(J),X=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!p.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");VA(p.__webglFramebuffer,J)}else if(X){p.__webglDepthbuffer=[];for(let MA=0;MA<6;MA++)I.bindFramebuffer(Q.FRAMEBUFFER,p.__webglFramebuffer[MA]),p.__webglDepthbuffer[MA]=Q.createRenderbuffer(),nA(p.__webglDepthbuffer[MA],J,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer=Q.createRenderbuffer(),nA(p.__webglDepthbuffer,J,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function HA(J,p,X){const MA=g.get(J);p!==void 0&&qA(MA.__webglFramebuffer,J,J.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),X!==void 0&&YA(J)}function L(J){const p=J.texture,X=g.get(J),MA=g.get(p);J.addEventListener("dispose",K),J.isWebGLMultipleRenderTargets!==!0&&(MA.__webglTexture===void 0&&(MA.__webglTexture=Q.createTexture()),MA.__version=p.version,i.memory.textures++);const cA=J.isWebGLCubeRenderTarget===!0,yA=J.isWebGLMultipleRenderTargets===!0,jA=h(J)||E;if(cA){X.__webglFramebuffer=[];for(let uA=0;uA<6;uA++)if(E&&p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer[uA]=[];for(let WA=0;WA<p.mipmaps.length;WA++)X.__webglFramebuffer[uA][WA]=Q.createFramebuffer()}else X.__webglFramebuffer[uA]=Q.createFramebuffer()}else{if(E&&p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer=[];for(let uA=0;uA<p.mipmaps.length;uA++)X.__webglFramebuffer[uA]=Q.createFramebuffer()}else X.__webglFramebuffer=Q.createFramebuffer();if(yA)if(C.drawBuffers){const uA=J.texture;for(let WA=0,EI=uA.length;WA<EI;WA++){const yI=g.get(uA[WA]);yI.__webglTexture===void 0&&(yI.__webglTexture=Q.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(E&&J.samples>0&&DA(J)===!1){const uA=yA?p:[p];X.__webglMultisampledFramebuffer=Q.createFramebuffer(),X.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let WA=0;WA<uA.length;WA++){const EI=uA[WA];X.__webglColorRenderbuffer[WA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,X.__webglColorRenderbuffer[WA]);const yI=B.convert(EI.format,EI.colorSpace),lA=B.convert(EI.type),TI=G(EI.internalFormat,yI,lA,EI.colorSpace,J.isXRRenderTarget===!0),RI=NA(J);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,RI,TI,J.width,J.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+WA,Q.RENDERBUFFER,X.__webglColorRenderbuffer[WA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),J.depthBuffer&&(X.__webglDepthRenderbuffer=Q.createRenderbuffer(),nA(X.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(cA){I.bindTexture(Q.TEXTURE_CUBE_MAP,MA.__webglTexture),CI(Q.TEXTURE_CUBE_MAP,p,jA);for(let uA=0;uA<6;uA++)if(E&&p.mipmaps&&p.mipmaps.length>0)for(let WA=0;WA<p.mipmaps.length;WA++)qA(X.__webglFramebuffer[uA][WA],J,p,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+uA,WA);else qA(X.__webglFramebuffer[uA],J,p,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+uA,0);S(p,jA)&&l(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(yA){const uA=J.texture;for(let WA=0,EI=uA.length;WA<EI;WA++){const yI=uA[WA],lA=g.get(yI);I.bindTexture(Q.TEXTURE_2D,lA.__webglTexture),CI(Q.TEXTURE_2D,yI,jA),qA(X.__webglFramebuffer,J,yI,Q.COLOR_ATTACHMENT0+WA,Q.TEXTURE_2D,0),S(yI,jA)&&l(Q.TEXTURE_2D)}I.unbindTexture()}else{let uA=Q.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(E?uA=J.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(uA,MA.__webglTexture),CI(uA,p,jA),E&&p.mipmaps&&p.mipmaps.length>0)for(let WA=0;WA<p.mipmaps.length;WA++)qA(X.__webglFramebuffer[WA],J,p,Q.COLOR_ATTACHMENT0,uA,WA);else qA(X.__webglFramebuffer,J,p,Q.COLOR_ATTACHMENT0,uA,0);S(p,jA)&&l(uA),I.unbindTexture()}J.depthBuffer&&YA(J)}function SA(J){const p=h(J)||E,X=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let MA=0,cA=X.length;MA<cA;MA++){const yA=X[MA];if(S(yA,p)){const jA=J.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,uA=g.get(yA).__webglTexture;I.bindTexture(jA,uA),l(jA),I.unbindTexture()}}}function rA(J){if(E&&J.samples>0&&DA(J)===!1){const p=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],X=J.width,MA=J.height;let cA=Q.COLOR_BUFFER_BIT;const yA=[],jA=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,uA=g.get(J),WA=J.isWebGLMultipleRenderTargets===!0;if(WA)for(let EI=0;EI<p.length;EI++)I.bindFramebuffer(Q.FRAMEBUFFER,uA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,uA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,uA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,uA.__webglFramebuffer);for(let EI=0;EI<p.length;EI++){yA.push(Q.COLOR_ATTACHMENT0+EI),J.depthBuffer&&yA.push(jA);const yI=uA.__ignoreDepthValues!==void 0?uA.__ignoreDepthValues:!1;if(yI===!1&&(J.depthBuffer&&(cA|=Q.DEPTH_BUFFER_BIT),J.stencilBuffer&&(cA|=Q.STENCIL_BUFFER_BIT)),WA&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,uA.__webglColorRenderbuffer[EI]),yI===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[jA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[jA])),WA){const lA=g.get(p[EI]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,lA,0)}Q.blitFramebuffer(0,0,X,MA,0,0,X,MA,cA,Q.NEAREST),t&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,yA)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),WA)for(let EI=0;EI<p.length;EI++){I.bindFramebuffer(Q.FRAMEBUFFER,uA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.RENDERBUFFER,uA.__webglColorRenderbuffer[EI]);const yI=g.get(p[EI]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,uA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.TEXTURE_2D,yI,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,uA.__webglMultisampledFramebuffer)}}function NA(J){return Math.min(C.maxSamples,J.samples)}function DA(J){const p=g.get(J);return E&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function AI(J){const p=i.render.frame;e.get(J)!==p&&(e.set(J,p),J.update())}function TA(J,p){const X=J.colorSpace,MA=J.format,cA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||J.format===on||X!==jQ&&X!==vB&&(gg.getTransfer(X)===Sg?E===!1?A.has("EXT_sRGB")===!0&&MA===KB?(J.format=on,J.minFilter=fg,J.generateMipmaps=!1):p=ac.sRGBToLinear(p):(MA!==KB||cA!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),p}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=_,this.setTexture2DArray=j,this.setTexture3D=IA,this.setTextureCube=AA,this.rebindTextures=HA,this.setupRenderTarget=L,this.updateRenderTargetMipmap=SA,this.updateMultisampleRenderTarget=rA,this.setupDepthRenderbuffer=YA,this.setupFrameBufferTexture=qA,this.useMultisampledRTT=DA}function Gk(Q,A,I){const g=I.isWebGL2;function C(B,i=vB){let E;const o=gg.getTransfer(i);if(B===yi)return Q.UNSIGNED_BYTE;if(B===gc)return Q.UNSIGNED_SHORT_4_4_4_4;if(B===Cc)return Q.UNSIGNED_SHORT_5_5_5_1;if(B===Hy)return Q.BYTE;if(B===Ty)return Q.SHORT;if(B===pn)return Q.UNSIGNED_SHORT;if(B===Ic)return Q.INT;if(B===hi)return Q.UNSIGNED_INT;if(B===oQ)return Q.FLOAT;if(B===Gt)return g?Q.HALF_FLOAT:(E=A.get("OES_texture_half_float"),E!==null?E.HALF_FLOAT_OES:null);if(B===by)return Q.ALPHA;if(B===KB)return Q.RGBA;if(B===xy)return Q.LUMINANCE;if(B===_y)return Q.LUMINANCE_ALPHA;if(B===iE)return Q.DEPTH_COMPONENT;if(B===Do)return Q.DEPTH_STENCIL;if(B===on)return E=A.get("EXT_sRGB"),E!==null?E.SRGB_ALPHA_EXT:null;if(B===Oy)return Q.RED;if(B===Bc)return Q.RED_INTEGER;if(B===vy)return Q.RG;if(B===Qc)return Q.RG_INTEGER;if(B===ic)return Q.RGBA_INTEGER;if(B===_s||B===Os||B===vs||B===Zs)if(o===Sg)if(E=A.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(B===_s)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===Os)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===vs)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===Zs)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=A.get("WEBGL_compressed_texture_s3tc"),E!==null){if(B===_s)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===Os)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===vs)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===Zs)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===_D||B===OD||B===vD||B===ZD)if(E=A.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(B===_D)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===OD)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===vD)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===ZD)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===Ec)return E=A.get("WEBGL_compressed_texture_etc1"),E!==null?E.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===PD||B===WD)if(E=A.get("WEBGL_compressed_texture_etc"),E!==null){if(B===PD)return o===Sg?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(B===WD)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===VD||B===jD||B===XD||B===zD||B===$D||B===Ah||B===Ih||B===gh||B===Ch||B===Bh||B===Qh||B===ih||B===Eh||B===oh)if(E=A.get("WEBGL_compressed_texture_astc"),E!==null){if(B===VD)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===jD)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===XD)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===zD)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===$D)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===Ah)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===Ih)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===gh)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===Ch)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===Bh)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===Qh)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===ih)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===Eh)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===oh)return o===Sg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===Ps||B===th||B===eh)if(E=A.get("EXT_texture_compression_bptc"),E!==null){if(B===Ps)return o===Sg?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(B===th)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(B===eh)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(B===Zy||B===ah||B===sh||B===nh)if(E=A.get("EXT_texture_compression_rgtc"),E!==null){if(B===Ps)return E.COMPRESSED_RED_RGTC1_EXT;if(B===ah)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===sh)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===nh)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===QE?g?Q.UNSIGNED_INT_24_8:(E=A.get("WEBGL_depth_texture"),E!==null?E.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class yk extends pC{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Io extends VI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aJ={type:"move"};class ID{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new u,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new u),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new u,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new u),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,i=null;const E=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){i=!0;for(const c of A.hand.values()){const h=I.getJointPose(c,g),r=this._getHandJoint(t,c);h!==null&&(r.matrix.fromArray(h.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=h.radius),r.visible=h!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,D=.005;t.inputState.pinching&&s>n+D?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-D&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(aJ)))}return E!==null&&(E.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Io;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const sJ=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nJ=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

uniform vec3 glowColor;
uniform float falloffAmount;
uniform float glowSharpness;
uniform float glowInternalRadius;

varying vec3 vPosition;
varying vec3 vNormal;

void main()
{
	// Normal
	vec3 normal = normalize(vNormal);
	if(!gl_FrontFacing)
			normal *= - 1.0;
	vec3 viewDirection = normalize(cameraPosition - vPosition);
	float fresnel = dot(viewDirection, normal);
	fresnel = pow(fresnel, glowInternalRadius + 0.1);
	float falloff = smoothstep(0., falloffAmount, fresnel);
	float fakeGlow = fresnel;
	fakeGlow += fresnel * glowSharpness;
	fakeGlow *= falloff;
	gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., 1.0));

	${DI.tonemapping_fragment}
	${DI.colorspace_fragment}
}`,GY=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * viewMatrix * modelPosition;
	vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
	vPosition = modelPosition.xyz;
	vNormal = modelNormal.xyz;
}`,yY=Q=>({ref:Q&1}),XS=Q=>({ref:Q[0]});function kY(Q){let A;const I=Q[8].default,g=mC(I,Q,Q[10],XS);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&HC(g,I,C,C[10],A?bC(I,C[10],B,yY):TC(C[10]),XS)},i(C){A||(EA(g,C),A=!0)},o(C){eA(g,C),A=!1},d(C){g&&g.d(C)}}}function MY(Q){let A,I;const g=[{is:Q[0]},{fragmentShader:SY},{vertexShader:GY},{transparent:!0},{blending:Re},{depthTest:!1},Q[3]];let C={$$slots:{default:[kY]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=JB(C,g[B]);return A=new Ag({props:C}),Q[9](A),{c(){KA(A.$$.fragment)},l(B){pA(A.$$.fragment,B)},m(B,i){FA(A,B,i),I=!0},p(B,[i]){const E=i&9?Gn(g,[i&1&&{is:B[0]},g[1],g[2],g[3],g[4],g[5],i&8&&yn(B[3])]):{};i&1025&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(EA(A.$$.fragment,B),I=!0)},o(B){eA(A.$$.fragment,B),I=!1},d(B){Q[9](null),dA(A,B)}}}function UY(Q,A,I){const g=["falloff","glowInternalRadius","glowColor","glowSharpness"];let C=WQ(A,g),B,{$$slots:i={},$$scope:E}=A,{falloff:o=.1}=A,{glowInternalRadius:t=6}=A,{glowColor:e="green"}=A,{glowSharpness:a=1}=A,s=new AQ({uniforms:{falloff:{value:o},glowInternalRadius:{value:t},glowColor:{value:new ZA(e)},glowSharpness:{value:a}}}),{invalidate:n}=Ko();const D=_c();$C(Q,D,h=>I(1,B=h));function c(h){ln[h?"unshift":"push"](()=>{B=h,D.set(B)})}return Q.$$set=h=>{A=JB(JB({},A),Dt(h)),I(3,C=WQ(A,g)),"falloff"in h&&I(4,o=h.falloff),"glowInternalRadius"in h&&I(5,t=h.glowInternalRadius),"glowColor"in h&&I(6,e=h.glowColor),"glowSharpness"in h&&I(7,a=h.glowSharpness),"$$scope"in h&&I(10,E=h.$$scope)},Q.$$.update=()=>{Q.$$.dirty&240&&(I(0,s.uniforms.falloff.value=o,s),I(0,s.uniforms.glowInternalRadius.value=t,s),I(0,s.uniforms.glowColor.value=new ZA(e),s),I(0,s.uniforms.glowSharpness.value=a,s),n())},[s,B,D,C,o,t,e,a,i,c,E]}class NY extends sg{constructor(A){super(),ng(this,A,UY,MY,ag,{falloff:4,glowInternalRadius:5,glowColor:6,glowSharpness:7})}}const KY=`
uniform sampler2D pointTexture;
uniform float fade;
uniform float opacity;

varying vec3 vColor;
void main() {
	float pointOpacity = 1.0;
	if (fade == 1.0) {
		float d = distance(gl_PointCoord, vec2(0.5, 0.5));
		pointOpacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
	}
	gl_FragColor = vec4(vColor, pointOpacity * opacity);

	${DI.tonemapping_fragment}
	${DI.colorspace_fragment}
}`,pY=`uniform float time;
attribute float size;
varying vec3 vColor;
void main() {
	vColor = color;
	vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
	gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
	gl_Position = projectionMatrix * mvPosition;
}`,FY=Q=>({ref:Q&33554432}),zS=Q=>({ref:Q[25]});function dY(Q){let A,I,g,C,B,i;return A=new Ag.BufferAttribute({props:{attach:fY,args:[Q[2],3]}}),g=new Ag.BufferAttribute({props:{attach:uY,args:[Q[3],3]}}),B=new Ag.BufferAttribute({props:{attach:qY,args:[Q[4],1]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&4&&(t.args=[E[2],3]),A.$set(t);const e={};o&8&&(e.args=[E[3],3]),g.$set(e);const a={};o&16&&(a.args=[E[4],1]),B.$set(a)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function RY(Q){let A,I,g,C,B;A=new Ag.BufferGeometry({props:{$$slots:{default:[dY]},$$scope:{ctx:Q}}}),g=new Ag({props:{is:Q[8],blending:Re,"uniforms.fade.value":Q[0]?1:0,"uniforms.time.value":Q[5],"uniforms.opacity.value":Q[1],depthWrite:!1,transparent:!0,vertexColors:!0}});const i=Q[17].default,E=mC(i,Q,Q[19],zS);return{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),E&&E.c()},l(o){pA(A.$$.fragment,o),I=eI(o),pA(g.$$.fragment,o),C=eI(o),E&&E.l(o)},m(o,t){FA(A,o,t),mA(o,I,t),FA(g,o,t),mA(o,C,t),E&&E.m(o,t),B=!0},p(o,t){const e={};t&524316&&(e.$$scope={dirty:t,ctx:o}),A.$set(e);const a={};t&1&&(a["uniforms.fade.value"]=o[0]?1:0),t&32&&(a["uniforms.time.value"]=o[5]),t&2&&(a["uniforms.opacity.value"]=o[1]),g.$set(a),E&&E.p&&(!B||t&34078720)&&HC(E,i,o,o[19],B?bC(i,o[19],t,FY):TC(o[19]),zS)},i(o){B||(EA(A.$$.fragment,o),EA(g.$$.fragment,o),EA(E,o),B=!0)},o(o){eA(A.$$.fragment,o),eA(g.$$.fragment,o),eA(E,o),B=!1},d(o){o&&(fA(I),fA(C)),dA(A,o),dA(g,o),E&&E.d(o)}}}function JY(Q){let A,I;const g=[Q[9]];let C={$$slots:{default:[RY,({ref:B})=>({25:B}),({ref:B})=>B?33554432:0]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=JB(C,g[B]);return A=new Ag.Points({props:C}),Q[18](A),{c(){KA(A.$$.fragment)},l(B){pA(A.$$.fragment,B)},m(B,i){FA(A,B,i),I=!0},p(B,[i]){const E=i&512?Gn(g,[yn(B[9])]):{};i&34078783&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(EA(A.$$.fragment,B),I=!0)},o(B){eA(A.$$.fragment,B),I=!1},d(B){Q[18](null),dA(A,B)}}}const fY=(Q,A)=>(Q.setAttribute("position",A),()=>{}),uY=(Q,A)=>(Q.setAttribute("color",A),()=>{}),qY=(Q,A)=>(Q.setAttribute("size",A),()=>{});function YY(Q,A,I){const g=["count","radius","depth","factor","saturation","lightness","speed","fade","opacity"];let C=WQ(A,g),B,{$$slots:i={},$$scope:E}=A,{count:o=5e3}=A,{radius:t=50}=A,{depth:e=50}=A,{factor:a=6}=A,{saturation:s=1}=A,{lightness:n=.8}=A,{speed:D=1}=A,{fade:c=!0}=A,{opacity:h=1}=A;const r=new u,S=new an,l=O=>r.setFromSpherical(S.set(O,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI));let G,M,U;const k=_c();$C(Q,k,O=>I(6,B=O));let K=0;const{stop:q,start:y}=la(O=>{I(5,K+=O*D)},{autoStart:!1}),N=new AQ({uniforms:{time:{value:0},fade:{value:1},opacity:{value:1}},vertexShader:pY,fragmentShader:KY});function T(O){ln[O?"unshift":"push"](()=>{B=O,k.set(B)})}return Q.$$set=O=>{A=JB(JB({},A),Dt(O)),I(9,C=WQ(A,g)),"count"in O&&I(10,o=O.count),"radius"in O&&I(11,t=O.radius),"depth"in O&&I(12,e=O.depth),"factor"in O&&I(13,a=O.factor),"saturation"in O&&I(14,s=O.saturation),"lightness"in O&&I(15,n=O.lightness),"speed"in O&&I(16,D=O.speed),"fade"in O&&I(0,c=O.fade),"opacity"in O&&I(1,h=O.opacity),"$$scope"in O&&I(19,E=O.$$scope)},Q.$$.update=()=>{if(Q.$$.dirty&64512){const O=[],H=[],V=Array.from({length:o},()=>(.5+.5*Math.random())*a),_=new ZA;let j=t+e;const IA=e/o;for(let AA=0;AA<o;AA++){j-=IA*Math.random();const oA=l(j);O.push(oA.x,oA.y,oA.z),_.setHSL(AA/o,s,n),H.push(_.r,_.g,_.b)}I(2,G=new Float32Array(O)),I(3,M=new Float32Array(H)),I(4,U=new Float32Array(V))}Q.$$.dirty&65536&&(D!==0?y():q())},[c,h,G,M,U,K,B,k,N,C,o,t,e,a,s,n,D,i,T,E]}class LY extends sg{constructor(A){super(),ng(this,A,YY,JY,ag,{count:10,radius:11,depth:12,factor:13,saturation:14,lightness:15,speed:16,fade:0,opacity:1})}}const mY=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,HY=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,TY=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,bY=TY,xY=`
	${mY}
	${HY}
`;`${bY}${xY}${DI.tonemapping_fragment}${DI.colorspace_fragment}`;function _Y(Q){let A,I;return A=new wY({props:{enableDamping:!0,autoRotate:!0,rotateSpeed:.1,enablePan:!1,enableZoom:!1}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p:WB,i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function OY(Q){let A,I,g,C;return A=new LY({props:{speed:1}}),g=new Ag.PerspectiveCamera({props:{makeDefault:!0,"position.y":100,"position.x":100,"position.z":100,fov:100,$$slots:{default:[_Y]},$$scope:{ctx:Q}}}),g.$on("create",vY),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p(B,[i]){const E={};i&1&&(E.$$scope={dirty:i,ctx:B}),g.$set(E)},i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}const vY=({ref:Q})=>{Q.lookAt(0,0,0)};class ZY extends sg{constructor(A){super(),ng(this,A,null,OY,ag,{})}}function PY(Q){let A,I,g,C;return A=new Ag.MeshBasicMaterial({props:{color:"yellow"}}),g=new Ag.SphereGeometry({props:{args:[5]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p:WB,i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}function WY(Q){let A,I,g,C;return A=new NY({props:{glowColor:"yellow"}}),g=new Ag.SphereGeometry({props:{args:[9]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p:WB,i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}function VY(Q){let A,I,g,C;return A=new Ag.Mesh({props:{$$slots:{default:[PY]},$$scope:{ctx:Q}}}),g=new Ag.Mesh({props:{$$slots:{default:[WY]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p(B,i){const E={};i&2&&(E.$$scope={dirty:i,ctx:B}),A.$set(E);const o={};i&2&&(o.$$scope={dirty:i,ctx:B}),g.$set(o)},i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}function jY(Q){let A,I;return A=new Ag.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[VY]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function XY(Q,A,I){let{position:g={x:-3,y:2}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class Ua extends sg{constructor(A){super(),ng(this,A,XY,jY,ag,{position:0})}}function zY(Q){let A,I,g,C;return A=new Ag.MeshBasicMaterial({props:{color:"blue"}}),g=new Ag.SphereGeometry({props:{args:[5]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p:WB,i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}function $Y(Q){let A,I;return A=new Ag.Mesh({props:{$$slots:{default:[zY]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function AL(Q){let A,I;return A=new Ag.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[$Y]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function IL(Q,A,I){let{position:g={x:-3,y:2}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class gL extends sg{constructor(A){super(),ng(this,A,IL,AL,ag,{position:0})}}function CL(Q){let A,I,g,C,B,i;return A=new Ag.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4}}),A.$on("create",BL),g=new Ag.GridHelper({props:{args:[100]}}),B=new gL({}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p:WB,i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}const BL=({ref:Q})=>{Q.lookAt(0,-10,0)};function QL(Q,A,I){let{type:g="static"}=A;return Q.$$set=C=>{"type"in C&&I(0,g=C.type)},[g]}class iL extends sg{constructor(A){super(),ng(this,A,QL,CL,ag,{type:0})}}function EL(Q){let A,I,g,C,B,i;return A=new ka({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Ua({}),B=new Ma({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function oL(Q){let A,I;return A=new ya({props:{linearVelocity:[5,-5,0],$$slots:{default:[EL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function tL(Q){let A,I,g,C,B,i;return A=new ka({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Ua({}),B=new Ma({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function eL(Q){let A,I,g,C,B,i,E,o;return A=new Ag.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4}}),A.$on("create",aL),g=new Ag.GridHelper({props:{args:[100]}}),B=new Ag.Group({props:{position:[-50,0,0],$$slots:{default:[oL]},$$scope:{ctx:Q}}}),E=new ya({props:{linearVelocity:[0,5,0],$$slots:{default:[tL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment),i=tI(),KA(E.$$.fragment)},l(t){pA(A.$$.fragment,t),I=eI(t),pA(g.$$.fragment,t),C=eI(t),pA(B.$$.fragment,t),i=eI(t),pA(E.$$.fragment,t)},m(t,e){FA(A,t,e),mA(t,I,e),FA(g,t,e),mA(t,C,e),FA(B,t,e),mA(t,i,e),FA(E,t,e),o=!0},p(t,[e]){const a={};e&5&&(a.$$scope={dirty:e,ctx:t}),B.$set(a);const s={};e&5&&(s.$$scope={dirty:e,ctx:t}),E.$set(s)},i(t){o||(EA(A.$$.fragment,t),EA(g.$$.fragment,t),EA(B.$$.fragment,t),EA(E.$$.fragment,t),o=!0)},o(t){eA(A.$$.fragment,t),eA(g.$$.fragment,t),eA(B.$$.fragment,t),eA(E.$$.fragment,t),o=!1},d(t){t&&(fA(I),fA(C),fA(i)),dA(A,t),dA(g,t),dA(B,t),dA(E,t)}}}const aL=({ref:Q})=>{Q.lookAt(0,-10,0)};function sL(Q,A,I){let{type:g="static"}=A;const C={static:{type:"static",strength:3,range:100,gravitationalConstant:void 0},linear:{type:"linear",strength:1,range:100,gravitationalConstant:void 0},newtonian:{type:"newtonian",strength:10,range:100,gravitationalConstant:10}};return Q.$$set=B=>{"type"in B&&I(0,g=B.type)},[g,C]}class nL extends sg{constructor(A){super(),ng(this,A,sL,eL,ag,{type:0})}}function rL(Q){let A,I,g,C,B,i;return A=new ka({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Ua({}),B=new Ma({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function DL(Q){let A,I;return A=new ya({props:{linearVelocity:[5,-5,0],$$slots:{default:[rL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function hL(Q){let A,I,g,C,B,i;return A=new ka({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Ua({}),B=new Ma({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function cL(Q){let A,I,g,C,B,i;return A=new ka({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Ua({}),B=new Ma({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment)},l(E){pA(A.$$.fragment,E),I=eI(E),pA(g.$$.fragment,E),C=eI(E),pA(B.$$.fragment,E)},m(E,o){FA(A,E,o),mA(E,I,o),FA(g,E,o),mA(E,C,o),FA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(EA(A.$$.fragment,E),EA(g.$$.fragment,E),EA(B.$$.fragment,E),i=!0)},o(E){eA(A.$$.fragment,E),eA(g.$$.fragment,E),eA(B.$$.fragment,E),i=!1},d(E){E&&(fA(I),fA(C)),dA(A,E),dA(g,E),dA(B,E)}}}function lL(Q){let A,I;return A=new ya({props:{linearVelocity:[5,-5,0],$$slots:{default:[cL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function wL(Q){let A,I,g,C,B,i,E,o,t,e;return A=new Ag.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4}}),A.$on("create",SL),g=new Ag.GridHelper({props:{args:[100]}}),B=new Ag.Group({props:{position:[-50,0,0],$$slots:{default:[DL]},$$scope:{ctx:Q}}}),E=new ya({props:{linearVelocity:[0,50,0],$$slots:{default:[hL]},$$scope:{ctx:Q}}}),t=new Ag.Group({props:{position:[50,0,0],$$slots:{default:[lL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment),C=tI(),KA(B.$$.fragment),i=tI(),KA(E.$$.fragment),o=tI(),KA(t.$$.fragment)},l(a){pA(A.$$.fragment,a),I=eI(a),pA(g.$$.fragment,a),C=eI(a),pA(B.$$.fragment,a),i=eI(a),pA(E.$$.fragment,a),o=eI(a),pA(t.$$.fragment,a)},m(a,s){FA(A,a,s),mA(a,I,s),FA(g,a,s),mA(a,C,s),FA(B,a,s),mA(a,i,s),FA(E,a,s),mA(a,o,s),FA(t,a,s),e=!0},p(a,[s]){const n={};s&5&&(n.$$scope={dirty:s,ctx:a}),B.$set(n);const D={};s&5&&(D.$$scope={dirty:s,ctx:a}),E.$set(D);const c={};s&5&&(c.$$scope={dirty:s,ctx:a}),t.$set(c)},i(a){e||(EA(A.$$.fragment,a),EA(g.$$.fragment,a),EA(B.$$.fragment,a),EA(E.$$.fragment,a),EA(t.$$.fragment,a),e=!0)},o(a){eA(A.$$.fragment,a),eA(g.$$.fragment,a),eA(B.$$.fragment,a),eA(E.$$.fragment,a),eA(t.$$.fragment,a),e=!1},d(a){a&&(fA(I),fA(C),fA(i),fA(o)),dA(A,a),dA(g,a),dA(B,a),dA(E,a),dA(t,a)}}}const SL=({ref:Q})=>{Q.lookAt(0,-10,0)};function GL(Q,A,I){let{type:g="static"}=A;const C={static:{type:"static",strength:3,range:100,gravitationalConstant:void 0},linear:{type:"linear",strength:1,range:100,gravitationalConstant:void 0},newtonian:{type:"newtonian",strength:10,range:100,gravitationalConstant:10}};return Q.$$set=B=>{"type"in B&&I(0,g=B.type)},[g,C]}class yL extends sg{constructor(A){super(),ng(this,A,GL,wL,ag,{type:0})}}function $S(Q){let A,I;return A=new ZY({}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function AG(Q){let A,I;return A=new iL({props:{type:"static"}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function IG(Q){let A,I;return A=new nL({props:{type:"static"}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function gG(Q){let A,I;return A=new yL({props:{type:"static"}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function kL(Q){let A,I,g,C,B,i=Q[3]&&$S(),E=Q[2]&&AG(),o=Q[1]&&IG(),t=Q[0]&&gG();return{c(){i&&i.c(),A=tI(),E&&E.c(),I=tI(),o&&o.c(),g=tI(),t&&t.c(),C=EE()},l(e){i&&i.l(e),A=eI(e),E&&E.l(e),I=eI(e),o&&o.l(e),g=eI(e),t&&t.l(e),C=EE()},m(e,a){i&&i.m(e,a),mA(e,A,a),E&&E.m(e,a),mA(e,I,a),o&&o.m(e,a),mA(e,g,a),t&&t.m(e,a),mA(e,C,a),B=!0},p(e,[a]){e[3]?i?a&8&&EA(i,1):(i=$S(),i.c(),EA(i,1),i.m(A.parentNode,A)):i&&(bQ(),eA(i,1,1,()=>{i=null}),xQ()),e[2]?E?a&4&&EA(E,1):(E=AG(),E.c(),EA(E,1),E.m(I.parentNode,I)):E&&(bQ(),eA(E,1,1,()=>{E=null}),xQ()),e[1]?o?a&2&&EA(o,1):(o=IG(),o.c(),EA(o,1),o.m(g.parentNode,g)):o&&(bQ(),eA(o,1,1,()=>{o=null}),xQ()),e[0]?t?a&1&&EA(t,1):(t=gG(),t.c(),EA(t,1),t.m(C.parentNode,C)):t&&(bQ(),eA(t,1,1,()=>{t=null}),xQ())},i(e){B||(EA(i),EA(E),EA(o),EA(t),B=!0)},o(e){eA(i),eA(E),eA(o),eA(t),B=!1},d(e){e&&(fA(A),fA(I),fA(g),fA(C)),i&&i.d(e),E&&E.d(e),o&&o.d(e),t&&t.d(e)}}}function ML(Q,A,I){let g,C,B,i;$C(Q,Pt,t=>I(0,g=t)),$C(Q,Wt,t=>I(1,C=t)),$C(Q,Vt,t=>I(2,B=t)),$C(Q,yr,t=>I(3,i=t));let E=!1;pt(()=>{I(4,E=!0)});function o(){Xi.set("#title",{transformPerspective:400}),Xi.timeline({scrollTrigger:{trigger:"#title-spacer",start:"top top",end:"+=2000",scrub:1,onLeave:()=>{rB(yr,i=!1,i)},onLeaveBack:()=>{rB(yr,i=!0,i)}}}).add("step-1").to("#title",{autoAlpha:0},"step-1"),Xi.to("#section-1",{scrollTrigger:{trigger:"#section-1",start:"top center",end:"bottom center",onEnter:()=>{rB(Vt,B=!0,B)},onLeave:()=>{rB(Vt,B=!1,B)},onEnterBack:()=>{rB(Vt,B=!0,B)},onLeaveBack:()=>{rB(Vt,B=!1,B)}}}),Xi.to("#section-2",{scrollTrigger:{trigger:"#section-2",start:"top center",end:"bottom center",onEnter:()=>{rB(Wt,C=!0,C)},onLeave:()=>{rB(Wt,C=!1,C)},onEnterBack:()=>{rB(Wt,C=!0,C)},onLeaveBack:()=>{rB(Wt,C=!1,C)}}}),Xi.to("#section-3",{scrollTrigger:{trigger:"#section-3",start:"top center",end:"bottom center",onEnter:()=>{rB(Pt,g=!0,g)},onLeave:()=>{rB(Pt,g=!1,g)},onEnterBack:()=>{rB(Pt,g=!0,g)},onLeaveBack:()=>{rB(Pt,g=!1,g)}}})}return Q.$$.update=()=>{Q.$$.dirty&16&&E&&o()},[g,C,B,i,E]}class UL extends sg{constructor(A){super(),ng(this,A,ML,kL,ag,{})}}function NL(Q){let A,I;return A=new UL({}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function KL(Q){let A,I;return A=new Tq({props:{gravity:[0,0,0],$$slots:{default:[NL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}function pL(Q){let A,I;return A=new mu({props:{$$slots:{default:[KL]},$$scope:{ctx:Q}}}),{c(){KA(A.$$.fragment)},l(g){pA(A.$$.fragment,g)},m(g,C){FA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){eA(A.$$.fragment,g),I=!1},d(g){dA(A,g)}}}class FL extends sg{constructor(A){super(),ng(this,A,null,pL,ag,{})}}function dL(Q){let A,I,g,C,B,i,E,o,t;return A=new ZU({}),B=new FL({}),o=new rN({}),{c(){KA(A.$$.fragment),I=tI(),g=li("article"),C=li("div"),KA(B.$$.fragment),i=tI(),E=li("div"),KA(o.$$.fragment),this.h()},l(e){pA(A.$$.fragment,e),I=eI(e),g=wi(e,"ARTICLE",{class:!0});var a=gE(g);C=wi(a,"DIV",{id:!0,class:!0});var s=gE(C);pA(B.$$.fragment,s),s.forEach(fA),i=eI(a),E=wi(a,"DIV",{id:!0,class:!0});var n=gE(E);pA(o.$$.fragment,n),n.forEach(fA),a.forEach(fA),this.h()},h(){FC(C,"id","canvas-wrapper"),FC(C,"class","sticky top-0 min-w-0 h-screen"),FC(E,"id","article"),FC(E,"class","text-5xl z-10 flex flex-col items-center w-full h-full"),FC(g,"class","relative flex-col hidden lg:flex")},m(e,a){FA(A,e,a),mA(e,I,a),mA(e,g,a),Gr(g,C),FA(B,C,null),Gr(g,i),Gr(g,E),FA(o,E,null),t=!0},p:WB,i(e){t||(EA(A.$$.fragment,e),EA(B.$$.fragment,e),EA(o.$$.fragment,e),t=!0)},o(e){eA(A.$$.fragment,e),eA(B.$$.fragment,e),eA(o.$$.fragment,e),t=!1},d(e){e&&(fA(I),fA(g)),dA(A,e),dA(B),dA(o)}}}function RL(Q,A,I){let g;return $C(Q,pM,C=>I(0,g=C)),Q.$$.update=()=>{Q.$$.dirty&1&&g&&iG.ScrollTrigger.refresh()},[g]}class JL extends sg{constructor(A){super(),ng(this,A,RL,dL,ag,{})}}function fL(Q){let A,I,g,C;return A=new FM({}),g=new JL({}),{c(){KA(A.$$.fragment),I=tI(),KA(g.$$.fragment)},l(B){pA(A.$$.fragment,B),I=eI(B),pA(g.$$.fragment,B)},m(B,i){FA(A,B,i),mA(B,I,i),FA(g,B,i),C=!0},p:WB,i(B){C||(EA(A.$$.fragment,B),EA(g.$$.fragment,B),C=!0)},o(B){eA(A.$$.fragment,B),eA(g.$$.fragment,B),C=!1},d(B){B&&fA(I),dA(A,B),dA(g,B)}}}class xL extends sg{constructor(A){super(),ng(this,A,null,fL,ag,{})}}export{xL as component};