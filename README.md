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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Kernel Betainc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Incomplete beta function][incomplete-beta-function] and its first derivative.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
kernelBetainc = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betainc@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var kernelBetainc = require( 'path/to/vendor/umd/math-base-special-kernel-betainc/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betainc@v0.2.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.kernelBetainc;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betainc@v0.2.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>

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

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kernel-betainc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kernel-betainc

[test-image]: https://github.com/stdlib-js/math-base-special-kernel-betainc/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kernel-betainc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kernel-betainc?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kernel-betainc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kernel-betainc/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-kernel-betainc/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-kernel-betainc/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-kernel-betainc/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-kernel-betainc/blob/main/branches.md

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
