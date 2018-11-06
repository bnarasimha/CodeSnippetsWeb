(function(){
    'use strict'

    function homeController($scope, $rootScope, $location, homeService){
        var loginUrl = 'http://' + $location.host() + ':' + $location.port() + '/login.html';

        if(sessionStorage.getItem("Email") == null){
            alert('Please login');
            location.href = loginUrl;
        }
        else{
            $rootScope.isUserLoggedIn = true;
            $scope.userName = sessionStorage.Email;
            $scope.Name = sessionStorage.Name;
            $scope.GreetingMessage = "Welcome " + sessionStorage.Name;
            
            homeService.getUser(sessionStorage.Email).then(function(response){
                    if(response.data.isAdmin){
                        $rootScope.isAdmin = true;
                    }
                    else{
                        $rootScope.isAdmin = false;
                    }
            })
        }
    }

    angular.module('codeSnip').controller('homeController', ['$scope', '$rootScope', '$location' ,'homeService', homeController]);
})();