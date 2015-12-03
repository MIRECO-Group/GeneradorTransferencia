/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("layouts", [])
            .directive("contextualizacion", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contextualizacion.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("organizador1", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/organizador1.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })            
            .directive("organizador2", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/organizador2.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("portada", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/portada.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("sensibilizacion", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/sensibilizacion.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })         
            .directive("actividad1", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/actividad_contenido_1.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })            
            .directive("actividad2", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/actividad_contenido_2.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })            
            .directive("actividad3", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/actividad_contenido_3.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("actividad4", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/actividad_contenido_4.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido1", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido1.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido2", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido2.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido3", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido3.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido4", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido4.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido5", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido5.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido6", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido6.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("contenido7", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/contenido7.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("LayoutController", function ($scope, $compile, $contenido, $render, $element) {
                this.chainId = $scope.ptConstructor;
                var that = this;
                var selector = "pt-panel";

                var contPanel = function (numPanel) {
                    var init = that.chainId.concat([(numPanel)]);
                    var element = $contenido.get_element_page(init);

                    if (element) {
                        var render = $contenido.render_element(element, init);
                        if (render) {
                            var where2Render = $("[" + selector + "='" + numPanel + "']", $element);
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                    }
                };

                $("[" + selector + "]", $element).each(function () {
                    contPanel($(this).attr(selector));
                });
            });

})(angular);
