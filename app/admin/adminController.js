(function(){

    'use strict'

    function adminController($rootScope, $location){

        var loginUrl = 'http://' + $location.host() + ':' + $location.port() + '/login.html';

        if($rootScope.isAdmin == null)
        {
            location.href = loginUrl;
        }
    }

    angular.module('codeSnip').controller('adminController', ['$rootScope','$location', adminController]);
})();