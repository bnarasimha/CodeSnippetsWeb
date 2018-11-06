(function () {

    'use strict'

    function addCodeSnippetController($rootScope, $scope, $http, $location, addCodeSnippetService, languageService) {
        
            var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';

            languageService.getlanguages().then(function(response){
                $scope.languages = response.data;
            });

            $scope.Back = function(){
                location.href = hostUrl;
            }

            $scope.Submit = function () {
            var codeSnippet = {
                language: $scope.language,
                title: $scope.title,
                codesnippet: $scope.codeSnip,
                userId: $rootScope.userId
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
    
    angular.module('codeSnip').controller('addCodeSnippetController', ['$rootScope','$scope', '$http', '$location', 'addCodeSnippetService', 'languageService', addCodeSnippetController])
})();