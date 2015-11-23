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
            .controller("LayoutController", function ($scope, $compile, $contenido, $render) {
                this.chainId = $scope.ptConstructor;
                var that = this;
                var selector = JSON.stringify(that.chainId);
                var itself = $("[pt-constructor='" + selector + "']");

                $scope.panel = function (numPanel) {
                    var init = that.chainId.concat([numPanel]);
                    var element = $contenido.get_element_page(init);
                    console.log(init, element);

                    if (element) {
                        var render = $contenido.render_element(element, init);
                        if (render) {
                            var where2Render = $("[ng-init='panel(" + numPanel + ")']", itself);
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                    }
                };
            });

})(angular);
