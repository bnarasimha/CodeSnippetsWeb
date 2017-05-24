(function(){
    'use strict'

    function snipDetailController($scope, $routeParams){
        $scope.ID = $routeParams.ID;
    }

    angular.module('codeSnip').controller('snipDetailController', snipDetailController);
})();