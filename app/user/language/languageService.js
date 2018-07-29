(function(){

        'use strict'

        function languageService($http, ApiUrl){
            return{
                getlanguages : function(){
                    return $http.get(ApiUrl + '/languages');
                },
                addCategory : function(Category){
                    return $http.post(ApiUrl + '/addCategory', Category);
                },
                updateCategory : function(Category){
                    return $http.post(ApiUrl + '/updateCategory', Category);
                }
            }
        };

        angular.module('codeSnip').factory('languageService',['$http', 'ApiUrl',  languageService]);
    }
)();
