(function(){

        'use strict'

        function languageService($http){
            var factory = {};

            factory.getLanguages = function($scope){
                $http.get('http://localhost:8082/api/languages')
                .success(function(data){
                    $scope.languages = data;
                })
                .error(function(err){

                });
            }

            return factory;
        };

        angular.module('codeSnip').factory('languageService', languageService);
    }
)();