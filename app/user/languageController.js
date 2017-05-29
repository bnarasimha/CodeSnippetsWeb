(function(){

    'use strict'
    
    function languageController($scope){
        $scope.languages = [{'languageId':'1', 'languageName':'All'},
                               {'languageId':'2', 'languageName':'C#'},
                               {'languageId':'3', 'languageName':'Java'},
                               {'languageId':'4', 'languageName':'Python'}];
    };

    angular.module('codeSnip').controller('languageController', languageController);

})();