var jc=Object.defineProperty;var Vc=(Q,A,I)=>A in Q?jc(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var dI=(Q,A,I)=>(Vc(Q,typeof A!="symbol"?A+"":A,I),I);import{s as ig,z as Lg,A as Eg,B as mg,e as Tg,u as bg,g as xg,f as Og,c as fC,C as KD,t as ro,D as Xc,o as bi,d as FD,E as co,F as kQ,G as IB,H as Bo,h as zc,n as fQ}from"../chunks/scheduler.BGcSciwg.js";import{S as og,i as tg,n as KA,l as pA,u as DI,v as hI,w as rI,x as cI,e as zt,c as $t,a as Ae,d as OI,o as jE,f as gg,q as MQ,m as UQ,h as ug,j as NQ,k as Yg,g as $c}from"../chunks/index.C8h7BZow.js";import{d as wo,w as Kg,r as JD}from"../chunks/index.yBkgiAJL.js";function RD(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const o in i)o in E||(g[o]=1);for(const o in E)C[o]||(I[o]=E[o],C[o]=1);Q[B]=E}else for(const o in i)C[o]=1}for(const i in g)i in I||(I[i]=void 0);return I}function pD(Q){return typeof Q=="object"&&Q!==null?Q:{}}class Aw extends og{constructor(A){super(),tg(this,A,null,null,ig,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xi="161",yB={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kB={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dD=0,Ie=1,qD=2,Iw=3,gw=0,ga=1,So=2,EC=3,uC=0,yg=1,eC=2,RC=0,fB=1,ge=2,Ce=3,Be=4,fD=5,zC=100,uD=101,YD=102,Qe=103,ie=104,LD=200,HD=201,mD=202,TD=203,Qo=204,io=205,bD=206,xD=207,OD=208,_D=209,vD=210,ZD=211,WD=212,PD=213,jD=214,VD=0,XD=1,zD=2,si=3,$D=4,Ah=5,Ih=6,gh=7,Oi=0,Ch=1,Bh=2,pC=0,Qh=1,ih=2,Eh=3,Ca=4,oh=5,th=6,Ee="attached",eh="detached",lo=300,YC=301,gB=302,ni=303,Di=304,uQ=306,hi=1e3,Dg=1001,ri=1002,xI=1003,Eo=1004,Cw=1004,NB=1005,Bw=1005,JI=1006,Ei=1007,Qw=1007,sC=1008,iw=1008,dC=1009,ah=1010,sh=1011,Go=1012,Ba=1013,FC=1014,Wg=1015,KQ=1016,Qa=1017,ia=1018,$C=1020,nh=1021,Ng=1023,Dh=1024,hh=1025,AB=1026,mB=1027,rh=1028,Ea=1029,ch=1030,oa=1031,ta=1033,VE=33776,XE=33777,zE=33778,$E=33779,oe=35840,te=35841,ee=35842,ae=35843,ea=36196,se=37492,ne=37496,De=37808,he=37809,re=37810,ce=37811,we=37812,Se=37813,le=37814,Ge=37815,ye=37816,ke=37817,Me=37818,Ue=37819,Ne=37820,Ke=37821,Ao=36492,Fe=36494,Je=36495,wh=36283,Re=36284,pe=36285,de=36286,Sh=2200,lh=2201,Gh=2202,ci=2300,wi=2301,Io=2302,FB=2400,JB=2401,Si=2402,yo=2500,aa=2501,Ew=0,ow=1,tw=2,li=3e3,qC=3001,yh=3200,kh=3201,iB=0,Mh=1,qg="",PI="srgb",hC="srgb-linear",ko="display-p3",_i="display-p3-linear",Gi="linear",MI="srgb",yi="rec709",ki="p3",ew=0,MB=7680,aw=7681,sw=7682,nw=7683,Dw=34055,hw=34056,rw=5386,cw=512,ww=513,Sw=514,lw=515,Gw=516,yw=517,kw=518,qe=519,Uh=512,Nh=513,Kh=514,sa=515,Fh=516,Jh=517,Rh=518,ph=519,Mi=35044,Mw=35048,Uw=35040,Nw=35045,Kw=35049,Fw=35041,Jw=35046,Rw=35050,pw=35042,dw="100",fe="300 es",oo=1035,nC=2e3,Ui=2001;class rC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const ag=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ls=1234567;const uB=Math.PI/180,FQ=180/Math.PI;function Hg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ag[Q&255]+ag[Q>>8&255]+ag[Q>>16&255]+ag[Q>>24&255]+"-"+ag[A&255]+ag[A>>8&255]+"-"+ag[A>>16&15|64]+ag[A>>24&255]+"-"+ag[I&63|128]+ag[I>>8&255]+"-"+ag[I>>16&255]+ag[I>>24&255]+ag[g&255]+ag[g>>8&255]+ag[g>>16&255]+ag[g>>24&255]).toLowerCase()}function uI(Q,A,I){return Math.max(A,Math.min(I,Q))}function na(Q,A){return(Q%A+A)%A}function qw(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function fw(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function oi(Q,A,I){return(1-I)*Q+I*A}function uw(Q,A,I,g){return oi(Q,A,1-Math.exp(-I*g))}function Yw(Q,A=1){return A-Math.abs(na(Q,A*2)-A)}function Lw(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function Hw(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function mw(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function Tw(Q,A){return Q+Math.random()*(A-Q)}function bw(Q){return Q*(.5-Math.random())}function xw(Q){Q!==void 0&&(ls=Q);let A=ls+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Ow(Q){return Q*uB}function _w(Q){return Q*FQ}function ue(Q){return(Q&Q-1)===0&&Q!==0}function vw(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function to(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function Zw(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),o=i(I/2),t=B((A+g)/2),e=i((A+g)/2),a=B((A-g)/2),s=i((A-g)/2),n=B((g-A)/2),D=i((g-A)/2);switch(C){case"XYX":Q.set(E*e,o*a,o*s,E*t);break;case"YZY":Q.set(o*s,E*e,o*a,E*t);break;case"ZXZ":Q.set(o*a,o*s,E*e,E*t);break;case"XZX":Q.set(E*e,o*D,o*n,E*t);break;case"YXY":Q.set(o*n,E*e,o*D,E*t);break;case"ZYZ":Q.set(o*D,o*n,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function Gg(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function XA(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const dh={DEG2RAD:uB,RAD2DEG:FQ,generateUUID:Hg,clamp:uI,euclideanModulo:na,mapLinear:qw,inverseLerp:fw,lerp:oi,damp:uw,pingpong:Yw,smoothstep:Lw,smootherstep:Hw,randInt:mw,randFloat:Tw,randFloatSpread:bw,seededRandom:xw,degToRad:Ow,radToDeg:_w,isPowerOfTwo:ue,ceilPowerOfTwo:vw,floorPowerOfTwo:to,setQuaternionFromProperEuler:Zw,normalize:XA,denormalize:Gg};class z{constructor(A=0,I=0){z.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(uI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class AI{constructor(A,I,g,C,B,i,E,o,t){AI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t)}set(A,I,g,C,B,i,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=i,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],D=g[8],w=C[0],r=C[3],h=C[6],l=C[1],S=C[4],y=C[7],K=C[2],N=C[5],M=C[8];return B[0]=i*w+E*l+o*K,B[3]=i*r+E*S+o*N,B[6]=i*h+E*y+o*M,B[1]=t*w+e*l+a*K,B[4]=t*r+e*S+a*N,B[7]=t*h+e*y+a*M,B[2]=s*w+n*l+D*K,B[5]=s*r+n*S+D*N,B[8]=s*h+n*y+D*M,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*i*e-I*E*t-g*B*e+g*E*o+C*B*t-C*i*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*i-E*t,s=E*o-e*B,n=t*B-i*o,D=I*a+g*s+C*n;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/D;return A[0]=a*w,A[1]=(C*t-e*g)*w,A[2]=(E*g-C*i)*w,A[3]=s*w,A[4]=(e*I-C*o)*w,A[5]=(C*B-E*I)*w,A[6]=n*w,A[7]=(g*o-t*I)*w,A[8]=(i*I-g*B)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*i+t*E)+i+A,-C*t,C*o,-C*(-t*i+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(at.makeScale(A,I)),this}rotate(A){return this.premultiply(at.makeRotation(-A)),this}translate(A,I){return this.premultiply(at.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const at=new AI;function qh(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const Ww={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wQ(Q,A){return new Ww[Q](A)}function Ni(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function fh(){const Q=Ni("canvas");return Q.style.display="block",Q}const Gs={};function YB(Q){Q in Gs||(Gs[Q]=!0,console.warn(Q))}const ys=new AI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ks=new AI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gE={[hC]:{transfer:Gi,primaries:yi,toReference:Q=>Q,fromReference:Q=>Q},[PI]:{transfer:MI,primaries:yi,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[_i]:{transfer:Gi,primaries:ki,toReference:Q=>Q.applyMatrix3(ks),fromReference:Q=>Q.applyMatrix3(ys)},[ko]:{transfer:MI,primaries:ki,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(ks),fromReference:Q=>Q.applyMatrix3(ys).convertLinearToSRGB()}},Pw=new Set([hC,_i]),wI={enabled:!0,_workingColorSpace:hC,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!Pw.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=gE[A].toReference,C=gE[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return gE[Q].primaries},getTransfer:function(Q){return Q===qg?Gi:gE[Q].transfer}};function yQ(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function st(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let VB;class Da{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{VB===void 0&&(VB=Ni("canvas")),VB.width=A.width,VB.height=A.height;const g=VB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=VB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Ni("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=yQ(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(yQ(I[g]/255)*255):I[g]=yQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let jw=0;class RB{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=Hg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(nt(C[i].image)):B.push(nt(C[i]))}else B=nt(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function nt(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Da.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vw=0;class YI extends rC{constructor(A=YI.DEFAULT_IMAGE,I=YI.DEFAULT_MAPPING,g=Dg,C=Dg,B=JI,i=sC,E=Ng,o=dC,t=YI.DEFAULT_ANISOTROPY,e=qg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Hg(),this.name="",this.source=new RB(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new AI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(YB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qC?PI:qg),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==lo)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case hi:A.x=A.x-Math.floor(A.x);break;case Dg:A.x=A.x<0?0:1;break;case ri:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case hi:A.y=A.y-Math.floor(A.y);break;case Dg:A.y=A.y<0?0:1;break;case ri:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return YB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===PI?qC:li}set encoding(A){YB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===qC?PI:qg}}YI.DEFAULT_IMAGE=null;YI.DEFAULT_MAPPING=lo;YI.DEFAULT_ANISOTROPY=1;class lI{constructor(A=0,I=0,g=0,C=1){lI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],D=o[9],w=o[2],r=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-w)<.01&&Math.abs(D-r)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+w)<.1&&Math.abs(D+r)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const S=(t+1)/2,y=(n+1)/2,K=(h+1)/2,N=(e+s)/4,M=(a+w)/4,f=(D+r)/4;return S>y&&S>K?S<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(S),C=N/g,B=M/g):y>K?y<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(y),g=N/C,B=f/C):K<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(K),g=M/B,C=f/B),this.set(g,C,B,I),this}let l=Math.sqrt((r-D)*(r-D)+(a-w)*(a-w)+(s-e)*(s-e));return Math.abs(l)<.001&&(l=1),this.x=(r-D)/l,this.y=(a-w)/l,this.z=(s-e)/l,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uh extends rC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new lI(0,0,A,I),this.scissorTest=!1,this.viewport=new lI(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(YB("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===qC?PI:qg),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:JI,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new YI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new RB(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gC extends uh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Mo extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=Dg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xw extends gC{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new Mo(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class ha extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=Dg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zw extends gC{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new ha(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class $w extends gC{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class LI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=B[i+0],n=B[i+1],D=B[i+2],w=B[i+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=s,A[I+1]=n,A[I+2]=D,A[I+3]=w;return}if(a!==w||o!==s||t!==n||e!==D){let r=1-E;const h=o*s+t*n+e*D+a*w,l=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const K=Math.sqrt(S),N=Math.atan2(K,h*l);r=Math.sin(r*N)/K,E=Math.sin(E*N)/K}const y=E*l;if(o=o*r+s*y,t=t*r+n*y,e=e*r+D*y,a=a*r+w*y,r===1-E){const K=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=K,t*=K,e*=K,a*=K}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[i],s=B[i+1],n=B[i+2],D=B[i+3];return A[I]=E*D+e*a+o*n-t*s,A[I+1]=o*D+e*s+t*a-E*n,A[I+2]=t*D+e*n+E*s-o*a,A[I+3]=e*D-E*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),s=o(g/2),n=o(C/2),D=o(B/2);switch(i){case"XYZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"YXZ":this._x=s*e*a+t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"ZXY":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a-s*n*D;break;case"ZYX":this._x=s*e*a-t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a+s*n*D;break;case"YZX":this._x=s*e*a+t*n*D,this._y=t*n*a+s*e*D,this._z=t*e*D-s*n*a,this._w=t*e*a-s*n*D;break;case"XZY":this._x=s*e*a-t*n*D,this._y=t*n*a-s*e*D,this._z=t*e*D+s*n*a,this._w=t*e*a+s*n*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+E+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(B-t)*n,this._z=(i-C)*n}else if(g>E&&g>a){const n=2*Math.sqrt(1+g-E-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+i)/n,this._z=(B+t)/n}else if(E>a){const n=2*Math.sqrt(1+E-g-a);this._w=(B-t)/n,this._x=(C+i)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-E);this._w=(i-C)/n,this._x=(B+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(uI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+i*E+C*t-B*o,this._y=C*e+i*o+B*E-g*t,this._z=B*e+i*t+g*o-C*E,this._w=i*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*B+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=i*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(A=0,I=0,g=0){F.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ms.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ms.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,o=A.w,t=2*(i*C-E*g),e=2*(E*I-B*C),a=2*(B*g-i*I);return this.x=I+o*t+i*a-E*e,this.y=g+o*e+E*t-B*a,this.z=C+o*a+B*e-i*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*i-g*o,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Dt.copy(this).projectOnVector(A),this.sub(Dt)}reflect(A){return this.sub(Dt.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(uI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dt=new F,Ms=new LI;class kg{constructor(A=new F(1/0,1/0,1/0),I=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Pg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Pg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Pg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let i=0,E=B.count;i<E;i++)A.isMesh===!0?A.getVertexPosition(i,Pg):Pg.fromBufferAttribute(B,i),Pg.applyMatrix4(A.matrixWorld),this.expandByPoint(Pg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),CE.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),CE.copy(g.boundingBox)),CE.applyMatrix4(A.matrixWorld),this.union(CE)}const C=A.children;for(let B=0,i=C.length;B<i;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Pg),Pg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(_Q),BE.subVectors(this.max,_Q),XB.subVectors(A.a,_Q),zB.subVectors(A.b,_Q),$B.subVectors(A.c,_Q),xC.subVectors(zB,XB),OC.subVectors($B,zB),aB.subVectors(XB,$B);let I=[0,-xC.z,xC.y,0,-OC.z,OC.y,0,-aB.z,aB.y,xC.z,0,-xC.x,OC.z,0,-OC.x,aB.z,0,-aB.x,-xC.y,xC.x,0,-OC.y,OC.x,0,-aB.y,aB.x,0];return!ht(I,XB,zB,$B,BE)||(I=[1,0,0,0,1,0,0,0,1],!ht(I,XB,zB,$B,BE))?!1:(QE.crossVectors(xC,OC),I=[QE.x,QE.y,QE.z],ht(I,XB,zB,$B,BE))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Pg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Pg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(SC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),SC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),SC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),SC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),SC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),SC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),SC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),SC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(SC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const SC=[new F,new F,new F,new F,new F,new F,new F,new F],Pg=new F,CE=new kg,XB=new F,zB=new F,$B=new F,xC=new F,OC=new F,aB=new F,_Q=new F,BE=new F,QE=new F,sB=new F;function ht(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){sB.fromArray(Q,B);const E=C.x*Math.abs(sB.x)+C.y*Math.abs(sB.y)+C.z*Math.abs(sB.z),o=A.dot(sB),t=I.dot(sB),e=g.dot(sB);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const AS=new kg,vQ=new F,rt=new F;class hg{constructor(A=new F,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):AS.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;vQ.subVectors(A,this.center);const I=vQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(vQ,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(rt.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(vQ.copy(A.center).add(rt)),this.expandByPoint(vQ.copy(A.center).sub(rt))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lC=new F,ct=new F,iE=new F,_C=new F,wt=new F,EE=new F,St=new F;class vB{constructor(A=new F,I=new F(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,lC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=lC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(lC.copy(this.origin).addScaledVector(this.direction,I),lC.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){ct.copy(A).add(I).multiplyScalar(.5),iE.copy(I).sub(A).normalize(),_C.copy(this.origin).sub(ct);const B=A.distanceTo(I)*.5,i=-this.direction.dot(iE),E=_C.dot(this.direction),o=-_C.dot(iE),t=_C.lengthSq(),e=Math.abs(1-i*i);let a,s,n,D;if(e>0)if(a=i*o-E,s=i*E-o,D=B*e,a>=0)if(s>=-D)if(s<=D){const w=1/e;a*=w,s*=w,n=a*(a+i*s+2*E)+s*(i*a+s+2*o)+t}else s=B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s=-B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;else s<=-D?(a=Math.max(0,-(-i*B+E)),s=a>0?-B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t):s<=D?(a=0,s=Math.min(Math.max(-B,-o),B),n=s*(s+2*o)+t):(a=Math.max(0,-(i*B+E)),s=a>0?B:Math.min(Math.max(-B,-o),B),n=-a*a+s*(s+2*o)+t);else s=i>0?-B:B,a=Math.max(0,-(i*s+E)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(ct).addScaledVector(iE,s),n}intersectSphere(A,I){lC.subVectors(A.center,this.origin);const g=lC.dot(this.direction),C=lC.dot(lC)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,o=g+i;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(B=(A.min.y-s.y)*e,i=(A.max.y-s.y)*e):(B=(A.max.y-s.y)*e,i=(A.min.y-s.y)*e),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),a>=0?(E=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(E=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,lC)!==null}intersectTriangle(A,I,g,C,B){wt.subVectors(I,A),EE.subVectors(g,A),St.crossVectors(wt,EE);let i=this.direction.dot(St),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;_C.subVectors(this.origin,A);const o=E*this.direction.dot(EE.crossVectors(_C,EE));if(o<0)return null;const t=E*this.direction.dot(wt.cross(_C));if(t<0||o+t>i)return null;const e=-E*_C.dot(St);return e<0?null:this.at(e/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class OA{constructor(A,I,g,C,B,i,E,o,t,e,a,s,n,D,w,r){OA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,w,r)}set(A,I,g,C,B,i,E,o,t,e,a,s,n,D,w,r){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=i,h[9]=E,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=D,h[11]=w,h[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new OA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/AQ.setFromMatrixColumn(A,0).length(),B=1/AQ.setFromMatrixColumn(A,1).length(),i=1/AQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=i*e,n=i*a,D=E*e,w=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+D*t,I[5]=s-w*t,I[9]=-E*o,I[2]=w-s*t,I[6]=D+n*t,I[10]=i*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,D=t*e,w=t*a;I[0]=s+w*E,I[4]=D*E-n,I[8]=i*t,I[1]=i*a,I[5]=i*e,I[9]=-E,I[2]=n*E-D,I[6]=w+s*E,I[10]=i*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,D=t*e,w=t*a;I[0]=s-w*E,I[4]=-i*a,I[8]=D+n*E,I[1]=n+D*E,I[5]=i*e,I[9]=w-s*E,I[2]=-i*t,I[6]=E,I[10]=i*o}else if(A.order==="ZYX"){const s=i*e,n=i*a,D=E*e,w=E*a;I[0]=o*e,I[4]=D*t-n,I[8]=s*t+w,I[1]=o*a,I[5]=w*t+s,I[9]=n*t-D,I[2]=-t,I[6]=E*o,I[10]=i*o}else if(A.order==="YZX"){const s=i*o,n=i*t,D=E*o,w=E*t;I[0]=o*e,I[4]=w-s*a,I[8]=D*a+n,I[1]=a,I[5]=i*e,I[9]=-E*e,I[2]=-t*e,I[6]=n*a+D,I[10]=s-w*a}else if(A.order==="XZY"){const s=i*o,n=i*t,D=E*o,w=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+w,I[5]=i*e,I[9]=n*a-D,I[2]=D*a-n,I[6]=E*e,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(IS,A,gS)}lookAt(A,I,g){const C=this.elements;return Rg.subVectors(A,I),Rg.lengthSq()===0&&(Rg.z=1),Rg.normalize(),vC.crossVectors(g,Rg),vC.lengthSq()===0&&(Math.abs(g.z)===1?Rg.x+=1e-4:Rg.z+=1e-4,Rg.normalize(),vC.crossVectors(g,Rg)),vC.normalize(),oE.crossVectors(Rg,vC),C[0]=vC.x,C[4]=oE.x,C[8]=Rg.x,C[1]=vC.y,C[5]=oE.y,C[9]=Rg.y,C[2]=vC.z,C[6]=oE.z,C[10]=Rg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],D=g[2],w=g[6],r=g[10],h=g[14],l=g[3],S=g[7],y=g[11],K=g[15],N=C[0],M=C[4],f=C[8],x=C[12],G=C[1],U=C[5],W=C[9],j=C[13],Y=C[2],O=C[6],L=C[10],_=C[14],$=C[3],X=C[7],BA=C[11],gA=C[15];return B[0]=i*N+E*G+o*Y+t*$,B[4]=i*M+E*U+o*O+t*X,B[8]=i*f+E*W+o*L+t*BA,B[12]=i*x+E*j+o*_+t*gA,B[1]=e*N+a*G+s*Y+n*$,B[5]=e*M+a*U+s*O+n*X,B[9]=e*f+a*W+s*L+n*BA,B[13]=e*x+a*j+s*_+n*gA,B[2]=D*N+w*G+r*Y+h*$,B[6]=D*M+w*U+r*O+h*X,B[10]=D*f+w*W+r*L+h*BA,B[14]=D*x+w*j+r*_+h*gA,B[3]=l*N+S*G+y*Y+K*$,B[7]=l*M+S*U+y*O+K*X,B[11]=l*f+S*W+y*L+K*BA,B[15]=l*x+S*j+y*_+K*gA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],D=A[3],w=A[7],r=A[11],h=A[15];return D*(+B*o*a-C*t*a-B*E*s+g*t*s+C*E*n-g*o*n)+w*(+I*o*n-I*t*s+B*i*s-C*i*n+C*t*e-B*o*e)+r*(+I*t*a-I*E*n-B*i*a+g*i*n+B*E*e-g*t*e)+h*(-C*E*e-I*o*a+I*E*s+C*i*a-g*i*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],D=A[12],w=A[13],r=A[14],h=A[15],l=a*r*t-w*s*t+w*o*n-E*r*n-a*o*h+E*s*h,S=D*s*t-e*r*t-D*o*n+i*r*n+e*o*h-i*s*h,y=e*w*t-D*a*t+D*E*n-i*w*n-e*E*h+i*a*h,K=D*a*o-e*w*o-D*E*s+i*w*s+e*E*r-i*a*r,N=I*l+g*S+C*y+B*K;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/N;return A[0]=l*M,A[1]=(w*s*B-a*r*B-w*C*n+g*r*n+a*C*h-g*s*h)*M,A[2]=(E*r*B-w*o*B+w*C*t-g*r*t-E*C*h+g*o*h)*M,A[3]=(a*o*B-E*s*B-a*C*t+g*s*t+E*C*n-g*o*n)*M,A[4]=S*M,A[5]=(e*r*B-D*s*B+D*C*n-I*r*n-e*C*h+I*s*h)*M,A[6]=(D*o*B-i*r*B-D*C*t+I*r*t+i*C*h-I*o*h)*M,A[7]=(i*s*B-e*o*B+e*C*t-I*s*t-i*C*n+I*o*n)*M,A[8]=y*M,A[9]=(D*a*B-e*w*B-D*g*n+I*w*n+e*g*h-I*a*h)*M,A[10]=(i*w*B-D*E*B+D*g*t-I*w*t-i*g*h+I*E*h)*M,A[11]=(e*E*B-i*a*B-e*g*t+I*a*t+i*g*n-I*E*n)*M,A[12]=K*M,A[13]=(e*w*C-D*a*C+D*g*s-I*w*s-e*g*r+I*a*r)*M,A[14]=(D*E*C-i*w*C-D*g*o+I*w*o+i*g*r-I*E*r)*M,A[15]=(i*a*C-e*E*C+e*g*o-I*a*o-i*g*s+I*E*s)*M,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,o=A.z,t=B*i,e=B*E;return this.set(t*i+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*i,0,t*o-C*E,e*o+C*i,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,o=I._w,t=B+B,e=i+i,a=E+E,s=B*t,n=B*e,D=B*a,w=i*e,r=i*a,h=E*a,l=o*t,S=o*e,y=o*a,K=g.x,N=g.y,M=g.z;return C[0]=(1-(w+h))*K,C[1]=(n+y)*K,C[2]=(D-S)*K,C[3]=0,C[4]=(n-y)*N,C[5]=(1-(s+h))*N,C[6]=(r+l)*N,C[7]=0,C[8]=(D+S)*M,C[9]=(r-l)*M,C[10]=(1-(s+w))*M,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=AQ.set(C[0],C[1],C[2]).length();const i=AQ.set(C[4],C[5],C[6]).length(),E=AQ.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],jg.copy(this);const t=1/B,e=1/i,a=1/E;return jg.elements[0]*=t,jg.elements[1]*=t,jg.elements[2]*=t,jg.elements[4]*=e,jg.elements[5]*=e,jg.elements[6]*=e,jg.elements[8]*=a,jg.elements[9]*=a,jg.elements[10]*=a,I.setFromRotationMatrix(jg),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i,E=nC){const o=this.elements,t=2*B/(I-A),e=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,D;if(E===nC)n=-(i+B)/(i-B),D=-2*i*B/(i-B);else if(E===Ui)n=-i/(i-B),D=-i*B/(i-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=D,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,i,E=nC){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(i-B),s=(I+A)*t,n=(g+C)*e;let D,w;if(E===nC)D=(i+B)*a,w=-2*a;else if(E===Ui)D=B*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=w,o[14]=-D,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const AQ=new F,jg=new OA,IS=new F(0,0,0),gS=new F(1,1,1),vC=new F,oE=new F,Rg=new F,Us=new OA,Ns=new LI;class ZB{constructor(A=0,I=0,g=0,C=ZB.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(uI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-uI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(uI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-uI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(uI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-uI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Us.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Us,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Ns.setFromEuler(this),this.setFromQuaternion(Ns,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ZB.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let CS=0;const Ks=new F,IQ=new LI,GC=new OA,tE=new F,ZQ=new F,BS=new F,QS=new LI,Fs=new F(1,0,0),Js=new F(0,1,0),Rs=new F(0,0,1),iS={type:"added"},ES={type:"removed"};class oI extends rC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Hg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oI.DEFAULT_UP.clone();const A=new F,I=new ZB,g=new LI,C=new F(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new OA},normalMatrix:{value:new AI}}),this.matrix=new OA,this.matrixWorld=new OA,this.matrixAutoUpdate=oI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return IQ.setFromAxisAngle(A,I),this.quaternion.multiply(IQ),this}rotateOnWorldAxis(A,I){return IQ.setFromAxisAngle(A,I),this.quaternion.premultiply(IQ),this}rotateX(A){return this.rotateOnAxis(Fs,A)}rotateY(A){return this.rotateOnAxis(Js,A)}rotateZ(A){return this.rotateOnAxis(Rs,A)}translateOnAxis(A,I){return Ks.copy(A).applyQuaternion(this.quaternion),this.position.add(Ks.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Fs,A)}translateY(A){return this.translateOnAxis(Js,A)}translateZ(A){return this.translateOnAxis(Rs,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(GC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?tE.copy(A):tE.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),ZQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?GC.lookAt(ZQ,tE,this.up):GC.lookAt(tE,ZQ,this.up),this.quaternion.setFromRotationMatrix(GC),C&&(GC.extractRotation(C.matrixWorld),IQ.setFromRotationMatrix(GC),this.quaternion.premultiply(IQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(iS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(ES)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),GC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),GC.multiply(A.parent.matrixWorld)),A.applyMatrix4(GC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,i=C.length;B<i;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ZQ,A,BS),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ZQ,QS,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=i(A.geometries),o=i(A.materials),t=i(A.textures),e=i(A.images),a=i(A.shapes),s=i(A.skeletons),n=i(A.animations),D=i(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),D.length>0&&(g.nodes=D)}return g.object=C,g;function i(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}oI.DEFAULT_UP=new F(0,1,0);oI.DEFAULT_MATRIX_AUTO_UPDATE=!0;oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vg=new F,yC=new F,lt=new F,kC=new F,gQ=new F,CQ=new F,ps=new F,Gt=new F,yt=new F,kt=new F;class fg{constructor(A=new F,I=new F,g=new F){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Vg.subVectors(A,I),C.cross(Vg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Vg.subVectors(C,I),yC.subVectors(g,I),lt.subVectors(A,I);const i=Vg.dot(Vg),E=Vg.dot(yC),o=Vg.dot(lt),t=yC.dot(yC),e=yC.dot(lt),a=i*t-E*E;if(a===0)return B.set(0,0,0),null;const s=1/a,n=(t*o-E*e)*s,D=(i*e-E*o)*s;return B.set(1-n-D,D,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,kC)===null?!1:kC.x>=0&&kC.y>=0&&kC.x+kC.y<=1}static getInterpolation(A,I,g,C,B,i,E,o){return this.getBarycoord(A,I,g,C,kC)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,kC.x),o.addScaledVector(i,kC.y),o.addScaledVector(E,kC.z),o)}static isFrontFacing(A,I,g,C){return Vg.subVectors(g,I),yC.subVectors(A,I),Vg.cross(yC).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Vg.subVectors(this.c,this.b),yC.subVectors(this.a,this.b),Vg.cross(yC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return fg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return fg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return fg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return fg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return fg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;gQ.subVectors(C,g),CQ.subVectors(B,g),Gt.subVectors(A,g);const o=gQ.dot(Gt),t=CQ.dot(Gt);if(o<=0&&t<=0)return I.copy(g);yt.subVectors(A,C);const e=gQ.dot(yt),a=CQ.dot(yt);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return i=o/(o-e),I.copy(g).addScaledVector(gQ,i);kt.subVectors(A,B);const n=gQ.dot(kt),D=CQ.dot(kt);if(D>=0&&n<=D)return I.copy(B);const w=n*t-o*D;if(w<=0&&t>=0&&D<=0)return E=t/(t-D),I.copy(g).addScaledVector(CQ,E);const r=e*D-n*a;if(r<=0&&a-e>=0&&n-D>=0)return ps.subVectors(B,C),E=(a-e)/(a-e+(n-D)),I.copy(C).addScaledVector(ps,E);const h=1/(r+w+s);return i=w*h,E=s*h,I.copy(g).addScaledVector(gQ,i).addScaledVector(CQ,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ZC={h:0,s:0,l:0},eE={h:0,s:0,l:0};function Mt(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class lA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=PI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,wI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=wI.workingColorSpace){return this.r=A,this.g=I,this.b=g,wI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=wI.workingColorSpace){if(A=na(A,1),I=uI(I,0,1),g=uI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=Mt(i,B,A+1/3),this.g=Mt(i,B,A),this.b=Mt(i,B,A-1/3)}return wI.toWorkingColorSpace(this,C),this}setStyle(A,I=PI){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=PI){const g=Yh[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=yQ(A.r),this.g=yQ(A.g),this.b=yQ(A.b),this}copyLinearToSRGB(A){return this.r=st(A.r),this.g=st(A.g),this.b=st(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=PI){return wI.fromWorkingColorSpace(sg.copy(this),A),Math.round(uI(sg.r*255,0,255))*65536+Math.round(uI(sg.g*255,0,255))*256+Math.round(uI(sg.b*255,0,255))}getHexString(A=PI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=wI.workingColorSpace){wI.fromWorkingColorSpace(sg.copy(this),I);const g=sg.r,C=sg.g,B=sg.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+i)/2;if(E===i)o=0,t=0;else{const a=i-E;switch(t=e<=.5?a/(i+E):a/(2-i-E),i){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=wI.workingColorSpace){return wI.fromWorkingColorSpace(sg.copy(this),I),A.r=sg.r,A.g=sg.g,A.b=sg.b,A}getStyle(A=PI){wI.fromWorkingColorSpace(sg.copy(this),A);const I=sg.r,g=sg.g,C=sg.b;return A!==PI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(ZC),this.setHSL(ZC.h+A,ZC.s+I,ZC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(ZC),A.getHSL(eE);const g=oi(ZC.h,eE.h,I),C=oi(ZC.s,eE.s,I),B=oi(ZC.l,eE.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sg=new lA;lA.NAMES=Yh;let oS=0;class rg extends rC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Hg(),this.name="",this.type="Material",this.blending=fB,this.side=uC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=io,this.blendEquation=zC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lA(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qe,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=MB,this.stencilZFail=MB,this.stencilZPass=MB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==fB&&(g.blending=this.blending),this.side!==uC&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==Qo&&(g.blendSrc=this.blendSrc),this.blendDst!==io&&(g.blendDst=this.blendDst),this.blendEquation!==zC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qe&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==MB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==MB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==MB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const o=B[E];delete o.metadata,i.push(o)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class bC extends rg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const KC=tS();function tS(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,B[o]=t|e}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)i[o]=o<<23;i[31]=1199570944,i[32]=2147483648;for(let o=33;o<63;++o)i[o]=2147483648+(o-32<<23);i[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(E[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function Ug(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=uI(Q,-65504,65504),KC.floatView[0]=Q;const A=KC.uint32View[0],I=A>>23&511;return KC.baseTable[I]+((A&8388607)>>KC.shiftTable[I])}function Ii(Q){const A=Q>>10;return KC.uint32View[0]=KC.mantissaTable[KC.offsetTable[A]+(Q&1023)]+KC.exponentTable[A],KC.floatView[0]}const eS={toHalfFloat:Ug,fromHalfFloat:Ii},vI=new F,aE=new z;class GI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Mi,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return YB("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)aE.fromBufferAttribute(this,I),aE.applyMatrix3(A),this.setXY(I,aE.x,aE.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.applyMatrix3(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.applyMatrix4(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.applyNormalMatrix(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)vI.fromBufferAttribute(this,I),vI.transformDirection(A),this.setXYZ(I,vI.x,vI.y,vI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=Gg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=XA(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Gg(I,this.array)),I}setX(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Gg(I,this.array)),I}setY(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Gg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Gg(I,this.array)),I}setW(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array),C=XA(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array),C=XA(C,this.array),B=XA(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Mi&&(A.usage=this.usage),A}}class aS extends GI{constructor(A,I,g){super(new Int8Array(A),I,g)}}class sS extends GI{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class nS extends GI{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class DS extends GI{constructor(A,I,g){super(new Int16Array(A),I,g)}}class ra extends GI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class hS extends GI{constructor(A,I,g){super(new Int32Array(A),I,g)}}class ca extends GI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class rS extends GI{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=Ii(this.array[A*this.itemSize]);return this.normalized&&(I=Gg(I,this.array)),I}setX(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize]=Ug(I),this}getY(A){let I=Ii(this.array[A*this.itemSize+1]);return this.normalized&&(I=Gg(I,this.array)),I}setY(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+1]=Ug(I),this}getZ(A){let I=Ii(this.array[A*this.itemSize+2]);return this.normalized&&(I=Gg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+2]=Ug(I),this}getW(A){let I=Ii(this.array[A*this.itemSize+3]);return this.normalized&&(I=Gg(I,this.array)),I}setW(A,I){return this.normalized&&(I=XA(I,this.array)),this.array[A*this.itemSize+3]=Ug(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array)),this.array[A+0]=Ug(I),this.array[A+1]=Ug(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array),C=XA(C,this.array)),this.array[A+0]=Ug(I),this.array[A+1]=Ug(g),this.array[A+2]=Ug(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=XA(I,this.array),g=XA(g,this.array),C=XA(C,this.array),B=XA(B,this.array)),this.array[A+0]=Ug(I),this.array[A+1]=Ug(g),this.array[A+2]=Ug(C),this.array[A+3]=Ug(B),this}}class JA extends GI{constructor(A,I,g){super(new Float32Array(A),I,g)}}class cS extends GI{constructor(A,I,g){super(new Float64Array(A),I,g)}}let wS=0;const vg=new OA,Ut=new oI,BQ=new F,pg=new kg,WQ=new kg,$I=new F;class gI extends rC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Hg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(qh(A)?ca:ra)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new AI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return vg.makeRotationFromQuaternion(A),this.applyMatrix4(vg),this}rotateX(A){return vg.makeRotationX(A),this.applyMatrix4(vg),this}rotateY(A){return vg.makeRotationY(A),this.applyMatrix4(vg),this}rotateZ(A){return vg.makeRotationZ(A),this.applyMatrix4(vg),this}translate(A,I,g){return vg.makeTranslation(A,I,g),this.applyMatrix4(vg),this}scale(A,I,g){return vg.makeScale(A,I,g),this.applyMatrix4(vg),this}lookAt(A){return Ut.lookAt(A),Ut.updateMatrix(),this.applyMatrix4(Ut.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(BQ).negate(),this.translate(BQ.x,BQ.y,BQ.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new JA(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];pg.setFromBufferAttribute(B),this.morphTargetsRelative?($I.addVectors(this.boundingBox.min,pg.min),this.boundingBox.expandByPoint($I),$I.addVectors(this.boundingBox.max,pg.max),this.boundingBox.expandByPoint($I)):(this.boundingBox.expandByPoint(pg.min),this.boundingBox.expandByPoint(pg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(A){const g=this.boundingSphere.center;if(pg.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];WQ.setFromBufferAttribute(E),this.morphTargetsRelative?($I.addVectors(pg.min,WQ.min),pg.expandByPoint($I),$I.addVectors(pg.max,WQ.max),pg.expandByPoint($I)):(pg.expandByPoint(WQ.min),pg.expandByPoint(WQ.max))}pg.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)$I.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared($I));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)$I.fromBufferAttribute(E,t),o&&(BQ.fromBufferAttribute(A,t),$I.add(BQ)),C=Math.max(C,g.distanceToSquared($I))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new GI(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let G=0;G<E;G++)t[G]=new F,e[G]=new F;const a=new F,s=new F,n=new F,D=new z,w=new z,r=new z,h=new F,l=new F;function S(G,U,W){a.fromArray(C,G*3),s.fromArray(C,U*3),n.fromArray(C,W*3),D.fromArray(i,G*2),w.fromArray(i,U*2),r.fromArray(i,W*2),s.sub(a),n.sub(a),w.sub(D),r.sub(D);const j=1/(w.x*r.y-r.x*w.y);isFinite(j)&&(h.copy(s).multiplyScalar(r.y).addScaledVector(n,-w.y).multiplyScalar(j),l.copy(n).multiplyScalar(w.x).addScaledVector(s,-r.x).multiplyScalar(j),t[G].add(h),t[U].add(h),t[W].add(h),e[G].add(l),e[U].add(l),e[W].add(l))}let y=this.groups;y.length===0&&(y=[{start:0,count:g.length}]);for(let G=0,U=y.length;G<U;++G){const W=y[G],j=W.start,Y=W.count;for(let O=j,L=j+Y;O<L;O+=3)S(g[O+0],g[O+1],g[O+2])}const K=new F,N=new F,M=new F,f=new F;function x(G){M.fromArray(B,G*3),f.copy(M);const U=t[G];K.copy(U),K.sub(M.multiplyScalar(M.dot(U))).normalize(),N.crossVectors(f,U);const j=N.dot(e[G])<0?-1:1;o[G*4]=K.x,o[G*4+1]=K.y,o[G*4+2]=K.z,o[G*4+3]=j}for(let G=0,U=y.length;G<U;++G){const W=y[G],j=W.start,Y=W.count;for(let O=j,L=j+Y;O<L;O+=3)x(g[O+0]),x(g[O+1]),x(g[O+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new GI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new F,B=new F,i=new F,E=new F,o=new F,t=new F,e=new F,a=new F;if(A)for(let s=0,n=A.count;s<n;s+=3){const D=A.getX(s+0),w=A.getX(s+1),r=A.getX(s+2);C.fromBufferAttribute(I,D),B.fromBufferAttribute(I,w),i.fromBufferAttribute(I,r),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,D),o.fromBufferAttribute(g,w),t.fromBufferAttribute(g,r),E.add(e),o.add(e),t.add(e),g.setXYZ(D,E.x,E.y,E.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(r,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),i.fromBufferAttribute(I,s+2),e.subVectors(i,B),a.subVectors(C,B),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)$I.fromBufferAttribute(A,I),$I.normalize(),A.setXYZ(I,$I.x,$I.y,$I.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,s=new t.constructor(o.length*e);let n=0,D=0;for(let w=0,r=o.length;w<r;w++){E.isInterleavedBufferAttribute?n=o[w]*E.data.stride+E.offset:n=o[w]*e;for(let h=0;h<e;h++)s[D++]=t[n++]}return new GI(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new gI,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,o=i.length;E<o;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,e=i.length;t<e;t++){const a=i[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ds=new OA,nB=new vB,sE=new hg,qs=new F,QQ=new F,iQ=new F,EQ=new F,Nt=new F,nE=new F,DE=new z,hE=new z,rE=new z,fs=new F,us=new F,Ys=new F,cE=new F,wE=new F;class _I extends oI{constructor(A=new gI,I=new bC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){nE.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(Nt.fromBufferAttribute(a,A),i?nE.addScaledVector(Nt,e):nE.addScaledVector(Nt.sub(I),e))}I.add(nE)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),sE.copy(g.boundingSphere),sE.applyMatrix4(B),nB.copy(A.ray).recast(A.near),!(sE.containsPoint(nB.origin)===!1&&(nB.intersectSphere(sE,qs)===null||nB.origin.distanceToSquared(qs)>(A.far-A.near)**2))&&(ds.copy(B).invert(),nB.copy(A.ray).applyMatrix4(ds),!(g.boundingBox!==null&&nB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,nB)))}_computeIntersections(A,I,g){let C;const B=this.geometry,i=this.material,E=B.index,o=B.attributes.position,t=B.attributes.uv,e=B.attributes.uv1,a=B.attributes.normal,s=B.groups,n=B.drawRange;if(E!==null)if(Array.isArray(i))for(let D=0,w=s.length;D<w;D++){const r=s[D],h=i[r.materialIndex],l=Math.max(r.start,n.start),S=Math.min(E.count,Math.min(r.start+r.count,n.start+n.count));for(let y=l,K=S;y<K;y+=3){const N=E.getX(y),M=E.getX(y+1),f=E.getX(y+2);C=SE(this,h,A,g,t,e,a,N,M,f),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),w=Math.min(E.count,n.start+n.count);for(let r=D,h=w;r<h;r+=3){const l=E.getX(r),S=E.getX(r+1),y=E.getX(r+2);C=SE(this,i,A,g,t,e,a,l,S,y),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(i))for(let D=0,w=s.length;D<w;D++){const r=s[D],h=i[r.materialIndex],l=Math.max(r.start,n.start),S=Math.min(o.count,Math.min(r.start+r.count,n.start+n.count));for(let y=l,K=S;y<K;y+=3){const N=y,M=y+1,f=y+2;C=SE(this,h,A,g,t,e,a,N,M,f),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const D=Math.max(0,n.start),w=Math.min(o.count,n.start+n.count);for(let r=D,h=w;r<h;r+=3){const l=r,S=r+1,y=r+2;C=SE(this,i,A,g,t,e,a,l,S,y),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}}}function SS(Q,A,I,g,C,B,i,E){let o;if(A.side===yg?o=g.intersectTriangle(i,B,C,!0,E):o=g.intersectTriangle(C,B,i,A.side===uC,E),o===null)return null;wE.copy(E),wE.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(wE);return t<I.near||t>I.far?null:{distance:t,point:wE.clone(),object:Q}}function SE(Q,A,I,g,C,B,i,E,o,t){Q.getVertexPosition(E,QQ),Q.getVertexPosition(o,iQ),Q.getVertexPosition(t,EQ);const e=SS(Q,A,I,g,QQ,iQ,EQ,cE);if(e){C&&(DE.fromBufferAttribute(C,E),hE.fromBufferAttribute(C,o),rE.fromBufferAttribute(C,t),e.uv=fg.getInterpolation(cE,QQ,iQ,EQ,DE,hE,rE,new z)),B&&(DE.fromBufferAttribute(B,E),hE.fromBufferAttribute(B,o),rE.fromBufferAttribute(B,t),e.uv1=fg.getInterpolation(cE,QQ,iQ,EQ,DE,hE,rE,new z),e.uv2=e.uv1),i&&(fs.fromBufferAttribute(i,E),us.fromBufferAttribute(i,o),Ys.fromBufferAttribute(i,t),e.normal=fg.getInterpolation(cE,QQ,iQ,EQ,fs,us,Ys,new F),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:o,c:t,normal:new F,materialIndex:0};fg.getNormal(QQ,iQ,EQ,a.normal),e.face=a}return e}class WB extends gI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const o=[],t=[],e=[],a=[];let s=0,n=0;D("z","y","x",-1,-1,g,I,A,i,B,0),D("z","y","x",1,-1,g,I,-A,i,B,1),D("x","z","y",1,1,A,g,I,C,i,2),D("x","z","y",1,-1,A,g,-I,C,i,3),D("x","y","z",1,-1,A,I,g,C,B,4),D("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new JA(t,3)),this.setAttribute("normal",new JA(e,3)),this.setAttribute("uv",new JA(a,2));function D(w,r,h,l,S,y,K,N,M,f,x){const G=y/M,U=K/f,W=y/2,j=K/2,Y=N/2,O=M+1,L=f+1;let _=0,$=0;const X=new F;for(let BA=0;BA<L;BA++){const gA=BA*U-j;for(let wA=0;wA<O;wA++){const mA=wA*G-W;X[w]=mA*l,X[r]=gA*S,X[h]=Y,t.push(X.x,X.y,X.z),X[w]=0,X[r]=0,X[h]=N>0?1:-1,e.push(X.x,X.y,X.z),a.push(wA/M),a.push(1-BA/f),_+=1}}for(let BA=0;BA<f;BA++)for(let gA=0;gA<M;gA++){const wA=s+gA+O*BA,mA=s+gA+O*(BA+1),V=s+(gA+1)+O*(BA+1),oA=s+(gA+1)+O*BA;o.push(wA,mA,oA),o.push(mA,V,oA),$+=6}E.addGroup(n,$,x),n+=$,s+=_}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new WB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function JQ(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function Sg(Q){const A={};for(let I=0;I<Q.length;I++){const g=JQ(Q[I]);for(const C in g)A[C]=g[C]}return A}function lS(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Lh(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:wI.workingColorSpace}const Hh={clone:JQ,merge:Sg};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class CC extends rg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=JQ(A.uniforms),this.uniformsGroups=lS(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class No extends oI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new OA,this.projectionMatrix=new OA,this.projectionMatrixInverse=new OA,this.coordinateSystem=nC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const WC=new F,Ls=new z,Hs=new z;class Ig extends No{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=FQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(uB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return FQ*2*Math.atan(Math.tan(uB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){WC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(WC.x,WC.y).multiplyScalar(-A/WC.z),WC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(WC.x,WC.y).multiplyScalar(-A/WC.z)}getViewSize(A,I){return this.getViewBounds(A,Ls,Hs),I.subVectors(Hs,Ls)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(uB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const o=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/o,I-=i.offsetY*g/t,C*=i.width/o,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const oQ=-90,tQ=1;class mh extends oI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new Ig(oQ,tQ,A,I);C.layers=this.layers,this.add(C);const B=new Ig(oQ,tQ,A,I);B.layers=this.layers,this.add(B);const i=new Ig(oQ,tQ,A,I);i.layers=this.layers,this.add(i);const E=new Ig(oQ,tQ,A,I);E.layers=this.layers,this.add(E);const o=new Ig(oQ,tQ,A,I);o.layers=this.layers,this.add(o);const t=new Ig(oQ,tQ,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,i,E,o]=I;for(const t of I)this.remove(t);if(A===nC)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===Ui)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,i,E,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),D=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,i),A.setRenderTarget(g,2,C),A.render(I,E),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class vi extends YI{constructor(A,I,g,C,B,i,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:YC,super(A,I,g,C,B,i,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Th extends gC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(YB("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===qC?PI:qg),this.texture=new vi(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:JI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new WB(5,5,5),B=new CC({name:"CubemapFromEquirect",uniforms:JQ(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:yg,blending:RC});B.uniforms.tEquirect.value=I;const i=new _I(C,B),E=I.minFilter;return I.minFilter===sC&&(I.minFilter=JI),new mh(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const Kt=new F,kS=new F,MS=new AI;class NC{constructor(A=new F(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Kt.subVectors(g,I).cross(kS.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Kt),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||MS.getNormalMatrix(A),C=this.coplanarPoint(Kt).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const DB=new hg,lE=new F;class Zi{constructor(A=new NC,I=new NC,g=new NC,C=new NC,B=new NC,i=new NC){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=nC){const g=this.planes,C=A.elements,B=C[0],i=C[1],E=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],D=C[9],w=C[10],r=C[11],h=C[12],l=C[13],S=C[14],y=C[15];if(g[0].setComponents(o-B,s-t,r-n,y-h).normalize(),g[1].setComponents(o+B,s+t,r+n,y+h).normalize(),g[2].setComponents(o+i,s+e,r+D,y+l).normalize(),g[3].setComponents(o-i,s-e,r-D,y-l).normalize(),g[4].setComponents(o-E,s-a,r-w,y-S).normalize(),I===nC)g[5].setComponents(o+E,s+a,r+w,y+S).normalize();else if(I===Ui)g[5].setComponents(E,a,w,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),DB.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),DB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(DB)}intersectsSprite(A){return DB.center.set(0,0,0),DB.radius=.7071067811865476,DB.applyMatrix4(A.matrixWorld),this.intersectsSphere(DB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(lE.x=C.normal.x>0?A.max.x:A.min.x,lE.y=C.normal.y>0?A.max.y:A.min.y,lE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(lE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function US(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,D=Q.createBuffer();Q.bindBuffer(e,D),Q.bufferData(e,a,s),t.onUploadCallback();let w;if(a instanceof Float32Array)w=Q.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)w=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=Q.UNSIGNED_SHORT;else if(a instanceof Int16Array)w=Q.SHORT;else if(a instanceof Uint32Array)w=Q.UNSIGNED_INT;else if(a instanceof Int32Array)w=Q.INT;else if(a instanceof Int8Array)w=Q.BYTE;else if(a instanceof Uint8Array)w=Q.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)w=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:w,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function B(t,e,a){const s=e.array,n=e._updateRange,D=e.updateRanges;if(Q.bindBuffer(a,t),n.count===-1&&D.length===0&&Q.bufferSubData(a,0,s),D.length!==0){for(let w=0,r=D.length;w<r;w++){const h=D[w];I?Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):Q.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}e.clearUpdateRanges()}n.count!==-1&&(I?Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):Q.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(Q.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");B(a.buffer,t,e),a.version=t.version}}return{get:i,remove:E,update:o}}class YQ extends gI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,s=I/o,n=[],D=[],w=[],r=[];for(let h=0;h<e;h++){const l=h*s-i;for(let S=0;S<t;S++){const y=S*a-B;D.push(y,-l,0),w.push(0,0,1),r.push(S/E),r.push(1-h/o)}}for(let h=0;h<o;h++)for(let l=0;l<E;l++){const S=l+t*h,y=l+t*(h+1),K=l+1+t*(h+1),N=l+1+t*h;n.push(S,y,N),n.push(y,K,N)}this.setIndex(n),this.setAttribute("position",new JA(D,3)),this.setAttribute("normal",new JA(w,3)),this.setAttribute("uv",new JA(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new YQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
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
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
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
#endif`,uS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mS=`#ifdef USE_IRIDESCENCE
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
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
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Al=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Il=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cl=`
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
}`,Bl=`#ifdef USE_ENVMAP
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
#endif`,Ql=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,il=`#ifdef USE_ENVMAP
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
#endif`,El=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ol=`#ifdef USE_ENVMAP
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
#endif`,tl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,el=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,al=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nl=`#ifdef USE_GRADIENTMAP
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
}`,Dl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wl=`uniform bool receiveShadow;
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
#endif`,Sl=`#ifdef USE_ENVMAP
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
#endif`,ll=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ml=`PhysicalMaterial material;
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
#endif`,Ul=`struct PhysicalMaterial {
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
}`,Nl=`
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
#endif`,Kl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ql=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ul=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yl=`#if defined( USE_POINTS_UV )
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
#endif`,Ll=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ml=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tl=`#ifdef USE_MORPHNORMALS
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
#endif`,bl=`#ifdef USE_MORPHTARGETS
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
#endif`,xl=`#ifdef USE_MORPHTARGETS
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
#endif`,Ol=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_l=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pl=`#ifdef USE_NORMALMAP
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
#endif`,jl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$l=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eG=`float getShadowMask() {
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
}`,aG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sG=`#ifdef USE_SKINNING
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
#endif`,nG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DG=`#ifdef USE_SKINNING
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
#endif`,hG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SG=`#ifdef USE_TRANSMISSION
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
#endif`,lG=`#ifdef USE_TRANSMISSION
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
#endif`,GG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NG=`uniform sampler2D t2D;
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
}`,KG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pG=`#include <common>
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
}`,dG=`#if DEPTH_PACKING == 3200
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
}`,qG=`#define DISTANCE
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
}`,fG=`#define DISTANCE
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
}`,uG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LG=`uniform float scale;
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
}`,HG=`uniform vec3 diffuse;
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
}`,mG=`#include <common>
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
}`,TG=`uniform vec3 diffuse;
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
}`,bG=`#define LAMBERT
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
}`,xG=`#define LAMBERT
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
}`,OG=`#define MATCAP
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
}`,_G=`#define MATCAP
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
}`,vG=`#define NORMAL
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
}`,ZG=`#define NORMAL
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
}`,WG=`#define PHONG
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
}`,PG=`#define PHONG
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
}`,jG=`#define STANDARD
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
}`,VG=`#define STANDARD
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
}`,XG=`#define TOON
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
}`,zG=`#define TOON
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
}`,$G=`uniform float size;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,bA={alphahash_fragment:NS,alphahash_pars_fragment:KS,alphamap_fragment:FS,alphamap_pars_fragment:JS,alphatest_fragment:RS,alphatest_pars_fragment:pS,aomap_fragment:dS,aomap_pars_fragment:qS,batching_pars_vertex:fS,batching_vertex:uS,begin_vertex:YS,beginnormal_vertex:LS,bsdfs:HS,iridescence_fragment:mS,bumpmap_pars_fragment:TS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:ZS,color_pars_vertex:WS,color_vertex:PS,common:jS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:XS,displacementmap_pars_vertex:zS,displacementmap_vertex:$S,emissivemap_fragment:Al,emissivemap_pars_fragment:Il,colorspace_fragment:gl,colorspace_pars_fragment:Cl,envmap_fragment:Bl,envmap_common_pars_fragment:Ql,envmap_pars_fragment:il,envmap_pars_vertex:El,envmap_physical_pars_fragment:Sl,envmap_vertex:ol,fog_vertex:tl,fog_pars_vertex:el,fog_fragment:al,fog_pars_fragment:sl,gradientmap_pars_fragment:nl,lightmap_fragment:Dl,lightmap_pars_fragment:hl,lights_lambert_fragment:rl,lights_lambert_pars_fragment:cl,lights_pars_begin:wl,lights_toon_fragment:ll,lights_toon_pars_fragment:Gl,lights_phong_fragment:yl,lights_phong_pars_fragment:kl,lights_physical_fragment:Ml,lights_physical_pars_fragment:Ul,lights_fragment_begin:Nl,lights_fragment_maps:Kl,lights_fragment_end:Fl,logdepthbuf_fragment:Jl,logdepthbuf_pars_fragment:Rl,logdepthbuf_pars_vertex:pl,logdepthbuf_vertex:dl,map_fragment:ql,map_pars_fragment:fl,map_particle_fragment:ul,map_particle_pars_fragment:Yl,metalnessmap_fragment:Ll,metalnessmap_pars_fragment:Hl,morphcolor_vertex:ml,morphnormal_vertex:Tl,morphtarget_pars_vertex:bl,morphtarget_vertex:xl,normal_fragment_begin:Ol,normal_fragment_maps:_l,normal_pars_fragment:vl,normal_pars_vertex:Zl,normal_vertex:Wl,normalmap_pars_fragment:Pl,clearcoat_normal_fragment_begin:jl,clearcoat_normal_fragment_maps:Vl,clearcoat_pars_fragment:Xl,iridescence_pars_fragment:zl,opaque_fragment:$l,packing:AG,premultiplied_alpha_fragment:IG,project_vertex:gG,dithering_fragment:CG,dithering_pars_fragment:BG,roughnessmap_fragment:QG,roughnessmap_pars_fragment:iG,shadowmap_pars_fragment:EG,shadowmap_pars_vertex:oG,shadowmap_vertex:tG,shadowmask_pars_fragment:eG,skinbase_vertex:aG,skinning_pars_vertex:sG,skinning_vertex:nG,skinnormal_vertex:DG,specularmap_fragment:hG,specularmap_pars_fragment:rG,tonemapping_fragment:cG,tonemapping_pars_fragment:wG,transmission_fragment:SG,transmission_pars_fragment:lG,uv_pars_fragment:GG,uv_pars_vertex:yG,uv_vertex:kG,worldpos_vertex:MG,background_vert:UG,background_frag:NG,backgroundCube_vert:KG,backgroundCube_frag:FG,cube_vert:JG,cube_frag:RG,depth_vert:pG,depth_frag:dG,distanceRGBA_vert:qG,distanceRGBA_frag:fG,equirect_vert:uG,equirect_frag:YG,linedashed_vert:LG,linedashed_frag:HG,meshbasic_vert:mG,meshbasic_frag:TG,meshlambert_vert:bG,meshlambert_frag:xG,meshmatcap_vert:OG,meshmatcap_frag:_G,meshnormal_vert:vG,meshnormal_frag:ZG,meshphong_vert:WG,meshphong_frag:PG,meshphysical_vert:jG,meshphysical_frag:VG,meshtoon_vert:XG,meshtoon_frag:zG,points_vert:$G,points_frag:Ay,shadow_vert:Iy,shadow_frag:gy,sprite_vert:Cy,sprite_frag:By},DA={common:{diffuse:{value:new lA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new AI},alphaMap:{value:null},alphaMapTransform:{value:new AI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new AI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new AI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new AI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new AI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new AI},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new AI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new AI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new AI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new AI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new AI},alphaTest:{value:0},uvTransform:{value:new AI}},sprite:{diffuse:{value:new lA(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new AI},alphaMap:{value:null},alphaMapTransform:{value:new AI},alphaTest:{value:0}}},AC={basic:{uniforms:Sg([DA.common,DA.specularmap,DA.envmap,DA.aomap,DA.lightmap,DA.fog]),vertexShader:bA.meshbasic_vert,fragmentShader:bA.meshbasic_frag},lambert:{uniforms:Sg([DA.common,DA.specularmap,DA.envmap,DA.aomap,DA.lightmap,DA.emissivemap,DA.bumpmap,DA.normalmap,DA.displacementmap,DA.fog,DA.lights,{emissive:{value:new lA(0)}}]),vertexShader:bA.meshlambert_vert,fragmentShader:bA.meshlambert_frag},phong:{uniforms:Sg([DA.common,DA.specularmap,DA.envmap,DA.aomap,DA.lightmap,DA.emissivemap,DA.bumpmap,DA.normalmap,DA.displacementmap,DA.fog,DA.lights,{emissive:{value:new lA(0)},specular:{value:new lA(1118481)},shininess:{value:30}}]),vertexShader:bA.meshphong_vert,fragmentShader:bA.meshphong_frag},standard:{uniforms:Sg([DA.common,DA.envmap,DA.aomap,DA.lightmap,DA.emissivemap,DA.bumpmap,DA.normalmap,DA.displacementmap,DA.roughnessmap,DA.metalnessmap,DA.fog,DA.lights,{emissive:{value:new lA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag},toon:{uniforms:Sg([DA.common,DA.aomap,DA.lightmap,DA.emissivemap,DA.bumpmap,DA.normalmap,DA.displacementmap,DA.gradientmap,DA.fog,DA.lights,{emissive:{value:new lA(0)}}]),vertexShader:bA.meshtoon_vert,fragmentShader:bA.meshtoon_frag},matcap:{uniforms:Sg([DA.common,DA.bumpmap,DA.normalmap,DA.displacementmap,DA.fog,{matcap:{value:null}}]),vertexShader:bA.meshmatcap_vert,fragmentShader:bA.meshmatcap_frag},points:{uniforms:Sg([DA.points,DA.fog]),vertexShader:bA.points_vert,fragmentShader:bA.points_frag},dashed:{uniforms:Sg([DA.common,DA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bA.linedashed_vert,fragmentShader:bA.linedashed_frag},depth:{uniforms:Sg([DA.common,DA.displacementmap]),vertexShader:bA.depth_vert,fragmentShader:bA.depth_frag},normal:{uniforms:Sg([DA.common,DA.bumpmap,DA.normalmap,DA.displacementmap,{opacity:{value:1}}]),vertexShader:bA.meshnormal_vert,fragmentShader:bA.meshnormal_frag},sprite:{uniforms:Sg([DA.sprite,DA.fog]),vertexShader:bA.sprite_vert,fragmentShader:bA.sprite_frag},background:{uniforms:{uvTransform:{value:new AI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bA.background_vert,fragmentShader:bA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bA.backgroundCube_vert,fragmentShader:bA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bA.cube_vert,fragmentShader:bA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bA.equirect_vert,fragmentShader:bA.equirect_frag},distanceRGBA:{uniforms:Sg([DA.common,DA.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bA.distanceRGBA_vert,fragmentShader:bA.distanceRGBA_frag},shadow:{uniforms:Sg([DA.lights,DA.fog,{color:{value:new lA(0)},opacity:{value:1}}]),vertexShader:bA.shadow_vert,fragmentShader:bA.shadow_frag}};AC.physical={uniforms:Sg([AC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new AI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new AI},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new AI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new AI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new AI},sheen:{value:0},sheenColor:{value:new lA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new AI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new AI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new AI},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new AI},attenuationDistance:{value:0},attenuationColor:{value:new lA(0)},specularColor:{value:new lA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new AI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new AI},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new AI}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag};const GE={r:0,b:0,g:0};function Qy(Q,A,I,g,C,B,i){const E=new lA(0);let o=B===!0?0:1,t,e,a=null,s=0,n=null;function D(r,h){let l=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?I:A).get(S)),S===null?w(E,o):S&&S.isColor&&(w(S,1),l=!0);const y=Q.xr.getEnvironmentBlendMode();y==="additive"?g.buffers.color.setClear(0,0,0,1,i):y==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(Q.autoClear||l)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),S&&(S.isCubeTexture||S.mapping===uQ)?(e===void 0&&(e=new _I(new WB(1,1,1),new CC({name:"BackgroundCubeMaterial",uniforms:JQ(AC.backgroundCube.uniforms),vertexShader:AC.backgroundCube.vertexShader,fragmentShader:AC.backgroundCube.fragmentShader,side:yg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(K,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=S,e.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=wI.getTransfer(S.colorSpace)!==MI,(a!==S||s!==S.version||n!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=S,s=S.version,n=Q.toneMapping),e.layers.enableAll(),r.unshift(e,e.geometry,e.material,0,0,null)):S&&S.isTexture&&(t===void 0&&(t=new _I(new YQ(2,2),new CC({name:"BackgroundMaterial",uniforms:JQ(AC.background.uniforms),vertexShader:AC.background.vertexShader,fragmentShader:AC.background.fragmentShader,side:uC,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=S,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.toneMapped=wI.getTransfer(S.colorSpace)!==MI,S.matrixAutoUpdate===!0&&S.updateMatrix(),t.material.uniforms.uvTransform.value.copy(S.matrix),(a!==S||s!==S.version||n!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=S,s=S.version,n=Q.toneMapping),t.layers.enableAll(),r.unshift(t,t.geometry,t.material,0,0,null))}function w(r,h){r.getRGB(GE,Lh(Q)),g.buffers.color.setClear(GE.r,GE.g,GE.b,h,i)}return{getClearColor:function(){return E},setClearColor:function(r,h=1){E.set(r),o=h,w(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(r){o=r,w(E,o)},render:D}}function iy(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},o=r(null);let t=o,e=!1;function a(Y,O,L,_,$){let X=!1;if(i){const BA=w(_,L,O);t!==BA&&(t=BA,n(t.object)),X=h(Y,_,L,$),X&&l(Y,_,L,$)}else{const BA=O.wireframe===!0;(t.geometry!==_.id||t.program!==L.id||t.wireframe!==BA)&&(t.geometry=_.id,t.program=L.id,t.wireframe=BA,X=!0)}$!==null&&I.update($,Q.ELEMENT_ARRAY_BUFFER),(X||e)&&(e=!1,f(Y,O,L,_),$!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get($).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function n(Y){return g.isWebGL2?Q.bindVertexArray(Y):B.bindVertexArrayOES(Y)}function D(Y){return g.isWebGL2?Q.deleteVertexArray(Y):B.deleteVertexArrayOES(Y)}function w(Y,O,L){const _=L.wireframe===!0;let $=E[Y.id];$===void 0&&($={},E[Y.id]=$);let X=$[O.id];X===void 0&&(X={},$[O.id]=X);let BA=X[_];return BA===void 0&&(BA=r(s()),X[_]=BA),BA}function r(Y){const O=[],L=[],_=[];for(let $=0;$<C;$++)O[$]=0,L[$]=0,_[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:_,object:Y,attributes:{},index:null}}function h(Y,O,L,_){const $=t.attributes,X=O.attributes;let BA=0;const gA=L.getAttributes();for(const wA in gA)if(gA[wA].location>=0){const V=$[wA];let oA=X[wA];if(oA===void 0&&(wA==="instanceMatrix"&&Y.instanceMatrix&&(oA=Y.instanceMatrix),wA==="instanceColor"&&Y.instanceColor&&(oA=Y.instanceColor)),V===void 0||V.attribute!==oA||oA&&V.data!==oA.data)return!0;BA++}return t.attributesNum!==BA||t.index!==_}function l(Y,O,L,_){const $={},X=O.attributes;let BA=0;const gA=L.getAttributes();for(const wA in gA)if(gA[wA].location>=0){let V=X[wA];V===void 0&&(wA==="instanceMatrix"&&Y.instanceMatrix&&(V=Y.instanceMatrix),wA==="instanceColor"&&Y.instanceColor&&(V=Y.instanceColor));const oA={};oA.attribute=V,V&&V.data&&(oA.data=V.data),$[wA]=oA,BA++}t.attributes=$,t.attributesNum=BA,t.index=_}function S(){const Y=t.newAttributes;for(let O=0,L=Y.length;O<L;O++)Y[O]=0}function y(Y){K(Y,0)}function K(Y,O){const L=t.newAttributes,_=t.enabledAttributes,$=t.attributeDivisors;L[Y]=1,_[Y]===0&&(Q.enableVertexAttribArray(Y),_[Y]=1),$[Y]!==O&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,O),$[Y]=O)}function N(){const Y=t.newAttributes,O=t.enabledAttributes;for(let L=0,_=O.length;L<_;L++)O[L]!==Y[L]&&(Q.disableVertexAttribArray(L),O[L]=0)}function M(Y,O,L,_,$,X,BA){BA===!0?Q.vertexAttribIPointer(Y,O,L,$,X):Q.vertexAttribPointer(Y,O,L,_,$,X)}function f(Y,O,L,_){if(g.isWebGL2===!1&&(Y.isInstancedMesh||_.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;S();const $=_.attributes,X=L.getAttributes(),BA=O.defaultAttributeValues;for(const gA in X){const wA=X[gA];if(wA.location>=0){let mA=$[gA];if(mA===void 0&&(gA==="instanceMatrix"&&Y.instanceMatrix&&(mA=Y.instanceMatrix),gA==="instanceColor"&&Y.instanceColor&&(mA=Y.instanceColor)),mA!==void 0){const V=mA.normalized,oA=mA.itemSize,GA=I.get(mA);if(GA===void 0)continue;const FA=GA.buffer,qA=GA.type,MA=GA.bytesPerElement,PA=g.isWebGL2===!0&&(qA===Q.INT||qA===Q.UNSIGNED_INT||mA.gpuType===Ba);if(mA.isInterleavedBufferAttribute){const uA=mA.data,q=uA.stride,nA=mA.offset;if(uA.isInstancedInterleavedBuffer){for(let AA=0;AA<wA.locationSize;AA++)K(wA.location+AA,uA.meshPerAttribute);Y.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=uA.meshPerAttribute*uA.count)}else for(let AA=0;AA<wA.locationSize;AA++)y(wA.location+AA);Q.bindBuffer(Q.ARRAY_BUFFER,FA);for(let AA=0;AA<wA.locationSize;AA++)M(wA.location+AA,oA/wA.locationSize,qA,V,q*MA,(nA+oA/wA.locationSize*AA)*MA,PA)}else{if(mA.isInstancedBufferAttribute){for(let uA=0;uA<wA.locationSize;uA++)K(wA.location+uA,mA.meshPerAttribute);Y.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=mA.meshPerAttribute*mA.count)}else for(let uA=0;uA<wA.locationSize;uA++)y(wA.location+uA);Q.bindBuffer(Q.ARRAY_BUFFER,FA);for(let uA=0;uA<wA.locationSize;uA++)M(wA.location+uA,oA/wA.locationSize,qA,V,oA*MA,oA/wA.locationSize*uA*MA,PA)}}else if(BA!==void 0){const V=BA[gA];if(V!==void 0)switch(V.length){case 2:Q.vertexAttrib2fv(wA.location,V);break;case 3:Q.vertexAttrib3fv(wA.location,V);break;case 4:Q.vertexAttrib4fv(wA.location,V);break;default:Q.vertexAttrib1fv(wA.location,V)}}}}N()}function x(){W();for(const Y in E){const O=E[Y];for(const L in O){const _=O[L];for(const $ in _)D(_[$].object),delete _[$];delete O[L]}delete E[Y]}}function G(Y){if(E[Y.id]===void 0)return;const O=E[Y.id];for(const L in O){const _=O[L];for(const $ in _)D(_[$].object),delete _[$];delete O[L]}delete E[Y.id]}function U(Y){for(const O in E){const L=E[O];if(L[Y.id]===void 0)continue;const _=L[Y.id];for(const $ in _)D(_[$].object),delete _[$];delete L[Y.id]}}function W(){j(),e=!0,t!==o&&(t=o,n(t.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:W,resetDefaultState:j,dispose:x,releaseStatesOfGeometry:G,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:y,disableUnusedAttributes:N}}function Ey(Q,A,I,g){const C=g.isWebGL2;let B;function i(e){B=e}function E(e,a){Q.drawArrays(B,e,a),I.update(a,B,1)}function o(e,a,s){if(s===0)return;let n,D;if(C)n=Q,D="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[D](B,e,a,s),I.update(a,B,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let D=0;D<s;D++)this.render(e[D],a[D]);else{n.multiDrawArraysWEBGL(B,e,0,a,0,s);let D=0;for(let w=0;w<s;w++)D+=a[w];I.update(D,B,1)}}this.setMode=i,this.render=E,this.renderInstances=o,this.renderMultiDraw=t}function oy(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const M=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(M){if(M==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=i||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),s=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=Q.getParameter(Q.MAX_TEXTURE_SIZE),D=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),w=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),r=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),h=Q.getParameter(Q.MAX_VARYING_VECTORS),l=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),S=s>0,y=i||A.has("OES_texture_float"),K=S&&y,N=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:D,maxAttributes:w,maxVertexUniforms:r,maxVaryings:h,maxFragmentUniforms:l,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:K,maxSamples:N}}function ty(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new NC,E=new AI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const D=a.clippingPlanes,w=a.clipIntersection,r=a.clipShadows,h=Q.get(a);if(!C||D===null||D.length===0||B&&!r)B?e(null):t();else{const l=B?0:g,S=l*4;let y=h.clippingState||null;o.value=y,y=e(D,s,S,n);for(let K=0;K!==S;++K)y[K]=I[K];h.clippingState=y,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=l}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,D){const w=a!==null?a.length:0;let r=null;if(w!==0){if(r=o.value,D!==!0||r===null){const h=n+w*4,l=s.matrixWorldInverse;E.getNormalMatrix(l),(r===null||r.length<h)&&(r=new Float32Array(h));for(let S=0,y=n;S!==w;++S,y+=4)i.copy(a[S]).applyMatrix4(l,E),i.normal.toArray(r,y),r[y+3]=i.constant}o.value=r,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,r}}function ey(Q){let A=new WeakMap;function I(i,E){return E===ni?i.mapping=YC:E===Di&&(i.mapping=gB),i}function g(i){if(i&&i.isTexture){const E=i.mapping;if(E===ni||E===Di)if(A.has(i)){const o=A.get(i).texture;return I(o,i.mapping)}else{const o=i.image;if(o&&o.height>0){const t=new Th(o.height);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class Ko extends No{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const SQ=4,ms=[.125,.215,.35,.446,.526,.582],KB=20,Ft=new Ko,Ts=new lA;let Jt=null,Rt=0,pt=0;const UB=(1+Math.sqrt(5))/2,eQ=1/UB,bs=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,UB,eQ),new F(0,UB,-eQ),new F(eQ,0,UB),new F(-eQ,0,UB),new F(UB,eQ,0),new F(-UB,eQ,0)];class Ye{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Jt=this._renderer.getRenderTarget(),Rt=this._renderer.getActiveCubeFace(),pt=this._renderer.getActiveMipmapLevel(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_s(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Jt,Rt,pt),A.scissorTest=!1,yE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===YC||A.mapping===gB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Jt=this._renderer.getRenderTarget(),Rt=this._renderer.getActiveCubeFace(),pt=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:JI,minFilter:JI,generateMipmaps:!1,type:KQ,format:Ng,colorSpace:hC,depthBuffer:!1},C=xs(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xs(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(B)),this._blurMaterial=sy(B,A,I)}return C}_compileMaterial(A){const I=new _I(this._lodPlanes[0],A);this._renderer.compile(I,Ft)}_sceneToCubeUV(A,I,g,C){const E=new Ig(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(Ts),e.toneMapping=pC,e.autoClear=!1;const n=new bC({name:"PMREM.Background",side:yg,depthWrite:!1,depthTest:!1}),D=new _I(new WB,n);let w=!1;const r=A.background;r?r.isColor&&(n.color.copy(r),A.background=null,w=!0):(n.color.copy(Ts),w=!0);for(let h=0;h<6;h++){const l=h%3;l===0?(E.up.set(0,o[h],0),E.lookAt(t[h],0,0)):l===1?(E.up.set(0,0,o[h]),E.lookAt(0,t[h],0)):(E.up.set(0,o[h],0),E.lookAt(0,0,t[h]));const S=this._cubeSize;yE(C,l*S,h>2?S:0,S,S),e.setRenderTarget(C),w&&e.render(D,E),e.render(A,E)}D.geometry.dispose(),D.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=r}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===YC||A.mapping===gB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=_s()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new _I(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;yE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(i,Ft)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=bs[(C-1)%bs.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const o=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new _I(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,D=isFinite(B)?Math.PI/(2*n):2*Math.PI/(2*KB-1),w=B/D,r=isFinite(B)?1+Math.floor(e*w):KB;r>KB&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${KB}`);const h=[];let l=0;for(let M=0;M<KB;++M){const f=M/w,x=Math.exp(-f*f/2);h.push(x),M===0?l+=x:M<r&&(l+=2*x)}for(let M=0;M<h.length;M++)h[M]=h[M]/l;s.envMap.value=A.texture,s.samples.value=r,s.weights.value=h,s.latitudinal.value=i==="latitudinal",E&&(s.poleAxis.value=E);const{_lodMax:S}=this;s.dTheta.value=D,s.mipInt.value=S-g;const y=this._sizeLods[C],K=3*y*(C>S-SQ?C-S+SQ:0),N=4*(this._cubeSize-y);yE(I,K,N,3*y,2*y),o.setRenderTarget(I),o.render(a,Ft)}}function ay(Q){const A=[],I=[],g=[];let C=Q;const B=Q-SQ+1+ms.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let o=1/E;i>Q-SQ?o=ms[i-Q+SQ-1]:i===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,D=6,w=3,r=2,h=1,l=new Float32Array(w*D*n),S=new Float32Array(r*D*n),y=new Float32Array(h*D*n);for(let N=0;N<n;N++){const M=N%3*2/3-1,f=N>2?0:-1,x=[M,f,0,M+2/3,f,0,M+2/3,f+1,0,M,f,0,M+2/3,f+1,0,M,f+1,0];l.set(x,w*D*N),S.set(s,r*D*N);const G=[N,N,N,N,N,N];y.set(G,h*D*N)}const K=new gI;K.setAttribute("position",new GI(l,w)),K.setAttribute("uv",new GI(S,r)),K.setAttribute("faceIndex",new GI(y,h)),A.push(K),C>SQ&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function xs(Q,A,I){const g=new gC(Q,A,I);return g.texture.mapping=uQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function yE(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function sy(Q,A,I){const g=new Float32Array(KB),C=new F(0,1,0);return new CC({name:"SphericalGaussianBlur",defines:{n:KB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:wa(),fragmentShader:`

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
		`,blending:RC,depthTest:!1,depthWrite:!1})}function Os(){return new CC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:RC,depthTest:!1,depthWrite:!1})}function _s(){return new CC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:RC,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function ny(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===ni||o===Di,e=o===YC||o===gB;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new Ye(Q)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new Ye(Q));const s=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,s),E.addEventListener("dispose",B),s.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function Dy(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function hy(Q,A,I,g){const C={},B=new WeakMap;function i(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const D in s.attributes)A.remove(s.attributes[D]);for(const D in s.morphAttributes){const w=s.morphAttributes[D];for(let r=0,h=w.length;r<h;r++)A.remove(w[r])}s.removeEventListener("dispose",i),delete C[s.id];const n=B.get(s);n&&(A.remove(n),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function E(a,s){return C[s.id]===!0||(s.addEventListener("dispose",i),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const D in s)A.update(s[D],Q.ARRAY_BUFFER);const n=a.morphAttributes;for(const D in n){const w=n[D];for(let r=0,h=w.length;r<h;r++)A.update(w[r],Q.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,D=a.attributes.position;let w=0;if(n!==null){const l=n.array;w=n.version;for(let S=0,y=l.length;S<y;S+=3){const K=l[S+0],N=l[S+1],M=l[S+2];s.push(K,N,N,M,M,K)}}else if(D!==void 0){const l=D.array;w=D.version;for(let S=0,y=l.length/3-1;S<y;S+=3){const K=S+0,N=S+1,M=S+2;s.push(K,N,N,M,M,K)}}else return;const r=new(qh(s)?ca:ra)(s,1);r.version=w;const h=B.get(a);h&&A.remove(h),B.set(a,r)}function e(a){const s=B.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function ry(Q,A,I,g){const C=g.isWebGL2;let B;function i(n){B=n}let E,o;function t(n){E=n.type,o=n.bytesPerElement}function e(n,D){Q.drawElements(B,D,E,n*o),I.update(D,B,1)}function a(n,D,w){if(w===0)return;let r,h;if(C)r=Q,h="drawElementsInstanced";else if(r=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[h](B,D,E,n*o,w),I.update(D,B,w)}function s(n,D,w){if(w===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let h=0;h<w;h++)this.render(n[h]/o,D[h]);else{r.multiDrawElementsWEBGL(B,D,0,E,n,0,w);let h=0;for(let l=0;l<w;l++)h+=D[l];I.update(h,B,1)}}this.setMode=i,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function cy(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function wy(Q,A){return Q[0]-A[0]}function Sy(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function ly(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new lI,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,D=n!==void 0?n.length:0;let w=B.get(e);if(w===void 0||w.count!==D){let Y=function(){W.dispose(),B.delete(e),e.removeEventListener("dispose",Y)};w!==void 0&&w.texture.dispose();const l=e.morphAttributes.position!==void 0,S=e.morphAttributes.normal!==void 0,y=e.morphAttributes.color!==void 0,K=e.morphAttributes.position||[],N=e.morphAttributes.normal||[],M=e.morphAttributes.color||[];let f=0;l===!0&&(f=1),S===!0&&(f=2),y===!0&&(f=3);let x=e.attributes.position.count*f,G=1;x>A.maxTextureSize&&(G=Math.ceil(x/A.maxTextureSize),x=A.maxTextureSize);const U=new Float32Array(x*G*4*D),W=new Mo(U,x,G,D);W.type=Wg,W.needsUpdate=!0;const j=f*4;for(let O=0;O<D;O++){const L=K[O],_=N[O],$=M[O],X=x*G*4*O;for(let BA=0;BA<L.count;BA++){const gA=BA*j;l===!0&&(i.fromBufferAttribute(L,BA),U[X+gA+0]=i.x,U[X+gA+1]=i.y,U[X+gA+2]=i.z,U[X+gA+3]=0),S===!0&&(i.fromBufferAttribute(_,BA),U[X+gA+4]=i.x,U[X+gA+5]=i.y,U[X+gA+6]=i.z,U[X+gA+7]=0),y===!0&&(i.fromBufferAttribute($,BA),U[X+gA+8]=i.x,U[X+gA+9]=i.y,U[X+gA+10]=i.z,U[X+gA+11]=$.itemSize===4?i.w:1)}}w={count:D,texture:W,size:new z(x,G)},B.set(e,w),e.addEventListener("dispose",Y)}let r=0;for(let l=0;l<s.length;l++)r+=s[l];const h=e.morphTargetsRelative?1:1-r;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",h),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",w.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",w.size)}else{const n=s===void 0?0:s.length;let D=g[e.id];if(D===void 0||D.length!==n){D=[];for(let S=0;S<n;S++)D[S]=[S,0];g[e.id]=D}for(let S=0;S<n;S++){const y=D[S];y[0]=S,y[1]=s[S]}D.sort(Sy);for(let S=0;S<8;S++)S<n&&D[S][1]?(E[S][0]=D[S][0],E[S][1]=D[S][1]):(E[S][0]=Number.MAX_SAFE_INTEGER,E[S][1]=0);E.sort(wy);const w=e.morphAttributes.position,r=e.morphAttributes.normal;let h=0;for(let S=0;S<8;S++){const y=E[S],K=y[0],N=y[1];K!==Number.MAX_SAFE_INTEGER&&N?(w&&e.getAttribute("morphTarget"+S)!==w[K]&&e.setAttribute("morphTarget"+S,w[K]),r&&e.getAttribute("morphNormal"+S)!==r[K]&&e.setAttribute("morphNormal"+S,r[K]),C[S]=N,h+=N):(w&&e.hasAttribute("morphTarget"+S)===!0&&e.deleteAttribute("morphTarget"+S),r&&e.hasAttribute("morphNormal"+S)===!0&&e.deleteAttribute("morphNormal"+S),C[S]=0)}const l=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",l),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function Gy(Q,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),C.get(o)!==t&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function i(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}class Sa extends YI{constructor(A,I,g,C,B,i,E,o,t,e){if(e=e!==void 0?e:AB,e!==AB&&e!==mB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===AB&&(g=FC),g===void 0&&e===mB&&(g=$C),super(null,C,B,i,E,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:xI,this.minFilter=o!==void 0?o:xI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const xh=new YI,Oh=new Sa(1,1);Oh.compareFunction=sa;const _h=new Mo,vh=new ha,Zh=new vi,vs=[],Zs=[],Ws=new Float32Array(16),Ps=new Float32Array(9),js=new Float32Array(4);function LQ(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=vs[C];if(B===void 0&&(B=new Float32Array(C),vs[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function jI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function VI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function Fo(Q,A){let I=Zs[A];I===void 0&&(I=new Int32Array(A),Zs[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function yy(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function ky(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(jI(I,A))return;Q.uniform2fv(this.addr,A),VI(I,A)}}function My(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(jI(I,A))return;Q.uniform3fv(this.addr,A),VI(I,A)}}function Uy(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(jI(I,A))return;Q.uniform4fv(this.addr,A),VI(I,A)}}function Ny(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(jI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),VI(I,A)}else{if(jI(I,g))return;js.set(g),Q.uniformMatrix2fv(this.addr,!1,js),VI(I,g)}}function Ky(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(jI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),VI(I,A)}else{if(jI(I,g))return;Ps.set(g),Q.uniformMatrix3fv(this.addr,!1,Ps),VI(I,g)}}function Fy(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(jI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),VI(I,A)}else{if(jI(I,g))return;Ws.set(g),Q.uniformMatrix4fv(this.addr,!1,Ws),VI(I,g)}}function Jy(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function Ry(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(jI(I,A))return;Q.uniform2iv(this.addr,A),VI(I,A)}}function py(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(jI(I,A))return;Q.uniform3iv(this.addr,A),VI(I,A)}}function dy(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(jI(I,A))return;Q.uniform4iv(this.addr,A),VI(I,A)}}function qy(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function fy(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(jI(I,A))return;Q.uniform2uiv(this.addr,A),VI(I,A)}}function uy(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(jI(I,A))return;Q.uniform3uiv(this.addr,A),VI(I,A)}}function Yy(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(jI(I,A))return;Q.uniform4uiv(this.addr,A),VI(I,A)}}function Ly(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?Oh:xh;I.setTexture2D(A||B,C)}function Hy(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||vh,C)}function my(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Zh,C)}function Ty(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||_h,C)}function by(Q){switch(Q){case 5126:return yy;case 35664:return ky;case 35665:return My;case 35666:return Uy;case 35674:return Ny;case 35675:return Ky;case 35676:return Fy;case 5124:case 35670:return Jy;case 35667:case 35671:return Ry;case 35668:case 35672:return py;case 35669:case 35673:return dy;case 5125:return qy;case 36294:return fy;case 36295:return uy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return Ty}}function xy(Q,A){Q.uniform1fv(this.addr,A)}function Oy(Q,A){const I=LQ(A,this.size,2);Q.uniform2fv(this.addr,I)}function _y(Q,A){const I=LQ(A,this.size,3);Q.uniform3fv(this.addr,I)}function vy(Q,A){const I=LQ(A,this.size,4);Q.uniform4fv(this.addr,I)}function Zy(Q,A){const I=LQ(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function Wy(Q,A){const I=LQ(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function Py(Q,A){const I=LQ(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function jy(Q,A){Q.uniform1iv(this.addr,A)}function Vy(Q,A){Q.uniform2iv(this.addr,A)}function Xy(Q,A){Q.uniform3iv(this.addr,A)}function zy(Q,A){Q.uniform4iv(this.addr,A)}function $y(Q,A){Q.uniform1uiv(this.addr,A)}function Ak(Q,A){Q.uniform2uiv(this.addr,A)}function Ik(Q,A){Q.uniform3uiv(this.addr,A)}function gk(Q,A){Q.uniform4uiv(this.addr,A)}function Ck(Q,A,I){const g=this.cache,C=A.length,B=Fo(I,C);jI(g,B)||(Q.uniform1iv(this.addr,B),VI(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||xh,B[i])}function Bk(Q,A,I){const g=this.cache,C=A.length,B=Fo(I,C);jI(g,B)||(Q.uniform1iv(this.addr,B),VI(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||vh,B[i])}function Qk(Q,A,I){const g=this.cache,C=A.length,B=Fo(I,C);jI(g,B)||(Q.uniform1iv(this.addr,B),VI(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||Zh,B[i])}function ik(Q,A,I){const g=this.cache,C=A.length,B=Fo(I,C);jI(g,B)||(Q.uniform1iv(this.addr,B),VI(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||_h,B[i])}function Ek(Q){switch(Q){case 5126:return xy;case 35664:return Oy;case 35665:return _y;case 35666:return vy;case 35674:return Zy;case 35675:return Wy;case 35676:return Py;case 5124:case 35670:return jy;case 35667:case 35671:return Vy;case 35668:case 35672:return Xy;case 35669:case 35673:return zy;case 5125:return $y;case 36294:return Ak;case 36295:return Ik;case 36296:return gk;case 35678:case 36198:case 36298:case 36306:case 35682:return Ck;case 35679:case 36299:case 36307:return Bk;case 35680:case 36300:case 36308:case 36293:return Qk;case 36289:case 36303:case 36311:case 36292:return ik}}class ok{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=by(I.type)}}class tk{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Ek(I.type)}}class ek{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const dt=/(\w+)(\])?(\[|\.)?/g;function Vs(Q,A){Q.seq.push(A),Q.map[A.id]=A}function ak(Q,A,I){const g=Q.name,C=g.length;for(dt.lastIndex=0;;){const B=dt.exec(g),i=dt.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&i+2===C){Vs(I,t===void 0?new ok(E,Q,A):new tk(E,Q,A));break}else{let a=I.map[E];a===void 0&&(a=new ek(E),Vs(I,a)),I=a}}}class go{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);ak(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function Xs(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const sk=37297;let nk=0;function Dk(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function hk(Q){const A=wI.getPrimaries(wI.workingColorSpace),I=wI.getPrimaries(Q);let g;switch(A===I?g="":A===ki&&I===yi?g="LinearDisplayP3ToLinearSRGB":A===yi&&I===ki&&(g="LinearSRGBToLinearDisplayP3"),Q){case hC:case _i:return[g,"LinearTransferOETF"];case PI:case ko:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function zs(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+Dk(Q.getShaderSource(A),i)}else return C}function rk(Q,A){const I=hk(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function ck(Q,A){let I;switch(A){case Qh:I="Linear";break;case ih:I="Reinhard";break;case Eh:I="OptimizedCineon";break;case Ca:I="ACESFilmic";break;case th:I="AgX";break;case oh:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function wk(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.alphaToCoverage||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lQ).join(`
`)}function Sk(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lQ).join(`
`)}function lk(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Gk(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function lQ(Q){return Q!==""}function $s(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function An(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const yk=/^[ \t]*#include +<([\w\d./]+)>/gm;function Le(Q){return Q.replace(yk,Mk)}const kk=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mk(Q,A){let I=bA[A];if(I===void 0){const g=kk.get(A);if(g!==void 0)I=bA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Le(I)}const Uk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function In(Q){return Q.replace(Uk,Nk)}function Nk(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function gn(Q){let A=`precision ${Q.precision} float;
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
#define LOW_PRECISION`),A}function Kk(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===ga?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===So?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===EC&&(A="SHADOWMAP_TYPE_VSM"),A}function Fk(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case YC:case gB:A="ENVMAP_TYPE_CUBE";break;case uQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Jk(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case gB:A="ENVMAP_MODE_REFRACTION";break}return A}function Rk(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case Oi:A="ENVMAP_BLENDING_MULTIPLY";break;case Ch:A="ENVMAP_BLENDING_MIX";break;case Bh:A="ENVMAP_BLENDING_ADD";break}return A}function pk(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function dk(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const o=Kk(I),t=Fk(I),e=Jk(I),a=Rk(I),s=pk(I),n=I.isWebGL2?"":wk(I),D=Sk(I),w=lk(B),r=C.createProgram();let h,l,S=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(lQ).join(`
`),h.length>0&&(h+=`
`),l=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(lQ).join(`
`),l.length>0&&(l+=`
`)):(h=[gn(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lQ).join(`
`),l=[n,gn(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==pC?"#define TONE_MAPPING":"",I.toneMapping!==pC?bA.tonemapping_pars_fragment:"",I.toneMapping!==pC?ck("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",bA.colorspace_pars_fragment,rk("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(lQ).join(`
`)),i=Le(i),i=$s(i,I),i=An(i,I),E=Le(E),E=$s(E,I),E=An(E,I),i=In(i),E=In(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[D,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,l=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===fe?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===fe?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=S+h+i,K=S+l+E,N=Xs(C,C.VERTEX_SHADER,y),M=Xs(C,C.FRAGMENT_SHADER,K);C.attachShader(r,N),C.attachShader(r,M),I.index0AttributeName!==void 0?C.bindAttribLocation(r,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(r,0,"position"),C.linkProgram(r);function f(W){if(Q.debug.checkShaderErrors){const j=C.getProgramInfoLog(r).trim(),Y=C.getShaderInfoLog(N).trim(),O=C.getShaderInfoLog(M).trim();let L=!0,_=!0;if(C.getProgramParameter(r,C.LINK_STATUS)===!1)if(L=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,r,N,M);else{const $=zs(C,N,"vertex"),X=zs(C,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(r,C.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+j+`
`+$+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||O==="")&&(_=!1);_&&(W.diagnostics={runnable:L,programLog:j,vertexShader:{log:Y,prefix:h},fragmentShader:{log:O,prefix:l}})}C.deleteShader(N),C.deleteShader(M),x=new go(C,r),G=Gk(C,r)}let x;this.getUniforms=function(){return x===void 0&&f(this),x};let G;this.getAttributes=function(){return G===void 0&&f(this),G};let U=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=C.getProgramParameter(r,sk)),U},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(r),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=nk++,this.cacheKey=A,this.usedTimes=1,this.program=r,this.vertexShader=N,this.fragmentShader=M,this}let qk=0;class fk{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new uk(A),I.set(A,g)),g}}class uk{constructor(A){this.id=qk++,this.code=A,this.usedTimes=0}}function Yk(Q,A,I,g,C,B,i){const E=new Uo,o=new fk,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let D=C.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(G){return t.add(G),G===0?"uv":`uv${G}`}function h(G,U,W,j,Y){const O=j.fog,L=Y.geometry,_=G.isMeshStandardMaterial?j.environment:null,$=(G.isMeshStandardMaterial?I:A).get(G.envMap||_),X=$&&$.mapping===uQ?$.image.height:null,BA=w[G.type];G.precision!==null&&(D=C.getMaxPrecision(G.precision),D!==G.precision&&console.warn("THREE.WebGLProgram.getParameters:",G.precision,"not supported, using",D,"instead."));const gA=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,wA=gA!==void 0?gA.length:0;let mA=0;L.morphAttributes.position!==void 0&&(mA=1),L.morphAttributes.normal!==void 0&&(mA=2),L.morphAttributes.color!==void 0&&(mA=3);let V,oA,GA,FA;if(BA){const EI=AC[BA];V=EI.vertexShader,oA=EI.fragmentShader}else V=G.vertexShader,oA=G.fragmentShader,o.update(G),GA=o.getVertexShaderID(G),FA=o.getFragmentShaderID(G);const qA=Q.getRenderTarget(),MA=Y.isInstancedMesh===!0,PA=Y.isBatchedMesh===!0,uA=!!G.map,q=!!G.matcap,nA=!!$,AA=!!G.aoMap,aA=!!G.lightMap,IA=!!G.bumpMap,dA=!!G.normalMap,cA=!!G.displacementMap,J=!!G.emissiveMap,k=!!G.metalnessMap,T=!!G.roughnessMap,EA=G.anisotropy>0,QA=G.clearcoat>0,CA=G.iridescence>0,UA=G.sheen>0,hA=G.transmission>0,yA=EA&&!!G.anisotropyMap,HA=QA&&!!G.clearcoatMap,jA=QA&&!!G.clearcoatNormalMap,iA=QA&&!!G.clearcoatRoughnessMap,tI=CA&&!!G.iridescenceMap,CI=CA&&!!G.iridescenceThicknessMap,ZA=UA&&!!G.sheenColorMap,YA=UA&&!!G.sheenRoughnessMap,SA=!!G.specularMap,zA=!!G.specularColorMap,d=!!G.specularIntensityMap,sA=hA&&!!G.transmissionMap,rA=hA&&!!G.thicknessMap,LA=!!G.gradientMap,p=!!G.alphaMap,eA=G.alphaTest>0,tA=!!G.alphaHash,RA=!!G.extensions;let TA=pC;G.toneMapped&&(qA===null||qA.isXRRenderTarget===!0)&&(TA=Q.toneMapping);const sI={isWebGL2:a,shaderID:BA,shaderType:G.type,shaderName:G.name,vertexShader:V,fragmentShader:oA,defines:G.defines,customVertexShaderID:GA,customFragmentShaderID:FA,isRawShaderMaterial:G.isRawShaderMaterial===!0,glslVersion:G.glslVersion,precision:D,batching:PA,instancing:MA,instancingColor:MA&&Y.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:qA===null?Q.outputColorSpace:qA.isXRRenderTarget===!0?qA.texture.colorSpace:hC,alphaToCoverage:!!G.alphaToCoverage,map:uA,matcap:q,envMap:nA,envMapMode:nA&&$.mapping,envMapCubeUVHeight:X,aoMap:AA,lightMap:aA,bumpMap:IA,normalMap:dA,displacementMap:n&&cA,emissiveMap:J,normalMapObjectSpace:dA&&G.normalMapType===Mh,normalMapTangentSpace:dA&&G.normalMapType===iB,metalnessMap:k,roughnessMap:T,anisotropy:EA,anisotropyMap:yA,clearcoat:QA,clearcoatMap:HA,clearcoatNormalMap:jA,clearcoatRoughnessMap:iA,iridescence:CA,iridescenceMap:tI,iridescenceThicknessMap:CI,sheen:UA,sheenColorMap:ZA,sheenRoughnessMap:YA,specularMap:SA,specularColorMap:zA,specularIntensityMap:d,transmission:hA,transmissionMap:sA,thicknessMap:rA,gradientMap:LA,opaque:G.transparent===!1&&G.blending===fB&&G.alphaToCoverage===!1,alphaMap:p,alphaTest:eA,alphaHash:tA,combine:G.combine,mapUv:uA&&r(G.map.channel),aoMapUv:AA&&r(G.aoMap.channel),lightMapUv:aA&&r(G.lightMap.channel),bumpMapUv:IA&&r(G.bumpMap.channel),normalMapUv:dA&&r(G.normalMap.channel),displacementMapUv:cA&&r(G.displacementMap.channel),emissiveMapUv:J&&r(G.emissiveMap.channel),metalnessMapUv:k&&r(G.metalnessMap.channel),roughnessMapUv:T&&r(G.roughnessMap.channel),anisotropyMapUv:yA&&r(G.anisotropyMap.channel),clearcoatMapUv:HA&&r(G.clearcoatMap.channel),clearcoatNormalMapUv:jA&&r(G.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:iA&&r(G.clearcoatRoughnessMap.channel),iridescenceMapUv:tI&&r(G.iridescenceMap.channel),iridescenceThicknessMapUv:CI&&r(G.iridescenceThicknessMap.channel),sheenColorMapUv:ZA&&r(G.sheenColorMap.channel),sheenRoughnessMapUv:YA&&r(G.sheenRoughnessMap.channel),specularMapUv:SA&&r(G.specularMap.channel),specularColorMapUv:zA&&r(G.specularColorMap.channel),specularIntensityMapUv:d&&r(G.specularIntensityMap.channel),transmissionMapUv:sA&&r(G.transmissionMap.channel),thicknessMapUv:rA&&r(G.thicknessMap.channel),alphaMapUv:p&&r(G.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dA||EA),vertexColors:G.vertexColors,vertexAlphas:G.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!L.attributes.uv&&(uA||p),fog:!!O,useFog:G.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:G.flatShading===!0,sizeAttenuation:G.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:Y.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:wA,morphTextureStride:mA,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:G.dithering,shadowMapEnabled:Q.shadowMap.enabled&&W.length>0,shadowMapType:Q.shadowMap.type,toneMapping:TA,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:uA&&G.map.isVideoTexture===!0&&wI.getTransfer(G.map.colorSpace)===MI,premultipliedAlpha:G.premultipliedAlpha,doubleSided:G.side===eC,flipSided:G.side===yg,useDepthPacking:G.depthPacking>=0,depthPacking:G.depthPacking||0,index0AttributeName:G.index0AttributeName,extensionDerivatives:RA&&G.extensions.derivatives===!0,extensionFragDepth:RA&&G.extensions.fragDepth===!0,extensionDrawBuffers:RA&&G.extensions.drawBuffers===!0,extensionShaderTextureLOD:RA&&G.extensions.shaderTextureLOD===!0,extensionClipCullDistance:RA&&G.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:RA&&G.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:G.customProgramCacheKey()};return sI.vertexUv1s=t.has(1),sI.vertexUv2s=t.has(2),sI.vertexUv3s=t.has(3),t.clear(),sI}function l(G){const U=[];if(G.shaderID?U.push(G.shaderID):(U.push(G.customVertexShaderID),U.push(G.customFragmentShaderID)),G.defines!==void 0)for(const W in G.defines)U.push(W),U.push(G.defines[W]);return G.isRawShaderMaterial===!1&&(S(U,G),y(U,G),U.push(Q.outputColorSpace)),U.push(G.customProgramCacheKey),U.join()}function S(G,U){G.push(U.precision),G.push(U.outputColorSpace),G.push(U.envMapMode),G.push(U.envMapCubeUVHeight),G.push(U.mapUv),G.push(U.alphaMapUv),G.push(U.lightMapUv),G.push(U.aoMapUv),G.push(U.bumpMapUv),G.push(U.normalMapUv),G.push(U.displacementMapUv),G.push(U.emissiveMapUv),G.push(U.metalnessMapUv),G.push(U.roughnessMapUv),G.push(U.anisotropyMapUv),G.push(U.clearcoatMapUv),G.push(U.clearcoatNormalMapUv),G.push(U.clearcoatRoughnessMapUv),G.push(U.iridescenceMapUv),G.push(U.iridescenceThicknessMapUv),G.push(U.sheenColorMapUv),G.push(U.sheenRoughnessMapUv),G.push(U.specularMapUv),G.push(U.specularColorMapUv),G.push(U.specularIntensityMapUv),G.push(U.transmissionMapUv),G.push(U.thicknessMapUv),G.push(U.combine),G.push(U.fogExp2),G.push(U.sizeAttenuation),G.push(U.morphTargetsCount),G.push(U.morphAttributeCount),G.push(U.numDirLights),G.push(U.numPointLights),G.push(U.numSpotLights),G.push(U.numSpotLightMaps),G.push(U.numHemiLights),G.push(U.numRectAreaLights),G.push(U.numDirLightShadows),G.push(U.numPointLightShadows),G.push(U.numSpotLightShadows),G.push(U.numSpotLightShadowsWithMaps),G.push(U.numLightProbes),G.push(U.shadowMapType),G.push(U.toneMapping),G.push(U.numClippingPlanes),G.push(U.numClipIntersection),G.push(U.depthPacking)}function y(G,U){E.disableAll(),U.isWebGL2&&E.enable(0),U.supportsVertexTextures&&E.enable(1),U.instancing&&E.enable(2),U.instancingColor&&E.enable(3),U.matcap&&E.enable(4),U.envMap&&E.enable(5),U.normalMapObjectSpace&&E.enable(6),U.normalMapTangentSpace&&E.enable(7),U.clearcoat&&E.enable(8),U.iridescence&&E.enable(9),U.alphaTest&&E.enable(10),U.vertexColors&&E.enable(11),U.vertexAlphas&&E.enable(12),U.vertexUv1s&&E.enable(13),U.vertexUv2s&&E.enable(14),U.vertexUv3s&&E.enable(15),U.vertexTangents&&E.enable(16),U.anisotropy&&E.enable(17),U.alphaHash&&E.enable(18),U.batching&&E.enable(19),G.push(E.mask),E.disableAll(),U.fog&&E.enable(0),U.useFog&&E.enable(1),U.flatShading&&E.enable(2),U.logarithmicDepthBuffer&&E.enable(3),U.skinning&&E.enable(4),U.morphTargets&&E.enable(5),U.morphNormals&&E.enable(6),U.morphColors&&E.enable(7),U.premultipliedAlpha&&E.enable(8),U.shadowMapEnabled&&E.enable(9),U.useLegacyLights&&E.enable(10),U.doubleSided&&E.enable(11),U.flipSided&&E.enable(12),U.useDepthPacking&&E.enable(13),U.dithering&&E.enable(14),U.transmission&&E.enable(15),U.sheen&&E.enable(16),U.opaque&&E.enable(17),U.pointsUvs&&E.enable(18),U.decodeVideoTexture&&E.enable(19),U.alphaToCoverage&&E.enable(20),G.push(E.mask)}function K(G){const U=w[G.type];let W;if(U){const j=AC[U];W=Hh.clone(j.uniforms)}else W=G.uniforms;return W}function N(G,U){let W;for(let j=0,Y=e.length;j<Y;j++){const O=e[j];if(O.cacheKey===U){W=O,++W.usedTimes;break}}return W===void 0&&(W=new dk(Q,U,G,B),e.push(W)),W}function M(G){if(--G.usedTimes===0){const U=e.indexOf(G);e[U]=e[e.length-1],e.pop(),G.destroy()}}function f(G){o.remove(G)}function x(){o.dispose()}return{getParameters:h,getProgramCacheKey:l,getUniforms:K,acquireProgram:N,releaseProgram:M,releaseShaderCache:f,programs:e,dispose:x}}function Lk(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function Hk(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Cn(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Bn(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(a,s,n,D,w,r){let h=Q[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:D,renderOrder:a.renderOrder,z:w,group:r},Q[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=D,h.renderOrder=a.renderOrder,h.z=w,h.group=r),A++,h}function E(a,s,n,D,w,r){const h=i(a,s,n,D,w,r);n.transmission>0?g.push(h):n.transparent===!0?C.push(h):I.push(h)}function o(a,s,n,D,w,r){const h=i(a,s,n,D,w,r);n.transmission>0?g.unshift(h):n.transparent===!0?C.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||Hk),g.length>1&&g.sort(s||Cn),C.length>1&&C.sort(s||Cn)}function e(){for(let a=A,s=Q.length;a<s;a++){const n=Q[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function mk(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new Bn,Q.set(g,[i])):C>=B.length?(i=new Bn,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function Tk(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new F,color:new lA};break;case"SpotLight":I={position:new F,direction:new F,color:new lA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new F,color:new lA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new F,skyColor:new lA,groundColor:new lA};break;case"RectAreaLight":I={color:new lA,position:new F,halfWidth:new F,halfHeight:new F};break}return Q[A.id]=I,I}}}function bk(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let xk=0;function Ok(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function _k(Q,A){const I=new Tk,g=bk(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new F);const B=new F,i=new OA,E=new OA;function o(e,a){let s=0,n=0,D=0;for(let W=0;W<9;W++)C.probe[W].set(0,0,0);let w=0,r=0,h=0,l=0,S=0,y=0,K=0,N=0,M=0,f=0,x=0;e.sort(Ok);const G=a===!0?Math.PI:1;for(let W=0,j=e.length;W<j;W++){const Y=e[W],O=Y.color,L=Y.intensity,_=Y.distance,$=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)s+=O.r*L*G,n+=O.g*L*G,D+=O.b*L*G;else if(Y.isLightProbe){for(let X=0;X<9;X++)C.probe[X].addScaledVector(Y.sh.coefficients[X],L);x++}else if(Y.isDirectionalLight){const X=I.get(Y);if(X.color.copy(Y.color).multiplyScalar(Y.intensity*G),Y.castShadow){const BA=Y.shadow,gA=g.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,C.directionalShadow[w]=gA,C.directionalShadowMap[w]=$,C.directionalShadowMatrix[w]=Y.shadow.matrix,y++}C.directional[w]=X,w++}else if(Y.isSpotLight){const X=I.get(Y);X.position.setFromMatrixPosition(Y.matrixWorld),X.color.copy(O).multiplyScalar(L*G),X.distance=_,X.coneCos=Math.cos(Y.angle),X.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),X.decay=Y.decay,C.spot[h]=X;const BA=Y.shadow;if(Y.map&&(C.spotLightMap[M]=Y.map,M++,BA.updateMatrices(Y),Y.castShadow&&f++),C.spotLightMatrix[h]=BA.matrix,Y.castShadow){const gA=g.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,C.spotShadow[h]=gA,C.spotShadowMap[h]=$,N++}h++}else if(Y.isRectAreaLight){const X=I.get(Y);X.color.copy(O).multiplyScalar(L),X.halfWidth.set(Y.width*.5,0,0),X.halfHeight.set(0,Y.height*.5,0),C.rectArea[l]=X,l++}else if(Y.isPointLight){const X=I.get(Y);if(X.color.copy(Y.color).multiplyScalar(Y.intensity*G),X.distance=Y.distance,X.decay=Y.decay,Y.castShadow){const BA=Y.shadow,gA=g.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,gA.shadowCameraNear=BA.camera.near,gA.shadowCameraFar=BA.camera.far,C.pointShadow[r]=gA,C.pointShadowMap[r]=$,C.pointShadowMatrix[r]=Y.shadow.matrix,K++}C.point[r]=X,r++}else if(Y.isHemisphereLight){const X=I.get(Y);X.skyColor.copy(Y.color).multiplyScalar(L*G),X.groundColor.copy(Y.groundColor).multiplyScalar(L*G),C.hemi[S]=X,S++}}l>0&&(A.isWebGL2?Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=DA.LTC_FLOAT_1,C.rectAreaLTC2=DA.LTC_FLOAT_2):(C.rectAreaLTC1=DA.LTC_HALF_1,C.rectAreaLTC2=DA.LTC_HALF_2):Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=DA.LTC_FLOAT_1,C.rectAreaLTC2=DA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=DA.LTC_HALF_1,C.rectAreaLTC2=DA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=D;const U=C.hash;(U.directionalLength!==w||U.pointLength!==r||U.spotLength!==h||U.rectAreaLength!==l||U.hemiLength!==S||U.numDirectionalShadows!==y||U.numPointShadows!==K||U.numSpotShadows!==N||U.numSpotMaps!==M||U.numLightProbes!==x)&&(C.directional.length=w,C.spot.length=h,C.rectArea.length=l,C.point.length=r,C.hemi.length=S,C.directionalShadow.length=y,C.directionalShadowMap.length=y,C.pointShadow.length=K,C.pointShadowMap.length=K,C.spotShadow.length=N,C.spotShadowMap.length=N,C.directionalShadowMatrix.length=y,C.pointShadowMatrix.length=K,C.spotLightMatrix.length=N+M-f,C.spotLightMap.length=M,C.numSpotLightShadowsWithMaps=f,C.numLightProbes=x,U.directionalLength=w,U.pointLength=r,U.spotLength=h,U.rectAreaLength=l,U.hemiLength=S,U.numDirectionalShadows=y,U.numPointShadows=K,U.numSpotShadows=N,U.numSpotMaps=M,U.numLightProbes=x,C.version=xk++)}function t(e,a){let s=0,n=0,D=0,w=0,r=0;const h=a.matrixWorldInverse;for(let l=0,S=e.length;l<S;l++){const y=e[l];if(y.isDirectionalLight){const K=C.directional[s];K.direction.setFromMatrixPosition(y.matrixWorld),B.setFromMatrixPosition(y.target.matrixWorld),K.direction.sub(B),K.direction.transformDirection(h),s++}else if(y.isSpotLight){const K=C.spot[D];K.position.setFromMatrixPosition(y.matrixWorld),K.position.applyMatrix4(h),K.direction.setFromMatrixPosition(y.matrixWorld),B.setFromMatrixPosition(y.target.matrixWorld),K.direction.sub(B),K.direction.transformDirection(h),D++}else if(y.isRectAreaLight){const K=C.rectArea[w];K.position.setFromMatrixPosition(y.matrixWorld),K.position.applyMatrix4(h),E.identity(),i.copy(y.matrixWorld),i.premultiply(h),E.extractRotation(i),K.halfWidth.set(y.width*.5,0,0),K.halfHeight.set(0,y.height*.5,0),K.halfWidth.applyMatrix4(E),K.halfHeight.applyMatrix4(E),w++}else if(y.isPointLight){const K=C.point[n];K.position.setFromMatrixPosition(y.matrixWorld),K.position.applyMatrix4(h),n++}else if(y.isHemisphereLight){const K=C.hemi[r];K.direction.setFromMatrixPosition(y.matrixWorld),K.direction.transformDirection(h),r++}}}return{setup:o,setupView:t,state:C}}function Qn(Q,A){const I=new _k(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:i,pushShadow:E}}function vk(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let o;return E===void 0?(o=new Qn(Q,A),I.set(B,[o])):i>=E.length?(o=new Qn(Q,A),E.push(o)):o=E[i],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class la extends rg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Ga extends rg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Zk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wk=`uniform sampler2D shadow_pass;
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
}`;function Pk(Q,A,I){let g=new Zi;const C=new z,B=new z,i=new lI,E=new la({depthPacking:kh}),o=new Ga,t={},e=I.maxTextureSize,a={[uC]:yg,[yg]:uC,[eC]:eC},s=new CC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Zk,fragmentShader:Wk}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const D=new gI;D.setAttribute("position",new GI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new _I(D,s),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let h=this.type;this.render=function(N,M,f){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||N.length===0)return;const x=Q.getRenderTarget(),G=Q.getActiveCubeFace(),U=Q.getActiveMipmapLevel(),W=Q.state;W.setBlending(RC),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=h!==EC&&this.type===EC,Y=h===EC&&this.type!==EC;for(let O=0,L=N.length;O<L;O++){const _=N[O],$=_.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",_,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;C.copy($.mapSize);const X=$.getFrameExtents();if(C.multiply(X),B.copy($.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(B.x=Math.floor(e/X.x),C.x=B.x*X.x,$.mapSize.x=B.x),C.y>e&&(B.y=Math.floor(e/X.y),C.y=B.y*X.y,$.mapSize.y=B.y)),$.map===null||j===!0||Y===!0){const gA=this.type!==EC?{minFilter:xI,magFilter:xI}:{};$.map!==null&&$.map.dispose(),$.map=new gC(C.x,C.y,gA),$.map.texture.name=_.name+".shadowMap",$.camera.updateProjectionMatrix()}Q.setRenderTarget($.map),Q.clear();const BA=$.getViewportCount();for(let gA=0;gA<BA;gA++){const wA=$.getViewport(gA);i.set(B.x*wA.x,B.y*wA.y,B.x*wA.z,B.y*wA.w),W.viewport(i),$.updateMatrices(_,gA),g=$.getFrustum(),y(M,f,$.camera,_,this.type)}$.isPointLightShadow!==!0&&this.type===EC&&l($,f),$.needsUpdate=!1}h=this.type,r.needsUpdate=!1,Q.setRenderTarget(x,G,U)};function l(N,M){const f=A.update(w);s.defines.VSM_SAMPLES!==N.blurSamples&&(s.defines.VSM_SAMPLES=N.blurSamples,n.defines.VSM_SAMPLES=N.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new gC(C.x,C.y)),s.uniforms.shadow_pass.value=N.map.texture,s.uniforms.resolution.value=N.mapSize,s.uniforms.radius.value=N.radius,Q.setRenderTarget(N.mapPass),Q.clear(),Q.renderBufferDirect(M,null,f,s,w,null),n.uniforms.shadow_pass.value=N.mapPass.texture,n.uniforms.resolution.value=N.mapSize,n.uniforms.radius.value=N.radius,Q.setRenderTarget(N.map),Q.clear(),Q.renderBufferDirect(M,null,f,n,w,null)}function S(N,M,f,x){let G=null;const U=f.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)G=U;else if(G=f.isPointLight===!0?o:E,Q.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const W=G.uuid,j=M.uuid;let Y=t[W];Y===void 0&&(Y={},t[W]=Y);let O=Y[j];O===void 0&&(O=G.clone(),Y[j]=O,M.addEventListener("dispose",K)),G=O}if(G.visible=M.visible,G.wireframe=M.wireframe,x===EC?G.side=M.shadowSide!==null?M.shadowSide:M.side:G.side=M.shadowSide!==null?M.shadowSide:a[M.side],G.alphaMap=M.alphaMap,G.alphaTest=M.alphaTest,G.map=M.map,G.clipShadows=M.clipShadows,G.clippingPlanes=M.clippingPlanes,G.clipIntersection=M.clipIntersection,G.displacementMap=M.displacementMap,G.displacementScale=M.displacementScale,G.displacementBias=M.displacementBias,G.wireframeLinewidth=M.wireframeLinewidth,G.linewidth=M.linewidth,f.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const W=Q.properties.get(G);W.light=f}return G}function y(N,M,f,x,G){if(N.visible===!1)return;if(N.layers.test(M.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===EC)&&(!N.frustumCulled||g.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,N.matrixWorld);const j=A.update(N),Y=N.material;if(Array.isArray(Y)){const O=j.groups;for(let L=0,_=O.length;L<_;L++){const $=O[L],X=Y[$.materialIndex];if(X&&X.visible){const BA=S(N,X,x,G);N.onBeforeShadow(Q,N,M,f,j,BA,$),Q.renderBufferDirect(f,null,j,BA,N,$),N.onAfterShadow(Q,N,M,f,j,BA,$)}}}else if(Y.visible){const O=S(N,Y,x,G);N.onBeforeShadow(Q,N,M,f,j,O,null),Q.renderBufferDirect(f,null,j,O,N,null),N.onAfterShadow(Q,N,M,f,j,O,null)}}const W=N.children;for(let j=0,Y=W.length;j<Y;j++)y(W[j],M,f,x,G)}function K(N){N.target.removeEventListener("dispose",K);for(const f in t){const x=t[f],G=N.target.uuid;G in x&&(x[G].dispose(),delete x[G])}}}function jk(Q,A,I){const g=I.isWebGL2;function C(){let p=!1;const eA=new lI;let tA=null;const RA=new lI(0,0,0,0);return{setMask:function(TA){tA!==TA&&!p&&(Q.colorMask(TA,TA,TA,TA),tA=TA)},setLocked:function(TA){p=TA},setClear:function(TA,sI,EI,yI,Cg){Cg===!0&&(TA*=yI,sI*=yI,EI*=yI),eA.set(TA,sI,EI,yI),RA.equals(eA)===!1&&(Q.clearColor(TA,sI,EI,yI),RA.copy(eA))},reset:function(){p=!1,tA=null,RA.set(-1,0,0,0)}}}function B(){let p=!1,eA=null,tA=null,RA=null;return{setTest:function(TA){TA?MA(Q.DEPTH_TEST):PA(Q.DEPTH_TEST)},setMask:function(TA){eA!==TA&&!p&&(Q.depthMask(TA),eA=TA)},setFunc:function(TA){if(tA!==TA){switch(TA){case VD:Q.depthFunc(Q.NEVER);break;case XD:Q.depthFunc(Q.ALWAYS);break;case zD:Q.depthFunc(Q.LESS);break;case si:Q.depthFunc(Q.LEQUAL);break;case $D:Q.depthFunc(Q.EQUAL);break;case Ah:Q.depthFunc(Q.GEQUAL);break;case Ih:Q.depthFunc(Q.GREATER);break;case gh:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}tA=TA}},setLocked:function(TA){p=TA},setClear:function(TA){RA!==TA&&(Q.clearDepth(TA),RA=TA)},reset:function(){p=!1,eA=null,tA=null,RA=null}}}function i(){let p=!1,eA=null,tA=null,RA=null,TA=null,sI=null,EI=null,yI=null,Cg=null;return{setTest:function(nI){p||(nI?MA(Q.STENCIL_TEST):PA(Q.STENCIL_TEST))},setMask:function(nI){eA!==nI&&!p&&(Q.stencilMask(nI),eA=nI)},setFunc:function(nI,HI,cg){(tA!==nI||RA!==HI||TA!==cg)&&(Q.stencilFunc(nI,HI,cg),tA=nI,RA=HI,TA=cg)},setOp:function(nI,HI,cg){(sI!==nI||EI!==HI||yI!==cg)&&(Q.stencilOp(nI,HI,cg),sI=nI,EI=HI,yI=cg)},setLocked:function(nI){p=nI},setClear:function(nI){Cg!==nI&&(Q.clearStencil(nI),Cg=nI)},reset:function(){p=!1,eA=null,tA=null,RA=null,TA=null,sI=null,EI=null,yI=null,Cg=null}}}const E=new C,o=new B,t=new i,e=new WeakMap,a=new WeakMap;let s={},n={},D=new WeakMap,w=[],r=null,h=!1,l=null,S=null,y=null,K=null,N=null,M=null,f=null,x=new lA(0,0,0),G=0,U=!1,W=null,j=null,Y=null,O=null,L=null;const _=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const BA=Q.getParameter(Q.VERSION);BA.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(BA)[1]),$=X>=1):BA.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(BA)[1]),$=X>=2);let gA=null,wA={};const mA=Q.getParameter(Q.SCISSOR_BOX),V=Q.getParameter(Q.VIEWPORT),oA=new lI().fromArray(mA),GA=new lI().fromArray(V);function FA(p,eA,tA,RA){const TA=new Uint8Array(4),sI=Q.createTexture();Q.bindTexture(p,sI),Q.texParameteri(p,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(p,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let EI=0;EI<tA;EI++)g&&(p===Q.TEXTURE_3D||p===Q.TEXTURE_2D_ARRAY)?Q.texImage3D(eA,0,Q.RGBA,1,1,RA,0,Q.RGBA,Q.UNSIGNED_BYTE,TA):Q.texImage2D(eA+EI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,TA);return sI}const qA={};qA[Q.TEXTURE_2D]=FA(Q.TEXTURE_2D,Q.TEXTURE_2D,1),qA[Q.TEXTURE_CUBE_MAP]=FA(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(qA[Q.TEXTURE_2D_ARRAY]=FA(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),qA[Q.TEXTURE_3D]=FA(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1)),E.setClear(0,0,0,1),o.setClear(1),t.setClear(0),MA(Q.DEPTH_TEST),o.setFunc(si),cA(!1),J(Ie),MA(Q.CULL_FACE),IA(RC);function MA(p){s[p]!==!0&&(Q.enable(p),s[p]=!0)}function PA(p){s[p]!==!1&&(Q.disable(p),s[p]=!1)}function uA(p,eA){return n[p]!==eA?(Q.bindFramebuffer(p,eA),n[p]=eA,g&&(p===Q.DRAW_FRAMEBUFFER&&(n[Q.FRAMEBUFFER]=eA),p===Q.FRAMEBUFFER&&(n[Q.DRAW_FRAMEBUFFER]=eA)),!0):!1}function q(p,eA){let tA=w,RA=!1;if(p)if(tA=D.get(eA),tA===void 0&&(tA=[],D.set(eA,tA)),p.isWebGLMultipleRenderTargets){const TA=p.texture;if(tA.length!==TA.length||tA[0]!==Q.COLOR_ATTACHMENT0){for(let sI=0,EI=TA.length;sI<EI;sI++)tA[sI]=Q.COLOR_ATTACHMENT0+sI;tA.length=TA.length,RA=!0}}else tA[0]!==Q.COLOR_ATTACHMENT0&&(tA[0]=Q.COLOR_ATTACHMENT0,RA=!0);else tA[0]!==Q.BACK&&(tA[0]=Q.BACK,RA=!0);RA&&(I.isWebGL2?Q.drawBuffers(tA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(tA))}function nA(p){return r!==p?(Q.useProgram(p),r=p,!0):!1}const AA={[zC]:Q.FUNC_ADD,[uD]:Q.FUNC_SUBTRACT,[YD]:Q.FUNC_REVERSE_SUBTRACT};if(g)AA[Qe]=Q.MIN,AA[ie]=Q.MAX;else{const p=A.get("EXT_blend_minmax");p!==null&&(AA[Qe]=p.MIN_EXT,AA[ie]=p.MAX_EXT)}const aA={[LD]:Q.ZERO,[HD]:Q.ONE,[mD]:Q.SRC_COLOR,[Qo]:Q.SRC_ALPHA,[vD]:Q.SRC_ALPHA_SATURATE,[OD]:Q.DST_COLOR,[bD]:Q.DST_ALPHA,[TD]:Q.ONE_MINUS_SRC_COLOR,[io]:Q.ONE_MINUS_SRC_ALPHA,[_D]:Q.ONE_MINUS_DST_COLOR,[xD]:Q.ONE_MINUS_DST_ALPHA,[ZD]:Q.CONSTANT_COLOR,[WD]:Q.ONE_MINUS_CONSTANT_COLOR,[PD]:Q.CONSTANT_ALPHA,[jD]:Q.ONE_MINUS_CONSTANT_ALPHA};function IA(p,eA,tA,RA,TA,sI,EI,yI,Cg,nI){if(p===RC){h===!0&&(PA(Q.BLEND),h=!1);return}if(h===!1&&(MA(Q.BLEND),h=!0),p!==fD){if(p!==l||nI!==U){if((S!==zC||N!==zC)&&(Q.blendEquation(Q.FUNC_ADD),S=zC,N=zC),nI)switch(p){case fB:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case ge:Q.blendFunc(Q.ONE,Q.ONE);break;case Ce:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Be:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}else switch(p){case fB:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case ge:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case Ce:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case Be:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}y=null,K=null,M=null,f=null,x.set(0,0,0),G=0,l=p,U=nI}return}TA=TA||eA,sI=sI||tA,EI=EI||RA,(eA!==S||TA!==N)&&(Q.blendEquationSeparate(AA[eA],AA[TA]),S=eA,N=TA),(tA!==y||RA!==K||sI!==M||EI!==f)&&(Q.blendFuncSeparate(aA[tA],aA[RA],aA[sI],aA[EI]),y=tA,K=RA,M=sI,f=EI),(yI.equals(x)===!1||Cg!==G)&&(Q.blendColor(yI.r,yI.g,yI.b,Cg),x.copy(yI),G=Cg),l=p,U=!1}function dA(p,eA){p.side===eC?PA(Q.CULL_FACE):MA(Q.CULL_FACE);let tA=p.side===yg;eA&&(tA=!tA),cA(tA),p.blending===fB&&p.transparent===!1?IA(RC):IA(p.blending,p.blendEquation,p.blendSrc,p.blendDst,p.blendEquationAlpha,p.blendSrcAlpha,p.blendDstAlpha,p.blendColor,p.blendAlpha,p.premultipliedAlpha),o.setFunc(p.depthFunc),o.setTest(p.depthTest),o.setMask(p.depthWrite),E.setMask(p.colorWrite);const RA=p.stencilWrite;t.setTest(RA),RA&&(t.setMask(p.stencilWriteMask),t.setFunc(p.stencilFunc,p.stencilRef,p.stencilFuncMask),t.setOp(p.stencilFail,p.stencilZFail,p.stencilZPass)),T(p.polygonOffset,p.polygonOffsetFactor,p.polygonOffsetUnits),p.alphaToCoverage===!0?MA(Q.SAMPLE_ALPHA_TO_COVERAGE):PA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function cA(p){W!==p&&(p?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),W=p)}function J(p){p!==dD?(MA(Q.CULL_FACE),p!==j&&(p===Ie?Q.cullFace(Q.BACK):p===qD?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):PA(Q.CULL_FACE),j=p}function k(p){p!==Y&&($&&Q.lineWidth(p),Y=p)}function T(p,eA,tA){p?(MA(Q.POLYGON_OFFSET_FILL),(O!==eA||L!==tA)&&(Q.polygonOffset(eA,tA),O=eA,L=tA)):PA(Q.POLYGON_OFFSET_FILL)}function EA(p){p?MA(Q.SCISSOR_TEST):PA(Q.SCISSOR_TEST)}function QA(p){p===void 0&&(p=Q.TEXTURE0+_-1),gA!==p&&(Q.activeTexture(p),gA=p)}function CA(p,eA,tA){tA===void 0&&(gA===null?tA=Q.TEXTURE0+_-1:tA=gA);let RA=wA[tA];RA===void 0&&(RA={type:void 0,texture:void 0},wA[tA]=RA),(RA.type!==p||RA.texture!==eA)&&(gA!==tA&&(Q.activeTexture(tA),gA=tA),Q.bindTexture(p,eA||qA[p]),RA.type=p,RA.texture=eA)}function UA(){const p=wA[gA];p!==void 0&&p.type!==void 0&&(Q.bindTexture(p.type,null),p.type=void 0,p.texture=void 0)}function hA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function yA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function HA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function jA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function iA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function tI(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function CI(){try{Q.texStorage2D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function ZA(){try{Q.texStorage3D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function YA(){try{Q.texImage2D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function SA(){try{Q.texImage3D.apply(Q,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function zA(p){oA.equals(p)===!1&&(Q.scissor(p.x,p.y,p.z,p.w),oA.copy(p))}function d(p){GA.equals(p)===!1&&(Q.viewport(p.x,p.y,p.z,p.w),GA.copy(p))}function sA(p,eA){let tA=a.get(eA);tA===void 0&&(tA=new WeakMap,a.set(eA,tA));let RA=tA.get(p);RA===void 0&&(RA=Q.getUniformBlockIndex(eA,p.name),tA.set(p,RA))}function rA(p,eA){const RA=a.get(eA).get(p);e.get(eA)!==RA&&(Q.uniformBlockBinding(eA,RA,p.__bindingPointIndex),e.set(eA,RA))}function LA(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),g===!0&&(Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},gA=null,wA={},n={},D=new WeakMap,w=[],r=null,h=!1,l=null,S=null,y=null,K=null,N=null,M=null,f=null,x=new lA(0,0,0),G=0,U=!1,W=null,j=null,Y=null,O=null,L=null,oA.set(0,0,Q.canvas.width,Q.canvas.height),GA.set(0,0,Q.canvas.width,Q.canvas.height),E.reset(),o.reset(),t.reset()}return{buffers:{color:E,depth:o,stencil:t},enable:MA,disable:PA,bindFramebuffer:uA,drawBuffers:q,useProgram:nA,setBlending:IA,setMaterial:dA,setFlipSided:cA,setCullFace:J,setLineWidth:k,setPolygonOffset:T,setScissorTest:EA,activeTexture:QA,bindTexture:CA,unbindTexture:UA,compressedTexImage2D:hA,compressedTexImage3D:yA,texImage2D:YA,texImage3D:SA,updateUBOMapping:sA,uniformBlockBinding:rA,texStorage2D:CI,texStorage3D:ZA,texSubImage2D:HA,texSubImage3D:jA,compressedTexSubImage2D:iA,compressedTexSubImage3D:tI,scissor:zA,viewport:d,reset:LA}}function Vk(Q,A,I,g,C,B,i){const E=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(J,k){return n?new OffscreenCanvas(J,k):Ni("canvas")}function w(J,k,T,EA){let QA=1;if((J.width>EA||J.height>EA)&&(QA=EA/Math.max(J.width,J.height)),QA<1||k===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const CA=k?to:Math.floor,UA=CA(QA*J.width),hA=CA(QA*J.height);a===void 0&&(a=D(UA,hA));const yA=T?D(UA,hA):a;return yA.width=UA,yA.height=hA,yA.getContext("2d").drawImage(J,0,0,UA,hA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+UA+"x"+hA+")."),yA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function r(J){return ue(J.width)&&ue(J.height)}function h(J){return E?!1:J.wrapS!==Dg||J.wrapT!==Dg||J.minFilter!==xI&&J.minFilter!==JI}function l(J,k){return J.generateMipmaps&&k&&J.minFilter!==xI&&J.minFilter!==JI}function S(J){Q.generateMipmap(J)}function y(J,k,T,EA,QA=!1){if(E===!1)return k;if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let CA=k;if(k===Q.RED&&(T===Q.FLOAT&&(CA=Q.R32F),T===Q.HALF_FLOAT&&(CA=Q.R16F),T===Q.UNSIGNED_BYTE&&(CA=Q.R8)),k===Q.RED_INTEGER&&(T===Q.UNSIGNED_BYTE&&(CA=Q.R8UI),T===Q.UNSIGNED_SHORT&&(CA=Q.R16UI),T===Q.UNSIGNED_INT&&(CA=Q.R32UI),T===Q.BYTE&&(CA=Q.R8I),T===Q.SHORT&&(CA=Q.R16I),T===Q.INT&&(CA=Q.R32I)),k===Q.RG&&(T===Q.FLOAT&&(CA=Q.RG32F),T===Q.HALF_FLOAT&&(CA=Q.RG16F),T===Q.UNSIGNED_BYTE&&(CA=Q.RG8)),k===Q.RGBA){const UA=QA?Gi:wI.getTransfer(EA);T===Q.FLOAT&&(CA=Q.RGBA32F),T===Q.HALF_FLOAT&&(CA=Q.RGBA16F),T===Q.UNSIGNED_BYTE&&(CA=UA===MI?Q.SRGB8_ALPHA8:Q.RGBA8),T===Q.UNSIGNED_SHORT_4_4_4_4&&(CA=Q.RGBA4),T===Q.UNSIGNED_SHORT_5_5_5_1&&(CA=Q.RGB5_A1)}return(CA===Q.R16F||CA===Q.R32F||CA===Q.RG16F||CA===Q.RG32F||CA===Q.RGBA16F||CA===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),CA}function K(J,k,T){return l(J,T)===!0||J.isFramebufferTexture&&J.minFilter!==xI&&J.minFilter!==JI?Math.log2(Math.max(k.width,k.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?k.mipmaps.length:1}function N(J){return J===xI||J===Eo||J===NB?Q.NEAREST:Q.LINEAR}function M(J){const k=J.target;k.removeEventListener("dispose",M),x(k),k.isVideoTexture&&e.delete(k)}function f(J){const k=J.target;k.removeEventListener("dispose",f),U(k)}function x(J){const k=g.get(J);if(k.__webglInit===void 0)return;const T=J.source,EA=s.get(T);if(EA){const QA=EA[k.__cacheKey];QA.usedTimes--,QA.usedTimes===0&&G(J),Object.keys(EA).length===0&&s.delete(T)}g.remove(J)}function G(J){const k=g.get(J);Q.deleteTexture(k.__webglTexture);const T=J.source,EA=s.get(T);delete EA[k.__cacheKey],i.memory.textures--}function U(J){const k=J.texture,T=g.get(J),EA=g.get(k);if(EA.__webglTexture!==void 0&&(Q.deleteTexture(EA.__webglTexture),i.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let QA=0;QA<6;QA++){if(Array.isArray(T.__webglFramebuffer[QA]))for(let CA=0;CA<T.__webglFramebuffer[QA].length;CA++)Q.deleteFramebuffer(T.__webglFramebuffer[QA][CA]);else Q.deleteFramebuffer(T.__webglFramebuffer[QA]);T.__webglDepthbuffer&&Q.deleteRenderbuffer(T.__webglDepthbuffer[QA])}else{if(Array.isArray(T.__webglFramebuffer))for(let QA=0;QA<T.__webglFramebuffer.length;QA++)Q.deleteFramebuffer(T.__webglFramebuffer[QA]);else Q.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&Q.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let QA=0;QA<T.__webglColorRenderbuffer.length;QA++)T.__webglColorRenderbuffer[QA]&&Q.deleteRenderbuffer(T.__webglColorRenderbuffer[QA]);T.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(T.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let QA=0,CA=k.length;QA<CA;QA++){const UA=g.get(k[QA]);UA.__webglTexture&&(Q.deleteTexture(UA.__webglTexture),i.memory.textures--),g.remove(k[QA])}g.remove(k),g.remove(J)}let W=0;function j(){W=0}function Y(){const J=W;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),W+=1,J}function O(J){const k=[];return k.push(J.wrapS),k.push(J.wrapT),k.push(J.wrapR||0),k.push(J.magFilter),k.push(J.minFilter),k.push(J.anisotropy),k.push(J.internalFormat),k.push(J.format),k.push(J.type),k.push(J.generateMipmaps),k.push(J.premultiplyAlpha),k.push(J.flipY),k.push(J.unpackAlignment),k.push(J.colorSpace),k.join()}function L(J,k){const T=g.get(J);if(J.isVideoTexture&&dA(J),J.isRenderTargetTexture===!1&&J.version>0&&T.__version!==J.version){const EA=J.image;if(EA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(EA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oA(T,J,k);return}}I.bindTexture(Q.TEXTURE_2D,T.__webglTexture,Q.TEXTURE0+k)}function _(J,k){const T=g.get(J);if(J.version>0&&T.__version!==J.version){oA(T,J,k);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,T.__webglTexture,Q.TEXTURE0+k)}function $(J,k){const T=g.get(J);if(J.version>0&&T.__version!==J.version){oA(T,J,k);return}I.bindTexture(Q.TEXTURE_3D,T.__webglTexture,Q.TEXTURE0+k)}function X(J,k){const T=g.get(J);if(J.version>0&&T.__version!==J.version){GA(T,J,k);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,T.__webglTexture,Q.TEXTURE0+k)}const BA={[hi]:Q.REPEAT,[Dg]:Q.CLAMP_TO_EDGE,[ri]:Q.MIRRORED_REPEAT},gA={[xI]:Q.NEAREST,[Eo]:Q.NEAREST_MIPMAP_NEAREST,[NB]:Q.NEAREST_MIPMAP_LINEAR,[JI]:Q.LINEAR,[Ei]:Q.LINEAR_MIPMAP_NEAREST,[sC]:Q.LINEAR_MIPMAP_LINEAR},wA={[Uh]:Q.NEVER,[ph]:Q.ALWAYS,[Nh]:Q.LESS,[sa]:Q.LEQUAL,[Kh]:Q.EQUAL,[Rh]:Q.GEQUAL,[Fh]:Q.GREATER,[Jh]:Q.NOTEQUAL};function mA(J,k,T){if(k.type===Wg&&A.has("OES_texture_float_linear")===!1&&(k.magFilter===JI||k.magFilter===Ei||k.magFilter===NB||k.magFilter===sC||k.minFilter===JI||k.minFilter===Ei||k.minFilter===NB||k.minFilter===sC)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),T?(Q.texParameteri(J,Q.TEXTURE_WRAP_S,BA[k.wrapS]),Q.texParameteri(J,Q.TEXTURE_WRAP_T,BA[k.wrapT]),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,BA[k.wrapR]),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,gA[k.magFilter]),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,gA[k.minFilter])):(Q.texParameteri(J,Q.TEXTURE_WRAP_S,Q.CLAMP_TO_EDGE),Q.texParameteri(J,Q.TEXTURE_WRAP_T,Q.CLAMP_TO_EDGE),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,Q.CLAMP_TO_EDGE),(k.wrapS!==Dg||k.wrapT!==Dg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,N(k.magFilter)),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,N(k.minFilter)),k.minFilter!==xI&&k.minFilter!==JI&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),k.compareFunction&&(Q.texParameteri(J,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(J,Q.TEXTURE_COMPARE_FUNC,wA[k.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const EA=A.get("EXT_texture_filter_anisotropic");if(k.magFilter===xI||k.minFilter!==NB&&k.minFilter!==sC||k.type===Wg&&A.has("OES_texture_float_linear")===!1||E===!1&&k.type===KQ&&A.has("OES_texture_half_float_linear")===!1)return;(k.anisotropy>1||g.get(k).__currentAnisotropy)&&(Q.texParameterf(J,EA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,C.getMaxAnisotropy())),g.get(k).__currentAnisotropy=k.anisotropy)}}function V(J,k){let T=!1;J.__webglInit===void 0&&(J.__webglInit=!0,k.addEventListener("dispose",M));const EA=k.source;let QA=s.get(EA);QA===void 0&&(QA={},s.set(EA,QA));const CA=O(k);if(CA!==J.__cacheKey){QA[CA]===void 0&&(QA[CA]={texture:Q.createTexture(),usedTimes:0},i.memory.textures++,T=!0),QA[CA].usedTimes++;const UA=QA[J.__cacheKey];UA!==void 0&&(QA[J.__cacheKey].usedTimes--,UA.usedTimes===0&&G(k)),J.__cacheKey=CA,J.__webglTexture=QA[CA].texture}return T}function oA(J,k,T){let EA=Q.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(EA=Q.TEXTURE_2D_ARRAY),k.isData3DTexture&&(EA=Q.TEXTURE_3D);const QA=V(J,k),CA=k.source;I.bindTexture(EA,J.__webglTexture,Q.TEXTURE0+T);const UA=g.get(CA);if(CA.version!==UA.__version||QA===!0){I.activeTexture(Q.TEXTURE0+T);const hA=wI.getPrimaries(wI.workingColorSpace),yA=k.colorSpace===qg?null:wI.getPrimaries(k.colorSpace),HA=k.colorSpace===qg||hA===yA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,HA);const jA=h(k)&&r(k.image)===!1;let iA=w(k.image,jA,!1,C.maxTextureSize);iA=cA(k,iA);const tI=r(iA)||E,CI=B.convert(k.format,k.colorSpace);let ZA=B.convert(k.type),YA=y(k.internalFormat,CI,ZA,k.colorSpace,k.isVideoTexture);mA(EA,k,tI);let SA;const zA=k.mipmaps,d=E&&k.isVideoTexture!==!0&&YA!==ea,sA=UA.__version===void 0||QA===!0,rA=CA.dataReady,LA=K(k,iA,tI);if(k.isDepthTexture)YA=Q.DEPTH_COMPONENT,E?k.type===Wg?YA=Q.DEPTH_COMPONENT32F:k.type===FC?YA=Q.DEPTH_COMPONENT24:k.type===$C?YA=Q.DEPTH24_STENCIL8:YA=Q.DEPTH_COMPONENT16:k.type===Wg&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),k.format===AB&&YA===Q.DEPTH_COMPONENT&&k.type!==Go&&k.type!==FC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),k.type=FC,ZA=B.convert(k.type)),k.format===mB&&YA===Q.DEPTH_COMPONENT&&(YA=Q.DEPTH_STENCIL,k.type!==$C&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),k.type=$C,ZA=B.convert(k.type))),sA&&(d?I.texStorage2D(Q.TEXTURE_2D,1,YA,iA.width,iA.height):I.texImage2D(Q.TEXTURE_2D,0,YA,iA.width,iA.height,0,CI,ZA,null));else if(k.isDataTexture)if(zA.length>0&&tI){d&&sA&&I.texStorage2D(Q.TEXTURE_2D,LA,YA,zA[0].width,zA[0].height);for(let p=0,eA=zA.length;p<eA;p++)SA=zA[p],d?rA&&I.texSubImage2D(Q.TEXTURE_2D,p,0,0,SA.width,SA.height,CI,ZA,SA.data):I.texImage2D(Q.TEXTURE_2D,p,YA,SA.width,SA.height,0,CI,ZA,SA.data);k.generateMipmaps=!1}else d?(sA&&I.texStorage2D(Q.TEXTURE_2D,LA,YA,iA.width,iA.height),rA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,iA.width,iA.height,CI,ZA,iA.data)):I.texImage2D(Q.TEXTURE_2D,0,YA,iA.width,iA.height,0,CI,ZA,iA.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){d&&sA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,LA,YA,zA[0].width,zA[0].height,iA.depth);for(let p=0,eA=zA.length;p<eA;p++)SA=zA[p],k.format!==Ng?CI!==null?d?rA&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,p,0,0,0,SA.width,SA.height,iA.depth,CI,SA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,p,YA,SA.width,SA.height,iA.depth,0,SA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):d?rA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,p,0,0,0,SA.width,SA.height,iA.depth,CI,ZA,SA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,p,YA,SA.width,SA.height,iA.depth,0,CI,ZA,SA.data)}else{d&&sA&&I.texStorage2D(Q.TEXTURE_2D,LA,YA,zA[0].width,zA[0].height);for(let p=0,eA=zA.length;p<eA;p++)SA=zA[p],k.format!==Ng?CI!==null?d?rA&&I.compressedTexSubImage2D(Q.TEXTURE_2D,p,0,0,SA.width,SA.height,CI,SA.data):I.compressedTexImage2D(Q.TEXTURE_2D,p,YA,SA.width,SA.height,0,SA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):d?rA&&I.texSubImage2D(Q.TEXTURE_2D,p,0,0,SA.width,SA.height,CI,ZA,SA.data):I.texImage2D(Q.TEXTURE_2D,p,YA,SA.width,SA.height,0,CI,ZA,SA.data)}else if(k.isDataArrayTexture)d?(sA&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,LA,YA,iA.width,iA.height,iA.depth),rA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,iA.width,iA.height,iA.depth,CI,ZA,iA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,YA,iA.width,iA.height,iA.depth,0,CI,ZA,iA.data);else if(k.isData3DTexture)d?(sA&&I.texStorage3D(Q.TEXTURE_3D,LA,YA,iA.width,iA.height,iA.depth),rA&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,iA.width,iA.height,iA.depth,CI,ZA,iA.data)):I.texImage3D(Q.TEXTURE_3D,0,YA,iA.width,iA.height,iA.depth,0,CI,ZA,iA.data);else if(k.isFramebufferTexture){if(sA)if(d)I.texStorage2D(Q.TEXTURE_2D,LA,YA,iA.width,iA.height);else{let p=iA.width,eA=iA.height;for(let tA=0;tA<LA;tA++)I.texImage2D(Q.TEXTURE_2D,tA,YA,p,eA,0,CI,ZA,null),p>>=1,eA>>=1}}else if(zA.length>0&&tI){d&&sA&&I.texStorage2D(Q.TEXTURE_2D,LA,YA,zA[0].width,zA[0].height);for(let p=0,eA=zA.length;p<eA;p++)SA=zA[p],d?rA&&I.texSubImage2D(Q.TEXTURE_2D,p,0,0,CI,ZA,SA):I.texImage2D(Q.TEXTURE_2D,p,YA,CI,ZA,SA);k.generateMipmaps=!1}else d?(sA&&I.texStorage2D(Q.TEXTURE_2D,LA,YA,iA.width,iA.height),rA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,CI,ZA,iA)):I.texImage2D(Q.TEXTURE_2D,0,YA,CI,ZA,iA);l(k,tI)&&S(EA),UA.__version=CA.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function GA(J,k,T){if(k.image.length!==6)return;const EA=V(J,k),QA=k.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,J.__webglTexture,Q.TEXTURE0+T);const CA=g.get(QA);if(QA.version!==CA.__version||EA===!0){I.activeTexture(Q.TEXTURE0+T);const UA=wI.getPrimaries(wI.workingColorSpace),hA=k.colorSpace===qg?null:wI.getPrimaries(k.colorSpace),yA=k.colorSpace===qg||UA===hA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,yA);const HA=k.isCompressedTexture||k.image[0].isCompressedTexture,jA=k.image[0]&&k.image[0].isDataTexture,iA=[];for(let p=0;p<6;p++)!HA&&!jA?iA[p]=w(k.image[p],!1,!0,C.maxCubemapSize):iA[p]=jA?k.image[p].image:k.image[p],iA[p]=cA(k,iA[p]);const tI=iA[0],CI=r(tI)||E,ZA=B.convert(k.format,k.colorSpace),YA=B.convert(k.type),SA=y(k.internalFormat,ZA,YA,k.colorSpace),zA=E&&k.isVideoTexture!==!0,d=CA.__version===void 0||EA===!0,sA=QA.dataReady;let rA=K(k,tI,CI);mA(Q.TEXTURE_CUBE_MAP,k,CI);let LA;if(HA){zA&&d&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,rA,SA,tI.width,tI.height);for(let p=0;p<6;p++){LA=iA[p].mipmaps;for(let eA=0;eA<LA.length;eA++){const tA=LA[eA];k.format!==Ng?ZA!==null?zA?sA&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA,0,0,tA.width,tA.height,ZA,tA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA,SA,tA.width,tA.height,0,tA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zA?sA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA,0,0,tA.width,tA.height,ZA,YA,tA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA,SA,tA.width,tA.height,0,ZA,YA,tA.data)}}}else{LA=k.mipmaps,zA&&d&&(LA.length>0&&rA++,I.texStorage2D(Q.TEXTURE_CUBE_MAP,rA,SA,iA[0].width,iA[0].height));for(let p=0;p<6;p++)if(jA){zA?sA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,0,0,iA[p].width,iA[p].height,ZA,YA,iA[p].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,SA,iA[p].width,iA[p].height,0,ZA,YA,iA[p].data);for(let eA=0;eA<LA.length;eA++){const RA=LA[eA].image[p].image;zA?sA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA+1,0,0,RA.width,RA.height,ZA,YA,RA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA+1,SA,RA.width,RA.height,0,ZA,YA,RA.data)}}else{zA?sA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,0,0,ZA,YA,iA[p]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,SA,ZA,YA,iA[p]);for(let eA=0;eA<LA.length;eA++){const tA=LA[eA];zA?sA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA+1,0,0,ZA,YA,tA.image[p]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+p,eA+1,SA,ZA,YA,tA.image[p])}}}l(k,CI)&&S(Q.TEXTURE_CUBE_MAP),CA.__version=QA.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function FA(J,k,T,EA,QA,CA){const UA=B.convert(T.format,T.colorSpace),hA=B.convert(T.type),yA=y(T.internalFormat,UA,hA,T.colorSpace);if(!g.get(k).__hasExternalTextures){const jA=Math.max(1,k.width>>CA),iA=Math.max(1,k.height>>CA);QA===Q.TEXTURE_3D||QA===Q.TEXTURE_2D_ARRAY?I.texImage3D(QA,CA,yA,jA,iA,k.depth,0,UA,hA,null):I.texImage2D(QA,CA,yA,jA,iA,0,UA,hA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,J),IA(k)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,EA,QA,g.get(T).__webglTexture,0,aA(k)):(QA===Q.TEXTURE_2D||QA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&QA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,EA,QA,g.get(T).__webglTexture,CA),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function qA(J,k,T){if(Q.bindRenderbuffer(Q.RENDERBUFFER,J),k.depthBuffer&&!k.stencilBuffer){let EA=E===!0?Q.DEPTH_COMPONENT24:Q.DEPTH_COMPONENT16;if(T||IA(k)){const QA=k.depthTexture;QA&&QA.isDepthTexture&&(QA.type===Wg?EA=Q.DEPTH_COMPONENT32F:QA.type===FC&&(EA=Q.DEPTH_COMPONENT24));const CA=aA(k);IA(k)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,CA,EA,k.width,k.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,CA,EA,k.width,k.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,EA,k.width,k.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,J)}else if(k.depthBuffer&&k.stencilBuffer){const EA=aA(k);T&&IA(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,EA,Q.DEPTH24_STENCIL8,k.width,k.height):IA(k)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,EA,Q.DEPTH24_STENCIL8,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,k.width,k.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,J)}else{const EA=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let QA=0;QA<EA.length;QA++){const CA=EA[QA],UA=B.convert(CA.format,CA.colorSpace),hA=B.convert(CA.type),yA=y(CA.internalFormat,UA,hA,CA.colorSpace),HA=aA(k);T&&IA(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,HA,yA,k.width,k.height):IA(k)?o.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,HA,yA,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,yA,k.width,k.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function MA(J,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,J),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(k.depthTexture).__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),L(k.depthTexture,0);const EA=g.get(k.depthTexture).__webglTexture,QA=aA(k);if(k.depthTexture.format===AB)IA(k)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,EA,0,QA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,EA,0);else if(k.depthTexture.format===mB)IA(k)?o.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,EA,0,QA):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,EA,0);else throw new Error("Unknown depthTexture format")}function PA(J){const k=g.get(J),T=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!k.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");MA(k.__webglFramebuffer,J)}else if(T){k.__webglDepthbuffer=[];for(let EA=0;EA<6;EA++)I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer[EA]),k.__webglDepthbuffer[EA]=Q.createRenderbuffer(),qA(k.__webglDepthbuffer[EA],J,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer=Q.createRenderbuffer(),qA(k.__webglDepthbuffer,J,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function uA(J,k,T){const EA=g.get(J);k!==void 0&&FA(EA.__webglFramebuffer,J,J.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),T!==void 0&&PA(J)}function q(J){const k=J.texture,T=g.get(J),EA=g.get(k);J.addEventListener("dispose",f),J.isWebGLMultipleRenderTargets!==!0&&(EA.__webglTexture===void 0&&(EA.__webglTexture=Q.createTexture()),EA.__version=k.version,i.memory.textures++);const QA=J.isWebGLCubeRenderTarget===!0,CA=J.isWebGLMultipleRenderTargets===!0,UA=r(J)||E;if(QA){T.__webglFramebuffer=[];for(let hA=0;hA<6;hA++)if(E&&k.mipmaps&&k.mipmaps.length>0){T.__webglFramebuffer[hA]=[];for(let yA=0;yA<k.mipmaps.length;yA++)T.__webglFramebuffer[hA][yA]=Q.createFramebuffer()}else T.__webglFramebuffer[hA]=Q.createFramebuffer()}else{if(E&&k.mipmaps&&k.mipmaps.length>0){T.__webglFramebuffer=[];for(let hA=0;hA<k.mipmaps.length;hA++)T.__webglFramebuffer[hA]=Q.createFramebuffer()}else T.__webglFramebuffer=Q.createFramebuffer();if(CA)if(C.drawBuffers){const hA=J.texture;for(let yA=0,HA=hA.length;yA<HA;yA++){const jA=g.get(hA[yA]);jA.__webglTexture===void 0&&(jA.__webglTexture=Q.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(E&&J.samples>0&&IA(J)===!1){const hA=CA?k:[k];T.__webglMultisampledFramebuffer=Q.createFramebuffer(),T.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let yA=0;yA<hA.length;yA++){const HA=hA[yA];T.__webglColorRenderbuffer[yA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,T.__webglColorRenderbuffer[yA]);const jA=B.convert(HA.format,HA.colorSpace),iA=B.convert(HA.type),tI=y(HA.internalFormat,jA,iA,HA.colorSpace,J.isXRRenderTarget===!0),CI=aA(J);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,CI,tI,J.width,J.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+yA,Q.RENDERBUFFER,T.__webglColorRenderbuffer[yA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),J.depthBuffer&&(T.__webglDepthRenderbuffer=Q.createRenderbuffer(),qA(T.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if(QA){I.bindTexture(Q.TEXTURE_CUBE_MAP,EA.__webglTexture),mA(Q.TEXTURE_CUBE_MAP,k,UA);for(let hA=0;hA<6;hA++)if(E&&k.mipmaps&&k.mipmaps.length>0)for(let yA=0;yA<k.mipmaps.length;yA++)FA(T.__webglFramebuffer[hA][yA],J,k,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+hA,yA);else FA(T.__webglFramebuffer[hA],J,k,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+hA,0);l(k,UA)&&S(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(CA){const hA=J.texture;for(let yA=0,HA=hA.length;yA<HA;yA++){const jA=hA[yA],iA=g.get(jA);I.bindTexture(Q.TEXTURE_2D,iA.__webglTexture),mA(Q.TEXTURE_2D,jA,UA),FA(T.__webglFramebuffer,J,jA,Q.COLOR_ATTACHMENT0+yA,Q.TEXTURE_2D,0),l(jA,UA)&&S(Q.TEXTURE_2D)}I.unbindTexture()}else{let hA=Q.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(E?hA=J.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(hA,EA.__webglTexture),mA(hA,k,UA),E&&k.mipmaps&&k.mipmaps.length>0)for(let yA=0;yA<k.mipmaps.length;yA++)FA(T.__webglFramebuffer[yA],J,k,Q.COLOR_ATTACHMENT0,hA,yA);else FA(T.__webglFramebuffer,J,k,Q.COLOR_ATTACHMENT0,hA,0);l(k,UA)&&S(hA),I.unbindTexture()}J.depthBuffer&&PA(J)}function nA(J){const k=r(J)||E,T=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let EA=0,QA=T.length;EA<QA;EA++){const CA=T[EA];if(l(CA,k)){const UA=J.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,hA=g.get(CA).__webglTexture;I.bindTexture(UA,hA),S(UA),I.unbindTexture()}}}function AA(J){if(E&&J.samples>0&&IA(J)===!1){const k=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],T=J.width,EA=J.height;let QA=Q.COLOR_BUFFER_BIT;const CA=[],UA=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,hA=g.get(J),yA=J.isWebGLMultipleRenderTargets===!0;if(yA)for(let HA=0;HA<k.length;HA++)I.bindFramebuffer(Q.FRAMEBUFFER,hA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+HA,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,hA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+HA,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,hA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,hA.__webglFramebuffer);for(let HA=0;HA<k.length;HA++){CA.push(Q.COLOR_ATTACHMENT0+HA),J.depthBuffer&&CA.push(UA);const jA=hA.__ignoreDepthValues!==void 0?hA.__ignoreDepthValues:!1;if(jA===!1&&(J.depthBuffer&&(QA|=Q.DEPTH_BUFFER_BIT),J.stencilBuffer&&(QA|=Q.STENCIL_BUFFER_BIT)),yA&&Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,hA.__webglColorRenderbuffer[HA]),jA===!0&&(Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,[UA]),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[UA])),yA){const iA=g.get(k[HA]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,iA,0)}Q.blitFramebuffer(0,0,T,EA,0,0,T,EA,QA,Q.NEAREST),t&&Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,CA)}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),yA)for(let HA=0;HA<k.length;HA++){I.bindFramebuffer(Q.FRAMEBUFFER,hA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+HA,Q.RENDERBUFFER,hA.__webglColorRenderbuffer[HA]);const jA=g.get(k[HA]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,hA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+HA,Q.TEXTURE_2D,jA,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,hA.__webglMultisampledFramebuffer)}}function aA(J){return Math.min(C.maxSamples,J.samples)}function IA(J){const k=g.get(J);return E&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function dA(J){const k=i.render.frame;e.get(J)!==k&&(e.set(J,k),J.update())}function cA(J,k){const T=J.colorSpace,EA=J.format,QA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||J.format===oo||T!==hC&&T!==qg&&(wI.getTransfer(T)===MI?E===!1?A.has("EXT_sRGB")===!0&&EA===Ng?(J.format=oo,J.minFilter=JI,J.generateMipmaps=!1):k=Da.sRGBToLinear(k):(EA!==Ng||QA!==dC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),k}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=L,this.setTexture2DArray=_,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=uA,this.setupRenderTarget=q,this.updateRenderTargetMipmap=nA,this.updateMultisampleRenderTarget=AA,this.setupDepthRenderbuffer=PA,this.setupFrameBufferTexture=FA,this.useMultisampledRTT=IA}function Wh(Q,A,I){const g=I.isWebGL2;function C(B,i=qg){let E;const o=wI.getTransfer(i);if(B===dC)return Q.UNSIGNED_BYTE;if(B===Qa)return Q.UNSIGNED_SHORT_4_4_4_4;if(B===ia)return Q.UNSIGNED_SHORT_5_5_5_1;if(B===ah)return Q.BYTE;if(B===sh)return Q.SHORT;if(B===Go)return Q.UNSIGNED_SHORT;if(B===Ba)return Q.INT;if(B===FC)return Q.UNSIGNED_INT;if(B===Wg)return Q.FLOAT;if(B===KQ)return g?Q.HALF_FLOAT:(E=A.get("OES_texture_half_float"),E!==null?E.HALF_FLOAT_OES:null);if(B===nh)return Q.ALPHA;if(B===Ng)return Q.RGBA;if(B===Dh)return Q.LUMINANCE;if(B===hh)return Q.LUMINANCE_ALPHA;if(B===AB)return Q.DEPTH_COMPONENT;if(B===mB)return Q.DEPTH_STENCIL;if(B===oo)return E=A.get("EXT_sRGB"),E!==null?E.SRGB_ALPHA_EXT:null;if(B===rh)return Q.RED;if(B===Ea)return Q.RED_INTEGER;if(B===ch)return Q.RG;if(B===oa)return Q.RG_INTEGER;if(B===ta)return Q.RGBA_INTEGER;if(B===VE||B===XE||B===zE||B===$E)if(o===MI)if(E=A.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(B===VE)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===XE)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===zE)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===$E)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=A.get("WEBGL_compressed_texture_s3tc"),E!==null){if(B===VE)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===XE)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===zE)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===$E)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===oe||B===te||B===ee||B===ae)if(E=A.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(B===oe)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===te)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===ee)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===ae)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===ea)return E=A.get("WEBGL_compressed_texture_etc1"),E!==null?E.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===se||B===ne)if(E=A.get("WEBGL_compressed_texture_etc"),E!==null){if(B===se)return o===MI?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(B===ne)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===De||B===he||B===re||B===ce||B===we||B===Se||B===le||B===Ge||B===ye||B===ke||B===Me||B===Ue||B===Ne||B===Ke)if(E=A.get("WEBGL_compressed_texture_astc"),E!==null){if(B===De)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===he)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===re)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===ce)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===we)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===Se)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===le)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===Ge)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===ye)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===ke)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===Me)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===Ue)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===Ne)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===Ke)return o===MI?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===Ao||B===Fe||B===Je)if(E=A.get("EXT_texture_compression_bptc"),E!==null){if(B===Ao)return o===MI?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(B===Fe)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(B===Je)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(B===wh||B===Re||B===pe||B===de)if(E=A.get("EXT_texture_compression_rgtc"),E!==null){if(B===Ao)return E.COMPRESSED_RED_RGTC1_EXT;if(B===Re)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===pe)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===de)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===$C?g?Q.UNSIGNED_INT_24_8:(E=A.get("WEBGL_depth_texture"),E!==null?E.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class Ph extends Ig{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class pB extends oI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xk={type:"move"};class qt{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,i=null;const E=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){i=!0;for(const w of A.hand.values()){const r=I.getJointPose(w,g),h=this._getHandJoint(t,w);r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=r.radius),h.visible=r!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,D=.005;t.inputState.pinching&&s>n+D?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-D&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));E!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(E.matrix.fromArray(C.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,C.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(C.linearVelocity)):E.hasLinearVelocity=!1,C.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(C.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(Xk)))}return E!==null&&(E.visible=C!==null),o!==null&&(o.visible=B!==null),t!==null&&(t.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new pB;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const zk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$k=`
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
`,EK=`

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
`,oK=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,tK=oK,eK=`
	${iK}
	${EK}
`;`${tK}${eK}${bA.tonemapping_fragment}${bA.colorspace_fragment}`;function aK(Q){let A,I;return A=new QK({props:{enableZoom:!0,"target.y":20}}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},p:fQ,i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}function sK(Q){let A,I,g,C,B,i;return A=new xc({props:{shape:"ball",args:[1],mass:Q[2][aC].strength}}),g=new IC.Mesh({props:{geometry:Q[0],material:Q[1]}}),B=new Oc({props:{range:Q[2][aC].range,gravitationalConstant:Q[2][aC].gravitationalConstant,strength:Q[2][aC].strength,gravityType:aC}}),{c(){DI(A.$$.fragment),I=ug(),DI(g.$$.fragment),C=ug(),DI(B.$$.fragment)},l(E){hI(A.$$.fragment,E),I=Yg(E),hI(g.$$.fragment,E),C=Yg(E),hI(B.$$.fragment,E)},m(E,o){rI(A,E,o),gg(E,I,o),rI(g,E,o),gg(E,C,o),rI(B,E,o),i=!0},p:fQ,i(E){i||(KA(A.$$.fragment,E),KA(g.$$.fragment,E),KA(B.$$.fragment,E),i=!0)},o(E){pA(A.$$.fragment,E),pA(g.$$.fragment,E),pA(B.$$.fragment,E),i=!1},d(E){E&&(OI(I),OI(C)),cI(A,E),cI(g,E),cI(B,E)}}}function nK(Q){let A,I;return A=new bc({props:{linearVelocity:[5,-5,0],$$slots:{default:[sK]},$$scope:{ctx:Q}}}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},p(g,C){const B={};C&8&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}function DK(Q){let A,I,g,C,B,i;return A=new xc({props:{shape:"ball",args:[1],mass:Q[2][aC].strength}}),g=new IC.Mesh({props:{geometry:Q[0],material:Q[1]}}),B=new Oc({props:{range:Q[2][aC].range,gravitationalConstant:Q[2][aC].gravitationalConstant,strength:Q[2][aC].strength,gravityType:aC}}),{c(){DI(A.$$.fragment),I=ug(),DI(g.$$.fragment),C=ug(),DI(B.$$.fragment)},l(E){hI(A.$$.fragment,E),I=Yg(E),hI(g.$$.fragment,E),C=Yg(E),hI(B.$$.fragment,E)},m(E,o){rI(A,E,o),gg(E,I,o),rI(g,E,o),gg(E,C,o),rI(B,E,o),i=!0},p:fQ,i(E){i||(KA(A.$$.fragment,E),KA(g.$$.fragment,E),KA(B.$$.fragment,E),i=!0)},o(E){pA(A.$$.fragment,E),pA(g.$$.fragment,E),pA(B.$$.fragment,E),i=!1},d(E){E&&(OI(I),OI(C)),cI(A,E),cI(g,E),cI(B,E)}}}function hK(Q){let A,I,g,C,B,i,E,o,t,e;return A=new IC.PerspectiveCamera({props:{"position.y":50,"position.z":100,makeDefault:!0,fov:70,far:1e4,$$slots:{default:[aK]},$$scope:{ctx:Q}}}),g=new IC.DirectionalLight({props:{castShadow:!0,position:[8,20,-3]}}),B=new IC.GridHelper({props:{args:[100]}}),E=new IC.Group({props:{position:[-50,0,0],$$slots:{default:[nK]},$$scope:{ctx:Q}}}),t=new bc({props:{linearVelocity:[0,5,0],$$slots:{default:[DK]},$$scope:{ctx:Q}}}),{c(){DI(A.$$.fragment),I=ug(),DI(g.$$.fragment),C=ug(),DI(B.$$.fragment),i=ug(),DI(E.$$.fragment),o=ug(),DI(t.$$.fragment)},l(a){hI(A.$$.fragment,a),I=Yg(a),hI(g.$$.fragment,a),C=Yg(a),hI(B.$$.fragment,a),i=Yg(a),hI(E.$$.fragment,a),o=Yg(a),hI(t.$$.fragment,a)},m(a,s){rI(A,a,s),gg(a,I,s),rI(g,a,s),gg(a,C,s),rI(B,a,s),gg(a,i,s),rI(E,a,s),gg(a,o,s),rI(t,a,s),e=!0},p(a,[s]){const n={};s&8&&(n.$$scope={dirty:s,ctx:a}),A.$set(n);const D={};s&8&&(D.$$scope={dirty:s,ctx:a}),E.$set(D);const w={};s&8&&(w.$$scope={dirty:s,ctx:a}),t.$set(w)},i(a){e||(KA(A.$$.fragment,a),KA(g.$$.fragment,a),KA(B.$$.fragment,a),KA(E.$$.fragment,a),KA(t.$$.fragment,a),e=!0)},o(a){pA(A.$$.fragment,a),pA(g.$$.fragment,a),pA(B.$$.fragment,a),pA(E.$$.fragment,a),pA(t.$$.fragment,a),e=!1},d(a){a&&(OI(I),OI(C),OI(i),OI(o)),cI(A,a),cI(g,a),cI(B,a),cI(E,a),cI(t,a)}}}const aC="static";function rK(Q){const A=new mQ(1),I=new bC({color:"red"});return[A,I,{static:{type:"static",strength:3,range:100,gravitationalConstant:void 0},linear:{type:"linear",strength:1,range:100,gravitationalConstant:void 0},newtonian:{type:"newtonian",strength:10,range:100,gravitationalConstant:10}}]}class cK extends og{constructor(A){super(),tg(this,A,rK,hK,ig,{})}}function wK(Q){let A,I;return A=new cK({}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},p:fQ,i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}class SK extends og{constructor(A){super(),tg(this,A,null,wK,ig,{})}}function lK(Q){let A,I;return A=new SK({}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}function GK(Q){let A,I;return A=new NN({props:{gravity:[0,0,0],$$slots:{default:[lK]},$$scope:{ctx:Q}}}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}function yK(Q){let A,I;return A=new kU({props:{$$slots:{default:[GK]},$$scope:{ctx:Q}}}),{c(){DI(A.$$.fragment)},l(g){hI(A.$$.fragment,g)},m(g,C){rI(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(KA(A.$$.fragment,g),I=!0)},o(g){pA(A.$$.fragment,g),I=!1},d(g){cI(A,g)}}}class kK extends og{constructor(A){super(),tg(this,A,null,yK,ig,{})}}function MK(Q){let A,I,g,C;return g=new kK({}),{c(){A=zt("article"),I=zt("div"),DI(g.$$.fragment),this.h()},l(B){A=$t(B,"ARTICLE",{class:!0});var i=Ae(A);I=$t(i,"DIV",{id:!0,class:!0});var E=Ae(I);hI(g.$$.fragment,E),E.forEach(OI),i.forEach(OI),this.h()},h(){jE(I,"id","canvas-wrapper"),jE(I,"class","h-screen "),jE(A,"class","")},m(B,i){gg(B,A,i),$c(A,I),rI(g,I,null),C=!0},p:fQ,i(B){C||(KA(g.$$.fragment,B),C=!0)},o(B){pA(g.$$.fragment,B),C=!1},d(B){B&&OI(A),cI(g)}}}class UK extends og{constructor(A){super(),tg(this,A,null,MK,ig,{})}}function NK(Q){let A,I,g,C;return A=new Aw({}),g=new UK({}),{c(){DI(A.$$.fragment),I=ug(),DI(g.$$.fragment)},l(B){hI(A.$$.fragment,B),I=Yg(B),hI(g.$$.fragment,B)},m(B,i){rI(A,B,i),gg(B,I,i),rI(g,B,i),C=!0},p:fQ,i(B){C||(KA(A.$$.fragment,B),KA(g.$$.fragment,B),C=!0)},o(B){pA(A.$$.fragment,B),pA(g.$$.fragment,B),C=!1},d(B){B&&OI(I),cI(A,B),cI(g,B)}}}class fK extends og{constructor(A){super(),tg(this,A,null,NK,ig,{})}}export{fK as component};