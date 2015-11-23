/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    var app = angular.module("organizadores", []);

    app.directive("organizadorTabsSuperiores", function ($http) {
        return{
            restrict: "E",
            templateUrl: "application/components/organizadores_graficos/organizador_tabs_superiores.html",
            controller: function () {
                this.tab = 1;

                this.setTab = function (newTab) {
                    this.tab = newTab;
                };

                this.isSet = function (tab) {
                    return this.tab == tab;
                };

                this.setActive = function (tab) {
                    if (this.isSet(tab)) {
                        return "active";
                    }
                };
                
                this.tabs = {}; //agregar aqui el objeto tabs leído por el servicio
            },
            controllerAs: "organizador"
        };
    });

    app.directive("scriptsSystem", function ($http) {
        return{
            restrict: "E",
            templateUrl: "application/model/scripts.html",
            controller: function () {
                var menu = this;

                menu.menu = 0;

                menu.data = [];

                menu.isClicked = function (position) {
                    return position === menu.menu;
                };

                menu.setClick = function (position) {
                    menu.menu = position | 0;
                };

                menu.isSet = function (object, attr) {
                    return typeof object[attr] !== 'undefined';
                };

                $http.get("application/system/config.json").success(function (data) {
                    menu.data = data;
                });
            },
            controllerAs: "menu"
        };
    });

    /*app.directive("footerDefault", function () {
     return {
     restrict: "E",
     templateUrl: "views/footer.html"
     };
     });//*/

})();
