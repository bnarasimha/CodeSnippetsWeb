(function(){

    'use strict'

    function listCodeSnippetsController($rootScope, $scope, $http, listCodeSnippetsService){

        $scope.currentPage = 1;
        $scope.numPerPage = 6;
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
            var userId = $rootScope.userId;
             if($scope.SearchText == undefined || $scope.SearchText == ''){
                 $scope.GetMyCodeSnippets();
             }
             else{
                 listCodeSnippetsService.SearchCodeSnippets(userId,$scope.SearchText).then(function(response){
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
            var userId = $rootScope.userId;
            if(language == 'All'){
                $scope.GetMyCodeSnippets();
            }
            else{
                listCodeSnippetsService.GetCodeSnippetsByLanguage(userId,language).then(function(response){
                    $scope.codeSnippetsReceived = response.data;
                    $scope.codeSnippets = $scope.codeSnippetsReceived;
                })
            }
        };

        $scope.CodeSnippetsByTags = function(tags){
            var userId = $rootScope.userId;
                listCodeSnippetsService.GetCodeSnippetsByTags(userId,tags).then(function(response){
                    $scope.codeSnippetsReceived = response.data;
                    $scope.codeSnippets = $scope.codeSnippetsReceived;
                })
        };

        $scope.GetMyCodeSnippets = function(){
            
            var userId = $rootScope.userId;
            if(userId == null){
                $scope.GetCodeSnippets();
            }
            else{
                listCodeSnippetsService.GetMyCodeSnippets(userId).then(function(response){
                    $scope.codeSnippetsReceived = response.data;

                    $scope.$watch('currentPage + numPerPage', function(){
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                        var end = begin + $scope.numPerPage;
                        $scope.codeSnippets = $scope.codeSnippetsReceived.slice(begin, end);
                    })
                })
            }
        };
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', ['$rootScope','$scope', '$http', 'listCodeSnippetsService', listCodeSnippetsController]);

})();