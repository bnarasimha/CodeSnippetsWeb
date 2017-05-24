var codeSnip = angular.module('codeSnip', ['ngRoute','AdalAngular']);
codeSnip.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider',
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'user/home.html'
    })
    .when("/logout", {
        templateUrl: 'logout.html'
    })
    .when("/admin",{
        templateUrl:'admin/listCodeSnippets.html'
    })
    .when('/snipDetail/:ID',{
        templateUrl: 'admin/snipDetail.html',
        controller: 'snipDetailController'
    })
    .when("/addSnip",{
        templateUrl: 'admin/addSnip.html'
    });

    adalProvider.init({
        instance:'https://login.microsoftonline.com/',
        tenant: 'bnarasimha21outlook.onmicrosoft.com',
        clientId:'635c77c2-cdbd-4623-84db-896707e5ae6f'
    }, $httpProvider);
}]);