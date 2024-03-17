var A0=Object.defineProperty;var I0=(Q,A,I)=>A in Q?A0(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var Rg=(Q,A,I)=>(I0(Q,typeof A!="symbol"?A+"":A,I),I);import{Y as HB,Z as pC,_ as bB,s as lB,L as wB,M as SB,N as GB,O as yB,k as LQ,$ as JS,y as Vs,e as g0,c as C0,b as B0,f as xB,u as Q0,g as AQ,a0 as i0,q as Ze,w as nh,a1 as Xs,l as $i,m as gt,o as AE,V as Zi,U as cQ,W as te,P as E0,n as rh}from"./scheduler.t7vxtD6u.js";import{S as kB,i as MB,a as AI,t as oI,b as cg,d as lg,m as wg,e as Sg,g as Ct,c as Bt}from"./index.CHhTF49h.js";import{d as zs,w as hB,r as qS}from"./index.CDZL4280.js";function Dh(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const o in i)o in E||(g[o]=1);for(const o in E)C[o]||(I[o]=E[o],C[o]=1);Q[B]=E}else for(const o in i)C[o]=1}for(const i in g)i in I||(I[i]=void 0);return I}function hh(Q){return typeof Q=="object"&&Q!==null?Q:{}}var fS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jr={exports:{}};(function(Q,A){(function(I,g){g(A)})(fS,function(I){function g(z,p){for(var b=0;b<p.length;b++){var d=p[b];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(z,d.key,d)}}function C(z,p,b){return p&&g(z.prototype,p),b&&g(z,b),z}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B,i,E,o,t,e,a,s,n,r,c,D,h,S=function(){return B||typeof window<"u"&&(B=window.gsap)&&B.registerPlugin&&B},l=1,y=[],M=[],U=[],k=Date.now,K=function(p,b){return b},u=function(){var p=n.core,b=p.bridge||{},d=p._scrollers,q=p._proxies;d.push.apply(d,M),q.push.apply(q,U),M=d,U=q,K=function(EA,gA){return b[EA](gA)}},G=function(p,b){return~U.indexOf(p)&&U[U.indexOf(p)+1][b]},N=function(p){return!!~r.indexOf(p)},T=function(p,b,d,q,Z){return p.addEventListener(b,d,{passive:q!==!1,capture:!!Z})},v=function(p,b,d,q){return p.removeEventListener(b,d,!!q)},m="scrollLeft",j="scrollTop",_=function(){return c&&c.isPressed||M.cache++},V=function(p,b){var d=function q(Z){if(Z||Z===0){l&&(E.history.scrollRestoration="manual");var EA=c&&c.isPressed;Z=q.v=Math.round(Z)||(c&&c.iOS?1:0),p(Z),q.cacheID=M.cache,EA&&K("ss",Z)}else(b||M.cache!==q.cacheID||K("ref"))&&(q.cacheID=M.cache,q.v=p());return q.v+q.offset};return d.offset=0,p&&d},AA={s:m,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:V(function(z){return arguments.length?E.scrollTo(z,IA.sc()):E.pageXOffset||o[m]||t[m]||e[m]||0})},IA={s:j,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:AA,sc:V(function(z){return arguments.length?E.scrollTo(AA.sc(),z):E.pageYOffset||o[j]||t[j]||e[j]||0})},oA=function(p,b){return(b&&b._ctx&&b._ctx.selector||B.utils.toArray)(p)[0]||(typeof p=="string"&&B.config().nullTargetWarn!==!1?console.warn("Element not found:",p):null)},eA=function(p,b){var d=b.s,q=b.sc;N(p)&&(p=o.scrollingElement||t);var Z=M.indexOf(p),EA=q===IA.sc?1:2;!~Z&&(Z=M.push(p)-1),M[Z+EA]||T(p,"scroll",_);var gA=M[Z+EA],YA=gA||(M[Z+EA]=V(G(p,d),!0)||(N(p)?q:V(function(wI){return arguments.length?p[d]=wI:p[d]})));return YA.target=p,gA||(YA.smooth=B.getProperty(p,"scrollBehavior")==="smooth"),YA},NA=function(p,b,d){var q=p,Z=p,EA=k(),gA=EA,YA=b||50,wI=Math.max(500,YA*3),$I=function(BI,pg){var Eg=k();pg||Eg-EA>YA?(Z=q,q=BI,gA=EA,EA=Eg):d?q+=BI:q=Z+(BI-Z)/(Eg-gA)*(EA-gA)},_I=function(){Z=q=d?0:q,gA=EA=0},gI=function(BI){var pg=gA,Eg=Z,BC=k();return(BI||BI===0)&&BI!==q&&$I(BI),EA===gA||BC-gA>wI?0:(q+(d?Eg:-Eg))/((d?BC:EA)-pg)*1e3};return{update:$I,reset:_I,getVelocity:gI}},jA=function(p,b){return b&&!p._gsapAllow&&p.preventDefault(),p.changedTouches?p.changedTouches[0]:p},QA=function(p){var b=Math.max.apply(Math,p),d=Math.min.apply(Math,p);return Math.abs(b)>=Math.abs(d)?b:d},wA=function(){n=B.core.globals().ScrollTrigger,n&&n.core&&u()},HA=function(p){return B=p||S(),!i&&B&&typeof document<"u"&&document.body&&(E=window,o=document,t=o.documentElement,e=o.body,r=[E,o,t,e],B.utils.clamp,h=B.core.context||function(){},s="onpointerenter"in e?"pointer":"mouse",a=FA.isTouch=E.matchMedia&&E.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in E||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,D=FA.eventTypes=("ontouchstart"in t?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in t?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l=0},500),wA(),i=1),i};AA.op=IA,M.cache=0;var FA=function(){function z(b){this.init(b)}var p=z.prototype;return p.init=function(d){i||HA(B)||console.warn("Please gsap.registerPlugin(Observer)"),n||wA();var q=d.tolerance,Z=d.dragMinimum,EA=d.type,gA=d.target,YA=d.lineHeight,wI=d.debounce,$I=d.preventDefault,_I=d.onStop,gI=d.onStopDelay,GA=d.ignore,BI=d.wheelSpeed,pg=d.event,Eg=d.onDragStart,BC=d.onDragEnd,Gg=d.onDrag,kC=d.onPress,KI=d.onRelease,vB=d.onRight,ng=d.onLeft,SI=d.onUp,WC=d.onDown,oB=d.onChangeX,II=d.onChangeY,MC=d.onChange,hI=d.onToggleX,_Q=d.onToggleY,QC=d.onHover,jC=d.onHoverEnd,VC=d.onMove,gg=d.ignoreCheck,Zg=d.isNormalizer,Pg=d.onGestureStart,$=d.onGestureEnd,iC=d.onWheel,sE=d.onEnable,Gi=d.onDisable,ZB=d.onClick,OQ=d.scrollSpeed,XC=d.capture,Wg=d.allowClicks,zC=d.lockAxis,RC=d.onLockAxis;this.target=gA=oA(gA)||t,this.vars=d,GA&&(GA=B.utils.toArray(GA)),q=q||1e-9,Z=Z||0,BI=BI||1,OQ=OQ||1,EA=EA||"wheel,touch,pointer",wI=wI!==!1,YA||(YA=parseFloat(E.getComputedStyle(e).lineHeight)||22);var yi,$C,BQ,vI,Hg,tB,KB,tA=this,FB=0,vQ=0,ki=d.passive||!$I,jg=eA(gA,AA),Mi=eA(gA,IA),nE=jg(),lo=Mi(),DC=~EA.indexOf("touch")&&!~EA.indexOf("pointer")&&D[0]==="pointerdown",Ui=N(gA),mg=gA.ownerDocument||o,QQ=[0,0,0],PB=[0,0,0],ZQ=0,dt=function(){return ZQ=k()},Vg=function(eI,ZI){return(tA.event=eI)&&GA&&~GA.indexOf(eI.target)||ZI&&DC&&eI.pointerType!=="touch"||gg&&gg(eI,ZI)},ka=function(){tA._vx.reset(),tA._vy.reset(),$C.pause(),_I&&_I(tA)},Ni=function(){var eI=tA.deltaX=QA(QQ),ZI=tA.deltaY=QA(PB),fA=Math.abs(eI)>=q,UI=Math.abs(ZI)>=q;MC&&(fA||UI)&&MC(tA,eI,ZI,QQ,PB),fA&&(vB&&tA.deltaX>0&&vB(tA),ng&&tA.deltaX<0&&ng(tA),oB&&oB(tA),hI&&tA.deltaX<0!=FB<0&&hI(tA),FB=tA.deltaX,QQ[0]=QQ[1]=QQ[2]=0),UI&&(WC&&tA.deltaY>0&&WC(tA),SI&&tA.deltaY<0&&SI(tA),II&&II(tA),_Q&&tA.deltaY<0!=vQ<0&&_Q(tA),vQ=tA.deltaY,PB[0]=PB[1]=PB[2]=0),(vI||BQ)&&(VC&&VC(tA),BQ&&(Gg(tA),BQ=!1),vI=!1),tB&&!(tB=!1)&&RC&&RC(tA),Hg&&(iC(tA),Hg=!1),yi=0},wo=function(eI,ZI,fA){QQ[fA]+=eI,PB[fA]+=ZI,tA._vx.update(eI),tA._vy.update(ZI),wI?yi||(yi=requestAnimationFrame(Ni)):Ni()},So=function(eI,ZI){zC&&!KB&&(tA.axis=KB=Math.abs(eI)>Math.abs(ZI)?"x":"y",tB=!0),KB!=="y"&&(QQ[2]+=eI,tA._vx.update(eI,!0)),KB!=="x"&&(PB[2]+=ZI,tA._vy.update(ZI,!0)),wI?yi||(yi=requestAnimationFrame(Ni)):Ni()},Ki=function(eI){if(!Vg(eI,1)){eI=jA(eI,$I);var ZI=eI.clientX,fA=eI.clientY,UI=ZI-tA.x,QI=fA-tA.y,yI=tA.isDragging;tA.x=ZI,tA.y=fA,(yI||Math.abs(tA.startX-ZI)>=Z||Math.abs(tA.startY-fA)>=Z)&&(Gg&&(BQ=!0),yI||(tA.isDragging=!0),So(UI,QI),yI||Eg&&Eg(tA))}},rE=tA.onPress=function(MI){Vg(MI,1)||MI&&MI.button||(tA.axis=KB=null,$C.pause(),tA.isPressed=!0,MI=jA(MI),FB=vQ=0,tA.startX=tA.x=MI.clientX,tA.startY=tA.y=MI.clientY,tA._vx.reset(),tA._vy.reset(),T(Zg?gA:mg,D[1],Ki,ki,!0),tA.deltaX=tA.deltaY=0,kC&&kC(tA))},YI=tA.onRelease=function(MI){if(!Vg(MI,1)){v(Zg?gA:mg,D[1],Ki,!0);var eI=!isNaN(tA.y-tA.startY),ZI=tA.isDragging,fA=ZI&&(Math.abs(tA.x-tA.startX)>3||Math.abs(tA.y-tA.startY)>3),UI=jA(MI);!fA&&eI&&(tA._vx.reset(),tA._vy.reset(),$I&&Wg&&B.delayedCall(.08,function(){if(k()-ZQ>300&&!MI.defaultPrevented){if(MI.target.click)MI.target.click();else if(mg.createEvent){var QI=mg.createEvent("MouseEvents");QI.initMouseEvent("click",!0,!0,E,1,UI.screenX,UI.screenY,UI.clientX,UI.clientY,!1,!1,!1,!1,0,null),MI.target.dispatchEvent(QI)}}})),tA.isDragging=tA.isGesturing=tA.isPressed=!1,_I&&ZI&&!Zg&&$C.restart(!0),BC&&ZI&&BC(tA),KI&&KI(tA,fA)}},DE=function(eI){return eI.touches&&eI.touches.length>1&&(tA.isGesturing=!0)&&Pg(eI,tA.isDragging)},iQ=function(){return(tA.isGesturing=!1)||$(tA)},EQ=function(eI){if(!Vg(eI)){var ZI=jg(),fA=Mi();wo((ZI-nE)*OQ,(fA-lo)*OQ,1),nE=ZI,lo=fA,_I&&$C.restart(!0)}},oQ=function(eI){if(!Vg(eI)){eI=jA(eI,$I),iC&&(Hg=!0);var ZI=(eI.deltaMode===1?YA:eI.deltaMode===2?E.innerHeight:1)*BI;wo(eI.deltaX*ZI,eI.deltaY*ZI,0),_I&&!Zg&&$C.restart(!0)}},hE=function(eI){if(!Vg(eI)){var ZI=eI.clientX,fA=eI.clientY,UI=ZI-tA.x,QI=fA-tA.y;tA.x=ZI,tA.y=fA,vI=!0,_I&&$C.restart(!0),(UI||QI)&&So(UI,QI)}},Go=function(eI){tA.event=eI,QC(tA)},PQ=function(eI){tA.event=eI,jC(tA)},Rt=function(eI){return Vg(eI)||jA(eI,$I)&&ZB(tA)};$C=tA._dc=B.delayedCall(gI||.25,ka).pause(),tA.deltaX=tA.deltaY=0,tA._vx=NA(0,50,!0),tA._vy=NA(0,50,!0),tA.scrollX=jg,tA.scrollY=Mi,tA.isDragging=tA.isGesturing=tA.isPressed=!1,h(this),tA.enable=function(MI){return tA.isEnabled||(T(Ui?mg:gA,"scroll",_),EA.indexOf("scroll")>=0&&T(Ui?mg:gA,"scroll",EQ,ki,XC),EA.indexOf("wheel")>=0&&T(gA,"wheel",oQ,ki,XC),(EA.indexOf("touch")>=0&&a||EA.indexOf("pointer")>=0)&&(T(gA,D[0],rE,ki,XC),T(mg,D[2],YI),T(mg,D[3],YI),Wg&&T(gA,"click",dt,!0,!0),ZB&&T(gA,"click",Rt),Pg&&T(mg,"gesturestart",DE),$&&T(mg,"gestureend",iQ),QC&&T(gA,s+"enter",Go),jC&&T(gA,s+"leave",PQ),VC&&T(gA,s+"move",hE)),tA.isEnabled=!0,MI&&MI.type&&rE(MI),sE&&sE(tA)),tA},tA.disable=function(){tA.isEnabled&&(y.filter(function(MI){return MI!==tA&&N(MI.target)}).length||v(Ui?mg:gA,"scroll",_),tA.isPressed&&(tA._vx.reset(),tA._vy.reset(),v(Zg?gA:mg,D[1],Ki,!0)),v(Ui?mg:gA,"scroll",EQ,XC),v(gA,"wheel",oQ,XC),v(gA,D[0],rE,XC),v(mg,D[2],YI),v(mg,D[3],YI),v(gA,"click",dt,!0),v(gA,"click",Rt),v(mg,"gesturestart",DE),v(mg,"gestureend",iQ),v(gA,s+"enter",Go),v(gA,s+"leave",PQ),v(gA,s+"move",hE),tA.isEnabled=tA.isPressed=tA.isDragging=!1,Gi&&Gi(tA))},tA.kill=tA.revert=function(){tA.disable();var MI=y.indexOf(tA);MI>=0&&y.splice(MI,1),c===tA&&(c=0)},y.push(tA),Zg&&N(gA)&&(c=tA),tA.enable(pg)},C(z,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),z}();FA.version="3.12.5",FA.create=function(z){return new FA(z)},FA.register=HA,FA.getAll=function(){return y.slice()},FA.getById=function(z){return y.filter(function(p){return p.vars.id===z})[0]},S()&&B.registerPlugin(FA);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var aA,bA,pA,RA,L,lA,sA,MA,nA,ZA,JA,J,F,X,yA,DA,SA,xA,KA,mA,$A,rI,hA,JI,kI,sI,OA,uA,lI,H,UA,qA,zA,Y,kA=1,cA=Date.now,vA=cA(),_A=0,qI=0,RI=function(p,b,d){var q=R(p)&&(p.substr(0,6)==="clamp("||p.indexOf("max")>-1);return d["_"+b+"Clamp"]=q,q?p.substr(6,p.length-7):p},WI=function(p,b){return b&&(!R(p)||p.substr(0,6)!=="clamp(")?"clamp("+p+")":p},IC=function z(){return qI&&requestAnimationFrame(z)},HI=function(){return X=1},ag=function(){return X=0},ig=function(p){return p},wi=function(p){return Math.round(p*1e5)/1e5||0},Ea=function(){return typeof window<"u"},iE=function(){return aA||Ea()&&(aA=window.gsap)&&aA.registerPlugin&&aA},yQ=function(p){return!!~sA.indexOf(p)},EE=function(p){return(p==="Height"?UA:pA["inner"+p])||L["client"+p]||lA["client"+p]},kt=function(p){return G(p,"getBoundingClientRect")||(yQ(p)?function(){return Sa.width=pA.innerWidth,Sa.height=UA,Sa}:function(){return yC(p)})},oa=function(p,b,d){var q=d.d,Z=d.d2,EA=d.a;return(EA=G(p,"getBoundingClientRect"))?function(){return EA()[q]}:function(){return(b?EE(Z):p["client"+Z])||0}},On=function(p,b){return!b||~U.indexOf(p)?kt(p):function(){return Sa}},OB=function(p,b){var d=b.s,q=b.d2,Z=b.d,EA=b.a;return Math.max(0,(d="scroll"+q)&&(EA=G(p,d))?EA()-kt(p)()[Z]:yQ(p)?(L[d]||lA[d])-EE(q):p[d]-p["offset"+q])},Do=function(p,b){for(var d=0;d<KA.length;d+=3)(!b||~b.indexOf(KA[d+1]))&&p(KA[d],KA[d+1],KA[d+2])},R=function(p){return typeof p=="string"},W=function(p){return typeof p=="function"},BA=function(p){return typeof p=="number"},iA=function(p){return typeof p=="object"},CA=function(p,b,d){return p&&p.progress(b?0:1)&&d&&p.pause()},LA=function(p,b){if(p.enabled){var d=p._ctx?p._ctx.add(function(){return b(p)}):b(p);d&&d.totalTime&&(p.callbackAnimation=d)}},PA=Math.abs,CI="left",nI="top",GI="right",DI="bottom",tI="width",VI="height",gC="Right",sg="Left",vC="Top",XI="Bottom",XA="padding",dC="margin",zI="Width",CQ="Height",Fg="px",sC=function(p){return pA.getComputedStyle(p)},Mt=function(p){var b=sC(p).position;p.style.position=b==="absolute"||b==="fixed"?b:"relative"},CC=function(p,b){for(var d in b)d in p||(p[d]=b[d]);return p},yC=function(p,b){var d=b&&sC(p)[yA]!=="matrix(1, 0, 0, 1, 0, 0)"&&aA.to(p,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),q=p.getBoundingClientRect();return d&&d.progress(0).kill(),q},Si=function(p,b){var d=b.d2;return p["offset"+d]||p["client"+d]||0},ZC=function(p){var b=[],d=p.labels,q=p.duration(),Z;for(Z in d)b.push(d[Z]/q);return b},Ut=function(p){return function(b){return aA.utils.snap(ZC(p),b)}},Nt=function(p){var b=aA.utils.snap(p),d=Array.isArray(p)&&p.slice(0).sort(function(q,Z){return q-Z});return d?function(q,Z,EA){EA===void 0&&(EA=.001);var gA;if(!Z)return b(q);if(Z>0){for(q-=EA,gA=0;gA<d.length;gA++)if(d[gA]>=q)return d[gA];return d[gA-1]}else for(gA=d.length,q+=EA;gA--;)if(d[gA]<=q)return d[gA];return d[0]}:function(q,Z,EA){EA===void 0&&(EA=.001);var gA=b(q);return!Z||Math.abs(gA-q)<EA||gA-q<0==Z<0?gA:b(Z<0?q-p:q+p)}},ta=function(p){return function(b,d){return Nt(ZC(p))(b,d.direction)}},ea=function(p,b,d,q){return d.split(",").forEach(function(Z){return p(b,Z,q)})},nC=function(p,b,d,q,Z){return p.addEventListener(b,d,{passive:!q,capture:!!Z})},rC=function(p,b,d,q){return p.removeEventListener(b,d,!!q)},aa=function(p,b,d){d=d&&d.wheelHandler,d&&(p(b,"wheel",d),p(b,"touchmove",d))},Zc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sa={toggleActions:"play",anticipatePin:0},na={top:0,left:0,center:.5,bottom:1,right:1},ra=function(p,b){if(R(p)){var d=p.indexOf("="),q=~d?+(p.charAt(d-1)+1)*parseFloat(p.substr(d+1)):0;~d&&(p.indexOf("%")>d&&(q*=b/100),p=p.substr(0,d-1)),p=q+(p in na?na[p]*b:~p.indexOf("%")?parseFloat(p)*b/100:parseFloat(p)||0)}return p},Da=function(p,b,d,q,Z,EA,gA,YA){var wI=Z.startColor,$I=Z.endColor,_I=Z.fontSize,gI=Z.indent,GA=Z.fontWeight,BI=RA.createElement("div"),pg=yQ(d)||G(d,"pinType")==="fixed",Eg=p.indexOf("scroller")!==-1,BC=pg?lA:d,Gg=p.indexOf("start")!==-1,kC=Gg?wI:$I,KI="border-color:"+kC+";font-size:"+_I+";color:"+kC+";font-weight:"+GA+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return KI+="position:"+((Eg||YA)&&pg?"fixed;":"absolute;"),(Eg||YA||!pg)&&(KI+=(q===IA?GI:DI)+":"+(EA+parseFloat(gI))+"px;"),gA&&(KI+="box-sizing:border-box;text-align:left;width:"+gA.offsetWidth+"px;"),BI._isStart=Gg,BI.setAttribute("class","gsap-marker-"+p+(b?" marker-"+b:"")),BI.style.cssText=KI,BI.innerText=b||b===0?p+"-"+b:p,BC.children[0]?BC.insertBefore(BI,BC.children[0]):BC.appendChild(BI),BI._offset=BI["offset"+q.op.d2],ha(BI,0,q,Gg),BI},ha=function(p,b,d,q){var Z={display:"block"},EA=d[q?"os2":"p2"],gA=d[q?"p2":"os2"];p._isFlipped=q,Z[d.a+"Percent"]=q?-100:0,Z[d.a]=q?"1px":0,Z["border"+EA+zI]=1,Z["border"+gA+zI]=0,Z[d.p]=b+"px",aA.set(p,Z)},fI=[],vn={},Kt,Pc=function(){return cA()-_A>34&&(Kt||(Kt=requestAnimationFrame(xQ)))},ho=function(){(!hA||!hA.isPressed||hA.startX>lA.clientWidth)&&(M.cache++,hA?Kt||(Kt=requestAnimationFrame(xQ)):xQ(),_A||tE("scrollStart"),_A=cA())},Zn=function(){sI=pA.innerWidth,kI=pA.innerHeight},Ft=function(){M.cache++,!F&&!rI&&!RA.fullscreenElement&&!RA.webkitFullscreenElement&&(!JI||sI!==pA.innerWidth||Math.abs(pA.innerHeight-kI)>pA.innerHeight*.25)&&MA.restart(!0)},oE={},vM=[],Wc=function z(){return rC(uI,"scrollEnd",z)||aE(!0)},tE=function(p){return oE[p]&&oE[p].map(function(b){return b()})||vM},NB=[],jc=function(p){for(var b=0;b<NB.length;b+=5)(!p||NB[b+4]&&NB[b+4].query===p)&&(NB[b].style.cssText=NB[b+1],NB[b].getBBox&&NB[b].setAttribute("transform",NB[b+2]||""),NB[b+3].uncache=1)},Pn=function(p,b){var d;for(DA=0;DA<fI.length;DA++)d=fI[DA],d&&(!b||d._ctx===b)&&(p?d.kill(1):d.revert(!0,!0));qA=!0,b&&jc(b),b||tE("revert")},Vc=function(p,b){M.cache++,(b||!PC)&&M.forEach(function(d){return W(d)&&d.cacheID++&&(d.rec=0)}),R(p)&&(pA.history.scrollRestoration=lI=p)},PC,eE=0,Xc,ZM=function(){if(Xc!==eE){var p=Xc=eE;requestAnimationFrame(function(){return p===eE&&aE(!0)})}},zc=function(){lA.appendChild(H),UA=!hA&&H.offsetHeight||pA.innerHeight,lA.removeChild(H)},$c=function(p){return nA(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(b){return b.style.display=p?"none":"block"})},aE=function(p,b){if(_A&&!p&&!qA){nC(uI,"scrollEnd",Wc);return}zc(),PC=uI.isRefreshing=!0,M.forEach(function(q){return W(q)&&++q.cacheID&&(q.rec=q())});var d=tE("refreshInit");mA&&uI.sort(),b||Pn(),M.forEach(function(q){W(q)&&(q.smooth&&(q.target.style.scrollBehavior="auto"),q(0))}),fI.slice(0).forEach(function(q){return q.refresh()}),qA=!1,fI.forEach(function(q){if(q._subPinOffset&&q.pin){var Z=q.vars.horizontal?"offsetWidth":"offsetHeight",EA=q.pin[Z];q.revert(!0,1),q.adjustPinSpacing(q.pin[Z]-EA),q.refresh()}}),zA=1,$c(!0),fI.forEach(function(q){var Z=OB(q.scroller,q._dir),EA=q.vars.end==="max"||q._endClamp&&q.end>Z,gA=q._startClamp&&q.start>=Z;(EA||gA)&&q.setPositions(gA?Z-1:q.start,EA?Math.max(gA?Z:q.start+1,Z):q.end,!0)}),$c(!1),zA=0,d.forEach(function(q){return q&&q.render&&q.render(-1)}),M.forEach(function(q){W(q)&&(q.smooth&&requestAnimationFrame(function(){return q.target.style.scrollBehavior="smooth"}),q.rec&&q(q.rec))}),Vc(lI,1),MA.pause(),eE++,PC=2,xQ(2),fI.forEach(function(q){return W(q.vars.onRefresh)&&q.vars.onRefresh(q)}),PC=uI.isRefreshing=!1,tE("refresh")},Wn=0,ca=1,pt,xQ=function(p){if(p===2||!PC&&!qA){uI.isUpdating=!0,pt&&pt.update(0);var b=fI.length,d=cA(),q=d-vA>=50,Z=b&&fI[0].scroll();if(ca=Wn>Z?-1:1,PC||(Wn=Z),q&&(_A&&!X&&d-_A>200&&(_A=0,tE("scrollEnd")),JA=vA,vA=d),ca<0){for(DA=b;DA-- >0;)fI[DA]&&fI[DA].update(0,q);ca=1}else for(DA=0;DA<b;DA++)fI[DA]&&fI[DA].update(0,q);uI.isUpdating=!1}Kt=0},jn=[CI,nI,DI,GI,dC+XI,dC+gC,dC+vC,dC+sg,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],la=jn.concat([tI,VI,"boxSizing","max"+zI,"max"+CQ,"position",dC,XA,XA+vC,XA+gC,XA+XI,XA+sg]),PM=function(p,b,d){co(d);var q=p._gsap;if(q.spacerIsNative)co(q.spacerState);else if(p._gsap.swappedIn){var Z=b.parentNode;Z&&(Z.insertBefore(p,b),Z.removeChild(b))}p._gsap.swappedIn=!1},Vn=function(p,b,d,q){if(!p._gsap.swappedIn){for(var Z=jn.length,EA=b.style,gA=p.style,YA;Z--;)YA=jn[Z],EA[YA]=d[YA];EA.position=d.position==="absolute"?"absolute":"relative",d.display==="inline"&&(EA.display="inline-block"),gA[DI]=gA[GI]="auto",EA.flexBasis=d.flexBasis||"auto",EA.overflow="visible",EA.boxSizing="border-box",EA[tI]=Si(p,AA)+Fg,EA[VI]=Si(p,IA)+Fg,EA[XA]=gA[dC]=gA[nI]=gA[CI]="0",co(q),gA[tI]=gA["max"+zI]=d[tI],gA[VI]=gA["max"+CQ]=d[VI],gA[XA]=d[XA],p.parentNode!==b&&(p.parentNode.insertBefore(b,p),b.appendChild(p)),p._gsap.swappedIn=!0}},WM=/([A-Z])/g,co=function(p){if(p){var b=p.t.style,d=p.length,q=0,Z,EA;for((p.t._gsap||aA.core.getCache(p.t)).uncache=1;q<d;q+=2)EA=p[q+1],Z=p[q],EA?b[Z]=EA:b[Z]&&b.removeProperty(Z.replace(WM,"-$1").toLowerCase())}},wa=function(p){for(var b=la.length,d=p.style,q=[],Z=0;Z<b;Z++)q.push(la[Z],d[la[Z]]);return q.t=p,q},jM=function(p,b,d){for(var q=[],Z=p.length,EA=d?8:0,gA;EA<Z;EA+=2)gA=p[EA],q.push(gA,gA in b?b[gA]:p[EA+1]);return q.t=p.t,q},Sa={left:0,top:0},Al=function(p,b,d,q,Z,EA,gA,YA,wI,$I,_I,gI,GA,BI){W(p)&&(p=p(YA)),R(p)&&p.substr(0,3)==="max"&&(p=gI+(p.charAt(4)==="="?ra("0"+p.substr(3),d):0));var pg=GA?GA.time():0,Eg,BC,Gg;if(GA&&GA.seek(0),isNaN(p)||(p=+p),BA(p))GA&&(p=aA.utils.mapRange(GA.scrollTrigger.start,GA.scrollTrigger.end,0,gI,p)),gA&&ha(gA,d,q,!0);else{W(b)&&(b=b(YA));var kC=(p||"0").split(" "),KI,vB,ng,SI;Gg=oA(b,YA)||lA,KI=yC(Gg)||{},(!KI||!KI.left&&!KI.top)&&sC(Gg).display==="none"&&(SI=Gg.style.display,Gg.style.display="block",KI=yC(Gg),SI?Gg.style.display=SI:Gg.style.removeProperty("display")),vB=ra(kC[0],KI[q.d]),ng=ra(kC[1]||"0",d),p=KI[q.p]-wI[q.p]-$I+vB+Z-ng,gA&&ha(gA,ng,q,d-ng<20||gA._isStart&&ng>20),d-=d-ng}if(BI&&(YA[BI]=p||-.001,p<0&&(p=0)),EA){var WC=p+d,oB=EA._isStart;Eg="scroll"+q.d2,ha(EA,WC,q,oB&&WC>20||!oB&&(_I?Math.max(lA[Eg],L[Eg]):EA.parentNode[Eg])<=WC+1),_I&&(wI=yC(gA),_I&&(EA.style[q.op.p]=wI[q.op.p]-q.op.m-EA._offset+Fg))}return GA&&Gg&&(Eg=yC(Gg),GA.seek(gI),BC=yC(Gg),GA._caScrollDist=Eg[q.p]-BC[q.p],p=p/GA._caScrollDist*gI),GA&&GA.seek(pg),GA?p:Math.round(p)},VM=/(webkit|moz|length|cssText|inset)/i,Il=function(p,b,d,q){if(p.parentNode!==b){var Z=p.style,EA,gA;if(b===lA){p._stOrig=Z.cssText,gA=sC(p);for(EA in gA)!+EA&&!VM.test(EA)&&gA[EA]&&typeof Z[EA]=="string"&&EA!=="0"&&(Z[EA]=gA[EA]);Z.top=d,Z.left=q}else Z.cssText=p._stOrig;aA.core.getCache(p).uncache=1,b.appendChild(p)}},gl=function(p,b,d){var q=b,Z=q;return function(EA){var gA=Math.round(p());return gA!==q&&gA!==Z&&Math.abs(gA-q)>3&&Math.abs(gA-Z)>3&&(EA=gA,d&&d()),Z=q,q=EA,EA}},Ga=function(p,b,d){var q={};q[b.p]="+="+d,aA.set(p,q)},Cl=function(p,b){var d=eA(p,b),q="_scroll"+b.p2,Z=function EA(gA,YA,wI,$I,_I){var gI=EA.tween,GA=YA.onComplete,BI={};wI=wI||d();var pg=gl(d,wI,function(){gI.kill(),EA.tween=0});return _I=$I&&_I||0,$I=$I||gA-wI,gI&&gI.kill(),YA[q]=gA,YA.inherit=!1,YA.modifiers=BI,BI[q]=function(){return pg(wI+$I*gI.ratio+_I*gI.ratio*gI.ratio)},YA.onUpdate=function(){M.cache++,EA.tween&&xQ()},YA.onComplete=function(){EA.tween=0,GA&&GA.call(gI)},gI=EA.tween=aA.to(p,YA),gI};return p[q]=d,d.wheelHandler=function(){return Z.tween&&Z.tween.kill()&&(Z.tween=0)},nC(p,"wheel",d.wheelHandler),uI.isTouch&&nC(p,"touchmove",d.wheelHandler),Z},uI=function(){function z(b,d){bA||z.register(aA)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uA(this),this.init(b,d)}var p=z.prototype;return p.init=function(d,q){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qI){this.update=this.refresh=this.kill=ig;return}d=CC(R(d)||BA(d)||d.nodeType?{trigger:d}:d,sa);var Z=d,EA=Z.onUpdate,gA=Z.toggleClass,YA=Z.id,wI=Z.onToggle,$I=Z.onRefresh,_I=Z.scrub,gI=Z.trigger,GA=Z.pin,BI=Z.pinSpacing,pg=Z.invalidateOnRefresh,Eg=Z.anticipatePin,BC=Z.onScrubComplete,Gg=Z.onSnapComplete,kC=Z.once,KI=Z.snap,vB=Z.pinReparent,ng=Z.pinSpacer,SI=Z.containerAnimation,WC=Z.fastScrollEnd,oB=Z.preventOverlaps,II=d.horizontal||d.containerAnimation&&d.horizontal!==!1?AA:IA,MC=!_I&&_I!==0,hI=oA(d.scroller||pA),_Q=aA.core.getCache(hI),QC=yQ(hI),jC=("pinType"in d?d.pinType:G(hI,"pinType")||QC&&"fixed")==="fixed",VC=[d.onEnter,d.onLeave,d.onEnterBack,d.onLeaveBack],gg=MC&&d.toggleActions.split(" "),Zg="markers"in d?d.markers:sa.markers,Pg=QC?0:parseFloat(sC(hI)["border"+II.p2+zI])||0,$=this,iC=d.onRefreshInit&&function(){return d.onRefreshInit($)},sE=oa(hI,QC,II),Gi=On(hI,QC),ZB=0,OQ=0,XC=0,Wg=eA(hI,II),zC,RC,yi,$C,BQ,vI,Hg,tB,KB,tA,FB,vQ,ki,jg,Mi,nE,lo,DC,Ui,mg,QQ,PB,ZQ,dt,Vg,ka,Ni,wo,So,Ki,rE,YI,DE,iQ,EQ,oQ,hE,Go,PQ;if($._startClamp=$._endClamp=!1,$._dir=II,Eg*=45,$.scroller=hI,$.scroll=SI?SI.time.bind(SI):Wg,$C=Wg(),$.vars=d,q=q||d.animation,"refreshPriority"in d&&(mA=1,d.refreshPriority===-9999&&(pt=$)),_Q.tweenScroll=_Q.tweenScroll||{top:Cl(hI,IA),left:Cl(hI,AA)},$.tweenTo=zC=_Q.tweenScroll[II.p],$.scrubDuration=function(fA){DE=BA(fA)&&fA,DE?YI?YI.duration(fA):YI=aA.to(q,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:DE,paused:!0,onComplete:function(){return BC&&BC($)}}):(YI&&YI.progress(1).kill(),YI=0)},q&&(q.vars.lazy=!1,q._initted&&!$.isReverted||q.vars.immediateRender!==!1&&d.immediateRender!==!1&&q.duration()&&q.render(0,!0,!0),$.animation=q.pause(),q.scrollTrigger=$,$.scrubDuration(_I),Ki=0,YA||(YA=q.vars.id)),KI&&((!iA(KI)||KI.push)&&(KI={snapTo:KI}),"scrollBehavior"in lA.style&&aA.set(QC?[lA,L]:hI,{scrollBehavior:"auto"}),M.forEach(function(fA){return W(fA)&&fA.target===(QC?RA.scrollingElement||L:hI)&&(fA.smooth=!1)}),yi=W(KI.snapTo)?KI.snapTo:KI.snapTo==="labels"?Ut(q):KI.snapTo==="labelsDirectional"?ta(q):KI.directional!==!1?function(fA,UI){return Nt(KI.snapTo)(fA,cA()-OQ<500?0:UI.direction)}:aA.utils.snap(KI.snapTo),iQ=KI.duration||{min:.1,max:2},iQ=iA(iQ)?ZA(iQ.min,iQ.max):ZA(iQ,iQ),EQ=aA.delayedCall(KI.delay||DE/2||.1,function(){var fA=Wg(),UI=cA()-OQ<500,QI=zC.tween;if((UI||Math.abs($.getVelocity())<10)&&!QI&&!X&&ZB!==fA){var yI=(fA-vI)/jg,hC=q&&!MC?q.totalProgress():yI,mI=UI?0:(hC-rE)/(cA()-JA)*1e3||0,Tg=aA.utils.clamp(-yI,1-yI,PA(mI/2)*mI/.185),JC=yI+(KI.inertia===!1?0:Tg),dg,rg,Cg=KI,tQ=Cg.onStart,yg=Cg.onInterrupt,pB=Cg.onComplete;if(dg=yi(JC,$),BA(dg)||(dg=JC),rg=Math.round(vI+dg*jg),fA<=Hg&&fA>=vI&&rg!==fA){if(QI&&!QI._initted&&QI.data<=PA(rg-fA))return;KI.inertia===!1&&(Tg=dg-yI),zC(rg,{duration:iQ(PA(Math.max(PA(JC-hC),PA(dg-hC))*.185/mI/.05||0)),ease:KI.ease||"power3",data:PA(rg-fA),onInterrupt:function(){return EQ.restart(!0)&&yg&&yg($)},onComplete:function(){$.update(),ZB=Wg(),q&&(YI?YI.resetTo("totalProgress",dg,q._tTime/q._tDur):q.progress(dg)),Ki=rE=q&&!MC?q.totalProgress():$.progress,Gg&&Gg($),pB&&pB($)}},fA,Tg*jg,rg-fA-Tg*jg),tQ&&tQ($,zC.tween)}}else $.isActive&&ZB!==fA&&EQ.restart(!0)}).pause()),YA&&(vn[YA]=$),gI=$.trigger=oA(gI||GA!==!0&&GA),PQ=gI&&gI._gsap&&gI._gsap.stRevert,PQ&&(PQ=PQ($)),GA=GA===!0?gI:oA(GA),R(gA)&&(gA={targets:gI,className:gA}),GA&&(BI===!1||BI===dC||(BI=!BI&&GA.parentNode&&GA.parentNode.style&&sC(GA.parentNode).display==="flex"?!1:XA),$.pin=GA,RC=aA.core.getCache(GA),RC.spacer?Mi=RC.pinState:(ng&&(ng=oA(ng),ng&&!ng.nodeType&&(ng=ng.current||ng.nativeElement),RC.spacerIsNative=!!ng,ng&&(RC.spacerState=wa(ng))),RC.spacer=DC=ng||RA.createElement("div"),DC.classList.add("pin-spacer"),YA&&DC.classList.add("pin-spacer-"+YA),RC.pinState=Mi=wa(GA)),d.force3D!==!1&&aA.set(GA,{force3D:!0}),$.spacer=DC=RC.spacer,So=sC(GA),dt=So[BI+II.os2],mg=aA.getProperty(GA),QQ=aA.quickSetter(GA,II.a,Fg),Vn(GA,DC,So),lo=wa(GA)),Zg){vQ=iA(Zg)?CC(Zg,Zc):Zc,tA=Da("scroller-start",YA,hI,II,vQ,0),FB=Da("scroller-end",YA,hI,II,vQ,0,tA),Ui=tA["offset"+II.op.d2];var Rt=oA(G(hI,"content")||hI);tB=this.markerStart=Da("start",YA,Rt,II,vQ,Ui,0,SI),KB=this.markerEnd=Da("end",YA,Rt,II,vQ,Ui,0,SI),SI&&(Go=aA.quickSetter([tB,KB],II.a,Fg)),!jC&&!(U.length&&G(hI,"fixedMarkers")===!0)&&(Mt(QC?lA:hI),aA.set([tA,FB],{force3D:!0}),ka=aA.quickSetter(tA,II.a,Fg),wo=aA.quickSetter(FB,II.a,Fg))}if(SI){var MI=SI.vars.onUpdate,eI=SI.vars.onUpdateParams;SI.eventCallback("onUpdate",function(){$.update(0,0,1),MI&&MI.apply(SI,eI||[])})}if($.previous=function(){return fI[fI.indexOf($)-1]},$.next=function(){return fI[fI.indexOf($)+1]},$.revert=function(fA,UI){if(!UI)return $.kill(!0);var QI=fA!==!1||!$.enabled,yI=F;QI!==$.isReverted&&(QI&&(oQ=Math.max(Wg(),$.scroll.rec||0),XC=$.progress,hE=q&&q.progress()),tB&&[tB,KB,tA,FB].forEach(function(hC){return hC.style.display=QI?"none":"block"}),QI&&(F=$,$.update(QI)),GA&&(!vB||!$.isActive)&&(QI?PM(GA,DC,Mi):Vn(GA,DC,sC(GA),Vg)),QI||$.update(QI),F=yI,$.isReverted=QI)},$.refresh=function(fA,UI,QI,yI){if(!((F||!$.enabled)&&!UI)){if(GA&&fA&&_A){nC(z,"scrollEnd",Wc);return}!PC&&iC&&iC($),F=$,zC.tween&&!QI&&(zC.tween.kill(),zC.tween=0),YI&&YI.pause(),pg&&q&&q.revert({kill:!1}).invalidate(),$.isReverted||$.revert(!0,!0),$._subPinOffset=!1;var hC=sE(),mI=Gi(),Tg=SI?SI.duration():OB(hI,II),JC=jg<=.01,dg=0,rg=yI||0,Cg=iA(QI)?QI.end:d.end,tQ=d.endTrigger||gI,yg=iA(QI)?QI.start:d.start||(d.start===0||!gI?0:GA?"0 0":"0 100%"),pB=$.pinnedContainer=d.pinnedContainer&&oA(d.pinnedContainer,$),kQ=gI&&Math.max(0,fI.indexOf($))||0,UC=kQ,NC,qC,cE,Ma,fC,EC,MQ,zn,ol,Jt,UQ,qt,Ua;for(Zg&&iA(QI)&&(qt=aA.getProperty(tA,II.p),Ua=aA.getProperty(FB,II.p));UC--;)EC=fI[UC],EC.end||EC.refresh(0,1)||(F=$),MQ=EC.pin,MQ&&(MQ===gI||MQ===GA||MQ===pB)&&!EC.isReverted&&(Jt||(Jt=[]),Jt.unshift(EC),EC.revert(!0,!0)),EC!==fI[UC]&&(kQ--,UC--);for(W(yg)&&(yg=yg($)),yg=RI(yg,"start",$),vI=Al(yg,gI,hC,II,Wg(),tB,tA,$,mI,Pg,jC,Tg,SI,$._startClamp&&"_startClamp")||(GA?-.001:0),W(Cg)&&(Cg=Cg($)),R(Cg)&&!Cg.indexOf("+=")&&(~Cg.indexOf(" ")?Cg=(R(yg)?yg.split(" ")[0]:"")+Cg:(dg=ra(Cg.substr(2),hC),Cg=R(yg)?yg:(SI?aA.utils.mapRange(0,SI.duration(),SI.scrollTrigger.start,SI.scrollTrigger.end,vI):vI)+dg,tQ=gI)),Cg=RI(Cg,"end",$),Hg=Math.max(vI,Al(Cg||(tQ?"100% 0":Tg),tQ,hC,II,Wg()+dg,KB,FB,$,mI,Pg,jC,Tg,SI,$._endClamp&&"_endClamp"))||-.001,dg=0,UC=kQ;UC--;)EC=fI[UC],MQ=EC.pin,MQ&&EC.start-EC._pinPush<=vI&&!SI&&EC.end>0&&(NC=EC.end-($._startClamp?Math.max(0,EC.start):EC.start),(MQ===gI&&EC.start-EC._pinPush<vI||MQ===pB)&&isNaN(yg)&&(dg+=NC*(1-EC.progress)),MQ===GA&&(rg+=NC));if(vI+=dg,Hg+=dg,$._startClamp&&($._startClamp+=dg),$._endClamp&&!PC&&($._endClamp=Hg||-.001,Hg=Math.min(Hg,OB(hI,II))),jg=Hg-vI||(vI-=.01)&&.001,JC&&(XC=aA.utils.clamp(0,1,aA.utils.normalize(vI,Hg,oQ))),$._pinPush=rg,tB&&dg&&(NC={},NC[II.a]="+="+dg,pB&&(NC[II.p]="-="+Wg()),aA.set([tB,KB],NC)),GA&&!(zA&&$.end>=OB(hI,II)))NC=sC(GA),Ma=II===IA,cE=Wg(),PB=parseFloat(mg(II.a))+rg,!Tg&&Hg>1&&(UQ=(QC?RA.scrollingElement||L:hI).style,UQ={style:UQ,value:UQ["overflow"+II.a.toUpperCase()]},QC&&sC(lA)["overflow"+II.a.toUpperCase()]!=="scroll"&&(UQ.style["overflow"+II.a.toUpperCase()]="scroll")),Vn(GA,DC,NC),lo=wa(GA),qC=yC(GA,!0),zn=jC&&eA(hI,Ma?AA:IA)(),BI?(Vg=[BI+II.os2,jg+rg+Fg],Vg.t=DC,UC=BI===XA?Si(GA,II)+jg+rg:0,UC&&(Vg.push(II.d,UC+Fg),DC.style.flexBasis!=="auto"&&(DC.style.flexBasis=UC+Fg)),co(Vg),pB&&fI.forEach(function(ft){ft.pin===pB&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),jC&&Wg(oQ)):(UC=Si(GA,II),UC&&DC.style.flexBasis!=="auto"&&(DC.style.flexBasis=UC+Fg)),jC&&(fC={top:qC.top+(Ma?cE-vI:zn)+Fg,left:qC.left+(Ma?zn:cE-vI)+Fg,boxSizing:"border-box",position:"fixed"},fC[tI]=fC["max"+zI]=Math.ceil(qC.width)+Fg,fC[VI]=fC["max"+CQ]=Math.ceil(qC.height)+Fg,fC[dC]=fC[dC+vC]=fC[dC+gC]=fC[dC+XI]=fC[dC+sg]="0",fC[XA]=NC[XA],fC[XA+vC]=NC[XA+vC],fC[XA+gC]=NC[XA+gC],fC[XA+XI]=NC[XA+XI],fC[XA+sg]=NC[XA+sg],nE=jM(Mi,fC,vB),PC&&Wg(0)),q?(ol=q._initted,$A(1),q.render(q.duration(),!0,!0),ZQ=mg(II.a)-PB+jg+rg,Ni=Math.abs(jg-ZQ)>1,jC&&Ni&&nE.splice(nE.length-2,2),q.render(0,!0,!0),ol||q.invalidate(!0),q.parent||q.totalTime(q.totalTime()),$A(0)):ZQ=jg,UQ&&(UQ.value?UQ.style["overflow"+II.a.toUpperCase()]=UQ.value:UQ.style.removeProperty("overflow-"+II.a));else if(gI&&Wg()&&!SI)for(qC=gI.parentNode;qC&&qC!==lA;)qC._pinOffset&&(vI-=qC._pinOffset,Hg-=qC._pinOffset),qC=qC.parentNode;Jt&&Jt.forEach(function(ft){return ft.revert(!1,!0)}),$.start=vI,$.end=Hg,$C=BQ=PC?oQ:Wg(),!SI&&!PC&&($C<oQ&&Wg(oQ),$.scroll.rec=0),$.revert(!1,!0),OQ=cA(),EQ&&(ZB=-1,EQ.restart(!0)),F=0,q&&MC&&(q._initted||hE)&&q.progress()!==hE&&q.progress(hE||0,!0).render(q.time(),!0,!0),(JC||XC!==$.progress||SI||pg)&&(q&&!MC&&q.totalProgress(SI&&vI<-.001&&!XC?aA.utils.normalize(vI,Hg,0):XC,!0),$.progress=JC||($C-vI)/jg===XC?0:XC),GA&&BI&&(DC._pinOffset=Math.round($.progress*ZQ)),YI&&YI.invalidate(),isNaN(qt)||(qt-=aA.getProperty(tA,II.p),Ua-=aA.getProperty(FB,II.p),Ga(tA,II,qt),Ga(tB,II,qt-(yI||0)),Ga(FB,II,Ua),Ga(KB,II,Ua-(yI||0))),JC&&!PC&&$.update(),$I&&!PC&&!ki&&(ki=!0,$I($),ki=!1)}},$.getVelocity=function(){return(Wg()-BQ)/(cA()-JA)*1e3||0},$.endAnimation=function(){CA($.callbackAnimation),q&&(YI?YI.progress(1):q.paused()?MC||CA(q,$.direction<0,1):CA(q,q.reversed()))},$.labelToScroll=function(fA){return q&&q.labels&&(vI||$.refresh()||vI)+q.labels[fA]/q.duration()*jg||0},$.getTrailing=function(fA){var UI=fI.indexOf($),QI=$.direction>0?fI.slice(0,UI).reverse():fI.slice(UI+1);return(R(fA)?QI.filter(function(yI){return yI.vars.preventOverlaps===fA}):QI).filter(function(yI){return $.direction>0?yI.end<=vI:yI.start>=Hg})},$.update=function(fA,UI,QI){if(!(SI&&!QI&&!fA)){var yI=PC===!0?oQ:$.scroll(),hC=fA?0:(yI-vI)/jg,mI=hC<0?0:hC>1?1:hC||0,Tg=$.progress,JC,dg,rg,Cg,tQ,yg,pB,kQ;if(UI&&(BQ=$C,$C=SI?Wg():yI,KI&&(rE=Ki,Ki=q&&!MC?q.totalProgress():mI)),Eg&&GA&&!F&&!kA&&_A&&(!mI&&vI<yI+(yI-BQ)/(cA()-JA)*Eg?mI=1e-4:mI===1&&Hg>yI+(yI-BQ)/(cA()-JA)*Eg&&(mI=.9999)),mI!==Tg&&$.enabled){if(JC=$.isActive=!!mI&&mI<1,dg=!!Tg&&Tg<1,yg=JC!==dg,tQ=yg||!!mI!=!!Tg,$.direction=mI>Tg?1:-1,$.progress=mI,tQ&&!F&&(rg=mI&&!Tg?0:mI===1?1:Tg===1?2:3,MC&&(Cg=!yg&&gg[rg+1]!=="none"&&gg[rg+1]||gg[rg],kQ=q&&(Cg==="complete"||Cg==="reset"||Cg in q))),oB&&(yg||kQ)&&(kQ||_I||!q)&&(W(oB)?oB($):$.getTrailing(oB).forEach(function(cE){return cE.endAnimation()})),MC||(YI&&!F&&!kA?(YI._dp._time-YI._start!==YI._time&&YI.render(YI._dp._time-YI._start),YI.resetTo?YI.resetTo("totalProgress",mI,q._tTime/q._tDur):(YI.vars.totalProgress=mI,YI.invalidate().restart())):q&&q.totalProgress(mI,!!(F&&(OQ||fA)))),GA){if(fA&&BI&&(DC.style[BI+II.os2]=dt),!jC)QQ(wi(PB+ZQ*mI));else if(tQ){if(pB=!fA&&mI>Tg&&Hg+1>yI&&yI+1>=OB(hI,II),vB)if(!fA&&(JC||pB)){var UC=yC(GA,!0),NC=yI-vI;Il(GA,lA,UC.top+(II===IA?NC:0)+Fg,UC.left+(II===IA?0:NC)+Fg)}else Il(GA,DC);co(JC||pB?nE:lo),Ni&&mI<1&&JC||QQ(PB+(mI===1&&!pB?ZQ:0))}}KI&&!zC.tween&&!F&&!kA&&EQ.restart(!0),gA&&(yg||kC&&mI&&(mI<1||!Y))&&nA(gA.targets).forEach(function(cE){return cE.classList[JC||kC?"add":"remove"](gA.className)}),EA&&!MC&&!fA&&EA($),tQ&&!F?(MC&&(kQ&&(Cg==="complete"?q.pause().totalProgress(1):Cg==="reset"?q.restart(!0).pause():Cg==="restart"?q.restart(!0):q[Cg]()),EA&&EA($)),(yg||!Y)&&(wI&&yg&&LA($,wI),VC[rg]&&LA($,VC[rg]),kC&&(mI===1?$.kill(!1,1):VC[rg]=0),yg||(rg=mI===1?1:3,VC[rg]&&LA($,VC[rg]))),WC&&!JC&&Math.abs($.getVelocity())>(BA(WC)?WC:2500)&&(CA($.callbackAnimation),YI?YI.progress(1):CA(q,Cg==="reverse"?1:!mI,1))):MC&&EA&&!F&&EA($)}if(wo){var qC=SI?yI/SI.duration()*(SI._caScrollDist||0):yI;ka(qC+(tA._isFlipped?1:0)),wo(qC)}Go&&Go(-yI/SI.duration()*(SI._caScrollDist||0))}},$.enable=function(fA,UI){$.enabled||($.enabled=!0,nC(hI,"resize",Ft),QC||nC(hI,"scroll",ho),iC&&nC(z,"refreshInit",iC),fA!==!1&&($.progress=XC=0,$C=BQ=ZB=Wg()),UI!==!1&&$.refresh())},$.getTween=function(fA){return fA&&zC?zC.tween:YI},$.setPositions=function(fA,UI,QI,yI){if(SI){var hC=SI.scrollTrigger,mI=SI.duration(),Tg=hC.end-hC.start;fA=hC.start+Tg*fA/mI,UI=hC.start+Tg*UI/mI}$.refresh(!1,!1,{start:WI(fA,QI&&!!$._startClamp),end:WI(UI,QI&&!!$._endClamp)},yI),$.update()},$.adjustPinSpacing=function(fA){if(Vg&&fA){var UI=Vg.indexOf(II.d)+1;Vg[UI]=parseFloat(Vg[UI])+fA+Fg,Vg[1]=parseFloat(Vg[1])+fA+Fg,co(Vg)}},$.disable=function(fA,UI){if($.enabled&&(fA!==!1&&$.revert(!0,!0),$.enabled=$.isActive=!1,UI||YI&&YI.pause(),oQ=0,RC&&(RC.uncache=1),iC&&rC(z,"refreshInit",iC),EQ&&(EQ.pause(),zC.tween&&zC.tween.kill()&&(zC.tween=0)),!QC)){for(var QI=fI.length;QI--;)if(fI[QI].scroller===hI&&fI[QI]!==$)return;rC(hI,"resize",Ft),QC||rC(hI,"scroll",ho)}},$.kill=function(fA,UI){$.disable(fA,UI),YI&&!UI&&YI.kill(),YA&&delete vn[YA];var QI=fI.indexOf($);QI>=0&&fI.splice(QI,1),QI===DA&&ca>0&&DA--,QI=0,fI.forEach(function(yI){return yI.scroller===$.scroller&&(QI=1)}),QI||PC||($.scroll.rec=0),q&&(q.scrollTrigger=null,fA&&q.revert({kill:!1}),UI||q.kill()),tB&&[tB,KB,tA,FB].forEach(function(yI){return yI.parentNode&&yI.parentNode.removeChild(yI)}),pt===$&&(pt=0),GA&&(RC&&(RC.uncache=1),QI=0,fI.forEach(function(yI){return yI.pin===GA&&QI++}),QI||(RC.spacer=0)),d.onKill&&d.onKill($)},fI.push($),$.enable(!1,!1),PQ&&PQ($),q&&q.add&&!jg){var ZI=$.update;$.update=function(){$.update=ZI,vI||Hg||$.refresh()},aA.delayedCall(.01,$.update),jg=.01,vI=Hg=0}else $.refresh();GA&&ZM()},z.register=function(d){return bA||(aA=d||iE(),Ea()&&window.document&&z.enable(),bA=qI),bA},z.defaults=function(d){if(d)for(var q in d)sa[q]=d[q];return sa},z.disable=function(d,q){qI=0,fI.forEach(function(EA){return EA[q?"kill":"disable"](d)}),rC(pA,"wheel",ho),rC(RA,"scroll",ho),clearInterval(J),rC(RA,"touchcancel",ig),rC(lA,"touchstart",ig),ea(rC,RA,"pointerdown,touchstart,mousedown",HI),ea(rC,RA,"pointerup,touchend,mouseup",ag),MA.kill(),Do(rC);for(var Z=0;Z<M.length;Z+=3)aa(rC,M[Z],M[Z+1]),aa(rC,M[Z],M[Z+2])},z.enable=function(){if(pA=window,RA=document,L=RA.documentElement,lA=RA.body,aA&&(nA=aA.utils.toArray,ZA=aA.utils.clamp,uA=aA.core.context||ig,$A=aA.core.suppressOverwrites||ig,lI=pA.history.scrollRestoration||"auto",Wn=pA.pageYOffset,aA.core.globals("ScrollTrigger",z),lA)){qI=1,H=document.createElement("div"),H.style.height="100vh",H.style.position="absolute",zc(),IC(),FA.register(aA),z.isTouch=FA.isTouch,OA=FA.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),JI=FA.isTouch===1,nC(pA,"wheel",ho),sA=[pA,RA,L,lA],aA.matchMedia?(z.matchMedia=function(YA){var wI=aA.matchMedia(),$I;for($I in YA)wI.add($I,YA[$I]);return wI},aA.addEventListener("matchMediaInit",function(){return Pn()}),aA.addEventListener("matchMediaRevert",function(){return jc()}),aA.addEventListener("matchMedia",function(){aE(0,1),tE("matchMedia")}),aA.matchMedia("(orientation: portrait)",function(){return Zn(),Zn})):console.warn("Requires GSAP 3.11.0 or later"),Zn(),nC(RA,"scroll",ho);var d=lA.style,q=d.borderTopStyle,Z=aA.core.Animation.prototype,EA,gA;for(Z.revert||Object.defineProperty(Z,"revert",{value:function(){return this.time(-.01,!0)}}),d.borderTopStyle="solid",EA=yC(lA),IA.m=Math.round(EA.top+IA.sc())||0,AA.m=Math.round(EA.left+AA.sc())||0,q?d.borderTopStyle=q:d.removeProperty("border-top-style"),J=setInterval(Pc,250),aA.delayedCall(.5,function(){return kA=0}),nC(RA,"touchcancel",ig),nC(lA,"touchstart",ig),ea(nC,RA,"pointerdown,touchstart,mousedown",HI),ea(nC,RA,"pointerup,touchend,mouseup",ag),yA=aA.utils.checkPrefix("transform"),la.push(yA),bA=cA(),MA=aA.delayedCall(.2,aE).pause(),KA=[RA,"visibilitychange",function(){var YA=pA.innerWidth,wI=pA.innerHeight;RA.hidden?(SA=YA,xA=wI):(SA!==YA||xA!==wI)&&Ft()},RA,"DOMContentLoaded",aE,pA,"load",aE,pA,"resize",Ft],Do(nC),fI.forEach(function(YA){return YA.enable(0,1)}),gA=0;gA<M.length;gA+=3)aa(rC,M[gA],M[gA+1]),aa(rC,M[gA],M[gA+2])}},z.config=function(d){"limitCallbacks"in d&&(Y=!!d.limitCallbacks);var q=d.syncInterval;q&&clearInterval(J)||(J=q)&&setInterval(Pc,q),"ignoreMobileResize"in d&&(JI=z.isTouch===1&&d.ignoreMobileResize),"autoRefreshEvents"in d&&(Do(rC)||Do(nC,d.autoRefreshEvents||"none"),rI=(d.autoRefreshEvents+"").indexOf("resize")===-1)},z.scrollerProxy=function(d,q){var Z=oA(d),EA=M.indexOf(Z),gA=yQ(Z);~EA&&M.splice(EA,gA?6:2),q&&(gA?U.unshift(pA,q,lA,q,L,q):U.unshift(Z,q))},z.clearMatchMedia=function(d){fI.forEach(function(q){return q._ctx&&q._ctx.query===d&&q._ctx.kill(!0,!0)})},z.isInViewport=function(d,q,Z){var EA=(R(d)?oA(d):d).getBoundingClientRect(),gA=EA[Z?tI:VI]*q||0;return Z?EA.right-gA>0&&EA.left+gA<pA.innerWidth:EA.bottom-gA>0&&EA.top+gA<pA.innerHeight},z.positionInViewport=function(d,q,Z){R(d)&&(d=oA(d));var EA=d.getBoundingClientRect(),gA=EA[Z?tI:VI],YA=q==null?gA/2:q in na?na[q]*gA:~q.indexOf("%")?parseFloat(q)*gA/100:parseFloat(q)||0;return Z?(EA.left+YA)/pA.innerWidth:(EA.top+YA)/pA.innerHeight},z.killAll=function(d){if(fI.slice(0).forEach(function(Z){return Z.vars.id!=="ScrollSmoother"&&Z.kill()}),d!==!0){var q=oE.killAll||[];oE={},q.forEach(function(Z){return Z()})}},z}();uI.version="3.12.5",uI.saveStyles=function(z){return z?nA(z).forEach(function(p){if(p&&p.style){var b=NB.indexOf(p);b>=0&&NB.splice(b,5),NB.push(p,p.style.cssText,p.getBBox&&p.getAttribute("transform"),aA.core.getCache(p),uA())}}):NB},uI.revert=function(z,p){return Pn(!z,p)},uI.create=function(z,p){return new uI(z,p)},uI.refresh=function(z){return z?Ft():(bA||uI.register())&&aE(!0)},uI.update=function(z){return++M.cache&&xQ(z===!0?2:0)},uI.clearScrollMemory=Vc,uI.maxScroll=function(z,p){return OB(z,p?AA:IA)},uI.getScrollFunc=function(z,p){return eA(oA(z),p?AA:IA)},uI.getById=function(z){return vn[z]},uI.getAll=function(){return fI.filter(function(z){return z.vars.id!=="ScrollSmoother"})},uI.isScrolling=function(){return!!_A},uI.snapDirectional=Nt,uI.addEventListener=function(z,p){var b=oE[z]||(oE[z]=[]);~b.indexOf(p)||b.push(p)},uI.removeEventListener=function(z,p){var b=oE[z],d=b&&b.indexOf(p);d>=0&&b.splice(d,1)},uI.batch=function(z,p){var b=[],d={},q=p.interval||.016,Z=p.batchMax||1e9,EA=function(wI,$I){var _I=[],gI=[],GA=aA.delayedCall(q,function(){$I(_I,gI),_I=[],gI=[]}).pause();return function(BI){_I.length||GA.restart(!0),_I.push(BI.trigger),gI.push(BI),Z<=_I.length&&GA.progress(1)}},gA;for(gA in p)d[gA]=gA.substr(0,2)==="on"&&W(p[gA])&&gA!=="onRefreshInit"?EA(gA,p[gA]):p[gA];return W(Z)&&(Z=Z(),nC(uI,"refresh",function(){return Z=p.batchMax()})),nA(z).forEach(function(YA){var wI={};for(gA in d)wI[gA]=d[gA];wI.trigger=YA,b.push(uI.create(wI))}),b};var Bl=function(p,b,d,q){return b>q?p(q):b<0&&p(0),d>q?(q-b)/(d-b):d<0?b/(b-d):1},Xn=function z(p,b){b===!0?p.style.removeProperty("touch-action"):p.style.touchAction=b===!0?"auto":b?"pan-"+b+(FA.isTouch?" pinch-zoom":""):"none",p===L&&z(lA,b)},ya={auto:1,scroll:1},XM=function(p){var b=p.event,d=p.target,q=p.axis,Z=(b.changedTouches?b.changedTouches[0]:b).target,EA=Z._gsap||aA.core.getCache(Z),gA=cA(),YA;if(!EA._isScrollT||gA-EA._isScrollT>2e3){for(;Z&&Z!==lA&&(Z.scrollHeight<=Z.clientHeight&&Z.scrollWidth<=Z.clientWidth||!(ya[(YA=sC(Z)).overflowY]||ya[YA.overflowX]));)Z=Z.parentNode;EA._isScroll=Z&&Z!==d&&!yQ(Z)&&(ya[(YA=sC(Z)).overflowY]||ya[YA.overflowX]),EA._isScrollT=gA}(EA._isScroll||q==="x")&&(b.stopPropagation(),b._gsapAllow=!0)},Ql=function(p,b,d,q){return FA.create({target:p,capture:!0,debounce:!1,lockAxis:!0,type:b,onWheel:q=q&&XM,onPress:q,onDrag:q,onScroll:q,onEnable:function(){return d&&nC(RA,FA.eventTypes[0],El,!1,!0)},onDisable:function(){return rC(RA,FA.eventTypes[0],El,!0)}})},zM=/(input|label|select|textarea)/i,il,El=function(p){var b=zM.test(p.target.tagName);(b||il)&&(p._gsapAllow=!0,il=b)},$M=function(p){iA(p)||(p={}),p.preventDefault=p.isNormalizer=p.allowClicks=!0,p.type||(p.type="wheel,touch"),p.debounce=!!p.debounce,p.id=p.id||"normalizer";var b=p,d=b.normalizeScrollX,q=b.momentum,Z=b.allowNestedScroll,EA=b.onRelease,gA,YA,wI=oA(p.target)||L,$I=aA.core.globals().ScrollSmoother,_I=$I&&$I.get(),gI=OA&&(p.content&&oA(p.content)||_I&&p.content!==!1&&!_I.smooth()&&_I.content()),GA=eA(wI,IA),BI=eA(wI,AA),pg=1,Eg=(FA.isTouch&&pA.visualViewport?pA.visualViewport.scale*pA.visualViewport.width:pA.outerWidth)/pA.innerWidth,BC=0,Gg=W(q)?function(){return q(gA)}:function(){return q||2.8},kC,KI,vB=Ql(wI,p.type,!0,Z),ng=function(){return KI=!1},SI=ig,WC=ig,oB=function(){YA=OB(wI,IA),WC=ZA(OA?1:0,YA),d&&(SI=ZA(0,OB(wI,AA))),kC=eE},II=function(){gI._gsap.y=wi(parseFloat(gI._gsap.y)+GA.offset)+"px",gI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(gI._gsap.y)+", 0, 1)",GA.offset=GA.cacheID=0},MC=function(){if(KI){requestAnimationFrame(ng);var Zg=wi(gA.deltaY/2),Pg=WC(GA.v-Zg);if(gI&&Pg!==GA.v+GA.offset){GA.offset=Pg-GA.v;var $=wi((parseFloat(gI&&gI._gsap.y)||0)-GA.offset);gI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+$+", 0, 1)",gI._gsap.y=$+"px",GA.cacheID=M.cache,xQ()}return!0}GA.offset&&II(),KI=!0},hI,_Q,QC,jC,VC=function(){oB(),hI.isActive()&&hI.vars.scrollY>YA&&(GA()>YA?hI.progress(1)&&GA(YA):hI.resetTo("scrollY",YA))};return gI&&aA.set(gI,{y:"+=0"}),p.ignoreCheck=function(gg){return OA&&gg.type==="touchmove"&&MC()||pg>1.05&&gg.type!=="touchstart"||gA.isGesturing||gg.touches&&gg.touches.length>1},p.onPress=function(){KI=!1;var gg=pg;pg=wi((pA.visualViewport&&pA.visualViewport.scale||1)/Eg),hI.pause(),gg!==pg&&Xn(wI,pg>1.01?!0:d?!1:"x"),_Q=BI(),QC=GA(),oB(),kC=eE},p.onRelease=p.onGestureStart=function(gg,Zg){if(GA.offset&&II(),!Zg)jC.restart(!0);else{M.cache++;var Pg=Gg(),$,iC;d&&($=BI(),iC=$+Pg*.05*-gg.velocityX/.227,Pg*=Bl(BI,$,iC,OB(wI,AA)),hI.vars.scrollX=SI(iC)),$=GA(),iC=$+Pg*.05*-gg.velocityY/.227,Pg*=Bl(GA,$,iC,OB(wI,IA)),hI.vars.scrollY=WC(iC),hI.invalidate().duration(Pg).play(.01),(OA&&hI.vars.scrollY>=YA||$>=YA-1)&&aA.to({},{onUpdate:VC,duration:Pg})}EA&&EA(gg)},p.onWheel=function(){hI._ts&&hI.pause(),cA()-BC>1e3&&(kC=0,BC=cA())},p.onChange=function(gg,Zg,Pg,$,iC){if(eE!==kC&&oB(),Zg&&d&&BI(SI($[2]===Zg?_Q+(gg.startX-gg.x):BI()+Zg-$[1])),Pg){GA.offset&&II();var sE=iC[2]===Pg,Gi=sE?QC+gg.startY-gg.y:GA()+Pg-iC[1],ZB=WC(Gi);sE&&Gi!==ZB&&(QC+=ZB-Gi),GA(ZB)}(Pg||Zg)&&xQ()},p.onEnable=function(){Xn(wI,d?!1:"x"),uI.addEventListener("refresh",VC),nC(pA,"resize",VC),GA.smooth&&(GA.target.style.scrollBehavior="auto",GA.smooth=BI.smooth=!1),vB.enable()},p.onDisable=function(){Xn(wI,!0),rC(pA,"resize",VC),uI.removeEventListener("refresh",VC),vB.kill()},p.lockAxis=p.lockAxis!==!1,gA=new FA(p),gA.iOS=OA,OA&&!GA()&&GA(1),OA&&aA.ticker.add(ig),jC=gA._dc,hI=aA.to(gA,{ease:"power4",paused:!0,inherit:!1,scrollX:d?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gl(GA,GA(),function(){return hI.pause()})},onUpdate:xQ,onComplete:jC.vars.onComplete}),gA};uI.sort=function(z){return fI.sort(z||function(p,b){return(p.vars.refreshPriority||0)*-1e6+p.start-(b.start+(b.vars.refreshPriority||0)*-1e6)})},uI.observe=function(z){return new FA(z)},uI.normalizeScroll=function(z){if(typeof z>"u")return hA;if(z===!0&&hA)return hA.enable();if(z===!1){hA&&hA.kill(),hA=z;return}var p=z instanceof FA?z:$M(z);return hA&&hA.target===p.target&&hA.kill(),yQ(p.target)&&(hA=p),p},uI.core={_getVelocityProp:NA,_inputObserver:Ql,_scrollers:M,_proxies:U,bridge:{ss:function(){_A||tE("scrollStart"),_A=cA()},ref:function(){return F}}},iE()&&aA.registerPlugin(uI),I.ScrollTrigger=uI,I.default=uI,typeof window>"u"||window!==I?Object.defineProperty(I,"__esModule",{value:!0}):delete window.default})})(jr,jr.exports);var uS=jr.exports,Vr={exports:{}};(function(Q,A){(function(I,g){g(A)})(fS,function(I){/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var g,C,B,i,E,o,t,e,a=function(){return typeof window<"u"},s=function(){return g||a()&&(g=window.gsap)&&g.registerPlugin&&g},n=function(k){return typeof k=="string"},r=function(k){return typeof k=="function"},c=function(k,K){var u=K==="x"?"Width":"Height",G="scroll"+u,N="client"+u;return k===B||k===i||k===E?Math.max(i[G],E[G])-(B["inner"+u]||i[N]||E[N]):k[G]-k["offset"+u]},D=function(k,K){var u="scroll"+(K==="x"?"Left":"Top");return k===B&&(k.pageXOffset!=null?u="page"+K.toUpperCase()+"Offset":k=i[u]!=null?i:E),function(){return k[u]}},h=function(k,K,u,G){if(r(k)&&(k=k(K,u,G)),typeof k!="object")return n(k)&&k!=="max"&&k.charAt(1)!=="="?{x:k,y:k}:{y:k};if(k.nodeType)return{y:k,x:k};var N={},T;for(T in k)N[T]=T!=="onAutoKill"&&r(k[T])?k[T](K,u,G):k[T];return N},S=function(k,K){if(k=o(k)[0],!k||!k.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var u=k.getBoundingClientRect(),G=!K||K===B||K===E,N=G?{top:i.clientTop-(B.pageYOffset||i.scrollTop||E.scrollTop||0),left:i.clientLeft-(B.pageXOffset||i.scrollLeft||E.scrollLeft||0)}:K.getBoundingClientRect(),T={x:u.left-N.left,y:u.top-N.top};return!G&&K&&(T.x+=D(K,"x")(),T.y+=D(K,"y")()),T},l=function(k,K,u,G,N){return!isNaN(k)&&typeof k!="object"?parseFloat(k)-N:n(k)&&k.charAt(1)==="="?parseFloat(k.substr(2))*(k.charAt(0)==="-"?-1:1)+G-N:k==="max"?c(K,u)-N:Math.min(c(K,u),S(k,K)[u]-N)},y=function(){g=s(),a()&&g&&typeof document<"u"&&document.body&&(B=window,E=document.body,i=document.documentElement,o=g.utils.toArray,g.config({autoKillThreshold:7}),t=g.config(),C=1)},M={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(k){g=k,y()},init:function(k,K,u,G,N){C||y();var T=this,v=g.getProperty(k,"scrollSnapType");T.isWin=k===B,T.target=k,T.tween=u,K=h(K,G,k,N),T.vars=K,T.autoKill=!!K.autoKill,T.getX=D(k,"x"),T.getY=D(k,"y"),T.x=T.xPrev=T.getX(),T.y=T.yPrev=T.getY(),e||(e=g.core.globals().ScrollTrigger),g.getProperty(k,"scrollBehavior")==="smooth"&&g.set(k,{scrollBehavior:"auto"}),v&&v!=="none"&&(T.snap=1,T.snapInline=k.style.scrollSnapType,k.style.scrollSnapType="none"),K.x!=null?(T.add(T,"x",T.x,l(K.x,k,"x",T.x,K.offsetX||0),G,N),T._props.push("scrollTo_x")):T.skipX=1,K.y!=null?(T.add(T,"y",T.y,l(K.y,k,"y",T.y,K.offsetY||0),G,N),T._props.push("scrollTo_y")):T.skipY=1},render:function(k,K){for(var u=K._pt,G=K.target,N=K.tween,T=K.autoKill,v=K.xPrev,m=K.yPrev,j=K.isWin,_=K.snap,V=K.snapInline,AA,IA,oA,eA,NA;u;)u.r(k,u.d),u=u._next;AA=j||!K.skipX?K.getX():v,IA=j||!K.skipY?K.getY():m,oA=IA-m,eA=AA-v,NA=t.autoKillThreshold,K.x<0&&(K.x=0),K.y<0&&(K.y=0),T&&(!K.skipX&&(eA>NA||eA<-NA)&&AA<c(G,"x")&&(K.skipX=1),!K.skipY&&(oA>NA||oA<-NA)&&IA<c(G,"y")&&(K.skipY=1),K.skipX&&K.skipY&&(N.kill(),K.vars.onAutoKill&&K.vars.onAutoKill.apply(N,K.vars.onAutoKillParams||[]))),j?B.scrollTo(K.skipX?AA:K.x,K.skipY?IA:K.y):(K.skipY||(G.scrollTop=K.y),K.skipX||(G.scrollLeft=K.x)),_&&(k===1||k===0)&&(IA=G.scrollTop,AA=G.scrollLeft,V?G.style.scrollSnapType=V:G.style.removeProperty("scroll-snap-type"),G.scrollTop=IA+1,G.scrollLeft=AA+1,G.scrollTop=IA,G.scrollLeft=AA),K.xPrev=K.x,K.yPrev=K.y,e&&e.update()},kill:function(k){var K=k==="scrollTo",u=this._props.indexOf(k);return(K||k==="scrollTo_x")&&(this.skipX=1),(K||k==="scrollTo_y")&&(this.skipY=1),u>-1&&this._props.splice(u,1),!this._props.length}};M.max=c,M.getOffset=S,M.buildGetter=D,s()&&g.registerPlugin(M),I.ScrollToPlugin=M,I.default=M,Object.defineProperty(I,"__esModule",{value:!0})})})(Vr,Vr.exports);var o0=Vr.exports;function Ai(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function YS(Q,A){Q.prototype=Object.create(A.prototype),Q.prototype.constructor=Q,Q.__proto__=A}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mB={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qt={duration:.5,overwrite:!1,delay:0},ch,TC,hg,zB=1e8,tg=1/zB,Xr=Math.PI*2,t0=Xr/4,e0=0,LS=Math.sqrt,a0=Math.cos,s0=Math.sin,GC=function(A){return typeof A=="string"},ug=function(A){return typeof A=="function"},ai=function(A){return typeof A=="number"},lh=function(A){return typeof A>"u"},HQ=function(A){return typeof A=="object"},sB=function(A){return A!==!1},wh=function(){return typeof window<"u"},Na=function(A){return ug(A)||GC(A)},HS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bC=Array.isArray,zr=/(?:-?\.?\d|\.)+/gi,mS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$n=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,TS=/[+-]=-?[.\d]+/,bS=/[^,'"\[\]\s]+/gi,n0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mg,FQ,$r,Sh,_B={},Rs={},xS,_S=function(A){return(Rs=Ao(A,_B))&&cB},Gh=function(A,I){return console.warn("Invalid property",A,"set to",I,"Missing plugin? gsap.registerPlugin()")},ee=function(A,I){return!I&&console.warn(A)},OS=function(A,I){return A&&(_B[A]=I)&&Rs&&(Rs[A]=I)||_B},ae=function(){return 0},r0={suppressEvents:!0,isStart:!0,kill:!1},Ss={suppressEvents:!0,kill:!1},D0={suppressEvents:!0},yh={},xi=[],AD={},vS,qB={},Ar={},tl=30,Gs=[],kh="",Mh=function(A){var I=A[0],g,C;if(HQ(I)||ug(I)||(A=[A]),!(g=(I._gsap||{}).harness)){for(C=Gs.length;C--&&!Gs[C].targetTest(I););g=Gs[C]}for(C=A.length;C--;)A[C]&&(A[C]._gsap||(A[C]._gsap=new DG(A[C],g)))||A.splice(C,1);return A},vE=function(A){return A._gsap||Mh($B(A))[0]._gsap},ZS=function(A,I,g){return(g=A[I])&&ug(g)?A[I]():lh(g)&&A.getAttribute&&A.getAttribute(I)||g},nB=function(A,I){return(A=A.split(",")).forEach(I)||A},_g=function(A){return Math.round(A*1e5)/1e5||0},wC=function(A){return Math.round(A*1e7)/1e7||0},zo=function(A,I){var g=I.charAt(0),C=parseFloat(I.substr(2));return A=parseFloat(A),g==="+"?A+C:g==="-"?A-C:g==="*"?A*C:A/C},h0=function(A,I){for(var g=I.length,C=0;A.indexOf(I[C])<0&&++C<g;);return C<g},Js=function(){var A=xi.length,I=xi.slice(0),g,C;for(AD={},xi.length=0,g=0;g<A;g++)C=I[g],C&&C._lazy&&(C.render(C._lazy[0],C._lazy[1],!0)._lazy=0)},PS=function(A,I,g,C){xi.length&&!TC&&Js(),A.render(I,g,C||TC&&I<0&&(A._initted||A._startAt)),xi.length&&!TC&&Js()},WS=function(A){var I=parseFloat(A);return(I||I===0)&&(A+"").match(bS).length<2?I:GC(A)?A.trim():A},jS=function(A){return A},IQ=function(A,I){for(var g in I)g in A||(A[g]=I[g]);return A},c0=function(A){return function(I,g){for(var C in g)C in I||C==="duration"&&A||C==="ease"||(I[C]=g[C])}},Ao=function(A,I){for(var g in I)A[g]=I[g];return A},el=function Q(A,I){for(var g in I)g!=="__proto__"&&g!=="constructor"&&g!=="prototype"&&(A[g]=HQ(I[g])?Q(A[g]||(A[g]={}),I[g]):I[g]);return A},qs=function(A,I){var g={},C;for(C in A)C in I||(g[C]=A[C]);return g},Ie=function(A){var I=A.parent||Mg,g=A.keyframes?c0(bC(A.keyframes)):IQ;if(sB(A.inherit))for(;I;)g(A,I.vars.defaults),I=I.parent||I._dp;return A},l0=function(A,I){for(var g=A.length,C=g===I.length;C&&g--&&A[g]===I[g];);return g<0},VS=function(A,I,g,C,B){g===void 0&&(g="_first"),C===void 0&&(C="_last");var i=A[C],E;if(B)for(E=I[B];i&&i[B]>E;)i=i._prev;return i?(I._next=i._next,i._next=I):(I._next=A[g],A[g]=I),I._next?I._next._prev=I:A[C]=I,I._prev=i,I.parent=I._dp=A,I},$s=function(A,I,g,C){g===void 0&&(g="_first"),C===void 0&&(C="_last");var B=I._prev,i=I._next;B?B._next=i:A[g]===I&&(A[g]=i),i?i._prev=B:A[C]===I&&(A[C]=B),I._next=I._prev=I.parent=null},Pi=function(A,I){A.parent&&(!I||A.parent.autoRemoveChildren)&&A.parent.remove&&A.parent.remove(A),A._act=0},ZE=function(A,I){if(A&&(!I||I._end>A._dur||I._start<0))for(var g=A;g;)g._dirty=1,g=g.parent;return A},w0=function(A){for(var I=A.parent;I&&I.parent;)I._dirty=1,I.totalDuration(),I=I.parent;return A},ID=function(A,I,g,C){return A._startAt&&(TC?A._startAt.revert(Ss):A.vars.immediateRender&&!A.vars.autoRevert||A._startAt.render(I,!0,C))},S0=function Q(A){return!A||A._ts&&Q(A.parent)},al=function(A){return A._repeat?it(A._tTime,A=A.duration()+A._rDelay)*A:0},it=function(A,I){var g=Math.floor(A/=I);return A&&g===A?g-1:g},fs=function(A,I){return(A-I._start)*I._ts+(I._ts>=0?0:I._dirty?I.totalDuration():I._tDur)},An=function(A){return A._end=wC(A._start+(A._tDur/Math.abs(A._ts||A._rts||tg)||0))},In=function(A,I){var g=A._dp;return g&&g.smoothChildTiming&&A._ts&&(A._start=wC(g._time-(A._ts>0?I/A._ts:((A._dirty?A.totalDuration():A._tDur)-I)/-A._ts)),An(A),g._dirty||ZE(g,A)),A},XS=function(A,I){var g;if((I._time||!I._dur&&I._initted||I._start<A._time&&(I._dur||!I.add))&&(g=fs(A.rawTime(),I),(!I._dur||Pe(0,I.totalDuration(),g)-I._tTime>tg)&&I.render(g,!0)),ZE(A,I)._dp&&A._initted&&A._time>=A._dur&&A._ts){if(A._dur<A.duration())for(g=A;g._dp;)g.rawTime()>=0&&g.totalTime(g._tTime),g=g._dp;A._zTime=-tg}},dQ=function(A,I,g,C){return I.parent&&Pi(I),I._start=wC((ai(g)?g:g||A!==Mg?jB(A,g,I):A._time)+I._delay),I._end=wC(I._start+(I.totalDuration()/Math.abs(I.timeScale())||0)),VS(A,I,"_first","_last",A._sort?"_start":0),gD(I)||(A._recent=I),C||XS(A,I),A._ts<0&&In(A,A._tTime),A},zS=function(A,I){return(_B.ScrollTrigger||Gh("scrollTrigger",I))&&_B.ScrollTrigger.create(I,A)},$S=function(A,I,g,C,B){if(Nh(A,I,B),!A._initted)return 1;if(!g&&A._pt&&!TC&&(A._dur&&A.vars.lazy!==!1||!A._dur&&A.vars.lazy)&&vS!==fB.frame)return xi.push(A),A._lazy=[B,C],1},G0=function Q(A){var I=A.parent;return I&&I._ts&&I._initted&&!I._lock&&(I.rawTime()<0||Q(I))},gD=function(A){var I=A.data;return I==="isFromStart"||I==="isStart"},y0=function(A,I,g,C){var B=A.ratio,i=I<0||!I&&(!A._start&&G0(A)&&!(!A._initted&&gD(A))||(A._ts<0||A._dp._ts<0)&&!gD(A))?0:1,E=A._rDelay,o=0,t,e,a;if(E&&A._repeat&&(o=Pe(0,A._tDur,I),e=it(o,E),A._yoyo&&e&1&&(i=1-i),e!==it(A._tTime,E)&&(B=1-i,A.vars.repeatRefresh&&A._initted&&A.invalidate())),i!==B||TC||C||A._zTime===tg||!I&&A._zTime){if(!A._initted&&$S(A,I,C,g,o))return;for(a=A._zTime,A._zTime=I||(g?tg:0),g||(g=I&&!a),A.ratio=i,A._from&&(i=1-i),A._time=0,A._tTime=o,t=A._pt;t;)t.r(i,t.d),t=t._next;I<0&&ID(A,I,g,!0),A._onUpdate&&!g&&LB(A,"onUpdate"),o&&A._repeat&&!g&&A.parent&&LB(A,"onRepeat"),(I>=A._tDur||I<0)&&A.ratio===i&&(i&&Pi(A,1),!g&&!TC&&(LB(A,i?"onComplete":"onReverseComplete",!0),A._prom&&A._prom()))}else A._zTime||(A._zTime=I)},k0=function(A,I,g){var C;if(g>I)for(C=A._first;C&&C._start<=g;){if(C.data==="isPause"&&C._start>I)return C;C=C._next}else for(C=A._last;C&&C._start>=g;){if(C.data==="isPause"&&C._start<I)return C;C=C._prev}},Et=function(A,I,g,C){var B=A._repeat,i=wC(I)||0,E=A._tTime/A._tDur;return E&&!C&&(A._time*=i/A._dur),A._dur=i,A._tDur=B?B<0?1e10:wC(i*(B+1)+A._rDelay*B):i,E>0&&!C&&In(A,A._tTime=A._tDur*E),A.parent&&An(A),g||ZE(A.parent,A),A},sl=function(A){return A instanceof CB?ZE(A):Et(A,A._dur)},M0={_start:0,endTime:ae,totalDuration:ae},jB=function Q(A,I,g){var C=A.labels,B=A._recent||M0,i=A.duration()>=zB?B.endTime(!1):A._dur,E,o,t;return GC(I)&&(isNaN(I)||I in C)?(o=I.charAt(0),t=I.substr(-1)==="%",E=I.indexOf("="),o==="<"||o===">"?(E>=0&&(I=I.replace(/=/,"")),(o==="<"?B._start:B.endTime(B._repeat>=0))+(parseFloat(I.substr(1))||0)*(t?(E<0?B:g).totalDuration()/100:1)):E<0?(I in C||(C[I]=i),C[I]):(o=parseFloat(I.charAt(E-1)+I.substr(E+1)),t&&g&&(o=o/100*(bC(g)?g[0]:g).totalDuration()),E>1?Q(A,I.substr(0,E-1),g)+o:i+o)):I==null?i:+I},ge=function(A,I,g){var C=ai(I[1]),B=(C?2:1)+(A<2?0:1),i=I[B],E,o;if(C&&(i.duration=I[1]),i.parent=g,A){for(E=i,o=g;o&&!("immediateRender"in E);)E=o.vars.defaults||{},o=sB(o.vars.inherit)&&o.parent;i.immediateRender=sB(E.immediateRender),A<2?i.runBackwards=1:i.startAt=I[B-1]}return new $g(I[0],i,I[B+1])},IE=function(A,I){return A||A===0?I(A):I},Pe=function(A,I,g){return g<A?A:g>I?I:g},HC=function(A,I){return!GC(A)||!(I=n0.exec(A))?"":I[1]},U0=function(A,I,g){return IE(g,function(C){return Pe(A,I,C)})},CD=[].slice,AG=function(A,I){return A&&HQ(A)&&"length"in A&&(!I&&!A.length||A.length-1 in A&&HQ(A[0]))&&!A.nodeType&&A!==FQ},N0=function(A,I,g){return g===void 0&&(g=[]),A.forEach(function(C){var B;return GC(C)&&!I||AG(C,1)?(B=g).push.apply(B,$B(C)):g.push(C)})||g},$B=function(A,I,g){return hg&&!I&&hg.selector?hg.selector(A):GC(A)&&!g&&($r||!ot())?CD.call((I||Sh).querySelectorAll(A),0):bC(A)?N0(A,g):AG(A)?CD.call(A,0):A?[A]:[]},BD=function(A){return A=$B(A)[0]||ee("Invalid scope")||{},function(I){var g=A.current||A.nativeElement||A;return $B(I,g.querySelectorAll?g:g===A?ee("Invalid scope")||Sh.createElement("div"):A)}},IG=function(A){return A.sort(function(){return .5-Math.random()})},gG=function(A){if(ug(A))return A;var I=HQ(A)?A:{each:A},g=PE(I.ease),C=I.from||0,B=parseFloat(I.base)||0,i={},E=C>0&&C<1,o=isNaN(C)||E,t=I.axis,e=C,a=C;return GC(C)?e=a={center:.5,edges:.5,end:1}[C]||0:!E&&o&&(e=C[0],a=C[1]),function(s,n,r){var c=(r||I).length,D=i[c],h,S,l,y,M,U,k,K,u;if(!D){if(u=I.grid==="auto"?0:(I.grid||[1,zB])[1],!u){for(k=-zB;k<(k=r[u++].getBoundingClientRect().left)&&u<c;);u<c&&u--}for(D=i[c]=[],h=o?Math.min(u,c)*e-.5:C%u,S=u===zB?0:o?c*a/u-.5:C/u|0,k=0,K=zB,U=0;U<c;U++)l=U%u-h,y=S-(U/u|0),D[U]=M=t?Math.abs(t==="y"?y:l):LS(l*l+y*y),M>k&&(k=M),M<K&&(K=M);C==="random"&&IG(D),D.max=k-K,D.min=K,D.v=c=(parseFloat(I.amount)||parseFloat(I.each)*(u>c?c-1:t?t==="y"?c/u:u:Math.max(u,c/u))||0)*(C==="edges"?-1:1),D.b=c<0?B-c:B,D.u=HC(I.amount||I.each)||0,g=g&&c<0?sG(g):g}return c=(D[s]-D.min)/D.max||0,wC(D.b+(g?g(c):c)*D.v)+D.u}},QD=function(A){var I=Math.pow(10,((A+"").split(".")[1]||"").length);return function(g){var C=wC(Math.round(parseFloat(g)/A)*A*I);return(C-C%1)/I+(ai(g)?0:HC(g))}},CG=function(A,I){var g=bC(A),C,B;return!g&&HQ(A)&&(C=g=A.radius||zB,A.values?(A=$B(A.values),(B=!ai(A[0]))&&(C*=C)):A=QD(A.increment)),IE(I,g?ug(A)?function(i){return B=A(i),Math.abs(B-i)<=C?B:i}:function(i){for(var E=parseFloat(B?i.x:i),o=parseFloat(B?i.y:0),t=zB,e=0,a=A.length,s,n;a--;)B?(s=A[a].x-E,n=A[a].y-o,s=s*s+n*n):s=Math.abs(A[a]-E),s<t&&(t=s,e=a);return e=!C||t<=C?A[e]:i,B||e===i||ai(i)?e:e+HC(i)}:QD(A))},BG=function(A,I,g,C){return IE(bC(A)?!I:g===!0?!!(g=0):!C,function(){return bC(A)?A[~~(Math.random()*A.length)]:(g=g||1e-5)&&(C=g<1?Math.pow(10,(g+"").length-2):1)&&Math.floor(Math.round((A-g/2+Math.random()*(I-A+g*.99))/g)*g*C)/C})},K0=function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];return function(C){return I.reduce(function(B,i){return i(B)},C)}},F0=function(A,I){return function(g){return A(parseFloat(g))+(I||HC(g))}},p0=function(A,I,g){return iG(A,I,0,1,g)},QG=function(A,I,g){return IE(g,function(C){return A[~~I(C)]})},d0=function Q(A,I,g){var C=I-A;return bC(A)?QG(A,Q(0,A.length),I):IE(g,function(B){return(C+(B-A)%C)%C+A})},R0=function Q(A,I,g){var C=I-A,B=C*2;return bC(A)?QG(A,Q(0,A.length-1),I):IE(g,function(i){return i=(B+(i-A)%B)%B||0,A+(i>C?B-i:i)})},se=function(A){for(var I=0,g="",C,B,i,E;~(C=A.indexOf("random(",I));)i=A.indexOf(")",C),E=A.charAt(C+7)==="[",B=A.substr(C+7,i-C-7).match(E?bS:zr),g+=A.substr(I,C-I)+BG(E?B:+B[0],E?0:+B[1],+B[2]||1e-5),I=i+1;return g+A.substr(I,A.length-I)},iG=function(A,I,g,C,B){var i=I-A,E=C-g;return IE(B,function(o){return g+((o-A)/i*E||0)})},J0=function Q(A,I,g,C){var B=isNaN(A+I)?0:function(n){return(1-n)*A+n*I};if(!B){var i=GC(A),E={},o,t,e,a,s;if(g===!0&&(C=1)&&(g=null),i)A={p:A},I={p:I};else if(bC(A)&&!bC(I)){for(e=[],a=A.length,s=a-2,t=1;t<a;t++)e.push(Q(A[t-1],A[t]));a--,B=function(r){r*=a;var c=Math.min(s,~~r);return e[c](r-c)},g=I}else C||(A=Ao(bC(A)?[]:{},A));if(!e){for(o in I)Uh.call(E,A,o,"get",I[o]);B=function(r){return ph(r,E)||(i?A.p:A)}}}return IE(g,B)},nl=function(A,I,g){var C=A.labels,B=zB,i,E,o;for(i in C)E=C[i]-I,E<0==!!g&&E&&B>(E=Math.abs(E))&&(o=i,B=E);return o},LB=function(A,I,g){var C=A.vars,B=C[I],i=hg,E=A._ctx,o,t,e;if(B)return o=C[I+"Params"],t=C.callbackScope||A,g&&xi.length&&Js(),E&&(hg=E),e=o?B.apply(t,o):B.call(t),hg=i,e},Pt=function(A){return Pi(A),A.scrollTrigger&&A.scrollTrigger.kill(!!TC),A.progress()<1&&LB(A,"onInterrupt"),A},Po,EG=[],oG=function(A){if(A)if(A=!A.name&&A.default||A,wh()||A.headless){var I=A.name,g=ug(A),C=I&&!g&&A.init?function(){this._props=[]}:A,B={init:ae,render:ph,add:Uh,kill:W0,modifier:P0,rawVars:0},i={targetTest:0,get:0,getSetter:Fh,aliases:{},register:0};if(ot(),A!==C){if(qB[I])return;IQ(C,IQ(qs(A,B),i)),Ao(C.prototype,Ao(B,qs(A,i))),qB[C.prop=I]=C,A.targetTest&&(Gs.push(C),yh[I]=1),I=(I==="css"?"CSS":I.charAt(0).toUpperCase()+I.substr(1))+"Plugin"}OS(I,C),A.register&&A.register(cB,C,rB)}else EG.push(A)},Bg=255,Wt={aqua:[0,Bg,Bg],lime:[0,Bg,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bg],navy:[0,0,128],white:[Bg,Bg,Bg],olive:[128,128,0],yellow:[Bg,Bg,0],orange:[Bg,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bg,0,0],pink:[Bg,192,203],cyan:[0,Bg,Bg],transparent:[Bg,Bg,Bg,0]},Ir=function(A,I,g){return A+=A<0?1:A>1?-1:0,(A*6<1?I+(g-I)*A*6:A<.5?g:A*3<2?I+(g-I)*(2/3-A)*6:I)*Bg+.5|0},tG=function(A,I,g){var C=A?ai(A)?[A>>16,A>>8&Bg,A&Bg]:0:Wt.black,B,i,E,o,t,e,a,s,n,r;if(!C){if(A.substr(-1)===","&&(A=A.substr(0,A.length-1)),Wt[A])C=Wt[A];else if(A.charAt(0)==="#"){if(A.length<6&&(B=A.charAt(1),i=A.charAt(2),E=A.charAt(3),A="#"+B+B+i+i+E+E+(A.length===5?A.charAt(4)+A.charAt(4):"")),A.length===9)return C=parseInt(A.substr(1,6),16),[C>>16,C>>8&Bg,C&Bg,parseInt(A.substr(7),16)/255];A=parseInt(A.substr(1),16),C=[A>>16,A>>8&Bg,A&Bg]}else if(A.substr(0,3)==="hsl"){if(C=r=A.match(zr),!I)o=+C[0]%360/360,t=+C[1]/100,e=+C[2]/100,i=e<=.5?e*(t+1):e+t-e*t,B=e*2-i,C.length>3&&(C[3]*=1),C[0]=Ir(o+1/3,B,i),C[1]=Ir(o,B,i),C[2]=Ir(o-1/3,B,i);else if(~A.indexOf("="))return C=A.match(mS),g&&C.length<4&&(C[3]=1),C}else C=A.match(zr)||Wt.transparent;C=C.map(Number)}return I&&!r&&(B=C[0]/Bg,i=C[1]/Bg,E=C[2]/Bg,a=Math.max(B,i,E),s=Math.min(B,i,E),e=(a+s)/2,a===s?o=t=0:(n=a-s,t=e>.5?n/(2-a-s):n/(a+s),o=a===B?(i-E)/n+(i<E?6:0):a===i?(E-B)/n+2:(B-i)/n+4,o*=60),C[0]=~~(o+.5),C[1]=~~(t*100+.5),C[2]=~~(e*100+.5)),g&&C.length<4&&(C[3]=1),C},eG=function(A){var I=[],g=[],C=-1;return A.split(_i).forEach(function(B){var i=B.match(Zo)||[];I.push.apply(I,i),g.push(C+=i.length+1)}),I.c=g,I},rl=function(A,I,g){var C="",B=(A+C).match(_i),i=I?"hsla(":"rgba(",E=0,o,t,e,a;if(!B)return A;if(B=B.map(function(s){return(s=tG(s,I,1))&&i+(I?s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:s.join(","))+")"}),g&&(e=eG(A),o=g.c,o.join(C)!==e.c.join(C)))for(t=A.replace(_i,"1").split(Zo),a=t.length-1;E<a;E++)C+=t[E]+(~o.indexOf(E)?B.shift()||i+"0,0,0,0)":(e.length?e:B.length?B:g).shift());if(!t)for(t=A.split(_i),a=t.length-1;E<a;E++)C+=t[E]+B[E];return C+t[a]},_i=function(){var Q="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",A;for(A in Wt)Q+="|"+A+"\\b";return new RegExp(Q+")","gi")}(),q0=/hsl[a]?\(/,aG=function(A){var I=A.join(" "),g;if(_i.lastIndex=0,_i.test(I))return g=q0.test(I),A[1]=rl(A[1],g),A[0]=rl(A[0],g,eG(A[1])),!0},ne,fB=function(){var Q=Date.now,A=500,I=33,g=Q(),C=g,B=1e3/240,i=B,E=[],o,t,e,a,s,n,r=function c(D){var h=Q()-C,S=D===!0,l,y,M,U;if((h>A||h<0)&&(g+=h-I),C+=h,M=C-g,l=M-i,(l>0||S)&&(U=++a.frame,s=M-a.time*1e3,a.time=M=M/1e3,i+=l+(l>=B?4:B-l),y=1),S||(o=t(c)),y)for(n=0;n<E.length;n++)E[n](M,s,U,D)};return a={time:0,frame:0,tick:function(){r(!0)},deltaRatio:function(D){return s/(1e3/(D||60))},wake:function(){xS&&(!$r&&wh()&&(FQ=$r=window,Sh=FQ.document||{},_B.gsap=cB,(FQ.gsapVersions||(FQ.gsapVersions=[])).push(cB.version),_S(Rs||FQ.GreenSockGlobals||!FQ.gsap&&FQ||{}),EG.forEach(oG)),e=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&a.sleep(),t=e||function(D){return setTimeout(D,i-a.time*1e3+1|0)},ne=1,r(2))},sleep:function(){(e?cancelAnimationFrame:clearTimeout)(o),ne=0,t=ae},lagSmoothing:function(D,h){A=D||1/0,I=Math.min(h||33,A)},fps:function(D){B=1e3/(D||240),i=a.time*1e3+B},add:function(D,h,S){var l=h?function(y,M,U,k){D(y,M,U,k),a.remove(l)}:D;return a.remove(D),E[S?"unshift":"push"](l),ot(),l},remove:function(D,h){~(h=E.indexOf(D))&&E.splice(h,1)&&n>=h&&n--},_listeners:E},a}(),ot=function(){return!ne&&fB.wake()},TI={},f0=/^[\d.\-M][\d.\-,\s]/,u0=/["']/g,Y0=function(A){for(var I={},g=A.substr(1,A.length-3).split(":"),C=g[0],B=1,i=g.length,E,o,t;B<i;B++)o=g[B],E=B!==i-1?o.lastIndexOf(","):o.length,t=o.substr(0,E),I[C]=isNaN(t)?t.replace(u0,"").trim():+t,C=o.substr(E+1).trim();return I},L0=function(A){var I=A.indexOf("(")+1,g=A.indexOf(")"),C=A.indexOf("(",I);return A.substring(I,~C&&C<g?A.indexOf(")",g+1):g)},H0=function(A){var I=(A+"").split("("),g=TI[I[0]];return g&&I.length>1&&g.config?g.config.apply(null,~A.indexOf("{")?[Y0(I[1])]:L0(A).split(",").map(WS)):TI._CE&&f0.test(A)?TI._CE("",A):g},sG=function(A){return function(I){return 1-A(1-I)}},nG=function Q(A,I){for(var g=A._first,C;g;)g instanceof CB?Q(g,I):g.vars.yoyoEase&&(!g._yoyo||!g._repeat)&&g._yoyo!==I&&(g.timeline?Q(g.timeline,I):(C=g._ease,g._ease=g._yEase,g._yEase=C,g._yoyo=I)),g=g._next},PE=function(A,I){return A&&(ug(A)?A:TI[A]||H0(A))||I},oo=function(A,I,g,C){g===void 0&&(g=function(o){return 1-I(1-o)}),C===void 0&&(C=function(o){return o<.5?I(o*2)/2:1-I((1-o)*2)/2});var B={easeIn:I,easeOut:g,easeInOut:C},i;return nB(A,function(E){TI[E]=_B[E]=B,TI[i=E.toLowerCase()]=g;for(var o in B)TI[i+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=TI[E+"."+o]=B[o]}),B},rG=function(A){return function(I){return I<.5?(1-A(1-I*2))/2:.5+A((I-.5)*2)/2}},gr=function Q(A,I,g){var C=I>=1?I:1,B=(g||(A?.3:.45))/(I<1?I:1),i=B/Xr*(Math.asin(1/C)||0),E=function(e){return e===1?1:C*Math.pow(2,-10*e)*s0((e-i)*B)+1},o=A==="out"?E:A==="in"?function(t){return 1-E(1-t)}:rG(E);return B=Xr/B,o.config=function(t,e){return Q(A,t,e)},o},Cr=function Q(A,I){I===void 0&&(I=1.70158);var g=function(i){return i?--i*i*((I+1)*i+I)+1:0},C=A==="out"?g:A==="in"?function(B){return 1-g(1-B)}:rG(g);return C.config=function(B){return Q(A,B)},C};nB("Linear,Quad,Cubic,Quart,Quint,Strong",function(Q,A){var I=A<5?A+1:A;oo(Q+",Power"+(I-1),A?function(g){return Math.pow(g,I)}:function(g){return g},function(g){return 1-Math.pow(1-g,I)},function(g){return g<.5?Math.pow(g*2,I)/2:1-Math.pow((1-g)*2,I)/2})});TI.Linear.easeNone=TI.none=TI.Linear.easeIn;oo("Elastic",gr("in"),gr("out"),gr());(function(Q,A){var I=1/A,g=2*I,C=2.5*I,B=function(E){return E<I?Q*E*E:E<g?Q*Math.pow(E-1.5/A,2)+.75:E<C?Q*(E-=2.25/A)*E+.9375:Q*Math.pow(E-2.625/A,2)+.984375};oo("Bounce",function(i){return 1-B(1-i)},B)})(7.5625,2.75);oo("Expo",function(Q){return Q?Math.pow(2,10*(Q-1)):0});oo("Circ",function(Q){return-(LS(1-Q*Q)-1)});oo("Sine",function(Q){return Q===1?1:-a0(Q*t0)+1});oo("Back",Cr("in"),Cr("out"),Cr());TI.SteppedEase=TI.steps=_B.SteppedEase={config:function(A,I){A===void 0&&(A=1);var g=1/A,C=A+(I?0:1),B=I?1:0,i=1-tg;return function(E){return((C*Pe(0,i,E)|0)+B)*g}}};Qt.ease=TI["quad.out"];nB("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(Q){return kh+=Q+","+Q+"Params,"});var DG=function(A,I){this.id=e0++,A._gsap=this,this.target=A,this.harness=I,this.get=I?I.get:ZS,this.set=I?I.getSetter:Fh},re=function(){function Q(I){this.vars=I,this._delay=+I.delay||0,(this._repeat=I.repeat===1/0?-2:I.repeat||0)&&(this._rDelay=I.repeatDelay||0,this._yoyo=!!I.yoyo||!!I.yoyoEase),this._ts=1,Et(this,+I.duration,1,1),this.data=I.data,hg&&(this._ctx=hg,hg.data.push(this)),ne||fB.wake()}var A=Q.prototype;return A.delay=function(g){return g||g===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+g-this._delay),this._delay=g,this):this._delay},A.duration=function(g){return arguments.length?this.totalDuration(this._repeat>0?g+(g+this._rDelay)*this._repeat:g):this.totalDuration()&&this._dur},A.totalDuration=function(g){return arguments.length?(this._dirty=0,Et(this,this._repeat<0?g:(g-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},A.totalTime=function(g,C){if(ot(),!arguments.length)return this._tTime;var B=this._dp;if(B&&B.smoothChildTiming&&this._ts){for(In(this,g),!B._dp||B.parent||XS(B,this);B&&B.parent;)B.parent._time!==B._start+(B._ts>=0?B._tTime/B._ts:(B.totalDuration()-B._tTime)/-B._ts)&&B.totalTime(B._tTime,!0),B=B.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&g<this._tDur||this._ts<0&&g>0||!this._tDur&&!g)&&dQ(this._dp,this,this._start-this._delay)}return(this._tTime!==g||!this._dur&&!C||this._initted&&Math.abs(this._zTime)===tg||!g&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=g),PS(this,g,C)),this},A.time=function(g,C){return arguments.length?this.totalTime(Math.min(this.totalDuration(),g+al(this))%(this._dur+this._rDelay)||(g?this._dur:0),C):this._time},A.totalProgress=function(g,C){return arguments.length?this.totalTime(this.totalDuration()*g,C):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},A.progress=function(g,C){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-g:g)+al(this),C):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},A.iteration=function(g,C){var B=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(g-1)*B,C):this._repeat?it(this._tTime,B)+1:1},A.timeScale=function(g,C){if(!arguments.length)return this._rts===-tg?0:this._rts;if(this._rts===g)return this;var B=this.parent&&this._ts?fs(this.parent._time,this):this._tTime;return this._rts=+g||0,this._ts=this._ps||g===-tg?0:this._rts,this.totalTime(Pe(-Math.abs(this._delay),this._tDur,B),C!==!1),An(this),w0(this)},A.paused=function(g){return arguments.length?(this._ps!==g&&(this._ps=g,g?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ot(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tg&&(this._tTime-=tg)))),this):this._ps},A.startTime=function(g){if(arguments.length){this._start=g;var C=this.parent||this._dp;return C&&(C._sort||!this.parent)&&dQ(C,this,g-this._delay),this}return this._start},A.endTime=function(g){return this._start+(sB(g)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},A.rawTime=function(g){var C=this.parent||this._dp;return C?g&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fs(C.rawTime(g),this):this._tTime:this._tTime},A.revert=function(g){g===void 0&&(g=D0);var C=TC;return TC=g,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(g),this.totalTime(-.01,g.suppressEvents)),this.data!=="nested"&&g.kill!==!1&&this.kill(),TC=C,this},A.globalTime=function(g){for(var C=this,B=arguments.length?g:C.rawTime();C;)B=C._start+B/(Math.abs(C._ts)||1),C=C._dp;return!this.parent&&this._sat?this._sat.globalTime(g):B},A.repeat=function(g){return arguments.length?(this._repeat=g===1/0?-2:g,sl(this)):this._repeat===-2?1/0:this._repeat},A.repeatDelay=function(g){if(arguments.length){var C=this._time;return this._rDelay=g,sl(this),C?this.time(C):this}return this._rDelay},A.yoyo=function(g){return arguments.length?(this._yoyo=g,this):this._yoyo},A.seek=function(g,C){return this.totalTime(jB(this,g),sB(C))},A.restart=function(g,C){return this.play().totalTime(g?-this._delay:0,sB(C))},A.play=function(g,C){return g!=null&&this.seek(g,C),this.reversed(!1).paused(!1)},A.reverse=function(g,C){return g!=null&&this.seek(g||this.totalDuration(),C),this.reversed(!0).paused(!1)},A.pause=function(g,C){return g!=null&&this.seek(g,C),this.paused(!0)},A.resume=function(){return this.paused(!1)},A.reversed=function(g){return arguments.length?(!!g!==this.reversed()&&this.timeScale(-this._rts||(g?-tg:0)),this):this._rts<0},A.invalidate=function(){return this._initted=this._act=0,this._zTime=-tg,this},A.isActive=function(){var g=this.parent||this._dp,C=this._start,B;return!!(!g||this._ts&&this._initted&&g.isActive()&&(B=g.rawTime(!0))>=C&&B<this.endTime(!0)-tg)},A.eventCallback=function(g,C,B){var i=this.vars;return arguments.length>1?(C?(i[g]=C,B&&(i[g+"Params"]=B),g==="onUpdate"&&(this._onUpdate=C)):delete i[g],this):i[g]},A.then=function(g){var C=this;return new Promise(function(B){var i=ug(g)?g:jS,E=function(){var t=C.then;C.then=null,ug(i)&&(i=i(C))&&(i.then||i===C)&&(C.then=t),B(i),C.then=t};C._initted&&C.totalProgress()===1&&C._ts>=0||!C._tTime&&C._ts<0?E():C._prom=E})},A.kill=function(){Pt(this)},Q}();IQ(re.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tg,_prom:0,_ps:!1,_rts:1});var CB=function(Q){YS(A,Q);function A(g,C){var B;return g===void 0&&(g={}),B=Q.call(this,g)||this,B.labels={},B.smoothChildTiming=!!g.smoothChildTiming,B.autoRemoveChildren=!!g.autoRemoveChildren,B._sort=sB(g.sortChildren),Mg&&dQ(g.parent||Mg,Ai(B),C),g.reversed&&B.reverse(),g.paused&&B.paused(!0),g.scrollTrigger&&zS(Ai(B),g.scrollTrigger),B}var I=A.prototype;return I.to=function(C,B,i){return ge(0,arguments,this),this},I.from=function(C,B,i){return ge(1,arguments,this),this},I.fromTo=function(C,B,i,E){return ge(2,arguments,this),this},I.set=function(C,B,i){return B.duration=0,B.parent=this,Ie(B).repeatDelay||(B.repeat=0),B.immediateRender=!!B.immediateRender,new $g(C,B,jB(this,i),1),this},I.call=function(C,B,i){return dQ(this,$g.delayedCall(0,C,B),i)},I.staggerTo=function(C,B,i,E,o,t,e){return i.duration=B,i.stagger=i.stagger||E,i.onComplete=t,i.onCompleteParams=e,i.parent=this,new $g(C,i,jB(this,o)),this},I.staggerFrom=function(C,B,i,E,o,t,e){return i.runBackwards=1,Ie(i).immediateRender=sB(i.immediateRender),this.staggerTo(C,B,i,E,o,t,e)},I.staggerFromTo=function(C,B,i,E,o,t,e,a){return E.startAt=i,Ie(E).immediateRender=sB(E.immediateRender),this.staggerTo(C,B,E,o,t,e,a)},I.render=function(C,B,i){var E=this._time,o=this._dirty?this.totalDuration():this._tDur,t=this._dur,e=C<=0?0:wC(C),a=this._zTime<0!=C<0&&(this._initted||!t),s,n,r,c,D,h,S,l,y,M,U,k;if(this!==Mg&&e>o&&C>=0&&(e=o),e!==this._tTime||i||a){if(E!==this._time&&t&&(e+=this._time-E,C+=this._time-E),s=e,y=this._start,l=this._ts,h=!l,a&&(t||(E=this._zTime),(C||!B)&&(this._zTime=C)),this._repeat){if(U=this._yoyo,D=t+this._rDelay,this._repeat<-1&&C<0)return this.totalTime(D*100+C,B,i);if(s=wC(e%D),e===o?(c=this._repeat,s=t):(c=~~(e/D),c&&c===e/D&&(s=t,c--),s>t&&(s=t)),M=it(this._tTime,D),!E&&this._tTime&&M!==c&&this._tTime-M*D-this._dur<=0&&(M=c),U&&c&1&&(s=t-s,k=1),c!==M&&!this._lock){var K=U&&M&1,u=K===(U&&c&1);if(c<M&&(K=!K),E=K?0:e%t?t:e,this._lock=1,this.render(E||(k?0:wC(c*D)),B,!t)._lock=0,this._tTime=e,!B&&this.parent&&LB(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),E&&E!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(t=this._dur,o=this._tDur,u&&(this._lock=2,E=K?t:-1e-4,this.render(E,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;nG(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=k0(this,wC(E),wC(s)),S&&(e-=s-(s=S._start))),this._tTime=e,this._time=s,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=C,E=0),!E&&s&&!B&&!c&&(LB(this,"onStart"),this._tTime!==e))return this;if(s>=E&&C>=0)for(n=this._first;n;){if(r=n._next,(n._act||s>=n._start)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(s-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(s-n._start)*n._ts,B,i),s!==this._time||!this._ts&&!h){S=0,r&&(e+=this._zTime=-tg);break}}n=r}else{n=this._last;for(var G=C<0?C:s;n;){if(r=n._prev,(n._act||G<=n._end)&&n._ts&&S!==n){if(n.parent!==this)return this.render(C,B,i);if(n.render(n._ts>0?(G-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(G-n._start)*n._ts,B,i||TC&&(n._initted||n._startAt)),s!==this._time||!this._ts&&!h){S=0,r&&(e+=this._zTime=G?-tg:tg);break}}n=r}}if(S&&!B&&(this.pause(),S.render(s>=E?0:-tg)._zTime=s>=E?1:-1,this._ts))return this._start=y,An(this),this.render(C,B,i);this._onUpdate&&!B&&LB(this,"onUpdate",!0),(e===o&&this._tTime>=this.totalDuration()||!e&&E)&&(y===this._start||Math.abs(l)!==Math.abs(this._ts))&&(this._lock||((C||!t)&&(e===o&&this._ts>0||!e&&this._ts<0)&&Pi(this,1),!B&&!(C<0&&!E)&&(e||E||!o)&&(LB(this,e===o&&C>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(e<o&&this.timeScale()>0)&&this._prom())))}return this},I.add=function(C,B){var i=this;if(ai(B)||(B=jB(this,B,C)),!(C instanceof re)){if(bC(C))return C.forEach(function(E){return i.add(E,B)}),this;if(GC(C))return this.addLabel(C,B);if(ug(C))C=$g.delayedCall(0,C);else return this}return this!==C?dQ(this,C,B):this},I.getChildren=function(C,B,i,E){C===void 0&&(C=!0),B===void 0&&(B=!0),i===void 0&&(i=!0),E===void 0&&(E=-zB);for(var o=[],t=this._first;t;)t._start>=E&&(t instanceof $g?B&&o.push(t):(i&&o.push(t),C&&o.push.apply(o,t.getChildren(!0,B,i)))),t=t._next;return o},I.getById=function(C){for(var B=this.getChildren(1,1,1),i=B.length;i--;)if(B[i].vars.id===C)return B[i]},I.remove=function(C){return GC(C)?this.removeLabel(C):ug(C)?this.killTweensOf(C):($s(this,C),C===this._recent&&(this._recent=this._last),ZE(this))},I.totalTime=function(C,B){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wC(fB.time-(this._ts>0?C/this._ts:(this.totalDuration()-C)/-this._ts))),Q.prototype.totalTime.call(this,C,B),this._forcing=0,this):this._tTime},I.addLabel=function(C,B){return this.labels[C]=jB(this,B),this},I.removeLabel=function(C){return delete this.labels[C],this},I.addPause=function(C,B,i){var E=$g.delayedCall(0,B||ae,i);return E.data="isPause",this._hasPause=1,dQ(this,E,jB(this,C))},I.removePause=function(C){var B=this._first;for(C=jB(this,C);B;)B._start===C&&B.data==="isPause"&&Pi(B),B=B._next},I.killTweensOf=function(C,B,i){for(var E=this.getTweensOf(C,i),o=E.length;o--;)mi!==E[o]&&E[o].kill(C,B);return this},I.getTweensOf=function(C,B){for(var i=[],E=$B(C),o=this._first,t=ai(B),e;o;)o instanceof $g?h0(o._targets,E)&&(t?(!mi||o._initted&&o._ts)&&o.globalTime(0)<=B&&o.globalTime(o.totalDuration())>B:!B||o.isActive())&&i.push(o):(e=o.getTweensOf(E,B)).length&&i.push.apply(i,e),o=o._next;return i},I.tweenTo=function(C,B){B=B||{};var i=this,E=jB(i,C),o=B,t=o.startAt,e=o.onStart,a=o.onStartParams,s=o.immediateRender,n,r=$g.to(i,IQ({ease:B.ease||"none",lazy:!1,immediateRender:!1,time:E,overwrite:"auto",duration:B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale())||tg,onStart:function(){if(i.pause(),!n){var D=B.duration||Math.abs((E-(t&&"time"in t?t.time:i._time))/i.timeScale());r._dur!==D&&Et(r,D,0,1).render(r._time,!0,!0),n=1}e&&e.apply(r,a||[])}},B));return s?r.render(0):r},I.tweenFromTo=function(C,B,i){return this.tweenTo(B,IQ({startAt:{time:jB(this,C)}},i))},I.recent=function(){return this._recent},I.nextLabel=function(C){return C===void 0&&(C=this._time),nl(this,jB(this,C))},I.previousLabel=function(C){return C===void 0&&(C=this._time),nl(this,jB(this,C),1)},I.currentLabel=function(C){return arguments.length?this.seek(C,!0):this.previousLabel(this._time+tg)},I.shiftChildren=function(C,B,i){i===void 0&&(i=0);for(var E=this._first,o=this.labels,t;E;)E._start>=i&&(E._start+=C,E._end+=C),E=E._next;if(B)for(t in o)o[t]>=i&&(o[t]+=C);return ZE(this)},I.invalidate=function(C){var B=this._first;for(this._lock=0;B;)B.invalidate(C),B=B._next;return Q.prototype.invalidate.call(this,C)},I.clear=function(C){C===void 0&&(C=!0);for(var B=this._first,i;B;)i=B._next,this.remove(B),B=i;return this._dp&&(this._time=this._tTime=this._pTime=0),C&&(this.labels={}),ZE(this)},I.totalDuration=function(C){var B=0,i=this,E=i._last,o=zB,t,e,a;if(arguments.length)return i.timeScale((i._repeat<0?i.duration():i.totalDuration())/(i.reversed()?-C:C));if(i._dirty){for(a=i.parent;E;)t=E._prev,E._dirty&&E.totalDuration(),e=E._start,e>o&&i._sort&&E._ts&&!i._lock?(i._lock=1,dQ(i,E,e-E._delay,1)._lock=0):o=e,e<0&&E._ts&&(B-=e,(!a&&!i._dp||a&&a.smoothChildTiming)&&(i._start+=e/i._ts,i._time-=e,i._tTime-=e),i.shiftChildren(-e,!1,-1/0),o=0),E._end>B&&E._ts&&(B=E._end),E=t;Et(i,i===Mg&&i._time>B?i._time:B,1,1),i._dirty=0}return i._tDur},A.updateRoot=function(C){if(Mg._ts&&(PS(Mg,fs(C,Mg)),vS=fB.frame),fB.frame>=tl){tl+=mB.autoSleep||120;var B=Mg._first;if((!B||!B._ts)&&mB.autoSleep&&fB._listeners.length<2){for(;B&&!B._ts;)B=B._next;B||fB.sleep()}}},A}(re);IQ(CB.prototype,{_lock:0,_hasPause:0,_forcing:0});var m0=function(A,I,g,C,B,i,E){var o=new rB(this._pt,A,I,0,1,GG,null,B),t=0,e=0,a,s,n,r,c,D,h,S;for(o.b=g,o.e=C,g+="",C+="",(h=~C.indexOf("random("))&&(C=se(C)),i&&(S=[g,C],i(S,A,I),g=S[0],C=S[1]),s=g.match($n)||[];a=$n.exec(C);)r=a[0],c=C.substring(t,a.index),n?n=(n+1)%5:c.substr(-5)==="rgba("&&(n=1),r!==s[e++]&&(D=parseFloat(s[e-1])||0,o._pt={_next:o._pt,p:c||e===1?c:",",s:D,c:r.charAt(1)==="="?zo(D,r)-D:parseFloat(r)-D,m:n&&n<4?Math.round:0},t=$n.lastIndex);return o.c=t<C.length?C.substring(t,C.length):"",o.fp=E,(TS.test(C)||h)&&(o.e=0),this._pt=o,o},Uh=function(A,I,g,C,B,i,E,o,t,e){ug(C)&&(C=C(B||0,A,i));var a=A[I],s=g!=="get"?g:ug(a)?t?A[I.indexOf("set")||!ug(A["get"+I.substr(3)])?I:"get"+I.substr(3)](t):A[I]():a,n=ug(a)?t?O0:wG:Kh,r;if(GC(C)&&(~C.indexOf("random(")&&(C=se(C)),C.charAt(1)==="="&&(r=zo(s,C)+(HC(s)||0),(r||r===0)&&(C=r))),!e||s!==C||iD)return!isNaN(s*C)&&C!==""?(r=new rB(this._pt,A,I,+s||0,C-(s||0),typeof a=="boolean"?Z0:SG,0,n),t&&(r.fp=t),E&&r.modifier(E,this,A),this._pt=r):(!a&&!(I in A)&&Gh(I,C),m0.call(this,A,I,s,C,n,o||mB.stringFilter,t))},T0=function(A,I,g,C,B){if(ug(A)&&(A=Ce(A,B,I,g,C)),!HQ(A)||A.style&&A.nodeType||bC(A)||HS(A))return GC(A)?Ce(A,B,I,g,C):A;var i={},E;for(E in A)i[E]=Ce(A[E],B,I,g,C);return i},hG=function(A,I,g,C,B,i){var E,o,t,e;if(qB[A]&&(E=new qB[A]).init(B,E.rawVars?I[A]:T0(I[A],C,B,i,g),g,C,i)!==!1&&(g._pt=o=new rB(g._pt,B,A,0,1,E.render,E,0,E.priority),g!==Po))for(t=g._ptLookup[g._targets.indexOf(B)],e=E._props.length;e--;)t[E._props[e]]=o;return E},mi,iD,Nh=function Q(A,I,g){var C=A.vars,B=C.ease,i=C.startAt,E=C.immediateRender,o=C.lazy,t=C.onUpdate,e=C.runBackwards,a=C.yoyoEase,s=C.keyframes,n=C.autoRevert,r=A._dur,c=A._startAt,D=A._targets,h=A.parent,S=h&&h.data==="nested"?h.vars.targets:D,l=A._overwrite==="auto"&&!ch,y=A.timeline,M,U,k,K,u,G,N,T,v,m,j,_,V;if(y&&(!s||!B)&&(B="none"),A._ease=PE(B,Qt.ease),A._yEase=a?sG(PE(a===!0?B:a,Qt.ease)):0,a&&A._yoyo&&!A._repeat&&(a=A._yEase,A._yEase=A._ease,A._ease=a),A._from=!y&&!!C.runBackwards,!y||s&&!C.stagger){if(T=D[0]?vE(D[0]).harness:0,_=T&&C[T.prop],M=qs(C,yh),c&&(c._zTime<0&&c.progress(1),I<0&&e&&E&&!n?c.render(-1,!0):c.revert(e&&r?Ss:r0),c._lazy=0),i){if(Pi(A._startAt=$g.set(D,IQ({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!c&&sB(o),startAt:null,delay:0,onUpdate:t&&function(){return LB(A,"onUpdate")},stagger:0},i))),A._startAt._dp=0,A._startAt._sat=A,I<0&&(TC||!E&&!n)&&A._startAt.revert(Ss),E&&r&&I<=0&&g<=0){I&&(A._zTime=I);return}}else if(e&&r&&!c){if(I&&(E=!1),k=IQ({overwrite:!1,data:"isFromStart",lazy:E&&!c&&sB(o),immediateRender:E,stagger:0,parent:h},M),_&&(k[T.prop]=_),Pi(A._startAt=$g.set(D,k)),A._startAt._dp=0,A._startAt._sat=A,I<0&&(TC?A._startAt.revert(Ss):A._startAt.render(-1,!0)),A._zTime=I,!E)Q(A._startAt,tg,tg);else if(!I)return}for(A._pt=A._ptCache=0,o=r&&sB(o)||o&&!r,U=0;U<D.length;U++){if(u=D[U],N=u._gsap||Mh(D)[U]._gsap,A._ptLookup[U]=m={},AD[N.id]&&xi.length&&Js(),j=S===D?U:S.indexOf(u),T&&(v=new T).init(u,_||M,A,j,S)!==!1&&(A._pt=K=new rB(A._pt,u,v.name,0,1,v.render,v,0,v.priority),v._props.forEach(function(AA){m[AA]=K}),v.priority&&(G=1)),!T||_)for(k in M)qB[k]&&(v=hG(k,M,A,j,u,S))?v.priority&&(G=1):m[k]=K=Uh.call(A,u,k,"get",M[k],j,S,0,C.stringFilter);A._op&&A._op[U]&&A.kill(u,A._op[U]),l&&A._pt&&(mi=A,Mg.killTweensOf(u,m,A.globalTime(I)),V=!A.parent,mi=0),A._pt&&o&&(AD[N.id]=1)}G&&yG(A),A._onInit&&A._onInit(A)}A._onUpdate=t,A._initted=(!A._op||A._pt)&&!V,s&&I<=0&&y.render(zB,!0,!0)},b0=function(A,I,g,C,B,i,E,o){var t=(A._pt&&A._ptCache||(A._ptCache={}))[I],e,a,s,n;if(!t)for(t=A._ptCache[I]=[],s=A._ptLookup,n=A._targets.length;n--;){if(e=s[n][I],e&&e.d&&e.d._pt)for(e=e.d._pt;e&&e.p!==I&&e.fp!==I;)e=e._next;if(!e)return iD=1,A.vars[I]="+=0",Nh(A,E),iD=0,o?ee(I+" not eligible for reset"):1;t.push(e)}for(n=t.length;n--;)a=t[n],e=a._pt||a,e.s=(C||C===0)&&!B?C:e.s+(C||0)+i*e.c,e.c=g-e.s,a.e&&(a.e=_g(g)+HC(a.e)),a.b&&(a.b=e.s+HC(a.b))},x0=function(A,I){var g=A[0]?vE(A[0]).harness:0,C=g&&g.aliases,B,i,E,o;if(!C)return I;B=Ao({},I);for(i in C)if(i in B)for(o=C[i].split(","),E=o.length;E--;)B[o[E]]=B[i];return B},_0=function(A,I,g,C){var B=I.ease||C||"power1.inOut",i,E;if(bC(I))E=g[A]||(g[A]=[]),I.forEach(function(o,t){return E.push({t:t/(I.length-1)*100,v:o,e:B})});else for(i in I)E=g[i]||(g[i]=[]),i==="ease"||E.push({t:parseFloat(A),v:I[i],e:B})},Ce=function(A,I,g,C,B){return ug(A)?A.call(I,g,C,B):GC(A)&&~A.indexOf("random(")?se(A):A},cG=kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lG={};nB(cG+",id,stagger,delay,duration,paused,scrollTrigger",function(Q){return lG[Q]=1});var $g=function(Q){YS(A,Q);function A(g,C,B,i){var E;typeof C=="number"&&(B.duration=C,C=B,B=null),E=Q.call(this,i?C:Ie(C))||this;var o=E.vars,t=o.duration,e=o.delay,a=o.immediateRender,s=o.stagger,n=o.overwrite,r=o.keyframes,c=o.defaults,D=o.scrollTrigger,h=o.yoyoEase,S=C.parent||Mg,l=(bC(g)||HS(g)?ai(g[0]):"length"in C)?[g]:$B(g),y,M,U,k,K,u,G,N;if(E._targets=l.length?Mh(l):ee("GSAP target "+g+" not found. https://gsap.com",!mB.nullTargetWarn)||[],E._ptLookup=[],E._overwrite=n,r||s||Na(t)||Na(e)){if(C=E.vars,y=E.timeline=new CB({data:"nested",defaults:c||{},targets:S&&S.data==="nested"?S.vars.targets:l}),y.kill(),y.parent=y._dp=Ai(E),y._start=0,s||Na(t)||Na(e)){if(k=l.length,G=s&&gG(s),HQ(s))for(K in s)~cG.indexOf(K)&&(N||(N={}),N[K]=s[K]);for(M=0;M<k;M++)U=qs(C,lG),U.stagger=0,h&&(U.yoyoEase=h),N&&Ao(U,N),u=l[M],U.duration=+Ce(t,Ai(E),M,u,l),U.delay=(+Ce(e,Ai(E),M,u,l)||0)-E._delay,!s&&k===1&&U.delay&&(E._delay=e=U.delay,E._start+=e,U.delay=0),y.to(u,U,G?G(M,u,l):0),y._ease=TI.none;y.duration()?t=e=0:E.timeline=0}else if(r){Ie(IQ(y.vars.defaults,{ease:"none"})),y._ease=PE(r.ease||C.ease||"none");var T=0,v,m,j;if(bC(r))r.forEach(function(_){return y.to(l,_,">")}),y.duration();else{U={};for(K in r)K==="ease"||K==="easeEach"||_0(K,r[K],U,r.easeEach);for(K in U)for(v=U[K].sort(function(_,V){return _.t-V.t}),T=0,M=0;M<v.length;M++)m=v[M],j={ease:m.e,duration:(m.t-(M?v[M-1].t:0))/100*t},j[K]=m.v,y.to(l,j,T),T+=j.duration;y.duration()<t&&y.to({},{duration:t-y.duration()})}}t||E.duration(t=y.duration())}else E.timeline=0;return n===!0&&!ch&&(mi=Ai(E),Mg.killTweensOf(l),mi=0),dQ(S,Ai(E),B),C.reversed&&E.reverse(),C.paused&&E.paused(!0),(a||!t&&!r&&E._start===wC(S._time)&&sB(a)&&S0(Ai(E))&&S.data!=="nested")&&(E._tTime=-tg,E.render(Math.max(0,-e)||0)),D&&zS(Ai(E),D),E}var I=A.prototype;return I.render=function(C,B,i){var E=this._time,o=this._tDur,t=this._dur,e=C<0,a=C>o-tg&&!e?o:C<tg?0:C,s,n,r,c,D,h,S,l,y;if(!t)y0(this,C,B,i);else if(a!==this._tTime||!C||i||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==e){if(s=a,l=this.timeline,this._repeat){if(c=t+this._rDelay,this._repeat<-1&&e)return this.totalTime(c*100+C,B,i);if(s=wC(a%c),a===o?(r=this._repeat,s=t):(r=~~(a/c),r&&r===wC(a/c)&&(s=t,r--),s>t&&(s=t)),h=this._yoyo&&r&1,h&&(y=this._yEase,s=t-s),D=it(this._tTime,c),s===E&&!i&&this._initted&&r===D)return this._tTime=a,this;r!==D&&(l&&this._yEase&&nG(l,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==c&&this._initted&&(this._lock=i=1,this.render(wC(c*r),!0).invalidate()._lock=0))}if(!this._initted){if($S(this,e?C:s,i,B,a))return this._tTime=0,this;if(E!==this._time&&!(i&&this.vars.repeatRefresh&&r!==D))return this;if(t!==this._dur)return this.render(C,B,i)}if(this._tTime=a,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(s/t),this._from&&(this.ratio=S=1-S),s&&!E&&!B&&!r&&(LB(this,"onStart"),this._tTime!==a))return this;for(n=this._pt;n;)n.r(S,n.d),n=n._next;l&&l.render(C<0?C:l._dur*l._ease(s/this._dur),B,i)||this._startAt&&(this._zTime=C),this._onUpdate&&!B&&(e&&ID(this,C,B,i),LB(this,"onUpdate")),this._repeat&&r!==D&&this.vars.onRepeat&&!B&&this.parent&&LB(this,"onRepeat"),(a===this._tDur||!a)&&this._tTime===a&&(e&&!this._onUpdate&&ID(this,C,!0,!0),(C||!t)&&(a===this._tDur&&this._ts>0||!a&&this._ts<0)&&Pi(this,1),!B&&!(e&&!E)&&(a||E||h)&&(LB(this,a===o?"onComplete":"onReverseComplete",!0),this._prom&&!(a<o&&this.timeScale()>0)&&this._prom()))}return this},I.targets=function(){return this._targets},I.invalidate=function(C){return(!C||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(C),Q.prototype.invalidate.call(this,C)},I.resetTo=function(C,B,i,E,o){ne||fB.wake(),this._ts||this.play();var t=Math.min(this._dur,(this._dp._time-this._start)*this._ts),e;return this._initted||Nh(this,t),e=this._ease(t/this._dur),b0(this,C,B,i,E,e,t,o)?this.resetTo(C,B,i,E,1):(In(this,0),this.parent||VS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},I.kill=function(C,B){if(B===void 0&&(B="all"),!C&&(!B||B==="all"))return this._lazy=this._pt=0,this.parent?Pt(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(C,B,mi&&mi.vars.overwrite!==!0)._first||Pt(this),this.parent&&i!==this.timeline.totalDuration()&&Et(this,this._dur*this.timeline._tDur/i,0,1),this}var E=this._targets,o=C?$B(C):E,t=this._ptLookup,e=this._pt,a,s,n,r,c,D,h;if((!B||B==="all")&&l0(E,o))return B==="all"&&(this._pt=0),Pt(this);for(a=this._op=this._op||[],B!=="all"&&(GC(B)&&(c={},nB(B,function(S){return c[S]=1}),B=c),B=x0(E,B)),h=E.length;h--;)if(~o.indexOf(E[h])){s=t[h],B==="all"?(a[h]=B,r=s,n={}):(n=a[h]=a[h]||{},r=B);for(c in r)D=s&&s[c],D&&((!("kill"in D.d)||D.d.kill(c)===!0)&&$s(this,D,"_pt"),delete s[c]),n!=="all"&&(n[c]=1)}return this._initted&&!this._pt&&e&&Pt(this),this},A.to=function(C,B){return new A(C,B,arguments[2])},A.from=function(C,B){return ge(1,arguments)},A.delayedCall=function(C,B,i,E){return new A(B,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:C,onComplete:B,onReverseComplete:B,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:E})},A.fromTo=function(C,B,i){return ge(2,arguments)},A.set=function(C,B){return B.duration=0,B.repeatDelay||(B.repeat=0),new A(C,B)},A.killTweensOf=function(C,B,i){return Mg.killTweensOf(C,B,i)},A}(re);IQ($g.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nB("staggerTo,staggerFrom,staggerFromTo",function(Q){$g[Q]=function(){var A=new CB,I=CD.call(arguments,0);return I.splice(Q==="staggerFromTo"?5:4,0,0),A[Q].apply(A,I)}});var Kh=function(A,I,g){return A[I]=g},wG=function(A,I,g){return A[I](g)},O0=function(A,I,g,C){return A[I](C.fp,g)},v0=function(A,I,g){return A.setAttribute(I,g)},Fh=function(A,I){return ug(A[I])?wG:lh(A[I])&&A.setAttribute?v0:Kh},SG=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e6)/1e6,I)},Z0=function(A,I){return I.set(I.t,I.p,!!(I.s+I.c*A),I)},GG=function(A,I){var g=I._pt,C="";if(!A&&I.b)C=I.b;else if(A===1&&I.e)C=I.e;else{for(;g;)C=g.p+(g.m?g.m(g.s+g.c*A):Math.round((g.s+g.c*A)*1e4)/1e4)+C,g=g._next;C+=I.c}I.set(I.t,I.p,C,I)},ph=function(A,I){for(var g=I._pt;g;)g.r(A,g.d),g=g._next},P0=function(A,I,g,C){for(var B=this._pt,i;B;)i=B._next,B.p===C&&B.modifier(A,I,g),B=i},W0=function(A){for(var I=this._pt,g,C;I;)C=I._next,I.p===A&&!I.op||I.op===A?$s(this,I,"_pt"):I.dep||(g=1),I=C;return!g},j0=function(A,I,g,C){C.mSet(A,I,C.m.call(C.tween,g,C.mt),C)},yG=function(A){for(var I=A._pt,g,C,B,i;I;){for(g=I._next,C=B;C&&C.pr>I.pr;)C=C._next;(I._prev=C?C._prev:i)?I._prev._next=I:B=I,(I._next=C)?C._prev=I:i=I,I=g}A._pt=B},rB=function(){function Q(I,g,C,B,i,E,o,t,e){this.t=g,this.s=B,this.c=i,this.p=C,this.r=E||SG,this.d=o||this,this.set=t||Kh,this.pr=e||0,this._next=I,I&&(I._prev=this)}var A=Q.prototype;return A.modifier=function(g,C,B){this.mSet=this.mSet||this.set,this.set=j0,this.m=g,this.mt=B,this.tween=C},Q}();nB(kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(Q){return yh[Q]=1});_B.TweenMax=_B.TweenLite=$g;_B.TimelineLite=_B.TimelineMax=CB;Mg=new CB({sortChildren:!1,defaults:Qt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mB.stringFilter=aG;var WE=[],ys={},V0=[],Dl=0,X0=0,Br=function(A){return(ys[A]||V0).map(function(I){return I()})},ED=function(){var A=Date.now(),I=[];A-Dl>2&&(Br("matchMediaInit"),WE.forEach(function(g){var C=g.queries,B=g.conditions,i,E,o,t;for(E in C)i=FQ.matchMedia(C[E]).matches,i&&(o=1),i!==B[E]&&(B[E]=i,t=1);t&&(g.revert(),o&&I.push(g))}),Br("matchMediaRevert"),I.forEach(function(g){return g.onMatch(g,function(C){return g.add(null,C)})}),Dl=A,Br("matchMedia"))},kG=function(){function Q(I,g){this.selector=g&&BD(g),this.data=[],this._r=[],this.isReverted=!1,this.id=X0++,I&&this.add(I)}var A=Q.prototype;return A.add=function(g,C,B){ug(g)&&(B=C,C=g,g=ug);var i=this,E=function(){var t=hg,e=i.selector,a;return t&&t!==i&&t.data.push(i),B&&(i.selector=BD(B)),hg=i,a=C.apply(i,arguments),ug(a)&&i._r.push(a),hg=t,i.selector=e,i.isReverted=!1,a};return i.last=E,g===ug?E(i,function(o){return i.add(null,o)}):g?i[g]=E:E},A.ignore=function(g){var C=hg;hg=null,g(this),hg=C},A.getTweens=function(){var g=[];return this.data.forEach(function(C){return C instanceof Q?g.push.apply(g,C.getTweens()):C instanceof $g&&!(C.parent&&C.parent.data==="nested")&&g.push(C)}),g},A.clear=function(){this._r.length=this.data.length=0},A.kill=function(g,C){var B=this;if(g?function(){for(var E=B.getTweens(),o=B.data.length,t;o--;)t=B.data[o],t.data==="isFlip"&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return E.splice(E.indexOf(e),1)}));for(E.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,a){return a.g-e.g||-1/0}).forEach(function(e){return e.t.revert(g)}),o=B.data.length;o--;)t=B.data[o],t instanceof CB?t.data!=="nested"&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof $g)&&t.revert&&t.revert(g);B._r.forEach(function(e){return e(g,B)}),B.isReverted=!0}():this.data.forEach(function(E){return E.kill&&E.kill()}),this.clear(),C)for(var i=WE.length;i--;)WE[i].id===this.id&&WE.splice(i,1)},A.revert=function(g){this.kill(g||{})},Q}(),z0=function(){function Q(I){this.contexts=[],this.scope=I,hg&&hg.data.push(this)}var A=Q.prototype;return A.add=function(g,C,B){HQ(g)||(g={matches:g});var i=new kG(0,B||this.scope),E=i.conditions={},o,t,e;hg&&!i.selector&&(i.selector=hg.selector),this.contexts.push(i),C=i.add("onMatch",C),i.queries=g;for(t in g)t==="all"?e=1:(o=FQ.matchMedia(g[t]),o&&(WE.indexOf(i)<0&&WE.push(i),(E[t]=o.matches)&&(e=1),o.addListener?o.addListener(ED):o.addEventListener("change",ED)));return e&&C(i,function(a){return i.add(null,a)}),this},A.revert=function(g){this.kill(g||{})},A.kill=function(g){this.contexts.forEach(function(C){return C.kill(g,!0)})},Q}(),us={registerPlugin:function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];I.forEach(function(C){return oG(C)})},timeline:function(A){return new CB(A)},getTweensOf:function(A,I){return Mg.getTweensOf(A,I)},getProperty:function(A,I,g,C){GC(A)&&(A=$B(A)[0]);var B=vE(A||{}).get,i=g?jS:WS;return g==="native"&&(g=""),A&&(I?i((qB[I]&&qB[I].get||B)(A,I,g,C)):function(E,o,t){return i((qB[E]&&qB[E].get||B)(A,E,o,t))})},quickSetter:function(A,I,g){if(A=$B(A),A.length>1){var C=A.map(function(e){return cB.quickSetter(e,I,g)}),B=C.length;return function(e){for(var a=B;a--;)C[a](e)}}A=A[0]||{};var i=qB[I],E=vE(A),o=E.harness&&(E.harness.aliases||{})[I]||I,t=i?function(e){var a=new i;Po._pt=0,a.init(A,g?e+g:e,Po,0,[A]),a.render(1,a),Po._pt&&ph(1,Po)}:E.set(A,o);return i?t:function(e){return t(A,o,g?e+g:e,E,1)}},quickTo:function(A,I,g){var C,B=cB.to(A,Ao((C={},C[I]="+=0.1",C.paused=!0,C),g||{})),i=function(o,t,e){return B.resetTo(I,o,t,e)};return i.tween=B,i},isTweening:function(A){return Mg.getTweensOf(A,!0).length>0},defaults:function(A){return A&&A.ease&&(A.ease=PE(A.ease,Qt.ease)),el(Qt,A||{})},config:function(A){return el(mB,A||{})},registerEffect:function(A){var I=A.name,g=A.effect,C=A.plugins,B=A.defaults,i=A.extendTimeline;(C||"").split(",").forEach(function(E){return E&&!qB[E]&&!_B[E]&&ee(I+" effect requires "+E+" plugin.")}),Ar[I]=function(E,o,t){return g($B(E),IQ(o||{},B),t)},i&&(CB.prototype[I]=function(E,o,t){return this.add(Ar[I](E,HQ(o)?o:(t=o)&&{},this),t)})},registerEase:function(A,I){TI[A]=PE(I)},parseEase:function(A,I){return arguments.length?PE(A,I):TI},getById:function(A){return Mg.getById(A)},exportRoot:function(A,I){A===void 0&&(A={});var g=new CB(A),C,B;for(g.smoothChildTiming=sB(A.smoothChildTiming),Mg.remove(g),g._dp=0,g._time=g._tTime=Mg._time,C=Mg._first;C;)B=C._next,(I||!(!C._dur&&C instanceof $g&&C.vars.onComplete===C._targets[0]))&&dQ(g,C,C._start-C._delay),C=B;return dQ(Mg,g,0),g},context:function(A,I){return A?new kG(A,I):hg},matchMedia:function(A){return new z0(A)},matchMediaRefresh:function(){return WE.forEach(function(A){var I=A.conditions,g,C;for(C in I)I[C]&&(I[C]=!1,g=1);g&&A.revert()})||ED()},addEventListener:function(A,I){var g=ys[A]||(ys[A]=[]);~g.indexOf(I)||g.push(I)},removeEventListener:function(A,I){var g=ys[A],C=g&&g.indexOf(I);C>=0&&g.splice(C,1)},utils:{wrap:d0,wrapYoyo:R0,distribute:gG,random:BG,snap:CG,normalize:p0,getUnit:HC,clamp:U0,splitColor:tG,toArray:$B,selector:BD,mapRange:iG,pipe:K0,unitize:F0,interpolate:J0,shuffle:IG},install:_S,effects:Ar,ticker:fB,updateRoot:CB.updateRoot,plugins:qB,globalTimeline:Mg,core:{PropTween:rB,globals:OS,Tween:$g,Timeline:CB,Animation:re,getCache:vE,_removeLinkedListItem:$s,reverting:function(){return TC},context:function(A){return A&&hg&&(hg.data.push(A),A._ctx=hg),hg},suppressOverwrites:function(A){return ch=A}}};nB("to,from,fromTo,delayedCall,set,killTweensOf",function(Q){return us[Q]=$g[Q]});fB.add(CB.updateRoot);Po=us.to({},{duration:0});var $0=function(A,I){for(var g=A._pt;g&&g.p!==I&&g.op!==I&&g.fp!==I;)g=g._next;return g},AU=function(A,I){var g=A._targets,C,B,i;for(C in I)for(B=g.length;B--;)i=A._ptLookup[B][C],i&&(i=i.d)&&(i._pt&&(i=$0(i,C)),i&&i.modifier&&i.modifier(I[C],A,g[B],C))},Qr=function(A,I){return{name:A,rawVars:1,init:function(C,B,i){i._onInit=function(E){var o,t;if(GC(B)&&(o={},nB(B,function(e){return o[e]=1}),B=o),I){o={};for(t in B)o[t]=I(B[t]);B=o}AU(E,B)}}}},cB=us.registerPlugin({name:"attr",init:function(A,I,g,C,B){var i,E,o;this.tween=g;for(i in I)o=A.getAttribute(i)||"",E=this.add(A,"setAttribute",(o||0)+"",I[i],C,B,0,0,i),E.op=i,E.b=o,this._props.push(i)},render:function(A,I){for(var g=I._pt;g;)TC?g.set(g.t,g.p,g.b,g):g.r(A,g.d),g=g._next}},{name:"endArray",init:function(A,I){for(var g=I.length;g--;)this.add(A,g,A[g]||0,I[g],0,0,0,0,0,1)}},Qr("roundProps",QD),Qr("modifiers"),Qr("snap",CG))||us;$g.version=CB.version=cB.version="3.12.5";xS=1;wh()&&ot();TI.Power0;TI.Power1;TI.Power2;TI.Power3;TI.Power4;TI.Linear;TI.Quad;TI.Cubic;TI.Quart;TI.Quint;TI.Strong;TI.Elastic;TI.Back;TI.SteppedEase;TI.Bounce;TI.Sine;TI.Expo;TI.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hl,Ti,$o,dh,HE,cl,Rh,IU=function(){return typeof window<"u"},si={},RE=180/Math.PI,At=Math.PI/180,yo=Math.atan2,ll=1e8,Jh=/([A-Z])/g,gU=/(left|right|width|margin|padding|x)/i,CU=/[\s,\(]\S/,JQ={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},oD=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},BU=function(A,I){return I.set(I.t,I.p,A===1?I.e:Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},QU=function(A,I){return I.set(I.t,I.p,A?Math.round((I.s+I.c*A)*1e4)/1e4+I.u:I.b,I)},iU=function(A,I){var g=I.s+I.c*A;I.set(I.t,I.p,~~(g+(g<0?-.5:.5))+I.u,I)},MG=function(A,I){return I.set(I.t,I.p,A?I.e:I.b,I)},UG=function(A,I){return I.set(I.t,I.p,A!==1?I.b:I.e,I)},EU=function(A,I,g){return A.style[I]=g},oU=function(A,I,g){return A.style.setProperty(I,g)},tU=function(A,I,g){return A._gsap[I]=g},eU=function(A,I,g){return A._gsap.scaleX=A._gsap.scaleY=g},aU=function(A,I,g,C,B){var i=A._gsap;i.scaleX=i.scaleY=g,i.renderTransform(B,i)},sU=function(A,I,g,C,B){var i=A._gsap;i[I]=g,i.renderTransform(B,i)},Ng="transform",DB=Ng+"Origin",nU=function Q(A,I){var g=this,C=this.target,B=C.style,i=C._gsap;if(A in si&&B){if(this.tfm=this.tfm||{},A!=="transform")A=JQ[A]||A,~A.indexOf(",")?A.split(",").forEach(function(E){return g.tfm[E]=gi(C,E)}):this.tfm[A]=i.x?i[A]:gi(C,A),A===DB&&(this.tfm.zOrigin=i.zOrigin);else return JQ.transform.split(",").forEach(function(E){return Q.call(g,E,I)});if(this.props.indexOf(Ng)>=0)return;i.svg&&(this.svgo=C.getAttribute("data-svg-origin"),this.props.push(DB,I,"")),A=Ng}(B||I)&&this.props.push(A,I,B[A])},NG=function(A){A.translate&&(A.removeProperty("translate"),A.removeProperty("scale"),A.removeProperty("rotate"))},rU=function(){var A=this.props,I=this.target,g=I.style,C=I._gsap,B,i;for(B=0;B<A.length;B+=3)A[B+1]?I[A[B]]=A[B+2]:A[B+2]?g[A[B]]=A[B+2]:g.removeProperty(A[B].substr(0,2)==="--"?A[B]:A[B].replace(Jh,"-$1").toLowerCase());if(this.tfm){for(i in this.tfm)C[i]=this.tfm[i];C.svg&&(C.renderTransform(),I.setAttribute("data-svg-origin",this.svgo||"")),B=Rh(),(!B||!B.isStart)&&!g[Ng]&&(NG(g),C.zOrigin&&g[DB]&&(g[DB]+=" "+C.zOrigin+"px",C.zOrigin=0,C.renderTransform()),C.uncache=1)}},KG=function(A,I){var g={target:A,props:[],revert:rU,save:nU};return A._gsap||cB.core.getCache(A),I&&I.split(",").forEach(function(C){return g.save(C)}),g},FG,tD=function(A,I){var g=Ti.createElementNS?Ti.createElementNS((I||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),A):Ti.createElement(A);return g&&g.style?g:Ti.createElement(A)},uQ=function Q(A,I,g){var C=getComputedStyle(A);return C[I]||C.getPropertyValue(I.replace(Jh,"-$1").toLowerCase())||C.getPropertyValue(I)||!g&&Q(A,tt(I)||I,1)||""},wl="O,Moz,ms,Ms,Webkit".split(","),tt=function(A,I,g){var C=I||HE,B=C.style,i=5;if(A in B&&!g)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1);i--&&!(wl[i]+A in B););return i<0?null:(i===3?"ms":i>=0?wl[i]:"")+A},eD=function(){IU()&&window.document&&(hl=window,Ti=hl.document,$o=Ti.documentElement,HE=tD("div")||{style:{}},tD("div"),Ng=tt(Ng),DB=Ng+"Origin",HE.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",FG=!!tt("perspective"),Rh=cB.core.reverting,dh=1)},ir=function Q(A){var I=tD("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),g=this.parentNode,C=this.nextSibling,B=this.style.cssText,i;if($o.appendChild(I),I.appendChild(this),this.style.display="block",A)try{i=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Q}catch{}else this._gsapBBox&&(i=this._gsapBBox());return g&&(C?g.insertBefore(this,C):g.appendChild(this)),$o.removeChild(I),this.style.cssText=B,i},Sl=function(A,I){for(var g=I.length;g--;)if(A.hasAttribute(I[g]))return A.getAttribute(I[g])},pG=function(A){var I;try{I=A.getBBox()}catch{I=ir.call(A,!0)}return I&&(I.width||I.height)||A.getBBox===ir||(I=ir.call(A,!0)),I&&!I.width&&!I.x&&!I.y?{x:+Sl(A,["x","cx","x1"])||0,y:+Sl(A,["y","cy","y1"])||0,width:0,height:0}:I},dG=function(A){return!!(A.getCTM&&(!A.parentNode||A.ownerSVGElement)&&pG(A))},Io=function(A,I){if(I){var g=A.style,C;I in si&&I!==DB&&(I=Ng),g.removeProperty?(C=I.substr(0,2),(C==="ms"||I.substr(0,6)==="webkit")&&(I="-"+I),g.removeProperty(C==="--"?I:I.replace(Jh,"-$1").toLowerCase())):g.removeAttribute(I)}},bi=function(A,I,g,C,B,i){var E=new rB(A._pt,I,g,0,1,i?UG:MG);return A._pt=E,E.b=C,E.e=B,A._props.push(g),E},Gl={deg:1,rad:1,turn:1},DU={grid:1,flex:1},Wi=function Q(A,I,g,C){var B=parseFloat(g)||0,i=(g+"").trim().substr((B+"").length)||"px",E=HE.style,o=gU.test(I),t=A.tagName.toLowerCase()==="svg",e=(t?"client":"offset")+(o?"Width":"Height"),a=100,s=C==="px",n=C==="%",r,c,D,h;if(C===i||!B||Gl[C]||Gl[i])return B;if(i!=="px"&&!s&&(B=Q(A,I,g,"px")),h=A.getCTM&&dG(A),(n||i==="%")&&(si[I]||~I.indexOf("adius")))return r=h?A.getBBox()[o?"width":"height"]:A[e],_g(n?B/r*a:B/100*r);if(E[o?"width":"height"]=a+(s?i:C),c=~I.indexOf("adius")||C==="em"&&A.appendChild&&!t?A:A.parentNode,h&&(c=(A.ownerSVGElement||{}).parentNode),(!c||c===Ti||!c.appendChild)&&(c=Ti.body),D=c._gsap,D&&n&&D.width&&o&&D.time===fB.time&&!D.uncache)return _g(B/D.width*a);if(n&&(I==="height"||I==="width")){var S=A.style[I];A.style[I]=a+C,r=A[e],S?A.style[I]=S:Io(A,I)}else(n||i==="%")&&!DU[uQ(c,"display")]&&(E.position=uQ(A,"position")),c===A&&(E.position="static"),c.appendChild(HE),r=HE[e],c.removeChild(HE),E.position="absolute";return o&&n&&(D=vE(c),D.time=fB.time,D.width=c[e]),_g(s?r*B/a:r&&B?a/r*B:0)},gi=function(A,I,g,C){var B;return dh||eD(),I in JQ&&I!=="transform"&&(I=JQ[I],~I.indexOf(",")&&(I=I.split(",")[0])),si[I]&&I!=="transform"?(B=he(A,C),B=I!=="transformOrigin"?B[I]:B.svg?B.origin:Ls(uQ(A,DB))+" "+B.zOrigin+"px"):(B=A.style[I],(!B||B==="auto"||C||~(B+"").indexOf("calc("))&&(B=Ys[I]&&Ys[I](A,I,g)||uQ(A,I)||ZS(A,I)||(I==="opacity"?1:0))),g&&!~(B+"").trim().indexOf(" ")?Wi(A,I,B,g)+g:B},hU=function(A,I,g,C){if(!g||g==="none"){var B=tt(I,A,1),i=B&&uQ(A,B,1);i&&i!==g?(I=B,g=i):I==="borderColor"&&(g=uQ(A,"borderTopColor"))}var E=new rB(this._pt,A.style,I,0,1,GG),o=0,t=0,e,a,s,n,r,c,D,h,S,l,y,M;if(E.b=g,E.e=C,g+="",C+="",C==="auto"&&(c=A.style[I],A.style[I]=C,C=uQ(A,I)||C,c?A.style[I]=c:Io(A,I)),e=[g,C],aG(e),g=e[0],C=e[1],s=g.match(Zo)||[],M=C.match(Zo)||[],M.length){for(;a=Zo.exec(C);)D=a[0],S=C.substring(o,a.index),r?r=(r+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(r=1),D!==(c=s[t++]||"")&&(n=parseFloat(c)||0,y=c.substr((n+"").length),D.charAt(1)==="="&&(D=zo(n,D)+y),h=parseFloat(D),l=D.substr((h+"").length),o=Zo.lastIndex-l.length,l||(l=l||mB.units[I]||y,o===C.length&&(C+=l,E.e+=l)),y!==l&&(n=Wi(A,I,c,l)||0),E._pt={_next:E._pt,p:S||t===1?S:",",s:n,c:h-n,m:r&&r<4||I==="zIndex"?Math.round:0});E.c=o<C.length?C.substring(o,C.length):""}else E.r=I==="display"&&C==="none"?UG:MG;return TS.test(C)&&(E.e=0),this._pt=E,E},yl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cU=function(A){var I=A.split(" "),g=I[0],C=I[1]||"50%";return(g==="top"||g==="bottom"||C==="left"||C==="right")&&(A=g,g=C,C=A),I[0]=yl[g]||g,I[1]=yl[C]||C,I.join(" ")},lU=function(A,I){if(I.tween&&I.tween._time===I.tween._dur){var g=I.t,C=g.style,B=I.u,i=g._gsap,E,o,t;if(B==="all"||B===!0)C.cssText="",o=1;else for(B=B.split(","),t=B.length;--t>-1;)E=B[t],si[E]&&(o=1,E=E==="transformOrigin"?DB:Ng),Io(g,E);o&&(Io(g,Ng),i&&(i.svg&&g.removeAttribute("transform"),he(g,1),i.uncache=1,NG(C)))}},Ys={clearProps:function(A,I,g,C,B){if(B.data!=="isFromStart"){var i=A._pt=new rB(A._pt,I,g,0,0,lU);return i.u=C,i.pr=-10,i.tween=B,A._props.push(g),1}}},De=[1,0,0,1,0,0],RG={},JG=function(A){return A==="matrix(1, 0, 0, 1, 0, 0)"||A==="none"||!A},kl=function(A){var I=uQ(A,Ng);return JG(I)?De:I.substr(7).match(mS).map(_g)},qh=function(A,I){var g=A._gsap||vE(A),C=A.style,B=kl(A),i,E,o,t;return g.svg&&A.getAttribute("transform")?(o=A.transform.baseVal.consolidate().matrix,B=[o.a,o.b,o.c,o.d,o.e,o.f],B.join(",")==="1,0,0,1,0,0"?De:B):(B===De&&!A.offsetParent&&A!==$o&&!g.svg&&(o=C.display,C.display="block",i=A.parentNode,(!i||!A.offsetParent)&&(t=1,E=A.nextElementSibling,$o.appendChild(A)),B=kl(A),o?C.display=o:Io(A,"display"),t&&(E?i.insertBefore(A,E):i?i.appendChild(A):$o.removeChild(A))),I&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B)},aD=function(A,I,g,C,B,i){var E=A._gsap,o=B||qh(A,!0),t=E.xOrigin||0,e=E.yOrigin||0,a=E.xOffset||0,s=E.yOffset||0,n=o[0],r=o[1],c=o[2],D=o[3],h=o[4],S=o[5],l=I.split(" "),y=parseFloat(l[0])||0,M=parseFloat(l[1])||0,U,k,K,u;g?o!==De&&(k=n*D-r*c)&&(K=y*(D/k)+M*(-c/k)+(c*S-D*h)/k,u=y*(-r/k)+M*(n/k)-(n*S-r*h)/k,y=K,M=u):(U=pG(A),y=U.x+(~l[0].indexOf("%")?y/100*U.width:y),M=U.y+(~(l[1]||l[0]).indexOf("%")?M/100*U.height:M)),C||C!==!1&&E.smooth?(h=y-t,S=M-e,E.xOffset=a+(h*n+S*c)-h,E.yOffset=s+(h*r+S*D)-S):E.xOffset=E.yOffset=0,E.xOrigin=y,E.yOrigin=M,E.smooth=!!C,E.origin=I,E.originIsAbsolute=!!g,A.style[DB]="0px 0px",i&&(bi(i,E,"xOrigin",t,y),bi(i,E,"yOrigin",e,M),bi(i,E,"xOffset",a,E.xOffset),bi(i,E,"yOffset",s,E.yOffset)),A.setAttribute("data-svg-origin",y+" "+M)},he=function(A,I){var g=A._gsap||new DG(A);if("x"in g&&!I&&!g.uncache)return g;var C=A.style,B=g.scaleX<0,i="px",E="deg",o=getComputedStyle(A),t=uQ(A,DB)||"0",e,a,s,n,r,c,D,h,S,l,y,M,U,k,K,u,G,N,T,v,m,j,_,V,AA,IA,oA,eA,NA,jA,QA,wA;return e=a=s=c=D=h=S=l=y=0,n=r=1,g.svg=!!(A.getCTM&&dG(A)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(C[Ng]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Ng]!=="none"?o[Ng]:"")),C.scale=C.rotate=C.translate="none"),k=qh(A,g.svg),g.svg&&(g.uncache?(AA=A.getBBox(),t=g.xOrigin-AA.x+"px "+(g.yOrigin-AA.y)+"px",V=""):V=!I&&A.getAttribute("data-svg-origin"),aD(A,V||t,!!V||g.originIsAbsolute,g.smooth!==!1,k)),M=g.xOrigin||0,U=g.yOrigin||0,k!==De&&(N=k[0],T=k[1],v=k[2],m=k[3],e=j=k[4],a=_=k[5],k.length===6?(n=Math.sqrt(N*N+T*T),r=Math.sqrt(m*m+v*v),c=N||T?yo(T,N)*RE:0,S=v||m?yo(v,m)*RE+c:0,S&&(r*=Math.abs(Math.cos(S*At))),g.svg&&(e-=M-(M*N+U*v),a-=U-(M*T+U*m))):(wA=k[6],jA=k[7],oA=k[8],eA=k[9],NA=k[10],QA=k[11],e=k[12],a=k[13],s=k[14],K=yo(wA,NA),D=K*RE,K&&(u=Math.cos(-K),G=Math.sin(-K),V=j*u+oA*G,AA=_*u+eA*G,IA=wA*u+NA*G,oA=j*-G+oA*u,eA=_*-G+eA*u,NA=wA*-G+NA*u,QA=jA*-G+QA*u,j=V,_=AA,wA=IA),K=yo(-v,NA),h=K*RE,K&&(u=Math.cos(-K),G=Math.sin(-K),V=N*u-oA*G,AA=T*u-eA*G,IA=v*u-NA*G,QA=m*G+QA*u,N=V,T=AA,v=IA),K=yo(T,N),c=K*RE,K&&(u=Math.cos(K),G=Math.sin(K),V=N*u+T*G,AA=j*u+_*G,T=T*u-N*G,_=_*u-j*G,N=V,j=AA),D&&Math.abs(D)+Math.abs(c)>359.9&&(D=c=0,h=180-h),n=_g(Math.sqrt(N*N+T*T+v*v)),r=_g(Math.sqrt(_*_+wA*wA)),K=yo(j,_),S=Math.abs(K)>2e-4?K*RE:0,y=QA?1/(QA<0?-QA:QA):0),g.svg&&(V=A.getAttribute("transform"),g.forceCSS=A.setAttribute("transform","")||!JG(uQ(A,Ng)),V&&A.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(B?(n*=-1,S+=c<=0?180:-180,c+=c<=0?180:-180):(r*=-1,S+=S<=0?180:-180)),I=I||g.uncache,g.x=e-((g.xPercent=e&&(!I&&g.xPercent||(Math.round(A.offsetWidth/2)===Math.round(-e)?-50:0)))?A.offsetWidth*g.xPercent/100:0)+i,g.y=a-((g.yPercent=a&&(!I&&g.yPercent||(Math.round(A.offsetHeight/2)===Math.round(-a)?-50:0)))?A.offsetHeight*g.yPercent/100:0)+i,g.z=s+i,g.scaleX=_g(n),g.scaleY=_g(r),g.rotation=_g(c)+E,g.rotationX=_g(D)+E,g.rotationY=_g(h)+E,g.skewX=S+E,g.skewY=l+E,g.transformPerspective=y+i,(g.zOrigin=parseFloat(t.split(" ")[2])||!I&&g.zOrigin||0)&&(C[DB]=Ls(t)),g.xOffset=g.yOffset=0,g.force3D=mB.force3D,g.renderTransform=g.svg?SU:FG?qG:wU,g.uncache=0,g},Ls=function(A){return(A=A.split(" "))[0]+" "+A[1]},Er=function(A,I,g){var C=HC(I);return _g(parseFloat(I)+parseFloat(Wi(A,"x",g+"px",C)))+C},wU=function(A,I){I.z="0px",I.rotationY=I.rotationX="0deg",I.force3D=0,qG(A,I)},lE="0deg",ut="0px",wE=") ",qG=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.z,t=g.rotation,e=g.rotationY,a=g.rotationX,s=g.skewX,n=g.skewY,r=g.scaleX,c=g.scaleY,D=g.transformPerspective,h=g.force3D,S=g.target,l=g.zOrigin,y="",M=h==="auto"&&A&&A!==1||h===!0;if(l&&(a!==lE||e!==lE)){var U=parseFloat(e)*At,k=Math.sin(U),K=Math.cos(U),u;U=parseFloat(a)*At,u=Math.cos(U),i=Er(S,i,k*u*-l),E=Er(S,E,-Math.sin(U)*-l),o=Er(S,o,K*u*-l+l)}D!==ut&&(y+="perspective("+D+wE),(C||B)&&(y+="translate("+C+"%, "+B+"%) "),(M||i!==ut||E!==ut||o!==ut)&&(y+=o!==ut||M?"translate3d("+i+", "+E+", "+o+") ":"translate("+i+", "+E+wE),t!==lE&&(y+="rotate("+t+wE),e!==lE&&(y+="rotateY("+e+wE),a!==lE&&(y+="rotateX("+a+wE),(s!==lE||n!==lE)&&(y+="skew("+s+", "+n+wE),(r!==1||c!==1)&&(y+="scale("+r+", "+c+wE),S.style[Ng]=y||"translate(0, 0)"},SU=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,i=g.x,E=g.y,o=g.rotation,t=g.skewX,e=g.skewY,a=g.scaleX,s=g.scaleY,n=g.target,r=g.xOrigin,c=g.yOrigin,D=g.xOffset,h=g.yOffset,S=g.forceCSS,l=parseFloat(i),y=parseFloat(E),M,U,k,K,u;o=parseFloat(o),t=parseFloat(t),e=parseFloat(e),e&&(e=parseFloat(e),t+=e,o+=e),o||t?(o*=At,t*=At,M=Math.cos(o)*a,U=Math.sin(o)*a,k=Math.sin(o-t)*-s,K=Math.cos(o-t)*s,t&&(e*=At,u=Math.tan(t-e),u=Math.sqrt(1+u*u),k*=u,K*=u,e&&(u=Math.tan(e),u=Math.sqrt(1+u*u),M*=u,U*=u)),M=_g(M),U=_g(U),k=_g(k),K=_g(K)):(M=a,K=s,U=k=0),(l&&!~(i+"").indexOf("px")||y&&!~(E+"").indexOf("px"))&&(l=Wi(n,"x",i,"px"),y=Wi(n,"y",E,"px")),(r||c||D||h)&&(l=_g(l+r-(r*M+c*k)+D),y=_g(y+c-(r*U+c*K)+h)),(C||B)&&(u=n.getBBox(),l=_g(l+C/100*u.width),y=_g(y+B/100*u.height)),u="matrix("+M+","+U+","+k+","+K+","+l+","+y+")",n.setAttribute("transform",u),S&&(n.style[Ng]=u)},GU=function(A,I,g,C,B){var i=360,E=GC(B),o=parseFloat(B)*(E&&~B.indexOf("rad")?RE:1),t=o-C,e=C+t+"deg",a,s;return E&&(a=B.split("_")[1],a==="short"&&(t%=i,t!==t%(i/2)&&(t+=t<0?i:-i)),a==="cw"&&t<0?t=(t+i*ll)%i-~~(t/i)*i:a==="ccw"&&t>0&&(t=(t-i*ll)%i-~~(t/i)*i)),A._pt=s=new rB(A._pt,I,g,C,t,BU),s.e=e,s.u="deg",A._props.push(g),s},Ml=function(A,I){for(var g in I)A[g]=I[g];return A},yU=function(A,I,g){var C=Ml({},g._gsap),B="perspective,force3D,transformOrigin,svgOrigin",i=g.style,E,o,t,e,a,s,n,r;C.svg?(t=g.getAttribute("transform"),g.setAttribute("transform",""),i[Ng]=I,E=he(g,1),Io(g,Ng),g.setAttribute("transform",t)):(t=getComputedStyle(g)[Ng],i[Ng]=I,E=he(g,1),i[Ng]=t);for(o in si)t=C[o],e=E[o],t!==e&&B.indexOf(o)<0&&(n=HC(t),r=HC(e),a=n!==r?Wi(g,o,t,r):parseFloat(t),s=parseFloat(e),A._pt=new rB(A._pt,E,o,a,s-a,oD),A._pt.u=r||0,A._props.push(o));Ml(E,C)};nB("padding,margin,Width,Radius",function(Q,A){var I="Top",g="Right",C="Bottom",B="Left",i=(A<3?[I,g,C,B]:[I+B,I+g,C+g,C+B]).map(function(E){return A<2?Q+E:"border"+E+Q});Ys[A>1?"border"+Q:Q]=function(E,o,t,e,a){var s,n;if(arguments.length<4)return s=i.map(function(r){return gi(E,r,t)}),n=s.join(" "),n.split(s[0]).length===5?s[0]:n;s=(e+"").split(" "),n={},i.forEach(function(r,c){return n[r]=s[c]=s[c]||s[(c-1)/2|0]}),E.init(o,n,a)}});var fG={name:"css",register:eD,targetTest:function(A){return A.style&&A.nodeType},init:function(A,I,g,C,B){var i=this._props,E=A.style,o=g.vars.startAt,t,e,a,s,n,r,c,D,h,S,l,y,M,U,k,K;dh||eD(),this.styles=this.styles||KG(A),K=this.styles.props,this.tween=g;for(c in I)if(c!=="autoRound"&&(e=I[c],!(qB[c]&&hG(c,I,g,C,A,B)))){if(n=typeof e,r=Ys[c],n==="function"&&(e=e.call(g,C,A,B),n=typeof e),n==="string"&&~e.indexOf("random(")&&(e=se(e)),r)r(this,A,c,e,g)&&(k=1);else if(c.substr(0,2)==="--")t=(getComputedStyle(A).getPropertyValue(c)+"").trim(),e+="",_i.lastIndex=0,_i.test(t)||(D=HC(t),h=HC(e)),h?D!==h&&(t=Wi(A,c,t,h)+h):D&&(e+=D),this.add(E,"setProperty",t,e,C,B,0,0,c),i.push(c),K.push(c,0,E[c]);else if(n!=="undefined"){if(o&&c in o?(t=typeof o[c]=="function"?o[c].call(g,C,A,B):o[c],GC(t)&&~t.indexOf("random(")&&(t=se(t)),HC(t+"")||t==="auto"||(t+=mB.units[c]||HC(gi(A,c))||""),(t+"").charAt(1)==="="&&(t=gi(A,c))):t=gi(A,c),s=parseFloat(t),S=n==="string"&&e.charAt(1)==="="&&e.substr(0,2),S&&(e=e.substr(2)),a=parseFloat(e),c in JQ&&(c==="autoAlpha"&&(s===1&&gi(A,"visibility")==="hidden"&&a&&(s=0),K.push("visibility",0,E.visibility),bi(this,E,"visibility",s?"inherit":"hidden",a?"inherit":"hidden",!a)),c!=="scale"&&c!=="transform"&&(c=JQ[c],~c.indexOf(",")&&(c=c.split(",")[0]))),l=c in si,l){if(this.styles.save(c),y||(M=A._gsap,M.renderTransform&&!I.parseTransform||he(A,I.parseTransform),U=I.smoothOrigin!==!1&&M.smooth,y=this._pt=new rB(this._pt,E,Ng,0,1,M.renderTransform,M,0,-1),y.dep=1),c==="scale")this._pt=new rB(this._pt,M,"scaleY",M.scaleY,(S?zo(M.scaleY,S+a):a)-M.scaleY||0,oD),this._pt.u=0,i.push("scaleY",c),c+="X";else if(c==="transformOrigin"){K.push(DB,0,E[DB]),e=cU(e),M.svg?aD(A,e,0,U,0,this):(h=parseFloat(e.split(" ")[2])||0,h!==M.zOrigin&&bi(this,M,"zOrigin",M.zOrigin,h),bi(this,E,c,Ls(t),Ls(e)));continue}else if(c==="svgOrigin"){aD(A,e,1,U,0,this);continue}else if(c in RG){GU(this,M,c,s,S?zo(s,S+e):e);continue}else if(c==="smoothOrigin"){bi(this,M,"smooth",M.smooth,e);continue}else if(c==="force3D"){M[c]=e;continue}else if(c==="transform"){yU(this,e,A);continue}}else c in E||(c=tt(c)||c);if(l||(a||a===0)&&(s||s===0)&&!CU.test(e)&&c in E)D=(t+"").substr((s+"").length),a||(a=0),h=HC(e)||(c in mB.units?mB.units[c]:D),D!==h&&(s=Wi(A,c,t,h)),this._pt=new rB(this._pt,l?M:E,c,s,(S?zo(s,S+a):a)-s,!l&&(h==="px"||c==="zIndex")&&I.autoRound!==!1?iU:oD),this._pt.u=h||0,D!==h&&h!=="%"&&(this._pt.b=t,this._pt.r=QU);else if(c in E)hU.call(this,A,c,t,S?S+e:e);else if(c in A)this.add(A,c,t||A[c],S?S+e:e,C,B);else if(c!=="parseTransform"){Gh(c,e);continue}l||(c in E?K.push(c,0,E[c]):K.push(c,1,t||A[c])),i.push(c)}}k&&yG(this)},render:function(A,I){if(I.tween._time||!Rh())for(var g=I._pt;g;)g.r(A,g.d),g=g._next;else I.styles.revert()},get:gi,aliases:JQ,getSetter:function(A,I,g){var C=JQ[I];return C&&C.indexOf(",")<0&&(I=C),I in si&&I!==DB&&(A._gsap.x||gi(A,"x"))?g&&cl===g?I==="scale"?eU:tU:(cl=g||{})&&(I==="scale"?aU:sU):A.style&&!lh(A.style[I])?EU:~I.indexOf("-")?oU:Fh(A,I)},core:{_removeProperty:Io,_getMatrix:qh}};cB.utils.checkPrefix=tt;cB.core.getStyleSaver=KG;(function(Q,A,I,g){var C=nB(Q+","+A+","+I,function(B){si[B]=1});nB(A,function(B){mB.units[B]="deg",RG[B]=1}),JQ[C[13]]=Q+","+A,nB(g,function(B){var i=B.split(":");JQ[i[1]]=C[i[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nB("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(Q){mB.units[Q]="px"});cB.registerPlugin(fG);var sD=cB.registerPlugin(fG)||cB;sD.core.Tween;typeof window<"u"&&(sD.registerPlugin(uS.ScrollTrigger),sD.registerPlugin(o0.ScrollToPlugin));uS.ScrollTrigger.defaults({markers:0});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const We="161",JE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uG=0,nD=1,YG=2,kU=3,MU=0,fh=1,gn=2,NQ=3,ni=0,QB=1,RQ=2,Ei=0,jE=1,Hs=2,rD=3,DD=4,LG=5,Hi=100,HG=101,mG=102,hD=103,cD=104,TG=200,bG=201,xG=202,_G=203,ms=204,Ts=205,OG=206,vG=207,ZG=208,PG=209,WG=210,jG=211,VG=212,XG=213,zG=214,$G=0,Ay=1,Iy=2,ce=3,gy=4,Cy=5,By=6,Qy=7,je=0,iy=1,Ey=2,oi=0,oy=1,ty=2,ey=3,uh=4,ay=5,sy=6,lD="attached",ny="detached",Cn=300,ri=301,ji=302,le=303,we=304,ct=306,Se=1e3,mC=1001,Ge=1002,Og=1003,bs=1004,UU=1004,YE=1005,NU=1005,Ug=1006,Be=1007,KU=1007,qQ=1008,FU=1008,ti=1009,ry=1010,Dy=1011,Bn=1012,Yh=1013,Qi=1014,XB=1015,et=1016,Lh=1017,Hh=1018,Oi=1020,hy=1021,aB=1023,cy=1024,ly=1025,vi=1026,go=1027,wy=1028,mh=1029,Sy=1030,Th=1031,bh=1033,ks=33776,Ms=33777,Us=33778,Ns=33779,wD=35840,SD=35841,GD=35842,yD=35843,xh=36196,kD=37492,MD=37496,UD=37808,ND=37809,KD=37810,FD=37811,pD=37812,dD=37813,RD=37814,JD=37815,qD=37816,fD=37817,uD=37818,YD=37819,LD=37820,HD=37821,Ks=36492,mD=36494,TD=36495,Gy=36283,bD=36284,xD=36285,_D=36286,yy=2200,ky=2201,My=2202,ye=2300,ke=2301,Fs=2302,mE=2400,TE=2401,Me=2402,Qn=2500,_h=2501,pU=0,dU=1,RU=2,Ue=3e3,ei=3001,Uy=3200,Ny=3201,gE=0,Ky=1,uB="",oC="srgb",mQ="srgb-linear",En="display-p3",Ve="display-p3-linear",Ne="linear",og="srgb",Ke="rec709",Fe="p3",JU=0,fE=7680,qU=7681,fU=7682,uU=7683,YU=34055,LU=34056,HU=5386,mU=512,TU=513,bU=514,xU=515,_U=516,OU=517,vU=518,OD=519,Fy=512,py=513,dy=514,Oh=515,Ry=516,Jy=517,qy=518,fy=519,pe=35044,ZU=35048,PU=35040,WU=35045,jU=35049,VU=35041,XU=35046,zU=35050,$U=35042,AN="100",vD="300 es",xs=1035,fQ=2e3,de=2001;class TQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const uC=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const VE=Math.PI/180,at=180/Math.PI;function TB(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(uC[Q&255]+uC[Q>>8&255]+uC[Q>>16&255]+uC[Q>>24&255]+"-"+uC[A&255]+uC[A>>8&255]+"-"+uC[A>>16&15|64]+uC[A>>24&255]+"-"+uC[I&63|128]+uC[I>>8&255]+"-"+uC[I>>16&255]+uC[I>>24&255]+uC[g&255]+uC[g>>8&255]+uC[g>>16&255]+uC[g>>24&255]).toLowerCase()}function fg(Q,A,I){return Math.max(A,Math.min(I,Q))}function vh(Q,A){return(Q%A+A)%A}function IN(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function gN(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function Qe(Q,A,I){return(1-I)*Q+I*A}function CN(Q,A,I,g){return Qe(Q,A,1-Math.exp(-I*g))}function BN(Q,A=1){return A-Math.abs(vh(Q,A*2)-A)}function QN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function iN(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function EN(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function oN(Q,A){return Q+Math.random()*(A-Q)}function tN(Q){return Q*(.5-Math.random())}function eN(Q){Q!==void 0&&(Ul=Q);let A=Ul+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function aN(Q){return Q*VE}function sN(Q){return Q*at}function ZD(Q){return(Q&Q-1)===0&&Q!==0}function nN(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function _s(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function rN(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),o=i(I/2),t=B((A+g)/2),e=i((A+g)/2),a=B((A-g)/2),s=i((A-g)/2),n=B((g-A)/2),r=i((g-A)/2);switch(C){case"XYX":Q.set(E*e,o*a,o*s,E*t);break;case"YZY":Q.set(o*s,E*e,o*a,E*t);break;case"ZXZ":Q.set(o*a,o*s,E*e,E*t);break;case"XZX":Q.set(E*e,o*r,o*n,E*t);break;case"YXY":Q.set(o*n,E*e,o*r,E*t);break;case"ZYZ":Q.set(o*r,o*n,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function BB(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function NI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const uy={DEG2RAD:VE,RAD2DEG:at,generateUUID:TB,clamp:fg,euclideanModulo:vh,mapLinear:IN,inverseLerp:gN,lerp:Qe,damp:CN,pingpong:BN,smoothstep:QN,smootherstep:iN,randInt:EN,randFloat:oN,randFloatSpread:tN,seededRandom:eN,degToRad:aN,radToDeg:sN,isPowerOfTwo:ZD,ceilPowerOfTwo:nN,floorPowerOfTwo:_s,setQuaternionFromProperEuler:rN,normalize:NI,denormalize:BB};class rA{constructor(A=0,I=0){rA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(fg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class FI{constructor(A,I,g,C,B,i,E,o,t){FI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t)}set(A,I,g,C,B,i,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=i,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],r=g[8],c=C[0],D=C[3],h=C[6],S=C[1],l=C[4],y=C[7],M=C[2],U=C[5],k=C[8];return B[0]=i*c+E*S+o*M,B[3]=i*D+E*l+o*U,B[6]=i*h+E*y+o*k,B[1]=t*c+e*S+a*M,B[4]=t*D+e*l+a*U,B[7]=t*h+e*y+a*k,B[2]=s*c+n*S+r*M,B[5]=s*D+n*l+r*U,B[8]=s*h+n*y+r*k,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*i*e-I*E*t-g*B*e+g*E*o+C*B*t-C*i*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*i-E*t,s=E*o-e*B,n=t*B-i*o,r=I*a+g*s+C*n;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/r;return A[0]=a*c,A[1]=(C*t-e*g)*c,A[2]=(E*g-C*i)*c,A[3]=s*c,A[4]=(e*I-C*o)*c,A[5]=(C*B-E*I)*c,A[6]=n*c,A[7]=(g*o-t*I)*c,A[8]=(i*I-g*B)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*i+t*E)+i+A,-C*t,C*o,-C*(-t*i+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(or.makeScale(A,I)),this}rotate(A){return this.premultiply(or.makeRotation(-A)),this}translate(A,I){return this.premultiply(or.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const or=new FI;function Yy(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const DN={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Wo(Q,A){return new DN[Q](A)}function Re(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function Ly(){const Q=Re("canvas");return Q.style.display="block",Q}const Nl={};function XE(Q){Q in Nl||(Nl[Q]=!0,console.warn(Q))}const Kl=new FI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new FI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[mQ]:{transfer:Ne,primaries:Ke,toReference:Q=>Q,fromReference:Q=>Q},[oC]:{transfer:og,primaries:Ke,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[Ve]:{transfer:Ne,primaries:Fe,toReference:Q=>Q.applyMatrix3(Fl),fromReference:Q=>Q.applyMatrix3(Kl)},[En]:{transfer:og,primaries:Fe,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(Fl),fromReference:Q=>Q.applyMatrix3(Kl).convertLinearToSRGB()}},hN=new Set([mQ,Ve]),PI={enabled:!0,_workingColorSpace:mQ,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!hN.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=Ka[A].toReference,C=Ka[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return Ka[Q].primaries},getTransfer:function(Q){return Q===uB?Ne:Ka[Q].transfer}};function It(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function tr(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let ko;class Zh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{ko===void 0&&(ko=Re("canvas")),ko.width=A.width,ko.height=A.height;const g=ko.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=ko}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Re("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=It(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(It(I[g]/255)*255):I[g]=It(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let cN=0;class bE{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cN++}),this.uuid=TB(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(er(C[i].image)):B.push(er(C[i]))}else B=er(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function er(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Zh.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lN=0;class Yg extends TQ{constructor(A=Yg.DEFAULT_IMAGE,I=Yg.DEFAULT_MAPPING,g=mC,C=mC,B=Ug,i=qQ,E=aB,o=ti,t=Yg.DEFAULT_ANISOTROPY,e=uB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lN++}),this.uuid=TB(),this.name="",this.source=new bE(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new rA(0,0),this.repeat=new rA(1,1),this.center=new rA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new FI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(XE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?oC:uB),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Cn)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Se:A.x=A.x-Math.floor(A.x);break;case mC:A.x=A.x<0?0:1;break;case Ge:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Se:A.y=A.y-Math.floor(A.y);break;case mC:A.y=A.y<0?0:1;break;case Ge:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return XE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oC?ei:Ue}set encoding(A){XE("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===ei?oC:uB}}Yg.DEFAULT_IMAGE=null;Yg.DEFAULT_MAPPING=Cn;Yg.DEFAULT_ANISOTROPY=1;class Ag{constructor(A=0,I=0,g=0,C=1){Ag.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],r=o[9],c=o[2],D=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-c)<.01&&Math.abs(r-D)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+c)<.1&&Math.abs(r+D)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const l=(t+1)/2,y=(n+1)/2,M=(h+1)/2,U=(e+s)/4,k=(a+c)/4,K=(r+D)/4;return l>y&&l>M?l<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(l),C=U/g,B=k/g):y>M?y<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(y),g=U/C,B=K/C):M<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(M),g=k/B,C=K/B),this.set(g,C,B,I),this}let S=Math.sqrt((D-r)*(D-r)+(a-c)*(a-c)+(s-e)*(s-e));return Math.abs(S)<.001&&(S=1),this.x=(D-r)/S,this.y=(a-c)/S,this.z=(s-e)/S,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends TQ{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Ag(0,0,A,I),this.scissorTest=!1,this.viewport=new Ag(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(XE("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===ei?oC:uB),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ug,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Yg(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new bE(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lQ extends Hy{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class on extends Yg{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Og,this.minFilter=Og,this.wrapR=mC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wN extends lQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new on(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Ph extends Yg{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Og,this.minFilter=Og,this.wrapR=mC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SN extends lQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new Ph(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class GN extends lQ{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class Lg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[i+0],n=B[i+1],r=B[i+2],c=B[i+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=r,A[I+3]=c;return}if(a!==c||o!==s||t!==n||e!==r){let D=1-E;const h=o*s+t*n+e*r+a*c,S=h>=0?1:-1,l=1-h*h;if(l>Number.EPSILON){const M=Math.sqrt(l),U=Math.atan2(M,h*S);D=Math.sin(D*U)/M,E=Math.sin(E*U)/M}const y=E*S;if(o=o*D+s*y,t=t*D+n*y,e=e*D+r*y,a=a*D+c*y,D===1-E){const M=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=M,t*=M,e*=M,a*=M}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[i],s=B[i+1],n=B[i+2],r=B[i+3];return A[I]=E*r+e*a+o*n-t*s,A[I+1]=o*r+e*s+t*a-E*n,A[I+2]=t*r+e*n+E*s-o*a,A[I+3]=e*r-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),s=o(g/2),n=o(C/2),r=o(B/2);switch(i){case"XYZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"YXZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"ZXY":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"ZYX":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"YZX":this._x=s*e*a+t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a-s*n*r;break;case"XZY":this._x=s*e*a-t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a+s*n*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(B-t)*n,this._z=(i-C)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+i)/n,this._z=(B+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(B-t)/n,this._x=(C+i)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(i-C)/n,this._x=(B+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(fg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+i*E+C*t-B*o,this._y=C*e+i*o+B*E-g*t,this._z=B*e+i*t+g*o-C*E,this._w=i*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=i*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{constructor(A=0,I=0,g=0){f.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(pl.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(pl.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,o=A.w,t=2*(i*C-E*g),e=2*(E*I-B*C),a=2*(B*g-i*I);return this.x=I+o*t+i*a-E*e,this.y=g+o*e+E*t-B*a,this.z=C+o*a+B*e-i*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*i-g*o,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ar.copy(this).projectOnVector(A),this.sub(ar)}reflect(A){return this.sub(ar.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(fg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new f,pl=new Lg;class iB{constructor(A=new f(1/0,1/0,1/0),I=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(eQ.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(eQ.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=eQ.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let i=0,E=B.count;i<E;i++)A.isMesh===!0?A.getVertexPosition(i,eQ):eQ.fromBufferAttribute(B,i),eQ.applyMatrix4(A.matrixWorld),this.expandByPoint(eQ);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),Fa.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),Fa.copy(g.boundingBox)),Fa.applyMatrix4(A.matrixWorld),this.union(Fa)}const C=A.children;for(let B=0,i=C.length;B<i;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,eQ),eQ.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Yt),pa.subVectors(this.max,Yt),Mo.subVectors(A.a,Yt),Uo.subVectors(A.b,Yt),No.subVectors(A.c,Yt),Fi.subVectors(Uo,Mo),pi.subVectors(No,Uo),SE.subVectors(Mo,No);let I=[0,-Fi.z,Fi.y,0,-pi.z,pi.y,0,-SE.z,SE.y,Fi.z,0,-Fi.x,pi.z,0,-pi.x,SE.z,0,-SE.x,-Fi.y,Fi.x,0,-pi.y,pi.x,0,-SE.y,SE.x,0];return!sr(I,Mo,Uo,No,pa)||(I=[1,0,0,0,1,0,0,0,1],!sr(I,Mo,Uo,No,pa))?!1:(da.crossVectors(Fi,pi),I=[da.x,da.y,da.z],sr(I,Mo,Uo,No,pa))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,eQ).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(eQ).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(WQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),WQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),WQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),WQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),WQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),WQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),WQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),WQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(WQ),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const WQ=[new f,new f,new f,new f,new f,new f,new f,new f],eQ=new f,Fa=new iB,Mo=new f,Uo=new f,No=new f,Fi=new f,pi=new f,SE=new f,Yt=new f,pa=new f,da=new f,GE=new f;function sr(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){GE.fromArray(Q,B);const E=C.x*Math.abs(GE.x)+C.y*Math.abs(GE.y)+C.z*Math.abs(GE.z),o=A.dot(GE),t=I.dot(GE),e=g.dot(GE);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const yN=new iB,Lt=new f,nr=new f;class xC{constructor(A=new f,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):yN.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Lt.subVectors(A,this.center);const I=Lt.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(Lt,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(nr.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Lt.copy(A.center).add(nr)),this.expandByPoint(Lt.copy(A.center).sub(nr))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jQ=new f,rr=new f,Ra=new f,di=new f,Dr=new f,Ja=new f,hr=new f;class to{constructor(A=new f,I=new f(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,jQ)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=jQ.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(jQ.copy(this.origin).addScaledVector(this.direction,I),jQ.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){rr.copy(A).add(I).multiplyScalar(.5),Ra.copy(I).sub(A).normalize(),di.copy(this.origin).sub(rr);const B=A.distanceTo(I)*.5,i=-this.direction.dot(Ra),E=di.dot(this.direction),o=-di.dot(Ra),t=di.lengthSq(),e=Math.abs(1-i*i);let a,s,n,r;if(e>0)if(a=i*o-E,s=i*E-o,r=B*e,a>=0)if(s>=-r)if(s<=r){const c=1/e;a*=c,s*=c,n=a*(a+i*s+2*E)+s*(i*a+s+2*o)+t}else s=B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-r?(a=Math.max(0,-(-i*B+E)),s=a>0?-B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t):s<=r?(a=0,s=Math.min(Math.max(-B,-o),B),n=s*(s+2*o)+t):(a=Math.max(0,-(i*B+E)),s=a>0?B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t);else s=i>0?-B:B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(rr).addScaledVector(Ra,s),n}intersectSphere(A,I){jQ.subVectors(A.center,this.origin);const g=jQ.dot(this.direction),C=jQ.dot(jQ)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,o=g+i;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,i=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,i=(A.min.y-s.y)*e),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,jQ)!==null}intersectTriangle(A,I,g,C,B){Dr.subVectors(I,A),Ja.subVectors(g,A),hr.crossVectors(Dr,Ja);let i=this.direction.dot(hr),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;di.subVectors(this.origin,A);const o=E*this.direction.dot(Ja.crossVectors(di,Ja));if(o<0)return null;const t=E*this.direction.dot(Dr.cross(di));if(t<0||o+t>i)return null;const e=-E*di.dot(hr);return e<0?null:this.at(e/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class aI{constructor(A,I,g,C,B,i,E,o,t,e,a,s,n,r,c,D){aI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t,e,a,s,n,r,c,D)}set(A,I,g,C,B,i,E,o,t,e,a,s,n,r,c,D){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=i,h[9]=E,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=r,h[11]=c,h[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/Ko.setFromMatrixColumn(A,0).length(),B=1/Ko.setFromMatrixColumn(A,1).length(),i=1/Ko.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=i*e,n=i*a,r=E*e,c=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+r*t,I[5]=s-c*t,I[9]=-E*o,I[2]=c-s*t,I[6]=r+n*t,I[10]=i*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,r=t*e,c=t*a;I[0]=s+c*E,I[4]=r*E-n,I[8]=i*t,I[1]=i*a,I[5]=i*e,I[9]=-E,I[2]=n*E-r,I[6]=c+s*E,I[10]=i*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,r=t*e,c=t*a;I[0]=s-c*E,I[4]=-i*a,I[8]=r+n*E,I[1]=n+r*E,I[5]=i*e,I[9]=c-s*E,I[2]=-i*t,I[6]=E,I[10]=i*o}else if(A.order==="ZYX"){const s=i*e,n=i*a,r=E*e,c=E*a;I[0]=o*e,I[4]=r*t-n,I[8]=s*t+c,I[1]=o*a,I[5]=c*t+s,I[9]=n*t-r,I[2]=-t,I[6]=E*o,I[10]=i*o}else if(A.order==="YZX"){const s=i*o,n=i*t,r=E*o,c=E*t;I[0]=o*e,I[4]=c-s*a,I[8]=r*a+n,I[1]=a,I[5]=i*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+r,I[10]=s-c*a}else if(A.order==="XZY"){const s=i*o,n=i*t,r=E*o,c=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+c,I[5]=i*e,I[9]=n*a-r,I[2]=r*a-n,I[6]=E*e,I[10]=c*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(kN,A,MN)}lookAt(A,I,g){const C=this.elements;return dB.subVectors(A,I),dB.lengthSq()===0&&(dB.z=1),dB.normalize(),Ri.crossVectors(g,dB),Ri.lengthSq()===0&&(Math.abs(g.z)===1?dB.x+=1e-4:dB.z+=1e-4,dB.normalize(),Ri.crossVectors(g,dB)),Ri.normalize(),qa.crossVectors(dB,Ri),C[0]=Ri.x,C[4]=qa.x,C[8]=dB.x,C[1]=Ri.y,C[5]=qa.y,C[9]=dB.y,C[2]=Ri.z,C[6]=qa.z,C[10]=dB.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],r=g[2],c=g[6],D=g[10],h=g[14],S=g[3],l=g[7],y=g[11],M=g[15],U=C[0],k=C[4],K=C[8],u=C[12],G=C[1],N=C[5],T=C[9],v=C[13],m=C[2],j=C[6],_=C[10],V=C[14],AA=C[3],IA=C[7],oA=C[11],eA=C[15];return B[0]=i*U+E*G+o*m+t*AA,B[4]=i*k+E*N+o*j+t*IA,B[8]=i*K+E*T+o*_+t*oA,B[12]=i*u+E*v+o*V+t*eA,B[1]=e*U+a*G+s*m+n*AA,B[5]=e*k+a*N+s*j+n*IA,B[9]=e*K+a*T+s*_+n*oA,B[13]=e*u+a*v+s*V+n*eA,B[2]=r*U+c*G+D*m+h*AA,B[6]=r*k+c*N+D*j+h*IA,B[10]=r*K+c*T+D*_+h*oA,B[14]=r*u+c*v+D*V+h*eA,B[3]=S*U+l*G+y*m+M*AA,B[7]=S*k+l*N+y*j+M*IA,B[11]=S*K+l*T+y*_+M*oA,B[15]=S*u+l*v+y*V+M*eA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],r=A[3],c=A[7],D=A[11],h=A[15];return r*(+B*o*a-C*t*a-B*E*s+g*t*s+C*E*n-g*o*n)+c*(+I*o*n-I*t*s+B*i*s-C*i*n+C*t*e-B*o*e)+D*(+I*t*a-I*E*n-B*i*a+g*i*n+B*E*e-g*t*e)+h*(-C*E*e-I*o*a+I*E*s+C*i*a-g*i*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],r=A[12],c=A[13],D=A[14],h=A[15],S=a*D*t-c*s*t+c*o*n-E*D*n-a*o*h+E*s*h,l=r*s*t-e*D*t-r*o*n+i*D*n+e*o*h-i*s*h,y=e*c*t-r*a*t+r*E*n-i*c*n-e*E*h+i*a*h,M=r*a*o-e*c*o-r*E*s+i*c*s+e*E*D-i*a*D,U=I*S+g*l+C*y+B*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return A[0]=S*k,A[1]=(c*s*B-a*D*B-c*C*n+g*D*n+a*C*h-g*s*h)*k,A[2]=(E*D*B-c*o*B+c*C*t-g*D*t-E*C*h+g*o*h)*k,A[3]=(a*o*B-E*s*B-a*C*t+g*s*t+E*C*n-g*o*n)*k,A[4]=l*k,A[5]=(e*D*B-r*s*B+r*C*n-I*D*n-e*C*h+I*s*h)*k,A[6]=(r*o*B-i*D*B-r*C*t+I*D*t+i*C*h-I*o*h)*k,A[7]=(i*s*B-e*o*B+e*C*t-I*s*t-i*C*n+I*o*n)*k,A[8]=y*k,A[9]=(r*a*B-e*c*B-r*g*n+I*c*n+e*g*h-I*a*h)*k,A[10]=(i*c*B-r*E*B+r*g*t-I*c*t-i*g*h+I*E*h)*k,A[11]=(e*E*B-i*a*B-e*g*t+I*a*t+i*g*n-I*E*n)*k,A[12]=M*k,A[13]=(e*c*C-r*a*C+r*g*s-I*c*s-e*g*D+I*a*D)*k,A[14]=(r*E*C-i*c*C-r*g*o+I*c*o+i*g*D-I*E*D)*k,A[15]=(i*a*C-e*E*C+e*g*o-I*a*o-i*g*s+I*E*s)*k,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,o=A.z,t=B*i,e=B*E;return this.set(t*i+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*i,0,t*o-C*E,e*o+C*i,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,o=I._w,t=B+B,e=i+i,a=E+E,s=B*t,n=B*e,r=B*a,c=i*e,D=i*a,h=E*a,S=o*t,l=o*e,y=o*a,M=g.x,U=g.y,k=g.z;return C[0]=(1-(c+h))*M,C[1]=(n+y)*M,C[2]=(r-l)*M,C[3]=0,C[4]=(n-y)*U,C[5]=(1-(s+h))*U,C[6]=(D+S)*U,C[7]=0,C[8]=(r+l)*k,C[9]=(D-S)*k,C[10]=(1-(s+c))*k,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=Ko.set(C[0],C[1],C[2]).length();const i=Ko.set(C[4],C[5],C[6]).length(),E=Ko.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],aQ.copy(this);const t=1/B,e=1/i,a=1/E;return aQ.elements[0]*=t,aQ.elements[1]*=t,aQ.elements[2]*=t,aQ.elements[4]*=e,aQ.elements[5]*=e,aQ.elements[6]*=e,aQ.elements[8]*=a,aQ.elements[9]*=a,aQ.elements[10]*=a,I.setFromRotationMatrix(aQ),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i,E=fQ){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,r;if(E===fQ)n=-(i+B)/(i-B),r=-2*i*B/(i-B);else if(E===de)n=-i/(i-B),r=-i*B/(i-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,i,E=fQ){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(i-B),s=(I+A)*t,n=(g+C)*e;let r,c;if(E===fQ)r=(i+B)*a,c=-2*a;else if(E===de)r=B*a,c=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=c,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const Ko=new f,aQ=new aI,kN=new f(0,0,0),MN=new f(1,1,1),Ri=new f,qa=new f,dB=new f,dl=new aI,Rl=new Lg;class eo{constructor(A=0,I=0,g=0,C=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(fg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-fg(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(fg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-fg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(fg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-fg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return dl.makeRotationFromQuaternion(A),this.setFromRotationMatrix(dl,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class tn{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let UN=0;const Jl=new f,Fo=new Lg,VQ=new aI,fa=new f,Ht=new f,NN=new f,KN=new Lg,ql=new f(1,0,0),fl=new f(0,1,0),ul=new f(0,0,1),FN={type:"added"},pN={type:"removed"};class bI extends TQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UN++}),this.uuid=TB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bI.DEFAULT_UP.clone();const A=new f,I=new eo,g=new Lg,C=new f(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new aI},normalMatrix:{value:new FI}}),this.matrix=new aI,this.matrixWorld=new aI,this.matrixAutoUpdate=bI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return Fo.setFromAxisAngle(A,I),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(A,I){return Fo.setFromAxisAngle(A,I),this.quaternion.premultiply(Fo),this}rotateX(A){return this.rotateOnAxis(ql,A)}rotateY(A){return this.rotateOnAxis(fl,A)}rotateZ(A){return this.rotateOnAxis(ul,A)}translateOnAxis(A,I){return Jl.copy(A).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(ql,A)}translateY(A){return this.translateOnAxis(fl,A)}translateZ(A){return this.translateOnAxis(ul,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(VQ.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?fa.copy(A):fa.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),Ht.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?VQ.lookAt(Ht,fa,this.up):VQ.lookAt(fa,Ht,this.up),this.quaternion.setFromRotationMatrix(VQ),C&&(VQ.extractRotation(C.matrixWorld),Fo.setFromRotationMatrix(VQ),this.quaternion.premultiply(Fo.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(FN)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(pN)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),VQ.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),VQ.multiply(A.parent.matrixWorld)),A.applyMatrix4(VQ),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,i=C.length;B<i;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ht,A,NN),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ht,KN,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=i(A.geometries),o=i(A.materials),t=i(A.textures),e=i(A.images),a=i(A.shapes),s=i(A.skeletons),n=i(A.animations),r=i(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),r.length>0&&(g.nodes=r)}return g.object=C,g;function i(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}bI.DEFAULT_UP=new f(0,1,0);bI.DEFAULT_MATRIX_AUTO_UPDATE=!0;bI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sQ=new f,XQ=new f,cr=new f,zQ=new f,po=new f,Ro=new f,Yl=new f,lr=new f,wr=new f,Sr=new f;class YB{constructor(A=new f,I=new f,g=new f){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),sQ.subVectors(A,I),C.cross(sQ);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){sQ.subVectors(C,I),XQ.subVectors(g,I),cr.subVectors(A,I);const i=sQ.dot(sQ),E=sQ.dot(XQ),o=sQ.dot(cr),t=XQ.dot(XQ),e=XQ.dot(cr),a=i*t-E*E;if(a===0)return B.set(0,0,0),null;const s=1/a,n=(t*o-E*e)*s,r=(i*e-E*o)*s;return B.set(1-n-r,r,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,zQ)===null?!1:zQ.x>=0&&zQ.y>=0&&zQ.x+zQ.y<=1}static getInterpolation(A,I,g,C,B,i,E,o){return this.getBarycoord(A,I,g,C,zQ)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,zQ.x),o.addScaledVector(i,zQ.y),o.addScaledVector(E,zQ.z),o)}static isFrontFacing(A,I,g,C){return sQ.subVectors(g,I),XQ.subVectors(A,I),sQ.cross(XQ).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return sQ.subVectors(this.c,this.b),XQ.subVectors(this.a,this.b),sQ.cross(XQ).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return YB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return YB.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return YB.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return YB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return YB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;po.subVectors(C,g),Ro.subVectors(B,g),lr.subVectors(A,g);const o=po.dot(lr),t=Ro.dot(lr);if(o<=0&&t<=0)return I.copy(g);wr.subVectors(A,C);const e=po.dot(wr),a=Ro.dot(wr);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return i=o/(o-e),I.copy(g).addScaledVector(po,i);Sr.subVectors(A,B);const n=po.dot(Sr),r=Ro.dot(Sr);if(r>=0&&n<=r)return I.copy(B);const c=n*t-o*r;if(c<=0&&t>=0&&r<=0)return E=t/(t-r),I.copy(g).addScaledVector(Ro,E);const D=e*r-n*a;if(D<=0&&a-e>=0&&n-r>=0)return Yl.subVectors(B,C),E=(a-e)/(a-e+(n-r)),I.copy(C).addScaledVector(Yl,E);const h=1/(D+c+s);return i=c*h,E=s*h,I.copy(g).addScaledVector(po,i).addScaledVector(Ro,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const my={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Gr(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class TA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=oC){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,PI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=PI.workingColorSpace){return this.r=A,this.g=I,this.b=g,PI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=PI.workingColorSpace){if(A=vh(A,1),I=fg(I,0,1),g=fg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=Gr(i,B,A+1/3),this.g=Gr(i,B,A),this.b=Gr(i,B,A-1/3)}return PI.toWorkingColorSpace(this,C),this}setStyle(A,I=oC){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=oC){const g=my[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=It(A.r),this.g=It(A.g),this.b=It(A.b),this}copyLinearToSRGB(A){return this.r=tr(A.r),this.g=tr(A.g),this.b=tr(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=oC){return PI.fromWorkingColorSpace(YC.copy(this),A),Math.round(fg(YC.r*255,0,255))*65536+Math.round(fg(YC.g*255,0,255))*256+Math.round(fg(YC.b*255,0,255))}getHexString(A=oC){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=PI.workingColorSpace){PI.fromWorkingColorSpace(YC.copy(this),I);const g=YC.r,C=YC.g,B=YC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+i)/2;if(E===i)o=0,t=0;else{const a=i-E;switch(t=e<=.5?a/(i+E):a/(2-i-E),i){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=PI.workingColorSpace){return PI.fromWorkingColorSpace(YC.copy(this),I),A.r=YC.r,A.g=YC.g,A.b=YC.b,A}getStyle(A=oC){PI.fromWorkingColorSpace(YC.copy(this),A);const I=YC.r,g=YC.g,C=YC.b;return A!==oC?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(Ji),this.setHSL(Ji.h+A,Ji.s+I,Ji.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Ji),A.getHSL(ua);const g=Qe(Ji.h,ua.h,I),C=Qe(Ji.s,ua.s,I),B=Qe(Ji.l,ua.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const YC=new TA;TA.NAMES=my;let dN=0;class OC extends TQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dN++}),this.uuid=TB(),this.name="",this.type="Material",this.blending=jE,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ms,this.blendDst=Ts,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new TA(0,0,0),this.blendAlpha=0,this.depthFunc=ce,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=OD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fE,this.stencilZFail=fE,this.stencilZPass=fE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==jE&&(g.blending=this.blending),this.side!==ni&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==ms&&(g.blendSrc=this.blendSrc),this.blendDst!==Ts&&(g.blendDst=this.blendDst),this.blendEquation!==Hi&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==ce&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==OD&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fE&&(g.stencilFail=this.stencilFail),this.stencilZFail!==fE&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==fE&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const o=B[E];delete o.metadata,i.push(o)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class CE extends OC{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new TA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=je,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Bi=RN();function RN(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,B[o]=t|e}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)i[o]=o<<23;i[31]=1199570944,i[32]=2147483648;for(let o=33;o<63;++o)i[o]=2147483648+(o-32<<23);i[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(E[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function eB(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=fg(Q,-65504,65504),Bi.floatView[0]=Q;const A=Bi.uint32View[0],I=A>>23&511;return Bi.baseTable[I]+((A&8388607)>>Bi.shiftTable[I])}function jt(Q){const A=Q>>10;return Bi.uint32View[0]=Bi.mantissaTable[Bi.offsetTable[A]+(Q&1023)]+Bi.exponentTable[A],Bi.floatView[0]}const JN={toHalfFloat:eB,fromHalfFloat:jt},Xg=new f,Ya=new rA;class Ig{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=pe,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=XB,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return XE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)Ya.fromBufferAttribute(this,I),Ya.applyMatrix3(A),this.setXY(I,Ya.x,Ya.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Xg.fromBufferAttribute(this,I),Xg.applyMatrix3(A),this.setXYZ(I,Xg.x,Xg.y,Xg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Xg.fromBufferAttribute(this,I),Xg.applyMatrix4(A),this.setXYZ(I,Xg.x,Xg.y,Xg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Xg.fromBufferAttribute(this,I),Xg.applyNormalMatrix(A),this.setXYZ(I,Xg.x,Xg.y,Xg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Xg.fromBufferAttribute(this,I),Xg.transformDirection(A),this.setXYZ(I,Xg.x,Xg.y,Xg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=BB(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=NI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=BB(I,this.array)),I}setX(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=BB(I,this.array)),I}setY(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=BB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=BB(I,this.array)),I}setW(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array),B=NI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==pe&&(A.usage=this.usage),A}}class qN extends Ig{constructor(A,I,g){super(new Int8Array(A),I,g)}}class fN extends Ig{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class uN extends Ig{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class YN extends Ig{constructor(A,I,g){super(new Int16Array(A),I,g)}}class Wh extends Ig{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class LN extends Ig{constructor(A,I,g){super(new Int32Array(A),I,g)}}class jh extends Ig{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class HN extends Ig{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=jt(this.array[A*this.itemSize]);return this.normalized&&(I=BB(I,this.array)),I}setX(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize]=eB(I),this}getY(A){let I=jt(this.array[A*this.itemSize+1]);return this.normalized&&(I=BB(I,this.array)),I}setY(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+1]=eB(I),this}getZ(A){let I=jt(this.array[A*this.itemSize+2]);return this.normalized&&(I=BB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+2]=eB(I),this}getW(A){let I=jt(this.array[A*this.itemSize+3]);return this.normalized&&(I=BB(I,this.array)),I}setW(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+3]=eB(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array)),this.array[A+0]=eB(I),this.array[A+1]=eB(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array)),this.array[A+0]=eB(I),this.array[A+1]=eB(g),this.array[A+2]=eB(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array),B=NI(B,this.array)),this.array[A+0]=eB(I),this.array[A+1]=eB(g),this.array[A+2]=eB(C),this.array[A+3]=eB(B),this}}class VA extends Ig{constructor(A,I,g){super(new Float32Array(A),I,g)}}class mN extends Ig{constructor(A,I,g){super(new Float64Array(A),I,g)}}let TN=0;const WB=new aI,yr=new bI,Jo=new f,RB=new iB,mt=new iB,cC=new f;class dI extends TQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TN++}),this.uuid=TB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Yy(A)?jh:Wh)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new FI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return WB.makeRotationFromQuaternion(A),this.applyMatrix4(WB),this}rotateX(A){return WB.makeRotationX(A),this.applyMatrix4(WB),this}rotateY(A){return WB.makeRotationY(A),this.applyMatrix4(WB),this}rotateZ(A){return WB.makeRotationZ(A),this.applyMatrix4(WB),this}translate(A,I,g){return WB.makeTranslation(A,I,g),this.applyMatrix4(WB),this}scale(A,I,g){return WB.makeScale(A,I,g),this.applyMatrix4(WB),this}lookAt(A){return yr.lookAt(A),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new VA(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new iB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];RB.setFromBufferAttribute(B),this.morphTargetsRelative?(cC.addVectors(this.boundingBox.min,RB.min),this.boundingBox.expandByPoint(cC),cC.addVectors(this.boundingBox.max,RB.max),this.boundingBox.expandByPoint(cC)):(this.boundingBox.expandByPoint(RB.min),this.boundingBox.expandByPoint(RB.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new f,1/0);return}if(A){const g=this.boundingSphere.center;if(RB.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];mt.setFromBufferAttribute(E),this.morphTargetsRelative?(cC.addVectors(RB.min,mt.min),RB.expandByPoint(cC),cC.addVectors(RB.max,mt.max),RB.expandByPoint(cC)):(RB.expandByPoint(mt.min),RB.expandByPoint(mt.max))}RB.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)cC.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(cC));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)cC.fromBufferAttribute(E,t),o&&(Jo.fromBufferAttribute(A,t),cC.add(Jo)),C=Math.max(C,g.distanceToSquared(cC))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ig(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let G=0;G<E;G++)t[G]=new f,e[G]=new f;const a=new f,s=new f,n=new f,r=new rA,c=new rA,D=new rA,h=new f,S=new f;function l(G,N,T){a.fromArray(C,G*3),s.fromArray(C,N*3),n.fromArray(C,T*3),r.fromArray(i,G*2),c.fromArray(i,N*2),D.fromArray(i,T*2),s.sub(a),n.sub(a),c.sub(r),D.sub(r);const v=1/(c.x*D.y-D.x*c.y);isFinite(v)&&(h.copy(s).multiplyScalar(D.y).addScaledVector(n,-c.y).multiplyScalar(v),S.copy(n).multiplyScalar(c.x).addScaledVector(s,-D.x).multiplyScalar(v),t[G].add(h),t[N].add(h),t[T].add(h),e[G].add(S),e[N].add(S),e[T].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:g.length}]);for(let G=0,N=y.length;G<N;++G){const T=y[G],v=T.start,m=T.count;for(let j=v,_=v+m;j<_;j+=3)l(g[j+0],g[j+1],g[j+2])}const M=new f,U=new f,k=new f,K=new f;function u(G){k.fromArray(B,G*3),K.copy(k);const N=t[G];M.copy(N),M.sub(k.multiplyScalar(k.dot(N))).normalize(),U.crossVectors(K,N);const v=U.dot(e[G])<0?-1:1;o[G*4]=M.x,o[G*4+1]=M.y,o[G*4+2]=M.z,o[G*4+3]=v}for(let G=0,N=y.length;G<N;++G){const T=y[G],v=T.start,m=T.count;for(let j=v,_=v+m;j<_;j+=3)u(g[j+0]),u(g[j+1]),u(g[j+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Ig(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new f,B=new f,i=new f,E=new f,o=new f,t=new f,e=new f,a=new f;if(A)for(let s=0,n=A.count;s<n;s+=3){const r=A.getX(s+0),c=A.getX(s+1),D=A.getX(s+2);C.fromBufferAttribute(I,r),B.fromBufferAttribute(I,c),i.fromBufferAttribute(I,D),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,r),o.fromBufferAttribute(g,c),t.fromBufferAttribute(g,D),E.add(e),o.add(e),t.add(e),g.setXYZ(r,E.x,E.y,E.z),g.setXYZ(c,o.x,o.y,o.z),g.setXYZ(D,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),i.fromBufferAttribute(I,s+2),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)cC.fromBufferAttribute(A,I),cC.normalize(),A.setXYZ(I,cC.x,cC.y,cC.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,r=0;for(let c=0,D=o.length;c<D;c++){E.isInterleavedBufferAttribute?n=o[c]*E.data.stride+E.offset:n=o[c]*e;for(let h=0;h<e;h++)s[r++]=t[n++]}return new Ig(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new dI,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,o=i.length;E<o;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,e=i.length;t<e;t++){const a=i[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new aI,yE=new to,La=new xC,Hl=new f,qo=new f,fo=new f,uo=new f,kr=new f,Ha=new f,ma=new rA,Ta=new rA,ba=new rA,ml=new f,Tl=new f,bl=new f,xa=new f,_a=new f;class vg extends bI{constructor(A=new dI,I=new CE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){Ha.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(kr.fromBufferAttribute(a,A),i?Ha.addScaledVector(kr,e):Ha.addScaledVector(kr.sub(I),e))}I.add(Ha)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),La.copy(g.boundingSphere),La.applyMatrix4(B),yE.copy(A.ray).recast(A.near),!(La.containsPoint(yE.origin)===!1&&(yE.intersectSphere(La,Hl)===null||yE.origin.distanceToSquared(Hl)>(A.far-A.near)**2))&&(Ll.copy(B).invert(),yE.copy(A.ray).applyMatrix4(Ll),!(g.boundingBox!==null&&yE.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,yE)))}_computeIntersections(A,I,g){let C;const B=this.geometry,i=this.material,E=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(i))for(let r=0,c=s.length;r<c;r++){const D=s[r],h=i[D.materialIndex],S=Math.max(D.start,n.start),l=Math.min(E.count,Math.min(D.start+D.count,n.start+n.count));for(let y=S,M=l;y<M;y+=3){const U=E.getX(y),k=E.getX(y+1),K=E.getX(y+2);C=Oa(this,h,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=D.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(E.count,n.start+n.count);for(let D=r,h=c;D<h;D+=3){const S=E.getX(D),l=E.getX(D+1),y=E.getX(D+2);C=Oa(this,i,A,g,t,e,a,S,l,y),C&&(C.faceIndex=Math.floor(D/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(i))for(let r=0,c=s.length;r<c;r++){const D=s[r],h=i[D.materialIndex],S=Math.max(D.start,n.start),l=Math.min(o.count,Math.min(D.start+D.count,n.start+n.count));for(let y=S,M=l;y<M;y+=3){const U=y,k=y+1,K=y+2;C=Oa(this,h,A,g,t,e,a,U,k,K),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=D.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(o.count,n.start+n.count);for(let D=r,h=c;D<h;D+=3){const S=D,l=D+1,y=D+2;C=Oa(this,i,A,g,t,e,a,S,l,y),C&&(C.faceIndex=Math.floor(D/3),I.push(C))}}}}function bN(Q,A,I,g,C,B,i,E){let o;if(A.side===QB?o=g.intersectTriangle(i,B,C,!0,E):o=g.intersectTriangle(C,B,i,A.side===ni,E),o===null)return null;_a.copy(E),_a.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(_a);return t<I.near||t>I.far?null:{distance:t,point:_a.clone(),object:Q}}function Oa(Q,A,I,g,C,B,i,E,o,t){Q.getVertexPosition(E,qo),Q.getVertexPosition(o,fo),Q.getVertexPosition(t,uo);const e=bN(Q,A,I,g,qo,fo,uo,xa);if(e){C&&(ma.fromBufferAttribute(C,E),Ta.fromBufferAttribute(C,o),ba.fromBufferAttribute(C,t),e.uv=YB.getInterpolation(xa,qo,fo,uo,ma,Ta,ba,new rA)),B&&(ma.fromBufferAttribute(B,E),Ta.fromBufferAttribute(B,o),ba.fromBufferAttribute(B,t),e.uv1=YB.getInterpolation(xa,qo,fo,uo,ma,Ta,ba,new rA),e.uv2=e.uv1),i&&(ml.fromBufferAttribute(i,E),Tl.fromBufferAttribute(i,o),bl.fromBufferAttribute(i,t),e.normal=YB.getInterpolation(xa,qo,fo,uo,ml,Tl,bl,new f),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:o,c:t,normal:new f,materialIndex:0};YB.getNormal(qo,fo,uo,a.normal),e.face=a}return e}class ao extends dI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const o=[],t=[],e=[],a=[];let s=0,n=0;r("z","y","x",-1,-1,g,I,A,i,B,0),r("z","y","x",1,-1,g,I,-A,i,B,1),r("x","z","y",1,1,A,g,I,C,i,2),r("x","z","y",1,-1,A,g,-I,C,i,3),r("x","y","z",1,-1,A,I,g,C,B,4),r("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new VA(t,3)),this.setAttribute("normal",new VA(e,3)),this.setAttribute("uv",new VA(a,2));function r(c,D,h,S,l,y,M,U,k,K,u){const G=y/k,N=M/K,T=y/2,v=M/2,m=U/2,j=k+1,_=K+1;let V=0,AA=0;const IA=new f;for(let oA=0;oA<_;oA++){const eA=oA*N-v;for(let NA=0;NA<j;NA++){const jA=NA*G-T;IA[c]=jA*S,IA[D]=eA*l,IA[h]=m,t.push(IA.x,IA.y,IA.z),IA[c]=0,IA[D]=0,IA[h]=U>0?1:-1,e.push(IA.x,IA.y,IA.z),a.push(NA/k),a.push(1-oA/K),V+=1}}for(let oA=0;oA<K;oA++)for(let eA=0;eA<k;eA++){const NA=s+eA+j*oA,jA=s+eA+j*(oA+1),QA=s+(eA+1)+j*(oA+1),wA=s+(eA+1)+j*oA;o.push(NA,jA,wA),o.push(jA,QA,wA),AA+=6}E.addGroup(n,AA,u),n+=AA,s+=V}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ao(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function st(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function IB(Q){const A={};for(let I=0;I<Q.length;I++){const g=st(Q[I]);for(const C in g)A[C]=g[C]}return A}function xN(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Ty(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:PI.workingColorSpace}const by={clone:st,merge:IB};var _N=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ON=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gQ extends OC{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_N,this.fragmentShader=ON,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=st(A.uniforms),this.uniformsGroups=xN(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class en extends bI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new aI,this.projectionMatrix=new aI,this.projectionMatrixInverse=new aI,this.coordinateSystem=fQ}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new f,xl=new rA,_l=new rA;class SC extends en{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=at*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(VE*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return at*2*Math.atan(Math.tan(VE*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(qi.x,qi.y).multiplyScalar(-A/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(qi.x,qi.y).multiplyScalar(-A/qi.z)}getViewSize(A,I){return this.getViewBounds(A,xl,_l),I.subVectors(_l,xl)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(VE*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const o=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/o,I-=i.offsetY*g/t,C*=i.width/o,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const Yo=-90,Lo=1;class xy extends bI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new SC(Yo,Lo,A,I);C.layers=this.layers,this.add(C);const B=new SC(Yo,Lo,A,I);B.layers=this.layers,this.add(B);const i=new SC(Yo,Lo,A,I);i.layers=this.layers,this.add(i);const E=new SC(Yo,Lo,A,I);E.layers=this.layers,this.add(E);const o=new SC(Yo,Lo,A,I);o.layers=this.layers,this.add(o);const t=new SC(Yo,Lo,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,i,E,o]=I;for(const t of I)this.remove(t);if(A===fQ)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===de)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,i,E,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,i),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class Xe extends Yg{constructor(A,I,g,C,B,i,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:ri,super(A,I,g,C,B,i,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class _y extends lQ{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(XE("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===ei?oC:uB),this.texture=new Xe(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Ug}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new ao(5,5,5),B=new gQ({name:"CubemapFromEquirect",uniforms:st(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:QB,blending:Ei});B.uniforms.tEquirect.value=I;const i=new vg(C,B),E=I.minFilter;return I.minFilter===qQ&&(I.minFilter=Ug),new xy(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const Mr=new f,vN=new f,ZN=new FI;class Ci{constructor(A=new f(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Mr.subVectors(g,I).cross(vN.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Mr),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||ZN.getNormalMatrix(A),C=this.coplanarPoint(Mr).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kE=new xC,va=new f;class ze{constructor(A=new Ci,I=new Ci,g=new Ci,C=new Ci,B=new Ci,i=new Ci){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=fQ){const g=this.planes,C=A.elements,B=C[0],i=C[1],E=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],r=C[9],c=C[10],D=C[11],h=C[12],S=C[13],l=C[14],y=C[15];if(g[0].setComponents(o-B,s-t,D-n,y-h).normalize(),g[1].setComponents(o+B,s+t,D+n,y+h).normalize(),g[2].setComponents(o+i,s+e,D+r,y+S).normalize(),g[3].setComponents(o-i,s-e,D-r,y-S).normalize(),g[4].setComponents(o-E,s-a,D-c,y-l).normalize(),I===fQ)g[5].setComponents(o+E,s+a,D+c,y+l).normalize();else if(I===de)g[5].setComponents(E,a,c,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),kE.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),kE.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(kE)}intersectsSprite(A){return kE.center.set(0,0,0),kE.radius=.7071067811865476,kE.applyMatrix4(A.matrixWorld),this.intersectsSphere(kE)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(va.x=C.normal.x>0?A.max.x:A.min.x,va.y=C.normal.y>0?A.max.y:A.min.y,va.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(va)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oy(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function PN(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,r=Q.createBuffer();Q.bindBuffer(e,r),Q.bufferData(e,a,s),t.onUploadCallback();let c;if(a instanceof Float32Array)c=Q.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)c=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=Q.UNSIGNED_SHORT;else if(a instanceof Int16Array)c=Q.SHORT;else if(a instanceof Uint32Array)c=Q.UNSIGNED_INT;else if(a instanceof Int32Array)c=Q.INT;else if(a instanceof Int8Array)c=Q.BYTE;else if(a instanceof Uint8Array)c=Q.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)c=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:r,type:c,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function B(t,e,a){const s=e.array,n=e._updateRange,r=e.updateRanges;if(Q.bindBuffer(a,t),n.count===-1&&r.length===0&&Q.bufferSubData(a,0,s),r.length!==0){for(let c=0,D=r.length;c<D;c++){const h=r[c];I?Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}e.clearUpdateRanges()}n.count!==-1&&(I?Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(Q.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");B(a.buffer,t,e),a.version=t.version}}return{get:i,remove:E,update:o}}class lt extends dI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,s=I/o,n=[],r=[],c=[],D=[];for(let h=0;h<e;h++){const S=h*s-i;for(let l=0;l<t;l++){const y=l*a-B;r.push(y,-S,0),c.push(0,0,1),D.push(l/E),D.push(1-h/o)}}for(let h=0;h<o;h++)for(let S=0;S<E;S++){const l=S+t*h,y=S+t*(h+1),M=S+1+t*(h+1),U=S+1+t*h;n.push(l,y,U),n.push(y,M,U)}this.setIndex(n),this.setAttribute("position",new VA(r,3)),this.setAttribute("normal",new VA(c,3)),this.setAttribute("uv",new VA(D,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new lt(A.width,A.height,A.widthSegments,A.heightSegments)}}var WN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jN=`#ifdef USE_ALPHAHASH
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
#endif`,VN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$N=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AK=`#ifdef USE_AOMAP
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
#endif`,IK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gK=`#ifdef USE_BATCHING
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
#endif`,CK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iK=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EK=`#ifdef USE_IRIDESCENCE
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
#endif`,oK=`#ifdef USE_BUMPMAP
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
#endif`,tK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cK=`#define PI 3.141592653589793
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
} // validated`,lK=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wK=`vec3 transformedNormal = objectNormal;
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
#endif`,SK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MK="gl_FragColor = linearToOutputTexel( gl_FragColor );",UK=`
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
}`,NK=`#ifdef USE_ENVMAP
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
#endif`,KK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FK=`#ifdef USE_ENVMAP
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
#endif`,pK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dK=`#ifdef USE_ENVMAP
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
#endif`,RK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uK=`#ifdef USE_GRADIENTMAP
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
}`,YK=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TK=`uniform bool receiveShadow;
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
#endif`,bK=`#ifdef USE_ENVMAP
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
#endif`,xK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_K=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZK=`PhysicalMaterial material;
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
#endif`,PK=`struct PhysicalMaterial {
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
}`,WK=`
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
#endif`,jK=`#if defined( RE_IndirectDiffuse )
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
#endif`,VK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$K=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BF=`#if defined( USE_POINTS_UV )
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
#endif`,QF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oF=`#ifdef USE_MORPHNORMALS
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
#endif`,tF=`#ifdef USE_MORPHTARGETS
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
#endif`,eF=`#ifdef USE_MORPHTARGETS
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
#endif`,aF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hF=`#ifdef USE_NORMALMAP
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
#endif`,cF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JF=`float getShadowMask() {
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
}`,qF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fF=`#ifdef USE_SKINNING
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
#endif`,uF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YF=`#ifdef USE_SKINNING
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
#endif`,LF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bF=`#ifdef USE_TRANSMISSION
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
#endif`,xF=`#ifdef USE_TRANSMISSION
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
#endif`,_F=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WF=`uniform sampler2D t2D;
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
}`,jF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$F=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,op=`uniform vec3 diffuse;
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define LAMBERT
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
}`,ap=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Mp=`uniform vec3 color;
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
}`,Up=`uniform float rotation;
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
}`,Np=`uniform vec3 diffuse;
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
}`,iI={alphahash_fragment:WN,alphahash_pars_fragment:jN,alphamap_fragment:VN,alphamap_pars_fragment:XN,alphatest_fragment:zN,alphatest_pars_fragment:$N,aomap_fragment:AK,aomap_pars_fragment:IK,batching_pars_vertex:gK,batching_vertex:CK,begin_vertex:BK,beginnormal_vertex:QK,bsdfs:iK,iridescence_fragment:EK,bumpmap_pars_fragment:oK,clipping_planes_fragment:tK,clipping_planes_pars_fragment:eK,clipping_planes_pars_vertex:aK,clipping_planes_vertex:sK,color_fragment:nK,color_pars_fragment:rK,color_pars_vertex:DK,color_vertex:hK,common:cK,cube_uv_reflection_fragment:lK,defaultnormal_vertex:wK,displacementmap_pars_vertex:SK,displacementmap_vertex:GK,emissivemap_fragment:yK,emissivemap_pars_fragment:kK,colorspace_fragment:MK,colorspace_pars_fragment:UK,envmap_fragment:NK,envmap_common_pars_fragment:KK,envmap_pars_fragment:FK,envmap_pars_vertex:pK,envmap_physical_pars_fragment:bK,envmap_vertex:dK,fog_vertex:RK,fog_pars_vertex:JK,fog_fragment:qK,fog_pars_fragment:fK,gradientmap_pars_fragment:uK,lightmap_fragment:YK,lightmap_pars_fragment:LK,lights_lambert_fragment:HK,lights_lambert_pars_fragment:mK,lights_pars_begin:TK,lights_toon_fragment:xK,lights_toon_pars_fragment:_K,lights_phong_fragment:OK,lights_phong_pars_fragment:vK,lights_physical_fragment:ZK,lights_physical_pars_fragment:PK,lights_fragment_begin:WK,lights_fragment_maps:jK,lights_fragment_end:VK,logdepthbuf_fragment:XK,logdepthbuf_pars_fragment:zK,logdepthbuf_pars_vertex:$K,logdepthbuf_vertex:AF,map_fragment:IF,map_pars_fragment:gF,map_particle_fragment:CF,map_particle_pars_fragment:BF,metalnessmap_fragment:QF,metalnessmap_pars_fragment:iF,morphcolor_vertex:EF,morphnormal_vertex:oF,morphtarget_pars_vertex:tF,morphtarget_vertex:eF,normal_fragment_begin:aF,normal_fragment_maps:sF,normal_pars_fragment:nF,normal_pars_vertex:rF,normal_vertex:DF,normalmap_pars_fragment:hF,clearcoat_normal_fragment_begin:cF,clearcoat_normal_fragment_maps:lF,clearcoat_pars_fragment:wF,iridescence_pars_fragment:SF,opaque_fragment:GF,packing:yF,premultiplied_alpha_fragment:kF,project_vertex:MF,dithering_fragment:UF,dithering_pars_fragment:NF,roughnessmap_fragment:KF,roughnessmap_pars_fragment:FF,shadowmap_pars_fragment:pF,shadowmap_pars_vertex:dF,shadowmap_vertex:RF,shadowmask_pars_fragment:JF,skinbase_vertex:qF,skinning_pars_vertex:fF,skinning_vertex:uF,skinnormal_vertex:YF,specularmap_fragment:LF,specularmap_pars_fragment:HF,tonemapping_fragment:mF,tonemapping_pars_fragment:TF,transmission_fragment:bF,transmission_pars_fragment:xF,uv_pars_fragment:_F,uv_pars_vertex:OF,uv_vertex:vF,worldpos_vertex:ZF,background_vert:PF,background_frag:WF,backgroundCube_vert:jF,backgroundCube_frag:VF,cube_vert:XF,cube_frag:zF,depth_vert:$F,depth_frag:Ap,distanceRGBA_vert:Ip,distanceRGBA_frag:gp,equirect_vert:Cp,equirect_frag:Bp,linedashed_vert:Qp,linedashed_frag:ip,meshbasic_vert:Ep,meshbasic_frag:op,meshlambert_vert:tp,meshlambert_frag:ep,meshmatcap_vert:ap,meshmatcap_frag:sp,meshnormal_vert:np,meshnormal_frag:rp,meshphong_vert:Dp,meshphong_frag:hp,meshphysical_vert:cp,meshphysical_frag:lp,meshtoon_vert:wp,meshtoon_frag:Sp,points_vert:Gp,points_frag:yp,shadow_vert:kp,shadow_frag:Mp,sprite_vert:Up,sprite_frag:Np},dA={common:{diffuse:{value:new TA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new FI},alphaMap:{value:null},alphaMapTransform:{value:new FI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new FI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new FI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new FI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new FI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new FI},normalScale:{value:new rA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new FI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new FI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new FI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new FI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new TA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new TA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new FI},alphaTest:{value:0},uvTransform:{value:new FI}},sprite:{diffuse:{value:new TA(16777215)},opacity:{value:1},center:{value:new rA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new FI},alphaMap:{value:null},alphaMapTransform:{value:new FI},alphaTest:{value:0}}},hQ={basic:{uniforms:IB([dA.common,dA.specularmap,dA.envmap,dA.aomap,dA.lightmap,dA.fog]),vertexShader:iI.meshbasic_vert,fragmentShader:iI.meshbasic_frag},lambert:{uniforms:IB([dA.common,dA.specularmap,dA.envmap,dA.aomap,dA.lightmap,dA.emissivemap,dA.bumpmap,dA.normalmap,dA.displacementmap,dA.fog,dA.lights,{emissive:{value:new TA(0)}}]),vertexShader:iI.meshlambert_vert,fragmentShader:iI.meshlambert_frag},phong:{uniforms:IB([dA.common,dA.specularmap,dA.envmap,dA.aomap,dA.lightmap,dA.emissivemap,dA.bumpmap,dA.normalmap,dA.displacementmap,dA.fog,dA.lights,{emissive:{value:new TA(0)},specular:{value:new TA(1118481)},shininess:{value:30}}]),vertexShader:iI.meshphong_vert,fragmentShader:iI.meshphong_frag},standard:{uniforms:IB([dA.common,dA.envmap,dA.aomap,dA.lightmap,dA.emissivemap,dA.bumpmap,dA.normalmap,dA.displacementmap,dA.roughnessmap,dA.metalnessmap,dA.fog,dA.lights,{emissive:{value:new TA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag},toon:{uniforms:IB([dA.common,dA.aomap,dA.lightmap,dA.emissivemap,dA.bumpmap,dA.normalmap,dA.displacementmap,dA.gradientmap,dA.fog,dA.lights,{emissive:{value:new TA(0)}}]),vertexShader:iI.meshtoon_vert,fragmentShader:iI.meshtoon_frag},matcap:{uniforms:IB([dA.common,dA.bumpmap,dA.normalmap,dA.displacementmap,dA.fog,{matcap:{value:null}}]),vertexShader:iI.meshmatcap_vert,fragmentShader:iI.meshmatcap_frag},points:{uniforms:IB([dA.points,dA.fog]),vertexShader:iI.points_vert,fragmentShader:iI.points_frag},dashed:{uniforms:IB([dA.common,dA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:iI.linedashed_vert,fragmentShader:iI.linedashed_frag},depth:{uniforms:IB([dA.common,dA.displacementmap]),vertexShader:iI.depth_vert,fragmentShader:iI.depth_frag},normal:{uniforms:IB([dA.common,dA.bumpmap,dA.normalmap,dA.displacementmap,{opacity:{value:1}}]),vertexShader:iI.meshnormal_vert,fragmentShader:iI.meshnormal_frag},sprite:{uniforms:IB([dA.sprite,dA.fog]),vertexShader:iI.sprite_vert,fragmentShader:iI.sprite_frag},background:{uniforms:{uvTransform:{value:new FI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:iI.background_vert,fragmentShader:iI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:iI.backgroundCube_vert,fragmentShader:iI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:iI.cube_vert,fragmentShader:iI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:iI.equirect_vert,fragmentShader:iI.equirect_frag},distanceRGBA:{uniforms:IB([dA.common,dA.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:iI.distanceRGBA_vert,fragmentShader:iI.distanceRGBA_frag},shadow:{uniforms:IB([dA.lights,dA.fog,{color:{value:new TA(0)},opacity:{value:1}}]),vertexShader:iI.shadow_vert,fragmentShader:iI.shadow_frag}};hQ.physical={uniforms:IB([hQ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new FI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new FI},clearcoatNormalScale:{value:new rA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new FI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new FI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new FI},sheen:{value:0},sheenColor:{value:new TA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new FI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new FI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new FI},transmissionSamplerSize:{value:new rA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new FI},attenuationDistance:{value:0},attenuationColor:{value:new TA(0)},specularColor:{value:new TA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new FI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new FI},anisotropyVector:{value:new rA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new FI}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag};const Za={r:0,b:0,g:0};function Kp(Q,A,I,g,C,B,i){const E=new TA(0);let o=B===!0?0:1,t,e,a=null,s=0,n=null;function r(D,h){let S=!1,l=h.isScene===!0?h.background:null;l&&l.isTexture&&(l=(h.backgroundBlurriness>0?I:A).get(l)),l===null?c(E,o):l&&l.isColor&&(c(l,1),S=!0);const y=Q.xr.getEnvironmentBlendMode();y==="additive"?g.buffers.color.setClear(0,0,0,1,i):y==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(Q.autoClear||S)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),l&&(l.isCubeTexture||l.mapping===ct)?(e===void 0&&(e=new vg(new ao(1,1,1),new gQ({name:"BackgroundCubeMaterial",uniforms:st(hQ.backgroundCube.uniforms),vertexShader:hQ.backgroundCube.vertexShader,fragmentShader:hQ.backgroundCube.fragmentShader,side:QB,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(M,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=l,e.material.uniforms.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=PI.getTransfer(l.colorSpace)!==og,(a!==l||s!==l.version||n!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),e.layers.enableAll(),D.unshift(e,e.geometry,e.material,0,0,null)):l&&l.isTexture&&(t===void 0&&(t=new vg(new lt(2,2),new gQ({name:"BackgroundMaterial",uniforms:st(hQ.background.uniforms),vertexShader:hQ.background.vertexShader,fragmentShader:hQ.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=l,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.toneMapped=PI.getTransfer(l.colorSpace)!==og,l.matrixAutoUpdate===!0&&l.updateMatrix(),t.material.uniforms.uvTransform.value.copy(l.matrix),(a!==l||s!==l.version||n!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=l,s=l.version,n=Q.toneMapping),t.layers.enableAll(),D.unshift(t,t.geometry,t.material,0,0,null))}function c(D,h){D.getRGB(Za,Ty(Q)),g.buffers.color.setClear(Za.r,Za.g,Za.b,h,i)}return{getClearColor:function(){return E},setClearColor:function(D,h=1){E.set(D),o=h,c(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,c(E,o)},render:r}}function Fp(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},o=D(null);let t=o,e=!1;function a(m,j,_,V,AA){let IA=!1;if(i){const oA=c(V,_,j);t!==oA&&(t=oA,n(t.object)),IA=h(m,V,_,AA),IA&&S(m,V,_,AA)}else{const oA=j.wireframe===!0;(t.geometry!==V.id||t.program!==_.id||t.wireframe!==oA)&&(t.geometry=V.id,t.program=_.id,t.wireframe=oA,IA=!0)}AA!==null&&I.update(AA,Q.ELEMENT_ARRAY_BUFFER),(IA||e)&&(e=!1,K(m,j,_,V),AA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(AA).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function n(m){return g.isWebGL2?Q.bindVertexArray(m):B.bindVertexArrayOES(m)}function r(m){return g.isWebGL2?Q.deleteVertexArray(m):B.deleteVertexArrayOES(m)}function c(m,j,_){const V=_.wireframe===!0;let AA=E[m.id];AA===void 0&&(AA={},E[m.id]=AA);let IA=AA[j.id];IA===void 0&&(IA={},AA[j.id]=IA);let oA=IA[V];return oA===void 0&&(oA=D(s()),IA[V]=oA),oA}function D(m){const j=[],_=[],V=[];for(let AA=0;AA<C;AA++)j[AA]=0,_[AA]=0,V[AA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:_,attributeDivisors:V,object:m,attributes:{},index:null}}function h(m,j,_,V){const AA=t.attributes,IA=j.attributes;let oA=0;const eA=_.getAttributes();for(const NA in eA)if(eA[NA].location>=0){const QA=AA[NA];let wA=IA[NA];if(wA===void 0&&(NA==="instanceMatrix"&&m.instanceMatrix&&(wA=m.instanceMatrix),NA==="instanceColor"&&m.instanceColor&&(wA=m.instanceColor)),QA===void 0||QA.attribute!==wA||wA&&QA.data!==wA.data)return!0;oA++}return t.attributesNum!==oA||t.index!==V}function S(m,j,_,V){const AA={},IA=j.attributes;let oA=0;const eA=_.getAttributes();for(const NA in eA)if(eA[NA].location>=0){let QA=IA[NA];QA===void 0&&(NA==="instanceMatrix"&&m.instanceMatrix&&(QA=m.instanceMatrix),NA==="instanceColor"&&m.instanceColor&&(QA=m.instanceColor));const wA={};wA.attribute=QA,QA&&QA.data&&(wA.data=QA.data),AA[NA]=wA,oA++}t.attributes=AA,t.attributesNum=oA,t.index=V}function l(){const m=t.newAttributes;for(let j=0,_=m.length;j<_;j++)m[j]=0}function y(m){M(m,0)}function M(m,j){const _=t.newAttributes,V=t.enabledAttributes,AA=t.attributeDivisors;_[m]=1,V[m]===0&&(Q.enableVertexAttribArray(m),V[m]=1),AA[m]!==j&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](m,j),AA[m]=j)}function U(){const m=t.newAttributes,j=t.enabledAttributes;for(let _=0,V=j.length;_<V;_++)j[_]!==m[_]&&(Q.disableVertexAttribArray(_),j[_]=0)}function k(m,j,_,V,AA,IA,oA){oA===!0?Q.vertexAttribIPointer(m,j,_,AA,IA):Q.vertexAttribPointer(m,j,_,V,AA,IA)}function K(m,j,_,V){if(g.isWebGL2===!1&&(m.isInstancedMesh||V.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;l();const AA=V.attributes,IA=_.getAttributes(),oA=j.defaultAttributeValues;for(const eA in IA){const NA=IA[eA];if(NA.location>=0){let jA=AA[eA];if(jA===void 0&&(eA==="instanceMatrix"&&m.instanceMatrix&&(jA=m.instanceMatrix),eA==="instanceColor"&&m.instanceColor&&(jA=m.instanceColor)),jA!==void 0){const QA=jA.normalized,wA=jA.itemSize,HA=I.get(jA);if(HA===void 0)continue;const FA=HA.buffer,aA=HA.type,bA=HA.bytesPerElement,pA=g.isWebGL2===!0&&(aA===Q.INT||aA===Q.UNSIGNED_INT||jA.gpuType===Yh);if(jA.isInterleavedBufferAttribute){const RA=jA.data,L=RA.stride,lA=jA.offset;if(RA.isInstancedInterleavedBuffer){for(let sA=0;sA<NA.locationSize;sA++)M(NA.location+sA,RA.meshPerAttribute);m.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=RA.meshPerAttribute*RA.count)}else for(let sA=0;sA<NA.locationSize;sA++)y(NA.location+sA);Q.bindBuffer(Q.ARRAY_BUFFER,FA);for(let sA=0;sA<NA.locationSize;sA++)k(NA.location+sA,wA/NA.locationSize,aA,QA,L*bA,(lA+wA/NA.locationSize*sA)*bA,pA)}else{if(jA.isInstancedBufferAttribute){for(let RA=0;RA<NA.locationSize;RA++)M(NA.location+RA,jA.meshPerAttribute);m.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=jA.meshPerAttribute*jA.count)}else for(let RA=0;RA<NA.locationSize;RA++)y(NA.location+RA);Q.bindBuffer(Q.ARRAY_BUFFER,FA);for(let RA=0;RA<NA.locationSize;RA++)k(NA.location+RA,wA/NA.locationSize,aA,QA,wA*bA,wA/NA.locationSize*RA*bA,pA)}}else if(oA!==void 0){const QA=oA[eA];if(QA!==void 0)switch(QA.length){case 2:Q.vertexAttrib2fv(NA.location,QA);break;case 3:Q.vertexAttrib3fv(NA.location,QA);break;case 4:Q.vertexAttrib4fv(NA.location,QA);break;default:Q.vertexAttrib1fv(NA.location,QA)}}}}U()}function u(){T();for(const m in E){const j=E[m];for(const _ in j){const V=j[_];for(const AA in V)r(V[AA].object),delete V[AA];delete j[_]}delete E[m]}}function G(m){if(E[m.id]===void 0)return;const j=E[m.id];for(const _ in j){const V=j[_];for(const AA in V)r(V[AA].object),delete V[AA];delete j[_]}delete E[m.id]}function N(m){for(const j in E){const _=E[j];if(_[m.id]===void 0)continue;const V=_[m.id];for(const AA in V)r(V[AA].object),delete V[AA];delete _[m.id]}}function T(){v(),e=!0,t!==o&&(t=o,n(t.object))}function v(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:u,releaseStatesOfGeometry:G,releaseStatesOfProgram:N,initAttributes:l,enableAttribute:y,disableUnusedAttributes:U}}function pp(Q,A,I,g){const C=g.isWebGL2;let B;function i(e){B=e}function E(e,a){Q.drawArrays(B,e,a),I.update(a,B,1)}function o(e,a,s){if(s===0)return;let n,r;if(C)n=Q,r="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[r](B,e,a,s),I.update(a,B,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let r=0;r<s;r++)this.render(e[r],a[r]);else{n.multiDrawArraysWEBGL(B,e,0,a,0,s);let r=0;for(let c=0;c<s;c++)r+=a[c];I.update(r,B,1)}}this.setMode=i,this.render=E,this.renderInstances=o,this.renderMultiDraw=t}function dp(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const k=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(k){if(k==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=i||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),s=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=Q.getParameter(Q.MAX_TEXTURE_SIZE),r=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),c=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),D=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),h=Q.getParameter(Q.MAX_VARYING_VECTORS),S=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),l=s>0,y=i||A.has("OES_texture_float"),M=l&&y,U=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:r,maxAttributes:c,maxVertexUniforms:D,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:l,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:U}}function Rp(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new Ci,E=new FI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const r=a.clippingPlanes,c=a.clipIntersection,D=a.clipShadows,h=Q.get(a);if(!C||r===null||r.length===0||B&&!D)B?e(null):t();else{const S=B?0:g,l=S*4;let y=h.clippingState||null;o.value=y,y=e(r,s,l,n);for(let M=0;M!==l;++M)y[M]=I[M];h.clippingState=y,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=S}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,r){const c=a!==null?a.length:0;let D=null;if(c!==0){if(D=o.value,r!==!0||D===null){const h=n+c*4,S=s.matrixWorldInverse;E.getNormalMatrix(S),(D===null||D.length<h)&&(D=new Float32Array(h));for(let l=0,y=n;l!==c;++l,y+=4)i.copy(a[l]).applyMatrix4(S,E),i.normal.toArray(D,y),D[y+3]=i.constant}o.value=D,o.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,D}}function Jp(Q){let A=new WeakMap;function I(i,E){return E===le?i.mapping=ri:E===we&&(i.mapping=ji),i}function g(i){if(i&&i.isTexture){const E=i.mapping;if(E===le||E===we)if(A.has(i)){const o=A.get(i).texture;return I(o,i.mapping)}else{const o=i.image;if(o&&o.height>0){const t=new _y(o.height);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class an extends en{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const jo=4,Ol=[.125,.215,.35,.446,.526,.582],LE=20,Ur=new an,vl=new TA;let Nr=null,Kr=0,Fr=0;const uE=(1+Math.sqrt(5))/2,Ho=1/uE,Zl=[new f(1,1,1),new f(-1,1,1),new f(1,1,-1),new f(-1,1,-1),new f(0,uE,Ho),new f(0,uE,-Ho),new f(Ho,0,uE),new f(-Ho,0,uE),new f(uE,Ho,0),new f(-uE,Ho,0)];class PD{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Nr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Nr,Kr,Fr),A.scissorTest=!1,Pa(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===ri||A.mapping===ji?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Nr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Ug,minFilter:Ug,generateMipmaps:!1,type:et,format:aB,colorSpace:mQ,depthBuffer:!1},C=Pl(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(B)),this._blurMaterial=fp(B,A,I)}return C}_compileMaterial(A){const I=new vg(this._lodPlanes[0],A);this._renderer.compile(I,Ur)}_sceneToCubeUV(A,I,g,C){const E=new SC(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(vl),e.toneMapping=oi,e.autoClear=!1;const n=new CE({name:"PMREM.Background",side:QB,depthWrite:!1,depthTest:!1}),r=new vg(new ao,n);let c=!1;const D=A.background;D?D.isColor&&(n.color.copy(D),A.background=null,c=!0):(n.color.copy(vl),c=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(E.up.set(0,o[h],0),E.lookAt(t[h],0,0)):S===1?(E.up.set(0,0,o[h]),E.lookAt(0,t[h],0)):(E.up.set(0,o[h],0),E.lookAt(0,0,t[h]));const l=this._cubeSize;Pa(C,S*l,h>2?l:0,l,l),e.setRenderTarget(C),c&&e.render(r,E),e.render(A,E)}r.geometry.dispose(),r.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=D}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===ri||A.mapping===ji;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new vg(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;Pa(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(i,Ur)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=Zl[(C-1)%Zl.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const o=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new vg(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,r=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*LE-1),c=B/r,D=isFinite(B)?1+Math.floor(e*c):LE;D>LE&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${LE}`);const h=[];let S=0;for(let k=0;k<LE;++k){const K=k/c,u=Math.exp(-K*K/2);h.push(u),k===0?S+=u:k<D&&(S+=2*u)}for(let k=0;k<h.length;k++)h[k]=h[k]/S;s.envMap.value=A.texture,s.samples.value=D,s.weights.value=h,s.latitudinal.value=i==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:l}=this;s.dTheta.value=r,s.mipInt.value=l-g;const y=this._sizeLods[C],M=3*y*(C>l-jo?C-l+jo:0),U=4*(this._cubeSize-y);Pa(I,M,U,3*y,2*y),o.setRenderTarget(I),o.render(a,Ur)}}function qp(Q){const A=[],I=[],g=[];let C=Q;const B=Q-jo+1+Ol.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let o=1/E;i>Q-jo?o=Ol[i-Q+jo-1]:i===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,r=6,c=3,D=2,h=1,S=new Float32Array(c*r*n),l=new Float32Array(D*r*n),y=new Float32Array(h*r*n);for(let U=0;U<n;U++){const k=U%3*2/3-1,K=U>2?0:-1,u=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];S.set(u,c*r*U),l.set(s,D*r*U);const G=[U,U,U,U,U,U];y.set(G,h*r*U)}const M=new dI;M.setAttribute("position",new Ig(S,c)),M.setAttribute("uv",new Ig(l,D)),M.setAttribute("faceIndex",new Ig(y,h)),A.push(M),C>jo&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Pl(Q,A,I){const g=new lQ(Q,A,I);return g.texture.mapping=ct,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function Pa(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function fp(Q,A,I){const g=new Float32Array(LE),C=new f(0,1,0);return new gQ({name:"SphericalGaussianBlur",defines:{n:LE,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Wl(){return new gQ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jl(){return new gQ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function up(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===le||o===we,e=o===ri||o===ji;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new PD(Q)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new PD(Q));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",B),s.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function Yp(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Lp(Q,A,I,g){const C={},B=new WeakMap;function i(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);for(const r in s.morphAttributes){const c=s.morphAttributes[r];for(let D=0,h=c.length;D<h;D++)A.remove(c[D])}s.removeEventListener("dispose",i),delete C[s.id];const n=B.get(s);n&&(A.remove(n),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return C[s.id]===!0||(s.addEventListener("dispose",i),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],Q.ARRAY_BUFFER);const n=a.morphAttributes;for(const r in n){const c=n[r];for(let D=0,h=c.length;D<h;D++)A.update(c[D],Q.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,r=a.attributes.position;let c=0;if(n!==null){const S=n.array;c=n.version;for(let l=0,y=S.length;l<y;l+=3){const M=S[l+0],U=S[l+1],k=S[l+2];s.push(M,U,U,k,k,M)}}else if(r!==void 0){const S=r.array;c=r.version;for(let l=0,y=S.length/3-1;l<y;l+=3){const M=l+0,U=l+1,k=l+2;s.push(M,U,U,k,k,M)}}else return;const D=new(Yy(s)?jh:Wh)(s,1);D.version=c;const h=B.get(a);h&&A.remove(h),B.set(a,D)}function e(a){const s=B.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function Hp(Q,A,I,g){const C=g.isWebGL2;let B;function i(n){B=n}let E,o;function t(n){E=n.type,o=n.bytesPerElement}function e(n,r){Q.drawElements(B,r,E,n*o),I.update(r,B,1)}function a(n,r,c){if(c===0)return;let D,h;if(C)D=Q,h="drawElementsInstanced";else if(D=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",D===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[h](B,r,E,n*o,c),I.update(r,B,c)}function s(n,r,c){if(c===0)return;const D=A.get("WEBGL_multi_draw");if(D===null)for(let h=0;h<c;h++)this.render(n[h]/o,r[h]);else{D.multiDrawElementsWEBGL(B,r,0,E,n,0,c);let h=0;for(let S=0;S<c;S++)h+=r[S];I.update(h,B,1)}}this.setMode=i,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function mp(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Tp(Q,A){return Q[0]-A[0]}function bp(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function xp(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new Ag,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,r=n!==void 0?n.length:0;let c=B.get(e);if(c===void 0||c.count!==r){let m=function(){T.dispose(),B.delete(e),e.removeEventListener("dispose",m)};c!==void 0&&c.texture.dispose();const S=e.morphAttributes.position!==void 0,l=e.morphAttributes.normal!==void 0,y=e.morphAttributes.color!==void 0,M=e.morphAttributes.position||[],U=e.morphAttributes.normal||[],k=e.morphAttributes.color||[];let K=0;S===!0&&(K=1),l===!0&&(K=2),y===!0&&(K=3);let u=e.attributes.position.count*K,G=1;u>A.maxTextureSize&&(G=Math.ceil(u/A.maxTextureSize),u=A.maxTextureSize);const N=new Float32Array(u*G*4*r),T=new on(N,u,G,r);T.type=XB,T.needsUpdate=!0;const v=K*4;for(let j=0;j<r;j++){const _=M[j],V=U[j],AA=k[j],IA=u*G*4*j;for(let oA=0;oA<_.count;oA++){const eA=oA*v;S===!0&&(i.fromBufferAttribute(_,oA),N[IA+eA+0]=i.x,N[IA+eA+1]=i.y,N[IA+eA+2]=i.z,N[IA+eA+3]=0),l===!0&&(i.fromBufferAttribute(V,oA),N[IA+eA+4]=i.x,N[IA+eA+5]=i.y,N[IA+eA+6]=i.z,N[IA+eA+7]=0),y===!0&&(i.fromBufferAttribute(AA,oA),N[IA+eA+8]=i.x,N[IA+eA+9]=i.y,N[IA+eA+10]=i.z,N[IA+eA+11]=AA.itemSize===4?i.w:1)}}c={count:r,texture:T,size:new rA(u,G)},B.set(e,c),e.addEventListener("dispose",m)}let D=0;for(let S=0;S<s.length;S++)D+=s[S];const h=e.morphTargetsRelative?1:1-D;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",h),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",c.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",c.size)}else{const n=s===void 0?0:s.length;let r=g[e.id];if(r===void 0||r.length!==n){r=[];for(let l=0;l<n;l++)r[l]=[l,0];g[e.id]=r}for(let l=0;l<n;l++){const y=r[l];y[0]=l,y[1]=s[l]}r.sort(bp);for(let l=0;l<8;l++)l<n&&r[l][1]?(E[l][0]=r[l][0],E[l][1]=r[l][1]):(E[l][0]=Number.MAX_SAFE_INTEGER,E[l][1]=0);E.sort(Tp);const c=e.morphAttributes.position,D=e.morphAttributes.normal;let h=0;for(let l=0;l<8;l++){const y=E[l],M=y[0],U=y[1];M!==Number.MAX_SAFE_INTEGER&&U?(c&&e.getAttribute("morphTarget"+l)!==c[M]&&e.setAttribute("morphTarget"+l,c[M]),D&&e.getAttribute("morphNormal"+l)!==D[M]&&e.setAttribute("morphNormal"+l,D[M]),C[l]=U,h+=U):(c&&e.hasAttribute("morphTarget"+l)===!0&&e.deleteAttribute("morphTarget"+l),D&&e.hasAttribute("morphNormal"+l)===!0&&e.deleteAttribute("morphNormal"+l),C[l]=0)}const S=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",S),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function _p(Q,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),C.get(o)!==t&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function i(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}class Xh extends Yg{constructor(A,I,g,C,B,i,E,o,t,e){if(e=e!==void 0?e:vi,e!==vi&&e!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===vi&&(g=Qi),g===void 0&&e===go&&(g=Oi),super(null,C,B,i,E,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:Og,this.minFilter=o!==void 0?o:Og,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const vy=new Yg,Zy=new Xh(1,1);Zy.compareFunction=Oh;const Py=new on,Wy=new Ph,jy=new Xe,Vl=[],Xl=[],zl=new Float32Array(16),$l=new Float32Array(9),Aw=new Float32Array(4);function wt(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=Vl[C];if(B===void 0&&(B=new Float32Array(C),Vl[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function tC(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function eC(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function sn(Q,A){let I=Xl[A];I===void 0&&(I=new Int32Array(A),Xl[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function Op(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function vp(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tC(I,A))return;Q.uniform2fv(this.addr,A),eC(I,A)}}function Zp(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(tC(I,A))return;Q.uniform3fv(this.addr,A),eC(I,A)}}function Pp(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tC(I,A))return;Q.uniform4fv(this.addr,A),eC(I,A)}}function Wp(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tC(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),eC(I,A)}else{if(tC(I,g))return;Aw.set(g),Q.uniformMatrix2fv(this.addr,!1,Aw),eC(I,g)}}function jp(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tC(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),eC(I,A)}else{if(tC(I,g))return;$l.set(g),Q.uniformMatrix3fv(this.addr,!1,$l),eC(I,g)}}function Vp(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tC(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),eC(I,A)}else{if(tC(I,g))return;zl.set(g),Q.uniformMatrix4fv(this.addr,!1,zl),eC(I,g)}}function Xp(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function zp(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tC(I,A))return;Q.uniform2iv(this.addr,A),eC(I,A)}}function $p(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(tC(I,A))return;Q.uniform3iv(this.addr,A),eC(I,A)}}function Ad(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tC(I,A))return;Q.uniform4iv(this.addr,A),eC(I,A)}}function Id(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function gd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tC(I,A))return;Q.uniform2uiv(this.addr,A),eC(I,A)}}function Cd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(tC(I,A))return;Q.uniform3uiv(this.addr,A),eC(I,A)}}function Bd(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tC(I,A))return;Q.uniform4uiv(this.addr,A),eC(I,A)}}function Qd(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?Zy:vy;I.setTexture2D(A||B,C)}function id(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Wy,C)}function Ed(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||jy,C)}function od(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Py,C)}function td(Q){switch(Q){case 5126:return Op;case 35664:return vp;case 35665:return Zp;case 35666:return Pp;case 35674:return Wp;case 35675:return jp;case 35676:return Vp;case 5124:case 35670:return Xp;case 35667:case 35671:return zp;case 35668:case 35672:return $p;case 35669:case 35673:return Ad;case 5125:return Id;case 36294:return gd;case 36295:return Cd;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Qd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return od}}function ed(Q,A){Q.uniform1fv(this.addr,A)}function ad(Q,A){const I=wt(A,this.size,2);Q.uniform2fv(this.addr,I)}function sd(Q,A){const I=wt(A,this.size,3);Q.uniform3fv(this.addr,I)}function nd(Q,A){const I=wt(A,this.size,4);Q.uniform4fv(this.addr,I)}function rd(Q,A){const I=wt(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function Dd(Q,A){const I=wt(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function hd(Q,A){const I=wt(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function cd(Q,A){Q.uniform1iv(this.addr,A)}function ld(Q,A){Q.uniform2iv(this.addr,A)}function wd(Q,A){Q.uniform3iv(this.addr,A)}function Sd(Q,A){Q.uniform4iv(this.addr,A)}function Gd(Q,A){Q.uniform1uiv(this.addr,A)}function yd(Q,A){Q.uniform2uiv(this.addr,A)}function kd(Q,A){Q.uniform3uiv(this.addr,A)}function Md(Q,A){Q.uniform4uiv(this.addr,A)}function Ud(Q,A,I){const g=this.cache,C=A.length,B=sn(I,C);tC(g,B)||(Q.uniform1iv(this.addr,B),eC(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||vy,B[i])}function Nd(Q,A,I){const g=this.cache,C=A.length,B=sn(I,C);tC(g,B)||(Q.uniform1iv(this.addr,B),eC(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||Wy,B[i])}function Kd(Q,A,I){const g=this.cache,C=A.length,B=sn(I,C);tC(g,B)||(Q.uniform1iv(this.addr,B),eC(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||jy,B[i])}function Fd(Q,A,I){const g=this.cache,C=A.length,B=sn(I,C);tC(g,B)||(Q.uniform1iv(this.addr,B),eC(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||Py,B[i])}function pd(Q){switch(Q){case 5126:return ed;case 35664:return ad;case 35665:return sd;case 35666:return nd;case 35674:return rd;case 35675:return Dd;case 35676:return hd;case 5124:case 35670:return cd;case 35667:case 35671:return ld;case 35668:case 35672:return wd;case 35669:case 35673:return Sd;case 5125:return Gd;case 36294:return yd;case 36295:return kd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Fd}}class dd{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=td(I.type)}}class Rd{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=pd(I.type)}}class Jd{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Iw(Q,A){Q.seq.push(A),Q.map[A.id]=A}function qd(Q,A,I){const g=Q.name,C=g.length;for(pr.lastIndex=0;;){const B=pr.exec(g),i=pr.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&i+2===C){Iw(I,t===void 0?new dd(E,Q,A):new Rd(E,Q,A));break}else{let a=I.map[E];a===void 0&&(a=new Jd(E),Iw(I,a)),I=a}}}class ps{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);qd(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function gw(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const fd=37297;let ud=0;function Yd(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function Ld(Q){const A=PI.getPrimaries(PI.workingColorSpace),I=PI.getPrimaries(Q);let g;switch(A===I?g="":A===Fe&&I===Ke?g="LinearDisplayP3ToLinearSRGB":A===Ke&&I===Fe&&(g="LinearSRGBToLinearDisplayP3"),Q){case mQ:case Ve:return[g,"LinearTransferOETF"];case oC:case En:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function Cw(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+Yd(Q.getShaderSource(A),i)}else return C}function Hd(Q,A){const I=Ld(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function md(Q,A){let I;switch(A){case oy:I="Linear";break;case ty:I="Reinhard";break;case ey:I="OptimizedCineon";break;case uh:I="ACESFilmic";break;case sy:I="AgX";break;case ay:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Td(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.alphaToCoverage||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function bd(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function xd(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function _d(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function Vo(Q){return Q!==""}function Bw(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Qw(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Od=/^[ \t]*#include +<([\w\d./]+)>/gm;function WD(Q){return Q.replace(Od,Zd)}const vd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zd(Q,A){let I=iI[A];if(I===void 0){const g=vd.get(A);if(g!==void 0)I=iI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return WD(I)}const Pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iw(Q){return Q.replace(Pd,Wd)}function Wd(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function Ew(Q){let A=`precision ${Q.precision} float;
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
#define LOW_PRECISION`),A}function jd(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===fh?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===gn?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===NQ&&(A="SHADOWMAP_TYPE_VSM"),A}function Vd(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case ri:case ji:A="ENVMAP_TYPE_CUBE";break;case ct:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Xd(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case ji:A="ENVMAP_MODE_REFRACTION";break}return A}function zd(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case je:A="ENVMAP_BLENDING_MULTIPLY";break;case iy:A="ENVMAP_BLENDING_MIX";break;case Ey:A="ENVMAP_BLENDING_ADD";break}return A}function $d(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function AR(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const o=jd(I),t=Vd(I),e=Xd(I),a=zd(I),s=$d(I),n=I.isWebGL2?"":Td(I),r=bd(I),c=xd(B),D=C.createProgram();let h,S,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(Vo).join(`
`),h.length>0&&(h+=`
`),S=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(Vo).join(`
`),S.length>0&&(S+=`
`)):(h=[Ew(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),S=[n,Ew(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==oi?"#define TONE_MAPPING":"",I.toneMapping!==oi?iI.tonemapping_pars_fragment:"",I.toneMapping!==oi?md("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",iI.colorspace_pars_fragment,Hd("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(Vo).join(`
`)),i=WD(i),i=Bw(i,I),i=Qw(i,I),E=WD(E),E=Bw(E,I),E=Qw(E,I),i=iw(i),E=iw(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=[r,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===vD?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===vD?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=l+h+i,M=l+S+E,U=gw(C,C.VERTEX_SHADER,y),k=gw(C,C.FRAGMENT_SHADER,M);C.attachShader(D,U),C.attachShader(D,k),I.index0AttributeName!==void 0?C.bindAttribLocation(D,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(D,0,"position"),C.linkProgram(D);function K(T){if(Q.debug.checkShaderErrors){const v=C.getProgramInfoLog(D).trim(),m=C.getShaderInfoLog(U).trim(),j=C.getShaderInfoLog(k).trim();let _=!0,V=!0;if(C.getProgramParameter(D,C.LINK_STATUS)===!1)if(_=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,D,U,k);else{const AA=Cw(C,U,"vertex"),IA=Cw(C,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(D,C.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+v+`
`+AA+`
`+IA)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(m===""||j==="")&&(V=!1);V&&(T.diagnostics={runnable:_,programLog:v,vertexShader:{log:m,prefix:h},fragmentShader:{log:j,prefix:S}})}C.deleteShader(U),C.deleteShader(k),u=new ps(C,D),G=_d(C,D)}let u;this.getUniforms=function(){return u===void 0&&K(this),u};let G;this.getAttributes=function(){return G===void 0&&K(this),G};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=C.getProgramParameter(D,fd)),N},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(D),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=ud++,this.cacheKey=A,this.usedTimes=1,this.program=D,this.vertexShader=U,this.fragmentShader=k,this}let IR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new CR(A),I.set(A,g)),g}}class CR{constructor(A){this.id=IR++,this.code=A,this.usedTimes=0}}function BR(Q,A,I,g,C,B,i){const E=new tn,o=new gR,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let r=C.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(G){return t.add(G),G===0?"uv":`uv${G}`}function h(G,N,T,v,m){const j=v.fog,_=m.geometry,V=G.isMeshStandardMaterial?v.environment:null,AA=(G.isMeshStandardMaterial?I:A).get(G.envMap||V),IA=AA&&AA.mapping===ct?AA.image.height:null,oA=c[G.type];G.precision!==null&&(r=C.getMaxPrecision(G.precision),r!==G.precision&&console.warn("THREE.WebGLProgram.getParameters:",G.precision,"not supported, using",r,"instead."));const eA=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,NA=eA!==void 0?eA.length:0;let jA=0;_.morphAttributes.position!==void 0&&(jA=1),_.morphAttributes.normal!==void 0&&(jA=2),_.morphAttributes.color!==void 0&&(jA=3);let QA,wA,HA,FA;if(oA){const RI=hQ[oA];QA=RI.vertexShader,wA=RI.fragmentShader}else QA=G.vertexShader,wA=G.fragmentShader,o.update(G),HA=o.getVertexShaderID(G),FA=o.getFragmentShaderID(G);const aA=Q.getRenderTarget(),bA=m.isInstancedMesh===!0,pA=m.isBatchedMesh===!0,RA=!!G.map,L=!!G.matcap,lA=!!AA,sA=!!G.aoMap,MA=!!G.lightMap,nA=!!G.bumpMap,ZA=!!G.normalMap,JA=!!G.displacementMap,J=!!G.emissiveMap,F=!!G.metalnessMap,X=!!G.roughnessMap,yA=G.anisotropy>0,DA=G.clearcoat>0,SA=G.iridescence>0,xA=G.sheen>0,KA=G.transmission>0,mA=yA&&!!G.anisotropyMap,$A=DA&&!!G.clearcoatMap,rI=DA&&!!G.clearcoatNormalMap,hA=DA&&!!G.clearcoatRoughnessMap,JI=SA&&!!G.iridescenceMap,kI=SA&&!!G.iridescenceThicknessMap,sI=xA&&!!G.sheenColorMap,OA=xA&&!!G.sheenRoughnessMap,uA=!!G.specularMap,lI=!!G.specularColorMap,H=!!G.specularIntensityMap,UA=KA&&!!G.transmissionMap,qA=KA&&!!G.thicknessMap,zA=!!G.gradientMap,Y=!!G.alphaMap,kA=G.alphaTest>0,cA=!!G.alphaHash,vA=!!G.extensions;let _A=oi;G.toneMapped&&(aA===null||aA.isXRRenderTarget===!0)&&(_A=Q.toneMapping);const qI={isWebGL2:a,shaderID:oA,shaderType:G.type,shaderName:G.name,vertexShader:QA,fragmentShader:wA,defines:G.defines,customVertexShaderID:HA,customFragmentShaderID:FA,isRawShaderMaterial:G.isRawShaderMaterial===!0,glslVersion:G.glslVersion,precision:r,batching:pA,instancing:bA,instancingColor:bA&&m.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:aA===null?Q.outputColorSpace:aA.isXRRenderTarget===!0?aA.texture.colorSpace:mQ,alphaToCoverage:!!G.alphaToCoverage,map:RA,matcap:L,envMap:lA,envMapMode:lA&&AA.mapping,envMapCubeUVHeight:IA,aoMap:sA,lightMap:MA,bumpMap:nA,normalMap:ZA,displacementMap:n&&JA,emissiveMap:J,normalMapObjectSpace:ZA&&G.normalMapType===Ky,normalMapTangentSpace:ZA&&G.normalMapType===gE,metalnessMap:F,roughnessMap:X,anisotropy:yA,anisotropyMap:mA,clearcoat:DA,clearcoatMap:$A,clearcoatNormalMap:rI,clearcoatRoughnessMap:hA,iridescence:SA,iridescenceMap:JI,iridescenceThicknessMap:kI,sheen:xA,sheenColorMap:sI,sheenRoughnessMap:OA,specularMap:uA,specularColorMap:lI,specularIntensityMap:H,transmission:KA,transmissionMap:UA,thicknessMap:qA,gradientMap:zA,opaque:G.transparent===!1&&G.blending===jE&&G.alphaToCoverage===!1,alphaMap:Y,alphaTest:kA,alphaHash:cA,combine:G.combine,mapUv:RA&&D(G.map.channel),aoMapUv:sA&&D(G.aoMap.channel),lightMapUv:MA&&D(G.lightMap.channel),bumpMapUv:nA&&D(G.bumpMap.channel),normalMapUv:ZA&&D(G.normalMap.channel),displacementMapUv:JA&&D(G.displacementMap.channel),emissiveMapUv:J&&D(G.emissiveMap.channel),metalnessMapUv:F&&D(G.metalnessMap.channel),roughnessMapUv:X&&D(G.roughnessMap.channel),anisotropyMapUv:mA&&D(G.anisotropyMap.channel),clearcoatMapUv:$A&&D(G.clearcoatMap.channel),clearcoatNormalMapUv:rI&&D(G.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:hA&&D(G.clearcoatRoughnessMap.channel),iridescenceMapUv:JI&&D(G.iridescenceMap.channel),iridescenceThicknessMapUv:kI&&D(G.iridescenceThicknessMap.channel),sheenColorMapUv:sI&&D(G.sheenColorMap.channel),sheenRoughnessMapUv:OA&&D(G.sheenRoughnessMap.channel),specularMapUv:uA&&D(G.specularMap.channel),specularColorMapUv:lI&&D(G.specularColorMap.channel),specularIntensityMapUv:H&&D(G.specularIntensityMap.channel),transmissionMapUv:UA&&D(G.transmissionMap.channel),thicknessMapUv:qA&&D(G.thicknessMap.channel),alphaMapUv:Y&&D(G.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ZA||yA),vertexColors:G.vertexColors,vertexAlphas:G.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(RA||Y),fog:!!j,useFog:G.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:G.flatShading===!0,sizeAttenuation:G.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:m.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:NA,morphTextureStride:jA,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:G.dithering,shadowMapEnabled:Q.shadowMap.enabled&&T.length>0,shadowMapType:Q.shadowMap.type,toneMapping:_A,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:RA&&G.map.isVideoTexture===!0&&PI.getTransfer(G.map.colorSpace)===og,premultipliedAlpha:G.premultipliedAlpha,doubleSided:G.side===RQ,flipSided:G.side===QB,useDepthPacking:G.depthPacking>=0,depthPacking:G.depthPacking||0,index0AttributeName:G.index0AttributeName,extensionDerivatives:vA&&G.extensions.derivatives===!0,extensionFragDepth:vA&&G.extensions.fragDepth===!0,extensionDrawBuffers:vA&&G.extensions.drawBuffers===!0,extensionShaderTextureLOD:vA&&G.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vA&&G.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vA&&G.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:G.customProgramCacheKey()};return qI.vertexUv1s=t.has(1),qI.vertexUv2s=t.has(2),qI.vertexUv3s=t.has(3),t.clear(),qI}function S(G){const N=[];if(G.shaderID?N.push(G.shaderID):(N.push(G.customVertexShaderID),N.push(G.customFragmentShaderID)),G.defines!==void 0)for(const T in G.defines)N.push(T),N.push(G.defines[T]);return G.isRawShaderMaterial===!1&&(l(N,G),y(N,G),N.push(Q.outputColorSpace)),N.push(G.customProgramCacheKey),N.join()}function l(G,N){G.push(N.precision),G.push(N.outputColorSpace),G.push(N.envMapMode),G.push(N.envMapCubeUVHeight),G.push(N.mapUv),G.push(N.alphaMapUv),G.push(N.lightMapUv),G.push(N.aoMapUv),G.push(N.bumpMapUv),G.push(N.normalMapUv),G.push(N.displacementMapUv),G.push(N.emissiveMapUv),G.push(N.metalnessMapUv),G.push(N.roughnessMapUv),G.push(N.anisotropyMapUv),G.push(N.clearcoatMapUv),G.push(N.clearcoatNormalMapUv),G.push(N.clearcoatRoughnessMapUv),G.push(N.iridescenceMapUv),G.push(N.iridescenceThicknessMapUv),G.push(N.sheenColorMapUv),G.push(N.sheenRoughnessMapUv),G.push(N.specularMapUv),G.push(N.specularColorMapUv),G.push(N.specularIntensityMapUv),G.push(N.transmissionMapUv),G.push(N.thicknessMapUv),G.push(N.combine),G.push(N.fogExp2),G.push(N.sizeAttenuation),G.push(N.morphTargetsCount),G.push(N.morphAttributeCount),G.push(N.numDirLights),G.push(N.numPointLights),G.push(N.numSpotLights),G.push(N.numSpotLightMaps),G.push(N.numHemiLights),G.push(N.numRectAreaLights),G.push(N.numDirLightShadows),G.push(N.numPointLightShadows),G.push(N.numSpotLightShadows),G.push(N.numSpotLightShadowsWithMaps),G.push(N.numLightProbes),G.push(N.shadowMapType),G.push(N.toneMapping),G.push(N.numClippingPlanes),G.push(N.numClipIntersection),G.push(N.depthPacking)}function y(G,N){E.disableAll(),N.isWebGL2&&E.enable(0),N.supportsVertexTextures&&E.enable(1),N.instancing&&E.enable(2),N.instancingColor&&E.enable(3),N.matcap&&E.enable(4),N.envMap&&E.enable(5),N.normalMapObjectSpace&&E.enable(6),N.normalMapTangentSpace&&E.enable(7),N.clearcoat&&E.enable(8),N.iridescence&&E.enable(9),N.alphaTest&&E.enable(10),N.vertexColors&&E.enable(11),N.vertexAlphas&&E.enable(12),N.vertexUv1s&&E.enable(13),N.vertexUv2s&&E.enable(14),N.vertexUv3s&&E.enable(15),N.vertexTangents&&E.enable(16),N.anisotropy&&E.enable(17),N.alphaHash&&E.enable(18),N.batching&&E.enable(19),G.push(E.mask),E.disableAll(),N.fog&&E.enable(0),N.useFog&&E.enable(1),N.flatShading&&E.enable(2),N.logarithmicDepthBuffer&&E.enable(3),N.skinning&&E.enable(4),N.morphTargets&&E.enable(5),N.morphNormals&&E.enable(6),N.morphColors&&E.enable(7),N.premultipliedAlpha&&E.enable(8),N.shadowMapEnabled&&E.enable(9),N.useLegacyLights&&E.enable(10),N.doubleSided&&E.enable(11),N.flipSided&&E.enable(12),N.useDepthPacking&&E.enable(13),N.dithering&&E.enable(14),N.transmission&&E.enable(15),N.sheen&&E.enable(16),N.opaque&&E.enable(17),N.pointsUvs&&E.enable(18),N.decodeVideoTexture&&E.enable(19),N.alphaToCoverage&&E.enable(20),G.push(E.mask)}function M(G){const N=c[G.type];let T;if(N){const v=hQ[N];T=by.clone(v.uniforms)}else T=G.uniforms;return T}function U(G,N){let T;for(let v=0,m=e.length;v<m;v++){const j=e[v];if(j.cacheKey===N){T=j,++T.usedTimes;break}}return T===void 0&&(T=new AR(Q,N,G,B),e.push(T)),T}function k(G){if(--G.usedTimes===0){const N=e.indexOf(G);e[N]=e[e.length-1],e.pop(),G.destroy()}}function K(G){o.remove(G)}function u(){o.dispose()}return{getParameters:h,getProgramCacheKey:S,getUniforms:M,acquireProgram:U,releaseProgram:k,releaseShaderCache:K,programs:e,dispose:u}}function QR(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function iR(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function ow(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function tw(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(a,s,n,r,c,D){let h=Q[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:r,renderOrder:a.renderOrder,z:c,group:D},Q[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=r,h.renderOrder=a.renderOrder,h.z=c,h.group=D),A++,h}function E(a,s,n,r,c,D){const h=i(a,s,n,r,c,D);n.transmission>0?g.push(h):n.transparent===!0?C.push(h):I.push(h)}function o(a,s,n,r,c,D){const h=i(a,s,n,r,c,D);n.transmission>0?g.unshift(h):n.transparent===!0?C.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||iR),g.length>1&&g.sort(s||ow),C.length>1&&C.sort(s||ow)}function e(){for(let a=A,s=Q.length;a<s;a++){const n=Q[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function ER(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new tw,Q.set(g,[i])):C>=B.length?(i=new tw,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function oR(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new f,color:new TA};break;case"SpotLight":I={position:new f,direction:new f,color:new TA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new f,color:new TA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new f,skyColor:new TA,groundColor:new TA};break;case"RectAreaLight":I={color:new TA,position:new f,halfWidth:new f,halfHeight:new f};break}return Q[A.id]=I,I}}}function tR(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let eR=0;function aR(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function sR(Q,A){const I=new oR,g=tR(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new f);const B=new f,i=new aI,E=new aI;function o(e,a){let s=0,n=0,r=0;for(let T=0;T<9;T++)C.probe[T].set(0,0,0);let c=0,D=0,h=0,S=0,l=0,y=0,M=0,U=0,k=0,K=0,u=0;e.sort(aR);const G=a===!0?Math.PI:1;for(let T=0,v=e.length;T<v;T++){const m=e[T],j=m.color,_=m.intensity,V=m.distance,AA=m.shadow&&m.shadow.map?m.shadow.map.texture:null;if(m.isAmbientLight)s+=j.r*_*G,n+=j.g*_*G,r+=j.b*_*G;else if(m.isLightProbe){for(let IA=0;IA<9;IA++)C.probe[IA].addScaledVector(m.sh.coefficients[IA],_);u++}else if(m.isDirectionalLight){const IA=I.get(m);if(IA.color.copy(m.color).multiplyScalar(m.intensity*G),m.castShadow){const oA=m.shadow,eA=g.get(m);eA.shadowBias=oA.bias,eA.shadowNormalBias=oA.normalBias,eA.shadowRadius=oA.radius,eA.shadowMapSize=oA.mapSize,C.directionalShadow[c]=eA,C.directionalShadowMap[c]=AA,C.directionalShadowMatrix[c]=m.shadow.matrix,y++}C.directional[c]=IA,c++}else if(m.isSpotLight){const IA=I.get(m);IA.position.setFromMatrixPosition(m.matrixWorld),IA.color.copy(j).multiplyScalar(_*G),IA.distance=V,IA.coneCos=Math.cos(m.angle),IA.penumbraCos=Math.cos(m.angle*(1-m.penumbra)),IA.decay=m.decay,C.spot[h]=IA;const oA=m.shadow;if(m.map&&(C.spotLightMap[k]=m.map,k++,oA.updateMatrices(m),m.castShadow&&K++),C.spotLightMatrix[h]=oA.matrix,m.castShadow){const eA=g.get(m);eA.shadowBias=oA.bias,eA.shadowNormalBias=oA.normalBias,eA.shadowRadius=oA.radius,eA.shadowMapSize=oA.mapSize,C.spotShadow[h]=eA,C.spotShadowMap[h]=AA,U++}h++}else if(m.isRectAreaLight){const IA=I.get(m);IA.color.copy(j).multiplyScalar(_),IA.halfWidth.set(m.width*.5,0,0),IA.halfHeight.set(0,m.height*.5,0),C.rectArea[S]=IA,S++}else if(m.isPointLight){const IA=I.get(m);if(IA.color.copy(m.color).multiplyScalar(m.intensity*G),IA.distance=m.distance,IA.decay=m.decay,m.castShadow){const oA=m.shadow,eA=g.get(m);eA.shadowBias=oA.bias,eA.shadowNormalBias=oA.normalBias,eA.shadowRadius=oA.radius,eA.shadowMapSize=oA.mapSize,eA.shadowCameraNear=oA.camera.near,eA.shadowCameraFar=oA.camera.far,C.pointShadow[D]=eA,C.pointShadowMap[D]=AA,C.pointShadowMatrix[D]=m.shadow.matrix,M++}C.point[D]=IA,D++}else if(m.isHemisphereLight){const IA=I.get(m);IA.skyColor.copy(m.color).multiplyScalar(_*G),IA.groundColor.copy(m.groundColor).multiplyScalar(_*G),C.hemi[l]=IA,l++}}S>0&&(A.isWebGL2?Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=dA.LTC_FLOAT_1,C.rectAreaLTC2=dA.LTC_FLOAT_2):(C.rectAreaLTC1=dA.LTC_HALF_1,C.rectAreaLTC2=dA.LTC_HALF_2):Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=dA.LTC_FLOAT_1,C.rectAreaLTC2=dA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=dA.LTC_HALF_1,C.rectAreaLTC2=dA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=r;const N=C.hash;(N.directionalLength!==c||N.pointLength!==D||N.spotLength!==h||N.rectAreaLength!==S||N.hemiLength!==l||N.numDirectionalShadows!==y||N.numPointShadows!==M||N.numSpotShadows!==U||N.numSpotMaps!==k||N.numLightProbes!==u)&&(C.directional.length=c,C.spot.length=h,C.rectArea.length=S,C.point.length=D,C.hemi.length=l,C.directionalShadow.length=y,C.directionalShadowMap.length=y,C.pointShadow.length=M,C.pointShadowMap.length=M,C.spotShadow.length=U,C.spotShadowMap.length=U,C.directionalShadowMatrix.length=y,C.pointShadowMatrix.length=M,C.spotLightMatrix.length=U+k-K,C.spotLightMap.length=k,C.numSpotLightShadowsWithMaps=K,C.numLightProbes=u,N.directionalLength=c,N.pointLength=D,N.spotLength=h,N.rectAreaLength=S,N.hemiLength=l,N.numDirectionalShadows=y,N.numPointShadows=M,N.numSpotShadows=U,N.numSpotMaps=k,N.numLightProbes=u,C.version=eR++)}function t(e,a){let s=0,n=0,r=0,c=0,D=0;const h=a.matrixWorldInverse;for(let S=0,l=e.length;S<l;S++){const y=e[S];if(y.isDirectionalLight){const M=C.directional[s];M.direction.setFromMatrixPosition(y.matrixWorld),B.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(h),s++}else if(y.isSpotLight){const M=C.spot[r];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),B.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(B),M.direction.transformDirection(h),r++}else if(y.isRectAreaLight){const M=C.rectArea[c];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),E.identity(),i.copy(y.matrixWorld),i.premultiply(h),E.extractRotation(i),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),c++}else if(y.isPointLight){const M=C.point[n];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),n++}else if(y.isHemisphereLight){const M=C.hemi[D];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),D++}}}return{setup:o,setupView:t,state:C}}function ew(Q,A){const I=new sR(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:i,pushShadow:E}}function nR(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let o;return E===void 0?(o=new ew(Q,A),I.set(B,[o])):i>=E.length?(o=new ew(Q,A),E.push(o)):o=E[i],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class zh extends OC{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class $h extends OC{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`;function hR(Q,A,I){let g=new ze;const C=new rA,B=new rA,i=new Ag,E=new zh({depthPacking:Ny}),o=new $h,t={},e=I.maxTextureSize,a={[ni]:QB,[QB]:ni,[RQ]:RQ},s=new gQ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rA},radius:{value:4}},vertexShader:rR,fragmentShader:DR}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const r=new dI;r.setAttribute("position",new Ig(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new vg(r,s),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let h=this.type;this.render=function(U,k,K){if(D.enabled===!1||D.autoUpdate===!1&&D.needsUpdate===!1||U.length===0)return;const u=Q.getRenderTarget(),G=Q.getActiveCubeFace(),N=Q.getActiveMipmapLevel(),T=Q.state;T.setBlending(Ei),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const v=h!==NQ&&this.type===NQ,m=h===NQ&&this.type!==NQ;for(let j=0,_=U.length;j<_;j++){const V=U[j],AA=V.shadow;if(AA===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(AA.autoUpdate===!1&&AA.needsUpdate===!1)continue;C.copy(AA.mapSize);const IA=AA.getFrameExtents();if(C.multiply(IA),B.copy(AA.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/IA.x),C.x=B.x*IA.x,AA.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/IA.y),C.y=B.y*IA.y,AA.mapSize.y=B.y)),AA.map===null||v===!0||m===!0){const eA=this.type!==NQ?{minFilter:Og,magFilter:Og}:{};AA.map!==null&&AA.map.dispose(),AA.map=new lQ(C.x,C.y,eA),AA.map.texture.name=V.name+".shadowMap",AA.camera.updateProjectionMatrix()}Q.setRenderTarget(AA.map),Q.clear();const oA=AA.getViewportCount();for(let eA=0;eA<oA;eA++){const NA=AA.getViewport(eA);i.set(B.x*NA.x,B.y*NA.y,B.x*NA.z,B.y*NA.w),T.viewport(i),AA.updateMatrices(V,eA),g=AA.getFrustum(),y(k,K,AA.camera,V,this.type)}AA.isPointLightShadow!==!0&&this.type===NQ&&S(AA,K),AA.needsUpdate=!1}h=this.type,D.needsUpdate=!1,Q.setRenderTarget(u,G,N)};function S(U,k){const K=A.update(c);s.defines.VSM_SAMPLES!==U.blurSamples&&(s.defines.VSM_SAMPLES=U.blurSamples,n.defines.VSM_SAMPLES=U.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new lQ(C.x,C.y)),s.uniforms.shadow_pass.value=U.map.texture,s.uniforms.resolution.value=U.mapSize,s.uniforms.radius.value=U.radius,Q.setRenderTarget(U.mapPass),Q.clear(),Q.renderBufferDirect(k,null,K,s,c,null),n.uniforms.shadow_pass.value=U.mapPass.texture,n.uniforms.resolution.value=U.mapSize,n.uniforms.radius.value=U.radius,Q.setRenderTarget(U.map),Q.clear(),Q.renderBufferDirect(k,null,K,n,c,null)}function l(U,k,K,u){let G=null;const N=K.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)G=N;else if(G=K.isPointLight===!0?o:E,Q.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const T=G.uuid,v=k.uuid;let m=t[T];m===void 0&&(m={},t[T]=m);let j=m[v];j===void 0&&(j=G.clone(),m[v]=j,k.addEventListener("dispose",M)),G=j}if(G.visible=k.visible,G.wireframe=k.wireframe,u===NQ?G.side=k.shadowSide!==null?k.shadowSide:k.side:G.side=k.shadowSide!==null?k.shadowSide:a[k.side],G.alphaMap=k.alphaMap,G.alphaTest=k.alphaTest,G.map=k.map,G.clipShadows=k.clipShadows,G.clippingPlanes=k.clippingPlanes,G.clipIntersection=k.clipIntersection,G.displacementMap=k.displacementMap,G.displacementScale=k.displacementScale,G.displacementBias=k.displacementBias,G.wireframeLinewidth=k.wireframeLinewidth,G.linewidth=k.linewidth,K.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const T=Q.properties.get(G);T.light=K}return G}function y(U,k,K,u,G){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&G===NQ)&&(!U.frustumCulled||g.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld);const v=A.update(U),m=U.material;if(Array.isArray(m)){const j=v.groups;for(let _=0,V=j.length;_<V;_++){const AA=j[_],IA=m[AA.materialIndex];if(IA&&IA.visible){const oA=l(U,IA,u,G);U.onBeforeShadow(Q,U,k,K,v,oA,AA),Q.renderBufferDirect(K,null,v,oA,U,AA),U.onAfterShadow(Q,U,k,K,v,oA,AA)}}}else if(m.visible){const j=l(U,m,u,G);U.onBeforeShadow(Q,U,k,K,v,j,null),Q.renderBufferDirect(K,null,v,j,U,null),U.onAfterShadow(Q,U,k,K,v,j,null)}}const T=U.children;for(let v=0,m=T.length;v<m;v++)y(T[v],k,K,u,G)}function M(U){U.target.removeEventListener("dispose",M);for(const K in t){const u=t[K],G=U.target.uuid;G in u&&(u[G].dispose(),delete u[G])}}}function cR(Q,A,I){const g=I.isWebGL2;function C(){let Y=!1;const kA=new Ag;let cA=null;const vA=new Ag(0,0,0,0);return{setMask:function(_A){cA!==_A&&!Y&&(Q.colorMask(_A,_A,_A,_A),cA=_A)},setLocked:function(_A){Y=_A},setClear:function(_A,qI,RI,WI,IC){IC===!0&&(_A*=WI,qI*=WI,RI*=WI),kA.set(_A,qI,RI,WI),vA.equals(kA)===!1&&(Q.clearColor(_A,qI,RI,WI),vA.copy(kA))},reset:function(){Y=!1,cA=null,vA.set(-1,0,0,0)}}}function B(){let Y=!1,kA=null,cA=null,vA=null;return{setTest:function(_A){_A?bA(Q.DEPTH_TEST):pA(Q.DEPTH_TEST)},setMask:function(_A){kA!==_A&&!Y&&(Q.depthMask(_A),kA=_A)},setFunc:function(_A){if(cA!==_A){switch(_A){case $G:Q.depthFunc(Q.NEVER);break;case Ay:Q.depthFunc(Q.ALWAYS);break;case Iy:Q.depthFunc(Q.LESS);break;case ce:Q.depthFunc(Q.LEQUAL);break;case gy:Q.depthFunc(Q.EQUAL);break;case Cy:Q.depthFunc(Q.GEQUAL);break;case By:Q.depthFunc(Q.GREATER);break;case Qy:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}cA=_A}},setLocked:function(_A){Y=_A},setClear:function(_A){vA!==_A&&(Q.clearDepth(_A),vA=_A)},reset:function(){Y=!1,kA=null,cA=null,vA=null}}}function i(){let Y=!1,kA=null,cA=null,vA=null,_A=null,qI=null,RI=null,WI=null,IC=null;return{setTest:function(HI){Y||(HI?bA(Q.STENCIL_TEST):pA(Q.STENCIL_TEST))},setMask:function(HI){kA!==HI&&!Y&&(Q.stencilMask(HI),kA=HI)},setFunc:function(HI,ag,ig){(cA!==HI||vA!==ag||_A!==ig)&&(Q.stencilFunc(HI,ag,ig),cA=HI,vA=ag,_A=ig)},setOp:function(HI,ag,ig){(qI!==HI||RI!==ag||WI!==ig)&&(Q.stencilOp(HI,ag,ig),qI=HI,RI=ag,WI=ig)},setLocked:function(HI){Y=HI},setClear:function(HI){IC!==HI&&(Q.clearStencil(HI),IC=HI)},reset:function(){Y=!1,kA=null,cA=null,vA=null,_A=null,qI=null,RI=null,WI=null,IC=null}}}const E=new C,o=new B,t=new i,e=new WeakMap,a=new WeakMap;let s={},n={},r=new WeakMap,c=[],D=null,h=!1,S=null,l=null,y=null,M=null,U=null,k=null,K=null,u=new TA(0,0,0),G=0,N=!1,T=null,v=null,m=null,j=null,_=null;const V=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let AA=!1,IA=0;const oA=Q.getParameter(Q.VERSION);oA.indexOf("WebGL")!==-1?(IA=parseFloat(/^WebGL (\d)/.exec(oA)[1]),AA=IA>=1):oA.indexOf("OpenGL ES")!==-1&&(IA=parseFloat(/^OpenGL ES (\d)/.exec(oA)[1]),AA=IA>=2);let eA=null,NA={};const jA=Q.getParameter(Q.SCISSOR_BOX),QA=Q.getParameter(Q.VIEWPORT),wA=new Ag().fromArray(jA),HA=new Ag().fromArray(QA);function FA(Y,kA,cA,vA){const _A=new Uint8Array(4),qI=Q.createTexture();Q.bindTexture(Y,qI),Q.texParameteri(Y,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(Y,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let RI=0;RI<cA;RI++)g&&(Y===Q.TEXTURE_3D||Y===Q.TEXTURE_2D_ARRAY)?Q.texImage3D(kA,0,Q.RGBA,1,1,vA,0,Q.RGBA,Q.UNSIGNED_BYTE,_A):Q.texImage2D(kA+RI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,_A);return qI}const aA={};aA[Q.TEXTURE_2D]=FA(Q.TEXTURE_2D,Q.TEXTURE_2D,1),aA[Q.TEXTURE_CUBE_MAP]=FA(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(aA[Q.TEXTURE_2D_ARRAY]=FA(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),aA[Q.TEXTURE_3D]=FA(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1)),E.setClear(0,0,0,1),o.setClear(1),t.setClear(0),bA(Q.DEPTH_TEST),o.setFunc(ce),JA(!1),J(nD),bA(Q.CULL_FACE),nA(Ei);function bA(Y){s[Y]!==!0&&(Q.enable(Y),s[Y]=!0)}function pA(Y){s[Y]!==!1&&(Q.disable(Y),s[Y]=!1)}function RA(Y,kA){return n[Y]!==kA?(Q.bindFramebuffer(Y,kA),n[Y]=kA,g&&(Y===Q.DRAW_FRAMEBUFFER&&(n[Q.FRAMEBUFFER]=kA),Y===Q.FRAMEBUFFER&&(n[Q.DRAW_FRAMEBUFFER]=kA)),!0):!1}function L(Y,kA){let cA=c,vA=!1;if(Y)if(cA=r.get(kA),cA===void 0&&(cA=[],r.set(kA,cA)),Y.isWebGLMultipleRenderTargets){const _A=Y.texture;if(cA.length!==_A.length||cA[0]!==Q.COLOR_ATTACHMENT0){for(let qI=0,RI=_A.length;qI<RI;qI++)cA[qI]=Q.COLOR_ATTACHMENT0+qI;cA.length=_A.length,vA=!0}}else cA[0]!==Q.COLOR_ATTACHMENT0&&(cA[0]=Q.COLOR_ATTACHMENT0,vA=!0);else cA[0]!==Q.BACK&&(cA[0]=Q.BACK,vA=!0);vA&&(I.isWebGL2?Q.drawBuffers(cA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(cA))}function lA(Y){return D!==Y?(Q.useProgram(Y),D=Y,!0):!1}const sA={[Hi]:Q.FUNC_ADD,[HG]:Q.FUNC_SUBTRACT,[mG]:Q.FUNC_REVERSE_SUBTRACT};if(g)sA[hD]=Q.MIN,sA[cD]=Q.MAX;else{const Y=A.get("EXT_blend_minmax");Y!==null&&(sA[hD]=Y.MIN_EXT,sA[cD]=Y.MAX_EXT)}const MA={[TG]:Q.ZERO,[bG]:Q.ONE,[xG]:Q.SRC_COLOR,[ms]:Q.SRC_ALPHA,[WG]:Q.SRC_ALPHA_SATURATE,[ZG]:Q.DST_COLOR,[OG]:Q.DST_ALPHA,[_G]:Q.ONE_MINUS_SRC_COLOR,[Ts]:Q.ONE_MINUS_SRC_ALPHA,[PG]:Q.ONE_MINUS_DST_COLOR,[vG]:Q.ONE_MINUS_DST_ALPHA,[jG]:Q.CONSTANT_COLOR,[VG]:Q.ONE_MINUS_CONSTANT_COLOR,[XG]:Q.CONSTANT_ALPHA,[zG]:Q.ONE_MINUS_CONSTANT_ALPHA};function nA(Y,kA,cA,vA,_A,qI,RI,WI,IC,HI){if(Y===Ei){h===!0&&(pA(Q.BLEND),h=!1);return}if(h===!1&&(bA(Q.BLEND),h=!0),Y!==LG){if(Y!==S||HI!==N){if((l!==Hi||U!==Hi)&&(Q.blendEquation(Q.FUNC_ADD),l=Hi,U=Hi),HI)switch(Y){case jE:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case Hs:Q.blendFunc(Q.ONE,Q.ONE);break;case rD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case DD:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case jE:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case Hs:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case rD:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case DD:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}y=null,M=null,k=null,K=null,u.set(0,0,0),G=0,S=Y,N=HI}return}_A=_A||kA,qI=qI||cA,RI=RI||vA,(kA!==l||_A!==U)&&(Q.blendEquationSeparate(sA[kA],sA[_A]),l=kA,U=_A),(cA!==y||vA!==M||qI!==k||RI!==K)&&(Q.blendFuncSeparate(MA[cA],MA[vA],MA[qI],MA[RI]),y=cA,M=vA,k=qI,K=RI),(WI.equals(u)===!1||IC!==G)&&(Q.blendColor(WI.r,WI.g,WI.b,IC),u.copy(WI),G=IC),S=Y,N=!1}function ZA(Y,kA){Y.side===RQ?pA(Q.CULL_FACE):bA(Q.CULL_FACE);let cA=Y.side===QB;kA&&(cA=!cA),JA(cA),Y.blending===jE&&Y.transparent===!1?nA(Ei):nA(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),E.setMask(Y.colorWrite);const vA=Y.stencilWrite;t.setTest(vA),vA&&(t.setMask(Y.stencilWriteMask),t.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),t.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),X(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bA(Q.SAMPLE_ALPHA_TO_COVERAGE):pA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function JA(Y){T!==Y&&(Y?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),T=Y)}function J(Y){Y!==uG?(bA(Q.CULL_FACE),Y!==v&&(Y===nD?Q.cullFace(Q.BACK):Y===YG?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):pA(Q.CULL_FACE),v=Y}function F(Y){Y!==m&&(AA&&Q.lineWidth(Y),m=Y)}function X(Y,kA,cA){Y?(bA(Q.POLYGON_OFFSET_FILL),(j!==kA||_!==cA)&&(Q.polygonOffset(kA,cA),j=kA,_=cA)):pA(Q.POLYGON_OFFSET_FILL)}function yA(Y){Y?bA(Q.SCISSOR_TEST):pA(Q.SCISSOR_TEST)}function DA(Y){Y===void 0&&(Y=Q.TEXTURE0+V-1),eA!==Y&&(Q.activeTexture(Y),eA=Y)}function SA(Y,kA,cA){cA===void 0&&(eA===null?cA=Q.TEXTURE0+V-1:cA=eA);let vA=NA[cA];vA===void 0&&(vA={type:void 0,texture:void 0},NA[cA]=vA),(vA.type!==Y||vA.texture!==kA)&&(eA!==cA&&(Q.activeTexture(cA),eA=cA),Q.bindTexture(Y,kA||aA[Y]),vA.type=Y,vA.texture=kA)}function xA(){const Y=NA[eA];Y!==void 0&&Y.type!==void 0&&(Q.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function KA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $A(){try{Q.texSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rI(){try{Q.texSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function hA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function JI(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kI(){try{Q.texStorage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function sI(){try{Q.texStorage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function OA(){try{Q.texImage2D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function uA(){try{Q.texImage3D.apply(Q,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lI(Y){wA.equals(Y)===!1&&(Q.scissor(Y.x,Y.y,Y.z,Y.w),wA.copy(Y))}function H(Y){HA.equals(Y)===!1&&(Q.viewport(Y.x,Y.y,Y.z,Y.w),HA.copy(Y))}function UA(Y,kA){let cA=a.get(kA);cA===void 0&&(cA=new WeakMap,a.set(kA,cA));let vA=cA.get(Y);vA===void 0&&(vA=Q.getUniformBlockIndex(kA,Y.name),cA.set(Y,vA))}function qA(Y,kA){const vA=a.get(kA).get(Y);e.get(kA)!==vA&&(Q.uniformBlockBinding(kA,vA,Y.__bindingPointIndex),e.set(kA,vA))}function zA(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),g===!0&&(Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},eA=null,NA={},n={},r=new WeakMap,c=[],D=null,h=!1,S=null,l=null,y=null,M=null,U=null,k=null,K=null,u=new TA(0,0,0),G=0,N=!1,T=null,v=null,m=null,j=null,_=null,wA.set(0,0,Q.canvas.width,Q.canvas.height),HA.set(0,0,Q.canvas.width,Q.canvas.height),E.reset(),o.reset(),t.reset()}return{buffers:{color:E,depth:o,stencil:t},enable:bA,disable:pA,bindFramebuffer:RA,drawBuffers:L,useProgram:lA,setBlending:nA,setMaterial:ZA,setFlipSided:JA,setCullFace:J,setLineWidth:F,setPolygonOffset:X,setScissorTest:yA,activeTexture:DA,bindTexture:SA,unbindTexture:xA,compressedTexImage2D:KA,compressedTexImage3D:mA,texImage2D:OA,texImage3D:uA,updateUBOMapping:UA,uniformBlockBinding:qA,texStorage2D:kI,texStorage3D:sI,texSubImage2D:$A,texSubImage3D:rI,compressedTexSubImage2D:hA,compressedTexSubImage3D:JI,scissor:lI,viewport:H,reset:zA}}function lR(Q,A,I,g,C,B,i){const E=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function r(J,F){return n?new OffscreenCanvas(J,F):Re("canvas")}function c(J,F,X,yA){let DA=1;if((J.width>yA||J.height>yA)&&(DA=yA/Math.max(J.width,J.height)),DA<1||F===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const SA=F?_s:Math.floor,xA=SA(DA*J.width),KA=SA(DA*J.height);a===void 0&&(a=r(xA,KA));const mA=X?r(xA,KA):a;return mA.width=xA,mA.height=KA,mA.getContext("2d").drawImage(J,0,0,xA,KA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+xA+"x"+KA+")."),mA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function D(J){return ZD(J.width)&&ZD(J.height)}function h(J){return E?!1:J.wrapS!==mC||J.wrapT!==mC||J.minFilter!==Og&&J.minFilter!==Ug}function S(J,F){return J.generateMipmaps&&F&&J.minFilter!==Og&&J.minFilter!==Ug}function l(J){Q.generateMipmap(J)}function y(J,F,X,yA,DA=!1){if(E===!1)return F;if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let SA=F;if(F===Q.RED&&(X===Q.FLOAT&&(SA=Q.R32F),X===Q.HALF_FLOAT&&(SA=Q.R16F),X===Q.UNSIGNED_BYTE&&(SA=Q.R8)),F===Q.RED_INTEGER&&(X===Q.UNSIGNED_BYTE&&(SA=Q.R8UI),X===Q.UNSIGNED_SHORT&&(SA=Q.R16UI),X===Q.UNSIGNED_INT&&(SA=Q.R32UI),X===Q.BYTE&&(SA=Q.R8I),X===Q.SHORT&&(SA=Q.R16I),X===Q.INT&&(SA=Q.R32I)),F===Q.RG&&(X===Q.FLOAT&&(SA=Q.RG32F),X===Q.HALF_FLOAT&&(SA=Q.RG16F),X===Q.UNSIGNED_BYTE&&(SA=Q.RG8)),F===Q.RGBA){const xA=DA?Ne:PI.getTransfer(yA);X===Q.FLOAT&&(SA=Q.RGBA32F),X===Q.HALF_FLOAT&&(SA=Q.RGBA16F),X===Q.UNSIGNED_BYTE&&(SA=xA===og?Q.SRGB8_ALPHA8:Q.RGBA8),X===Q.UNSIGNED_SHORT_4_4_4_4&&(SA=Q.RGBA4),X===Q.UNSIGNED_SHORT_5_5_5_1&&(SA=Q.RGB5_A1)}return(SA===Q.R16F||SA===Q.R32F||SA===Q.RG16F||SA===Q.RG32F||SA===Q.RGBA16F||SA===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),SA}function M(J,F,X){return S(J,X)===!0||J.isFramebufferTexture&&J.minFilter!==Og&&J.minFilter!==Ug?Math.log2(Math.max(F.width,F.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?F.mipmaps.length:1}function U(J){return J===Og||J===bs||J===YE?Q.NEAREST:Q.LINEAR}function k(J){const F=J.target;F.removeEventListener("dispose",k),u(F),F.isVideoTexture&&e.delete(F)}function K(J){const F=J.target;F.removeEventListener("dispose",K),N(F)}function u(J){const F=g.get(J);if(F.__webglInit===void 0)return;const X=J.source,yA=s.get(X);if(yA){const DA=yA[F.__cacheKey];DA.usedTimes--,DA.usedTimes===0&&G(J),Object.keys(yA).length===0&&s.delete(X)}g.remove(J)}function G(J){const F=g.get(J);Q.deleteTexture(F.__webglTexture);const X=J.source,yA=s.get(X);delete yA[F.__cacheKey],i.memory.textures--}function N(J){const F=J.texture,X=g.get(J),yA=g.get(F);if(yA.__webglTexture!==void 0&&(Q.deleteTexture(yA.__webglTexture),i.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let DA=0;DA<6;DA++){if(Array.isArray(X.__webglFramebuffer[DA]))for(let SA=0;SA<X.__webglFramebuffer[DA].length;SA++)Q.deleteFramebuffer(X.__webglFramebuffer[DA][SA]);else Q.deleteFramebuffer(X.__webglFramebuffer[DA]);X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer[DA])}else{if(Array.isArray(X.__webglFramebuffer))for(let DA=0;DA<X.__webglFramebuffer.length;DA++)Q.deleteFramebuffer(X.__webglFramebuffer[DA]);else Q.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&Q.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let DA=0;DA<X.__webglColorRenderbuffer.length;DA++)X.__webglColorRenderbuffer[DA]&&Q.deleteRenderbuffer(X.__webglColorRenderbuffer[DA]);X.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let DA=0,SA=F.length;DA<SA;DA++){const xA=g.get(F[DA]);xA.__webglTexture&&(Q.deleteTexture(xA.__webglTexture),i.memory.textures--),g.remove(F[DA])}g.remove(F),g.remove(J)}let T=0;function v(){T=0}function m(){const J=T;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),T+=1,J}function j(J){const F=[];return F.push(J.wrapS),F.push(J.wrapT),F.push(J.wrapR||0),F.push(J.magFilter),F.push(J.minFilter),F.push(J.anisotropy),F.push(J.internalFormat),F.push(J.format),F.push(J.type),F.push(J.generateMipmaps),F.push(J.premultiplyAlpha),F.push(J.flipY),F.push(J.unpackAlignment),F.push(J.colorSpace),F.join()}function _(J,F){const X=g.get(J);if(J.isVideoTexture&&ZA(J),J.isRenderTargetTexture===!1&&J.version>0&&X.__version!==J.version){const yA=J.image;if(yA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wA(X,J,F);return}}I.bindTexture(Q.TEXTURE_2D,X.__webglTexture,Q.TEXTURE0+F)}function V(J,F){const X=g.get(J);if(J.version>0&&X.__version!==J.version){wA(X,J,F);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,X.__webglTexture,Q.TEXTURE0+F)}function AA(J,F){const X=g.get(J);if(J.version>0&&X.__version!==J.version){wA(X,J,F);return}I.bindTexture(Q.TEXTURE_3D,X.__webglTexture,Q.TEXTURE0+F)}function IA(J,F){const X=g.get(J);if(J.version>0&&X.__version!==J.version){HA(X,J,F);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,X.__webglTexture,Q.TEXTURE0+F)}const oA={[Se]:Q.REPEAT,[mC]:Q.CLAMP_TO_EDGE,[Ge]:Q.MIRRORED_REPEAT},eA={[Og]:Q.NEAREST,[bs]:Q.NEAREST_MIPMAP_NEAREST,[YE]:Q.NEAREST_MIPMAP_LINEAR,[Ug]:Q.LINEAR,[Be]:Q.LINEAR_MIPMAP_NEAREST,[qQ]:Q.LINEAR_MIPMAP_LINEAR},NA={[Fy]:Q.NEVER,[fy]:Q.ALWAYS,[py]:Q.LESS,[Oh]:Q.LEQUAL,[dy]:Q.EQUAL,[qy]:Q.GEQUAL,[Ry]:Q.GREATER,[Jy]:Q.NOTEQUAL};function jA(J,F,X){if(F.type===XB&&A.has("OES_texture_float_linear")===!1&&(F.magFilter===Ug||F.magFilter===Be||F.magFilter===YE||F.magFilter===qQ||F.minFilter===Ug||F.minFilter===Be||F.minFilter===YE||F.minFilter===qQ)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(Q.texParameteri(J,Q.TEXTURE_WRAP_S,oA[F.wrapS]),Q.texParameteri(J,Q.TEXTURE_WRAP_T,oA[F.wrapT]),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,oA[F.wrapR]),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,eA[F.magFilter]),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,eA[F.minFilter])):(Q.texParameteri(J,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(J,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE),(F.wrapS!==mC||F.wrapT!==mC)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,U(F.magFilter)),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,U(F.minFilter)),F.minFilter!==Og&&F.minFilter!==Ug&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),F.compareFunction&&(Q.texParameteri(J,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(J,Q.TEXTURE_COMPARE_FUNC,NA[F.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const yA=A.get("EXT_texture_filter_anisotropic");if(F.magFilter===Og||F.minFilter!==YE&&F.minFilter!==qQ||F.type===XB&&A.has("OES_texture_float_linear")===!1||E===!1&&F.type===et&&A.has("OES_texture_half_float_linear")===!1)return;(F.anisotropy>1||g.get(F).__currentAnisotropy)&&(Q.texParameterf(J,yA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,C.getMaxAnisotropy())),g.get(F).__currentAnisotropy=F.anisotropy)}}function QA(J,F){let X=!1;J.__webglInit===void 0&&(J.__webglInit=!0,F.addEventListener("dispose",k));const yA=F.source;let DA=s.get(yA);DA===void 0&&(DA={},s.set(yA,DA));const SA=j(F);if(SA!==J.__cacheKey){DA[SA]===void 0&&(DA[SA]={texture:Q.createTexture(),usedTimes:0},i.memory.textures++,X=!0),DA[SA].usedTimes++;const xA=DA[J.__cacheKey];xA!==void 0&&(DA[J.__cacheKey].usedTimes--,xA.usedTimes===0&&G(F)),J.__cacheKey=SA,J.__webglTexture=DA[SA].texture}return X}function wA(J,F,X){let yA=Q.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(yA=Q.TEXTURE_2D_ARRAY),F.isData3DTexture&&(yA=Q.TEXTURE_3D);const DA=QA(J,F),SA=F.source;I.bindTexture(yA,J.__webglTexture,Q.TEXTURE0+X);const xA=g.get(SA);if(SA.version!==xA.__version||DA===!0){I.activeTexture(Q.TEXTURE0+X);const KA=PI.getPrimaries(PI.workingColorSpace),mA=F.colorSpace===uB?null:PI.getPrimaries(F.colorSpace),$A=F.colorSpace===uB||KA===mA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,F.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,F.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,$A);const rI=h(F)&&D(F.image)===!1;let hA=c(F.image,rI,!1,C.maxTextureSize);hA=JA(F,hA);const JI=D(hA)||E,kI=B.convert(F.format,F.colorSpace);let sI=B.convert(F.type),OA=y(F.internalFormat,kI,sI,F.colorSpace,F.isVideoTexture);jA(yA,F,JI);let uA;const lI=F.mipmaps,H=E&&F.isVideoTexture!==!0&&OA!==xh,UA=xA.__version===void 0||DA===!0,qA=SA.dataReady,zA=M(F,hA,JI);if(F.isDepthTexture)OA=Q.DEPTH_COMPONENT,E?F.type===XB?OA=Q.DEPTH_COMPONENT32F:F.type===Qi?OA=Q.DEPTH_COMPONENT24:F.type===Oi?OA=Q.DEPTH24_STENCIL8:OA=Q.DEPTH_COMPONENT16:F.type===XB&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===vi&&OA===Q.DEPTH_COMPONENT&&F.type!==Bn&&F.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=Qi,sI=B.convert(F.type)),F.format===go&&OA===Q.DEPTH_COMPONENT&&(OA=Q.DEPTH_STENCIL,F.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=Oi,sI=B.convert(F.type))),UA&&(H?I.texStorage2D(Q.TEXTURE_2D,1,OA,hA.width,hA.height):I.texImage2D(Q.TEXTURE_2D,0,OA,hA.width,hA.height,0,kI,sI,null));else if(F.isDataTexture)if(lI.length>0&&JI){H&&UA&&I.texStorage2D(Q.TEXTURE_2D,zA,OA,lI[0].width,lI[0].height);for(let Y=0,kA=lI.length;Y<kA;Y++)uA=lI[Y],H?qA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,uA.width,uA.height,kI,sI,uA.data):I.texImage2D(Q.TEXTURE_2D,Y,OA,uA.width,uA.height,0,kI,sI,uA.data);F.generateMipmaps=!1}else H?(UA&&I.texStorage2D(Q.TEXTURE_2D,zA,OA,hA.width,hA.height),qA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,hA.width,hA.height,kI,sI,hA.data)):I.texImage2D(Q.TEXTURE_2D,0,OA,hA.width,hA.height,0,kI,sI,hA.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){H&&UA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,zA,OA,lI[0].width,lI[0].height,hA.depth);for(let Y=0,kA=lI.length;Y<kA;Y++)uA=lI[Y],F.format!==aB?kI!==null?H?qA&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,uA.width,uA.height,hA.depth,kI,uA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,Y,OA,uA.width,uA.height,hA.depth,0,uA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?qA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,Y,0,0,0,uA.width,uA.height,hA.depth,kI,sI,uA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,Y,OA,uA.width,uA.height,hA.depth,0,kI,sI,uA.data)}else{H&&UA&&I.texStorage2D(Q.TEXTURE_2D,zA,OA,lI[0].width,lI[0].height);for(let Y=0,kA=lI.length;Y<kA;Y++)uA=lI[Y],F.format!==aB?kI!==null?H?qA&&I.compressedTexSubImage2D(Q.TEXTURE_2D,Y,0,0,uA.width,uA.height,kI,uA.data):I.compressedTexImage2D(Q.TEXTURE_2D,Y,OA,uA.width,uA.height,0,uA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?qA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,uA.width,uA.height,kI,sI,uA.data):I.texImage2D(Q.TEXTURE_2D,Y,OA,uA.width,uA.height,0,kI,sI,uA.data)}else if(F.isDataArrayTexture)H?(UA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,zA,OA,hA.width,hA.height,hA.depth),qA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,hA.width,hA.height,hA.depth,kI,sI,hA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,OA,hA.width,hA.height,hA.depth,0,kI,sI,hA.data);else if(F.isData3DTexture)H?(UA&&I.texStorage3D(Q.TEXTURE_3D,zA,OA,hA.width,hA.height,hA.depth),qA&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,hA.width,hA.height,hA.depth,kI,sI,hA.data)):I.texImage3D(Q.TEXTURE_3D,0,OA,hA.width,hA.height,hA.depth,0,kI,sI,hA.data);else if(F.isFramebufferTexture){if(UA)if(H)I.texStorage2D(Q.TEXTURE_2D,zA,OA,hA.width,hA.height);else{let Y=hA.width,kA=hA.height;for(let cA=0;cA<zA;cA++)I.texImage2D(Q.TEXTURE_2D,cA,OA,Y,kA,0,kI,sI,null),Y>>=1,kA>>=1}}else if(lI.length>0&&JI){H&&UA&&I.texStorage2D(Q.TEXTURE_2D,zA,OA,lI[0].width,lI[0].height);for(let Y=0,kA=lI.length;Y<kA;Y++)uA=lI[Y],H?qA&&I.texSubImage2D(Q.TEXTURE_2D,Y,0,0,kI,sI,uA):I.texImage2D(Q.TEXTURE_2D,Y,OA,kI,sI,uA);F.generateMipmaps=!1}else H?(UA&&I.texStorage2D(Q.TEXTURE_2D,zA,OA,hA.width,hA.height),qA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,kI,sI,hA)):I.texImage2D(Q.TEXTURE_2D,0,OA,kI,sI,hA);S(F,JI)&&l(yA),xA.__version=SA.version,F.onUpdate&&F.onUpdate(F)}J.__version=F.version}function HA(J,F,X){if(F.image.length!==6)return;const yA=QA(J,F),DA=F.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,J.__webglTexture,Q.TEXTURE0+X);const SA=g.get(DA);if(DA.version!==SA.__version||yA===!0){I.activeTexture(Q.TEXTURE0+X);const xA=PI.getPrimaries(PI.workingColorSpace),KA=F.colorSpace===uB?null:PI.getPrimaries(F.colorSpace),mA=F.colorSpace===uB||xA===KA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,F.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,F.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,mA);const $A=F.isCompressedTexture||F.image[0].isCompressedTexture,rI=F.image[0]&&F.image[0].isDataTexture,hA=[];for(let Y=0;Y<6;Y++)!$A&&!rI?hA[Y]=c(F.image[Y],!1,!0,C.maxCubemapSize):hA[Y]=rI?F.image[Y].image:F.image[Y],hA[Y]=JA(F,hA[Y]);const JI=hA[0],kI=D(JI)||E,sI=B.convert(F.format,F.colorSpace),OA=B.convert(F.type),uA=y(F.internalFormat,sI,OA,F.colorSpace),lI=E&&F.isVideoTexture!==!0,H=SA.__version===void 0||yA===!0,UA=DA.dataReady;let qA=M(F,JI,kI);jA(Q.TEXTURE_CUBE_MAP,F,kI);let zA;if($A){lI&&H&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,qA,uA,JI.width,JI.height);for(let Y=0;Y<6;Y++){zA=hA[Y].mipmaps;for(let kA=0;kA<zA.length;kA++){const cA=zA[kA];F.format!==aB?sI!==null?lI?UA&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA,0,0,cA.width,cA.height,sI,cA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA,uA,cA.width,cA.height,0,cA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lI?UA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA,0,0,cA.width,cA.height,sI,OA,cA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA,uA,cA.width,cA.height,0,sI,OA,cA.data)}}}else{zA=F.mipmaps,lI&&H&&(zA.length>0&&qA++,I.texStorage2D(Q.TEXTURE_CUBE_MAP,qA,uA,hA[0].width,hA[0].height));for(let Y=0;Y<6;Y++)if(rI){lI?UA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,hA[Y].width,hA[Y].height,sI,OA,hA[Y].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,uA,hA[Y].width,hA[Y].height,0,sI,OA,hA[Y].data);for(let kA=0;kA<zA.length;kA++){const vA=zA[kA].image[Y].image;lI?UA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA+1,0,0,vA.width,vA.height,sI,OA,vA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA+1,uA,vA.width,vA.height,0,sI,OA,vA.data)}}else{lI?UA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,sI,OA,hA[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,uA,sI,OA,hA[Y]);for(let kA=0;kA<zA.length;kA++){const cA=zA[kA];lI?UA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA+1,0,0,sI,OA,cA.image[Y]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kA+1,uA,sI,OA,cA.image[Y])}}}S(F,kI)&&l(Q.TEXTURE_CUBE_MAP),SA.__version=DA.version,F.onUpdate&&F.onUpdate(F)}J.__version=F.version}function FA(J,F,X,yA,DA,SA){const xA=B.convert(X.format,X.colorSpace),KA=B.convert(X.type),mA=y(X.internalFormat,xA,KA,X.colorSpace);if(!g.get(F).__hasExternalTextures){const rI=Math.max(1,F.width>>SA),hA=Math.max(1,F.height>>SA);DA===Q.TEXTURE_3D||DA===Q.TEXTURE_2D_ARRAY?I.texImage3D(DA,SA,mA,rI,hA,F.depth,0,xA,KA,null):I.texImage2D(DA,SA,mA,rI,hA,0,xA,KA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,J),nA(F)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,yA,DA,g.get(X).__webglTexture,0,MA(F)):(DA===Q.TEXTURE_2D||DA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&DA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,yA,DA,g.get(X).__webglTexture,SA),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function aA(J,F,X){if(Q.bindRenderbuffer(Q.RENDERBUFFER,J),F.depthBuffer&&!F.stencilBuffer){let yA=E===!0?Q.DEPTH_COMPONENT24:Q.DEPTH_COMPONENT16;if(X||nA(F)){const DA=F.depthTexture;DA&&DA.isDepthTexture&&(DA.type===XB?yA=Q.DEPTH_COMPONENT32F:DA.type===Qi&&(yA=Q.DEPTH_COMPONENT24));const SA=MA(F);nA(F)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,SA,yA,F.width,F.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,SA,yA,F.width,F.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,yA,F.width,F.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,J)}else if(F.depthBuffer&&F.stencilBuffer){const yA=MA(F);X&&nA(F)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,yA,Q.DEPTH24_STENCIL8,F.width,F.height):nA(F)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,yA,Q.DEPTH24_STENCIL8,F.width,F.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,F.width,F.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,J)}else{const yA=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let DA=0;DA<yA.length;DA++){const SA=yA[DA],xA=B.convert(SA.format,SA.colorSpace),KA=B.convert(SA.type),mA=y(SA.internalFormat,xA,KA,SA.colorSpace),$A=MA(F);X&&nA(F)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,$A,mA,F.width,F.height):nA(F)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,$A,mA,F.width,F.height):Q.renderbufferStorage(Q.RENDERBUFFER,mA,F.width,F.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function bA(J,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,J),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),_(F.depthTexture,0);const yA=g.get(F.depthTexture).__webglTexture,DA=MA(F);if(F.depthTexture.format===vi)nA(F)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,yA,0,DA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,yA,0);else if(F.depthTexture.format===go)nA(F)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,yA,0,DA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,yA,0);else throw new Error("Unknown depthTexture format")}function pA(J){const F=g.get(J),X=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!F.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");bA(F.__webglFramebuffer,J)}else if(X){F.__webglDepthbuffer=[];for(let yA=0;yA<6;yA++)I.bindFramebuffer(Q.FRAMEBUFFER,F.__webglFramebuffer[yA]),F.__webglDepthbuffer[yA]=Q.createRenderbuffer(),aA(F.__webglDepthbuffer[yA],J,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer=Q.createRenderbuffer(),aA(F.__webglDepthbuffer,J,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function RA(J,F,X){const yA=g.get(J);F!==void 0&&FA(yA.__webglFramebuffer,J,J.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),X!==void 0&&pA(J)}function L(J){const F=J.texture,X=g.get(J),yA=g.get(F);J.addEventListener("dispose",K),J.isWebGLMultipleRenderTargets!==!0&&(yA.__webglTexture===void 0&&(yA.__webglTexture=Q.createTexture()),yA.__version=F.version,i.memory.textures++);const DA=J.isWebGLCubeRenderTarget===!0,SA=J.isWebGLMultipleRenderTargets===!0,xA=D(J)||E;if(DA){X.__webglFramebuffer=[];for(let KA=0;KA<6;KA++)if(E&&F.mipmaps&&F.mipmaps.length>0){X.__webglFramebuffer[KA]=[];for(let mA=0;mA<F.mipmaps.length;mA++)X.__webglFramebuffer[KA][mA]=Q.createFramebuffer()}else X.__webglFramebuffer[KA]=Q.createFramebuffer()}else{if(E&&F.mipmaps&&F.mipmaps.length>0){X.__webglFramebuffer=[];for(let KA=0;KA<F.mipmaps.length;KA++)X.__webglFramebuffer[KA]=Q.createFramebuffer()}else X.__webglFramebuffer=Q.createFramebuffer();if(SA)if(C.drawBuffers){const KA=J.texture;for(let mA=0,$A=KA.length;mA<$A;mA++){const rI=g.get(KA[mA]);rI.__webglTexture===void 0&&(rI.__webglTexture=Q.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(E&&J.samples>0&&nA(J)===!1){const KA=SA?F:[F];X.__webglMultisampledFramebuffer=Q.createFramebuffer(),X.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let mA=0;mA<KA.length;mA++){const $A=KA[mA];X.__webglColorRenderbuffer[mA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,X.__webglColorRenderbuffer[mA]);const rI=B.convert($A.format,$A.colorSpace),hA=B.convert($A.type),JI=y($A.internalFormat,rI,hA,$A.colorSpace,J.isXRRenderTarget===!0),kI=MA(J);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,kI,JI,J.width,J.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+mA,Q.RENDERBUFFER,X.__webglColorRenderbuffer[mA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),J.depthBuffer&&(X.__webglDepthRenderbuffer=Q.createRenderbuffer(),aA(X.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(DA){I.bindTexture(Q.TEXTURE_CUBE_MAP,yA.__webglTexture),jA(Q.TEXTURE_CUBE_MAP,F,xA);for(let KA=0;KA<6;KA++)if(E&&F.mipmaps&&F.mipmaps.length>0)for(let mA=0;mA<F.mipmaps.length;mA++)FA(X.__webglFramebuffer[KA][mA],J,F,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+KA,mA);else FA(X.__webglFramebuffer[KA],J,F,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+KA,0);S(F,xA)&&l(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(SA){const KA=J.texture;for(let mA=0,$A=KA.length;mA<$A;mA++){const rI=KA[mA],hA=g.get(rI);I.bindTexture(Q.TEXTURE_2D,hA.__webglTexture),jA(Q.TEXTURE_2D,rI,xA),FA(X.__webglFramebuffer,J,rI,Q.COLOR_ATTACHMENT0+mA,Q.TEXTURE_2D,0),S(rI,xA)&&l(Q.TEXTURE_2D)}I.unbindTexture()}else{let KA=Q.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(E?KA=J.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(KA,yA.__webglTexture),jA(KA,F,xA),E&&F.mipmaps&&F.mipmaps.length>0)for(let mA=0;mA<F.mipmaps.length;mA++)FA(X.__webglFramebuffer[mA],J,F,Q.COLOR_ATTACHMENT0,KA,mA);else FA(X.__webglFramebuffer,J,F,Q.COLOR_ATTACHMENT0,KA,0);S(F,xA)&&l(KA),I.unbindTexture()}J.depthBuffer&&pA(J)}function lA(J){const F=D(J)||E,X=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let yA=0,DA=X.length;yA<DA;yA++){const SA=X[yA];if(S(SA,F)){const xA=J.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,KA=g.get(SA).__webglTexture;I.bindTexture(xA,KA),l(xA),I.unbindTexture()}}}function sA(J){if(E&&J.samples>0&&nA(J)===!1){const F=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],X=J.width,yA=J.height;let DA=Q.COLOR_BUFFER_BIT;const SA=[],xA=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,KA=g.get(J),mA=J.isWebGLMultipleRenderTargets===!0;if(mA)for(let $A=0;$A<F.length;$A++)I.bindFramebuffer(Q.FRAMEBUFFER,KA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$A,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,KA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$A,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,KA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,KA.__webglFramebuffer);for(let $A=0;$A<F.length;$A++){SA.push(Q.COLOR_ATTACHMENT0+$A),J.depthBuffer&&SA.push(xA);const rI=KA.__ignoreDepthValues!==void 0?KA.__ignoreDepthValues:!1;if(rI===!1&&(J.depthBuffer&&(DA|=Q.DEPTH_BUFFER_BIT),J.stencilBuffer&&(DA|=Q.STENCIL_BUFFER_BIT)),mA&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,KA.__webglColorRenderbuffer[$A]),rI===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[xA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[xA])),mA){const hA=g.get(F[$A]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,hA,0)}Q.blitFramebuffer(0,0,X,yA,0,0,X,yA,DA,Q.NEAREST),t&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,SA)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),mA)for(let $A=0;$A<F.length;$A++){I.bindFramebuffer(Q.FRAMEBUFFER,KA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$A,Q.RENDERBUFFER,KA.__webglColorRenderbuffer[$A]);const rI=g.get(F[$A]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,KA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$A,Q.TEXTURE_2D,rI,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,KA.__webglMultisampledFramebuffer)}}function MA(J){return Math.min(C.maxSamples,J.samples)}function nA(J){const F=g.get(J);return E&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function ZA(J){const F=i.render.frame;e.get(J)!==F&&(e.set(J,F),J.update())}function JA(J,F){const X=J.colorSpace,yA=J.format,DA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||J.format===xs||X!==mQ&&X!==uB&&(PI.getTransfer(X)===og?E===!1?A.has("EXT_sRGB")===!0&&yA===aB?(J.format=xs,J.minFilter=Ug,J.generateMipmaps=!1):F=Zh.sRGBToLinear(F):(yA!==aB||DA!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),F}this.allocateTextureUnit=m,this.resetTextureUnits=v,this.setTexture2D=_,this.setTexture2DArray=V,this.setTexture3D=AA,this.setTextureCube=IA,this.rebindTextures=RA,this.setupRenderTarget=L,this.updateRenderTargetMipmap=lA,this.updateMultisampleRenderTarget=sA,this.setupDepthRenderbuffer=pA,this.setupFrameBufferTexture=FA,this.useMultisampledRTT=nA}function Vy(Q,A,I){const g=I.isWebGL2;function C(B,i=uB){let E;const o=PI.getTransfer(i);if(B===ti)return Q.UNSIGNED_BYTE;if(B===Lh)return Q.UNSIGNED_SHORT_4_4_4_4;if(B===Hh)return Q.UNSIGNED_SHORT_5_5_5_1;if(B===ry)return Q.BYTE;if(B===Dy)return Q.SHORT;if(B===Bn)return Q.UNSIGNED_SHORT;if(B===Yh)return Q.INT;if(B===Qi)return Q.UNSIGNED_INT;if(B===XB)return Q.FLOAT;if(B===et)return g?Q.HALF_FLOAT:(E=A.get("OES_texture_half_float"),E!==null?E.HALF_FLOAT_OES:null);if(B===hy)return Q.ALPHA;if(B===aB)return Q.RGBA;if(B===cy)return Q.LUMINANCE;if(B===ly)return Q.LUMINANCE_ALPHA;if(B===vi)return Q.DEPTH_COMPONENT;if(B===go)return Q.DEPTH_STENCIL;if(B===xs)return E=A.get("EXT_sRGB"),E!==null?E.SRGB_ALPHA_EXT:null;if(B===wy)return Q.RED;if(B===mh)return Q.RED_INTEGER;if(B===Sy)return Q.RG;if(B===Th)return Q.RG_INTEGER;if(B===bh)return Q.RGBA_INTEGER;if(B===ks||B===Ms||B===Us||B===Ns)if(o===og)if(E=A.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(B===ks)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===Ms)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===Us)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===Ns)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=A.get("WEBGL_compressed_texture_s3tc"),E!==null){if(B===ks)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===Ms)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===Us)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===Ns)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===wD||B===SD||B===GD||B===yD)if(E=A.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(B===wD)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===SD)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===GD)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===yD)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===xh)return E=A.get("WEBGL_compressed_texture_etc1"),E!==null?E.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===kD||B===MD)if(E=A.get("WEBGL_compressed_texture_etc"),E!==null){if(B===kD)return o===og?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(B===MD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===UD||B===ND||B===KD||B===FD||B===pD||B===dD||B===RD||B===JD||B===qD||B===fD||B===uD||B===YD||B===LD||B===HD)if(E=A.get("WEBGL_compressed_texture_astc"),E!==null){if(B===UD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===ND)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===KD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===FD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===pD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===dD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===RD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===JD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===qD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===fD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===uD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===YD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===LD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===HD)return o===og?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===Ks||B===mD||B===TD)if(E=A.get("EXT_texture_compression_bptc"),E!==null){if(B===Ks)return o===og?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(B===mD)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(B===TD)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(B===Gy||B===bD||B===xD||B===_D)if(E=A.get("EXT_texture_compression_rgtc"),E!==null){if(B===Ks)return E.COMPRESSED_RED_RGTC1_EXT;if(B===bD)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===xD)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===_D)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===Oi?g?Q.UNSIGNED_INT_24_8:(E=A.get("WEBGL_depth_texture"),E!==null?E.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class Xy extends SC{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class xE extends bI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wR={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xE,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xE,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new f,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new f),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xE,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new f,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new f),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,i=null;const E=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){i=!0;for(const c of A.hand.values()){const D=I.getJointPose(c,g),h=this._getHandJoint(t,c);D!==null&&(h.matrix.fromArray(D.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=D.radius),h.visible=D!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,r=.005;t.inputState.pinching&&s>n+r?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-r&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(wR)))}return E!==null&&(E.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new xE;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const SR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
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

    ${iI.logdepthbuf_pars_vertex}
    ${iI.fog_pars_vertex}

    attribute vec3 previous;
    attribute vec3 next;
    attribute float side;
    attribute float width;
    attribute float counters;

    uniform vec2 resolution;
    uniform float lineWidth;
    uniform vec3 color;
    uniform float opacity;
    uniform float sizeAttenuation;
    uniform float scaleDown;

    varying vec2 vUV;
    varying vec4 vColor;
    varying float vCounters;

    vec2 intoScreen(vec4 i) {
        return resolution * (0.5 * i.xy / i.w + 0.5);
    }

    void main() {
        float aspect = resolution.y / resolution.x;

        mat4 m = projectionMatrix * modelViewMatrix;

        vec4 currentClip = m * vec4( position, 1.0 );
        vec4 prevClip = m * vec4( previous, 1.0 );
        vec4 nextClip = m * vec4( next, 1.0 );

        vec4 currentNormed = currentClip / currentClip.w;
        vec4 prevNormed = prevClip / prevClip.w;
        vec4 nextNormed = nextClip / nextClip.w;

        vec2 currentScreen = intoScreen(currentNormed);
        vec2 prevScreen = intoScreen(prevNormed);
        vec2 nextScreen = intoScreen(nextNormed);

        float actualWidth = lineWidth * width;

        vec2 dir;
        if(nextScreen == currentScreen) {
            dir = normalize( currentScreen - prevScreen );
        } else if(prevScreen == currentScreen) {
            dir = normalize( nextScreen - currentScreen );
        } else {
            vec2 inDir = currentScreen - prevScreen;
            vec2 outDir = nextScreen - currentScreen;
            vec2 fullDir = nextScreen - prevScreen;

            if(length(fullDir) > 0.0) {
                dir = normalize(fullDir);
            } else if(length(inDir) > 0.0){
                dir = normalize(inDir);
            } else {
                dir = normalize(outDir);
            }
        }

        vec2 normal = vec2(-dir.y, dir.x);

        if(sizeAttenuation != 0.0) {
            normal /= currentClip.w;
            normal *= min(resolution.x, resolution.y);
        }

        if (scaleDown > 0.0) {
            float dist = length(nextNormed - prevNormed);
            normal *= smoothstep(0.0, scaleDown, dist);
        }

        vec2 offsetInScreen = actualWidth * normal * side * 0.5;

        vec2 withOffsetScreen = currentScreen + offsetInScreen;
        vec3 withOffsetNormed = vec3((2.0 * withOffsetScreen/resolution - 1.0), currentNormed.z);

        vCounters = counters;
        vColor = vec4( color, opacity );
        vUV = uv;

        gl_Position = currentClip.w * vec4(withOffsetNormed, 1.0);

        ${iI.logdepthbuf_vertex}
        ${iI.fog_vertex}
    }
`,Uu=`
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

	${iI.tonemapping_fragment}
	${iI.colorspace_fragment}
}`,Nu=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * viewMatrix * modelPosition;
	vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
	vPosition = modelPosition.xyz;
	vNormal = modelNormal.xyz;
}`,Ku=Q=>({ref:Q&1}),RS=Q=>({ref:Q[0]});function Fu(Q){let A;const I=Q[8].default,g=wB(I,Q,Q[10],RS);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&SB(g,I,C,C[10],A?yB(I,C[10],B,Ku):GB(C[10]),RS)},i(C){A||(AI(g,C),A=!0)},o(C){oI(g,C),A=!1},d(C){g&&g.d(C)}}}function pu(Q){let A,I;const g=[{is:Q[0]},{fragmentShader:Uu},{vertexShader:Nu},{transparent:!0},{blending:Hs},{depthTest:!1},Q[3]];let C={$$slots:{default:[Fu]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=cQ(C,g[B]);return A=new _C({props:C}),Q[9](A),{c(){cg(A.$$.fragment)},l(B){lg(A.$$.fragment,B)},m(B,i){wg(A,B,i),I=!0},p(B,[i]){const E=i&9?Dh(g,[i&1&&{is:B[0]},g[1],g[2],g[3],g[4],g[5],i&8&&hh(B[3])]):{};i&1025&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(AI(A.$$.fragment,B),I=!0)},o(B){oI(A.$$.fragment,B),I=!1},d(B){Q[9](null),Sg(A,B)}}}function du(Q,A,I){const g=["falloff","glowInternalRadius","glowColor","glowSharpness"];let C=Zi(A,g),B,{$$slots:i={},$$scope:E}=A,{falloff:o=.1}=A,{glowInternalRadius:t=6}=A,{glowColor:e="green"}=A,{glowSharpness:a=1}=A,s=new gQ({uniforms:{falloff:{value:o},glowInternalRadius:{value:t},glowColor:{value:new TA(e)},glowSharpness:{value:a}}}),{invalidate:n}=ro();const r=$k();LQ(Q,r,D=>I(1,B=D));function c(D){nh[D?"unshift":"push"](()=>{B=D,r.set(B)})}return Q.$$set=D=>{A=cQ(cQ({},A),te(D)),I(3,C=Zi(A,g)),"falloff"in D&&I(4,o=D.falloff),"glowInternalRadius"in D&&I(5,t=D.glowInternalRadius),"glowColor"in D&&I(6,e=D.glowColor),"glowSharpness"in D&&I(7,a=D.glowSharpness),"$$scope"in D&&I(10,E=D.$$scope)},Q.$$.update=()=>{Q.$$.dirty&240&&(I(0,s.uniforms.falloff.value=o,s),I(0,s.uniforms.glowInternalRadius.value=t,s),I(0,s.uniforms.glowColor.value=new TA(e),s),I(0,s.uniforms.glowSharpness.value=a,s),n())},[s,B,r,C,o,t,e,a,i,c,E]}class Ru extends kB{constructor(A){super(),MB(this,A,du,pu,lB,{falloff:4,glowInternalRadius:5,glowColor:6,glowSharpness:7})}}const QY=`
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

	${iI.tonemapping_fragment}
	${iI.colorspace_fragment}
}`,Ju=`

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
`,qu=`

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
`,fu=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,uu=fu,Yu=`
	${Ju}
	${qu}
`;`${uu}${Yu}${iI.tonemapping_fragment}${iI.colorspace_fragment}`;function Lu(Q){let A,I,g,C;return A=new _C.MeshBasicMaterial({props:{color:"yellow"}}),g=new _C.SphereGeometry({props:{args:[6]}}),{c(){cg(A.$$.fragment),I=$i(),cg(g.$$.fragment)},l(B){lg(A.$$.fragment,B),I=AE(B),lg(g.$$.fragment,B)},m(B,i){wg(A,B,i),AQ(B,I,i),wg(g,B,i),C=!0},p:rh,i(B){C||(AI(A.$$.fragment,B),AI(g.$$.fragment,B),C=!0)},o(B){oI(A.$$.fragment,B),oI(g.$$.fragment,B),C=!1},d(B){B&&xB(I),Sg(A,B),Sg(g,B)}}}function Hu(Q){let A,I,g,C;return A=new Ru({props:{glowColor:"yellow"}}),g=new _C.SphereGeometry({props:{args:[10]}}),{c(){cg(A.$$.fragment),I=$i(),cg(g.$$.fragment)},l(B){lg(A.$$.fragment,B),I=AE(B),lg(g.$$.fragment,B)},m(B,i){wg(A,B,i),AQ(B,I,i),wg(g,B,i),C=!0},p:rh,i(B){C||(AI(A.$$.fragment,B),AI(g.$$.fragment,B),C=!0)},o(B){oI(A.$$.fragment,B),oI(g.$$.fragment,B),C=!1},d(B){B&&xB(I),Sg(A,B),Sg(g,B)}}}function mu(Q){let A,I,g,C;return A=new _C.Mesh({props:{$$slots:{default:[Lu]},$$scope:{ctx:Q}}}),g=new _C.Mesh({props:{$$slots:{default:[Hu]},$$scope:{ctx:Q}}}),{c(){cg(A.$$.fragment),I=$i(),cg(g.$$.fragment)},l(B){lg(A.$$.fragment,B),I=AE(B),lg(g.$$.fragment,B)},m(B,i){wg(A,B,i),AQ(B,I,i),wg(g,B,i),C=!0},p(B,i){const E={};i&2&&(E.$$scope={dirty:i,ctx:B}),A.$set(E);const o={};i&2&&(o.$$scope={dirty:i,ctx:B}),g.$set(o)},i(B){C||(AI(A.$$.fragment,B),AI(g.$$.fragment,B),C=!0)},o(B){oI(A.$$.fragment,B),oI(g.$$.fragment,B),C=!1},d(B){B&&xB(I),Sg(A,B),Sg(g,B)}}}function Tu(Q){let A,I;return A=new _C.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[mu]},$$scope:{ctx:Q}}}),{c(){cg(A.$$.fragment)},l(g){lg(A.$$.fragment,g)},m(g,C){wg(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AI(A.$$.fragment,g),I=!0)},o(g){oI(A.$$.fragment,g),I=!1},d(g){Sg(A,g)}}}function bu(Q,A,I){let{position:g={x:0,y:0}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class iY extends kB{constructor(A){super(),MB(this,A,bu,Tu,lB,{position:0})}}function xu(Q){let A,I,g,C;return A=new _C.MeshBasicMaterial({props:{color:"blue"}}),g=new _C.SphereGeometry({props:{args:[2]}}),{c(){cg(A.$$.fragment),I=$i(),cg(g.$$.fragment)},l(B){lg(A.$$.fragment,B),I=AE(B),lg(g.$$.fragment,B)},m(B,i){wg(A,B,i),AQ(B,I,i),wg(g,B,i),C=!0},p:rh,i(B){C||(AI(A.$$.fragment,B),AI(g.$$.fragment,B),C=!0)},o(B){oI(A.$$.fragment,B),oI(g.$$.fragment,B),C=!1},d(B){B&&xB(I),Sg(A,B),Sg(g,B)}}}function _u(Q){let A,I;return A=new _C.Mesh({props:{$$slots:{default:[xu]},$$scope:{ctx:Q}}}),{c(){cg(A.$$.fragment)},l(g){lg(A.$$.fragment,g)},m(g,C){wg(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AI(A.$$.fragment,g),I=!0)},o(g){oI(A.$$.fragment,g),I=!1},d(g){Sg(A,g)}}}function Ou(Q){let A,I;return A=new _C.Group({props:{"position.y":Q[0].y,"position.x":Q[0].x,$$slots:{default:[_u]},$$scope:{ctx:Q}}}),{c(){cg(A.$$.fragment)},l(g){lg(A.$$.fragment,g)},m(g,C){wg(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(AI(A.$$.fragment,g),I=!0)},o(g){oI(A.$$.fragment,g),I=!1},d(g){Sg(A,g)}}}function vu(Q,A,I){let{position:g={x:-3,y:2}}=A;return Q.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class EY extends kB{constructor(A){super(),MB(this,A,vu,Ou,lB,{position:0})}}export{Hs as A,dI as B,TA as C,EY as E,CY as O,We as R,gQ as S,_C as T,rA as V,zu as W,hh as a,Ig as b,f as c,Ih as d,fn as e,$k as f,Dh as g,QY as h,$u as i,AY as j,IY as k,iY as l,sD as m,Vu as n,uS as o,ro as u,BY as v};