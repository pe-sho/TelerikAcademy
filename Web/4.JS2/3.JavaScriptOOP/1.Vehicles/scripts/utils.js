/*jslint vars: true */
/*global define */

define(function () {
    'use strict';

    return {
        math: {
            circle: {
                perimeter: function (radius) {
                    return 2 * Math.PI * radius;
                }
            }
        },

        sum: function (array) {
            return array.reduce(function (x, y) {
                return x + y;
            });
        }
    };
});
