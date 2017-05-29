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
             alert($scope.SearchText);
            $http.get('http://localhost:8082/api/searchCodeSnippets/' + $scope.SearchText)
            .success(function(data){
                console.log('search success');
                $scope.codeSnippets = data;
            })
            .error(function(err){
                console.log(err);
            });
        }

        $scope.CodeSnippetsByLanguage = function(language){
            if(language == 'All'){
                $scope.GetCodeSnippets();
            }
            else{
                $http.get('http://localhost:8082/api/CodeSnippets/language/' + language)
                .success(function(data){
                    $scope.codeSnippets = data;
                })
                .error(function(err){
                    console.log(err);
                })
            }
        };
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', listCodeSnippetsController);

})();