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
                    restrict: "E",
                    templateUrl: "application/components/layouts/dummy.html",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("LayoutController", function ($scope, $contenido) {
                this.chainId = $scope.ptConstructor;
                var that = this;

                $scope.panel = function (numPanel) {
                    var init = that.chainId.concat([numPanel]);
                    var element = $contenido.get_element_page(init);
                    var render = $contenido.render_element(element);
                    //console.log(element);
                };
            });

})(angular);
