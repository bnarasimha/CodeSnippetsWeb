(function(){
    'use strict'

    function codeSnipDetailController($rootScope, $scope, $routeParams, $http, $location, codeSnipDetailService, languageService, listCodeSnippetsService){
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
                urlreference: $scope.snipDetail.urlreference,
                _id : $scope.snipDetail._id,
            };
            console.log(codeSnippet);
            codeSnipDetailService.updateCodeSnippet(codeSnippet).then(function(response){
                console.log('Updated successfully');
            });
            alert('Updated Successfully');
            location.href = hostUrl;
        }

        $scope.Delete = function(){            
            codeSnipDetailService.deleteCodeSnippet($scope.snipDetail._id).then(function(response){
                console.log('Delete successfull');
            });
            alert('Deleted Successfully');
            location.href = hostUrl;
         }
    }    

    angular.module('codeSnip').controller('codeSnipDetailController', ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'codeSnipDetailService', 'languageService', 'listCodeSnippetsService', codeSnipDetailController]);
})();