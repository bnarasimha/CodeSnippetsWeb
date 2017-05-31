(function () {

    'use strict'

    function addCodeSnippetController($scope, $http, addCodeSnippetService) {
        $scope.Submit = function () {
            var codeSnippet = {
                language: $scope.language,
                title: $scope.title,
                codesnippet: $scope.codeSnip
            };

            addCodeSnippetService.addCodeSnippet(codeSnippet).then(function (response) {

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
    
    angular.module('codeSnip').controller('addCodeSnippetController', ['$scope', '$http', 'addCodeSnippetService', addCodeSnippetController])
})();