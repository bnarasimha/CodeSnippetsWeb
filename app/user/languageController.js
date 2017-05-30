(function(){

    function languageController($scope, languageService){
       languageService.getLanguages();
    };

    angular.module('codeSnip').controller('languageController', ['$scope','languageService', languageController]);
})();