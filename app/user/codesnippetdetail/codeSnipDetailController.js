(function(){
    'use strict'

    function codeSnipDetailController($scope, $routeParams, $http, $location, codeSnipDetailService, languageService){
        $scope._id = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        codeSnipDetailService.getCodeSnipDetail($scope._id).then(function(response){
            $scope.snipDetail = response.data;
        });

        $scope.Back = function(){
            location.href = hostUrl;
        }

        $scope.Update = function(){

            var codeSnippet = {
                language: $scope.snipDetail.language,
                title: $scope.snipDetail.title,
                codesnippet: $scope.snipDetail.codesnippet,
                _id : $scope.snipDetail._id,
            };
            console.log(codeSnippet);
            codeSnipDetailService.updateCodeSnippet(codeSnippet).then(function(response){
                alert('Updated successfully');
            });
            alert('Updated Successfully');
            location.href = hostUrl// + 'snipDetail/' + $scope.snipDetail._id
        }

        $scope.Delete = function(){
            codeSnipDetailService.deleteCodeSnippet($scope.ID).then(function(response){
                console.log('Delete successfull');
            });

            location.href = hostUrl; //'http://localhost:8080/#/'
         }
    }    

    angular.module('codeSnip').controller('codeSnipDetailController', ['$scope', '$routeParams', '$http', '$location', 'codeSnipDetailService', 'languageService', codeSnipDetailController]);
})();