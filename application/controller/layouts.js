/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("layouts", [])
            .directive("ptContextualizacion", function () {
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
            .directive("ptOrganizador1", function () {
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
            .directive("ptOrganizador2", function () {
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
            .directive("ptPortada", function () {
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
            .directive("ptSensibilizacion", function () {
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
            .directive("ptActividad1", function () {
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
            .directive("ptActividad2", function () {
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
            .directive("ptActividad3", function () {
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
            .directive("ptActividad4", function () {
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
            .directive("ptContenido1", function () {
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
            .directive("ptContenido2", function () {
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
            .directive("ptContenido3", function () {
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
            .directive("ptContenido4", function () {
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
            .directive("ptContenido5", function () {
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
            .directive("ptContenido6", function () {
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
            .directive("ptContenido7", function () {
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
                    var where2Render = $("[" + selector + "='" + numPanel + "']", $element);

                    if (element) {
                        var render = $contenido.render_element(element, init);
                        if (render) {
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                        //console.log(numPanel, element, where2Render, render);
                    }
                    
                    
                };

                $("[" + selector + "]", $element).each(function () {
                    contPanel($(this).attr(selector));
                });
            });

})(angular);
