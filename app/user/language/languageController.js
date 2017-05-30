(function(){

    function languageController($scope, languageService){
       languageService.getLanguages.then(function(data){
            $scope.languages = data;
       })
    };

    angular.module('codeSnip').controller('languageController', ['$scope','languageService', languageController]);
})();