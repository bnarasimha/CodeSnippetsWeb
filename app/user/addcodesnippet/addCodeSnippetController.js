(function () {

    'use strict'

    function addCodeSnippetController($scope, $http, addCodeSnippetService, languageService) {
        
            languageService.getlanguages().then(function(response){
                $scope.languages = response.data;
            });

            $scope.Back = function(){
                location.href = 'http://localhost:8080/#/';
            }

            $scope.Submit = function () {
            var codeSnippet = {
                language: $scope.language,
                title: $scope.title,
                codesnippet: $scope.codeSnip
            };

            addCodeSnippetService.addCodeSnippet(codeSnippet).then(function (response) {
                console.log('Added successfully');
            })

            alert('Added Successfully');
            $scope.ClearFields();
        };

        $scope.ClearFields = function () {
            $scope.language = '';
            $scope.title = '';
            $scope.codeSnip = '';
        };
    };
    
    angular.module('codeSnip').controller('addCodeSnippetController', ['$scope', '$http', 'addCodeSnippetService', 'languageService', addCodeSnippetController])
})();