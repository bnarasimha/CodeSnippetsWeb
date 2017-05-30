(function(){

        'use strict'

        function languageService($http){
            return{
                getlanguages : function(){
                    return $http.get('http://localhost:8082/api/languages')
                }
            }
        };

        angular.module('codeSnip').factory('languageService',['$http', languageService]);
    }
)();
