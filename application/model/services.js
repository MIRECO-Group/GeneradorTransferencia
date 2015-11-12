/* global generales, macrorecursos */

(function () {
    angular.module("services", [])
            .service('$plantilla', function ($log, $http) {
                var config = {
                    data: generales,
                    pagina_actual: 0,
                    pagina_final: 0,
                    datos: macrorecursos,
                    pages: []
                };
                
                this.read_pages = function (data){
                    $.each(data, function(k,v){
                        if(v.hasOwnProperty("recursos")){
                            this.read_pages(v);
                        }else{
                            config.pages.push();
                        }
                    });
                };

                var interfaz = {
                    get: function () {
                        return config;
                    },
                    set: function (objData) {
                        config = objData;
                    },
                    set_pagina: function(pagina){
                        config.pagina_actual = pagina | 0;
                    },
                    get_pagina: function(){
                        return config.pagina_actual;
                    },
                    get_generales: function () {
                        return config.data;
                    },
                    get_pagina_final: function(){
                        if(!config.pagina_final){
                            read_pages(config.data);
                        }
                        return config.pagina_final;
                    }
                };
                return interfaz;
            });
}
)();