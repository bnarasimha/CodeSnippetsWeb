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
                },
                getLanguageDetails : function(_id){
                    return $http.get(ApiUrl + '/languageDetail/' + _id);
                },
                deleteCategory : function(_id){
                    return $http.delete(ApiUrl + '/deleteCategory/' + _id);
                }
            }
        };

        angular.module('codeSnip').factory('languageService',['$http', 'ApiUrl',  languageService]);
    }
)();
