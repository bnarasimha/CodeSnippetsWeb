(function(){

    'use strict'

    function listCodeSnippetsController($scope){
        $scope.codeSnippets =   [{'id':'1','language':'c#', 'title':'How to add two dates', 'CodeSnippet':'Add two dates'}, 
                                {'id':'2','language':'c#', 'title':'Get substring from a string', 'CodeSnippet':'String Sub string'}];
    }

    angular.module('codeSnip').controller('listCodeSnippetsController', listCodeSnippetsController);

})();