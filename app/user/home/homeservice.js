( function(){

    'use strict'

    function homeService($http, ApiUrl){
        return {
            getUser : function(userName){
                return $http.get(ApiUrl + '/getUser/' + userName);
            }
        }
    };

    angular.module('codeSnip').factory('homeService', ['$http', 'ApiUrl', homeService]);
})();