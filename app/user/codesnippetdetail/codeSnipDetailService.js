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
            getCodeSnippetVotes: function(codeSnippetId){
                return $http.get(ApiUrl + '/getCodeSnippetVotes/' + codeSnippetId);
            },
            addCodeSnippetVote: function(addCodeSnippetVote){
                console.log(addCodeSnippetVote);
                return $http.post(ApiUrl + '/addCodeSnippetVote/', addCodeSnippetVote);
            },
            updateCodeSnippetVote: function(updateCodeSnippetVote){
                return $http.post(ApiUrl + '/updateCodeSnippetVote/', updateCodeSnippetVote);
            },
            getCodeSnippetComments: function(codeSnippetId){
                return $http.get(ApiUrl + '/getCodeSnippetComments/' + codeSnippetId);
            },
            addCodeSnippetComments: function(newCodeSnippetComment){
                return $http.post(ApiUrl + '/addCodeSnippetComment/',  newCodeSnippetComment);
            },
        }
    };

    angular.module('codeSnip').factory('codeSnipDetailService', ['$http', 'ApiUrl', codeSnipDetailService]);
}
)();
