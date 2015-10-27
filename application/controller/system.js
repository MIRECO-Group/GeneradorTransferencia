/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular, plantilla */

var PLANTILLA = {};

(function () {
    var app = angular.module("plantilla-transferencia", ["routes"]);

    app.controller("Initialize", ["$http", "$log", "$scope", function ($http, $log, $scope) {
            var plantilla = this;
            plantilla.config = {};

            $http.get("application/system/config.json").success(function (data) {
                plantilla.config = data;
                PLANTILLA = data;
                $scope.$emit('plantillaLoaded', {data: data});
                $log.log(data);
            });
        }]);

    app.controller("Paginacion", ["$log", "$http", "$scope", function ($log, $http, $scope) {
            //var paginacion = this;
            this.paginas = {};
            this.actual = 0;
            this.final = 1;

            var that = this;

            //$scope.$on('plantillaLoaded', function (event, data) {
            $http.get("application/system/config.json").success(function (data) {
                that.paginas = data.macrorecursos;
                that.actual = 1;
                $.each(that.paginas, function (k, v) {

                });
            });

            /*$http.get("application/system/config.json").success(function (data) {
             
             });*/

        }]);
})();