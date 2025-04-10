/* eslint-disable max-statements, max-lines */

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

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var expm1 = require( '@stdlib/math-base-special-expm1' );
var floor = require( '@stdlib/math-base-special-floor' );
var log1p = require( '@stdlib/math-base-special-log1p' );
var asin = require( '@stdlib/math-base-special-asin' );
var beta = require( '@stdlib/math-base-special-beta' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var exp = require( '@stdlib/math-base-special-exp' );
var pow = require( '@stdlib/math-base-special-pow' );
var max = require( '@stdlib/math-base-special-max' );
var min = require( '@stdlib/math-base-special-min' );
var MAX_FLOAT64 = require( '@stdlib/constants-float64-max' );
var MIN_FLOAT64 = require( '@stdlib/constants-float64-smallest-normal' );
var MAX_INT32 = require( '@stdlib/constants-int32-max' );
var HALF_PI = require( '@stdlib/constants-float64-half-pi' );
var PI = require( '@stdlib/constants-float64-pi' );
var betaSmallBLargeASeries = require( './beta_small_b_large_a_series.js' );
var risingFactorialRatio = require( './rising_factorial_ratio.js' );
var ibetaPowerTerms = require( './ibeta_power_terms.js' );
var ibetaFraction2 = require( './ibeta_fraction2.js' );
var binomialCCDF = require( './binomial_ccdf.js' );
var ibetaAStep = require( './ibeta_a_step.js' );
var ibetaSeries = require( './ibeta_series.js' );


// VARIABLES //

var ONE_OVER_PI = 1.0 / PI;


// MAIN //

/**
* Evaluates the incomplete beta function and its first derivative and assigns results to a provided output array.
*
* ## Notes
*
* -   This function divides up the input range and selects the right implementation method for each domain.
*
* @param {Probability} x - function input
* @param {NonNegativeNumber} a - function parameter
* @param {NonNegativeNumber} b - function parameter
* @param {boolean} regularized - boolean indicating if the function should evaluate the regularized boolean beta function
* @param {boolean} upper - boolean indicating if the function should return the upper tail of the incomplete beta function instead
* @param {(Array|TypedArray|Object)} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {(Array|TypedArray|Object)} function value and first derivative
*
* @example
* var out = ibetaImp( 0.5, 2.0, 2.0, false, false, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.083, ~1.5 ]
*
* @example
* var out = ibetaImp( 0.2, 1.0, 2.0, false, true, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 0.32, 1.6 ]
*
* @example
* var out = ibetaImp( 0.2, 1.0, 2.0, true, true, [ 0.0, 0.0 ], 1, 0 );
* // returns [ 0.64, 1.6 ]
*/
function ibetaImp( x, a, b, regularized, upper, out, stride, offset ) {
	var lambda;
	var prefix;
	var fract;
	var bbar;
	var div;
	var tmp;
	var i0;
	var i1;
	var k;
	var n;
	var p;
	var y;

	y = 1.0 - x;
	i0 = offset;
	i1 = offset + stride;

	// Derivative not set...
	out[ i1 ] = -1;
	if ( isnan( x ) || x < 0.0 || x > 1.0 ) {
		out[ i0 ] = NaN;
		out[ i1 ] = NaN;
		return out;
	}
	if ( regularized ) {
		if ( a < 0.0 || b < 0.0 ) {
			out[ i0 ] = NaN;
			out[ i1 ] = NaN;
			return out;
		}
		// Extend to a few very special cases...
		if ( a === 0.0 ) {
			if ( b === 0.0 ) {
				out[ i0 ] = NaN;
				out[ i1 ] = NaN;
				return out;
			}
			if ( b > 0.0 ) {
				out[ i0 ] = ( upper ) ? 0.0 : 1.0;
				return out;
			}
		} else if ( b === 0.0 ) {
			if ( a > 0.0 ) {
				out[ i0 ] = ( upper ) ? 1.0 : 0.0;
				return out;
			}
		}
	} else if ( a <= 0.0 || b <= 0.0 ) {
		out[ i0 ] = NaN;
		out[ i1 ] = NaN;
		return out;
	}
	if ( x === 0.0 ) {
		if ( a === 1.0 ) {
			out[ i1 ] = 1.0;
		} else {
			out[ i1 ] = ( a < 1.0 ) ? MAX_FLOAT64 / 2.0 : MIN_FLOAT64 * 2.0;
		}
		if ( upper ) {
			out[ i0 ] = ( regularized ) ? 1.0 : beta( a, b );
			return out;
		}
		out[ i0 ] = 0.0;
		return out;
	}
	if ( x === 1.0 ) {
		if ( b === 1.0 ) {
			out[ i1 ] = 1.0;
		} else {
			out[ i1 ] = ( b < 1.0 ) ? MAX_FLOAT64 / 2.0 : MIN_FLOAT64 * 2.0;
		}
		if ( upper ) {
			out[ i0 ] = 0.0;
		} else {
			out[ i0 ] = ( regularized ) ? 1.0 : beta( a, b );
		}
		return out;
	}
	if ( a === 0.5 && b === 0.5 ) {
		out[ i1 ] = ONE_OVER_PI * sqrt( y * x );

		// We have an arcsine distribution:
		p = ( upper ) ? asin( sqrt(y) ) : asin( sqrt(x) );
		p /= HALF_PI;
		if ( !regularized ) {
			p *= PI;
		}
		out[ i0 ] = p;
		return out;
	}
	if ( a === 1.0 ) {
		tmp = b;
		b = a;
		a = tmp;

		tmp = y;
		y = x;
		x = tmp;

		upper = !upper;
	}
	if ( b === 1.0 ) {
		// Special case see: http://functions.wolfram.com/GammaBetaErf/BetaRegularized/03/01/01/
		if ( a === 1.0 ) {
			out[ i0 ] = ( upper ) ? y : x;
			out[ i1 ] = 1.0;
			return out;
		}
		out[ i1 ] = a * pow( x, a - 1.0 );
		if ( y < 0.5 ) {
			p = ( upper ) ? -expm1( a * log1p(-y) ) : exp( a * log1p(-y) );
		} else {
			p = ( upper ) ? -( pow( x, a ) - 1.0 ) : pow( x, a );
		}
		if ( !regularized ) {
			p /= a;
		}
		out[ i0 ] = p;
		return out;
	}
	if ( min( a, b ) <= 1.0 ) {
		if ( x > 0.5 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = y;
			y = x;
			x = tmp;

			upper = !upper;
		}
		if ( max( a, b ) <= 1.0 ) {
			// Both a,b < 1:
			if ( (a >= min( 0.2, b ) ) || ( pow(x, a) <= 0.9 ) ) {
				if ( upper ) {
					fract = -( ( regularized ) ? 1.0 : beta( a, b ) );
					upper = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, out, y );
				} else {
					fract = ibetaSeries( a, b, x, 0, regularized, out, y );
				}
			} else {
				tmp = b;
				b = a;
				a = tmp;

				tmp = y;
				y = x;
				x = tmp;

				upper = !upper;
				if ( y >= 0.3 ) {
					if ( upper ) {
						fract = -( ( regularized ) ? 1.0 : beta( a, b ) );
						upper = false;
						fract = -ibetaSeries( a, b, x, fract, regularized, out, y ); // eslint-disable-line max-len
					} else {
						fract = ibetaSeries( a, b, x, 0, regularized, out, y );
					}
				} else {
					// Sidestep on a, and then use the series representation:
					if ( regularized ) {
						prefix = 1;
					} else {
						prefix = risingFactorialRatio( a + b, a, 20 );
					}
					fract = ibetaAStep( a, b, x, y, 20, regularized, out );
					if ( upper ) {
						fract -= ( ( regularized ) ? 1 : beta( a, b ) );
						upper = false;
						fract = -betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized ); // eslint-disable-line max-len
					} else {
						fract = betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized ); // eslint-disable-line max-len
					}
				}
			}
		} else if ( b <= 1.0 || ( x < 0.1 && ( pow( b * x, a ) <= 0.7 ) ) ) {
			if ( upper ) {
				fract = -( ( regularized ) ? 1 : beta( a, b ) );
				upper = false;
				fract = -ibetaSeries( a, b, x, fract, regularized, out, y );
			} else {
				fract = ibetaSeries( a, b, x, 0.0, regularized, out, y );
			}
		} else {
			tmp = b;
			b = a;
			a = tmp;

			tmp = y;
			y = x;
			x = tmp;
			upper = !upper;

			if ( y >= 0.3 ) {
				if ( upper ) {
					fract = -(( regularized ) ? 1.0 : beta( a, b ));
					upper = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, out, y );
				} else {
					fract = ibetaSeries( a, b, x, 0.0, regularized, out, y );
				}
			}
			else if ( a >= 15.0 ) {
				if ( upper ) {
					fract = -(( regularized ) ? 1.0 : beta( a, b ));
					upper = false;
					fract = -betaSmallBLargeASeries( a, b, x, y, fract, 1.0, regularized ); // eslint-disable-line max-len
				} else {
					fract = betaSmallBLargeASeries( a, b, x, y, 0.0, 1.0, regularized ); // eslint-disable-line max-len
				}
			}
			else {
				if ( regularized ) {
					prefix = 1;
				} else {
					// Sidestep to improve errors:
					prefix = risingFactorialRatio( a + b, a, 20.0 );
				}
				fract = ibetaAStep( a, b, x, y, 20.0, regularized, out );
				if ( upper ) {
					fract -= ( ( regularized ) ? 1.0 : beta( a, b ) );
					upper = false;
					fract = -betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized ); // eslint-disable-line max-len
				} else {
					fract = betaSmallBLargeASeries( a + 20.0, b, x, y, fract, prefix, regularized ); // eslint-disable-line max-len
				}
			}
		}
	} else {
		// Both a,b >= 1:
		if ( a < b ) {
			lambda = a - ( (a + b) * x );
		} else {
			lambda = ( (a + b) * y ) - b;
		}
		if ( lambda < 0.0 ) {
			tmp = b;
			b = a;
			a = tmp;

			tmp = y;
			y = x;
			x = tmp;
			upper = !upper;
		}
		if ( b < 40.0 ) {
			if (
				floor(a) === a &&
				floor(b) === b &&
				a < MAX_INT32 - 100
			) {
				// Relate to the binomial distribution and use a finite sum:
				k = a - 1.0;
				n = b + k;
				fract = binomialCCDF( n, k, x, y );
				if ( !regularized ) {
					fract *= beta( a, b );
				}
			}
			else if ( b * x <= 0.7 ) {
				if ( upper ) {
					fract = -( ( regularized ) ? 1.0 : beta( a, b ) );
					upper = false;
					fract = -ibetaSeries( a, b, x, fract, regularized, out, y );
				} else {
					fract = ibetaSeries( a, b, x, 0.0, regularized, out, y );
				}
			}
			else if ( a > 15.0 ) {
				// Sidestep so we can use the series representation:
				n = floor( b );
				if ( n === b ) {
					n -= 1;
				}
				bbar = b - n;
				if ( regularized ) {
					prefix = 1;
				} else {
					prefix = risingFactorialRatio( a + bbar, bbar, n );
				}
				fract = ibetaAStep( bbar, a, y, x, n, regularized );
				fract = betaSmallBLargeASeries( a, bbar, x, y, fract, 1.0, regularized ); // eslint-disable-line max-len
				fract /= prefix;
			}
			else if ( regularized ) {
				n = floor( b );
				bbar = b - n;
				if ( bbar <= 0 ) {
					n -= 1;
					bbar += 1;
				}
				fract = ibetaAStep( bbar, a, y, x, n, regularized );
				fract += ibetaAStep( a, bbar, x, y, 20.0, regularized );
				if ( upper ) {
					fract -= 1;
				}
				fract = betaSmallBLargeASeries( a + 20.0, bbar, x, y, fract, 1, regularized ); // eslint-disable-line max-len
				if ( upper ) {
					fract = -fract;
					upper = false;
				}
			}
			else {
				fract = ibetaFraction2( a, b, x, y, regularized, out );
			}
		} else {
			fract = ibetaFraction2( a, b, x, y, regularized, out );
		}
	}
	if ( out[ i1 ] < 0.0 ) {
		out[ i1 ] = ibetaPowerTerms( a, b, x, y, true );
	}
	div = y * x;
	if ( out[ i1 ] !== 0.0 ) {
		if ( ( MAX_FLOAT64 * div < out[ i1 ] ) ) {
			// Overflow, return an arbitrarily large value:
			out[ i1 ] = MAX_FLOAT64 / 2.0;
		} else {
			out[ i1 ] /= div;
		}
	}
	out[ i0 ] = ( upper ) ? ( ( regularized ) ? 1.0 : beta( a, b ) ) - fract : fract; // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = ibetaImp;
