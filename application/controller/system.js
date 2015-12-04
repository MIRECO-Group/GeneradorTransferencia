/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular, plantilla, generales */

(function () {
    angular.module("plantilla-transferencia", ["routes", "services"])
            .controller("Initialize", function ($plantilla) {
                var plantilla = this;
                plantilla.config = $plantilla.get_generales();
            })
            .controller("Paginacion", function ($compile, $scope, $plantilla, $contenido, $render) {
                this.paginas = {};
                this.actual = parseInt($plantilla.get_pagina());
                this.final = $plantilla.get_pagina_final();
                
                $plantilla.set_paginacion_controller($scope);

                var that = this;

                var render_content = function (idPage) {
                    var where2Render = $plantilla.base_container;
                    if ($contenido.get_obj_pagina()) {
                        $(where2Render, "div").empty();
                    }
                    idPage--;
                    //console.log(idPage);
                    var page = $plantilla.get_obj_pagina(idPage);

                    $contenido.set_obj_pagina(page);
                    var render = $contenido.render_element(page, [idPage]);

                    //console.log(page);
                    $render.jQueryCompile(render, where2Render, $compile, $scope);
                };

                render_content(this.actual);
                //render_content(this.actual + 1);

                for (var i = this.actual; i < this.final; i++) {
                    //render_content(i);
                }

                //$element.

                $scope.cambiar_pagina = function (idPage) {
                    that.actual = idPage;
                    $plantilla.set_pagina(this.actual);
                    render_content(this.actual);
                };

                $scope.sgte_pagina = function () {
                    if (that.actual + 1 > that.final) {
                        return;
                    }
                    that.actual++;
                    $plantilla.set_pagina(that.actual);
                    render_content(that.actual);
                };

                $scope.ant_pagina = function () {
                    if (that.actual - 1 < 1) {
                        return;
                    }
                    that.actual--;
                    $plantilla.set_pagina(that.actual);
                    render_content(that.actual);
                };               

                /* <div dummy-layout pt-constructor="[1]"></div> */
            });
})();
