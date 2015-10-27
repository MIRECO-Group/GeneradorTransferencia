/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    var app = angular.module("plantilla-transferencia", ["routes"]);

    app.controller("Initialize", ["$http", "$log", function ($http, $log) {
            this.plantilla = {};

            $http.get("application/system/config.json").success(function (data) {
                this.plantilla = data;
                $log.log(this.plantilla);
            });


        }]);


})();