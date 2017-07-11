(function(){
    'use strict'

    function codeSnipDetailController($scope, $routeParams, $http, $location, codeSnipDetailService){
        $scope.ID = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        $scope.Back = function(){
            location.href = hostUrl;
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

    angular.module('codeSnip').controller('codeSnipDetailController', ['$scope', '$routeParams', '$http', '$location', 'codeSnipDetailService', codeSnipDetailController]);
})();