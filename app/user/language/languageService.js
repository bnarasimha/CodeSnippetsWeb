(function(){

        'use strict'

        function languageService($scope, $http){
            return {
                getLanguages : function(){
                    return $http.get('http://localhost:8082/api/languages')
                            .success(function(data){
                                return data;
                            });
                }
            };
        };

        angular.module('codeSnip').factory('languageService',['$scope','$http', languageService]);
    }
)();