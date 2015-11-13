/* global generales, macrorecursos, BASE_DATA */

(function () {
    var app = angular.module("services", []);
    app.service('$plantilla', function ($log) {
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
    });

    app.service("$contenido", function ($log) {
        var data = {
            page: {},
            padre_page: {},
            render_page: null
        };

        var read_page = function () {
            //<editor-fold defaultstate="collapsed" desc="Lectura de páginas">
            var obj = "";
            $.each(data.page, function (k, v) {
                switch (k) {
                    case "background":
                        $("body").css({
                            "background": "url(" + v + ") no-repeat center center fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    case "componentes":
                        $.each(v, function (key, value) {
                            obj += read_components(value);
                        });
                        break;
                    default:
                        break;
                }
            });
            //</editor-fold>
        };

        var read_components = function (component) {
            $log.log(component);
        };
        
        /*
         * Busca en la página de constantes.js el estilo y busca el tag correcto
         * que debe ser usado en el caso pertinente según el estilo definido
         * como parametro. Si el layout no existe @return null
         */
        var read_layout = function (estilo) {
            var layout = null;
            if (BASE_DATA.layouts.hasOwnProperty(estilo)) {
                var tag = $("<" + BASE_DATA.layouts[estilo].tag + "/>");
            }
            return layout;
        };
        
        /*
         * Funciones básicas para generar el código que debe ser visualizado
         */
        var interface = {
            set_obj_pagina: function (objPage) {
                data.page = objPage;
                data.padre_page = objPage.padre;
                delete data.page.padre;
            },
            get_obj_pagina: function () {
                return data.page;
            },
            get_render_pagina: function () {
                read_page();
                return data.render_page;
            }
        };

        return interface;
    });
}
)(angular);