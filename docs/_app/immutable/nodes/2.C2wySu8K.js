var l0=Object.defineProperty;var w0=(Q,A,I)=>A in Q?l0(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var Hg=(Q,A,I)=>(w0(Q,typeof A!="symbol"?A+"":A,I),I);import{s as rg,n as NB,e as zC,u as $C,g as AB,f as IB,z as ZB,A as mC,B as VB,c as MQ,C as jS,t as an,D as S0,o as Kt,d as ph,E as sn,F as QE,G as UQ,H as Se,h as G0}from"../chunks/scheduler.BGcSciwg.js";import{S as Dg,i as hg,e as Gi,c as yi,y as y0,o as FC,f as VA,d as TA,a as iE,n as oA,l as hA,h as GI,u as FA,k as yI,v as dA,g as Ei,w as RA,x as JA,t as wB,b as SB,q as Di,m as hi,j as EE}from"../chunks/index.ByIL9b6Q.js";import{l as k0}from"../chunks/index.BBrc7cW7.js";import{d as nn,w as RB,r as XS}from"../chunks/index.yBkgiAJL.js";function Fh(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const o in i)o in E||(g[o]=1);for(const o in E)C[o]||(I[o]=E[o],C[o]=1);Q[B]=E}else for(const o in i)C[o]=1}for(const i in g)i in I||(I[i]=void 0);return I}function dh(Q){return typeof Q=="object"&&Q!==null?Q:{}}class M0 extends Dg{constructor(A){super(),hg(this,A,null,null,rg,{})}}var zS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},aD={exports:{}};(function(Q,A){(function(I,g){g(A)})(zS,function(I){function g(z,F){for(var b=0;b<F.length;b++){var d=F[b];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(z,d.key,d)}}function C(z,F,b){return F&&g(z.prototype,F),b&&g(z,b),z}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B,i,E,o,t,e,a,s,n,D,c,r,h,S=function(){return B||typeof window<"u"&&(B=window.gsap)&&B.registerPlugin&&B},l=1,G=[],M=[],U=[],k=Date.now,K=function(F,b){return b},q=function(){var F=n.core,b=F.bridge||{},d=F._scrollers,f=F._proxies;d.push.apply(d,M),f.push.apply(f,U),M=d,U=f,K=function(EA,gA){return b[EA](gA)}},y=function(F,b){return~U.indexOf(F)&&U[U.indexOf(F)+1][b]},N=function(F){return!!~D.indexOf(F)},T=function(F,b,d,f,Z){return F.addEventListener(b,d,{passive:f!==!1,capture:!!Z})},v=function(F,b,d,f){return F.removeEventListener(b,d,!!f)},H="scrollLeft",V="scrollTop",_=function(){return c&&c.isPressed||M.cache++},j=function(F,b){var d=function f(Z){if(Z||Z===0){l&&(E.history.scrollRestoration="manual");var EA=c&&c.isPressed;Z=f.v=Math.round(Z)||(c&&c.iOS?1:0),F(Z),f.cacheID=M.cache,EA&&K("ss",Z)}else(b||M.cache!==f.cacheID||K("ref"))&&(f.cacheID=M.cache,f.v=F());return f.v+f.offset};return d.offset=0,F&&d},AA={s:H,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:j(function(z){return arguments.length?E.scrollTo(z,IA.sc()):E.pageXOffset||o[H]||t[H]||e[H]||0})},IA={s:V,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:AA,sc:j(function(z){return arguments.length?E.scrollTo(AA.sc(),z):E.pageYOffset||o[V]||t[V]||e[V]||0})},tA=function(F,b){return(b&&b._ctx&&b._ctx.selector||B.utils.toArray)(F)[0]||(typeof F=="string"&&B.config().nullTargetWarn!==!1?console.warn("Element not found:",F):null)},aA=function(F,b){var d=b.s,f=b.sc;N(F)&&(F=o.scrollingElement||t);var Z=M.indexOf(F),EA=f===IA.sc?1:2;!~Z&&(Z=M.push(F)-1),M[Z+EA]||T(F,"scroll",_);var gA=M[Z+EA],_A=gA||(M[Z+EA]=j(y(F,d),!0)||(N(F)?f:j(function(KI){return arguments.length?F[d]=KI:F[d]})));return _A.target=F,gA||(_A.smooth=B.getProperty(F,"scrollBehavior")==="smooth"),_A},pA=function(F,b,d){var f=F,Z=F,EA=k(),gA=EA,_A=b||50,KI=Math.max(500,_A*3),Eg=function(aI,Lg){var lg=k();Lg||lg-EA>_A?(Z=f,f=aI,gA=EA,EA=lg):d?f+=aI:f=Z+(aI-Z)/(lg-gA)*(EA-gA)},XI=function(){Z=f=d?0:f,gA=EA=0},tI=function(aI){var Lg=gA,lg=Z,sC=k();return(aI||aI===0)&&aI!==f&&Eg(aI),EA===gA||sC-gA>KI?0:(f+(d?lg:-lg))/((d?sC:EA)-Lg)*1e3};return{update:Eg,reset:XI,getVelocity:tI}},CI=function(F,b){return b&&!F._gsapAllow&&F.preventDefault(),F.changedTouches?F.changedTouches[0]:F},QA=function(F){var b=Math.max.apply(Math,F),d=Math.min.apply(Math,F);return Math.abs(b)>=Math.abs(d)?b:d},GA=function(){n=B.core.globals().ScrollTrigger,n&&n.core&&q()},vA=function(F){return B=F||S(),!i&&B&&typeof document<"u"&&document.body&&(E=window,o=document,t=o.documentElement,e=o.body,D=[E,o,t,e],B.utils.clamp,h=B.core.context||function(){},s="onpointerenter"in e?"pointer":"mouse",a=uA.isTouch=E.matchMedia&&E.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in E||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,r=uA.eventTypes=("ontouchstart"in t?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in t?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l=0},500),GA(),i=1),i};AA.op=IA,M.cache=0;var uA=function(){function z(b){this.init(b)}var F=z.prototype;return F.init=function(d){i||vA(B)||console.warn("Please gsap.registerPlugin(Observer)"),n||GA();var f=d.tolerance,Z=d.dragMinimum,EA=d.type,gA=d.target,_A=d.lineHeight,KI=d.debounce,Eg=d.preventDefault,XI=d.onStop,tI=d.onStopDelay,kA=d.ignore,aI=d.wheelSpeed,Lg=d.event,lg=d.onDragStart,sC=d.onDragEnd,Fg=d.onDrag,JC=d.onPress,qI=d.onRelease,zB=d.onRight,Ug=d.onLeft,pI=d.onUp,iB=d.onDown,yB=d.onChangeX,oI=d.onChangeY,fC=d.onChange,MI=d.onToggleX,jQ=d.onToggleY,nC=d.onHover,EB=d.onHoverEnd,oB=d.onMove,eg=d.ignoreCheck,AC=d.isNormalizer,IC=d.onGestureStart,$=d.onGestureEnd,rC=d.onWheel,UE=d.onEnable,fi=d.onDisable,$B=d.onClick,XQ=d.scrollSpeed,tB=d.capture,gC=d.allowClicks,eB=d.lockAxis,TC=d.onLockAxis;this.target=gA=tA(gA)||t,this.vars=d,kA&&(kA=B.utils.toArray(kA)),f=f||1e-9,Z=Z||0,aI=aI||1,XQ=XQ||1,EA=EA||"wheel,touch,pointer",KI=KI!==!1,_A||(_A=parseFloat(E.getComputedStyle(e).lineHeight)||22);var ui,aB,aQ,$I,Zg,kB,qB,eA=this,YB=0,zQ=0,qi=d.passive||!Eg,CC=aA(gA,AA),Yi=aA(gA,IA),NE=CC(),Jo=Yi(),kC=~EA.indexOf("touch")&&!~EA.indexOf("pointer")&&r[0]==="pointerdown",Li=N(gA),Pg=gA.ownerDocument||o,sQ=[0,0,0],AQ=[0,0,0],$Q=0,bt=function(){return $Q=k()},BC=function(hI,Ag){return(eA.event=hI)&&kA&&~kA.indexOf(hI.target)||Ag&&kC&&hI.pointerType!=="touch"||eg&&eg(hI,Ag)},La=function(){eA._vx.reset(),eA._vy.reset(),aB.pause(),XI&&XI(eA)},mi=function(){var hI=eA.deltaX=QA(sQ),Ag=eA.deltaY=QA(AQ),bA=Math.abs(hI)>=f,fI=Math.abs(Ag)>=f;fC&&(bA||fI)&&fC(eA,hI,Ag,sQ,AQ),bA&&(zB&&eA.deltaX>0&&zB(eA),Ug&&eA.deltaX<0&&Ug(eA),yB&&yB(eA),MI&&eA.deltaX<0!=YB<0&&MI(eA),YB=eA.deltaX,sQ[0]=sQ[1]=sQ[2]=0),fI&&(iB&&eA.deltaY>0&&iB(eA),pI&&eA.deltaY<0&&pI(eA),oI&&oI(eA),jQ&&eA.deltaY<0!=zQ<0&&jQ(eA),zQ=eA.deltaY,AQ[0]=AQ[1]=AQ[2]=0),($I||aQ)&&(oB&&oB(eA),aQ&&(Fg(eA),aQ=!1),$I=!1),kB&&!(kB=!1)&&TC&&TC(eA),Zg&&(rC(eA),Zg=!1),ui=0},fo=function(hI,Ag,bA){sQ[bA]+=hI,AQ[bA]+=Ag,eA._vx.update(hI),eA._vy.update(Ag),KI?ui||(ui=requestAnimationFrame(mi)):mi()},uo=function(hI,Ag){eB&&!qB&&(eA.axis=qB=Math.abs(hI)>Math.abs(Ag)?"x":"y",kB=!0),qB!=="y"&&(sQ[2]+=hI,eA._vx.update(hI,!0)),qB!=="x"&&(AQ[2]+=Ag,eA._vy.update(Ag,!0)),KI?ui||(ui=requestAnimationFrame(mi)):mi()},Hi=function(hI){if(!BC(hI,1)){hI=CI(hI,Eg);var Ag=hI.clientX,bA=hI.clientY,fI=Ag-eA.x,sI=bA-eA.y,dI=eA.isDragging;eA.x=Ag,eA.y=bA,(dI||Math.abs(eA.startX-Ag)>=Z||Math.abs(eA.startY-bA)>=Z)&&(Fg&&(aQ=!0),dI||(eA.isDragging=!0),uo(fI,sI),dI||lg&&lg(eA))}},KE=eA.onPress=function(JI){BC(JI,1)||JI&&JI.button||(eA.axis=qB=null,aB.pause(),eA.isPressed=!0,JI=CI(JI),YB=zQ=0,eA.startX=eA.x=JI.clientX,eA.startY=eA.y=JI.clientY,eA._vx.reset(),eA._vy.reset(),T(AC?gA:Pg,r[1],Hi,qi,!0),eA.deltaX=eA.deltaY=0,JC&&JC(eA))},OI=eA.onRelease=function(JI){if(!BC(JI,1)){v(AC?gA:Pg,r[1],Hi,!0);var hI=!isNaN(eA.y-eA.startY),Ag=eA.isDragging,bA=Ag&&(Math.abs(eA.x-eA.startX)>3||Math.abs(eA.y-eA.startY)>3),fI=CI(JI);!bA&&hI&&(eA._vx.reset(),eA._vy.reset(),Eg&&gC&&B.delayedCall(.08,function(){if(k()-$Q>300&&!JI.defaultPrevented){if(JI.target.click)JI.target.click();else if(Pg.createEvent){var sI=Pg.createEvent("MouseEvents");sI.initMouseEvent("click",!0,!0,E,1,fI.screenX,fI.screenY,fI.clientX,fI.clientY,!1,!1,!1,!1,0,null),JI.target.dispatchEvent(sI)}}})),eA.isDragging=eA.isGesturing=eA.isPressed=!1,XI&&Ag&&!AC&&aB.restart(!0),sC&&Ag&&sC(eA),qI&&qI(eA,bA)}},pE=function(hI){return hI.touches&&hI.touches.length>1&&(eA.isGesturing=!0)&&IC(hI,eA.isDragging)},nQ=function(){return(eA.isGesturing=!1)||$(eA)},rQ=function(hI){if(!BC(hI)){var Ag=CC(),bA=Yi();fo((Ag-NE)*XQ,(bA-Jo)*XQ,1),NE=Ag,Jo=bA,XI&&aB.restart(!0)}},DQ=function(hI){if(!BC(hI)){hI=CI(hI,Eg),rC&&(Zg=!0);var Ag=(hI.deltaMode===1?_A:hI.deltaMode===2?E.innerHeight:1)*aI;fo(hI.deltaX*Ag,hI.deltaY*Ag,0),XI&&!AC&&aB.restart(!0)}},FE=function(hI){if(!BC(hI)){var Ag=hI.clientX,bA=hI.clientY,fI=Ag-eA.x,sI=bA-eA.y;eA.x=Ag,eA.y=bA,$I=!0,XI&&aB.restart(!0),(fI||sI)&&uo(fI,sI)}},qo=function(hI){eA.event=hI,nC(eA)},Ai=function(hI){eA.event=hI,EB(eA)},xt=function(hI){return BC(hI)||CI(hI,Eg)&&$B(eA)};aB=eA._dc=B.delayedCall(tI||.25,La).pause(),eA.deltaX=eA.deltaY=0,eA._vx=pA(0,50,!0),eA._vy=pA(0,50,!0),eA.scrollX=CC,eA.scrollY=Yi,eA.isDragging=eA.isGesturing=eA.isPressed=!1,h(this),eA.enable=function(JI){return eA.isEnabled||(T(Li?Pg:gA,"scroll",_),EA.indexOf("scroll")>=0&&T(Li?Pg:gA,"scroll",rQ,qi,tB),EA.indexOf("wheel")>=0&&T(gA,"wheel",DQ,qi,tB),(EA.indexOf("touch")>=0&&a||EA.indexOf("pointer")>=0)&&(T(gA,r[0],KE,qi,tB),T(Pg,r[2],OI),T(Pg,r[3],OI),gC&&T(gA,"click",bt,!0,!0),$B&&T(gA,"click",xt),IC&&T(Pg,"gesturestart",pE),$&&T(Pg,"gestureend",nQ),nC&&T(gA,s+"enter",qo),EB&&T(gA,s+"leave",Ai),oB&&T(gA,s+"move",FE)),eA.isEnabled=!0,JI&&JI.type&&KE(JI),UE&&UE(eA)),eA},eA.disable=function(){eA.isEnabled&&(G.filter(function(JI){return JI!==eA&&N(JI.target)}).length||v(Li?Pg:gA,"scroll",_),eA.isPressed&&(eA._vx.reset(),eA._vy.reset(),v(AC?gA:Pg,r[1],Hi,!0)),v(Li?Pg:gA,"scroll",rQ,tB),v(gA,"wheel",DQ,tB),v(gA,r[0],KE,tB),v(Pg,r[2],OI),v(Pg,r[3],OI),v(gA,"click",bt,!0),v(gA,"click",xt),v(Pg,"gesturestart",pE),v(Pg,"gestureend",nQ),v(gA,s+"enter",qo),v(gA,s+"leave",Ai),v(gA,s+"move",FE),eA.isEnabled=eA.isPressed=eA.isDragging=!1,fi&&fi(eA))},eA.kill=eA.revert=function(){eA.disable();var JI=G.indexOf(eA);JI>=0&&G.splice(JI,1),c===eA&&(c=0)},G.push(eA),AC&&N(gA)&&(c=eA),eA.enable(Lg)},C(z,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),z}();uA.version="3.12.5",uA.create=function(z){return new uA(z)},uA.register=vA,uA.getAll=function(){return G.slice()},uA.getById=function(z){return G.filter(function(F){return F.vars.id===z})[0]},S()&&B.registerPlugin(uA);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sA,WA,qA,LA,L,SA,nA,NA,rA,AI,mA,J,p,X,MA,cA,yA,jA,fA,ZA,EI,SI,lA,TI,RI,lI,zA,xA,NI,m,KA,HA,iI,Y,UA=1,wA=Date.now,$A=wA(),XA=0,bI=0,HI=function(F,b,d){var f=R(F)&&(F.substr(0,6)==="clamp("||F.indexOf("max")>-1);return d["_"+b+"Clamp"]=f,f?F.substr(6,F.length-7):F},gg=function(F,b){return b&&(!R(F)||F.substr(0,6)!=="clamp(")?"clamp("+F+")":F},tC=function z(){return bI&&requestAnimationFrame(z)},ZI=function(){return X=1},kg=function(){return X=0},cg=function(F){return F},Ri=function(F){return Math.round(F*1e5)/1e5||0},Ga=function(){return typeof window<"u"},wE=function(){return sA||Ga()&&(sA=window.gsap)&&sA.registerPlugin&&sA},dQ=function(F){return!!~nA.indexOf(F)},SE=function(F){return(F==="Height"?KA:qA["inner"+F])||L["client"+F]||SA["client"+F]},ut=function(F){return y(F,"getBoundingClientRect")||(dQ(F)?function(){return ua.width=qA.innerWidth,ua.height=KA,ua}:function(){return RC(F)})},ya=function(F,b,d){var f=d.d,Z=d.d2,EA=d.a;return(EA=y(F,"getBoundingClientRect"))?function(){return EA()[f]}:function(){return(b?SE(Z):F["client"+Z])||0}},Br=function(F,b){return!b||~U.indexOf(F)?ut(F):function(){return ua}},XB=function(F,b){var d=b.s,f=b.d2,Z=b.d,EA=b.a;return Math.max(0,(d="scroll"+f)&&(EA=y(F,d))?EA()-ut(F)()[Z]:dQ(F)?(L[d]||SA[d])-SE(f):F[d]-F["offset"+f])},po=function(F,b){for(var d=0;d<fA.length;d+=3)(!b||~b.indexOf(fA[d+1]))&&F(fA[d],fA[d+1],fA[d+2])},R=function(F){return typeof F=="string"},W=function(F){return typeof F=="function"},BA=function(F){return typeof F=="number"},iA=function(F){return typeof F=="object"},CA=function(F,b,d){return F&&F.progress(b?0:1)&&d&&F.pause()},OA=function(F,b){if(F.enabled){var d=F._ctx?F._ctx.add(function(){return b(F)}):b(F);d&&d.totalTime&&(F.callbackAnimation=d)}},II=Math.abs,eI="left",wI="top",FI="right",kI="bottom",DI="width",Bg="height",eC="Right",Mg="Left",CB="Top",Qg="Bottom",QI="padding",HC="margin",ig="Width",eQ="Height",Yg="px",SC=function(F){return qA.getComputedStyle(F)},qt=function(F){var b=SC(F).position;F.style.position=b==="absolute"||b==="fixed"?b:"relative"},aC=function(F,b){for(var d in b)d in F||(F[d]=b[d]);return F},RC=function(F,b){var d=b&&SC(F)[MA]!=="matrix(1, 0, 0, 1, 0, 0)"&&sA.to(F,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),f=F.getBoundingClientRect();return d&&d.progress(0).kill(),f},Ji=function(F,b){var d=b.d2;return F["offset"+d]||F["client"+d]||0},BB=function(F){var b=[],d=F.labels,f=F.duration(),Z;for(Z in d)b.push(d[Z]/f);return b},Yt=function(F){return function(b){return sA.utils.snap(BB(F),b)}},Lt=function(F){var b=sA.utils.snap(F),d=Array.isArray(F)&&F.slice(0).sort(function(f,Z){return f-Z});return d?function(f,Z,EA){EA===void 0&&(EA=.001);var gA;if(!Z)return b(f);if(Z>0){for(f-=EA,gA=0;gA<d.length;gA++)if(d[gA]>=f)return d[gA];return d[gA-1]}else for(gA=d.length,f+=EA;gA--;)if(d[gA]<=f)return d[gA];return d[0]}:function(f,Z,EA){EA===void 0&&(EA=.001);var gA=b(f);return!Z||Math.abs(gA-f)<EA||gA-f<0==Z<0?gA:b(Z<0?f-F:f+F)}},ka=function(F){return function(b,d){return Lt(BB(F))(b,d.direction)}},Ma=function(F,b,d,f){return d.split(",").forEach(function(Z){return F(b,Z,f)})},GC=function(F,b,d,f,Z){return F.addEventListener(b,d,{passive:!f,capture:!!Z})},yC=function(F,b,d,f){return F.removeEventListener(b,d,!!f)},Ua=function(F,b,d){d=d&&d.wheelHandler,d&&(F(b,"wheel",d),F(b,"touchmove",d))},El={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Na={toggleActions:"play",anticipatePin:0},Ka={top:0,left:0,center:.5,bottom:1,right:1},pa=function(F,b){if(R(F)){var d=F.indexOf("="),f=~d?+(F.charAt(d-1)+1)*parseFloat(F.substr(d+1)):0;~d&&(F.indexOf("%")>d&&(f*=b/100),F=F.substr(0,d-1)),F=f+(F in Ka?Ka[F]*b:~F.indexOf("%")?parseFloat(F)*b/100:parseFloat(F)||0)}return F},Fa=function(F,b,d,f,Z,EA,gA,_A){var KI=Z.startColor,Eg=Z.endColor,XI=Z.fontSize,tI=Z.indent,kA=Z.fontWeight,aI=LA.createElement("div"),Lg=dQ(d)||y(d,"pinType")==="fixed",lg=F.indexOf("scroller")!==-1,sC=Lg?SA:d,Fg=F.indexOf("start")!==-1,JC=Fg?KI:Eg,qI="border-color:"+JC+";font-size:"+XI+";color:"+JC+";font-weight:"+kA+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return qI+="position:"+((lg||_A)&&Lg?"fixed;":"absolute;"),(lg||_A||!Lg)&&(qI+=(f===IA?FI:kI)+":"+(EA+parseFloat(tI))+"px;"),gA&&(qI+="box-sizing:border-box;text-align:left;width:"+gA.offsetWidth+"px;"),aI._isStart=Fg,aI.setAttribute("class","gsap-marker-"+F+(b?" marker-"+b:"")),aI.style.cssText=qI,aI.innerText=b||b===0?F+"-"+b:F,sC.children[0]?sC.insertBefore(aI,sC.children[0]):sC.appendChild(aI),aI._offset=aI["offset"+f.op.d2],da(aI,0,f,Fg),aI},da=function(F,b,d,f){var Z={display:"block"},EA=d[f?"os2":"p2"],gA=d[f?"p2":"os2"];F._isFlipped=f,Z[d.a+"Percent"]=f?-100:0,Z[d.a]=f?"1px":0,Z["border"+EA+ig]=1,Z["border"+gA+ig]=0,Z[d.p]=b+"px",sA.set(F,Z)},xI=[],Qr={},mt,ol=function(){return wA()-XA>34&&(mt||(mt=requestAnimationFrame(VQ)))},Fo=function(){(!lA||!lA.isPressed||lA.startX>SA.clientWidth)&&(M.cache++,lA?mt||(mt=requestAnimationFrame(VQ)):VQ(),XA||yE("scrollStart"),XA=wA())},ir=function(){lI=qA.innerWidth,RI=qA.innerHeight},Ht=function(){M.cache++,!p&&!SI&&!LA.fullscreenElement&&!LA.webkitFullscreenElement&&(!TI||lI!==qA.innerWidth||Math.abs(qA.innerHeight-RI)>qA.innerHeight*.25)&&NA.restart(!0)},GE={},t0=[],tl=function z(){return yC(_I,"scrollEnd",z)||ME(!0)},yE=function(F){return GE[F]&&GE[F].map(function(b){return b()})||t0},uB=[],el=function(F){for(var b=0;b<uB.length;b+=5)(!F||uB[b+4]&&uB[b+4].query===F)&&(uB[b].style.cssText=uB[b+1],uB[b].getBBox&&uB[b].setAttribute("transform",uB[b+2]||""),uB[b+3].uncache=1)},Er=function(F,b){var d;for(cA=0;cA<xI.length;cA++)d=xI[cA],d&&(!b||d._ctx===b)&&(F?d.kill(1):d.revert(!0,!0));HA=!0,b&&el(b),b||yE("revert")},al=function(F,b){M.cache++,(b||!QB)&&M.forEach(function(d){return W(d)&&d.cacheID++&&(d.rec=0)}),R(F)&&(qA.history.scrollRestoration=NI=F)},QB,kE=0,sl,e0=function(){if(sl!==kE){var F=sl=kE;requestAnimationFrame(function(){return F===kE&&ME(!0)})}},nl=function(){SA.appendChild(m),KA=!lA&&m.offsetHeight||qA.innerHeight,SA.removeChild(m)},rl=function(F){return rA(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(b){return b.style.display=F?"none":"block"})},ME=function(F,b){if(XA&&!F&&!HA){GC(_I,"scrollEnd",tl);return}nl(),QB=_I.isRefreshing=!0,M.forEach(function(f){return W(f)&&++f.cacheID&&(f.rec=f())});var d=yE("refreshInit");ZA&&_I.sort(),b||Er(),M.forEach(function(f){W(f)&&(f.smooth&&(f.target.style.scrollBehavior="auto"),f(0))}),xI.slice(0).forEach(function(f){return f.refresh()}),HA=!1,xI.forEach(function(f){if(f._subPinOffset&&f.pin){var Z=f.vars.horizontal?"offsetWidth":"offsetHeight",EA=f.pin[Z];f.revert(!0,1),f.adjustPinSpacing(f.pin[Z]-EA),f.refresh()}}),iI=1,rl(!0),xI.forEach(function(f){var Z=XB(f.scroller,f._dir),EA=f.vars.end==="max"||f._endClamp&&f.end>Z,gA=f._startClamp&&f.start>=Z;(EA||gA)&&f.setPositions(gA?Z-1:f.start,EA?Math.max(gA?Z:f.start+1,Z):f.end,!0)}),rl(!1),iI=0,d.forEach(function(f){return f&&f.render&&f.render(-1)}),M.forEach(function(f){W(f)&&(f.smooth&&requestAnimationFrame(function(){return f.target.style.scrollBehavior="smooth"}),f.rec&&f(f.rec))}),al(NI,1),NA.pause(),kE++,QB=2,VQ(2),xI.forEach(function(f){return W(f.vars.onRefresh)&&f.vars.onRefresh(f)}),QB=_I.isRefreshing=!1,yE("refresh")},or=0,Ra=1,Tt,VQ=function(F){if(F===2||!QB&&!HA){_I.isUpdating=!0,Tt&&Tt.update(0);var b=xI.length,d=wA(),f=d-$A>=50,Z=b&&xI[0].scroll();if(Ra=or>Z?-1:1,QB||(or=Z),f&&(XA&&!X&&d-XA>200&&(XA=0,yE("scrollEnd")),mA=$A,$A=d),Ra<0){for(cA=b;cA-- >0;)xI[cA]&&xI[cA].update(0,f);Ra=1}else for(cA=0;cA<b;cA++)xI[cA]&&xI[cA].update(0,f);_I.isUpdating=!1}mt=0},tr=[eI,wI,kI,FI,HC+Qg,HC+eC,HC+CB,HC+Mg,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ja=tr.concat([DI,Bg,"boxSizing","max"+ig,"max"+eQ,"position",HC,QI,QI+CB,QI+eC,QI+Qg,QI+Mg]),a0=function(F,b,d){Ro(d);var f=F._gsap;if(f.spacerIsNative)Ro(f.spacerState);else if(F._gsap.swappedIn){var Z=b.parentNode;Z&&(Z.insertBefore(F,b),Z.removeChild(b))}F._gsap.swappedIn=!1},er=function(F,b,d,f){if(!F._gsap.swappedIn){for(var Z=tr.length,EA=b.style,gA=F.style,_A;Z--;)_A=tr[Z],EA[_A]=d[_A];EA.position=d.position==="absolute"?"absolute":"relative",d.display==="inline"&&(EA.display="inline-block"),gA[kI]=gA[FI]="auto",EA.flexBasis=d.flexBasis||"auto",EA.overflow="visible",EA.boxSizing="border-box",EA[DI]=Ji(F,AA)+Yg,EA[Bg]=Ji(F,IA)+Yg,EA[QI]=gA[HC]=gA[wI]=gA[eI]="0",Ro(f),gA[DI]=gA["max"+ig]=d[DI],gA[Bg]=gA["max"+eQ]=d[Bg],gA[QI]=d[QI],F.parentNode!==b&&(F.parentNode.insertBefore(b,F),b.appendChild(F)),F._gsap.swappedIn=!0}},s0=/([A-Z])/g,Ro=function(F){if(F){var b=F.t.style,d=F.length,f=0,Z,EA;for((F.t._gsap||sA.core.getCache(F.t)).uncache=1;f<d;f+=2)EA=F[f+1],Z=F[f],EA?b[Z]=EA:b[Z]&&b.removeProperty(Z.replace(s0,"-$1").toLowerCase())}},fa=function(F){for(var b=Ja.length,d=F.style,f=[],Z=0;Z<b;Z++)f.push(Ja[Z],d[Ja[Z]]);return f.t=F,f},n0=function(F,b,d){for(var f=[],Z=F.length,EA=d?8:0,gA;EA<Z;EA+=2)gA=F[EA],f.push(gA,gA in b?b[gA]:F[EA+1]);return f.t=F.t,f},ua={left:0,top:0},Dl=function(F,b,d,f,Z,EA,gA,_A,KI,Eg,XI,tI,kA,aI){W(F)&&(F=F(_A)),R(F)&&F.substr(0,3)==="max"&&(F=tI+(F.charAt(4)==="="?pa("0"+F.substr(3),d):0));var Lg=kA?kA.time():0,lg,sC,Fg;if(kA&&kA.seek(0),isNaN(F)||(F=+F),BA(F))kA&&(F=sA.utils.mapRange(kA.scrollTrigger.start,kA.scrollTrigger.end,0,tI,F)),gA&&da(gA,d,f,!0);else{W(b)&&(b=b(_A));var JC=(F||"0").split(" "),qI,zB,Ug,pI;Fg=tA(b,_A)||SA,qI=RC(Fg)||{},(!qI||!qI.left&&!qI.top)&&SC(Fg).display==="none"&&(pI=Fg.style.display,Fg.style.display="block",qI=RC(Fg),pI?Fg.style.display=pI:Fg.style.removeProperty("display")),zB=pa(JC[0],qI[f.d]),Ug=pa(JC[1]||"0",d),F=qI[f.p]-KI[f.p]-Eg+zB+Z-Ug,gA&&da(gA,Ug,f,d-Ug<20||gA._isStart&&Ug>20),d-=d-Ug}if(aI&&(_A[aI]=F||-.001,F<0&&(F=0)),EA){var iB=F+d,yB=EA._isStart;lg="scroll"+f.d2,da(EA,iB,f,yB&&iB>20||!yB&&(XI?Math.max(SA[lg],L[lg]):EA.parentNode[lg])<=iB+1),XI&&(KI=RC(gA),XI&&(EA.style[f.op.p]=KI[f.op.p]-f.op.m-EA._offset+Yg))}return kA&&Fg&&(lg=RC(Fg),kA.seek(tI),sC=RC(Fg),kA._caScrollDist=lg[f.p]-sC[f.p],F=F/kA._caScrollDist*tI),kA&&kA.seek(Lg),kA?F:Math.round(F)},r0=/(webkit|moz|length|cssText|inset)/i,hl=function(F,b,d,f){if(F.parentNode!==b){var Z=F.style,EA,gA;if(b===SA){F._stOrig=Z.cssText,gA=SC(F);for(EA in gA)!+EA&&!r0.test(EA)&&gA[EA]&&typeof Z[EA]=="string"&&EA!=="0"&&(Z[EA]=gA[EA]);Z.top=d,Z.left=f}else Z.cssText=F._stOrig;sA.core.getCache(F).uncache=1,b.appendChild(F)}},cl=function(F,b,d){var f=b,Z=f;return function(EA){var gA=Math.round(F());return gA!==f&&gA!==Z&&Math.abs(gA-f)>3&&Math.abs(gA-Z)>3&&(EA=gA,d&&d()),Z=f,f=EA,EA}},qa=function(F,b,d){var f={};f[b.p]="+="+d,sA.set(F,f)},ll=function(F,b){var d=aA(F,b),f="_scroll"+b.p2,Z=function EA(gA,_A,KI,Eg,XI){var tI=EA.tween,kA=_A.onComplete,aI={};KI=KI||d();var Lg=cl(d,KI,function(){tI.kill(),EA.tween=0});return XI=Eg&&XI||0,Eg=Eg||gA-KI,tI&&tI.kill(),_A[f]=gA,_A.inherit=!1,_A.modifiers=aI,aI[f]=function(){return Lg(KI+Eg*tI.ratio+XI*tI.ratio*tI.ratio)},_A.onUpdate=function(){M.cache++,EA.tween&&VQ()},_A.onComplete=function(){EA.tween=0,kA&&kA.call(tI)},tI=EA.tween=sA.to(F,_A),tI};return F[f]=d,d.wheelHandler=function(){return Z.tween&&Z.tween.kill()&&(Z.tween=0)},GC(F,"wheel",d.wheelHandler),_I.isTouch&&GC(F,"touchmove",d.wheelHandler),Z},_I=function(){function z(b,d){WA||z.register(sA)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xA(this),this.init(b,d)}var F=z.prototype;return F.init=function(d,f){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bI){this.update=this.refresh=this.kill=cg;return}d=aC(R(d)||BA(d)||d.nodeType?{trigger:d}:d,Na);var Z=d,EA=Z.onUpdate,gA=Z.toggleClass,_A=Z.id,KI=Z.onToggle,Eg=Z.onRefresh,XI=Z.scrub,tI=Z.trigger,kA=Z.pin,aI=Z.pinSpacing,Lg=Z.invalidateOnRefresh,lg=Z.anticipatePin,sC=Z.onScrubComplete,Fg=Z.onSnapComplete,JC=Z.once,qI=Z.snap,zB=Z.pinReparent,Ug=Z.pinSpacer,pI=Z.containerAnimation,iB=Z.fastScrollEnd,yB=Z.preventOverlaps,oI=d.horizontal||d.containerAnimation&&d.horizontal!==!1?AA:IA,fC=!XI&&XI!==0,MI=tA(d.scroller||qA),jQ=sA.core.getCache(MI),nC=dQ(MI),EB=("pinType"in d?d.pinType:y(MI,"pinType")||nC&&"fixed")==="fixed",oB=[d.onEnter,d.onLeave,d.onEnterBack,d.onLeaveBack],eg=fC&&d.toggleActions.split(" "),AC="markers"in d?d.markers:Na.markers,IC=nC?0:parseFloat(SC(MI)["border"+oI.p2+ig])||0,$=this,rC=d.onRefreshInit&&function(){return d.onRefreshInit($)},UE=ya(MI,nC,oI),fi=Br(MI,nC),$B=0,XQ=0,tB=0,gC=aA(MI,oI),eB,TC,ui,aB,aQ,$I,Zg,kB,qB,eA,YB,zQ,qi,CC,Yi,NE,Jo,kC,Li,Pg,sQ,AQ,$Q,bt,BC,La,mi,fo,uo,Hi,KE,OI,pE,nQ,rQ,DQ,FE,qo,Ai;if($._startClamp=$._endClamp=!1,$._dir=oI,lg*=45,$.scroller=MI,$.scroll=pI?pI.time.bind(pI):gC,aB=gC(),$.vars=d,f=f||d.animation,"refreshPriority"in d&&(ZA=1,d.refreshPriority===-9999&&(Tt=$)),jQ.tweenScroll=jQ.tweenScroll||{top:ll(MI,IA),left:ll(MI,AA)},$.tweenTo=eB=jQ.tweenScroll[oI.p],$.scrubDuration=function(bA){pE=BA(bA)&&bA,pE?OI?OI.duration(bA):OI=sA.to(f,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pE,paused:!0,onComplete:function(){return sC&&sC($)}}):(OI&&OI.progress(1).kill(),OI=0)},f&&(f.vars.lazy=!1,f._initted&&!$.isReverted||f.vars.immediateRender!==!1&&d.immediateRender!==!1&&f.duration()&&f.render(0,!0,!0),$.animation=f.pause(),f.scrollTrigger=$,$.scrubDuration(XI),Hi=0,_A||(_A=f.vars.id)),qI&&((!iA(qI)||qI.push)&&(qI={snapTo:qI}),"scrollBehavior"in SA.style&&sA.set(nC?[SA,L]:MI,{scrollBehavior:"auto"}),M.forEach(function(bA){return W(bA)&&bA.target===(nC?LA.scrollingElement||L:MI)&&(bA.smooth=!1)}),ui=W(qI.snapTo)?qI.snapTo:qI.snapTo==="labels"?Yt(f):qI.snapTo==="labelsDirectional"?ka(f):qI.directional!==!1?function(bA,fI){return Lt(qI.snapTo)(bA,wA()-XQ<500?0:fI.direction)}:sA.utils.snap(qI.snapTo),nQ=qI.duration||{min:.1,max:2},nQ=iA(nQ)?AI(nQ.min,nQ.max):AI(nQ,nQ),rQ=sA.delayedCall(qI.delay||pE/2||.1,function(){var bA=gC(),fI=wA()-XQ<500,sI=eB.tween;if((fI||Math.abs($.getVelocity())<10)&&!sI&&!X&&$B!==bA){var dI=(bA-$I)/CC,MC=f&&!fC?f.totalProgress():dI,PI=fI?0:(MC-KE)/(wA()-mA)*1e3||0,Wg=sA.utils.clamp(-dI,1-dI,II(PI/2)*PI/.185),bC=dI+(qI.inertia===!1?0:Wg),mg,Ng,ag=qI,hQ=ag.onStart,dg=ag.onInterrupt,LB=ag.onComplete;if(mg=ui(bC,$),BA(mg)||(mg=bC),Ng=Math.round($I+mg*CC),bA<=Zg&&bA>=$I&&Ng!==bA){if(sI&&!sI._initted&&sI.data<=II(Ng-bA))return;qI.inertia===!1&&(Wg=mg-dI),eB(Ng,{duration:nQ(II(Math.max(II(bC-MC),II(mg-MC))*.185/PI/.05||0)),ease:qI.ease||"power3",data:II(Ng-bA),onInterrupt:function(){return rQ.restart(!0)&&dg&&dg($)},onComplete:function(){$.update(),$B=gC(),f&&(OI?OI.resetTo("totalProgress",mg,f._tTime/f._tDur):f.progress(mg)),Hi=KE=f&&!fC?f.totalProgress():$.progress,Fg&&Fg($),LB&&LB($)}},bA,Wg*CC,Ng-bA-Wg*CC),hQ&&hQ($,eB.tween)}}else $.isActive&&$B!==bA&&rQ.restart(!0)}).pause()),_A&&(Qr[_A]=$),tI=$.trigger=tA(tI||kA!==!0&&kA),Ai=tI&&tI._gsap&&tI._gsap.stRevert,Ai&&(Ai=Ai($)),kA=kA===!0?tI:tA(kA),R(gA)&&(gA={targets:tI,className:gA}),kA&&(aI===!1||aI===HC||(aI=!aI&&kA.parentNode&&kA.parentNode.style&&SC(kA.parentNode).display==="flex"?!1:QI),$.pin=kA,TC=sA.core.getCache(kA),TC.spacer?Yi=TC.pinState:(Ug&&(Ug=tA(Ug),Ug&&!Ug.nodeType&&(Ug=Ug.current||Ug.nativeElement),TC.spacerIsNative=!!Ug,Ug&&(TC.spacerState=fa(Ug))),TC.spacer=kC=Ug||LA.createElement("div"),kC.classList.add("pin-spacer"),_A&&kC.classList.add("pin-spacer-"+_A),TC.pinState=Yi=fa(kA)),d.force3D!==!1&&sA.set(kA,{force3D:!0}),$.spacer=kC=TC.spacer,uo=SC(kA),bt=uo[aI+oI.os2],Pg=sA.getProperty(kA),sQ=sA.quickSetter(kA,oI.a,Yg),er(kA,kC,uo),Jo=fa(kA)),AC){zQ=iA(AC)?aC(AC,El):El,eA=Fa("scroller-start",_A,MI,oI,zQ,0),YB=Fa("scroller-end",_A,MI,oI,zQ,0,eA),Li=eA["offset"+oI.op.d2];var xt=tA(y(MI,"content")||MI);kB=this.markerStart=Fa("start",_A,xt,oI,zQ,Li,0,pI),qB=this.markerEnd=Fa("end",_A,xt,oI,zQ,Li,0,pI),pI&&(qo=sA.quickSetter([kB,qB],oI.a,Yg)),!EB&&!(U.length&&y(MI,"fixedMarkers")===!0)&&(qt(nC?SA:MI),sA.set([eA,YB],{force3D:!0}),La=sA.quickSetter(eA,oI.a,Yg),fo=sA.quickSetter(YB,oI.a,Yg))}if(pI){var JI=pI.vars.onUpdate,hI=pI.vars.onUpdateParams;pI.eventCallback("onUpdate",function(){$.update(0,0,1),JI&&JI.apply(pI,hI||[])})}if($.previous=function(){return xI[xI.indexOf($)-1]},$.next=function(){return xI[xI.indexOf($)+1]},$.revert=function(bA,fI){if(!fI)return $.kill(!0);var sI=bA!==!1||!$.enabled,dI=p;sI!==$.isReverted&&(sI&&(DQ=Math.max(gC(),$.scroll.rec||0),tB=$.progress,FE=f&&f.progress()),kB&&[kB,qB,eA,YB].forEach(function(MC){return MC.style.display=sI?"none":"block"}),sI&&(p=$,$.update(sI)),kA&&(!zB||!$.isActive)&&(sI?a0(kA,kC,Yi):er(kA,kC,SC(kA),BC)),sI||$.update(sI),p=dI,$.isReverted=sI)},$.refresh=function(bA,fI,sI,dI){if(!((p||!$.enabled)&&!fI)){if(kA&&bA&&XA){GC(z,"scrollEnd",tl);return}!QB&&rC&&rC($),p=$,eB.tween&&!sI&&(eB.tween.kill(),eB.tween=0),OI&&OI.pause(),Lg&&f&&f.revert({kill:!1}).invalidate(),$.isReverted||$.revert(!0,!0),$._subPinOffset=!1;var MC=UE(),PI=fi(),Wg=pI?pI.duration():XB(MI,oI),bC=CC<=.01,mg=0,Ng=dI||0,ag=iA(sI)?sI.end:d.end,hQ=d.endTrigger||tI,dg=iA(sI)?sI.start:d.start||(d.start===0||!tI?0:kA?"0 0":"0 100%"),LB=$.pinnedContainer=d.pinnedContainer&&tA(d.pinnedContainer,$),RQ=tI&&Math.max(0,xI.indexOf($))||0,uC=RQ,qC,xC,dE,ma,_C,DC,JQ,sr,kl,_t,fQ,Ot,Ha;for(AC&&iA(sI)&&(Ot=sA.getProperty(eA,oI.p),Ha=sA.getProperty(YB,oI.p));uC--;)DC=xI[uC],DC.end||DC.refresh(0,1)||(p=$),JQ=DC.pin,JQ&&(JQ===tI||JQ===kA||JQ===LB)&&!DC.isReverted&&(_t||(_t=[]),_t.unshift(DC),DC.revert(!0,!0)),DC!==xI[uC]&&(RQ--,uC--);for(W(dg)&&(dg=dg($)),dg=HI(dg,"start",$),$I=Dl(dg,tI,MC,oI,gC(),kB,eA,$,PI,IC,EB,Wg,pI,$._startClamp&&"_startClamp")||(kA?-.001:0),W(ag)&&(ag=ag($)),R(ag)&&!ag.indexOf("+=")&&(~ag.indexOf(" ")?ag=(R(dg)?dg.split(" ")[0]:"")+ag:(mg=pa(ag.substr(2),MC),ag=R(dg)?dg:(pI?sA.utils.mapRange(0,pI.duration(),pI.scrollTrigger.start,pI.scrollTrigger.end,$I):$I)+mg,hQ=tI)),ag=HI(ag,"end",$),Zg=Math.max($I,Dl(ag||(hQ?"100% 0":Wg),hQ,MC,oI,gC()+mg,qB,YB,$,PI,IC,EB,Wg,pI,$._endClamp&&"_endClamp"))||-.001,mg=0,uC=RQ;uC--;)DC=xI[uC],JQ=DC.pin,JQ&&DC.start-DC._pinPush<=$I&&!pI&&DC.end>0&&(qC=DC.end-($._startClamp?Math.max(0,DC.start):DC.start),(JQ===tI&&DC.start-DC._pinPush<$I||JQ===LB)&&isNaN(dg)&&(mg+=qC*(1-DC.progress)),JQ===kA&&(Ng+=qC));if($I+=mg,Zg+=mg,$._startClamp&&($._startClamp+=mg),$._endClamp&&!QB&&($._endClamp=Zg||-.001,Zg=Math.min(Zg,XB(MI,oI))),CC=Zg-$I||($I-=.01)&&.001,bC&&(tB=sA.utils.clamp(0,1,sA.utils.normalize($I,Zg,DQ))),$._pinPush=Ng,kB&&mg&&(qC={},qC[oI.a]="+="+mg,LB&&(qC[oI.p]="-="+gC()),sA.set([kB,qB],qC)),kA&&!(iI&&$.end>=XB(MI,oI)))qC=SC(kA),ma=oI===IA,dE=gC(),AQ=parseFloat(Pg(oI.a))+Ng,!Wg&&Zg>1&&(fQ=(nC?LA.scrollingElement||L:MI).style,fQ={style:fQ,value:fQ["overflow"+oI.a.toUpperCase()]},nC&&SC(SA)["overflow"+oI.a.toUpperCase()]!=="scroll"&&(fQ.style["overflow"+oI.a.toUpperCase()]="scroll")),er(kA,kC,qC),Jo=fa(kA),xC=RC(kA,!0),sr=EB&&aA(MI,ma?AA:IA)(),aI?(BC=[aI+oI.os2,CC+Ng+Yg],BC.t=kC,uC=aI===QI?Ji(kA,oI)+CC+Ng:0,uC&&(BC.push(oI.d,uC+Yg),kC.style.flexBasis!=="auto"&&(kC.style.flexBasis=uC+Yg)),Ro(BC),LB&&xI.forEach(function(vt){vt.pin===LB&&vt.vars.pinSpacing!==!1&&(vt._subPinOffset=!0)}),EB&&gC(DQ)):(uC=Ji(kA,oI),uC&&kC.style.flexBasis!=="auto"&&(kC.style.flexBasis=uC+Yg)),EB&&(_C={top:xC.top+(ma?dE-$I:sr)+Yg,left:xC.left+(ma?sr:dE-$I)+Yg,boxSizing:"border-box",position:"fixed"},_C[DI]=_C["max"+ig]=Math.ceil(xC.width)+Yg,_C[Bg]=_C["max"+eQ]=Math.ceil(xC.height)+Yg,_C[HC]=_C[HC+CB]=_C[HC+eC]=_C[HC+Qg]=_C[HC+Mg]="0",_C[QI]=qC[QI],_C[QI+CB]=qC[QI+CB],_C[QI+eC]=qC[QI+eC],_C[QI+Qg]=qC[QI+Qg],_C[QI+Mg]=qC[QI+Mg],NE=n0(Yi,_C,zB),QB&&gC(0)),f?(kl=f._initted,EI(1),f.render(f.duration(),!0,!0),$Q=Pg(oI.a)-AQ+CC+Ng,mi=Math.abs(CC-$Q)>1,EB&&mi&&NE.splice(NE.length-2,2),f.render(0,!0,!0),kl||f.invalidate(!0),f.parent||f.totalTime(f.totalTime()),EI(0)):$Q=CC,fQ&&(fQ.value?fQ.style["overflow"+oI.a.toUpperCase()]=fQ.value:fQ.style.removeProperty("overflow-"+oI.a));else if(tI&&gC()&&!pI)for(xC=tI.parentNode;xC&&xC!==SA;)xC._pinOffset&&($I-=xC._pinOffset,Zg-=xC._pinOffset),xC=xC.parentNode;_t&&_t.forEach(function(vt){return vt.revert(!1,!0)}),$.start=$I,$.end=Zg,aB=aQ=QB?DQ:gC(),!pI&&!QB&&(aB<DQ&&gC(DQ),$.scroll.rec=0),$.revert(!1,!0),XQ=wA(),rQ&&($B=-1,rQ.restart(!0)),p=0,f&&fC&&(f._initted||FE)&&f.progress()!==FE&&f.progress(FE||0,!0).render(f.time(),!0,!0),(bC||tB!==$.progress||pI||Lg)&&(f&&!fC&&f.totalProgress(pI&&$I<-.001&&!tB?sA.utils.normalize($I,Zg,0):tB,!0),$.progress=bC||(aB-$I)/CC===tB?0:tB),kA&&aI&&(kC._pinOffset=Math.round($.progress*$Q)),OI&&OI.invalidate(),isNaN(Ot)||(Ot-=sA.getProperty(eA,oI.p),Ha-=sA.getProperty(YB,oI.p),qa(eA,oI,Ot),qa(kB,oI,Ot-(dI||0)),qa(YB,oI,Ha),qa(qB,oI,Ha-(dI||0))),bC&&!QB&&$.update(),Eg&&!QB&&!qi&&(qi=!0,Eg($),qi=!1)}},$.getVelocity=function(){return(gC()-aQ)/(wA()-mA)*1e3||0},$.endAnimation=function(){CA($.callbackAnimation),f&&(OI?OI.progress(1):f.paused()?fC||CA(f,$.direction<0,1):CA(f,f.reversed()))},$.labelToScroll=function(bA){return f&&f.labels&&($I||$.refresh()||$I)+f.labels[bA]/f.duration()*CC||0},$.getTrailing=function(bA){var fI=xI.indexOf($),sI=$.direction>0?xI.slice(0,fI).reverse():xI.slice(fI+1);return(R(bA)?sI.filter(function(dI){return dI.vars.preventOverlaps===bA}):sI).filter(function(dI){return $.direction>0?dI.end<=$I:dI.start>=Zg})},$.update=function(bA,fI,sI){if(!(pI&&!sI&&!bA)){var dI=QB===!0?DQ:$.scroll(),MC=bA?0:(dI-$I)/CC,PI=MC<0?0:MC>1?1:MC||0,Wg=$.progress,bC,mg,Ng,ag,hQ,dg,LB,RQ;if(fI&&(aQ=aB,aB=pI?gC():dI,qI&&(KE=Hi,Hi=f&&!fC?f.totalProgress():PI)),lg&&kA&&!p&&!UA&&XA&&(!PI&&$I<dI+(dI-aQ)/(wA()-mA)*lg?PI=1e-4:PI===1&&Zg>dI+(dI-aQ)/(wA()-mA)*lg&&(PI=.9999)),PI!==Wg&&$.enabled){if(bC=$.isActive=!!PI&&PI<1,mg=!!Wg&&Wg<1,dg=bC!==mg,hQ=dg||!!PI!=!!Wg,$.direction=PI>Wg?1:-1,$.progress=PI,hQ&&!p&&(Ng=PI&&!Wg?0:PI===1?1:Wg===1?2:3,fC&&(ag=!dg&&eg[Ng+1]!=="none"&&eg[Ng+1]||eg[Ng],RQ=f&&(ag==="complete"||ag==="reset"||ag in f))),yB&&(dg||RQ)&&(RQ||XI||!f)&&(W(yB)?yB($):$.getTrailing(yB).forEach(function(dE){return dE.endAnimation()})),fC||(OI&&!p&&!UA?(OI._dp._time-OI._start!==OI._time&&OI.render(OI._dp._time-OI._start),OI.resetTo?OI.resetTo("totalProgress",PI,f._tTime/f._tDur):(OI.vars.totalProgress=PI,OI.invalidate().restart())):f&&f.totalProgress(PI,!!(p&&(XQ||bA)))),kA){if(bA&&aI&&(kC.style[aI+oI.os2]=bt),!EB)sQ(Ri(AQ+$Q*PI));else if(hQ){if(LB=!bA&&PI>Wg&&Zg+1>dI&&dI+1>=XB(MI,oI),zB)if(!bA&&(bC||LB)){var uC=RC(kA,!0),qC=dI-$I;hl(kA,SA,uC.top+(oI===IA?qC:0)+Yg,uC.left+(oI===IA?0:qC)+Yg)}else hl(kA,kC);Ro(bC||LB?NE:Jo),mi&&PI<1&&bC||sQ(AQ+(PI===1&&!LB?$Q:0))}}qI&&!eB.tween&&!p&&!UA&&rQ.restart(!0),gA&&(dg||JC&&PI&&(PI<1||!Y))&&rA(gA.targets).forEach(function(dE){return dE.classList[bC||JC?"add":"remove"](gA.className)}),EA&&!fC&&!bA&&EA($),hQ&&!p?(fC&&(RQ&&(ag==="complete"?f.pause().totalProgress(1):ag==="reset"?f.restart(!0).pause():ag==="restart"?f.restart(!0):f[ag]()),EA&&EA($)),(dg||!Y)&&(KI&&dg&&OA($,KI),oB[Ng]&&OA($,oB[Ng]),JC&&(PI===1?$.kill(!1,1):oB[Ng]=0),dg||(Ng=PI===1?1:3,oB[Ng]&&OA($,oB[Ng]))),iB&&!bC&&Math.abs($.getVelocity())>(BA(iB)?iB:2500)&&(CA($.callbackAnimation),OI?OI.progress(1):CA(f,ag==="reverse"?1:!PI,1))):fC&&EA&&!p&&EA($)}if(fo){var xC=pI?dI/pI.duration()*(pI._caScrollDist||0):dI;La(xC+(eA._isFlipped?1:0)),fo(xC)}qo&&qo(-dI/pI.duration()*(pI._caScrollDist||0))}},$.enable=function(bA,fI){$.enabled||($.enabled=!0,GC(MI,"resize",Ht),nC||GC(MI,"scroll",Fo),rC&&GC(z,"refreshInit",rC),bA!==!1&&($.progress=tB=0,aB=aQ=$B=gC()),fI!==!1&&$.refresh())},$.getTween=function(bA){return bA&&eB?eB.tween:OI},$.setPositions=function(bA,fI,sI,dI){if(pI){var MC=pI.scrollTrigger,PI=pI.duration(),Wg=MC.end-MC.start;bA=MC.start+Wg*bA/PI,fI=MC.start+Wg*fI/PI}$.refresh(!1,!1,{start:gg(bA,sI&&!!$._startClamp),end:gg(fI,sI&&!!$._endClamp)},dI),$.update()},$.adjustPinSpacing=function(bA){if(BC&&bA){var fI=BC.indexOf(oI.d)+1;BC[fI]=parseFloat(BC[fI])+bA+Yg,BC[1]=parseFloat(BC[1])+bA+Yg,Ro(BC)}},$.disable=function(bA,fI){if($.enabled&&(bA!==!1&&$.revert(!0,!0),$.enabled=$.isActive=!1,fI||OI&&OI.pause(),DQ=0,TC&&(TC.uncache=1),rC&&yC(z,"refreshInit",rC),rQ&&(rQ.pause(),eB.tween&&eB.tween.kill()&&(eB.tween=0)),!nC)){for(var sI=xI.length;sI--;)if(xI[sI].scroller===MI&&xI[sI]!==$)return;yC(MI,"resize",Ht),nC||yC(MI,"scroll",Fo)}},$.kill=function(bA,fI){$.disable(bA,fI),OI&&!fI&&OI.kill(),_A&&delete Qr[_A];var sI=xI.indexOf($);sI>=0&&xI.splice(sI,1),sI===cA&&Ra>0&&cA--,sI=0,xI.forEach(function(dI){return dI.scroller===$.scroller&&(sI=1)}),sI||QB||($.scroll.rec=0),f&&(f.scrollTrigger=null,bA&&f.revert({kill:!1}),fI||f.kill()),kB&&[kB,qB,eA,YB].forEach(function(dI){return dI.parentNode&&dI.parentNode.removeChild(dI)}),Tt===$&&(Tt=0),kA&&(TC&&(TC.uncache=1),sI=0,xI.forEach(function(dI){return dI.pin===kA&&sI++}),sI||(TC.spacer=0)),d.onKill&&d.onKill($)},xI.push($),$.enable(!1,!1),Ai&&Ai($),f&&f.add&&!CC){var Ag=$.update;$.update=function(){$.update=Ag,$I||Zg||$.refresh()},sA.delayedCall(.01,$.update),CC=.01,$I=Zg=0}else $.refresh();kA&&e0()},z.register=function(d){return WA||(sA=d||wE(),Ga()&&window.document&&z.enable(),WA=bI),WA},z.defaults=function(d){if(d)for(var f in d)Na[f]=d[f];return Na},z.disable=function(d,f){bI=0,xI.forEach(function(EA){return EA[f?"kill":"disable"](d)}),yC(qA,"wheel",Fo),yC(LA,"scroll",Fo),clearInterval(J),yC(LA,"touchcancel",cg),yC(SA,"touchstart",cg),Ma(yC,LA,"pointerdown,touchstart,mousedown",ZI),Ma(yC,LA,"pointerup,touchend,mouseup",kg),NA.kill(),po(yC);for(var Z=0;Z<M.length;Z+=3)Ua(yC,M[Z],M[Z+1]),Ua(yC,M[Z],M[Z+2])},z.enable=function(){if(qA=window,LA=document,L=LA.documentElement,SA=LA.body,sA&&(rA=sA.utils.toArray,AI=sA.utils.clamp,xA=sA.core.context||cg,EI=sA.core.suppressOverwrites||cg,NI=qA.history.scrollRestoration||"auto",or=qA.pageYOffset,sA.core.globals("ScrollTrigger",z),SA)){bI=1,m=document.createElement("div"),m.style.height="100vh",m.style.position="absolute",nl(),tC(),uA.register(sA),z.isTouch=uA.isTouch,zA=uA.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),TI=uA.isTouch===1,GC(qA,"wheel",Fo),nA=[qA,LA,L,SA],sA.matchMedia?(z.matchMedia=function(_A){var KI=sA.matchMedia(),Eg;for(Eg in _A)KI.add(Eg,_A[Eg]);return KI},sA.addEventListener("matchMediaInit",function(){return Er()}),sA.addEventListener("matchMediaRevert",function(){return el()}),sA.addEventListener("matchMedia",function(){ME(0,1),yE("matchMedia")}),sA.matchMedia("(orientation: portrait)",function(){return ir(),ir})):console.warn("Requires GSAP 3.11.0 or later"),ir(),GC(LA,"scroll",Fo);var d=SA.style,f=d.borderTopStyle,Z=sA.core.Animation.prototype,EA,gA;for(Z.revert||Object.defineProperty(Z,"revert",{value:function(){return this.time(-.01,!0)}}),d.borderTopStyle="solid",EA=RC(SA),IA.m=Math.round(EA.top+IA.sc())||0,AA.m=Math.round(EA.left+AA.sc())||0,f?d.borderTopStyle=f:d.removeProperty("border-top-style"),J=setInterval(ol,250),sA.delayedCall(.5,function(){return UA=0}),GC(LA,"touchcancel",cg),GC(SA,"touchstart",cg),Ma(GC,LA,"pointerdown,touchstart,mousedown",ZI),Ma(GC,LA,"pointerup,touchend,mouseup",kg),MA=sA.utils.checkPrefix("transform"),Ja.push(MA),WA=wA(),NA=sA.delayedCall(.2,ME).pause(),fA=[LA,"visibilitychange",function(){var _A=qA.innerWidth,KI=qA.innerHeight;LA.hidden?(yA=_A,jA=KI):(yA!==_A||jA!==KI)&&Ht()},LA,"DOMContentLoaded",ME,qA,"load",ME,qA,"resize",Ht],po(GC),xI.forEach(function(_A){return _A.enable(0,1)}),gA=0;gA<M.length;gA+=3)Ua(yC,M[gA],M[gA+1]),Ua(yC,M[gA],M[gA+2])}},z.config=function(d){"limitCallbacks"in d&&(Y=!!d.limitCallbacks);var f=d.syncInterval;f&&clearInterval(J)||(J=f)&&setInterval(ol,f),"ignoreMobileResize"in d&&(TI=z.isTouch===1&&d.ignoreMobileResize),"autoRefreshEvents"in d&&(po(yC)||po(GC,d.autoRefreshEvents||"none"),SI=(d.autoRefreshEvents+"").indexOf("resize")===-1)},z.scrollerProxy=function(d,f){var Z=tA(d),EA=M.indexOf(Z),gA=dQ(Z);~EA&&M.splice(EA,gA?6:2),f&&(gA?U.unshift(qA,f,SA,f,L,f):U.unshift(Z,f))},z.clearMatchMedia=function(d){xI.forEach(function(f){return f._ctx&&f._ctx.query===d&&f._ctx.kill(!0,!0)})},z.isInViewport=function(d,f,Z){var EA=(R(d)?tA(d):d).getBoundingClientRect(),gA=EA[Z?DI:Bg]*f||0;return Z?EA.right-gA>0&&EA.left+gA<qA.innerWidth:EA.bottom-gA>0&&EA.top+gA<qA.innerHeight},z.positionInViewport=function(d,f,Z){R(d)&&(d=tA(d));var EA=d.getBoundingClientRect(),gA=EA[Z?DI:Bg],_A=f==null?gA/2:f in Ka?Ka[f]*gA:~f.indexOf("%")?parseFloat(f)*gA/100:parseFloat(f)||0;return Z?(EA.left+_A)/qA.innerWidth:(EA.top+_A)/qA.innerHeight},z.killAll=function(d){if(xI.slice(0).forEach(function(Z){return Z.vars.id!=="ScrollSmoother"&&Z.kill()}),d!==!0){var f=GE.killAll||[];GE={},f.forEach(function(Z){return Z()})}},z}();_I.version="3.12.5",_I.saveStyles=function(z){return z?rA(z).forEach(function(F){if(F&&F.style){var b=uB.indexOf(F);b>=0&&uB.splice(b,5),uB.push(F,F.style.cssText,F.getBBox&&F.getAttribute("transform"),sA.core.getCache(F),xA())}}):uB},_I.revert=function(z,F){return Er(!z,F)},_I.create=function(z,F){return new _I(z,F)},_I.refresh=function(z){return z?Ht():(WA||_I.register())&&ME(!0)},_I.update=function(z){return++M.cache&&VQ(z===!0?2:0)},_I.clearScrollMemory=al,_I.maxScroll=function(z,F){return XB(z,F?AA:IA)},_I.getScrollFunc=function(z,F){return aA(tA(z),F?AA:IA)},_I.getById=function(z){return Qr[z]},_I.getAll=function(){return xI.filter(function(z){return z.vars.id!=="ScrollSmoother"})},_I.isScrolling=function(){return!!XA},_I.snapDirectional=Lt,_I.addEventListener=function(z,F){var b=GE[z]||(GE[z]=[]);~b.indexOf(F)||b.push(F)},_I.removeEventListener=function(z,F){var b=GE[z],d=b&&b.indexOf(F);d>=0&&b.splice(d,1)},_I.batch=function(z,F){var b=[],d={},f=F.interval||.016,Z=F.batchMax||1e9,EA=function(KI,Eg){var XI=[],tI=[],kA=sA.delayedCall(f,function(){Eg(XI,tI),XI=[],tI=[]}).pause();return function(aI){XI.length||kA.restart(!0),XI.push(aI.trigger),tI.push(aI),Z<=XI.length&&kA.progress(1)}},gA;for(gA in F)d[gA]=gA.substr(0,2)==="on"&&W(F[gA])&&gA!=="onRefreshInit"?EA(gA,F[gA]):F[gA];return W(Z)&&(Z=Z(),GC(_I,"refresh",function(){return Z=F.batchMax()})),rA(z).forEach(function(_A){var KI={};for(gA in d)KI[gA]=d[gA];KI.trigger=_A,b.push(_I.create(KI))}),b};var wl=function(F,b,d,f){return b>f?F(f):b<0&&F(0),d>f?(f-b)/(d-b):d<0?b/(b-d):1},ar=function z(F,b){b===!0?F.style.removeProperty("touch-action"):F.style.touchAction=b===!0?"auto":b?"pan-"+b+(uA.isTouch?" pinch-zoom":""):"none",F===L&&z(SA,b)},Ya={auto:1,scroll:1},D0=function(F){var b=F.event,d=F.target,f=F.axis,Z=(b.changedTouches?b.changedTouches[0]:b).target,EA=Z._gsap||sA.core.getCache(Z),gA=wA(),_A;if(!EA._isScrollT||gA-EA._isScrollT>2e3){for(;Z&&Z!==SA&&(Z.scrollHeight<=Z.clientHeight&&Z.scrollWidth<=Z.clientWidth||!(Ya[(_A=SC(Z)).overflowY]||Ya[_A.overflowX]));)Z=Z.parentNode;EA._isScroll=Z&&Z!==d&&!dQ(Z)&&(Ya[(_A=SC(Z)).overflowY]||Ya[_A.overflowX]),EA._isScrollT=gA}(EA._isScroll||f==="x")&&(b.stopPropagation(),b._gsapAllow=!0)},Sl=function(F,b,d,f){return uA.create({target:F,capture:!0,debounce:!1,lockAxis:!0,type:b,onWheel:f=f&&D0,onPress:f,onDrag:f,onScroll:f,onEnable:function(){return d&&GC(LA,uA.eventTypes[0],yl,!1,!0)},onDisable:function(){return yC(LA,uA.eventTypes[0],yl,!0)}})},h0=/(input|label|select|textarea)/i,Gl,yl=function(F){var b=h0.test(F.target.tagName);(b||Gl)&&(F._gsapAllow=!0,Gl=b)},c0=function(F){iA(F)||(F={}),F.preventDefault=F.isNormalizer=F.allowClicks=!0,F.type||(F.type="wheel,touch"),F.debounce=!!F.debounce,F.id=F.id||"normalizer";var b=F,d=b.normalizeScrollX,f=b.momentum,Z=b.allowNestedScroll,EA=b.onRelease,gA,_A,KI=tA(F.target)||L,Eg=sA.core.globals().ScrollSmoother,XI=Eg&&Eg.get(),tI=zA&&(F.content&&tA(F.content)||XI&&F.content!==!1&&!XI.smooth()&&XI.content()),kA=aA(KI,IA),aI=aA(KI,AA),Lg=1,lg=(uA.isTouch&&qA.visualViewport?qA.visualViewport.scale*qA.visualViewport.width:qA.outerWidth)/qA.innerWidth,sC=0,Fg=W(f)?function(){return f(gA)}:function(){return f||2.8},JC,qI,zB=Sl(KI,F.type,!0,Z),Ug=function(){return qI=!1},pI=cg,iB=cg,yB=function(){_A=XB(KI,IA),iB=AI(zA?1:0,_A),d&&(pI=AI(0,XB(KI,AA))),JC=kE},oI=function(){tI._gsap.y=Ri(parseFloat(tI._gsap.y)+kA.offset)+"px",tI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(tI._gsap.y)+", 0, 1)",kA.offset=kA.cacheID=0},fC=function(){if(qI){requestAnimationFrame(Ug);var AC=Ri(gA.deltaY/2),IC=iB(kA.v-AC);if(tI&&IC!==kA.v+kA.offset){kA.offset=IC-kA.v;var $=Ri((parseFloat(tI&&tI._gsap.y)||0)-kA.offset);tI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+$+", 0, 1)",tI._gsap.y=$+"px",kA.cacheID=M.cache,VQ()}return!0}kA.offset&&oI(),qI=!0},MI,jQ,nC,EB,oB=function(){yB(),MI.isActive()&&MI.vars.scrollY>_A&&(kA()>_A?MI.progress(1)&&kA(_A):MI.resetTo("scrollY",_A))};return tI&&sA.set(tI,{y:"+=0"}),F.ignoreCheck=function(eg){return zA&&eg.type==="touchmove"&&fC()||Lg>1.05&&eg.type!=="touchstart"||gA.isGesturing||eg.touches&&eg.touches.length>1},F.onPress=function(){qI=!1;var eg=Lg;Lg=Ri((qA.visualViewport&&qA.visualViewport.scale||1)/lg),MI.pause(),eg!==Lg&&ar(KI,Lg>1.01?!0:d?!1:"x"),jQ=aI(),nC=kA(),yB(),JC=kE},F.onRelease=F.onGestureStart=function(eg,AC){if(kA.offset&&oI(),!AC)EB.restart(!0);else{M.cache++;var IC=Fg(),$,rC;d&&($=aI(),rC=$+IC*.05*-eg.velocityX/.227,IC*=wl(aI,$,rC,XB(KI,AA)),MI.vars.scrollX=pI(rC)),$=kA(),rC=$+IC*.05*-eg.velocityY/.227,IC*=wl(kA,$,rC,XB(KI,IA)),MI.vars.scrollY=iB(rC),MI.invalidate().duration(IC).play(.01),(zA&&MI.vars.scrollY>=_A||$>=_A-1)&&sA.to({},{onUpdate:oB,duration:IC})}EA&&EA(eg)},F.onWheel=function(){MI._ts&&MI.pause(),wA()-sC>1e3&&(JC=0,sC=wA())},F.onChange=function(eg,AC,IC,$,rC){if(kE!==JC&&yB(),AC&&d&&aI(pI($[2]===AC?jQ+(eg.startX-eg.x):aI()+AC-$[1])),IC){kA.offset&&oI();var UE=rC[2]===IC,fi=UE?nC+eg.startY-eg.y:kA()+IC-rC[1],$B=iB(fi);UE&&fi!==$B&&(nC+=$B-fi),kA($B)}(IC||AC)&&VQ()},F.onEnable=function(){ar(KI,d?!1:"x"),_I.addEventListener("refresh",oB),GC(qA,"resize",oB),kA.smooth&&(kA.target.style.scrollBehavior="auto",kA.smooth=aI.smooth=!1),zB.enable()},F.onDisable=function(){ar(KI,!0),yC(qA,"resize",oB),_I.removeEventListener("refresh",oB),zB.kill()},F.lockAxis=F.lockAxis!==!1,gA=new uA(F),gA.iOS=zA,zA&&!kA()&&kA(1),zA&&sA.ticker.add(cg),EB=gA._dc,MI=sA.to(gA,{ease:"power4",paused:!0,inherit:!1,scrollX:d?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:cl(kA,kA(),function(){return MI.pause()})},onUpdate:VQ,onComplete:EB.vars.onComplete}),gA};_I.sort=function(z){return xI.sort(z||function(F,b){return(F.vars.refreshPriority||0)*-1e6+F.start-(b.start+(b.vars.refreshPriority||0)*-1e6)})},_I.observe=function(z){return new uA(z)},_I.normalizeScroll=function(z){if(typeof z>"u")return lA;if(z===!0&&lA)return lA.enable();if(z===!1){lA&&lA.kill(),lA=z;return}var F=z instanceof uA?z:c0(z);return lA&&lA.target===F.target&&lA.kill(),dQ(F.target)&&(lA=F),F},_I.core={_getVelocityProp:pA,_inputObserver:Sl,_scrollers:M,_proxies:U,bridge:{ss:function(){XA||yE("scrollStart"),XA=wA()},ref:function(){return p}}},wE()&&sA.registerPlugin(_I),I.ScrollTrigger=_I,I.default=_I,typeof window>"u"||window!==I?Object.defineProperty(I,"__esModule",{value:!0}):delete window.default})})(aD,aD.exports);var $S=aD.exports,sD={exports:{}};(function(Q,A){(function(I,g){g(A)})(zS,function(I){/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var g,C,B,i,E,o,t,e,a=function(){return typeof window<"u"},s=function(){return g||a()&&(g=window.gsap)&&g.registerPlugin&&g},n=function(k){return typeof k=="string"},D=function(k){return typeof k=="function"},c=function(k,K){var q=K==="x"?"Width":"Height",y="scroll"+q,N="client"+q;return k===B||k===i||k===E?Math.max(i[y],E[y])-(B["inner"+q]||i[N]||E[N]):k[y]-k["offset"+q]},r=function(k,K){var q="scroll"+(K==="x"?"Left":"Top");return k===B&&(k.pageXOffset!=null?q="page"+K.toUpperCase()+"Offset":k=i[q]!=null?i:E),function(){return k[q]}},h=function(k,K,q,y){if(D(k)&&(k=k(K,q,y)),typeof k!="object")return n(k)&&k!=="max"&&k.charAt(1)!=="="?{x:k,y:k}:{y:k};if(k.nodeType)return{y:k,x:k};var N={},T;for(T in k)N[T]=T!=="onAutoKill"&&D(k[T])?k[T](K,q,y):k[T];return N},S=function(k,K){if(k=o(k)[0],!k||!k.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var q=k.getBoundingClientRect(),y=!K||K===B||K===E,N=y?{top:i.clientTop-(B.pageYOffset||i.scrollTop||E.scrollTop||0),left:i.clientLeft-(B.pageXOffset||i.scrollLeft||E.scrollLeft||0)}:K.getBoundingClientRect(),T={x:q.left-N.left,y:q.top-N.top};return!y&&K&&(T.x+=r(K,"x")(),T.y+=r(K,"y")()),T},l=function(k,K,q,y,N){return!isNaN(k)&&typeof k!="object"?parseFloat(k)-N:n(k)&&k.charAt(1)==="="?parseFloat(k.substr(2))*(k.charAt(0)==="-"?-1:1)+y-N:k==="max"?c(K,q)-N:Math.min(c(K,q),S(k,K)[q]-N)},G=function(){g=s(),a()&&g&&typeof document<"u"&&document.body&&(B=window,E=document.body,i=document.documentElement,o=g.utils.toArray,g.config({autoKillThreshold:7}),t=g.config(),C=1)},M={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(k){g=k,G()},init:function(k,K,q,y,N){C||G();var T=this,v=g.getProperty(k,"scrollSnapType");T.isWin=k===B,T.target=k,T.tween=q,K=h(K,y,k,N),T.vars=K,T.autoKill=!!K.autoKill,T.getX=r(k,"x"),T.getY=r(k,"y"),T.x=T.xPrev=T.getX(),T.y=T.yPrev=T.getY(),e||(e=g.core.globals().ScrollTrigger),g.getProperty(k,"scrollBehavior")==="smooth"&&g.set(k,{scrollBehavior:"auto"}),v&&v!=="none"&&(T.snap=1,T.snapInline=k.style.scrollSnapType,k.style.scrollSnapType="none"),K.x!=null?(T.add(T,"x",T.x,l(K.x,k,"x",T.x,K.offsetX||0),y,N),T._props.push("scrollTo_x")):T.skipX=1,K.y!=null?(T.add(T,"y",T.y,l(K.y,k,"y",T.y,K.offsetY||0),y,N),T._props.push("scrollTo_y")):T.skipY=1},render:function(k,K){for(var q=K._pt,y=K.target,N=K.tween,T=K.autoKill,v=K.xPrev,H=K.yPrev,V=K.isWin,_=K.snap,j=K.snapInline,AA,IA,tA,aA,pA;q;)q.r(k,q.d),q=q._next;AA=V||!K.skipX?K.getX():v,IA=V||!K.skipY?K.getY():H,tA=IA-H,aA=AA-v,pA=t.autoKillThreshold,K.x<0&&(K.x=0),K.y<0&&(K.y=0),T&&(!K.skipX&&(aA>pA||aA<-pA)&&AA<c(y,"x")&&(K.skipX=1),!K.skipY&&(tA>pA||tA<-pA)&&IA<c(y,"y")&&(K.skipY=1),K.skipX&&K.skipY&&(N.kill(),K.vars.onAutoKill&&K.vars.onAutoKill.apply(N,K.vars.onAutoKillParams||[]))),V?B.scrollTo(K.skipX?AA:K.x,K.skipY?IA:K.y):(K.skipY||(y.scrollTop=K.y),K.skipX||(y.scrollLeft=K.x)),_&&(k===1||k===0)&&(IA=y.scrollTop,AA=y.scrollLeft,j?y.style.scrollSnapType=j:y.style.removeProperty("scroll-snap-type"),y.scrollTop=IA+1,y.scrollLeft=AA+1,y.scrollTop=IA,y.scrollLeft=AA),K.xPrev=K.x,K.yPrev=K.y,e&&e.update()},kill:function(k){var K=k==="scrollTo",q=this._props.indexOf(k);return(K||k==="scrollTo_x")&&(this.skipX=1),(K||k==="scrollTo_y")&&(this.skipY=1),q>-1&&this._props.splice(q,1),!this._props.length}};M.max=c,M.getOffset=S,M.buildGetter=r,s()&&g.registerPlugin(M),I.ScrollToPlugin=M,I.default=M,Object.defineProperty(I,"__esModule",{value:!0})})})(sD,sD.exports);var U0=sD.exports;function oi(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function AG(Q,A){Q.prototype=Object.create(A.prototype),Q.prototype.constructor=Q,Q.__proto__=A}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var PB={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Dt={duration:.5,overwrite:!1,delay:0},Rh,VC,pg,QQ=1e8,Sg=1/QQ,nD=Math.PI*2,N0=nD/4,K0=0,IG=Math.sqrt,p0=Math.cos,F0=Math.sin,dC=function(A){return typeof A=="string"},_g=function(A){return typeof A=="function"},ki=function(A){return typeof A=="number"},Jh=function(A){return typeof A>"u"},vQ=function(A){return typeof A=="object"},KB=function(A){return A!==!1},fh=function(){return typeof window<"u"},Ta=function(A){return _g(A)||dC(A)},gG=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jC=Array.isArray,rD=/(?:-?\.?\d|\.)+/gi,CG=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nr=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,BG=/[+-]=-?[.\d]+/,QG=/[^,'"\[\]\s]+/gi,d0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jg,YQ,DD,uh,jB={},vs={},iG,EG=function(A){return(vs=no(A,jB))&&JB},qh=function(A,I){return console.warn("Invalid property",A,"set to",I,"Missing plugin? gsap.registerPlugin()")},Ge=function(A,I){return!I&&console.warn(A)},oG=function(A,I){return A&&(jB[A]=I)&&vs&&(vs[A]=I)||jB},ye=function(){return 0},R0={suppressEvents:!0,isStart:!0,kill:!1},us={suppressEvents:!0,kill:!1},J0={suppressEvents:!0},Yh={},IE=[],hD={},tG,bB={},rr={},Ml=30,qs=[],Lh="",mh=function(A){var I=A[0],g,C;if(vQ(I)||_g(I)||(A=[A]),!(g=(I._gsap||{}).harness)){for(C=qs.length;C--&&!qs[C].targetTest(I););g=qs[C]}for(C=A.length;C--;)A[C]&&(A[C]._gsap||(A[C]._gsap=new fG(A[C],g)))||A.splice(C,1);return A},Bo=function(A){return A._gsap||mh(iQ(A))[0]._gsap},eG=function(A,I,g){return(g=A[I])&&_g(g)?A[I]():Jh(g)&&A.getAttribute&&A.getAttribute(I)||g},pB=function(A,I){return(A=A.split(",")).forEach(I)||A},Xg=function(A){return Math.round(A*1e5)/1e5||0},KC=function(A){return Math.round(A*1e7)/1e7||0},at=function(A,I){var g=I.charAt(0),C=parseFloat(I.substr(2));return A=parseFloat(A),g==="+"?A+C:g==="-"?A-C:g==="*"?A*C:A/C},f0=function(A,I){for(var g=I.length,C=0;A.indexOf(I[C])<0&&++C<g;);return C<g},Zs=function(){var A=IE.length,I=IE.slice(0),g,C;for(hD={},IE.length=0,g=0;g<A;g++)C=I[g],C&&C._lazy&&(C.render(C._lazy[0],C._lazy[1],!0)._lazy=0)},aG=function(A,I,g,C){IE.length&&!VC&&Zs(),A.render(I,g,C||VC&&I<0&&(A._initted||A._startAt)),IE.length&&!VC&&Zs()},sG=function(A){var I=parseFloat(A);return(I||I===0)&&(A+"").match(QG).length<2?I:dC(A)?A.trim():A},nG=function(A){return A},oQ=function(A,I){for(var g in I)g in A||(A[g]=I[g]);return A},u0=function(A){return function(I,g){for(var C in g)C in I||C==="duration"&&A||C==="ease"||(I[C]=g[C])}},no=function(A,I){for(var g in I)A[g]=I[g];return A},Ul=function Q(A,I){for(var g in I)g!=="__proto__"&&g!=="constructor"&&g!=="prototype"&&(A[g]=vQ(I[g])?Q(A[g]||(A[g]={}),I[g]):I[g]);return A},Ps=function(A,I){var g={},C;for(C in A)C in I||(g[C]=A[C]);return g},se=function(A){var I=A.parent||Jg,g=A.keyframes?u0(jC(A.keyframes)):oQ;if(KB(A.inherit))for(;I;)g(A,I.vars.defaults),I=I.parent||I._dp;return A},q0=function(A,I){for(var g=A.length,C=g===I.length;C&&g--&&A[g]===I[g];);return g<0},rG=function(A,I,g,C,B){g===void 0&&(g="_first"),C===void 0&&(C="_last");var i=A[C],E;if(B)for(E=I[B];i&&i[B]>E;)i=i._prev;return i?(I._next=i._next,i._next=I):(I._next=A[g],A[g]=I),I._next?I._next._prev=I:A[C]=I,I._prev=i,I.parent=I._dp=A,I},rn=function(A,I,g,C){g===void 0&&(g="_first"),C===void 0&&(C="_last");var B=I._prev,i=I._next;B?B._next=i:A[g]===I&&(A[g]=i),i?i._prev=B:A[C]===I&&(A[C]=B),I._next=I._prev=I.parent=null},oE=function(A,I){A.parent&&(!I||A.parent.autoRemoveChildren)&&A.parent.remove&&A.parent.remove(A),A._act=0},Qo=function(A,I){if(A&&(!I||I._end>A._dur||I._start<0))for(var g=A;g;)g._dirty=1,g=g.parent;return A},Y0=function(A){for(var I=A.parent;I&&I.parent;)I._dirty=1,I.totalDuration(),I=I.parent;return A},cD=function(A,I,g,C){return A._startAt&&(VC?A._startAt.revert(us):A.vars.immediateRender&&!A.vars.autoRevert||A._startAt.render(I,!0,C))},L0=function Q(A){return!A||A._ts&&Q(A.parent)},Nl=function(A){return A._repeat?ht(A._tTime,A=A.duration()+A._rDelay)*A:0},ht=function(A,I){var g=Math.floor(A/=I);return A&&g===A?g-1:g},Ws=function(A,I){return(A-I._start)*I._ts+(I._ts>=0?0:I._dirty?I.totalDuration():I._tDur)},Dn=function(A){return A._end=KC(A._start+(A._tDur/Math.abs(A._ts||A._rts||Sg)||0))},hn=function(A,I){var g=A._dp;return g&&g.smoothChildTiming&&A._ts&&(A._start=KC(g._time-(A._ts>0?I/A._ts:((A._dirty?A.totalDuration():A._tDur)-I)/-A._ts)),Dn(A),g._dirty||Qo(g,A)),A},DG=function(A,I){var g;if((I._time||!I._dur&&I._initted||I._start<A._time&&(I._dur||!I.add))&&(g=Ws(A.rawTime(),I),(!I._dur||Ca(0,I.totalDuration(),g)-I._tTime>Sg)&&I.render(g,!0)),Qo(A,I)._dp&&A._initted&&A._time>=A._dur&&A._ts){if(A._dur<A.duration())for(g=A;g._dp;)g.rawTime()>=0&&g.totalTime(g._tTime),g=g._dp;A._zTime=-Sg}},mQ=function(A,I,g,C){return I.parent&&oE(I),I._start=KC((ki(g)?g:g||A!==Jg?gQ(A,g,I):A._time)+I._delay),I._end=KC(I._start+(I.totalDuration()/Math.abs(I.timeScale())||0)),rG(A,I,"_first","_last",A._sort?"_start":0),lD(I)||(A._recent=I),C||DG(A,I),A._ts<0&&hn(A,A._tTime),A},hG=function(A,I){return(jB.ScrollTrigger||qh("scrollTrigger",I))&&jB.ScrollTrigger.create(I,A)},cG=function(A,I,g,C,B){if(Th(A,I,B),!A._initted)return 1;if(!g&&A._pt&&!VC&&(A._dur&&A.vars.lazy!==!1||!A._dur&&A.vars.lazy)&&tG!==xB.frame)return IE.push(A),A._lazy=[B,C],1},m0=function Q(A){var I=A.parent;return I&&I._ts&&I._initted&&!I._lock&&(I.rawTime()<0||Q(I))},lD=function(A){var I=A.data;return I==="isFromStart"||I==="isStart"},H0=function(A,I,g,C){var B=A.ratio,i=I<0||!I&&(!A._start&&m0(A)&&!(!A._initted&&lD(A))||(A._ts<0||A._dp._ts<0)&&!lD(A))?0:1,E=A._rDelay,o=0,t,e,a;if(E&&A._repeat&&(o=Ca(0,A._tDur,I),e=ht(o,E),A._yoyo&&e&1&&(i=1-i),e!==ht(A._tTime,E)&&(B=1-i,A.vars.repeatRefresh&&A._initted&&A.invalidate())),i!==B||VC||C||A._zTime===Sg||!I&&A._zTime){if(!A._initted&&cG(A,I,C,g,o))return;for(a=A._zTime,A._zTime=I||(g?Sg:0),g||(g=I&&!a),A.ratio=i,A._from&&(i=1-i),A._time=0,A._tTime=o,t=A._pt;t;)t.r(i,t.d),t=t._next;I<0&&cD(A,I,g,!0),A._onUpdate&&!g&&vB(A,"onUpdate"),o&&A._repeat&&!g&&A.parent&&vB(A,"onRepeat"),(I>=A._tDur||I<0)&&A.ratio===i&&(i&&oE(A,1),!g&&!VC&&(vB(A,i?"onComplete":"onReverseComplete",!0),A._prom&&A._prom()))}else A._zTime||(A._zTime=I)},T0=function(A,I,g){var C;if(g>I)for(C=A._first;C&&C._start<=g;){if(C.data==="isPause"&&C._start>I)return C;C=C._next}else for(C=A._last;C&&C._start>=g;){if(C.data==="isPause"&&C._start<I)return C;C=C._prev}},ct=function(A,I,g,C){var B=A._repeat,i=KC(I)||0,E=A._tTime/A._tDur;return E&&!C&&(A._time*=i/A._dur),A._dur=i,A._tDur=B?B<0?1e10:KC(i*(B+1)+A._rDelay*B):i,E>0&&!C&&hn(A,A._tTime=A._tDur*E),A.parent&&Dn(A),g||Qo(A.parent,A),A},Kl=function(A){return A instanceof DB?Qo(A):ct(A,A._dur)},b0={_start:0,endTime:ye,totalDuration:ye},gQ=function Q(A,I,g){var C=A.labels,B=A._recent||b0,i=A.duration()>=QQ?B.endTime(!1):A._dur,E,o,t;return dC(I)&&(isNaN(I)||I in C)?(o=I.charAt(0),t=I.substr(-1)==="%",E=I.indexOf("="),o==="<"||o===">"?(E>=0&&(I=I.replace(/=/,"")),(o==="<"?B._start:B.endTime(B._repeat>=0))+(parseFloat(I.substr(1))||0)*(t?(E<0?B:g).totalDuration()/100:1)):E<0?(I in C||(C[I]=i),C[I]):(o=parseFloat(I.charAt(E-1)+I.substr(E+1)),t&&g&&(o=o/100*(jC(g)?g[0]:g).totalDuration()),E>1?Q(A,I.substr(0,E-1),g)+o:i+o)):I==null?i:+I},ne=function(A,I,g){var C=ki(I[1]),B=(C?2:1)+(A<2?0:1),i=I[B],E,o;if(C&&(i.duration=I[1]),i.parent=g,A){for(E=i,o=g;o&&!("immediateRender"in E);)E=o.vars.defaults||{},o=KB(o.vars.inherit)&&o.parent;i.immediateRender=KB(E.immediateRender),A<2?i.runBackwards=1:i.startAt=I[B-1]}return new EC(I[0],i,I[B+1])},rE=function(A,I){return A||A===0?I(A):I},Ca=function(A,I,g){return g<A?A:g>I?I:g},PC=function(A,I){return!dC(A)||!(I=d0.exec(A))?"":I[1]},x0=function(A,I,g){return rE(g,function(C){return Ca(A,I,C)})},wD=[].slice,lG=function(A,I){return A&&vQ(A)&&"length"in A&&(!I&&!A.length||A.length-1 in A&&vQ(A[0]))&&!A.nodeType&&A!==YQ},_0=function(A,I,g){return g===void 0&&(g=[]),A.forEach(function(C){var B;return dC(C)&&!I||lG(C,1)?(B=g).push.apply(B,iQ(C)):g.push(C)})||g},iQ=function(A,I,g){return pg&&!I&&pg.selector?pg.selector(A):dC(A)&&!g&&(DD||!lt())?wD.call((I||uh).querySelectorAll(A),0):jC(A)?_0(A,g):lG(A)?wD.call(A,0):A?[A]:[]},SD=function(A){return A=iQ(A)[0]||Ge("Invalid scope")||{},function(I){var g=A.current||A.nativeElement||A;return iQ(I,g.querySelectorAll?g:g===A?Ge("Invalid scope")||uh.createElement("div"):A)}},wG=function(A){return A.sort(function(){return .5-Math.random()})},SG=function(A){if(_g(A))return A;var I=vQ(A)?A:{each:A},g=io(I.ease),C=I.from||0,B=parseFloat(I.base)||0,i={},E=C>0&&C<1,o=isNaN(C)||E,t=I.axis,e=C,a=C;return dC(C)?e=a={center:.5,edges:.5,end:1}[C]||0:!E&&o&&(e=C[0],a=C[1]),function(s,n,D){var c=(D||I).length,r=i[c],h,S,l,G,M,U,k,K,q;if(!r){if(q=I.grid==="auto"?0:(I.grid||[1,QQ])[1],!q){for(k=-QQ;k<(k=D[q++].getBoundingClientRect().left)&&q<c;);q<c&&q--}for(r=i[c]=[],h=o?Math.min(q,c)*e-.5:C%q,S=q===QQ?0:o?c*a/q-.5:C/q|0,k=0,K=QQ,U=0;U<c;U++)l=U%q-h,G=S-(U/q|0),r[U]=M=t?Math.abs(t==="y"?G:l):IG(l*l+G*G),M>k&&(k=M),M<K&&(K=M);C==="random"&&wG(r),r.max=k-K,r.min=K,r.v=c=(parseFloat(I.amount)||parseFloat(I.each)*(q>c?c-1:t?t==="y"?c/q:q:Math.max(q,c/q))||0)*(C==="edges"?-1:1),r.b=c<0?B-c:B,r.u=PC(I.amount||I.each)||0,g=g&&c<0?dG(g):g}return c=(r[s]-r.min)/r.max||0,KC(r.b+(g?g(c):c)*r.v)+r.u}},GD=function(A){var I=Math.pow(10,((A+"").split(".")[1]||"").length);return function(g){var C=KC(Math.round(parseFloat(g)/A)*A*I);return(C-C%1)/I+(ki(g)?0:PC(g))}},GG=function(A,I){var g=jC(A),C,B;return!g&&vQ(A)&&(C=g=A.radius||QQ,A.values?(A=iQ(A.values),(B=!ki(A[0]))&&(C*=C)):A=GD(A.increment)),rE(I,g?_g(A)?function(i){return B=A(i),Math.abs(B-i)<=C?B:i}:function(i){for(var E=parseFloat(B?i.x:i),o=parseFloat(B?i.y:0),t=QQ,e=0,a=A.length,s,n;a--;)B?(s=A[a].x-E,n=A[a].y-o,s=s*s+n*n):s=Math.abs(A[a]-E),s<t&&(t=s,e=a);return e=!C||t<=C?A[e]:i,B||e===i||ki(i)?e:e+PC(i)}:GD(A))},yG=function(A,I,g,C){return rE(jC(A)?!I:g===!0?!!(g=0):!C,function(){return jC(A)?A[~~(Math.random()*A.length)]:(g=g||1e-5)&&(C=g<1?Math.pow(10,(g+"").length-2):1)&&Math.floor(Math.round((A-g/2+Math.random()*(I-A+g*.99))/g)*g*C)/C})},O0=function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];return function(C){return I.reduce(function(B,i){return i(B)},C)}},v0=function(A,I){return function(g){return A(parseFloat(g))+(I||PC(g))}},Z0=function(A,I,g){return MG(A,I,0,1,g)},kG=function(A,I,g){return rE(g,function(C){return A[~~I(C)]})},P0=function Q(A,I,g){var C=I-A;return jC(A)?kG(A,Q(0,A.length),I):rE(g,function(B){return(C+(B-A)%C)%C+A})},W0=function Q(A,I,g){var C=I-A,B=C*2;return jC(A)?kG(A,Q(0,A.length-1),I):rE(g,function(i){return i=(B+(i-A)%B)%B||0,A+(i>C?B-i:i)})},ke=function(A){for(var I=0,g="",C,B,i,E;~(C=A.indexOf("random(",I));)i=A.indexOf(")",C),E=A.charAt(C+7)==="[",B=A.substr(C+7,i-C-7).match(E?QG:rD),g+=A.substr(I,C-I)+yG(E?B:+B[0],E?0:+B[1],+B[2]||1e-5),I=i+1;return g+A.substr(I,A.length-I)},MG=function(A,I,g,C,B){var i=I-A,E=C-g;return rE(B,function(o){return g+((o-A)/i*E||0)})},V0=function Q(A,I,g,C){var B=isNaN(A+I)?0:function(n){return(1-n)*A+n*I};if(!B){var i=dC(A),E={},o,t,e,a,s;if(g===!0&&(C=1)&&(g=null),i)A={p:A},I={p:I};else if(jC(A)&&!jC(I)){for(e=[],a=A.length,s=a-2,t=1;t<a;t++)e.push(Q(A[t-1],A[t]));a--,B=function(D){D*=a;var c=Math.min(s,~~D);return e[c](D-c)},g=I}else C||(A=no(jC(A)?[]:{},A));if(!e){for(o in I)Hh.call(E,A,o,"get",I[o]);B=function(D){return _h(D,E)||(i?A.p:A)}}}return rE(g,B)},pl=function(A,I,g){var C=A.labels,B=QQ,i,E,o;for(i in C)E=C[i]-I,E<0==!!g&&E&&B>(E=Math.abs(E))&&(o=i,B=E);return o},vB=function(A,I,g){var C=A.vars,B=C[I],i=pg,E=A._ctx,o,t,e;if(B)return o=C[I+"Params"],t=C.callbackScope||A,g&&IE.length&&Zs(),E&&(pg=E),e=o?B.apply(t,o):B.call(t),pg=i,e},Be=function(A){return oE(A),A.scrollTrigger&&A.scrollTrigger.kill(!!VC),A.progress()<1&&vB(A,"onInterrupt"),A},it,UG=[],NG=function(A){if(A)if(A=!A.name&&A.default||A,fh()||A.headless){var I=A.name,g=_g(A),C=I&&!g&&A.init?function(){this._props=[]}:A,B={init:ye,render:_h,add:Hh,kill:aU,modifier:eU,rawVars:0},i={targetTest:0,get:0,getSetter:xh,aliases:{},register:0};if(lt(),A!==C){if(bB[I])return;oQ(C,oQ(Ps(A,B),i)),no(C.prototype,no(B,Ps(A,i))),bB[C.prop=I]=C,A.targetTest&&(qs.push(C),Yh[I]=1),I=(I==="css"?"CSS":I.charAt(0).toUpperCase()+I.substr(1))+"Plugin"}oG(I,C),A.register&&A.register(JB,C,FB)}else UG.push(A)},sg=255,Qe={aqua:[0,sg,sg],lime:[0,sg,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,sg],navy:[0,0,128],white:[sg,sg,sg],olive:[128,128,0],yellow:[sg,sg,0],orange:[sg,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[sg,0,0],pink:[sg,192,203],cyan:[0,sg,sg],transparent:[sg,sg,sg,0]},Dr=function(A,I,g){return A+=A<0?1:A>1?-1:0,(A*6<1?I+(g-I)*A*6:A<.5?g:A*3<2?I+(g-I)*(2/3-A)*6:I)*sg+.5|0},KG=function(A,I,g){var C=A?ki(A)?[A>>16,A>>8&sg,A&sg]:0:Qe.black,B,i,E,o,t,e,a,s,n,D;if(!C){if(A.substr(-1)===","&&(A=A.substr(0,A.length-1)),Qe[A])C=Qe[A];else if(A.charAt(0)==="#"){if(A.length<6&&(B=A.charAt(1),i=A.charAt(2),E=A.charAt(3),A="#"+B+B+i+i+E+E+(A.length===5?A.charAt(4)+A.charAt(4):"")),A.length===9)return C=parseInt(A.substr(1,6),16),[C>>16,C>>8&sg,C&sg,parseInt(A.substr(7),16)/255];A=parseInt(A.substr(1),16),C=[A>>16,A>>8&sg,A&sg]}else if(A.substr(0,3)==="hsl"){if(C=D=A.match(rD),!I)o=+C[0]%360/360,t=+C[1]/100,e=+C[2]/100,i=e<=.5?e*(t+1):e+t-e*t,B=e*2-i,C.length>3&&(C[3]*=1),C[0]=Dr(o+1/3,B,i),C[1]=Dr(o,B,i),C[2]=Dr(o-1/3,B,i);else if(~A.indexOf("="))return C=A.match(CG),g&&C.length<4&&(C[3]=1),C}else C=A.match(rD)||Qe.transparent;C=C.map(Number)}return I&&!D&&(B=C[0]/sg,i=C[1]/sg,E=C[2]/sg,a=Math.max(B,i,E),s=Math.min(B,i,E),e=(a+s)/2,a===s?o=t=0:(n=a-s,t=e>.5?n/(2-a-s):n/(a+s),o=a===B?(i-E)/n+(i<E?6:0):a===i?(E-B)/n+2:(B-i)/n+4,o*=60),C[0]=~~(o+.5),C[1]=~~(t*100+.5),C[2]=~~(e*100+.5)),g&&C.length<4&&(C[3]=1),C},pG=function(A){var I=[],g=[],C=-1;return A.split(gE).forEach(function(B){var i=B.match(Qt)||[];I.push.apply(I,i),g.push(C+=i.length+1)}),I.c=g,I},Fl=function(A,I,g){var C="",B=(A+C).match(gE),i=I?"hsla(":"rgba(",E=0,o,t,e,a;if(!B)return A;if(B=B.map(function(s){return(s=KG(s,I,1))&&i+(I?s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:s.join(","))+")"}),g&&(e=pG(A),o=g.c,o.join(C)!==e.c.join(C)))for(t=A.replace(gE,"1").split(Qt),a=t.length-1;E<a;E++)C+=t[E]+(~o.indexOf(E)?B.shift()||i+"0,0,0,0)":(e.length?e:B.length?B:g).shift());if(!t)for(t=A.split(gE),a=t.length-1;E<a;E++)C+=t[E]+B[E];return C+t[a]},gE=function(){var Q="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",A;for(A in Qe)Q+="|"+A+"\\b";return new RegExp(Q+")","gi")}(),j0=/hsl[a]?\(/,FG=function(A){var I=A.join(" "),g;if(gE.lastIndex=0,gE.test(I))return g=j0.test(I),A[1]=Fl(A[1],g),A[0]=Fl(A[0],g,pG(A[1])),!0},Me,xB=function(){var Q=Date.now,A=500,I=33,g=Q(),C=g,B=1e3/240,i=B,E=[],o,t,e,a,s,n,D=function c(r){var h=Q()-C,S=r===!0,l,G,M,U;if((h>A||h<0)&&(g+=h-I),C+=h,M=C-g,l=M-i,(l>0||S)&&(U=++a.frame,s=M-a.time*1e3,a.time=M=M/1e3,i+=l+(l>=B?4:B-l),G=1),S||(o=t(c)),G)for(n=0;n<E.length;n++)E[n](M,s,U,r)};return a={time:0,frame:0,tick:function(){D(!0)},deltaRatio:function(r){return s/(1e3/(r||60))},wake:function(){iG&&(!DD&&fh()&&(YQ=DD=window,uh=YQ.document||{},jB.gsap=JB,(YQ.gsapVersions||(YQ.gsapVersions=[])).push(JB.version),EG(vs||YQ.GreenSockGlobals||!YQ.gsap&&YQ||{}),UG.forEach(NG)),e=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&a.sleep(),t=e||function(r){return setTimeout(r,i-a.time*1e3+1|0)},Me=1,D(2))},sleep:function(){(e?cancelAnimationFrame:clearTimeout)(o),Me=0,t=ye},lagSmoothing:function(r,h){A=r||1/0,I=Math.min(h||33,A)},fps:function(r){B=1e3/(r||240),i=a.time*1e3+B},add:function(r,h,S){var l=h?function(G,M,U,k){r(G,M,U,k),a.remove(l)}:r;return a.remove(r),E[S?"unshift":"push"](l),lt(),l},remove:function(r,h){~(h=E.indexOf(r))&&E.splice(h,1)&&n>=h&&n--},_listeners:E},a}(),lt=function(){return!Me&&xB.wake()},WI={},X0=/^[\d.\-M][\d.\-,\s]/,z0=/["']/g,$0=function(A){for(var I={},g=A.substr(1,A.length-3).split(":"),C=g[0],B=1,i=g.length,E,o,t;B<i;B++)o=g[B],E=B!==i-1?o.lastIndexOf(","):o.length,t=o.substr(0,E),I[C]=isNaN(t)?t.replace(z0,"").trim():+t,C=o.substr(E+1).trim();return I},AU=function(A){var I=A.indexOf("(")+1,g=A.indexOf(")"),C=A.indexOf("(",I);return A.substring(I,~C&&C<g?A.indexOf(")",g+1):g)},IU=function(A){var I=(A+"").split("("),g=WI[I[0]];return g&&I.length>1&&g.config?g.config.apply(null,~A.indexOf("{")?[$0(I[1])]:AU(A).split(",").map(sG)):WI._CE&&X0.test(A)?WI._CE("",A):g},dG=function(A){return function(I){return 1-A(1-I)}},RG=function Q(A,I){for(var g=A._first,C;g;)g instanceof DB?Q(g,I):g.vars.yoyoEase&&(!g._yoyo||!g._repeat)&&g._yoyo!==I&&(g.timeline?Q(g.timeline,I):(C=g._ease,g._ease=g._yEase,g._yEase=C,g._yoyo=I)),g=g._next},io=function(A,I){return A&&(_g(A)?A:WI[A]||IU(A))||I},Go=function(A,I,g,C){g===void 0&&(g=function(o){return 1-I(1-o)}),C===void 0&&(C=function(o){return o<.5?I(o*2)/2:1-I((1-o)*2)/2});var B={easeIn:I,easeOut:g,easeInOut:C},i;return pB(A,function(E){WI[E]=jB[E]=B,WI[i=E.toLowerCase()]=g;for(var o in B)WI[i+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=WI[E+"."+o]=B[o]}),B},JG=function(A){return function(I){return I<.5?(1-A(1-I*2))/2:.5+A((I-.5)*2)/2}},hr=function Q(A,I,g){var C=I>=1?I:1,B=(g||(A?.3:.45))/(I<1?I:1),i=B/nD*(Math.asin(1/C)||0),E=function(e){return e===1?1:C*Math.pow(2,-10*e)*F0((e-i)*B)+1},o=A==="out"?E:A==="in"?function(t){return 1-E(1-t)}:JG(E);return B=nD/B,o.config=function(t,e){return Q(A,t,e)},o},cr=function Q(A,I){I===void 0&&(I=1.70158);var g=function(i){return i?--i*i*((I+1)*i+I)+1:0},C=A==="out"?g:A==="in"?function(B){return 1-g(1-B)}:JG(g);return C.config=function(B){return Q(A,B)},C};pB("Linear,Quad,Cubic,Quart,Quint,Strong",function(Q,A){var I=A<5?A+1:A;Go(Q+",Power"+(I-1),A?function(g){return Math.pow(g,I)}:function(g){return g},function(g){return 1-Math.pow(1-g,I)},function(g){return g<.5?Math.pow(g*2,I)/2:1-Math.pow((1-g)*2,I)/2})});WI.Linear.easeNone=WI.none=WI.Linear.easeIn;Go("Elastic",hr("in"),hr("out"),hr());(function(Q,A){var I=1/A,g=2*I,C=2.5*I,B=function(E){return E<I?Q*E*E:E<g?Q*Math.pow(E-1.5/A,2)+.75:E<C?Q*(E-=2.25/A)*E+.9375:Q*Math.pow(E-2.625/A,2)+.984375};Go("Bounce",function(i){return 1-B(1-i)},B)})(7.5625,2.75);Go("Expo",function(Q){return Q?Math.pow(2,10*(Q-1)):0});Go("Circ",function(Q){return-(IG(1-Q*Q)-1)});Go("Sine",function(Q){return Q===1?1:-p0(Q*N0)+1});Go("Back",cr("in"),cr("out"),cr());WI.SteppedEase=WI.steps=jB.SteppedEase={config:function(A,I){A===void 0&&(A=1);var g=1/A,C=A+(I?0:1),B=I?1:0,i=1-Sg;return function(E){return((C*Ca(0,i,E)|0)+B)*g}}};Dt.ease=WI["quad.out"];pB("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(Q){return Lh+=Q+","+Q+"Params,"});var fG=function(A,I){this.id=K0++,A._gsap=this,this.target=A,this.harness=I,this.get=I?I.get:eG,this.set=I?I.getSetter:xh},Ue=function(){function Q(I){this.vars=I,this._delay=+I.delay||0,(this._repeat=I.repeat===1/0?-2:I.repeat||0)&&(this._rDelay=I.repeatDelay||0,this._yoyo=!!I.yoyo||!!I.yoyoEase),this._ts=1,ct(this,+I.duration,1,1),this.data=I.data,pg&&(this._ctx=pg,pg.data.push(this)),Me||xB.wake()}var A=Q.prototype;return A.delay=function(g){return g||g===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+g-this._delay),this._delay=g,this):this._delay},A.duration=function(g){return arguments.length?this.totalDuration(this._repeat>0?g+(g+this._rDelay)*this._repeat:g):this.totalDuration()&&this._dur},A.totalDuration=function(g){return arguments.length?(this._dirty=0,ct(this,this._repeat<0?g:(g-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},A.totalTime=function(g,C){if(lt(),!arguments.length)return this._tTime;var B=this._dp;if(B&&B.smoothChildTiming&&this._ts){for(hn(this,g),!B._dp||B.parent||DG(B,this);B&&B.parent;)B.parent._time!==B._start+(B._ts>=0?B._tTime/B._ts:(B.totalDuration()-B._tTime)/-B._ts)&&B.totalTime(B._tTime,!0),B=B.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&g<this._tDur||this._ts<0&&g>0||!this._tDur&&!g)&&mQ(this._dp,this,this._start-this._delay)}return(this._tTime!==g||!this._dur&&!C||this._initted&&Math.abs(this._zTime)===Sg||!g&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=g),aG(this,g,C)),this},A.time=function(g,C){return arguments.length?this.totalTime(Math.min(this.totalDuration(),g+Nl(this))%(this._dur+this._rDelay)||(g?this._dur:0),C):this._time},A.totalProgress=function(g,C){return arguments.length?this.totalTime(this.totalDuration()*g,C):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},A.progress=function(g,C){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-g:g)+Nl(this),C):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},A.iteration=function(g,C){var B=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(g-1)*B,C):this._repeat?ht(this._tTime,B)+1:1},A.timeScale=function(g,C){if(!arguments.length)return this._rts===-Sg?0:this._rts;if(this._rts===g)return this;var B=this.parent&&this._ts?Ws(this.parent._time,this):this._tTime;return this._rts=+g||0,this._ts=this._ps||g===-Sg?0:this._rts,this.totalTime(Ca(-Math.abs(this._delay),this._tDur,B),C!==!1),Dn(this),Y0(this)},A.paused=function(g){return arguments.length?(this._ps!==g&&(this._ps=g,g?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Sg&&(this._tTime-=Sg)))),this):this._ps},A.startTime=function(g){if(arguments.length){this._start=g;var C=this.parent||this._dp;return C&&(C._sort||!this.parent)&&mQ(C,this,g-this._delay),this}return this._start},A.endTime=function(g){return this._start+(KB(g)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},A.rawTime=function(g){var C=this.parent||this._dp;return C?g&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ws(C.rawTime(g),this):this._tTime:this._tTime},A.revert=function(g){g===void 0&&(g=J0);var C=VC;return VC=g,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(g),this.totalTime(-.01,g.suppressEvents)),this.data!=="nested"&&g.kill!==!1&&this.kill(),VC=C,this},A.globalTime=function(g){for(var C=this,B=arguments.length?g:C.rawTime();C;)B=C._start+B/(Math.abs(C._ts)||1),C=C._dp;return!this.parent&&this._sat?this._sat.globalTime(g):B},A.repeat=function(g){return arguments.length?(this._repeat=g===1/0?-2:g,Kl(this)):this._repeat===-2?1/0:this._repeat},A.repeatDelay=function(g){if(arguments.length){var C=this._time;return this._rDelay=g,Kl(this),C?this.time(C):this}return this._rDelay},A.yoyo=function(g){return arguments.length?(this._yoyo=g,this):this._yoyo},A.seek=function(g,C){return this.totalTime(gQ(this,g),KB(C))},A.restart=function(g,C){return this.play().totalTime(g?-this._delay:0,KB(C))},A.play=function(g,C){return g!=null&&this.seek(g,C),this.reversed(!1).paused(!1)},A.reverse=function(g,C){return g!=null&&this.seek(g||this.totalDuration(),C),this.reversed(!0).paused(!1)},A.pause=function(g,C){return g!=null&&this.seek(g,C),this.paused(!0)},A.resume=function(){return this.paused(!1)},A.reversed=function(g){return arguments.length?(!!g!==this.reversed()&&this.timeScale(-this._rts||(g?-Sg:0)),this):this._rts<0},A.invalidate=function(){return this._initted=this._act=0,this._zTime=-Sg,this},A.isActive=function(){var g=this.parent||this._dp,C=this._start,B;return!!(!g||this._ts&&this._initted&&g.isActive()&&(B=g.rawTime(!0))>=C&&B<this.endTime(!0)-Sg)},A.eventCallback=function(g,C,B){var i=this.vars;return arguments.length>1?(C?(i[g]=C,B&&(i[g+"Params"]=B),g==="onUpdate"&&(this._onUpdate=C)):delete i[g],this):i[g]},A.then=function(g){var C=this;return new Promise(function(B){var i=_g(g)?g:nG,E=function(){var t=C.then;C.then=null,_g(i)&&(i=i(C))&&(i.then||i===C)&&(C.then=t),B(i),C.then=t};C._initted&&C.totalProgress()===1&&C._ts>=0||!C._tTime&&C._ts<0?E():C._prom=E})},A.kill=function(){Be(this)},Q}();oQ(Ue.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Sg,_prom:0,_ps:!1,_rts:1});var DB=function(Q){AG(A,Q);function A(g,C){var B;return g===void 0&&(g={}),B=Q.call(this,g)||this,B.labels={},B.smoothChildTiming=!!g.smoothChildTiming,B.autoRemoveChildren=!!g.autoRemoveChildren,B._sort=KB(g.sortChildren),Jg&&mQ(g.parent||Jg,oi(B),C),g.reversed&&B.reverse(),g.paused&&B.paused(!0),g.scrollTrigger&&hG(oi(B),g.scrollTrigger),B}var I=A.prototype;return I.to=function(C,B,i){return ne(0,arguments,this),this},I.from=function(C,B,i){return ne(1,arguments,this),this},I.fromTo=function(C,B,i,E){return ne(2,arguments,this),this},I.set=function(C,B,i){return B.duration=0,B.parent=this,se(B).repeatDelay||(B.repeat=0),B.immediateRender=!!B.immediateRender,new EC(C,B,gQ(this,i),1),this},I.call=function(C,B,i){return mQ(this,EC.delayedCall(0,C,B),i)},I.staggerTo=function(C,B,i,E,o,t,e){return i.duration=B,i.stagger=i.stagger||E,i.onComplete=t,i.onCompleteParams=e,i.parent=this,new EC(C,i,gQ(this,o)),this},I.staggerFrom=function(C,B,i,E,o,t,e){return i.runBackwards=1,se(i).immediateRender=KB(i.immediateRender),this.staggerTo(C,B,i,E,o,t,e)},I.staggerFromTo=function(C,B,i,E,o,t,e,a){return E.startAt=i,se(E).immediateRender=KB(E.immediateRender),this.staggerTo(C,B,E,o,t,e,a)},I.render=function(C,B,i){var E=this._time,o=this._dirty?this.totalDuration():this._tDur,t=this._dur,e=C<=0?0:KC(C),a=this._zTime<0!=C<0&&(this._initted||!t),s,n,D,c,r,h,S,l,G,M,U,k;if(this!==Jg&&e>o&&C>=0&&(e=o),e!==this._tTime||i||a){if(E!==this._time&&t&&(e+=this._time-E,C+=this._time-E),s=e,G=this._start,l=this._ts,h=!l,a&&(t||(E=this._zTime),(C||!B)&&(this._zTime=C)),this._repeat){if(U=this._yoyo,r=t+this._rDelay,this._repeat<-1&&C<0)return this.totalTime(r*100+C,B,i);if(s=KC(e%r),e===o?(c=this._repeat,s=t):(c=~~(e/r),c&&c===e/r&&(s=t,c--),s>t&&(s=t)),M=ht(this._tTime,r),!E&&this._tTime&&M!==c&&this._tTime-M*r-this._dur<=0&&(M=c),U&&c&1&&(s=t-s,k=1),c!==M&&!this._lock){var K=U&&M&1,q=K===(U&&c&1);if(c<M&&(K=!K),E=K?0:e%t?t:e,this._lock=1,this.render(E||(k?0:KC(c*r)),B,!t)._lock=0,this._tTime=e,!B&&this.parent&&vB(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),E&&E!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(t=this._dur,o=this._tDur,q&&(this._lock=2,E=K?t:-1e-4,this.render(E,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;RG(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=T0(this,KC(E),KC(s)),S&&(e-=s-(s=S._start))),this._tTime=e,this._time=s,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=C,E=0),!E&&s&&!B&&!c&&(vB(this,"onStart"),this._tTime!==e))return this;if(s>=E&&C>=0)for(n=this._first;n;){if(D=n._next,(n._act||s>=n._start)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(s-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(s-n._start)*n._ts,B,i),s!==this._time||!this._ts&&!h){S=0,D&&(e+=this._zTime=-Sg);break}}n=D}else{n=this._last;for(var y=C<0?C:s;n;){if(D=n._prev,(n._act||y<=n._end)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(y-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(y-n._start)*n._ts,B,i||VC&&(n._initted||n._startAt)),s!==this._time||!this._ts&&!h){S=0,D&&(e+=this._zTime=y?-Sg:Sg);break}}n=D}}if(S&&!B&&(this.pause(),S.render(s>=E?0:-Sg)._zTime=s>=E?1:-1,this._ts))return this._start=G,Dn(this),this.render(C,B,i);this._onUpdate&&!B&&vB(this,"onUpdate",!0),(e===o&&this._tTime>=this.totalDuration()||!e&&E)&&(G===this._start||Math.abs(l)!==Math.abs(this._ts))&&(this._lock||((C||!t)&&(e===o&&this._ts>0||!e&&this._ts<0)&&oE(this,1),!B&&!(C<0&&!E)&&(e||E||!o)&&(vB(this,e===o&&C>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(e<o&&this.timeScale()>0)&&this._prom())))}return this},I.add=function(C,B){var i=this;if(ki(B)||(B=gQ(this,B,C)),!(C instanceof Ue)){if(jC(C))return C.forEach(function(E){return i.add(E,B)}),this;if(dC(C))return this.addLabel(C,B);if(_g(C))C=EC.delayedCall(0,C);else return this}return this!==C?mQ(this,C,B):this},I.getChildren=function(C,B,i,E){C===void 0&&(C=!0),B===void 0&&(B=!0),i===void 0&&(i=!0),E===void 0&&(E=-QQ);for(var o=[],t=this._first;t;)t._start>=E&&(t instanceof EC?B&&o.push(t):(i&&o.push(t),C&&o.push.apply(o,t.getChildren(!0,B,i)))),t=t._next;return o},I.getById=function(C){for(var B=this.getChildren(1,1,1),i=B.length;i--;)if(B[i].vars.id===C)return B[i]},I.remove=function(C){return dC(C)?this.removeLabel(C):_g(C)?this.killTweensOf(C):(rn(this,C),C===this._recent&&(this._recent=this._last),Qo(this))},I.totalTime=function(C,B){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=KC(xB.time-(this._ts>0?C/this._ts:(this.totalDuration()-C)/-this._ts))),Q.prototype.totalTime.call(this,C,B),this._forcing=0,this):this._tTime},I.addLabel=function(C,B){return this.labels[C]=gQ(this,B),this},I.removeLabel=function(C){return delete this.labels[C],this},I.addPause=function(C,B,i){var E=EC.delayedCall(0,B||ye,i);return E.data="isPause",this._hasPause=1,mQ(this,E,gQ(this,C))},I.removePause=function(C){var B=this._first;for(C=gQ(this,C);B;)B._start===C&&B.data==="isPause"&&oE(B),B=B._next},I.killTweensOf=function(C,B,i){for(var E=this.getTweensOf(C,i),o=E.length;o--;)zi!==E[o]&&E[o].kill(C,B);return this},I.getTweensOf=function(C,B){for(var i=[],E=iQ(C),o=this._first,t=ki(B),e;o;)o instanceof EC?f0(o._targets,E)&&(t?(!zi||o._initted&&o._ts)&&o.globalTime(0)<=B&&o.globalTime(o.totalDuration())>B:!B||o.isActive())&&i.push(o):(e=o.getTweensOf(E,B)).length&&i.push.apply(i,e),o=o._next;return i},I.tweenTo=function(C,B){B=B||{};var i=this,E=gQ(i,C),o=B,t=o.startAt,e=o.onStart,a=o.onStartParams,s=o.immediateRender,n,D=EC.to(i,oQ({ease:B.ease||"none",lazy:!1,immediateRender:!1,time:E,overwrite:"auto",duration:B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale())||Sg,onStart:function(){if(i.pause(),!n){var r=B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale());D._dur!==r&&ct(D,r,0,1).render(D._time,!0,!0),n=1}e&&e.apply(D,a||[])}},B));return s?D.render(0):D},I.tweenFromTo=function(C,B,i){return this.tweenTo(B,oQ({startAt:{time:gQ(this,C)}},i))},I.recent=function(){return this._recent},I.nextLabel=function(C){return C===void 0&&(C=this._time),pl(this,gQ(this,C))},I.previousLabel=function(C){return C===void 0&&(C=this._time),pl(this,gQ(this,C),1)},I.currentLabel=function(C){return arguments.length?this.seek(C,!0):this.previousLabel(this._time+Sg)},I.shiftChildren=function(C,B,i){i===void 0&&(i=0);for(var E=this._first,o=this.labels,t;E;)E._start>=i&&(E._start+=C,E._end+=C),E=E._next;if(B)for(t in o)o[t]>=i&&(o[t]+=C);return Qo(this)},I.invalidate=function(C){var B=this._first;for(this._lock=0;B;)B.invalidate(C),B=B._next;return Q.prototype.invalidate.call(this,C)},I.clear=function(C){C===void 0&&(C=!0);for(var B=this._first,i;B;)i=B._next,this.remove(B),B=i;return this._dp&&(this._time=this._tTime=this._pTime=0),C&&(this.labels={}),Qo(this)},I.totalDuration=function(C){var B=0,i=this,E=i._last,o=QQ,t,e,a;if(arguments.length)return i.timeScale((i._repeat<0?i.duration():i.totalDuration())/(i.reversed()?-C:C));if(i._dirty){for(a=i.parent;E;)t=E._prev,E._dirty&&E.totalDuration(),e=E._start,e>o&&i._sort&&E._ts&&!i._lock?(i._lock=1,mQ(i,E,e-E._delay,1)._lock=0):o=e,e<0&&E._ts&&(B-=e,(!a&&!i._dp||a&&a.smoothChildTiming)&&(i._start+=e/i._ts,i._time-=e,i._tTime-=e),i.shiftChildren(-e,!1,-1/0),o=0),E._end>B&&E._ts&&(B=E._end),E=t;ct(i,i===Jg&&i._time>B?i._time:B,1,1),i._dirty=0}return i._tDur},A.updateRoot=function(C){if(Jg._ts&&(aG(Jg,Ws(C,Jg)),tG=xB.frame),xB.frame>=Ml){Ml+=PB.autoSleep||120;var B=Jg._first;if((!B||!B._ts)&&PB.autoSleep&&xB._listeners.length<2){for(;B&&!B._ts;)B=B._next;B||xB.sleep()}}},A}(Ue);oQ(DB.prototype,{_lock:0,_hasPause:0,_forcing:0});var gU=function(A,I,g,C,B,i,E){var o=new FB(this._pt,A,I,0,1,HG,null,B),t=0,e=0,a,s,n,D,c,r,h,S;for(o.b=g,o.e=C,g+="",C+="",(h=~C.indexOf("random("))&&(C=ke(C)),i&&(S=[g,C],i(S,A,I),g=S[0],C=S[1]),s=g.match(nr)||[];a=nr.exec(C);)D=a[0],c=C.substring(t,a.index),n?n=(n+1)%5:c.substr(-5)==="rgba("&&(n=1),D!==s[e++]&&(r=parseFloat(s[e-1])||0,o._pt={_next:o._pt,p:c||e===1?c:",",s:r,c:D.charAt(1)==="="?at(r,D)-r:parseFloat(D)-r,m:n&&n<4?Math.round:0},t=nr.lastIndex);return o.c=t<C.length?C.substring(t,C.length):"",o.fp=E,(BG.test(C)||h)&&(o.e=0),this._pt=o,o},Hh=function(A,I,g,C,B,i,E,o,t,e){_g(C)&&(C=C(B||0,A,i));var a=A[I],s=g!=="get"?g:_g(a)?t?A[I.indexOf("set")||!_g(A["get"+I.substr(3)])?I:"get"+I.substr(3)](t):A[I]():a,n=_g(a)?t?EU:LG:bh,D;if(dC(C)&&(~C.indexOf("random(")&&(C=ke(C)),C.charAt(1)==="="&&(D=at(s,C)+(PC(s)||0),(D||D===0)&&(C=D))),!e||s!==C||yD)return!isNaN(s*C)&&C!==""?(D=new FB(this._pt,A,I,+s||0,C-(s||0),typeof a=="boolean"?tU:mG,0,n),t&&(D.fp=t),E&&D.modifier(E,this,A),this._pt=D):(!a&&!(I in A)&&qh(I,C),gU.call(this,A,I,s,C,n,o||PB.stringFilter,t))},CU=function(A,I,g,C,B){if(_g(A)&&(A=re(A,B,I,g,C)),!vQ(A)||A.style&&A.nodeType||jC(A)||gG(A))return dC(A)?re(A,B,I,g,C):A;var i={},E;for(E in A)i[E]=re(A[E],B,I,g,C);return i},uG=function(A,I,g,C,B,i){var E,o,t,e;if(bB[A]&&(E=new bB[A]).init(B,E.rawVars?I[A]:CU(I[A],C,B,i,g),g,C,i)!==!1&&(g._pt=o=new FB(g._pt,B,A,0,1,E.render,E,0,E.priority),g!==it))for(t=g._ptLookup[g._targets.indexOf(B)],e=E._props.length;e--;)t[E._props[e]]=o;return E},zi,yD,Th=function Q(A,I,g){var C=A.vars,B=C.ease,i=C.startAt,E=C.immediateRender,o=C.lazy,t=C.onUpdate,e=C.runBackwards,a=C.yoyoEase,s=C.keyframes,n=C.autoRevert,D=A._dur,c=A._startAt,r=A._targets,h=A.parent,S=h&&h.data==="nested"?h.vars.targets:r,l=A._overwrite==="auto"&&!Rh,G=A.timeline,M,U,k,K,q,y,N,T,v,H,V,_,j;if(G&&(!s||!B)&&(B="none"),A._ease=io(B,Dt.ease),A._yEase=a?dG(io(a===!0?B:a,Dt.ease)):0,a&&A._yoyo&&!A._repeat&&(a=A._yEase,A._yEase=A._ease,A._ease=a),A._from=!G&&!!C.runBackwards,!G||s&&!C.stagger){if(T=r[0]?Bo(r[0]).harness:0,_=T&&C[T.prop],M=Ps(C,Yh),c&&(c._zTime<0&&c.progress(1),I<0&&e&&E&&!n?c.render(-1,!0):c.revert(e&&D?us:R0),c._lazy=0),i){if(oE(A._startAt=EC.set(r,oQ({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!c&&KB(o),startAt:null,delay:0,onUpdate:t&&function(){return vB(A,"onUpdate")},stagger:0},i))),A._startAt._dp=0,A._startAt._sat=A,I<0&&(VC||!E&&!n)&&A._startAt.revert(us),E&&D&&I<=0&&g<=0){I&&(A._zTime=I);return}}else if(e&&D&&!c){if(I&&(E=!1),k=oQ({overwrite:!1,data:"isFromStart",lazy:E&&!c&&KB(o),immediateRender:E,stagger:0,parent:h},M),_&&(k[T.prop]=_),oE(A._startAt=EC.set(r,k)),A._startAt._dp=0,A._startAt._sat=A,I<0&&(VC?A._startAt.revert(us):A._startAt.render(-1,!0)),A._zTime=I,!E)Q(A._startAt,Sg,Sg);else if(!I)return}for(A._pt=A._ptCache=0,o=D&&KB(o)||o&&!D,U=0;U<r.length;U++){if(q=r[U],N=q._gsap||mh(r)[U]._gsap,A._ptLookup[U]=H={},hD[N.id]&&IE.length&&Zs(),V=S===r?U:S.indexOf(q),T&&(v=new T).init(q,_||M,A,V,S)!==!1&&(A._pt=K=new FB(A._pt,q,v.name,0,1,v.render,v,0,v.priority),v._props.forEach(function(AA){H[AA]=K}),v.priority&&(y=1)),!T||_)for(k in M)bB[k]&&(v=uG(k,M,A,V,q,S))?v.priority&&(y=1):H[k]=K=Hh.call(A,q,k,"get",M[k],V,S,0,C.stringFilter);A._op&&A._op[U]&&A.kill(q,A._op[U]),l&&A._pt&&(zi=A,Jg.killTweensOf(q,H,A.globalTime(I)),j=!A.parent,zi=0),A._pt&&o&&(hD[N.id]=1)}y&&TG(A),A._onInit&&A._onInit(A)}A._onUpdate=t,A._initted=(!A._op||A._pt)&&!j,s&&I<=0&&G.render(QQ,!0,!0)},BU=function(A,I,g,C,B,i,E,o){var t=(A._pt&&A._ptCache||(A._ptCache={}))[I],e,a,s,n;if(!t)for(t=A._ptCache[I]=[],s=A._ptLookup,n=A._targets.length;n--;){if(e=s[n][I],e&&e.d&&e.d._pt)for(e=e.d._pt;e&&e.p!==I&&e.fp!==I;)e=e._next;if(!e)return yD=1,A.vars[I]="+=0",Th(A,E),yD=0,o?Ge(I+" not eligible for reset"):1;t.push(e)}for(n=t.length;n--;)a=t[n],e=a._pt||a,e.s=(C||C===0)&&!B?C:e.s+(C||0)+i*e.c,e.c=g-e.s,a.e&&(a.e=Xg(g)+PC(a.e)),a.b&&(a.b=e.s+PC(a.b))},QU=function(A,I){var g=A[0]?Bo(A[0]).harness:0,C=g&&g.aliases,B,i,E,o;if(!C)return I;B=no({},I);for(i in C)if(i in B)for(o=C[i].split(","),E=o.length;E--;)B[o[E]]=B[i];return B},iU=function(A,I,g,C){var B=I.ease||C||"power1.inOut",i,E;if(jC(I))E=g[A]||(g[A]=[]),I.forEach(function(o,t){return E.push({t:t/(I.length-1)*100,v:o,e:B})});else for(i in I)E=g[i]||(g[i]=[]),i==="ease"||E.push({t:parseFloat(A),v:I[i],e:B})},re=function(A,I,g,C,B){return _g(A)?A.call(I,g,C,B):dC(A)&&~A.indexOf("random(")?ke(A):A},qG=Lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",YG={};pB(qG+",id,stagger,delay,duration,paused,scrollTrigger",function(Q){return YG[Q]=1});var EC=function(Q){AG(A,Q);function A(g,C,B,i){var E;typeof C=="number"&&(B.duration=C,C=B,B=null),E=Q.call(this,i?C:se(C))||this;var o=E.vars,t=o.duration,e=o.delay,a=o.immediateRender,s=o.stagger,n=o.overwrite,D=o.keyframes,c=o.defaults,r=o.scrollTrigger,h=o.yoyoEase,S=C.parent||Jg,l=(jC(g)||gG(g)?ki(g[0]):"length"in C)?[g]:iQ(g),G,M,U,k,K,q,y,N;if(E._targets=l.length?mh(l):Ge("GSAP target "+g+" not found. https://gsap.com",!PB.nullTargetWarn)||[],E._ptLookup=[],E._overwrite=n,D||s||Ta(t)||Ta(e)){if(C=E.vars,G=E.timeline=new DB({data:"nested",defaults:c||{},targets:S&&S.data==="nested"?S.vars.targets:l}),G.kill(),G.parent=G._dp=oi(E),G._start=0,s||Ta(t)||Ta(e)){if(k=l.length,y=s&&SG(s),vQ(s))for(K in s)~qG.indexOf(K)&&(N||(N={}),N[K]=s[K]);for(M=0;M<k;M++)U=Ps(C,YG),U.stagger=0,h&&(U.yoyoEase=h),N&&no(U,N),q=l[M],U.duration=+re(t,oi(E),M,q,l),U.delay=(+re(e,oi(E),M,q,l)||0)-E._delay,!s&&k===1&&U.delay&&(E._delay=e=U.delay,E._start+=e,U.delay=0),G.to(q,U,y?y(M,q,l):0),G._ease=WI.none;G.duration()?t=e=0:E.timeline=0}else if(D){se(oQ(G.vars.defaults,{ease:"none"})),G._ease=io(D.ease||C.ease||"none");var T=0,v,H,V;if(jC(D))D.forEach(function(_){return G.to(l,_,">")}),G.duration();else{U={};for(K in D)K==="ease"||K==="easeEach"||iU(K,D[K],U,D.easeEach);for(K in U)for(v=U[K].sort(function(_,j){return _.t-j.t}),T=0,M=0;M<v.length;M++)H=v[M],V={ease:H.e,duration:(H.t-(M?v[M-1].t:0))/100*t},V[K]=H.v,G.to(l,V,T),T+=V.duration;G.duration()<t&&G.to({},{duration:t-G.duration()})}}t||E.duration(t=G.duration())}else E.timeline=0;return n===!0&&!Rh&&(zi=oi(E),Jg.killTweensOf(l),zi=0),mQ(S,oi(E),B),C.reversed&&E.reverse(),C.paused&&E.paused(!0),(a||!t&&!D&&E._start===KC(S._time)&&KB(a)&&L0(oi(E))&&S.data!=="nested")&&(E._tTime=-Sg,E.render(Math.max(0,-e)||0)),r&&hG(oi(E),r),E}var I=A.prototype;return I.render=function(C,B,i){var E=this._time,o=this._tDur,t=this._dur,e=C<0,a=C>o-Sg&&!e?o:C<Sg?0:C,s,n,D,c,r,h,S,l,G;if(!t)H0(this,C,B,i);else if(a!==this._tTime||!C||i||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==e){if(s=a,l=this.timeline,this._repeat){if(c=t+this._rDelay,this._repeat<-1&&e)return this.totalTime(c*100+C,B,i);if(s=KC(a%c),a===o?(D=this._repeat,s=t):(D=~~(a/c),D&&D===KC(a/c)&&(s=t,D--),s>t&&(s=t)),h=this._yoyo&&D&1,h&&(G=this._yEase,s=t-s),r=ht(this._tTime,c),s===E&&!i&&this._initted&&D===r)return this._tTime=a,this;D!==r&&(l&&this._yEase&&RG(l,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==c&&this._initted&&(this._lock=i=1,this.render(KC(c*D),!0).invalidate()._lock=0))}if(!this._initted){if(cG(this,e?C:s,i,B,a))return this._tTime=0,this;if(E!==this._time&&!(i&&this.vars.repeatRefresh&&D!==r))return this;if(t!==this._dur)return this.render(C,B,i)}if(this._tTime=a,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(G||this._ease)(s/t),this._from&&(this.ratio=S=1-S),s&&!E&&!B&&!D&&(vB(this,"onStart"),this._tTime!==a))return this;for(n=this._pt;n;)n.r(S,n.d),n=n._next;l&&l.render(C<0?C:l._dur*l._ease(s/this._dur),B,i)||this._startAt&&(this._zTime=C),this._onUpdate&&!B&&(e&&cD(this,C,B,i),vB(this,"onUpdate")),this._repeat&&D!==r&&this.vars.onRepeat&&!B&&this.parent&&vB(this,"onRepeat"),(a===this._tDur||!a)&&this._tTime===a&&(e&&!this._onUpdate&&cD(this,C,!0,!0),(C||!t)&&(a===this._tDur&&this._ts>0||!a&&this._ts<0)&&oE(this,1),!B&&!(e&&!E)&&(a||E||h)&&(vB(this,a===o?"onComplete":"onReverseComplete",!0),this._prom&&!(a<o&&this.timeScale()>0)&&this._prom()))}return this},I.targets=function(){return this._targets},I.invalidate=function(C){return(!C||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(C),Q.prototype.invalidate.call(this,C)},I.resetTo=function(C,B,i,E,o){Me||xB.wake(),this._ts||this.play();var t=Math.min(this._dur,(this._dp._time-this._start)*this._ts),e;return this._initted||Th(this,t),e=this._ease(t/this._dur),BU(this,C,B,i,E,e,t,o)?this.resetTo(C,B,i,E,1):(hn(this,0),this.parent||rG(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},I.kill=function(C,B){if(B===void 0&&(B="all"),!C&&(!B||B==="all"))return this._lazy=this._pt=0,this.parent?Be(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(C,B,zi&&zi.vars.overwrite!==!0)._first||Be(this),this.parent&&i!==this.timeline.totalDuration()&&ct(this,this._dur*this.timeline._tDur/i,0,1),this}var E=this._targets,o=C?iQ(C):E,t=this._ptLookup,e=this._pt,a,s,n,D,c,r,h;if((!B||B==="all")&&q0(E,o))return B==="all"&&(this._pt=0),Be(this);for(a=this._op=this._op||[],B!=="all"&&(dC(B)&&(c={},pB(B,function(S){return c[S]=1}),B=c),B=QU(E,B)),h=E.length;h--;)if(~o.indexOf(E[h])){s=t[h],B==="all"?(a[h]=B,D=s,n={}):(n=a[h]=a[h]||{},D=B);for(c in D)r=s&&s[c],r&&((!("kill"in r.d)||r.d.kill(c)===!0)&&rn(this,r,"_pt"),delete s[c]),n!=="all"&&(n[c]=1)}return this._initted&&!this._pt&&e&&Be(this),this},A.to=function(C,B){return new A(C,B,arguments[2])},A.from=function(C,B){return ne(1,arguments)},A.delayedCall=function(C,B,i,E){return new A(B,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:C,onComplete:B,onReverseComplete:B,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:E})},A.fromTo=function(C,B,i){return ne(2,arguments)},A.set=function(C,B){return B.duration=0,B.repeatDelay||(B.repeat=0),new A(C,B)},A.killTweensOf=function(C,B,i){return Jg.killTweensOf(C,B,i)},A}(Ue);oQ(EC.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pB("staggerTo,staggerFrom,staggerFromTo",function(Q){EC[Q]=function(){var A=new DB,I=wD.call(arguments,0);return I.splice(Q==="staggerFromTo"?5:4,0,0),A[Q].apply(A,I)}});var bh=function(A,I,g){return A[I]=g},LG=function(A,I,g){return A[I](g)},EU=function(A,I,g,C){return A[I](C.fp,g)},oU=function(A,I,g){return A.setAttribute(I,g)},xh=function(A,I){return _g(A[I])?LG:Jh(A[I])&&A.setAttribute?oU:bh},mG=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e6)/1e6,I)},tU=function(A,I){return I.set(I.t,I.p,!!(I.s+I.c*A),I)},HG=function(A,I){var g=I._pt,C="";if(!A&&I.b)C=I.b;else if(A===1&&I.e)C=I.e;else{for(;g;)C=g.p+(g.m?g.m(g.s+g.c*A):Math.round((g.s+g.c*A)*1e4)/1e4)+C,g=g._next;C+=I.c}I.set(I.t,I.p,C,I)},_h=function(A,I){for(var g=I._pt;g;)g.r(A,g.d),g=g._next},eU=function(A,I,g,C){for(var B=this._pt,i;B;)i=B._next,B.p===C&&B.modifier(A,I,g),B=i},aU=function(A){for(var I=this._pt,g,C;I;)C=I._next,I.p===A&&!I.op||I.op===A?rn(this,I,"_pt"):I.dep||(g=1),I=C;return!g},sU=function(A,I,g,C){C.mSet(A,I,C.m.call(C.tween,g,C.mt),C)},TG=function(A){for(var I=A._pt,g,C,B,i;I;){for(g=I._next,C=B;C&&C.pr>I.pr;)C=C._next;(I._prev=C?C._prev:i)?I._prev._next=I:B=I,(I._next=C)?C._prev=I:i=I,I=g}A._pt=B},FB=function(){function Q(I,g,C,B,i,E,o,t,e){this.t=g,this.s=B,this.c=i,this.p=C,this.r=E||mG,this.d=o||this,this.set=t||bh,this.pr=e||0,this._next=I,I&&(I._prev=this)}var A=Q.prototype;return A.modifier=function(g,C,B){this.mSet=this.mSet||this.set,this.set=sU,this.m=g,this.mt=B,this.tween=C},Q}();pB(Lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(Q){return Yh[Q]=1});jB.TweenMax=jB.TweenLite=EC;jB.TimelineLite=jB.TimelineMax=DB;Jg=new DB({sortChildren:!1,defaults:Dt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});PB.stringFilter=FG;var Eo=[],Ys={},nU=[],dl=0,rU=0,lr=function(A){return(Ys[A]||nU).map(function(I){return I()})},kD=function(){var A=Date.now(),I=[];A-dl>2&&(lr("matchMediaInit"),Eo.forEach(function(g){var C=g.queries,B=g.conditions,i,E,o,t;for(E in C)i=YQ.matchMedia(C[E]).matches,i&&(o=1),i!==B[E]&&(B[E]=i,t=1);t&&(g.revert(),o&&I.push(g))}),lr("matchMediaRevert"),I.forEach(function(g){return g.onMatch(g,function(C){return g.add(null,C)})}),dl=A,lr("matchMedia"))},bG=function(){function Q(I,g){this.selector=g&&SD(g),this.data=[],this._r=[],this.isReverted=!1,this.id=rU++,I&&this.add(I)}var A=Q.prototype;return A.add=function(g,C,B){_g(g)&&(B=C,C=g,g=_g);var i=this,E=function(){var t=pg,e=i.selector,a;return t&&t!==i&&t.data.push(i),B&&(i.selector=SD(B)),pg=i,a=C.apply(i,arguments),_g(a)&&i._r.push(a),pg=t,i.selector=e,i.isReverted=!1,a};return i.last=E,g===_g?E(i,function(o){return i.add(null,o)}):g?i[g]=E:E},A.ignore=function(g){var C=pg;pg=null,g(this),pg=C},A.getTweens=function(){var g=[];return this.data.forEach(function(C){return C instanceof Q?g.push.apply(g,C.getTweens()):C instanceof EC&&!(C.parent&&C.parent.data==="nested")&&g.push(C)}),g},A.clear=function(){this._r.length=this.data.length=0},A.kill=function(g,C){var B=this;if(g?function(){for(var E=B.getTweens(),o=B.data.length,t;o--;)t=B.data[o],t.data==="isFlip"&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return E.splice(E.indexOf(e),1)}));for(E.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,a){return a.g-e.g||-1/0}).forEach(function(e){return e.t.revert(g)}),o=B.data.length;o--;)t=B.data[o],t instanceof DB?t.data!=="nested"&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof EC)&&t.revert&&t.revert(g);B._r.forEach(function(e){return e(g,B)}),B.isReverted=!0}():this.data.forEach(function(E){return E.kill&&E.kill()}),this.clear(),C)for(var i=Eo.length;i--;)Eo[i].id===this.id&&Eo.splice(i,1)},A.revert=function(g){this.kill(g||{})},Q}(),DU=function(){function Q(I){this.contexts=[],this.scope=I,pg&&pg.data.push(this)}var A=Q.prototype;return A.add=function(g,C,B){vQ(g)||(g={matches:g});var i=new bG(0,B||this.scope),E=i.conditions={},o,t,e;pg&&!i.selector&&(i.selector=pg.selector),this.contexts.push(i),C=i.add("onMatch",C),i.queries=g;for(t in g)t==="all"?e=1:(o=YQ.matchMedia(g[t]),o&&(Eo.indexOf(i)<0&&Eo.push(i),(E[t]=o.matches)&&(e=1),o.addListener?o.addListener(kD):o.addEventListener("change",kD)));return e&&C(i,function(a){return i.add(null,a)}),this},A.revert=function(g){this.kill(g||{})},A.kill=function(g){this.contexts.forEach(function(C){return C.kill(g,!0)})},Q}(),Vs={registerPlugin:function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];I.forEach(function(C){return NG(C)})},timeline:function(A){return new DB(A)},getTweensOf:function(A,I){return Jg.getTweensOf(A,I)},getProperty:function(A,I,g,C){dC(A)&&(A=iQ(A)[0]);var B=Bo(A||{}).get,i=g?nG:sG;return g==="native"&&(g=""),A&&(I?i((bB[I]&&bB[I].get||B)(A,I,g,C)):function(E,o,t){return i((bB[E]&&bB[E].get||B)(A,E,o,t))})},quickSetter:function(A,I,g){if(A=iQ(A),A.length>1){var C=A.map(function(e){return JB.quickSetter(e,I,g)}),B=C.length;return function(e){for(var a=B;a--;)C[a](e)}}A=A[0]||{};var i=bB[I],E=Bo(A),o=E.harness&&(E.harness.aliases||{})[I]||I,t=i?function(e){var a=new i;it._pt=0,a.init(A,g?e+g:e,it,0,[A]),a.render(1,a),it._pt&&_h(1,it)}:E.set(A,o);return i?t:function(e){return t(A,o,g?e+g:e,E,1)}},quickTo:function(A,I,g){var C,B=JB.to(A,no((C={},C[I]="+=0.1",C.paused=!0,C),g||{})),i=function(o,t,e){return B.resetTo(I,o,t,e)};return i.tween=B,i},isTweening:function(A){return Jg.getTweensOf(A,!0).length>0},defaults:function(A){return A&&A.ease&&(A.ease=io(A.ease,Dt.ease)),Ul(Dt,A||{})},config:function(A){return Ul(PB,A||{})},registerEffect:function(A){var I=A.name,g=A.effect,C=A.plugins,B=A.defaults,i=A.extendTimeline;(C||"").split(",").forEach(function(E){return E&&!bB[E]&&!jB[E]&&Ge(I+" effect requires "+E+" plugin.")}),rr[I]=function(E,o,t){return g(iQ(E),oQ(o||{},B),t)},i&&(DB.prototype[I]=function(E,o,t){return this.add(rr[I](E,vQ(o)?o:(t=o)&&{},this),t)})},registerEase:function(A,I){WI[A]=io(I)},parseEase:function(A,I){return arguments.length?io(A,I):WI},getById:function(A){return Jg.getById(A)},exportRoot:function(A,I){A===void 0&&(A={});var g=new DB(A),C,B;for(g.smoothChildTiming=KB(A.smoothChildTiming),Jg.remove(g),g._dp=0,g._time=g._tTime=Jg._time,C=Jg._first;C;)B=C._next,(I||!(!C._dur&&C instanceof EC&&C.vars.onComplete===C._targets[0]))&&mQ(g,C,C._start-C._delay),C=B;return mQ(Jg,g,0),g},context:function(A,I){return A?new bG(A,I):pg},matchMedia:function(A){return new DU(A)},matchMediaRefresh:function(){return Eo.forEach(function(A){var I=A.conditions,g,C;for(C in I)I[C]&&(I[C]=!1,g=1);g&&A.revert()})||kD()},addEventListener:function(A,I){var g=Ys[A]||(Ys[A]=[]);~g.indexOf(I)||g.push(I)},removeEventListener:function(A,I){var g=Ys[A],C=g&&g.indexOf(I);C>=0&&g.splice(C,1)},utils:{wrap:P0,wrapYoyo:W0,distribute:SG,random:yG,snap:GG,normalize:Z0,getUnit:PC,clamp:x0,splitColor:KG,toArray:iQ,selector:SD,mapRange:MG,pipe:O0,unitize:v0,interpolate:V0,shuffle:wG},install:EG,effects:rr,ticker:xB,updateRoot:DB.updateRoot,plugins:bB,globalTimeline:Jg,core:{PropTween:FB,globals:oG,Tween:EC,Timeline:DB,Animation:Ue,getCache:Bo,_removeLinkedListItem:rn,reverting:function(){return VC},context:function(A){return A&&pg&&(pg.data.push(A),A._ctx=pg),pg},suppressOverwrites:function(A){return Rh=A}}};pB("to,from,fromTo,delayedCall,set,killTweensOf",function(Q){return Vs[Q]=EC[Q]});xB.add(DB.updateRoot);it=Vs.to({},{duration:0});var hU=function(A,I){for(var g=A._pt;g&&g.p!==I&&g.op!==I&&g.fp!==I;)g=g._next;return g},cU=function(A,I){var g=A._targets,C,B,i;for(C in I)for(B=g.length;B--;)i=A._ptLookup[B][C],i&&(i=i.d)&&(i._pt&&(i=hU(i,C)),i&&i.modifier&&i.modifier(I[C],A,g[B],C))},wr=function(A,I){return{name:A,rawVars:1,init:function(C,B,i){i._onInit=function(E){var o,t;if(dC(B)&&(o={},pB(B,function(e){return o[e]=1}),B=o),I){o={};for(t in B)o[t]=I(B[t]);B=o}cU(E,B)}}}},JB=Vs.registerPlugin({name:"attr",init:function(A,I,g,C,B){var i,E,o;this.tween=g;for(i in I)o=A.getAttribute(i)||"",E=this.add(A,"setAttribute",(o||0)+"",I[i],C,B,0,0,i),E.op=i,E.b=o,this._props.push(i)},render:function(A,I){for(var g=I._pt;g;)VC?g.set(g.t,g.p,g.b,g):g.r(A,g.d),g=g._next}},{name:"endArray",init:function(A,I){for(var g=I.length;g--;)this.add(A,g,A[g]||0,I[g],0,0,0,0,0,1)}},wr("roundProps",GD),wr("modifiers"),wr("snap",GG))||Vs;EC.version=DB.version=JB.version="3.12.5";iG=1;fh()&&lt();WI.Power0;WI.Power1;WI.Power2;WI.Power3;WI.Power4;WI.Linear;WI.Quad;WI.Cubic;WI.Quart;WI.Quint;WI.Strong;WI.Elastic;WI.Back;WI.SteppedEase;WI.Bounce;WI.Sine;WI.Expo;WI.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rl,$i,st,Oh,XE,Jl,vh,lU=function(){return typeof window<"u"},Mi={},OE=180/Math.PI,nt=Math.PI/180,Yo=Math.atan2,fl=1e8,Zh=/([A-Z])/g,wU=/(left|right|width|margin|padding|x)/i,SU=/[\s,\(]\S/,TQ={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},MD=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},GU=function(A,I){return I.set(I.t,I.p,A===1?I.e:Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},yU=function(A,I){return I.set(I.t,I.p,A?Math.round((I.s+I.c*A)*1e4)/1e4+I.u:I.b,I)},kU=function(A,I){var g=I.s+I.c*A;I.set(I.t,I.p,~~(g+(g<0?-.5:.5))+I.u,I)},xG=function(A,I){return I.set(I.t,I.p,A?I.e:I.b,I)},_G=function(A,I){return I.set(I.t,I.p,A!==1?I.b:I.e,I)},MU=function(A,I,g){return A.style[I]=g},UU=function(A,I,g){return A.style.setProperty(I,g)},NU=function(A,I,g){return A._gsap[I]=g},KU=function(A,I,g){return A._gsap.scaleX=A._gsap.scaleY=g},pU=function(A,I,g,C,B){var i=A._gsap;i.scaleX=i.scaleY=g,i.renderTransform(B,i)},FU=function(A,I,g,C,B){var i=A._gsap;i[I]=g,i.renderTransform(B,i)},ug="transform",dB=ug+"Origin",dU=function Q(A,I){var g=this,C=this.target,B=C.style,i=C._gsap;if(A in Mi&&B){if(this.tfm=this.tfm||{},A!=="transform")A=TQ[A]||A,~A.indexOf(",")?A.split(",").forEach(function(E){return g.tfm[E]=ei(C,E)}):this.tfm[A]=i.x?i[A]:ei(C,A),A===dB&&(this.tfm.zOrigin=i.zOrigin);else return TQ.transform.split(",").forEach(function(E){return Q.call(g,E,I)});if(this.props.indexOf(ug)>=0)return;i.svg&&(this.svgo=C.getAttribute("data-svg-origin"),this.props.push(dB,I,"")),A=ug}(B||I)&&this.props.push(A,I,B[A])},OG=function(A){A.translate&&(A.removeProperty("translate"),A.removeProperty("scale"),A.removeProperty("rotate"))},RU=function(){var A=this.props,I=this.target,g=I.style,C=I._gsap,B,i;for(B=0;B<A.length;B+=3)A[B+1]?I[A[B]]=A[B+2]:A[B+2]?g[A[B]]=A[B+2]:g.removeProperty(A[B].substr(0,2)==="--"?A[B]:A[B].replace(Zh,"-$1").toLowerCase());if(this.tfm){for(i in this.tfm)C[i]=this.tfm[i];C.svg&&(C.renderTransform(),I.setAttribute("data-svg-origin",this.svgo||"")),B=vh(),(!B||!B.isStart)&&!g[ug]&&(OG(g),C.zOrigin&&g[dB]&&(g[dB]+=" "+C.zOrigin+"px",C.zOrigin=0,C.renderTransform()),C.uncache=1)}},vG=function(A,I){var g={target:A,props:[],revert:RU,save:dU};return A._gsap||JB.core.getCache(A),I&&I.split(",").forEach(function(C){return g.save(C)}),g},ZG,UD=function(A,I){var g=$i.createElementNS?$i.createElementNS((I||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),A):$i.createElement(A);return g&&g.style?g:$i.createElement(A)},_Q=function Q(A,I,g){var C=getComputedStyle(A);return C[I]||C.getPropertyValue(I.replace(Zh,"-$1").toLowerCase())||C.getPropertyValue(I)||!g&&Q(A,wt(I)||I,1)||""},ul="O,Moz,ms,Ms,Webkit".split(","),wt=function(A,I,g){var C=I||XE,B=C.style,i=5;if(A in B&&!g)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1);i--&&!(ul[i]+A in B););return i<0?null:(i===3?"ms":i>=0?ul[i]:"")+A},ND=function(){lU()&&window.document&&(Rl=window,$i=Rl.document,st=$i.documentElement,XE=UD("div")||{style:{}},UD("div"),ug=wt(ug),dB=ug+"Origin",XE.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ZG=!!wt("perspective"),vh=JB.core.reverting,Oh=1)},Sr=function Q(A){var I=UD("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),g=this.parentNode,C=this.nextSibling,B=this.style.cssText,i;if(st.appendChild(I),I.appendChild(this),this.style.display="block",A)try{i=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Q}catch{}else this._gsapBBox&&(i=this._gsapBBox());return g&&(C?g.insertBefore(this,C):g.appendChild(this)),st.removeChild(I),this.style.cssText=B,i},ql=function(A,I){for(var g=I.length;g--;)if(A.hasAttribute(I[g]))return A.getAttribute(I[g])},PG=function(A){var I;try{I=A.getBBox()}catch{I=Sr.call(A,!0)}return I&&(I.width||I.height)||A.getBBox===Sr||(I=Sr.call(A,!0)),I&&!I.width&&!I.x&&!I.y?{x:+ql(A,["x","cx","x1"])||0,y:+ql(A,["y","cy","y1"])||0,width:0,height:0}:I},WG=function(A){return!!(A.getCTM&&(!A.parentNode||A.ownerSVGElement)&&PG(A))},ro=function(A,I){if(I){var g=A.style,C;I in Mi&&I!==dB&&(I=ug),g.removeProperty?(C=I.substr(0,2),(C==="ms"||I.substr(0,6)==="webkit")&&(I="-"+I),g.removeProperty(C==="--"?I:I.replace(Zh,"-$1").toLowerCase())):g.removeAttribute(I)}},AE=function(A,I,g,C,B,i){var E=new FB(A._pt,I,g,0,1,i?_G:xG);return A._pt=E,E.b=C,E.e=B,A._props.push(g),E},Yl={deg:1,rad:1,turn:1},JU={grid:1,flex:1},tE=function Q(A,I,g,C){var B=parseFloat(g)||0,i=(g+"").trim().substr((B+"").length)||"px",E=XE.style,o=wU.test(I),t=A.tagName.toLowerCase()==="svg",e=(t?"client":"offset")+(o?"Width":"Height"),a=100,s=C==="px",n=C==="%",D,c,r,h;if(C===i||!B||Yl[C]||Yl[i])return B;if(i!=="px"&&!s&&(B=Q(A,I,g,"px")),h=A.getCTM&&WG(A),(n||i==="%")&&(Mi[I]||~I.indexOf("adius")))return D=h?A.getBBox()[o?"width":"height"]:A[e],Xg(n?B/D*a:B/100*D);if(E[o?"width":"height"]=a+(s?i:C),c=~I.indexOf("adius")||C==="em"&&A.appendChild&&!t?A:A.parentNode,h&&(c=(A.ownerSVGElement||{}).parentNode),(!c||c===$i||!c.appendChild)&&(c=$i.body),r=c._gsap,r&&n&&r.width&&o&&r.time===xB.time&&!r.uncache)return Xg(B/r.width*a);if(n&&(I==="height"||I==="width")){var S=A.style[I];A.style[I]=a+C,D=A[e],S?A.style[I]=S:ro(A,I)}else(n||i==="%")&&!JU[_Q(c,"display")]&&(E.position=_Q(A,"position")),c===A&&(E.position="static"),c.appendChild(XE),D=XE[e],c.removeChild(XE),E.position="absolute";return o&&n&&(r=Bo(c),r.time=xB.time,r.width=c[e]),Xg(s?D*B/a:D&&B?a/D*B:0)},ei=function(A,I,g,C){var B;return Oh||ND(),I in TQ&&I!=="transform"&&(I=TQ[I],~I.indexOf(",")&&(I=I.split(",")[0])),Mi[I]&&I!=="transform"?(B=Ke(A,C),B=I!=="transformOrigin"?B[I]:B.svg?B.origin:Xs(_Q(A,dB))+" "+B.zOrigin+"px"):(B=A.style[I],(!B||B==="auto"||C||~(B+"").indexOf("calc("))&&(B=js[I]&&js[I](A,I,g)||_Q(A,I)||eG(A,I)||(I==="opacity"?1:0))),g&&!~(B+"").trim().indexOf(" ")?tE(A,I,B,g)+g:B},fU=function(A,I,g,C){if(!g||g==="none"){var B=wt(I,A,1),i=B&&_Q(A,B,1);i&&i!==g?(I=B,g=i):I==="borderColor"&&(g=_Q(A,"borderTopColor"))}var E=new FB(this._pt,A.style,I,0,1,HG),o=0,t=0,e,a,s,n,D,c,r,h,S,l,G,M;if(E.b=g,E.e=C,g+="",C+="",C==="auto"&&(c=A.style[I],A.style[I]=C,C=_Q(A,I)||C,c?A.style[I]=c:ro(A,I)),e=[g,C],FG(e),g=e[0],C=e[1],s=g.match(Qt)||[],M=C.match(Qt)||[],M.length){for(;a=Qt.exec(C);)r=a[0],S=C.substring(o,a.index),D?D=(D+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(D=1),r!==(c=s[t++]||"")&&(n=parseFloat(c)||0,G=c.substr((n+"").length),r.charAt(1)==="="&&(r=at(n,r)+G),h=parseFloat(r),l=r.substr((h+"").length),o=Qt.lastIndex-l.length,l||(l=l||PB.units[I]||G,o===C.length&&(C+=l,E.e+=l)),G!==l&&(n=tE(A,I,c,l)||0),E._pt={_next:E._pt,p:S||t===1?S:",",s:n,c:h-n,m:D&&D<4||I==="zIndex"?Math.round:0});E.c=o<C.length?C.substring(o,C.length):""}else E.r=I==="display"&&C==="none"?_G:xG;return BG.test(C)&&(E.e=0),this._pt=E,E},Ll={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uU=function(A){var I=A.split(" "),g=I[0],C=I[1]||"50%";return(g==="top"||g==="bottom"||C==="left"||C==="right")&&(A=g,g=C,C=A),I[0]=Ll[g]||g,I[1]=Ll[C]||C,I.join(" ")},qU=function(A,I){if(I.tween&&I.tween._time===I.tween._dur){var g=I.t,C=g.style,B=I.u,i=g._gsap,E,o,t;if(B==="all"||B===!0)C.cssText="",o=1;else for(B=B.split(","),t=B.length;--t>-1;)E=B[t],Mi[E]&&(o=1,E=E==="transformOrigin"?dB:ug),ro(g,E);o&&(ro(g,ug),i&&(i.svg&&g.removeAttribute("transform"),Ke(g,1),i.uncache=1,OG(C)))}},js={clearProps:function(A,I,g,C,B){if(B.data!=="isFromStart"){var i=A._pt=new FB(A._pt,I,g,0,0,qU);return i.u=C,i.pr=-10,i.tween=B,A._props.push(g),1}}},Ne=[1,0,0,1,0,0],VG={},jG=function(A){return A==="matrix(1, 0, 0, 1, 0, 0)"||A==="none"||!A},ml=function(A){var I=_Q(A,ug);return jG(I)?Ne:I.substr(7).match(CG).map(Xg)},Ph=function(A,I){var g=A._gsap||Bo(A),C=A.style,B=ml(A),i,E,o,t;return g.svg&&A.getAttribute("transform")?(o=A.transform.baseVal.consolidate().matrix,B=[o.a,o.b,o.c,o.d,o.e,o.f],B.join(",")==="1,0,0,1,0,0"?Ne:B):(B===Ne&&!A.offsetParent&&A!==st&&!g.svg&&(o=C.display,C.display="block",i=A.parentNode,(!i||!A.offsetParent)&&(t=1,E=A.nextElementSibling,st.appendChild(A)),B=ml(A),o?C.display=o:ro(A,"display"),t&&(E?i.insertBefore(A,E):i?i.appendChild(A):st.removeChild(A))),I&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B)},KD=function(A,I,g,C,B,i){var E=A._gsap,o=B||Ph(A,!0),t=E.xOrigin||0,e=E.yOrigin||0,a=E.xOffset||0,s=E.yOffset||0,n=o[0],D=o[1],c=o[2],r=o[3],h=o[4],S=o[5],l=I.split(" "),G=parseFloat(l[0])||0,M=parseFloat(l[1])||0,U,k,K,q;g?o!==Ne&&(k=n*r-D*c)&&(K=G*(r/k)+M*(-c/k)+(c*S-r*h)/k,q=G*(-D/k)+M*(n/k)-(n*S-D*h)/k,G=K,M=q):(U=PG(A),G=U.x+(~l[0].indexOf("%")?G/100*U.width:G),M=U.y+(~(l[1]||l[0]).indexOf("%")?M/100*U.height:M)),C||C!==!1&&E.smooth?(h=G-t,S=M-e,E.xOffset=a+(h*n+S*c)-h,E.yOffset=s+(h*D+S*r)-S):E.xOffset=E.yOffset=0,E.xOrigin=G,E.yOrigin=M,E.smooth=!!C,E.origin=I,E.originIsAbsolute=!!g,A.style[dB]="0px 0px",i&&(AE(i,E,"xOrigin",t,G),AE(i,E,"yOrigin",e,M),AE(i,E,"xOffset",a,E.xOffset),AE(i,E,"yOffset",s,E.yOffset)),A.setAttribute("data-svg-origin",G+" "+M)},Ke=function(A,I){var g=A._gsap||new fG(A);if("x"in g&&!I&&!g.uncache)return g;var C=A.style,B=g.scaleX<0,i="px",E="deg",o=getComputedStyle(A),t=_Q(A,dB)||"0",e,a,s,n,D,c,r,h,S,l,G,M,U,k,K,q,y,N,T,v,H,V,_,j,AA,IA,tA,aA,pA,CI,QA,GA;return e=a=s=c=r=h=S=l=G=0,n=D=1,g.svg=!!(A.getCTM&&WG(A)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(C[ug]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[ug]!=="none"?o[ug]:"")),C.scale=C.rotate=C.translate="none"),k=Ph(A,g.svg),g.svg&&(g.uncache?(AA=A.getBBox(),t=g.xOrigin-AA.x+"px "+(g.yOrigin-AA.y)+"px",j=""):j=!I&&A.getAttribute("data-svg-origin"),KD(A,j||t,!!j||g.originIsAbsolute,g.smooth!==!1,k)),M=g.xOrigin||0,U=g.yOrigin||0,k!==Ne&&(N=k[0],T=k[1],v=k[2],H=k[3],e=V=k[4],a=_=k[5],k.length===6?(n=Math.sqrt(N*N+T*T),D=Math.sqrt(H*H+v*v),c=N||T?Yo(T,N)*OE:0,S=v||H?Yo(v,H)*OE+c:0,S&&(D*=Math.abs(Math.cos(S*nt))),g.svg&&(e-=M-(M*N+U*v),a-=U-(M*T+U*H))):(GA=k[6],CI=k[7],tA=k[8],aA=k[9],pA=k[10],QA=k[11],e=k[12],a=k[13],s=k[14],K=Yo(GA,pA),r=K*OE,K&&(q=Math.cos(-K),y=Math.sin(-K),j=V*q+tA*y,AA=_*q+aA*y,IA=GA*q+pA*y,tA=V*-y+tA*q,aA=_*-y+aA*q,pA=GA*-y+pA*q,QA=CI*-y+QA*q,V=j,_=AA,GA=IA),K=Yo(-v,pA),h=K*OE,K&&(q=Math.cos(-K),y=Math.sin(-K),j=N*q-tA*y,AA=T*q-aA*y,IA=v*q-pA*y,QA=H*y+QA*q,N=j,T=AA,v=IA),K=Yo(T,N),c=K*OE,K&&(q=Math.cos(K),y=Math.sin(K),j=N*q+T*y,AA=V*q+_*y,T=T*q-N*y,_=_*q-V*y,N=j,V=AA),r&&Math.abs(r)+Math.abs(c)>359.9&&(r=c=0,h=180-h),n=Xg(Math.sqrt(N*N+T*T+v*v)),D=Xg(Math.sqrt(_*_+GA*GA)),K=Yo(V,_),S=Math.abs(K)>2e-4?K*OE:0,G=QA?1/(QA<0?-QA:QA):0),g.svg&&(j=A.getAttribute("transform"),g.forceCSS=A.setAttribute("transform","")||!jG(_Q(A,ug)),j&&A.setAttribute("transform",j))),Math.abs(S)>90&&Math.abs(S)<270&&(B?(n*=-1,S+=c<=0?180:-180,c+=c<=0?180:-180):(D*=-1,S+=S<=0?180:-180)),I=I||g.uncache,g.x=e-((g.xPercent=e&&(!I&&g.xPercent||(Math.round(A.offsetWidth/2)===Math.round(-e)?-50:0)))?A.offsetWidth*g.xPercent/100:0)+i,g.y=a-((g.yPercent=a&&(!I&&g.yPercent||(Math.round(A.offsetHeight/2)===Math.round(-a)?-50:0)))?A.offsetHeight*g.yPercent/100:0)+i,g.z=s+i,g.scaleX=Xg(n),g.scaleY=Xg(D),g.rotation=Xg(c)+E,g.rotationX=Xg(r)+E,g.rotationY=Xg(h)+E,g.skewX=S+E,g.skewY=l+E,g.transformPerspective=G+i,(g.zOrigin=parseFloat(t.split(" ")[2])||!I&&g.zOrigin||0)&&(C[dB]=Xs(t)),g.xOffset=g.yOffset=0,g.force3D=PB.force3D,g.renderTransform=g.svg?LU:ZG?XG:YU,g.uncache=0,g},Xs=function(A){return(A=A.split(" "))[0]+" "+A[1]},Gr=function(A,I,g){var C=PC(I);return Xg(parseFloat(I)+parseFloat(tE(A,"x",g+"px",C)))+C},YU=function(A,I){I.z="0px",I.rotationY=I.rotationX="0deg",I.force3D=0,XG(A,I)},RE="0deg",Zt="0px",JE=") ",XG=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.z,t=g.rotation,e=g.rotationY,a=g.rotationX,s=g.skewX,n=g.skewY,D=g.scaleX,c=g.scaleY,r=g.transformPerspective,h=g.force3D,S=g.target,l=g.zOrigin,G="",M=h==="auto"&&A&&A!==1||h===!0;if(l&&(a!==RE||e!==RE)){var U=parseFloat(e)*nt,k=Math.sin(U),K=Math.cos(U),q;U=parseFloat(a)*nt,q=Math.cos(U),i=Gr(S,i,k*q*-l),E=Gr(S,E,-Math.sin(U)*-l),o=Gr(S,o,K*q*-l+l)}r!==Zt&&(G+="perspective("+r+JE),(C||B)&&(G+="translate("+C+"%, "+B+"%) "),(M||i!==Zt||E!==Zt||o!==Zt)&&(G+=o!==Zt||M?"translate3d("+i+", "+E+", "+o+") ":"translate("+i+", "+E+JE),t!==RE&&(G+="rotate("+t+JE),e!==RE&&(G+="rotateY("+e+JE),a!==RE&&(G+="rotateX("+a+JE),(s!==RE||n!==RE)&&(G+="skew("+s+", "+n+JE),(D!==1||c!==1)&&(G+="scale("+D+", "+c+JE),S.style[ug]=G||"translate(0, 0)"},LU=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.rotation,t=g.skewX,e=g.skewY,a=g.scaleX,s=g.scaleY,n=g.target,D=g.xOrigin,c=g.yOrigin,r=g.xOffset,h=g.yOffset,S=g.forceCSS,l=parseFloat(i),G=parseFloat(E),M,U,k,K,q;o=parseFloat(o),t=parseFloat(t),e=parseFloat(e),e&&(e=parseFloat(e),t+=e,o+=e),o||t?(o*=nt,t*=nt,M=Math.cos(o)*a,U=Math.sin(o)*a,k=Math.sin(o-t)*-s,K=Math.cos(o-t)*s,t&&(e*=nt,q=Math.tan(t-e),q=Math.sqrt(1+q*q),k*=q,K*=q,e&&(q=Math.tan(e),q=Math.sqrt(1+q*q),M*=q,U*=q)),M=Xg(M),U=Xg(U),k=Xg(k),K=Xg(K)):(M=a,K=s,U=k=0),(l&&!~(i+"").indexOf("px")||G&&!~(E+"").indexOf("px"))&&(l=tE(n,"x",i,"px"),G=tE(n,"y",E,"px")),(D||c||r||h)&&(l=Xg(l+D-(D*M+c*k)+r),G=Xg(G+c-(D*U+c*K)+h)),(C||B)&&(q=n.getBBox(),l=Xg(l+C/100*q.width),G=Xg(G+B/100*q.height)),q="matrix("+M+","+U+","+k+","+K+","+l+","+G+")",n.setAttribute("transform",q),S&&(n.style[ug]=q)},mU=function(A,I,g,C,B){var i=360,E=dC(B),o=parseFloat(B)*(E&&~B.indexOf("rad")?OE:1),t=o-C,e=C+t+"deg",a,s;return E&&(a=B.split("_")[1],a==="short"&&(t%=i,t!==t%(i/2)&&(t+=t<0?i:-i)),a==="cw"&&t<0?t=(t+i*fl)%i-~~(t/i)*i:a==="ccw"&&t>0&&(t=(t-i*fl)%i-~~(t/i)*i)),A._pt=s=new FB(A._pt,I,g,C,t,GU),s.e=e,s.u="deg",A._props.push(g),s},Hl=function(A,I){for(var g in I)A[g]=I[g];return A},HU=function(A,I,g){var C=Hl({},g._gsap),B="perspective,force3D,transformOrigin,svgOrigin",i=g.style,E,o,t,e,a,s,n,D;C.svg?(t=g.getAttribute("transform"),g.setAttribute("transform",""),i[ug]=I,E=Ke(g,1),ro(g,ug),g.setAttribute("transform",t)):(t=getComputedStyle(g)[ug],i[ug]=I,E=Ke(g,1),i[ug]=t);for(o in Mi)t=C[o],e=E[o],t!==e&&B.indexOf(o)<0&&(n=PC(t),D=PC(e),a=n!==D?tE(g,o,t,D):parseFloat(t),s=parseFloat(e),A._pt=new FB(A._pt,E,o,a,s-a,MD),A._pt.u=D||0,A._props.push(o));Hl(E,C)};pB("padding,margin,Width,Radius",function(Q,A){var I="Top",g="Right",C="Bottom",B="Left",i=(A<3?[I,g,C,B]:[I+B,I+g,C+g,C+B]).map(function(E){return A<2?Q+E:"border"+E+Q});js[A>1?"border"+Q:Q]=function(E,o,t,e,a){var s,n;if(arguments.length<4)return s=i.map(function(D){return ei(E,D,t)}),n=s.join(" "),n.split(s[0]).length===5?s[0]:n;s=(e+"").split(" "),n={},i.forEach(function(D,c){return n[D]=s[c]=s[c]||s[(c-1)/2|0]}),E.init(o,n,a)}});var zG={name:"css",register:ND,targetTest:function(A){return A.style&&A.nodeType},init:function(A,I,g,C,B){var i=this._props,E=A.style,o=g.vars.startAt,t,e,a,s,n,D,c,r,h,S,l,G,M,U,k,K;Oh||ND(),this.styles=this.styles||vG(A),K=this.styles.props,this.tween=g;for(c in I)if(c!=="autoRound"&&(e=I[c],!(bB[c]&&uG(c,I,g,C,A,B)))){if(n=typeof e,D=js[c],n==="function"&&(e=e.call(g,C,A,B),n=typeof e),n==="string"&&~e.indexOf("random(")&&(e=ke(e)),D)D(this,A,c,e,g)&&(k=1);else if(c.substr(0,2)==="--")t=(getComputedStyle(A).getPropertyValue(c)+"").trim(),e+="",gE.lastIndex=0,gE.test(t)||(r=PC(t),h=PC(e)),h?r!==h&&(t=tE(A,c,t,h)+h):r&&(e+=r),this.add(E,"setProperty",t,e,C,B,0,0,c),i.push(c),K.push(c,0,E[c]);else if(n!=="undefined"){if(o&&c in o?(t=typeof o[c]=="function"?o[c].call(g,C,A,B):o[c],dC(t)&&~t.indexOf("random(")&&(t=ke(t)),PC(t+"")||t==="auto"||(t+=PB.units[c]||PC(ei(A,c))||""),(t+"").charAt(1)==="="&&(t=ei(A,c))):t=ei(A,c),s=parseFloat(t),S=n==="string"&&e.charAt(1)==="="&&e.substr(0,2),S&&(e=e.substr(2)),a=parseFloat(e),c in TQ&&(c==="autoAlpha"&&(s===1&&ei(A,"visibility")==="hidden"&&a&&(s=0),K.push("visibility",0,E.visibility),AE(this,E,"visibility",s?"inherit":"hidden",a?"inherit":"hidden",!a)),c!=="scale"&&c!=="transform"&&(c=TQ[c],~c.indexOf(",")&&(c=c.split(",")[0]))),l=c in Mi,l){if(this.styles.save(c),G||(M=A._gsap,M.renderTransform&&!I.parseTransform||Ke(A,I.parseTransform),U=I.smoothOrigin!==!1&&M.smooth,G=this._pt=new FB(this._pt,E,ug,0,1,M.renderTransform,M,0,-1),G.dep=1),c==="scale")this._pt=new FB(this._pt,M,"scaleY",M.scaleY,(S?at(M.scaleY,S+a):a)-M.scaleY||0,MD),this._pt.u=0,i.push("scaleY",c),c+="X";else if(c==="transformOrigin"){K.push(dB,0,E[dB]),e=uU(e),M.svg?KD(A,e,0,U,0,this):(h=parseFloat(e.split(" ")[2])||0,h!==M.zOrigin&&AE(this,M,"zOrigin",M.zOrigin,h),AE(this,E,c,Xs(t),Xs(e)));continue}else if(c==="svgOrigin"){KD(A,e,1,U,0,this);continue}else if(c in VG){mU(this,M,c,s,S?at(s,S+e):e);continue}else if(c==="smoothOrigin"){AE(this,M,"smooth",M.smooth,e);continue}else if(c==="force3D"){M[c]=e;continue}else if(c==="transform"){HU(this,e,A);continue}}else c in E||(c=wt(c)||c);if(l||(a||a===0)&&(s||s===0)&&!SU.test(e)&&c in E)r=(t+"").substr((s+"").length),a||(a=0),h=PC(e)||(c in PB.units?PB.units[c]:r),r!==h&&(s=tE(A,c,t,h)),this._pt=new FB(this._pt,l?M:E,c,s,(S?at(s,S+a):a)-s,!l&&(h==="px"||c==="zIndex")&&I.autoRound!==!1?kU:MD),this._pt.u=h||0,r!==h&&h!=="%"&&(this._pt.b=t,this._pt.r=yU);else if(c in E)fU.call(this,A,c,t,S?S+e:e);else if(c in A)this.add(A,c,t||A[c],S?S+e:e,C,B);else if(c!=="parseTransform"){qh(c,e);continue}l||(c in E?K.push(c,0,E[c]):K.push(c,1,t||A[c])),i.push(c)}}k&&TG(this)},render:function(A,I){if(I.tween._time||!vh())for(var g=I._pt;g;)g.r(A,g.d),g=g._next;else I.styles.revert()},get:ei,aliases:TQ,getSetter:function(A,I,g){var C=TQ[I];return C&&C.indexOf(",")<0&&(I=C),I in Mi&&I!==dB&&(A._gsap.x||ei(A,"x"))?g&&Jl===g?I==="scale"?KU:NU:(Jl=g||{})&&(I==="scale"?pU:FU):A.style&&!Jh(A.style[I])?MU:~I.indexOf("-")?UU:xh(A,I)},core:{_removeProperty:ro,_getMatrix:Ph}};JB.utils.checkPrefix=wt;JB.core.getStyleSaver=vG;(function(Q,A,I,g){var C=pB(Q+","+A+","+I,function(B){Mi[B]=1});pB(A,function(B){PB.units[B]="deg",VG[B]=1}),TQ[C[13]]=Q+","+A,pB(g,function(B){var i=B.split(":");TQ[i[1]]=C[i[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pB("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(Q){PB.units[Q]="px"});JB.registerPlugin(zG);var ji=JB.registerPlugin(zG)||JB;ji.core.Tween;typeof window<"u"&&(ji.registerPlugin($S.ScrollTrigger),ji.registerPlugin(U0.ScrollToPlugin));function TU(Q){let A,I='<div class="flex flex-col gap-5 items-center relative"><h1 class="text-7xl sm:text-8xl md:text-9xl font-display drop-shadow-xl">Three <br/> Body <br/> Problem</h1> <div class="text-2xl md:text-3xl font-displayAlt text-right">A Visual Explorable <br/> of Three Body Problem</div> <div class="relative top-0 right-0 font-displayAlt text-2xl sm:text-3xl md:text-4xl">By <a href="https://github.com/zslrmhb" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Hongbin Miao</a> <a href="https://github.com/Qz07" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Qirui Zheng</a></div></div>';return{c(){A=Gi("div"),A.innerHTML=I,this.h()},l(g){A=yi(g,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),y0(A)!=="svelte-ba0n24"&&(A.innerHTML=I),this.h()},h(){FC(A,"id","title"),FC(A,"class","relative lg:fixed lg:top-0 lg:left-0 lg:right-0 z-10 grid place-content-center pt-16 px-10 max-w-5xl mx-auto")},m(g,C){VA(g,A,C)},p:NB,i:NB,o:NB,d(g){g&&TA(A)}}}class bU extends Dg{constructor(A){super(),hg(this,A,null,TU,rg,{})}}function xU(Q){let A,I,g;const C=Q[3].default,B=zC(C,Q,Q[2],null);return{c(){A=Gi("section"),B&&B.c(),this.h()},l(i){A=yi(i,"SECTION",{id:!0,class:!0});var E=iE(A);B&&B.l(E),E.forEach(TA),this.h()},h(){FC(A,"id",Q[0]),FC(A,"class",I="prose prose-xl [&>*]:px-10 mb-60 "+Q[1])},m(i,E){VA(i,A,E),B&&B.m(A,null),g=!0},p(i,[E]){B&&B.p&&(!g||E&4)&&$C(B,C,i,i[2],g?IB(C,i[2],E,null):AB(i[2]),null),(!g||E&1)&&FC(A,"id",i[0]),(!g||E&2&&I!==(I="prose prose-xl [&>*]:px-10 mb-60 "+i[1]))&&FC(A,"class",I)},i(i){g||(oA(B,i),g=!0)},o(i){hA(B,i),g=!1},d(i){i&&TA(A),B&&B.d(i)}}}function _U(Q,A,I){let{$$slots:g={},$$scope:C}=A,{id:B=null}=A,{classNames:i=""}=A;return Q.$$set=E=>{"id"in E&&I(0,B=E.id),"classNames"in E&&I(1,i=E.classNames),"$$scope"in E&&I(2,C=E.$$scope)},[B,i,C,g]}class yr extends Dg{constructor(A){super(),hg(this,A,_U,xU,rg,{id:0,classNames:1})}}function OU(Q){let A,I;const g=Q[2].default,C=zC(g,Q,Q[1],null);return{c(){A=Gi("p"),C&&C.c(),this.h()},l(B){A=yi(B,"P",{id:!0,class:!0});var i=iE(A);C&&C.l(i),i.forEach(TA),this.h()},h(){FC(A,"id",Q[0]),FC(A,"class","")},m(B,i){VA(B,A,i),C&&C.m(A,null),I=!0},p(B,[i]){C&&C.p&&(!I||i&2)&&$C(C,g,B,B[1],I?IB(g,B[1],i,null):AB(B[1]),null),(!I||i&1)&&FC(A,"id",B[0])},i(B){I||(oA(C,B),I=!0)},o(B){hA(C,B),I=!1},d(B){B&&TA(A),C&&C.d(B)}}}function vU(Q,A,I){let{$$slots:g={},$$scope:C}=A,{id:B}=A;return Q.$$set=i=>{"id"in i&&I(0,B=i.id),"$$scope"in i&&I(1,C=i.$$scope)},[B,C,g]}class EQ extends Dg{constructor(A){super(),hg(this,A,vU,OU,rg,{id:0})}}function ZU(Q){let A;return{c(){A=Gi("div"),this.h()},l(I){A=yi(I,"DIV",{class:!0}),iE(A).forEach(TA),this.h()},h(){FC(A,"class","h-16")},m(I,g){VA(I,A,g)},p:NB,i:NB,o:NB,d(I){I&&TA(A)}}}class kr extends Dg{constructor(A){super(),hg(this,A,null,ZU,rg,{})}}function PU(Q){let A;return{c(){A=wB("This is part 1")},l(I){A=SB(I,"This is part 1")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function WU(Q){let A;return{c(){A=wB("This is part 2")},l(I){A=SB(I,"This is part 2")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function VU(Q){let A;return{c(){A=wB("This is part 3")},l(I){A=SB(I,"This is part 3")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function jU(Q){let A;return{c(){A=wB("This is part 4")},l(I){A=SB(I,"This is part 4")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function XU(Q){let A,I,g,C,B,i,E,o,t;return I=new EQ({props:{id:"st-1",$$slots:{default:[PU]},$$scope:{ctx:Q}}}),C=new EQ({props:{id:"st-2",$$slots:{default:[WU]},$$scope:{ctx:Q}}}),i=new EQ({props:{id:"st-3",$$slots:{default:[VU]},$$scope:{ctx:Q}}}),o=new EQ({props:{id:"st-4",$$slots:{default:[jU]},$$scope:{ctx:Q}}}),{c(){A=wB(`This is section 1
		`),FA(I.$$.fragment),g=GI(),FA(C.$$.fragment),B=GI(),FA(i.$$.fragment),E=GI(),FA(o.$$.fragment)},l(e){A=SB(e,`This is section 1
		`),dA(I.$$.fragment,e),g=yI(e),dA(C.$$.fragment,e),B=yI(e),dA(i.$$.fragment,e),E=yI(e),dA(o.$$.fragment,e)},m(e,a){VA(e,A,a),RA(I,e,a),VA(e,g,a),RA(C,e,a),VA(e,B,a),RA(i,e,a),VA(e,E,a),RA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(oA(I.$$.fragment,e),oA(C.$$.fragment,e),oA(i.$$.fragment,e),oA(o.$$.fragment,e),t=!0)},o(e){hA(I.$$.fragment,e),hA(C.$$.fragment,e),hA(i.$$.fragment,e),hA(o.$$.fragment,e),t=!1},d(e){e&&(TA(A),TA(g),TA(B),TA(E)),JA(I,e),JA(C,e),JA(i,e),JA(o,e)}}}function zU(Q){let A;return{c(){A=wB("This is part 5")},l(I){A=SB(I,"This is part 5")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function $U(Q){let A;return{c(){A=wB("This is part 6")},l(I){A=SB(I,"This is part 6")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function AN(Q){let A;return{c(){A=wB("This is part 7")},l(I){A=SB(I,"This is part 7")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function IN(Q){let A;return{c(){A=wB("This is part 8")},l(I){A=SB(I,"This is part 8")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function gN(Q){let A,I,g,C,B,i,E,o,t;return I=new EQ({props:{id:"st-5",$$slots:{default:[zU]},$$scope:{ctx:Q}}}),C=new EQ({props:{id:"st-6",$$slots:{default:[$U]},$$scope:{ctx:Q}}}),i=new EQ({props:{id:"st-7",$$slots:{default:[AN]},$$scope:{ctx:Q}}}),o=new EQ({props:{id:"st-8",$$slots:{default:[IN]},$$scope:{ctx:Q}}}),{c(){A=wB(`This is section 2
		`),FA(I.$$.fragment),g=GI(),FA(C.$$.fragment),B=GI(),FA(i.$$.fragment),E=GI(),FA(o.$$.fragment)},l(e){A=SB(e,`This is section 2
		`),dA(I.$$.fragment,e),g=yI(e),dA(C.$$.fragment,e),B=yI(e),dA(i.$$.fragment,e),E=yI(e),dA(o.$$.fragment,e)},m(e,a){VA(e,A,a),RA(I,e,a),VA(e,g,a),RA(C,e,a),VA(e,B,a),RA(i,e,a),VA(e,E,a),RA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(oA(I.$$.fragment,e),oA(C.$$.fragment,e),oA(i.$$.fragment,e),oA(o.$$.fragment,e),t=!0)},o(e){hA(I.$$.fragment,e),hA(C.$$.fragment,e),hA(i.$$.fragment,e),hA(o.$$.fragment,e),t=!1},d(e){e&&(TA(A),TA(g),TA(B),TA(E)),JA(I,e),JA(C,e),JA(i,e),JA(o,e)}}}function CN(Q){let A;return{c(){A=wB("This is part 9")},l(I){A=SB(I,"This is part 9")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function BN(Q){let A;return{c(){A=wB("This is part 10")},l(I){A=SB(I,"This is part 10")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function QN(Q){let A;return{c(){A=wB("This is part 11")},l(I){A=SB(I,"This is part 11")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function iN(Q){let A;return{c(){A=wB("This is part 12")},l(I){A=SB(I,"This is part 12")},m(I,g){VA(I,A,g)},d(I){I&&TA(A)}}}function EN(Q){let A,I,g,C,B,i,E,o,t;return I=new EQ({props:{id:"st-9",$$slots:{default:[CN]},$$scope:{ctx:Q}}}),C=new EQ({props:{id:"st-10",$$slots:{default:[BN]},$$scope:{ctx:Q}}}),i=new EQ({props:{id:"st-11",$$slots:{default:[QN]},$$scope:{ctx:Q}}}),o=new EQ({props:{id:"st-12",$$slots:{default:[iN]},$$scope:{ctx:Q}}}),{c(){A=wB(`This is section 3
		`),FA(I.$$.fragment),g=GI(),FA(C.$$.fragment),B=GI(),FA(i.$$.fragment),E=GI(),FA(o.$$.fragment)},l(e){A=SB(e,`This is section 3
		`),dA(I.$$.fragment,e),g=yI(e),dA(C.$$.fragment,e),B=yI(e),dA(i.$$.fragment,e),E=yI(e),dA(o.$$.fragment,e)},m(e,a){VA(e,A,a),RA(I,e,a),VA(e,g,a),RA(C,e,a),VA(e,B,a),RA(i,e,a),VA(e,E,a),RA(o,e,a),t=!0},p(e,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:e}),I.$set(s);const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),C.$set(n);const D={};a&1&&(D.$$scope={dirty:a,ctx:e}),i.$set(D);const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),o.$set(c)},i(e){t||(oA(I.$$.fragment,e),oA(C.$$.fragment,e),oA(i.$$.fragment,e),oA(o.$$.fragment,e),t=!0)},o(e){hA(I.$$.fragment,e),hA(C.$$.fragment,e),hA(i.$$.fragment,e),hA(o.$$.fragment,e),t=!1},d(e){e&&(TA(A),TA(g),TA(B),TA(E)),JA(I,e),JA(C,e),JA(i,e),JA(o,e)}}}function oN(Q){let A,I,g,C,B,i,E,o,t,e,a,s,n,D,c;return C=new yr({props:{id:"section-1",classNames:"animate",$$slots:{default:[XU]},$$scope:{ctx:Q}}}),i=new kr({}),o=new yr({props:{id:"section-2",classNames:"animate",$$slots:{default:[gN]},$$scope:{ctx:Q}}}),e=new kr({}),s=new yr({props:{id:"section-3",classNames:"animate",$$slots:{default:[EN]},$$scope:{ctx:Q}}}),D=new kr({}),{c(){A=Gi("div"),I=Gi("div"),g=GI(),FA(C.$$.fragment),B=GI(),FA(i.$$.fragment),E=GI(),FA(o.$$.fragment),t=GI(),FA(e.$$.fragment),a=GI(),FA(s.$$.fragment),n=GI(),FA(D.$$.fragment),this.h()},l(r){A=yi(r,"DIV",{id:!0,class:!0});var h=iE(A);I=yi(h,"DIV",{id:!0,class:!0}),iE(I).forEach(TA),g=yI(h),dA(C.$$.fragment,h),B=yI(h),dA(i.$$.fragment,h),E=yI(h),dA(o.$$.fragment,h),t=yI(h),dA(e.$$.fragment,h),a=yI(h),dA(s.$$.fragment,h),n=yI(h),dA(D.$$.fragment,h),h.forEach(TA),this.h()},h(){FC(I,"id","title-spacer"),FC(I,"class","h-[2500px]"),FC(A,"id","article"),FC(A,"class","relative max-w-prose bg-gradient-to-l from-base-100 via-base-300 via-90% py-12")},m(r,h){VA(r,A,h),Ei(A,I),Ei(A,g),RA(C,A,null),Ei(A,B),RA(i,A,null),Ei(A,E),RA(o,A,null),Ei(A,t),RA(e,A,null),Ei(A,a),RA(s,A,null),Ei(A,n),RA(D,A,null),c=!0},p(r,[h]){const S={};h&1&&(S.$$scope={dirty:h,ctx:r}),C.$set(S);const l={};h&1&&(l.$$scope={dirty:h,ctx:r}),o.$set(l);const G={};h&1&&(G.$$scope={dirty:h,ctx:r}),s.$set(G)},i(r){c||(oA(C.$$.fragment,r),oA(i.$$.fragment,r),oA(o.$$.fragment,r),oA(e.$$.fragment,r),oA(s.$$.fragment,r),oA(D.$$.fragment,r),c=!0)},o(r){hA(C.$$.fragment,r),hA(i.$$.fragment,r),hA(o.$$.fragment,r),hA(e.$$.fragment,r),hA(s.$$.fragment,r),hA(D.$$.fragment,r),c=!1},d(r){r&&TA(A),JA(C),JA(i),JA(o),JA(e),JA(s),JA(D)}}}class tN extends Dg{constructor(A){super(),hg(this,A,null,oN,rg,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="161",vE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ZE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$G=0,pD=1,Ay=2,eN=3,aN=0,Wh=1,cn=2,uQ=3,Ui=0,cB=1,HQ=2,ci=0,oo=1,zs=2,FD=3,dD=4,Iy=5,Xi=100,gy=101,Cy=102,RD=103,JD=104,By=200,Qy=201,iy=202,Ey=203,$s=204,An=205,oy=206,ty=207,ey=208,ay=209,sy=210,ny=211,ry=212,Dy=213,hy=214,cy=0,ly=1,wy=2,pe=3,Sy=4,Gy=5,yy=6,ky=7,Qa=0,My=1,Uy=2,li=0,Ny=1,Ky=2,py=3,Vh=4,Fy=5,dy=6,fD="attached",Ry="detached",ln=300,Ni=301,eE=302,Fe=303,de=304,pt=306,Re=1e3,WC=1001,Je=1002,zg=1003,In=1004,sN=1004,VE=1005,nN=1005,fg=1006,De=1007,rN=1007,bQ=1008,DN=1008,wi=1009,Jy=1010,fy=1011,wn=1012,jh=1013,ni=1014,BQ=1015,St=1016,Xh=1017,zh=1018,CE=1020,uy=1021,UB=1023,qy=1024,Yy=1025,BE=1026,Do=1027,Ly=1028,$h=1029,my=1030,Ac=1031,Ic=1033,Ls=33776,ms=33777,Hs=33778,Ts=33779,uD=35840,qD=35841,YD=35842,LD=35843,gc=36196,mD=37492,HD=37496,TD=37808,bD=37809,xD=37810,_D=37811,OD=37812,vD=37813,ZD=37814,PD=37815,WD=37816,VD=37817,jD=37818,XD=37819,zD=37820,$D=37821,bs=36492,Ah=36494,Ih=36495,Hy=36283,gh=36284,Ch=36285,Bh=36286,Ty=2200,by=2201,xy=2202,fe=2300,ue=2301,xs=2302,zE=2400,$E=2401,qe=2402,Sn=2500,Cc=2501,hN=0,cN=1,lN=2,Ye=3e3,Si=3001,_y=3200,Oy=3201,DE=0,vy=1,_B="",hC="srgb",ZQ="srgb-linear",Gn="display-p3",ia="display-p3-linear",Le="linear",wg="srgb",me="rec709",He="p3",wN=0,PE=7680,SN=7681,GN=7682,yN=7683,kN=34055,MN=34056,UN=5386,NN=512,KN=513,pN=514,FN=515,dN=516,RN=517,JN=518,Qh=519,Zy=512,Py=513,Wy=514,Bc=515,Vy=516,jy=517,Xy=518,zy=519,Te=35044,fN=35048,uN=35040,qN=35045,YN=35049,LN=35041,mN=35046,HN=35050,TN=35042,bN="100",ih="300 es",gn=1035,xQ=2e3,be=2001;class PQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const OC=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const to=Math.PI/180,Gt=180/Math.PI;function WB(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(OC[Q&255]+OC[Q>>8&255]+OC[Q>>16&255]+OC[Q>>24&255]+"-"+OC[A&255]+OC[A>>8&255]+"-"+OC[A>>16&15|64]+OC[A>>24&255]+"-"+OC[I&63|128]+OC[I>>8&255]+"-"+OC[I>>16&255]+OC[I>>24&255]+OC[g&255]+OC[g>>8&255]+OC[g>>16&255]+OC[g>>24&255]).toLowerCase()}function xg(Q,A,I){return Math.max(A,Math.min(I,Q))}function Qc(Q,A){return(Q%A+A)%A}function xN(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function _N(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function he(Q,A,I){return(1-I)*Q+I*A}function ON(Q,A,I,g){return he(Q,A,1-Math.exp(-I*g))}function vN(Q,A=1){return A-Math.abs(Qc(Q,A*2)-A)}function ZN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function PN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function WN(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function VN(Q,A){return Q+Math.random()*(A-Q)}function jN(Q){return Q*(.5-Math.random())}function XN(Q){Q!==void 0&&(Tl=Q);let A=Tl+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function zN(Q){return Q*to}function $N(Q){return Q*Gt}function Eh(Q){return(Q&Q-1)===0&&Q!==0}function AK(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function Cn(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function IK(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),o=i(I/2),t=B((A+g)/2),e=i((A+g)/2),a=B((A-g)/2),s=i((A-g)/2),n=B((g-A)/2),D=i((g-A)/2);switch(C){case"XYX":Q.set(E*e,o*a,o*s,E*t);break;case"YZY":Q.set(o*s,E*e,o*a,E*t);break;case"ZXZ":Q.set(o*a,o*s,E*e,E*t);break;case"XZX":Q.set(E*e,o*D,o*n,E*t);break;case"YXY":Q.set(o*n,E*e,o*D,E*t);break;case"ZYZ":Q.set(o*D,o*n,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function hB(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function uI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const $y={DEG2RAD:to,RAD2DEG:Gt,generateUUID:WB,clamp:xg,euclideanModulo:Qc,mapLinear:xN,inverseLerp:_N,lerp:he,damp:ON,pingpong:vN,smoothstep:ZN,smootherstep:PN,randInt:WN,randFloat:VN,randFloatSpread:jN,seededRandom:XN,degToRad:zN,radToDeg:$N,isPowerOfTwo:Eh,ceilPowerOfTwo:AK,floorPowerOfTwo:Cn,setQuaternionFromProperEuler:IK,normalize:uI,denormalize:hB};class DA{constructor(A=0,I=0){DA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class YI{constructor(A,I,g,C,B,i,E,o,t){YI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t)}set(A,I,g,C,B,i,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=i,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],D=g[8],c=C[0],r=C[3],h=C[6],S=C[1],l=C[4],G=C[7],M=C[2],U=C[5],k=C[8];return B[0]=i*c+E*S+o*M,B[3]=i*r+E*l+o*U,B[6]=i*h+E*G+o*k,B[1]=t*c+e*S+a*M,B[4]=t*r+e*l+a*U,B[7]=t*h+e*G+a*k,B[2]=s*c+n*S+D*M,B[5]=s*r+n*l+D*U,B[8]=s*h+n*G+D*k,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*i*e-I*E*t-g*B*e+g*E*o+C*B*t-C*i*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*i-E*t,s=E*o-e*B,n=t*B-i*o,D=I*a+g*s+C*n;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/D;return A[0]=a*c,A[1]=(C*t-e*g)*c,A[2]=(E*g-C*i)*c,A[3]=s*c,A[4]=(e*I-C*o)*c,A[5]=(C*B-E*I)*c,A[6]=n*c,A[7]=(g*o-t*I)*c,A[8]=(i*I-g*B)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*i+t*E)+i+A,-C*t,C*o,-C*(-t*i+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(Mr.makeScale(A,I)),this}rotate(A){return this.premultiply(Mr.makeRotation(-A)),this}translate(A,I){return this.premultiply(Mr.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new YI;function Ak(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const gK={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Et(Q,A){return new gK[Q](A)}function xe(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function Ik(){const Q=xe("canvas");return Q.style.display="block",Q}const bl={};function eo(Q){Q in bl||(bl[Q]=!0,console.warn(Q))}const xl=new YI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_l=new YI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[ZQ]:{transfer:Le,primaries:me,toReference:Q=>Q,fromReference:Q=>Q},[hC]:{transfer:wg,primaries:me,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[ia]:{transfer:Le,primaries:He,toReference:Q=>Q.applyMatrix3(_l),fromReference:Q=>Q.applyMatrix3(xl)},[Gn]:{transfer:wg,primaries:He,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(_l),fromReference:Q=>Q.applyMatrix3(xl).convertLinearToSRGB()}},CK=new Set([ZQ,ia]),Ig={enabled:!0,_workingColorSpace:ZQ,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!CK.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=ba[A].toReference,C=ba[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return ba[Q].primaries},getTransfer:function(Q){return Q===_B?Le:ba[Q].transfer}};function rt(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function Ur(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let Lo;class ic{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{Lo===void 0&&(Lo=xe("canvas")),Lo.width=A.width,Lo.height=A.height;const g=Lo.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=Lo}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=xe("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=rt(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(rt(I[g]/255)*255):I[g]=rt(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let BK=0;class Ao{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BK++}),this.uuid=WB(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(Nr(C[i].image)):B.push(Nr(C[i]))}else B=Nr(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function Nr(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?ic.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QK=0;class Og extends PQ{constructor(A=Og.DEFAULT_IMAGE,I=Og.DEFAULT_MAPPING,g=WC,C=WC,B=fg,i=bQ,E=UB,o=wi,t=Og.DEFAULT_ANISOTROPY,e=_B){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QK++}),this.uuid=WB(),this.name="",this.source=new Ao(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new DA(0,0),this.repeat=new DA(1,1),this.center=new DA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Si?hC:_B),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ln)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Re:A.x=A.x-Math.floor(A.x);break;case WC:A.x=A.x<0?0:1;break;case Je:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Re:A.y=A.y-Math.floor(A.y);break;case WC:A.y=A.y<0?0:1;break;case Je:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hC?Si:Ye}set encoding(A){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===Si?hC:_B}}Og.DEFAULT_IMAGE=null;Og.DEFAULT_MAPPING=ln;Og.DEFAULT_ANISOTROPY=1;class og{constructor(A=0,I=0,g=0,C=1){og.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],D=o[9],c=o[2],r=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-c)<.01&&Math.abs(D-r)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+c)<.1&&Math.abs(D+r)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const l=(t+1)/2,G=(n+1)/2,M=(h+1)/2,U=(e+s)/4,k=(a+c)/4,K=(D+r)/4;return l>G&&l>M?l<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(l),C=U/g,B=k/g):G>M?G<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(G),g=U/C,B=K/C):M<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(M),g=k/B,C=K/B),this.set(g,C,B,I),this}let S=Math.sqrt((r-D)*(r-D)+(a-c)*(a-c)+(s-e)*(s-e));return Math.abs(S)<.001&&(S=1),this.x=(r-D)/S,this.y=(a-c)/S,this.z=(s-e)/S,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gk extends PQ{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new og(0,0,A,I),this.scissorTest=!1,this.viewport=new og(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===Si?hC:_B),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Og(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ao(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class NQ extends gk{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class yn extends Og{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=zg,this.minFilter=zg,this.wrapR=WC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iK extends NQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new yn(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Ec extends Og{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=zg,this.minFilter=zg,this.wrapR=WC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EK extends NQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new Ec(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class oK extends NQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class vg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[i+0],n=B[i+1],D=B[i+2],c=B[i+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=D,A[I+3]=c;return}if(a!==c||o!==s||t!==n||e!==D){let r=1-E;const h=o*s+t*n+e*D+a*c,S=h>=0?1:-1,l=1-h*h;if(l>Number.EPSILON){const M=Math.sqrt(l),U=Math.atan2(M,h*S);r=Math.sin(r*U)/M,E=Math.sin(E*U)/M}const G=E*S;if(o=o*r+s*G,t=t*r+n*G,e=e*r+D*G,a=a*r+c*G,r===1-E){const M=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=M,t*=M,e*=M,a*=M}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[i],s=B[i+1],n=B[i+2],D=B[i+3];return A[I]=E*D+e*a+o*n-t*s,A[I+1]=o*D+e*s+t*a-E*n,A[I+2]=t*D+e*n+E*s-o*a,A[I+3]=e*D-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),s=o(g/2),n=o(C/2),D=o(B/2);switch(i){case"XYZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"YXZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"ZXY":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"ZYX":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"YZX":this._x=s*e*a+t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a-s*n*D;break;case"XZY":this._x=s*e*a-t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a+s*n*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(B-t)*n,this._z=(i-C)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+i)/n,this._z=(B+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(B-t)/n,this._x=(C+i)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(i-C)/n,this._x=(B+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(xg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+i*E+C*t-B*o,this._y=C*e+i*o+B*E-g*t,this._z=B*e+i*t+g*o-C*E,this._w=i*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=i*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u{constructor(A=0,I=0,g=0){u.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ol.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ol.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,o=A.w,t=2*(i*C-E*g),e=2*(E*I-B*C),a=2*(B*g-i*I);return this.x=I+o*t+i*a-E*e,this.y=g+o*e+E*t-B*a,this.z=C+o*a+B*e-i*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*i-g*o,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Kr.copy(this).projectOnVector(A),this.sub(Kr)}reflect(A){return this.sub(Kr.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new u,Ol=new vg;class lB{constructor(A=new u(1/0,1/0,1/0),I=new u(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(cQ.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(cQ.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=cQ.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let i=0,E=B.count;i<E;i++)A.isMesh===!0?A.getVertexPosition(i,cQ):cQ.fromBufferAttribute(B,i),cQ.applyMatrix4(A.matrixWorld),this.expandByPoint(cQ);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),xa.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),xa.copy(g.boundingBox)),xa.applyMatrix4(A.matrixWorld),this.union(xa)}const C=A.children;for(let B=0,i=C.length;B<i;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,cQ),cQ.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Pt),_a.subVectors(this.max,Pt),mo.subVectors(A.a,Pt),Ho.subVectors(A.b,Pt),To.subVectors(A.c,Pt),Ti.subVectors(Ho,mo),bi.subVectors(To,Ho),fE.subVectors(mo,To);let I=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-fE.z,fE.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,fE.z,0,-fE.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-fE.y,fE.x,0];return!pr(I,mo,Ho,To,_a)||(I=[1,0,0,0,1,0,0,0,1],!pr(I,mo,Ho,To,_a))?!1:(Oa.crossVectors(Ti,bi),I=[Oa.x,Oa.y,Oa.z],pr(I,mo,Ho,To,_a))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,cQ).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(cQ).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Ii),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Ii=[new u,new u,new u,new u,new u,new u,new u,new u],cQ=new u,xa=new lB,mo=new u,Ho=new u,To=new u,Ti=new u,bi=new u,fE=new u,Pt=new u,_a=new u,Oa=new u,uE=new u;function pr(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){uE.fromArray(Q,B);const E=C.x*Math.abs(uE.x)+C.y*Math.abs(uE.y)+C.z*Math.abs(uE.z),o=A.dot(uE),t=I.dot(uE),e=g.dot(uE);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const tK=new lB,Wt=new u,Fr=new u;class XC{constructor(A=new u,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):tK.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Wt.subVectors(A,this.center);const I=Wt.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(Wt,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Fr.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Wt.copy(A.center).add(Fr)),this.expandByPoint(Wt.copy(A.center).sub(Fr))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new u,dr=new u,va=new u,xi=new u,Rr=new u,Za=new u,Jr=new u;class yo{constructor(A=new u,I=new u(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,gi)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=gi.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(gi.copy(this.origin).addScaledVector(this.direction,I),gi.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){dr.copy(A).add(I).multiplyScalar(.5),va.copy(I).sub(A).normalize(),xi.copy(this.origin).sub(dr);const B=A.distanceTo(I)*.5,i=-this.direction.dot(va),E=xi.dot(this.direction),o=-xi.dot(va),t=xi.lengthSq(),e=Math.abs(1-i*i);let a,s,n,D;if(e>0)if(a=i*o-E,s=i*E-o,D=B*e,a>=0)if(s>=-D)if(s<=D){const c=1/e;a*=c,s*=c,n=a*(a+i*s+2*E)+s*(i*a+s+2*o)+t}else s=B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-D?(a=Math.max(0,-(-i*B+E)),s=a>0?-B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t):s<=D?(a=0,s=Math.min(Math.max(-B,-o),B),n=s*(s+2*o)+t):(a=Math.max(0,-(i*B+E)),s=a>0?B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t);else s=i>0?-B:B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(dr).addScaledVector(va,s),n}intersectSphere(A,I){gi.subVectors(A.center,this.origin);const g=gi.dot(this.direction),C=gi.dot(gi)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,o=g+i;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,i=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,i=(A.min.y-s.y)*e),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,gi)!==null}intersectTriangle(A,I,g,C,B){Rr.subVectors(I,A),Za.subVectors(g,A),Jr.crossVectors(Rr,Za);let i=this.direction.dot(Jr),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;xi.subVectors(this.origin,A);const o=E*this.direction.dot(Za.crossVectors(xi,Za));if(o<0)return null;const t=E*this.direction.dot(Rr.cross(xi));if(t<0||o+t>i)return null;const e=-E*xi.dot(Jr);return e<0?null:this.at(e/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cI{constructor(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,r){cI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,r)}set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,c,r){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=i,h[9]=E,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=D,h[11]=c,h[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/bo.setFromMatrixColumn(A,0).length(),B=1/bo.setFromMatrixColumn(A,1).length(),i=1/bo.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=i*e,n=i*a,D=E*e,c=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+D*t,I[5]=s-c*t,I[9]=-E*o,I[2]=c-s*t,I[6]=D+n*t,I[10]=i*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,D=t*e,c=t*a;I[0]=s+c*E,I[4]=D*E-n,I[8]=i*t,I[1]=i*a,I[5]=i*e,I[9]=-E,I[2]=n*E-D,I[6]=c+s*E,I[10]=i*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,D=t*e,c=t*a;I[0]=s-c*E,I[4]=-i*a,I[8]=D+n*E,I[1]=n+D*E,I[5]=i*e,I[9]=c-s*E,I[2]=-i*t,I[6]=E,I[10]=i*o}else if(A.order==="ZYX"){const s=i*e,n=i*a,D=E*e,c=E*a;I[0]=o*e,I[4]=D*t-n,I[8]=s*t+c,I[1]=o*a,I[5]=c*t+s,I[9]=n*t-D,I[2]=-t,I[6]=E*o,I[10]=i*o}else if(A.order==="YZX"){const s=i*o,n=i*t,D=E*o,c=E*t;I[0]=o*e,I[4]=c-s*a,I[8]=D*a+n,I[1]=a,I[5]=i*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+D,I[10]=s-c*a}else if(A.order==="XZY"){const s=i*o,n=i*t,D=E*o,c=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+c,I[5]=i*e,I[9]=n*a-D,I[2]=D*a-n,I[6]=E*e,I[10]=c*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(eK,A,aK)}lookAt(A,I,g){const C=this.elements;return mB.subVectors(A,I),mB.lengthSq()===0&&(mB.z=1),mB.normalize(),_i.crossVectors(g,mB),_i.lengthSq()===0&&(Math.abs(g.z)===1?mB.x+=1e-4:mB.z+=1e-4,mB.normalize(),_i.crossVectors(g,mB)),_i.normalize(),Pa.crossVectors(mB,_i),C[0]=_i.x,C[4]=Pa.x,C[8]=mB.x,C[1]=_i.y,C[5]=Pa.y,C[9]=mB.y,C[2]=_i.z,C[6]=Pa.z,C[10]=mB.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],D=g[2],c=g[6],r=g[10],h=g[14],S=g[3],l=g[7],G=g[11],M=g[15],U=C[0],k=C[4],K=C[8],q=C[12],y=C[1],N=C[5],T=C[9],v=C[13],H=C[2],V=C[6],_=C[10],j=C[14],AA=C[3],IA=C[7],tA=C[11],aA=C[15];return B[0]=i*U+E*y+o*H+t*AA,B[4]=i*k+E*N+o*V+t*IA,B[8]=i*K+E*T+o*_+t*tA,B[12]=i*q+E*v+o*j+t*aA,B[1]=e*U+a*y+s*H+n*AA,B[5]=e*k+a*N+s*V+n*IA,B[9]=e*K+a*T+s*_+n*tA,B[13]=e*q+a*v+s*j+n*aA,B[2]=D*U+c*y+r*H+h*AA,B[6]=D*k+c*N+r*V+h*IA,B[10]=D*K+c*T+r*_+h*tA,B[14]=D*q+c*v+r*j+h*aA,B[3]=S*U+l*y+G*H+M*AA,B[7]=S*k+l*N+G*V+M*IA,B[11]=S*K+l*T+G*_+M*tA,B[15]=S*q+l*v+G*j+M*aA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],D=A[3],c=A[7],r=A[11],h=A[15];return D*(+B*o*a-C*t*a-B*E*s+g*t*s+C*E*n-g*o*n)+c*(+I*o*n-I*t*s+B*i*s-C*i*n+C*t*e-B*o*e)+r*(+I*t*a-I*E*n-B*i*a+g*i*n+B*E*e-g*t*e)+h*(-C*E*e-I*o*a+I*E*s+C*i*a-g*i*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],D=A[12],c=A[13],r=A[14],h=A[15],S=a*r*t-c*s*t+c*o*n-E*r*n-a*o*h+E*s*h,l=D*s*t-e*r*t-D*o*n+i*r*n+e*o*h-i*s*h,G=e*c*t-D*a*t+D*E*n-i*c*n-e*E*h+i*a*h,M=D*a*o-e*c*o-D*E*s+i*c*s+e*E*r-i*a*r,U=I*S+g*l+C*G+B*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return A[0]=S*k,A[1]=(c*s*B-a*r*B-c*C*n+g*r*n+a*C*h-g*s*h)*k,A[2]=(E*r*B-c*o*B+c*C*t-g*r*t-E*C*h+g*o*h)*k,A[3]=(a*o*B-E*s*B-a*C*t+g*s*t+E*C*n-g*o*n)*k,A[4]=l*k,A[5]=(e*r*B-D*s*B+D*C*n-I*r*n-e*C*h+I*s*h)*k,A[6]=(D*o*B-i*r*B-D*C*t+I*r*t+i*C*h-I*o*h)*k,A[7]=(i*s*B-e*o*B+e*C*t-I*s*t-i*C*n+I*o*n)*k,A[8]=G*k,A[9]=(D*a*B-e*c*B-D*g*n+I*c*n+e*g*h-I*a*h)*k,A[10]=(i*c*B-D*E*B+D*g*t-I*c*t-i*g*h+I*E*h)*k,A[11]=(e*E*B-i*a*B-e*g*t+I*a*t+i*g*n-I*E*n)*k,A[12]=M*k,A[13]=(e*c*C-D*a*C+D*g*s-I*c*s-e*g*r+I*a*r)*k,A[14]=(D*E*C-i*c*C-D*g*o+I*c*o+i*g*r-I*E*r)*k,A[15]=(i*a*C-e*E*C+e*g*o-I*a*o-i*g*s+I*E*s)*k,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,o=A.z,t=B*i,e=B*E;return this.set(t*i+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*i,0,t*o-C*E,e*o+C*i,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,o=I._w,t=B+B,e=i+i,a=E+E,s=B*t,n=B*e,D=B*a,c=i*e,r=i*a,h=E*a,S=o*t,l=o*e,G=o*a,M=g.x,U=g.y,k=g.z;return C[0]=(1-(c+h))*M,C[1]=(n+G)*M,C[2]=(D-l)*M,C[3]=0,C[4]=(n-G)*U,C[5]=(1-(s+h))*U,C[6]=(r+S)*U,C[7]=0,C[8]=(D+l)*k,C[9]=(r-S)*k,C[10]=(1-(s+c))*k,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=bo.set(C[0],C[1],C[2]).length();const i=bo.set(C[4],C[5],C[6]).length(),E=bo.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],lQ.copy(this);const t=1/B,e=1/i,a=1/E;return lQ.elements[0]*=t,lQ.elements[1]*=t,lQ.elements[2]*=t,lQ.elements[4]*=e,lQ.elements[5]*=e,lQ.elements[6]*=e,lQ.elements[8]*=a,lQ.elements[9]*=a,lQ.elements[10]*=a,I.setFromRotationMatrix(lQ),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i,E=xQ){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,D;if(E===xQ)n=-(i+B)/(i-B),D=-2*i*B/(i-B);else if(E===be)n=-i/(i-B),D=-i*B/(i-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=D,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,i,E=xQ){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(i-B),s=(I+A)*t,n=(g+C)*e;let D,c;if(E===xQ)D=(i+B)*a,c=-2*a;else if(E===be)D=B*a,c=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=c,o[14]=-D,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const bo=new u,lQ=new cI,eK=new u(0,0,0),aK=new u(1,1,1),_i=new u,Pa=new u,mB=new u,vl=new cI,Zl=new vg;class ko{constructor(A=0,I=0,g=0,C=ko.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(xg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-xg(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(xg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-xg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(xg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-xg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return vl.makeRotationFromQuaternion(A),this.setFromRotationMatrix(vl,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ko.DEFAULT_ORDER="XYZ";class kn{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let sK=0;const Pl=new u,xo=new vg,Ci=new cI,Wa=new u,Vt=new u,nK=new u,rK=new vg,Wl=new u(1,0,0),Vl=new u(0,1,0),jl=new u(0,0,1),DK={type:"added"},hK={type:"removed"};class VI extends PQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sK++}),this.uuid=WB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=VI.DEFAULT_UP.clone();const A=new u,I=new ko,g=new vg,C=new u(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new cI},normalMatrix:{value:new YI}}),this.matrix=new cI,this.matrixWorld=new cI,this.matrixAutoUpdate=VI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=VI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return xo.setFromAxisAngle(A,I),this.quaternion.multiply(xo),this}rotateOnWorldAxis(A,I){return xo.setFromAxisAngle(A,I),this.quaternion.premultiply(xo),this}rotateX(A){return this.rotateOnAxis(Wl,A)}rotateY(A){return this.rotateOnAxis(Vl,A)}rotateZ(A){return this.rotateOnAxis(jl,A)}translateOnAxis(A,I){return Pl.copy(A).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Wl,A)}translateY(A){return this.translateOnAxis(Vl,A)}translateZ(A){return this.translateOnAxis(jl,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?Wa.copy(A):Wa.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),Vt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Vt,Wa,this.up):Ci.lookAt(Wa,Vt,this.up),this.quaternion.setFromRotationMatrix(Ci),C&&(Ci.extractRotation(C.matrixWorld),xo.setFromRotationMatrix(Ci),this.quaternion.premultiply(xo.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(DK)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(hK)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ci.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ci),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,i=C.length;B<i;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vt,A,nK),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vt,rK,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=i(A.geometries),o=i(A.materials),t=i(A.textures),e=i(A.images),a=i(A.shapes),s=i(A.skeletons),n=i(A.animations),D=i(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),D.length>0&&(g.nodes=D)}return g.object=C,g;function i(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}VI.DEFAULT_UP=new u(0,1,0);VI.DEFAULT_MATRIX_AUTO_UPDATE=!0;VI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wQ=new u,Bi=new u,fr=new u,Qi=new u,_o=new u,Oo=new u,Xl=new u,ur=new u,qr=new u,Yr=new u;class OB{constructor(A=new u,I=new u,g=new u){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),wQ.subVectors(A,I),C.cross(wQ);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){wQ.subVectors(C,I),Bi.subVectors(g,I),fr.subVectors(A,I);const i=wQ.dot(wQ),E=wQ.dot(Bi),o=wQ.dot(fr),t=Bi.dot(Bi),e=Bi.dot(fr),a=i*t-E*E;if(a===0)return B.set(0,0,0),null;const s=1/a,n=(t*o-E*e)*s,D=(i*e-E*o)*s;return B.set(1-n-D,D,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(A,I,g,C,B,i,E,o){return this.getBarycoord(A,I,g,C,Qi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,Qi.x),o.addScaledVector(i,Qi.y),o.addScaledVector(E,Qi.z),o)}static isFrontFacing(A,I,g,C){return wQ.subVectors(g,I),Bi.subVectors(A,I),wQ.cross(Bi).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return wQ.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),wQ.cross(Bi).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return OB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return OB.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return OB.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return OB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return OB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;_o.subVectors(C,g),Oo.subVectors(B,g),ur.subVectors(A,g);const o=_o.dot(ur),t=Oo.dot(ur);if(o<=0&&t<=0)return I.copy(g);qr.subVectors(A,C);const e=_o.dot(qr),a=Oo.dot(qr);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return i=o/(o-e),I.copy(g).addScaledVector(_o,i);Yr.subVectors(A,B);const n=_o.dot(Yr),D=Oo.dot(Yr);if(D>=0&&n<=D)return I.copy(B);const c=n*t-o*D;if(c<=0&&t>=0&&D<=0)return E=t/(t-D),I.copy(g).addScaledVector(Oo,E);const r=e*D-n*a;if(r<=0&&a-e>=0&&n-D>=0)return Xl.subVectors(B,C),E=(a-e)/(a-e+(n-D)),I.copy(C).addScaledVector(Xl,E);const h=1/(r+c+s);return i=c*h,E=s*h,I.copy(g).addScaledVector(_o,i).addScaledVector(Oo,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Ck={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Lr(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class PA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=hC){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,Ig.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=Ig.workingColorSpace){return this.r=A,this.g=I,this.b=g,Ig.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=Ig.workingColorSpace){if(A=Qc(A,1),I=xg(I,0,1),g=xg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=Lr(i,B,A+1/3),this.g=Lr(i,B,A),this.b=Lr(i,B,A-1/3)}return Ig.toWorkingColorSpace(this,C),this}setStyle(A,I=hC){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=hC){const g=Ck[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=rt(A.r),this.g=rt(A.g),this.b=rt(A.b),this}copyLinearToSRGB(A){return this.r=Ur(A.r),this.g=Ur(A.g),this.b=Ur(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=hC){return Ig.fromWorkingColorSpace(vC.copy(this),A),Math.round(xg(vC.r*255,0,255))*65536+Math.round(xg(vC.g*255,0,255))*256+Math.round(xg(vC.b*255,0,255))}getHexString(A=hC){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=Ig.workingColorSpace){Ig.fromWorkingColorSpace(vC.copy(this),I);const g=vC.r,C=vC.g,B=vC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+i)/2;if(E===i)o=0,t=0;else{const a=i-E;switch(t=e<=.5?a/(i+E):a/(2-i-E),i){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=Ig.workingColorSpace){return Ig.fromWorkingColorSpace(vC.copy(this),I),A.r=vC.r,A.g=vC.g,A.b=vC.b,A}getStyle(A=hC){Ig.fromWorkingColorSpace(vC.copy(this),A);const I=vC.r,g=vC.g,C=vC.b;return A!==hC?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(Oi),this.setHSL(Oi.h+A,Oi.s+I,Oi.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Oi),A.getHSL(Va);const g=he(Oi.h,Va.h,I),C=he(Oi.s,Va.s,I),B=he(Oi.l,Va.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vC=new PA;PA.NAMES=Ck;let cK=0;class gB extends PQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cK++}),this.uuid=WB(),this.name="",this.type="Material",this.blending=oo,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$s,this.blendDst=An,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new PA(0,0,0),this.blendAlpha=0,this.depthFunc=pe,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=PE,this.stencilZFail=PE,this.stencilZPass=PE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(g.blending=this.blending),this.side!==Ui&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==$s&&(g.blendSrc=this.blendSrc),this.blendDst!==An&&(g.blendDst=this.blendDst),this.blendEquation!==Xi&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==pe&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==PE&&(g.stencilFail=this.stencilFail),this.stencilZFail!==PE&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==PE&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const o=B[E];delete o.metadata,i.push(o)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class hE extends gB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new PA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const si=lK();function lK(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,B[o]=t|e}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)i[o]=o<<23;i[31]=1199570944,i[32]=2147483648;for(let o=33;o<63;++o)i[o]=2147483648+(o-32<<23);i[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(E[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function MB(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=xg(Q,-65504,65504),si.floatView[0]=Q;const A=si.uint32View[0],I=A>>23&511;return si.baseTable[I]+((A&8388607)>>si.shiftTable[I])}function ie(Q){const A=Q>>10;return si.uint32View[0]=si.mantissaTable[si.offsetTable[A]+(Q&1023)]+si.exponentTable[A],si.floatView[0]}const wK={toHalfFloat:MB,fromHalfFloat:ie},QC=new u,ja=new DA;class tg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Te,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=BQ,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return eo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ja.fromBufferAttribute(this,I),ja.applyMatrix3(A),this.setXY(I,ja.x,ja.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyMatrix3(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyMatrix4(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.applyNormalMatrix(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)QC.fromBufferAttribute(this,I),QC.transformDirection(A),this.setXYZ(I,QC.x,QC.y,QC.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=hB(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=uI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=hB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=hB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=hB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=hB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Te&&(A.usage=this.usage),A}}class SK extends tg{constructor(A,I,g){super(new Int8Array(A),I,g)}}class GK extends tg{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class yK extends tg{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class kK extends tg{constructor(A,I,g){super(new Int16Array(A),I,g)}}class oc extends tg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class MK extends tg{constructor(A,I,g){super(new Int32Array(A),I,g)}}class tc extends tg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class UK extends tg{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=ie(this.array[A*this.itemSize]);return this.normalized&&(I=hB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=MB(I),this}getY(A){let I=ie(this.array[A*this.itemSize+1]);return this.normalized&&(I=hB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=MB(I),this}getZ(A){let I=ie(this.array[A*this.itemSize+2]);return this.normalized&&(I=hB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=MB(I),this}getW(A){let I=ie(this.array[A*this.itemSize+3]);return this.normalized&&(I=hB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=MB(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=MB(I),this.array[A+1]=MB(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=MB(I),this.array[A+1]=MB(g),this.array[A+2]=MB(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=MB(I),this.array[A+1]=MB(g),this.array[A+2]=MB(C),this.array[A+3]=MB(B),this}}class BI extends tg{constructor(A,I,g){super(new Float32Array(A),I,g)}}class NK extends tg{constructor(A,I,g){super(new Float64Array(A),I,g)}}let KK=0;const IQ=new cI,mr=new VI,vo=new u,HB=new lB,jt=new lB,UC=new u;class mI extends PQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KK++}),this.uuid=WB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ak(A)?tc:oc)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new YI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return IQ.makeRotationFromQuaternion(A),this.applyMatrix4(IQ),this}rotateX(A){return IQ.makeRotationX(A),this.applyMatrix4(IQ),this}rotateY(A){return IQ.makeRotationY(A),this.applyMatrix4(IQ),this}rotateZ(A){return IQ.makeRotationZ(A),this.applyMatrix4(IQ),this}translate(A,I,g){return IQ.makeTranslation(A,I,g),this.applyMatrix4(IQ),this}scale(A,I,g){return IQ.makeScale(A,I,g),this.applyMatrix4(IQ),this}lookAt(A){return mr.lookAt(A),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new BI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new u(-1/0,-1/0,-1/0),new u(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];HB.setFromBufferAttribute(B),this.morphTargetsRelative?(UC.addVectors(this.boundingBox.min,HB.min),this.boundingBox.expandByPoint(UC),UC.addVectors(this.boundingBox.max,HB.max),this.boundingBox.expandByPoint(UC)):(this.boundingBox.expandByPoint(HB.min),this.boundingBox.expandByPoint(HB.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new XC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new u,1/0);return}if(A){const g=this.boundingSphere.center;if(HB.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];jt.setFromBufferAttribute(E),this.morphTargetsRelative?(UC.addVectors(HB.min,jt.min),HB.expandByPoint(UC),UC.addVectors(HB.max,jt.max),HB.expandByPoint(UC)):(HB.expandByPoint(jt.min),HB.expandByPoint(jt.max))}HB.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)UC.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(UC));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)UC.fromBufferAttribute(E,t),o&&(vo.fromBufferAttribute(A,t),UC.add(vo)),C=Math.max(C,g.distanceToSquared(UC))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tg(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let y=0;y<E;y++)t[y]=new u,e[y]=new u;const a=new u,s=new u,n=new u,D=new DA,c=new DA,r=new DA,h=new u,S=new u;function l(y,N,T){a.fromArray(C,y*3),s.fromArray(C,N*3),n.fromArray(C,T*3),D.fromArray(i,y*2),c.fromArray(i,N*2),r.fromArray(i,T*2),s.sub(a),n.sub(a),c.sub(D),r.sub(D);const v=1/(c.x*r.y-r.x*c.y);isFinite(v)&&(h.copy(s).multiplyScalar(r.y).addScaledVector(n,-c.y).multiplyScalar(v),S.copy(n).multiplyScalar(c.x).addScaledVector(s,-r.x).multiplyScalar(v),t[y].add(h),t[N].add(h),t[T].add(h),e[y].add(S),e[N].add(S),e[T].add(S))}let G=this.groups;G.length===0&&(G=[{start:0,count:g.length}]);for(let y=0,N=G.length;y<N;++y){const T=G[y],v=T.start,H=T.count;for(let V=v,_=v+H;V<_;V+=3)l(g[V+0],g[V+1],g[V+2])}const M=new u,U=new u,k=new u,K=new u;function q(y){k.fromArray(B,y*3),K.copy(k);const N=t[y];M.copy(N),M.sub(k.multiplyScalar(k.dot(N))).normalize(),U.crossVectors(K,N);const v=U.dot(e[y])<0?-1:1;o[y*4]=M.x,o[y*4+1]=M.y,o[y*4+2]=M.z,o[y*4+3]=v}for(let y=0,N=G.length;y<N;++y){const T=G[y],v=T.start,H=T.count;for(let V=v,_=v+H;V<_;V+=3)q(g[V+0]),q(g[V+1]),q(g[V+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new tg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new u,B=new u,i=new u,E=new u,o=new u,t=new u,e=new u,a=new u;if(A)for(let s=0,n=A.count;s<n;s+=3){const D=A.getX(s+0),c=A.getX(s+1),r=A.getX(s+2);C.fromBufferAttribute(I,D),B.fromBufferAttribute(I,c),i.fromBufferAttribute(I,r),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,D),o.fromBufferAttribute(g,c),t.fromBufferAttribute(g,r),E.add(e),o.add(e),t.add(e),g.setXYZ(D,E.x,E.y,E.z),g.setXYZ(c,o.x,o.y,o.z),g.setXYZ(r,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),i.fromBufferAttribute(I,s+2),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)UC.fromBufferAttribute(A,I),UC.normalize(),A.setXYZ(I,UC.x,UC.y,UC.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,D=0;for(let c=0,r=o.length;c<r;c++){E.isInterleavedBufferAttribute?n=o[c]*E.data.stride+E.offset:n=o[c]*e;for(let h=0;h<e;h++)s[D++]=t[n++]}return new tg(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new mI,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,o=i.length;E<o;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,e=i.length;t<e;t++){const a=i[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new cI,qE=new yo,Xa=new XC,$l=new u,Zo=new u,Po=new u,Wo=new u,Hr=new u,za=new u,$a=new DA,As=new DA,Is=new DA,Aw=new u,Iw=new u,gw=new u,gs=new u,Cs=new u;class $g extends VI{constructor(A=new mI,I=new hE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){za.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(Hr.fromBufferAttribute(a,A),i?za.addScaledVector(Hr,e):za.addScaledVector(Hr.sub(I),e))}I.add(za)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),Xa.copy(g.boundingSphere),Xa.applyMatrix4(B),qE.copy(A.ray).recast(A.near),!(Xa.containsPoint(qE.origin)===!1&&(qE.intersectSphere(Xa,$l)===null||qE.origin.distanceToSquared($l)>(A.far-A.near)**2))&&(zl.copy(B).invert(),qE.copy(A.ray).applyMatrix4(zl),!(g.boundingBox!==null&&qE.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,qE)))}_computeIntersections(A,I,g){let C;const B=this.geometry,i=this.material,E=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(i))for(let D=0,c=s.length;D<c;D++){const r=s[D],h=i[r.materialIndex],S=Math.max(r.start,n.start),l=Math.min(E.count,Math.min(r.start+r.count,n.start+n.count));for(let G=S,M=l;G<M;G+=3){const U=E.getX(G),k=E.getX(G+1),K=E.getX(G+2);C=Bs(this,h,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),c=Math.min(E.count,n.start+n.count);for(let r=D,h=c;r<h;r+=3){const S=E.getX(r),l=E.getX(r+1),G=E.getX(r+2);C=Bs(this,i,A,g,t,e,a,S,l,G),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(i))for(let D=0,c=s.length;D<c;D++){const r=s[D],h=i[r.materialIndex],S=Math.max(r.start,n.start),l=Math.min(o.count,Math.min(r.start+r.count,n.start+n.count));for(let G=S,M=l;G<M;G+=3){const U=G,k=G+1,K=G+2;C=Bs(this,h,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(G/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),c=Math.min(o.count,n.start+n.count);for(let r=D,h=c;r<h;r+=3){const S=r,l=r+1,G=r+2;C=Bs(this,i,A,g,t,e,a,S,l,G),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}}}function pK(Q,A,I,g,C,B,i,E){let o;if(A.side===cB?o=g.intersectTriangle(i,B,C,!0,E):o=g.intersectTriangle(C,B,i,A.side===Ui,E),o===null)return null;Cs.copy(E),Cs.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(Cs);return t<I.near||t>I.far?null:{distance:t,point:Cs.clone(),object:Q}}function Bs(Q,A,I,g,C,B,i,E,o,t){Q.getVertexPosition(E,Zo),Q.getVertexPosition(o,Po),Q.getVertexPosition(t,Wo);const e=pK(Q,A,I,g,Zo,Po,Wo,gs);if(e){C&&($a.fromBufferAttribute(C,E),As.fromBufferAttribute(C,o),Is.fromBufferAttribute(C,t),e.uv=OB.getInterpolation(gs,Zo,Po,Wo,$a,As,Is,new DA)),B&&($a.fromBufferAttribute(B,E),As.fromBufferAttribute(B,o),Is.fromBufferAttribute(B,t),e.uv1=OB.getInterpolation(gs,Zo,Po,Wo,$a,As,Is,new DA),e.uv2=e.uv1),i&&(Aw.fromBufferAttribute(i,E),Iw.fromBufferAttribute(i,o),gw.fromBufferAttribute(i,t),e.normal=OB.getInterpolation(gs,Zo,Po,Wo,Aw,Iw,gw,new u),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:o,c:t,normal:new u,materialIndex:0};OB.getNormal(Zo,Po,Wo,a.normal),e.face=a}return e}class Mo extends mI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const o=[],t=[],e=[],a=[];let s=0,n=0;D("z","y","x",-1,-1,g,I,A,i,B,0),D("z","y","x",1,-1,g,I,-A,i,B,1),D("x","z","y",1,1,A,g,I,C,i,2),D("x","z","y",1,-1,A,g,-I,C,i,3),D("x","y","z",1,-1,A,I,g,C,B,4),D("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new BI(t,3)),this.setAttribute("normal",new BI(e,3)),this.setAttribute("uv",new BI(a,2));function D(c,r,h,S,l,G,M,U,k,K,q){const y=G/k,N=M/K,T=G/2,v=M/2,H=U/2,V=k+1,_=K+1;let j=0,AA=0;const IA=new u;for(let tA=0;tA<_;tA++){const aA=tA*N-v;for(let pA=0;pA<V;pA++){const CI=pA*y-T;IA[c]=CI*S,IA[r]=aA*l,IA[h]=H,t.push(IA.x,IA.y,IA.z),IA[c]=0,IA[r]=0,IA[h]=U>0?1:-1,e.push(IA.x,IA.y,IA.z),a.push(pA/k),a.push(1-tA/K),j+=1}}for(let tA=0;tA<K;tA++)for(let aA=0;aA<k;aA++){const pA=s+aA+V*tA,CI=s+aA+V*(tA+1),QA=s+(aA+1)+V*(tA+1),GA=s+(aA+1)+V*tA;o.push(pA,CI,GA),o.push(CI,QA,GA),AA+=6}E.addGroup(n,AA,q),n+=AA,s+=j}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Mo(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function yt(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function nB(Q){const A={};for(let I=0;I<Q.length;I++){const g=yt(Q[I]);for(const C in g)A[C]=g[C]}return A}function FK(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Bk(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:Ig.workingColorSpace}const Qk={clone:yt,merge:nB};var dK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tQ extends gB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dK,this.fragmentShader=RK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=yt(A.uniforms),this.uniformsGroups=FK(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Mn extends VI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cI,this.projectionMatrix=new cI,this.projectionMatrixInverse=new cI,this.coordinateSystem=xQ}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new u,Cw=new DA,Bw=new DA;class pC extends Mn{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Gt*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Gt*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(vi.x,vi.y).multiplyScalar(-A/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(vi.x,vi.y).multiplyScalar(-A/vi.z)}getViewSize(A,I){return this.getViewBounds(A,Cw,Bw),I.subVectors(Bw,Cw)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(to*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const o=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/o,I-=i.offsetY*g/t,C*=i.width/o,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const Vo=-90,jo=1;class ik extends VI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new pC(Vo,jo,A,I);C.layers=this.layers,this.add(C);const B=new pC(Vo,jo,A,I);B.layers=this.layers,this.add(B);const i=new pC(Vo,jo,A,I);i.layers=this.layers,this.add(i);const E=new pC(Vo,jo,A,I);E.layers=this.layers,this.add(E);const o=new pC(Vo,jo,A,I);o.layers=this.layers,this.add(o);const t=new pC(Vo,jo,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,i,E,o]=I;for(const t of I)this.remove(t);if(A===xQ)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===be)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,i,E,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),D=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,i),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class Ea extends Og{constructor(A,I,g,C,B,i,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:Ni,super(A,I,g,C,B,i,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Ek extends NQ{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===Si?hC:_B),this.texture=new Ea(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:fg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new Mo(5,5,5),B=new tQ({name:"CubemapFromEquirect",uniforms:yt(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:cB,blending:ci});B.uniforms.tEquirect.value=I;const i=new $g(C,B),E=I.minFilter;return I.minFilter===bQ&&(I.minFilter=fg),new ik(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const Tr=new u,JK=new u,fK=new YI;class ai{constructor(A=new u(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Tr.subVectors(g,I).cross(JK.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Tr),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||fK.getNormalMatrix(A),C=this.coplanarPoint(Tr).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const YE=new XC,Qs=new u;class oa{constructor(A=new ai,I=new ai,g=new ai,C=new ai,B=new ai,i=new ai){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=xQ){const g=this.planes,C=A.elements,B=C[0],i=C[1],E=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],D=C[9],c=C[10],r=C[11],h=C[12],S=C[13],l=C[14],G=C[15];if(g[0].setComponents(o-B,s-t,r-n,G-h).normalize(),g[1].setComponents(o+B,s+t,r+n,G+h).normalize(),g[2].setComponents(o+i,s+e,r+D,G+S).normalize(),g[3].setComponents(o-i,s-e,r-D,G-S).normalize(),g[4].setComponents(o-E,s-a,r-c,G-l).normalize(),I===xQ)g[5].setComponents(o+E,s+a,r+c,G+l).normalize();else if(I===be)g[5].setComponents(E,a,c,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),YE.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),YE.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(YE)}intersectsSprite(A){return YE.center.set(0,0,0),YE.radius=.7071067811865476,YE.applyMatrix4(A.matrixWorld),this.intersectsSphere(YE)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(Qs.x=C.normal.x>0?A.max.x:A.min.x,Qs.y=C.normal.y>0?A.max.y:A.min.y,Qs.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ok(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function uK(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,D=Q.createBuffer();Q.bindBuffer(e,D),Q.bufferData(e,a,s),t.onUploadCallback();let c;if(a instanceof Float32Array)c=Q.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)c=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=Q.UNSIGNED_SHORT;else if(a instanceof Int16Array)c=Q.SHORT;else if(a instanceof Uint32Array)c=Q.UNSIGNED_INT;else if(a instanceof Int32Array)c=Q.INT;else if(a instanceof Int8Array)c=Q.BYTE;else if(a instanceof Uint8Array)c=Q.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)c=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:c,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function B(t,e,a){const s=e.array,n=e._updateRange,D=e.updateRanges;if(Q.bindBuffer(a,t),n.count===-1&&D.length===0&&Q.bufferSubData(a,0,s),D.length!==0){for(let c=0,r=D.length;c<r;c++){const h=D[c];I?Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}e.clearUpdateRanges()}n.count!==-1&&(I?Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(Q.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");B(a.buffer,t,e),a.version=t.version}}return{get:i,remove:E,update:o}}class Ft extends mI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,s=I/o,n=[],D=[],c=[],r=[];for(let h=0;h<e;h++){const S=h*s-i;for(let l=0;l<t;l++){const G=l*a-B;D.push(G,-S,0),c.push(0,0,1),r.push(l/E),r.push(1-h/o)}}for(let h=0;h<o;h++)for(let S=0;S<E;S++){const l=S+t*h,G=S+t*(h+1),M=S+1+t*(h+1),U=S+1+t*h;n.push(l,G,U),n.push(G,M,U)}this.setIndex(n),this.setAttribute("position",new BI(D,3)),this.setAttribute("normal",new BI(c,3)),this.setAttribute("uv",new BI(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ft(A.width,A.height,A.widthSegments,A.heightSegments)}}var qK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YK=`#ifdef USE_ALPHAHASH
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
#endif`,LK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bK=`#ifdef USE_AOMAP
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
#endif`,xK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_K=`#ifdef USE_BATCHING
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
#endif`,OK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PK=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WK=`#ifdef USE_IRIDESCENCE
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
#endif`,VK=`#ifdef USE_BUMPMAP
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
#endif`,jK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$K=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`
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
}`,np=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,qp=`
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CF=`#ifdef USE_NORMALMAP
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
#endif`,BF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wF=`float getShadowMask() {
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
}`,SF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GF=`#ifdef USE_SKINNING
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
#endif`,yF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kF=`#ifdef USE_SKINNING
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
#endif`,MF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pF=`#ifdef USE_TRANSMISSION
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
#endif`,FF=`#ifdef USE_TRANSMISSION
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
#endif`,dF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qF=`uniform sampler2D t2D;
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
}`,YF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TF=`#include <common>
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
}`,bF=`#if DEPTH_PACKING == 3200
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
}`,xF=`#define DISTANCE
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
}`,_F=`#define DISTANCE
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
}`,OF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZF=`uniform float scale;
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
}`,PF=`uniform vec3 diffuse;
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
}`,WF=`#include <common>
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
}`,VF=`uniform vec3 diffuse;
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
}`,jF=`#define LAMBERT
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
}`,XF=`#define LAMBERT
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
}`,zF=`#define MATCAP
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
}`,$F=`#define MATCAP
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
}`,Ad=`#define NORMAL
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
}`,Id=`#define NORMAL
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
}`,gd=`#define PHONG
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
}`,Cd=`#define PHONG
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
}`,Bd=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
}`,id=`#define TOON
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
}`,Ed=`#define TOON
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
}`,od=`uniform float size;
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
}`,td=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,ad=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,nd=`uniform vec3 diffuse;
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
}`,nI={alphahash_fragment:qK,alphahash_pars_fragment:YK,alphamap_fragment:LK,alphamap_pars_fragment:mK,alphatest_fragment:HK,alphatest_pars_fragment:TK,aomap_fragment:bK,aomap_pars_fragment:xK,batching_pars_vertex:_K,batching_vertex:OK,begin_vertex:vK,beginnormal_vertex:ZK,bsdfs:PK,iridescence_fragment:WK,bumpmap_pars_fragment:VK,clipping_planes_fragment:jK,clipping_planes_pars_fragment:XK,clipping_planes_pars_vertex:zK,clipping_planes_vertex:$K,color_fragment:Ap,color_pars_fragment:Ip,color_pars_vertex:gp,color_vertex:Cp,common:Bp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:ip,displacementmap_pars_vertex:Ep,displacementmap_vertex:op,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:ap,colorspace_pars_fragment:sp,envmap_fragment:np,envmap_common_pars_fragment:rp,envmap_pars_fragment:Dp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:pp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:wp,fog_fragment:Sp,fog_pars_fragment:Gp,gradientmap_pars_fragment:yp,lightmap_fragment:kp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:Kp,lights_toon_fragment:Fp,lights_toon_pars_fragment:dp,lights_phong_fragment:Rp,lights_phong_pars_fragment:Jp,lights_physical_fragment:fp,lights_physical_pars_fragment:up,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:Lp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:bp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:Op,map_particle_pars_fragment:vp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Pp,morphcolor_vertex:Wp,morphnormal_vertex:Vp,morphtarget_pars_vertex:jp,morphtarget_vertex:Xp,normal_fragment_begin:zp,normal_fragment_maps:$p,normal_pars_fragment:AF,normal_pars_vertex:IF,normal_vertex:gF,normalmap_pars_fragment:CF,clearcoat_normal_fragment_begin:BF,clearcoat_normal_fragment_maps:QF,clearcoat_pars_fragment:iF,iridescence_pars_fragment:EF,opaque_fragment:oF,packing:tF,premultiplied_alpha_fragment:eF,project_vertex:aF,dithering_fragment:sF,dithering_pars_fragment:nF,roughnessmap_fragment:rF,roughnessmap_pars_fragment:DF,shadowmap_pars_fragment:hF,shadowmap_pars_vertex:cF,shadowmap_vertex:lF,shadowmask_pars_fragment:wF,skinbase_vertex:SF,skinning_pars_vertex:GF,skinning_vertex:yF,skinnormal_vertex:kF,specularmap_fragment:MF,specularmap_pars_fragment:UF,tonemapping_fragment:NF,tonemapping_pars_fragment:KF,transmission_fragment:pF,transmission_pars_fragment:FF,uv_pars_fragment:dF,uv_pars_vertex:RF,uv_vertex:JF,worldpos_vertex:fF,background_vert:uF,background_frag:qF,backgroundCube_vert:YF,backgroundCube_frag:LF,cube_vert:mF,cube_frag:HF,depth_vert:TF,depth_frag:bF,distanceRGBA_vert:xF,distanceRGBA_frag:_F,equirect_vert:OF,equirect_frag:vF,linedashed_vert:ZF,linedashed_frag:PF,meshbasic_vert:WF,meshbasic_frag:VF,meshlambert_vert:jF,meshlambert_frag:XF,meshmatcap_vert:zF,meshmatcap_frag:$F,meshnormal_vert:Ad,meshnormal_frag:Id,meshphong_vert:gd,meshphong_frag:Cd,meshphysical_vert:Bd,meshphysical_frag:Qd,meshtoon_vert:id,meshtoon_frag:Ed,points_vert:od,points_frag:td,shadow_vert:ed,shadow_frag:ad,sprite_vert:sd,sprite_frag:nd},YA={common:{diffuse:{value:new PA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YI},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YI},normalScale:{value:new DA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new PA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new PA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0},uvTransform:{value:new YI}},sprite:{diffuse:{value:new PA(16777215)},opacity:{value:1},center:{value:new DA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YI},alphaMap:{value:null},alphaMapTransform:{value:new YI},alphaTest:{value:0}}},kQ={basic:{uniforms:nB([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.fog]),vertexShader:nI.meshbasic_vert,fragmentShader:nI.meshbasic_frag},lambert:{uniforms:nB([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,YA.lights,{emissive:{value:new PA(0)}}]),vertexShader:nI.meshlambert_vert,fragmentShader:nI.meshlambert_frag},phong:{uniforms:nB([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,YA.lights,{emissive:{value:new PA(0)},specular:{value:new PA(1118481)},shininess:{value:30}}]),vertexShader:nI.meshphong_vert,fragmentShader:nI.meshphong_frag},standard:{uniforms:nB([YA.common,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.roughnessmap,YA.metalnessmap,YA.fog,YA.lights,{emissive:{value:new PA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nI.meshphysical_vert,fragmentShader:nI.meshphysical_frag},toon:{uniforms:nB([YA.common,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.gradientmap,YA.fog,YA.lights,{emissive:{value:new PA(0)}}]),vertexShader:nI.meshtoon_vert,fragmentShader:nI.meshtoon_frag},matcap:{uniforms:nB([YA.common,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,{matcap:{value:null}}]),vertexShader:nI.meshmatcap_vert,fragmentShader:nI.meshmatcap_frag},points:{uniforms:nB([YA.points,YA.fog]),vertexShader:nI.points_vert,fragmentShader:nI.points_frag},dashed:{uniforms:nB([YA.common,YA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nI.linedashed_vert,fragmentShader:nI.linedashed_frag},depth:{uniforms:nB([YA.common,YA.displacementmap]),vertexShader:nI.depth_vert,fragmentShader:nI.depth_frag},normal:{uniforms:nB([YA.common,YA.bumpmap,YA.normalmap,YA.displacementmap,{opacity:{value:1}}]),vertexShader:nI.meshnormal_vert,fragmentShader:nI.meshnormal_frag},sprite:{uniforms:nB([YA.sprite,YA.fog]),vertexShader:nI.sprite_vert,fragmentShader:nI.sprite_frag},background:{uniforms:{uvTransform:{value:new YI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nI.background_vert,fragmentShader:nI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nI.backgroundCube_vert,fragmentShader:nI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nI.cube_vert,fragmentShader:nI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nI.equirect_vert,fragmentShader:nI.equirect_frag},distanceRGBA:{uniforms:nB([YA.common,YA.displacementmap,{referencePosition:{value:new u},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nI.distanceRGBA_vert,fragmentShader:nI.distanceRGBA_frag},shadow:{uniforms:nB([YA.lights,YA.fog,{color:{value:new PA(0)},opacity:{value:1}}]),vertexShader:nI.shadow_vert,fragmentShader:nI.shadow_frag}};kQ.physical={uniforms:nB([kQ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YI},clearcoatNormalScale:{value:new DA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YI},sheen:{value:0},sheenColor:{value:new PA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YI},transmissionSamplerSize:{value:new DA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YI},attenuationDistance:{value:0},attenuationColor:{value:new PA(0)},specularColor:{value:new PA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YI},anisotropyVector:{value:new DA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YI}}]),vertexShader:nI.meshphysical_vert,fragmentShader:nI.meshphysical_frag};const is={r:0,b:0,g:0};function rd(Q,A,I,g,C,B,i){const E=new PA(0);let o=B===!0?0:1,t,e,a=null,s=0,n=null;function D(r,h){let S=!1,l=h.isScene===!0?h.background:null;l&&l.isTexture&&(l=(h.backgroundBlurriness>0?I:A).get(l)),l===null?c(E,o):l&&l.isColor&&(c(l,1),S=!0);const G=Q.xr.getEnvironmentBlendMode();G==="additive"?g.buffers.color.setClear(0,0,0,1,i):G==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(Q.autoClear||S)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),l&&(l.isCubeTexture||l.mapping===pt)?(e===void 0&&(e=new $g(new Mo(1,1,1),new tQ({name:"BackgroundCubeMaterial",uniforms:yt(kQ.backgroundCube.uniforms),vertexShader:kQ.backgroundCube.vertexShader,fragmentShader:kQ.backgroundCube.fragmentShader,side:cB,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(M,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=l,e.material.uniforms.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=Ig.getTransfer(l.colorSpace)!==wg,(a!==l||s!==l.version||n!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),e.layers.enableAll(),r.unshift(e,e.geometry,e.material,0,0,null)):l&&l.isTexture&&(t===void 0&&(t=new $g(new Ft(2,2),new tQ({name:"BackgroundMaterial",uniforms:yt(kQ.background.uniforms),vertexShader:kQ.background.vertexShader,fragmentShader:kQ.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=l,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.toneMapped=Ig.getTransfer(l.colorSpace)!==wg,l.matrixAutoUpdate===!0&&l.updateMatrix(),t.material.uniforms.uvTransform.value.copy(l.matrix),(a!==l||s!==l.version||n!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),t.layers.enableAll(),r.unshift(t,t.geometry,t.material,0,0,null))}function c(r,h){r.getRGB(is,Bk(Q)),g.buffers.color.setClear(is.r,is.g,is.b,h,i)}return{getClearColor:function(){return E},setClearColor:function(r,h=1){E.set(r),o=h,c(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(r){o=r,c(E,o)},render:D}}function Dd(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},o=r(null);let t=o,e=!1;function a(H,V,_,j,AA){let IA=!1;if(i){const tA=c(j,_,V);t!==tA&&(t=tA,n(t.object)),IA=h(H,j,_,AA),IA&&S(H,j,_,AA)}else{const tA=V.wireframe===!0;(t.geometry!==j.id||t.program!==_.id||t.wireframe!==tA)&&(t.geometry=j.id,t.program=_.id,t.wireframe=tA,IA=!0)}AA!==null&&I.update(AA,Q.ELEMENT_ARRAY_BUFFER),(IA||e)&&(e=!1,K(H,V,_,j),AA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(AA).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function n(H){return g.isWebGL2?Q.bindVertexArray(H):B.bindVertexArrayOES(H)}function D(H){return g.isWebGL2?Q.deleteVertexArray(H):B.deleteVertexArrayOES(H)}function c(H,V,_){const j=_.wireframe===!0;let AA=E[H.id];AA===void 0&&(AA={},E[H.id]=AA);let IA=AA[V.id];IA===void 0&&(IA={},AA[V.id]=IA);let tA=IA[j];return tA===void 0&&(tA=r(s()),IA[j]=tA),tA}function r(H){const V=[],_=[],j=[];for(let AA=0;AA<C;AA++)V[AA]=0,_[AA]=0,j[AA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:_,attributeDivisors:j,object:H,attributes:{},index:null}}function h(H,V,_,j){const AA=t.attributes,IA=V.attributes;let tA=0;const aA=_.getAttributes();for(const pA in aA)if(aA[pA].location>=0){const QA=AA[pA];let GA=IA[pA];if(GA===void 0&&(pA==="instanceMatrix"&&H.instanceMatrix&&(GA=H.instanceMatrix),pA==="instanceColor"&&H.instanceColor&&(GA=H.instanceColor)),QA===void 0||QA.attribute!==GA||GA&&QA.data!==GA.data)return!0;tA++}return t.attributesNum!==tA||t.index!==j}function S(H,V,_,j){const AA={},IA=V.attributes;let tA=0;const aA=_.getAttributes();for(const pA in aA)if(aA[pA].location>=0){let QA=IA[pA];QA===void 0&&(pA==="instanceMatrix"&&H.instanceMatrix&&(QA=H.instanceMatrix),pA==="instanceColor"&&H.instanceColor&&(QA=H.instanceColor));const GA={};GA.attribute=QA,QA&&QA.data&&(GA.data=QA.data),AA[pA]=GA,tA++}t.attributes=AA,t.attributesNum=tA,t.index=j}function l(){const H=t.newAttributes;for(let V=0,_=H.length;V<_;V++)H[V]=0}function G(H){M(H,0)}function M(H,V){const _=t.newAttributes,j=t.enabledAttributes,AA=t.attributeDivisors;_[H]=1,j[H]===0&&(Q.enableVertexAttribArray(H),j[H]=1),AA[H]!==V&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,V),AA[H]=V)}function U(){const H=t.newAttributes,V=t.enabledAttributes;for(let _=0,j=V.length;_<j;_++)V[_]!==H[_]&&(Q.disableVertexAttribArray(_),V[_]=0)}function k(H,V,_,j,AA,IA,tA){tA===!0?Q.vertexAttribIPointer(H,V,_,AA,IA):Q.vertexAttribPointer(H,V,_,j,AA,IA)}function K(H,V,_,j){if(g.isWebGL2===!1&&(H.isInstancedMesh||j.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;l();const AA=j.attributes,IA=_.getAttributes(),tA=V.defaultAttributeValues;for(const aA in IA){const pA=IA[aA];if(pA.location>=0){let CI=AA[aA];if(CI===void 0&&(aA==="instanceMatrix"&&H.instanceMatrix&&(CI=H.instanceMatrix),aA==="instanceColor"&&H.instanceColor&&(CI=H.instanceColor)),CI!==void 0){const QA=CI.normalized,GA=CI.itemSize,vA=I.get(CI);if(vA===void 0)continue;const uA=vA.buffer,sA=vA.type,WA=vA.bytesPerElement,qA=g.isWebGL2===!0&&(sA===Q.INT||sA===Q.UNSIGNED_INT||CI.gpuType===jh);if(CI.isInterleavedBufferAttribute){const LA=CI.data,L=LA.stride,SA=CI.offset;if(LA.isInstancedInterleavedBuffer){for(let nA=0;nA<pA.locationSize;nA++)M(pA.location+nA,LA.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=LA.meshPerAttribute*LA.count)}else for(let nA=0;nA<pA.locationSize;nA++)G(pA.location+nA);Q.bindBuffer(Q.ARRAY_BUFFER,uA);for(let nA=0;nA<pA.locationSize;nA++)k(pA.location+nA,GA/pA.locationSize,sA,QA,L*WA,(SA+GA/pA.locationSize*nA)*WA,qA)}else{if(CI.isInstancedBufferAttribute){for(let LA=0;LA<pA.locationSize;LA++)M(pA.location+LA,CI.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=CI.meshPerAttribute*CI.count)}else for(let LA=0;LA<pA.locationSize;LA++)G(pA.location+LA);Q.bindBuffer(Q.ARRAY_BUFFER,uA);for(let LA=0;LA<pA.locationSize;LA++)k(pA.location+LA,GA/pA.locationSize,sA,QA,GA*WA,GA/pA.locationSize*LA*WA,qA)}}else if(tA!==void 0){const QA=tA[aA];if(QA!==void 0)switch(QA.length){case 2:Q.vertexAttrib2fv(pA.location,QA);break;case 3:Q.vertexAttrib3fv(pA.location,QA);break;case 4:Q.vertexAttrib4fv(pA.location,QA);break;default:Q.vertexAttrib1fv(pA.location,QA)}}}}U()}function q(){T();for(const H in E){const V=E[H];for(const _ in V){const j=V[_];for(const AA in j)D(j[AA].object),delete j[AA];delete V[_]}delete E[H]}}function y(H){if(E[H.id]===void 0)return;const V=E[H.id];for(const _ in V){const j=V[_];for(const AA in j)D(j[AA].object),delete j[AA];delete V[_]}delete E[H.id]}function N(H){for(const V in E){const _=E[V];if(_[H.id]===void 0)continue;const j=_[H.id];for(const AA in j)D(j[AA].object),delete j[AA];delete _[H.id]}}function T(){v(),e=!0,t!==o&&(t=o,n(t.object))}function v(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:q,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:l,enableAttribute:G,disableUnusedAttributes:U}}function hd(Q,A,I,g){const C=g.isWebGL2;let B;function i(e){B=e}function E(e,a){Q.drawArrays(B,e,a),I.update(a,B,1)}function o(e,a,s){if(s===0)return;let n,D;if(C)n=Q,D="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[D](B,e,a,s),I.update(a,B,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let D=0;D<s;D++)this.render(e[D],a[D]);else{n.multiDrawArraysWEBGL(B,e,0,a,0,s);let D=0;for(let c=0;c<s;c++)D+=a[c];I.update(D,B,1)}}this.setMode=i,this.render=E,this.renderInstances=o,this.renderMultiDraw=t}function cd(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const k=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(k){if(k==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=i||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),s=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=Q.getParameter(Q.MAX_TEXTURE_SIZE),D=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),c=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),r=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),h=Q.getParameter(Q.MAX_VARYING_VECTORS),S=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),l=s>0,G=i||A.has("OES_texture_float"),M=l&&G,U=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:D,maxAttributes:c,maxVertexUniforms:r,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:l,floatFragmentTextures:G,floatVertexTextures:M,maxSamples:U}}function ld(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new ai,E=new YI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const D=a.clippingPlanes,c=a.clipIntersection,r=a.clipShadows,h=Q.get(a);if(!C||D===null||D.length===0||B&&!r)B?e(null):t();else{const S=B?0:g,l=S*4;let G=h.clippingState||null;o.value=G,G=e(D,s,l,n);for(let M=0;M!==l;++M)G[M]=I[M];h.clippingState=G,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=S}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,D){const c=a!==null?a.length:0;let r=null;if(c!==0){if(r=o.value,D!==!0||r===null){const h=n+c*4,S=s.matrixWorldInverse;E.getNormalMatrix(S),(r===null||r.length<h)&&(r=new Float32Array(h));for(let l=0,G=n;l!==c;++l,G+=4)i.copy(a[l]).applyMatrix4(S,E),i.normal.toArray(r,G),r[G+3]=i.constant}o.value=r,o.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,r}}function wd(Q){let A=new WeakMap;function I(i,E){return E===Fe?i.mapping=Ni:E===de&&(i.mapping=eE),i}function g(i){if(i&&i.isTexture){const E=i.mapping;if(E===Fe||E===de)if(A.has(i)){const o=A.get(i).texture;return I(o,i.mapping)}else{const o=i.image;if(o&&o.height>0){const t=new Ek(o.height);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class Un extends Mn{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const ot=4,Qw=[.125,.215,.35,.446,.526,.582],jE=20,br=new Un,iw=new PA;let xr=null,_r=0,Or=0;const WE=(1+Math.sqrt(5))/2,Xo=1/WE,Ew=[new u(1,1,1),new u(-1,1,1),new u(1,1,-1),new u(-1,1,-1),new u(0,WE,Xo),new u(0,WE,-Xo),new u(Xo,0,WE),new u(-Xo,0,WE),new u(WE,Xo,0),new u(-WE,Xo,0)];class oh{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){xr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ew(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(xr,_r,Or),A.scissorTest=!1,Es(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===Ni||A.mapping===eE?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),xr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:fg,minFilter:fg,generateMipmaps:!1,type:St,format:UB,colorSpace:ZQ,depthBuffer:!1},C=ow(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ow(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sd(B)),this._blurMaterial=Gd(B,A,I)}return C}_compileMaterial(A){const I=new $g(this._lodPlanes[0],A);this._renderer.compile(I,br)}_sceneToCubeUV(A,I,g,C){const E=new pC(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(iw),e.toneMapping=li,e.autoClear=!1;const n=new hE({name:"PMREM.Background",side:cB,depthWrite:!1,depthTest:!1}),D=new $g(new Mo,n);let c=!1;const r=A.background;r?r.isColor&&(n.color.copy(r),A.background=null,c=!0):(n.color.copy(iw),c=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(E.up.set(0,o[h],0),E.lookAt(t[h],0,0)):S===1?(E.up.set(0,0,o[h]),E.lookAt(0,t[h],0)):(E.up.set(0,o[h],0),E.lookAt(0,0,t[h]));const l=this._cubeSize;Es(C,S*l,h>2?l:0,l,l),e.setRenderTarget(C),c&&e.render(D,E),e.render(A,E)}D.geometry.dispose(),D.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=r}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===Ni||A.mapping===eE;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=ew()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tw());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new $g(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;Es(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(i,br)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=Ew[(C-1)%Ew.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const o=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new $g(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,D=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*jE-1),c=B/D,r=isFinite(B)?1+Math.floor(e*c):jE;r>jE&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${jE}`);const h=[];let S=0;for(let k=0;k<jE;++k){const K=k/c,q=Math.exp(-K*K/2);h.push(q),k===0?S+=q:k<r&&(S+=2*q)}for(let k=0;k<h.length;k++)h[k]=h[k]/S;s.envMap.value=A.texture,s.samples.value=r,s.weights.value=h,s.latitudinal.value=i==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:l}=this;s.dTheta.value=D,s.mipInt.value=l-g;const G=this._sizeLods[C],M=3*G*(C>l-ot?C-l+ot:0),U=4*(this._cubeSize-G);Es(I,M,U,3*G,2*G),o.setRenderTarget(I),o.render(a,br)}}function Sd(Q){const A=[],I=[],g=[];let C=Q;const B=Q-ot+1+Qw.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let o=1/E;i>Q-ot?o=Qw[i-Q+ot-1]:i===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,D=6,c=3,r=2,h=1,S=new Float32Array(c*D*n),l=new Float32Array(r*D*n),G=new Float32Array(h*D*n);for(let U=0;U<n;U++){const k=U%3*2/3-1,K=U>2?0:-1,q=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];S.set(q,c*D*U),l.set(s,r*D*U);const y=[U,U,U,U,U,U];G.set(y,h*D*U)}const M=new mI;M.setAttribute("position",new tg(S,c)),M.setAttribute("uv",new tg(l,r)),M.setAttribute("faceIndex",new tg(G,h)),A.push(M),C>ot&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function ow(Q,A,I){const g=new NQ(Q,A,I);return g.texture.mapping=pt,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function Es(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Gd(Q,A,I){const g=new Float32Array(jE),C=new u(0,1,0);return new tQ({name:"SphericalGaussianBlur",defines:{n:jE,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tw(){return new tQ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ew(){return new tQ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function yd(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===Fe||o===de,e=o===Ni||o===eE;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new oh(Q)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new oh(Q));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",B),s.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function kd(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Md(Q,A,I,g){const C={},B=new WeakMap;function i(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const D in s.attributes)A.remove(s.attributes[D]);for(const D in s.morphAttributes){const c=s.morphAttributes[D];for(let r=0,h=c.length;r<h;r++)A.remove(c[r])}s.removeEventListener("dispose",i),delete C[s.id];const n=B.get(s);n&&(A.remove(n),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return C[s.id]===!0||(s.addEventListener("dispose",i),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const D in s)A.update(s[D],Q.ARRAY_BUFFER);const n=a.morphAttributes;for(const D in n){const c=n[D];for(let r=0,h=c.length;r<h;r++)A.update(c[r],Q.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,D=a.attributes.position;let c=0;if(n!==null){const S=n.array;c=n.version;for(let l=0,G=S.length;l<G;l+=3){const M=S[l+0],U=S[l+1],k=S[l+2];s.push(M,U,U,k,k,M)}}else if(D!==void 0){const S=D.array;c=D.version;for(let l=0,G=S.length/3-1;l<G;l+=3){const M=l+0,U=l+1,k=l+2;s.push(M,U,U,k,k,M)}}else return;const r=new(Ak(s)?tc:oc)(s,1);r.version=c;const h=B.get(a);h&&A.remove(h),B.set(a,r)}function e(a){const s=B.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function Ud(Q,A,I,g){const C=g.isWebGL2;let B;function i(n){B=n}let E,o;function t(n){E=n.type,o=n.bytesPerElement}function e(n,D){Q.drawElements(B,D,E,n*o),I.update(D,B,1)}function a(n,D,c){if(c===0)return;let r,h;if(C)r=Q,h="drawElementsInstanced";else if(r=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[h](B,D,E,n*o,c),I.update(D,B,c)}function s(n,D,c){if(c===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let h=0;h<c;h++)this.render(n[h]/o,D[h]);else{r.multiDrawElementsWEBGL(B,D,0,E,n,0,c);let h=0;for(let S=0;S<c;S++)h+=D[S];I.update(h,B,1)}}this.setMode=i,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function Nd(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Kd(Q,A){return Q[0]-A[0]}function pd(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function Fd(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new og,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,D=n!==void 0?n.length:0;let c=B.get(e);if(c===void 0||c.count!==D){let H=function(){T.dispose(),B.delete(e),e.removeEventListener("dispose",H)};c!==void 0&&c.texture.dispose();const S=e.morphAttributes.position!==void 0,l=e.morphAttributes.normal!==void 0,G=e.morphAttributes.color!==void 0,M=e.morphAttributes.position||[],U=e.morphAttributes.normal||[],k=e.morphAttributes.color||[];let K=0;S===!0&&(K=1),l===!0&&(K=2),G===!0&&(K=3);let q=e.attributes.position.count*K,y=1;q>A.maxTextureSize&&(y=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const N=new Float32Array(q*y*4*D),T=new yn(N,q,y,D);T.type=BQ,T.needsUpdate=!0;const v=K*4;for(let V=0;V<D;V++){const _=M[V],j=U[V],AA=k[V],IA=q*y*4*V;for(let tA=0;tA<_.count;tA++){const aA=tA*v;S===!0&&(i.fromBufferAttribute(_,tA),N[IA+aA+0]=i.x,N[IA+aA+1]=i.y,N[IA+aA+2]=i.z,N[IA+aA+3]=0),l===!0&&(i.fromBufferAttribute(j,tA),N[IA+aA+4]=i.x,N[IA+aA+5]=i.y,N[IA+aA+6]=i.z,N[IA+aA+7]=0),G===!0&&(i.fromBufferAttribute(AA,tA),N[IA+aA+8]=i.x,N[IA+aA+9]=i.y,N[IA+aA+10]=i.z,N[IA+aA+11]=AA.itemSize===4?i.w:1)}}c={count:D,texture:T,size:new DA(q,y)},B.set(e,c),e.addEventListener("dispose",H)}let r=0;for(let S=0;S<s.length;S++)r+=s[S];const h=e.morphTargetsRelative?1:1-r;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",h),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",c.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",c.size)}else{const n=s===void 0?0:s.length;let D=g[e.id];if(D===void 0||D.length!==n){D=[];for(let l=0;l<n;l++)D[l]=[l,0];g[e.id]=D}for(let l=0;l<n;l++){const G=D[l];G[0]=l,G[1]=s[l]}D.sort(pd);for(let l=0;l<8;l++)l<n&&D[l][1]?(E[l][0]=D[l][0],E[l][1]=D[l][1]):(E[l][0]=Number.MAX_SAFE_INTEGER,E[l][1]=0);E.sort(Kd);const c=e.morphAttributes.position,r=e.morphAttributes.normal;let h=0;for(let l=0;l<8;l++){const G=E[l],M=G[0],U=G[1];M!==Number.MAX_SAFE_INTEGER&&U?(c&&e.getAttribute("morphTarget"+l)!==c[M]&&e.setAttribute("morphTarget"+l,c[M]),r&&e.getAttribute("morphNormal"+l)!==r[M]&&e.setAttribute("morphNormal"+l,r[M]),C[l]=U,h+=U):(c&&e.hasAttribute("morphTarget"+l)===!0&&e.deleteAttribute("morphTarget"+l),r&&e.hasAttribute("morphNormal"+l)===!0&&e.deleteAttribute("morphNormal"+l),C[l]=0)}const S=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",S),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function dd(Q,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),C.get(o)!==t&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function i(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}class ac extends Og{constructor(A,I,g,C,B,i,E,o,t,e){if(e=e!==void 0?e:BE,e!==BE&&e!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===BE&&(g=ni),g===void 0&&e===Do&&(g=CE),super(null,C,B,i,E,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:zg,this.minFilter=o!==void 0?o:zg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const tk=new Og,ek=new ac(1,1);ek.compareFunction=Bc;const ak=new yn,sk=new Ec,nk=new Ea,aw=[],sw=[],nw=new Float32Array(16),rw=new Float32Array(9),Dw=new Float32Array(4);function dt(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=aw[C];if(B===void 0&&(B=new Float32Array(C),aw[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function cC(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function lC(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function Nn(Q,A){let I=sw[A];I===void 0&&(I=new Int32Array(A),sw[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function Rd(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Jd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2fv(this.addr,A),lC(I,A)}}function fd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(cC(I,A))return;Q.uniform3fv(this.addr,A),lC(I,A)}}function ud(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4fv(this.addr,A),lC(I,A)}}function qd(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;Dw.set(g),Q.uniformMatrix2fv(this.addr,!1,Dw),lC(I,g)}}function Yd(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;rw.set(g),Q.uniformMatrix3fv(this.addr,!1,rw),lC(I,g)}}function Ld(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(cC(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),lC(I,A)}else{if(cC(I,g))return;nw.set(g),Q.uniformMatrix4fv(this.addr,!1,nw),lC(I,g)}}function md(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function Hd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2iv(this.addr,A),lC(I,A)}}function Td(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cC(I,A))return;Q.uniform3iv(this.addr,A),lC(I,A)}}function bd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4iv(this.addr,A),lC(I,A)}}function xd(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function _d(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cC(I,A))return;Q.uniform2uiv(this.addr,A),lC(I,A)}}function Od(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cC(I,A))return;Q.uniform3uiv(this.addr,A),lC(I,A)}}function vd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cC(I,A))return;Q.uniform4uiv(this.addr,A),lC(I,A)}}function Zd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?ek:tk;I.setTexture2D(A||B,C)}function Pd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||sk,C)}function Wd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||nk,C)}function Vd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ak,C)}function jd(Q){switch(Q){case 5126:return Rd;case 35664:return Jd;case 35665:return fd;case 35666:return ud;case 35674:return qd;case 35675:return Yd;case 35676:return Ld;case 5124:case 35670:return md;case 35667:case 35671:return Hd;case 35668:case 35672:return Td;case 35669:case 35673:return bd;case 5125:return xd;case 36294:return _d;case 36295:return Od;case 36296:return vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Xd(Q,A){Q.uniform1fv(this.addr,A)}function zd(Q,A){const I=dt(A,this.size,2);Q.uniform2fv(this.addr,I)}function $d(Q,A){const I=dt(A,this.size,3);Q.uniform3fv(this.addr,I)}function AR(Q,A){const I=dt(A,this.size,4);Q.uniform4fv(this.addr,I)}function IR(Q,A){const I=dt(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function gR(Q,A){const I=dt(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function CR(Q,A){const I=dt(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function BR(Q,A){Q.uniform1iv(this.addr,A)}function QR(Q,A){Q.uniform2iv(this.addr,A)}function iR(Q,A){Q.uniform3iv(this.addr,A)}function ER(Q,A){Q.uniform4iv(this.addr,A)}function oR(Q,A){Q.uniform1uiv(this.addr,A)}function tR(Q,A){Q.uniform2uiv(this.addr,A)}function eR(Q,A){Q.uniform3uiv(this.addr,A)}function aR(Q,A){Q.uniform4uiv(this.addr,A)}function sR(Q,A,I){const g=this.cache,C=A.length,B=Nn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||tk,B[i])}function nR(Q,A,I){const g=this.cache,C=A.length,B=Nn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||sk,B[i])}function rR(Q,A,I){const g=this.cache,C=A.length,B=Nn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||nk,B[i])}function DR(Q,A,I){const g=this.cache,C=A.length,B=Nn(I,C);cC(g,B)||(Q.uniform1iv(this.addr,B),lC(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||ak,B[i])}function hR(Q){switch(Q){case 5126:return Xd;case 35664:return zd;case 35665:return $d;case 35666:return AR;case 35674:return IR;case 35675:return gR;case 35676:return CR;case 5124:case 35670:return BR;case 35667:case 35671:return QR;case 35668:case 35672:return iR;case 35669:case 35673:return ER;case 5125:return oR;case 36294:return tR;case 36295:return eR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return DR}}class cR{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=jd(I.type)}}class lR{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=hR(I.type)}}class wR{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function hw(Q,A){Q.seq.push(A),Q.map[A.id]=A}function SR(Q,A,I){const g=Q.name,C=g.length;for(vr.lastIndex=0;;){const B=vr.exec(g),i=vr.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&i+2===C){hw(I,t===void 0?new cR(E,Q,A):new lR(E,Q,A));break}else{let a=I.map[E];a===void 0&&(a=new wR(E),hw(I,a)),I=a}}}class _s{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);SR(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function cw(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const GR=37297;let yR=0;function kR(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function MR(Q){const A=Ig.getPrimaries(Ig.workingColorSpace),I=Ig.getPrimaries(Q);let g;switch(A===I?g="":A===He&&I===me?g="LinearDisplayP3ToLinearSRGB":A===me&&I===He&&(g="LinearSRGBToLinearDisplayP3"),Q){case ZQ:case ia:return[g,"LinearTransferOETF"];case hC:case Gn:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function lw(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+kR(Q.getShaderSource(A),i)}else return C}function UR(Q,A){const I=MR(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function NR(Q,A){let I;switch(A){case Ny:I="Linear";break;case Ky:I="Reinhard";break;case py:I="OptimizedCineon";break;case Vh:I="ACESFilmic";break;case dy:I="AgX";break;case Fy:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function KR(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.alphaToCoverage||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tt).join(`
`)}function pR(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tt).join(`
`)}function FR(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function dR(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function tt(Q){return Q!==""}function ww(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Sw(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const RR=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(Q){return Q.replace(RR,fR)}const JR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fR(Q,A){let I=nI[A];if(I===void 0){const g=JR.get(A);if(g!==void 0)I=nI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return th(I)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gw(Q){return Q.replace(uR,qR)}function qR(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function yw(Q){let A=`precision ${Q.precision} float;
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
#define LOW_PRECISION`),A}function YR(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===Wh?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===cn?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===uQ&&(A="SHADOWMAP_TYPE_VSM"),A}function LR(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case Ni:case eE:A="ENVMAP_TYPE_CUBE";break;case pt:A="ENVMAP_TYPE_CUBE_UV";break}return A}function mR(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case eE:A="ENVMAP_MODE_REFRACTION";break}return A}function HR(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case Qa:A="ENVMAP_BLENDING_MULTIPLY";break;case My:A="ENVMAP_BLENDING_MIX";break;case Uy:A="ENVMAP_BLENDING_ADD";break}return A}function TR(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function bR(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const o=YR(I),t=LR(I),e=mR(I),a=HR(I),s=TR(I),n=I.isWebGL2?"":KR(I),D=pR(I),c=FR(B),r=C.createProgram();let h,S,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(tt).join(`
`),h.length>0&&(h+=`
`),S=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(tt).join(`
`),S.length>0&&(S+=`
`)):(h=[yw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tt).join(`
`),S=[n,yw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==li?"#define TONE_MAPPING":"",I.toneMapping!==li?nI.tonemapping_pars_fragment:"",I.toneMapping!==li?NR("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",nI.colorspace_pars_fragment,UR("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(tt).join(`
`)),i=th(i),i=ww(i,I),i=Sw(i,I),E=th(E),E=ww(E,I),E=Sw(E,I),i=Gw(i),E=Gw(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=[D,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const G=l+h+i,M=l+S+E,U=cw(C,C.VERTEX_SHADER,G),k=cw(C,C.FRAGMENT_SHADER,M);C.attachShader(r,U),C.attachShader(r,k),I.index0AttributeName!==void 0?C.bindAttribLocation(r,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(r,0,"position"),C.linkProgram(r);function K(T){if(Q.debug.checkShaderErrors){const v=C.getProgramInfoLog(r).trim(),H=C.getShaderInfoLog(U).trim(),V=C.getShaderInfoLog(k).trim();let _=!0,j=!0;if(C.getProgramParameter(r,C.LINK_STATUS)===!1)if(_=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,r,U,k);else{const AA=lw(C,U,"vertex"),IA=lw(C,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(r,C.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+v+`
`+AA+`
`+IA)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(H===""||V==="")&&(j=!1);j&&(T.diagnostics={runnable:_,programLog:v,vertexShader:{log:H,prefix:h},fragmentShader:{log:V,prefix:S}})}C.deleteShader(U),C.deleteShader(k),q=new _s(C,r),y=dR(C,r)}let q;this.getUniforms=function(){return q===void 0&&K(this),q};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=C.getProgramParameter(r,GR)),N},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(r),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=yR++,this.cacheKey=A,this.usedTimes=1,this.program=r,this.vertexShader=U,this.fragmentShader=k,this}let xR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new OR(A),I.set(A,g)),g}}class OR{constructor(A){this.id=xR++,this.code=A,this.usedTimes=0}}function vR(Q,A,I,g,C,B,i){const E=new kn,o=new _R,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let D=C.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(y){return t.add(y),y===0?"uv":`uv${y}`}function h(y,N,T,v,H){const V=v.fog,_=H.geometry,j=y.isMeshStandardMaterial?v.environment:null,AA=(y.isMeshStandardMaterial?I:A).get(y.envMap||j),IA=AA&&AA.mapping===pt?AA.image.height:null,tA=c[y.type];y.precision!==null&&(D=C.getMaxPrecision(y.precision),D!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",D,"instead."));const aA=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,pA=aA!==void 0?aA.length:0;let CI=0;_.morphAttributes.position!==void 0&&(CI=1),_.morphAttributes.normal!==void 0&&(CI=2),_.morphAttributes.color!==void 0&&(CI=3);let QA,GA,vA,uA;if(tA){const HI=kQ[tA];QA=HI.vertexShader,GA=HI.fragmentShader}else QA=y.vertexShader,GA=y.fragmentShader,o.update(y),vA=o.getVertexShaderID(y),uA=o.getFragmentShaderID(y);const sA=Q.getRenderTarget(),WA=H.isInstancedMesh===!0,qA=H.isBatchedMesh===!0,LA=!!y.map,L=!!y.matcap,SA=!!AA,nA=!!y.aoMap,NA=!!y.lightMap,rA=!!y.bumpMap,AI=!!y.normalMap,mA=!!y.displacementMap,J=!!y.emissiveMap,p=!!y.metalnessMap,X=!!y.roughnessMap,MA=y.anisotropy>0,cA=y.clearcoat>0,yA=y.iridescence>0,jA=y.sheen>0,fA=y.transmission>0,ZA=MA&&!!y.anisotropyMap,EI=cA&&!!y.clearcoatMap,SI=cA&&!!y.clearcoatNormalMap,lA=cA&&!!y.clearcoatRoughnessMap,TI=yA&&!!y.iridescenceMap,RI=yA&&!!y.iridescenceThicknessMap,lI=jA&&!!y.sheenColorMap,zA=jA&&!!y.sheenRoughnessMap,xA=!!y.specularMap,NI=!!y.specularColorMap,m=!!y.specularIntensityMap,KA=fA&&!!y.transmissionMap,HA=fA&&!!y.thicknessMap,iI=!!y.gradientMap,Y=!!y.alphaMap,UA=y.alphaTest>0,wA=!!y.alphaHash,$A=!!y.extensions;let XA=li;y.toneMapped&&(sA===null||sA.isXRRenderTarget===!0)&&(XA=Q.toneMapping);const bI={isWebGL2:a,shaderID:tA,shaderType:y.type,shaderName:y.name,vertexShader:QA,fragmentShader:GA,defines:y.defines,customVertexShaderID:vA,customFragmentShaderID:uA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:D,batching:qA,instancing:WA,instancingColor:WA&&H.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:sA===null?Q.outputColorSpace:sA.isXRRenderTarget===!0?sA.texture.colorSpace:ZQ,alphaToCoverage:!!y.alphaToCoverage,map:LA,matcap:L,envMap:SA,envMapMode:SA&&AA.mapping,envMapCubeUVHeight:IA,aoMap:nA,lightMap:NA,bumpMap:rA,normalMap:AI,displacementMap:n&&mA,emissiveMap:J,normalMapObjectSpace:AI&&y.normalMapType===vy,normalMapTangentSpace:AI&&y.normalMapType===DE,metalnessMap:p,roughnessMap:X,anisotropy:MA,anisotropyMap:ZA,clearcoat:cA,clearcoatMap:EI,clearcoatNormalMap:SI,clearcoatRoughnessMap:lA,iridescence:yA,iridescenceMap:TI,iridescenceThicknessMap:RI,sheen:jA,sheenColorMap:lI,sheenRoughnessMap:zA,specularMap:xA,specularColorMap:NI,specularIntensityMap:m,transmission:fA,transmissionMap:KA,thicknessMap:HA,gradientMap:iI,opaque:y.transparent===!1&&y.blending===oo&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:UA,alphaHash:wA,combine:y.combine,mapUv:LA&&r(y.map.channel),aoMapUv:nA&&r(y.aoMap.channel),lightMapUv:NA&&r(y.lightMap.channel),bumpMapUv:rA&&r(y.bumpMap.channel),normalMapUv:AI&&r(y.normalMap.channel),displacementMapUv:mA&&r(y.displacementMap.channel),emissiveMapUv:J&&r(y.emissiveMap.channel),metalnessMapUv:p&&r(y.metalnessMap.channel),roughnessMapUv:X&&r(y.roughnessMap.channel),anisotropyMapUv:ZA&&r(y.anisotropyMap.channel),clearcoatMapUv:EI&&r(y.clearcoatMap.channel),clearcoatNormalMapUv:SI&&r(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lA&&r(y.clearcoatRoughnessMap.channel),iridescenceMapUv:TI&&r(y.iridescenceMap.channel),iridescenceThicknessMapUv:RI&&r(y.iridescenceThicknessMap.channel),sheenColorMapUv:lI&&r(y.sheenColorMap.channel),sheenRoughnessMapUv:zA&&r(y.sheenRoughnessMap.channel),specularMapUv:xA&&r(y.specularMap.channel),specularColorMapUv:NI&&r(y.specularColorMap.channel),specularIntensityMapUv:m&&r(y.specularIntensityMap.channel),transmissionMapUv:KA&&r(y.transmissionMap.channel),thicknessMapUv:HA&&r(y.thicknessMap.channel),alphaMapUv:Y&&r(y.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(AI||MA),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!_.attributes.uv&&(LA||Y),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:H.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:pA,morphTextureStride:CI,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:y.dithering,shadowMapEnabled:Q.shadowMap.enabled&&T.length>0,shadowMapType:Q.shadowMap.type,toneMapping:XA,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:LA&&y.map.isVideoTexture===!0&&Ig.getTransfer(y.map.colorSpace)===wg,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===HQ,flipSided:y.side===cB,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:$A&&y.extensions.derivatives===!0,extensionFragDepth:$A&&y.extensions.fragDepth===!0,extensionDrawBuffers:$A&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:$A&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:$A&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$A&&y.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bI.vertexUv1s=t.has(1),bI.vertexUv2s=t.has(2),bI.vertexUv3s=t.has(3),t.clear(),bI}function S(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)N.push(T),N.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(l(N,y),G(N,y),N.push(Q.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function l(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function G(y,N){E.disableAll(),N.isWebGL2&&E.enable(0),N.supportsVertexTextures&&E.enable(1),N.instancing&&E.enable(2),N.instancingColor&&E.enable(3),N.matcap&&E.enable(4),N.envMap&&E.enable(5),N.normalMapObjectSpace&&E.enable(6),N.normalMapTangentSpace&&E.enable(7),N.clearcoat&&E.enable(8),N.iridescence&&E.enable(9),N.alphaTest&&E.enable(10),N.vertexColors&&E.enable(11),N.vertexAlphas&&E.enable(12),N.vertexUv1s&&E.enable(13),N.vertexUv2s&&E.enable(14),N.vertexUv3s&&E.enable(15),N.vertexTangents&&E.enable(16),N.anisotropy&&E.enable(17),N.alphaHash&&E.enable(18),N.batching&&E.enable(19),y.push(E.mask),E.disableAll(),N.fog&&E.enable(0),N.useFog&&E.enable(1),N.flatShading&&E.enable(2),N.logarithmicDepthBuffer&&E.enable(3),N.skinning&&E.enable(4),N.morphTargets&&E.enable(5),N.morphNormals&&E.enable(6),N.morphColors&&E.enable(7),N.premultipliedAlpha&&E.enable(8),N.shadowMapEnabled&&E.enable(9),N.useLegacyLights&&E.enable(10),N.doubleSided&&E.enable(11),N.flipSided&&E.enable(12),N.useDepthPacking&&E.enable(13),N.dithering&&E.enable(14),N.transmission&&E.enable(15),N.sheen&&E.enable(16),N.opaque&&E.enable(17),N.pointsUvs&&E.enable(18),N.decodeVideoTexture&&E.enable(19),N.alphaToCoverage&&E.enable(20),y.push(E.mask)}function M(y){const N=c[y.type];let T;if(N){const v=kQ[N];T=Qk.clone(v.uniforms)}else T=y.uniforms;return T}function U(y,N){let T;for(let v=0,H=e.length;v<H;v++){const V=e[v];if(V.cacheKey===N){T=V,++T.usedTimes;break}}return T===void 0&&(T=new bR(Q,N,y,B),e.push(T)),T}function k(y){if(--y.usedTimes===0){const N=e.indexOf(y);e[N]=e[e.length-1],e.pop(),y.destroy()}}function K(y){o.remove(y)}function q(){o.dispose()}return{getParameters:h,getProgramCacheKey:S,getUniforms:M,acquireProgram:U,releaseProgram:k,releaseShaderCache:K,programs:e,dispose:q}}function ZR(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function PR(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function kw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Mw(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(a,s,n,D,c,r){let h=Q[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:D,renderOrder:a.renderOrder,z:c,group:r},Q[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=D,h.renderOrder=a.renderOrder,h.z=c,h.group=r),A++,h}function E(a,s,n,D,c,r){const h=i(a,s,n,D,c,r);n.transmission>0?g.push(h):n.transparent===!0?C.push(h):I.push(h)}function o(a,s,n,D,c,r){const h=i(a,s,n,D,c,r);n.transmission>0?g.unshift(h):n.transparent===!0?C.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||PR),g.length>1&&g.sort(s||kw),C.length>1&&C.sort(s||kw)}function e(){for(let a=A,s=Q.length;a<s;a++){const n=Q[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function WR(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new Mw,Q.set(g,[i])):C>=B.length?(i=new Mw,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function VR(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new u,color:new PA};break;case"SpotLight":I={position:new u,direction:new u,color:new PA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new u,color:new PA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new u,skyColor:new PA,groundColor:new PA};break;case"RectAreaLight":I={color:new PA,position:new u,halfWidth:new u,halfHeight:new u};break}return Q[A.id]=I,I}}}function jR(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new DA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let XR=0;function zR(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function $R(Q,A){const I=new VR,g=jR(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new u);const B=new u,i=new cI,E=new cI;function o(e,a){let s=0,n=0,D=0;for(let T=0;T<9;T++)C.probe[T].set(0,0,0);let c=0,r=0,h=0,S=0,l=0,G=0,M=0,U=0,k=0,K=0,q=0;e.sort(zR);const y=a===!0?Math.PI:1;for(let T=0,v=e.length;T<v;T++){const H=e[T],V=H.color,_=H.intensity,j=H.distance,AA=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)s+=V.r*_*y,n+=V.g*_*y,D+=V.b*_*y;else if(H.isLightProbe){for(let IA=0;IA<9;IA++)C.probe[IA].addScaledVector(H.sh.coefficients[IA],_);q++}else if(H.isDirectionalLight){const IA=I.get(H);if(IA.color.copy(H.color).multiplyScalar(H.intensity*y),H.castShadow){const tA=H.shadow,aA=g.get(H);aA.shadowBias=tA.bias,aA.shadowNormalBias=tA.normalBias,aA.shadowRadius=tA.radius,aA.shadowMapSize=tA.mapSize,C.directionalShadow[c]=aA,C.directionalShadowMap[c]=AA,C.directionalShadowMatrix[c]=H.shadow.matrix,G++}C.directional[c]=IA,c++}else if(H.isSpotLight){const IA=I.get(H);IA.position.setFromMatrixPosition(H.matrixWorld),IA.color.copy(V).multiplyScalar(_*y),IA.distance=j,IA.coneCos=Math.cos(H.angle),IA.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),IA.decay=H.decay,C.spot[h]=IA;const tA=H.shadow;if(H.map&&(C.spotLightMap[k]=H.map,k++,tA.updateMatrices(H),H.castShadow&&K++),C.spotLightMatrix[h]=tA.matrix,H.castShadow){const aA=g.get(H);aA.shadowBias=tA.bias,aA.shadowNormalBias=tA.normalBias,aA.shadowRadius=tA.radius,aA.shadowMapSize=tA.mapSize,C.spotShadow[h]=aA,C.spotShadowMap[h]=AA,U++}h++}else if(H.isRectAreaLight){const IA=I.get(H);IA.color.copy(V).multiplyScalar(_),IA.halfWidth.set(H.width*.5,0,0),IA.halfHeight.set(0,H.height*.5,0),C.rectArea[S]=IA,S++}else if(H.isPointLight){const IA=I.get(H);if(IA.color.copy(H.color).multiplyScalar(H.intensity*y),IA.distance=H.distance,IA.decay=H.decay,H.castShadow){const tA=H.shadow,aA=g.get(H);aA.shadowBias=tA.bias,aA.shadowNormalBias=tA.normalBias,aA.shadowRadius=tA.radius,aA.shadowMapSize=tA.mapSize,aA.shadowCameraNear=tA.camera.near,aA.shadowCameraFar=tA.camera.far,C.pointShadow[r]=aA,C.pointShadowMap[r]=AA,C.pointShadowMatrix[r]=H.shadow.matrix,M++}C.point[r]=IA,r++}else if(H.isHemisphereLight){const IA=I.get(H);IA.skyColor.copy(H.color).multiplyScalar(_*y),IA.groundColor.copy(H.groundColor).multiplyScalar(_*y),C.hemi[l]=IA,l++}}S>0&&(A.isWebGL2?Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=YA.LTC_FLOAT_1,C.rectAreaLTC2=YA.LTC_FLOAT_2):(C.rectAreaLTC1=YA.LTC_HALF_1,C.rectAreaLTC2=YA.LTC_HALF_2):Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=YA.LTC_FLOAT_1,C.rectAreaLTC2=YA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=YA.LTC_HALF_1,C.rectAreaLTC2=YA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=D;const N=C.hash;(N.directionalLength!==c||N.pointLength!==r||N.spotLength!==h||N.rectAreaLength!==S||N.hemiLength!==l||N.numDirectionalShadows!==G||N.numPointShadows!==M||N.numSpotShadows!==U||N.numSpotMaps!==k||N.numLightProbes!==q)&&(C.directional.length=c,C.spot.length=h,C.rectArea.length=S,C.point.length=r,C.hemi.length=l,C.directionalShadow.length=G,C.directionalShadowMap.length=G,C.pointShadow.length=M,C.pointShadowMap.length=M,C.spotShadow.length=U,C.spotShadowMap.length=U,C.directionalShadowMatrix.length=G,C.pointShadowMatrix.length=M,C.spotLightMatrix.length=U+k-K,C.spotLightMap.length=k,C.numSpotLightShadowsWithMaps=K,C.numLightProbes=q,N.directionalLength=c,N.pointLength=r,N.spotLength=h,N.rectAreaLength=S,N.hemiLength=l,N.numDirectionalShadows=G,N.numPointShadows=M,N.numSpotShadows=U,N.numSpotMaps=k,N.numLightProbes=q,C.version=XR++)}function t(e,a){let s=0,n=0,D=0,c=0,r=0;const h=a.matrixWorldInverse;for(let S=0,l=e.length;S<l;S++){const G=e[S];if(G.isDirectionalLight){const M=C.directional[s];M.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(h),s++}else if(G.isSpotLight){const M=C.spot[D];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(h),D++}else if(G.isRectAreaLight){const M=C.rectArea[c];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(h),E.identity(),i.copy(G.matrixWorld),i.premultiply(h),E.extractRotation(i),M.halfWidth.set(G.width*.5,0,0),M.halfHeight.set(0,G.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),c++}else if(G.isPointLight){const M=C.point[n];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(h),n++}else if(G.isHemisphereLight){const M=C.hemi[r];M.direction.setFromMatrixPosition(G.matrixWorld),M.direction.transformDirection(h),r++}}}return{setup:o,setupView:t,state:C}}function Uw(Q,A){const I=new $R(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:i,pushShadow:E}}function AJ(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let o;return E===void 0?(o=new Uw(Q,A),I.set(B,[o])):i>=E.length?(o=new Uw(Q,A),E.push(o)):o=E[i],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class sc extends gB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class nc extends gB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const IJ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gJ=`uniform sampler2D shadow_pass;
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
}`;function CJ(Q,A,I){let g=new oa;const C=new DA,B=new DA,i=new og,E=new sc({depthPacking:Oy}),o=new nc,t={},e=I.maxTextureSize,a={[Ui]:cB,[cB]:Ui,[HQ]:HQ},s=new tQ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new DA},radius:{value:4}},vertexShader:IJ,fragmentShader:gJ}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const D=new mI;D.setAttribute("position",new tg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new $g(D,s),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let h=this.type;this.render=function(U,k,K){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||U.length===0)return;const q=Q.getRenderTarget(),y=Q.getActiveCubeFace(),N=Q.getActiveMipmapLevel(),T=Q.state;T.setBlending(ci),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const v=h!==uQ&&this.type===uQ,H=h===uQ&&this.type!==uQ;for(let V=0,_=U.length;V<_;V++){const j=U[V],AA=j.shadow;if(AA===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(AA.autoUpdate===!1&&AA.needsUpdate===!1)continue;C.copy(AA.mapSize);const IA=AA.getFrameExtents();if(C.multiply(IA),B.copy(AA.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/IA.x),C.x=B.x*IA.x,AA.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/IA.y),C.y=B.y*IA.y,AA.mapSize.y=B.y)),AA.map===null||v===!0||H===!0){const aA=this.type!==uQ?{minFilter:zg,magFilter:zg}:{};AA.map!==null&&AA.map.dispose(),AA.map=new NQ(C.x,C.y,aA),AA.map.texture.name=j.name+".shadowMap",AA.camera.updateProjectionMatrix()}Q.setRenderTarget(AA.map),Q.clear();const tA=AA.getViewportCount();for(let aA=0;aA<tA;aA++){const pA=AA.getViewport(aA);i.set(B.x*pA.x,B.y*pA.y,B.x*pA.z,B.y*pA.w),T.viewport(i),AA.updateMatrices(j,aA),g=AA.getFrustum(),G(k,K,AA.camera,j,this.type)}AA.isPointLightShadow!==!0&&this.type===uQ&&S(AA,K),AA.needsUpdate=!1}h=this.type,r.needsUpdate=!1,Q.setRenderTarget(q,y,N)};function S(U,k){const K=A.update(c);s.defines.VSM_SAMPLES!==U.blurSamples&&(s.defines.VSM_SAMPLES=U.blurSamples,n.defines.VSM_SAMPLES=U.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new NQ(C.x,C.y)),s.uniforms.shadow_pass.value=U.map.texture,s.uniforms.resolution.value=U.mapSize,s.uniforms.radius.value=U.radius,Q.setRenderTarget(U.mapPass),Q.clear(),Q.renderBufferDirect(k,null,K,s,c,null),n.uniforms.shadow_pass.value=U.mapPass.texture,n.uniforms.resolution.value=U.mapSize,n.uniforms.radius.value=U.radius,Q.setRenderTarget(U.map),Q.clear(),Q.renderBufferDirect(k,null,K,n,c,null)}function l(U,k,K,q){let y=null;const N=K.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)y=N;else if(y=K.isPointLight===!0?o:E,Q.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const T=y.uuid,v=k.uuid;let H=t[T];H===void 0&&(H={},t[T]=H);let V=H[v];V===void 0&&(V=y.clone(),H[v]=V,k.addEventListener("dispose",M)),y=V}if(y.visible=k.visible,y.wireframe=k.wireframe,q===uQ?y.side=k.shadowSide!==null?k.shadowSide:k.side:y.side=k.shadowSide!==null?k.shadowSide:a[k.side],y.alphaMap=k.alphaMap,y.alphaTest=k.alphaTest,y.map=k.map,y.clipShadows=k.clipShadows,y.clippingPlanes=k.clippingPlanes,y.clipIntersection=k.clipIntersection,y.displacementMap=k.displacementMap,y.displacementScale=k.displacementScale,y.displacementBias=k.displacementBias,y.wireframeLinewidth=k.wireframeLinewidth,y.linewidth=k.linewidth,K.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const T=Q.properties.get(y);T.light=K}return y}function G(U,k,K,q,y){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===uQ)&&(!U.frustumCulled||g.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld);const v=A.update(U),H=U.material;if(Array.isArray(H)){const V=v.groups;for(let _=0,j=V.length;_<j;_++){const AA=V[_],IA=H[AA.materialIndex];if(IA&&IA.visible){const tA=l(U,IA,q,y);U.onBeforeShadow(Q,U,k,K,v,tA,AA),Q.renderBufferDirect(K,null,v,tA,U,AA),U.onAfterShadow(Q,U,k,K,v,tA,AA)}}}else if(H.visible){const V=l(U,H,q,y);U.onBeforeShadow(Q,U,k,K,v,V,null),Q.renderBufferDirect(K,null,v,V,U,null),U.onAfterShadow(Q,U,k,K,v,V,null)}}const T=U.children;for(let v=0,H=T.length;v<H;v++)G(T[v],k,K,q,y)}function M(U){U.target.removeEventListener("dispose",M);for(const K in t){const q=t[K],y=U.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}function BJ(Q,A,I){const g=I.isWebGL2;function C(){let Y=!1;const UA=new og;let wA=null;const $A=new og(0,0,0,0);return{setMask:function(XA){wA!==XA&&!Y&&(Q.colorMask(XA,XA,XA,XA),wA=XA)},setLocked:function(XA){Y=XA},setClear:function(XA,bI,HI,gg,tC){tC===!0&&(XA*=gg,bI*=gg,HI*=gg),UA.set(XA,bI,HI,gg),$A.equals(UA)===!1&&(Q.clearColor(XA,bI,HI,gg),$A.copy(UA))},reset:function(){Y=!1,wA=null,$A.set(-1,0,0,0)}}}function B(){let Y=!1,UA=null,wA=null,$A=null;return{setTest:function(XA){XA?WA(Q.DEPTH_TEST):qA(Q.DEPTH_TEST)},setMask:function(XA){UA!==XA&&!Y&&(Q.depthMask(XA),UA=XA)},setFunc:function(XA){if(wA!==XA){switch(XA){case cy:Q.depthFunc(Q.NEVER);break;case ly:Q.depthFunc(Q.ALWAYS);break;case wy:Q.depthFunc(Q.LESS);break;case pe:Q.depthFunc(Q.LEQUAL);break;case Sy:Q.depthFunc(Q.EQUAL);break;case Gy:Q.depthFunc(Q.GEQUAL);break;case yy:Q.depthFunc(Q.GREATER);break;case ky:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}wA=XA}},setLocked:function(XA){Y=XA},setClear:function(XA){$A!==XA&&(Q.clearDepth(XA),$A=XA)},reset:function(){Y=!1,UA=null,wA=null,$A=null}}}function i(){let Y=!1,UA=null,wA=null,$A=null,XA=null,bI=null,HI=null,gg=null,tC=null;return{setTest:function(ZI){Y||(ZI?WA(Q.STENCIL_TEST):qA(Q.STENCIL_TEST))},setMask:function(ZI){UA!==ZI&&!Y&&(Q.stencilMask(ZI),UA=ZI)},setFunc:function(ZI,kg,cg){(wA!==ZI||$A!==kg||XA!==cg)&&(Q.stencilFunc(ZI,kg,cg),wA=ZI,$A=kg,XA=cg)},setOp:function(ZI,kg,cg){(bI!==ZI||HI!==kg||gg!==cg)&&(Q.stencilOp(ZI,kg,cg),bI=ZI,HI=kg,gg=cg)},setLocked:function(ZI){Y=ZI},setClear:function(ZI){tC!==ZI&&(Q.clearStencil(ZI),tC=ZI)},reset:function(){Y=!1,UA=null,wA=null,$A=null,XA=null,bI=null,HI=null,gg=null,tC=null}}}const E=new C,o=new B,t=new i,e=new WeakMap,a=new WeakMap;let s={},n={},D=new WeakMap,c=[],r=null,h=!1,S=null,l=null,G=null,M=null,U=null,k=null,K=null,q=new PA(0,0,0),y=0,N=!1,T=null,v=null,H=null,V=null,_=null;const j=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let AA=!1,IA=0;const tA=Q.getParameter(Q.VERSION);tA.indexOf("WebGL")!==-1?(IA=parseFloat(/^WebGL (\d)/.exec(tA)[1]),AA=IA>=1):tA.indexOf("OpenGL ES")!==-1&&(IA=parseFloat(/^OpenGL ES (\d)/.exec(tA)[1]),AA=IA>=2);let aA=null,pA={};const CI=Q.getParameter(Q.SCISSOR_BOX),QA=Q.getParameter(Q.VIEWPORT),GA=new og().fromArray(CI),vA=new og().fromArray(QA);function uA(Y,UA,wA,$A){const XA=new Uint8Array(4),bI=Q.createTexture();Q.bindTexture(Y,bI),Q.texParameteri(Y,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(Y,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let HI=0;HI<wA;HI++)g&&(Y===Q.TEXTURE_3D||Y===Q.TEXTURE_2D_ARRAY)?Q.texImage3D(UA,0,Q.RGBA,1,1,$A,0,Q.RGBA,Q.UNSIGNED_BYTE,XA):Q.texImage2D(UA+HI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,XA);return bI}const sA={};sA[Q.TEXTURE_2D]=uA(Q.TEXTURE_2D,Q.TEXTURE_2D,1),sA[Q.TEXTURE_CUBE_MAP]=uA(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(sA[Q.TEXTURE_2D_ARRAY]=uA(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),sA[Q.TEXTURE_3D]=uA(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1)),E.setClear(0,0,0,1),o.setClear(1),t.setClear(0),WA(Q.DEPTH_TEST),o.setFunc(pe),mA(!1),J(pD),WA(Q.CULL_FACE),rA(ci);function WA(Y){s[Y]!==!0&&(Q.enable(Y),s[Y]=!0)}function qA(Y){s[Y]!==!1&&(Q.disable(Y),s[Y]=!1)}function LA(Y,UA){return n[Y]!==UA?(Q.bindFramebuffer(Y,UA),n[Y]=UA,g&&(Y===Q.DRAW_FRAMEBUFFER&&(n[Q.FRAMEBUFFER]=UA),Y===Q.FRAMEBUFFER&&(n[Q.DRAW_FRAMEBUFFER]=UA)),!0):!1}function L(Y,UA){let wA=c,$A=!1;if(Y)if(wA=D.get(UA),wA===void 0&&(wA=[],D.set(UA,wA)),Y.isWebGLMultipleRenderTargets){const XA=Y.texture;if(wA.length!==XA.length||wA[0]!==Q.COLOR_ATTACHMENT0){for(let bI=0,HI=XA.length;bI<HI;bI++)wA[bI]=Q.COLOR_ATTACHMENT0+bI;wA.length=XA.length,$A=!0}}else wA[0]!==Q.COLOR_ATTACHMENT0&&(wA[0]=Q.COLOR_ATTACHMENT0,$A=!0);else wA[0]!==Q.BACK&&(wA[0]=Q.BACK,$A=!0);$A&&(I.isWebGL2?Q.drawBuffers(wA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(wA))}function SA(Y){return r!==Y?(Q.useProgram(Y),r=Y,!0):!1}const nA={[Xi]:Q.FUNC_ADD,[gy]:Q.FUNC_SUBTRACT,[Cy]:Q.FUNC_REVERSE_SUBTRACT};if(g)nA[RD]=Q.MIN,nA[JD]=Q.MAX;else{const Y=A.get("EXT_blend_minmax");Y!==null&&(nA[RD]=Y.MIN_EXT,nA[JD]=Y.MAX_EXT)}const NA={[By]:Q.ZERO,[Qy]:Q.ONE,[iy]:Q.SRC_COLOR,[$s]:Q.SRC_ALPHA,[sy]:Q.SRC_ALPHA_SATURATE,[ey]:Q.DST_COLOR,[oy]:Q.DST_ALPHA,[Ey]:Q.ONE_MINUS_SRC_COLOR,[An]:Q.ONE_MINUS_SRC_ALPHA,[ay]:Q.ONE_MINUS_DST_COLOR,[ty]:Q.ONE_MINUS_DST_ALPHA,[ny]:Q.CONSTANT_COLOR,[ry]:Q.ONE_MINUS_CONSTANT_COLOR,[Dy]:Q.CONSTANT_ALPHA,[hy]:Q.ONE_MINUS_CONSTANT_ALPHA};function rA(Y,UA,wA,$A,XA,bI,HI,gg,tC,ZI){if(Y===ci){h===!0&&(qA(Q.BLEND),h=!1);return}if(h===!1&&(WA(Q.BLEND),h=!0),Y!==Iy){if(Y!==S||ZI!==N){if((l!==Xi||U!==Xi)&&(Q.blendEquation(Q.FUNC_ADD),l=Xi,U=Xi),ZI)switch(Y){case oo:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case zs:Q.blendFunc(Q.ONE,Q.ONE);break;case FD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case dD:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case oo:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case zs:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case FD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case dD:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}G=null,M=null,k=null,K=null,q.set(0,0,0),y=0,S=Y,N=ZI}return}XA=XA||UA,bI=bI||wA,HI=HI||$A,(UA!==l||XA!==U)&&(Q.blendEquationSeparate(nA[UA],nA[XA]),l=UA,U=XA),(wA!==G||$A!==M||bI!==k||HI!==K)&&(Q.blendFuncSeparate(NA[wA],NA[$A],NA[bI],NA[HI]),G=wA,M=$A,k=bI,K=HI),(gg.equals(q)===!1||tC!==y)&&(Q.blendColor(gg.r,gg.g,gg.b,tC),q.copy(gg),y=tC),S=Y,N=!1}function AI(Y,UA){Y.side===HQ?qA(Q.CULL_FACE):WA(Q.CULL_FACE);let wA=Y.side===cB;UA&&(wA=!wA),mA(wA),Y.blending===oo&&Y.transparent===!1?rA(ci):rA(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),E.setMask(Y.colorWrite);const $A=Y.stencilWrite;t.setTest($A),$A&&(t.setMask(Y.stencilWriteMask),t.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),t.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),X(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?WA(Q.SAMPLE_ALPHA_TO_COVERAGE):qA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function mA(Y){T!==Y&&(Y?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),T=Y)}function J(Y){Y!==$G?(WA(Q.CULL_FACE),Y!==v&&(Y===pD?Q.cullFace(Q.BACK):Y===Ay?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):qA(Q.CULL_FACE),v=Y}function p(Y){Y!==H&&(AA&&Q.lineWidth(Y),H=Y)}function X(Y,UA,wA){Y?(WA(Q.POLYGON_OFFSET_FILL),(V!==UA||_!==wA)&&(Q.polygonOffset(UA,wA),V=UA,_=wA)):qA(Q.POLYGON_OFFSET_FILL)}function MA(Y){Y?WA(Q.SCISSOR_TEST):qA(Q.SCISSOR_TEST)}function cA(Y){Y===void 0&&(Y=Q.TEXTURE0+j-1),aA!==Y&&(Q.activeTexture(Y),aA=Y)}function yA(Y,UA,wA){wA===void 0&&(aA===null?wA=Q.TEXTURE0+j-1:wA=aA);let $A=pA[wA];$A===void 0&&($A={type:void 0,texture:void 0},pA[wA]=$A),($A.type!==Y||$A.texture!==UA)&&(aA!==wA&&(Q.activeTexture(wA),aA=wA),Q.bindTexture(Y,UA||sA[Y]),$A.type=Y,$A.texture=UA)}function jA(){const Y=pA[aA];Y!==void 0&&Y.type!==void 0&&(Q.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function fA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ZA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function EI(){try{Q.texSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function SI(){try{Q.texSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function TI(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function RI(){try{Q.texStorage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lI(){try{Q.texStorage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zA(){try{Q.texImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xA(){try{Q.texImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function NI(Y){GA.equals(Y)===!1&&(Q.scissor(Y.x,Y.y,Y.z,Y.w),GA.copy(Y))}function m(Y){vA.equals(Y)===!1&&(Q.viewport(Y.x,Y.y,Y.z,Y.w),vA.copy(Y))}function KA(Y,UA){let wA=a.get(UA);wA===void 0&&(wA=new WeakMap,a.set(UA,wA));let $A=wA.get(Y);$A===void 0&&($A=Q.getUniformBlockIndex(UA,Y.name),wA.set(Y,$A))}function HA(Y,UA){const $A=a.get(UA).get(Y);e.get(UA)!==$A&&(Q.uniformBlockBinding(UA,$A,Y.__bindingPointIndex),e.set(UA,$A))}function iI(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),g===!0&&(Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},aA=null,pA={},n={},D=new WeakMap,c=[],r=null,h=!1,S=null,l=null,G=null,M=null,U=null,k=null,K=null,q=new PA(0,0,0),y=0,N=!1,T=null,v=null,H=null,V=null,_=null,GA.set(0,0,Q.canvas.width,Q.canvas.height),vA.set(0,0,Q.canvas.width,Q.canvas.height),E.reset(),o.reset(),t.reset()}return{buffers:{color:E,depth:o,stencil:t},enable:WA,disable:qA,bindFramebuffer:LA,drawBuffers:L,useProgram:SA,setBlending:rA,setMaterial:AI,setFlipSided:mA,setCullFace:J,setLineWidth:p,setPolygonOffset:X,setScissorTest:MA,activeTexture:cA,bindTexture:yA,unbindTexture:jA,compressedTexImage2D:fA,compressedTexImage3D:ZA,texImage2D:zA,texImage3D:xA,updateUBOMapping:KA,uniformBlockBinding:HA,texStorage2D:RI,texStorage3D:lI,texSubImage2D:EI,texSubImage3D:SI,compressedTexSubImage2D:lA,compressedTexSubImage3D:TI,scissor:NI,viewport:m,reset:iI}}function QJ(Q,A,I,g,C,B,i){const E=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(J,p){return n?new OffscreenCanvas(J,p):xe("canvas")}function c(J,p,X,MA){let cA=1;if((J.width>MA||J.height>MA)&&(cA=MA/Math.max(J.width,J.height)),cA<1||p===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const yA=p?Cn:Math.floor,jA=yA(cA*J.width),fA=yA(cA*J.height);a===void 0&&(a=D(jA,fA));const ZA=X?D(jA,fA):a;return ZA.width=jA,ZA.height=fA,ZA.getContext("2d").drawImage(J,0,0,jA,fA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+jA+"x"+fA+")."),ZA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function r(J){return Eh(J.width)&&Eh(J.height)}function h(J){return E?!1:J.wrapS!==WC||J.wrapT!==WC||J.minFilter!==zg&&J.minFilter!==fg}function S(J,p){return J.generateMipmaps&&p&&J.minFilter!==zg&&J.minFilter!==fg}function l(J){Q.generateMipmap(J)}function G(J,p,X,MA,cA=!1){if(E===!1)return p;if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let yA=p;if(p===Q.RED&&(X===Q.FLOAT&&(yA=Q.R32F),X===Q.HALF_FLOAT&&(yA=Q.R16F),X===Q.UNSIGNED_BYTE&&(yA=Q.R8)),p===Q.RED_INTEGER&&(X===Q.UNSIGNED_BYTE&&(yA=Q.R8UI),X===Q.UNSIGNED_SHORT&&(yA=Q.R16UI),X===Q.UNSIGNED_INT&&(yA=Q.R32UI),X===Q.BYTE&&(yA=Q.R8I),X===Q.SHORT&&(yA=Q.R16I),X===Q.INT&&(yA=Q.R32I)),p===Q.RG&&(X===Q.FLOAT&&(yA=Q.RG32F),X===Q.HALF_FLOAT&&(yA=Q.RG16F),X===Q.UNSIGNED_BYTE&&(yA=Q.RG8)),p===Q.RGBA){const jA=cA?Le:Ig.getTransfer(MA);X===Q.FLOAT&&(yA=Q.RGBA32F),X===Q.HALF_FLOAT&&(yA=Q.RGBA16F),X===Q.UNSIGNED_BYTE&&(yA=jA===wg?Q.SRGB8_ALPHA8:Q.RGBA8),X===Q.UNSIGNED_SHORT_4_4_4_4&&(yA=Q.RGBA4),X===Q.UNSIGNED_SHORT_5_5_5_1&&(yA=Q.RGB5_A1)}return(yA===Q.R16F||yA===Q.R32F||yA===Q.RG16F||yA===Q.RG32F||yA===Q.RGBA16F||yA===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),yA}function M(J,p,X){return S(J,X)===!0||J.isFramebufferTexture&&J.minFilter!==zg&&J.minFilter!==fg?Math.log2(Math.max(p.width,p.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?p.mipmaps.length:1}function U(J){return J===zg||J===In||J===VE?Q.NEAREST:Q.LINEAR}function k(J){const p=J.target;p.removeEventListener("dispose",k),q(p),p.isVideoTexture&&e.delete(p)}function K(J){const p=J.target;p.removeEventListener("dispose",K),N(p)}function q(J){const p=g.get(J);if(p.__webglInit===void 0)return;const X=J.source,MA=s.get(X);if(MA){const cA=MA[p.__cacheKey];cA.usedTimes--,cA.usedTimes===0&&y(J),Object.keys(MA).length===0&&s.delete(X)}g.remove(J)}function y(J){const p=g.get(J);Q.deleteTexture(p.__webglTexture);const X=J.source,MA=s.get(X);delete MA[p.__cacheKey],i.memory.textures--}function N(J){const p=J.texture,X=g.get(J),MA=g.get(p);if(MA.__webglTexture!==void 0&&(Q.deleteTexture(MA.__webglTexture),i.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let cA=0;cA<6;cA++){if(Array.isArray(X.__webglFramebuffer[cA]))for(let yA=0;yA<X.__webglFramebuffer[cA].length;yA++)Q.deleteFramebuffer(X.__webglFramebuffer[cA][yA]);else Q.deleteFramebuffer(X.__webglFramebuffer[cA]);X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer[cA])}else{if(Array.isArray(X.__webglFramebuffer))for(let cA=0;cA<X.__webglFramebuffer.length;cA++)Q.deleteFramebuffer(X.__webglFramebuffer[cA]);else Q.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let cA=0;cA<X.__webglColorRenderbuffer.length;cA++)X.__webglColorRenderbuffer[cA]&&Q.deleteRenderbuffer(X.__webglColorRenderbuffer[cA]);X.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let cA=0,yA=p.length;cA<yA;cA++){const jA=g.get(p[cA]);jA.__webglTexture&&(Q.deleteTexture(jA.__webglTexture),i.memory.textures--),g.remove(p[cA])}g.remove(p),g.remove(J)}let T=0;function v(){T=0}function H(){const J=T;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),T+=1,J}function V(J){const p=[];return p.push(J.wrapS),p.push(J.wrapT),p.push(J.wrapR||0),p.push(J.magFilter),p.push(J.minFilter),p.push(J.anisotropy),p.push(J.internalFormat),p.push(J.format),p.push(J.type),p.push(J.generateMipmaps),p.push(J.premultiplyAlpha),p.push(J.flipY),p.push(J.unpackAlignment),p.push(J.colorSpace),p.join()}function _(J,p){const X=g.get(J);if(J.isVideoTexture&&AI(J),J.isRenderTargetTexture===!1&&J.version>0&&X.__version!==J.version){const MA=J.image;if(MA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(MA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{GA(X,J,p);return}}I.bindTexture(Q.TEXTURE_2D,X.__webglTexture,Q.TEXTURE0+p)}function j(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){GA(X,J,p);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,X.__webglTexture,Q.TEXTURE0+p)}function AA(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){GA(X,J,p);return}I.bindTexture(Q.TEXTURE_3D,X.__webglTexture,Q.TEXTURE0+p)}function IA(J,p){const X=g.get(J);if(J.version>0&&X.__version!==J.version){vA(X,J,p);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,X.__webglTexture,Q.TEXTURE0+p)}const tA={[Re]:Q.REPEAT,[WC]:Q.CLAMP_TO_EDGE,[Je]:Q.MIRRORED_REPEAT},aA={[zg]:Q.NEAREST,[In]:Q.NEAREST_MIPMAP_NEAREST,[VE]:Q.NEAREST_MIPMAP_LINEAR,[fg]:Q.LINEAR,[De]:Q.LINEAR_MIPMAP_NEAREST,[bQ]:Q.LINEAR_MIPMAP_LINEAR},pA={[Zy]:Q.NEVER,[zy]:Q.ALWAYS,[Py]:Q.LESS,[Bc]:Q.LEQUAL,[Wy]:Q.EQUAL,[Xy]:Q.GEQUAL,[Vy]:Q.GREATER,[jy]:Q.NOTEQUAL};function CI(J,p,X){if(p.type===BQ&&A.has("OES_texture_float_linear")===!1&&(p.magFilter===fg||p.magFilter===De||p.magFilter===VE||p.magFilter===bQ||p.minFilter===fg||p.minFilter===De||p.minFilter===VE||p.minFilter===bQ)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(Q.texParameteri(J,Q.TEXTURE_WRAP_S,tA[p.wrapS]),Q.texParameteri(J,Q.TEXTURE_WRAP_T,tA[p.wrapT]),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,tA[p.wrapR]),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,aA[p.magFilter]),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,aA[p.minFilter])):(Q.texParameteri(J,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(J,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE),(p.wrapS!==WC||p.wrapT!==WC)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,U(p.magFilter)),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,U(p.minFilter)),p.minFilter!==zg&&p.minFilter!==fg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),p.compareFunction&&(Q.texParameteri(J,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(J,Q.TEXTURE_COMPARE_FUNC,pA[p.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const MA=A.get("EXT_texture_filter_anisotropic");if(p.magFilter===zg||p.minFilter!==VE&&p.minFilter!==bQ||p.type===BQ&&A.has("OES_texture_float_linear")===!1||E===!1&&p.type===St&&A.has("OES_texture_half_float_linear")===!1)return;(p.anisotropy>1||g.get(p).__currentAnisotropy)&&(Q.texParameterf(J,MA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,C.getMaxAnisotropy())),g.get(p).__currentAnisotropy=p.anisotropy)}}function QA(J,p){let X=!1;J.__webglInit===void 0&&(J.__webglInit=!0,p.addEventListener("dispose",k));const MA=p.source;let cA=s.get(MA);cA===void 0&&(cA={},s.set(MA,cA));const yA=V(p);if(yA!==J.__cacheKey){cA[yA]===void 0&&(cA[yA]={texture:Q.createTexture(),usedTimes:0},i.memory.textures++,X=!0),cA[yA].usedTimes++;const jA=cA[J.__cacheKey];jA!==void 0&&(cA[J.__cacheKey].usedTimes--,jA.usedTimes===0&&y(p)),J.__cacheKey=yA,J.__webglTexture=cA[yA].texture}return X}function GA(J,p,X){let MA=Q.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(MA=Q.TEXTURE_2D_ARRAY),p.isData3DTexture&&(MA=Q.TEXTURE_3D);const cA=QA(J,p),yA=p.source;I.bindTexture(MA,J.__webglTexture,Q.TEXTURE0+X);const jA=g.get(yA);if(yA.version!==jA.__version||cA===!0){I.activeTexture(Q.TEXTURE0+X);const fA=Ig.getPrimaries(Ig.workingColorSpace),ZA=p.colorSpace===_B?null:Ig.getPrimaries(p.colorSpace),EI=p.colorSpace===_B||fA===ZA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,p.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,p.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,EI);const SI=h(p)&&r(p.image)===!1;let lA=c(p.image,SI,!1,C.maxTextureSize);lA=mA(p,lA);const TI=r(lA)||E,RI=B.convert(p.format,p.colorSpace);let lI=B.convert(p.type),zA=G(p.internalFormat,RI,lI,p.colorSpace,p.isVideoTexture);CI(MA,p,TI);let xA;const NI=p.mipmaps,m=E&&p.isVideoTexture!==!0&&zA!==gc,KA=jA.__version===void 0||cA===!0,HA=yA.dataReady,iI=M(p,lA,TI);if(p.isDepthTexture)zA=Q.DEPTH_COMPONENT,E?p.type===BQ?zA=Q.DEPTH_COMPONENT32F:p.type===ni?zA=Q.DEPTH_COMPONENT24:p.type===CE?zA=Q.DEPTH24_STENCIL8:zA=Q.DEPTH_COMPONENT16:p.type===BQ&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),p.format===BE&&zA===Q.DEPTH_COMPONENT&&p.type!==wn&&p.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),p.type=ni,lI=B.convert(p.type)),p.format===Do&&zA===Q.DEPTH_COMPONENT&&(zA=Q.DEPTH_STENCIL,p.type!==CE&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),p.type=CE,lI=B.convert(p.type))),KA&&(m?I.texStorage2D(Q.TEXTURE_2D,1,zA,lA.width,lA.height):I.texImage2D(Q.TEXTURE_2D,0,zA,lA.width,lA.height,0,RI,lI,null));else if(p.isDataTexture)if(NI.length>0&&TI){m&&KA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)xA=NI[Y],m?HA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,xA.width,xA.height,RI,lI,xA.data):I.texImage2D(Q.TEXTURE_2D,Y,zA,xA.width,xA.height,0,RI,lI,xA.data);p.generateMipmaps=!1}else m?(KA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height),HA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,lA.width,lA.height,RI,lI,lA.data)):I.texImage2D(Q.TEXTURE_2D,0,zA,lA.width,lA.height,0,RI,lI,lA.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){m&&KA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iI,zA,NI[0].width,NI[0].height,lA.depth);for(let Y=0,UA=NI.length;Y<UA;Y++)xA=NI[Y],p.format!==UB?RI!==null?m?HA&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,xA.width,xA.height,lA.depth,RI,xA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,Y,zA,xA.width,xA.height,lA.depth,0,xA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m?HA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,xA.width,xA.height,lA.depth,RI,lI,xA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,Y,zA,xA.width,xA.height,lA.depth,0,RI,lI,xA.data)}else{m&&KA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)xA=NI[Y],p.format!==UB?RI!==null?m?HA&&I.compressedTexSubImage2D(Q.TEXTURE_2D,Y,0,0,xA.width,xA.height,RI,xA.data):I.compressedTexImage2D(Q.TEXTURE_2D,Y,zA,xA.width,xA.height,0,xA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m?HA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,xA.width,xA.height,RI,lI,xA.data):I.texImage2D(Q.TEXTURE_2D,Y,zA,xA.width,xA.height,0,RI,lI,xA.data)}else if(p.isDataArrayTexture)m?(KA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,iI,zA,lA.width,lA.height,lA.depth),HA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,lA.width,lA.height,lA.depth,RI,lI,lA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,zA,lA.width,lA.height,lA.depth,0,RI,lI,lA.data);else if(p.isData3DTexture)m?(KA&&I.texStorage3D(Q.TEXTURE_3D,iI,zA,lA.width,lA.height,lA.depth),HA&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,lA.width,lA.height,lA.depth,RI,lI,lA.data)):I.texImage3D(Q.TEXTURE_3D,0,zA,lA.width,lA.height,lA.depth,0,RI,lI,lA.data);else if(p.isFramebufferTexture){if(KA)if(m)I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height);else{let Y=lA.width,UA=lA.height;for(let wA=0;wA<iI;wA++)I.texImage2D(Q.TEXTURE_2D,wA,zA,Y,UA,0,RI,lI,null),Y>>=1,UA>>=1}}else if(NI.length>0&&TI){m&&KA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,NI[0].width,NI[0].height);for(let Y=0,UA=NI.length;Y<UA;Y++)xA=NI[Y],m?HA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,RI,lI,xA):I.texImage2D(Q.TEXTURE_2D,Y,zA,RI,lI,xA);p.generateMipmaps=!1}else m?(KA&&I.texStorage2D(Q.TEXTURE_2D,iI,zA,lA.width,lA.height),HA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,RI,lI,lA)):I.texImage2D(Q.TEXTURE_2D,0,zA,RI,lI,lA);S(p,TI)&&l(MA),jA.__version=yA.version,p.onUpdate&&p.onUpdate(p)}J.__version=p.version}function vA(J,p,X){if(p.image.length!==6)return;const MA=QA(J,p),cA=p.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,J.__webglTexture,Q.TEXTURE0+X);const yA=g.get(cA);if(cA.version!==yA.__version||MA===!0){I.activeTexture(Q.TEXTURE0+X);const jA=Ig.getPrimaries(Ig.workingColorSpace),fA=p.colorSpace===_B?null:Ig.getPrimaries(p.colorSpace),ZA=p.colorSpace===_B||jA===fA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,p.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,p.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,ZA);const EI=p.isCompressedTexture||p.image[0].isCompressedTexture,SI=p.image[0]&&p.image[0].isDataTexture,lA=[];for(let Y=0;Y<6;Y++)!EI&&!SI?lA[Y]=c(p.image[Y],!1,!0,C.maxCubemapSize):lA[Y]=SI?p.image[Y].image:p.image[Y],lA[Y]=mA(p,lA[Y]);const TI=lA[0],RI=r(TI)||E,lI=B.convert(p.format,p.colorSpace),zA=B.convert(p.type),xA=G(p.internalFormat,lI,zA,p.colorSpace),NI=E&&p.isVideoTexture!==!0,m=yA.__version===void 0||MA===!0,KA=cA.dataReady;let HA=M(p,TI,RI);CI(Q.TEXTURE_CUBE_MAP,p,RI);let iI;if(EI){NI&&m&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,HA,xA,TI.width,TI.height);for(let Y=0;Y<6;Y++){iI=lA[Y].mipmaps;for(let UA=0;UA<iI.length;UA++){const wA=iI[UA];p.format!==UB?lI!==null?NI?KA&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,0,0,wA.width,wA.height,lI,wA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,xA,wA.width,wA.height,0,wA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):NI?KA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,0,0,wA.width,wA.height,lI,zA,wA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA,xA,wA.width,wA.height,0,lI,zA,wA.data)}}}else{iI=p.mipmaps,NI&&m&&(iI.length>0&&HA++,I.texStorage2D(Q.TEXTURE_CUBE_MAP,HA,xA,lA[0].width,lA[0].height));for(let Y=0;Y<6;Y++)if(SI){NI?KA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lA[Y].width,lA[Y].height,lI,zA,lA[Y].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xA,lA[Y].width,lA[Y].height,0,lI,zA,lA[Y].data);for(let UA=0;UA<iI.length;UA++){const $A=iI[UA].image[Y].image;NI?KA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,0,0,$A.width,$A.height,lI,zA,$A.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,xA,$A.width,$A.height,0,lI,zA,$A.data)}}else{NI?KA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lI,zA,lA[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xA,lI,zA,lA[Y]);for(let UA=0;UA<iI.length;UA++){const wA=iI[UA];NI?KA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,0,0,lI,zA,wA.image[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,UA+1,xA,lI,zA,wA.image[Y])}}}S(p,RI)&&l(Q.TEXTURE_CUBE_MAP),yA.__version=cA.version,p.onUpdate&&p.onUpdate(p)}J.__version=p.version}function uA(J,p,X,MA,cA,yA){const jA=B.convert(X.format,X.colorSpace),fA=B.convert(X.type),ZA=G(X.internalFormat,jA,fA,X.colorSpace);if(!g.get(p).__hasExternalTextures){const SI=Math.max(1,p.width>>yA),lA=Math.max(1,p.height>>yA);cA===Q.TEXTURE_3D||cA===Q.TEXTURE_2D_ARRAY?I.texImage3D(cA,yA,ZA,SI,lA,p.depth,0,jA,fA,null):I.texImage2D(cA,yA,ZA,SI,lA,0,jA,fA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,J),rA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,MA,cA,g.get(X).__webglTexture,0,NA(p)):(cA===Q.TEXTURE_2D||cA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&cA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,MA,cA,g.get(X).__webglTexture,yA),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function sA(J,p,X){if(Q.bindRenderbuffer(Q.RENDERBUFFER,J),p.depthBuffer&&!p.stencilBuffer){let MA=E===!0?Q.DEPTH_COMPONENT24:Q.DEPTH_COMPONENT16;if(X||rA(p)){const cA=p.depthTexture;cA&&cA.isDepthTexture&&(cA.type===BQ?MA=Q.DEPTH_COMPONENT32F:cA.type===ni&&(MA=Q.DEPTH_COMPONENT24));const yA=NA(p);rA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,yA,MA,p.width,p.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,yA,MA,p.width,p.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,MA,p.width,p.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,J)}else if(p.depthBuffer&&p.stencilBuffer){const MA=NA(p);X&&rA(p)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,MA,Q.DEPTH24_STENCIL8,p.width,p.height):rA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,MA,Q.DEPTH24_STENCIL8,p.width,p.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,p.width,p.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,J)}else{const MA=p.isWebGLMultipleRenderTargets===!0?p.texture:[p.texture];for(let cA=0;cA<MA.length;cA++){const yA=MA[cA],jA=B.convert(yA.format,yA.colorSpace),fA=B.convert(yA.type),ZA=G(yA.internalFormat,jA,fA,yA.colorSpace),EI=NA(p);X&&rA(p)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,EI,ZA,p.width,p.height):rA(p)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,EI,ZA,p.width,p.height):Q.renderbufferStorage(Q.RENDERBUFFER,ZA,p.width,p.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function WA(J,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,J),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(p.depthTexture).__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),_(p.depthTexture,0);const MA=g.get(p.depthTexture).__webglTexture,cA=NA(p);if(p.depthTexture.format===BE)rA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,MA,0,cA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,MA,0);else if(p.depthTexture.format===Do)rA(p)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,MA,0,cA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,MA,0);else throw new Error("Unknown depthTexture format")}function qA(J){const p=g.get(J),X=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!p.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");WA(p.__webglFramebuffer,J)}else if(X){p.__webglDepthbuffer=[];for(let MA=0;MA<6;MA++)I.bindFramebuffer(Q.FRAMEBUFFER,p.__webglFramebuffer[MA]),p.__webglDepthbuffer[MA]=Q.createRenderbuffer(),sA(p.__webglDepthbuffer[MA],J,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer=Q.createRenderbuffer(),sA(p.__webglDepthbuffer,J,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function LA(J,p,X){const MA=g.get(J);p!==void 0&&uA(MA.__webglFramebuffer,J,J.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),X!==void 0&&qA(J)}function L(J){const p=J.texture,X=g.get(J),MA=g.get(p);J.addEventListener("dispose",K),J.isWebGLMultipleRenderTargets!==!0&&(MA.__webglTexture===void 0&&(MA.__webglTexture=Q.createTexture()),MA.__version=p.version,i.memory.textures++);const cA=J.isWebGLCubeRenderTarget===!0,yA=J.isWebGLMultipleRenderTargets===!0,jA=r(J)||E;if(cA){X.__webglFramebuffer=[];for(let fA=0;fA<6;fA++)if(E&&p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer[fA]=[];for(let ZA=0;ZA<p.mipmaps.length;ZA++)X.__webglFramebuffer[fA][ZA]=Q.createFramebuffer()}else X.__webglFramebuffer[fA]=Q.createFramebuffer()}else{if(E&&p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer=[];for(let fA=0;fA<p.mipmaps.length;fA++)X.__webglFramebuffer[fA]=Q.createFramebuffer()}else X.__webglFramebuffer=Q.createFramebuffer();if(yA)if(C.drawBuffers){const fA=J.texture;for(let ZA=0,EI=fA.length;ZA<EI;ZA++){const SI=g.get(fA[ZA]);SI.__webglTexture===void 0&&(SI.__webglTexture=Q.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(E&&J.samples>0&&rA(J)===!1){const fA=yA?p:[p];X.__webglMultisampledFramebuffer=Q.createFramebuffer(),X.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ZA=0;ZA<fA.length;ZA++){const EI=fA[ZA];X.__webglColorRenderbuffer[ZA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,X.__webglColorRenderbuffer[ZA]);const SI=B.convert(EI.format,EI.colorSpace),lA=B.convert(EI.type),TI=G(EI.internalFormat,SI,lA,EI.colorSpace,J.isXRRenderTarget===!0),RI=NA(J);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,RI,TI,J.width,J.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ZA,Q.RENDERBUFFER,X.__webglColorRenderbuffer[ZA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),J.depthBuffer&&(X.__webglDepthRenderbuffer=Q.createRenderbuffer(),sA(X.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(cA){I.bindTexture(Q.TEXTURE_CUBE_MAP,MA.__webglTexture),CI(Q.TEXTURE_CUBE_MAP,p,jA);for(let fA=0;fA<6;fA++)if(E&&p.mipmaps&&p.mipmaps.length>0)for(let ZA=0;ZA<p.mipmaps.length;ZA++)uA(X.__webglFramebuffer[fA][ZA],J,p,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+fA,ZA);else uA(X.__webglFramebuffer[fA],J,p,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+fA,0);S(p,jA)&&l(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(yA){const fA=J.texture;for(let ZA=0,EI=fA.length;ZA<EI;ZA++){const SI=fA[ZA],lA=g.get(SI);I.bindTexture(Q.TEXTURE_2D,lA.__webglTexture),CI(Q.TEXTURE_2D,SI,jA),uA(X.__webglFramebuffer,J,SI,Q.COLOR_ATTACHMENT0+ZA,Q.TEXTURE_2D,0),S(SI,jA)&&l(Q.TEXTURE_2D)}I.unbindTexture()}else{let fA=Q.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(E?fA=J.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(fA,MA.__webglTexture),CI(fA,p,jA),E&&p.mipmaps&&p.mipmaps.length>0)for(let ZA=0;ZA<p.mipmaps.length;ZA++)uA(X.__webglFramebuffer[ZA],J,p,Q.COLOR_ATTACHMENT0,fA,ZA);else uA(X.__webglFramebuffer,J,p,Q.COLOR_ATTACHMENT0,fA,0);S(p,jA)&&l(fA),I.unbindTexture()}J.depthBuffer&&qA(J)}function SA(J){const p=r(J)||E,X=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let MA=0,cA=X.length;MA<cA;MA++){const yA=X[MA];if(S(yA,p)){const jA=J.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,fA=g.get(yA).__webglTexture;I.bindTexture(jA,fA),l(jA),I.unbindTexture()}}}function nA(J){if(E&&J.samples>0&&rA(J)===!1){const p=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],X=J.width,MA=J.height;let cA=Q.COLOR_BUFFER_BIT;const yA=[],jA=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,fA=g.get(J),ZA=J.isWebGLMultipleRenderTargets===!0;if(ZA)for(let EI=0;EI<p.length;EI++)I.bindFramebuffer(Q.FRAMEBUFFER,fA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,fA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,fA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,fA.__webglFramebuffer);for(let EI=0;EI<p.length;EI++){yA.push(Q.COLOR_ATTACHMENT0+EI),J.depthBuffer&&yA.push(jA);const SI=fA.__ignoreDepthValues!==void 0?fA.__ignoreDepthValues:!1;if(SI===!1&&(J.depthBuffer&&(cA|=Q.DEPTH_BUFFER_BIT),J.stencilBuffer&&(cA|=Q.STENCIL_BUFFER_BIT)),ZA&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,fA.__webglColorRenderbuffer[EI]),SI===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[jA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[jA])),ZA){const lA=g.get(p[EI]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,lA,0)}Q.blitFramebuffer(0,0,X,MA,0,0,X,MA,cA,Q.NEAREST),t&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,yA)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),ZA)for(let EI=0;EI<p.length;EI++){I.bindFramebuffer(Q.FRAMEBUFFER,fA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.RENDERBUFFER,fA.__webglColorRenderbuffer[EI]);const SI=g.get(p[EI]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,fA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+EI,Q.TEXTURE_2D,SI,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,fA.__webglMultisampledFramebuffer)}}function NA(J){return Math.min(C.maxSamples,J.samples)}function rA(J){const p=g.get(J);return E&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function AI(J){const p=i.render.frame;e.get(J)!==p&&(e.set(J,p),J.update())}function mA(J,p){const X=J.colorSpace,MA=J.format,cA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||J.format===gn||X!==ZQ&&X!==_B&&(Ig.getTransfer(X)===wg?E===!1?A.has("EXT_sRGB")===!0&&MA===UB?(J.format=gn,J.minFilter=fg,J.generateMipmaps=!1):p=ic.sRGBToLinear(p):(MA!==UB||cA!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),p}this.allocateTextureUnit=H,this.resetTextureUnits=v,this.setTexture2D=_,this.setTexture2DArray=j,this.setTexture3D=AA,this.setTextureCube=IA,this.rebindTextures=LA,this.setupRenderTarget=L,this.updateRenderTargetMipmap=SA,this.updateMultisampleRenderTarget=nA,this.setupDepthRenderbuffer=qA,this.setupFrameBufferTexture=uA,this.useMultisampledRTT=rA}function rk(Q,A,I){const g=I.isWebGL2;function C(B,i=_B){let E;const o=Ig.getTransfer(i);if(B===wi)return Q.UNSIGNED_BYTE;if(B===Xh)return Q.UNSIGNED_SHORT_4_4_4_4;if(B===zh)return Q.UNSIGNED_SHORT_5_5_5_1;if(B===Jy)return Q.BYTE;if(B===fy)return Q.SHORT;if(B===wn)return Q.UNSIGNED_SHORT;if(B===jh)return Q.INT;if(B===ni)return Q.UNSIGNED_INT;if(B===BQ)return Q.FLOAT;if(B===St)return g?Q.HALF_FLOAT:(E=A.get("OES_texture_half_float"),E!==null?E.HALF_FLOAT_OES:null);if(B===uy)return Q.ALPHA;if(B===UB)return Q.RGBA;if(B===qy)return Q.LUMINANCE;if(B===Yy)return Q.LUMINANCE_ALPHA;if(B===BE)return Q.DEPTH_COMPONENT;if(B===Do)return Q.DEPTH_STENCIL;if(B===gn)return E=A.get("EXT_sRGB"),E!==null?E.SRGB_ALPHA_EXT:null;if(B===Ly)return Q.RED;if(B===$h)return Q.RED_INTEGER;if(B===my)return Q.RG;if(B===Ac)return Q.RG_INTEGER;if(B===Ic)return Q.RGBA_INTEGER;if(B===Ls||B===ms||B===Hs||B===Ts)if(o===wg)if(E=A.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(B===Ls)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===ms)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===Hs)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===Ts)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=A.get("WEBGL_compressed_texture_s3tc"),E!==null){if(B===Ls)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===ms)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===Hs)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===Ts)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===uD||B===qD||B===YD||B===LD)if(E=A.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(B===uD)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===qD)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===YD)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===LD)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===gc)return E=A.get("WEBGL_compressed_texture_etc1"),E!==null?E.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===mD||B===HD)if(E=A.get("WEBGL_compressed_texture_etc"),E!==null){if(B===mD)return o===wg?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(B===HD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===TD||B===bD||B===xD||B===_D||B===OD||B===vD||B===ZD||B===PD||B===WD||B===VD||B===jD||B===XD||B===zD||B===$D)if(E=A.get("WEBGL_compressed_texture_astc"),E!==null){if(B===TD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===bD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===xD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===_D)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===OD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===vD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===ZD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===PD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===WD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===VD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===jD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===XD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===zD)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===$D)return o===wg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===bs||B===Ah||B===Ih)if(E=A.get("EXT_texture_compression_bptc"),E!==null){if(B===bs)return o===wg?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(B===Ah)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(B===Ih)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(B===Hy||B===gh||B===Ch||B===Bh)if(E=A.get("EXT_texture_compression_rgtc"),E!==null){if(B===bs)return E.COMPRESSED_RED_RGTC1_EXT;if(B===gh)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===Ch)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===Bh)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===CE?g?Q.UNSIGNED_INT_24_8:(E=A.get("WEBGL_depth_texture"),E!==null?E.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class Dk extends pC{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Io extends VI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iJ={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new u,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new u),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new u,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new u),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,i=null;const E=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){i=!0;for(const c of A.hand.values()){const r=I.getJointPose(c,g),h=this._getHandJoint(t,c);r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=r.radius),h.visible=r!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,D=.005;t.inputState.pinching&&s>n+D?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-D&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(iJ)))}return E!==null&&(E.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Io;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const EJ=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oJ=`
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

	${nI.tonemapping_fragment}
	${nI.colorspace_fragment}
}`,DY=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * viewMatrix * modelPosition;
	vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
	vPosition = modelPosition.xyz;
	vNormal = modelNormal.xyz;
}`,hY=Q=>({ref:Q&1}),ZS=Q=>({ref:Q[0]});function cY(Q){let A;const I=Q[8].default,g=zC(I,Q,Q[10],ZS);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&$C(g,I,C,C[10],A?IB(I,C[10],B,hY):AB(C[10]),ZS)},i(C){A||(oA(g,C),A=!0)},o(C){hA(g,C),A=!1},d(C){g&&g.d(C)}}}function lY(Q){let A,I;const g=[{is:Q[0]},{fragmentShader:rY},{vertexShader:DY},{transparent:!0},{blending:zs},{depthTest:!1},Q[3]];let C={$$slots:{default:[cY]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=UQ(C,g[B]);return A=new yg({props:C}),Q[9](A),{c(){FA(A.$$.fragment)},l(B){dA(A.$$.fragment,B)},m(B,i){RA(A,B,i),I=!0},p(B,[i]){const E=i&9?Fh(g,[i&1&&{is:B[0]},g[1],g[2],g[3],g[4],g[5],i&8&&dh(B[3])]):{};i&1025&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(oA(A.$$.fragment,B),I=!0)},o(B){hA(A.$$.fragment,B),I=!1},d(B){Q[9](null),JA(A,B)}}}function wY(Q,A,I){const g=["falloff","glowInternalRadius","glowColor","glowSharpness"];let C=QE(A,g),B,{$$slots:i={},$$scope:E}=A,{falloff:o=.1}=A,{glowInternalRadius:t=6}=A,{glowColor:e="green"}=A,{glowSharpness:a=1}=A,s=new tQ({uniforms:{falloff:{value:o},glowInternalRadius:{value:t},glowColor:{value:new PA(e)},glowSharpness:{value:a}}}),{invalidate:n}=Ko();const D=cM();MQ(Q,D,r=>I(1,B=r));function c(r){ph[r?"unshift":"push"](()=>{B=r,D.set(B)})}return Q.$$set=r=>{A=UQ(UQ({},A),Se(r)),I(3,C=QE(A,g)),"falloff"in r&&I(4,o=r.falloff),"glowInternalRadius"in r&&I(5,t=r.glowInternalRadius),"glowColor"in r&&I(6,e=r.glowColor),"glowSharpness"in r&&I(7,a=r.glowSharpness),"$$scope"in r&&I(10,E=r.$$scope)},Q.$$.update=()=>{Q.$$.dirty&240&&(I(0,s.uniforms.falloff.value=o,s),I(0,s.uniforms.glowInternalRadius.value=t,s),I(0,s.uniforms.glowColor.value=new PA(e),s),I(0,s.uniforms.glowSharpness.value=a,s),n())},[s,B,D,C,o,t,e,a,i,c,E]}class SY extends Dg{constructor(A){super(),hg(this,A,wY,lY,rg,{falloff:4,glowInternalRadius:5,glowColor:6,glowSharpness:7})}}`${nI.tonemapping_fragment}${nI.colorspace_fragment}`;const GY=`

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
`,yY=`

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
`,kY=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,MY=kY,UY=`
	${GY}
	${yY}
`;`${MY}${UY}${nI.tonemapping_fragment}${nI.colorspace_fragment}`;function NY(Q){let A,I,g,C;return A=new yg.MeshBasicMaterial({props:{color:"yellow"}}),g=new yg.SphereGeometry({props:{args:[5]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment)},l(B){dA(A.$$.fragment,B),I=yI(B),dA(g.$$.fragment,B)},m(B,i){RA(A,B,i),VA(B,I,i),RA(g,B,i),C=!0},p:NB,i(B){C||(oA(A.$$.fragment,B),oA(g.$$.fragment,B),C=!0)},o(B){hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!1},d(B){B&&TA(I),JA(A,B),JA(g,B)}}}function KY(Q){let A,I,g,C;return A=new SY({props:{glowColor:"yellow"}}),g=new yg.SphereGeometry({props:{args:[9]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment)},l(B){dA(A.$$.fragment,B),I=yI(B),dA(g.$$.fragment,B)},m(B,i){RA(A,B,i),VA(B,I,i),RA(g,B,i),C=!0},p:NB,i(B){C||(oA(A.$$.fragment,B),oA(g.$$.fragment,B),C=!0)},o(B){hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!1},d(B){B&&TA(I),JA(A,B),JA(g,B)}}}function pY(Q){let A,I,g,C;return A=new yg.Mesh({props:{$$slots:{default:[NY]},$$scope:{ctx:Q}}}),g=new yg.Mesh({props:{$$slots:{default:[KY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment)},l(B){dA(A.$$.fragment,B),I=yI(B),dA(g.$$.fragment,B)},m(B,i){RA(A,B,i),VA(B,I,i),RA(g,B,i),C=!0},p(B,i){const E={};i&2&&(E.$$scope={dirty:i,ctx:B}),A.$set(E);const o={};i&2&&(o.$$scope={dirty:i,ctx:B}),g.$set(o)},i(B){C||(oA(A.$$.fragment,B),oA(g.$$.fragment,B),C=!0)},o(B){hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!1},d(B){B&&TA(I),JA(A,B),JA(g,B)}}}function FY(Q){let A,I;return A=new yg.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[pY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function dY(Q,A,I){let{position:g={x:-3,y:2}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class Sa extends Dg{constructor(A){super(),hg(this,A,dY,FY,rg,{position:0})}}function RY(Q){let A,I,g,C;return A=new yg.MeshBasicMaterial({props:{color:"blue"}}),g=new yg.SphereGeometry({props:{args:[5]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment)},l(B){dA(A.$$.fragment,B),I=yI(B),dA(g.$$.fragment,B)},m(B,i){RA(A,B,i),VA(B,I,i),RA(g,B,i),C=!0},p:NB,i(B){C||(oA(A.$$.fragment,B),oA(g.$$.fragment,B),C=!0)},o(B){hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!1},d(B){B&&TA(I),JA(A,B),JA(g,B)}}}function JY(Q){let A,I;return A=new yg.Mesh({props:{$$slots:{default:[RY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function fY(Q){let A,I;return A=new yg.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[JY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function uY(Q,A,I){let{position:g={x:-3,y:2}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class qY extends Dg{constructor(A){super(),hg(this,A,uY,fY,rg,{position:0})}}function YY(Q){let A,I;return A=new il({props:{enableDamping:!0,enablePan:!0,enableZoom:!0}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p:NB,i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function LY(Q){let A,I,g,C,B,i;return A=new yg.PerspectiveCamera({props:{"position.y":50,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[YY]},$$scope:{ctx:Q}}}),A.$on("create",mY),g=new yg.GridHelper({props:{args:[100]}}),B=new qY({}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,[o]){const t={};o&4&&(t.$$scope={dirty:o,ctx:E}),A.$set(t)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}const mY=({ref:Q})=>{Q.lookAt(0,0,0)};function HY(Q,A,I){let{type:g="static"}=A;return Q.$$set=C=>{"type"in C&&I(0,g=C.type)},[g]}class TY extends Dg{constructor(A){super(),hg(this,A,HY,LY,rg,{type:0})}}function bY(Q){let A,I;return A=new il({props:{enableDamping:!0,enablePan:!0,enableZoom:!0}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p:NB,i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function xY(Q){let A,I,g,C,B,i;return A=new la({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Sa({}),B=new wa({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}function _Y(Q){let A,I;return A=new ca({props:{linearVelocity:[5,-5,0],$$slots:{default:[xY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function OY(Q){let A,I,g,C,B,i;return A=new la({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Sa({}),B=new wa({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}function vY(Q){let A,I,g,C,B,i,E,o;return A=new yg.PerspectiveCamera({props:{"position.y":50,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[bY]},$$scope:{ctx:Q}}}),A.$on("create",ZY),g=new yg.GridHelper({props:{args:[100]}}),B=new yg.Group({props:{position:[-50,0,0],$$slots:{default:[_Y]},$$scope:{ctx:Q}}}),E=new ca({props:{linearVelocity:[0,5,0],$$slots:{default:[OY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment),i=GI(),FA(E.$$.fragment)},l(t){dA(A.$$.fragment,t),I=yI(t),dA(g.$$.fragment,t),C=yI(t),dA(B.$$.fragment,t),i=yI(t),dA(E.$$.fragment,t)},m(t,e){RA(A,t,e),VA(t,I,e),RA(g,t,e),VA(t,C,e),RA(B,t,e),VA(t,i,e),RA(E,t,e),o=!0},p(t,[e]){const a={};e&4&&(a.$$scope={dirty:e,ctx:t}),A.$set(a);const s={};e&5&&(s.$$scope={dirty:e,ctx:t}),B.$set(s);const n={};e&5&&(n.$$scope={dirty:e,ctx:t}),E.$set(n)},i(t){o||(oA(A.$$.fragment,t),oA(g.$$.fragment,t),oA(B.$$.fragment,t),oA(E.$$.fragment,t),o=!0)},o(t){hA(A.$$.fragment,t),hA(g.$$.fragment,t),hA(B.$$.fragment,t),hA(E.$$.fragment,t),o=!1},d(t){t&&(TA(I),TA(C),TA(i)),JA(A,t),JA(g,t),JA(B,t),JA(E,t)}}}const ZY=({ref:Q})=>{Q.lookAt(0,0,0)};function PY(Q,A,I){let{type:g="static"}=A;const C={static:{type:"static",strength:3,range:100,gravitationalConstant:void 0},linear:{type:"linear",strength:1,range:100,gravitationalConstant:void 0},newtonian:{type:"newtonian",strength:10,range:100,gravitationalConstant:10}};return Q.$$set=B=>{"type"in B&&I(0,g=B.type)},[g,C]}class WY extends Dg{constructor(A){super(),hg(this,A,PY,vY,rg,{type:0})}}function VY(Q){let A,I;return A=new il({props:{enableDamping:!0,enablePan:!0,enableZoom:!0}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p:NB,i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function jY(Q){let A,I,g,C,B,i;return A=new la({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Sa({}),B=new wa({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}function XY(Q){let A,I;return A=new ca({props:{linearVelocity:[5,-5,0],$$slots:{default:[jY]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function zY(Q){let A,I,g,C,B,i;return A=new la({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Sa({}),B=new wa({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}function $Y(Q){let A,I,g,C,B,i;return A=new la({props:{shape:"ball",args:[1],mass:Q[1][Q[0]].strength}}),g=new Sa({}),B=new wa({props:{range:Q[1][Q[0]].range,gravitationalConstant:Q[1][Q[0]].gravitationalConstant,strength:Q[1][Q[0]].strength,gravityType:Q[0]}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment)},l(E){dA(A.$$.fragment,E),I=yI(E),dA(g.$$.fragment,E),C=yI(E),dA(B.$$.fragment,E)},m(E,o){RA(A,E,o),VA(E,I,o),RA(g,E,o),VA(E,C,o),RA(B,E,o),i=!0},p(E,o){const t={};o&1&&(t.mass=E[1][E[0]].strength),A.$set(t);const e={};o&1&&(e.range=E[1][E[0]].range),o&1&&(e.gravitationalConstant=E[1][E[0]].gravitationalConstant),o&1&&(e.strength=E[1][E[0]].strength),o&1&&(e.gravityType=E[0]),B.$set(e)},i(E){i||(oA(A.$$.fragment,E),oA(g.$$.fragment,E),oA(B.$$.fragment,E),i=!0)},o(E){hA(A.$$.fragment,E),hA(g.$$.fragment,E),hA(B.$$.fragment,E),i=!1},d(E){E&&(TA(I),TA(C)),JA(A,E),JA(g,E),JA(B,E)}}}function AL(Q){let A,I;return A=new ca({props:{linearVelocity:[5,-5,0],$$slots:{default:[$Y]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function IL(Q){let A,I,g,C,B,i,E,o,t,e;return A=new yg.PerspectiveCamera({props:{"position.y":50,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[VY]},$$scope:{ctx:Q}}}),A.$on("create",gL),g=new yg.GridHelper({props:{args:[100]}}),B=new yg.Group({props:{position:[-50,0,0],$$slots:{default:[XY]},$$scope:{ctx:Q}}}),E=new ca({props:{linearVelocity:[0,50,0],$$slots:{default:[zY]},$$scope:{ctx:Q}}}),t=new yg.Group({props:{position:[50,0,0],$$slots:{default:[AL]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment),C=GI(),FA(B.$$.fragment),i=GI(),FA(E.$$.fragment),o=GI(),FA(t.$$.fragment)},l(a){dA(A.$$.fragment,a),I=yI(a),dA(g.$$.fragment,a),C=yI(a),dA(B.$$.fragment,a),i=yI(a),dA(E.$$.fragment,a),o=yI(a),dA(t.$$.fragment,a)},m(a,s){RA(A,a,s),VA(a,I,s),RA(g,a,s),VA(a,C,s),RA(B,a,s),VA(a,i,s),RA(E,a,s),VA(a,o,s),RA(t,a,s),e=!0},p(a,[s]){const n={};s&4&&(n.$$scope={dirty:s,ctx:a}),A.$set(n);const D={};s&5&&(D.$$scope={dirty:s,ctx:a}),B.$set(D);const c={};s&5&&(c.$$scope={dirty:s,ctx:a}),E.$set(c);const r={};s&5&&(r.$$scope={dirty:s,ctx:a}),t.$set(r)},i(a){e||(oA(A.$$.fragment,a),oA(g.$$.fragment,a),oA(B.$$.fragment,a),oA(E.$$.fragment,a),oA(t.$$.fragment,a),e=!0)},o(a){hA(A.$$.fragment,a),hA(g.$$.fragment,a),hA(B.$$.fragment,a),hA(E.$$.fragment,a),hA(t.$$.fragment,a),e=!1},d(a){a&&(TA(I),TA(C),TA(i),TA(o)),JA(A,a),JA(g,a),JA(B,a),JA(E,a),JA(t,a)}}}const gL=({ref:Q})=>{Q.lookAt(0,0,0)};function CL(Q,A,I){let{type:g="static"}=A;const C={static:{type:"static",strength:3,range:100,gravitationalConstant:void 0},linear:{type:"linear",strength:1,range:100,gravitationalConstant:void 0},newtonian:{type:"newtonian",strength:10,range:100,gravitationalConstant:10}};return Q.$$set=B=>{"type"in B&&I(0,g=B.type)},[g,C]}class BL extends Dg{constructor(A){super(),hg(this,A,CL,IL,rg,{type:0})}}function PS(Q){let A,I;return A=new TY({props:{type:"static"}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function WS(Q){let A,I;return A=new WY({props:{type:"static"}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function VS(Q){let A,I;return A=new BL({props:{type:"static"}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function QL(Q){let A,I,g,C,B=Q[0]&&PS(),i=Q[1]&&WS(),E=Q[2]&&VS();return{c(){B&&B.c(),A=GI(),i&&i.c(),I=GI(),E&&E.c(),g=EE()},l(o){B&&B.l(o),A=yI(o),i&&i.l(o),I=yI(o),E&&E.l(o),g=EE()},m(o,t){B&&B.m(o,t),VA(o,A,t),i&&i.m(o,t),VA(o,I,t),E&&E.m(o,t),VA(o,g,t),C=!0},p(o,[t]){o[0]?B?t&1&&oA(B,1):(B=PS(),B.c(),oA(B,1),B.m(A.parentNode,A)):B&&(Di(),hA(B,1,1,()=>{B=null}),hi()),o[1]?i?t&2&&oA(i,1):(i=WS(),i.c(),oA(i,1),i.m(I.parentNode,I)):i&&(Di(),hA(i,1,1,()=>{i=null}),hi()),o[2]?E?t&4&&oA(E,1):(E=VS(),E.c(),oA(E,1),E.m(g.parentNode,g)):E&&(Di(),hA(E,1,1,()=>{E=null}),hi())},i(o){C||(oA(B),oA(i),oA(E),C=!0)},o(o){hA(B),hA(i),hA(E),C=!1},d(o){o&&(TA(A),TA(I),TA(g)),B&&B.d(o),i&&i.d(o),E&&E.d(o)}}}function iL(Q,A,I){let g=!1,C=!1,B=!1,i=!1;Kt(()=>{I(3,i=!0)});function E(){ji.set("#title",{transformPerspective:400}),ji.to("#title-spacer",{scrollTrigger:{trigger:"#title-spacer",start:"top top",end:"+=2000"}}),ji.to("#section-1",{scrollTrigger:{trigger:"#section-1",start:"top center",end:"bottom center",onEnter:()=>{I(0,g=!0)},onLeave:()=>{I(0,g=!1)},onEnterBack:()=>{I(0,g=!0)},onLeaveBack:()=>{I(0,g=!1)}}}),ji.to("#section-2",{scrollTrigger:{trigger:"#section-2",start:"top center",end:"bottom center",onEnter:()=>{I(1,C=!0)},onLeave:()=>{I(1,C=!1)},onEnterBack:()=>{I(1,C=!0)},onLeaveBack:()=>{I(1,C=!1)}}}),ji.to("#section-3",{scrollTrigger:{trigger:"#section-3",start:"top center",end:"bottom center",onEnter:()=>{I(2,B=!0)},onLeave:()=>{I(2,B=!1)},onEnterBack:()=>{I(2,B=!0)},onLeaveBack:()=>{I(2,B=!1)}}})}return Q.$$.update=()=>{Q.$$.dirty&8&&i&&E()},[g,C,B,i]}class EL extends Dg{constructor(A){super(),hg(this,A,iL,QL,rg,{})}}function oL(Q){let A,I;return A=new EL({}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function tL(Q){let A,I;return A=new qq({props:{gravity:[0,0,0],$$slots:{default:[oL]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}function eL(Q){let A,I;return A=new fu({props:{$$slots:{default:[tL]},$$scope:{ctx:Q}}}),{c(){FA(A.$$.fragment)},l(g){dA(A.$$.fragment,g)},m(g,C){RA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(oA(A.$$.fragment,g),I=!0)},o(g){hA(A.$$.fragment,g),I=!1},d(g){JA(A,g)}}}class aL extends Dg{constructor(A){super(),hg(this,A,null,eL,rg,{})}}function sL(Q){let A,I,g,C,B,i,E,o;return A=new bU({}),B=new aL({}),E=new tN({}),{c(){FA(A.$$.fragment),I=GI(),g=Gi("article"),C=Gi("div"),FA(B.$$.fragment),i=GI(),FA(E.$$.fragment),this.h()},l(t){dA(A.$$.fragment,t),I=yI(t),g=yi(t,"ARTICLE",{class:!0});var e=iE(g);C=yi(e,"DIV",{id:!0,class:!0});var a=iE(C);dA(B.$$.fragment,a),a.forEach(TA),i=yI(e),dA(E.$$.fragment,e),e.forEach(TA),this.h()},h(){FC(C,"id","canvas-wrapper"),FC(C,"class","sticky top-0 flex-1 min-w-0 h-screen bg-base-300"),FC(g,"class","relative bg-base-300 hidden lg:flex")},m(t,e){RA(A,t,e),VA(t,I,e),VA(t,g,e),Ei(g,C),RA(B,C,null),Ei(g,i),RA(E,g,null),o=!0},p:NB,i(t){o||(oA(A.$$.fragment,t),oA(B.$$.fragment,t),oA(E.$$.fragment,t),o=!0)},o(t){hA(A.$$.fragment,t),hA(B.$$.fragment,t),hA(E.$$.fragment,t),o=!1},d(t){t&&(TA(I),TA(g)),JA(A,t),JA(B),JA(E)}}}function nL(Q,A,I){let g;return MQ(Q,k0,C=>I(0,g=C)),Q.$$.update=()=>{Q.$$.dirty&1&&g&&$S.ScrollTrigger.refresh()},[g]}class rL extends Dg{constructor(A){super(),hg(this,A,nL,sL,rg,{})}}function DL(Q){let A,I,g,C;return A=new M0({}),g=new rL({}),{c(){FA(A.$$.fragment),I=GI(),FA(g.$$.fragment)},l(B){dA(A.$$.fragment,B),I=yI(B),dA(g.$$.fragment,B)},m(B,i){RA(A,B,i),VA(B,I,i),RA(g,B,i),C=!0},p:NB,i(B){C||(oA(A.$$.fragment,B),oA(g.$$.fragment,B),C=!0)},o(B){hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!1},d(B){B&&TA(I),JA(A,B),JA(g,B)}}}class ML extends Dg{constructor(A){super(),hg(this,A,null,DL,rg,{})}}export{ML as component};