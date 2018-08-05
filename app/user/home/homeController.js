(function(){
    'use strict'

    function homeController($scope, $rootScope, $location, homeService){
        var loginUrl = 'http://' + $location.host() + ':' + $location.port() + '/login.html';
        //alert(sessionStorage.email == 0);
        //alert(sessionStorage.email);
        if(sessionStorage.email == 0){
            alert('Please login');
            location.href = loginUrl;
        }
        else{
            $rootScope.isUserLoggedIn = true;
            $scope.userName = sessionStorage.email;
            
            homeService.getUser(sessionStorage.email).then(function(response){
                    if(response.data.isAdmin){
                        $rootScope.isAdmin = true;
                    }
            })
        }
    }

    angular.module('codeSnip').controller('homeController', ['$scope', '$rootScope', '$location' ,'homeService', homeController]);
})();