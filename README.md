<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Kernel Betainc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Incomplete beta function][incomplete-beta-function] and its first derivative.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kernel-betainc
```

</section>

<section class="usage">

## Usage

```javascript
var kernelBetainc = require( '@stdlib/math-base-special-kernel-betainc' );
```

#### kernelBetainc( x, a, b, regularized, upper )

Evaluates the [incomplete beta function][incomplete-beta-function] and its first derivative for parameters `x`, `a > 0` and `b > 0`. The `regularized` and `upper` boolean parameters are used to specify whether to evaluate the regularized or non-regularized and the upper or lower incomplete beta functions, respectively.

```javascript
var out = kernelBetainc( 0.8, 1.0, 0.3, false, false );
// returns [ ~1.277, ~0.926 ]

out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
// returns [ 0.36, 1.6 ]

out = kernelBetainc( 0.2, 1.0, 2.0, true, true );
// returns [ 0.64, 1.6 ]
```

If provided `NaN` for `x`, `a`, or `b`, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( NaN, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.8, NaN, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.8, 1.0, NaN, true, true );
// returns [ NaN, NaN ]
```

If `x` is outside the interval `[0,1]`, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( 1.5, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( -0.5, 1.0, 1.0, true, true );
// returns [ NaN, NaN ]
```

If `a` or `b` is negative, the function returns `[ NaN, NaN ]`.

```javascript
var out = kernelBetainc( 0.5, -2.0, 2.0, true, true );
// returns [ NaN, NaN ]

out = kernelBetainc( 0.5, 2.0, -2.0, true, true );
// returns [ NaN, NaN ]
```

#### kernelBetainc.assign( x, a, b, regularized, upper, out, stride, offset )

Evaluates the [incomplete beta function][incomplete-beta-function] and its first derivative for parameters `x`, `a > 0` and `b > 0` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );
var v = kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, out, 1, 0 );
// returns <Float64Array>[ 0.64, 1.6 ]

var bool = ( v === out );
// returns true
```

The `offset` parameter specifies the index of the first output array element, and the `stride` parameter specifies the stride length between consecutive output array elements.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var kernelBetainc = require( '@stdlib/math-base-special-kernel-betainc' );

var out;
var i;
var x;
var a;
var b;

out = [ 0.0, 0.0 ];
for ( i = 0; i < 100; i++ ) {
    x = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    kernelBetainc( x, a, b, true, false, out, 1, 0 );
    console.log( 'x: %d, \t a: %d, \t b: %d, \t f(x,a,b): %d, \t f^1(x,a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), out[ 0 ].toFixed( 4 ), out[ 1 ].toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kernel-betainc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kernel-betainc

[test-image]: https://github.com/stdlib-js/math-base-special-kernel-betainc/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kernel-betainc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kernel-betainc?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kernel-betainc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kernel-betainc/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-kernel-betainc/main/LICENSE

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc

<!-- </related-links> -->

</section>

<!-- /.links -->
