/* global generales, macrorecursos */

(function () {
    angular.module("services", [])
            .factory('$plantilla', function ($log, $http) {
                var config = {
                    data: generales,
                    pagina_actual: 0,
                    pagina_final: 0,
                    datos: macrorecursos,
                    pages: []
                };

                var read_pages = function (data) {
                    $.each(data, function (k, v) {
                        if (v.hasOwnProperty("recursos")) {
                            $.each(v, function (key, value) {
                                var objExtra = {numberID: k};
                                config.pages.push($.extend({}, v, objExtra));
                            });
                        }
                    });
                    $log.log(config);
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
                            read_pages(config.data);
                        }
                        return config.pagina_final;
                    }
                };
                return interfaz;
            });
}
)();