var XM=Object.defineProperty;var zM=(i,A,I)=>A in i?XM(i,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):i[A]=I;var Zg=(i,A,I)=>(zM(i,typeof A!="symbol"?A+"":A,I),I);import{s as $I,e as wC,u as SC,g as GC,f as yC,n as rg,z as ii,A as $C,B as oi,c as RC,C as RG,t as Nn,D as $M,o as ut,d as Li,E as pn,F as bB,G as cC,H as nE,h as AU,I as ha}from"../chunks/scheduler.D6diW7lB.js";import{S as Ag,i as Ig,e as iC,c as QC,a as YB,d as tA,o as Dg,f as rA,n as T,l as Z,h as uA,t as Rg,u as iA,y as Me,k as qA,b as Jg,v as QA,g as oB,w as EA,x as oA,q as bg,m as xg,j as fg,z as ca}from"../chunks/index.CHi1kbDE.js";import{s as Kr,a as Fr,b as Ll,c as ml,l as IU}from"../chunks/index.BstVD8lf.js";import{d as Kn,w as xB,r as JG}from"../chunks/index.Cg8En6wm.js";function qt(i,A){const I={},g={},C={$$scope:1};let B=i.length;for(;B--;){const Q=i[B],E=A[B];if(E){for(const o in Q)o in E||(g[o]=1);for(const o in E)C[o]||(I[o]=E[o],C[o]=1);i[B]=E}else for(const o in Q)C[o]=1}for(const Q in g)Q in I||(I[Q]=void 0);return I}function Yt(i){return typeof i=="object"&&i!==null?i:{}}class gU extends Ag{constructor(A){super(),Ig(this,A,null,null,$I,{})}}var fG=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pD={exports:{}};(function(i,A){(function(I,g){g(A)})(fG,function(I){function g(AA,F){for(var _=0;_<F.length;_++){var d=F[_];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(AA,d.key,d)}}function C(AA,F,_){return F&&g(AA.prototype,F),_&&g(AA,_),AA}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B,Q,E,o,t,e,a,s,n,r,c,D,h,w=function(){return B||typeof window<"u"&&(B=window.gsap)&&B.registerPlugin&&B},l=1,S=[],U=[],k=[],y=Date.now,p=function(F,_){return _},q=function(){var F=n.core,_=F.bridge||{},d=F._scrollers,u=F._proxies;d.push.apply(d,U),u.push.apply(u,k),U=d,k=u,p=function(hA,BA){return _[hA](BA)}},M=function(F,_){return~k.indexOf(F)&&k[k.indexOf(F)+1][_]},N=function(F){return!!~r.indexOf(F)},L=function(F,_,d,u,V){return F.addEventListener(_,d,{passive:u!==!1,capture:!!V})},x=function(F,_,d,u){return F.removeEventListener(_,d,!!u)},b="scrollLeft",P="scrollTop",v=function(){return c&&c.isPressed||U.cache++},z=function(F,_){var d=function u(V){if(V||V===0){l&&(E.history.scrollRestoration="manual");var hA=c&&c.isPressed;V=u.v=Math.round(V)||(c&&c.iOS?1:0),F(V),u.cacheID=U.cache,hA&&p("ss",V)}else(_||U.cache!==u.cacheID||p("ref"))&&(u.cacheID=U.cache,u.v=F());return u.v+u.offset};return d.offset=0,F&&d},CA={s:b,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:z(function(AA){return arguments.length?E.scrollTo(AA,gA.sc()):E.pageXOffset||o[b]||t[b]||e[b]||0})},gA={s:P,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:CA,sc:z(function(AA){return arguments.length?E.scrollTo(CA.sc(),AA):E.pageYOffset||o[P]||t[P]||e[P]||0})},DA=function(F,_){return(_&&_._ctx&&_._ctx.selector||B.utils.toArray)(F)[0]||(typeof F=="string"&&B.config().nullTargetWarn!==!1?console.warn("Element not found:",F):null)},lA=function(F,_){var d=_.s,u=_.sc;N(F)&&(F=o.scrollingElement||t);var V=U.indexOf(F),hA=u===gA.sc?1:2;!~V&&(V=U.push(F)-1),U[V+hA]||L(F,"scroll",v);var BA=U[V+hA],PA=BA||(U[V+hA]=z(M(F,d),!0)||(N(F)?u:z(function(pI){return arguments.length?F[d]=pI:F[d]})));return PA.target=F,BA||(PA.smooth=B.getProperty(F,"scrollBehavior")==="smooth"),PA},YA=function(F,_,d){var u=F,V=F,hA=y(),BA=hA,PA=_||50,pI=Math.max(500,PA*3),sg=function(nI,Og){var Gg=y();Og||Gg-hA>PA?(V=u,u=nI,BA=hA,hA=Gg):d?u+=nI:u=V+(nI-V)/(Gg-BA)*(hA-BA)},gg=function(){V=u=d?0:u,BA=hA=0},aI=function(nI){var Og=BA,Gg=V,NC=y();return(nI||nI===0)&&nI!==u&&sg(nI),hA===BA||NC-BA>pI?0:(u+(d?Gg:-Gg))/((d?NC:hA)-Og)*1e3};return{update:sg,reset:gg,getVelocity:aI}},iI=function(F,_){return _&&!F._gsapAllow&&F.preventDefault(),F.changedTouches?F.changedTouches[0]:F},sA=function(F){var _=Math.max.apply(Math,F),d=Math.min.apply(Math,F);return Math.abs(_)>=Math.abs(d)?_:d},pA=function(){n=B.core.globals().ScrollTrigger,n&&n.core&&q()},VA=function(F){return B=F||w(),!Q&&B&&typeof document<"u"&&document.body&&(E=window,o=document,t=o.documentElement,e=o.body,r=[E,o,t,e],B.utils.clamp,h=B.core.context||function(){},s="onpointerenter"in e?"pointer":"mouse",a=mA.isTouch=E.matchMedia&&E.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in E||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,D=mA.eventTypes=("ontouchstart"in t?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in t?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l=0},500),pA(),Q=1),Q};CA.op=gA,U.cache=0;var mA=function(){function AA(_){this.init(_)}var F=AA.prototype;return F.init=function(d){Q||VA(B)||console.warn("Please gsap.registerPlugin(Observer)"),n||pA();var u=d.tolerance,V=d.dragMinimum,hA=d.type,BA=d.target,PA=d.lineHeight,pI=d.debounce,sg=d.preventDefault,gg=d.onStop,aI=d.onStopDelay,FA=d.ignore,nI=d.wheelSpeed,Og=d.event,Gg=d.onDragStart,NC=d.onDragEnd,ug=d.onDrag,ZC=d.onPress,qI=d.onRelease,ai=d.onRight,pg=d.onLeft,KI=d.onUp,lB=d.onDown,JB=d.onChangeX,eI=d.onChangeY,PC=d.onChange,MI=d.onToggleX,QQ=d.onToggleY,pC=d.onHover,wB=d.onHoverEnd,SB=d.onMove,hg=d.ignoreCheck,tC=d.isNormalizer,eC=d.onGestureStart,IA=d.onGestureEnd,KC=d.onWheel,RE=d.onEnable,xQ=d.onDisable,si=d.onClick,EQ=d.scrollSpeed,GB=d.capture,aC=d.allowClicks,yB=d.lockAxis,IB=d.onLockAxis;this.target=BA=DA(BA)||t,this.vars=d,FA&&(FA=B.utils.toArray(FA)),u=u||1e-9,V=V||0,nI=nI||1,EQ=EQ||1,hA=hA||"wheel,touch,pointer",pI=pI!==!1,PA||(PA=parseFloat(E.getComputedStyle(e).lineHeight)||22);var _Q,kB,yi,Bg,$g,fB,PB,cA=this,WB=0,oQ=0,OQ=d.passive||!sg,sC=lA(BA,CA),vQ=lA(BA,gA),JE=sC(),mo=vQ(),mC=~hA.indexOf("touch")&&!~hA.indexOf("pointer")&&D[0]==="pointerdown",ZQ=N(BA),AC=BA.ownerDocument||o,ki=[0,0,0],ni=[0,0,0],tQ=0,zt=function(){return tQ=y()},nC=function(lI,ig){return(cA.event=lI)&&FA&&~FA.indexOf(lI.target)||ig&&mC&&lI.pointerType!=="touch"||hg&&hg(lI,ig)},ja=function(){cA._vx.reset(),cA._vy.reset(),kB.pause(),gg&&gg(cA)},PQ=function(){var lI=cA.deltaX=sA(ki),ig=cA.deltaY=sA(ni),OA=Math.abs(lI)>=u,fI=Math.abs(ig)>=u;PC&&(OA||fI)&&PC(cA,lI,ig,ki,ni),OA&&(ai&&cA.deltaX>0&&ai(cA),pg&&cA.deltaX<0&&pg(cA),JB&&JB(cA),MI&&cA.deltaX<0!=WB<0&&MI(cA),WB=cA.deltaX,ki[0]=ki[1]=ki[2]=0),fI&&(lB&&cA.deltaY>0&&lB(cA),KI&&cA.deltaY<0&&KI(cA),eI&&eI(cA),QQ&&cA.deltaY<0!=oQ<0&&QQ(cA),oQ=cA.deltaY,ni[0]=ni[1]=ni[2]=0),(Bg||yi)&&(SB&&SB(cA),yi&&(ug(cA),yi=!1),Bg=!1),fB&&!(fB=!1)&&IB&&IB(cA),$g&&(KC(cA),$g=!1),_Q=0},Ho=function(lI,ig,OA){ki[OA]+=lI,ni[OA]+=ig,cA._vx.update(lI),cA._vy.update(ig),pI?_Q||(_Q=requestAnimationFrame(PQ)):PQ()},To=function(lI,ig){yB&&!PB&&(cA.axis=PB=Math.abs(lI)>Math.abs(ig)?"x":"y",fB=!0),PB!=="y"&&(ki[2]+=lI,cA._vx.update(lI,!0)),PB!=="x"&&(ni[2]+=ig,cA._vy.update(ig,!0)),pI?_Q||(_Q=requestAnimationFrame(PQ)):PQ()},WQ=function(lI){if(!nC(lI,1)){lI=iI(lI,sg);var ig=lI.clientX,OA=lI.clientY,fI=ig-cA.x,rI=OA-cA.y,dI=cA.isDragging;cA.x=ig,cA.y=OA,(dI||Math.abs(cA.startX-ig)>=V||Math.abs(cA.startY-OA)>=V)&&(ug&&(yi=!0),dI||(cA.isDragging=!0),To(fI,rI),dI||Gg&&Gg(cA))}},fE=cA.onPress=function(JI){nC(JI,1)||JI&&JI.button||(cA.axis=PB=null,kB.pause(),cA.isPressed=!0,JI=iI(JI),WB=oQ=0,cA.startX=cA.x=JI.clientX,cA.startY=cA.y=JI.clientY,cA._vx.reset(),cA._vy.reset(),L(tC?BA:AC,D[1],WQ,OQ,!0),cA.deltaX=cA.deltaY=0,ZC&&ZC(cA))},vI=cA.onRelease=function(JI){if(!nC(JI,1)){x(tC?BA:AC,D[1],WQ,!0);var lI=!isNaN(cA.y-cA.startY),ig=cA.isDragging,OA=ig&&(Math.abs(cA.x-cA.startX)>3||Math.abs(cA.y-cA.startY)>3),fI=iI(JI);!OA&&lI&&(cA._vx.reset(),cA._vy.reset(),sg&&aC&&B.delayedCall(.08,function(){if(y()-tQ>300&&!JI.defaultPrevented){if(JI.target.click)JI.target.click();else if(AC.createEvent){var rI=AC.createEvent("MouseEvents");rI.initMouseEvent("click",!0,!0,E,1,fI.screenX,fI.screenY,fI.clientX,fI.clientY,!1,!1,!1,!1,0,null),JI.target.dispatchEvent(rI)}}})),cA.isDragging=cA.isGesturing=cA.isPressed=!1,gg&&ig&&!tC&&kB.restart(!0),NC&&ig&&NC(cA),qI&&qI(cA,OA)}},uE=function(lI){return lI.touches&&lI.touches.length>1&&(cA.isGesturing=!0)&&eC(lI,cA.isDragging)},Mi=function(){return(cA.isGesturing=!1)||IA(cA)},Ui=function(lI){if(!nC(lI)){var ig=sC(),OA=vQ();Ho((ig-JE)*EQ,(OA-mo)*EQ,1),JE=ig,mo=OA,gg&&kB.restart(!0)}},Ni=function(lI){if(!nC(lI)){lI=iI(lI,sg),KC&&($g=!0);var ig=(lI.deltaMode===1?PA:lI.deltaMode===2?E.innerHeight:1)*nI;Ho(lI.deltaX*ig,lI.deltaY*ig,0),gg&&!tC&&kB.restart(!0)}},qE=function(lI){if(!nC(lI)){var ig=lI.clientX,OA=lI.clientY,fI=ig-cA.x,rI=OA-cA.y;cA.x=ig,cA.y=OA,Bg=!0,gg&&kB.restart(!0),(fI||rI)&&To(fI,rI)}},bo=function(lI){cA.event=lI,pC(cA)},eQ=function(lI){cA.event=lI,wB(cA)},$t=function(lI){return nC(lI)||iI(lI,sg)&&si(cA)};kB=cA._dc=B.delayedCall(aI||.25,ja).pause(),cA.deltaX=cA.deltaY=0,cA._vx=YA(0,50,!0),cA._vy=YA(0,50,!0),cA.scrollX=sC,cA.scrollY=vQ,cA.isDragging=cA.isGesturing=cA.isPressed=!1,h(this),cA.enable=function(JI){return cA.isEnabled||(L(ZQ?AC:BA,"scroll",v),hA.indexOf("scroll")>=0&&L(ZQ?AC:BA,"scroll",Ui,OQ,GB),hA.indexOf("wheel")>=0&&L(BA,"wheel",Ni,OQ,GB),(hA.indexOf("touch")>=0&&a||hA.indexOf("pointer")>=0)&&(L(BA,D[0],fE,OQ,GB),L(AC,D[2],vI),L(AC,D[3],vI),aC&&L(BA,"click",zt,!0,!0),si&&L(BA,"click",$t),eC&&L(AC,"gesturestart",uE),IA&&L(AC,"gestureend",Mi),pC&&L(BA,s+"enter",bo),wB&&L(BA,s+"leave",eQ),SB&&L(BA,s+"move",qE)),cA.isEnabled=!0,JI&&JI.type&&fE(JI),RE&&RE(cA)),cA},cA.disable=function(){cA.isEnabled&&(S.filter(function(JI){return JI!==cA&&N(JI.target)}).length||x(ZQ?AC:BA,"scroll",v),cA.isPressed&&(cA._vx.reset(),cA._vy.reset(),x(tC?BA:AC,D[1],WQ,!0)),x(ZQ?AC:BA,"scroll",Ui,GB),x(BA,"wheel",Ni,GB),x(BA,D[0],fE,GB),x(AC,D[2],vI),x(AC,D[3],vI),x(BA,"click",zt,!0),x(BA,"click",$t),x(AC,"gesturestart",uE),x(AC,"gestureend",Mi),x(BA,s+"enter",bo),x(BA,s+"leave",eQ),x(BA,s+"move",qE),cA.isEnabled=cA.isPressed=cA.isDragging=!1,xQ&&xQ(cA))},cA.kill=cA.revert=function(){cA.disable();var JI=S.indexOf(cA);JI>=0&&S.splice(JI,1),c===cA&&(c=0)},S.push(cA),tC&&N(BA)&&(c=cA),cA.enable(Og)},C(AA,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),AA}();mA.version="3.12.5",mA.create=function(AA){return new mA(AA)},mA.register=VA,mA.getAll=function(){return S.slice()},mA.getById=function(AA){return S.filter(function(F){return F.vars.id===AA})[0]},w()&&B.registerPlugin(mA);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var SA,XA,HA,bA,m,NA,GA,JA,yA,gI,xA,f,K,$,dA,kA,KA,zA,LA,jA,tI,yI,MA,bI,RI,SI,AI,ZA,NI,H,fA,_A,oI,Y,RA=1,UA=Date.now,II=UA(),$A=0,xI=0,TI=function(F,_,d){var u=J(F)&&(F.substr(0,6)==="clamp("||F.indexOf("max")>-1);return d["_"+_+"Clamp"]=u,u?F.substr(6,F.length-7):F},Eg=function(F,_){return _&&(!J(F)||F.substr(0,6)!=="clamp(")?"clamp("+F+")":F},kC=function AA(){return xI&&requestAnimationFrame(AA)},WI=function(){return $=1},Ug=function(){return $=0},Sg=function(F){return F},TQ=function(F){return Math.round(F*1e5)/1e5||0},ua=function(){return typeof window<"u"},UE=function(){return SA||ua()&&(SA=window.gsap)&&SA.registerPlugin&&SA},Ti=function(F){return!!~GA.indexOf(F)},NE=function(F){return(F==="Height"?fA:HA["inner"+F])||m["client"+F]||NA["client"+F]},vt=function(F){return M(F,"getBoundingClientRect")||(Ti(F)?function(){return Pa.width=HA.innerWidth,Pa.height=fA,Pa}:function(){return vC(F)})},qa=function(F,_,d){var u=d.d,V=d.d2,hA=d.a;return(hA=M(F,"getBoundingClientRect"))?function(){return hA()[u]}:function(){return(_?NE(V):F["client"+V])||0}},wr=function(F,_){return!_||~k.indexOf(F)?vt(F):function(){return Pa}},ei=function(F,_){var d=_.s,u=_.d2,V=_.d,hA=_.a;return Math.max(0,(d="scroll"+u)&&(hA=M(F,d))?hA()-vt(F)()[V]:Ti(F)?(m[d]||NA[d])-NE(u):F[d]-F["offset"+u])},qo=function(F,_){for(var d=0;d<LA.length;d+=3)(!_||~_.indexOf(LA[d+1]))&&F(LA[d],LA[d+1],LA[d+2])},J=function(F){return typeof F=="string"},X=function(F){return typeof F=="function"},aA=function(F){return typeof F=="number"},nA=function(F){return typeof F=="object"},eA=function(F,_,d){return F&&F.progress(_?0:1)&&d&&F.pause()},WA=function(F,_){if(F.enabled){var d=F._ctx?F._ctx.add(function(){return _(F)}):_(F);d&&d.totalTime&&(F.callbackAnimation=d)}},CI=Math.abs,sI="left",GI="top",FI="right",kI="bottom",cI="width",tg="height",MC="Right",Ng="Left",DB="Top",eg="Bottom",EI="padding",AB="margin",ag="Width",Gi="Height",_g="px",qC=function(F){return HA.getComputedStyle(F)},Zt=function(F){var _=qC(F).position;F.style.position=_==="absolute"||_==="fixed"?_:"relative"},UC=function(F,_){for(var d in _)d in F||(F[d]=_[d]);return F},vC=function(F,_){var d=_&&qC(F)[dA]!=="matrix(1, 0, 0, 1, 0, 0)"&&SA.to(F,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),u=F.getBoundingClientRect();return d&&d.progress(0).kill(),u},bQ=function(F,_){var d=_.d2;return F["offset"+d]||F["client"+d]||0},hB=function(F){var _=[],d=F.labels,u=F.duration(),V;for(V in d)_.push(d[V]/u);return _},Pt=function(F){return function(_){return SA.utils.snap(hB(F),_)}},Wt=function(F){var _=SA.utils.snap(F),d=Array.isArray(F)&&F.slice(0).sort(function(u,V){return u-V});return d?function(u,V,hA){hA===void 0&&(hA=.001);var BA;if(!V)return _(u);if(V>0){for(u-=hA,BA=0;BA<d.length;BA++)if(d[BA]>=u)return d[BA];return d[BA-1]}else for(BA=d.length,u+=hA;BA--;)if(d[BA]<=u)return d[BA];return d[0]}:function(u,V,hA){hA===void 0&&(hA=.001);var BA=_(u);return!V||Math.abs(BA-u)<hA||BA-u<0==V<0?BA:_(V<0?u-F:u+F)}},Ya=function(F){return function(_,d){return Wt(hB(F))(_,d.direction)}},La=function(F,_,d,u){return d.split(",").forEach(function(V){return F(_,V,u)})},YC=function(F,_,d,u,V){return F.addEventListener(_,d,{passive:!u,capture:!!V})},LC=function(F,_,d,u){return F.removeEventListener(_,d,!!u)},ma=function(F,_,d){d=d&&d.wheelHandler,d&&(F(_,"wheel",d),F(_,"touchmove",d))},Sl={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ha={toggleActions:"play",anticipatePin:0},Ta={top:0,left:0,center:.5,bottom:1,right:1},ba=function(F,_){if(J(F)){var d=F.indexOf("="),u=~d?+(F.charAt(d-1)+1)*parseFloat(F.substr(d+1)):0;~d&&(F.indexOf("%")>d&&(u*=_/100),F=F.substr(0,d-1)),F=u+(F in Ta?Ta[F]*_:~F.indexOf("%")?parseFloat(F)*_/100:parseFloat(F)||0)}return F},xa=function(F,_,d,u,V,hA,BA,PA){var pI=V.startColor,sg=V.endColor,gg=V.fontSize,aI=V.indent,FA=V.fontWeight,nI=bA.createElement("div"),Og=Ti(d)||M(d,"pinType")==="fixed",Gg=F.indexOf("scroller")!==-1,NC=Og?NA:d,ug=F.indexOf("start")!==-1,ZC=ug?pI:sg,qI="border-color:"+ZC+";font-size:"+gg+";color:"+ZC+";font-weight:"+FA+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return qI+="position:"+((Gg||PA)&&Og?"fixed;":"absolute;"),(Gg||PA||!Og)&&(qI+=(u===gA?FI:kI)+":"+(hA+parseFloat(aI))+"px;"),BA&&(qI+="box-sizing:border-box;text-align:left;width:"+BA.offsetWidth+"px;"),nI._isStart=ug,nI.setAttribute("class","gsap-marker-"+F+(_?" marker-"+_:"")),nI.style.cssText=qI,nI.innerText=_||_===0?F+"-"+_:F,NC.children[0]?NC.insertBefore(nI,NC.children[0]):NC.appendChild(nI),nI._offset=nI["offset"+u.op.d2],_a(nI,0,u,ug),nI},_a=function(F,_,d,u){var V={display:"block"},hA=d[u?"os2":"p2"],BA=d[u?"p2":"os2"];F._isFlipped=u,V[d.a+"Percent"]=u?-100:0,V[d.a]=u?"1px":0,V["border"+hA+ag]=1,V["border"+BA+ag]=0,V[d.p]=_+"px",SA.set(F,V)},_I=[],Sr={},Vt,Gl=function(){return UA()-$A>34&&(Vt||(Vt=requestAnimationFrame(iQ)))},Yo=function(){(!MA||!MA.isPressed||MA.startX>NA.clientWidth)&&(U.cache++,MA?Vt||(Vt=requestAnimationFrame(iQ)):iQ(),$A||KE("scrollStart"),$A=UA())},Gr=function(){SI=HA.innerWidth,RI=HA.innerHeight},jt=function(){U.cache++,!K&&!yI&&!bA.fullscreenElement&&!bA.webkitFullscreenElement&&(!bI||SI!==HA.innerWidth||Math.abs(HA.innerHeight-RI)>HA.innerHeight*.25)&&JA.restart(!0)},pE={},xM=[],yl=function AA(){return LC(OI,"scrollEnd",AA)||dE(!0)},KE=function(F){return pE[F]&&pE[F].map(function(_){return _()})||xM},ZB=[],kl=function(F){for(var _=0;_<ZB.length;_+=5)(!F||ZB[_+4]&&ZB[_+4].query===F)&&(ZB[_].style.cssText=ZB[_+1],ZB[_].getBBox&&ZB[_].setAttribute("transform",ZB[_+2]||""),ZB[_+3].uncache=1)},yr=function(F,_){var d;for(kA=0;kA<_I.length;kA++)d=_I[kA],d&&(!_||d._ctx===_)&&(F?d.kill(1):d.revert(!0,!0));_A=!0,_&&kl(_),_||KE("revert")},Ml=function(F,_){U.cache++,(_||!cB)&&U.forEach(function(d){return X(d)&&d.cacheID++&&(d.rec=0)}),J(F)&&(HA.history.scrollRestoration=NI=F)},cB,FE=0,Ul,_M=function(){if(Ul!==FE){var F=Ul=FE;requestAnimationFrame(function(){return F===FE&&dE(!0)})}},Nl=function(){NA.appendChild(H),fA=!MA&&H.offsetHeight||HA.innerHeight,NA.removeChild(H)},pl=function(F){return yA(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(_){return _.style.display=F?"none":"block"})},dE=function(F,_){if($A&&!F&&!_A){YC(OI,"scrollEnd",yl);return}Nl(),cB=OI.isRefreshing=!0,U.forEach(function(u){return X(u)&&++u.cacheID&&(u.rec=u())});var d=KE("refreshInit");jA&&OI.sort(),_||yr(),U.forEach(function(u){X(u)&&(u.smooth&&(u.target.style.scrollBehavior="auto"),u(0))}),_I.slice(0).forEach(function(u){return u.refresh()}),_A=!1,_I.forEach(function(u){if(u._subPinOffset&&u.pin){var V=u.vars.horizontal?"offsetWidth":"offsetHeight",hA=u.pin[V];u.revert(!0,1),u.adjustPinSpacing(u.pin[V]-hA),u.refresh()}}),oI=1,pl(!0),_I.forEach(function(u){var V=ei(u.scroller,u._dir),hA=u.vars.end==="max"||u._endClamp&&u.end>V,BA=u._startClamp&&u.start>=V;(hA||BA)&&u.setPositions(BA?V-1:u.start,hA?Math.max(BA?V:u.start+1,V):u.end,!0)}),pl(!1),oI=0,d.forEach(function(u){return u&&u.render&&u.render(-1)}),U.forEach(function(u){X(u)&&(u.smooth&&requestAnimationFrame(function(){return u.target.style.scrollBehavior="smooth"}),u.rec&&u(u.rec))}),Ml(NI,1),JA.pause(),FE++,cB=2,iQ(2),_I.forEach(function(u){return X(u.vars.onRefresh)&&u.vars.onRefresh(u)}),cB=OI.isRefreshing=!1,KE("refresh")},kr=0,Oa=1,Xt,iQ=function(F){if(F===2||!cB&&!_A){OI.isUpdating=!0,Xt&&Xt.update(0);var _=_I.length,d=UA(),u=d-II>=50,V=_&&_I[0].scroll();if(Oa=kr>V?-1:1,cB||(kr=V),u&&($A&&!$&&d-$A>200&&($A=0,KE("scrollEnd")),xA=II,II=d),Oa<0){for(kA=_;kA-- >0;)_I[kA]&&_I[kA].update(0,u);Oa=1}else for(kA=0;kA<_;kA++)_I[kA]&&_I[kA].update(0,u);OI.isUpdating=!1}Vt=0},Mr=[sI,GI,kI,FI,AB+eg,AB+MC,AB+DB,AB+Ng,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],va=Mr.concat([cI,tg,"boxSizing","max"+ag,"max"+Gi,"position",AB,EI,EI+DB,EI+MC,EI+eg,EI+Ng]),OM=function(F,_,d){Lo(d);var u=F._gsap;if(u.spacerIsNative)Lo(u.spacerState);else if(F._gsap.swappedIn){var V=_.parentNode;V&&(V.insertBefore(F,_),V.removeChild(_))}F._gsap.swappedIn=!1},Ur=function(F,_,d,u){if(!F._gsap.swappedIn){for(var V=Mr.length,hA=_.style,BA=F.style,PA;V--;)PA=Mr[V],hA[PA]=d[PA];hA.position=d.position==="absolute"?"absolute":"relative",d.display==="inline"&&(hA.display="inline-block"),BA[kI]=BA[FI]="auto",hA.flexBasis=d.flexBasis||"auto",hA.overflow="visible",hA.boxSizing="border-box",hA[cI]=bQ(F,CA)+_g,hA[tg]=bQ(F,gA)+_g,hA[EI]=BA[AB]=BA[GI]=BA[sI]="0",Lo(u),BA[cI]=BA["max"+ag]=d[cI],BA[tg]=BA["max"+Gi]=d[tg],BA[EI]=d[EI],F.parentNode!==_&&(F.parentNode.insertBefore(_,F),_.appendChild(F)),F._gsap.swappedIn=!0}},vM=/([A-Z])/g,Lo=function(F){if(F){var _=F.t.style,d=F.length,u=0,V,hA;for((F.t._gsap||SA.core.getCache(F.t)).uncache=1;u<d;u+=2)hA=F[u+1],V=F[u],hA?_[V]=hA:_[V]&&_.removeProperty(V.replace(vM,"-$1").toLowerCase())}},Za=function(F){for(var _=va.length,d=F.style,u=[],V=0;V<_;V++)u.push(va[V],d[va[V]]);return u.t=F,u},ZM=function(F,_,d){for(var u=[],V=F.length,hA=d?8:0,BA;hA<V;hA+=2)BA=F[hA],u.push(BA,BA in _?_[BA]:F[hA+1]);return u.t=F.t,u},Pa={left:0,top:0},Kl=function(F,_,d,u,V,hA,BA,PA,pI,sg,gg,aI,FA,nI){X(F)&&(F=F(PA)),J(F)&&F.substr(0,3)==="max"&&(F=aI+(F.charAt(4)==="="?ba("0"+F.substr(3),d):0));var Og=FA?FA.time():0,Gg,NC,ug;if(FA&&FA.seek(0),isNaN(F)||(F=+F),aA(F))FA&&(F=SA.utils.mapRange(FA.scrollTrigger.start,FA.scrollTrigger.end,0,aI,F)),BA&&_a(BA,d,u,!0);else{X(_)&&(_=_(PA));var ZC=(F||"0").split(" "),qI,ai,pg,KI;ug=DA(_,PA)||NA,qI=vC(ug)||{},(!qI||!qI.left&&!qI.top)&&qC(ug).display==="none"&&(KI=ug.style.display,ug.style.display="block",qI=vC(ug),KI?ug.style.display=KI:ug.style.removeProperty("display")),ai=ba(ZC[0],qI[u.d]),pg=ba(ZC[1]||"0",d),F=qI[u.p]-pI[u.p]-sg+ai+V-pg,BA&&_a(BA,pg,u,d-pg<20||BA._isStart&&pg>20),d-=d-pg}if(nI&&(PA[nI]=F||-.001,F<0&&(F=0)),hA){var lB=F+d,JB=hA._isStart;Gg="scroll"+u.d2,_a(hA,lB,u,JB&&lB>20||!JB&&(gg?Math.max(NA[Gg],m[Gg]):hA.parentNode[Gg])<=lB+1),gg&&(pI=vC(BA),gg&&(hA.style[u.op.p]=pI[u.op.p]-u.op.m-hA._offset+_g))}return FA&&ug&&(Gg=vC(ug),FA.seek(aI),NC=vC(ug),FA._caScrollDist=Gg[u.p]-NC[u.p],F=F/FA._caScrollDist*aI),FA&&FA.seek(Og),FA?F:Math.round(F)},PM=/(webkit|moz|length|cssText|inset)/i,Fl=function(F,_,d,u){if(F.parentNode!==_){var V=F.style,hA,BA;if(_===NA){F._stOrig=V.cssText,BA=qC(F);for(hA in BA)!+hA&&!PM.test(hA)&&BA[hA]&&typeof V[hA]=="string"&&hA!=="0"&&(V[hA]=BA[hA]);V.top=d,V.left=u}else V.cssText=F._stOrig;SA.core.getCache(F).uncache=1,_.appendChild(F)}},dl=function(F,_,d){var u=_,V=u;return function(hA){var BA=Math.round(F());return BA!==u&&BA!==V&&Math.abs(BA-u)>3&&Math.abs(BA-V)>3&&(hA=BA,d&&d()),V=u,u=hA,hA}},Wa=function(F,_,d){var u={};u[_.p]="+="+d,SA.set(F,u)},Rl=function(F,_){var d=lA(F,_),u="_scroll"+_.p2,V=function hA(BA,PA,pI,sg,gg){var aI=hA.tween,FA=PA.onComplete,nI={};pI=pI||d();var Og=dl(d,pI,function(){aI.kill(),hA.tween=0});return gg=sg&&gg||0,sg=sg||BA-pI,aI&&aI.kill(),PA[u]=BA,PA.inherit=!1,PA.modifiers=nI,nI[u]=function(){return Og(pI+sg*aI.ratio+gg*aI.ratio*aI.ratio)},PA.onUpdate=function(){U.cache++,hA.tween&&iQ()},PA.onComplete=function(){hA.tween=0,FA&&FA.call(aI)},aI=hA.tween=SA.to(F,PA),aI};return F[u]=d,d.wheelHandler=function(){return V.tween&&V.tween.kill()&&(V.tween=0)},YC(F,"wheel",d.wheelHandler),OI.isTouch&&YC(F,"touchmove",d.wheelHandler),V},OI=function(){function AA(_,d){XA||AA.register(SA)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ZA(this),this.init(_,d)}var F=AA.prototype;return F.init=function(d,u){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xI){this.update=this.refresh=this.kill=Sg;return}d=UC(J(d)||aA(d)||d.nodeType?{trigger:d}:d,Ha);var V=d,hA=V.onUpdate,BA=V.toggleClass,PA=V.id,pI=V.onToggle,sg=V.onRefresh,gg=V.scrub,aI=V.trigger,FA=V.pin,nI=V.pinSpacing,Og=V.invalidateOnRefresh,Gg=V.anticipatePin,NC=V.onScrubComplete,ug=V.onSnapComplete,ZC=V.once,qI=V.snap,ai=V.pinReparent,pg=V.pinSpacer,KI=V.containerAnimation,lB=V.fastScrollEnd,JB=V.preventOverlaps,eI=d.horizontal||d.containerAnimation&&d.horizontal!==!1?CA:gA,PC=!gg&&gg!==0,MI=DA(d.scroller||HA),QQ=SA.core.getCache(MI),pC=Ti(MI),wB=("pinType"in d?d.pinType:M(MI,"pinType")||pC&&"fixed")==="fixed",SB=[d.onEnter,d.onLeave,d.onEnterBack,d.onLeaveBack],hg=PC&&d.toggleActions.split(" "),tC="markers"in d?d.markers:Ha.markers,eC=pC?0:parseFloat(qC(MI)["border"+eI.p2+ag])||0,IA=this,KC=d.onRefreshInit&&function(){return d.onRefreshInit(IA)},RE=qa(MI,pC,eI),xQ=wr(MI,pC),si=0,EQ=0,GB=0,aC=lA(MI,eI),yB,IB,_Q,kB,yi,Bg,$g,fB,PB,cA,WB,oQ,OQ,sC,vQ,JE,mo,mC,ZQ,AC,ki,ni,tQ,zt,nC,ja,PQ,Ho,To,WQ,fE,vI,uE,Mi,Ui,Ni,qE,bo,eQ;if(IA._startClamp=IA._endClamp=!1,IA._dir=eI,Gg*=45,IA.scroller=MI,IA.scroll=KI?KI.time.bind(KI):aC,kB=aC(),IA.vars=d,u=u||d.animation,"refreshPriority"in d&&(jA=1,d.refreshPriority===-9999&&(Xt=IA)),QQ.tweenScroll=QQ.tweenScroll||{top:Rl(MI,gA),left:Rl(MI,CA)},IA.tweenTo=yB=QQ.tweenScroll[eI.p],IA.scrubDuration=function(OA){uE=aA(OA)&&OA,uE?vI?vI.duration(OA):vI=SA.to(u,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:uE,paused:!0,onComplete:function(){return NC&&NC(IA)}}):(vI&&vI.progress(1).kill(),vI=0)},u&&(u.vars.lazy=!1,u._initted&&!IA.isReverted||u.vars.immediateRender!==!1&&d.immediateRender!==!1&&u.duration()&&u.render(0,!0,!0),IA.animation=u.pause(),u.scrollTrigger=IA,IA.scrubDuration(gg),WQ=0,PA||(PA=u.vars.id)),qI&&((!nA(qI)||qI.push)&&(qI={snapTo:qI}),"scrollBehavior"in NA.style&&SA.set(pC?[NA,m]:MI,{scrollBehavior:"auto"}),U.forEach(function(OA){return X(OA)&&OA.target===(pC?bA.scrollingElement||m:MI)&&(OA.smooth=!1)}),_Q=X(qI.snapTo)?qI.snapTo:qI.snapTo==="labels"?Pt(u):qI.snapTo==="labelsDirectional"?Ya(u):qI.directional!==!1?function(OA,fI){return Wt(qI.snapTo)(OA,UA()-EQ<500?0:fI.direction)}:SA.utils.snap(qI.snapTo),Mi=qI.duration||{min:.1,max:2},Mi=nA(Mi)?gI(Mi.min,Mi.max):gI(Mi,Mi),Ui=SA.delayedCall(qI.delay||uE/2||.1,function(){var OA=aC(),fI=UA()-EQ<500,rI=yB.tween;if((fI||Math.abs(IA.getVelocity())<10)&&!rI&&!$&&si!==OA){var dI=(OA-Bg)/sC,HC=u&&!PC?u.totalProgress():dI,VI=fI?0:(HC-fE)/(UA()-xA)*1e3||0,IC=SA.utils.clamp(-dI,1-dI,CI(VI/2)*VI/.185),gB=dI+(qI.inertia===!1?0:IC),vg,Kg,cg=qI,pi=cg.onStart,qg=cg.onInterrupt,VB=cg.onComplete;if(vg=_Q(gB,IA),aA(vg)||(vg=gB),Kg=Math.round(Bg+vg*sC),OA<=$g&&OA>=Bg&&Kg!==OA){if(rI&&!rI._initted&&rI.data<=CI(Kg-OA))return;qI.inertia===!1&&(IC=vg-dI),yB(Kg,{duration:Mi(CI(Math.max(CI(gB-HC),CI(vg-HC))*.185/VI/.05||0)),ease:qI.ease||"power3",data:CI(Kg-OA),onInterrupt:function(){return Ui.restart(!0)&&qg&&qg(IA)},onComplete:function(){IA.update(),si=aC(),u&&(vI?vI.resetTo("totalProgress",vg,u._tTime/u._tDur):u.progress(vg)),WQ=fE=u&&!PC?u.totalProgress():IA.progress,ug&&ug(IA),VB&&VB(IA)}},OA,IC*sC,Kg-OA-IC*sC),pi&&pi(IA,yB.tween)}}else IA.isActive&&si!==OA&&Ui.restart(!0)}).pause()),PA&&(Sr[PA]=IA),aI=IA.trigger=DA(aI||FA!==!0&&FA),eQ=aI&&aI._gsap&&aI._gsap.stRevert,eQ&&(eQ=eQ(IA)),FA=FA===!0?aI:DA(FA),J(BA)&&(BA={targets:aI,className:BA}),FA&&(nI===!1||nI===AB||(nI=!nI&&FA.parentNode&&FA.parentNode.style&&qC(FA.parentNode).display==="flex"?!1:EI),IA.pin=FA,IB=SA.core.getCache(FA),IB.spacer?vQ=IB.pinState:(pg&&(pg=DA(pg),pg&&!pg.nodeType&&(pg=pg.current||pg.nativeElement),IB.spacerIsNative=!!pg,pg&&(IB.spacerState=Za(pg))),IB.spacer=mC=pg||bA.createElement("div"),mC.classList.add("pin-spacer"),PA&&mC.classList.add("pin-spacer-"+PA),IB.pinState=vQ=Za(FA)),d.force3D!==!1&&SA.set(FA,{force3D:!0}),IA.spacer=mC=IB.spacer,To=qC(FA),zt=To[nI+eI.os2],AC=SA.getProperty(FA),ki=SA.quickSetter(FA,eI.a,_g),Ur(FA,mC,To),mo=Za(FA)),tC){oQ=nA(tC)?UC(tC,Sl):Sl,cA=xa("scroller-start",PA,MI,eI,oQ,0),WB=xa("scroller-end",PA,MI,eI,oQ,0,cA),ZQ=cA["offset"+eI.op.d2];var $t=DA(M(MI,"content")||MI);fB=this.markerStart=xa("start",PA,$t,eI,oQ,ZQ,0,KI),PB=this.markerEnd=xa("end",PA,$t,eI,oQ,ZQ,0,KI),KI&&(bo=SA.quickSetter([fB,PB],eI.a,_g)),!wB&&!(k.length&&M(MI,"fixedMarkers")===!0)&&(Zt(pC?NA:MI),SA.set([cA,WB],{force3D:!0}),ja=SA.quickSetter(cA,eI.a,_g),Ho=SA.quickSetter(WB,eI.a,_g))}if(KI){var JI=KI.vars.onUpdate,lI=KI.vars.onUpdateParams;KI.eventCallback("onUpdate",function(){IA.update(0,0,1),JI&&JI.apply(KI,lI||[])})}if(IA.previous=function(){return _I[_I.indexOf(IA)-1]},IA.next=function(){return _I[_I.indexOf(IA)+1]},IA.revert=function(OA,fI){if(!fI)return IA.kill(!0);var rI=OA!==!1||!IA.enabled,dI=K;rI!==IA.isReverted&&(rI&&(Ni=Math.max(aC(),IA.scroll.rec||0),GB=IA.progress,qE=u&&u.progress()),fB&&[fB,PB,cA,WB].forEach(function(HC){return HC.style.display=rI?"none":"block"}),rI&&(K=IA,IA.update(rI)),FA&&(!ai||!IA.isActive)&&(rI?OM(FA,mC,vQ):Ur(FA,mC,qC(FA),nC)),rI||IA.update(rI),K=dI,IA.isReverted=rI)},IA.refresh=function(OA,fI,rI,dI){if(!((K||!IA.enabled)&&!fI)){if(FA&&OA&&$A){YC(AA,"scrollEnd",yl);return}!cB&&KC&&KC(IA),K=IA,yB.tween&&!rI&&(yB.tween.kill(),yB.tween=0),vI&&vI.pause(),Og&&u&&u.revert({kill:!1}).invalidate(),IA.isReverted||IA.revert(!0,!0),IA._subPinOffset=!1;var HC=RE(),VI=xQ(),IC=KI?KI.duration():ei(MI,eI),gB=sC<=.01,vg=0,Kg=dI||0,cg=nA(rI)?rI.end:d.end,pi=d.endTrigger||aI,qg=nA(rI)?rI.start:d.start||(d.start===0||!aI?0:FA?"0 0":"0 100%"),VB=IA.pinnedContainer=d.pinnedContainer&&DA(d.pinnedContainer,IA),bi=aI&&Math.max(0,_I.indexOf(IA))||0,WC=bi,VC,CB,YE,Xa,BB,FC,xi,pr,Yl,Ae,_i,Ie,za;for(tC&&nA(rI)&&(Ie=SA.getProperty(cA,eI.p),za=SA.getProperty(WB,eI.p));WC--;)FC=_I[WC],FC.end||FC.refresh(0,1)||(K=IA),xi=FC.pin,xi&&(xi===aI||xi===FA||xi===VB)&&!FC.isReverted&&(Ae||(Ae=[]),Ae.unshift(FC),FC.revert(!0,!0)),FC!==_I[WC]&&(bi--,WC--);for(X(qg)&&(qg=qg(IA)),qg=TI(qg,"start",IA),Bg=Kl(qg,aI,HC,eI,aC(),fB,cA,IA,VI,eC,wB,IC,KI,IA._startClamp&&"_startClamp")||(FA?-.001:0),X(cg)&&(cg=cg(IA)),J(cg)&&!cg.indexOf("+=")&&(~cg.indexOf(" ")?cg=(J(qg)?qg.split(" ")[0]:"")+cg:(vg=ba(cg.substr(2),HC),cg=J(qg)?qg:(KI?SA.utils.mapRange(0,KI.duration(),KI.scrollTrigger.start,KI.scrollTrigger.end,Bg):Bg)+vg,pi=aI)),cg=TI(cg,"end",IA),$g=Math.max(Bg,Kl(cg||(pi?"100% 0":IC),pi,HC,eI,aC()+vg,PB,WB,IA,VI,eC,wB,IC,KI,IA._endClamp&&"_endClamp"))||-.001,vg=0,WC=bi;WC--;)FC=_I[WC],xi=FC.pin,xi&&FC.start-FC._pinPush<=Bg&&!KI&&FC.end>0&&(VC=FC.end-(IA._startClamp?Math.max(0,FC.start):FC.start),(xi===aI&&FC.start-FC._pinPush<Bg||xi===VB)&&isNaN(qg)&&(vg+=VC*(1-FC.progress)),xi===FA&&(Kg+=VC));if(Bg+=vg,$g+=vg,IA._startClamp&&(IA._startClamp+=vg),IA._endClamp&&!cB&&(IA._endClamp=$g||-.001,$g=Math.min($g,ei(MI,eI))),sC=$g-Bg||(Bg-=.01)&&.001,gB&&(GB=SA.utils.clamp(0,1,SA.utils.normalize(Bg,$g,Ni))),IA._pinPush=Kg,fB&&vg&&(VC={},VC[eI.a]="+="+vg,VB&&(VC[eI.p]="-="+aC()),SA.set([fB,PB],VC)),FA&&!(oI&&IA.end>=ei(MI,eI)))VC=qC(FA),Xa=eI===gA,YE=aC(),ni=parseFloat(AC(eI.a))+Kg,!IC&&$g>1&&(_i=(pC?bA.scrollingElement||m:MI).style,_i={style:_i,value:_i["overflow"+eI.a.toUpperCase()]},pC&&qC(NA)["overflow"+eI.a.toUpperCase()]!=="scroll"&&(_i.style["overflow"+eI.a.toUpperCase()]="scroll")),Ur(FA,mC,VC),mo=Za(FA),CB=vC(FA,!0),pr=wB&&lA(MI,Xa?CA:gA)(),nI?(nC=[nI+eI.os2,sC+Kg+_g],nC.t=mC,WC=nI===EI?bQ(FA,eI)+sC+Kg:0,WC&&(nC.push(eI.d,WC+_g),mC.style.flexBasis!=="auto"&&(mC.style.flexBasis=WC+_g)),Lo(nC),VB&&_I.forEach(function(ge){ge.pin===VB&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),wB&&aC(Ni)):(WC=bQ(FA,eI),WC&&mC.style.flexBasis!=="auto"&&(mC.style.flexBasis=WC+_g)),wB&&(BB={top:CB.top+(Xa?YE-Bg:pr)+_g,left:CB.left+(Xa?pr:YE-Bg)+_g,boxSizing:"border-box",position:"fixed"},BB[cI]=BB["max"+ag]=Math.ceil(CB.width)+_g,BB[tg]=BB["max"+Gi]=Math.ceil(CB.height)+_g,BB[AB]=BB[AB+DB]=BB[AB+MC]=BB[AB+eg]=BB[AB+Ng]="0",BB[EI]=VC[EI],BB[EI+DB]=VC[EI+DB],BB[EI+MC]=VC[EI+MC],BB[EI+eg]=VC[EI+eg],BB[EI+Ng]=VC[EI+Ng],JE=ZM(vQ,BB,ai),cB&&aC(0)),u?(Yl=u._initted,tI(1),u.render(u.duration(),!0,!0),tQ=AC(eI.a)-ni+sC+Kg,PQ=Math.abs(sC-tQ)>1,wB&&PQ&&JE.splice(JE.length-2,2),u.render(0,!0,!0),Yl||u.invalidate(!0),u.parent||u.totalTime(u.totalTime()),tI(0)):tQ=sC,_i&&(_i.value?_i.style["overflow"+eI.a.toUpperCase()]=_i.value:_i.style.removeProperty("overflow-"+eI.a));else if(aI&&aC()&&!KI)for(CB=aI.parentNode;CB&&CB!==NA;)CB._pinOffset&&(Bg-=CB._pinOffset,$g-=CB._pinOffset),CB=CB.parentNode;Ae&&Ae.forEach(function(ge){return ge.revert(!1,!0)}),IA.start=Bg,IA.end=$g,kB=yi=cB?Ni:aC(),!KI&&!cB&&(kB<Ni&&aC(Ni),IA.scroll.rec=0),IA.revert(!1,!0),EQ=UA(),Ui&&(si=-1,Ui.restart(!0)),K=0,u&&PC&&(u._initted||qE)&&u.progress()!==qE&&u.progress(qE||0,!0).render(u.time(),!0,!0),(gB||GB!==IA.progress||KI||Og)&&(u&&!PC&&u.totalProgress(KI&&Bg<-.001&&!GB?SA.utils.normalize(Bg,$g,0):GB,!0),IA.progress=gB||(kB-Bg)/sC===GB?0:GB),FA&&nI&&(mC._pinOffset=Math.round(IA.progress*tQ)),vI&&vI.invalidate(),isNaN(Ie)||(Ie-=SA.getProperty(cA,eI.p),za-=SA.getProperty(WB,eI.p),Wa(cA,eI,Ie),Wa(fB,eI,Ie-(dI||0)),Wa(WB,eI,za),Wa(PB,eI,za-(dI||0))),gB&&!cB&&IA.update(),sg&&!cB&&!OQ&&(OQ=!0,sg(IA),OQ=!1)}},IA.getVelocity=function(){return(aC()-yi)/(UA()-xA)*1e3||0},IA.endAnimation=function(){eA(IA.callbackAnimation),u&&(vI?vI.progress(1):u.paused()?PC||eA(u,IA.direction<0,1):eA(u,u.reversed()))},IA.labelToScroll=function(OA){return u&&u.labels&&(Bg||IA.refresh()||Bg)+u.labels[OA]/u.duration()*sC||0},IA.getTrailing=function(OA){var fI=_I.indexOf(IA),rI=IA.direction>0?_I.slice(0,fI).reverse():_I.slice(fI+1);return(J(OA)?rI.filter(function(dI){return dI.vars.preventOverlaps===OA}):rI).filter(function(dI){return IA.direction>0?dI.end<=Bg:dI.start>=$g})},IA.update=function(OA,fI,rI){if(!(KI&&!rI&&!OA)){var dI=cB===!0?Ni:IA.scroll(),HC=OA?0:(dI-Bg)/sC,VI=HC<0?0:HC>1?1:HC||0,IC=IA.progress,gB,vg,Kg,cg,pi,qg,VB,bi;if(fI&&(yi=kB,kB=KI?aC():dI,qI&&(fE=WQ,WQ=u&&!PC?u.totalProgress():VI)),Gg&&FA&&!K&&!RA&&$A&&(!VI&&Bg<dI+(dI-yi)/(UA()-xA)*Gg?VI=1e-4:VI===1&&$g>dI+(dI-yi)/(UA()-xA)*Gg&&(VI=.9999)),VI!==IC&&IA.enabled){if(gB=IA.isActive=!!VI&&VI<1,vg=!!IC&&IC<1,qg=gB!==vg,pi=qg||!!VI!=!!IC,IA.direction=VI>IC?1:-1,IA.progress=VI,pi&&!K&&(Kg=VI&&!IC?0:VI===1?1:IC===1?2:3,PC&&(cg=!qg&&hg[Kg+1]!=="none"&&hg[Kg+1]||hg[Kg],bi=u&&(cg==="complete"||cg==="reset"||cg in u))),JB&&(qg||bi)&&(bi||gg||!u)&&(X(JB)?JB(IA):IA.getTrailing(JB).forEach(function(YE){return YE.endAnimation()})),PC||(vI&&!K&&!RA?(vI._dp._time-vI._start!==vI._time&&vI.render(vI._dp._time-vI._start),vI.resetTo?vI.resetTo("totalProgress",VI,u._tTime/u._tDur):(vI.vars.totalProgress=VI,vI.invalidate().restart())):u&&u.totalProgress(VI,!!(K&&(EQ||OA)))),FA){if(OA&&nI&&(mC.style[nI+eI.os2]=zt),!wB)ki(TQ(ni+tQ*VI));else if(pi){if(VB=!OA&&VI>IC&&$g+1>dI&&dI+1>=ei(MI,eI),ai)if(!OA&&(gB||VB)){var WC=vC(FA,!0),VC=dI-Bg;Fl(FA,NA,WC.top+(eI===gA?VC:0)+_g,WC.left+(eI===gA?0:VC)+_g)}else Fl(FA,mC);Lo(gB||VB?JE:mo),PQ&&VI<1&&gB||ki(ni+(VI===1&&!VB?tQ:0))}}qI&&!yB.tween&&!K&&!RA&&Ui.restart(!0),BA&&(qg||ZC&&VI&&(VI<1||!Y))&&yA(BA.targets).forEach(function(YE){return YE.classList[gB||ZC?"add":"remove"](BA.className)}),hA&&!PC&&!OA&&hA(IA),pi&&!K?(PC&&(bi&&(cg==="complete"?u.pause().totalProgress(1):cg==="reset"?u.restart(!0).pause():cg==="restart"?u.restart(!0):u[cg]()),hA&&hA(IA)),(qg||!Y)&&(pI&&qg&&WA(IA,pI),SB[Kg]&&WA(IA,SB[Kg]),ZC&&(VI===1?IA.kill(!1,1):SB[Kg]=0),qg||(Kg=VI===1?1:3,SB[Kg]&&WA(IA,SB[Kg]))),lB&&!gB&&Math.abs(IA.getVelocity())>(aA(lB)?lB:2500)&&(eA(IA.callbackAnimation),vI?vI.progress(1):eA(u,cg==="reverse"?1:!VI,1))):PC&&hA&&!K&&hA(IA)}if(Ho){var CB=KI?dI/KI.duration()*(KI._caScrollDist||0):dI;ja(CB+(cA._isFlipped?1:0)),Ho(CB)}bo&&bo(-dI/KI.duration()*(KI._caScrollDist||0))}},IA.enable=function(OA,fI){IA.enabled||(IA.enabled=!0,YC(MI,"resize",jt),pC||YC(MI,"scroll",Yo),KC&&YC(AA,"refreshInit",KC),OA!==!1&&(IA.progress=GB=0,kB=yi=si=aC()),fI!==!1&&IA.refresh())},IA.getTween=function(OA){return OA&&yB?yB.tween:vI},IA.setPositions=function(OA,fI,rI,dI){if(KI){var HC=KI.scrollTrigger,VI=KI.duration(),IC=HC.end-HC.start;OA=HC.start+IC*OA/VI,fI=HC.start+IC*fI/VI}IA.refresh(!1,!1,{start:Eg(OA,rI&&!!IA._startClamp),end:Eg(fI,rI&&!!IA._endClamp)},dI),IA.update()},IA.adjustPinSpacing=function(OA){if(nC&&OA){var fI=nC.indexOf(eI.d)+1;nC[fI]=parseFloat(nC[fI])+OA+_g,nC[1]=parseFloat(nC[1])+OA+_g,Lo(nC)}},IA.disable=function(OA,fI){if(IA.enabled&&(OA!==!1&&IA.revert(!0,!0),IA.enabled=IA.isActive=!1,fI||vI&&vI.pause(),Ni=0,IB&&(IB.uncache=1),KC&&LC(AA,"refreshInit",KC),Ui&&(Ui.pause(),yB.tween&&yB.tween.kill()&&(yB.tween=0)),!pC)){for(var rI=_I.length;rI--;)if(_I[rI].scroller===MI&&_I[rI]!==IA)return;LC(MI,"resize",jt),pC||LC(MI,"scroll",Yo)}},IA.kill=function(OA,fI){IA.disable(OA,fI),vI&&!fI&&vI.kill(),PA&&delete Sr[PA];var rI=_I.indexOf(IA);rI>=0&&_I.splice(rI,1),rI===kA&&Oa>0&&kA--,rI=0,_I.forEach(function(dI){return dI.scroller===IA.scroller&&(rI=1)}),rI||cB||(IA.scroll.rec=0),u&&(u.scrollTrigger=null,OA&&u.revert({kill:!1}),fI||u.kill()),fB&&[fB,PB,cA,WB].forEach(function(dI){return dI.parentNode&&dI.parentNode.removeChild(dI)}),Xt===IA&&(Xt=0),FA&&(IB&&(IB.uncache=1),rI=0,_I.forEach(function(dI){return dI.pin===FA&&rI++}),rI||(IB.spacer=0)),d.onKill&&d.onKill(IA)},_I.push(IA),IA.enable(!1,!1),eQ&&eQ(IA),u&&u.add&&!sC){var ig=IA.update;IA.update=function(){IA.update=ig,Bg||$g||IA.refresh()},SA.delayedCall(.01,IA.update),sC=.01,Bg=$g=0}else IA.refresh();FA&&_M()},AA.register=function(d){return XA||(SA=d||UE(),ua()&&window.document&&AA.enable(),XA=xI),XA},AA.defaults=function(d){if(d)for(var u in d)Ha[u]=d[u];return Ha},AA.disable=function(d,u){xI=0,_I.forEach(function(hA){return hA[u?"kill":"disable"](d)}),LC(HA,"wheel",Yo),LC(bA,"scroll",Yo),clearInterval(f),LC(bA,"touchcancel",Sg),LC(NA,"touchstart",Sg),La(LC,bA,"pointerdown,touchstart,mousedown",WI),La(LC,bA,"pointerup,touchend,mouseup",Ug),JA.kill(),qo(LC);for(var V=0;V<U.length;V+=3)ma(LC,U[V],U[V+1]),ma(LC,U[V],U[V+2])},AA.enable=function(){if(HA=window,bA=document,m=bA.documentElement,NA=bA.body,SA&&(yA=SA.utils.toArray,gI=SA.utils.clamp,ZA=SA.core.context||Sg,tI=SA.core.suppressOverwrites||Sg,NI=HA.history.scrollRestoration||"auto",kr=HA.pageYOffset,SA.core.globals("ScrollTrigger",AA),NA)){xI=1,H=document.createElement("div"),H.style.height="100vh",H.style.position="absolute",Nl(),kC(),mA.register(SA),AA.isTouch=mA.isTouch,AI=mA.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bI=mA.isTouch===1,YC(HA,"wheel",Yo),GA=[HA,bA,m,NA],SA.matchMedia?(AA.matchMedia=function(PA){var pI=SA.matchMedia(),sg;for(sg in PA)pI.add(sg,PA[sg]);return pI},SA.addEventListener("matchMediaInit",function(){return yr()}),SA.addEventListener("matchMediaRevert",function(){return kl()}),SA.addEventListener("matchMedia",function(){dE(0,1),KE("matchMedia")}),SA.matchMedia("(orientation: portrait)",function(){return Gr(),Gr})):console.warn("Requires GSAP 3.11.0 or later"),Gr(),YC(bA,"scroll",Yo);var d=NA.style,u=d.borderTopStyle,V=SA.core.Animation.prototype,hA,BA;for(V.revert||Object.defineProperty(V,"revert",{value:function(){return this.time(-.01,!0)}}),d.borderTopStyle="solid",hA=vC(NA),gA.m=Math.round(hA.top+gA.sc())||0,CA.m=Math.round(hA.left+CA.sc())||0,u?d.borderTopStyle=u:d.removeProperty("border-top-style"),f=setInterval(Gl,250),SA.delayedCall(.5,function(){return RA=0}),YC(bA,"touchcancel",Sg),YC(NA,"touchstart",Sg),La(YC,bA,"pointerdown,touchstart,mousedown",WI),La(YC,bA,"pointerup,touchend,mouseup",Ug),dA=SA.utils.checkPrefix("transform"),va.push(dA),XA=UA(),JA=SA.delayedCall(.2,dE).pause(),LA=[bA,"visibilitychange",function(){var PA=HA.innerWidth,pI=HA.innerHeight;bA.hidden?(KA=PA,zA=pI):(KA!==PA||zA!==pI)&&jt()},bA,"DOMContentLoaded",dE,HA,"load",dE,HA,"resize",jt],qo(YC),_I.forEach(function(PA){return PA.enable(0,1)}),BA=0;BA<U.length;BA+=3)ma(LC,U[BA],U[BA+1]),ma(LC,U[BA],U[BA+2])}},AA.config=function(d){"limitCallbacks"in d&&(Y=!!d.limitCallbacks);var u=d.syncInterval;u&&clearInterval(f)||(f=u)&&setInterval(Gl,u),"ignoreMobileResize"in d&&(bI=AA.isTouch===1&&d.ignoreMobileResize),"autoRefreshEvents"in d&&(qo(LC)||qo(YC,d.autoRefreshEvents||"none"),yI=(d.autoRefreshEvents+"").indexOf("resize")===-1)},AA.scrollerProxy=function(d,u){var V=DA(d),hA=U.indexOf(V),BA=Ti(V);~hA&&U.splice(hA,BA?6:2),u&&(BA?k.unshift(HA,u,NA,u,m,u):k.unshift(V,u))},AA.clearMatchMedia=function(d){_I.forEach(function(u){return u._ctx&&u._ctx.query===d&&u._ctx.kill(!0,!0)})},AA.isInViewport=function(d,u,V){var hA=(J(d)?DA(d):d).getBoundingClientRect(),BA=hA[V?cI:tg]*u||0;return V?hA.right-BA>0&&hA.left+BA<HA.innerWidth:hA.bottom-BA>0&&hA.top+BA<HA.innerHeight},AA.positionInViewport=function(d,u,V){J(d)&&(d=DA(d));var hA=d.getBoundingClientRect(),BA=hA[V?cI:tg],PA=u==null?BA/2:u in Ta?Ta[u]*BA:~u.indexOf("%")?parseFloat(u)*BA/100:parseFloat(u)||0;return V?(hA.left+PA)/HA.innerWidth:(hA.top+PA)/HA.innerHeight},AA.killAll=function(d){if(_I.slice(0).forEach(function(V){return V.vars.id!=="ScrollSmoother"&&V.kill()}),d!==!0){var u=pE.killAll||[];pE={},u.forEach(function(V){return V()})}},AA}();OI.version="3.12.5",OI.saveStyles=function(AA){return AA?yA(AA).forEach(function(F){if(F&&F.style){var _=ZB.indexOf(F);_>=0&&ZB.splice(_,5),ZB.push(F,F.style.cssText,F.getBBox&&F.getAttribute("transform"),SA.core.getCache(F),ZA())}}):ZB},OI.revert=function(AA,F){return yr(!AA,F)},OI.create=function(AA,F){return new OI(AA,F)},OI.refresh=function(AA){return AA?jt():(XA||OI.register())&&dE(!0)},OI.update=function(AA){return++U.cache&&iQ(AA===!0?2:0)},OI.clearScrollMemory=Ml,OI.maxScroll=function(AA,F){return ei(AA,F?CA:gA)},OI.getScrollFunc=function(AA,F){return lA(DA(AA),F?CA:gA)},OI.getById=function(AA){return Sr[AA]},OI.getAll=function(){return _I.filter(function(AA){return AA.vars.id!=="ScrollSmoother"})},OI.isScrolling=function(){return!!$A},OI.snapDirectional=Wt,OI.addEventListener=function(AA,F){var _=pE[AA]||(pE[AA]=[]);~_.indexOf(F)||_.push(F)},OI.removeEventListener=function(AA,F){var _=pE[AA],d=_&&_.indexOf(F);d>=0&&_.splice(d,1)},OI.batch=function(AA,F){var _=[],d={},u=F.interval||.016,V=F.batchMax||1e9,hA=function(pI,sg){var gg=[],aI=[],FA=SA.delayedCall(u,function(){sg(gg,aI),gg=[],aI=[]}).pause();return function(nI){gg.length||FA.restart(!0),gg.push(nI.trigger),aI.push(nI),V<=gg.length&&FA.progress(1)}},BA;for(BA in F)d[BA]=BA.substr(0,2)==="on"&&X(F[BA])&&BA!=="onRefreshInit"?hA(BA,F[BA]):F[BA];return X(V)&&(V=V(),YC(OI,"refresh",function(){return V=F.batchMax()})),yA(AA).forEach(function(PA){var pI={};for(BA in d)pI[BA]=d[BA];pI.trigger=PA,_.push(OI.create(pI))}),_};var Jl=function(F,_,d,u){return _>u?F(u):_<0&&F(0),d>u?(u-_)/(d-_):d<0?_/(_-d):1},Nr=function AA(F,_){_===!0?F.style.removeProperty("touch-action"):F.style.touchAction=_===!0?"auto":_?"pan-"+_+(mA.isTouch?" pinch-zoom":""):"none",F===m&&AA(NA,_)},Va={auto:1,scroll:1},WM=function(F){var _=F.event,d=F.target,u=F.axis,V=(_.changedTouches?_.changedTouches[0]:_).target,hA=V._gsap||SA.core.getCache(V),BA=UA(),PA;if(!hA._isScrollT||BA-hA._isScrollT>2e3){for(;V&&V!==NA&&(V.scrollHeight<=V.clientHeight&&V.scrollWidth<=V.clientWidth||!(Va[(PA=qC(V)).overflowY]||Va[PA.overflowX]));)V=V.parentNode;hA._isScroll=V&&V!==d&&!Ti(V)&&(Va[(PA=qC(V)).overflowY]||Va[PA.overflowX]),hA._isScrollT=BA}(hA._isScroll||u==="x")&&(_.stopPropagation(),_._gsapAllow=!0)},fl=function(F,_,d,u){return mA.create({target:F,capture:!0,debounce:!1,lockAxis:!0,type:_,onWheel:u=u&&WM,onPress:u,onDrag:u,onScroll:u,onEnable:function(){return d&&YC(bA,mA.eventTypes[0],ql,!1,!0)},onDisable:function(){return LC(bA,mA.eventTypes[0],ql,!0)}})},VM=/(input|label|select|textarea)/i,ul,ql=function(F){var _=VM.test(F.target.tagName);(_||ul)&&(F._gsapAllow=!0,ul=_)},jM=function(F){nA(F)||(F={}),F.preventDefault=F.isNormalizer=F.allowClicks=!0,F.type||(F.type="wheel,touch"),F.debounce=!!F.debounce,F.id=F.id||"normalizer";var _=F,d=_.normalizeScrollX,u=_.momentum,V=_.allowNestedScroll,hA=_.onRelease,BA,PA,pI=DA(F.target)||m,sg=SA.core.globals().ScrollSmoother,gg=sg&&sg.get(),aI=AI&&(F.content&&DA(F.content)||gg&&F.content!==!1&&!gg.smooth()&&gg.content()),FA=lA(pI,gA),nI=lA(pI,CA),Og=1,Gg=(mA.isTouch&&HA.visualViewport?HA.visualViewport.scale*HA.visualViewport.width:HA.outerWidth)/HA.innerWidth,NC=0,ug=X(u)?function(){return u(BA)}:function(){return u||2.8},ZC,qI,ai=fl(pI,F.type,!0,V),pg=function(){return qI=!1},KI=Sg,lB=Sg,JB=function(){PA=ei(pI,gA),lB=gI(AI?1:0,PA),d&&(KI=gI(0,ei(pI,CA))),ZC=FE},eI=function(){aI._gsap.y=TQ(parseFloat(aI._gsap.y)+FA.offset)+"px",aI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(aI._gsap.y)+", 0, 1)",FA.offset=FA.cacheID=0},PC=function(){if(qI){requestAnimationFrame(pg);var tC=TQ(BA.deltaY/2),eC=lB(FA.v-tC);if(aI&&eC!==FA.v+FA.offset){FA.offset=eC-FA.v;var IA=TQ((parseFloat(aI&&aI._gsap.y)||0)-FA.offset);aI.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+IA+", 0, 1)",aI._gsap.y=IA+"px",FA.cacheID=U.cache,iQ()}return!0}FA.offset&&eI(),qI=!0},MI,QQ,pC,wB,SB=function(){JB(),MI.isActive()&&MI.vars.scrollY>PA&&(FA()>PA?MI.progress(1)&&FA(PA):MI.resetTo("scrollY",PA))};return aI&&SA.set(aI,{y:"+=0"}),F.ignoreCheck=function(hg){return AI&&hg.type==="touchmove"&&PC()||Og>1.05&&hg.type!=="touchstart"||BA.isGesturing||hg.touches&&hg.touches.length>1},F.onPress=function(){qI=!1;var hg=Og;Og=TQ((HA.visualViewport&&HA.visualViewport.scale||1)/Gg),MI.pause(),hg!==Og&&Nr(pI,Og>1.01?!0:d?!1:"x"),QQ=nI(),pC=FA(),JB(),ZC=FE},F.onRelease=F.onGestureStart=function(hg,tC){if(FA.offset&&eI(),!tC)wB.restart(!0);else{U.cache++;var eC=ug(),IA,KC;d&&(IA=nI(),KC=IA+eC*.05*-hg.velocityX/.227,eC*=Jl(nI,IA,KC,ei(pI,CA)),MI.vars.scrollX=KI(KC)),IA=FA(),KC=IA+eC*.05*-hg.velocityY/.227,eC*=Jl(FA,IA,KC,ei(pI,gA)),MI.vars.scrollY=lB(KC),MI.invalidate().duration(eC).play(.01),(AI&&MI.vars.scrollY>=PA||IA>=PA-1)&&SA.to({},{onUpdate:SB,duration:eC})}hA&&hA(hg)},F.onWheel=function(){MI._ts&&MI.pause(),UA()-NC>1e3&&(ZC=0,NC=UA())},F.onChange=function(hg,tC,eC,IA,KC){if(FE!==ZC&&JB(),tC&&d&&nI(KI(IA[2]===tC?QQ+(hg.startX-hg.x):nI()+tC-IA[1])),eC){FA.offset&&eI();var RE=KC[2]===eC,xQ=RE?pC+hg.startY-hg.y:FA()+eC-KC[1],si=lB(xQ);RE&&xQ!==si&&(pC+=si-xQ),FA(si)}(eC||tC)&&iQ()},F.onEnable=function(){Nr(pI,d?!1:"x"),OI.addEventListener("refresh",SB),YC(HA,"resize",SB),FA.smooth&&(FA.target.style.scrollBehavior="auto",FA.smooth=nI.smooth=!1),ai.enable()},F.onDisable=function(){Nr(pI,!0),LC(HA,"resize",SB),OI.removeEventListener("refresh",SB),ai.kill()},F.lockAxis=F.lockAxis!==!1,BA=new mA(F),BA.iOS=AI,AI&&!FA()&&FA(1),AI&&SA.ticker.add(Sg),wB=BA._dc,MI=SA.to(BA,{ease:"power4",paused:!0,inherit:!1,scrollX:d?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dl(FA,FA(),function(){return MI.pause()})},onUpdate:iQ,onComplete:wB.vars.onComplete}),BA};OI.sort=function(AA){return _I.sort(AA||function(F,_){return(F.vars.refreshPriority||0)*-1e6+F.start-(_.start+(_.vars.refreshPriority||0)*-1e6)})},OI.observe=function(AA){return new mA(AA)},OI.normalizeScroll=function(AA){if(typeof AA>"u")return MA;if(AA===!0&&MA)return MA.enable();if(AA===!1){MA&&MA.kill(),MA=AA;return}var F=AA instanceof mA?AA:jM(AA);return MA&&MA.target===F.target&&MA.kill(),Ti(F.target)&&(MA=F),F},OI.core={_getVelocityProp:YA,_inputObserver:fl,_scrollers:U,_proxies:k,bridge:{ss:function(){$A||KE("scrollStart"),$A=UA()},ref:function(){return K}}},UE()&&SA.registerPlugin(OI),I.ScrollTrigger=OI,I.default=OI,typeof window>"u"||window!==I?Object.defineProperty(I,"__esModule",{value:!0}):delete window.default})})(pD,pD.exports);var _h=pD.exports,KD={exports:{}};(function(i,A){(function(I,g){g(A)})(fG,function(I){/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var g,C,B,Q,E,o,t,e,a=function(){return typeof window<"u"},s=function(){return g||a()&&(g=window.gsap)&&g.registerPlugin&&g},n=function(y){return typeof y=="string"},r=function(y){return typeof y=="function"},c=function(y,p){var q=p==="x"?"Width":"Height",M="scroll"+q,N="client"+q;return y===B||y===Q||y===E?Math.max(Q[M],E[M])-(B["inner"+q]||Q[N]||E[N]):y[M]-y["offset"+q]},D=function(y,p){var q="scroll"+(p==="x"?"Left":"Top");return y===B&&(y.pageXOffset!=null?q="page"+p.toUpperCase()+"Offset":y=Q[q]!=null?Q:E),function(){return y[q]}},h=function(y,p,q,M){if(r(y)&&(y=y(p,q,M)),typeof y!="object")return n(y)&&y!=="max"&&y.charAt(1)!=="="?{x:y,y}:{y};if(y.nodeType)return{y,x:y};var N={},L;for(L in y)N[L]=L!=="onAutoKill"&&r(y[L])?y[L](p,q,M):y[L];return N},w=function(y,p){if(y=o(y)[0],!y||!y.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var q=y.getBoundingClientRect(),M=!p||p===B||p===E,N=M?{top:Q.clientTop-(B.pageYOffset||Q.scrollTop||E.scrollTop||0),left:Q.clientLeft-(B.pageXOffset||Q.scrollLeft||E.scrollLeft||0)}:p.getBoundingClientRect(),L={x:q.left-N.left,y:q.top-N.top};return!M&&p&&(L.x+=D(p,"x")(),L.y+=D(p,"y")()),L},l=function(y,p,q,M,N){return!isNaN(y)&&typeof y!="object"?parseFloat(y)-N:n(y)&&y.charAt(1)==="="?parseFloat(y.substr(2))*(y.charAt(0)==="-"?-1:1)+M-N:y==="max"?c(p,q)-N:Math.min(c(p,q),w(y,p)[q]-N)},S=function(){g=s(),a()&&g&&typeof document<"u"&&document.body&&(B=window,E=document.body,Q=document.documentElement,o=g.utils.toArray,g.config({autoKillThreshold:7}),t=g.config(),C=1)},U={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(y){g=y,S()},init:function(y,p,q,M,N){C||S();var L=this,x=g.getProperty(y,"scrollSnapType");L.isWin=y===B,L.target=y,L.tween=q,p=h(p,M,y,N),L.vars=p,L.autoKill=!!p.autoKill,L.getX=D(y,"x"),L.getY=D(y,"y"),L.x=L.xPrev=L.getX(),L.y=L.yPrev=L.getY(),e||(e=g.core.globals().ScrollTrigger),g.getProperty(y,"scrollBehavior")==="smooth"&&g.set(y,{scrollBehavior:"auto"}),x&&x!=="none"&&(L.snap=1,L.snapInline=y.style.scrollSnapType,y.style.scrollSnapType="none"),p.x!=null?(L.add(L,"x",L.x,l(p.x,y,"x",L.x,p.offsetX||0),M,N),L._props.push("scrollTo_x")):L.skipX=1,p.y!=null?(L.add(L,"y",L.y,l(p.y,y,"y",L.y,p.offsetY||0),M,N),L._props.push("scrollTo_y")):L.skipY=1},render:function(y,p){for(var q=p._pt,M=p.target,N=p.tween,L=p.autoKill,x=p.xPrev,b=p.yPrev,P=p.isWin,v=p.snap,z=p.snapInline,CA,gA,DA,lA,YA;q;)q.r(y,q.d),q=q._next;CA=P||!p.skipX?p.getX():x,gA=P||!p.skipY?p.getY():b,DA=gA-b,lA=CA-x,YA=t.autoKillThreshold,p.x<0&&(p.x=0),p.y<0&&(p.y=0),L&&(!p.skipX&&(lA>YA||lA<-YA)&&CA<c(M,"x")&&(p.skipX=1),!p.skipY&&(DA>YA||DA<-YA)&&gA<c(M,"y")&&(p.skipY=1),p.skipX&&p.skipY&&(N.kill(),p.vars.onAutoKill&&p.vars.onAutoKill.apply(N,p.vars.onAutoKillParams||[]))),P?B.scrollTo(p.skipX?CA:p.x,p.skipY?gA:p.y):(p.skipY||(M.scrollTop=p.y),p.skipX||(M.scrollLeft=p.x)),v&&(y===1||y===0)&&(gA=M.scrollTop,CA=M.scrollLeft,z?M.style.scrollSnapType=z:M.style.removeProperty("scroll-snap-type"),M.scrollTop=gA+1,M.scrollLeft=CA+1,M.scrollTop=gA,M.scrollLeft=CA),p.xPrev=p.x,p.yPrev=p.y,e&&e.update()},kill:function(y){var p=y==="scrollTo",q=this._props.indexOf(y);return(p||y==="scrollTo_x")&&(this.skipX=1),(p||y==="scrollTo_y")&&(this.skipY=1),q>-1&&this._props.splice(q,1),!this._props.length}};U.max=c,U.getOffset=w,U.buildGetter=D,s()&&g.registerPlugin(U),I.ScrollToPlugin=U,I.default=U,Object.defineProperty(I,"__esModule",{value:!0})})})(KD,KD.exports);var CU=KD.exports;function cQ(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function uG(i,A){i.prototype=Object.create(A.prototype),i.prototype.constructor=i,i.__proto__=A}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yt={duration:.5,overwrite:!1,delay:0},Oh,aB,dg,li=1e8,kg=1/li,FD=Math.PI*2,BU=FD/4,iU=0,qG=Math.sqrt,QU=Math.cos,EU=Math.sin,OC=function(A){return typeof A=="string"},jg=function(A){return typeof A=="function"},KQ=function(A){return typeof A=="number"},vh=function(A){return typeof A>"u"},IQ=function(A){return typeof A=="object"},LB=function(A){return A!==!1},Zh=function(){return typeof window<"u"},$a=function(A){return jg(A)||OC(A)},YG=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sB=Array.isArray,dD=/(?:-?\.?\d|\.)+/gi,LG=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,at=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dr=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mG=/[+-]=-?[.\d]+/,HG=/[^,'"\[\]\s]+/gi,oU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lg,Zi,RD,Ph,ti={},En={},TG,bG=function(A){return(En=wo(A,ti))&&_B},Wh=function(A,I){return console.warn("Invalid property",A,"set to",I,"Missing plugin? gsap.registerPlugin()")},fe=function(A,I){return!I&&console.warn(A)},xG=function(A,I){return A&&(ti[A]=I)&&En&&(En[A]=I)||ti},ue=function(){return 0},tU={suppressEvents:!0,isStart:!0,kill:!1},Vs={suppressEvents:!0,kill:!1},eU={suppressEvents:!0},Vh={},tE=[],JD={},_G,$B={},Rr={},Hl=30,js=[],jh="",Xh=function(A){var I=A[0],g,C;if(IQ(I)||jg(I)||(A=[A]),!(g=(I._gsap||{}).harness)){for(C=js.length;C--&&!js[C].targetTest(I););g=js[C]}for(C=A.length;C--;)A[C]&&(A[C]._gsap||(A[C]._gsap=new ny(A[C],g)))||A.splice(C,1);return A},eo=function(A){return A._gsap||Xh(wi(A))[0]._gsap},OG=function(A,I,g){return(g=A[I])&&jg(g)?A[I]():vh(g)&&A.getAttribute&&A.getAttribute(I)||g},mB=function(A,I){return(A=A.split(",")).forEach(I)||A},BC=function(A){return Math.round(A*1e5)/1e5||0},xC=function(A){return Math.round(A*1e7)/1e7||0},ct=function(A,I){var g=I.charAt(0),C=parseFloat(I.substr(2));return A=parseFloat(A),g==="+"?A+C:g==="-"?A-C:g==="*"?A*C:A/C},aU=function(A,I){for(var g=I.length,C=0;A.indexOf(I[C])<0&&++C<g;);return C<g},on=function(){var A=tE.length,I=tE.slice(0),g,C;for(JD={},tE.length=0,g=0;g<A;g++)C=I[g],C&&C._lazy&&(C.render(C._lazy[0],C._lazy[1],!0)._lazy=0)},vG=function(A,I,g,C){tE.length&&!aB&&on(),A.render(I,g,C||aB&&I<0&&(A._initted||A._startAt)),tE.length&&!aB&&on()},ZG=function(A){var I=parseFloat(A);return(I||I===0)&&(A+"").match(HG).length<2?I:OC(A)?A.trim():A},PG=function(A){return A},Si=function(A,I){for(var g in I)g in A||(A[g]=I[g]);return A},sU=function(A){return function(I,g){for(var C in g)C in I||C==="duration"&&A||C==="ease"||(I[C]=g[C])}},wo=function(A,I){for(var g in I)A[g]=I[g];return A},Tl=function i(A,I){for(var g in I)g!=="__proto__"&&g!=="constructor"&&g!=="prototype"&&(A[g]=IQ(I[g])?i(A[g]||(A[g]={}),I[g]):I[g]);return A},tn=function(A,I){var g={},C;for(C in A)C in I||(g[C]=A[C]);return g},Ue=function(A){var I=A.parent||Lg,g=A.keyframes?sU(sB(A.keyframes)):Si;if(LB(A.inherit))for(;I;)g(A,I.vars.defaults),I=I.parent||I._dp;return A},nU=function(A,I){for(var g=A.length,C=g===I.length;C&&g--&&A[g]===I[g];);return g<0},WG=function(A,I,g,C,B){g===void 0&&(g="_first"),C===void 0&&(C="_last");var Q=A[C],E;if(B)for(E=I[B];Q&&Q[B]>E;)Q=Q._prev;return Q?(I._next=Q._next,Q._next=I):(I._next=A[g],A[g]=I),I._next?I._next._prev=I:A[C]=I,I._prev=Q,I.parent=I._dp=A,I},Fn=function(A,I,g,C){g===void 0&&(g="_first"),C===void 0&&(C="_last");var B=I._prev,Q=I._next;B?B._next=Q:A[g]===I&&(A[g]=Q),Q?Q._prev=B:A[C]===I&&(A[C]=B),I._next=I._prev=I.parent=null},rE=function(A,I){A.parent&&(!I||A.parent.autoRemoveChildren)&&A.parent.remove&&A.parent.remove(A),A._act=0},ao=function(A,I){if(A&&(!I||I._end>A._dur||I._start<0))for(var g=A;g;)g._dirty=1,g=g.parent;return A},rU=function(A){for(var I=A.parent;I&&I.parent;)I._dirty=1,I.totalDuration(),I=I.parent;return A},fD=function(A,I,g,C){return A._startAt&&(aB?A._startAt.revert(Vs):A.vars.immediateRender&&!A.vars.autoRevert||A._startAt.render(I,!0,C))},DU=function i(A){return!A||A._ts&&i(A.parent)},bl=function(A){return A._repeat?kt(A._tTime,A=A.duration()+A._rDelay)*A:0},kt=function(A,I){var g=Math.floor(A/=I);return A&&g===A?g-1:g},en=function(A,I){return(A-I._start)*I._ts+(I._ts>=0?0:I._dirty?I.totalDuration():I._tDur)},dn=function(A){return A._end=xC(A._start+(A._tDur/Math.abs(A._ts||A._rts||kg)||0))},Rn=function(A,I){var g=A._dp;return g&&g.smoothChildTiming&&A._ts&&(A._start=xC(g._time-(A._ts>0?I/A._ts:((A._dirty?A.totalDuration():A._tDur)-I)/-A._ts)),dn(A),g._dirty||ao(g,A)),A},VG=function(A,I){var g;if((I._time||!I._dur&&I._initted||I._start<A._time&&(I._dur||!I.add))&&(g=en(A.rawTime(),I),(!I._dur||la(0,I.totalDuration(),g)-I._tTime>kg)&&I.render(g,!0)),ao(A,I)._dp&&A._initted&&A._time>=A._dur&&A._ts){if(A._dur<A.duration())for(g=A;g._dp;)g.rawTime()>=0&&g.totalTime(g._tTime),g=g._dp;A._zTime=-kg}},Wi=function(A,I,g,C){return I.parent&&rE(I),I._start=xC((KQ(g)?g:g||A!==Lg?Di(A,g,I):A._time)+I._delay),I._end=xC(I._start+(I.totalDuration()/Math.abs(I.timeScale())||0)),WG(A,I,"_first","_last",A._sort?"_start":0),uD(I)||(A._recent=I),C||VG(A,I),A._ts<0&&Rn(A,A._tTime),A},jG=function(A,I){return(ti.ScrollTrigger||Wh("scrollTrigger",I))&&ti.ScrollTrigger.create(I,A)},XG=function(A,I,g,C,B){if($h(A,I,B),!A._initted)return 1;if(!g&&A._pt&&!aB&&(A._dur&&A.vars.lazy!==!1||!A._dur&&A.vars.lazy)&&_G!==Ai.frame)return tE.push(A),A._lazy=[B,C],1},hU=function i(A){var I=A.parent;return I&&I._ts&&I._initted&&!I._lock&&(I.rawTime()<0||i(I))},uD=function(A){var I=A.data;return I==="isFromStart"||I==="isStart"},cU=function(A,I,g,C){var B=A.ratio,Q=I<0||!I&&(!A._start&&hU(A)&&!(!A._initted&&uD(A))||(A._ts<0||A._dp._ts<0)&&!uD(A))?0:1,E=A._rDelay,o=0,t,e,a;if(E&&A._repeat&&(o=la(0,A._tDur,I),e=kt(o,E),A._yoyo&&e&1&&(Q=1-Q),e!==kt(A._tTime,E)&&(B=1-Q,A.vars.repeatRefresh&&A._initted&&A.invalidate())),Q!==B||aB||C||A._zTime===kg||!I&&A._zTime){if(!A._initted&&XG(A,I,C,g,o))return;for(a=A._zTime,A._zTime=I||(g?kg:0),g||(g=I&&!a),A.ratio=Q,A._from&&(Q=1-Q),A._time=0,A._tTime=o,t=A._pt;t;)t.r(Q,t.d),t=t._next;I<0&&fD(A,I,g,!0),A._onUpdate&&!g&&Bi(A,"onUpdate"),o&&A._repeat&&!g&&A.parent&&Bi(A,"onRepeat"),(I>=A._tDur||I<0)&&A.ratio===Q&&(Q&&rE(A,1),!g&&!aB&&(Bi(A,Q?"onComplete":"onReverseComplete",!0),A._prom&&A._prom()))}else A._zTime||(A._zTime=I)},lU=function(A,I,g){var C;if(g>I)for(C=A._first;C&&C._start<=g;){if(C.data==="isPause"&&C._start>I)return C;C=C._next}else for(C=A._last;C&&C._start>=g;){if(C.data==="isPause"&&C._start<I)return C;C=C._prev}},Mt=function(A,I,g,C){var B=A._repeat,Q=xC(I)||0,E=A._tTime/A._tDur;return E&&!C&&(A._time*=Q/A._dur),A._dur=Q,A._tDur=B?B<0?1e10:xC(Q*(B+1)+A._rDelay*B):Q,E>0&&!C&&Rn(A,A._tTime=A._tDur*E),A.parent&&dn(A),g||ao(A.parent,A),A},xl=function(A){return A instanceof pB?ao(A):Mt(A,A._dur)},wU={_start:0,endTime:ue,totalDuration:ue},Di=function i(A,I,g){var C=A.labels,B=A._recent||wU,Q=A.duration()>=li?B.endTime(!1):A._dur,E,o,t;return OC(I)&&(isNaN(I)||I in C)?(o=I.charAt(0),t=I.substr(-1)==="%",E=I.indexOf("="),o==="<"||o===">"?(E>=0&&(I=I.replace(/=/,"")),(o==="<"?B._start:B.endTime(B._repeat>=0))+(parseFloat(I.substr(1))||0)*(t?(E<0?B:g).totalDuration()/100:1)):E<0?(I in C||(C[I]=Q),C[I]):(o=parseFloat(I.charAt(E-1)+I.substr(E+1)),t&&g&&(o=o/100*(sB(g)?g[0]:g).totalDuration()),E>1?i(A,I.substr(0,E-1),g)+o:Q+o)):I==null?Q:+I},Ne=function(A,I,g){var C=KQ(I[1]),B=(C?2:1)+(A<2?0:1),Q=I[B],E,o;if(C&&(Q.duration=I[1]),Q.parent=g,A){for(E=Q,o=g;o&&!("immediateRender"in E);)E=o.vars.defaults||{},o=LB(o.vars.inherit)&&o.parent;Q.immediateRender=LB(E.immediateRender),A<2?Q.runBackwards=1:Q.startAt=I[B-1]}return new hC(I[0],Q,I[B+1])},SE=function(A,I){return A||A===0?I(A):I},la=function(A,I,g){return g<A?A:g>I?I:g},tB=function(A,I){return!OC(A)||!(I=oU.exec(A))?"":I[1]},SU=function(A,I,g){return SE(g,function(C){return la(A,I,C)})},qD=[].slice,zG=function(A,I){return A&&IQ(A)&&"length"in A&&(!I&&!A.length||A.length-1 in A&&IQ(A[0]))&&!A.nodeType&&A!==Zi},GU=function(A,I,g){return g===void 0&&(g=[]),A.forEach(function(C){var B;return OC(C)&&!I||zG(C,1)?(B=g).push.apply(B,wi(C)):g.push(C)})||g},wi=function(A,I,g){return dg&&!I&&dg.selector?dg.selector(A):OC(A)&&!g&&(RD||!Ut())?qD.call((I||Ph).querySelectorAll(A),0):sB(A)?GU(A,g):zG(A)?qD.call(A,0):A?[A]:[]},YD=function(A){return A=wi(A)[0]||fe("Invalid scope")||{},function(I){var g=A.current||A.nativeElement||A;return wi(I,g.querySelectorAll?g:g===A?fe("Invalid scope")||Ph.createElement("div"):A)}},$G=function(A){return A.sort(function(){return .5-Math.random()})},Ay=function(A){if(jg(A))return A;var I=IQ(A)?A:{each:A},g=so(I.ease),C=I.from||0,B=parseFloat(I.base)||0,Q={},E=C>0&&C<1,o=isNaN(C)||E,t=I.axis,e=C,a=C;return OC(C)?e=a={center:.5,edges:.5,end:1}[C]||0:!E&&o&&(e=C[0],a=C[1]),function(s,n,r){var c=(r||I).length,D=Q[c],h,w,l,S,U,k,y,p,q;if(!D){if(q=I.grid==="auto"?0:(I.grid||[1,li])[1],!q){for(y=-li;y<(y=r[q++].getBoundingClientRect().left)&&q<c;);q<c&&q--}for(D=Q[c]=[],h=o?Math.min(q,c)*e-.5:C%q,w=q===li?0:o?c*a/q-.5:C/q|0,y=0,p=li,k=0;k<c;k++)l=k%q-h,S=w-(k/q|0),D[k]=U=t?Math.abs(t==="y"?S:l):qG(l*l+S*S),U>y&&(y=U),U<p&&(p=U);C==="random"&&$G(D),D.max=y-p,D.min=p,D.v=c=(parseFloat(I.amount)||parseFloat(I.each)*(q>c?c-1:t?t==="y"?c/q:q:Math.max(q,c/q))||0)*(C==="edges"?-1:1),D.b=c<0?B-c:B,D.u=tB(I.amount||I.each)||0,g=g&&c<0?ey(g):g}return c=(D[s]-D.min)/D.max||0,xC(D.b+(g?g(c):c)*D.v)+D.u}},LD=function(A){var I=Math.pow(10,((A+"").split(".")[1]||"").length);return function(g){var C=xC(Math.round(parseFloat(g)/A)*A*I);return(C-C%1)/I+(KQ(g)?0:tB(g))}},Iy=function(A,I){var g=sB(A),C,B;return!g&&IQ(A)&&(C=g=A.radius||li,A.values?(A=wi(A.values),(B=!KQ(A[0]))&&(C*=C)):A=LD(A.increment)),SE(I,g?jg(A)?function(Q){return B=A(Q),Math.abs(B-Q)<=C?B:Q}:function(Q){for(var E=parseFloat(B?Q.x:Q),o=parseFloat(B?Q.y:0),t=li,e=0,a=A.length,s,n;a--;)B?(s=A[a].x-E,n=A[a].y-o,s=s*s+n*n):s=Math.abs(A[a]-E),s<t&&(t=s,e=a);return e=!C||t<=C?A[e]:Q,B||e===Q||KQ(Q)?e:e+tB(Q)}:LD(A))},gy=function(A,I,g,C){return SE(sB(A)?!I:g===!0?!!(g=0):!C,function(){return sB(A)?A[~~(Math.random()*A.length)]:(g=g||1e-5)&&(C=g<1?Math.pow(10,(g+"").length-2):1)&&Math.floor(Math.round((A-g/2+Math.random()*(I-A+g*.99))/g)*g*C)/C})},yU=function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];return function(C){return I.reduce(function(B,Q){return Q(B)},C)}},kU=function(A,I){return function(g){return A(parseFloat(g))+(I||tB(g))}},MU=function(A,I,g){return By(A,I,0,1,g)},Cy=function(A,I,g){return SE(g,function(C){return A[~~I(C)]})},UU=function i(A,I,g){var C=I-A;return sB(A)?Cy(A,i(0,A.length),I):SE(g,function(B){return(C+(B-A)%C)%C+A})},NU=function i(A,I,g){var C=I-A,B=C*2;return sB(A)?Cy(A,i(0,A.length-1),I):SE(g,function(Q){return Q=(B+(Q-A)%B)%B||0,A+(Q>C?B-Q:Q)})},qe=function(A){for(var I=0,g="",C,B,Q,E;~(C=A.indexOf("random(",I));)Q=A.indexOf(")",C),E=A.charAt(C+7)==="[",B=A.substr(C+7,Q-C-7).match(E?HG:dD),g+=A.substr(I,C-I)+gy(E?B:+B[0],E?0:+B[1],+B[2]||1e-5),I=Q+1;return g+A.substr(I,A.length-I)},By=function(A,I,g,C,B){var Q=I-A,E=C-g;return SE(B,function(o){return g+((o-A)/Q*E||0)})},pU=function i(A,I,g,C){var B=isNaN(A+I)?0:function(n){return(1-n)*A+n*I};if(!B){var Q=OC(A),E={},o,t,e,a,s;if(g===!0&&(C=1)&&(g=null),Q)A={p:A},I={p:I};else if(sB(A)&&!sB(I)){for(e=[],a=A.length,s=a-2,t=1;t<a;t++)e.push(i(A[t-1],A[t]));a--,B=function(r){r*=a;var c=Math.min(s,~~r);return e[c](r-c)},g=I}else C||(A=wo(sB(A)?[]:{},A));if(!e){for(o in I)zh.call(E,A,o,"get",I[o]);B=function(r){return gc(r,E)||(Q?A.p:A)}}}return SE(g,B)},_l=function(A,I,g){var C=A.labels,B=li,Q,E,o;for(Q in C)E=C[Q]-I,E<0==!!g&&E&&B>(E=Math.abs(E))&&(o=Q,B=E);return o},Bi=function(A,I,g){var C=A.vars,B=C[I],Q=dg,E=A._ctx,o,t,e;if(B)return o=C[I+"Params"],t=C.callbackScope||A,g&&tE.length&&on(),E&&(dg=E),e=o?B.apply(t,o):B.call(t),dg=Q,e},he=function(A){return rE(A),A.scrollTrigger&&A.scrollTrigger.kill(!!aB),A.progress()<1&&Bi(A,"onInterrupt"),A},st,iy=[],Qy=function(A){if(A)if(A=!A.name&&A.default||A,Zh()||A.headless){var I=A.name,g=jg(A),C=I&&!g&&A.init?function(){this._props=[]}:A,B={init:ue,render:gc,add:zh,kill:_U,modifier:xU,rawVars:0},Q={targetTest:0,get:0,getSetter:Ic,aliases:{},register:0};if(Ut(),A!==C){if($B[I])return;Si(C,Si(tn(A,B),Q)),wo(C.prototype,wo(B,tn(A,Q))),$B[C.prop=I]=C,A.targetTest&&(js.push(C),Vh[I]=1),I=(I==="css"?"CSS":I.charAt(0).toUpperCase()+I.substr(1))+"Plugin"}xG(I,C),A.register&&A.register(_B,C,HB)}else iy.push(A)},lg=255,ce={aqua:[0,lg,lg],lime:[0,lg,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lg],navy:[0,0,128],white:[lg,lg,lg],olive:[128,128,0],yellow:[lg,lg,0],orange:[lg,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lg,0,0],pink:[lg,192,203],cyan:[0,lg,lg],transparent:[lg,lg,lg,0]},Jr=function(A,I,g){return A+=A<0?1:A>1?-1:0,(A*6<1?I+(g-I)*A*6:A<.5?g:A*3<2?I+(g-I)*(2/3-A)*6:I)*lg+.5|0},Ey=function(A,I,g){var C=A?KQ(A)?[A>>16,A>>8&lg,A&lg]:0:ce.black,B,Q,E,o,t,e,a,s,n,r;if(!C){if(A.substr(-1)===","&&(A=A.substr(0,A.length-1)),ce[A])C=ce[A];else if(A.charAt(0)==="#"){if(A.length<6&&(B=A.charAt(1),Q=A.charAt(2),E=A.charAt(3),A="#"+B+B+Q+Q+E+E+(A.length===5?A.charAt(4)+A.charAt(4):"")),A.length===9)return C=parseInt(A.substr(1,6),16),[C>>16,C>>8&lg,C&lg,parseInt(A.substr(7),16)/255];A=parseInt(A.substr(1),16),C=[A>>16,A>>8&lg,A&lg]}else if(A.substr(0,3)==="hsl"){if(C=r=A.match(dD),!I)o=+C[0]%360/360,t=+C[1]/100,e=+C[2]/100,Q=e<=.5?e*(t+1):e+t-e*t,B=e*2-Q,C.length>3&&(C[3]*=1),C[0]=Jr(o+1/3,B,Q),C[1]=Jr(o,B,Q),C[2]=Jr(o-1/3,B,Q);else if(~A.indexOf("="))return C=A.match(LG),g&&C.length<4&&(C[3]=1),C}else C=A.match(dD)||ce.transparent;C=C.map(Number)}return I&&!r&&(B=C[0]/lg,Q=C[1]/lg,E=C[2]/lg,a=Math.max(B,Q,E),s=Math.min(B,Q,E),e=(a+s)/2,a===s?o=t=0:(n=a-s,t=e>.5?n/(2-a-s):n/(a+s),o=a===B?(Q-E)/n+(Q<E?6:0):a===Q?(E-B)/n+2:(B-Q)/n+4,o*=60),C[0]=~~(o+.5),C[1]=~~(t*100+.5),C[2]=~~(e*100+.5)),g&&C.length<4&&(C[3]=1),C},oy=function(A){var I=[],g=[],C=-1;return A.split(eE).forEach(function(B){var Q=B.match(at)||[];I.push.apply(I,Q),g.push(C+=Q.length+1)}),I.c=g,I},Ol=function(A,I,g){var C="",B=(A+C).match(eE),Q=I?"hsla(":"rgba(",E=0,o,t,e,a;if(!B)return A;if(B=B.map(function(s){return(s=Ey(s,I,1))&&Q+(I?s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:s.join(","))+")"}),g&&(e=oy(A),o=g.c,o.join(C)!==e.c.join(C)))for(t=A.replace(eE,"1").split(at),a=t.length-1;E<a;E++)C+=t[E]+(~o.indexOf(E)?B.shift()||Q+"0,0,0,0)":(e.length?e:B.length?B:g).shift());if(!t)for(t=A.split(eE),a=t.length-1;E<a;E++)C+=t[E]+B[E];return C+t[a]},eE=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",A;for(A in ce)i+="|"+A+"\\b";return new RegExp(i+")","gi")}(),KU=/hsl[a]?\(/,ty=function(A){var I=A.join(" "),g;if(eE.lastIndex=0,eE.test(I))return g=KU.test(I),A[1]=Ol(A[1],g),A[0]=Ol(A[0],g,oy(A[1])),!0},Ye,Ai=function(){var i=Date.now,A=500,I=33,g=i(),C=g,B=1e3/240,Q=B,E=[],o,t,e,a,s,n,r=function c(D){var h=i()-C,w=D===!0,l,S,U,k;if((h>A||h<0)&&(g+=h-I),C+=h,U=C-g,l=U-Q,(l>0||w)&&(k=++a.frame,s=U-a.time*1e3,a.time=U=U/1e3,Q+=l+(l>=B?4:B-l),S=1),w||(o=t(c)),S)for(n=0;n<E.length;n++)E[n](U,s,k,D)};return a={time:0,frame:0,tick:function(){r(!0)},deltaRatio:function(D){return s/(1e3/(D||60))},wake:function(){TG&&(!RD&&Zh()&&(Zi=RD=window,Ph=Zi.document||{},ti.gsap=_B,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(_B.version),bG(En||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),iy.forEach(Qy)),e=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&a.sleep(),t=e||function(D){return setTimeout(D,Q-a.time*1e3+1|0)},Ye=1,r(2))},sleep:function(){(e?cancelAnimationFrame:clearTimeout)(o),Ye=0,t=ue},lagSmoothing:function(D,h){A=D||1/0,I=Math.min(h||33,A)},fps:function(D){B=1e3/(D||240),Q=a.time*1e3+B},add:function(D,h,w){var l=h?function(S,U,k,y){D(S,U,k,y),a.remove(l)}:D;return a.remove(D),E[w?"unshift":"push"](l),Ut(),l},remove:function(D,h){~(h=E.indexOf(D))&&E.splice(h,1)&&n>=h&&n--},_listeners:E},a}(),Ut=function(){return!Ye&&Ai.wake()},jI={},FU=/^[\d.\-M][\d.\-,\s]/,dU=/["']/g,RU=function(A){for(var I={},g=A.substr(1,A.length-3).split(":"),C=g[0],B=1,Q=g.length,E,o,t;B<Q;B++)o=g[B],E=B!==Q-1?o.lastIndexOf(","):o.length,t=o.substr(0,E),I[C]=isNaN(t)?t.replace(dU,"").trim():+t,C=o.substr(E+1).trim();return I},JU=function(A){var I=A.indexOf("(")+1,g=A.indexOf(")"),C=A.indexOf("(",I);return A.substring(I,~C&&C<g?A.indexOf(")",g+1):g)},fU=function(A){var I=(A+"").split("("),g=jI[I[0]];return g&&I.length>1&&g.config?g.config.apply(null,~A.indexOf("{")?[RU(I[1])]:JU(A).split(",").map(ZG)):jI._CE&&FU.test(A)?jI._CE("",A):g},ey=function(A){return function(I){return 1-A(1-I)}},ay=function i(A,I){for(var g=A._first,C;g;)g instanceof pB?i(g,I):g.vars.yoyoEase&&(!g._yoyo||!g._repeat)&&g._yoyo!==I&&(g.timeline?i(g.timeline,I):(C=g._ease,g._ease=g._yEase,g._yEase=C,g._yoyo=I)),g=g._next},so=function(A,I){return A&&(jg(A)?A:jI[A]||fU(A))||I},po=function(A,I,g,C){g===void 0&&(g=function(o){return 1-I(1-o)}),C===void 0&&(C=function(o){return o<.5?I(o*2)/2:1-I((1-o)*2)/2});var B={easeIn:I,easeOut:g,easeInOut:C},Q;return mB(A,function(E){jI[E]=ti[E]=B,jI[Q=E.toLowerCase()]=g;for(var o in B)jI[Q+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=jI[E+"."+o]=B[o]}),B},sy=function(A){return function(I){return I<.5?(1-A(1-I*2))/2:.5+A((I-.5)*2)/2}},fr=function i(A,I,g){var C=I>=1?I:1,B=(g||(A?.3:.45))/(I<1?I:1),Q=B/FD*(Math.asin(1/C)||0),E=function(e){return e===1?1:C*Math.pow(2,-10*e)*EU((e-Q)*B)+1},o=A==="out"?E:A==="in"?function(t){return 1-E(1-t)}:sy(E);return B=FD/B,o.config=function(t,e){return i(A,t,e)},o},ur=function i(A,I){I===void 0&&(I=1.70158);var g=function(Q){return Q?--Q*Q*((I+1)*Q+I)+1:0},C=A==="out"?g:A==="in"?function(B){return 1-g(1-B)}:sy(g);return C.config=function(B){return i(A,B)},C};mB("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,A){var I=A<5?A+1:A;po(i+",Power"+(I-1),A?function(g){return Math.pow(g,I)}:function(g){return g},function(g){return 1-Math.pow(1-g,I)},function(g){return g<.5?Math.pow(g*2,I)/2:1-Math.pow((1-g)*2,I)/2})});jI.Linear.easeNone=jI.none=jI.Linear.easeIn;po("Elastic",fr("in"),fr("out"),fr());(function(i,A){var I=1/A,g=2*I,C=2.5*I,B=function(E){return E<I?i*E*E:E<g?i*Math.pow(E-1.5/A,2)+.75:E<C?i*(E-=2.25/A)*E+.9375:i*Math.pow(E-2.625/A,2)+.984375};po("Bounce",function(Q){return 1-B(1-Q)},B)})(7.5625,2.75);po("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});po("Circ",function(i){return-(qG(1-i*i)-1)});po("Sine",function(i){return i===1?1:-QU(i*BU)+1});po("Back",ur("in"),ur("out"),ur());jI.SteppedEase=jI.steps=ti.SteppedEase={config:function(A,I){A===void 0&&(A=1);var g=1/A,C=A+(I?0:1),B=I?1:0,Q=1-kg;return function(E){return((C*la(0,Q,E)|0)+B)*g}}};yt.ease=jI["quad.out"];mB("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return jh+=i+","+i+"Params,"});var ny=function(A,I){this.id=iU++,A._gsap=this,this.target=A,this.harness=I,this.get=I?I.get:OG,this.set=I?I.getSetter:Ic},Le=function(){function i(I){this.vars=I,this._delay=+I.delay||0,(this._repeat=I.repeat===1/0?-2:I.repeat||0)&&(this._rDelay=I.repeatDelay||0,this._yoyo=!!I.yoyo||!!I.yoyoEase),this._ts=1,Mt(this,+I.duration,1,1),this.data=I.data,dg&&(this._ctx=dg,dg.data.push(this)),Ye||Ai.wake()}var A=i.prototype;return A.delay=function(g){return g||g===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+g-this._delay),this._delay=g,this):this._delay},A.duration=function(g){return arguments.length?this.totalDuration(this._repeat>0?g+(g+this._rDelay)*this._repeat:g):this.totalDuration()&&this._dur},A.totalDuration=function(g){return arguments.length?(this._dirty=0,Mt(this,this._repeat<0?g:(g-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},A.totalTime=function(g,C){if(Ut(),!arguments.length)return this._tTime;var B=this._dp;if(B&&B.smoothChildTiming&&this._ts){for(Rn(this,g),!B._dp||B.parent||VG(B,this);B&&B.parent;)B.parent._time!==B._start+(B._ts>=0?B._tTime/B._ts:(B.totalDuration()-B._tTime)/-B._ts)&&B.totalTime(B._tTime,!0),B=B.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&g<this._tDur||this._ts<0&&g>0||!this._tDur&&!g)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==g||!this._dur&&!C||this._initted&&Math.abs(this._zTime)===kg||!g&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=g),vG(this,g,C)),this},A.time=function(g,C){return arguments.length?this.totalTime(Math.min(this.totalDuration(),g+bl(this))%(this._dur+this._rDelay)||(g?this._dur:0),C):this._time},A.totalProgress=function(g,C){return arguments.length?this.totalTime(this.totalDuration()*g,C):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},A.progress=function(g,C){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-g:g)+bl(this),C):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},A.iteration=function(g,C){var B=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(g-1)*B,C):this._repeat?kt(this._tTime,B)+1:1},A.timeScale=function(g,C){if(!arguments.length)return this._rts===-kg?0:this._rts;if(this._rts===g)return this;var B=this.parent&&this._ts?en(this.parent._time,this):this._tTime;return this._rts=+g||0,this._ts=this._ps||g===-kg?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,B),C!==!1),dn(this),rU(this)},A.paused=function(g){return arguments.length?(this._ps!==g&&(this._ps=g,g?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ut(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kg&&(this._tTime-=kg)))),this):this._ps},A.startTime=function(g){if(arguments.length){this._start=g;var C=this.parent||this._dp;return C&&(C._sort||!this.parent)&&Wi(C,this,g-this._delay),this}return this._start},A.endTime=function(g){return this._start+(LB(g)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},A.rawTime=function(g){var C=this.parent||this._dp;return C?g&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?en(C.rawTime(g),this):this._tTime:this._tTime},A.revert=function(g){g===void 0&&(g=eU);var C=aB;return aB=g,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(g),this.totalTime(-.01,g.suppressEvents)),this.data!=="nested"&&g.kill!==!1&&this.kill(),aB=C,this},A.globalTime=function(g){for(var C=this,B=arguments.length?g:C.rawTime();C;)B=C._start+B/(Math.abs(C._ts)||1),C=C._dp;return!this.parent&&this._sat?this._sat.globalTime(g):B},A.repeat=function(g){return arguments.length?(this._repeat=g===1/0?-2:g,xl(this)):this._repeat===-2?1/0:this._repeat},A.repeatDelay=function(g){if(arguments.length){var C=this._time;return this._rDelay=g,xl(this),C?this.time(C):this}return this._rDelay},A.yoyo=function(g){return arguments.length?(this._yoyo=g,this):this._yoyo},A.seek=function(g,C){return this.totalTime(Di(this,g),LB(C))},A.restart=function(g,C){return this.play().totalTime(g?-this._delay:0,LB(C))},A.play=function(g,C){return g!=null&&this.seek(g,C),this.reversed(!1).paused(!1)},A.reverse=function(g,C){return g!=null&&this.seek(g||this.totalDuration(),C),this.reversed(!0).paused(!1)},A.pause=function(g,C){return g!=null&&this.seek(g,C),this.paused(!0)},A.resume=function(){return this.paused(!1)},A.reversed=function(g){return arguments.length?(!!g!==this.reversed()&&this.timeScale(-this._rts||(g?-kg:0)),this):this._rts<0},A.invalidate=function(){return this._initted=this._act=0,this._zTime=-kg,this},A.isActive=function(){var g=this.parent||this._dp,C=this._start,B;return!!(!g||this._ts&&this._initted&&g.isActive()&&(B=g.rawTime(!0))>=C&&B<this.endTime(!0)-kg)},A.eventCallback=function(g,C,B){var Q=this.vars;return arguments.length>1?(C?(Q[g]=C,B&&(Q[g+"Params"]=B),g==="onUpdate"&&(this._onUpdate=C)):delete Q[g],this):Q[g]},A.then=function(g){var C=this;return new Promise(function(B){var Q=jg(g)?g:PG,E=function(){var t=C.then;C.then=null,jg(Q)&&(Q=Q(C))&&(Q.then||Q===C)&&(C.then=t),B(Q),C.then=t};C._initted&&C.totalProgress()===1&&C._ts>=0||!C._tTime&&C._ts<0?E():C._prom=E})},A.kill=function(){he(this)},i}();Si(Le.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kg,_prom:0,_ps:!1,_rts:1});var pB=function(i){uG(A,i);function A(g,C){var B;return g===void 0&&(g={}),B=i.call(this,g)||this,B.labels={},B.smoothChildTiming=!!g.smoothChildTiming,B.autoRemoveChildren=!!g.autoRemoveChildren,B._sort=LB(g.sortChildren),Lg&&Wi(g.parent||Lg,cQ(B),C),g.reversed&&B.reverse(),g.paused&&B.paused(!0),g.scrollTrigger&&jG(cQ(B),g.scrollTrigger),B}var I=A.prototype;return I.to=function(C,B,Q){return Ne(0,arguments,this),this},I.from=function(C,B,Q){return Ne(1,arguments,this),this},I.fromTo=function(C,B,Q,E){return Ne(2,arguments,this),this},I.set=function(C,B,Q){return B.duration=0,B.parent=this,Ue(B).repeatDelay||(B.repeat=0),B.immediateRender=!!B.immediateRender,new hC(C,B,Di(this,Q),1),this},I.call=function(C,B,Q){return Wi(this,hC.delayedCall(0,C,B),Q)},I.staggerTo=function(C,B,Q,E,o,t,e){return Q.duration=B,Q.stagger=Q.stagger||E,Q.onComplete=t,Q.onCompleteParams=e,Q.parent=this,new hC(C,Q,Di(this,o)),this},I.staggerFrom=function(C,B,Q,E,o,t,e){return Q.runBackwards=1,Ue(Q).immediateRender=LB(Q.immediateRender),this.staggerTo(C,B,Q,E,o,t,e)},I.staggerFromTo=function(C,B,Q,E,o,t,e,a){return E.startAt=Q,Ue(E).immediateRender=LB(E.immediateRender),this.staggerTo(C,B,E,o,t,e,a)},I.render=function(C,B,Q){var E=this._time,o=this._dirty?this.totalDuration():this._tDur,t=this._dur,e=C<=0?0:xC(C),a=this._zTime<0!=C<0&&(this._initted||!t),s,n,r,c,D,h,w,l,S,U,k,y;if(this!==Lg&&e>o&&C>=0&&(e=o),e!==this._tTime||Q||a){if(E!==this._time&&t&&(e+=this._time-E,C+=this._time-E),s=e,S=this._start,l=this._ts,h=!l,a&&(t||(E=this._zTime),(C||!B)&&(this._zTime=C)),this._repeat){if(k=this._yoyo,D=t+this._rDelay,this._repeat<-1&&C<0)return this.totalTime(D*100+C,B,Q);if(s=xC(e%D),e===o?(c=this._repeat,s=t):(c=~~(e/D),c&&c===e/D&&(s=t,c--),s>t&&(s=t)),U=kt(this._tTime,D),!E&&this._tTime&&U!==c&&this._tTime-U*D-this._dur<=0&&(U=c),k&&c&1&&(s=t-s,y=1),c!==U&&!this._lock){var p=k&&U&1,q=p===(k&&c&1);if(c<U&&(p=!p),E=p?0:e%t?t:e,this._lock=1,this.render(E||(y?0:xC(c*D)),B,!t)._lock=0,this._tTime=e,!B&&this.parent&&Bi(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),E&&E!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(t=this._dur,o=this._tDur,q&&(this._lock=2,E=p?t:-1e-4,this.render(E,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;ay(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=lU(this,xC(E),xC(s)),w&&(e-=s-(s=w._start))),this._tTime=e,this._time=s,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=C,E=0),!E&&s&&!B&&!c&&(Bi(this,"onStart"),this._tTime!==e))return this;if(s>=E&&C>=0)for(n=this._first;n;){if(r=n._next,(n._act||s>=n._start)&&n._ts&&w!==n){if(n.parent!==this)return this.render(C,B,Q);if(n.render(n._ts>0?(s-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(s-n._start)*n._ts,B,Q),s!==this._time||!this._ts&&!h){w=0,r&&(e+=this._zTime=-kg);break}}n=r}else{n=this._last;for(var M=C<0?C:s;n;){if(r=n._prev,(n._act||M<=n._end)&&n._ts&&w!==n){if(n.parent!==this)return this.render(C,B,Q);if(n.render(n._ts>0?(M-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(M-n._start)*n._ts,B,Q||aB&&(n._initted||n._startAt)),s!==this._time||!this._ts&&!h){w=0,r&&(e+=this._zTime=M?-kg:kg);break}}n=r}}if(w&&!B&&(this.pause(),w.render(s>=E?0:-kg)._zTime=s>=E?1:-1,this._ts))return this._start=S,dn(this),this.render(C,B,Q);this._onUpdate&&!B&&Bi(this,"onUpdate",!0),(e===o&&this._tTime>=this.totalDuration()||!e&&E)&&(S===this._start||Math.abs(l)!==Math.abs(this._ts))&&(this._lock||((C||!t)&&(e===o&&this._ts>0||!e&&this._ts<0)&&rE(this,1),!B&&!(C<0&&!E)&&(e||E||!o)&&(Bi(this,e===o&&C>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(e<o&&this.timeScale()>0)&&this._prom())))}return this},I.add=function(C,B){var Q=this;if(KQ(B)||(B=Di(this,B,C)),!(C instanceof Le)){if(sB(C))return C.forEach(function(E){return Q.add(E,B)}),this;if(OC(C))return this.addLabel(C,B);if(jg(C))C=hC.delayedCall(0,C);else return this}return this!==C?Wi(this,C,B):this},I.getChildren=function(C,B,Q,E){C===void 0&&(C=!0),B===void 0&&(B=!0),Q===void 0&&(Q=!0),E===void 0&&(E=-li);for(var o=[],t=this._first;t;)t._start>=E&&(t instanceof hC?B&&o.push(t):(Q&&o.push(t),C&&o.push.apply(o,t.getChildren(!0,B,Q)))),t=t._next;return o},I.getById=function(C){for(var B=this.getChildren(1,1,1),Q=B.length;Q--;)if(B[Q].vars.id===C)return B[Q]},I.remove=function(C){return OC(C)?this.removeLabel(C):jg(C)?this.killTweensOf(C):(Fn(this,C),C===this._recent&&(this._recent=this._last),ao(this))},I.totalTime=function(C,B){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xC(Ai.time-(this._ts>0?C/this._ts:(this.totalDuration()-C)/-this._ts))),i.prototype.totalTime.call(this,C,B),this._forcing=0,this):this._tTime},I.addLabel=function(C,B){return this.labels[C]=Di(this,B),this},I.removeLabel=function(C){return delete this.labels[C],this},I.addPause=function(C,B,Q){var E=hC.delayedCall(0,B||ue,Q);return E.data="isPause",this._hasPause=1,Wi(this,E,Di(this,C))},I.removePause=function(C){var B=this._first;for(C=Di(this,C);B;)B._start===C&&B.data==="isPause"&&rE(B),B=B._next},I.killTweensOf=function(C,B,Q){for(var E=this.getTweensOf(C,Q),o=E.length;o--;)QE!==E[o]&&E[o].kill(C,B);return this},I.getTweensOf=function(C,B){for(var Q=[],E=wi(C),o=this._first,t=KQ(B),e;o;)o instanceof hC?aU(o._targets,E)&&(t?(!QE||o._initted&&o._ts)&&o.globalTime(0)<=B&&o.globalTime(o.totalDuration())>B:!B||o.isActive())&&Q.push(o):(e=o.getTweensOf(E,B)).length&&Q.push.apply(Q,e),o=o._next;return Q},I.tweenTo=function(C,B){B=B||{};var Q=this,E=Di(Q,C),o=B,t=o.startAt,e=o.onStart,a=o.onStartParams,s=o.immediateRender,n,r=hC.to(Q,Si({ease:B.ease||"none",lazy:!1,immediateRender:!1,time:E,overwrite:"auto",duration:B.duration||Math.abs((E-(t&&"time"in t?t.time:Q._time))/Q.timeScale())||kg,onStart:function(){if(Q.pause(),!n){var D=B.duration||Math.abs((E-(t&&"time"in t?t.time:Q._time))/Q.timeScale());r._dur!==D&&Mt(r,D,0,1).render(r._time,!0,!0),n=1}e&&e.apply(r,a||[])}},B));return s?r.render(0):r},I.tweenFromTo=function(C,B,Q){return this.tweenTo(B,Si({startAt:{time:Di(this,C)}},Q))},I.recent=function(){return this._recent},I.nextLabel=function(C){return C===void 0&&(C=this._time),_l(this,Di(this,C))},I.previousLabel=function(C){return C===void 0&&(C=this._time),_l(this,Di(this,C),1)},I.currentLabel=function(C){return arguments.length?this.seek(C,!0):this.previousLabel(this._time+kg)},I.shiftChildren=function(C,B,Q){Q===void 0&&(Q=0);for(var E=this._first,o=this.labels,t;E;)E._start>=Q&&(E._start+=C,E._end+=C),E=E._next;if(B)for(t in o)o[t]>=Q&&(o[t]+=C);return ao(this)},I.invalidate=function(C){var B=this._first;for(this._lock=0;B;)B.invalidate(C),B=B._next;return i.prototype.invalidate.call(this,C)},I.clear=function(C){C===void 0&&(C=!0);for(var B=this._first,Q;B;)Q=B._next,this.remove(B),B=Q;return this._dp&&(this._time=this._tTime=this._pTime=0),C&&(this.labels={}),ao(this)},I.totalDuration=function(C){var B=0,Q=this,E=Q._last,o=li,t,e,a;if(arguments.length)return Q.timeScale((Q._repeat<0?Q.duration():Q.totalDuration())/(Q.reversed()?-C:C));if(Q._dirty){for(a=Q.parent;E;)t=E._prev,E._dirty&&E.totalDuration(),e=E._start,e>o&&Q._sort&&E._ts&&!Q._lock?(Q._lock=1,Wi(Q,E,e-E._delay,1)._lock=0):o=e,e<0&&E._ts&&(B-=e,(!a&&!Q._dp||a&&a.smoothChildTiming)&&(Q._start+=e/Q._ts,Q._time-=e,Q._tTime-=e),Q.shiftChildren(-e,!1,-1/0),o=0),E._end>B&&E._ts&&(B=E._end),E=t;Mt(Q,Q===Lg&&Q._time>B?Q._time:B,1,1),Q._dirty=0}return Q._tDur},A.updateRoot=function(C){if(Lg._ts&&(vG(Lg,en(C,Lg)),_G=Ai.frame),Ai.frame>=Hl){Hl+=Qi.autoSleep||120;var B=Lg._first;if((!B||!B._ts)&&Qi.autoSleep&&Ai._listeners.length<2){for(;B&&!B._ts;)B=B._next;B||Ai.sleep()}}},A}(Le);Si(pB.prototype,{_lock:0,_hasPause:0,_forcing:0});var uU=function(A,I,g,C,B,Q,E){var o=new HB(this._pt,A,I,0,1,wy,null,B),t=0,e=0,a,s,n,r,c,D,h,w;for(o.b=g,o.e=C,g+="",C+="",(h=~C.indexOf("random("))&&(C=qe(C)),Q&&(w=[g,C],Q(w,A,I),g=w[0],C=w[1]),s=g.match(dr)||[];a=dr.exec(C);)r=a[0],c=C.substring(t,a.index),n?n=(n+1)%5:c.substr(-5)==="rgba("&&(n=1),r!==s[e++]&&(D=parseFloat(s[e-1])||0,o._pt={_next:o._pt,p:c||e===1?c:",",s:D,c:r.charAt(1)==="="?ct(D,r)-D:parseFloat(r)-D,m:n&&n<4?Math.round:0},t=dr.lastIndex);return o.c=t<C.length?C.substring(t,C.length):"",o.fp=E,(mG.test(C)||h)&&(o.e=0),this._pt=o,o},zh=function(A,I,g,C,B,Q,E,o,t,e){jg(C)&&(C=C(B||0,A,Q));var a=A[I],s=g!=="get"?g:jg(a)?t?A[I.indexOf("set")||!jg(A["get"+I.substr(3)])?I:"get"+I.substr(3)](t):A[I]():a,n=jg(a)?t?HU:cy:Ac,r;if(OC(C)&&(~C.indexOf("random(")&&(C=qe(C)),C.charAt(1)==="="&&(r=ct(s,C)+(tB(s)||0),(r||r===0)&&(C=r))),!e||s!==C||mD)return!isNaN(s*C)&&C!==""?(r=new HB(this._pt,A,I,+s||0,C-(s||0),typeof a=="boolean"?bU:ly,0,n),t&&(r.fp=t),E&&r.modifier(E,this,A),this._pt=r):(!a&&!(I in A)&&Wh(I,C),uU.call(this,A,I,s,C,n,o||Qi.stringFilter,t))},qU=function(A,I,g,C,B){if(jg(A)&&(A=pe(A,B,I,g,C)),!IQ(A)||A.style&&A.nodeType||sB(A)||YG(A))return OC(A)?pe(A,B,I,g,C):A;var Q={},E;for(E in A)Q[E]=pe(A[E],B,I,g,C);return Q},ry=function(A,I,g,C,B,Q){var E,o,t,e;if($B[A]&&(E=new $B[A]).init(B,E.rawVars?I[A]:qU(I[A],C,B,Q,g),g,C,Q)!==!1&&(g._pt=o=new HB(g._pt,B,A,0,1,E.render,E,0,E.priority),g!==st))for(t=g._ptLookup[g._targets.indexOf(B)],e=E._props.length;e--;)t[E._props[e]]=o;return E},QE,mD,$h=function i(A,I,g){var C=A.vars,B=C.ease,Q=C.startAt,E=C.immediateRender,o=C.lazy,t=C.onUpdate,e=C.runBackwards,a=C.yoyoEase,s=C.keyframes,n=C.autoRevert,r=A._dur,c=A._startAt,D=A._targets,h=A.parent,w=h&&h.data==="nested"?h.vars.targets:D,l=A._overwrite==="auto"&&!Oh,S=A.timeline,U,k,y,p,q,M,N,L,x,b,P,v,z;if(S&&(!s||!B)&&(B="none"),A._ease=so(B,yt.ease),A._yEase=a?ey(so(a===!0?B:a,yt.ease)):0,a&&A._yoyo&&!A._repeat&&(a=A._yEase,A._yEase=A._ease,A._ease=a),A._from=!S&&!!C.runBackwards,!S||s&&!C.stagger){if(L=D[0]?eo(D[0]).harness:0,v=L&&C[L.prop],U=tn(C,Vh),c&&(c._zTime<0&&c.progress(1),I<0&&e&&E&&!n?c.render(-1,!0):c.revert(e&&r?Vs:tU),c._lazy=0),Q){if(rE(A._startAt=hC.set(D,Si({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!c&&LB(o),startAt:null,delay:0,onUpdate:t&&function(){return Bi(A,"onUpdate")},stagger:0},Q))),A._startAt._dp=0,A._startAt._sat=A,I<0&&(aB||!E&&!n)&&A._startAt.revert(Vs),E&&r&&I<=0&&g<=0){I&&(A._zTime=I);return}}else if(e&&r&&!c){if(I&&(E=!1),y=Si({overwrite:!1,data:"isFromStart",lazy:E&&!c&&LB(o),immediateRender:E,stagger:0,parent:h},U),v&&(y[L.prop]=v),rE(A._startAt=hC.set(D,y)),A._startAt._dp=0,A._startAt._sat=A,I<0&&(aB?A._startAt.revert(Vs):A._startAt.render(-1,!0)),A._zTime=I,!E)i(A._startAt,kg,kg);else if(!I)return}for(A._pt=A._ptCache=0,o=r&&LB(o)||o&&!r,k=0;k<D.length;k++){if(q=D[k],N=q._gsap||Xh(D)[k]._gsap,A._ptLookup[k]=b={},JD[N.id]&&tE.length&&on(),P=w===D?k:w.indexOf(q),L&&(x=new L).init(q,v||U,A,P,w)!==!1&&(A._pt=p=new HB(A._pt,q,x.name,0,1,x.render,x,0,x.priority),x._props.forEach(function(CA){b[CA]=p}),x.priority&&(M=1)),!L||v)for(y in U)$B[y]&&(x=ry(y,U,A,P,q,w))?x.priority&&(M=1):b[y]=p=zh.call(A,q,y,"get",U[y],P,w,0,C.stringFilter);A._op&&A._op[k]&&A.kill(q,A._op[k]),l&&A._pt&&(QE=A,Lg.killTweensOf(q,b,A.globalTime(I)),z=!A.parent,QE=0),A._pt&&o&&(JD[N.id]=1)}M&&Sy(A),A._onInit&&A._onInit(A)}A._onUpdate=t,A._initted=(!A._op||A._pt)&&!z,s&&I<=0&&S.render(li,!0,!0)},YU=function(A,I,g,C,B,Q,E,o){var t=(A._pt&&A._ptCache||(A._ptCache={}))[I],e,a,s,n;if(!t)for(t=A._ptCache[I]=[],s=A._ptLookup,n=A._targets.length;n--;){if(e=s[n][I],e&&e.d&&e.d._pt)for(e=e.d._pt;e&&e.p!==I&&e.fp!==I;)e=e._next;if(!e)return mD=1,A.vars[I]="+=0",$h(A,E),mD=0,o?fe(I+" not eligible for reset"):1;t.push(e)}for(n=t.length;n--;)a=t[n],e=a._pt||a,e.s=(C||C===0)&&!B?C:e.s+(C||0)+Q*e.c,e.c=g-e.s,a.e&&(a.e=BC(g)+tB(a.e)),a.b&&(a.b=e.s+tB(a.b))},LU=function(A,I){var g=A[0]?eo(A[0]).harness:0,C=g&&g.aliases,B,Q,E,o;if(!C)return I;B=wo({},I);for(Q in C)if(Q in B)for(o=C[Q].split(","),E=o.length;E--;)B[o[E]]=B[Q];return B},mU=function(A,I,g,C){var B=I.ease||C||"power1.inOut",Q,E;if(sB(I))E=g[A]||(g[A]=[]),I.forEach(function(o,t){return E.push({t:t/(I.length-1)*100,v:o,e:B})});else for(Q in I)E=g[Q]||(g[Q]=[]),Q==="ease"||E.push({t:parseFloat(A),v:I[Q],e:B})},pe=function(A,I,g,C,B){return jg(A)?A.call(I,g,C,B):OC(A)&&~A.indexOf("random(")?qe(A):A},Dy=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hy={};mB(Dy+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return hy[i]=1});var hC=function(i){uG(A,i);function A(g,C,B,Q){var E;typeof C=="number"&&(B.duration=C,C=B,B=null),E=i.call(this,Q?C:Ue(C))||this;var o=E.vars,t=o.duration,e=o.delay,a=o.immediateRender,s=o.stagger,n=o.overwrite,r=o.keyframes,c=o.defaults,D=o.scrollTrigger,h=o.yoyoEase,w=C.parent||Lg,l=(sB(g)||YG(g)?KQ(g[0]):"length"in C)?[g]:wi(g),S,U,k,y,p,q,M,N;if(E._targets=l.length?Xh(l):fe("GSAP target "+g+" not found. https://gsap.com",!Qi.nullTargetWarn)||[],E._ptLookup=[],E._overwrite=n,r||s||$a(t)||$a(e)){if(C=E.vars,S=E.timeline=new pB({data:"nested",defaults:c||{},targets:w&&w.data==="nested"?w.vars.targets:l}),S.kill(),S.parent=S._dp=cQ(E),S._start=0,s||$a(t)||$a(e)){if(y=l.length,M=s&&Ay(s),IQ(s))for(p in s)~Dy.indexOf(p)&&(N||(N={}),N[p]=s[p]);for(U=0;U<y;U++)k=tn(C,hy),k.stagger=0,h&&(k.yoyoEase=h),N&&wo(k,N),q=l[U],k.duration=+pe(t,cQ(E),U,q,l),k.delay=(+pe(e,cQ(E),U,q,l)||0)-E._delay,!s&&y===1&&k.delay&&(E._delay=e=k.delay,E._start+=e,k.delay=0),S.to(q,k,M?M(U,q,l):0),S._ease=jI.none;S.duration()?t=e=0:E.timeline=0}else if(r){Ue(Si(S.vars.defaults,{ease:"none"})),S._ease=so(r.ease||C.ease||"none");var L=0,x,b,P;if(sB(r))r.forEach(function(v){return S.to(l,v,">")}),S.duration();else{k={};for(p in r)p==="ease"||p==="easeEach"||mU(p,r[p],k,r.easeEach);for(p in k)for(x=k[p].sort(function(v,z){return v.t-z.t}),L=0,U=0;U<x.length;U++)b=x[U],P={ease:b.e,duration:(b.t-(U?x[U-1].t:0))/100*t},P[p]=b.v,S.to(l,P,L),L+=P.duration;S.duration()<t&&S.to({},{duration:t-S.duration()})}}t||E.duration(t=S.duration())}else E.timeline=0;return n===!0&&!Oh&&(QE=cQ(E),Lg.killTweensOf(l),QE=0),Wi(w,cQ(E),B),C.reversed&&E.reverse(),C.paused&&E.paused(!0),(a||!t&&!r&&E._start===xC(w._time)&&LB(a)&&DU(cQ(E))&&w.data!=="nested")&&(E._tTime=-kg,E.render(Math.max(0,-e)||0)),D&&jG(cQ(E),D),E}var I=A.prototype;return I.render=function(C,B,Q){var E=this._time,o=this._tDur,t=this._dur,e=C<0,a=C>o-kg&&!e?o:C<kg?0:C,s,n,r,c,D,h,w,l,S;if(!t)cU(this,C,B,Q);else if(a!==this._tTime||!C||Q||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==e){if(s=a,l=this.timeline,this._repeat){if(c=t+this._rDelay,this._repeat<-1&&e)return this.totalTime(c*100+C,B,Q);if(s=xC(a%c),a===o?(r=this._repeat,s=t):(r=~~(a/c),r&&r===xC(a/c)&&(s=t,r--),s>t&&(s=t)),h=this._yoyo&&r&1,h&&(S=this._yEase,s=t-s),D=kt(this._tTime,c),s===E&&!Q&&this._initted&&r===D)return this._tTime=a,this;r!==D&&(l&&this._yEase&&ay(l,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==c&&this._initted&&(this._lock=Q=1,this.render(xC(c*r),!0).invalidate()._lock=0))}if(!this._initted){if(XG(this,e?C:s,Q,B,a))return this._tTime=0,this;if(E!==this._time&&!(Q&&this.vars.repeatRefresh&&r!==D))return this;if(t!==this._dur)return this.render(C,B,Q)}if(this._tTime=a,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(S||this._ease)(s/t),this._from&&(this.ratio=w=1-w),s&&!E&&!B&&!r&&(Bi(this,"onStart"),this._tTime!==a))return this;for(n=this._pt;n;)n.r(w,n.d),n=n._next;l&&l.render(C<0?C:l._dur*l._ease(s/this._dur),B,Q)||this._startAt&&(this._zTime=C),this._onUpdate&&!B&&(e&&fD(this,C,B,Q),Bi(this,"onUpdate")),this._repeat&&r!==D&&this.vars.onRepeat&&!B&&this.parent&&Bi(this,"onRepeat"),(a===this._tDur||!a)&&this._tTime===a&&(e&&!this._onUpdate&&fD(this,C,!0,!0),(C||!t)&&(a===this._tDur&&this._ts>0||!a&&this._ts<0)&&rE(this,1),!B&&!(e&&!E)&&(a||E||h)&&(Bi(this,a===o?"onComplete":"onReverseComplete",!0),this._prom&&!(a<o&&this.timeScale()>0)&&this._prom()))}return this},I.targets=function(){return this._targets},I.invalidate=function(C){return(!C||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(C),i.prototype.invalidate.call(this,C)},I.resetTo=function(C,B,Q,E,o){Ye||Ai.wake(),this._ts||this.play();var t=Math.min(this._dur,(this._dp._time-this._start)*this._ts),e;return this._initted||$h(this,t),e=this._ease(t/this._dur),YU(this,C,B,Q,E,e,t,o)?this.resetTo(C,B,Q,E,1):(Rn(this,0),this.parent||WG(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},I.kill=function(C,B){if(B===void 0&&(B="all"),!C&&(!B||B==="all"))return this._lazy=this._pt=0,this.parent?he(this):this;if(this.timeline){var Q=this.timeline.totalDuration();return this.timeline.killTweensOf(C,B,QE&&QE.vars.overwrite!==!0)._first||he(this),this.parent&&Q!==this.timeline.totalDuration()&&Mt(this,this._dur*this.timeline._tDur/Q,0,1),this}var E=this._targets,o=C?wi(C):E,t=this._ptLookup,e=this._pt,a,s,n,r,c,D,h;if((!B||B==="all")&&nU(E,o))return B==="all"&&(this._pt=0),he(this);for(a=this._op=this._op||[],B!=="all"&&(OC(B)&&(c={},mB(B,function(w){return c[w]=1}),B=c),B=LU(E,B)),h=E.length;h--;)if(~o.indexOf(E[h])){s=t[h],B==="all"?(a[h]=B,r=s,n={}):(n=a[h]=a[h]||{},r=B);for(c in r)D=s&&s[c],D&&((!("kill"in D.d)||D.d.kill(c)===!0)&&Fn(this,D,"_pt"),delete s[c]),n!=="all"&&(n[c]=1)}return this._initted&&!this._pt&&e&&he(this),this},A.to=function(C,B){return new A(C,B,arguments[2])},A.from=function(C,B){return Ne(1,arguments)},A.delayedCall=function(C,B,Q,E){return new A(B,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:C,onComplete:B,onReverseComplete:B,onCompleteParams:Q,onReverseCompleteParams:Q,callbackScope:E})},A.fromTo=function(C,B,Q){return Ne(2,arguments)},A.set=function(C,B){return B.duration=0,B.repeatDelay||(B.repeat=0),new A(C,B)},A.killTweensOf=function(C,B,Q){return Lg.killTweensOf(C,B,Q)},A}(Le);Si(hC.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mB("staggerTo,staggerFrom,staggerFromTo",function(i){hC[i]=function(){var A=new pB,I=qD.call(arguments,0);return I.splice(i==="staggerFromTo"?5:4,0,0),A[i].apply(A,I)}});var Ac=function(A,I,g){return A[I]=g},cy=function(A,I,g){return A[I](g)},HU=function(A,I,g,C){return A[I](C.fp,g)},TU=function(A,I,g){return A.setAttribute(I,g)},Ic=function(A,I){return jg(A[I])?cy:vh(A[I])&&A.setAttribute?TU:Ac},ly=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e6)/1e6,I)},bU=function(A,I){return I.set(I.t,I.p,!!(I.s+I.c*A),I)},wy=function(A,I){var g=I._pt,C="";if(!A&&I.b)C=I.b;else if(A===1&&I.e)C=I.e;else{for(;g;)C=g.p+(g.m?g.m(g.s+g.c*A):Math.round((g.s+g.c*A)*1e4)/1e4)+C,g=g._next;C+=I.c}I.set(I.t,I.p,C,I)},gc=function(A,I){for(var g=I._pt;g;)g.r(A,g.d),g=g._next},xU=function(A,I,g,C){for(var B=this._pt,Q;B;)Q=B._next,B.p===C&&B.modifier(A,I,g),B=Q},_U=function(A){for(var I=this._pt,g,C;I;)C=I._next,I.p===A&&!I.op||I.op===A?Fn(this,I,"_pt"):I.dep||(g=1),I=C;return!g},OU=function(A,I,g,C){C.mSet(A,I,C.m.call(C.tween,g,C.mt),C)},Sy=function(A){for(var I=A._pt,g,C,B,Q;I;){for(g=I._next,C=B;C&&C.pr>I.pr;)C=C._next;(I._prev=C?C._prev:Q)?I._prev._next=I:B=I,(I._next=C)?C._prev=I:Q=I,I=g}A._pt=B},HB=function(){function i(I,g,C,B,Q,E,o,t,e){this.t=g,this.s=B,this.c=Q,this.p=C,this.r=E||ly,this.d=o||this,this.set=t||Ac,this.pr=e||0,this._next=I,I&&(I._prev=this)}var A=i.prototype;return A.modifier=function(g,C,B){this.mSet=this.mSet||this.set,this.set=OU,this.m=g,this.mt=B,this.tween=C},i}();mB(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Vh[i]=1});ti.TweenMax=ti.TweenLite=hC;ti.TimelineLite=ti.TimelineMax=pB;Lg=new pB({sortChildren:!1,defaults:yt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qi.stringFilter=ty;var no=[],Xs={},vU=[],vl=0,ZU=0,qr=function(A){return(Xs[A]||vU).map(function(I){return I()})},HD=function(){var A=Date.now(),I=[];A-vl>2&&(qr("matchMediaInit"),no.forEach(function(g){var C=g.queries,B=g.conditions,Q,E,o,t;for(E in C)Q=Zi.matchMedia(C[E]).matches,Q&&(o=1),Q!==B[E]&&(B[E]=Q,t=1);t&&(g.revert(),o&&I.push(g))}),qr("matchMediaRevert"),I.forEach(function(g){return g.onMatch(g,function(C){return g.add(null,C)})}),vl=A,qr("matchMedia"))},Gy=function(){function i(I,g){this.selector=g&&YD(g),this.data=[],this._r=[],this.isReverted=!1,this.id=ZU++,I&&this.add(I)}var A=i.prototype;return A.add=function(g,C,B){jg(g)&&(B=C,C=g,g=jg);var Q=this,E=function(){var t=dg,e=Q.selector,a;return t&&t!==Q&&t.data.push(Q),B&&(Q.selector=YD(B)),dg=Q,a=C.apply(Q,arguments),jg(a)&&Q._r.push(a),dg=t,Q.selector=e,Q.isReverted=!1,a};return Q.last=E,g===jg?E(Q,function(o){return Q.add(null,o)}):g?Q[g]=E:E},A.ignore=function(g){var C=dg;dg=null,g(this),dg=C},A.getTweens=function(){var g=[];return this.data.forEach(function(C){return C instanceof i?g.push.apply(g,C.getTweens()):C instanceof hC&&!(C.parent&&C.parent.data==="nested")&&g.push(C)}),g},A.clear=function(){this._r.length=this.data.length=0},A.kill=function(g,C){var B=this;if(g?function(){for(var E=B.getTweens(),o=B.data.length,t;o--;)t=B.data[o],t.data==="isFlip"&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return E.splice(E.indexOf(e),1)}));for(E.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,a){return a.g-e.g||-1/0}).forEach(function(e){return e.t.revert(g)}),o=B.data.length;o--;)t=B.data[o],t instanceof pB?t.data!=="nested"&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof hC)&&t.revert&&t.revert(g);B._r.forEach(function(e){return e(g,B)}),B.isReverted=!0}():this.data.forEach(function(E){return E.kill&&E.kill()}),this.clear(),C)for(var Q=no.length;Q--;)no[Q].id===this.id&&no.splice(Q,1)},A.revert=function(g){this.kill(g||{})},i}(),PU=function(){function i(I){this.contexts=[],this.scope=I,dg&&dg.data.push(this)}var A=i.prototype;return A.add=function(g,C,B){IQ(g)||(g={matches:g});var Q=new Gy(0,B||this.scope),E=Q.conditions={},o,t,e;dg&&!Q.selector&&(Q.selector=dg.selector),this.contexts.push(Q),C=Q.add("onMatch",C),Q.queries=g;for(t in g)t==="all"?e=1:(o=Zi.matchMedia(g[t]),o&&(no.indexOf(Q)<0&&no.push(Q),(E[t]=o.matches)&&(e=1),o.addListener?o.addListener(HD):o.addEventListener("change",HD)));return e&&C(Q,function(a){return Q.add(null,a)}),this},A.revert=function(g){this.kill(g||{})},A.kill=function(g){this.contexts.forEach(function(C){return C.kill(g,!0)})},i}(),an={registerPlugin:function(){for(var A=arguments.length,I=new Array(A),g=0;g<A;g++)I[g]=arguments[g];I.forEach(function(C){return Qy(C)})},timeline:function(A){return new pB(A)},getTweensOf:function(A,I){return Lg.getTweensOf(A,I)},getProperty:function(A,I,g,C){OC(A)&&(A=wi(A)[0]);var B=eo(A||{}).get,Q=g?PG:ZG;return g==="native"&&(g=""),A&&(I?Q(($B[I]&&$B[I].get||B)(A,I,g,C)):function(E,o,t){return Q(($B[E]&&$B[E].get||B)(A,E,o,t))})},quickSetter:function(A,I,g){if(A=wi(A),A.length>1){var C=A.map(function(e){return _B.quickSetter(e,I,g)}),B=C.length;return function(e){for(var a=B;a--;)C[a](e)}}A=A[0]||{};var Q=$B[I],E=eo(A),o=E.harness&&(E.harness.aliases||{})[I]||I,t=Q?function(e){var a=new Q;st._pt=0,a.init(A,g?e+g:e,st,0,[A]),a.render(1,a),st._pt&&gc(1,st)}:E.set(A,o);return Q?t:function(e){return t(A,o,g?e+g:e,E,1)}},quickTo:function(A,I,g){var C,B=_B.to(A,wo((C={},C[I]="+=0.1",C.paused=!0,C),g||{})),Q=function(o,t,e){return B.resetTo(I,o,t,e)};return Q.tween=B,Q},isTweening:function(A){return Lg.getTweensOf(A,!0).length>0},defaults:function(A){return A&&A.ease&&(A.ease=so(A.ease,yt.ease)),Tl(yt,A||{})},config:function(A){return Tl(Qi,A||{})},registerEffect:function(A){var I=A.name,g=A.effect,C=A.plugins,B=A.defaults,Q=A.extendTimeline;(C||"").split(",").forEach(function(E){return E&&!$B[E]&&!ti[E]&&fe(I+" effect requires "+E+" plugin.")}),Rr[I]=function(E,o,t){return g(wi(E),Si(o||{},B),t)},Q&&(pB.prototype[I]=function(E,o,t){return this.add(Rr[I](E,IQ(o)?o:(t=o)&&{},this),t)})},registerEase:function(A,I){jI[A]=so(I)},parseEase:function(A,I){return arguments.length?so(A,I):jI},getById:function(A){return Lg.getById(A)},exportRoot:function(A,I){A===void 0&&(A={});var g=new pB(A),C,B;for(g.smoothChildTiming=LB(A.smoothChildTiming),Lg.remove(g),g._dp=0,g._time=g._tTime=Lg._time,C=Lg._first;C;)B=C._next,(I||!(!C._dur&&C instanceof hC&&C.vars.onComplete===C._targets[0]))&&Wi(g,C,C._start-C._delay),C=B;return Wi(Lg,g,0),g},context:function(A,I){return A?new Gy(A,I):dg},matchMedia:function(A){return new PU(A)},matchMediaRefresh:function(){return no.forEach(function(A){var I=A.conditions,g,C;for(C in I)I[C]&&(I[C]=!1,g=1);g&&A.revert()})||HD()},addEventListener:function(A,I){var g=Xs[A]||(Xs[A]=[]);~g.indexOf(I)||g.push(I)},removeEventListener:function(A,I){var g=Xs[A],C=g&&g.indexOf(I);C>=0&&g.splice(C,1)},utils:{wrap:UU,wrapYoyo:NU,distribute:Ay,random:gy,snap:Iy,normalize:MU,getUnit:tB,clamp:SU,splitColor:Ey,toArray:wi,selector:YD,mapRange:By,pipe:yU,unitize:kU,interpolate:pU,shuffle:$G},install:bG,effects:Rr,ticker:Ai,updateRoot:pB.updateRoot,plugins:$B,globalTimeline:Lg,core:{PropTween:HB,globals:xG,Tween:hC,Timeline:pB,Animation:Le,getCache:eo,_removeLinkedListItem:Fn,reverting:function(){return aB},context:function(A){return A&&dg&&(dg.data.push(A),A._ctx=dg),dg},suppressOverwrites:function(A){return Oh=A}}};mB("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return an[i]=hC[i]});Ai.add(pB.updateRoot);st=an.to({},{duration:0});var WU=function(A,I){for(var g=A._pt;g&&g.p!==I&&g.op!==I&&g.fp!==I;)g=g._next;return g},VU=function(A,I){var g=A._targets,C,B,Q;for(C in I)for(B=g.length;B--;)Q=A._ptLookup[B][C],Q&&(Q=Q.d)&&(Q._pt&&(Q=WU(Q,C)),Q&&Q.modifier&&Q.modifier(I[C],A,g[B],C))},Yr=function(A,I){return{name:A,rawVars:1,init:function(C,B,Q){Q._onInit=function(E){var o,t;if(OC(B)&&(o={},mB(B,function(e){return o[e]=1}),B=o),I){o={};for(t in B)o[t]=I(B[t]);B=o}VU(E,B)}}}},_B=an.registerPlugin({name:"attr",init:function(A,I,g,C,B){var Q,E,o;this.tween=g;for(Q in I)o=A.getAttribute(Q)||"",E=this.add(A,"setAttribute",(o||0)+"",I[Q],C,B,0,0,Q),E.op=Q,E.b=o,this._props.push(Q)},render:function(A,I){for(var g=I._pt;g;)aB?g.set(g.t,g.p,g.b,g):g.r(A,g.d),g=g._next}},{name:"endArray",init:function(A,I){for(var g=I.length;g--;)this.add(A,g,A[g]||0,I[g],0,0,0,0,0,1)}},Yr("roundProps",LD),Yr("modifiers"),Yr("snap",Iy))||an;hC.version=pB.version=_B.version="3.12.5";TG=1;Zh()&&Ut();jI.Power0;jI.Power1;jI.Power2;jI.Power3;jI.Power4;jI.Linear;jI.Quad;jI.Cubic;jI.Quart;jI.Quint;jI.Strong;jI.Elastic;jI.Back;jI.SteppedEase;jI.Bounce;jI.Sine;jI.Expo;jI.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zl,EE,lt,Cc,Co,Pl,Bc,jU=function(){return typeof window<"u"},FQ={},jE=180/Math.PI,wt=Math.PI/180,xo=Math.atan2,Wl=1e8,ic=/([A-Z])/g,XU=/(left|right|width|margin|padding|x)/i,zU=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},TD=function(A,I){return I.set(I.t,I.p,Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},$U=function(A,I){return I.set(I.t,I.p,A===1?I.e:Math.round((I.s+I.c*A)*1e4)/1e4+I.u,I)},AN=function(A,I){return I.set(I.t,I.p,A?Math.round((I.s+I.c*A)*1e4)/1e4+I.u:I.b,I)},IN=function(A,I){var g=I.s+I.c*A;I.set(I.t,I.p,~~(g+(g<0?-.5:.5))+I.u,I)},yy=function(A,I){return I.set(I.t,I.p,A?I.e:I.b,I)},ky=function(A,I){return I.set(I.t,I.p,A!==1?I.b:I.e,I)},gN=function(A,I,g){return A.style[I]=g},CN=function(A,I,g){return A.style.setProperty(I,g)},BN=function(A,I,g){return A._gsap[I]=g},iN=function(A,I,g){return A._gsap.scaleX=A._gsap.scaleY=g},QN=function(A,I,g,C,B){var Q=A._gsap;Q.scaleX=Q.scaleY=g,Q.renderTransform(B,Q)},EN=function(A,I,g,C,B){var Q=A._gsap;Q[I]=g,Q.renderTransform(B,Q)},Hg="transform",TB=Hg+"Origin",oN=function i(A,I){var g=this,C=this.target,B=C.style,Q=C._gsap;if(A in FQ&&B){if(this.tfm=this.tfm||{},A!=="transform")A=ji[A]||A,~A.indexOf(",")?A.split(",").forEach(function(E){return g.tfm[E]=wQ(C,E)}):this.tfm[A]=Q.x?Q[A]:wQ(C,A),A===TB&&(this.tfm.zOrigin=Q.zOrigin);else return ji.transform.split(",").forEach(function(E){return i.call(g,E,I)});if(this.props.indexOf(Hg)>=0)return;Q.svg&&(this.svgo=C.getAttribute("data-svg-origin"),this.props.push(TB,I,"")),A=Hg}(B||I)&&this.props.push(A,I,B[A])},My=function(A){A.translate&&(A.removeProperty("translate"),A.removeProperty("scale"),A.removeProperty("rotate"))},tN=function(){var A=this.props,I=this.target,g=I.style,C=I._gsap,B,Q;for(B=0;B<A.length;B+=3)A[B+1]?I[A[B]]=A[B+2]:A[B+2]?g[A[B]]=A[B+2]:g.removeProperty(A[B].substr(0,2)==="--"?A[B]:A[B].replace(ic,"-$1").toLowerCase());if(this.tfm){for(Q in this.tfm)C[Q]=this.tfm[Q];C.svg&&(C.renderTransform(),I.setAttribute("data-svg-origin",this.svgo||"")),B=Bc(),(!B||!B.isStart)&&!g[Hg]&&(My(g),C.zOrigin&&g[TB]&&(g[TB]+=" "+C.zOrigin+"px",C.zOrigin=0,C.renderTransform()),C.uncache=1)}},Uy=function(A,I){var g={target:A,props:[],revert:tN,save:oN};return A._gsap||_B.core.getCache(A),I&&I.split(",").forEach(function(C){return g.save(C)}),g},Ny,bD=function(A,I){var g=EE.createElementNS?EE.createElementNS((I||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),A):EE.createElement(A);return g&&g.style?g:EE.createElement(A)},$i=function i(A,I,g){var C=getComputedStyle(A);return C[I]||C.getPropertyValue(I.replace(ic,"-$1").toLowerCase())||C.getPropertyValue(I)||!g&&i(A,Nt(I)||I,1)||""},Vl="O,Moz,ms,Ms,Webkit".split(","),Nt=function(A,I,g){var C=I||Co,B=C.style,Q=5;if(A in B&&!g)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1);Q--&&!(Vl[Q]+A in B););return Q<0?null:(Q===3?"ms":Q>=0?Vl[Q]:"")+A},xD=function(){jU()&&window.document&&(Zl=window,EE=Zl.document,lt=EE.documentElement,Co=bD("div")||{style:{}},bD("div"),Hg=Nt(Hg),TB=Hg+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ny=!!Nt("perspective"),Bc=_B.core.reverting,Cc=1)},Lr=function i(A){var I=bD("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),g=this.parentNode,C=this.nextSibling,B=this.style.cssText,Q;if(lt.appendChild(I),I.appendChild(this),this.style.display="block",A)try{Q=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(Q=this._gsapBBox());return g&&(C?g.insertBefore(this,C):g.appendChild(this)),lt.removeChild(I),this.style.cssText=B,Q},jl=function(A,I){for(var g=I.length;g--;)if(A.hasAttribute(I[g]))return A.getAttribute(I[g])},py=function(A){var I;try{I=A.getBBox()}catch{I=Lr.call(A,!0)}return I&&(I.width||I.height)||A.getBBox===Lr||(I=Lr.call(A,!0)),I&&!I.width&&!I.x&&!I.y?{x:+jl(A,["x","cx","x1"])||0,y:+jl(A,["y","cy","y1"])||0,width:0,height:0}:I},Ky=function(A){return!!(A.getCTM&&(!A.parentNode||A.ownerSVGElement)&&py(A))},So=function(A,I){if(I){var g=A.style,C;I in FQ&&I!==TB&&(I=Hg),g.removeProperty?(C=I.substr(0,2),(C==="ms"||I.substr(0,6)==="webkit")&&(I="-"+I),g.removeProperty(C==="--"?I:I.replace(ic,"-$1").toLowerCase())):g.removeAttribute(I)}},oE=function(A,I,g,C,B,Q){var E=new HB(A._pt,I,g,0,1,Q?ky:yy);return A._pt=E,E.b=C,E.e=B,A._props.push(g),E},Xl={deg:1,rad:1,turn:1},eN={grid:1,flex:1},DE=function i(A,I,g,C){var B=parseFloat(g)||0,Q=(g+"").trim().substr((B+"").length)||"px",E=Co.style,o=XU.test(I),t=A.tagName.toLowerCase()==="svg",e=(t?"client":"offset")+(o?"Width":"Height"),a=100,s=C==="px",n=C==="%",r,c,D,h;if(C===Q||!B||Xl[C]||Xl[Q])return B;if(Q!=="px"&&!s&&(B=i(A,I,g,"px")),h=A.getCTM&&Ky(A),(n||Q==="%")&&(FQ[I]||~I.indexOf("adius")))return r=h?A.getBBox()[o?"width":"height"]:A[e],BC(n?B/r*a:B/100*r);if(E[o?"width":"height"]=a+(s?Q:C),c=~I.indexOf("adius")||C==="em"&&A.appendChild&&!t?A:A.parentNode,h&&(c=(A.ownerSVGElement||{}).parentNode),(!c||c===EE||!c.appendChild)&&(c=EE.body),D=c._gsap,D&&n&&D.width&&o&&D.time===Ai.time&&!D.uncache)return BC(B/D.width*a);if(n&&(I==="height"||I==="width")){var w=A.style[I];A.style[I]=a+C,r=A[e],w?A.style[I]=w:So(A,I)}else(n||Q==="%")&&!eN[$i(c,"display")]&&(E.position=$i(A,"position")),c===A&&(E.position="static"),c.appendChild(Co),r=Co[e],c.removeChild(Co),E.position="absolute";return o&&n&&(D=eo(c),D.time=Ai.time,D.width=c[e]),BC(s?r*B/a:r&&B?a/r*B:0)},wQ=function(A,I,g,C){var B;return Cc||xD(),I in ji&&I!=="transform"&&(I=ji[I],~I.indexOf(",")&&(I=I.split(",")[0])),FQ[I]&&I!=="transform"?(B=He(A,C),B=I!=="transformOrigin"?B[I]:B.svg?B.origin:nn($i(A,TB))+" "+B.zOrigin+"px"):(B=A.style[I],(!B||B==="auto"||C||~(B+"").indexOf("calc("))&&(B=sn[I]&&sn[I](A,I,g)||$i(A,I)||OG(A,I)||(I==="opacity"?1:0))),g&&!~(B+"").trim().indexOf(" ")?DE(A,I,B,g)+g:B},aN=function(A,I,g,C){if(!g||g==="none"){var B=Nt(I,A,1),Q=B&&$i(A,B,1);Q&&Q!==g?(I=B,g=Q):I==="borderColor"&&(g=$i(A,"borderTopColor"))}var E=new HB(this._pt,A.style,I,0,1,wy),o=0,t=0,e,a,s,n,r,c,D,h,w,l,S,U;if(E.b=g,E.e=C,g+="",C+="",C==="auto"&&(c=A.style[I],A.style[I]=C,C=$i(A,I)||C,c?A.style[I]=c:So(A,I)),e=[g,C],ty(e),g=e[0],C=e[1],s=g.match(at)||[],U=C.match(at)||[],U.length){for(;a=at.exec(C);)D=a[0],w=C.substring(o,a.index),r?r=(r+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(r=1),D!==(c=s[t++]||"")&&(n=parseFloat(c)||0,S=c.substr((n+"").length),D.charAt(1)==="="&&(D=ct(n,D)+S),h=parseFloat(D),l=D.substr((h+"").length),o=at.lastIndex-l.length,l||(l=l||Qi.units[I]||S,o===C.length&&(C+=l,E.e+=l)),S!==l&&(n=DE(A,I,c,l)||0),E._pt={_next:E._pt,p:w||t===1?w:",",s:n,c:h-n,m:r&&r<4||I==="zIndex"?Math.round:0});E.c=o<C.length?C.substring(o,C.length):""}else E.r=I==="display"&&C==="none"?ky:yy;return mG.test(C)&&(E.e=0),this._pt=E,E},zl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sN=function(A){var I=A.split(" "),g=I[0],C=I[1]||"50%";return(g==="top"||g==="bottom"||C==="left"||C==="right")&&(A=g,g=C,C=A),I[0]=zl[g]||g,I[1]=zl[C]||C,I.join(" ")},nN=function(A,I){if(I.tween&&I.tween._time===I.tween._dur){var g=I.t,C=g.style,B=I.u,Q=g._gsap,E,o,t;if(B==="all"||B===!0)C.cssText="",o=1;else for(B=B.split(","),t=B.length;--t>-1;)E=B[t],FQ[E]&&(o=1,E=E==="transformOrigin"?TB:Hg),So(g,E);o&&(So(g,Hg),Q&&(Q.svg&&g.removeAttribute("transform"),He(g,1),Q.uncache=1,My(C)))}},sn={clearProps:function(A,I,g,C,B){if(B.data!=="isFromStart"){var Q=A._pt=new HB(A._pt,I,g,0,0,nN);return Q.u=C,Q.pr=-10,Q.tween=B,A._props.push(g),1}}},me=[1,0,0,1,0,0],Fy={},dy=function(A){return A==="matrix(1, 0, 0, 1, 0, 0)"||A==="none"||!A},$l=function(A){var I=$i(A,Hg);return dy(I)?me:I.substr(7).match(LG).map(BC)},Qc=function(A,I){var g=A._gsap||eo(A),C=A.style,B=$l(A),Q,E,o,t;return g.svg&&A.getAttribute("transform")?(o=A.transform.baseVal.consolidate().matrix,B=[o.a,o.b,o.c,o.d,o.e,o.f],B.join(",")==="1,0,0,1,0,0"?me:B):(B===me&&!A.offsetParent&&A!==lt&&!g.svg&&(o=C.display,C.display="block",Q=A.parentNode,(!Q||!A.offsetParent)&&(t=1,E=A.nextElementSibling,lt.appendChild(A)),B=$l(A),o?C.display=o:So(A,"display"),t&&(E?Q.insertBefore(A,E):Q?Q.appendChild(A):lt.removeChild(A))),I&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B)},_D=function(A,I,g,C,B,Q){var E=A._gsap,o=B||Qc(A,!0),t=E.xOrigin||0,e=E.yOrigin||0,a=E.xOffset||0,s=E.yOffset||0,n=o[0],r=o[1],c=o[2],D=o[3],h=o[4],w=o[5],l=I.split(" "),S=parseFloat(l[0])||0,U=parseFloat(l[1])||0,k,y,p,q;g?o!==me&&(y=n*D-r*c)&&(p=S*(D/y)+U*(-c/y)+(c*w-D*h)/y,q=S*(-r/y)+U*(n/y)-(n*w-r*h)/y,S=p,U=q):(k=py(A),S=k.x+(~l[0].indexOf("%")?S/100*k.width:S),U=k.y+(~(l[1]||l[0]).indexOf("%")?U/100*k.height:U)),C||C!==!1&&E.smooth?(h=S-t,w=U-e,E.xOffset=a+(h*n+w*c)-h,E.yOffset=s+(h*r+w*D)-w):E.xOffset=E.yOffset=0,E.xOrigin=S,E.yOrigin=U,E.smooth=!!C,E.origin=I,E.originIsAbsolute=!!g,A.style[TB]="0px 0px",Q&&(oE(Q,E,"xOrigin",t,S),oE(Q,E,"yOrigin",e,U),oE(Q,E,"xOffset",a,E.xOffset),oE(Q,E,"yOffset",s,E.yOffset)),A.setAttribute("data-svg-origin",S+" "+U)},He=function(A,I){var g=A._gsap||new ny(A);if("x"in g&&!I&&!g.uncache)return g;var C=A.style,B=g.scaleX<0,Q="px",E="deg",o=getComputedStyle(A),t=$i(A,TB)||"0",e,a,s,n,r,c,D,h,w,l,S,U,k,y,p,q,M,N,L,x,b,P,v,z,CA,gA,DA,lA,YA,iI,sA,pA;return e=a=s=c=D=h=w=l=S=0,n=r=1,g.svg=!!(A.getCTM&&Ky(A)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(C[Hg]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Hg]!=="none"?o[Hg]:"")),C.scale=C.rotate=C.translate="none"),y=Qc(A,g.svg),g.svg&&(g.uncache?(CA=A.getBBox(),t=g.xOrigin-CA.x+"px "+(g.yOrigin-CA.y)+"px",z=""):z=!I&&A.getAttribute("data-svg-origin"),_D(A,z||t,!!z||g.originIsAbsolute,g.smooth!==!1,y)),U=g.xOrigin||0,k=g.yOrigin||0,y!==me&&(N=y[0],L=y[1],x=y[2],b=y[3],e=P=y[4],a=v=y[5],y.length===6?(n=Math.sqrt(N*N+L*L),r=Math.sqrt(b*b+x*x),c=N||L?xo(L,N)*jE:0,w=x||b?xo(x,b)*jE+c:0,w&&(r*=Math.abs(Math.cos(w*wt))),g.svg&&(e-=U-(U*N+k*x),a-=k-(U*L+k*b))):(pA=y[6],iI=y[7],DA=y[8],lA=y[9],YA=y[10],sA=y[11],e=y[12],a=y[13],s=y[14],p=xo(pA,YA),D=p*jE,p&&(q=Math.cos(-p),M=Math.sin(-p),z=P*q+DA*M,CA=v*q+lA*M,gA=pA*q+YA*M,DA=P*-M+DA*q,lA=v*-M+lA*q,YA=pA*-M+YA*q,sA=iI*-M+sA*q,P=z,v=CA,pA=gA),p=xo(-x,YA),h=p*jE,p&&(q=Math.cos(-p),M=Math.sin(-p),z=N*q-DA*M,CA=L*q-lA*M,gA=x*q-YA*M,sA=b*M+sA*q,N=z,L=CA,x=gA),p=xo(L,N),c=p*jE,p&&(q=Math.cos(p),M=Math.sin(p),z=N*q+L*M,CA=P*q+v*M,L=L*q-N*M,v=v*q-P*M,N=z,P=CA),D&&Math.abs(D)+Math.abs(c)>359.9&&(D=c=0,h=180-h),n=BC(Math.sqrt(N*N+L*L+x*x)),r=BC(Math.sqrt(v*v+pA*pA)),p=xo(P,v),w=Math.abs(p)>2e-4?p*jE:0,S=sA?1/(sA<0?-sA:sA):0),g.svg&&(z=A.getAttribute("transform"),g.forceCSS=A.setAttribute("transform","")||!dy($i(A,Hg)),z&&A.setAttribute("transform",z))),Math.abs(w)>90&&Math.abs(w)<270&&(B?(n*=-1,w+=c<=0?180:-180,c+=c<=0?180:-180):(r*=-1,w+=w<=0?180:-180)),I=I||g.uncache,g.x=e-((g.xPercent=e&&(!I&&g.xPercent||(Math.round(A.offsetWidth/2)===Math.round(-e)?-50:0)))?A.offsetWidth*g.xPercent/100:0)+Q,g.y=a-((g.yPercent=a&&(!I&&g.yPercent||(Math.round(A.offsetHeight/2)===Math.round(-a)?-50:0)))?A.offsetHeight*g.yPercent/100:0)+Q,g.z=s+Q,g.scaleX=BC(n),g.scaleY=BC(r),g.rotation=BC(c)+E,g.rotationX=BC(D)+E,g.rotationY=BC(h)+E,g.skewX=w+E,g.skewY=l+E,g.transformPerspective=S+Q,(g.zOrigin=parseFloat(t.split(" ")[2])||!I&&g.zOrigin||0)&&(C[TB]=nn(t)),g.xOffset=g.yOffset=0,g.force3D=Qi.force3D,g.renderTransform=g.svg?DN:Ny?Ry:rN,g.uncache=0,g},nn=function(A){return(A=A.split(" "))[0]+" "+A[1]},mr=function(A,I,g){var C=tB(I);return BC(parseFloat(I)+parseFloat(DE(A,"x",g+"px",C)))+C},rN=function(A,I){I.z="0px",I.rotationY=I.rotationX="0deg",I.force3D=0,Ry(A,I)},LE="0deg",Ce="0px",mE=") ",Ry=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,Q=g.x,E=g.y,o=g.z,t=g.rotation,e=g.rotationY,a=g.rotationX,s=g.skewX,n=g.skewY,r=g.scaleX,c=g.scaleY,D=g.transformPerspective,h=g.force3D,w=g.target,l=g.zOrigin,S="",U=h==="auto"&&A&&A!==1||h===!0;if(l&&(a!==LE||e!==LE)){var k=parseFloat(e)*wt,y=Math.sin(k),p=Math.cos(k),q;k=parseFloat(a)*wt,q=Math.cos(k),Q=mr(w,Q,y*q*-l),E=mr(w,E,-Math.sin(k)*-l),o=mr(w,o,p*q*-l+l)}D!==Ce&&(S+="perspective("+D+mE),(C||B)&&(S+="translate("+C+"%, "+B+"%) "),(U||Q!==Ce||E!==Ce||o!==Ce)&&(S+=o!==Ce||U?"translate3d("+Q+", "+E+", "+o+") ":"translate("+Q+", "+E+mE),t!==LE&&(S+="rotate("+t+mE),e!==LE&&(S+="rotateY("+e+mE),a!==LE&&(S+="rotateX("+a+mE),(s!==LE||n!==LE)&&(S+="skew("+s+", "+n+mE),(r!==1||c!==1)&&(S+="scale("+r+", "+c+mE),w.style[Hg]=S||"translate(0, 0)"},DN=function(A,I){var g=I||this,C=g.xPercent,B=g.yPercent,Q=g.x,E=g.y,o=g.rotation,t=g.skewX,e=g.skewY,a=g.scaleX,s=g.scaleY,n=g.target,r=g.xOrigin,c=g.yOrigin,D=g.xOffset,h=g.yOffset,w=g.forceCSS,l=parseFloat(Q),S=parseFloat(E),U,k,y,p,q;o=parseFloat(o),t=parseFloat(t),e=parseFloat(e),e&&(e=parseFloat(e),t+=e,o+=e),o||t?(o*=wt,t*=wt,U=Math.cos(o)*a,k=Math.sin(o)*a,y=Math.sin(o-t)*-s,p=Math.cos(o-t)*s,t&&(e*=wt,q=Math.tan(t-e),q=Math.sqrt(1+q*q),y*=q,p*=q,e&&(q=Math.tan(e),q=Math.sqrt(1+q*q),U*=q,k*=q)),U=BC(U),k=BC(k),y=BC(y),p=BC(p)):(U=a,p=s,k=y=0),(l&&!~(Q+"").indexOf("px")||S&&!~(E+"").indexOf("px"))&&(l=DE(n,"x",Q,"px"),S=DE(n,"y",E,"px")),(r||c||D||h)&&(l=BC(l+r-(r*U+c*y)+D),S=BC(S+c-(r*k+c*p)+h)),(C||B)&&(q=n.getBBox(),l=BC(l+C/100*q.width),S=BC(S+B/100*q.height)),q="matrix("+U+","+k+","+y+","+p+","+l+","+S+")",n.setAttribute("transform",q),w&&(n.style[Hg]=q)},hN=function(A,I,g,C,B){var Q=360,E=OC(B),o=parseFloat(B)*(E&&~B.indexOf("rad")?jE:1),t=o-C,e=C+t+"deg",a,s;return E&&(a=B.split("_")[1],a==="short"&&(t%=Q,t!==t%(Q/2)&&(t+=t<0?Q:-Q)),a==="cw"&&t<0?t=(t+Q*Wl)%Q-~~(t/Q)*Q:a==="ccw"&&t>0&&(t=(t-Q*Wl)%Q-~~(t/Q)*Q)),A._pt=s=new HB(A._pt,I,g,C,t,$U),s.e=e,s.u="deg",A._props.push(g),s},Aw=function(A,I){for(var g in I)A[g]=I[g];return A},cN=function(A,I,g){var C=Aw({},g._gsap),B="perspective,force3D,transformOrigin,svgOrigin",Q=g.style,E,o,t,e,a,s,n,r;C.svg?(t=g.getAttribute("transform"),g.setAttribute("transform",""),Q[Hg]=I,E=He(g,1),So(g,Hg),g.setAttribute("transform",t)):(t=getComputedStyle(g)[Hg],Q[Hg]=I,E=He(g,1),Q[Hg]=t);for(o in FQ)t=C[o],e=E[o],t!==e&&B.indexOf(o)<0&&(n=tB(t),r=tB(e),a=n!==r?DE(g,o,t,r):parseFloat(t),s=parseFloat(e),A._pt=new HB(A._pt,E,o,a,s-a,TD),A._pt.u=r||0,A._props.push(o));Aw(E,C)};mB("padding,margin,Width,Radius",function(i,A){var I="Top",g="Right",C="Bottom",B="Left",Q=(A<3?[I,g,C,B]:[I+B,I+g,C+g,C+B]).map(function(E){return A<2?i+E:"border"+E+i});sn[A>1?"border"+i:i]=function(E,o,t,e,a){var s,n;if(arguments.length<4)return s=Q.map(function(r){return wQ(E,r,t)}),n=s.join(" "),n.split(s[0]).length===5?s[0]:n;s=(e+"").split(" "),n={},Q.forEach(function(r,c){return n[r]=s[c]=s[c]||s[(c-1)/2|0]}),E.init(o,n,a)}});var Jy={name:"css",register:xD,targetTest:function(A){return A.style&&A.nodeType},init:function(A,I,g,C,B){var Q=this._props,E=A.style,o=g.vars.startAt,t,e,a,s,n,r,c,D,h,w,l,S,U,k,y,p;Cc||xD(),this.styles=this.styles||Uy(A),p=this.styles.props,this.tween=g;for(c in I)if(c!=="autoRound"&&(e=I[c],!($B[c]&&ry(c,I,g,C,A,B)))){if(n=typeof e,r=sn[c],n==="function"&&(e=e.call(g,C,A,B),n=typeof e),n==="string"&&~e.indexOf("random(")&&(e=qe(e)),r)r(this,A,c,e,g)&&(y=1);else if(c.substr(0,2)==="--")t=(getComputedStyle(A).getPropertyValue(c)+"").trim(),e+="",eE.lastIndex=0,eE.test(t)||(D=tB(t),h=tB(e)),h?D!==h&&(t=DE(A,c,t,h)+h):D&&(e+=D),this.add(E,"setProperty",t,e,C,B,0,0,c),Q.push(c),p.push(c,0,E[c]);else if(n!=="undefined"){if(o&&c in o?(t=typeof o[c]=="function"?o[c].call(g,C,A,B):o[c],OC(t)&&~t.indexOf("random(")&&(t=qe(t)),tB(t+"")||t==="auto"||(t+=Qi.units[c]||tB(wQ(A,c))||""),(t+"").charAt(1)==="="&&(t=wQ(A,c))):t=wQ(A,c),s=parseFloat(t),w=n==="string"&&e.charAt(1)==="="&&e.substr(0,2),w&&(e=e.substr(2)),a=parseFloat(e),c in ji&&(c==="autoAlpha"&&(s===1&&wQ(A,"visibility")==="hidden"&&a&&(s=0),p.push("visibility",0,E.visibility),oE(this,E,"visibility",s?"inherit":"hidden",a?"inherit":"hidden",!a)),c!=="scale"&&c!=="transform"&&(c=ji[c],~c.indexOf(",")&&(c=c.split(",")[0]))),l=c in FQ,l){if(this.styles.save(c),S||(U=A._gsap,U.renderTransform&&!I.parseTransform||He(A,I.parseTransform),k=I.smoothOrigin!==!1&&U.smooth,S=this._pt=new HB(this._pt,E,Hg,0,1,U.renderTransform,U,0,-1),S.dep=1),c==="scale")this._pt=new HB(this._pt,U,"scaleY",U.scaleY,(w?ct(U.scaleY,w+a):a)-U.scaleY||0,TD),this._pt.u=0,Q.push("scaleY",c),c+="X";else if(c==="transformOrigin"){p.push(TB,0,E[TB]),e=sN(e),U.svg?_D(A,e,0,k,0,this):(h=parseFloat(e.split(" ")[2])||0,h!==U.zOrigin&&oE(this,U,"zOrigin",U.zOrigin,h),oE(this,E,c,nn(t),nn(e)));continue}else if(c==="svgOrigin"){_D(A,e,1,k,0,this);continue}else if(c in Fy){hN(this,U,c,s,w?ct(s,w+e):e);continue}else if(c==="smoothOrigin"){oE(this,U,"smooth",U.smooth,e);continue}else if(c==="force3D"){U[c]=e;continue}else if(c==="transform"){cN(this,e,A);continue}}else c in E||(c=Nt(c)||c);if(l||(a||a===0)&&(s||s===0)&&!zU.test(e)&&c in E)D=(t+"").substr((s+"").length),a||(a=0),h=tB(e)||(c in Qi.units?Qi.units[c]:D),D!==h&&(s=DE(A,c,t,h)),this._pt=new HB(this._pt,l?U:E,c,s,(w?ct(s,w+a):a)-s,!l&&(h==="px"||c==="zIndex")&&I.autoRound!==!1?IN:TD),this._pt.u=h||0,D!==h&&h!=="%"&&(this._pt.b=t,this._pt.r=AN);else if(c in E)aN.call(this,A,c,t,w?w+e:e);else if(c in A)this.add(A,c,t||A[c],w?w+e:e,C,B);else if(c!=="parseTransform"){Wh(c,e);continue}l||(c in E?p.push(c,0,E[c]):p.push(c,1,t||A[c])),Q.push(c)}}y&&Sy(this)},render:function(A,I){if(I.tween._time||!Bc())for(var g=I._pt;g;)g.r(A,g.d),g=g._next;else I.styles.revert()},get:wQ,aliases:ji,getSetter:function(A,I,g){var C=ji[I];return C&&C.indexOf(",")<0&&(I=C),I in FQ&&I!==TB&&(A._gsap.x||wQ(A,"x"))?g&&Pl===g?I==="scale"?iN:BN:(Pl=g||{})&&(I==="scale"?QN:EN):A.style&&!vh(A.style[I])?gN:~I.indexOf("-")?CN:Ic(A,I)},core:{_removeProperty:So,_getMatrix:Qc}};_B.utils.checkPrefix=Nt;_B.core.getStyleSaver=Uy;(function(i,A,I,g){var C=mB(i+","+A+","+I,function(B){FQ[B]=1});mB(A,function(B){Qi.units[B]="deg",Fy[B]=1}),ji[C[13]]=i+","+A,mB(g,function(B){var Q=B.split(":");ji[Q[1]]=C[Q[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mB("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Qi.units[i]="px"});_B.registerPlugin(Jy);var St=_B.registerPlugin(Jy)||_B;St.core.Tween;typeof window<"u"&&(St.registerPlugin(_h.ScrollTrigger),St.registerPlugin(CU.ScrollToPlugin));_h.ScrollTrigger.defaults({markers:1});function lN(i){let A,I;const g=i[1].default,C=wC(g,i,i[0],null);return{c(){A=iC("b"),C&&C.c(),this.h()},l(B){A=QC(B,"B",{class:!0});var Q=YB(A);C&&C.l(Q),Q.forEach(tA),this.h()},h(){Dg(A,"class","")},m(B,Q){rA(B,A,Q),C&&C.m(A,null),I=!0},p(B,[Q]){C&&C.p&&(!I||Q&1)&&SC(C,g,B,B[0],I?yC(g,B[0],Q,null):GC(B[0]),null)},i(B){I||(T(C,B),I=!0)},o(B){Z(C,B),I=!1},d(B){B&&tA(A),C&&C.d(B)}}}function wN(i,A,I){let{$$slots:g={},$$scope:C}=A;return i.$$set=B=>{"$$scope"in B&&I(0,C=B.$$scope)},[C,g]}class Iw extends Ag{constructor(A){super(),Ig(this,A,wN,lN,$I,{})}}function SN(i){let A;return{c(){A=Rg("desktop")},l(I){A=Jg(I,"desktop")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function GN(i){let A;return{c(){A=Rg("larger screen")},l(I){A=Jg(I,"larger screen")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function yN(i){let A,I,g,C="Three <br/> Body <br/> Problem",B,Q,E=`Should philosophy guide experiments, or should experiments guide
			philosophy? <br/>
			- Liu Cixin, <i>The Three-Body Problem</i>`,o,t,e=`By <a href="https://github.com/zslrmhb" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Hongbin Miao</a>
			&amp;
			<a href="https://github.com/Qz07" target="_blank" rel="noopener noreferrer" class="underline decoration-2 underline-offset-8 decoration-neutral text-secondary">Qirui Zheng</a>`,a,s,n,r,c,D,h,w,l;return c=new Iw({props:{$$slots:{default:[SN]},$$scope:{ctx:i}}}),h=new Iw({props:{$$slots:{default:[GN]},$$scope:{ctx:i}}}),{c(){A=iC("div"),I=iC("div"),g=iC("h1"),g.innerHTML=C,B=uA(),Q=iC("div"),Q.innerHTML=E,o=uA(),t=iC("div"),t.innerHTML=e,a=uA(),s=iC("div"),n=iC("div"),r=Rg("Whoops! This interactive is better viewed on "),iA(c.$$.fragment),D=Rg(` with a
				`),iA(h.$$.fragment),w=Rg("!"),this.h()},l(S){A=QC(S,"DIV",{id:!0,class:!0});var U=YB(A);I=QC(U,"DIV",{class:!0});var k=YB(I);g=QC(k,"H1",{class:!0,"data-svelte-h":!0}),Me(g)!=="svelte-lput1d"&&(g.innerHTML=C),B=qA(k),Q=QC(k,"DIV",{class:!0,"data-svelte-h":!0}),Me(Q)!=="svelte-97c1x4"&&(Q.innerHTML=E),o=qA(k),t=QC(k,"DIV",{class:!0,"data-svelte-h":!0}),Me(t)!=="svelte-khp5j5"&&(t.innerHTML=e),a=qA(k),s=QC(k,"DIV",{class:!0});var y=YB(s);n=QC(y,"DIV",{class:!0});var p=YB(n);r=Jg(p,"Whoops! This interactive is better viewed on "),QA(c.$$.fragment,p),D=Jg(p,` with a
				`),QA(h.$$.fragment,p),w=Jg(p,"!"),p.forEach(tA),y.forEach(tA),k.forEach(tA),U.forEach(tA),this.h()},h(){Dg(g,"class","text-7xl sm:text-8xl md:text-9xl font-display drop-shadow-xl"),Dg(Q,"class","text-lg md:text-xl font-displayAlt text-right"),Dg(t,"class","relative top-0 right-0 font-displayAlt text-2xl sm:text-3xl md:text-4xl"),Dg(n,"class","text-xl sm:text-2xl text-center"),Dg(s,"class","relative alert bg-transparent border-0 flex flex-col mt-10 lg:hidden"),Dg(I,"class","flex flex-col gap-5 items-left relative"),Dg(A,"id","title"),Dg(A,"class","fixed inset-0 z-10 flex items-center justify-center")},m(S,U){rA(S,A,U),oB(A,I),oB(I,g),oB(I,B),oB(I,Q),oB(I,o),oB(I,t),oB(I,a),oB(I,s),oB(s,n),oB(n,r),EA(c,n,null),oB(n,D),EA(h,n,null),oB(n,w),l=!0},p(S,[U]){const k={};U&1&&(k.$$scope={dirty:U,ctx:S}),c.$set(k);const y={};U&1&&(y.$$scope={dirty:U,ctx:S}),h.$set(y)},i(S){l||(T(c.$$.fragment,S),T(h.$$.fragment,S),l=!0)},o(S){Z(c.$$.fragment,S),Z(h.$$.fragment,S),l=!1},d(S){S&&tA(A),oA(c),oA(h)}}}class kN extends Ag{constructor(A){super(),Ig(this,A,null,yN,$I,{})}}function MN(i){let A,I,g;const C=i[3].default,B=wC(C,i,i[2],null);return{c(){A=iC("section"),B&&B.c(),this.h()},l(Q){A=QC(Q,"SECTION",{id:!0,class:!0});var E=YB(A);B&&B.l(E),E.forEach(tA),this.h()},h(){Dg(A,"id",i[0]),Dg(A,"class",I="prose prose-xl [&>*]:px-10 mb-60 "+i[1])},m(Q,E){rA(Q,A,E),B&&B.m(A,null),g=!0},p(Q,[E]){B&&B.p&&(!g||E&4)&&SC(B,C,Q,Q[2],g?yC(C,Q[2],E,null):GC(Q[2]),null),(!g||E&1)&&Dg(A,"id",Q[0]),(!g||E&2&&I!==(I="prose prose-xl [&>*]:px-10 mb-60 "+Q[1]))&&Dg(A,"class",I)},i(Q){g||(T(B,Q),g=!0)},o(Q){Z(B,Q),g=!1},d(Q){Q&&tA(A),B&&B.d(Q)}}}function UN(i,A,I){let{$$slots:g={},$$scope:C}=A,{id:B=null}=A,{classNames:Q=""}=A;return i.$$set=E=>{"id"in E&&I(0,B=E.id),"classNames"in E&&I(1,Q=E.classNames),"$$scope"in E&&I(2,C=E.$$scope)},[B,Q,C,g]}class As extends Ag{constructor(A){super(),Ig(this,A,UN,MN,$I,{id:0,classNames:1})}}function NN(i){let A,I;const g=i[2].default,C=wC(g,i,i[1],null);return{c(){A=iC("p"),C&&C.c(),this.h()},l(B){A=QC(B,"P",{id:!0,class:!0});var Q=YB(A);C&&C.l(Q),Q.forEach(tA),this.h()},h(){Dg(A,"id",i[0]),Dg(A,"class","")},m(B,Q){rA(B,A,Q),C&&C.m(A,null),I=!0},p(B,[Q]){C&&C.p&&(!I||Q&2)&&SC(C,g,B,B[1],I?yC(g,B[1],Q,null):GC(B[1]),null),(!I||Q&1)&&Dg(A,"id",B[0])},i(B){I||(T(C,B),I=!0)},o(B){Z(C,B),I=!1},d(B){B&&tA(A),C&&C.d(B)}}}function pN(i,A,I){let{$$slots:g={},$$scope:C}=A,{id:B}=A;return i.$$set=Q=>{"id"in Q&&I(0,B=Q.id),"$$scope"in Q&&I(1,C=Q.$$scope)},[B,C,g]}class Ii extends Ag{constructor(A){super(),Ig(this,A,pN,NN,$I,{id:0})}}function KN(i){let A;return{c(){A=iC("div"),this.h()},l(I){A=QC(I,"DIV",{class:!0}),YB(A).forEach(tA),this.h()},h(){Dg(A,"class","h-screen")},m(I,g){rA(I,A,g)},p:rg,i:rg,o:rg,d(I){I&&tA(A)}}}class zC extends Ag{constructor(A){super(),Ig(this,A,null,KN,$I,{})}}function FN(i){let A;return{c(){A=Rg(`The development of civilization relies on a relatively stable and predictable
	environment such as Earth. On a planet light years away from Earth, a new
	civilization embarks on its journey, and YOU are part of it...`)},l(I){A=Jg(I,`The development of civilization relies on a relatively stable and predictable
	environment such as Earth. On a planet light years away from Earth, a new
	civilization embarks on its journey, and YOU are part of it...`)},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function dN(i){let A;return{c(){A=Rg("This is my planet .. my .. home?")},l(I){A=Jg(I,"This is my planet .. my .. home?")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function RN(i){let A;return{c(){A=Rg(`This looks like the Sun, which provides the essential energy to my
		environment..`)},l(I){A=Jg(I,`This looks like the Sun, which provides the essential energy to my
		environment..`)},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function JN(i){let A;return{c(){A=Rg("Apparently, there is something called the gravitational force..")},l(I){A=Jg(I,"Apparently, there is something called the gravitational force..")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function fN(i){let A;return{c(){A=Rg('This force is described by the formula " F = G M_1M_2 / r^2"')},l(I){A=Jg(I,'This force is described by the formula " F = G M_1M_2 / r^2"')},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function uN(i){let A;return{c(){A=Rg(`So on objects that have a large mass, like the sun and my planet, this
		force is HUGE!`)},l(I){A=Jg(I,`So on objects that have a large mass, like the sun and my planet, this
		force is HUGE!`)},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function qN(i){let A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D,h,w,l,S,U;return I=new zC({}),C=new Ii({props:{id:"st-1",$$slots:{default:[dN]},$$scope:{ctx:i}}}),Q=new zC({}),o=new Ii({props:{id:"st-2",$$slots:{default:[RN]},$$scope:{ctx:i}}}),e=new zC({}),s=new Ii({props:{id:"st-3",$$slots:{default:[JN]},$$scope:{ctx:i}}}),r=new zC({}),D=new Ii({props:{id:"st-4",$$slots:{default:[fN]},$$scope:{ctx:i}}}),w=new zC({}),S=new Ii({props:{id:"st-5",$$slots:{default:[uN]},$$scope:{ctx:i}}}),{c(){A=Rg(`WELCOME
	`),iA(I.$$.fragment),g=uA(),iA(C.$$.fragment),B=uA(),iA(Q.$$.fragment),E=uA(),iA(o.$$.fragment),t=uA(),iA(e.$$.fragment),a=uA(),iA(s.$$.fragment),n=uA(),iA(r.$$.fragment),c=uA(),iA(D.$$.fragment),h=uA(),iA(w.$$.fragment),l=uA(),iA(S.$$.fragment)},l(k){A=Jg(k,`WELCOME
	`),QA(I.$$.fragment,k),g=qA(k),QA(C.$$.fragment,k),B=qA(k),QA(Q.$$.fragment,k),E=qA(k),QA(o.$$.fragment,k),t=qA(k),QA(e.$$.fragment,k),a=qA(k),QA(s.$$.fragment,k),n=qA(k),QA(r.$$.fragment,k),c=qA(k),QA(D.$$.fragment,k),h=qA(k),QA(w.$$.fragment,k),l=qA(k),QA(S.$$.fragment,k)},m(k,y){rA(k,A,y),EA(I,k,y),rA(k,g,y),EA(C,k,y),rA(k,B,y),EA(Q,k,y),rA(k,E,y),EA(o,k,y),rA(k,t,y),EA(e,k,y),rA(k,a,y),EA(s,k,y),rA(k,n,y),EA(r,k,y),rA(k,c,y),EA(D,k,y),rA(k,h,y),EA(w,k,y),rA(k,l,y),EA(S,k,y),U=!0},p(k,y){const p={};y&1&&(p.$$scope={dirty:y,ctx:k}),C.$set(p);const q={};y&1&&(q.$$scope={dirty:y,ctx:k}),o.$set(q);const M={};y&1&&(M.$$scope={dirty:y,ctx:k}),s.$set(M);const N={};y&1&&(N.$$scope={dirty:y,ctx:k}),D.$set(N);const L={};y&1&&(L.$$scope={dirty:y,ctx:k}),S.$set(L)},i(k){U||(T(I.$$.fragment,k),T(C.$$.fragment,k),T(Q.$$.fragment,k),T(o.$$.fragment,k),T(e.$$.fragment,k),T(s.$$.fragment,k),T(r.$$.fragment,k),T(D.$$.fragment,k),T(w.$$.fragment,k),T(S.$$.fragment,k),U=!0)},o(k){Z(I.$$.fragment,k),Z(C.$$.fragment,k),Z(Q.$$.fragment,k),Z(o.$$.fragment,k),Z(e.$$.fragment,k),Z(s.$$.fragment,k),Z(r.$$.fragment,k),Z(D.$$.fragment,k),Z(w.$$.fragment,k),Z(S.$$.fragment,k),U=!1},d(k){k&&(tA(A),tA(g),tA(B),tA(E),tA(t),tA(a),tA(n),tA(c),tA(h),tA(l)),oA(I,k),oA(C,k),oA(Q,k),oA(o,k),oA(e,k),oA(s,k),oA(r,k),oA(D,k),oA(w,k),oA(S,k)}}}function YN(i){let A;return{c(){A=Rg("Now there are two suns in the solar system..")},l(I){A=Jg(I,"Now there are two suns in the solar system..")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function LN(i){let A,I,g;return{c(){A=Rg("They have similar mass. "),I=iC("br"),g=Rg(` So, I think they exert similar force onto each
		other..`)},l(C){A=Jg(C,"They have similar mass. "),I=QC(C,"BR",{}),g=Jg(C,` So, I think they exert similar force onto each
		other..`)},m(C,B){rA(C,A,B),rA(C,I,B),rA(C,g,B)},p:rg,d(C){C&&(tA(A),tA(I),tA(g))}}}function mN(i){let A;return{c(){A=Rg("Their motion looks kind of stable, right..?")},l(I){A=Jg(I,"Their motion looks kind of stable, right..?")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function HN(i){let A;return{c(){A=Rg("Is this how my planet will orbit this two-body solar system?")},l(I){A=Jg(I,"Is this how my planet will orbit this two-body solar system?")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function TN(i){let A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D,h;return I=new zC({}),C=new Ii({props:{id:"st-6",$$slots:{default:[YN]},$$scope:{ctx:i}}}),Q=new zC({}),o=new Ii({props:{id:"st-7",$$slots:{default:[LN]},$$scope:{ctx:i}}}),e=new zC({}),s=new Ii({props:{id:"st-8",$$slots:{default:[mN]},$$scope:{ctx:i}}}),r=new zC({}),D=new Ii({props:{id:"st-9",$$slots:{default:[HN]},$$scope:{ctx:i}}}),{c(){A=Rg(`TWO-BODY PROBLEM
	`),iA(I.$$.fragment),g=uA(),iA(C.$$.fragment),B=uA(),iA(Q.$$.fragment),E=uA(),iA(o.$$.fragment),t=uA(),iA(e.$$.fragment),a=uA(),iA(s.$$.fragment),n=uA(),iA(r.$$.fragment),c=uA(),iA(D.$$.fragment)},l(w){A=Jg(w,`TWO-BODY PROBLEM
	`),QA(I.$$.fragment,w),g=qA(w),QA(C.$$.fragment,w),B=qA(w),QA(Q.$$.fragment,w),E=qA(w),QA(o.$$.fragment,w),t=qA(w),QA(e.$$.fragment,w),a=qA(w),QA(s.$$.fragment,w),n=qA(w),QA(r.$$.fragment,w),c=qA(w),QA(D.$$.fragment,w)},m(w,l){rA(w,A,l),EA(I,w,l),rA(w,g,l),EA(C,w,l),rA(w,B,l),EA(Q,w,l),rA(w,E,l),EA(o,w,l),rA(w,t,l),EA(e,w,l),rA(w,a,l),EA(s,w,l),rA(w,n,l),EA(r,w,l),rA(w,c,l),EA(D,w,l),h=!0},p(w,l){const S={};l&1&&(S.$$scope={dirty:l,ctx:w}),C.$set(S);const U={};l&1&&(U.$$scope={dirty:l,ctx:w}),o.$set(U);const k={};l&1&&(k.$$scope={dirty:l,ctx:w}),s.$set(k);const y={};l&1&&(y.$$scope={dirty:l,ctx:w}),D.$set(y)},i(w){h||(T(I.$$.fragment,w),T(C.$$.fragment,w),T(Q.$$.fragment,w),T(o.$$.fragment,w),T(e.$$.fragment,w),T(s.$$.fragment,w),T(r.$$.fragment,w),T(D.$$.fragment,w),h=!0)},o(w){Z(I.$$.fragment,w),Z(C.$$.fragment,w),Z(Q.$$.fragment,w),Z(o.$$.fragment,w),Z(e.$$.fragment,w),Z(s.$$.fragment,w),Z(r.$$.fragment,w),Z(D.$$.fragment,w),h=!1},d(w){w&&(tA(A),tA(g),tA(B),tA(E),tA(t),tA(a),tA(n),tA(c)),oA(I,w),oA(C,w),oA(Q,w),oA(o,w),oA(e,w),oA(s,w),oA(r,w),oA(D,w)}}}function bN(i){let A;return{c(){A=Rg("Now there are three suns in the solar system..")},l(I){A=Jg(I,"Now there are three suns in the solar system..")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function xN(i){let A,I,g;return{c(){A=Rg("They all have similar mass. "),I=iC("br"),g=Rg(" So .. right! Similar force on each other!")},l(C){A=Jg(C,"They all have similar mass. "),I=QC(C,"BR",{}),g=Jg(C," So .. right! Similar force on each other!")},m(C,B){rA(C,A,B),rA(C,I,B),rA(C,g,B)},p:rg,d(C){C&&(tA(A),tA(I),tA(g))}}}function _N(i){let A;return{c(){A=Rg("Wait!? This is so chaotic..")},l(I){A=Jg(I,"Wait!? This is so chaotic..")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function ON(i){let A;return{c(){A=Rg("What is going on?")},l(I){A=Jg(I,"What is going on?")},m(I,g){rA(I,A,g)},d(I){I&&tA(A)}}}function vN(i){let A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D,h;return I=new zC({}),C=new Ii({props:{id:"st-10",$$slots:{default:[bN]},$$scope:{ctx:i}}}),Q=new zC({}),o=new Ii({props:{id:"st-11",$$slots:{default:[xN]},$$scope:{ctx:i}}}),e=new zC({}),s=new Ii({props:{id:"st-12",$$slots:{default:[_N]},$$scope:{ctx:i}}}),r=new zC({}),D=new Ii({props:{id:"st-13",$$slots:{default:[ON]},$$scope:{ctx:i}}}),{c(){A=Rg(`THREE-BODY PROBLEM
	`),iA(I.$$.fragment),g=uA(),iA(C.$$.fragment),B=uA(),iA(Q.$$.fragment),E=uA(),iA(o.$$.fragment),t=uA(),iA(e.$$.fragment),a=uA(),iA(s.$$.fragment),n=uA(),iA(r.$$.fragment),c=uA(),iA(D.$$.fragment)},l(w){A=Jg(w,`THREE-BODY PROBLEM
	`),QA(I.$$.fragment,w),g=qA(w),QA(C.$$.fragment,w),B=qA(w),QA(Q.$$.fragment,w),E=qA(w),QA(o.$$.fragment,w),t=qA(w),QA(e.$$.fragment,w),a=qA(w),QA(s.$$.fragment,w),n=qA(w),QA(r.$$.fragment,w),c=qA(w),QA(D.$$.fragment,w)},m(w,l){rA(w,A,l),EA(I,w,l),rA(w,g,l),EA(C,w,l),rA(w,B,l),EA(Q,w,l),rA(w,E,l),EA(o,w,l),rA(w,t,l),EA(e,w,l),rA(w,a,l),EA(s,w,l),rA(w,n,l),EA(r,w,l),rA(w,c,l),EA(D,w,l),h=!0},p(w,l){const S={};l&1&&(S.$$scope={dirty:l,ctx:w}),C.$set(S);const U={};l&1&&(U.$$scope={dirty:l,ctx:w}),o.$set(U);const k={};l&1&&(k.$$scope={dirty:l,ctx:w}),s.$set(k);const y={};l&1&&(y.$$scope={dirty:l,ctx:w}),D.$set(y)},i(w){h||(T(I.$$.fragment,w),T(C.$$.fragment,w),T(Q.$$.fragment,w),T(o.$$.fragment,w),T(e.$$.fragment,w),T(s.$$.fragment,w),T(r.$$.fragment,w),T(D.$$.fragment,w),h=!0)},o(w){Z(I.$$.fragment,w),Z(C.$$.fragment,w),Z(Q.$$.fragment,w),Z(o.$$.fragment,w),Z(e.$$.fragment,w),Z(s.$$.fragment,w),Z(r.$$.fragment,w),Z(D.$$.fragment,w),h=!1},d(w){w&&(tA(A),tA(g),tA(B),tA(E),tA(t),tA(a),tA(n),tA(c)),oA(I,w),oA(C,w),oA(Q,w),oA(o,w),oA(e,w),oA(s,w),oA(r,w),oA(D,w)}}}function ZN(i){let A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D,h,w;return g=new As({props:{id:"intro",$$slots:{default:[FN]},$$scope:{ctx:i}}}),B=new As({props:{id:"section-1",$$slots:{default:[qN]},$$scope:{ctx:i}}}),E=new zC({}),t=new As({props:{id:"section-2",$$slots:{default:[TN]},$$scope:{ctx:i}}}),a=new zC({}),n=new As({props:{id:"section-3",$$slots:{default:[vN]},$$scope:{ctx:i}}}),c=new zC({}),h=new zC({}),{c(){A=iC("div"),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment),Q=uA(),iA(E.$$.fragment),o=uA(),iA(t.$$.fragment),e=uA(),iA(a.$$.fragment),s=uA(),iA(n.$$.fragment),r=uA(),iA(c.$$.fragment),D=uA(),iA(h.$$.fragment),this.h()},l(l){A=QC(l,"DIV",{id:!0,class:!0}),YB(A).forEach(tA),I=qA(l),QA(g.$$.fragment,l),C=qA(l),QA(B.$$.fragment,l),Q=qA(l),QA(E.$$.fragment,l),o=qA(l),QA(t.$$.fragment,l),e=qA(l),QA(a.$$.fragment,l),s=qA(l),QA(n.$$.fragment,l),r=qA(l),QA(c.$$.fragment,l),D=qA(l),QA(h.$$.fragment,l),this.h()},h(){Dg(A,"id","title-spacer"),Dg(A,"class","h-[2500px]")},m(l,S){rA(l,A,S),rA(l,I,S),EA(g,l,S),rA(l,C,S),EA(B,l,S),rA(l,Q,S),EA(E,l,S),rA(l,o,S),EA(t,l,S),rA(l,e,S),EA(a,l,S),rA(l,s,S),EA(n,l,S),rA(l,r,S),EA(c,l,S),rA(l,D,S),EA(h,l,S),w=!0},p(l,[S]){const U={};S&1&&(U.$$scope={dirty:S,ctx:l}),g.$set(U);const k={};S&1&&(k.$$scope={dirty:S,ctx:l}),B.$set(k);const y={};S&1&&(y.$$scope={dirty:S,ctx:l}),t.$set(y);const p={};S&1&&(p.$$scope={dirty:S,ctx:l}),n.$set(p)},i(l){w||(T(g.$$.fragment,l),T(B.$$.fragment,l),T(E.$$.fragment,l),T(t.$$.fragment,l),T(a.$$.fragment,l),T(n.$$.fragment,l),T(c.$$.fragment,l),T(h.$$.fragment,l),w=!0)},o(l){Z(g.$$.fragment,l),Z(B.$$.fragment,l),Z(E.$$.fragment,l),Z(t.$$.fragment,l),Z(a.$$.fragment,l),Z(n.$$.fragment,l),Z(c.$$.fragment,l),Z(h.$$.fragment,l),w=!1},d(l){l&&(tA(A),tA(I),tA(C),tA(Q),tA(o),tA(e),tA(s),tA(r),tA(D)),oA(g,l),oA(B,l),oA(E,l),oA(t,l),oA(a,l),oA(n,l),oA(c,l),oA(h,l)}}}class PN extends Ag{constructor(A){super(),Ig(this,A,null,ZN,$I,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lt="161",XE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zE={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fy=0,OD=1,uy=2,WN=3,VN=0,Ec=1,Jn=2,Oi=3,dQ=0,FB=1,Vi=2,MQ=0,ro=1,Te=2,vD=3,ZD=4,qy=5,iE=100,Yy=101,Ly=102,PD=103,WD=104,my=200,Hy=201,Ty=202,by=203,rn=204,Dn=205,xy=206,_y=207,Oy=208,vy=209,Zy=210,Py=211,Wy=212,Vy=213,jy=214,Xy=0,zy=1,$y=2,be=3,Ak=4,Ik=5,gk=6,Ck=7,wa=0,Bk=1,ik=2,UQ=0,Qk=1,Ek=2,ok=3,oc=4,tk=5,ek=6,VD="attached",ak="detached",fn=300,RQ=301,hE=302,xe=303,_e=304,mt=306,Oe=1e3,eB=1001,ve=1002,EC=1003,hn=1004,jN=1004,Io=1005,XN=1005,mg=1006,Ke=1007,zN=1007,Xi=1008,$N=1008,NQ=1009,sk=1010,nk=1011,un=1012,tc=1013,yQ=1014,ci=1015,pt=1016,ec=1017,ac=1018,aE=1020,rk=1021,qB=1023,Dk=1024,hk=1025,sE=1026,Go=1027,ck=1028,sc=1029,lk=1030,nc=1031,rc=1033,zs=33776,$s=33777,An=33778,In=33779,jD=35840,XD=35841,zD=35842,$D=35843,Dc=36196,Ah=37492,Ih=37496,gh=37808,Ch=37809,Bh=37810,ih=37811,Qh=37812,Eh=37813,oh=37814,th=37815,eh=37816,ah=37817,sh=37818,nh=37819,rh=37820,Dh=37821,gn=36492,hh=36494,ch=36495,wk=36283,lh=36284,wh=36285,Sh=36286,Sk=2200,Gk=2201,yk=2202,Ze=2300,Pe=2301,Cn=2302,Bo=2400,io=2401,We=2402,qn=2500,hc=2501,Ap=0,Ip=1,gp=2,Ve=3e3,pQ=3001,kk=3200,Mk=3201,GE=0,Uk=1,gi="",dC="srgb",gQ="srgb-linear",Yn="display-p3",Sa="display-p3-linear",je="linear",yg="srgb",Xe="rec709",ze="p3",Cp=0,$E=7680,Bp=7681,ip=7682,Qp=7683,Ep=34055,op=34056,tp=5386,ep=512,ap=513,sp=514,np=515,rp=516,Dp=517,hp=518,Gh=519,Nk=512,pk=513,Kk=514,cc=515,Fk=516,dk=517,Rk=518,Jk=519,$e=35044,cp=35048,lp=35040,wp=35045,Sp=35049,Gp=35041,yp=35046,kp=35050,Mp=35042,Up="100",yh="300 es",cn=1035,zi=2e3,Aa=2001;class CQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,Q=C.length;B<Q;B++)C[B].call(this,A);A.target=null}}}const iB=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gw=1234567;const Do=Math.PI/180,Kt=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(iB[i&255]+iB[i>>8&255]+iB[i>>16&255]+iB[i>>24&255]+"-"+iB[A&255]+iB[A>>8&255]+"-"+iB[A>>16&15|64]+iB[A>>24&255]+"-"+iB[I&63|128]+iB[I>>8&255]+"-"+iB[I>>16&255]+iB[I>>24&255]+iB[g&255]+iB[g>>8&255]+iB[g>>16&255]+iB[g>>24&255]).toLowerCase()}function Vg(i,A,I){return Math.max(A,Math.min(I,i))}function lc(i,A){return(i%A+A)%A}function Np(i,A,I,g,C){return g+(i-A)*(C-g)/(I-A)}function pp(i,A,I){return i!==A?(I-i)/(A-i):0}function Fe(i,A,I){return(1-I)*i+I*A}function Kp(i,A,I,g){return Fe(i,A,1-Math.exp(-I*g))}function Fp(i,A=1){return A-Math.abs(lc(i,A*2)-A)}function dp(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*(3-2*i))}function Rp(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*i*(i*(i*6-15)+10))}function Jp(i,A){return i+Math.floor(Math.random()*(A-i+1))}function fp(i,A){return i+Math.random()*(A-i)}function up(i){return i*(.5-Math.random())}function qp(i){i!==void 0&&(gw=i);let A=gw+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Yp(i){return i*Do}function Lp(i){return i*Kt}function kh(i){return(i&i-1)===0&&i!==0}function mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ln(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,A,I,g,C){const B=Math.cos,Q=Math.sin,E=B(I/2),o=Q(I/2),t=B((A+g)/2),e=Q((A+g)/2),a=B((A-g)/2),s=Q((A-g)/2),n=B((g-A)/2),r=Q((g-A)/2);switch(C){case"XYX":i.set(E*e,o*a,o*s,E*t);break;case"YZY":i.set(o*s,E*e,o*a,E*t);break;case"ZXZ":i.set(o*a,o*s,E*e,E*t);break;case"XZX":i.set(E*e,o*r,o*n,E*t);break;case"YXY":i.set(o*n,E*e,o*r,E*t);break;case"ZYZ":i.set(o*r,o*n,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function KB(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function uI(i,A){switch(A.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fk={DEG2RAD:Do,RAD2DEG:Kt,generateUUID:Ei,clamp:Vg,euclideanModulo:lc,mapLinear:Np,inverseLerp:pp,lerp:Fe,damp:Kp,pingpong:Fp,smoothstep:dp,smootherstep:Rp,randInt:Jp,randFloat:fp,randFloatSpread:up,seededRandom:qp,degToRad:Yp,radToDeg:Lp,isPowerOfTwo:kh,ceilPowerOfTwo:mp,floorPowerOfTwo:ln,setQuaternionFromProperEuler:Hp,normalize:uI,denormalize:KB};class wA{constructor(A=0,I=0){wA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Vg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,Q=this.y-A.y;return this.x=B*g-Q*C+A.x,this.y=B*C+Q*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class LI{constructor(A,I,g,C,B,Q,E,o,t){LI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,Q,E,o,t)}set(A,I,g,C,B,Q,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=Q,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],r=g[8],c=C[0],D=C[3],h=C[6],w=C[1],l=C[4],S=C[7],U=C[2],k=C[5],y=C[8];return B[0]=Q*c+E*w+o*U,B[3]=Q*D+E*l+o*k,B[6]=Q*h+E*S+o*y,B[1]=t*c+e*w+a*U,B[4]=t*D+e*l+a*k,B[7]=t*h+e*S+a*y,B[2]=s*c+n*w+r*U,B[5]=s*D+n*l+r*k,B[8]=s*h+n*S+r*y,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*Q*e-I*E*t-g*B*e+g*E*o+C*B*t-C*Q*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*Q-E*t,s=E*o-e*B,n=t*B-Q*o,r=I*a+g*s+C*n;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/r;return A[0]=a*c,A[1]=(C*t-e*g)*c,A[2]=(E*g-C*Q)*c,A[3]=s*c,A[4]=(e*I-C*o)*c,A[5]=(C*B-E*I)*c,A[6]=n*c,A[7]=(g*o-t*I)*c,A[8]=(Q*I-g*B)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,Q,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*Q+t*E)+Q+A,-C*t,C*o,-C*(-t*Q+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(Hr.makeScale(A,I)),this}rotate(A){return this.premultiply(Hr.makeRotation(-A)),this}translate(A,I){return this.premultiply(Hr.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new LI;function uk(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}const Tp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nt(i,A){return new Tp[i](A)}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qk(){const i=Ia("canvas");return i.style.display="block",i}const Cw={};function ho(i){i in Cw||(Cw[i]=!0,console.warn(i))}const Bw=new LI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),iw=new LI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[gQ]:{transfer:je,primaries:Xe,toReference:i=>i,fromReference:i=>i},[dC]:{transfer:yg,primaries:Xe,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sa]:{transfer:je,primaries:ze,toReference:i=>i.applyMatrix3(iw),fromReference:i=>i.applyMatrix3(Bw)},[Yn]:{transfer:yg,primaries:ze,toReference:i=>i.convertSRGBToLinear().applyMatrix3(iw),fromReference:i=>i.applyMatrix3(Bw).convertLinearToSRGB()}},bp=new Set([gQ,Sa]),Qg={enabled:!0,_workingColorSpace:gQ,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,A,I){if(this.enabled===!1||A===I||!A||!I)return i;const g=Is[A].toReference,C=Is[I].fromReference;return C(g(i))},fromWorkingColorSpace:function(i,A){return this.convert(i,this._workingColorSpace,A)},toWorkingColorSpace:function(i,A){return this.convert(i,A,this._workingColorSpace)},getPrimaries:function(i){return Is[i].primaries},getTransfer:function(i){return i===gi?je:Is[i].transfer}};function Gt(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _o;class wc{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{_o===void 0&&(_o=Ia("canvas")),_o.width=A.width,_o.height=A.height;const g=_o.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=_o}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Ia("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let Q=0;Q<B.length;Q++)B[Q]=Gt(B[Q]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(Gt(I[g]/255)*255):I[g]=Gt(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let xp=0;class Qo{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ei(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let Q=0,E=C.length;Q<E;Q++)C[Q].isDataTexture?B.push(br(C[Q].image)):B.push(br(C[Q]))}else B=br(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class Xg extends CQ{constructor(A=Xg.DEFAULT_IMAGE,I=Xg.DEFAULT_MAPPING,g=eB,C=eB,B=mg,Q=Xi,E=qB,o=NQ,t=Xg.DEFAULT_ANISOTROPY,e=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ei(),this.name="",this.source=new Qo(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=Q,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new wA(0,0),this.repeat=new wA(1,1),this.center=new wA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new LI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pQ?dC:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==fn)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Oe:A.x=A.x-Math.floor(A.x);break;case eB:A.x=A.x<0?0:1;break;case ve:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Oe:A.y=A.y-Math.floor(A.y);break;case eB:A.y=A.y<0?0:1;break;case ve:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dC?pQ:Ve}set encoding(A){ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===pQ?dC:gi}}Xg.DEFAULT_IMAGE=null;Xg.DEFAULT_MAPPING=fn;Xg.DEFAULT_ANISOTROPY=1;class ng{constructor(A=0,I=0,g=0,C=1){ng.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C+Q[12]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*C+Q[13]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*C+Q[14]*B,this.w=Q[3]*I+Q[7]*g+Q[11]*C+Q[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],r=o[9],c=o[2],D=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-c)<.01&&Math.abs(r-D)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+c)<.1&&Math.abs(r+D)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const l=(t+1)/2,S=(n+1)/2,U=(h+1)/2,k=(e+s)/4,y=(a+c)/4,p=(r+D)/4;return l>S&&l>U?l<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(l),C=k/g,B=y/g):S>U?S<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(S),g=k/C,B=p/C):U<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(U),g=y/B,C=p/B),this.set(g,C,B,I),this}let w=Math.sqrt((D-r)*(D-r)+(a-c)*(a-c)+(s-e)*(s-e));return Math.abs(w)<.001&&(w=1),this.x=(D-r)/w,this.y=(a-c)/w,this.z=(s-e)/w,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yk extends CQ{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new ng(0,0,A,I),this.scissorTest=!1,this.viewport=new ng(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===pQ?dC:gi),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Xg(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Qo(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Yk{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Ln extends Xg{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=EC,this.minFilter=EC,this.wrapR=eB,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Op extends qi{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new Ln(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Sc extends Xg{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=EC,this.minFilter=EC,this.wrapR=eB,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vp extends qi{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new Sc(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Zp extends qi{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let Q=0;Q<g;Q++)this.texture[Q]=B.clone(),this.texture[Q].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class zg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,Q,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[Q+0],n=B[Q+1],r=B[Q+2],c=B[Q+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=r,A[I+3]=c;return}if(a!==c||o!==s||t!==n||e!==r){let D=1-E;const h=o*s+t*n+e*r+a*c,w=h>=0?1:-1,l=1-h*h;if(l>Number.EPSILON){const U=Math.sqrt(l),k=Math.atan2(U,h*w);D=Math.sin(D*k)/U,E=Math.sin(E*k)/U}const S=E*w;if(o=o*D+s*S,t=t*D+n*S,e=e*D+r*S,a=a*D+c*S,D===1-E){const U=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=U,t*=U,e*=U,a*=U}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,Q){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[Q],s=B[Q+1],n=B[Q+2],r=B[Q+3];return A[I]=E*r+e*a+o*n-t*s,A[I+1]=o*r+e*s+t*a-E*n,A[I+2]=t*r+e*n+E*s-o*a,A[I+3]=e*r-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,Q=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),s=o(g/2),n=o(C/2),r=o(B/2);switch(Q){case"XYZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"YXZ":this._x=s*e*a+t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"ZXY":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a-s*n*r;break;case"ZYX":this._x=s*e*a-t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a+s*n*r;break;case"YZX":this._x=s*e*a+t*n*r,this._y=t*n*a+s*e*r,this._z=t*e*r-s*n*a,this._w=t*e*a-s*n*r;break;case"XZY":this._x=s*e*a-t*n*r,this._y=t*n*a-s*e*r,this._z=t*e*r+s*n*a,this._w=t*e*a+s*n*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],Q=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(B-t)*n,this._z=(Q-C)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+Q)/n,this._z=(B+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(B-t)/n,this._x=(C+Q)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(Q-C)/n,this._x=(B+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Vg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,Q=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+Q*E+C*t-B*o,this._y=C*e+Q*o+B*E-g*t,this._z=B*e+Q*t+g*o-C*E,this._w=Q*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,Q=this._w;let E=Q*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=Q,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*Q+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=Q*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(A=0,I=0,g=0){R.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Qw.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Qw.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,Q=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*Q,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*Q,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*Q,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,Q=A.y,E=A.z,o=A.w,t=2*(Q*C-E*g),e=2*(E*I-B*C),a=2*(B*g-Q*I);return this.x=I+o*t+Q*a-E*e,this.y=g+o*e+E*t-B*a,this.z=C+o*a+B*e-Q*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,Q=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*Q-g*o,this.z=g*E-C*Q,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return xr.copy(this).projectOnVector(A),this.sub(xr)}reflect(A){return this.sub(xr.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Vg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new R,Qw=new zg;class dB{constructor(A=new R(1/0,1/0,1/0),I=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Ki.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Ki.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Ki.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let Q=0,E=B.count;Q<E;Q++)A.isMesh===!0?A.getVertexPosition(Q,Ki):Ki.fromBufferAttribute(B,Q),Ki.applyMatrix4(A.matrixWorld),this.expandByPoint(Ki);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),gs.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),gs.copy(g.boundingBox)),gs.applyMatrix4(A.matrixWorld),this.union(gs)}const C=A.children;for(let B=0,Q=C.length;B<Q;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Ki),Ki.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Be),Cs.subVectors(this.max,Be),Oo.subVectors(A.a,Be),vo.subVectors(A.b,Be),Zo.subVectors(A.c,Be),VQ.subVectors(vo,Oo),jQ.subVectors(Zo,vo),HE.subVectors(Oo,Zo);let I=[0,-VQ.z,VQ.y,0,-jQ.z,jQ.y,0,-HE.z,HE.y,VQ.z,0,-VQ.x,jQ.z,0,-jQ.x,HE.z,0,-HE.x,-VQ.y,VQ.x,0,-jQ.y,jQ.x,0,-HE.y,HE.x,0];return!_r(I,Oo,vo,Zo,Cs)||(I=[1,0,0,0,1,0,0,0,1],!_r(I,Oo,vo,Zo,Cs))?!1:(Bs.crossVectors(VQ,jQ),I=[Bs.x,Bs.y,Bs.z],_r(I,Oo,vo,Zo,Cs))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Ki).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Ki).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(aQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),aQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),aQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),aQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),aQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),aQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),aQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),aQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(aQ),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const aQ=[new R,new R,new R,new R,new R,new R,new R,new R],Ki=new R,gs=new dB,Oo=new R,vo=new R,Zo=new R,VQ=new R,jQ=new R,HE=new R,Be=new R,Cs=new R,Bs=new R,TE=new R;function _r(i,A,I,g,C){for(let B=0,Q=i.length-3;B<=Q;B+=3){TE.fromArray(i,B);const E=C.x*Math.abs(TE.x)+C.y*Math.abs(TE.y)+C.z*Math.abs(TE.z),o=A.dot(TE),t=I.dot(TE),e=g.dot(TE);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const Pp=new dB,ie=new R,Or=new R;class nB{constructor(A=new R,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Pp.setFromPoints(A).getCenter(g);let C=0;for(let B=0,Q=A.length;B<Q;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;ie.subVectors(A,this.center);const I=ie.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(ie,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Or.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(ie.copy(A.center).add(Or)),this.expandByPoint(ie.copy(A.center).sub(Or))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sQ=new R,vr=new R,is=new R,XQ=new R,Zr=new R,Qs=new R,Pr=new R;class Ko{constructor(A=new R,I=new R(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,sQ)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=sQ.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(sQ.copy(this.origin).addScaledVector(this.direction,I),sQ.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){vr.copy(A).add(I).multiplyScalar(.5),is.copy(I).sub(A).normalize(),XQ.copy(this.origin).sub(vr);const B=A.distanceTo(I)*.5,Q=-this.direction.dot(is),E=XQ.dot(this.direction),o=-XQ.dot(is),t=XQ.lengthSq(),e=Math.abs(1-Q*Q);let a,s,n,r;if(e>0)if(a=Q*o-E,s=Q*E-o,r=B*e,a>=0)if(s>=-r)if(s<=r){const c=1/e;a*=c,s*=c,n=a*(a+Q*s+2*E)+s*(Q*a+s+2*o)+t}else s=B,a=Math.max(0,-(Q*s+E)),n=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(Q*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-r?(a=Math.max(0,-(-Q*B+E)),s=a>0?-B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t):s<=r?(a=0,s=Math.min(Math.max(-B,-o),B),n=s*(s+2*o)+t):(a=Math.max(0,-(Q*B+E)),s=a>0?B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t);else s=Q>0?-B:B,a=Math.max(0,-(Q*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(vr).addScaledVector(is,s),n}intersectSphere(A,I){sQ.subVectors(A.center,this.origin);const g=sQ.dot(this.direction),C=sQ.dot(sQ)-g*g,B=A.radius*A.radius;if(C>B)return null;const Q=Math.sqrt(B-C),E=g-Q,o=g+Q;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,Q,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,Q=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,Q=(A.min.y-s.y)*e),g>Q||B>C||((B>g||isNaN(g))&&(g=B),(Q<C||isNaN(C))&&(C=Q),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,sQ)!==null}intersectTriangle(A,I,g,C,B){Zr.subVectors(I,A),Qs.subVectors(g,A),Pr.crossVectors(Zr,Qs);let Q=this.direction.dot(Pr),E;if(Q>0){if(C)return null;E=1}else if(Q<0)E=-1,Q=-Q;else return null;XQ.subVectors(this.origin,A);const o=E*this.direction.dot(Qs.crossVectors(XQ,Qs));if(o<0)return null;const t=E*this.direction.dot(Zr.cross(XQ));if(t<0||o+t>Q)return null;const e=-E*XQ.dot(Pr);return e<0?null:this.at(e/Q,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wI{constructor(A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D){wI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D)}set(A,I,g,C,B,Q,E,o,t,e,a,s,n,r,c,D){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=Q,h[9]=E,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=r,h[11]=c,h[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/Po.setFromMatrixColumn(A,0).length(),B=1/Po.setFromMatrixColumn(A,1).length(),Q=1/Po.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*Q,I[9]=g[9]*Q,I[10]=g[10]*Q,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,Q=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=Q*e,n=Q*a,r=E*e,c=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+r*t,I[5]=s-c*t,I[9]=-E*o,I[2]=c-s*t,I[6]=r+n*t,I[10]=Q*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,r=t*e,c=t*a;I[0]=s+c*E,I[4]=r*E-n,I[8]=Q*t,I[1]=Q*a,I[5]=Q*e,I[9]=-E,I[2]=n*E-r,I[6]=c+s*E,I[10]=Q*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,r=t*e,c=t*a;I[0]=s-c*E,I[4]=-Q*a,I[8]=r+n*E,I[1]=n+r*E,I[5]=Q*e,I[9]=c-s*E,I[2]=-Q*t,I[6]=E,I[10]=Q*o}else if(A.order==="ZYX"){const s=Q*e,n=Q*a,r=E*e,c=E*a;I[0]=o*e,I[4]=r*t-n,I[8]=s*t+c,I[1]=o*a,I[5]=c*t+s,I[9]=n*t-r,I[2]=-t,I[6]=E*o,I[10]=Q*o}else if(A.order==="YZX"){const s=Q*o,n=Q*t,r=E*o,c=E*t;I[0]=o*e,I[4]=c-s*a,I[8]=r*a+n,I[1]=a,I[5]=Q*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+r,I[10]=s-c*a}else if(A.order==="XZY"){const s=Q*o,n=Q*t,r=E*o,c=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+c,I[5]=Q*e,I[9]=n*a-r,I[2]=r*a-n,I[6]=E*e,I[10]=c*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Wp,A,Vp)}lookAt(A,I,g){const C=this.elements;return jB.subVectors(A,I),jB.lengthSq()===0&&(jB.z=1),jB.normalize(),zQ.crossVectors(g,jB),zQ.lengthSq()===0&&(Math.abs(g.z)===1?jB.x+=1e-4:jB.z+=1e-4,jB.normalize(),zQ.crossVectors(g,jB)),zQ.normalize(),Es.crossVectors(jB,zQ),C[0]=zQ.x,C[4]=Es.x,C[8]=jB.x,C[1]=zQ.y,C[5]=Es.y,C[9]=jB.y,C[2]=zQ.z,C[6]=Es.z,C[10]=jB.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],r=g[2],c=g[6],D=g[10],h=g[14],w=g[3],l=g[7],S=g[11],U=g[15],k=C[0],y=C[4],p=C[8],q=C[12],M=C[1],N=C[5],L=C[9],x=C[13],b=C[2],P=C[6],v=C[10],z=C[14],CA=C[3],gA=C[7],DA=C[11],lA=C[15];return B[0]=Q*k+E*M+o*b+t*CA,B[4]=Q*y+E*N+o*P+t*gA,B[8]=Q*p+E*L+o*v+t*DA,B[12]=Q*q+E*x+o*z+t*lA,B[1]=e*k+a*M+s*b+n*CA,B[5]=e*y+a*N+s*P+n*gA,B[9]=e*p+a*L+s*v+n*DA,B[13]=e*q+a*x+s*z+n*lA,B[2]=r*k+c*M+D*b+h*CA,B[6]=r*y+c*N+D*P+h*gA,B[10]=r*p+c*L+D*v+h*DA,B[14]=r*q+c*x+D*z+h*lA,B[3]=w*k+l*M+S*b+U*CA,B[7]=w*y+l*N+S*P+U*gA,B[11]=w*p+l*L+S*v+U*DA,B[15]=w*q+l*x+S*z+U*lA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],Q=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],r=A[3],c=A[7],D=A[11],h=A[15];return r*(+B*o*a-C*t*a-B*E*s+g*t*s+C*E*n-g*o*n)+c*(+I*o*n-I*t*s+B*Q*s-C*Q*n+C*t*e-B*o*e)+D*(+I*t*a-I*E*n-B*Q*a+g*Q*n+B*E*e-g*t*e)+h*(-C*E*e-I*o*a+I*E*s+C*Q*a-g*Q*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],r=A[12],c=A[13],D=A[14],h=A[15],w=a*D*t-c*s*t+c*o*n-E*D*n-a*o*h+E*s*h,l=r*s*t-e*D*t-r*o*n+Q*D*n+e*o*h-Q*s*h,S=e*c*t-r*a*t+r*E*n-Q*c*n-e*E*h+Q*a*h,U=r*a*o-e*c*o-r*E*s+Q*c*s+e*E*D-Q*a*D,k=I*w+g*l+C*S+B*U;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/k;return A[0]=w*y,A[1]=(c*s*B-a*D*B-c*C*n+g*D*n+a*C*h-g*s*h)*y,A[2]=(E*D*B-c*o*B+c*C*t-g*D*t-E*C*h+g*o*h)*y,A[3]=(a*o*B-E*s*B-a*C*t+g*s*t+E*C*n-g*o*n)*y,A[4]=l*y,A[5]=(e*D*B-r*s*B+r*C*n-I*D*n-e*C*h+I*s*h)*y,A[6]=(r*o*B-Q*D*B-r*C*t+I*D*t+Q*C*h-I*o*h)*y,A[7]=(Q*s*B-e*o*B+e*C*t-I*s*t-Q*C*n+I*o*n)*y,A[8]=S*y,A[9]=(r*a*B-e*c*B-r*g*n+I*c*n+e*g*h-I*a*h)*y,A[10]=(Q*c*B-r*E*B+r*g*t-I*c*t-Q*g*h+I*E*h)*y,A[11]=(e*E*B-Q*a*B-e*g*t+I*a*t+Q*g*n-I*E*n)*y,A[12]=U*y,A[13]=(e*c*C-r*a*C+r*g*s-I*c*s-e*g*D+I*a*D)*y,A[14]=(r*E*C-Q*c*C-r*g*o+I*c*o+Q*g*D-I*E*D)*y,A[15]=(Q*a*C-e*E*C+e*g*o-I*a*o-Q*g*s+I*E*s)*y,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,Q=A.x,E=A.y,o=A.z,t=B*Q,e=B*E;return this.set(t*Q+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*Q,0,t*o-C*E,e*o+C*Q,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,Q){return this.set(1,g,B,0,A,1,Q,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,Q=I._y,E=I._z,o=I._w,t=B+B,e=Q+Q,a=E+E,s=B*t,n=B*e,r=B*a,c=Q*e,D=Q*a,h=E*a,w=o*t,l=o*e,S=o*a,U=g.x,k=g.y,y=g.z;return C[0]=(1-(c+h))*U,C[1]=(n+S)*U,C[2]=(r-l)*U,C[3]=0,C[4]=(n-S)*k,C[5]=(1-(s+h))*k,C[6]=(D+w)*k,C[7]=0,C[8]=(r+l)*y,C[9]=(D-w)*y,C[10]=(1-(s+c))*y,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=Po.set(C[0],C[1],C[2]).length();const Q=Po.set(C[4],C[5],C[6]).length(),E=Po.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],Fi.copy(this);const t=1/B,e=1/Q,a=1/E;return Fi.elements[0]*=t,Fi.elements[1]*=t,Fi.elements[2]*=t,Fi.elements[4]*=e,Fi.elements[5]*=e,Fi.elements[6]*=e,Fi.elements[8]*=a,Fi.elements[9]*=a,Fi.elements[10]*=a,I.setFromRotationMatrix(Fi),g.x=B,g.y=Q,g.z=E,this}makePerspective(A,I,g,C,B,Q,E=zi){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,r;if(E===zi)n=-(Q+B)/(Q-B),r=-2*Q*B/(Q-B);else if(E===Aa)n=-Q/(Q-B),r=-Q*B/(Q-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,Q,E=zi){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(Q-B),s=(I+A)*t,n=(g+C)*e;let r,c;if(E===zi)r=(Q+B)*a,c=-2*a;else if(E===Aa)r=B*a,c=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=c,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const Po=new R,Fi=new wI,Wp=new R(0,0,0),Vp=new R(1,1,1),zQ=new R,Es=new R,jB=new R,Ew=new wI,ow=new zg;class Fo{constructor(A=0,I=0,g=0,C=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],Q=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(Vg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-Q,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-Vg(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(Vg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-Q,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-Vg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-Q,t));break;case"YZX":this._z=Math.asin(Vg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-Vg(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ew.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ew,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return ow.setFromEuler(this),this.setFromQuaternion(ow,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class mn{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let jp=0;const tw=new R,Wo=new zg,nQ=new wI,os=new R,Qe=new R,Xp=new R,zp=new zg,ew=new R(1,0,0),aw=new R(0,1,0),sw=new R(0,0,1),$p={type:"added"},AK={type:"removed"};class XI extends CQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=XI.DEFAULT_UP.clone();const A=new R,I=new Fo,g=new zg,C=new R(1,1,1);function B(){g.setFromEuler(I,!1)}function Q(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new wI},normalMatrix:{value:new LI}}),this.matrix=new wI,this.matrixWorld=new wI,this.matrixAutoUpdate=XI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=XI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return Wo.setFromAxisAngle(A,I),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(A,I){return Wo.setFromAxisAngle(A,I),this.quaternion.premultiply(Wo),this}rotateX(A){return this.rotateOnAxis(ew,A)}rotateY(A){return this.rotateOnAxis(aw,A)}rotateZ(A){return this.rotateOnAxis(sw,A)}translateOnAxis(A,I){return tw.copy(A).applyQuaternion(this.quaternion),this.position.add(tw.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(ew,A)}translateY(A){return this.translateOnAxis(aw,A)}translateZ(A){return this.translateOnAxis(sw,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(nQ.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?os.copy(A):os.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),Qe.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nQ.lookAt(Qe,os,this.up):nQ.lookAt(os,Qe,this.up),this.quaternion.setFromRotationMatrix(nQ),C&&(nQ.extractRotation(C.matrixWorld),Wo.setFromRotationMatrix(nQ),this.quaternion.premultiply(Wo.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent($p)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(AK)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),nQ.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),nQ.multiply(A.parent.matrixWorld)),A.applyMatrix4(nQ),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,Q=C.length;B<Q;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qe,A,Xp),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qe,zp,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,Q=C.length;B<Q;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=Q(A.geometries),o=Q(A.materials),t=Q(A.textures),e=Q(A.images),a=Q(A.shapes),s=Q(A.skeletons),n=Q(A.animations),r=Q(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),r.length>0&&(g.nodes=r)}return g.object=C,g;function Q(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}XI.DEFAULT_UP=new R(0,1,0);XI.DEFAULT_MATRIX_AUTO_UPDATE=!0;XI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new R,rQ=new R,Wr=new R,DQ=new R,Vo=new R,jo=new R,nw=new R,Vr=new R,jr=new R,Xr=new R;class Ci{constructor(A=new R,I=new R,g=new R){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),di.subVectors(A,I),C.cross(di);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){di.subVectors(C,I),rQ.subVectors(g,I),Wr.subVectors(A,I);const Q=di.dot(di),E=di.dot(rQ),o=di.dot(Wr),t=rQ.dot(rQ),e=rQ.dot(Wr),a=Q*t-E*E;if(a===0)return B.set(0,0,0),null;const s=1/a,n=(t*o-E*e)*s,r=(Q*e-E*o)*s;return B.set(1-n-r,r,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,DQ)===null?!1:DQ.x>=0&&DQ.y>=0&&DQ.x+DQ.y<=1}static getInterpolation(A,I,g,C,B,Q,E,o){return this.getBarycoord(A,I,g,C,DQ)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,DQ.x),o.addScaledVector(Q,DQ.y),o.addScaledVector(E,DQ.z),o)}static isFrontFacing(A,I,g,C){return di.subVectors(g,I),rQ.subVectors(A,I),di.cross(rQ).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return di.subVectors(this.c,this.b),rQ.subVectors(this.a,this.b),di.cross(rQ).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Ci.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Ci.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return Ci.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return Ci.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Ci.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let Q,E;Vo.subVectors(C,g),jo.subVectors(B,g),Vr.subVectors(A,g);const o=Vo.dot(Vr),t=jo.dot(Vr);if(o<=0&&t<=0)return I.copy(g);jr.subVectors(A,C);const e=Vo.dot(jr),a=jo.dot(jr);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return Q=o/(o-e),I.copy(g).addScaledVector(Vo,Q);Xr.subVectors(A,B);const n=Vo.dot(Xr),r=jo.dot(Xr);if(r>=0&&n<=r)return I.copy(B);const c=n*t-o*r;if(c<=0&&t>=0&&r<=0)return E=t/(t-r),I.copy(g).addScaledVector(jo,E);const D=e*r-n*a;if(D<=0&&a-e>=0&&n-r>=0)return nw.subVectors(B,C),E=(a-e)/(a-e+(n-r)),I.copy(C).addScaledVector(nw,E);const h=1/(D+c+s);return Q=c*h,E=s*h,I.copy(g).addScaledVector(Vo,Q).addScaledVector(jo,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Lk={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$Q={h:0,s:0,l:0},ts={h:0,s:0,l:0};function zr(i,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?i+(A-i)*6*I:I<1/2?A:I<2/3?i+(A-i)*6*(2/3-I):i}class vA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=dC){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,Qg.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=Qg.workingColorSpace){return this.r=A,this.g=I,this.b=g,Qg.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=Qg.workingColorSpace){if(A=lc(A,1),I=Vg(I,0,1),g=Vg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,Q=2*g-B;this.r=zr(Q,B,A+1/3),this.g=zr(Q,B,A),this.b=zr(Q,B,A-1/3)}return Qg.toWorkingColorSpace(this,C),this}setStyle(A,I=dC){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const Q=C[1],E=C[2];switch(Q){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],Q=B.length;if(Q===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(Q===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=dC){const g=Lk[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Gt(A.r),this.g=Gt(A.g),this.b=Gt(A.b),this}copyLinearToSRGB(A){return this.r=Tr(A.r),this.g=Tr(A.g),this.b=Tr(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=dC){return Qg.fromWorkingColorSpace(QB.copy(this),A),Math.round(Vg(QB.r*255,0,255))*65536+Math.round(Vg(QB.g*255,0,255))*256+Math.round(Vg(QB.b*255,0,255))}getHexString(A=dC){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=Qg.workingColorSpace){Qg.fromWorkingColorSpace(QB.copy(this),I);const g=QB.r,C=QB.g,B=QB.b,Q=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+Q)/2;if(E===Q)o=0,t=0;else{const a=Q-E;switch(t=e<=.5?a/(Q+E):a/(2-Q-E),Q){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=Qg.workingColorSpace){return Qg.fromWorkingColorSpace(QB.copy(this),I),A.r=QB.r,A.g=QB.g,A.b=QB.b,A}getStyle(A=dC){Qg.fromWorkingColorSpace(QB.copy(this),A);const I=QB.r,g=QB.g,C=QB.b;return A!==dC?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL($Q),this.setHSL($Q.h+A,$Q.s+I,$Q.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL($Q),A.getHSL(ts);const g=Fe($Q.h,ts.h,I),C=Fe($Q.s,ts.s,I),B=Fe($Q.l,ts.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const QB=new vA;vA.NAMES=Lk;let IK=0;class rB extends CQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IK++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ro,this.side=dQ,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rn,this.blendDst=Dn,this.blendEquation=iE,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vA(0,0,0),this.blendAlpha=0,this.depthFunc=be,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$E,this.stencilZFail=$E,this.stencilZPass=$E,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(g.blending=this.blending),this.side!==dQ&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==rn&&(g.blendSrc=this.blendSrc),this.blendDst!==Dn&&(g.blendDst=this.blendDst),this.blendEquation!==iE&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==be&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$E&&(g.stencilFail=this.stencilFail),this.stencilZFail!==$E&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==$E&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const Q=[];for(const E in B){const o=B[E];delete o.metadata,Q.push(o)}return Q}if(I){const B=C(A.textures),Q=C(A.images);B.length>0&&(g.textures=B),Q.length>0&&(g.images=Q)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class yE extends rB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const GQ=gK();function gK(){const i=new ArrayBuffer(4),A=new Float32Array(i),I=new Uint32Array(i),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),Q=new Uint32Array(64),E=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,B[o]=t|e}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)Q[o]=o<<23;Q[31]=1199570944,Q[32]=2147483648;for(let o=33;o<63;++o)Q[o]=2147483648+(o-32<<23);Q[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(E[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:Q,offsetTable:E}}function uB(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Vg(i,-65504,65504),GQ.floatView[0]=i;const A=GQ.uint32View[0],I=A>>23&511;return GQ.baseTable[I]+((A&8388607)>>GQ.shiftTable[I])}function le(i){const A=i>>10;return GQ.uint32View[0]=GQ.mantissaTable[GQ.offsetTable[A]+(i&1023)]+GQ.exponentTable[A],GQ.floatView[0]}const CK={toHalfFloat:uB,fromHalfFloat:le},rC=new R,es=new wA;class PI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=$e,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return ho("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)es.fromBufferAttribute(this,I),es.applyMatrix3(A),this.setXY(I,es.x,es.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)rC.fromBufferAttribute(this,I),rC.applyMatrix3(A),this.setXYZ(I,rC.x,rC.y,rC.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)rC.fromBufferAttribute(this,I),rC.applyMatrix4(A),this.setXYZ(I,rC.x,rC.y,rC.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)rC.fromBufferAttribute(this,I),rC.applyNormalMatrix(A),this.setXYZ(I,rC.x,rC.y,rC.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)rC.fromBufferAttribute(this,I),rC.transformDirection(A),this.setXYZ(I,rC.x,rC.y,rC.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=KB(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=uI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=KB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=KB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=KB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=KB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==$e&&(A.usage=this.usage),A}}class BK extends PI{constructor(A,I,g){super(new Int8Array(A),I,g)}}class iK extends PI{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class QK extends PI{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class EK extends PI{constructor(A,I,g){super(new Int16Array(A),I,g)}}class Gc extends PI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class oK extends PI{constructor(A,I,g){super(new Int32Array(A),I,g)}}class yc extends PI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class tK extends PI{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=le(this.array[A*this.itemSize]);return this.normalized&&(I=KB(I,this.array)),I}setX(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize]=uB(I),this}getY(A){let I=le(this.array[A*this.itemSize+1]);return this.normalized&&(I=KB(I,this.array)),I}setY(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+1]=uB(I),this}getZ(A){let I=le(this.array[A*this.itemSize+2]);return this.normalized&&(I=KB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+2]=uB(I),this}getW(A){let I=le(this.array[A*this.itemSize+3]);return this.normalized&&(I=KB(I,this.array)),I}setW(A,I){return this.normalized&&(I=uI(I,this.array)),this.array[A*this.itemSize+3]=uB(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array)),this.array[A+0]=uB(I),this.array[A+1]=uB(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array)),this.array[A+0]=uB(I),this.array[A+1]=uB(g),this.array[A+2]=uB(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=uI(I,this.array),g=uI(g,this.array),C=uI(C,this.array),B=uI(B,this.array)),this.array[A+0]=uB(I),this.array[A+1]=uB(g),this.array[A+2]=uB(C),this.array[A+3]=uB(B),this}}class QI extends PI{constructor(A,I,g){super(new Float32Array(A),I,g)}}class eK extends PI{constructor(A,I,g){super(new Float64Array(A),I,g)}}let aK=0;const ri=new wI,$r=new XI,Xo=new R,XB=new dB,Ee=new dB,TC=new R;class YI extends CQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aK++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(uk(A)?yc:Gc)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new LI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ri.makeRotationFromQuaternion(A),this.applyMatrix4(ri),this}rotateX(A){return ri.makeRotationX(A),this.applyMatrix4(ri),this}rotateY(A){return ri.makeRotationY(A),this.applyMatrix4(ri),this}rotateZ(A){return ri.makeRotationZ(A),this.applyMatrix4(ri),this}translate(A,I,g){return ri.makeTranslation(A,I,g),this.applyMatrix4(ri),this}scale(A,I,g){return ri.makeScale(A,I,g),this.applyMatrix4(ri),this}lookAt(A){return $r.lookAt(A),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new QI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];XB.setFromBufferAttribute(B),this.morphTargetsRelative?(TC.addVectors(this.boundingBox.min,XB.min),this.boundingBox.expandByPoint(TC),TC.addVectors(this.boundingBox.max,XB.max),this.boundingBox.expandByPoint(TC)):(this.boundingBox.expandByPoint(XB.min),this.boundingBox.expandByPoint(XB.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(A){const g=this.boundingSphere.center;if(XB.setFromBufferAttribute(A),I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B];Ee.setFromBufferAttribute(E),this.morphTargetsRelative?(TC.addVectors(XB.min,Ee.min),XB.expandByPoint(TC),TC.addVectors(XB.max,Ee.max),XB.expandByPoint(TC)):(XB.expandByPoint(Ee.min),XB.expandByPoint(Ee.max))}XB.getCenter(g);let C=0;for(let B=0,Q=A.count;B<Q;B++)TC.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(TC));if(I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)TC.fromBufferAttribute(E,t),o&&(Xo.fromBufferAttribute(A,t),TC.add(Xo)),C=Math.max(C,g.distanceToSquared(TC))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,Q=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new PI(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let M=0;M<E;M++)t[M]=new R,e[M]=new R;const a=new R,s=new R,n=new R,r=new wA,c=new wA,D=new wA,h=new R,w=new R;function l(M,N,L){a.fromArray(C,M*3),s.fromArray(C,N*3),n.fromArray(C,L*3),r.fromArray(Q,M*2),c.fromArray(Q,N*2),D.fromArray(Q,L*2),s.sub(a),n.sub(a),c.sub(r),D.sub(r);const x=1/(c.x*D.y-D.x*c.y);isFinite(x)&&(h.copy(s).multiplyScalar(D.y).addScaledVector(n,-c.y).multiplyScalar(x),w.copy(n).multiplyScalar(c.x).addScaledVector(s,-D.x).multiplyScalar(x),t[M].add(h),t[N].add(h),t[L].add(h),e[M].add(w),e[N].add(w),e[L].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:g.length}]);for(let M=0,N=S.length;M<N;++M){const L=S[M],x=L.start,b=L.count;for(let P=x,v=x+b;P<v;P+=3)l(g[P+0],g[P+1],g[P+2])}const U=new R,k=new R,y=new R,p=new R;function q(M){y.fromArray(B,M*3),p.copy(y);const N=t[M];U.copy(N),U.sub(y.multiplyScalar(y.dot(N))).normalize(),k.crossVectors(p,N);const x=k.dot(e[M])<0?-1:1;o[M*4]=U.x,o[M*4+1]=U.y,o[M*4+2]=U.z,o[M*4+3]=x}for(let M=0,N=S.length;M<N;++M){const L=S[M],x=L.start,b=L.count;for(let P=x,v=x+b;P<v;P+=3)q(g[P+0]),q(g[P+1]),q(g[P+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new PI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new R,B=new R,Q=new R,E=new R,o=new R,t=new R,e=new R,a=new R;if(A)for(let s=0,n=A.count;s<n;s+=3){const r=A.getX(s+0),c=A.getX(s+1),D=A.getX(s+2);C.fromBufferAttribute(I,r),B.fromBufferAttribute(I,c),Q.fromBufferAttribute(I,D),e.subVectors(Q,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,r),o.fromBufferAttribute(g,c),t.fromBufferAttribute(g,D),E.add(e),o.add(e),t.add(e),g.setXYZ(r,E.x,E.y,E.z),g.setXYZ(c,o.x,o.y,o.z),g.setXYZ(D,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),Q.fromBufferAttribute(I,s+2),e.subVectors(Q,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)TC.fromBufferAttribute(A,I),TC.normalize(),A.setXYZ(I,TC.x,TC.y,TC.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,r=0;for(let c=0,D=o.length;c<D;c++){E.isInterleavedBufferAttribute?n=o[c]*E.data.stride+E.offset:n=o[c]*e;for(let h=0;h<e;h++)s[r++]=t[n++]}return new PI(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new YI,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let E=0,o=Q.length;E<o;E++){const t=Q[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let t=0,e=Q.length;t<e;t++){const a=Q[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rw=new wI,bE=new Ko,as=new nB,Dw=new R,zo=new R,$o=new R,At=new R,AD=new R,ss=new R,ns=new wA,rs=new wA,Ds=new wA,hw=new R,cw=new R,lw=new R,hs=new R,cs=new R;class oC extends XI{constructor(A=new YI,I=new yE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=C.length;B<Q;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,Q=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){ss.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(AD.fromBufferAttribute(a,A),Q?ss.addScaledVector(AD,e):ss.addScaledVector(AD.sub(I),e))}I.add(ss)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),as.copy(g.boundingSphere),as.applyMatrix4(B),bE.copy(A.ray).recast(A.near),!(as.containsPoint(bE.origin)===!1&&(bE.intersectSphere(as,Dw)===null||bE.origin.distanceToSquared(Dw)>(A.far-A.near)**2))&&(rw.copy(B).invert(),bE.copy(A.ray).applyMatrix4(rw),!(g.boundingBox!==null&&bE.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,bE)))}_computeIntersections(A,I,g){let C;const B=this.geometry,Q=this.material,E=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(Q))for(let r=0,c=s.length;r<c;r++){const D=s[r],h=Q[D.materialIndex],w=Math.max(D.start,n.start),l=Math.min(E.count,Math.min(D.start+D.count,n.start+n.count));for(let S=w,U=l;S<U;S+=3){const k=E.getX(S),y=E.getX(S+1),p=E.getX(S+2);C=ls(this,h,A,g,t,e,a,k,y,p),C&&(C.faceIndex=Math.floor(S/3),C.face.materialIndex=D.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(E.count,n.start+n.count);for(let D=r,h=c;D<h;D+=3){const w=E.getX(D),l=E.getX(D+1),S=E.getX(D+2);C=ls(this,Q,A,g,t,e,a,w,l,S),C&&(C.faceIndex=Math.floor(D/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(Q))for(let r=0,c=s.length;r<c;r++){const D=s[r],h=Q[D.materialIndex],w=Math.max(D.start,n.start),l=Math.min(o.count,Math.min(D.start+D.count,n.start+n.count));for(let S=w,U=l;S<U;S+=3){const k=S,y=S+1,p=S+2;C=ls(this,h,A,g,t,e,a,k,y,p),C&&(C.faceIndex=Math.floor(S/3),C.face.materialIndex=D.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),c=Math.min(o.count,n.start+n.count);for(let D=r,h=c;D<h;D+=3){const w=D,l=D+1,S=D+2;C=ls(this,Q,A,g,t,e,a,w,l,S),C&&(C.faceIndex=Math.floor(D/3),I.push(C))}}}}function sK(i,A,I,g,C,B,Q,E){let o;if(A.side===FB?o=g.intersectTriangle(Q,B,C,!0,E):o=g.intersectTriangle(C,B,Q,A.side===dQ,E),o===null)return null;cs.copy(E),cs.applyMatrix4(i.matrixWorld);const t=I.ray.origin.distanceTo(cs);return t<I.near||t>I.far?null:{distance:t,point:cs.clone(),object:i}}function ls(i,A,I,g,C,B,Q,E,o,t){i.getVertexPosition(E,zo),i.getVertexPosition(o,$o),i.getVertexPosition(t,At);const e=sK(i,A,I,g,zo,$o,At,hs);if(e){C&&(ns.fromBufferAttribute(C,E),rs.fromBufferAttribute(C,o),Ds.fromBufferAttribute(C,t),e.uv=Ci.getInterpolation(hs,zo,$o,At,ns,rs,Ds,new wA)),B&&(ns.fromBufferAttribute(B,E),rs.fromBufferAttribute(B,o),Ds.fromBufferAttribute(B,t),e.uv1=Ci.getInterpolation(hs,zo,$o,At,ns,rs,Ds,new wA),e.uv2=e.uv1),Q&&(hw.fromBufferAttribute(Q,E),cw.fromBufferAttribute(Q,o),lw.fromBufferAttribute(Q,t),e.normal=Ci.getInterpolation(hs,zo,$o,At,hw,cw,lw,new R),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:o,c:t,normal:new R,materialIndex:0};Ci.getNormal(zo,$o,At,a.normal),e.face=a}return e}class Ro extends YI{constructor(A=1,I=1,g=1,C=1,B=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:Q};const E=this;C=Math.floor(C),B=Math.floor(B),Q=Math.floor(Q);const o=[],t=[],e=[],a=[];let s=0,n=0;r("z","y","x",-1,-1,g,I,A,Q,B,0),r("z","y","x",1,-1,g,I,-A,Q,B,1),r("x","z","y",1,1,A,g,I,C,Q,2),r("x","z","y",1,-1,A,g,-I,C,Q,3),r("x","y","z",1,-1,A,I,g,C,B,4),r("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new QI(t,3)),this.setAttribute("normal",new QI(e,3)),this.setAttribute("uv",new QI(a,2));function r(c,D,h,w,l,S,U,k,y,p,q){const M=S/y,N=U/p,L=S/2,x=U/2,b=k/2,P=y+1,v=p+1;let z=0,CA=0;const gA=new R;for(let DA=0;DA<v;DA++){const lA=DA*N-x;for(let YA=0;YA<P;YA++){const iI=YA*M-L;gA[c]=iI*w,gA[D]=lA*l,gA[h]=b,t.push(gA.x,gA.y,gA.z),gA[c]=0,gA[D]=0,gA[h]=k>0?1:-1,e.push(gA.x,gA.y,gA.z),a.push(YA/y),a.push(1-DA/p),z+=1}}for(let DA=0;DA<p;DA++)for(let lA=0;lA<y;lA++){const YA=s+lA+P*DA,iI=s+lA+P*(DA+1),sA=s+(lA+1)+P*(DA+1),pA=s+(lA+1)+P*DA;o.push(YA,iI,pA),o.push(iI,sA,pA),CA+=6}E.addGroup(n,CA,q),n+=CA,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ro(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function Ft(i){const A={};for(const I in i){A[I]={};for(const g in i[I]){const C=i[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function UB(i){const A={};for(let I=0;I<i.length;I++){const g=Ft(i[I]);for(const C in g)A[C]=g[C]}return A}function nK(i){const A=[];for(let I=0;I<i.length;I++)A.push(i[I].clone());return A}function mk(i){return i.getRenderTarget()===null?i.outputColorSpace:Qg.workingColorSpace}const Hk={clone:Ft,merge:UB};var rK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class OB extends rB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rK,this.fragmentShader=DK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Ft(A.uniforms),this.uniformsGroups=nK(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Hn extends XI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wI,this.projectionMatrix=new wI,this.projectionMatrixInverse=new wI,this.coordinateSystem=zi}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const AE=new R,ww=new wA,Sw=new wA;class _C extends Hn{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Kt*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Kt*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){AE.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(AE.x,AE.y).multiplyScalar(-A/AE.z),AE.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(AE.x,AE.y).multiplyScalar(-A/AE.z)}getViewSize(A,I){return this.getViewBounds(A,ww,Sw),I.subVectors(Sw,ww)}setViewOffset(A,I,g,C,B,Q){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(Do*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const Q=this.view;if(this.view!==null&&this.view.enabled){const o=Q.fullWidth,t=Q.fullHeight;B+=Q.offsetX*C/o,I-=Q.offsetY*g/t,C*=Q.width/o,g*=Q.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const It=-90,gt=1;class Tk extends XI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new _C(It,gt,A,I);C.layers=this.layers,this.add(C);const B=new _C(It,gt,A,I);B.layers=this.layers,this.add(B);const Q=new _C(It,gt,A,I);Q.layers=this.layers,this.add(Q);const E=new _C(It,gt,A,I);E.layers=this.layers,this.add(E);const o=new _C(It,gt,A,I);o.layers=this.layers,this.add(o);const t=new _C(It,gt,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,Q,E,o]=I;for(const t of I)this.remove(t);if(A===zi)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),Q.up.set(0,0,1),Q.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===Aa)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),Q.up.set(0,0,-1),Q.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,Q,E,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,Q),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class Ga extends Xg{constructor(A,I,g,C,B,Q,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:RQ,super(A,I,g,C,B,Q,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class bk extends qi{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===pQ?dC:gi),this.texture=new Ga(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:mg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new Ro(5,5,5),B=new OB({name:"CubemapFromEquirect",uniforms:Ft(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:FB,blending:MQ});B.uniforms.tEquirect.value=I;const Q=new oC(C,B),E=I.minFilter;return I.minFilter===Xi&&(I.minFilter=mg),new Tk(1,10,this).update(A,Q),I.minFilter=E,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(I,g,C);A.setRenderTarget(B)}}const ID=new R,hK=new R,cK=new LI;class SQ{constructor(A=new R(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=ID.subVectors(g,I).cross(hK.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(ID),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||cK.getNormalMatrix(A),C=this.coplanarPoint(ID).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xE=new nB,ws=new R;class ya{constructor(A=new SQ,I=new SQ,g=new SQ,C=new SQ,B=new SQ,Q=new SQ){this.planes=[A,I,g,C,B,Q]}set(A,I,g,C,B,Q){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(Q),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=zi){const g=this.planes,C=A.elements,B=C[0],Q=C[1],E=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],r=C[9],c=C[10],D=C[11],h=C[12],w=C[13],l=C[14],S=C[15];if(g[0].setComponents(o-B,s-t,D-n,S-h).normalize(),g[1].setComponents(o+B,s+t,D+n,S+h).normalize(),g[2].setComponents(o+Q,s+e,D+r,S+w).normalize(),g[3].setComponents(o-Q,s-e,D-r,S-w).normalize(),g[4].setComponents(o-E,s-a,D-c,S-l).normalize(),I===zi)g[5].setComponents(o+E,s+a,D+c,S+l).normalize();else if(I===Aa)g[5].setComponents(E,a,c,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),xE.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),xE.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(xE)}intersectsSprite(A){return xE.center.set(0,0,0),xE.radius=.7071067811865476,xE.applyMatrix4(A.matrixWorld),this.intersectsSphere(xE)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(ws.x=C.normal.x>0?A.max.x:A.min.x,ws.y=C.normal.y>0?A.max.y:A.min.y,ws.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(ws)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xk(){let i=null,A=!1,I=null,g=null;function C(B,Q){I(B,Q),g=i.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=i.requestAnimationFrame(C),A=!0)},stop:function(){i.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){i=B}}}function lK(i,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,r=i.createBuffer();i.bindBuffer(e,r),i.bufferData(e,a,s),t.onUploadCallback();let c;if(a instanceof Float32Array)c=i.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)c=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)c=i.SHORT;else if(a instanceof Uint32Array)c=i.UNSIGNED_INT;else if(a instanceof Int32Array)c=i.INT;else if(a instanceof Int8Array)c=i.BYTE;else if(a instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:r,type:c,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function B(t,e,a){const s=e.array,n=e._updateRange,r=e.updateRanges;if(i.bindBuffer(a,t),n.count===-1&&r.length===0&&i.bufferSubData(a,0,s),r.length!==0){for(let c=0,D=r.length;c<D;c++){const h=r[c];I?i.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):i.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}e.clearUpdateRanges()}n.count!==-1&&(I?i.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):i.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function Q(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(i.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");B(a.buffer,t,e),a.version=t.version}}return{get:Q,remove:E,update:o}}class Ht extends YI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,Q=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,s=I/o,n=[],r=[],c=[],D=[];for(let h=0;h<e;h++){const w=h*s-Q;for(let l=0;l<t;l++){const S=l*a-B;r.push(S,-w,0),c.push(0,0,1),D.push(l/E),D.push(1-h/o)}}for(let h=0;h<o;h++)for(let w=0;w<E;w++){const l=w+t*h,S=w+t*(h+1),U=w+1+t*(h+1),k=w+1+t*h;n.push(l,S,k),n.push(S,U,k)}this.setIndex(n),this.setAttribute("position",new QI(r,3)),this.setAttribute("normal",new QI(c,3)),this.setAttribute("uv",new QI(D,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ht(A.width,A.height,A.widthSegments,A.heightSegments)}}var wK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SK=`#ifdef USE_ALPHAHASH
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
#endif`,GK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UK=`#ifdef USE_AOMAP
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
#endif`,NK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pK=`#ifdef USE_BATCHING
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
#endif`,KK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RK=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JK=`#ifdef USE_IRIDESCENCE
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
#endif`,fK=`#ifdef USE_BUMPMAP
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
#endif`,uK=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xK=`#define PI 3.141592653589793
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
} // validated`,_K=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OK=`vec3 transformedNormal = objectNormal;
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
#endif`,vK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VK="gl_FragColor = linearToOutputTexel( gl_FragColor );",jK=`
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
}`,XK=`#ifdef USE_ENVMAP
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
#endif`,zK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$K=`#ifdef USE_ENVMAP
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
#endif`,AF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IF=`#ifdef USE_ENVMAP
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
#endif`,gF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QF=`#ifdef USE_GRADIENTMAP
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
}`,EF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aF=`uniform bool receiveShadow;
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
#endif`,sF=`#ifdef USE_ENVMAP
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
#endif`,nF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cF=`PhysicalMaterial material;
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
#endif`,lF=`struct PhysicalMaterial {
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
}`,wF=`
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
#endif`,SF=`#if defined( RE_IndirectDiffuse )
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
#endif`,GF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,UF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FF=`#if defined( USE_POINTS_UV )
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
#endif`,dF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fF=`#ifdef USE_MORPHNORMALS
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
#endif`,uF=`#ifdef USE_MORPHTARGETS
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
#endif`,qF=`#ifdef USE_MORPHTARGETS
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
#endif`,YF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bF=`#ifdef USE_NORMALMAP
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
#endif`,xF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_F=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$F=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cd=`float getShadowMask() {
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
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sd=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
}`,Nd=`#define DISTANCE
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
}`,pd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`uniform float scale;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,fd=`uniform vec3 diffuse;
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
}`,ud=`#define LAMBERT
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
}`,qd=`#define LAMBERT
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
}`,Yd=`#define MATCAP
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
}`,Ld=`#define MATCAP
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
}`,md=`#define NORMAL
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
}`,Hd=`#define NORMAL
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
}`,Td=`#define PHONG
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
}`,bd=`#define PHONG
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
}`,xd=`#define STANDARD
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
}`,_d=`#define STANDARD
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
}`,Od=`#define TOON
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
}`,vd=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Wd=`#include <common>
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
}`,Vd=`uniform vec3 color;
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
}`,jd=`uniform float rotation;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,DI={alphahash_fragment:wK,alphahash_pars_fragment:SK,alphamap_fragment:GK,alphamap_pars_fragment:yK,alphatest_fragment:kK,alphatest_pars_fragment:MK,aomap_fragment:UK,aomap_pars_fragment:NK,batching_pars_vertex:pK,batching_vertex:KK,begin_vertex:FK,beginnormal_vertex:dK,bsdfs:RK,iridescence_fragment:JK,bumpmap_pars_fragment:fK,clipping_planes_fragment:uK,clipping_planes_pars_fragment:qK,clipping_planes_pars_vertex:YK,clipping_planes_vertex:LK,color_fragment:mK,color_pars_fragment:HK,color_pars_vertex:TK,color_vertex:bK,common:xK,cube_uv_reflection_fragment:_K,defaultnormal_vertex:OK,displacementmap_pars_vertex:vK,displacementmap_vertex:ZK,emissivemap_fragment:PK,emissivemap_pars_fragment:WK,colorspace_fragment:VK,colorspace_pars_fragment:jK,envmap_fragment:XK,envmap_common_pars_fragment:zK,envmap_pars_fragment:$K,envmap_pars_vertex:AF,envmap_physical_pars_fragment:sF,envmap_vertex:IF,fog_vertex:gF,fog_pars_vertex:CF,fog_fragment:BF,fog_pars_fragment:iF,gradientmap_pars_fragment:QF,lightmap_fragment:EF,lightmap_pars_fragment:oF,lights_lambert_fragment:tF,lights_lambert_pars_fragment:eF,lights_pars_begin:aF,lights_toon_fragment:nF,lights_toon_pars_fragment:rF,lights_phong_fragment:DF,lights_phong_pars_fragment:hF,lights_physical_fragment:cF,lights_physical_pars_fragment:lF,lights_fragment_begin:wF,lights_fragment_maps:SF,lights_fragment_end:GF,logdepthbuf_fragment:yF,logdepthbuf_pars_fragment:kF,logdepthbuf_pars_vertex:MF,logdepthbuf_vertex:UF,map_fragment:NF,map_pars_fragment:pF,map_particle_fragment:KF,map_particle_pars_fragment:FF,metalnessmap_fragment:dF,metalnessmap_pars_fragment:RF,morphcolor_vertex:JF,morphnormal_vertex:fF,morphtarget_pars_vertex:uF,morphtarget_vertex:qF,normal_fragment_begin:YF,normal_fragment_maps:LF,normal_pars_fragment:mF,normal_pars_vertex:HF,normal_vertex:TF,normalmap_pars_fragment:bF,clearcoat_normal_fragment_begin:xF,clearcoat_normal_fragment_maps:_F,clearcoat_pars_fragment:OF,iridescence_pars_fragment:vF,opaque_fragment:ZF,packing:PF,premultiplied_alpha_fragment:WF,project_vertex:VF,dithering_fragment:jF,dithering_pars_fragment:XF,roughnessmap_fragment:zF,roughnessmap_pars_fragment:$F,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Id,shadowmap_vertex:gd,shadowmask_pars_fragment:Cd,skinbase_vertex:Bd,skinning_pars_vertex:id,skinning_vertex:Qd,skinnormal_vertex:Ed,specularmap_fragment:od,specularmap_pars_fragment:td,tonemapping_fragment:ed,tonemapping_pars_fragment:ad,transmission_fragment:sd,transmission_pars_fragment:nd,uv_pars_fragment:rd,uv_pars_vertex:Dd,uv_vertex:hd,worldpos_vertex:cd,background_vert:ld,background_frag:wd,backgroundCube_vert:Sd,backgroundCube_frag:Gd,cube_vert:yd,cube_frag:kd,depth_vert:Md,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:pd,equirect_vert:Kd,equirect_frag:Fd,linedashed_vert:dd,linedashed_frag:Rd,meshbasic_vert:Jd,meshbasic_frag:fd,meshlambert_vert:ud,meshlambert_frag:qd,meshmatcap_vert:Yd,meshmatcap_frag:Ld,meshnormal_vert:md,meshnormal_frag:Hd,meshphong_vert:Td,meshphong_frag:bd,meshphysical_vert:xd,meshphysical_frag:_d,meshtoon_vert:Od,meshtoon_frag:vd,points_vert:Zd,points_frag:Pd,shadow_vert:Wd,shadow_frag:Vd,sprite_vert:jd,sprite_frag:Xd},TA={common:{diffuse:{value:new vA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new LI},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new LI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new LI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new LI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new LI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new LI},normalScale:{value:new wA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new LI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new LI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new LI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new LI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0},uvTransform:{value:new LI}},sprite:{diffuse:{value:new vA(16777215)},opacity:{value:1},center:{value:new wA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new LI},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0}}},ui={basic:{uniforms:UB([TA.common,TA.specularmap,TA.envmap,TA.aomap,TA.lightmap,TA.fog]),vertexShader:DI.meshbasic_vert,fragmentShader:DI.meshbasic_frag},lambert:{uniforms:UB([TA.common,TA.specularmap,TA.envmap,TA.aomap,TA.lightmap,TA.emissivemap,TA.bumpmap,TA.normalmap,TA.displacementmap,TA.fog,TA.lights,{emissive:{value:new vA(0)}}]),vertexShader:DI.meshlambert_vert,fragmentShader:DI.meshlambert_frag},phong:{uniforms:UB([TA.common,TA.specularmap,TA.envmap,TA.aomap,TA.lightmap,TA.emissivemap,TA.bumpmap,TA.normalmap,TA.displacementmap,TA.fog,TA.lights,{emissive:{value:new vA(0)},specular:{value:new vA(1118481)},shininess:{value:30}}]),vertexShader:DI.meshphong_vert,fragmentShader:DI.meshphong_frag},standard:{uniforms:UB([TA.common,TA.envmap,TA.aomap,TA.lightmap,TA.emissivemap,TA.bumpmap,TA.normalmap,TA.displacementmap,TA.roughnessmap,TA.metalnessmap,TA.fog,TA.lights,{emissive:{value:new vA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:DI.meshphysical_vert,fragmentShader:DI.meshphysical_frag},toon:{uniforms:UB([TA.common,TA.aomap,TA.lightmap,TA.emissivemap,TA.bumpmap,TA.normalmap,TA.displacementmap,TA.gradientmap,TA.fog,TA.lights,{emissive:{value:new vA(0)}}]),vertexShader:DI.meshtoon_vert,fragmentShader:DI.meshtoon_frag},matcap:{uniforms:UB([TA.common,TA.bumpmap,TA.normalmap,TA.displacementmap,TA.fog,{matcap:{value:null}}]),vertexShader:DI.meshmatcap_vert,fragmentShader:DI.meshmatcap_frag},points:{uniforms:UB([TA.points,TA.fog]),vertexShader:DI.points_vert,fragmentShader:DI.points_frag},dashed:{uniforms:UB([TA.common,TA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:DI.linedashed_vert,fragmentShader:DI.linedashed_frag},depth:{uniforms:UB([TA.common,TA.displacementmap]),vertexShader:DI.depth_vert,fragmentShader:DI.depth_frag},normal:{uniforms:UB([TA.common,TA.bumpmap,TA.normalmap,TA.displacementmap,{opacity:{value:1}}]),vertexShader:DI.meshnormal_vert,fragmentShader:DI.meshnormal_frag},sprite:{uniforms:UB([TA.sprite,TA.fog]),vertexShader:DI.sprite_vert,fragmentShader:DI.sprite_frag},background:{uniforms:{uvTransform:{value:new LI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:DI.background_vert,fragmentShader:DI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:DI.backgroundCube_vert,fragmentShader:DI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:DI.cube_vert,fragmentShader:DI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:DI.equirect_vert,fragmentShader:DI.equirect_frag},distanceRGBA:{uniforms:UB([TA.common,TA.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:DI.distanceRGBA_vert,fragmentShader:DI.distanceRGBA_frag},shadow:{uniforms:UB([TA.lights,TA.fog,{color:{value:new vA(0)},opacity:{value:1}}]),vertexShader:DI.shadow_vert,fragmentShader:DI.shadow_frag}};ui.physical={uniforms:UB([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new LI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new LI},clearcoatNormalScale:{value:new wA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new LI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new LI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new LI},sheen:{value:0},sheenColor:{value:new vA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new LI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new LI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new LI},transmissionSamplerSize:{value:new wA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new LI},attenuationDistance:{value:0},attenuationColor:{value:new vA(0)},specularColor:{value:new vA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new LI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new LI},anisotropyVector:{value:new wA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new LI}}]),vertexShader:DI.meshphysical_vert,fragmentShader:DI.meshphysical_frag};const Ss={r:0,b:0,g:0};function zd(i,A,I,g,C,B,Q){const E=new vA(0);let o=B===!0?0:1,t,e,a=null,s=0,n=null;function r(D,h){let w=!1,l=h.isScene===!0?h.background:null;l&&l.isTexture&&(l=(h.backgroundBlurriness>0?I:A).get(l)),l===null?c(E,o):l&&l.isColor&&(c(l,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?g.buffers.color.setClear(0,0,0,1,Q):S==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,Q),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),l&&(l.isCubeTexture||l.mapping===mt)?(e===void 0&&(e=new oC(new Ro(1,1,1),new OB({name:"BackgroundCubeMaterial",uniforms:Ft(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:FB,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(U,k,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=l,e.material.uniforms.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=Qg.getTransfer(l.colorSpace)!==yg,(a!==l||s!==l.version||n!==i.toneMapping)&&(e.material.needsUpdate=!0,a=l,s=l.version,n=i.toneMapping),e.layers.enableAll(),D.unshift(e,e.geometry,e.material,0,0,null)):l&&l.isTexture&&(t===void 0&&(t=new oC(new Ht(2,2),new OB({name:"BackgroundMaterial",uniforms:Ft(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:dQ,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=l,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.toneMapped=Qg.getTransfer(l.colorSpace)!==yg,l.matrixAutoUpdate===!0&&l.updateMatrix(),t.material.uniforms.uvTransform.value.copy(l.matrix),(a!==l||s!==l.version||n!==i.toneMapping)&&(t.material.needsUpdate=!0,a=l,s=l.version,n=i.toneMapping),t.layers.enableAll(),D.unshift(t,t.geometry,t.material,0,0,null))}function c(D,h){D.getRGB(Ss,mk(i)),g.buffers.color.setClear(Ss.r,Ss.g,Ss.b,h,Q)}return{getClearColor:function(){return E},setClearColor:function(D,h=1){E.set(D),o=h,c(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,c(E,o)},render:r}}function $d(i,A,I,g){const C=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),Q=g.isWebGL2||B!==null,E={},o=D(null);let t=o,e=!1;function a(b,P,v,z,CA){let gA=!1;if(Q){const DA=c(z,v,P);t!==DA&&(t=DA,n(t.object)),gA=h(b,z,v,CA),gA&&w(b,z,v,CA)}else{const DA=P.wireframe===!0;(t.geometry!==z.id||t.program!==v.id||t.wireframe!==DA)&&(t.geometry=z.id,t.program=v.id,t.wireframe=DA,gA=!0)}CA!==null&&I.update(CA,i.ELEMENT_ARRAY_BUFFER),(gA||e)&&(e=!1,p(b,P,v,z),CA!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,I.get(CA).buffer))}function s(){return g.isWebGL2?i.createVertexArray():B.createVertexArrayOES()}function n(b){return g.isWebGL2?i.bindVertexArray(b):B.bindVertexArrayOES(b)}function r(b){return g.isWebGL2?i.deleteVertexArray(b):B.deleteVertexArrayOES(b)}function c(b,P,v){const z=v.wireframe===!0;let CA=E[b.id];CA===void 0&&(CA={},E[b.id]=CA);let gA=CA[P.id];gA===void 0&&(gA={},CA[P.id]=gA);let DA=gA[z];return DA===void 0&&(DA=D(s()),gA[z]=DA),DA}function D(b){const P=[],v=[],z=[];for(let CA=0;CA<C;CA++)P[CA]=0,v[CA]=0,z[CA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:v,attributeDivisors:z,object:b,attributes:{},index:null}}function h(b,P,v,z){const CA=t.attributes,gA=P.attributes;let DA=0;const lA=v.getAttributes();for(const YA in lA)if(lA[YA].location>=0){const sA=CA[YA];let pA=gA[YA];if(pA===void 0&&(YA==="instanceMatrix"&&b.instanceMatrix&&(pA=b.instanceMatrix),YA==="instanceColor"&&b.instanceColor&&(pA=b.instanceColor)),sA===void 0||sA.attribute!==pA||pA&&sA.data!==pA.data)return!0;DA++}return t.attributesNum!==DA||t.index!==z}function w(b,P,v,z){const CA={},gA=P.attributes;let DA=0;const lA=v.getAttributes();for(const YA in lA)if(lA[YA].location>=0){let sA=gA[YA];sA===void 0&&(YA==="instanceMatrix"&&b.instanceMatrix&&(sA=b.instanceMatrix),YA==="instanceColor"&&b.instanceColor&&(sA=b.instanceColor));const pA={};pA.attribute=sA,sA&&sA.data&&(pA.data=sA.data),CA[YA]=pA,DA++}t.attributes=CA,t.attributesNum=DA,t.index=z}function l(){const b=t.newAttributes;for(let P=0,v=b.length;P<v;P++)b[P]=0}function S(b){U(b,0)}function U(b,P){const v=t.newAttributes,z=t.enabledAttributes,CA=t.attributeDivisors;v[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),CA[b]!==P&&((g.isWebGL2?i:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,P),CA[b]=P)}function k(){const b=t.newAttributes,P=t.enabledAttributes;for(let v=0,z=P.length;v<z;v++)P[v]!==b[v]&&(i.disableVertexAttribArray(v),P[v]=0)}function y(b,P,v,z,CA,gA,DA){DA===!0?i.vertexAttribIPointer(b,P,v,CA,gA):i.vertexAttribPointer(b,P,v,z,CA,gA)}function p(b,P,v,z){if(g.isWebGL2===!1&&(b.isInstancedMesh||z.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;l();const CA=z.attributes,gA=v.getAttributes(),DA=P.defaultAttributeValues;for(const lA in gA){const YA=gA[lA];if(YA.location>=0){let iI=CA[lA];if(iI===void 0&&(lA==="instanceMatrix"&&b.instanceMatrix&&(iI=b.instanceMatrix),lA==="instanceColor"&&b.instanceColor&&(iI=b.instanceColor)),iI!==void 0){const sA=iI.normalized,pA=iI.itemSize,VA=I.get(iI);if(VA===void 0)continue;const mA=VA.buffer,SA=VA.type,XA=VA.bytesPerElement,HA=g.isWebGL2===!0&&(SA===i.INT||SA===i.UNSIGNED_INT||iI.gpuType===tc);if(iI.isInterleavedBufferAttribute){const bA=iI.data,m=bA.stride,NA=iI.offset;if(bA.isInstancedInterleavedBuffer){for(let GA=0;GA<YA.locationSize;GA++)U(YA.location+GA,bA.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=bA.meshPerAttribute*bA.count)}else for(let GA=0;GA<YA.locationSize;GA++)S(YA.location+GA);i.bindBuffer(i.ARRAY_BUFFER,mA);for(let GA=0;GA<YA.locationSize;GA++)y(YA.location+GA,pA/YA.locationSize,SA,sA,m*XA,(NA+pA/YA.locationSize*GA)*XA,HA)}else{if(iI.isInstancedBufferAttribute){for(let bA=0;bA<YA.locationSize;bA++)U(YA.location+bA,iI.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=iI.meshPerAttribute*iI.count)}else for(let bA=0;bA<YA.locationSize;bA++)S(YA.location+bA);i.bindBuffer(i.ARRAY_BUFFER,mA);for(let bA=0;bA<YA.locationSize;bA++)y(YA.location+bA,pA/YA.locationSize,SA,sA,pA*XA,pA/YA.locationSize*bA*XA,HA)}}else if(DA!==void 0){const sA=DA[lA];if(sA!==void 0)switch(sA.length){case 2:i.vertexAttrib2fv(YA.location,sA);break;case 3:i.vertexAttrib3fv(YA.location,sA);break;case 4:i.vertexAttrib4fv(YA.location,sA);break;default:i.vertexAttrib1fv(YA.location,sA)}}}}k()}function q(){L();for(const b in E){const P=E[b];for(const v in P){const z=P[v];for(const CA in z)r(z[CA].object),delete z[CA];delete P[v]}delete E[b]}}function M(b){if(E[b.id]===void 0)return;const P=E[b.id];for(const v in P){const z=P[v];for(const CA in z)r(z[CA].object),delete z[CA];delete P[v]}delete E[b.id]}function N(b){for(const P in E){const v=E[P];if(v[b.id]===void 0)continue;const z=v[b.id];for(const CA in z)r(z[CA].object),delete z[CA];delete v[b.id]}}function L(){x(),e=!0,t!==o&&(t=o,n(t.object))}function x(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:q,releaseStatesOfGeometry:M,releaseStatesOfProgram:N,initAttributes:l,enableAttribute:S,disableUnusedAttributes:k}}function AR(i,A,I,g){const C=g.isWebGL2;let B;function Q(e){B=e}function E(e,a){i.drawArrays(B,e,a),I.update(a,B,1)}function o(e,a,s){if(s===0)return;let n,r;if(C)n=i,r="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[r](B,e,a,s),I.update(a,B,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let r=0;r<s;r++)this.render(e[r],a[r]);else{n.multiDrawArraysWEBGL(B,e,0,a,0,s);let r=0;for(let c=0;c<s;c++)r+=a[c];I.update(r,B,1)}}this.setMode=Q,this.render=E,this.renderInstances=o,this.renderMultiDraw=t}function IR(i,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const y=A.get("EXT_texture_filter_anisotropic");g=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const Q=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=Q||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),s=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=i.getParameter(i.MAX_TEXTURE_SIZE),r=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),l=s>0,S=Q||A.has("OES_texture_float"),U=l&&S,k=Q?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:Q,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:r,maxAttributes:c,maxVertexUniforms:D,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:l,floatFragmentTextures:S,floatVertexTextures:U,maxSamples:k}}function gR(i){const A=this;let I=null,g=0,C=!1,B=!1;const Q=new SQ,E=new LI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const r=a.clippingPlanes,c=a.clipIntersection,D=a.clipShadows,h=i.get(a);if(!C||r===null||r.length===0||B&&!D)B?e(null):t();else{const w=B?0:g,l=w*4;let S=h.clippingState||null;o.value=S,S=e(r,s,l,n);for(let U=0;U!==l;++U)S[U]=I[U];h.clippingState=S,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=w}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,r){const c=a!==null?a.length:0;let D=null;if(c!==0){if(D=o.value,r!==!0||D===null){const h=n+c*4,w=s.matrixWorldInverse;E.getNormalMatrix(w),(D===null||D.length<h)&&(D=new Float32Array(h));for(let l=0,S=n;l!==c;++l,S+=4)Q.copy(a[l]).applyMatrix4(w,E),Q.normal.toArray(D,S),D[S+3]=Q.constant}o.value=D,o.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,D}}function CR(i){let A=new WeakMap;function I(Q,E){return E===xe?Q.mapping=RQ:E===_e&&(Q.mapping=hE),Q}function g(Q){if(Q&&Q.isTexture){const E=Q.mapping;if(E===xe||E===_e)if(A.has(Q)){const o=A.get(Q).texture;return I(o,Q.mapping)}else{const o=Q.image;if(o&&o.height>0){const t=new bk(o.height);return t.fromEquirectangularTexture(i,Q),A.set(Q,t),Q.addEventListener("dispose",C),I(t.texture,Q.mapping)}else return null}}return Q}function C(Q){const E=Q.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class Tn extends Hn{constructor(A=-1,I=1,g=1,C=-1,B=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=Q,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,Q=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,Q=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,Q,E,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const rt=4,Gw=[.125,.215,.35,.446,.526,.582],go=20,gD=new Tn,yw=new vA;let CD=null,BD=0,iD=0;const Ao=(1+Math.sqrt(5))/2,Ct=1/Ao,kw=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ao,Ct),new R(0,Ao,-Ct),new R(Ct,0,Ao),new R(-Ct,0,Ao),new R(Ao,Ct,0),new R(-Ao,Ct,0)];class Mh{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){CD=this._renderer.getRenderTarget(),BD=this._renderer.getActiveCubeFace(),iD=this._renderer.getActiveMipmapLevel(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(CD,BD,iD),A.scissorTest=!1,Gs(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===RQ||A.mapping===hE?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),CD=this._renderer.getRenderTarget(),BD=this._renderer.getActiveCubeFace(),iD=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:mg,minFilter:mg,generateMipmaps:!1,type:pt,format:qB,colorSpace:gQ,depthBuffer:!1},C=Mw(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mw(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BR(B)),this._blurMaterial=iR(B,A,I)}return C}_compileMaterial(A){const I=new oC(this._lodPlanes[0],A);this._renderer.compile(I,gD)}_sceneToCubeUV(A,I,g,C){const E=new _C(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(yw),e.toneMapping=UQ,e.autoClear=!1;const n=new yE({name:"PMREM.Background",side:FB,depthWrite:!1,depthTest:!1}),r=new oC(new Ro,n);let c=!1;const D=A.background;D?D.isColor&&(n.color.copy(D),A.background=null,c=!0):(n.color.copy(yw),c=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(E.up.set(0,o[h],0),E.lookAt(t[h],0,0)):w===1?(E.up.set(0,0,o[h]),E.lookAt(0,t[h],0)):(E.up.set(0,o[h],0),E.lookAt(0,0,t[h]));const l=this._cubeSize;Gs(C,w*l,h>2?l:0,l,l),e.setRenderTarget(C),c&&e.render(r,E),e.render(A,E)}r.geometry.dispose(),r.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=D}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===RQ||A.mapping===hE;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nw()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uw());const B=C?this._cubemapMaterial:this._equirectMaterial,Q=new oC(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;Gs(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(Q,gD)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),Q=kw[(C-1)%kw.length];this._blur(A,C-1,C,B,Q)}I.autoClear=g}_blur(A,I,g,C,B){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,I,g,C,"latitudinal",B),this._halfBlur(Q,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,Q,E){const o=this._renderer,t=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new oC(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,r=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*go-1),c=B/r,D=isFinite(B)?1+Math.floor(e*c):go;D>go&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${go}`);const h=[];let w=0;for(let y=0;y<go;++y){const p=y/c,q=Math.exp(-p*p/2);h.push(q),y===0?w+=q:y<D&&(w+=2*q)}for(let y=0;y<h.length;y++)h[y]=h[y]/w;s.envMap.value=A.texture,s.samples.value=D,s.weights.value=h,s.latitudinal.value=Q==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:l}=this;s.dTheta.value=r,s.mipInt.value=l-g;const S=this._sizeLods[C],U=3*S*(C>l-rt?C-l+rt:0),k=4*(this._cubeSize-S);Gs(I,U,k,3*S,2*S),o.setRenderTarget(I),o.render(a,gD)}}function BR(i){const A=[],I=[],g=[];let C=i;const B=i-rt+1+Gw.length;for(let Q=0;Q<B;Q++){const E=Math.pow(2,C);I.push(E);let o=1/E;Q>i-rt?o=Gw[Q-i+rt-1]:Q===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,r=6,c=3,D=2,h=1,w=new Float32Array(c*r*n),l=new Float32Array(D*r*n),S=new Float32Array(h*r*n);for(let k=0;k<n;k++){const y=k%3*2/3-1,p=k>2?0:-1,q=[y,p,0,y+2/3,p,0,y+2/3,p+1,0,y,p,0,y+2/3,p+1,0,y,p+1,0];w.set(q,c*r*k),l.set(s,D*r*k);const M=[k,k,k,k,k,k];S.set(M,h*r*k)}const U=new YI;U.setAttribute("position",new PI(w,c)),U.setAttribute("uv",new PI(l,D)),U.setAttribute("faceIndex",new PI(S,h)),A.push(U),C>rt&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Mw(i,A,I){const g=new qi(i,A,I);return g.texture.mapping=mt,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function Gs(i,A,I,g,C){i.viewport.set(A,I,g,C),i.scissor.set(A,I,g,C)}function iR(i,A,I){const g=new Float32Array(go),C=new R(0,1,0);return new OB({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:kc(),fragmentShader:`

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
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function Uw(){return new OB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function Nw(){return new OB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:MQ,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function QR(i){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===xe||o===_e,e=o===RQ||o===hE;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new Mh(i)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new Mh(i));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",B),s.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function Q(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:Q}}function ER(i){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=i.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function oR(i,A,I,g){const C={},B=new WeakMap;function Q(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);for(const r in s.morphAttributes){const c=s.morphAttributes[r];for(let D=0,h=c.length;D<h;D++)A.remove(c[D])}s.removeEventListener("dispose",Q),delete C[s.id];const n=B.get(s);n&&(A.remove(n),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return C[s.id]===!0||(s.addEventListener("dispose",Q),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],i.ARRAY_BUFFER);const n=a.morphAttributes;for(const r in n){const c=n[r];for(let D=0,h=c.length;D<h;D++)A.update(c[D],i.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,r=a.attributes.position;let c=0;if(n!==null){const w=n.array;c=n.version;for(let l=0,S=w.length;l<S;l+=3){const U=w[l+0],k=w[l+1],y=w[l+2];s.push(U,k,k,y,y,U)}}else if(r!==void 0){const w=r.array;c=r.version;for(let l=0,S=w.length/3-1;l<S;l+=3){const U=l+0,k=l+1,y=l+2;s.push(U,k,k,y,y,U)}}else return;const D=new(uk(s)?yc:Gc)(s,1);D.version=c;const h=B.get(a);h&&A.remove(h),B.set(a,D)}function e(a){const s=B.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function tR(i,A,I,g){const C=g.isWebGL2;let B;function Q(n){B=n}let E,o;function t(n){E=n.type,o=n.bytesPerElement}function e(n,r){i.drawElements(B,r,E,n*o),I.update(r,B,1)}function a(n,r,c){if(c===0)return;let D,h;if(C)D=i,h="drawElementsInstanced";else if(D=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",D===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[h](B,r,E,n*o,c),I.update(r,B,c)}function s(n,r,c){if(c===0)return;const D=A.get("WEBGL_multi_draw");if(D===null)for(let h=0;h<c;h++)this.render(n[h]/o,r[h]);else{D.multiDrawElementsWEBGL(B,r,0,E,n,0,c);let h=0;for(let w=0;w<c;w++)h+=r[w];I.update(h,B,1)}}this.setMode=Q,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function eR(i){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,Q,E){switch(I.calls++,Q){case i.TRIANGLES:I.triangles+=E*(B/3);break;case i.LINES:I.lines+=E*(B/2);break;case i.LINE_STRIP:I.lines+=E*(B-1);break;case i.LINE_LOOP:I.lines+=E*B;break;case i.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function aR(i,A){return i[0]-A[0]}function sR(i,A){return Math.abs(A[1])-Math.abs(i[1])}function nR(i,A,I){const g={},C=new Float32Array(8),B=new WeakMap,Q=new ng,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,r=n!==void 0?n.length:0;let c=B.get(e);if(c===void 0||c.count!==r){let b=function(){L.dispose(),B.delete(e),e.removeEventListener("dispose",b)};c!==void 0&&c.texture.dispose();const w=e.morphAttributes.position!==void 0,l=e.morphAttributes.normal!==void 0,S=e.morphAttributes.color!==void 0,U=e.morphAttributes.position||[],k=e.morphAttributes.normal||[],y=e.morphAttributes.color||[];let p=0;w===!0&&(p=1),l===!0&&(p=2),S===!0&&(p=3);let q=e.attributes.position.count*p,M=1;q>A.maxTextureSize&&(M=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const N=new Float32Array(q*M*4*r),L=new Ln(N,q,M,r);L.type=ci,L.needsUpdate=!0;const x=p*4;for(let P=0;P<r;P++){const v=U[P],z=k[P],CA=y[P],gA=q*M*4*P;for(let DA=0;DA<v.count;DA++){const lA=DA*x;w===!0&&(Q.fromBufferAttribute(v,DA),N[gA+lA+0]=Q.x,N[gA+lA+1]=Q.y,N[gA+lA+2]=Q.z,N[gA+lA+3]=0),l===!0&&(Q.fromBufferAttribute(z,DA),N[gA+lA+4]=Q.x,N[gA+lA+5]=Q.y,N[gA+lA+6]=Q.z,N[gA+lA+7]=0),S===!0&&(Q.fromBufferAttribute(CA,DA),N[gA+lA+8]=Q.x,N[gA+lA+9]=Q.y,N[gA+lA+10]=Q.z,N[gA+lA+11]=CA.itemSize===4?Q.w:1)}}c={count:r,texture:L,size:new wA(q,M)},B.set(e,c),e.addEventListener("dispose",b)}let D=0;for(let w=0;w<s.length;w++)D+=s[w];const h=e.morphTargetsRelative?1:1-D;a.getUniforms().setValue(i,"morphTargetBaseInfluence",h),a.getUniforms().setValue(i,"morphTargetInfluences",s),a.getUniforms().setValue(i,"morphTargetsTexture",c.texture,I),a.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}else{const n=s===void 0?0:s.length;let r=g[e.id];if(r===void 0||r.length!==n){r=[];for(let l=0;l<n;l++)r[l]=[l,0];g[e.id]=r}for(let l=0;l<n;l++){const S=r[l];S[0]=l,S[1]=s[l]}r.sort(sR);for(let l=0;l<8;l++)l<n&&r[l][1]?(E[l][0]=r[l][0],E[l][1]=r[l][1]):(E[l][0]=Number.MAX_SAFE_INTEGER,E[l][1]=0);E.sort(aR);const c=e.morphAttributes.position,D=e.morphAttributes.normal;let h=0;for(let l=0;l<8;l++){const S=E[l],U=S[0],k=S[1];U!==Number.MAX_SAFE_INTEGER&&k?(c&&e.getAttribute("morphTarget"+l)!==c[U]&&e.setAttribute("morphTarget"+l,c[U]),D&&e.getAttribute("morphNormal"+l)!==D[U]&&e.setAttribute("morphNormal"+l,D[U]),C[l]=k,h+=k):(c&&e.hasAttribute("morphTarget"+l)===!0&&e.deleteAttribute("morphTarget"+l),D&&e.hasAttribute("morphNormal"+l)===!0&&e.deleteAttribute("morphNormal"+l),C[l]=0)}const w=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(i,"morphTargetBaseInfluence",w),a.getUniforms().setValue(i,"morphTargetInfluences",C)}}return{update:o}}function rR(i,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),C.get(o)!==t&&(I.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,i.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function Q(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:Q}}class Mc extends Xg{constructor(A,I,g,C,B,Q,E,o,t,e){if(e=e!==void 0?e:sE,e!==sE&&e!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===sE&&(g=yQ),g===void 0&&e===Go&&(g=aE),super(null,C,B,Q,E,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:EC,this.minFilter=o!==void 0?o:EC,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const _k=new Xg,Ok=new Mc(1,1);Ok.compareFunction=cc;const vk=new Ln,Zk=new Sc,Pk=new Ga,pw=[],Kw=[],Fw=new Float32Array(16),dw=new Float32Array(9),Rw=new Float32Array(4);function Tt(i,A,I){const g=i[0];if(g<=0||g>0)return i;const C=A*I;let B=pw[C];if(B===void 0&&(B=new Float32Array(C),pw[C]=B),A!==0){g.toArray(B,0);for(let Q=1,E=0;Q!==A;++Q)E+=I,i[Q].toArray(B,E)}return B}function JC(i,A){if(i.length!==A.length)return!1;for(let I=0,g=i.length;I<g;I++)if(i[I]!==A[I])return!1;return!0}function fC(i,A){for(let I=0,g=A.length;I<g;I++)i[I]=A[I]}function bn(i,A){let I=Kw[A];I===void 0&&(I=new Int32Array(A),Kw[A]=I);for(let g=0;g!==A;++g)I[g]=i.allocateTextureUnit();return I}function DR(i,A){const I=this.cache;I[0]!==A&&(i.uniform1f(this.addr,A),I[0]=A)}function hR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JC(I,A))return;i.uniform2fv(this.addr,A),fC(I,A)}}function cR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(i.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(JC(I,A))return;i.uniform3fv(this.addr,A),fC(I,A)}}function lR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JC(I,A))return;i.uniform4fv(this.addr,A),fC(I,A)}}function wR(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(JC(I,A))return;i.uniformMatrix2fv(this.addr,!1,A),fC(I,A)}else{if(JC(I,g))return;Rw.set(g),i.uniformMatrix2fv(this.addr,!1,Rw),fC(I,g)}}function SR(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(JC(I,A))return;i.uniformMatrix3fv(this.addr,!1,A),fC(I,A)}else{if(JC(I,g))return;dw.set(g),i.uniformMatrix3fv(this.addr,!1,dw),fC(I,g)}}function GR(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(JC(I,A))return;i.uniformMatrix4fv(this.addr,!1,A),fC(I,A)}else{if(JC(I,g))return;Fw.set(g),i.uniformMatrix4fv(this.addr,!1,Fw),fC(I,g)}}function yR(i,A){const I=this.cache;I[0]!==A&&(i.uniform1i(this.addr,A),I[0]=A)}function kR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JC(I,A))return;i.uniform2iv(this.addr,A),fC(I,A)}}function MR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JC(I,A))return;i.uniform3iv(this.addr,A),fC(I,A)}}function UR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JC(I,A))return;i.uniform4iv(this.addr,A),fC(I,A)}}function NR(i,A){const I=this.cache;I[0]!==A&&(i.uniform1ui(this.addr,A),I[0]=A)}function pR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JC(I,A))return;i.uniform2uiv(this.addr,A),fC(I,A)}}function KR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JC(I,A))return;i.uniform3uiv(this.addr,A),fC(I,A)}}function FR(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JC(I,A))return;i.uniform4uiv(this.addr,A),fC(I,A)}}function dR(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C);const B=this.type===i.SAMPLER_2D_SHADOW?Ok:_k;I.setTexture2D(A||B,C)}function RR(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Zk,C)}function JR(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Pk,C)}function fR(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||vk,C)}function uR(i){switch(i){case 5126:return DR;case 35664:return hR;case 35665:return cR;case 35666:return lR;case 35674:return wR;case 35675:return SR;case 35676:return GR;case 5124:case 35670:return yR;case 35667:case 35671:return kR;case 35668:case 35672:return MR;case 35669:case 35673:return UR;case 5125:return NR;case 36294:return pR;case 36295:return KR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return fR}}function qR(i,A){i.uniform1fv(this.addr,A)}function YR(i,A){const I=Tt(A,this.size,2);i.uniform2fv(this.addr,I)}function LR(i,A){const I=Tt(A,this.size,3);i.uniform3fv(this.addr,I)}function mR(i,A){const I=Tt(A,this.size,4);i.uniform4fv(this.addr,I)}function HR(i,A){const I=Tt(A,this.size,4);i.uniformMatrix2fv(this.addr,!1,I)}function TR(i,A){const I=Tt(A,this.size,9);i.uniformMatrix3fv(this.addr,!1,I)}function bR(i,A){const I=Tt(A,this.size,16);i.uniformMatrix4fv(this.addr,!1,I)}function xR(i,A){i.uniform1iv(this.addr,A)}function _R(i,A){i.uniform2iv(this.addr,A)}function OR(i,A){i.uniform3iv(this.addr,A)}function vR(i,A){i.uniform4iv(this.addr,A)}function ZR(i,A){i.uniform1uiv(this.addr,A)}function PR(i,A){i.uniform2uiv(this.addr,A)}function WR(i,A){i.uniform3uiv(this.addr,A)}function VR(i,A){i.uniform4uiv(this.addr,A)}function jR(i,A,I){const g=this.cache,C=A.length,B=bn(I,C);JC(g,B)||(i.uniform1iv(this.addr,B),fC(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2D(A[Q]||_k,B[Q])}function XR(i,A,I){const g=this.cache,C=A.length,B=bn(I,C);JC(g,B)||(i.uniform1iv(this.addr,B),fC(g,B));for(let Q=0;Q!==C;++Q)I.setTexture3D(A[Q]||Zk,B[Q])}function zR(i,A,I){const g=this.cache,C=A.length,B=bn(I,C);JC(g,B)||(i.uniform1iv(this.addr,B),fC(g,B));for(let Q=0;Q!==C;++Q)I.setTextureCube(A[Q]||Pk,B[Q])}function $R(i,A,I){const g=this.cache,C=A.length,B=bn(I,C);JC(g,B)||(i.uniform1iv(this.addr,B),fC(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2DArray(A[Q]||vk,B[Q])}function AJ(i){switch(i){case 5126:return qR;case 35664:return YR;case 35665:return LR;case 35666:return mR;case 35674:return HR;case 35675:return TR;case 35676:return bR;case 5124:case 35670:return xR;case 35667:case 35671:return _R;case 35668:case 35672:return OR;case 35669:case 35673:return vR;case 5125:return ZR;case 36294:return PR;case 36295:return WR;case 36296:return VR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return $R}}class IJ{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=uR(I.type)}}class gJ{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=AJ(I.type)}}class CJ{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,Q=C.length;B!==Q;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const QD=/(\w+)(\])?(\[|\.)?/g;function Jw(i,A){i.seq.push(A),i.map[A.id]=A}function BJ(i,A,I){const g=i.name,C=g.length;for(QD.lastIndex=0;;){const B=QD.exec(g),Q=QD.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&Q+2===C){Jw(I,t===void 0?new IJ(E,i,A):new gJ(E,i,A));break}else{let a=I.map[E];a===void 0&&(a=new CJ(E),Jw(I,a)),I=a}}}class Bn{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),Q=A.getUniformLocation(I,B.name);BJ(B,Q,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,Q=I.length;B!==Q;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const Q=A[C];Q.id in I&&g.push(Q)}return g}}function fw(i,A,I){const g=i.createShader(A);return i.shaderSource(g,I),i.compileShader(g),g}const iJ=37297;let QJ=0;function EJ(i,A){const I=i.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let Q=C;Q<B;Q++){const E=Q+1;g.push(`${E===A?">":" "} ${E}: ${I[Q]}`)}return g.join(`
`)}function oJ(i){const A=Qg.getPrimaries(Qg.workingColorSpace),I=Qg.getPrimaries(i);let g;switch(A===I?g="":A===ze&&I===Xe?g="LinearDisplayP3ToLinearSRGB":A===Xe&&I===ze&&(g="LinearSRGBToLinearDisplayP3"),i){case gQ:case Sa:return[g,"LinearTransferOETF"];case dC:case Yn:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[g,"LinearTransferOETF"]}}function uw(i,A,I){const g=i.getShaderParameter(A,i.COMPILE_STATUS),C=i.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const Q=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+EJ(i.getShaderSource(A),Q)}else return C}function tJ(i,A){const I=oJ(A);return`vec4 ${i}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function eJ(i,A){let I;switch(A){case Qk:I="Linear";break;case Ek:I="Reinhard";break;case ok:I="OptimizedCineon";break;case oc:I="ACESFilmic";break;case ek:I="AgX";break;case tk:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+i+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function aJ(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dt).join(`
`)}function sJ(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dt).join(`
`)}function nJ(i){const A=[];for(const I in i){const g=i[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function rJ(i,A){const I={},g=i.getProgramParameter(A,i.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=i.getActiveAttrib(A,C),Q=B.name;let E=1;B.type===i.FLOAT_MAT2&&(E=2),B.type===i.FLOAT_MAT3&&(E=3),B.type===i.FLOAT_MAT4&&(E=4),I[Q]={type:B.type,location:i.getAttribLocation(A,Q),locationSize:E}}return I}function Dt(i){return i!==""}function qw(i,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Yw(i,A){return i.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const DJ=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(i){return i.replace(DJ,cJ)}const hJ=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cJ(i,A){let I=DI[A];if(I===void 0){const g=hJ.get(A);if(g!==void 0)I=DI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Uh(I)}const lJ=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lw(i){return i.replace(lJ,wJ)}function wJ(i,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function mw(i){let A=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(A+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?A+=`
#define HIGH_PRECISION`:i.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function SJ(i){let A="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?A="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jn?A="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(A="SHADOWMAP_TYPE_VSM"),A}function GJ(i){let A="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case RQ:case hE:A="ENVMAP_TYPE_CUBE";break;case mt:A="ENVMAP_TYPE_CUBE_UV";break}return A}function yJ(i){let A="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hE:A="ENVMAP_MODE_REFRACTION";break}return A}function kJ(i){let A="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wa:A="ENVMAP_BLENDING_MULTIPLY";break;case Bk:A="ENVMAP_BLENDING_MIX";break;case ik:A="ENVMAP_BLENDING_ADD";break}return A}function MJ(i){const A=i.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function UJ(i,A,I,g){const C=i.getContext(),B=I.defines;let Q=I.vertexShader,E=I.fragmentShader;const o=SJ(I),t=GJ(I),e=yJ(I),a=kJ(I),s=MJ(I),n=I.isWebGL2?"":aJ(I),r=sJ(I),c=nJ(B),D=C.createProgram();let h,w,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(Dt).join(`
`),h.length>0&&(h+=`
`),w=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(Dt).join(`
`),w.length>0&&(w+=`
`)):(h=[mw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dt).join(`
`),w=[n,mw(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==UQ?"#define TONE_MAPPING":"",I.toneMapping!==UQ?DI.tonemapping_pars_fragment:"",I.toneMapping!==UQ?eJ("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",DI.colorspace_pars_fragment,tJ("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(Dt).join(`
`)),Q=Uh(Q),Q=qw(Q,I),Q=Yw(Q,I),E=Uh(E),E=qw(E,I),E=Yw(E,I),Q=Lw(Q),E=Lw(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=[r,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,w=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const S=l+h+Q,U=l+w+E,k=fw(C,C.VERTEX_SHADER,S),y=fw(C,C.FRAGMENT_SHADER,U);C.attachShader(D,k),C.attachShader(D,y),I.index0AttributeName!==void 0?C.bindAttribLocation(D,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(D,0,"position"),C.linkProgram(D);function p(L){if(i.debug.checkShaderErrors){const x=C.getProgramInfoLog(D).trim(),b=C.getShaderInfoLog(k).trim(),P=C.getShaderInfoLog(y).trim();let v=!0,z=!0;if(C.getProgramParameter(D,C.LINK_STATUS)===!1)if(v=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(C,D,k,y);else{const CA=uw(C,k,"vertex"),gA=uw(C,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(D,C.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+x+`
`+CA+`
`+gA)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||P==="")&&(z=!1);z&&(L.diagnostics={runnable:v,programLog:x,vertexShader:{log:b,prefix:h},fragmentShader:{log:P,prefix:w}})}C.deleteShader(k),C.deleteShader(y),q=new Bn(C,D),M=rJ(C,D)}let q;this.getUniforms=function(){return q===void 0&&p(this),q};let M;this.getAttributes=function(){return M===void 0&&p(this),M};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=C.getProgramParameter(D,iJ)),N},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(D),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=QJ++,this.cacheKey=A,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=y,this}let NJ=0;class pJ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),Q=this._getShaderCacheForMaterial(A);return Q.has(C)===!1&&(Q.add(C),C.usedTimes++),Q.has(B)===!1&&(Q.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new KJ(A),I.set(A,g)),g}}class KJ{constructor(A){this.id=NJ++,this.code=A,this.usedTimes=0}}function FJ(i,A,I,g,C,B,Q){const E=new mn,o=new pJ,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let r=C.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(M){return t.add(M),M===0?"uv":`uv${M}`}function h(M,N,L,x,b){const P=x.fog,v=b.geometry,z=M.isMeshStandardMaterial?x.environment:null,CA=(M.isMeshStandardMaterial?I:A).get(M.envMap||z),gA=CA&&CA.mapping===mt?CA.image.height:null,DA=c[M.type];M.precision!==null&&(r=C.getMaxPrecision(M.precision),r!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",r,"instead."));const lA=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,YA=lA!==void 0?lA.length:0;let iI=0;v.morphAttributes.position!==void 0&&(iI=1),v.morphAttributes.normal!==void 0&&(iI=2),v.morphAttributes.color!==void 0&&(iI=3);let sA,pA,VA,mA;if(DA){const TI=ui[DA];sA=TI.vertexShader,pA=TI.fragmentShader}else sA=M.vertexShader,pA=M.fragmentShader,o.update(M),VA=o.getVertexShaderID(M),mA=o.getFragmentShaderID(M);const SA=i.getRenderTarget(),XA=b.isInstancedMesh===!0,HA=b.isBatchedMesh===!0,bA=!!M.map,m=!!M.matcap,NA=!!CA,GA=!!M.aoMap,JA=!!M.lightMap,yA=!!M.bumpMap,gI=!!M.normalMap,xA=!!M.displacementMap,f=!!M.emissiveMap,K=!!M.metalnessMap,$=!!M.roughnessMap,dA=M.anisotropy>0,kA=M.clearcoat>0,KA=M.iridescence>0,zA=M.sheen>0,LA=M.transmission>0,jA=dA&&!!M.anisotropyMap,tI=kA&&!!M.clearcoatMap,yI=kA&&!!M.clearcoatNormalMap,MA=kA&&!!M.clearcoatRoughnessMap,bI=KA&&!!M.iridescenceMap,RI=KA&&!!M.iridescenceThicknessMap,SI=zA&&!!M.sheenColorMap,AI=zA&&!!M.sheenRoughnessMap,ZA=!!M.specularMap,NI=!!M.specularColorMap,H=!!M.specularIntensityMap,fA=LA&&!!M.transmissionMap,_A=LA&&!!M.thicknessMap,oI=!!M.gradientMap,Y=!!M.alphaMap,RA=M.alphaTest>0,UA=!!M.alphaHash,II=!!M.extensions;let $A=UQ;M.toneMapped&&(SA===null||SA.isXRRenderTarget===!0)&&($A=i.toneMapping);const xI={isWebGL2:a,shaderID:DA,shaderType:M.type,shaderName:M.name,vertexShader:sA,fragmentShader:pA,defines:M.defines,customVertexShaderID:VA,customFragmentShaderID:mA,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:r,batching:HA,instancing:XA,instancingColor:XA&&b.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:SA===null?i.outputColorSpace:SA.isXRRenderTarget===!0?SA.texture.colorSpace:gQ,alphaToCoverage:!!M.alphaToCoverage,map:bA,matcap:m,envMap:NA,envMapMode:NA&&CA.mapping,envMapCubeUVHeight:gA,aoMap:GA,lightMap:JA,bumpMap:yA,normalMap:gI,displacementMap:n&&xA,emissiveMap:f,normalMapObjectSpace:gI&&M.normalMapType===Uk,normalMapTangentSpace:gI&&M.normalMapType===GE,metalnessMap:K,roughnessMap:$,anisotropy:dA,anisotropyMap:jA,clearcoat:kA,clearcoatMap:tI,clearcoatNormalMap:yI,clearcoatRoughnessMap:MA,iridescence:KA,iridescenceMap:bI,iridescenceThicknessMap:RI,sheen:zA,sheenColorMap:SI,sheenRoughnessMap:AI,specularMap:ZA,specularColorMap:NI,specularIntensityMap:H,transmission:LA,transmissionMap:fA,thicknessMap:_A,gradientMap:oI,opaque:M.transparent===!1&&M.blending===ro&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:RA,alphaHash:UA,combine:M.combine,mapUv:bA&&D(M.map.channel),aoMapUv:GA&&D(M.aoMap.channel),lightMapUv:JA&&D(M.lightMap.channel),bumpMapUv:yA&&D(M.bumpMap.channel),normalMapUv:gI&&D(M.normalMap.channel),displacementMapUv:xA&&D(M.displacementMap.channel),emissiveMapUv:f&&D(M.emissiveMap.channel),metalnessMapUv:K&&D(M.metalnessMap.channel),roughnessMapUv:$&&D(M.roughnessMap.channel),anisotropyMapUv:jA&&D(M.anisotropyMap.channel),clearcoatMapUv:tI&&D(M.clearcoatMap.channel),clearcoatNormalMapUv:yI&&D(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:MA&&D(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bI&&D(M.iridescenceMap.channel),iridescenceThicknessMapUv:RI&&D(M.iridescenceThicknessMap.channel),sheenColorMapUv:SI&&D(M.sheenColorMap.channel),sheenRoughnessMapUv:AI&&D(M.sheenRoughnessMap.channel),specularMapUv:ZA&&D(M.specularMap.channel),specularColorMapUv:NI&&D(M.specularColorMap.channel),specularIntensityMapUv:H&&D(M.specularIntensityMap.channel),transmissionMapUv:fA&&D(M.transmissionMap.channel),thicknessMapUv:_A&&D(M.thicknessMap.channel),alphaMapUv:Y&&D(M.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(gI||dA),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!v.attributes.uv&&(bA||Y),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:b.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:YA,morphTextureStride:iI,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:$A,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bA&&M.map.isVideoTexture===!0&&Qg.getTransfer(M.map.colorSpace)===yg,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vi,flipSided:M.side===FB,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:II&&M.extensions.derivatives===!0,extensionFragDepth:II&&M.extensions.fragDepth===!0,extensionDrawBuffers:II&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:II&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:II&&M.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:II&&M.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xI.vertexUv1s=t.has(1),xI.vertexUv2s=t.has(2),xI.vertexUv3s=t.has(3),t.clear(),xI}function w(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)N.push(L),N.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(l(N,M),S(N,M),N.push(i.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function l(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function S(M,N){E.disableAll(),N.isWebGL2&&E.enable(0),N.supportsVertexTextures&&E.enable(1),N.instancing&&E.enable(2),N.instancingColor&&E.enable(3),N.matcap&&E.enable(4),N.envMap&&E.enable(5),N.normalMapObjectSpace&&E.enable(6),N.normalMapTangentSpace&&E.enable(7),N.clearcoat&&E.enable(8),N.iridescence&&E.enable(9),N.alphaTest&&E.enable(10),N.vertexColors&&E.enable(11),N.vertexAlphas&&E.enable(12),N.vertexUv1s&&E.enable(13),N.vertexUv2s&&E.enable(14),N.vertexUv3s&&E.enable(15),N.vertexTangents&&E.enable(16),N.anisotropy&&E.enable(17),N.alphaHash&&E.enable(18),N.batching&&E.enable(19),M.push(E.mask),E.disableAll(),N.fog&&E.enable(0),N.useFog&&E.enable(1),N.flatShading&&E.enable(2),N.logarithmicDepthBuffer&&E.enable(3),N.skinning&&E.enable(4),N.morphTargets&&E.enable(5),N.morphNormals&&E.enable(6),N.morphColors&&E.enable(7),N.premultipliedAlpha&&E.enable(8),N.shadowMapEnabled&&E.enable(9),N.useLegacyLights&&E.enable(10),N.doubleSided&&E.enable(11),N.flipSided&&E.enable(12),N.useDepthPacking&&E.enable(13),N.dithering&&E.enable(14),N.transmission&&E.enable(15),N.sheen&&E.enable(16),N.opaque&&E.enable(17),N.pointsUvs&&E.enable(18),N.decodeVideoTexture&&E.enable(19),N.alphaToCoverage&&E.enable(20),M.push(E.mask)}function U(M){const N=c[M.type];let L;if(N){const x=ui[N];L=Hk.clone(x.uniforms)}else L=M.uniforms;return L}function k(M,N){let L;for(let x=0,b=e.length;x<b;x++){const P=e[x];if(P.cacheKey===N){L=P,++L.usedTimes;break}}return L===void 0&&(L=new UJ(i,N,M,B),e.push(L)),L}function y(M){if(--M.usedTimes===0){const N=e.indexOf(M);e[N]=e[e.length-1],e.pop(),M.destroy()}}function p(M){o.remove(M)}function q(){o.dispose()}return{getParameters:h,getProgramCacheKey:w,getUniforms:U,acquireProgram:k,releaseProgram:y,releaseShaderCache:p,programs:e,dispose:q}}function dJ(){let i=new WeakMap;function A(B){let Q=i.get(B);return Q===void 0&&(Q={},i.set(B,Q)),Q}function I(B){i.delete(B)}function g(B,Q,E){i.get(B)[Q]=E}function C(){i=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function RJ(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.material.id!==A.material.id?i.material.id-A.material.id:i.z!==A.z?i.z-A.z:i.id-A.id}function Hw(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.z!==A.z?A.z-i.z:i.id-A.id}function Tw(){const i=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function Q(a,s,n,r,c,D){let h=i[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:r,renderOrder:a.renderOrder,z:c,group:D},i[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=r,h.renderOrder=a.renderOrder,h.z=c,h.group=D),A++,h}function E(a,s,n,r,c,D){const h=Q(a,s,n,r,c,D);n.transmission>0?g.push(h):n.transparent===!0?C.push(h):I.push(h)}function o(a,s,n,r,c,D){const h=Q(a,s,n,r,c,D);n.transmission>0?g.unshift(h):n.transparent===!0?C.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||RJ),g.length>1&&g.sort(s||Hw),C.length>1&&C.sort(s||Hw)}function e(){for(let a=A,s=i.length;a<s;a++){const n=i[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function JJ(){let i=new WeakMap;function A(g,C){const B=i.get(g);let Q;return B===void 0?(Q=new Tw,i.set(g,[Q])):C>=B.length?(Q=new Tw,B.push(Q)):Q=B[C],Q}function I(){i=new WeakMap}return{get:A,dispose:I}}function fJ(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new R,color:new vA};break;case"SpotLight":I={position:new R,direction:new R,color:new vA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new R,color:new vA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new R,skyColor:new vA,groundColor:new vA};break;case"RectAreaLight":I={color:new vA,position:new R,halfWidth:new R,halfHeight:new R};break}return i[A.id]=I,I}}}function uJ(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wA,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[A.id]=I,I}}}let qJ=0;function YJ(i,A){return(A.castShadow?2:0)-(i.castShadow?2:0)+(A.map?1:0)-(i.map?1:0)}function LJ(i,A){const I=new fJ,g=uJ(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new R);const B=new R,Q=new wI,E=new wI;function o(e,a){let s=0,n=0,r=0;for(let L=0;L<9;L++)C.probe[L].set(0,0,0);let c=0,D=0,h=0,w=0,l=0,S=0,U=0,k=0,y=0,p=0,q=0;e.sort(YJ);const M=a===!0?Math.PI:1;for(let L=0,x=e.length;L<x;L++){const b=e[L],P=b.color,v=b.intensity,z=b.distance,CA=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)s+=P.r*v*M,n+=P.g*v*M,r+=P.b*v*M;else if(b.isLightProbe){for(let gA=0;gA<9;gA++)C.probe[gA].addScaledVector(b.sh.coefficients[gA],v);q++}else if(b.isDirectionalLight){const gA=I.get(b);if(gA.color.copy(b.color).multiplyScalar(b.intensity*M),b.castShadow){const DA=b.shadow,lA=g.get(b);lA.shadowBias=DA.bias,lA.shadowNormalBias=DA.normalBias,lA.shadowRadius=DA.radius,lA.shadowMapSize=DA.mapSize,C.directionalShadow[c]=lA,C.directionalShadowMap[c]=CA,C.directionalShadowMatrix[c]=b.shadow.matrix,S++}C.directional[c]=gA,c++}else if(b.isSpotLight){const gA=I.get(b);gA.position.setFromMatrixPosition(b.matrixWorld),gA.color.copy(P).multiplyScalar(v*M),gA.distance=z,gA.coneCos=Math.cos(b.angle),gA.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),gA.decay=b.decay,C.spot[h]=gA;const DA=b.shadow;if(b.map&&(C.spotLightMap[y]=b.map,y++,DA.updateMatrices(b),b.castShadow&&p++),C.spotLightMatrix[h]=DA.matrix,b.castShadow){const lA=g.get(b);lA.shadowBias=DA.bias,lA.shadowNormalBias=DA.normalBias,lA.shadowRadius=DA.radius,lA.shadowMapSize=DA.mapSize,C.spotShadow[h]=lA,C.spotShadowMap[h]=CA,k++}h++}else if(b.isRectAreaLight){const gA=I.get(b);gA.color.copy(P).multiplyScalar(v),gA.halfWidth.set(b.width*.5,0,0),gA.halfHeight.set(0,b.height*.5,0),C.rectArea[w]=gA,w++}else if(b.isPointLight){const gA=I.get(b);if(gA.color.copy(b.color).multiplyScalar(b.intensity*M),gA.distance=b.distance,gA.decay=b.decay,b.castShadow){const DA=b.shadow,lA=g.get(b);lA.shadowBias=DA.bias,lA.shadowNormalBias=DA.normalBias,lA.shadowRadius=DA.radius,lA.shadowMapSize=DA.mapSize,lA.shadowCameraNear=DA.camera.near,lA.shadowCameraFar=DA.camera.far,C.pointShadow[D]=lA,C.pointShadowMap[D]=CA,C.pointShadowMatrix[D]=b.shadow.matrix,U++}C.point[D]=gA,D++}else if(b.isHemisphereLight){const gA=I.get(b);gA.skyColor.copy(b.color).multiplyScalar(v*M),gA.groundColor.copy(b.groundColor).multiplyScalar(v*M),C.hemi[l]=gA,l++}}w>0&&(A.isWebGL2?i.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=TA.LTC_FLOAT_1,C.rectAreaLTC2=TA.LTC_FLOAT_2):(C.rectAreaLTC1=TA.LTC_HALF_1,C.rectAreaLTC2=TA.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=TA.LTC_FLOAT_1,C.rectAreaLTC2=TA.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=TA.LTC_HALF_1,C.rectAreaLTC2=TA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=r;const N=C.hash;(N.directionalLength!==c||N.pointLength!==D||N.spotLength!==h||N.rectAreaLength!==w||N.hemiLength!==l||N.numDirectionalShadows!==S||N.numPointShadows!==U||N.numSpotShadows!==k||N.numSpotMaps!==y||N.numLightProbes!==q)&&(C.directional.length=c,C.spot.length=h,C.rectArea.length=w,C.point.length=D,C.hemi.length=l,C.directionalShadow.length=S,C.directionalShadowMap.length=S,C.pointShadow.length=U,C.pointShadowMap.length=U,C.spotShadow.length=k,C.spotShadowMap.length=k,C.directionalShadowMatrix.length=S,C.pointShadowMatrix.length=U,C.spotLightMatrix.length=k+y-p,C.spotLightMap.length=y,C.numSpotLightShadowsWithMaps=p,C.numLightProbes=q,N.directionalLength=c,N.pointLength=D,N.spotLength=h,N.rectAreaLength=w,N.hemiLength=l,N.numDirectionalShadows=S,N.numPointShadows=U,N.numSpotShadows=k,N.numSpotMaps=y,N.numLightProbes=q,C.version=qJ++)}function t(e,a){let s=0,n=0,r=0,c=0,D=0;const h=a.matrixWorldInverse;for(let w=0,l=e.length;w<l;w++){const S=e[w];if(S.isDirectionalLight){const U=C.directional[s];U.direction.setFromMatrixPosition(S.matrixWorld),B.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(B),U.direction.transformDirection(h),s++}else if(S.isSpotLight){const U=C.spot[r];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(h),U.direction.setFromMatrixPosition(S.matrixWorld),B.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(B),U.direction.transformDirection(h),r++}else if(S.isRectAreaLight){const U=C.rectArea[c];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(h),E.identity(),Q.copy(S.matrixWorld),Q.premultiply(h),E.extractRotation(Q),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),U.halfWidth.applyMatrix4(E),U.halfHeight.applyMatrix4(E),c++}else if(S.isPointLight){const U=C.point[n];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(h),n++}else if(S.isHemisphereLight){const U=C.hemi[D];U.direction.setFromMatrixPosition(S.matrixWorld),U.direction.transformDirection(h),D++}}}return{setup:o,setupView:t,state:C}}function bw(i,A){const I=new LJ(i,A),g=[],C=[];function B(){g.length=0,C.length=0}function Q(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:Q,pushShadow:E}}function mJ(i,A){let I=new WeakMap;function g(B,Q=0){const E=I.get(B);let o;return E===void 0?(o=new bw(i,A),I.set(B,[o])):Q>=E.length?(o=new bw(i,A),E.push(o)):o=E[Q],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class Uc extends rB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Nc extends rB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const HJ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TJ=`uniform sampler2D shadow_pass;
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
}`;function bJ(i,A,I){let g=new ya;const C=new wA,B=new wA,Q=new ng,E=new Uc({depthPacking:Mk}),o=new Nc,t={},e=I.maxTextureSize,a={[dQ]:FB,[FB]:dQ,[Vi]:Vi},s=new OB({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wA},radius:{value:4}},vertexShader:HJ,fragmentShader:TJ}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const r=new YI;r.setAttribute("position",new PI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new oC(r,s),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let h=this.type;this.render=function(k,y,p){if(D.enabled===!1||D.autoUpdate===!1&&D.needsUpdate===!1||k.length===0)return;const q=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(MQ),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const x=h!==Oi&&this.type===Oi,b=h===Oi&&this.type!==Oi;for(let P=0,v=k.length;P<v;P++){const z=k[P],CA=z.shadow;if(CA===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(CA.autoUpdate===!1&&CA.needsUpdate===!1)continue;C.copy(CA.mapSize);const gA=CA.getFrameExtents();if(C.multiply(gA),B.copy(CA.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/gA.x),C.x=B.x*gA.x,CA.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/gA.y),C.y=B.y*gA.y,CA.mapSize.y=B.y)),CA.map===null||x===!0||b===!0){const lA=this.type!==Oi?{minFilter:EC,magFilter:EC}:{};CA.map!==null&&CA.map.dispose(),CA.map=new qi(C.x,C.y,lA),CA.map.texture.name=z.name+".shadowMap",CA.camera.updateProjectionMatrix()}i.setRenderTarget(CA.map),i.clear();const DA=CA.getViewportCount();for(let lA=0;lA<DA;lA++){const YA=CA.getViewport(lA);Q.set(B.x*YA.x,B.y*YA.y,B.x*YA.z,B.y*YA.w),L.viewport(Q),CA.updateMatrices(z,lA),g=CA.getFrustum(),S(y,p,CA.camera,z,this.type)}CA.isPointLightShadow!==!0&&this.type===Oi&&w(CA,p),CA.needsUpdate=!1}h=this.type,D.needsUpdate=!1,i.setRenderTarget(q,M,N)};function w(k,y){const p=A.update(c);s.defines.VSM_SAMPLES!==k.blurSamples&&(s.defines.VSM_SAMPLES=k.blurSamples,n.defines.VSM_SAMPLES=k.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new qi(C.x,C.y)),s.uniforms.shadow_pass.value=k.map.texture,s.uniforms.resolution.value=k.mapSize,s.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(y,null,p,s,c,null),n.uniforms.shadow_pass.value=k.mapPass.texture,n.uniforms.resolution.value=k.mapSize,n.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(y,null,p,n,c,null)}function l(k,y,p,q){let M=null;const N=p.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(N!==void 0)M=N;else if(M=p.isPointLight===!0?o:E,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const L=M.uuid,x=y.uuid;let b=t[L];b===void 0&&(b={},t[L]=b);let P=b[x];P===void 0&&(P=M.clone(),b[x]=P,y.addEventListener("dispose",U)),M=P}if(M.visible=y.visible,M.wireframe=y.wireframe,q===Oi?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:a[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,p.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=p}return M}function S(k,y,p,q,M){if(k.visible===!1)return;if(k.layers.test(y.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&M===Oi)&&(!k.frustumCulled||g.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,k.matrixWorld);const x=A.update(k),b=k.material;if(Array.isArray(b)){const P=x.groups;for(let v=0,z=P.length;v<z;v++){const CA=P[v],gA=b[CA.materialIndex];if(gA&&gA.visible){const DA=l(k,gA,q,M);k.onBeforeShadow(i,k,y,p,x,DA,CA),i.renderBufferDirect(p,null,x,DA,k,CA),k.onAfterShadow(i,k,y,p,x,DA,CA)}}}else if(b.visible){const P=l(k,b,q,M);k.onBeforeShadow(i,k,y,p,x,P,null),i.renderBufferDirect(p,null,x,P,k,null),k.onAfterShadow(i,k,y,p,x,P,null)}}const L=k.children;for(let x=0,b=L.length;x<b;x++)S(L[x],y,p,q,M)}function U(k){k.target.removeEventListener("dispose",U);for(const p in t){const q=t[p],M=k.target.uuid;M in q&&(q[M].dispose(),delete q[M])}}}function xJ(i,A,I){const g=I.isWebGL2;function C(){let Y=!1;const RA=new ng;let UA=null;const II=new ng(0,0,0,0);return{setMask:function($A){UA!==$A&&!Y&&(i.colorMask($A,$A,$A,$A),UA=$A)},setLocked:function($A){Y=$A},setClear:function($A,xI,TI,Eg,kC){kC===!0&&($A*=Eg,xI*=Eg,TI*=Eg),RA.set($A,xI,TI,Eg),II.equals(RA)===!1&&(i.clearColor($A,xI,TI,Eg),II.copy(RA))},reset:function(){Y=!1,UA=null,II.set(-1,0,0,0)}}}function B(){let Y=!1,RA=null,UA=null,II=null;return{setTest:function($A){$A?XA(i.DEPTH_TEST):HA(i.DEPTH_TEST)},setMask:function($A){RA!==$A&&!Y&&(i.depthMask($A),RA=$A)},setFunc:function($A){if(UA!==$A){switch($A){case Xy:i.depthFunc(i.NEVER);break;case zy:i.depthFunc(i.ALWAYS);break;case $y:i.depthFunc(i.LESS);break;case be:i.depthFunc(i.LEQUAL);break;case Ak:i.depthFunc(i.EQUAL);break;case Ik:i.depthFunc(i.GEQUAL);break;case gk:i.depthFunc(i.GREATER);break;case Ck:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}UA=$A}},setLocked:function($A){Y=$A},setClear:function($A){II!==$A&&(i.clearDepth($A),II=$A)},reset:function(){Y=!1,RA=null,UA=null,II=null}}}function Q(){let Y=!1,RA=null,UA=null,II=null,$A=null,xI=null,TI=null,Eg=null,kC=null;return{setTest:function(WI){Y||(WI?XA(i.STENCIL_TEST):HA(i.STENCIL_TEST))},setMask:function(WI){RA!==WI&&!Y&&(i.stencilMask(WI),RA=WI)},setFunc:function(WI,Ug,Sg){(UA!==WI||II!==Ug||$A!==Sg)&&(i.stencilFunc(WI,Ug,Sg),UA=WI,II=Ug,$A=Sg)},setOp:function(WI,Ug,Sg){(xI!==WI||TI!==Ug||Eg!==Sg)&&(i.stencilOp(WI,Ug,Sg),xI=WI,TI=Ug,Eg=Sg)},setLocked:function(WI){Y=WI},setClear:function(WI){kC!==WI&&(i.clearStencil(WI),kC=WI)},reset:function(){Y=!1,RA=null,UA=null,II=null,$A=null,xI=null,TI=null,Eg=null,kC=null}}}const E=new C,o=new B,t=new Q,e=new WeakMap,a=new WeakMap;let s={},n={},r=new WeakMap,c=[],D=null,h=!1,w=null,l=null,S=null,U=null,k=null,y=null,p=null,q=new vA(0,0,0),M=0,N=!1,L=null,x=null,b=null,P=null,v=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let CA=!1,gA=0;const DA=i.getParameter(i.VERSION);DA.indexOf("WebGL")!==-1?(gA=parseFloat(/^WebGL (\d)/.exec(DA)[1]),CA=gA>=1):DA.indexOf("OpenGL ES")!==-1&&(gA=parseFloat(/^OpenGL ES (\d)/.exec(DA)[1]),CA=gA>=2);let lA=null,YA={};const iI=i.getParameter(i.SCISSOR_BOX),sA=i.getParameter(i.VIEWPORT),pA=new ng().fromArray(iI),VA=new ng().fromArray(sA);function mA(Y,RA,UA,II){const $A=new Uint8Array(4),xI=i.createTexture();i.bindTexture(Y,xI),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let TI=0;TI<UA;TI++)g&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(RA,0,i.RGBA,1,1,II,0,i.RGBA,i.UNSIGNED_BYTE,$A):i.texImage2D(RA+TI,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$A);return xI}const SA={};SA[i.TEXTURE_2D]=mA(i.TEXTURE_2D,i.TEXTURE_2D,1),SA[i.TEXTURE_CUBE_MAP]=mA(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(SA[i.TEXTURE_2D_ARRAY]=mA(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),SA[i.TEXTURE_3D]=mA(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),E.setClear(0,0,0,1),o.setClear(1),t.setClear(0),XA(i.DEPTH_TEST),o.setFunc(be),xA(!1),f(OD),XA(i.CULL_FACE),yA(MQ);function XA(Y){s[Y]!==!0&&(i.enable(Y),s[Y]=!0)}function HA(Y){s[Y]!==!1&&(i.disable(Y),s[Y]=!1)}function bA(Y,RA){return n[Y]!==RA?(i.bindFramebuffer(Y,RA),n[Y]=RA,g&&(Y===i.DRAW_FRAMEBUFFER&&(n[i.FRAMEBUFFER]=RA),Y===i.FRAMEBUFFER&&(n[i.DRAW_FRAMEBUFFER]=RA)),!0):!1}function m(Y,RA){let UA=c,II=!1;if(Y)if(UA=r.get(RA),UA===void 0&&(UA=[],r.set(RA,UA)),Y.isWebGLMultipleRenderTargets){const $A=Y.texture;if(UA.length!==$A.length||UA[0]!==i.COLOR_ATTACHMENT0){for(let xI=0,TI=$A.length;xI<TI;xI++)UA[xI]=i.COLOR_ATTACHMENT0+xI;UA.length=$A.length,II=!0}}else UA[0]!==i.COLOR_ATTACHMENT0&&(UA[0]=i.COLOR_ATTACHMENT0,II=!0);else UA[0]!==i.BACK&&(UA[0]=i.BACK,II=!0);II&&(I.isWebGL2?i.drawBuffers(UA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(UA))}function NA(Y){return D!==Y?(i.useProgram(Y),D=Y,!0):!1}const GA={[iE]:i.FUNC_ADD,[Yy]:i.FUNC_SUBTRACT,[Ly]:i.FUNC_REVERSE_SUBTRACT};if(g)GA[PD]=i.MIN,GA[WD]=i.MAX;else{const Y=A.get("EXT_blend_minmax");Y!==null&&(GA[PD]=Y.MIN_EXT,GA[WD]=Y.MAX_EXT)}const JA={[my]:i.ZERO,[Hy]:i.ONE,[Ty]:i.SRC_COLOR,[rn]:i.SRC_ALPHA,[Zy]:i.SRC_ALPHA_SATURATE,[Oy]:i.DST_COLOR,[xy]:i.DST_ALPHA,[by]:i.ONE_MINUS_SRC_COLOR,[Dn]:i.ONE_MINUS_SRC_ALPHA,[vy]:i.ONE_MINUS_DST_COLOR,[_y]:i.ONE_MINUS_DST_ALPHA,[Py]:i.CONSTANT_COLOR,[Wy]:i.ONE_MINUS_CONSTANT_COLOR,[Vy]:i.CONSTANT_ALPHA,[jy]:i.ONE_MINUS_CONSTANT_ALPHA};function yA(Y,RA,UA,II,$A,xI,TI,Eg,kC,WI){if(Y===MQ){h===!0&&(HA(i.BLEND),h=!1);return}if(h===!1&&(XA(i.BLEND),h=!0),Y!==qy){if(Y!==w||WI!==N){if((l!==iE||k!==iE)&&(i.blendEquation(i.FUNC_ADD),l=iE,k=iE),WI)switch(Y){case ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Te:i.blendFunc(i.ONE,i.ONE);break;case vD:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ZD:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Te:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vD:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ZD:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}S=null,U=null,y=null,p=null,q.set(0,0,0),M=0,w=Y,N=WI}return}$A=$A||RA,xI=xI||UA,TI=TI||II,(RA!==l||$A!==k)&&(i.blendEquationSeparate(GA[RA],GA[$A]),l=RA,k=$A),(UA!==S||II!==U||xI!==y||TI!==p)&&(i.blendFuncSeparate(JA[UA],JA[II],JA[xI],JA[TI]),S=UA,U=II,y=xI,p=TI),(Eg.equals(q)===!1||kC!==M)&&(i.blendColor(Eg.r,Eg.g,Eg.b,kC),q.copy(Eg),M=kC),w=Y,N=!1}function gI(Y,RA){Y.side===Vi?HA(i.CULL_FACE):XA(i.CULL_FACE);let UA=Y.side===FB;RA&&(UA=!UA),xA(UA),Y.blending===ro&&Y.transparent===!1?yA(MQ):yA(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),E.setMask(Y.colorWrite);const II=Y.stencilWrite;t.setTest(II),II&&(t.setMask(Y.stencilWriteMask),t.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),t.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?XA(i.SAMPLE_ALPHA_TO_COVERAGE):HA(i.SAMPLE_ALPHA_TO_COVERAGE)}function xA(Y){L!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),L=Y)}function f(Y){Y!==fy?(XA(i.CULL_FACE),Y!==x&&(Y===OD?i.cullFace(i.BACK):Y===uy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):HA(i.CULL_FACE),x=Y}function K(Y){Y!==b&&(CA&&i.lineWidth(Y),b=Y)}function $(Y,RA,UA){Y?(XA(i.POLYGON_OFFSET_FILL),(P!==RA||v!==UA)&&(i.polygonOffset(RA,UA),P=RA,v=UA)):HA(i.POLYGON_OFFSET_FILL)}function dA(Y){Y?XA(i.SCISSOR_TEST):HA(i.SCISSOR_TEST)}function kA(Y){Y===void 0&&(Y=i.TEXTURE0+z-1),lA!==Y&&(i.activeTexture(Y),lA=Y)}function KA(Y,RA,UA){UA===void 0&&(lA===null?UA=i.TEXTURE0+z-1:UA=lA);let II=YA[UA];II===void 0&&(II={type:void 0,texture:void 0},YA[UA]=II),(II.type!==Y||II.texture!==RA)&&(lA!==UA&&(i.activeTexture(UA),lA=UA),i.bindTexture(Y,RA||SA[Y]),II.type=Y,II.texture=RA)}function zA(){const Y=YA[lA];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function LA(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jA(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tI(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yI(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function MA(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bI(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function RI(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function SI(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function AI(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ZA(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function NI(Y){pA.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),pA.copy(Y))}function H(Y){VA.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),VA.copy(Y))}function fA(Y,RA){let UA=a.get(RA);UA===void 0&&(UA=new WeakMap,a.set(RA,UA));let II=UA.get(Y);II===void 0&&(II=i.getUniformBlockIndex(RA,Y.name),UA.set(Y,II))}function _A(Y,RA){const II=a.get(RA).get(Y);e.get(RA)!==II&&(i.uniformBlockBinding(RA,II,Y.__bindingPointIndex),e.set(RA,II))}function oI(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),g===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),s={},lA=null,YA={},n={},r=new WeakMap,c=[],D=null,h=!1,w=null,l=null,S=null,U=null,k=null,y=null,p=null,q=new vA(0,0,0),M=0,N=!1,L=null,x=null,b=null,P=null,v=null,pA.set(0,0,i.canvas.width,i.canvas.height),VA.set(0,0,i.canvas.width,i.canvas.height),E.reset(),o.reset(),t.reset()}return{buffers:{color:E,depth:o,stencil:t},enable:XA,disable:HA,bindFramebuffer:bA,drawBuffers:m,useProgram:NA,setBlending:yA,setMaterial:gI,setFlipSided:xA,setCullFace:f,setLineWidth:K,setPolygonOffset:$,setScissorTest:dA,activeTexture:kA,bindTexture:KA,unbindTexture:zA,compressedTexImage2D:LA,compressedTexImage3D:jA,texImage2D:AI,texImage3D:ZA,updateUBOMapping:fA,uniformBlockBinding:_A,texStorage2D:RI,texStorage3D:SI,texSubImage2D:tI,texSubImage3D:yI,compressedTexSubImage2D:MA,compressedTexSubImage3D:bI,scissor:NI,viewport:H,reset:oI}}function _J(i,A,I,g,C,B,Q){const E=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function r(f,K){return n?new OffscreenCanvas(f,K):Ia("canvas")}function c(f,K,$,dA){let kA=1;if((f.width>dA||f.height>dA)&&(kA=dA/Math.max(f.width,f.height)),kA<1||K===!0)if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap){const KA=K?ln:Math.floor,zA=KA(kA*f.width),LA=KA(kA*f.height);a===void 0&&(a=r(zA,LA));const jA=$?r(zA,LA):a;return jA.width=zA,jA.height=LA,jA.getContext("2d").drawImage(f,0,0,zA,LA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+f.width+"x"+f.height+") to ("+zA+"x"+LA+")."),jA}else return"data"in f&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+f.width+"x"+f.height+")."),f;return f}function D(f){return kh(f.width)&&kh(f.height)}function h(f){return E?!1:f.wrapS!==eB||f.wrapT!==eB||f.minFilter!==EC&&f.minFilter!==mg}function w(f,K){return f.generateMipmaps&&K&&f.minFilter!==EC&&f.minFilter!==mg}function l(f){i.generateMipmap(f)}function S(f,K,$,dA,kA=!1){if(E===!1)return K;if(f!==null){if(i[f]!==void 0)return i[f];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let KA=K;if(K===i.RED&&($===i.FLOAT&&(KA=i.R32F),$===i.HALF_FLOAT&&(KA=i.R16F),$===i.UNSIGNED_BYTE&&(KA=i.R8)),K===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(KA=i.R8UI),$===i.UNSIGNED_SHORT&&(KA=i.R16UI),$===i.UNSIGNED_INT&&(KA=i.R32UI),$===i.BYTE&&(KA=i.R8I),$===i.SHORT&&(KA=i.R16I),$===i.INT&&(KA=i.R32I)),K===i.RG&&($===i.FLOAT&&(KA=i.RG32F),$===i.HALF_FLOAT&&(KA=i.RG16F),$===i.UNSIGNED_BYTE&&(KA=i.RG8)),K===i.RGBA){const zA=kA?je:Qg.getTransfer(dA);$===i.FLOAT&&(KA=i.RGBA32F),$===i.HALF_FLOAT&&(KA=i.RGBA16F),$===i.UNSIGNED_BYTE&&(KA=zA===yg?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(KA=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(KA=i.RGB5_A1)}return(KA===i.R16F||KA===i.R32F||KA===i.RG16F||KA===i.RG32F||KA===i.RGBA16F||KA===i.RGBA32F)&&A.get("EXT_color_buffer_float"),KA}function U(f,K,$){return w(f,$)===!0||f.isFramebufferTexture&&f.minFilter!==EC&&f.minFilter!==mg?Math.log2(Math.max(K.width,K.height))+1:f.mipmaps!==void 0&&f.mipmaps.length>0?f.mipmaps.length:f.isCompressedTexture&&Array.isArray(f.image)?K.mipmaps.length:1}function k(f){return f===EC||f===hn||f===Io?i.NEAREST:i.LINEAR}function y(f){const K=f.target;K.removeEventListener("dispose",y),q(K),K.isVideoTexture&&e.delete(K)}function p(f){const K=f.target;K.removeEventListener("dispose",p),N(K)}function q(f){const K=g.get(f);if(K.__webglInit===void 0)return;const $=f.source,dA=s.get($);if(dA){const kA=dA[K.__cacheKey];kA.usedTimes--,kA.usedTimes===0&&M(f),Object.keys(dA).length===0&&s.delete($)}g.remove(f)}function M(f){const K=g.get(f);i.deleteTexture(K.__webglTexture);const $=f.source,dA=s.get($);delete dA[K.__cacheKey],Q.memory.textures--}function N(f){const K=f.texture,$=g.get(f),dA=g.get(K);if(dA.__webglTexture!==void 0&&(i.deleteTexture(dA.__webglTexture),Q.memory.textures--),f.depthTexture&&f.depthTexture.dispose(),f.isWebGLCubeRenderTarget)for(let kA=0;kA<6;kA++){if(Array.isArray($.__webglFramebuffer[kA]))for(let KA=0;KA<$.__webglFramebuffer[kA].length;KA++)i.deleteFramebuffer($.__webglFramebuffer[kA][KA]);else i.deleteFramebuffer($.__webglFramebuffer[kA]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[kA])}else{if(Array.isArray($.__webglFramebuffer))for(let kA=0;kA<$.__webglFramebuffer.length;kA++)i.deleteFramebuffer($.__webglFramebuffer[kA]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let kA=0;kA<$.__webglColorRenderbuffer.length;kA++)$.__webglColorRenderbuffer[kA]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[kA]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(f.isWebGLMultipleRenderTargets)for(let kA=0,KA=K.length;kA<KA;kA++){const zA=g.get(K[kA]);zA.__webglTexture&&(i.deleteTexture(zA.__webglTexture),Q.memory.textures--),g.remove(K[kA])}g.remove(K),g.remove(f)}let L=0;function x(){L=0}function b(){const f=L;return f>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+f+" texture units while this GPU supports only "+C.maxTextures),L+=1,f}function P(f){const K=[];return K.push(f.wrapS),K.push(f.wrapT),K.push(f.wrapR||0),K.push(f.magFilter),K.push(f.minFilter),K.push(f.anisotropy),K.push(f.internalFormat),K.push(f.format),K.push(f.type),K.push(f.generateMipmaps),K.push(f.premultiplyAlpha),K.push(f.flipY),K.push(f.unpackAlignment),K.push(f.colorSpace),K.join()}function v(f,K){const $=g.get(f);if(f.isVideoTexture&&gI(f),f.isRenderTargetTexture===!1&&f.version>0&&$.__version!==f.version){const dA=f.image;if(dA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pA($,f,K);return}}I.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+K)}function z(f,K){const $=g.get(f);if(f.version>0&&$.__version!==f.version){pA($,f,K);return}I.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+K)}function CA(f,K){const $=g.get(f);if(f.version>0&&$.__version!==f.version){pA($,f,K);return}I.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+K)}function gA(f,K){const $=g.get(f);if(f.version>0&&$.__version!==f.version){VA($,f,K);return}I.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+K)}const DA={[Oe]:i.REPEAT,[eB]:i.CLAMP_TO_EDGE,[ve]:i.MIRRORED_REPEAT},lA={[EC]:i.NEAREST,[hn]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[mg]:i.LINEAR,[Ke]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},YA={[Nk]:i.NEVER,[Jk]:i.ALWAYS,[pk]:i.LESS,[cc]:i.LEQUAL,[Kk]:i.EQUAL,[Rk]:i.GEQUAL,[Fk]:i.GREATER,[dk]:i.NOTEQUAL};function iI(f,K,$){if(K.type===ci&&A.has("OES_texture_float_linear")===!1&&(K.magFilter===mg||K.magFilter===Ke||K.magFilter===Io||K.magFilter===Xi||K.minFilter===mg||K.minFilter===Ke||K.minFilter===Io||K.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(i.texParameteri(f,i.TEXTURE_WRAP_S,DA[K.wrapS]),i.texParameteri(f,i.TEXTURE_WRAP_T,DA[K.wrapT]),(f===i.TEXTURE_3D||f===i.TEXTURE_2D_ARRAY)&&i.texParameteri(f,i.TEXTURE_WRAP_R,DA[K.wrapR]),i.texParameteri(f,i.TEXTURE_MAG_FILTER,lA[K.magFilter]),i.texParameteri(f,i.TEXTURE_MIN_FILTER,lA[K.minFilter])):(i.texParameteri(f,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(f,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(f===i.TEXTURE_3D||f===i.TEXTURE_2D_ARRAY)&&i.texParameteri(f,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(K.wrapS!==eB||K.wrapT!==eB)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(f,i.TEXTURE_MAG_FILTER,k(K.magFilter)),i.texParameteri(f,i.TEXTURE_MIN_FILTER,k(K.minFilter)),K.minFilter!==EC&&K.minFilter!==mg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),K.compareFunction&&(i.texParameteri(f,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(f,i.TEXTURE_COMPARE_FUNC,YA[K.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const dA=A.get("EXT_texture_filter_anisotropic");if(K.magFilter===EC||K.minFilter!==Io&&K.minFilter!==Xi||K.type===ci&&A.has("OES_texture_float_linear")===!1||E===!1&&K.type===pt&&A.has("OES_texture_half_float_linear")===!1)return;(K.anisotropy>1||g.get(K).__currentAnisotropy)&&(i.texParameterf(f,dA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(K.anisotropy,C.getMaxAnisotropy())),g.get(K).__currentAnisotropy=K.anisotropy)}}function sA(f,K){let $=!1;f.__webglInit===void 0&&(f.__webglInit=!0,K.addEventListener("dispose",y));const dA=K.source;let kA=s.get(dA);kA===void 0&&(kA={},s.set(dA,kA));const KA=P(K);if(KA!==f.__cacheKey){kA[KA]===void 0&&(kA[KA]={texture:i.createTexture(),usedTimes:0},Q.memory.textures++,$=!0),kA[KA].usedTimes++;const zA=kA[f.__cacheKey];zA!==void 0&&(kA[f.__cacheKey].usedTimes--,zA.usedTimes===0&&M(K)),f.__cacheKey=KA,f.__webglTexture=kA[KA].texture}return $}function pA(f,K,$){let dA=i.TEXTURE_2D;(K.isDataArrayTexture||K.isCompressedArrayTexture)&&(dA=i.TEXTURE_2D_ARRAY),K.isData3DTexture&&(dA=i.TEXTURE_3D);const kA=sA(f,K),KA=K.source;I.bindTexture(dA,f.__webglTexture,i.TEXTURE0+$);const zA=g.get(KA);if(KA.version!==zA.__version||kA===!0){I.activeTexture(i.TEXTURE0+$);const LA=Qg.getPrimaries(Qg.workingColorSpace),jA=K.colorSpace===gi?null:Qg.getPrimaries(K.colorSpace),tI=K.colorSpace===gi||LA===jA?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,K.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,K.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tI);const yI=h(K)&&D(K.image)===!1;let MA=c(K.image,yI,!1,C.maxTextureSize);MA=xA(K,MA);const bI=D(MA)||E,RI=B.convert(K.format,K.colorSpace);let SI=B.convert(K.type),AI=S(K.internalFormat,RI,SI,K.colorSpace,K.isVideoTexture);iI(dA,K,bI);let ZA;const NI=K.mipmaps,H=E&&K.isVideoTexture!==!0&&AI!==Dc,fA=zA.__version===void 0||kA===!0,_A=KA.dataReady,oI=U(K,MA,bI);if(K.isDepthTexture)AI=i.DEPTH_COMPONENT,E?K.type===ci?AI=i.DEPTH_COMPONENT32F:K.type===yQ?AI=i.DEPTH_COMPONENT24:K.type===aE?AI=i.DEPTH24_STENCIL8:AI=i.DEPTH_COMPONENT16:K.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),K.format===sE&&AI===i.DEPTH_COMPONENT&&K.type!==un&&K.type!==yQ&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),K.type=yQ,SI=B.convert(K.type)),K.format===Go&&AI===i.DEPTH_COMPONENT&&(AI=i.DEPTH_STENCIL,K.type!==aE&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),K.type=aE,SI=B.convert(K.type))),fA&&(H?I.texStorage2D(i.TEXTURE_2D,1,AI,MA.width,MA.height):I.texImage2D(i.TEXTURE_2D,0,AI,MA.width,MA.height,0,RI,SI,null));else if(K.isDataTexture)if(NI.length>0&&bI){H&&fA&&I.texStorage2D(i.TEXTURE_2D,oI,AI,NI[0].width,NI[0].height);for(let Y=0,RA=NI.length;Y<RA;Y++)ZA=NI[Y],H?_A&&I.texSubImage2D(i.TEXTURE_2D,Y,0,0,ZA.width,ZA.height,RI,SI,ZA.data):I.texImage2D(i.TEXTURE_2D,Y,AI,ZA.width,ZA.height,0,RI,SI,ZA.data);K.generateMipmaps=!1}else H?(fA&&I.texStorage2D(i.TEXTURE_2D,oI,AI,MA.width,MA.height),_A&&I.texSubImage2D(i.TEXTURE_2D,0,0,0,MA.width,MA.height,RI,SI,MA.data)):I.texImage2D(i.TEXTURE_2D,0,AI,MA.width,MA.height,0,RI,SI,MA.data);else if(K.isCompressedTexture)if(K.isCompressedArrayTexture){H&&fA&&I.texStorage3D(i.TEXTURE_2D_ARRAY,oI,AI,NI[0].width,NI[0].height,MA.depth);for(let Y=0,RA=NI.length;Y<RA;Y++)ZA=NI[Y],K.format!==qB?RI!==null?H?_A&&I.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ZA.width,ZA.height,MA.depth,RI,ZA.data,0,0):I.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,AI,ZA.width,ZA.height,MA.depth,0,ZA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_A&&I.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ZA.width,ZA.height,MA.depth,RI,SI,ZA.data):I.texImage3D(i.TEXTURE_2D_ARRAY,Y,AI,ZA.width,ZA.height,MA.depth,0,RI,SI,ZA.data)}else{H&&fA&&I.texStorage2D(i.TEXTURE_2D,oI,AI,NI[0].width,NI[0].height);for(let Y=0,RA=NI.length;Y<RA;Y++)ZA=NI[Y],K.format!==qB?RI!==null?H?_A&&I.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ZA.width,ZA.height,RI,ZA.data):I.compressedTexImage2D(i.TEXTURE_2D,Y,AI,ZA.width,ZA.height,0,ZA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_A&&I.texSubImage2D(i.TEXTURE_2D,Y,0,0,ZA.width,ZA.height,RI,SI,ZA.data):I.texImage2D(i.TEXTURE_2D,Y,AI,ZA.width,ZA.height,0,RI,SI,ZA.data)}else if(K.isDataArrayTexture)H?(fA&&I.texStorage3D(i.TEXTURE_2D_ARRAY,oI,AI,MA.width,MA.height,MA.depth),_A&&I.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,MA.width,MA.height,MA.depth,RI,SI,MA.data)):I.texImage3D(i.TEXTURE_2D_ARRAY,0,AI,MA.width,MA.height,MA.depth,0,RI,SI,MA.data);else if(K.isData3DTexture)H?(fA&&I.texStorage3D(i.TEXTURE_3D,oI,AI,MA.width,MA.height,MA.depth),_A&&I.texSubImage3D(i.TEXTURE_3D,0,0,0,0,MA.width,MA.height,MA.depth,RI,SI,MA.data)):I.texImage3D(i.TEXTURE_3D,0,AI,MA.width,MA.height,MA.depth,0,RI,SI,MA.data);else if(K.isFramebufferTexture){if(fA)if(H)I.texStorage2D(i.TEXTURE_2D,oI,AI,MA.width,MA.height);else{let Y=MA.width,RA=MA.height;for(let UA=0;UA<oI;UA++)I.texImage2D(i.TEXTURE_2D,UA,AI,Y,RA,0,RI,SI,null),Y>>=1,RA>>=1}}else if(NI.length>0&&bI){H&&fA&&I.texStorage2D(i.TEXTURE_2D,oI,AI,NI[0].width,NI[0].height);for(let Y=0,RA=NI.length;Y<RA;Y++)ZA=NI[Y],H?_A&&I.texSubImage2D(i.TEXTURE_2D,Y,0,0,RI,SI,ZA):I.texImage2D(i.TEXTURE_2D,Y,AI,RI,SI,ZA);K.generateMipmaps=!1}else H?(fA&&I.texStorage2D(i.TEXTURE_2D,oI,AI,MA.width,MA.height),_A&&I.texSubImage2D(i.TEXTURE_2D,0,0,0,RI,SI,MA)):I.texImage2D(i.TEXTURE_2D,0,AI,RI,SI,MA);w(K,bI)&&l(dA),zA.__version=KA.version,K.onUpdate&&K.onUpdate(K)}f.__version=K.version}function VA(f,K,$){if(K.image.length!==6)return;const dA=sA(f,K),kA=K.source;I.bindTexture(i.TEXTURE_CUBE_MAP,f.__webglTexture,i.TEXTURE0+$);const KA=g.get(kA);if(kA.version!==KA.__version||dA===!0){I.activeTexture(i.TEXTURE0+$);const zA=Qg.getPrimaries(Qg.workingColorSpace),LA=K.colorSpace===gi?null:Qg.getPrimaries(K.colorSpace),jA=K.colorSpace===gi||zA===LA?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,K.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,K.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jA);const tI=K.isCompressedTexture||K.image[0].isCompressedTexture,yI=K.image[0]&&K.image[0].isDataTexture,MA=[];for(let Y=0;Y<6;Y++)!tI&&!yI?MA[Y]=c(K.image[Y],!1,!0,C.maxCubemapSize):MA[Y]=yI?K.image[Y].image:K.image[Y],MA[Y]=xA(K,MA[Y]);const bI=MA[0],RI=D(bI)||E,SI=B.convert(K.format,K.colorSpace),AI=B.convert(K.type),ZA=S(K.internalFormat,SI,AI,K.colorSpace),NI=E&&K.isVideoTexture!==!0,H=KA.__version===void 0||dA===!0,fA=kA.dataReady;let _A=U(K,bI,RI);iI(i.TEXTURE_CUBE_MAP,K,RI);let oI;if(tI){NI&&H&&I.texStorage2D(i.TEXTURE_CUBE_MAP,_A,ZA,bI.width,bI.height);for(let Y=0;Y<6;Y++){oI=MA[Y].mipmaps;for(let RA=0;RA<oI.length;RA++){const UA=oI[RA];K.format!==qB?SI!==null?NI?fA&&I.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA,0,0,UA.width,UA.height,SI,UA.data):I.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA,ZA,UA.width,UA.height,0,UA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):NI?fA&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA,0,0,UA.width,UA.height,SI,AI,UA.data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA,ZA,UA.width,UA.height,0,SI,AI,UA.data)}}}else{oI=K.mipmaps,NI&&H&&(oI.length>0&&_A++,I.texStorage2D(i.TEXTURE_CUBE_MAP,_A,ZA,MA[0].width,MA[0].height));for(let Y=0;Y<6;Y++)if(yI){NI?fA&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,MA[Y].width,MA[Y].height,SI,AI,MA[Y].data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ZA,MA[Y].width,MA[Y].height,0,SI,AI,MA[Y].data);for(let RA=0;RA<oI.length;RA++){const II=oI[RA].image[Y].image;NI?fA&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA+1,0,0,II.width,II.height,SI,AI,II.data):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA+1,ZA,II.width,II.height,0,SI,AI,II.data)}}else{NI?fA&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,SI,AI,MA[Y]):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ZA,SI,AI,MA[Y]);for(let RA=0;RA<oI.length;RA++){const UA=oI[RA];NI?fA&&I.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA+1,0,0,SI,AI,UA.image[Y]):I.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,RA+1,ZA,SI,AI,UA.image[Y])}}}w(K,RI)&&l(i.TEXTURE_CUBE_MAP),KA.__version=kA.version,K.onUpdate&&K.onUpdate(K)}f.__version=K.version}function mA(f,K,$,dA,kA,KA){const zA=B.convert($.format,$.colorSpace),LA=B.convert($.type),jA=S($.internalFormat,zA,LA,$.colorSpace);if(!g.get(K).__hasExternalTextures){const yI=Math.max(1,K.width>>KA),MA=Math.max(1,K.height>>KA);kA===i.TEXTURE_3D||kA===i.TEXTURE_2D_ARRAY?I.texImage3D(kA,KA,jA,yI,MA,K.depth,0,zA,LA,null):I.texImage2D(kA,KA,jA,yI,MA,0,zA,LA,null)}I.bindFramebuffer(i.FRAMEBUFFER,f),yA(K)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dA,kA,g.get($).__webglTexture,0,JA(K)):(kA===i.TEXTURE_2D||kA>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&kA<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dA,kA,g.get($).__webglTexture,KA),I.bindFramebuffer(i.FRAMEBUFFER,null)}function SA(f,K,$){if(i.bindRenderbuffer(i.RENDERBUFFER,f),K.depthBuffer&&!K.stencilBuffer){let dA=E===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||yA(K)){const kA=K.depthTexture;kA&&kA.isDepthTexture&&(kA.type===ci?dA=i.DEPTH_COMPONENT32F:kA.type===yQ&&(dA=i.DEPTH_COMPONENT24));const KA=JA(K);yA(K)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,KA,dA,K.width,K.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,KA,dA,K.width,K.height)}else i.renderbufferStorage(i.RENDERBUFFER,dA,K.width,K.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,f)}else if(K.depthBuffer&&K.stencilBuffer){const dA=JA(K);$&&yA(K)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dA,i.DEPTH24_STENCIL8,K.width,K.height):yA(K)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dA,i.DEPTH24_STENCIL8,K.width,K.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,K.width,K.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,f)}else{const dA=K.isWebGLMultipleRenderTargets===!0?K.texture:[K.texture];for(let kA=0;kA<dA.length;kA++){const KA=dA[kA],zA=B.convert(KA.format,KA.colorSpace),LA=B.convert(KA.type),jA=S(KA.internalFormat,zA,LA,KA.colorSpace),tI=JA(K);$&&yA(K)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tI,jA,K.width,K.height):yA(K)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tI,jA,K.width,K.height):i.renderbufferStorage(i.RENDERBUFFER,jA,K.width,K.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function XA(f,K){if(K&&K.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(i.FRAMEBUFFER,f),!(K.depthTexture&&K.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(K.depthTexture).__webglTexture||K.depthTexture.image.width!==K.width||K.depthTexture.image.height!==K.height)&&(K.depthTexture.image.width=K.width,K.depthTexture.image.height=K.height,K.depthTexture.needsUpdate=!0),v(K.depthTexture,0);const dA=g.get(K.depthTexture).__webglTexture,kA=JA(K);if(K.depthTexture.format===sE)yA(K)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dA,0,kA):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dA,0);else if(K.depthTexture.format===Go)yA(K)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dA,0,kA):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dA,0);else throw new Error("Unknown depthTexture format")}function HA(f){const K=g.get(f),$=f.isWebGLCubeRenderTarget===!0;if(f.depthTexture&&!K.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");XA(K.__webglFramebuffer,f)}else if($){K.__webglDepthbuffer=[];for(let dA=0;dA<6;dA++)I.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer[dA]),K.__webglDepthbuffer[dA]=i.createRenderbuffer(),SA(K.__webglDepthbuffer[dA],f,!1)}else I.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),K.__webglDepthbuffer=i.createRenderbuffer(),SA(K.__webglDepthbuffer,f,!1);I.bindFramebuffer(i.FRAMEBUFFER,null)}function bA(f,K,$){const dA=g.get(f);K!==void 0&&mA(dA.__webglFramebuffer,f,f.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&HA(f)}function m(f){const K=f.texture,$=g.get(f),dA=g.get(K);f.addEventListener("dispose",p),f.isWebGLMultipleRenderTargets!==!0&&(dA.__webglTexture===void 0&&(dA.__webglTexture=i.createTexture()),dA.__version=K.version,Q.memory.textures++);const kA=f.isWebGLCubeRenderTarget===!0,KA=f.isWebGLMultipleRenderTargets===!0,zA=D(f)||E;if(kA){$.__webglFramebuffer=[];for(let LA=0;LA<6;LA++)if(E&&K.mipmaps&&K.mipmaps.length>0){$.__webglFramebuffer[LA]=[];for(let jA=0;jA<K.mipmaps.length;jA++)$.__webglFramebuffer[LA][jA]=i.createFramebuffer()}else $.__webglFramebuffer[LA]=i.createFramebuffer()}else{if(E&&K.mipmaps&&K.mipmaps.length>0){$.__webglFramebuffer=[];for(let LA=0;LA<K.mipmaps.length;LA++)$.__webglFramebuffer[LA]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(KA)if(C.drawBuffers){const LA=f.texture;for(let jA=0,tI=LA.length;jA<tI;jA++){const yI=g.get(LA[jA]);yI.__webglTexture===void 0&&(yI.__webglTexture=i.createTexture(),Q.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(E&&f.samples>0&&yA(f)===!1){const LA=KA?K:[K];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],I.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let jA=0;jA<LA.length;jA++){const tI=LA[jA];$.__webglColorRenderbuffer[jA]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[jA]);const yI=B.convert(tI.format,tI.colorSpace),MA=B.convert(tI.type),bI=S(tI.internalFormat,yI,MA,tI.colorSpace,f.isXRRenderTarget===!0),RI=JA(f);i.renderbufferStorageMultisample(i.RENDERBUFFER,RI,bI,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+jA,i.RENDERBUFFER,$.__webglColorRenderbuffer[jA])}i.bindRenderbuffer(i.RENDERBUFFER,null),f.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),SA($.__webglDepthRenderbuffer,f,!0)),I.bindFramebuffer(i.FRAMEBUFFER,null)}}if(kA){I.bindTexture(i.TEXTURE_CUBE_MAP,dA.__webglTexture),iI(i.TEXTURE_CUBE_MAP,K,zA);for(let LA=0;LA<6;LA++)if(E&&K.mipmaps&&K.mipmaps.length>0)for(let jA=0;jA<K.mipmaps.length;jA++)mA($.__webglFramebuffer[LA][jA],f,K,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+LA,jA);else mA($.__webglFramebuffer[LA],f,K,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+LA,0);w(K,zA)&&l(i.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(KA){const LA=f.texture;for(let jA=0,tI=LA.length;jA<tI;jA++){const yI=LA[jA],MA=g.get(yI);I.bindTexture(i.TEXTURE_2D,MA.__webglTexture),iI(i.TEXTURE_2D,yI,zA),mA($.__webglFramebuffer,f,yI,i.COLOR_ATTACHMENT0+jA,i.TEXTURE_2D,0),w(yI,zA)&&l(i.TEXTURE_2D)}I.unbindTexture()}else{let LA=i.TEXTURE_2D;if((f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(E?LA=f.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(LA,dA.__webglTexture),iI(LA,K,zA),E&&K.mipmaps&&K.mipmaps.length>0)for(let jA=0;jA<K.mipmaps.length;jA++)mA($.__webglFramebuffer[jA],f,K,i.COLOR_ATTACHMENT0,LA,jA);else mA($.__webglFramebuffer,f,K,i.COLOR_ATTACHMENT0,LA,0);w(K,zA)&&l(LA),I.unbindTexture()}f.depthBuffer&&HA(f)}function NA(f){const K=D(f)||E,$=f.isWebGLMultipleRenderTargets===!0?f.texture:[f.texture];for(let dA=0,kA=$.length;dA<kA;dA++){const KA=$[dA];if(w(KA,K)){const zA=f.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,LA=g.get(KA).__webglTexture;I.bindTexture(zA,LA),l(zA),I.unbindTexture()}}}function GA(f){if(E&&f.samples>0&&yA(f)===!1){const K=f.isWebGLMultipleRenderTargets?f.texture:[f.texture],$=f.width,dA=f.height;let kA=i.COLOR_BUFFER_BIT;const KA=[],zA=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,LA=g.get(f),jA=f.isWebGLMultipleRenderTargets===!0;if(jA)for(let tI=0;tI<K.length;tI++)I.bindFramebuffer(i.FRAMEBUFFER,LA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tI,i.RENDERBUFFER,null),I.bindFramebuffer(i.FRAMEBUFFER,LA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tI,i.TEXTURE_2D,null,0);I.bindFramebuffer(i.READ_FRAMEBUFFER,LA.__webglMultisampledFramebuffer),I.bindFramebuffer(i.DRAW_FRAMEBUFFER,LA.__webglFramebuffer);for(let tI=0;tI<K.length;tI++){KA.push(i.COLOR_ATTACHMENT0+tI),f.depthBuffer&&KA.push(zA);const yI=LA.__ignoreDepthValues!==void 0?LA.__ignoreDepthValues:!1;if(yI===!1&&(f.depthBuffer&&(kA|=i.DEPTH_BUFFER_BIT),f.stencilBuffer&&(kA|=i.STENCIL_BUFFER_BIT)),jA&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,LA.__webglColorRenderbuffer[tI]),yI===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[zA]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[zA])),jA){const MA=g.get(K[tI]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,MA,0)}i.blitFramebuffer(0,0,$,dA,0,0,$,dA,kA,i.NEAREST),t&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,KA)}if(I.bindFramebuffer(i.READ_FRAMEBUFFER,null),I.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),jA)for(let tI=0;tI<K.length;tI++){I.bindFramebuffer(i.FRAMEBUFFER,LA.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tI,i.RENDERBUFFER,LA.__webglColorRenderbuffer[tI]);const yI=g.get(K[tI]).__webglTexture;I.bindFramebuffer(i.FRAMEBUFFER,LA.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tI,i.TEXTURE_2D,yI,0)}I.bindFramebuffer(i.DRAW_FRAMEBUFFER,LA.__webglMultisampledFramebuffer)}}function JA(f){return Math.min(C.maxSamples,f.samples)}function yA(f){const K=g.get(f);return E&&f.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&K.__useRenderToTexture!==!1}function gI(f){const K=Q.render.frame;e.get(f)!==K&&(e.set(f,K),f.update())}function xA(f,K){const $=f.colorSpace,dA=f.format,kA=f.type;return f.isCompressedTexture===!0||f.isVideoTexture===!0||f.format===cn||$!==gQ&&$!==gi&&(Qg.getTransfer($)===yg?E===!1?A.has("EXT_sRGB")===!0&&dA===qB?(f.format=cn,f.minFilter=mg,f.generateMipmaps=!1):K=wc.sRGBToLinear(K):(dA!==qB||kA!==NQ)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),K}this.allocateTextureUnit=b,this.resetTextureUnits=x,this.setTexture2D=v,this.setTexture2DArray=z,this.setTexture3D=CA,this.setTextureCube=gA,this.rebindTextures=bA,this.setupRenderTarget=m,this.updateRenderTargetMipmap=NA,this.updateMultisampleRenderTarget=GA,this.setupDepthRenderbuffer=HA,this.setupFrameBufferTexture=mA,this.useMultisampledRTT=yA}function Wk(i,A,I){const g=I.isWebGL2;function C(B,Q=gi){let E;const o=Qg.getTransfer(Q);if(B===NQ)return i.UNSIGNED_BYTE;if(B===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(B===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(B===sk)return i.BYTE;if(B===nk)return i.SHORT;if(B===un)return i.UNSIGNED_SHORT;if(B===tc)return i.INT;if(B===yQ)return i.UNSIGNED_INT;if(B===ci)return i.FLOAT;if(B===pt)return g?i.HALF_FLOAT:(E=A.get("OES_texture_half_float"),E!==null?E.HALF_FLOAT_OES:null);if(B===rk)return i.ALPHA;if(B===qB)return i.RGBA;if(B===Dk)return i.LUMINANCE;if(B===hk)return i.LUMINANCE_ALPHA;if(B===sE)return i.DEPTH_COMPONENT;if(B===Go)return i.DEPTH_STENCIL;if(B===cn)return E=A.get("EXT_sRGB"),E!==null?E.SRGB_ALPHA_EXT:null;if(B===ck)return i.RED;if(B===sc)return i.RED_INTEGER;if(B===lk)return i.RG;if(B===nc)return i.RG_INTEGER;if(B===rc)return i.RGBA_INTEGER;if(B===zs||B===$s||B===An||B===In)if(o===yg)if(E=A.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(B===zs)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===$s)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===An)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===In)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=A.get("WEBGL_compressed_texture_s3tc"),E!==null){if(B===zs)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===$s)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===An)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===In)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===jD||B===XD||B===zD||B===$D)if(E=A.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(B===jD)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===XD)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===zD)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===$D)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===Dc)return E=A.get("WEBGL_compressed_texture_etc1"),E!==null?E.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===Ah||B===Ih)if(E=A.get("WEBGL_compressed_texture_etc"),E!==null){if(B===Ah)return o===yg?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(B===Ih)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===gh||B===Ch||B===Bh||B===ih||B===Qh||B===Eh||B===oh||B===th||B===eh||B===ah||B===sh||B===nh||B===rh||B===Dh)if(E=A.get("WEBGL_compressed_texture_astc"),E!==null){if(B===gh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===Ch)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===Bh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===ih)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===Qh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===Eh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===oh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===th)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===eh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===ah)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===sh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===nh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===rh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===Dh)return o===yg?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===gn||B===hh||B===ch)if(E=A.get("EXT_texture_compression_bptc"),E!==null){if(B===gn)return o===yg?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(B===hh)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(B===ch)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(B===wk||B===lh||B===wh||B===Sh)if(E=A.get("EXT_texture_compression_rgtc"),E!==null){if(B===gn)return E.COMPRESSED_RED_RGTC1_EXT;if(B===lh)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===wh)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===Sh)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===aE?g?i.UNSIGNED_INT_24_8:(E=A.get("WEBGL_depth_texture"),E!==null?E.UNSIGNED_INT_24_8_WEBGL:null):i[B]!==void 0?i[B]:null}return{convert:C}}class Vk extends _C{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Eo extends XI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OJ={type:"move"};class ED{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,Q=null;const E=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){Q=!0;for(const c of A.hand.values()){const D=I.getJointPose(c,g),h=this._getHandJoint(t,c);D!==null&&(h.matrix.fromArray(D.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=D.radius),h.visible=D!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,r=.005;t.inputState.pinching&&s>n+r?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-r&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(OJ)))}return E!==null&&(E.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=Q!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Eo;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const vJ=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZJ=`
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

#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>

uniform float useDash;
uniform float dashArray;
uniform float dashOffset;
uniform float dashRatio;
uniform sampler2D alphaMap;
uniform float useAlphaMap;

varying vec2 vUV;
varying vec4 vColor;
varying float vCounters;

void main()	{
	#include <logdepthbuf_fragment>
	#include <${vY<154?"encodings_fragment":"colorspace_fragment"}>

	vec4 c = vColor;

	if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV ).r;

	if( useDash == 1. ){
			c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	}

	gl_FragColor = LinearTosRGB(c);
}
`,iL=`
    ${DI.logdepthbuf_pars_vertex}
    ${DI.fog_pars_vertex}

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

        ${DI.logdepthbuf_vertex}
        ${DI.fog_vertex}
    }
`,QL=i=>({ref:i&1}),aG=i=>({ref:i[0]});function EL(i){let A;const I=i[15].default,g=wC(I,i,i[17],aG);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&131073)&&SC(g,I,C,C[17],A?yC(I,C[17],B,QL):GC(C[17]),aG)},i(C){A||(T(g,C),A=!0)},o(C){Z(g,C),A=!1},d(C){g&&g.d(C)}}}function oL(i){let A,I;const g=[{is:i[0]},i[4],{fragmentShader:BL},{vertexShader:iL}];let C={$$slots:{default:[EL]},$$scope:{ctx:i}};for(let B=0;B<g.length;B+=1)C=cC(C,g[B]);return A=new HI({props:C}),i[16](A),{c(){iA(A.$$.fragment)},l(B){QA(A.$$.fragment,B)},m(B,Q){EA(A,B,Q),I=!0},p(B,[Q]){const E=Q&17?qt(g,[Q&1&&{is:B[0]},Q&16&&Yt(B[4]),g[2],g[3]]):{};Q&131073&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E)},i(B){I||(T(A.$$.fragment,B),I=!0)},o(B){Z(A.$$.fragment,B),I=!1},d(B){i[16](null),oA(A,B)}}}function tL(i,A,I){const g=["opacity","color","dashOffset","dashArray","dashRatio","attenuate","width","scaleDown","alphaMap"];let C=bB(A,g),B,Q,{$$slots:E={},$$scope:o}=A,{opacity:t=1}=A,{color:e="#ffffff"}=A,{dashOffset:a=0}=A,{dashArray:s=0}=A,{dashRatio:n=0}=A,{attenuate:r=!0}=A,{width:c=1}=A,{scaleDown:D=0}=A,{alphaMap:h=void 0}=A,{invalidate:w,size:l}=YQ();RC(i,l,y=>I(14,B=y));const S=new OB({uniforms:{lineWidth:{value:c},color:{value:new vA(e)},opacity:{value:t},resolution:{value:new wA(1,1)},sizeAttenuation:{value:r?1:0},dashArray:{value:s},dashOffset:{value:a},dashRatio:{value:n},useDash:{value:s>0?1:0},scaleDown:{value:D/10},alphaTest:{value:0},alphaMap:{value:h},useAlphaMap:{value:h?1:0}}}),U=Ka();RC(i,U,y=>I(1,Q=y));function k(y){Li[y?"unshift":"push"](()=>{Q=y,U.set(Q)})}return i.$$set=y=>{A=cC(cC({},A),nE(y)),I(4,C=bB(A,g)),"opacity"in y&&I(5,t=y.opacity),"color"in y&&I(6,e=y.color),"dashOffset"in y&&I(7,a=y.dashOffset),"dashArray"in y&&I(8,s=y.dashArray),"dashRatio"in y&&I(9,n=y.dashRatio),"attenuate"in y&&I(10,r=y.attenuate),"width"in y&&I(11,c=y.width),"scaleDown"in y&&I(12,D=y.scaleDown),"alphaMap"in y&&I(13,h=y.alphaMap),"$$scope"in y&&I(17,o=y.$$scope)},i.$$.update=()=>{i.$$.dirty&16384&&(I(0,S.uniforms.resolution.value=new wA(B.width,B.height),S),w()),i.$$.dirty&3040&&(I(0,S.uniforms.dashRatio.value=n,S),I(0,S.uniforms.dashArray.value=s,S),I(0,S.uniforms.dashOffset.value=a,S),I(0,S.uniforms.lineWidth.value=c,S),I(0,S.uniforms.opacity.value=t,S),I(0,S.uniforms.color.value=new vA(e),S),w())},[S,Q,l,U,C,t,e,a,s,n,r,c,D,h,B,E,k,o]}class fa extends Ag{constructor(A){super(),Ig(this,A,tL,oL,$I,{opacity:5,color:6,dashOffset:7,dashArray:8,dashRatio:9,attenuate:10,width:11,scaleDown:12,alphaMap:13})}}const eL=`
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
}`,aL=`varying vec3 vPosition;
varying vec3 vNormal;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * viewMatrix * modelPosition;
	vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
	vPosition = modelPosition.xyz;
	vNormal = modelNormal.xyz;
}`,sL=i=>({ref:i&1}),sG=i=>({ref:i[0]});function nL(i){let A;const I=i[8].default,g=wC(I,i,i[10],sG);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&SC(g,I,C,C[10],A?yC(I,C[10],B,sL):GC(C[10]),sG)},i(C){A||(T(g,C),A=!0)},o(C){Z(g,C),A=!1},d(C){g&&g.d(C)}}}function rL(i){let A,I;const g=[{is:i[0]},{fragmentShader:eL},{vertexShader:aL},{transparent:!0},{blending:Te},{depthTest:!1},i[3]];let C={$$slots:{default:[nL]},$$scope:{ctx:i}};for(let B=0;B<g.length;B+=1)C=cC(C,g[B]);return A=new HI({props:C}),i[9](A),{c(){iA(A.$$.fragment)},l(B){QA(A.$$.fragment,B)},m(B,Q){EA(A,B,Q),I=!0},p(B,[Q]){const E=Q&9?qt(g,[Q&1&&{is:B[0]},g[1],g[2],g[3],g[4],g[5],Q&8&&Yt(B[3])]):{};Q&1025&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E)},i(B){I||(T(A.$$.fragment,B),I=!0)},o(B){Z(A.$$.fragment,B),I=!1},d(B){i[9](null),oA(A,B)}}}function DL(i,A,I){const g=["falloff","glowInternalRadius","glowColor","glowSharpness"];let C=bB(A,g),B,{$$slots:Q={},$$scope:E}=A,{falloff:o=.1}=A,{glowInternalRadius:t=6}=A,{glowColor:e="green"}=A,{glowSharpness:a=1}=A,s=new OB({uniforms:{falloff:{value:o},glowInternalRadius:{value:t},glowColor:{value:new vA(e)},glowSharpness:{value:a}}}),{invalidate:n}=YQ();const r=Ka();RC(i,r,D=>I(1,B=D));function c(D){Li[D?"unshift":"push"](()=>{B=D,r.set(B)})}return i.$$set=D=>{A=cC(cC({},A),nE(D)),I(3,C=bB(A,g)),"falloff"in D&&I(4,o=D.falloff),"glowInternalRadius"in D&&I(5,t=D.glowInternalRadius),"glowColor"in D&&I(6,e=D.glowColor),"glowSharpness"in D&&I(7,a=D.glowSharpness),"$$scope"in D&&I(10,E=D.$$scope)},i.$$.update=()=>{i.$$.dirty&240&&(I(0,s.uniforms.falloff.value=o,s),I(0,s.uniforms.glowInternalRadius.value=t,s),I(0,s.uniforms.glowColor.value=new vA(e),s),I(0,s.uniforms.glowSharpness.value=a,s),n())},[s,B,r,C,o,t,e,a,Q,c,E]}class hL extends Ag{constructor(A){super(),Ig(this,A,DL,rL,$I,{falloff:4,glowInternalRadius:5,glowColor:6,glowSharpness:7})}}const cL=`
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
}`,lL=`uniform float time;
attribute float size;
varying vec3 vColor;
void main() {
	vColor = color;
	vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
	gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
	gl_Position = projectionMatrix * mvPosition;
}`,wL=i=>({ref:i&33554432}),nG=i=>({ref:i[25]});function SL(i){let A,I,g,C,B,Q;return A=new HI.BufferAttribute({props:{attach:kL,args:[i[2],3]}}),g=new HI.BufferAttribute({props:{attach:ML,args:[i[3],3]}}),B=new HI.BufferAttribute({props:{attach:UL,args:[i[4],1]}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p(E,o){const t={};o&4&&(t.args=[E[2],3]),A.$set(t);const e={};o&8&&(e.args=[E[3],3]),g.$set(e);const a={};o&16&&(a.args=[E[4],1]),B.$set(a)},i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function GL(i){let A,I,g,C,B;A=new HI.BufferGeometry({props:{$$slots:{default:[SL]},$$scope:{ctx:i}}}),g=new HI({props:{is:i[8],blending:Te,"uniforms.fade.value":i[0]?1:0,"uniforms.time.value":i[5],"uniforms.opacity.value":i[1],depthWrite:!1,transparent:!0,vertexColors:!0}});const Q=i[17].default,E=wC(Q,i,i[19],nG);return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o)},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),B=!0},p(o,t){const e={};t&524316&&(e.$$scope={dirty:t,ctx:o}),A.$set(e);const a={};t&1&&(a["uniforms.fade.value"]=o[0]?1:0),t&32&&(a["uniforms.time.value"]=o[5]),t&2&&(a["uniforms.opacity.value"]=o[1]),g.$set(a),E&&E.p&&(!B||t&34078720)&&SC(E,Q,o,o[19],B?yC(Q,o[19],t,wL):GC(o[19]),nG)},i(o){B||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E,o),B=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E,o),B=!1},d(o){o&&(tA(I),tA(C)),oA(A,o),oA(g,o),E&&E.d(o)}}}function yL(i){let A,I;const g=[i[9]];let C={$$slots:{default:[GL,({ref:B})=>({25:B}),({ref:B})=>B?33554432:0]},$$scope:{ctx:i}};for(let B=0;B<g.length;B+=1)C=cC(C,g[B]);return A=new HI.Points({props:C}),i[18](A),{c(){iA(A.$$.fragment)},l(B){QA(A.$$.fragment,B)},m(B,Q){EA(A,B,Q),I=!0},p(B,[Q]){const E=Q&512?qt(g,[Yt(B[9])]):{};Q&34078783&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E)},i(B){I||(T(A.$$.fragment,B),I=!0)},o(B){Z(A.$$.fragment,B),I=!1},d(B){i[18](null),oA(A,B)}}}const kL=(i,A)=>(i.setAttribute("position",A),()=>{}),ML=(i,A)=>(i.setAttribute("color",A),()=>{}),UL=(i,A)=>(i.setAttribute("size",A),()=>{});function NL(i,A,I){const g=["count","radius","depth","factor","saturation","lightness","speed","fade","opacity"];let C=bB(A,g),B,{$$slots:Q={},$$scope:E}=A,{count:o=5e3}=A,{radius:t=50}=A,{depth:e=50}=A,{factor:a=6}=A,{saturation:s=1}=A,{lightness:n=.8}=A,{speed:r=1}=A,{fade:c=!0}=A,{opacity:D=1}=A;const h=new R,w=new Sn,l=x=>h.setFromSpherical(w.set(x,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI));let S,U,k;const y=Ka();RC(i,y,x=>I(6,B=x));let p=0;const{stop:q,start:M}=uo(x=>{I(5,p+=x*r)},{autoStart:!1}),N=new OB({uniforms:{time:{value:0},fade:{value:1},opacity:{value:1}},vertexShader:lL,fragmentShader:cL});function L(x){Li[x?"unshift":"push"](()=>{B=x,y.set(B)})}return i.$$set=x=>{A=cC(cC({},A),nE(x)),I(9,C=bB(A,g)),"count"in x&&I(10,o=x.count),"radius"in x&&I(11,t=x.radius),"depth"in x&&I(12,e=x.depth),"factor"in x&&I(13,a=x.factor),"saturation"in x&&I(14,s=x.saturation),"lightness"in x&&I(15,n=x.lightness),"speed"in x&&I(16,r=x.speed),"fade"in x&&I(0,c=x.fade),"opacity"in x&&I(1,D=x.opacity),"$$scope"in x&&I(19,E=x.$$scope)},i.$$.update=()=>{if(i.$$.dirty&64512){const x=[],b=[],P=Array.from({length:o},()=>(.5+.5*Math.random())*a),v=new vA;let z=t+e;const CA=e/o;for(let gA=0;gA<o;gA++){z-=CA*Math.random();const DA=l(z);x.push(DA.x,DA.y,DA.z),v.setHSL(gA/o,s,n),b.push(v.r,v.g,v.b)}I(2,S=new Float32Array(x)),I(3,U=new Float32Array(b)),I(4,k=new Float32Array(P))}i.$$.dirty&65536&&(r!==0?M():q())},[c,D,S,U,k,p,B,y,N,C,o,t,e,a,s,n,r,Q,L,E]}class pL extends Ag{constructor(A){super(),Ig(this,A,NL,yL,$I,{count:10,radius:11,depth:12,factor:13,saturation:14,lightness:15,speed:16,fade:0,opacity:1})}}const KL=`

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
`,FL=`

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
`,dL=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,RL=dL,JL=`
	${KL}
	${FL}
`;`${RL}${JL}${DI.tonemapping_fragment}${DI.colorspace_fragment}`;function fL(i){let A,I;return A=new lr({props:{enableDamping:!0,autoRotate:!0,rotateSpeed:.1,enablePan:!1,enableZoom:!1}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function uL(i){let A,I,g,C;return A=new pL({props:{speed:1}}),g=new HI.PerspectiveCamera({props:{makeDefault:!0,"position.y":100,"position.x":100,"position.z":100,fov:100,$$slots:{default:[fL]},$$scope:{ctx:i}}}),g.$on("create",qL),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,[Q]){const E={};Q&1&&(E.$$scope={dirty:Q,ctx:B}),g.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}const qL=({ref:i})=>{i.lookAt(0,0,0)};class YL extends Ag{constructor(A){super(),Ig(this,A,null,uL,$I,{})}}function LL(i){let A,I,g,C;return A=new HI.MeshBasicMaterial({props:{color:"yellow"}}),g=new HI.SphereGeometry({props:{args:[6]}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p:rg,i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function mL(i){let A,I,g,C;return A=new hL({props:{glowColor:"yellow"}}),g=new HI.SphereGeometry({props:{args:[10]}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p:rg,i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function HL(i){let A,I,g,C;return A=new HI.Mesh({props:{$$slots:{default:[LL]},$$scope:{ctx:i}}}),g=new HI.Mesh({props:{$$slots:{default:[mL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&2&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E);const o={};Q&2&&(o.$$scope={dirty:Q,ctx:B}),g.$set(o)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function TL(i){let A,I;return A=new HI.Group({props:{"position.y":i[0].y,"position.x":i[0].x,$$slots:{default:[HL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function bL(i,A,I){let{position:g={x:0,y:0}}=A;return i.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class Ot extends Ag{constructor(A){super(),Ig(this,A,bL,TL,$I,{position:0})}}function xL(i){let A,I,g,C;return A=new HI.MeshBasicMaterial({props:{color:"blue"}}),g=new HI.SphereGeometry({props:{args:[2]}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p:rg,i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function _L(i){let A,I;return A=new HI.Mesh({props:{$$slots:{default:[xL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function OL(i){let A,I;return A=new HI.Group({props:{"position.y":i[0].y,"position.x":i[0].x,$$slots:{default:[_L]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B["position.y"]=g[0].y),C&1&&(B["position.x"]=g[0].x),C&2&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function vL(i,A,I){let{position:g={x:-3,y:2}}=A;return i.$$set=C=>{"position"in C&&I(0,g=C.position)},[g]}class wl extends Ag{constructor(A){super(),Ig(this,A,vL,OL,$I,{position:0})}}function ZL(i){let A,I;return A=new lr({props:{enableDamping:!0,enablePan:!0,enableZoom:!1}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function rG(i){let A,I;return A=new HI.Group({props:{position:i[3](),$$slots:{default:[WL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&32&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function PL(i){let A,I,g,C,B,Q;return A=new mQ({props:{shape:"ball",args:[1],mass:1}}),g=new wl({}),B=new HQ({props:{range:100,gravitationalConstant:void 0,strength:1,gravityType:"static"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p:rg,i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function WL(i){let A,I;return A=new LQ({props:{linearVelocity:i[2](),$$slots:{default:[PL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&32&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function DG(i){let A,I;return A=new HI.Group({props:{position:[0,0,0],$$slots:{default:[jL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&32&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function VL(i){let A,I,g,C,B,Q;return A=new mQ({props:{shape:"ball",args:[1],mass:1e5}}),g=new Ot({}),B=new HQ({props:{range:100,gravitationalConstant:void 0,strength:1,gravityType:"static"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p:rg,i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function jL(i){let A,I;return A=new LQ({props:{linearVelocity:[0,0,0],$$slots:{default:[VL]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&32&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function XL(i){let A,I,g,C,B,Q,E;A=new HI.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[ZL]},$$scope:{ctx:i}}}),A.$on("create",zL),g=new HI.GridHelper({props:{args:[100]}});let o=i[0]&&rG(i),t=i[1]&&DG(i);return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),o&&o.c(),B=uA(),t&&t.c(),Q=fg()},l(e){QA(A.$$.fragment,e),I=qA(e),QA(g.$$.fragment,e),C=qA(e),o&&o.l(e),B=qA(e),t&&t.l(e),Q=fg()},m(e,a){EA(A,e,a),rA(e,I,a),EA(g,e,a),rA(e,C,a),o&&o.m(e,a),rA(e,B,a),t&&t.m(e,a),rA(e,Q,a),E=!0},p(e,[a]){const s={};a&32&&(s.$$scope={dirty:a,ctx:e}),A.$set(s),e[0]?o?(o.p(e,a),a&1&&T(o,1)):(o=rG(e),o.c(),T(o,1),o.m(B.parentNode,B)):o&&(bg(),Z(o,1,1,()=>{o=null}),xg()),e[1]?t?(t.p(e,a),a&2&&T(t,1)):(t=DG(e),t.c(),T(t,1),t.m(Q.parentNode,Q)):t&&(bg(),Z(t,1,1,()=>{t=null}),xg())},i(e){E||(T(A.$$.fragment,e),T(g.$$.fragment,e),T(o),T(t),E=!0)},o(e){Z(A.$$.fragment,e),Z(g.$$.fragment,e),Z(o),Z(t),E=!1},d(e){e&&(tA(I),tA(C),tA(B),tA(Q)),oA(A,e),oA(g,e),o&&o.d(e),t&&t.d(e)}}}const zL=({ref:i})=>{i.lookAt(0,-10,0)};function $L(i,A,I){let{showEarth:g,showSun:C,isMoving:B}=A;function Q(){return B?[-5,0,-40]:[0,0,0]}function E(){return B?[50,0,0]:[0,0,0]}return i.$$set=o=>{"showEarth"in o&&I(0,g=o.showEarth),"showSun"in o&&I(1,C=o.showSun),"isMoving"in o&&I(4,B=o.isMoving)},[g,C,Q,E,B]}class Am extends Ag{constructor(A){super(),Ig(this,A,$L,XL,$I,{showEarth:0,showSun:1,isMoving:4})}}function hG(i){let A,I,g,C;return A=new HI.Mesh({props:{$$slots:{default:[Im]},$$scope:{ctx:i}}}),g=new HI.Mesh({props:{$$slots:{default:[gm]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&4128&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E);const o={};Q&4160&&(o.$$scope={dirty:Q,ctx:B}),g.$set(o)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function Im(i){let A,I,g,C;return A=new Ja({props:{points:i[5]}}),g=new fa({props:{width:.05,color:"#606060"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&32&&(E.points=B[5]),A.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function gm(i){let A,I,g,C;return A=new Ja({props:{points:i[6]}}),g=new fa({props:{width:.05,color:"#606060"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&64&&(E.points=B[6]),A.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function Cm(i){let A,I;return A=new lr({props:{enableDamping:!0,enablePan:!0,enableZoom:!1}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function cG(i){let A,I,g,C;return A=new HI.Group({props:{position:i[2]?[-20,30,0]:[25,0,0],$$slots:{default:[im]},$$scope:{ctx:i}}}),g=new HI.Group({props:{position:i[2]?[20,30,0]:[-25,0,0],$$slots:{default:[Em]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&4&&(E.position=B[2]?[-20,30,0]:[25,0,0]),Q&4108&&(E.$$scope={dirty:Q,ctx:B}),A.$set(E);const o={};Q&4&&(o.position=B[2]?[20,30,0]:[-25,0,0]),Q&4116&&(o.$$scope={dirty:Q,ctx:B}),g.$set(o)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function lG(i){let A,I;return A=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function Bm(i){let A,I,g,C,B,Q;A=new mQ({props:{shape:"ball",args:[1],mass:10}}),g=new Ot({});let E=i[2]&&lG();return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c(),B=fg()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o),B=fg()},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),rA(o,B,t),Q=!0},p(o,t){o[2]?E?(E.p(o,t),t&4&&T(E,1)):(E=lG(),E.c(),T(E,1),E.m(B.parentNode,B)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg())},i(o){Q||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E),Q=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E),Q=!1},d(o){o&&(tA(I),tA(C),tA(B)),oA(A,o),oA(g,o),E&&E.d(o)}}}function im(i){let A,I,g;function C(Q){i[7](Q)}let B={linearVelocity:i[2]?[10,10,-2]:[0,0,0],$$slots:{default:[Bm]},$$scope:{ctx:i}};return i[3]!==void 0&&(B.rigidBody=i[3]),A=new LQ({props:B}),Li.push(()=>ca(A,"rigidBody",C)),{c(){iA(A.$$.fragment)},l(Q){QA(A.$$.fragment,Q)},m(Q,E){EA(A,Q,E),g=!0},p(Q,E){const o={};E&4&&(o.linearVelocity=Q[2]?[10,10,-2]:[0,0,0]),E&4100&&(o.$$scope={dirty:E,ctx:Q}),!I&&E&8&&(I=!0,o.rigidBody=Q[3],ha(()=>I=!1)),A.$set(o)},i(Q){g||(T(A.$$.fragment,Q),g=!0)},o(Q){Z(A.$$.fragment,Q),g=!1},d(Q){oA(A,Q)}}}function wG(i){let A,I;return A=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function Qm(i){let A,I,g,C,B,Q;A=new mQ({props:{shape:"ball",args:[1],mass:10}}),g=new Ot({});let E=i[2]&&wG();return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c(),B=fg()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o),B=fg()},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),rA(o,B,t),Q=!0},p(o,t){o[2]?E?(E.p(o,t),t&4&&T(E,1)):(E=wG(),E.c(),T(E,1),E.m(B.parentNode,B)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg())},i(o){Q||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E),Q=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E),Q=!1},d(o){o&&(tA(I),tA(C),tA(B)),oA(A,o),oA(g,o),E&&E.d(o)}}}function Em(i){let A,I,g;function C(Q){i[8](Q)}let B={linearVelocity:i[2]?[-10,-10,4]:[0,0,0],$$slots:{default:[Qm]},$$scope:{ctx:i}};return i[4]!==void 0&&(B.rigidBody=i[4]),A=new LQ({props:B}),Li.push(()=>ca(A,"rigidBody",C)),{c(){iA(A.$$.fragment)},l(Q){QA(A.$$.fragment,Q)},m(Q,E){EA(A,Q,E),g=!0},p(Q,E){const o={};E&4&&(o.linearVelocity=Q[2]?[-10,-10,4]:[0,0,0]),E&4100&&(o.$$scope={dirty:E,ctx:Q}),!I&&E&16&&(I=!0,o.rigidBody=Q[4],ha(()=>I=!1)),A.$set(o)},i(Q){g||(T(A.$$.fragment,Q),g=!0)},o(Q){Z(A.$$.fragment,Q),g=!1},d(Q){oA(A,Q)}}}function SG(i){let A,I;return A=new LQ({props:{linearVelocity:i[2]?[1,1,1]:[0,0,0],$$slots:{default:[om]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&4&&(B.linearVelocity=g[2]?[1,1,1]:[0,0,0]),C&4096&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function om(i){let A,I,g,C,B,Q;return A=new mQ({props:{shape:"ball",args:[1],mass:.1}}),g=new wl({}),B=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p:rg,i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function tm(i){let A,I,g,C,B,Q,E=i[2]&&hG(i);I=new HI.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[Cm]},$$scope:{ctx:i}}}),I.$on("create",em);let o=i[1]&&cG(i),t=i[0]&&SG(i);return{c(){E&&E.c(),A=uA(),iA(I.$$.fragment),g=uA(),o&&o.c(),C=uA(),t&&t.c(),B=fg()},l(e){E&&E.l(e),A=qA(e),QA(I.$$.fragment,e),g=qA(e),o&&o.l(e),C=qA(e),t&&t.l(e),B=fg()},m(e,a){E&&E.m(e,a),rA(e,A,a),EA(I,e,a),rA(e,g,a),o&&o.m(e,a),rA(e,C,a),t&&t.m(e,a),rA(e,B,a),Q=!0},p(e,[a]){e[2]?E?(E.p(e,a),a&4&&T(E,1)):(E=hG(e),E.c(),T(E,1),E.m(A.parentNode,A)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg());const s={};a&4096&&(s.$$scope={dirty:a,ctx:e}),I.$set(s),e[1]?o?(o.p(e,a),a&2&&T(o,1)):(o=cG(e),o.c(),T(o,1),o.m(C.parentNode,C)):o&&(bg(),Z(o,1,1,()=>{o=null}),xg()),e[0]?t?(t.p(e,a),a&1&&T(t,1)):(t=SG(e),t.c(),T(t,1),t.m(B.parentNode,B)):t&&(bg(),Z(t,1,1,()=>{t=null}),xg())},i(e){Q||(T(E),T(I.$$.fragment,e),T(o),T(t),Q=!0)},o(e){Z(E),Z(I.$$.fragment,e),Z(o),Z(t),Q=!1},d(e){e&&(tA(A),tA(g),tA(C),tA(B)),E&&E.d(e),oA(I,e),o&&o.d(e),t&&t.d(e)}}}const ND=2e3,em=({ref:i})=>{i.lookAt(0,-10,0)};function am(i,A,I){let g,C,{showEarth:B,showSun:Q,isMoving:E}=A,o,t,e=0,a=Array.from({length:ND},()=>new R(0,0,0)),s=Array.from({length:ND},()=>new R(0,0,0));uo(()=>{for(let c=0;c<g.length;c++)if(g[c]!=null){const D=g[c].translation();C[c][e].set(D.x,D.y,D.z)}e=(e+1)%ND,I(5,a=[...a]),I(6,s=[...s])});function n(c){o=c,I(3,o)}function r(c){t=c,I(4,t)}return i.$$set=c=>{"showEarth"in c&&I(0,B=c.showEarth),"showSun"in c&&I(1,Q=c.showSun),"isMoving"in c&&I(2,E=c.isMoving)},i.$$.update=()=>{i.$$.dirty&24&&(g=[o,t]),i.$$.dirty&96&&(C=[a,s])},[B,Q,E,o,t,a,s,n,r]}class sm extends Ag{constructor(A){super(),Ig(this,A,am,tm,$I,{showEarth:0,showSun:1,isMoving:2})}}function GG(i){let A,I,g,C,B,Q;return A=new HI.Mesh({props:{$$slots:{default:[nm]},$$scope:{ctx:i}}}),g=new HI.Mesh({props:{$$slots:{default:[rm]},$$scope:{ctx:i}}}),B=new HI.Mesh({props:{$$slots:{default:[Dm]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p(E,o){const t={};o&131136&&(t.$$scope={dirty:o,ctx:E}),A.$set(t);const e={};o&131200&&(e.$$scope={dirty:o,ctx:E}),g.$set(e);const a={};o&131328&&(a.$$scope={dirty:o,ctx:E}),B.$set(a)},i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function nm(i){let A,I,g,C;return A=new Ja({props:{points:i[6]}}),g=new fa({props:{width:.05,color:"#606060"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&64&&(E.points=B[6]),A.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function rm(i){let A,I,g,C;return A=new Ja({props:{points:i[7]}}),g=new fa({props:{width:.05,color:"#606060"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&128&&(E.points=B[7]),A.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function Dm(i){let A,I,g,C;return A=new Ja({props:{points:i[8]}}),g=new fa({props:{width:.05,color:"#606060"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p(B,Q){const E={};Q&256&&(E.points=B[8]),A.$set(E)},i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}function hm(i){let A,I;return A=new lr({props:{enableDamping:!0,enablePan:!0,enableZoom:!1}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function yG(i){let A,I,g,C,B,Q,E;A=new HI.Group({props:{position:i[2]?[-30,30,50]:[50,0,0],$$slots:{default:[lm]},$$scope:{ctx:i}}});function o(e){i[11](e)}let t={linearVelocity:i[2]?[0,5,-20]:[0,0,0],$$slots:{default:[wm]},$$scope:{ctx:i}};return i[4]!==void 0&&(t.rigidBody=i[4]),g=new LQ({props:t}),Li.push(()=>ca(g,"rigidBody",o)),Q=new HI.Group({props:{position:i[2]?[30,30,50]:[-50,0,0],$$slots:{default:[Gm]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),B=uA(),iA(Q.$$.fragment)},l(e){QA(A.$$.fragment,e),I=qA(e),QA(g.$$.fragment,e),B=qA(e),QA(Q.$$.fragment,e)},m(e,a){EA(A,e,a),rA(e,I,a),EA(g,e,a),rA(e,B,a),EA(Q,e,a),E=!0},p(e,a){const s={};a&4&&(s.position=e[2]?[-30,30,50]:[50,0,0]),a&131084&&(s.$$scope={dirty:a,ctx:e}),A.$set(s);const n={};a&4&&(n.linearVelocity=e[2]?[0,5,-20]:[0,0,0]),a&131076&&(n.$$scope={dirty:a,ctx:e}),!C&&a&16&&(C=!0,n.rigidBody=e[4],ha(()=>C=!1)),g.$set(n);const r={};a&4&&(r.position=e[2]?[30,30,50]:[-50,0,0]),a&131108&&(r.$$scope={dirty:a,ctx:e}),Q.$set(r)},i(e){E||(T(A.$$.fragment,e),T(g.$$.fragment,e),T(Q.$$.fragment,e),E=!0)},o(e){Z(A.$$.fragment,e),Z(g.$$.fragment,e),Z(Q.$$.fragment,e),E=!1},d(e){e&&(tA(I),tA(B)),oA(A,e),oA(g,e),oA(Q,e)}}}function kG(i){let A,I;return A=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function cm(i){let A,I,g,C,B,Q;A=new mQ({props:{shape:"ball",args:[1],mass:10}}),g=new Ot({});let E=i[2]&&kG();return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c(),B=fg()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o),B=fg()},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),rA(o,B,t),Q=!0},p(o,t){o[2]?E?(E.p(o,t),t&4&&T(E,1)):(E=kG(),E.c(),T(E,1),E.m(B.parentNode,B)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg())},i(o){Q||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E),Q=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E),Q=!1},d(o){o&&(tA(I),tA(C),tA(B)),oA(A,o),oA(g,o),E&&E.d(o)}}}function lm(i){let A,I,g;function C(Q){i[10](Q)}let B={linearVelocity:i[2]?[5,0,0]:[0,0,0],$$slots:{default:[cm]},$$scope:{ctx:i}};return i[3]!==void 0&&(B.rigidBody=i[3]),A=new LQ({props:B}),Li.push(()=>ca(A,"rigidBody",C)),{c(){iA(A.$$.fragment)},l(Q){QA(A.$$.fragment,Q)},m(Q,E){EA(A,Q,E),g=!0},p(Q,E){const o={};E&4&&(o.linearVelocity=Q[2]?[5,0,0]:[0,0,0]),E&131076&&(o.$$scope={dirty:E,ctx:Q}),!I&&E&8&&(I=!0,o.rigidBody=Q[3],ha(()=>I=!1)),A.$set(o)},i(Q){g||(T(A.$$.fragment,Q),g=!0)},o(Q){Z(A.$$.fragment,Q),g=!1},d(Q){oA(A,Q)}}}function MG(i){let A,I;return A=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function wm(i){let A,I,g,C,B,Q;A=new mQ({props:{shape:"ball",args:[1],mass:10}}),g=new Ot({});let E=i[2]&&MG();return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c(),B=fg()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o),B=fg()},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),rA(o,B,t),Q=!0},p(o,t){o[2]?E?(E.p(o,t),t&4&&T(E,1)):(E=MG(),E.c(),T(E,1),E.m(B.parentNode,B)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg())},i(o){Q||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E),Q=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E),Q=!1},d(o){o&&(tA(I),tA(C),tA(B)),oA(A,o),oA(g,o),E&&E.d(o)}}}function UG(i){let A,I;return A=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p:rg,i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function Sm(i){let A,I,g,C,B,Q;A=new mQ({props:{shape:"ball",args:[1],mass:10}}),g=new Ot({});let E=i[2]&&UG();return{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),E&&E.c(),B=fg()},l(o){QA(A.$$.fragment,o),I=qA(o),QA(g.$$.fragment,o),C=qA(o),E&&E.l(o),B=fg()},m(o,t){EA(A,o,t),rA(o,I,t),EA(g,o,t),rA(o,C,t),E&&E.m(o,t),rA(o,B,t),Q=!0},p(o,t){o[2]?E?(E.p(o,t),t&4&&T(E,1)):(E=UG(),E.c(),T(E,1),E.m(B.parentNode,B)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg())},i(o){Q||(T(A.$$.fragment,o),T(g.$$.fragment,o),T(E),Q=!0)},o(o){Z(A.$$.fragment,o),Z(g.$$.fragment,o),Z(E),Q=!1},d(o){o&&(tA(I),tA(C),tA(B)),oA(A,o),oA(g,o),E&&E.d(o)}}}function Gm(i){let A,I,g;function C(Q){i[12](Q)}let B={linearVelocity:i[2]?[-5,0,5]:[0,0,0],$$slots:{default:[Sm]},$$scope:{ctx:i}};return i[5]!==void 0&&(B.rigidBody=i[5]),A=new LQ({props:B}),Li.push(()=>ca(A,"rigidBody",C)),{c(){iA(A.$$.fragment)},l(Q){QA(A.$$.fragment,Q)},m(Q,E){EA(A,Q,E),g=!0},p(Q,E){const o={};E&4&&(o.linearVelocity=Q[2]?[-5,0,5]:[0,0,0]),E&131076&&(o.$$scope={dirty:E,ctx:Q}),!I&&E&32&&(I=!0,o.rigidBody=Q[5],ha(()=>I=!1)),A.$set(o)},i(Q){g||(T(A.$$.fragment,Q),g=!0)},o(Q){Z(A.$$.fragment,Q),g=!1},d(Q){oA(A,Q)}}}function NG(i){let A,I;return A=new LQ({props:{linearVelocity:i[2]?[1,1,1]:[0,0,0],$$slots:{default:[ym]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&4&&(B.linearVelocity=g[2]?[1,1,1]:[0,0,0]),C&131072&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function ym(i){let A,I,g,C,B,Q;return A=new mQ({props:{shape:"ball",args:[1],mass:.1}}),g=new wl({}),B=new HQ({props:{range:100,gravitationalConstant:void 0,strength:3,gravityType:"static"}}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment),C=uA(),iA(B.$$.fragment)},l(E){QA(A.$$.fragment,E),I=qA(E),QA(g.$$.fragment,E),C=qA(E),QA(B.$$.fragment,E)},m(E,o){EA(A,E,o),rA(E,I,o),EA(g,E,o),rA(E,C,o),EA(B,E,o),Q=!0},p:rg,i(E){Q||(T(A.$$.fragment,E),T(g.$$.fragment,E),T(B.$$.fragment,E),Q=!0)},o(E){Z(A.$$.fragment,E),Z(g.$$.fragment,E),Z(B.$$.fragment,E),Q=!1},d(E){E&&(tA(I),tA(C)),oA(A,E),oA(g,E),oA(B,E)}}}function km(i){let A,I,g,C,B,Q,E=i[2]&&GG(i);I=new HI.PerspectiveCamera({props:{"position.y":20,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[hm]},$$scope:{ctx:i}}}),I.$on("create",Mm);let o=i[1]&&yG(i),t=i[0]&&NG(i);return{c(){E&&E.c(),A=uA(),iA(I.$$.fragment),g=uA(),o&&o.c(),C=uA(),t&&t.c(),B=fg()},l(e){E&&E.l(e),A=qA(e),QA(I.$$.fragment,e),g=qA(e),o&&o.l(e),C=qA(e),t&&t.l(e),B=fg()},m(e,a){E&&E.m(e,a),rA(e,A,a),EA(I,e,a),rA(e,g,a),o&&o.m(e,a),rA(e,C,a),t&&t.m(e,a),rA(e,B,a),Q=!0},p(e,[a]){e[2]?E?(E.p(e,a),a&4&&T(E,1)):(E=GG(e),E.c(),T(E,1),E.m(A.parentNode,A)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg());const s={};a&131072&&(s.$$scope={dirty:a,ctx:e}),I.$set(s),e[1]?o?(o.p(e,a),a&2&&T(o,1)):(o=yG(e),o.c(),T(o,1),o.m(C.parentNode,C)):o&&(bg(),Z(o,1,1,()=>{o=null}),xg()),e[0]?t?(t.p(e,a),a&1&&T(t,1)):(t=NG(e),t.c(),T(t,1),t.m(B.parentNode,B)):t&&(bg(),Z(t,1,1,()=>{t=null}),xg())},i(e){Q||(T(E),T(I.$$.fragment,e),T(o),T(t),Q=!0)},o(e){Z(E),Z(I.$$.fragment,e),Z(o),Z(t),Q=!1},d(e){e&&(tA(A),tA(g),tA(C),tA(B)),E&&E.d(e),oA(I,e),o&&o.d(e),t&&t.d(e)}}}const Ws=2e3,Mm=({ref:i})=>{i.lookAt(0,-10,0)};function Um(i,A,I){let g,C,{type:B="static"}=A,{showEarth:Q,showSun:E,isMoving:o}=A,t,e,a,s=Array.from({length:Ws},()=>new R(0,0,0)),n=Array.from({length:Ws},()=>new R(0,0,0)),r=Array.from({length:Ws},()=>new R(0,0,0)),c=0;uo(()=>{for(let l=0;l<g.length;l++)if(g[l]!=null){const S=g[l].translation();C[l][c].set(S.x,S.y,S.z)}c=(c+1)%Ws,I(6,s=[...s]),I(7,n=[...n]),I(8,r=[...r])});function D(l){t=l,I(3,t)}function h(l){e=l,I(4,e)}function w(l){a=l,I(5,a)}return i.$$set=l=>{"type"in l&&I(9,B=l.type),"showEarth"in l&&I(0,Q=l.showEarth),"showSun"in l&&I(1,E=l.showSun),"isMoving"in l&&I(2,o=l.isMoving)},i.$$.update=()=>{i.$$.dirty&56&&(g=[t,e,a]),i.$$.dirty&448&&(C=[s,n,r])},[Q,E,o,t,e,a,s,n,r,B,D,h,w]}class Nm extends Ag{constructor(A){super(),Ig(this,A,Um,km,$I,{type:9,showEarth:0,showSun:1,isMoving:2})}}function pG(i){let A,I;return A=new YL({}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function KG(i){let A,I;return A=new Am({props:{showEarth:i[0],showSun:i[1],isMoving:i[2]}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.showEarth=g[0]),C&2&&(B.showSun=g[1]),C&4&&(B.isMoving=g[2]),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function FG(i){let A,I;return A=new sm({props:{showEarth:i[0],showSun:i[1],isMoving:i[2]}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.showEarth=g[0]),C&2&&(B.showSun=g[1]),C&4&&(B.isMoving=g[2]),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function dG(i){let A,I;return A=new Nm({props:{showEarth:i[0],showSun:i[1],isMoving:i[2]}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.showEarth=g[0]),C&2&&(B.showSun=g[1]),C&4&&(B.isMoving=g[2]),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function pm(i){let A,I,g,C,B,Q=i[3]&&pG(),E=i[4]&&KG(i),o=i[5]&&FG(i),t=i[6]&&dG(i);return{c(){Q&&Q.c(),A=uA(),E&&E.c(),I=uA(),o&&o.c(),g=uA(),t&&t.c(),C=fg()},l(e){Q&&Q.l(e),A=qA(e),E&&E.l(e),I=qA(e),o&&o.l(e),g=qA(e),t&&t.l(e),C=fg()},m(e,a){Q&&Q.m(e,a),rA(e,A,a),E&&E.m(e,a),rA(e,I,a),o&&o.m(e,a),rA(e,g,a),t&&t.m(e,a),rA(e,C,a),B=!0},p(e,[a]){e[3]?Q?a&8&&T(Q,1):(Q=pG(),Q.c(),T(Q,1),Q.m(A.parentNode,A)):Q&&(bg(),Z(Q,1,1,()=>{Q=null}),xg()),e[4]?E?(E.p(e,a),a&16&&T(E,1)):(E=KG(e),E.c(),T(E,1),E.m(I.parentNode,I)):E&&(bg(),Z(E,1,1,()=>{E=null}),xg()),e[5]?o?(o.p(e,a),a&32&&T(o,1)):(o=FG(e),o.c(),T(o,1),o.m(g.parentNode,g)):o&&(bg(),Z(o,1,1,()=>{o=null}),xg()),e[6]?t?(t.p(e,a),a&64&&T(t,1)):(t=dG(e),t.c(),T(t,1),t.m(C.parentNode,C)):t&&(bg(),Z(t,1,1,()=>{t=null}),xg())},i(e){B||(T(Q),T(E),T(o),T(t),B=!0)},o(e){Z(Q),Z(E),Z(o),Z(t),B=!1},d(e){e&&(tA(A),tA(I),tA(g),tA(C)),Q&&Q.d(e),E&&E.d(e),o&&o.d(e),t&&t.d(e)}}}function Km(i,A,I){let g,C,B,Q;RC(i,Kr,h=>I(3,g=h)),RC(i,Fr,h=>I(4,C=h)),RC(i,Ll,h=>I(5,B=h)),RC(i,ml,h=>I(6,Q=h));let E=!1,o=!1,t=!1,e=!1;ut(()=>{E=!0,E&&n()});const a={"st-1":{showEarth:!0,showSun:!1,isMoving:!1},"st-2":{showEarth:!1,showSun:!0,isMoving:!1},"st-3":{showEarth:!0,showSun:!0,isMoving:!0},"st-4":{showEarth:!0,showSun:!0,isMoving:!0},"st-5":{showEarth:!0,showSun:!0,isMoving:!0},"st-6":{showEarth:!1,showSun:!0,isMoving:!1},"st-7":{showEarth:!1,showSun:!0,isMoving:!1},"st-8":{showEarth:!1,showSun:!0,isMoving:!0},"st-9":{showEarth:!0,showSun:!0,isMoving:!0},"st-10":{showEarth:!1,showSun:!0,isMoving:!1},"st-11":{showEarth:!1,showSun:!0,isMoving:!1},"st-12":{showEarth:!1,showSun:!0,isMoving:!0},"st-13":{showEarth:!0,showSun:!0,isMoving:!0}},s=[{id:"intro",parts:[],store:Fr,partConfigs:{}},{id:"section-1",parts:["st-1","st-2","st-3","st-4","st-5"],store:Fr,partConfigs:a},{id:"section-2",parts:["st-6","st-7","st-8","st-9"],store:Ll,partConfigs:a},{id:"section-3",parts:["st-10","st-11","st-12","st-13"],store:ml,partConfigs:a}];function n(){D(),s.forEach(h=>{r(h),h.parts.forEach(w=>{c(w,h)})})}function r(h){St.fromTo(`#${h.id}`,{autoAlpha:0},{scrollTrigger:{trigger:`#${h.id}`,start:"top 100%",end:"bottom 60%",toggleActions:"play reverse play reverse"},autoAlpha:1,duration:2})}function c(h,w){const l=w.partConfigs[h]||{},S=U=>{w.store.set(U),l&&(I(0,o=U&&l.showEarth),I(1,t=U&&l.showSun),I(2,e=U&&l.isMoving))};St.fromTo(`#${h}`,{autoAlpha:0},{scrollTrigger:{trigger:`#${h}`,start:"top 100%",end:"bottom 60%",toggleActions:"play reverse play reverse",onEnter:()=>S(!0),onLeave:()=>S(!1),onEnterBack:()=>S(!0),onLeaveBack:()=>S(!1)},autoAlpha:1,duration:2})}function D(){St.timeline({scrollTrigger:{trigger:"#title-spacer",start:"top top",end:"+=1000",scrub:1,onLeave:()=>Kr.set(!1),onLeaveBack:()=>Kr.set(!0)}}).add("step-1").to("#title",{autoAlpha:0},"step-1")}return[o,t,e,g,C,B,Q]}class Fm extends Ag{constructor(A){super(),Ig(this,A,Km,pm,$I,{})}}function dm(i){let A,I;return A=new Fm({}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function Rm(i){let A,I;return A=new wY({props:{gravity:[0,0,0],$$slots:{default:[dm]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}function Jm(i){let A,I;return A=new cq({props:{$$slots:{default:[Rm]},$$scope:{ctx:i}}}),{c(){iA(A.$$.fragment)},l(g){QA(A.$$.fragment,g)},m(g,C){EA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(T(A.$$.fragment,g),I=!0)},o(g){Z(A.$$.fragment,g),I=!1},d(g){oA(A,g)}}}class fm extends Ag{constructor(A){super(),Ig(this,A,null,Jm,$I,{})}}function um(i){let A,I="THIS IS THE FOOTER.";return{c(){A=iC("footer"),A.textContent=I,this.h()},l(g){A=QC(g,"FOOTER",{class:!0,"data-svelte-h":!0}),Me(A)!=="svelte-xbyuf4"&&(A.textContent=I),this.h()},h(){Dg(A,"class","text-4xl text-center pb-16 my-16")},m(g,C){rA(g,A,C)},p:rg,i:rg,o:rg,d(g){g&&tA(A)}}}class qm extends Ag{constructor(A){super(),Ig(this,A,null,um,$I,{})}}function Ym(i){let A,I="THIS IS THE PLAYGROUND";return{c(){A=iC("div"),A.textContent=I,this.h()},l(g){A=QC(g,"DIV",{class:!0,"data-svelte-h":!0}),Me(A)!=="svelte-jixx4e"&&(A.textContent=I),this.h()},h(){Dg(A,"class","text-4xl text-center pb-16 my-16")},m(g,C){rA(g,A,C)},p:rg,i:rg,o:rg,d(g){g&&tA(A)}}}class Lm extends Ag{constructor(A){super(),Ig(this,A,null,Ym,$I,{})}}function mm(i){let A,I,g,C,B,Q,E,o,t,e,a,s,n,r;return A=new kN({}),B=new fm({}),o=new PN({}),a=new Lm({}),n=new qm({}),{c(){iA(A.$$.fragment),I=uA(),g=iC("article"),C=iC("div"),iA(B.$$.fragment),Q=uA(),E=iC("div"),iA(o.$$.fragment),t=uA(),e=iC("div"),iA(a.$$.fragment),s=uA(),iA(n.$$.fragment),this.h()},l(c){QA(A.$$.fragment,c),I=qA(c),g=QC(c,"ARTICLE",{class:!0});var D=YB(g);C=QC(D,"DIV",{id:!0,class:!0});var h=YB(C);QA(B.$$.fragment,h),h.forEach(tA),Q=qA(D),E=QC(D,"DIV",{id:!0,class:!0});var w=YB(E);QA(o.$$.fragment,w),w.forEach(tA),D.forEach(tA),t=qA(c),e=QC(c,"DIV",{class:!0});var l=YB(e);QA(a.$$.fragment,l),s=qA(l),QA(n.$$.fragment,l),l.forEach(tA),this.h()},h(){Dg(C,"id","canvas-wrapper"),Dg(C,"class","sticky top-0 min-w-0 h-screen cursor-pointer"),Dg(E,"id","article"),Dg(E,"class","text-3xl flex flex-col items-center w-full h-full p-10 cursor-default"),Dg(g,"class","relative flex-col hidden lg:flex"),Dg(e,"class","relative flex-col hidden lg:flex")},m(c,D){EA(A,c,D),rA(c,I,D),rA(c,g,D),oB(g,C),EA(B,C,null),oB(g,Q),oB(g,E),EA(o,E,null),rA(c,t,D),rA(c,e,D),EA(a,e,null),oB(e,s),EA(n,e,null),r=!0},p:rg,i(c){r||(T(A.$$.fragment,c),T(B.$$.fragment,c),T(o.$$.fragment,c),T(a.$$.fragment,c),T(n.$$.fragment,c),r=!0)},o(c){Z(A.$$.fragment,c),Z(B.$$.fragment,c),Z(o.$$.fragment,c),Z(a.$$.fragment,c),Z(n.$$.fragment,c),r=!1},d(c){c&&(tA(I),tA(g),tA(t),tA(e)),oA(A,c),oA(B),oA(o),oA(a),oA(n)}}}function Hm(i,A,I){let g;return RC(i,IU,C=>I(0,g=C)),i.$$.update=()=>{i.$$.dirty&1&&g&&_h.ScrollTrigger.refresh()},[g]}class Tm extends Ag{constructor(A){super(),Ig(this,A,Hm,mm,$I,{})}}function bm(i){let A,I,g,C;return A=new gU({}),g=new Tm({}),{c(){iA(A.$$.fragment),I=uA(),iA(g.$$.fragment)},l(B){QA(A.$$.fragment,B),I=qA(B),QA(g.$$.fragment,B)},m(B,Q){EA(A,B,Q),rA(B,I,Q),EA(g,B,Q),C=!0},p:rg,i(B){C||(T(A.$$.fragment,B),T(g.$$.fragment,B),C=!0)},o(B){Z(A.$$.fragment,B),Z(g.$$.fragment,B),C=!1},d(B){B&&tA(I),oA(A,B),oA(g,B)}}}class jm extends Ag{constructor(A){super(),Ig(this,A,null,bm,$I,{})}}export{jm as component};