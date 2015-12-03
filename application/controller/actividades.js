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
            .controller("listaDesplegableController", function ($scope, $contenido, $window) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                var that = this;

                $.each(element.atributos.preguntas, function (key, value) {
                    value.chain = JSON.stringify(that.chainId.concat([(key)]));
                });

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
            .controller("itemActividadController", function ($contenido, $element, $render, $scope, $compile) {
                this.chainId = JSON.parse($scope.ptItem);
                var element = $contenido.get_element_page(this.chainId);

                if (element) {
                    var render = $contenido.render_element(element, this.chainId);
                    
                    if (render) {
                        var where2Render = $element;
                        //console.log(where2Render, render);
                        $render.jQueryCompile(render, where2Render, $compile, $scope);

                    }
                }
            })
            ;
})();
