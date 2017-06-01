(function(){

    'use strict'

    function listCodeSnippetsController($scope, $http, listCodeSnippetsService){

        $scope.currentPage = 1;
        $scope.numPerPage = 5;
        $scope.maxSize = 5;
        
        $scope.$on('filterByLanguage', function(event, value){
            $scope.CodeSnippetsByLanguage(value);
        });

        $scope.GetCodeSnippets = function(){            
            listCodeSnippetsService.GetCodeSnippets().then(function(response){
                $scope.codeSnippetsReceived = response.data;

                $scope.$watch('currentPage + numPerPage', function(){
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                    var end = begin + $scope.numPerPage;
                    $scope.codeSnippets = $scope.codeSnippetsReceived.slice(begin, end);
                })
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