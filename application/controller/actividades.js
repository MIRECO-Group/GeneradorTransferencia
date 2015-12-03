/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("actividades", [])
            .directive("ptListaDesplegable", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/actividades/lista_desplegable.html",
                    controller: "listaDesplegableController",
                    controllerAs: "actividad",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("listaDesplegableController", function ($scope, $contenido, $element) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                var that = this;
                $.each(element.atributos.preguntas, function (key, value) {
                    value.chain = JSON.stringify(that.chainId.concat([(key)]));
                });

                var datalista = element.atributos.preguntas;
                var internos = 0;
                var corLD = false;
                var html = "";
                var terLD = false;
                var numInt = 0;
                var resIntento = [];
                var resCambio = [];
                var jsonSalida;

                $scope.atributos = element.atributos;
                $scope.preguntas = element.atributos.preguntas;

                //$('.act_lis_des', $element).delegate('.con_enviarld>span.enable', 'click', enviar);
                

                var seleccion = function () {
                    terLD = false;
                    $("select", $element).each(function (i, e) {
                        resCambio[i] = $(this).find(":selected").val();
                        if ($(this).find(":selected").val() === "")
                            terLD = true;
                    });

                    if (terLD || (JSON.stringify(resCambio) == JSON.stringify(resIntento))) {
                        $('.enable', $element).addClass('disable').removeClass('enable');
                    }
                    else {
                        $('.disable', $element).addClass('enable').removeClass('disable');
                    }
                };

                var comportamientoListaDesplegable = function (res_pla) {
                    console.log('esperando... que está definido en el parametro que envía la plantilla: ' + res_pla);
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
                };

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
                };

                var nuevoIntentoListaDesplegable = function () {
                    $("select", $element).each(function (i, e) {
                        resIntento[i] = $(this).find(":selected").val();
                    });
                    //htmlPintaListaDesplegable();
                    //eveEnviarListaDesplegable();
                    $("select", $element).each(function (i, e) {
                        $(this).val(resIntento[i]);
                    });
                };

                var enviarListaDesplegable = function () {
                    var jsonSalida = {};
                    $("select", $element).each(function (i, e) {
                        if ($(this).find(":selected").val() != datalista[internos].preguntas[i + 1].respuesta)
                            jsonSalida[i + 1] = {"correcta": "false", "opcion": $(this).find(":selected").text()};
                        else
                            jsonSalida[i + 1] = {"correcta": "true", "opcion": $(this).find(":selected").text()};
                    });
                    console.log(jsonSalida);
                    return jsonSalida;
                };
                
                $("select", $element).change(seleccion);


            })
            .directive("ptItem", function () {
                return{
                    restrict: "A",
                    controller: "itemActividadController",
                    scope: {
                        'ptItem': '='
                    }
                };
            })
            .controller("itemActividadController", function ($contenido, $element, $render, $scope, $compile) {
                this.chainId = JSON.parse($scope.ptItem);
                var element = $contenido.get_element_page(this.chainId);

                if (element) {
                    var render = $contenido.render_element(element, this.chainId);

                    if (render) {
                        var where2Render = $element;
                        //console.log(where2Render, render);
                        $render.jQueryCompile(render, where2Render, $compile, $scope);

                    }
                }
            })
            ;
})();
