angular.module('CodeSnip', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider'], 
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'index.html',
        requireADLogin:true
    })
    .when("/test", {
        templateUrl: 'test.html',
        requireADLogin:true
    })
    .when("/admin",{
        templateUrl:'admin/addSnip.html',
        requireADLogin:true
    });
});

adalProvider.init({
    instance:'https://login.microsoftonline.com',
    tenant:'https://azureadapp.azurewebsites.com',
    clientId:'9c607d49-08e1-4ac4-8f57-b2ed6d119a74'
}, $httpProvider);