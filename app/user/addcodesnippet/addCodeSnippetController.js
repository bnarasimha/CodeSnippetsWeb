(function () {

    'use strict'

    function addCodeSnippetController($rootScope, $scope, $http, $location, addCodeSnippetService) {
        
            var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';

            $scope.Back = function(){
                location.href = hostUrl;
            }

            $scope.addCodeSnippet = function () {
                var codeSnippet = {
                    language: $scope.language,
                    title: $scope.title,
                    codesnippet: $scope.codeSnip,
                    userId: $rootScope.userId
                };

                addCodeSnippetService.addCodeSnippet(codeSnippet).then(function () {
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
    
    angular.module('codeSnip').controller('addCodeSnippetController', ['$rootScope','$scope', '$http', '$location', 'addCodeSnippetService', addCodeSnippetController])
})();