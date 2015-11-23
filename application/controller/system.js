/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular, plantilla, generales */

(function () {
    angular.module("plantilla-transferencia", ["routes", "services"])
            .controller("Initialize", function ($http, $log, $scope, $plantilla, $contenido) {
                var plantilla = this;
                plantilla.config = $plantilla.get_generales();
            })
            .controller("Paginacion", function ($log, $compile, $scope, $plantilla, $contenido, $render) {
                this.paginas = {};
                this.actual = $plantilla.get_pagina();
                this.final = $plantilla.get_pagina_final();

                var render_content = function (idPage) {
                    var page = $plantilla.get_obj_pagina(idPage - 1);
                    $contenido.set_obj_pagina(page);
                    var render = $contenido.render_element(page, [1]);
                    var where2Render = $("#content_container");
                    $render.jQueryCompile(render, where2Render, $compile, $scope);
                };

                render_content(this.actual);
                
                this.cambiar_pagina = function (idPage){
                    render_content(idPage);
                };

                /* <div dummy-layout pt-constructor="[1]"></div> */
            });
})();
