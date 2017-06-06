(function () {

    'use strict'

    function codeSnipDetailService($http, ApiUrl) {
        return {
            getCodeSnipDetail: function (codeSnippetId) {
                return $http.get(ApiUrl + '/codeSnippets/' + codeSnippetId);
            },
            deleteCodeSnippet: function (codeSnippetId) {
                return $http.delete(ApiUrl + '/deleteCodeSnippet/' + codeSnippetId);
            }
        }
    };

    angular.module('codeSnip').factory('codeSnipDetailService', ['$http', 'ApiUrl', codeSnipDetailService]);
}
)();
