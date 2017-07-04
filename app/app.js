var codeSnip = angular.module('codeSnip', ['ngRoute','AdalAngular', 'ui.bootstrap']);

codeSnip.constant('ApiUrl', 'http://ec2-52-14-209-239.us-east-2.compute.amazonaws.com:81/api');

codeSnip.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider',
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'user/codesnippets/listCodeSnippets.html'
    })
    .when("/logout", {
        templateUrl: 'logout.html'
    })
    .when("/admin",{
        templateUrl:'admin/admin.html'
    })
    .when('/snipDetail/:ID',{
        templateUrl: 'user/codesnippetdetail/codeSnipDetail.html'
    })
    .when("/addSnip",{
        templateUrl: 'user/addcodesnippet/addCodeSnippet.html'
    });

    adalProvider.init({
        instance:'https://login.microsoftonline.com/',
        tenant: 'bnarasimha21outlook.onmicrosoft.com',
        clientId:'635c77c2-cdbd-4623-84db-896707e5ae6f'
    }, $httpProvider);
}]);