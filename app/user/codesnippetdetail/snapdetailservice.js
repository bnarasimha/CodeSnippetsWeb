(function(){

        'use strict'

        function snapDetailService($http){
            return{
                getCodeSnippetDetail : function(codeSnippetId){
                    return $http.get('http://localhost:8082/api/codeSnippets/' + codeSnippetId);
                }
            }
        };

        angular.module('codeSnip').factory('snapDetailService',['$http', snapDetailService]);
    }
)();
