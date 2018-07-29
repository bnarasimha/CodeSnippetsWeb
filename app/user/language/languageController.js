(function(){

    function languageController($rootScope, $scope, $routeParams, languageService, listCodeSnippetsService){
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        $scope.GetCategories = function(){
            languageService.getlanguages().then(function(response){
                $scope.languages = response.data;
            });
        }

        $scope.GetLanguageName = function(){
            console.log('Getting LanguageName' + $routeParams.languageName);
            $scope.LanguageName = $routeParams.languageName;
        }

        $scope.GetCodeSnippetsByLanguage = function(language){
            $rootScope.$broadcast('filterByLanguage', language);
        }

        $scope.addCategory = function(){
            var category =  {
                languageName : $scope.language
            }
            languageService.addCategory(category).then(function(){
                console.log('Added Successfully');
            })
            alert('Added Successfully');
        }

        $scope.updateCategory = function(){
            var category =  {
                languageName : $scope.language
            }
            languageService.updateCategory(category).then(function(){
                console.log('Updated Successfully');
            })
            alert('Updated Successfully');
        }

        $scope.GetCodeSnippetsByLanguage = function(language){
            $rootScope.$broadcast('filterByLanguage', language);
        }
    };

    angular.module('codeSnip').controller('languageController', ['$rootScope', '$scope', '$routeParams' , 'languageService','listCodeSnippetsService', languageController]);
})();