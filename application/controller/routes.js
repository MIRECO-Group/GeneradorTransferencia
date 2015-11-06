/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    var app = angular.module("routes", []);

    app.directive("titulo1", function ($http) {
        return{
            restrict: "E",
            templateUrl: "application/snippet/element/titulo/titulo1/titulo1.html",
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

    app.directive("scripts1", function ($http) {
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
