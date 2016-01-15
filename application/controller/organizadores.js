/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global extras */

(function () {
    var moduloOrganizadores = angular.module("organizadores", [])
            moduloOrganizadores.service('datosPopupsSabiasNoolvide', [function () {
                return {
                    textosSabiasQue: null,
                    textosNoOlvideQue: null,
                    textosLineaNarrativa: null
                };
            }])
            //<editor-fold defaultstate="collapsed" desc="TABS">
            .directive("ptOrganizadorTabsSuperiores", function () {
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
            .controller("oTabController", function ($scope, $contenido, datosPreguntasConocimiento) {
                this.chainId = $scope.ptConstructor;
                var that = this;
                var cantTabs = 0;

                $scope.tabs = $contenido.get_element_page(this.chainId).atributos.tabs;
                $.each($scope.tabs, function (key, value) {
                    value.chain = JSON.stringify(that.chainId.concat([(key)]));
                    cantTabs = cantTabs + 1;
                });

                $scope.tab = 1;
                $scope.cantTabs = cantTabs;

                //consultas

                $scope.isSet = function (tab) {
                    return $scope.tab == (tab);
                };

                $scope.isCover = function () {
                    return $scope.tab === 0 || $scope.tab === ($scope.cantTabs+1);
                };

                $scope.checkMore = function ()
                {
                    return $scope.tab < $scope.cantTabs && $scope.tab >= 1;
                };

                $scope.checkLess = function ()
                {
                    return $scope.tab <= $scope.cantTabs && $scope.tab > 1;
                };

                //aumentar o reducir tabs

                $scope.setTab = function (newTab) {
                    $scope.tab = parseInt(newTab);
                };

                $scope.addTab = function () {
                    if ($scope.tab < cantTabs && $scope.tab >= 1) {
                        //log("flagging " + $scope.tab + " !! " + cantTabs);
                        $scope.tab = $scope.tab + 1;
                    }
                };

                $scope.subtractTab = function () {
                    if ($scope.tab <= cantTabs && $scope.tab > 1) {
                        //console.log("flagging " + $scope.tab + " !! " + cantTabs);
                        $scope.tab = $scope.tab - 1;
                    }
                };

                //añadir clases

                $scope.setActive = function (tab) {
                    if ($scope.isSet(tab)) {
                        return "active";
                    }
                };

                $scope.setNextArrowActive = function () {
                    if ($scope.checkMore()) {
                        return "active";
                    }
                };

                $scope.setPrevArrowActive = function () {
                    if ($scope.checkLess()) {
                        return "active";
                    }
                };


                //Scopes y Comportamiento preguntas de conocimiento
                $scope.listaAcividades = function(){
                    /*var tipoActividades = {};
                    $.each($scope.tabs, function (key, value) {
                        tipoActividades[key] = {id: JSON.parse(value.chain).join(""), tipo: value.componentes[1].tipo};
                    });
                    return tipoActividades;*/
                    var tipoActividades = [];
                    $.each($scope.tabs, function (key, value) {
                        tipoActividades[key - 1] = value.tipo;
                    });

                    var uniqueVals = [];
                    $.each(tipoActividades, function(i, el){
                        if($.inArray(el, uniqueVals) === -1) uniqueVals.push(el);
                    });

                    return uniqueVals;
                }

                $scope.enviarEvaluacion = function(){
                    var objetoActividades = $scope.listaAcividades();
                    /*$.each(objetoActividades, function (key, value) {
                        $scope.$broadcast("preguntasConocimiento-" + value.tipo, value.id.concat(1));
                    });*/
                    for (var i = objetoActividades.length - 1; i >= 0; i--) {
                        $scope.$broadcast("preguntasConocimiento-" + objetoActividades[i]);
                    };
                    var correctas = 0;
                    
                    $.each(datosPreguntasConocimiento.objetoRetro, function (key, value) {
                        if(value.correcta)
                            correctas+=1;
                    });
                    $scope.porcentaje = (correctas / $scope.cantTabs)*100|0;
                }



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
                        //console.log(where2Render, render);
                        $render.jQueryCompile(render, where2Render, $compile, $scope);

                    }
                }
            })
            .directive("ptOrganizadorTabsAcordeon", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/acordeon.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorTabsLateralIzq", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/org_pes_lat.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorTabsNumeroSuperior", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/org_bot_num_bol.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorLineaDeTiempo", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/org_lin_tie.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorTabsNumIzq", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/org_bot_num.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorTabsBotonesFlechas", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/org_int_sli_est.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptOrganizadorPreguntas", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/o_graficos/preguntas.html",
                    controller: "oTabController",
                    controllerAs: "organizador",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Titulo">
            .directive("ptTitulo", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/simple.html",
                    controller: "tituloController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptTituloResultados", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/resultados.html",
                    controller: "tituloController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptTituloBasico", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/basico.html",
                    controller: "tituloController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptTituloBasicoCentrado", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/basico_centrado.html",
                    controller: "tituloController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptTituloParrafoNegrillaSubrayadoCentrado", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/titulo/tparrafo_negrilla_subrayado_centrado.html",
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
            //<editor-fold defaultstate="collapsed" desc="Icono Snippets">
            .directive("ptIcono", function () {
                return{
                    restrict: "A",
                    controller: "iconoController",
                    scope: {
                        'ptIcono': '='
                    }
                };
            })
            .controller("iconoController", function ($scope, $contenido, $render, $compile, $element) {
                this.ptIcono = $scope.ptIcono;
                var element = {tipo: "icono", estilo: this.ptIcono};

                var render = $contenido.render_element(element, []);
                if (render) {
                    var where2Render = $element;
                    //console.log(where2Render, render);
                    $render.jQueryCompile(render, where2Render, $compile, $scope);
                }
            })
            .directive("icoApertura", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/sensibilizacion_apertura.html"
                };
            })
            .directive("icoCierre", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/sensibilizacion_cierre.html"
                };
            })
            .directive("icoContext", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/contextualizacion.html"
                };
            })
            .directive("icoRecordemos", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/recordemos.html"
                };
            })
            .directive("icoPreguntas", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/conocimiento.html"
                };
            })
            .directive("icoContenido", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/contenidos.html"
                };
            })
            .directive("icoPortada", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/portada.html"
                };
            })
            .directive("icoPortadaBoton", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/portada_boton.html"
                };
            })
            .directive("icoSabiasq", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/sabiasq.html"
                };
            })
            .directive("icoNoolvideq", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/iconos/noolvideq.html"
                };
            })
            
            //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Parrafo">
            .directive("ptParrafo", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/texto/simple.html",
                    controller: "parrafoController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptParrafoNegrilla", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/texto/negrilla.html",
                    controller: "parrafoController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptParrafoNegrillaCentrado", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/texto/negrilla_centrado.html",
                    controller: "parrafoController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptParrafoNegrillaCursiva", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/texto/negrilla_cursiva.html",
                    controller: "parrafoController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptParrafoCentrado", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/texto/centrado.html",
                    controller: "parrafoController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("parrafoController", function ($scope, $contenido) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.atributos = element.atributos;
                //console.log(element);
            })
            //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="Imagen">
            .directive("ptImagen", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/imagen/simple.html",
                    controller: "imagenController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptImagenFull", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/imagen/full.html",
                    controller: "imagenController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptImagenMitad", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/imagen/mitad.html",
                    controller: "imagenController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptImagenSimpleOrganizador", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/imagen/simple_organizador.html",
                    controller: "imagenController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("imagenController", function ($scope, $contenido, $element) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);

                //console.log(element);

                $scope.abrir_pop = function () {
                    $('.blackout, .popup', $element).fadeIn("fast");
                };

                $scope.cerrar_pop = function () {
                    $(".blackout, .popup", $element).fadeOut("fast");
                };
                $scope.atributos = element.atributos;
            })
            //</editor-fold>
            ////<editor-fold defaultstate="collapsed" desc="Botón">
            .directive("ptBotonNoolvideq", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/botones/no_olvide_que.html",
                    controller: "botonController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptBotonSabiasq", function () {
                return {
                    restrict: "A",
                    templateUrl: "application/components/simples/botones/sabias_que.html",
                    controller: "botonController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptBotonLineanarrativa", function () {
                return {
                    restrict: "A",
                    templateUrl: "application/components/simples/botones/linea_narrativa.html",
                    controller: "botonController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptBotonActividad", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/botones/actividad.html",
                    controller: "botonController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptBotonPortada", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/botones/portada.html",
                    controller: "botonController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("botonController", function ($scope, $contenido, $compile, $render, $plantilla, $popupSabiasQue, $popupNoOlvideQue, $popupLineaNarrativa, datosPopupsSabiasNoolvide) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.dataPopupsSabiasNoolvide = datosPopupsSabiasNoolvide;
                $scope.atributos = element.atributos;
                $scope.funcion = function () {
                    switch ($scope.atributos.funcion) {
                        case "iniciar_examen":
                            abrir_popup($scope.atributos.destino);
                            break;
                        case "ir_a":
                            cambiar_pagina($scope.atributos.destino);
                            break;
                        case "abrir_popup":
                            if ($scope.atributos.destino == "popup_sabias_que") {
                                $scope.dataPopupsSabiasNoolvide.textosSabiasQue = $scope.atributos.textosPopupDestino;
                                $popupSabiasQue.jQueryCompile($compile, $scope, true);
                            }
                            if ($scope.atributos.destino == "popup_no_olvide_que") {
                                $scope.dataPopupsSabiasNoolvide.textosNoOlvideQue = $scope.atributos.textosPopupDestino;
                                $popupNoOlvideQue.jQueryCompile($compile, $scope, true);
                            }
                            if ($scope.atributos.destino == "popup_linea_narrativa") {
                                $scope.dataPopupsSabiasNoolvide.textosLineaNarrativa = $scope.atributos.textosPopupDestino;
                                $popupLineaNarrativa.jQueryCompile($compile, $scope, true);
                            }
                            break;
                        default:
                            console.warn("Funcion de botón no definida",
                            $scope.atributos.funcion, $scope.atributos);
                        break;
                    }
                };
                
                /*
                 * Abre un popup basado en el atributo Destino configurado
                 */
                var abrir_popup = function (destino) {
                    var where2Render = $("body");
                    var element = extras[destino];
                    $contenido.set_obj_pagina(element);

                    if (element) {
                        var render = $("<div/>", {
                            "pt-constructor": JSON.stringify([destino]),
                            "pt-opopup": ""
                        });
                        //$contenido.render_element(element, [that.popup]);
                        if (render) {
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                    }
                };
                
                /*
                 * Cambiar de página según el atributo Destino configurado
                 */
                var cambiar_pagina = function(destino){
                    $plantilla.get_paginacion_controller().cambiar_pagina(destino);
                };
            })
            //</editor-fold>
            ////<editor-fold defaultstate="collapsed" desc="Lista">
            .directive("ptListaBasica", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/lista/basica.html",
                    controller: "listaController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptListaNumerada", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/lista/numerada.html",
                    controller: "listaController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptListaVinetaRedonda", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/lista/vinetaR.html",
                    controller: "listaController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptListaVinetaTipografia", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/lista/vinetaT.html",
                    controller: "listaController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("listaController", function ($scope, $contenido, $element) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.atributos = element.atributos;
                
                $scope.checkEnunciado = function(){
                   return $scope.atributos.hasOwnProperty("enunciado") && $scope.atributos.enunciado.trim().length>0; 
                } ;
            })
            //</editor-fold>
            //<editor-fold defaultstate="collapsed" desc="PopUp">
            .directive("ptOpopup", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/pops/popup.html",
                    controller: "popUpController",
                    controllerAs: "popupCtrl",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptPopup", function () {
                return{
                    restrict: "A",
                    //templateUrl: "application/components/pops/popup.html",
                    controller: "rPopupController",
                    scope: {
                        'ptPopup': '='
                    }
                };
            })
            .controller("popUpController", function ($scope, $element) {
                this.popups = extras;
                $scope.cerrar = function () {
                    $element.remove();
                };
            })
            .controller("rPopupController", function ($scope, $contenido, $render, $compile, $element) {
                //console.log($scope.ptPopup, $element);
                var where2Render = $element;
                this.chainId = $scope.ptPopup;
                this.popup = extras[this.chainId];
                this.chainId = [this.chainId];

                var that = this;
                $contenido.set_obj_pagina(this.popup);

                var contPanel = function () {
                    var init = that.chainId;
                    var element = $contenido.get_element_page(init);

                    if (element) {
                        var render = $contenido.render_element(element, init);
                        if (render) {
                            //console.warn(where2Render, render);
                            $render.jQueryCompile(render, where2Render, $compile, $scope);
                        }
                    } else {
                        console.error(element);
                    }
                };

                contPanel();
            })
            //</editor-fold>
            ////<editor-fold defaultstate="collapsed" desc="Frame">
            .directive("ptFrameGrande", function () {
                return {
                    restrict: "A",
                    templateUrl: "application/components/simples/frame/frame_big.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptFrameMediano", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/frame/frame_medium.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("frameController", function ($scope, $contenido, $element) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.atributos = element.atributos;
            })
            //</editor-fold>
            ////<editor-fold defaultstate="collapsed" desc="Reproductor">
            .directive("ptReproductorBotonPequeno", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/reproductor/boton/boton_audio_pequeno.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptReproductorBotonMediano", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/reproductor/boton/boton_audio_mediano.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptReproductorBotonRecuadro", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/reproductor/boton/boton_audio_recuadro.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .directive("ptReproductorVideo", function () {
                return{
                    restrict: "A",
                    templateUrl: "application/components/simples/reproductor/video/repro_video.html",
                    controller: "frameController",
                    scope: {
                        'ptConstructor': '='
                    }
                };
            })
            .controller("frameController", function ($scope, $contenido, $element) {
                this.chainId = $scope.ptConstructor;
                var element = $contenido.get_element_page(this.chainId);
                $scope.parentObj = angular.element($element)[0];
                $scope.atributos = element.atributos;
                $scope.idxAudio = "";
                $scope.idxAudio = this.chainId.toString().replace(",","-");
                $scope.idxAudio = "aud"+$scope.idxAudio;
                //para el audio
                $scope.objAudios = $($scope.parentObj).find("audio");
                $scope.objAudio = $scope.objAudios[0];
                $($scope.objAudio).attr("src",$scope.atributos.url);
                $($scope.objAudio).attr("data-idxaud",$scope.idxAudio);
                if ($scope.objAudio) {
                    audiojs.events.ready(function() {
                        audiojs.create($scope.objAudio);
                    });
                }
                //para el vídeo
                $scope.objVideos = $($scope.parentObj).find("video");
                $scope.objVideo = $scope.objVideos[0];
                if ($scope.objVideo) {
                    console.log("Está dentro del vídeo");
                    videojs.options.flash.swf = "../../media/swf/video-js.swf";
                    $($scope.objVideo).attr("controls",$scope.atributos.controls);
                    $($scope.objVideo).attr("loop",$scope.atributos.loop);
                    $($scope.objVideo).attr("autoplay",$scope.atributos.autoplay);
                }
            })
            //</editor-fold>
            ;

    moduloOrganizadores.directive("ptPopupsabiasque", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/pops/popupSabiasQue.html",
            controller: "popupSabiasQueController",
            scope: {
                "ptPopupsabiasqueest": '='
            }
        };
    });
    moduloOrganizadores.controller("popupSabiasQueController", function ($scope, $element, datosPopupsSabiasNoolvide) {
        $scope.mostrar = $scope.ptPopupsabiasqueest;
        $scope.dataPopupsSabiasNoolvide = datosPopupsSabiasNoolvide;
        $scope.cerrar = function () {
            $element.remove();
        };
    });
    moduloOrganizadores.directive("ptPopupnoolvideque", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/pops/popupNoOlvideQue.html",
            controller: "popupNoOlvideQueController",
            scope: {
                "ptPopupnoolvidequeest": '='
            }
        };
    });
    moduloOrganizadores.controller("popupNoOlvideQueController", function ($scope, $element, $popupNoOlvideQue, datosPopupsSabiasNoolvide) {
        $scope.mostrar = $scope.ptPopupnoolvidequeest;
        $scope.dataPopupsSabiasNoolvide = datosPopupsSabiasNoolvide;
        $scope.cerrar = function () {
            $element.remove();
        };
    });
    moduloOrganizadores.directive("ptPopuplineanarrativa", function () {
        return {
            restrict: "A",
            templateUrl: "application/components/pops/popupLineaNarrativa.html",
            controller: "popupLineaNarrativaController",
            scope: {
                "ptPopuplineanarrativaest": '='
            }
        };
    });
    moduloOrganizadores.controller("popupLineaNarrativaController", function ($scope, $element, $popupLineaNarrativa, datosPopupsSabiasNoolvide) {
        $scope.mostrar = $scope.ptPopuplineanarrativaest;
        $scope.dataPopupsSabiasNoolvide = datosPopupsSabiasNoolvide;
        $scope.cerrar = function () {
            $element.remove();
        };
    });
    moduloOrganizadores.factory("$popupSabiasQue", function ($render) {
            var creaPopup = function($compile, $scope, $clase) {
            var render = $("<div/>", {
                "pt-popupsabiasque": "",
                "pt-popupsabiasqueest": JSON.stringify($clase)
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
    moduloOrganizadores.factory("$popupNoOlvideQue", function ($render) {
            var creaPopup = function($compile, $scope, $clase) {
            var render = $("<div/>", {
                "pt-popupnoolvideque": "",
                "pt-popupnoolvidequeest": JSON.stringify($clase)
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
    moduloOrganizadores.factory("$popupLineaNarrativa", function ($render) {
            var creaPopup = function($compile, $scope, $clase) {
            var render = $("<div/>", {
                "pt-popuplineanarrativa": "",
                "pt-popuplineanarrativaest": JSON.stringify($clase)
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
})(angular);
