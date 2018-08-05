(function(){

    function languageController($rootScope, $scope, $location, $routeParams, languageService, listCodeSnippetsService){
        $scope._id = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
        });

        $scope.GetCategories = function(){
            languageService.getlanguages().then(function(response){
                $scope.languages = response.data;
            });
        }

        $scope.GetLanguageDetails = function(){
            languageService.getLanguageDetails($scope._id).then(function(response){
                $scope.languageDetail = response.data;
            });
        }

        $scope.GetCodeSnippetsByLanguage = function(language){
            $rootScope.$broadcast('filterByLanguage', language);
        }

        $scope.addCategory = function(){
            var category =  {
                languageName : $scope.languageName
            }
            languageService.addCategory(category).then(function(){
                console.log('Added Successfully');
            })
            alert('Added Successfully');
            location.href = hostUrl + 'manageCategories';
        }

        $scope.updateCategory = function(){
            var category =  {
                languageName : $scope.languageDetail.languageName,
                _id : $scope.languageDetail._id,
            }
            languageService.updateCategory(category).then(function(){
                console.log('Updated Successfully');
            })
            alert('Updated Successfully');
            location.href = hostUrl + 'manageCategories';
        }

        $scope.deleteCategory = function(){
            languageService.deleteCategory($scope._id).then(function(response){
                console.log('Delete successfull');
            });

            alert('Delete successfull');
            location.href = hostUrl + 'manageCategories';
         }

        $scope.GetCodeSnippetsByLanguage = function(language){
            $rootScope.$broadcast('filterByLanguage', language);
        }
    };

    angular.module('codeSnip').controller('languageController', ['$rootScope', '$scope', '$location' ,'$routeParams' , 'languageService','listCodeSnippetsService', languageController]);
})();