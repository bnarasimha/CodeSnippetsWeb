(function () {

    'use strict'

    function addCodeSnippetService($http) {
        return {
            addCodeSnippet: function (codeSnippet) {
                alert(codeSnippet);
                return $http.post('http://localhost:8082/api/addCodeSnippet', codeSnippet);
            }
        };
    };

    angular.module('codeSnip').factory('addCodeSnippetService', ['$http',  addCodeSnippetService]);
}
)();