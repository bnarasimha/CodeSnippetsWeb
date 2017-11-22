var codeSnip = angular.module('codeSnip', ['ngRoute','AdalAngular', 'ui.bootstrap']);

angular.module('codeSnip').constant('ApiUrl', 'http://localhost:8081/api');

codeSnip.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider',
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'user/codesnippets/listCodeSnippets.html',
        requireADlogin :true
    })
    .when("/logout", {
        templateUrl: 'logout.html'
    })
    .when("/login", {
        templateUrl: 'login.html'
    })
    .when("/admin",{
        templateUrl:'admin/admin.html',
        requireADlogin :true
    })
    .when("/addCategory",{
        templateUrl:'admin/addcategory.html'
    })
    .when("/reviewcodesnippet", {
        templateUrl: "admin/reviewcodesnippets.html"
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