(function(){

    'use strict'

    function listCodeSnippetsController($scope, $http){

        $scope.GetCodeSnippets = function(){
            $http.get('http://localhost:8082/api/codeSnippets')
            .success(function(data){
                console.log('get success');
                $scope.codeSnippets = data;
            })
            .error(function(err){
                console.log(err);
            });
        };

         $scope.SearchCodeSnippets = function(){

            $http.get('http://localhost:8082/api/searchCodeSnippets/' + $scope.SearchText)
            .success(function(data){
                console.log('search success');
                $scope.codeSnippets = data;
            })
            .error(function(err){
                console.log(err);
            });
        }
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', listCodeSnippetsController);

})();