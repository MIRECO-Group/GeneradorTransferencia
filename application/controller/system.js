/* global angular, plantilla, generales */

(function () {
    angular.module("plantilla-transferencia", ["routes", "services"])
            .controller("Initialize", function ($http, $log, $scope, $plantilla) {
                var plantilla = this;
                plantilla.config = $plantilla.get_generales();
            })
            .controller("Paginacion", function ($http, $log, $scope, $plantilla) {
                this.paginas = {};
                this.actual = $plantilla.get_pagina();
                this.final = $plantilla.get_pagina_final();
                this.pagina_actual = {};
                //console.log($plantilla.get());

                $scope.showdiv = function () {
                    var str = "<organizador_tabs_superiores></organizador_tabs_superiores>";
                    var compiledeHTML = $compile(str)($scope);
                    $("#content_container").append(compiledeHTML);
                    var pagina = $plantilla.get_pagina() + 1;
                    $plantilla.set_pagina(pagina);
                };

                $scope.pagina = $plantilla.get_pagina();
            });
})();
