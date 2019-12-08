(function(){
    
    'use strict'

    function listCodeSnippetsService($http, ApiUrl){
        return{
            GetCodeSnippets : function(){
                    return $http.get(ApiUrl+ '/codeSnippets');
            },
            GetMyCodeSnippets : function(userId){
                return $http.get(ApiUrl+ '/getMyCodeSnippets/' + userId);
            },
            SearchCodeSnippets : function(userId,searchText){
                return $http.get(ApiUrl + '/searchCodeSnippets/'+ userId + '/' + searchText)
            },
            GetCodeSnippetsByLanguage : function(userId,language){
                return $http.get(ApiUrl + '/CodeSnippets/language/' + userId + '/' + language);
            },
            GetCodeSnippetsByTags : function(userId,tags){
                return $http.get(ApiUrl + '/CodeSnippets/tags/' + userId + '/' + tags);
            }
        }
    };

    angular.module('codeSnip').factory('listCodeSnippetsService', ['$http', 'ApiUrl', listCodeSnippetsService]);
})();