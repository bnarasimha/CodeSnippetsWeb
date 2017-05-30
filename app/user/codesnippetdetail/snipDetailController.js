(function(){
    'use strict'

    function snipDetailController($scope, $routeParams, $http, snapDetailService){
        $scope.ID = $routeParams.ID;

        snapDetailService.getCodeSnippetDetail($scope.ID).then(function(response){
            $scope.snipDetail = codeSnippet;
        })
        // $http.get('http://localhost:8082/api/codeSnippets/' + $scope.ID)
        // .success(function(codeSnippet){
        //     $scope.snipDetail = codeSnippet;
        //     console.log('Snip detail retrieval successful');
        // })
        // .error(function(err){
        //     console.log(err);
        // });

        $scope.Delete = function(){
             $http.delete('http://localhost:8082/api/deleteCodeSnippet/' + $scope.ID)
            .success(function(){
                console.log('Code Snip deleted successful');
            })
            .error(function(err){
                console.log(err);
            });
            location.href = 'http://localhost:8080/#/'
        }
    }    

    angular.module('codeSnip').controller('snipDetailController', ['$scope', '$routeParams', '$http', 'snapDetailService', snipDetailController]);
})();