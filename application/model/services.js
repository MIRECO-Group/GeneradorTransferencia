/* global generales, macrorecursos, BASE_DATA */

(function () {
    angular.module("services", [])
            .service('$plantilla', function ($log) {
                var config = {
                    data: generales,
                    pagina_actual: 1,
                    pagina_final: 0,
                    recursos: macrorecursos,
                    pagina_inicial: generales.generales.pagina_inicial,
                    configuracion: generales.generales,
                    pages: []
                };

                /*
                 * Lee todos los elementos contenidos en @config.recursos donde están
                 * contenidos los elementos que deben ser cargados. Además entrega el 
                 * valor de páginas existente con el fin de tener el contador de páginas
                 * disponible en plantilla.
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
                    $log.log(config);
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
                    }
                };
                return interfaz;
            })
            .service("$contenido", function ($log) {
                var data = {
                    page: {},
                    padre_page: {},
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
                var get_element_page = function(arrTreeId){
                    $log.log(arrTreeId, data.page);
                    var element = null;
                    $.each(arrTreeId, function(k, v){
                        if(k === 0 && v === 1){
                            element = data.page;
                            return true;
                        }else if(element.hasOwnProperty("componentes")){
                            element = element.componentes[v];
                        }else if(element.atributos.hasOwnProperty("tabs")){
                            element = element.atributos.tabs[v];
                        }else {
                            $log.error("COMPONENTE INEXISTENTE -> ANTERIOR", element);
                            element = null;
                            return false;
                        }
                    });
                    return element;
                };
                
                var render_element = function(){
                    
                };
                
                //<editor-fold defaultstate="collapsed" desc="Funciones temporales">
                var read_components = function (component) {
                    var objRead = null;
                    if (BASE_DATA.componentes.hasOwnProperty(component.tipo)
                            && BASE_DATA.componentes[component.tipo].hasOwnProperty(component.estilo)) {
                        
                        objRead = $("<" + BASE_DATA.componentes[component.tipo][component.estilo].tag + "/>");
                        $log.log(component, objRead);
                        
                        if (component.atributos.tabs) {
                            var tabs = [];
                            $.each(component.atributos.tabs, function () {
                                tabs.push(read_tab(this));
                            });
                            objRead.prop("pt-tabs", tabs);
                        }
                        
                    } else {
                        $log.error(component, objRead, "ORGANIZADOR INEXISTENTE", component.tipo, "->", component.estilo);
                    }
                    return objRead;
                };
                
                var read_tab = function (tab) {
                    var obj = read_layout(tab);
                    if (tab.componentes && obj) {
                        var componentes = [];
                        $.each(tab.componentes, function () {
                            componentes.push(read_components(this));
                        });
                        obj.prop("pt-componentes", componentes);
                    }
                    return obj;
                };
                
                /*
                 * Busca en la página de constantes.js el estilo y busca el tag correcto
                 * que debe ser usado en el caso pertinente según el estilo definido
                 * como parametro. Si el layout no existe @return null
                 */
                var read_layout = function (object) {
                    //console.warn(object);
                    var estilo = object.estilo;
                    var obj = null;
                    if (BASE_DATA.layouts.hasOwnProperty(estilo)) {
                        obj = $("<" + BASE_DATA.layouts[estilo].tag + "/>");
                        obj.prop("pt-componentes", []);
                    } else {
                        $log.error(object, obj, "LAYOUT INEXISTENTE", estilo);
                    }
                    return obj;
                };
                
                //</editor-fold>

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
                    get_element_page: function (arrTreeId){
                        return get_element_page(arrTreeId);
                    }
                };

                return interface;
            });
}
)(angular);