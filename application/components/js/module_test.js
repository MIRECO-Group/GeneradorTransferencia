/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var app = angular.module("test", []);
    app.controller('TabController', function () {
        this.tab = 1;
        
        this.setTab = function (newTab) {
            this.tab = newTab;
        };
        
        this.isSet = function (tab) {
            return this.tab == tab;
        };
        
        this.setActive = function (tab) {
            if(this.isSet(tab)){
                return "active";
            }
        };
        
        this.tabs = {
            1: {
                tag: "Vino Tinto",
                tipo: "layout",
                estilo: "layout_og_saberes",
                componentes: {}
            },
            2: {
                tag: "Vino Tinto",
                tipo: "layout",
                estilo: "layout_og_saberes",
                componentes: {}
            },
            3: {
                tag: "Vino Tinto",
                tipo: "layout",
                estilo: "layout_og_saberes",
                componentes: {}
            },
            4: {
                tag: "Vino Tinto",
                tipo: "layout",
                estilo: "layout_og_saberes",
                componentes: {}
            },
            5: {
                tag: "Vino Tinto",
                tipo: "layout",
                estilo: "layout_og_saberes",
                componentes: {}
            }
        };
    });
})();

