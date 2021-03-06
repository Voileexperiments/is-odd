/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function isOdd(value) {
  return isNumber(+value) && Math.abs(value)%2 === 1;
};