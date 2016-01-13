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
            .controller("Paginacion", function ($compile, $scope, $plantilla, $contenido, $render, $iconos) {
                this.paginas = {};
                this.actual = parseInt($plantilla.get_pagina());
                this.final = $plantilla.get_pagina_final();
                this.checked = true;
                $plantilla.set_paginacion_controller($scope);
                this.nombre_recurso = null;
                var that = this;

                var render_content = function (idPage) {
                    var where2Render = $plantilla.base_container;
                    if ($contenido.get_obj_pagina()) {
                        $(where2Render, "div").empty();
                    }
                    idPage--;

                    var page = $plantilla.get_obj_pagina(idPage);

                    that.nombre_recurso = $plantilla.get_recursos_pagina(that.actual).nombre;

                    var icon = $iconos.get_icono(that.nombre_recurso);
                    $contenido.set_obj_pagina(page);
                    var render = $contenido.render_element(page, [idPage]);

                    $render.jQueryCompile(render, where2Render, $compile, $scope);

                    $("#anterior-pagina").css('visibility','visible');
                    $("#siguiente-pagina").css('visibility','visible');

                    if(that.actual==1){
                        $("#anterior-pagina").css('visibility','hidden');
                        $("#siguiente-pagina").css('visibility','hidden');
                    }
                        
                    if(that.actual == that.final)
                        $("#siguiente-pagina").css('visibility','hidden');

                    $("#icono-pagina").html('<span class="transfe_font '+icon.estilo+'" style="font-size: 1.8rem;">'+icon.codigo+'</span>');

                    that.checked = false;
                };

                render_content(this.actual);
                //render_content(this.actual + 1);

                for (var i = this.actual; i < this.final; i++) {
                    //render_content(i);
                }

                //$element.

                $scope.cambiar_pagina = function (idPage) {
                    that.checked = true;
                    that.actual = idPage;
                    $plantilla.set_pagina(that.actual);
                    render_content(that.actual);
                };

                $scope.sgte_pagina = function () {
                    /*if (that.actual + 1 > that.final) {
                        console.log('siguiente-pagina');
                        return;
                    }*/
                    that.checked = true;
                    that.actual++;
                    $plantilla.set_pagina(that.actual);
                    render_content(that.actual);
                };

                $scope.ant_pagina = function () {
                    /*if (that.actual - 1 < 1) {
                        return;
                    }*/
                    that.checked = true;
                    that.actual--;
                    $plantilla.set_pagina(that.actual);
                    render_content(that.actual);
                };               
                /* <div dummy-layout pt-constructor="[1]"></div> */
            });
})();
