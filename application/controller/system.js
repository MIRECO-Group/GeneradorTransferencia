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
                this.actual = $plantilla.get_pagina();
                this.final = $plantilla.get_pagina_final();

                var render_content = function (idPage) {
                    var page = $plantilla.get_obj_pagina(idPage - 1);
                    $contenido.set_obj_pagina(page);
                    var render = $contenido.render_element(page, [1]);
                    console.log(page, render);
                    var where2Render = $plantilla.base_container;

                    $render.jQueryCompile(render, where2Render, $compile, $scope);
                };

                //render_content(this.actual);

                for (var i = this.actual; i < this.final; i++) {
                    render_content(i);
                }

                this.cambiar_pagina = function (idPage) {
                    this.actual = idPage;
                    $plantilla.set_pagina(this.actual);
                    render_content(this.actual);
                };

                this.sgte_pagina = function () {
                    this.actual = this.actual++;
                    $plantilla.set_pagina(this.actual);
                    render_content(this.actual);
                };

                this.ant_pagina = function () {
                    this.actual = this.actual--;
                    $plantilla.set_pagina(this.actual);
                    render_content(this.actual);
                };

                /* <div dummy-layout pt-constructor="[1]"></div> */
            });
})();
