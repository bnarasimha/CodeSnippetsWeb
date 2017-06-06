(function(){
    
    'use strict'

    function listCodeSnippetsService($http, ApiUrl){
        return{
            GetCodeSnippets : function(){
                    return $http.get(ApiUrl+ '/codeSnippets');
            },
            SearchCodeSnippets : function(searchText){
                return $http.get(ApiUrl + '/searchCodeSnippets/' + searchText)
            },
            GetCodeSnippetsByLanguage : function(language){
                return $http.get(ApiUrl + '/CodeSnippets/language/' + language);
            }
        }
    };

    angular.module('codeSnip').factory('listCodeSnippetsService', ['$http', 'ApiUrl', listCodeSnippetsService]);
})();