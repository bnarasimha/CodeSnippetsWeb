(function(){
    
    'use strict'

    function listCodeSnippetsService($http){
        return{
            GetCodeSnippets : function(){
                    return $http.get('http://localhost:8082/api/codeSnippets');
            },
            SearchCodeSnippets : function(searchText){
                return $http.get('http://localhost:8082/api/searchCodeSnippets/' + searchText)
            },
            GetCodeSnippetsByLanguage : function(language){
                return $http.get('http://localhost:8082/api/CodeSnippets/language/' + language);
            }
        }
    };

    angular.module('codeSnip').factory('listCodeSnippetsService', ['$http', listCodeSnippetsService]);
})();