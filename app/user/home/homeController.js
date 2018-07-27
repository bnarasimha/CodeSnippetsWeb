(function(){
    'use strict'

    function homeController($scope, $rootScope, homeService){
        // if(sessionStorage.email == null){
        //     alert('Please login');
        //     location.href = 'http://localhost:8080/#login'
        // }
        // else{
        //     $rootScope.isUserLoggedIn = true;
        //     $scope.userName = sessionStorage.email;
            
        //     homeService.getUser(sessionStorage.email).then(function(response){
        //             if(response.data.isAdmin){
        //                 $scope.isAdmin = true;
        //             }
        //     })
        // }    
    }

    angular.module('codeSnip').controller('homeController', ['$scope', '$rootScope', 'homeService', homeController]);
})();