/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("layouts", [])
            .directive("dummyLayout", function () {
                return{
                    controller: "LayoutController",
                    controllerAs: "layout",
                    restrict: "A",
                    templateUrl: "application/components/layouts/dummy.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("layoutOgSaberes", function () {
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
