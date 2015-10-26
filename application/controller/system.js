/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    var app = angular.module("plantilla-transferencia", ["routes"]);

    app.controller("CommentExample", ["$http", function ($http) {
            this.comments = [];
            this.postComment = {};

            var comments = this;

            $http.get("config.json").success(function (data) {
                comments.comments = data;
            });

            this.setComment = function () {
                console.log(this.postComment);
                this.comments.push(this.postComment);
                this.postComment = {};
            };

        }]);

})();