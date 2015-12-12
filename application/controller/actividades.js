/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {

    var actividades = angular.module('actividades', []);

    /*Actividad Drag & Drop*/

    actividades.directive("ptDragDrop", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/actividades/drag_drop.html",
            controller: "dragDropController",
            controllerAs: "actividad",
            scope: {
                'ptConstructor': '='
            },
            link: function (scope, element, attrs, dragDropController) {
                var elementResult = element[0].getElementsByClassName("drag");
                console.log(elementResult);
            }
        }
    });

    actividades.controller('dragDropController', function ($scope, $contenido, $element) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;

        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
        });

        $scope.preguntas = element.atributos.preguntas[1];
        $scope.drops = element.atributos.preguntas[1].drops;
        $scope.drags = element.atributos.preguntas[1].drags;

        $scope.vectorVa = [];

        $scope.$on('uDro', function (e, valor) {
            $scope.uDro = valor;
        });

        for (var i in $scope.drops) {
            $scope.vectorVa[i - 1] = 0;
        }
    });

    actividades.directive('draggable', function () {
        return {
            restrict: 'A',
            require: '^ptDragDrop',
            link: function (scope, element, attrs) {
                element.draggable({
                    containment: ".con_drag_drop",
                    cursor: "move",
                    revert: function (droppableObj) {
                        if (droppableObj === false) {
                            $(this).data("ui-draggable").originalPosition = {top: 0, left: 0};
                            var indice = scope.vectorVa.indexOf(parseInt($(this).data('numero')));
                            if (indice >= 0)
                                scope.vectorVa[indice] = 0;
                            return true;
                        } else {
                            var indice = parseInt($(this).data('numero'));
                            for (var i = 0; i < scope.vectorVa.length; i++) {
                                if ((scope.vectorVa[i] == indice) && (i != scope.uDro)) {
                                    scope.vectorVa[i] = 0;
                                }
                            }
                            return false;
                        }
                    },
                    zIndex: 1000
                });
            }
        }
    });

    actividades.directive('droppable', function () {
        return {
            restrict: 'A',
            require: '^ptDragDrop',
            link: function (scope, element, attrs) {
                element.droppable({
                    accept: ".drag",
                    hoverClass: 'con_drag_drop_hov',
                    drop: function (event, ui) {
                        ui.draggable.position({of: $(this), my: 'left top', at: 'left top'});
                        scope.$emit('uDro', parseInt($(this).data('drag')) - 1);
                        if (scope.vectorVa[scope.uDro] != 0) {
                            $('.drag' + scope.vectorVa[scope.uDro]).animate($('.drag' + scope.vectorVa[scope.uDro]).data().originalPosition = {top: 0, left: 0}, "slow");
                        }
                        scope.vectorVa[scope.uDro] = parseInt(ui.draggable.data('numero'));
                    }
                });
            }
        }
    });

    /*Actividad Lista desplegable*/

    actividades.directive("ptListaDesplegable", function () {
        return{
            restrict: "A",
            templateUrl: "application/components/actividades/lista_desplegable.html",
            controller: "listaDesplegableController",
            controllerAs: "actividad",
            scope: {
                'ptConstructor': '='
            }
        }
    });

    actividades.controller("listaDesplegableController", function ($scope, $contenido, $element) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;
        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
        });

        var terLD = false;
        var resIntento = [];
        var resCambio = [];

        $scope.atributos = element.atributos;
        $scope.preguntas = element.atributos.preguntas;

        var seleccion = function () {
            terLD = false;
            $("select", $element).each(function (i, e) {
                resCambio[i] = $(this).find(":selected").val();
                if ($(this).find(":selected").val() === "")
                    terLD = true;
            });

            if (terLD || (JSON.stringify(resCambio) == JSON.stringify(resIntento))) {
                $('.enable', $element).addClass('disable').removeClass('enable');
            } else {
                $('.disable', $element).addClass('enable').removeClass('disable');
            }
        };

        var comportamientoListaDesplegable = function (res_pla) {
            switch (res_pla) {
                case 'bloqueo':
                    bloqueoListaDesplegable();
                    break;
                case 'reseteo':
                    reseteoListaDesplegable();
                    break;
                case 'nuevo_intento':
                    nuevoIntentoListaDesplegable();
                    break;
            }
        }

        //<editor-fold defaultstate="collapsed" desc="Funciones de comportamiento">
        var bloqueoListaDesplegable = function () {
            $('.enable', $element).addClass('disable');
            $('.enable', $element).removeClass('enable');
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', true);
            });
        };

        var reseteoListaDesplegable = function () {
            $('.enable', $element).addClass('disable');
            $('.enable', $element).removeClass('enable');
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', false);
                $(this).val("");
            });
        }

        var nuevoIntentoListaDesplegable = function () {
            $("select", $element).each(function (i, e) {
                resIntento[i] = $(this).find(":selected").val();
            });
            $("select", $element).each(function (i, e) {
                $(this).val(resIntento[i]);
            });
        };
        //</editor-fold>

        $scope.enviarListaDesplegable = function () {
            var jsonSalida = {};
            $("select", $element).each(function (i, e) {
                if ($(this).find(":selected").val() != $scope.preguntas[i + 1].respuesta)
                    jsonSalida[i + 1] = {"correcta": "false", "opcion": $(this).find(":selected").text()};
                else
                    jsonSalida[i + 1] = {"correcta": "true", "opcion": $(this).find(":selected").text()};
            });
            return jsonSalida;
        }
    });

    /*Actividad Sortable*/

    actividades.directive("ptSortable", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/actividades/sortable.html",
            controller: "sortableController",
            controllerAs: "actividad",
            scope: {
                'ptConstructor': '='
            },
            link: function (scope, element, attrs) {

            }
        }
    });

    actividades.controller('sortableController', function ($scope, $contenido, $element) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;
        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
        });

        $scope.preguntas = element.atributos.preguntas[1];
        $scope.vectorInicial = element.atributos.preguntas[1].orden.slice();
        $scope.vectorInicial.sort(function () {
            return Math.random() - .5
        });
        var jsonSalida = {};
        for (var i = 0; i < $scope.vectorInicial.length; i++) {
            jsonSalida[i] = element.atributos.preguntas[1].elementos[$scope.vectorInicial[i]];
        }
        $scope.elementos = jsonSalida;
    });

    actividades.directive('sortable', function () {
        return {
            restrict: 'A',
            require: '^ptSortable',
            link: function (scope, element, attrs) {
                element.sortable({
                    containment: "parent",
                    cursor: "move",
                    placeholder: "ui-sortable-placeholder",
                    items: ':not(.attached)',
                    start: function (event, ui) {
                        $('.attached', element).removeClass('attached');
                        $('li', element).each(function (indice, elementos) {
                            if ($(this).attr('numero') == ui.item.attr('numero')) {
                                var actual = indice;
                                if (actual > 1) {
                                    for (var i = 0; i < actual - 1; i++) {
                                        $("li:nth-child(" + (i + 1) + ")", element).addClass('attached');
                                    }
                                    element.sortable("refresh");
                                }
                            }
                        });
                    },
                    update: function (event, ui) {
                        $('.attached', element).removeClass('attached');
                        element.sortable("refresh");
                    }
                }).disableSelection();
            }
        }
    });

})();
