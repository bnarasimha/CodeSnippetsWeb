(function(){
    'use strict'

    function snipDetailController($scope, $routeParams, $http){
        $scope.ID = $routeParams.ID;

        $http.get('http://localhost:8082/api/codeSnippets/' + $scope.ID)
        .success(function(codeSnippet){
            $scope.snipDetail = codeSnippet;
            console.log('Snip detail retrieval successful');
        })
        .error(function(err){
            console.log(err);
        });
    }    

    angular.module('codeSnip').controller('snipDetailController', snipDetailController);
})();