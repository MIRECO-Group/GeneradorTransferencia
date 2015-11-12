/* global generales, macrorecursos */

(function () {
    var app = angular.module("services", []);
    app.service('$plantilla', function ($log, $contenido) {
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
            $log.log(config, data);
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
            page: {}
        };

        var interface = {
            set_page: function (objPage) {
                data.page = objPage;
                $log.log(data);
            }
        };

        return interface;
    });
}
)();