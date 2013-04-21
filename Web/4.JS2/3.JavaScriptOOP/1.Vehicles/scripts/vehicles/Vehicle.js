/*jslint vars: true */
/*global define */

define(function (require) {
    'use strict';

    var utils = require('utils');

    function Vehicle(propulsionUnits) {
        this.propulsionUnits = propulsionUnits;

        this.speed = 0;
    }

    Vehicle.prototype.accelerate = function () {
        var accelerations = this.propulsionUnits.map(function (unit) {
            return unit.produceAcceleration();
        });

        this.speed += utils.sum(accelerations);
    };

    return Vehicle;
});
