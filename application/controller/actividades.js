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

    actividades.directive("ptItemDrop", function () {
        return{
            restrict: "A",
            controller: "itemDropActividadController",
            scope: {
                'ptItemDrop': '='
            }
        };
    });

    actividades.controller("itemDropActividadController", function ($contenido, $element, $render, $scope, $compile) {
        this.chainId = JSON.parse($scope.ptItemDrop);
        var element = $contenido.get_element_page(this.chainId);

        if (element) {
            var render = $contenido.render_element(element, this.chainId);
            if (render) {
                var where2Render = $element;
                $render.jQueryCompile(render, where2Render, $compile, $scope);
            }
        }
    });

    actividades.controller('dragDropController', function ($scope, $contenido, $element, $popupAct, $compile) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;

        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
        });

        $scope.preguntas = element.atributos.preguntas[1];
        $scope.preg = JSON.parse($scope.preguntas.chain);
        $scope.correctas = [];

        $.each(element.atributos.preguntas[1].atributos.drops, function (key, value) {
            value.chain = JSON.stringify($scope.preg.concat([(key)]));
             $scope.correctas[key - 1] = value.accepted[0];
        });

        $scope.drops = element.atributos.preguntas[1].atributos.drops;
        $scope.drags = element.atributos.preguntas[1].drags;

        $scope.vectorVa = [];
        $scope.corDD = false;

        $scope.$on('uDro', function (e, valor) {
            $scope.uDro = valor;
        });

        for (var i in $scope.drops) {
            $scope.vectorVa[i - 1] = 0;
        }

        $scope.enviarDragDrop = function(){
            for(var j=0; j < $scope.vectorVa.length; j++){
                $scope.corDD = true;
                if($scope.vectorVa[j]!=$scope.correctas[j]){
                    $scope.corDD = false;
                    break;
                }
            }
            if($scope.corDD)                
                $popupAct.jQueryCompile($compile, $scope, true);
            else
                $popupAct.jQueryCompile($compile, $scope, false);
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

    actividades.controller("listaDesplegableController", function ($popupAct, $scope, $contenido, $element, $render, $compile) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;

        $scope.resCambio = [];
        $scope.resIntento = [];

        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
            $scope.resCambio[key - 1] = 0;
            $scope.resIntento[key - 1] = 0;         
        });

        $scope.muestrabtnEnviar = false;      
        $scope.terLD = false;
        $scope.corLD = false;
        $scope.atributos = element.atributos;
        $scope.preguntas = element.atributos.preguntas;

        $scope.change = function(e){
            $scope.terLD = false;
            $('select').each(function(i, e){
                $scope.resCambio[i] = $(this).find(":selected").val();
                if ($(this).find(":selected").val() === "")
                    $scope.terLD = true;
            });
            if ($scope.terLD)
                $scope.muestrabtnEnviar = false;
            else
                $scope.muestrabtnEnviar = true;
        }

        $scope.enviarListaDesplegable = function () {
            /*var jsonSalida = {};
            $("select", $element).each(function (i, e) {
                if ($(this).find(":selected").val() != $scope.preguntas[i + 1].respuesta)
                    jsonSalida[i + 1] = {"correcta": "false", "opcion": $(this).find(":selected").text()};
                else
                    jsonSalida[i + 1] = {"correcta": "true", "opcion": $(this).find(":selected").text()};
            });*/
            $scope.corLD = true;
            $("select", $element).each(function (i, e) {
                //$(this).attr('disabled', true);
                if($(this).find(":selected").val() != $scope.preguntas[i + 1].respuesta)
                    $scope.corLD = false;
            });


            if($scope.corLD)
                $popupAct.jQueryCompile($compile, $scope, true);
            else
                $popupAct.jQueryCompile($compile, $scope, false);
        }

        $scope.comportamientoListaDesplegable = function (res_pla) {
            switch (res_pla) {
                case 'bloqueo':
                    $scope.bloqueoListaDesplegable();
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
        $scope.bloqueoListaDesplegable = function () {
            $scope.muestrabtnEnviar = false;
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', true);
            });
        };

        $scope.reseteoListaDesplegable = function () {
            $scope.muestrabtnEnviar = false;
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', false);
                $(this).val("");
            });
        }

        $scope.nuevoIntentoListaDesplegable = function () {
            $("select", $element).each(function (i, e) {
                $scope.resIntento[i] = $(this).find(":selected").val();
            });
            $("select", $element).each(function (i, e) {
                $(this).val($scope.resIntento[i]);
            });
        };
        //</editor-fold>
    });

    actividades.directive("ptPopupact", function () {
        return{
            restrict: "A",
            templateUrl: "application/components/pops/retroalimentacion.html",
            controller: "popupActController",
            scope: {
                "ptPopupactest": "="
            }
        };
    });

    actividades.controller("popupActController", function ($scope, $element) {
        $scope.muestraretrobien = $scope.ptPopupactest;
        $scope.muestraretromal = !$scope.ptPopupactest;
        $(".popupActContentenido", $element).each(function (i, e) {
            if($scope.ptPopupactest == false)
                $(this).addClass("popupActNoCorrecta");
            else
                $(this).addClass("popupActCorrecta");
        });

        $scope.cerrar = function () {
            $element.remove();
        };
    });

    actividades.directive("ptItem", function () {
        return{
            restrict: "A",
            controller: "itemActividadController",
            scope: {
                'ptItem': '='
            }
        };
    });

    actividades.controller("itemActividadController", function ($contenido, $element, $render, $scope, $compile) {
        this.chainId = JSON.parse($scope.ptItem);
        var element = $contenido.get_element_page(this.chainId);

        if (element) {
            var render = $contenido.render_element(element, this.chainId);
            if (render) {
                var where2Render = $element;
                $render.jQueryCompile(render, where2Render, $compile, $scope);
            }
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

    actividades.controller('sortableController', function ($scope, $contenido, $element, $popupAct, $compile) {
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
        $scope.resIntento = [];
        $scope.corS = false;
        for (var i = 0; i < $scope.vectorInicial.length; i++) {
            jsonSalida[i] = element.atributos.preguntas[1].elementos[$scope.vectorInicial[i]];
            $scope.resIntento[i] = 0;
        }
        $scope.elementos = jsonSalida;

        $scope.enviarSortable = function(){
            $scope.corS = true;
            $('.sortable-items li').each(function(indice, elementos){
                $scope.resIntento[indice] = $(this).attr('numero');
                if($(this).attr('numero')!=$scope.preguntas.orden[indice]){
                    $scope.corS = false;
                }
            });

            if($scope.corS)
                $popupAct.jQueryCompile($compile, $scope, true);
            else
                $popupAct.jQueryCompile($compile, $scope, false);
        }
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

    /*Actividad Pickmany*/
    actividades.directive("ptPickmanyHorizontal", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/actividades/pickmany.html",
            controller: "pickmanyController",
            controllerAs: "actividad",
            scope: {
                'ptConstructor': '='
            },
            link: function (scope, element, attrs) {

            }
        }
    });


    actividades.directive("ptItemPick", function () {
        return{
            restrict: "A",
            controller: "itempickmanyActividadController",
            scope: {
                'ptItemPick': '='
            },
            templateUrl: "application/components/actividades/pickmanyitem.html",
            link: function (scope, element, attrs, controller) {
                
            }
        };
    });

    actividades.controller("itempickmanyActividadController", function ($contenido, $element, $render, $scope, $compile) {
        this.chainId = JSON.parse($scope.ptItemPick);
        var that = this;
        var element = $contenido.get_element_page(this.chainId);
        $scope.parentActual = element;
        $scope.typeInputAssociated = element.respuesta.length>1 ? "checkbox" : "radio";
        $scope.nameInputAssociated = element.keyPreg;
        $.each(element.atributos.picks, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
            /*var render = $contenido.render_element(value, JSON.parse(value.chain));
            if (render) {
                var where2Render = $element;
                $render.jQueryCompile(render, where2Render, $compile, $scope);
            }*/
        });
        $scope.picks = element.atributos.picks;
        $scope.escCambioInput = function() {
            console.log( "cambio en el input" );
        }
    });

    actividades.directive("ptPickItem", function () {
        return{
            restrict: "A",
            controller: "pickmanyitemActividadController",
            scope: {
                'ptPickItem': '='
            },
            link: function (scope, element, attrs, controller) {
                
            }
        };
    });

   actividades.controller("pickmanyitemActividadController", function ($contenido, $element, $render, $scope, $compile) {
        this.chainId = JSON.parse($scope.ptPickItem);
        var element = $contenido.get_element_page(this.chainId);

        if (element) {
            var render = $contenido.render_element(element, this.chainId);
            if (render) {
                var where2Render = $element;
                $render.jQueryCompile(render, where2Render, $compile, $scope);
            }
        }
    });

    actividades.controller('pickmanyController', function ($popupAct, $scope, $contenido, $element, $compile) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;
        $scope.domParentPickmany = angular.element($element)[0];
        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
            value.keyPreg = key;
        });
        $scope.showBtnSend = true;
        $scope.atributos = element.atributos;
        $scope.preguntas = element.atributos.preguntas;
        $scope.cantPreguntas = 0;
        $scope.objInfoResultado = {};
        for (var i in $scope.preguntas) {
            $scope.preguntas[i].controlPregunta = {
                correcta: false,
                respuestaAdecuada: $scope.preguntas[i].respuesta,
                respuestaUsuario: []
            }
            $scope.cantPreguntas++;
        }
        $scope.clickBtnSend = function() {
            $scope.showBtnSend = true;
            $scope.registraRespuestas();
            $scope.registraValidacionRespuestas();
            $scope.exportObjInfoResultado();
            if($scope.getCantRespuestasCorrectas() == $scope.cantPreguntas)
                $popupAct.jQueryCompile($compile, $scope, true);
            else
                $popupAct.jQueryCompile($compile, $scope, false);
        }
        //Crea el objeto con las respuestas
        $scope.registraRespuestas = function() {
            $scope.objDomJqActividad = $($scope.domParentPickmany).find(".pickmany");
            var idxValue = "1";
            for ( var i=1; i<=$scope.cantPreguntas; i++ ) {
                var obj = $(" input[name='"+i+"']",$scope.objDomJqActividad);
                var arr1 = [];
                for (var j=0; j<obj.length; j++ ) {
                    if ( obj[j].checked )
                        arr1.push( parseInt(obj[j].getAttribute("value")) );
                $scope.preguntas[i].controlPregunta.respuestaUsuario = arr1;
                }
            }
        };
        //Evalua la respuesta
        $scope.registraValidacionRespuestas = function() {
            var boolValidaPregunta = false;
            for ( var i in $scope.preguntas ) {
                boolValidaPregunta = compareArrays( $scope.preguntas[i].respuesta.sort(), $scope.preguntas[i].controlPregunta.respuestaUsuario.sort() );
                $scope.preguntas[i].controlPregunta.correcta = boolValidaPregunta;
            }
        }
        //get la cantidad de respuestas correctas 
        $scope.getCantRespuestasCorrectas = function() {
            var cantCorrectas = 0;
            for ( var i in $scope.preguntas )
                if( $scope.preguntas[i].controlPregunta.correcta )
                    cantCorrectas++;
            return cantCorrectas
        }
        //muestra el objeto resultante
        $scope.exportObjInfoResultado = function() {
            console.log("Este es el objeto resultante");
            for ( var i in $scope.preguntas ) {
                $scope.objInfoResultado[i] = $scope.preguntas[i].controlPregunta;
            }
            console.log($scope.objInfoResultado);
        }
    });
    //Compara dos array: return true si son iguales
    function compareArrays(arr1,arr2) {
        var bool = true;
        if ( arr1.length != arr2.length )
            bool = false;
        else
            for ( var i=0; i<arr1.length; i++ )
                if ( arr1[i] != arr2[i] )
                    bool = false;
        return bool;
    }
    //función genera vector aleatorio
    function generaArrayRandom(arg) {
        var arrAux=[];
       var arrFin=[];
       var aleatorio= 0;
       for (var i=0; i<arg.length; i++)
       {
        aleatorio = Math.ceil(arg.length * Math.random());
        for (var j=0; j<=i;j++)
        {
            while(aleatorio==arrAux[j])
            {
                j=0;
                aleatorio = Math.ceil(arg.length * Math.random());
             }
           }
           arrAux[i]=aleatorio;
           arrFin[aleatorio-1]=arg[i];
        }
       return (arrFin);
    }


    actividades.factory("$popupAct", function ($render) {
            var creaPopup = function($compile, $scope, $clase){
            var render = $("<div/>", {
                "pt-popupact": "",
                "pt-popupactest": $clase
            });
                
            if (render) {
                $render.jQueryCompile(render, $("body"), $compile, $scope);
            }
        }
        return {
            jQueryCompile: function ($compile, $scope, $clase) {
                creaPopup($compile, $scope, $clase);
            }
        };
    });

})();
