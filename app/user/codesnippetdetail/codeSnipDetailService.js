(function () {

    'use strict'

    function codeSnipDetailService($http, ApiUrl) {
        return {
            getCodeSnipDetail: function (codeSnippetId) {
                return $http.get(ApiUrl + '/codeSnippets/' + codeSnippetId);
            },
            deleteCodeSnippet: function (codeSnippetId) {
                return $http.delete(ApiUrl + '/deleteCodeSnippet/' + codeSnippetId);
            },
            updateCodeSnippet: function(codeSnippet) {
                return $http.post(ApiUrl + '/editCodeSnippet', codeSnippet);                
            },
            vote: function(codeSnippetId){
                return $http.post(ApiUrl + '/vote/' + codeSnippetId);
            },
            getCodeSnippetVotes: function(codeSnippetId){
                return $http.get(ApiUrl + '/getCodeSnippetVotes/' + codeSnippetId);
            }
        }
    };

    angular.module('codeSnip').factory('codeSnipDetailService', ['$http', 'ApiUrl', codeSnipDetailService]);
}
)();
