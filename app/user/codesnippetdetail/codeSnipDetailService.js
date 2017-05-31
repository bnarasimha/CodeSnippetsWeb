(function () {

    'use strict'

    function codeSnipDetailService($http) {
        return {
            getCodeSnipDetail: function (codeSnippetId) {
                return $http.get('http://localhost:8082/api/codeSnippets/' + codeSnippetId);
            },
            deleteCodeSnippet: function (codeSnippetId) {
                return $http.delete('http://localhost:8082/api/deleteCodeSnippet/' + codeSnippetId);
            }
        }
    };

    angular.module('codeSnip').factory('codeSnipDetailService', ['$http', codeSnipDetailService]);
}
)();
