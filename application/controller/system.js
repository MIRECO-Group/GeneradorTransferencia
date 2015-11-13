/* global angular, plantilla, generales */

(function () {
    angular.module("plantilla-transferencia", ["routes", "services"])
            .controller("Initialize", function ($http, $log, $scope, $plantilla, $contenido) {
                var plantilla = this;
                plantilla.config = $plantilla.get_generales();
            })
            .controller("Paginacion", function ($http, $log, $scope, $plantilla, $contenido) {
                this.paginas = {};
                this.actual = $plantilla.get_pagina();
                this.final = $plantilla.get_pagina_final();

                var page = $plantilla.get_obj_pagina(this.actual -1);
                $contenido.set_obj_pgina(page);
                var render = $contenido.get_render_pgina();
                
                $log.log(page, render);

                /*
                 var compiledeHTML = $compile(render)($scope);
                 $("#content_container").html(compiledeHTML);
                 
                 $scope.pagina = $plantilla.get_pagina();*/
            });
})();
