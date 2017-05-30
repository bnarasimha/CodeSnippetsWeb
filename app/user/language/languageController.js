(function(){

    function languageController($rootScope, $scope, languageService, listCodeSnippetsService){
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        $scope.GetCodeSnippetsByLanguage = function(language){
            $rootScope.$broadcast('filterByLanguage', language);
        }
    };

    angular.module('codeSnip').controller('languageController', ['$rootScope', '$scope','languageService','listCodeSnippetsService', languageController]);
})();