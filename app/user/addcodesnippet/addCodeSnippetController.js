(function () {

    'use strict'

    function addCodeSnippetController($rootScope, $scope, $http, $location, languageService, addCodeSnippetService) {
        
            var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
            var labels = [];

            languageService.getlanguages().then(function(response){
                $scope.languages = response.data;
            });

            $scope.addCodeSnippet = function () {

                var codeSnippet = {
                    language: $scope.language,
                    title: $scope.title,
                    codesnippet: $scope.codeSnip,
                    urlreference: $scope.urlreference,
                    userId: $rootScope.userId,
                    tags:  labels.toString()
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
                $scope.urlreference = '';
                $scope.newTag = ''
            };

            $scope.AddLabel = function () {
                if($scope.newTag != undefined){
                    labels.push($scope.newTag);
                    $scope.tags = labels;
                    $scope.newTag = '';
                    document.querySelector("#newTag").focus();
                }
            }

            $scope.RemoveLabel = function (tag) {
                labels.splice(labels.indexOf(tag), 1);
            }

            $scope.Back = function(){
                location.href = hostUrl;
            }
    };
    
    angular.module('codeSnip').controller('addCodeSnippetController', ['$rootScope','$scope', '$http', '$location', 'languageService', 'addCodeSnippetService', addCodeSnippetController])
})();