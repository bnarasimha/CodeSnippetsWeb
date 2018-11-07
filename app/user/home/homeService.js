( function(){

    'use strict'

    function homeService($http, ApiUrl){
        return {
            getUser : function(userId){
                return $http.get(ApiUrl + '/getUser/' + userId);
            }
        }
    };

    angular.module('codeSnip').factory('homeService', ['$http', 'ApiUrl', homeService]);
})();