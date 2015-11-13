/* global generales, macrorecursos */

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

        var read_pages = function (data) {
            $.each(data, function (k, v) {
                if (v.hasOwnProperty("recursos")) {
                    $.each(v.recursos, function (key, value) {
                        var objExtra = {numberID: k, padre: v};
                        config.pages.push($.extend(value, objExtra));
                    });
                }
            });
            // $log.log(config, data);
            config.pagina_final = config.pages.length;
        };

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
            render_page: null
        };

        var read_page = function () {
            $.each(data.page, function (k, v) {
                switch (k) {
                    case "background":
                        $("html").css({
                            "background": "url(" + v + ") no-repeat center center fixed",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover"
                        });
                        break;
                    default:
                        break;
                }
            });
        };

        var read_components = function () {

        };

        var interface = {
            set_obj_pgina: function (objPage) {
                data.page = objPage;
            },
            get_obj_pgina: function () {
                return data.page;
            },
            get_render_pgina: function () {
                read_page();
                return data.render_page;
            }
        };

        return interface;
    });
}
)();