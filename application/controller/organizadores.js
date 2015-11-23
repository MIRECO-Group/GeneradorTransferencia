/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    angular.module("organizadores", [])
            .directive("organizadorTabsSuperiores", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/tabs_superiores.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            /*
             * this.chainId = $scope.ptConstructor; //Atributos iniciales que identifican el objeto
             * $scope.tabs = {}; //agregar aqui el objeto tabs leído por el servicio
             */
            .controller("oTabController", function ($scope, $contenido, $render, $compile) {
                this.chainId = $scope.ptConstructor;
                $scope.tabs = $contenido.get_element_page(this.chainId).atributos.tabs;
                var that = this;

                $scope.tab = 1;

                $scope.contTab = function (numTab) {
                    var init = that.chainId.concat([numTab]);
                    var element = $contenido.get_element_page(init);

                    if (element) {
                        var render = $contenido.render_element(element, init);

                        if (render) {
                            var selector = JSON.stringify(that.chainId);
                            var where2Render = $("[ng-init='contTab(" + numTab + ")']",
                                    "[pt-constructor='" + selector + "']");
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                        console.log(element, render);
                    }
                };

                $scope.setTab = function (newTab) {
                    $scope.tab = newTab;
                };

                $scope.isSet = function (tab) {
                    return $scope.tab == tab;
                };

                $scope.setActive = function (tab) {
                    if ($scope.isSet(tab)) {
                        return "active";
                    }
                };
            });
})(angular);
