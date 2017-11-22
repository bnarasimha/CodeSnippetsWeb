(function(){
    'use strict'

    function homeController($scope, homeService){
        if(sessionStorage.email == null){
            alert('Please login');
            location.href = 'http://localhost:8080/#login'
        }
        else{
            homeService.getUser(sessionStorage.email.replace(/ /g,'')).then(function(response){
                    if(response.data.isAdmin){
                        $scope.isAdmin = true;
                    }
            })
            $scope.userName = sessionStorage.email;
        }    
    }

    angular.module('codeSnip').controller('homeController', ['$scope', 'homeService', homeController]);
})();