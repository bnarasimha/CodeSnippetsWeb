(function(){

    'use strict'
    
    function languageController($scope){
        $scope.languages = [{'languageId':'1', 'languageName':'C#'},
                               {'languageId':'2', 'languageName':'Java'},
                               {'languageId':'1', 'languageName':'Python'}];
    };

    angular.module('codeSnip').controller('languageController', languageController);

})();