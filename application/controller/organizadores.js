/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    angular.module("organizadores", [])
            .directive("organizadorTabsSuperiores", function ($http) {
                return{
                    restrict: "E",
                    templateUrl: "application/components/organizadores_graficos/organizador_tabs_superiores.html"
                };
            });
})();
