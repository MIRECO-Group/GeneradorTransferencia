/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular, plantilla */

var PLANTILLA = {};

(function () {
    angular.module("plantilla-transferencia", ["routes"])
            .factory('$plantilla', function ($log, $http) {

                config = {};



                var interfaz = {
                    get: function () {
                        return config;
                    },
                    set: function (objData) {
                        config = objData;
                    }
                };

                return interfaz;
            })
            .controller("Initialize", function ($http, $log, $scope, $plantilla) {
                var plantilla = this;
                plantilla.config = {};


            })
            .controller("Paginacion", function ($http, $log, $scope, $plantilla) {
                //var paginacion = this;
                this.paginas = {};
                this.actual = 0;
                this.final = 1;
                this.pagina_actual = {};

                //this.actual = $plantilla.config.length;


                console.log($plantilla.get());

            })
            .controller("Contenedor", function ($http, $log, $scope, $plantilla) {
                $scope.pagina = "<titulo1></titulo1>";
            });
})();