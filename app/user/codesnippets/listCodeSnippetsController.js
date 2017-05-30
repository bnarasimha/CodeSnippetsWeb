(function(){

    'use strict'

    function listCodeSnippetsController($scope, $http, listCodeSnippetsService){

        $scope.$on('filterByLanguage', function(event, value){
            $scope.CodeSnippetsByLanguage(value);
        });

        $scope.GetCodeSnippets = function(){
            listCodeSnippetsService.GetCodeSnippets().then(function(response){
                $scope.codeSnippets = response.data;
            })
        };

         $scope.SearchCodeSnippets = function(){
             if($scope.SearchText == undefined || $scope.SearchText == ''){
                 $scope.GetCodeSnippets();
             }
             else{
                 listCodeSnippetsService.SearchCodeSnippets($scope.SearchText).then(function(response){
                    $scope.codeSnippets = response.data;
                })
             }
        }

        $scope.CodeSnippetsByLanguage = function(language){
            if(language == 'All'){
                $scope.GetCodeSnippets();
            }
            else{
                listCodeSnippetsService.GetCodeSnippetsByLanguage(language).then(function(response){
                    $scope.codeSnippets = response.data;
                })
            }
        };
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', ['$scope', '$http', 'listCodeSnippetsService', listCodeSnippetsController]);

})();