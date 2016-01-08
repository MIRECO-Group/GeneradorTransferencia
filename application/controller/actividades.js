/* global angular */

(function () {

    var actividades = angular.module('actividades', []);

    /*Services*/

    actividades.service('datosSortable', [function () {
        return {
            muestrabtnEnviar: false,
            estadoRespuestaActividad: 0
        };
    }]);

    actividades.service('datosListaDesplegable', [function () {
        return {
            muestrabtnEnviar: false,
            estadoRespuestaActividad: 0
        };
    }]);

    actividades.service('datosDragDrop', [function () {
        return {
            muestrabtnEnviar: false,
            estadoRespuestaActividad: 0
        };
    }]);

    actividades.service('datosPickmany', [function () {
        return {
            boolShowBtnSendPickmany: false,
            boolShowRespuestasCorrectas: false
        };
    }]);

    /*Factory*/

    actividades.factory("$popupAct", function ($render) {
        var creaPopup = function($compile, $scope, $objeto){
            var render = $("<div/>", {
                "pt-popupactividad": "",
                "pt-popupactest": JSON.stringify($objeto)
            });
            if (render) {
                $render.jQueryCompile(render, $("body"), $compile, $scope);
            }
        };
        var definePopup = function($compile, $scope, $objeto){
            var ind = 0;
            var vectorretro = [];
            $.each($objeto, function (key, value) {
                vectorretro[ind] = $objeto[key];
                ind++;
            });
            creaPopup($compile, $scope, vectorretro);
        };
        return {
            create: function ($compile, $scope, $objeto) {
                definePopup($compile, $scope, $objeto);
            }
        };
    });






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
                /*var elementResult = element[0].getElementsByClassName("drag");
                console.log(elementResult);*/
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

    actividades.controller('dragDropController', function ($scope, $contenido, $element, $popupAct, $compile, datosDragDrop) {
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

        $scope.dataDragDrop = datosDragDrop;
        $scope.dataDragDrop.muestrabtnEnviar = true;

        $scope.intentos = element.atributos.intentos;
        $scope.intento_actual = 0;

        $scope.$on('uDro', function (e, valor) {
            $scope.uDro = valor;
        });

        for (var i in $scope.drops) {
            $scope.vectorVa[i - 1] = 0;
        }

        $scope.$watch("dataDragDrop.estadoRespuestaActividad",function(nVal,oVal) {
            if(nVal === oVal)
                return;
            switch(nVal){
                case 1:
                   $scope.nuevoIntentoDragDrop();
                break;
                case 2:
                    $scope.verRespuestaDragDrop(); 
                break;
            }
        });

        $scope.enviarDragDrop = function(){
            $scope.muestraretro = {
                retrobn: false,
                nuevointento: false,
                verrespuesta: false,
                tipo: 'dragdrop'
            };

            for(var j=0; j < $scope.vectorVa.length; j++){
                $scope.corDD = true;
                if($scope.vectorVa[j]!=$scope.correctas[j]){
                    $scope.corDD = false;
                    break;
                }
            }

            if($scope.intento_actual < $scope.intentos - 1){
                $scope.intento_actual ++;
                if($scope.corDD){
                    $scope.muestraretro.retrobn = true;
                    $scope.bloqueoDragDrop();
                }
                else
                    $scope.muestraretro.nuevointento = true;
            }
            else
                $scope.muestraretro.verrespuesta = true;


            //Muestra el popup de retroalimentación
            $popupAct.create($compile, $scope, $scope.muestraretro);
        }


        //<editor-fold defaultstate="collapsed" desc="Funciones de comportamiento">
        $scope.bloqueoDragDrop = function () {
            $scope.dataDragDrop.muestrabtnEnviar = false;
            $('.drag', $element).each(function(indice, elementos){
                if ($(this).data( "ui-draggable" )) {
                   $(this).draggable('disable');
                }
            });
            $('.drop', $element).each(function(indice, elementos){
                if ($(this).data( "ui-droppable" )) {
                   $(this).droppable('disable');
                }
            });
        };

        $scope.reseteoDragDrop = function () {
            $scope.dataDragDrop.muestrabtnEnviar = false;
        }

        $scope.verRespuestaDragDrop = function(){
            $scope.dataDragDrop.muestrabtnEnviar = false;
            $('.drag', $element).each(function(indice, elementos){
                $(this).position({of: $('.drop' + ($scope.correctas.indexOf(indice + 1) + 1)), my: 'left top', at: 'left top'});
            });
            $scope.bloqueoDragDrop();
        }

        $scope.nuevoIntentoDragDrop = function () {
            //$scope.dataDragDrop.muestrabtnEnviar = false;
        };
        //</editor-fold>

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

    actividades.controller("listaDesplegableController", function ($popupAct, $scope, $contenido, $element, $render, $compile, datosListaDesplegable) {
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

        $scope.dataListaDesplegable = datosListaDesplegable;
        $scope.dataListaDesplegable.muestrabtnEnviar = false;

        $scope.terLD = false;
        $scope.corLD = false;
        $scope.atributos = element.atributos;
        $scope.preguntas = element.atributos.preguntas;
        $scope.intentos = element.atributos.intentos;
        $scope.intento_actual = 0;


        $scope.$watch("dataListaDesplegable.estadoRespuestaActividad",function(nVal,oVal) {
            if(nVal === oVal)
                return;
            switch(nVal){
                case 1:
                   $scope.nuevoIntentoListaDesplegable(); 
                break;
                case 2:
                    $scope.verRespuestaListaDesplegable(); 
                break;
            }
        });

        $scope.change = function(e){
            $scope.terLD = false;
            $('select').each(function(i, e){
                $scope.resCambio[i] = $(this).find(":selected").val();
                if ($(this).find(":selected").val() === "")
                    $scope.terLD = true;
            });
            if ($scope.terLD)
                $scope.dataListaDesplegable.muestrabtnEnviar = false;
            else
                $scope.dataListaDesplegable.muestrabtnEnviar = true;
        }

        $scope.enviarListaDesplegable = function () {
            /*var jsonSalida = {};
            $("select", $element).each(function (i, e) {
                if ($(this).find(":selected").val() != $scope.preguntas[i + 1].respuesta)
                    jsonSalida[i + 1] = {"correcta": "false", "opcion": $(this).find(":selected").text()};
                else
                    jsonSalida[i + 1] = {"correcta": "true", "opcion": $(this).find(":selected").text()};
            });*/


            $scope.muestraretro = {
                retrobn: false,
                nuevointento: false,
                verrespuesta: false,
                tipo: 'listadesplegable'
            };

            $scope.corLD = true;
            $("select", $element).each(function (i, e) {
                //$(this).attr('disabled', true);
                if($(this).find(":selected").val() != $scope.preguntas[i + 1].respuesta)
                    $scope.corLD = false;
            });

            if($scope.intento_actual < $scope.intentos - 1){
                $scope.intento_actual ++;
                if($scope.corLD){
                    $scope.muestraretro.retrobn = true;
                    $scope.bloqueoListaDesplegable();
                }
                else
                    $scope.muestraretro.nuevointento = true;
            }
            else
                $scope.muestraretro.verrespuesta = true;


            //Muestra el popup de retroalimentación
            $popupAct.create($compile, $scope, $scope.muestraretro);
        }

        //<editor-fold defaultstate="collapsed" desc="Funciones de comportamiento">
        $scope.bloqueoListaDesplegable = function () {
            $scope.dataListaDesplegable.muestrabtnEnviar = false;
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', true);
            });
        };

        $scope.reseteoListaDesplegable = function () {
            $scope.dataListaDesplegable.muestrabtnEnviar = false;
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', false);
                $(this).val("");
            });
        }

        $scope.verRespuestaListaDesplegable = function(){
            $scope.dataListaDesplegable.muestrabtnEnviar = false;
            $("select", $element).each(function (i, e) {
                $(this).attr('disabled', true);
                $(this).val($scope.preguntas[i + 1].respuesta);
            });
        }

        $scope.nuevoIntentoListaDesplegable = function () {
            /*$("select", $element).each(function (i, e) {
                $scope.resIntento[i] = $(this).find(":selected").val();
            });
            $("select", $element).each(function (i, e) {
                $(this).val($scope.resIntento[i]);
            });*/
        };
        //</editor-fold>
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
            controllerAs: "actividadSortable",
            scope: {
                'ptConstructor': '='
            },
            link: function (scope, element, attrs) {

            }
        }
    });

    actividades.controller('sortableController', function ($scope, $contenido, $element, $popupAct, $compile, datosSortable) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;
        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
        });

        $scope.preguntas = element.atributos.preguntas[1];
        $scope.vectorInicial = element.atributos.preguntas[1].orden.slice();
        $scope.vectorInicial.sort(function () {
            return Math.random() - .5;
        });

        var jsonSalida = {};
        $scope.resIntento = [];
        $scope.corS = false;
        $scope.intentos = element.atributos.intentos;
        $scope.intento_actual = 0;

        $scope.dataSortable = datosSortable;
        $scope.dataSortable.muestrabtnEnviar = true;
        $scope.resCambio = [];

        for (var i = 0; i < $scope.vectorInicial.length; i++) {
            jsonSalida[i] = element.atributos.preguntas[1].elementos[$scope.vectorInicial[i]];
            $scope.resIntento[i] = $scope.vectorInicial[i];
        }
        $scope.elementos = jsonSalida;

        $scope.$watch("dataSortable.estadoRespuestaActividad",function(nVal,oVal) {
            if(nVal === oVal)
                return;
            switch(nVal){
                case 1:
                   $scope.nuevoIntentoSortable(); 
                break;
                case 2:
                    $scope.verRespuestaSortable(); 
                break;
            }
        });

        $scope.enviarSortable = function(){
            $scope.corS = true;

            $scope.muestraretro = {
                retrobn: false,
                nuevointento: false,
                verrespuesta: false,
                tipo: 'sortable'
            };

            $('.sortable-items li').each(function(indice, elementos){
                $scope.resIntento[indice] = $(this).attr('numero');
                if($(this).attr('numero')!=$scope.preguntas.orden[indice]){
                    $scope.corS = false;
                }
            });

            if($scope.intento_actual < $scope.intentos - 1){
                $scope.intento_actual ++;
                if($scope.corS){
                    $scope.muestraretro.retrobn = true;
                    $scope.bloqueoSortable();
                }
                else
                    $scope.muestraretro.nuevointento = true;
            }
            else
                $scope.muestraretro.verrespuesta = true;

            //Muestra el popup de retroalimentación
            $popupAct.create($compile, $scope, $scope.muestraretro);
        }

        //<editor-fold defaultstate="collapsed" desc="Funciones de comportamiento">
        $scope.bloqueoSortable = function () {
            $scope.dataSortable.muestrabtnEnviar = false;

            $('.sortable-items').each(function(indice, elementos){
                $(this).sortable({disabled: true});
            });
        };

        $scope.reseteoSortable = function () {
            $scope.dataSortable.muestrabtnEnviar = true;

            $('.sortable-items').empty();
            var items = "";
            for(var i in $scope.elementos)
                items += '<li class="sortable-item elementos elemento'+$scope.vectorInicial[i]+'" numero="'+$scope.vectorInicial[i]+'">'+$scope.elementos[i]+'</li>';

            $('.sortable-items').html(items);
        }

        $scope.nuevoIntentoSortable = function () {
            
        };

        $scope.verRespuestaSortable = function(){
            $scope.dataSortable.muestrabtnEnviar = false;
            $('.sortable-items').empty();
            var items = "";
            for(var i in $scope.elementos)
                items += '<li class="sortable-item elementos elemento'+$scope.preguntas.orden[i]+'" numero="'+$scope.preguntas.orden[i]+'">'+element.atributos.preguntas[1].elementos[$scope.preguntas.orden[i]]+'</li>';

            $('.sortable-items').html(items);
            $scope.bloqueoSortable();
        }
        //</editor-fold>
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
            //require: 
            controller: "itempickmanyActividadController",
            scope: {
                'ptItemPick': '='
            },
            templateUrl: "application/components/actividades/pickmanyitem.html",
            link: function (scope, element, attrs, controller) {
                
            }
        };
    });

    actividades.controller("itempickmanyActividadController", function ($contenido, $element, $render, $scope, $compile, datosPickmany) {
        this.chainId = JSON.parse($scope.ptItemPick);
        var that = this;
        $scope.dataPickmany = datosPickmany;
        var element = $contenido.get_element_page(this.chainId);
        $scope.parentActual = element;
        $scope.domParentPickmany = angular.element($element)[0];
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
           if($scope.yaContestadas())
                $scope.dataPickmany.boolShowBtnSendPickmany = true;
            else
                $scope.dataPickmany.boolShowBtnSendPickmany = false;
        }
        //Observa si ya se ha respondido cada pregunta pickmany
        $scope.yaContestadas = function() {
            var obj1 = $($scope.domParentPickmany).parents(".pickmany").find(".pickmany-pregunta-items");
            var cantPreg = obj1.length;
            var cont = 0;
            var boolPregContestada = false;
            for (var i=0; i<obj1.length;i++) {
                obj2 = $(obj1[i]).find(".pickmany-pregunta-item-input");
                for (var j=0;j<obj2.length;j++)
                    boolPregContestada = boolPregContestada || $(obj2[j]).prop("checked");
                if (boolPregContestada)
                    cont++;
                boolPregContestada = false;
            }
            if (cont == cantPreg)
                return true
            else
                return false 
        };
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

    actividades.controller('pickmanyController', function ($popupAct, $scope, $contenido, $element, $compile, datosPickmany) {
        this.chainId = $scope.ptConstructor;
        var element = $contenido.get_element_page(this.chainId);
        var that = this;
        $scope.dataPickmany = datosPickmany;
        $scope.$watch("dataPickmany.boolShowRespuestasCorrectas",function(nVal,oVal) {
            if(nVal === oVal)
                return;
            $scope.asignaCorrectasAInputs();
        });
        $scope.domParentPickmany = angular.element($element)[0];
        $.each(element.atributos.preguntas, function (key, value) {
            value.chain = JSON.stringify(that.chainId.concat([(key)]));
            value.keyPreg = key;
        });
        $scope.atributos = element.atributos;
        $scope.preguntas = element.atributos.preguntas;
        $scope.cantPreguntas = 0;
        $scope.objInfoResultado = {};

        $scope.intentos = element.atributos.intentos;
        $scope.intento_actual = 0;

        for (var i in $scope.preguntas) {
            $scope.preguntas[i].controlPregunta = {
                correcta: false,
                respuestaAdecuada: $scope.preguntas[i].respuesta,
                respuestaUsuario: []
            }
            $scope.cantPreguntas++;
        }
        $scope.clickBtnSend = function() {
            $scope.muestraretro = {
                retrobn: false,
                nuevointento: false,
                verrespuesta: false,
                tipo: 'pickmany'
            };
            //$scope.disabledAllInputs(true);
            $scope.registraRespuestas();
            $scope.registraValidacionRespuestas();
            //Alguna esta mal?
            if ( $scope.getCantRespuestasCorrectas() == $scope.cantPreguntas ) {
                //La respuesta es correcta
                $scope.muestraretro.retrobn = true;
                $scope.disabledAllInputs(true);
                $scope.dataPickmany.boolShowBtnSendPickmany = false;
            }
            else {
                //la respuesta es incorrecta
                if ( $scope.intento_actual < $scope.intentos - 1) {
                    //Si le quedan intentos
                    $scope.intento_actual++;
                    $scope.muestraretro.nuevointento = true;
                }
                else {
                    //Ya no le quedan intentos
                    $scope.muestraretro.verrespuesta = true;
                    $scope.dataPickmany.boolShowBtnSendPickmany = false;
                    $scope.disabledAllInputs(true);
                }
            }
            //Muestra el popup de retroalimentación
            $popupAct.create($compile, $scope, $scope.muestraretro);
        }
        //Crea el objeto con las respuestas
        $scope.registraRespuestas = function() {
            $scope.objDomJqActividad = $($scope.domParentPickmany).find(".pickmany");
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
        //asigna las respuestas correctas a los inputs
        $scope.asignaCorrectasAInputs = function() {
            $scope.objDomJqActividad = $($scope.domParentPickmany).find(".pickmany");
            for ( var i=1; i<=$scope.cantPreguntas; i++ ) {
                var obj = $(" input[name='"+i+"']",$scope.objDomJqActividad);
                for (var j=0; j<obj.length; j++ ) {
                    if( $scope.preguntas[i].respuesta.indexOf(parseInt(obj[j].getAttribute("value"))) != -1 )
                        obj[j].checked = true;
                    else
                        obj[j].checked = false;
                    obj[j].disabled = true;
                $scope.preguntas[i].controlPregunta.respuestaUsuario = $scope.preguntas[i].controlPregunta.respuestaAdecuada;
                }
            }
        };
        //habilita/deshabilita todos los inputs
        $scope.disabledAllInputs = function(boolAllDisabled) {
            $scope.objDomJqActividad = $($scope.domParentPickmany).find(".pickmany");
            for ( var i=1; i<=$scope.cantPreguntas; i++ ) {
                var obj = $(" input[name='"+i+"']",$scope.objDomJqActividad);
                for (var j=0; j<obj.length; j++ )
                    obj[j].disabled = boolAllDisabled;
            }
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


   actividades.directive("ptPopupactividad", function () {
        return{
            restrict: "A",
            templateUrl: "application/components/pops/retroalimentacion.html",
            controller: "popupActController",
            scope: {
                "ptPopupactest": '='
            }
        };
    });

    actividades.controller("popupActController", function ($scope, $element, datosPickmany, datosSortable, datosListaDesplegable, datosDragDrop) {
        $scope.mostrar = $scope.ptPopupactest;
        $scope.dataPickmany = datosPickmany;
        $scope.dataSortable = datosSortable;
        $scope.dataListaDesplegable = datosListaDesplegable;
        $scope.dataDragDrop = datosDragDrop;

        $scope.objetoretro = {
            retrobn: $scope.mostrar[0],
            nuevointento: $scope.mostrar[1],
            verrespuesta: $scope.mostrar[2],
            tipo: $scope.mostrar[3]
        };

        $scope.cerrar = function () {
            $element.remove();
        };

        $scope.nuevoIntento = function(){
            switch($scope.objetoretro.tipo){
                case 'pickmany':
                    
                break;
                case 'dragdrop':
                    $scope.dataDragDrop.estadoRespuestaActividad = 1;
                break;
                case 'listadesplegable':
                    $scope.dataListaDesplegable.estadoRespuestaActividad = 1;
                break;
                case 'sortable':
                    $scope.dataSortable.estadoRespuestaActividad = 1;
                break;
            }
        }

        $scope.verRespuesta = function() {
            switch($scope.objetoretro.tipo){
                case 'pickmany':
                    $scope.dataPickmany.boolShowRespuestasCorrectas = true;
                break;
                case 'dragdrop':
                    $scope.dataDragDrop.estadoRespuestaActividad = 2;
                break;
                case 'listadesplegable':
                    $scope.dataListaDesplegable.estadoRespuestaActividad = 2;
                break;
                case 'sortable':
                    $scope.dataSortable.estadoRespuestaActividad = 2;
                break;
            }
        }
        
    });

})();