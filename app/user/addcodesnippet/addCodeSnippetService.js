(function () {

    'use strict'

    function addCodeSnippetService($http, ApiUrl) {
        return {
            addCodeSnippet: function (codeSnippet) {
                return $http.post(ApiUrl + '/addCodeSnippet', codeSnippet);
            }
        };
    };

    angular.module('codeSnip').factory('addCodeSnippetService', ['$http','ApiUrl',  addCodeSnippetService]);
}
)();