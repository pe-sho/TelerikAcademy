/*jslint vars: true */
/*global define */

define(function () {
    'use strict';

    function Identity() {
        return this;
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
            iterator = iterator || Identity;

            return array.reduce(function (x, y) {
                return x + iterator.call(y);
            }, 0);
        }
    };
});
