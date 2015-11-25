/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    angular.module("organizadores", [])
            //<editor-fold defaultstate="collapsed" desc="TABS">
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
            .controller("oTabController", function ($scope, $contenido) {
                this.chainId = $scope.ptConstructor;
                var that = this;


                $scope.tabs = $contenido.get_element_page(this.chainId).atributos.tabs;
                $.each($scope.tabs, function (key, value) {
                    value.chain = JSON.stringify(that.chainId.concat([parseInt(key)]));
                });

                $scope.tab = 1;

                $scope.setTab = function (newTab) {
                    $scope.tab = parseInt(newTab);
                };

                $scope.isSet = function (tab) {
                    return $scope.tab === parseInt(tab);
                };

                $scope.setActive = function (tab) {
                    if ($scope.isSet(tab)) {
                        return "active";
                    }
                };
            })
            .directive("ptNewTab", function () {
                return{
                    restrict: "A",
                    controller: "newTabController",
                    scope: {
                        ptNewTab: "="
                    }
                };
            })
            .controller("newTabController", function ($scope, $contenido, $render, $compile, $element) {
                this.chainId = $scope.ptConstructor;
                var init = JSON.parse($scope.ptNewTab);

                var element = $contenido.get_element_page(init);

                if (element) {
                    var render = $contenido.render_element(element, init);

                    if (render) {
                        var where2Render = $element;
                        console.log(where2Render, render);
                        $render.jQueryCompile(render, where2Render, $compile, $scope);

                    }
                }
            })
            //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Titulo">
            .directive("titulo", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/index.html",
                    controller: "tituloController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("tituloController", function ($scope, $contenido) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.atributos = element.atributos;
            })
            //</editor-fold>

            ;
})(angular);
