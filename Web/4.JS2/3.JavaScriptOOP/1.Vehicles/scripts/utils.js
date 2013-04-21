/*jslint vars: true */
/*global define */

define(function () {
    'use strict';

    function identity(x) {
        return x;
    }

    return {
        math: {
            circle: {
                perimeter: function (radius) {
                    return 2 * Math.PI * radius;
                }
            }
        },

        sum: function (array, iterator) {
            iterator = iterator || identity;

            return array.reduce(function (x, y) {
                return x + iterator(y);
            }, 0);
        }
    };
});
