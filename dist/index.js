"use strict";var w=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var Nr=w(function(de,cr){"use strict";var B=require("@stdlib/math-base-special-exp"),Z=require("@stdlib/math-base-special-pow"),pr=require("@stdlib/math-base-special-ln"),lr=require("@stdlib/constants-float64-max-ln"),mr=require("@stdlib/constants-float64-min-ln");function dr(e,r){var i,f;return f=e*pr(r),r>=1?f<lr&&-r>mr?i=Z(r,e)*B(-r):e>=1?i=Z(r/B(r/e),e):i=B(f-r):f>mr?i=Z(r,e)*B(-r):r/e<lr?i=Z(r/B(r/e),e):i=B(f-r),i}cr.exports=dr});var Sr=w(function(xe,Ar){"use strict";var xr=require("@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled"),zr=require("@stdlib/math-base-special-gammaln"),br=require("@stdlib/math-base-special-gamma"),re=require("@stdlib/math-base-special-log1p"),ee=require("@stdlib/math-base-special-sqrt"),ie=require("@stdlib/math-base-special-abs"),G=require("@stdlib/math-base-special-exp"),k=require("@stdlib/math-base-special-pow"),b=require("@stdlib/math-base-special-max"),rr=require("@stdlib/math-base-special-min"),ur=require("@stdlib/math-base-special-ln"),$=require("@stdlib/constants-float64-max-ln"),J=require("@stdlib/constants-float64-min-ln"),er=require("@stdlib/constants-float64-gamma-lanczos-g"),ve=require("@stdlib/constants-float64-e");function fe(e,r){var i,f,s,v,m,n,q;return s=e+er-.5,q=(r-e-er+.5)/s,e<1?r<=J?G(e*ur(r)-r-zr(e)):k(r,e)*G(-r)/br(e):(ie(q*q*e)<=100&&e>150?(i=e*(re(q)-q)+r*(.5-er)/s,i=G(i)):(v=e*ur(r/s),m=e-r,rr(v,m)<=J||b(v,m)>=$?(f=m/e,rr(v,m)/2>J&&b(v,m)/2<$?(n=k(r/s,e/2)*G(m/2),i=n*n):rr(v,m)/4>J&&b(v,m)/4<$&&r>e?(n=k(r/s,e/4)*G(m/4),i=n*n,i*=i):f>J&&f<$?i=k(r*G(f)/s,e):i=G(v+m)):i=k(r/s,e)*G(m)),i*=ee(s/ve)/xr(e),i)}Ar.exports=fe});var Mr=w(function(ze,or){"use strict";var se=require("@stdlib/math-base-special-gamma-delta-ratio"),Ir=require("@stdlib/math-base-special-factorial"),ae=require("@stdlib/math-base-special-gammainc"),ne=require("@stdlib/math-base-special-log1p"),y=require("@stdlib/math-base-special-abs"),Lr=require("@stdlib/math-base-special-pow"),qe=require("@stdlib/math-base-special-ln"),te=require("@stdlib/constants-float64-smallest-normal"),_r=require("@stdlib/constants-float64-eps"),le=Nr(),me=Sr(),O=new Array(30);function ce(e,r,i,f,s,v,m){var n,q,u,a,c,N,l,S,A,_,L,I,t,U,o,j,C,H;if(N=r-1,C=e+N/2,f<.35?_=ne(-f):_=qe(i),H=-C*_,I=me(r,H),I<=te)return s;for(m?(n=I/se(e,r),n/=Lr(C,r)):n=le(r,H)/Lr(C,r),n*=v,O[0]=1,t=ae(H,r,!0,!0),t/=I,a=s+n*t,u=1,l=_/2,l*=l,S=1,L=4*C*C,c=r,o=1;o<O.length;++o){for(u+=2,O[o]=0,A=r-o,q=3,U=1;U<o;++U)A=U*r-o,O[o]+=A*O[o-U]/Ir(q),q+=2;if(O[o]/=o,O[o]+=N/Ir(u),t=(c*(c+1)*t+(H+c+1)*S)/L,S*=l,c+=2,j=n*O[o]*t,a+=j,j>1){if(y(j)<y(_r*a))break}else if(y(j/_r)<y(a))break}return a}or.exports=ce});var wr=w(function(be,Pr){"use strict";function Ne(e,r,i){var f,s;if(i===0)return 1;for(f=1,s=0;s<i;s++)f*=(e+s)/(r+s);return f}Pr.exports=Ne});var p=w(function(ri,Tr){"use strict";var ir=require("@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled"),ue=require("@stdlib/math-base-special-maxabs"),Ae=require("@stdlib/math-base-special-minabs"),Er=require("@stdlib/math-base-special-expm1"),X=require("@stdlib/math-base-special-log1p"),Fr=require("@stdlib/math-base-special-sqrt"),g=require("@stdlib/math-base-special-abs"),E=require("@stdlib/math-base-special-exp"),F=require("@stdlib/math-base-special-pow"),Se=require("@stdlib/math-base-special-min"),M=require("@stdlib/math-base-special-ln"),T=require("@stdlib/constants-float64-max-ln"),D=require("@stdlib/constants-float64-min-ln"),vr=require("@stdlib/constants-float64-gamma-lanczos-g"),Ie=require("@stdlib/constants-float64-e");function Le(e,r,i,f,s){var v,m,n,q,u,a,c,N,l,S,A,_,L,I;if(!s)return F(i,e)*F(f,r);if(L=e+r,q=e+vr-.5,u=r+vr-.5,a=L+vr-.5,v=ir(L),v/=ir(e)*ir(r),v*=Fr(u/Ie),v*=Fr(q/a),c=(i*r-f*q)/q,N=(f*e-i*u)/u,Ae(c,N)<.2)if(c*N>0||Se(e,r)<1)g(c)<.1?v*=E(e*X(c)):v*=F(i*a/q,e),g(N)<.1?v*=E(r*X(N)):v*=F(f*a/u,r);else if(ue(c,N)<.5)m=e<r,n=r/e,m&&n*N<.1||!m&&c/n>.1?(l=Er(n*X(N)),l=c+l+l*c,l=e*X(l),v*=E(l)):(l=Er(X(c)/n),l=N+l+l*N,l=r*X(l),v*=E(l));else if(g(c)<g(N))if(I=e*X(c)+r*M(f*a/u),I<=D||I>=T){if(I+=M(v),I>=T)return NaN;v=E(I)}else v*=E(I);else if(I=r*X(N)+e*M(i*a/q),I<=D||I>=T){if(I+=M(v),I>=T)return NaN;v=E(I)}else v*=E(I);else if(A=i*a/q,_=f*a/u,c=e*M(A),N=r*M(_),c>=T||c<=D||N>=T||N<=D)if(e<r)if(S=F(_,r/e),l=e*(M(A)+M(S)),l<T&&l>D)v*=F(S*A,e);else{if(N+=c+M(v),N>=T)return NaN;v=E(N)}else if(S=F(A,e/r),l=(M(S)+M(_))*r,l<T&&l>D)v*=F(S*_,r);else{if(N+=c+M(v),N>=T)return NaN;v=E(N)}else v*=F(A,e)*F(_,r);return v}Tr.exports=Le});var Gr=w(function(ei,hr){"use strict";var _e=require("@stdlib/math-base-tools-continued-fraction"),oe=p(),Me={keep:!0,maxIter:1e3};function Pe(e,r,i,f){var s=0;return v;function v(){var m,n,q;return n=(e+s-1)*(e+r+s-1)*s*(r-s)*i*i,m=e+2*s-1,n/=m*m,q=s,q+=s*(r-s)*i/(e+2*s-1),q+=(e+s)*(e*f-r*i+1+s*(2-i))/(e+2*s+1),s+=1,[n,q]}}function we(e,r,i,f,s,v){var m,n,q;return m=oe(e,r,i,f,s),v&&(v[1]=m),m===0?m:(q=Pe(e,r,i,f),n=_e(q,Me),m/n)}hr.exports=we});var Rr=w(function(ii,Xr){"use strict";var Or=require("@stdlib/math-base-special-binomcoef"),V=require("@stdlib/math-base-special-floor"),K=require("@stdlib/math-base-special-pow"),Ee=require("@stdlib/constants-float64-smallest-normal");function Fe(e,r,i,f){var s,v,m,n,q;if(v=K(i,e),v>Ee)for(n=v,q=V(e-1);q>r;q--)n*=(q+1)*f/((e-q)*i),v+=n;else if(m=V(e*i),m<=r+1&&(m=V(r+2)),v=K(i,m)*K(f,e-m),v*=Or(V(e),V(m)),v===0)for(q=m-1;q>r;q--)v+=K(i,q)*K(f,e-q),v*=Or(V(e),V(q));else{for(n=v,s=v,q=m-1;q>r;q--)n*=(q+1)*f/((e-q)*i),v+=n;for(n=s,q=m+1;q<=e;q++)n*=(e-q+1)*i/(q*f),v+=n}return v}Xr.exports=Fe});var Cr=w(function(vi,Vr){"use strict";var Te=p();function he(e,r,i,f,s,v,m){var n,q,u,a;if(n=Te(e,r,i,f,v),m&&(m[1]=n),n/=e,n===0)return n;for(u=1,q=1,a=0;a<s-1;++a)q*=(e+r+a)*i/(e+a+1),u+=q;return n*=u,n}Vr.exports=he});var Hr=w(function(fi,jr){"use strict";var fr=require("@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled"),Ge=require("@stdlib/math-base-tools-sum-series"),Oe=require("@stdlib/math-base-special-log1p"),Xe=require("@stdlib/math-base-special-sqrt"),sr=require("@stdlib/math-base-special-exp"),d=require("@stdlib/math-base-special-pow"),Q=require("@stdlib/math-base-special-ln"),Re=require("@stdlib/constants-float64-smallest-normal"),Br=require("@stdlib/constants-float64-max-ln"),Dr=require("@stdlib/constants-float64-min-ln"),ar=require("@stdlib/constants-float64-gamma-lanczos-g"),Ve=require("@stdlib/constants-float64-e"),Ur={maxTerms:100};function Ce(e,r,i,f){var s=1-r,v=1;return m;function m(){var n=f/e;return e+=1,f*=s*i/v,v+=1,s+=1,n}}function Be(e,r,i,f,s,v,m){var n,q,u,a,c,N,l,S;return s?(l=e+r,q=e+ar-.5,u=r+ar-.5,a=l+ar-.5,n=fr(l)/(fr(e)*fr(r)),c=Q(a/u)*(r-.5),N=Q(i*a/q)*e,c>Dr&&c<Br&&N>Dr&&N<Br?(e*r<u*10?n*=sr((r-.5)*Oe(e/u)):n*=d(a/u,r-.5),n*=d(i*a/q,e),n*=Xe(q/Ve),v&&(v[1]=n*d(m,r))):(n=Q(n)+c+N+(Q(q)-1)/2,v&&(v[1]=sr(n+r*Q(m))),n=sr(n))):n=d(i,e),n<Re?f:(S=Ce(e,r,i,n),Ur.initialValue=f,Ge(S,Ur))}jr.exports=Be});var tr=w(function(si,Zr){"use strict";var De=require("@stdlib/math-base-assert-is-nan"),Ue=require("@stdlib/math-base-special-expm1"),x=require("@stdlib/math-base-special-floor"),kr=require("@stdlib/math-base-special-log1p"),Jr=require("@stdlib/math-base-special-asin"),P=require("@stdlib/math-base-special-beta"),nr=require("@stdlib/math-base-special-sqrt"),je=require("@stdlib/math-base-special-exp"),W=require("@stdlib/math-base-special-pow"),He=require("@stdlib/math-base-special-max"),Kr=require("@stdlib/math-base-special-min"),z=require("@stdlib/constants-float64-max"),Qr=require("@stdlib/constants-float64-smallest-normal"),ke=require("@stdlib/constants-int32-max"),Je=require("@stdlib/constants-float64-half-pi"),Yr=require("@stdlib/constants-float64-pi"),R=Mr(),qr=wr(),Ke=p(),Wr=Gr(),Qe=Rr(),Y=Cr(),h=Hr(),We=1/Yr;function Ye(e,r,i,f,s,v,m,n){var q,u,a,c,N,l,S,A,_,L,I,t;if(t=1-e,S=n,A=n+m,v[A]=-1,De(e)||e<0||e>1)return v[S]=NaN,v[A]=NaN,v;if(f){if(r<0||i<0)return v[S]=NaN,v[A]=NaN,v;if(r===0){if(i===0)return v[S]=NaN,v[A]=NaN,v;if(i>0)return v[S]=s?0:1,v}else if(i===0&&r>0)return v[S]=s?1:0,v}else if(r<=0||i<=0)return v[S]=NaN,v[A]=NaN,v;return e===0?(r===1?v[A]=1:v[A]=r<1?z/2:Qr*2,s?(v[S]=f?1:P(r,i),v):(v[S]=0,v)):e===1?(i===1?v[A]=1:v[A]=i<1?z/2:Qr*2,s?v[S]=0:v[S]=f?1:P(r,i),v):r===.5&&i===.5?(v[A]=We*nr(t*e),I=Jr(nr(s?t:e)),I/=Je,f||(I*=Yr),v[S]=I,v):(r===1&&(l=i,i=r,r=l,l=t,t=e,e=l,s=!s),i===1?r===1?(v[S]=s?t:e,v[A]=1,v):(v[A]=r*W(e,r-1),t<.5?I=s?-Ue(r*kr(-t)):je(r*kr(-t)):I=s?-(W(e,r)-1):W(e,r),f||(I/=r),v[S]=I,v):(Kr(r,i)<=1?(e>.5&&(l=i,i=r,r=l,l=t,t=e,e=l,s=!s),He(r,i)<=1?r>=Kr(.2,i)||W(e,r)<=.9?s?(a=-(f?1:P(r,i)),s=!1,a=-h(r,i,e,a,f,v,t)):a=h(r,i,e,0,f,v,t):(l=i,i=r,r=l,l=t,t=e,e=l,s=!s,t>=.3?s?(a=-(f?1:P(r,i)),s=!1,a=-h(r,i,e,a,f,v,t)):a=h(r,i,e,0,f,v,t):(f?u=1:u=qr(r+i,r,20),a=Y(r,i,e,t,20,f,v),s?(a-=f?1:P(r,i),s=!1,a=-R(r+20,i,e,t,a,u,f)):a=R(r+20,i,e,t,a,u,f))):i<=1||e<.1&&W(i*e,r)<=.7?s?(a=-(f?1:P(r,i)),s=!1,a=-h(r,i,e,a,f,v,t)):a=h(r,i,e,0,f,v,t):(l=i,i=r,r=l,l=t,t=e,e=l,s=!s,t>=.3?s?(a=-(f?1:P(r,i)),s=!1,a=-h(r,i,e,a,f,v,t)):a=h(r,i,e,0,f,v,t):r>=15?s?(a=-(f?1:P(r,i)),s=!1,a=-R(r,i,e,t,a,1,f)):a=R(r,i,e,t,0,1,f):(f?u=1:u=qr(r+i,r,20),a=Y(r,i,e,t,20,f,v),s?(a-=f?1:P(r,i),s=!1,a=-R(r+20,i,e,t,a,u,f)):a=R(r+20,i,e,t,a,u,f)))):(r<i?q=r-(r+i)*e:q=(r+i)*t-i,q<0&&(l=i,i=r,r=l,l=t,t=e,e=l,s=!s),i<40?x(r)===r&&x(i)===i&&r<ke-100?(_=r-1,L=i+_,a=Qe(L,_,e,t),f||(a*=P(r,i))):i*e<=.7?s?(a=-(f?1:P(r,i)),s=!1,a=-h(r,i,e,a,f,v,t)):a=h(r,i,e,0,f,v,t):r>15?(L=x(i),L===i&&(L-=1),c=i-L,f?u=1:u=qr(r+c,c,L),a=Y(c,r,t,e,L,f),a=R(r,c,e,t,a,1,f),a/=u):f?(L=x(i),c=i-L,c<=0&&(L-=1,c+=1),a=Y(c,r,t,e,L,f),a+=Y(r,c,e,t,20,f),s&&(a-=1),a=R(r+20,c,e,t,a,1,f),s&&(a=-a,s=!1)):a=Wr(r,i,e,t,f,v):a=Wr(r,i,e,t,f,v)),v[A]<0&&(v[A]=Ke(r,i,e,t,!0)),N=t*e,v[A]!==0&&(z*N<v[A]?v[A]=z/2:v[A]/=N),v[S]=s?(f?1:P(r,i))-a:a,v))}Zr.exports=Ye});var yr=w(function(ai,$r){"use strict";var Ze=tr();function $e(e,r,i,f,s){return Ze(e,r,i,f,s,[0,0],1,0)}$r.exports=$e});var ye=require("@stdlib/utils-define-nonenumerable-read-only-property"),gr=yr(),ge=tr();ye(gr,"assign",ge);module.exports=gr;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
