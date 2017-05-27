(function(){

    'use strict'

    function listCodeSnippetsController($scope, $http){
        $http.get('http://localhost:8082/api/codeSnippets')
        .success(function(data){
            console.log('get success');
            $scope.codeSnippets = data;
        })
        .error(function(err){
            console.log(err);
        });
    };

    angular.module('codeSnip').controller('listCodeSnippetsController', listCodeSnippetsController);

})();