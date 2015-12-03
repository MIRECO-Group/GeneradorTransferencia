/* global generales, macrorecursos, BASE_DATA */

(function () {
    angular.module("services", [])
            .service("$scorm", function () {
                var data = {
                    suspend_data : {
                        
                    },
                    interactions : {
                        
                    }
                };
        
                var interpretate_interaction = function (){
                    
                };
            })
            .service('$plantilla', function ($log) {
                var config = {
                    data: generales,
                    pagina_actual: 1,
                    pagina_final: 0,
                    recursos: macrorecursos,
                    pagina_inicial: generales.generales.pagina_inicial,
                    configuracion: generales.generales,
                    pages: [],
                    contenedor_principal: $("#content_container")
                };

                /*
                 * Lee todos los elementos contenidos en @config.recursos donde están
                 * contenidos los elementos que deben ser cargados. Además entrega el 
                 * valor de páginas existente con el fin de tener el contador de páginas
                 * disponible en plantilla.
                 * @param {type} data
                 * @returns {undefined}
                 */
                var read_pages = function (data) {
                    $.each(data, function (k, v) {
                        if (v.hasOwnProperty("recursos")) {
                            $.each(v.recursos, function (key, value) {
                                var objExtra = {numberID: k, padre: v};
                                config.pages.push($.extend(value, objExtra));
                            });
                        }
                    });
                    config.pagina_final = config.pages.length;
                };

                /*
                 * Funciones publicas para las funciones básicas de plantilla.
                 */
                var interfaz = {
                    get: function () {
                        return config;
                    },
                    set: function (objData) {
                        config = objData;
                    },
                    set_pagina: function (pagina) {
                        config.pagina_actual = pagina | 0;
                    },
                    get_pagina: function () {
                        return config.pagina_actual;
                    },
                    get_obj_pagina: function (id) {
                        return config.pages[id];
                    },
                    get_generales: function () {
                        return config.data;
                    },
                    get_pagina_final: function () {
                        if (config.pagina_final === 0) {
                            read_pages(config.recursos);
                        }
                        return config.pagina_final;
                    },
                    base_container: config.contenedor_principal
                };
                return interfaz;
            })
            .service("$contenido", function ($log) {
                var data = {
                    page: null,
                    padre_page: null,
                    render_page: null
                };

                var read_page = function () {
                    var objRead = null;
                    //<editor-fold defaultstate="collapsed" desc="Lectura de páginas">
                    if (data.page.hasOwnProperty("estilo")) {
                        var objRead = read_layout(data.page);

                        var components = [];
                        $.each(data.page, function (k, v) {
                            switch (k) {
                                case "background":
                                    //<editor-fold defaultstate="collapsed" desc="Background">
                                    $("body").css({
                                        "background": "url(" + v + ") no-repeat center center fixed",
                                        "-webkit-background-size": "cover",
                                        "-moz-background-size": "cover",
                                        "-o-background-size": "cover",
                                        "background-size": "cover"
                                    });
                                    //</editor-fold>
                                    break;
                                    /*
                                     case "componentes":
                                     $.each(this, function () {
                                     components.push(read_components(this));
                                     });
                                     break;*/
                                default:
                                    break;
                            }
                        });
                    }
                    return objRead;
                    //</editor-fold>
                };

                /*
                 * Esta función identifica en la configuración el elemento que debe ser
                 * obtenido.
                 * @param {array} arrTreeId Array de elementos que corresponde a
                 * la jerarquía en el que debe ser encontrado el objeto.
                 * @returns {data.page|element.atributos@arr;tabs|element@arr;componentes} 
                 * Corresponde al objeto que debe ser obtenido segun la jerarquía del
                 * arreglo de elementos.
                 */
                var get_element_page = function (arrTreeId) {
                    var element = null;
                    //console.log(arrTreeId);
                    $.each(arrTreeId, function (k, v) {
                        if (k === 0) {
                            element = data.page;
                            return true;
                        } else if (element.hasOwnProperty("componentes")) {
                            element = element.componentes[v];
                        } else if (element.atributos.hasOwnProperty("tabs")) {
                            element = element.atributos.tabs[v];
                        } else if (element.atributos.hasOwnProperty("preguntas")) {
                            element = element.atributos.preguntas[v];
                        } else {
                            $log.error("COMPONENTE INEXISTENTE -> ANTERIOR", element);
                            element = null;
                            return false;
                        }
                    });

                    if (element.hasOwnProperty("elemento")) {
                        element = element.elemento;
                    }

                    return element;
                };

                /*
                 * Según el eleemnto enviado crea una etiqueta con sus opciones
                 * para posteriormente ser renderizadas
                 * @param {type} element Objeto leído de la configuracion
                 * @param {type} arrTreeId Arbol de lectura de donde debe venir
                 * los datos propios
                 * @returns {$} Objeto JQuery con atributos
                 */
                var render_element = function (element, arrTreeId) {
                    var render = null;
                    var strTreeId = JSON.stringify(arrTreeId);
                    if (element.hasOwnProperty("tipo")) {
                        switch (element.tipo) {
                            case "layout":
                                render = read_layout(element, {"pt-constructor": strTreeId});
                                break;
                            default:
                                render = read_component(element, {"pt-constructor": strTreeId});
                                break;
                        }
                    }
                    return render;
                };

                /*
                 * Busca en la página de constantes.js el estilo y busca el tag correcto
                 * que debe ser usado en el caso pertinente según el estilo definido
                 * como parametro.
                 * @param {type} object Elemento leído de la configuracion
                 * @param {type} objAtributos Atributos que va a llevar el objeto a renderizar
                 * @returns {$} Objeto JQuery con las propiedades básicas.
                 */
                var read_layout = function (object, objAtributos) {
                    var estilo = object.estilo;
                    var render = null;
                    if (BASE_DATA.layouts.hasOwnProperty(estilo) && BASE_DATA.layouts[estilo].tag) {
                        var tag = {};
                        tag[BASE_DATA.layouts[estilo].tag] = "";

                        //console.log(object, tag, objAtributos);

                        objAtributos = merge_options(objAtributos, tag);
                        render = $("<div/>", objAtributos);
                        //obj.attr(objAtributos);
                    } else {
                        $log.error(object, render, "LAYOUT INEXISTENTE", estilo);
                    }
                    return render;
                };

                /*
                 * Busca en la página de constantes.js el estilo y busca el tag correcto
                 * que debe ser usado en el caso pertinente según el estilo definido
                 * como parametro.
                 * @param {type} object Elemento leído de la configuracion
                 * @param {type} objAtributos Atributos que va a llevar el objeto a renderizar
                 * @returns {$} Objeto JQuery con las propiedades básicas.
                 */
                var read_component = function (object, objAtributos) {
                    var render = null;

                    if (BASE_DATA.componentes.hasOwnProperty(object.tipo)
                            && BASE_DATA.componentes[object.tipo].hasOwnProperty(object.estilo)) {

                        var tag = {};
                        tag[BASE_DATA.componentes[object.tipo][object.estilo].tag] = "";

                        objAtributos = merge_options(objAtributos, tag);
                        render = $("<div/>", objAtributos);
                    }

                    return render;
                };

                /*
                 * Funciones básicas para generar el código que debe ser visualizado
                 */
                var interface = {
                    set_obj_pagina: function (objPage) {
                        data.page = objPage;
                        data.padre_page = objPage.padre;
                        read_page();
                        delete data.page.padre;
                    },
                    get_obj_pagina: function () {
                        return data.page;
                    },
                    get_render_pagina: function () {
                        return data.render_page;
                    },
                    get_element_page: function (arrTreeId) {
                        return get_element_page(arrTreeId);
                    },
                    render_element: function (element, arrTreeId) {
                        return render_element(element, arrTreeId);
                    }
                };

                return interface;
            })
            .factory("$render", function ($log) {
                var compile = function (render, jQueryContainer, $compile, $scope) {
                    var compiledeHTML = $compile(render)($scope);
                    //$("#content_container")
                    jQueryContainer.append(compiledeHTML);
                };

                return {
                    jQueryCompile: function (render, jQueryContainer, $compile, $scope) {
                        compile(render, jQueryContainer, $compile, $scope);
                    }
                };
            });
}
)(angular);