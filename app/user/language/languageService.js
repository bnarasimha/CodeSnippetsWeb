(function(){

        'use strict'

        function languageService($http, ApiUrl){
            return{
                getlanguages : function(){
                    return $http.get(ApiUrl + '/languages');
                }
            }
        };

        angular.module('codeSnip').factory('languageService',['$http', 'ApiUrl',  languageService]);
    }
)();
