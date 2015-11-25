/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("layouts", [])
            .directive("layout0", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/0.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout1", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/1.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout2", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/2.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout3", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/3.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout4", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/4.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout5", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/5.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layout6", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/6.html",
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
                    var init = that.chainId.concat([numPanel]);
                    var element = $contenido.get_element_page(init);

                    if (element) {
                        var render = $contenido.render_element(element, init);
                        if (render) {
                            var where2Render = $("[" + selector + "='" + numPanel + "']", $element);
                            console.log(where2Render, render);
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                    }
                };

                $("[" + selector + "]", $element).each(function () {
                    contPanel($(this).attr(selector));
                });
            });

})(angular);
