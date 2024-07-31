// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.3-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.3.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@v0.3.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammainc@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@v0.2.1-esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabs@v0.3.0-esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minabs@v0.2.3-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.2-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.2.2-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.2-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.2-esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@v0.2.2-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoef@v0.2.3-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@v0.2.2-esm/index.mjs";var U=new Array(30);function W(s,t,e,i,m,r,a){var o,p,f,c,v,H,J,K,L,M,O,P,Q,R,S,W,X,Y;if(P=function(s,t){var e,i,n,m,r,a,d;return d=(t-s-F+.5)/(n=s+F-.5),s<1?t<=y?C(s*k(t)-t-A(s)):D(t,s)*C(-t)/I(s):(B(d*d*s)<=100&&s>150?(e=s*(T(d)-d)+t*(.5-F)/n,e=C(e)):(m=s*k(t/n),j(m,r=s-t)<=y||E(m,r)>=w?(i=r/s,j(m,r)/2>y&&E(m,r)/2<w?e=(a=D(t/n,s/2)*C(r/2))*a:j(m,r)/4>y&&E(m,r)/4<w&&t>s?(e=(a=D(t/n,s/4)*C(r/4))*a,e*=e):e=i>y&&i<w?D(t*C(i)/n,s):C(m+r)):e=D(t/n,s)*C(r)),e*=V(n/G)/q(s))}(t,Y=-(X=s+(H=t-1)/2)*(M=i<.35?n(-i):N(e))),P<=h)return m;for(a?(o=P/b(s,t),o/=l(X,t)):o=function(s,t){var e;return e=s*k(t),t>=1?e<w&&-t>y?l(t,s)*d(-t):s>=1?l(t/d(t/s),s):d(e-t):e>y?l(t,s)*d(-t):t/s<w?l(t/d(t/s),s):d(e-t)}(t,Y)/l(X,t),o*=r,U[0]=1,Q=x(Y,t,!0,!0),c=m+o*(Q/=P),f=1,J=M/2,J*=J,K=1,O=4*X*X,v=t,S=1;S<U.length;++S){for(f+=2,U[S]=0,L=t-S,p=3,R=1;R<S;++R)L=R*t-S,U[S]+=L*U[S-R]/g(p),p+=2;if(U[S]/=S,U[S]+=H/g(f),Q=(v*(v+1)*Q+(Y+v+1)*K)/O,K*=J,v+=2,c+=W=o*U[S]*Q,W>1){if(u(W)<u(z*c))break}else if(u(W/z)<u(c))break}return c}function X(s,t,e){var i,n;if(0===e)return 1;for(i=1,n=0;n<e;n++)i*=(s+n)/(t+n);return i}function Y(s,t,i,m,r){var o,p,h,f,c,v,b,g,x,z,k,w,y,q;if(!r)return l(i,s)*l(m,t);if(f=s+O-.5,c=t+O-.5,v=(y=s+t)+O-.5,o=H(y),o/=H(s)*H(t),o*=a(c/P),o*=a(f/v),K(b=(i*t-m*f)/f,g=(m*s-i*c)/c)<.2)if(b*g>0||j(s,t)<1)u(b)<.1?o*=d(s*n(b)):o*=l(i*v/f,s),u(g)<.1?o*=d(t*n(g)):o*=l(m*v/c,t);else if(J(b,g)<.5)h=t/s,(p=s<t)&&h*g<.1||!p&&b/h>.1?(x=e(h*n(g)),x=s*n(x=b+x+x*b),o*=d(x)):(x=e(n(b)/h),x=t*n(x=g+x+x*g),o*=d(x));else if(u(b)<u(g))if((q=s*n(b)+t*N(m*v/c))<=M||q>=L){if((q+=N(o))>=L)return NaN;o=d(q)}else o*=d(q);else if((q=t*n(g)+s*N(i*v/f))<=M||q>=L){if((q+=N(o))>=L)return NaN;o=d(q)}else o*=d(q);else if(w=m*v/c,b=s*N(k=i*v/f),g=t*N(w),b>=L||b<=M||g>=L||g<=M)if(s<t)if(z=l(w,t/s),(x=s*(N(k)+N(z)))<L&&x>M)o*=l(z*k,s);else{if((g+=b+N(o))>=L)return NaN;o=d(g)}else if(z=l(k,s/t),(x=(N(z)+N(w))*t)<L&&x>M)o*=l(z*w,t);else{if((g+=b+N(o))>=L)return NaN;o=d(g)}else o*=l(k,s)*l(w,t);return o}var Z={keep:!0,maxIter:1e3};function $(s,t,e,i,n,m){var r,a;return r=Y(s,t,e,i,n),m&&(m[1]=r),0===r?r:(a=function(s,t,e,i){var n=0;return function(){var m,r,a;return r=(s+n-1)*(s+t+n-1)*n*(t-n)*e*e,m=s+2*n-1,a=n,a+=n*(t-n)*e/(s+2*n-1),a+=(s+n)*(s*i-t*e+1+n*(2-e))/(s+2*n+1),n+=1,[r/=m*m,a]}}(s,t,e,i),r/Q(a,Z))}function _(s,t,e,i,n,m,r){var a,d,l,o;if(a=Y(s,t,e,i,m),r&&(r[1]=a),0===(a/=s))return a;for(l=1,d=1,o=0;o<n-1;++o)l+=d*=(s+t+o)*e/(s+o+1);return a*=l}var ss={maxTerms:100};function ts(s,t,e,i,m,r,o){var j,p,f,c,v,b,g,x;return m?(p=s+O-.5,f=t+O-.5,c=(g=s+t)+O-.5,j=H(g)/(H(s)*H(t)),v=N(c/f)*(t-.5),b=N(e*c/p)*s,v>M&&v<L&&b>M&&b<L?(j*=s*t<10*f?d((t-.5)*n(s/f)):l(c/f,t-.5),j*=l(e*c/p,s),j*=a(p/P),r&&(r[1]=j*l(o,t))):(j=N(j)+v+b+(N(p)-1)/2,r&&(r[1]=d(j+t*N(o))),j=d(j))):j=l(e,s),j<h?i:(x=function(s,t,e,i){var n=1-t,m=1;return function(){var t=i/s;return s+=1,i*=n*e/m,m+=1,n+=1,t}}(s,t,e,j),ss.initialValue=i,S(x,ss))}var es=1/v;function is(s,b,g,x,u,N,z,k){var w,y,q,A,I,T,V,B,C,D,E;if(E=1-s,T=k,N[V=k+z]=-1,t(s)||s<0||s>1)return N[T]=NaN,N[V]=NaN,N;if(x){if(b<0||g<0)return N[T]=NaN,N[V]=NaN,N;if(0===b){if(0===g)return N[T]=NaN,N[V]=NaN,N;if(g>0)return N[T]=u?0:1,N}else if(0===g&&b>0)return N[T]=u?1:0,N}else if(b<=0||g<=0)return N[T]=NaN,N[V]=NaN,N;return 0===s?(N[V]=1===b?1:b<1?p/2:2*h,u?(N[T]=x?1:r(b,g),N):(N[T]=0,N)):1===s?(N[V]=1===g?1:g<1?p/2:2*h,N[T]=u?0:x?1:r(b,g),N):.5===b&&.5===g?(N[V]=es*a(E*s),D=m(a(u?E:s)),D/=c,x||(D*=v),N[T]=D,N):(1===b&&(I=g,g=b,b=I,I=E,E=s,s=I,u=!u),1===g?1===b?(N[T]=u?E:s,N[V]=1,N):(N[V]=b*l(s,b-1),D=E<.5?u?-e(b*n(-E)):d(b*n(-E)):u?-(l(s,b)-1):l(s,b),x||(D/=b),N[T]=D,N):(j(b,g)<=1?(s>.5&&(I=g,g=b,b=I,I=E,E=s,s=I,u=!u),o(b,g)<=1?b>=j(.2,g)||l(s,b)<=.9?u?(u=!1,y=-ts(b,g,s,y=-(x?1:r(b,g)),x,N,E)):y=ts(b,g,s,0,x,N,E):(I=g,g=b,b=I,I=E,E=s,s=I,u=!u,E>=.3?u?(u=!1,y=-ts(b,g,s,y=-(x?1:r(b,g)),x,N,E)):y=ts(b,g,s,0,x,N,E):(w=x?1:X(b+g,b,20),y=_(b,g,s,E,20,x,N),u?(u=!1,y=-W(b+20,g,s,E,y-=x?1:r(b,g),w,x)):y=W(b+20,g,s,E,y,w,x))):g<=1||s<.1&&l(g*s,b)<=.7?u?(u=!1,y=-ts(b,g,s,y=-(x?1:r(b,g)),x,N,E)):y=ts(b,g,s,0,x,N,E):(I=g,g=b,b=I,I=E,E=s,s=I,u=!u,E>=.3?u?(u=!1,y=-ts(b,g,s,y=-(x?1:r(b,g)),x,N,E)):y=ts(b,g,s,0,x,N,E):b>=15?u?(u=!1,y=-W(b,g,s,E,y=-(x?1:r(b,g)),1,x)):y=W(b,g,s,E,0,1,x):(w=x?1:X(b+g,b,20),y=_(b,g,s,E,20,x,N),u?(u=!1,y=-W(b+20,g,s,E,y-=x?1:r(b,g),w,x)):y=W(b+20,g,s,E,y,w,x)))):((b<g?b-(b+g)*s:(b+g)*E-g)<0&&(I=g,g=b,b=I,I=E,E=s,s=I,u=!u),g<40?i(b)===b&&i(g)===g&&b<f-100?(y=function(s,t,e,n){var m,r,a,d,o;if((r=l(e,s))>h)for(d=r,o=i(s-1);o>t;o--)r+=d*=(o+1)*n/((s-o)*e);else if((a=i(s*e))<=t+1&&(a=i(t+2)),r=l(e,a)*l(n,s-a),0==(r*=R(i(s),i(a))))for(o=a-1;o>t;o--)r+=l(e,o)*l(n,s-o),r*=R(i(s),i(o));else{for(d=r,m=r,o=a-1;o>t;o--)r+=d*=(o+1)*n/((s-o)*e);for(d=m,o=a+1;o<=s;o++)r+=d*=(s-o+1)*e/(o*n)}return r}(C=g+(B=b-1),B,s,E),x||(y*=r(b,g))):g*s<=.7?u?(u=!1,y=-ts(b,g,s,y=-(x?1:r(b,g)),x,N,E)):y=ts(b,g,s,0,x,N,E):b>15?((C=i(g))===g&&(C-=1),q=g-C,w=x?1:X(b+q,q,C),y=W(b,q,s,E,y=_(q,b,E,s,C,x),1,x),y/=w):x?((q=g-(C=i(g)))<=0&&(C-=1,q+=1),y=_(q,b,E,s,C,x),y+=_(b,q,s,E,20,x),u&&(y-=1),y=W(b+20,q,s,E,y,1,x),u&&(y=-y,u=!1)):y=$(b,g,s,E,x,N):y=$(b,g,s,E,x,N)),N[V]<0&&(N[V]=Y(b,g,s,E,!0)),A=E*s,0!==N[V]&&(p*A<N[V]?N[V]=p/2:N[V]/=A),N[T]=u?(x?1:r(b,g))-y:y,N))}function ns(s,t,e,i,n){return is(s,t,e,i,n,[0,0],1,0)}s(ns,"assign",is);export{is as assign,ns as default};
//# sourceMappingURL=index.mjs.map
