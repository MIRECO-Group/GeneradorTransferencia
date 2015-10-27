/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular, plantilla */

var PLANTILLA = {};

(function () {
    var app = angular.module("plantilla-transferencia", ["routes"]);

    app.controller("Initialize", ["$http", "$log", function ($http, $log) {
            var plantilla = this;
            plantilla.config = {};

            $http.get("application/system/config.json").success(function (data) {
                plantilla.config = data;
                PLANTILLA = data;
            });
        }]);
})();