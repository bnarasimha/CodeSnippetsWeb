angular.module('codeSnip').controller('addSnipCtrl', function($scope){
    $scope.Submit = function(){
        alert($scope.title);
    };
});