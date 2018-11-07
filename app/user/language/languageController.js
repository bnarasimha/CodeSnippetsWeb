(function(){

    function languageController($rootScope, $scope, $location, $routeParams, languageService, listCodeSnippetsService){
        $scope._id = $routeParams.ID;
        var hostUrl = 'http://' + $location.host() + ':' + $location.port() + '/#/';
        
        $scope.currentPage = 1;
        $scope.numPerPage = 6;
        $scope.maxSize = 5;

        languageService.getlanguages().then(function(response){
            $scope.languages = response.data;
            $scope.Tools = $scope.languages.filter(p => p.categoryType == 'Tools');
            $scope.Languages = $scope.languages.filter(p => p.categoryType == 'Languages');
            $scope.Frameworks = $scope.languages.filter(p => p.categoryType == 'Frameworks');
            $scope.Libraries = $scope.languages.filter(p => p.categoryType == 'Libraries');
            $scope.Others = $scope.languages.filter(p => p.categoryType == 'Others');
        });

        $scope.GetCategories = function(){
            languageService.getlanguages().then(function(response){
                $scope.languagesReceived = response.data;

                $scope.$watch('currentPage + numPerPage', function(){
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                    var end = begin + $scope.numPerPage;
                    $scope.categories = $scope.languagesReceived.slice(begin, end);
                })
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
                languageName : $scope.languageName,
                categoryType : $scope.categoryType
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
                categoryType : $scope.categoryType,
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