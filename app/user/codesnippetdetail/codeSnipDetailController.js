(function(){
    'use strict'

    function codeSnipDetailController($scope, $routeParams, $http, codeSnipDetailService){
        $scope.ID = $routeParams.ID;

        $scope.Back = function(){
            location.href = 'http://localhost:8080/#/';
        }

        codeSnipDetailService.getCodeSnipDetail($scope.ID).then(function(response){
            $scope.snipDetail = response.data;
        });

         $scope.Delete = function(){
            codeSnipDetailService.deleteCodeSnippet($scope.ID).then(function(response){
                console.log('Delete successfull');
            });

            location.href = 'http://localhost:8080/#/'
         }
    }    

    angular.module('codeSnip').controller('codeSnipDetailController', ['$scope', '$routeParams', '$http', 'codeSnipDetailService', codeSnipDetailController]);
})();