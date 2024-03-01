// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammainc@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.2.1-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@v0.2.1-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabs@v0.2.1-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minabs@v0.2.1-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@v0.2.1-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-binomcoef@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@v0.2.1-esm/index.mjs";var F=new Array(30);function G(s,t,e,i,r,m,j){var h,c,v,V,B,C,D,E,G,H,J,K,L,M,O,P,Q,R;if(K=function(s,t){var e,i,r,m,j,p,h;return h=(t-s-I+.5)/(r=s+I-.5),s<1?t<=w?d(s*N(t)-t-q(s)):l(t,s)*d(-t)/A(s):(x(h*h*s)<=100&&s>150?(e=s*(n(h)-h)+t*(.5-I)/r,e=d(e)):(m=s*N(t/r),f(m,j=s-t)<=w||o(m,j)>=y?(i=j/s,f(m,j)/2>w&&o(m,j)/2<y?e=(p=l(t/r,s/2)*d(j/2))*p:f(m,j)/4>w&&o(m,j)/4<y&&t>s?(e=(p=l(t/r,s/4)*d(j/4))*p,e*=e):e=i>w&&i<y?l(t*d(i)/r,s):d(m+j)):e=l(t/r,s)*d(j)),e*=a(r/T)/z(s))}(t,R=-(Q=s+(C=t-1)/2)*(H=i<.35?n(-i):N(e))),K<=p)return r;for(j?(h=K/b(s,t),h/=l(Q,t)):h=function(s,t){var e;return e=s*N(t),t>=1?e<y&&-t>w?l(t,s)*d(-t):s>=1?l(t/d(t/s),s):d(e-t):e>w?l(t,s)*d(-t):t/s<y?l(t/d(t/s),s):d(e-t)}(t,R)/l(Q,t),h*=m,F[0]=1,L=g(R,t,!0,!0),V=r+h*(L/=K),v=1,D=H/2,D*=D,E=1,J=4*Q*Q,B=t,O=1;O<F.length;++O){for(v+=2,F[O]=0,G=t-O,c=3,M=1;M<O;++M)G=M*t-O,F[O]+=G*F[O-M]/u(c),c+=2;if(F[O]/=O,F[O]+=C/u(v),L=(B*(B+1)*L+(R+B+1)*E)/J,E*=D,B+=2,V+=P=h*F[O]*L,P>1){if(x(P)<x(k*V))break}else if(x(P/k)<x(V))break}return V}function H(s,t,e){var i,n;if(0===e)return 1;for(i=1,n=0;n<e;n++)i*=(s+n)/(t+n);return i}function J(s,t,i,r,m){var o,j,p,h,c,v,b,u,g,k,q,A,C,D;if(!m)return l(i,s)*l(r,t);if(h=s+I-.5,c=t+I-.5,v=(C=s+t)+I-.5,o=z(C),o/=z(s)*z(t),o*=a(c/T),o*=a(h/v),B(b=(i*t-r*h)/h,u=(r*s-i*c)/c)<.2)if(b*u>0||f(s,t)<1)x(b)<.1?o*=d(s*n(b)):o*=l(i*v/h,s),x(u)<.1?o*=d(t*n(u)):o*=l(r*v/c,t);else if(V(b,u)<.5)p=t/s,(j=s<t)&&p*u<.1||!j&&b/p>.1?(g=e(p*n(u)),g=s*n(g=b+g+g*b),o*=d(g)):(g=e(n(b)/p),g=t*n(g=u+g+g*u),o*=d(g));else if(x(b)<x(u))if((D=s*n(b)+t*N(r*v/c))<=w||D>=y){if((D+=N(o))>=y)return NaN;o=d(D)}else o*=d(D);else if((D=t*n(u)+s*N(i*v/h))<=w||D>=y){if((D+=N(o))>=y)return NaN;o=d(D)}else o*=d(D);else if(A=r*v/c,b=s*N(q=i*v/h),u=t*N(A),b>=y||b<=w||u>=y||u<=w)if(s<t)if(k=l(A,t/s),(g=s*(N(q)+N(k)))<y&&g>w)o*=l(k*q,s);else{if((u+=b+N(o))>=y)return NaN;o=d(u)}else if(k=l(q,s/t),(g=(N(k)+N(A))*t)<y&&g>w)o*=l(k*A,t);else{if((u+=b+N(o))>=y)return NaN;o=d(u)}else o*=l(q,s)*l(A,t);return o}var K={keep:!0,maxIter:1e3};function L(s,t,e,i,n,r){var m,a;return m=J(s,t,e,i,n),r&&(r[1]=m),0===m?m:(a=function(s,t,e,i){var n=0;return function(){var r,m,a;return m=(s+n-1)*(s+t+n-1)*n*(t-n)*e*e,r=s+2*n-1,a=n,a+=n*(t-n)*e/(s+2*n-1),a+=(s+n)*(s*i-t*e+1+n*(2-e))/(s+2*n+1),n+=1,[m/=r*r,a]}}(s,t,e,i),m/C(a,K))}function M(s,t,e,i,n,r,m){var a,d,l,o;if(a=J(s,t,e,i,r),m&&(m[1]=a),0===(a/=s))return a;for(l=1,d=1,o=0;o<n-1;++o)l+=d*=(s+t+o)*e/(s+o+1);return a*=l}var O={maxTerms:100};function P(s,t,e,i,r,m,o){var f,j,h,c,v,b,u,g;return r?(j=s+I-.5,h=t+I-.5,c=(u=s+t)+I-.5,f=z(u)/(z(s)*z(t)),v=N(c/h)*(t-.5),b=N(e*c/j)*s,v>w&&v<y&&b>w&&b<y?(f*=s*t<10*h?d((t-.5)*n(s/h)):l(c/h,t-.5),f*=l(e*c/j,s),f*=a(j/T),m&&(m[1]=f*l(o,t))):(f=N(f)+v+b+(N(j)-1)/2,m&&(m[1]=d(f+t*N(o))),f=d(f))):f=l(e,s),f<p?i:(g=function(s,t,e,i){var n=1-t,r=1;return function(){var t=i/s;return s+=1,i*=n*e/r,r+=1,n+=1,t}}(s,t,e,f),O.initialValue=i,E(g,O))}var Q=1/v;function R(s,b,u,g,x,N,k,y){var w,z,q,A,I,T,V,B,C,E,F;if(F=1-s,T=y,N[V=y+k]=-1,t(s)||s<0||s>1)return N[T]=NaN,N[V]=NaN,N;if(g){if(b<0||u<0)return N[T]=NaN,N[V]=NaN,N;if(0===b){if(0===u)return N[T]=NaN,N[V]=NaN,N;if(u>0)return N[T]=x?0:1,N}else if(0===u&&b>0)return N[T]=x?1:0,N}else if(b<=0||u<=0)return N[T]=NaN,N[V]=NaN,N;return 0===s?(N[V]=1===b?1:b<1?j/2:2*p,x?(N[T]=g?1:m(b,u),N):(N[T]=0,N)):1===s?(N[V]=1===u?1:u<1?j/2:2*p,N[T]=x?0:g?1:m(b,u),N):.5===b&&.5===u?(N[V]=Q*a(F*s),E=r(a(x?F:s)),E/=c,g||(E*=v),N[T]=E,N):(1===b&&(I=u,u=b,b=I,I=F,F=s,s=I,x=!x),1===u?1===b?(N[T]=x?F:s,N[V]=1,N):(N[V]=b*l(s,b-1),E=F<.5?x?-e(b*n(-F)):d(b*n(-F)):x?-(l(s,b)-1):l(s,b),g||(E/=b),N[T]=E,N):(f(b,u)<=1?(s>.5&&(I=u,u=b,b=I,I=F,F=s,s=I,x=!x),o(b,u)<=1?b>=f(.2,u)||l(s,b)<=.9?x?(x=!1,z=-P(b,u,s,z=-(g?1:m(b,u)),g,N,F)):z=P(b,u,s,0,g,N,F):(I=u,u=b,b=I,I=F,F=s,s=I,x=!x,F>=.3?x?(x=!1,z=-P(b,u,s,z=-(g?1:m(b,u)),g,N,F)):z=P(b,u,s,0,g,N,F):(w=g?1:H(b+u,b,20),z=M(b,u,s,F,20,g,N),x?(x=!1,z=-G(b+20,u,s,F,z-=g?1:m(b,u),w,g)):z=G(b+20,u,s,F,z,w,g))):u<=1||s<.1&&l(u*s,b)<=.7?x?(x=!1,z=-P(b,u,s,z=-(g?1:m(b,u)),g,N,F)):z=P(b,u,s,0,g,N,F):(I=u,u=b,b=I,I=F,F=s,s=I,x=!x,F>=.3?x?(x=!1,z=-P(b,u,s,z=-(g?1:m(b,u)),g,N,F)):z=P(b,u,s,0,g,N,F):b>=15?x?(x=!1,z=-G(b,u,s,F,z=-(g?1:m(b,u)),1,g)):z=G(b,u,s,F,0,1,g):(w=g?1:H(b+u,b,20),z=M(b,u,s,F,20,g,N),x?(x=!1,z=-G(b+20,u,s,F,z-=g?1:m(b,u),w,g)):z=G(b+20,u,s,F,z,w,g)))):((b<u?b-(b+u)*s:(b+u)*F-u)<0&&(I=u,u=b,b=I,I=F,F=s,s=I,x=!x),u<40?i(b)===b&&i(u)===u&&b<h-100?(z=function(s,t,e,n){var r,m,a,d,o;if((m=l(e,s))>p)for(d=m,o=i(s-1);o>t;o--)m+=d*=(o+1)*n/((s-o)*e);else if((a=i(s*e))<=t+1&&(a=i(t+2)),m=l(e,a)*l(n,s-a),0==(m*=D(i(s),i(a))))for(o=a-1;o>t;o--)m+=l(e,o)*l(n,s-o),m*=D(i(s),i(o));else{for(d=m,r=m,o=a-1;o>t;o--)m+=d*=(o+1)*n/((s-o)*e);for(d=r,o=a+1;o<=s;o++)m+=d*=(s-o+1)*e/(o*n)}return m}(C=u+(B=b-1),B,s,F),g||(z*=m(b,u))):u*s<=.7?x?(x=!1,z=-P(b,u,s,z=-(g?1:m(b,u)),g,N,F)):z=P(b,u,s,0,g,N,F):b>15?((C=i(u))===u&&(C-=1),q=u-C,w=g?1:H(b+q,q,C),z=G(b,q,s,F,z=M(q,b,F,s,C,g),1,g),z/=w):g?((q=u-(C=i(u)))<=0&&(C-=1,q+=1),z=M(q,b,F,s,C,g),z+=M(b,q,s,F,20,g),x&&(z-=1),z=G(b+20,q,s,F,z,1,g),x&&(z=-z,x=!1)):z=L(b,u,s,F,g,N):z=L(b,u,s,F,g,N)),N[V]<0&&(N[V]=J(b,u,s,F,!0)),A=F*s,0!==N[V]&&(j*A<N[V]?N[V]=j/2:N[V]/=A),N[T]=x?(g?1:m(b,u))-z:z,N))}function S(s,t,e,i,n){return R(s,t,e,i,n,[0,0],1,0)}s(S,"assign",R);export{R as assign,S as default};
//# sourceMappingURL=index.mjs.map
