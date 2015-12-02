/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("actividades", [])
            .directive("ptListaDesplegable", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/actividades/lista_desplegable.html",
                    controller: "listaDesplegableController",
                    controllerAs: "actividad",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("listaDesplegableController", function ($scope, $contenido) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                console.log(element);
                $scope.atributos = element.atributos;
                $scope.preguntas = element.atributos.preguntas;
            })
            .directive("ptItem", function () {
                return{
                    restrict: "A",
                    controller: "itemActividadController",
                    scope: {
                        'ptItem': '='
                    }
                };
            })
            .controller("itemActividadController", function ($scope, $contenido) {
                
            })
            ;
})();
