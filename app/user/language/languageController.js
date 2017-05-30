(function(){

    function languageController($scope, languageService){
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });
    };

    angular.module('codeSnip').controller('languageController', ['$scope','languageService', languageController]);
})();