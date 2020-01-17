(function(){

    'use strict'

    function listCodeSnippetsController($rootScope, $scope, $http, listCodeSnippetsService){

        $scope.currentPage = 1;
        $scope.numPerPage = 10;
        $scope.maxSize = 5;
        
        $scope.$on('filterByLanguage', function(event, value){
            $scope.CodeSnippetsByLanguage(value);
        });

        $scope.$on('filterByTags', function(event, value){
            $scope.CodeSnippetsByTags(value);
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
                    $scope.codeSnippetsReceived = response.data;
                    
                    $scope.$watch('currentPage + numPerPage', function(){
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                        var end = begin + $scope.numPerPage;
                        $scope.codeSnippets = $scope.codeSnippetsReceived.slice(begin, end);
                    })
                })
             }
        }

        $scope.CodeSnippetsByLanguage = function(language){
            //var userId = $rootScope.userId;
            if(language == 'All'){
                $scope.GetCodeSnippets();
            }
            else{
                listCodeSnippetsService.GetCodeSnippetsByLanguage(language).then(function(response){
                    $scope.codeSnippetsReceived = response.data;
                    $scope.codeSnippets = $scope.codeSnippetsReceived;
                })
            }
        };

        $scope.CodeSnippetsByTags = function(tags){
            //var userId = $rootScope.userId;
                listCodeSnippetsService.GetCodeSnippetsByTags(tags).then(function(response){
                    $scope.codeSnippetsReceived = response.data;
                    $scope.codeSnippets = $scope.codeSnippetsReceived;
                })
        };
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', ['$rootScope','$scope', '$http', 'listCodeSnippetsService', listCodeSnippetsController]);

})();