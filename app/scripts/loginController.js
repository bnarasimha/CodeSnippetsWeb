(function(){

    'use strict'

    function loginController($scope, $localStorage){
        function SetUserName(userName){
            $localStorage.userName = userName;
        };
    }

    angular.module('codeSnip', ['ngStorage']).controller('loginController', ['$scope', '$localStorage', loginController]);
})();