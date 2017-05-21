var codeSnip = angular.module('codeSnip', ['ngRoute','AdalAngular']);
codeSnip.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider',
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'user/home.html',
        //requireADLogin:true
    })
    .when("/admin",{
        templateUrl:'admin/addSnip.html',
        requireADLogin:true
    });

    adalProvider.init({
        instance:'https://login.microsoftonline.com/',
        tenant: 'bnarasimha21outlook.onmicrosoft.com',
        clientId:'635c77c2-cdbd-4623-84db-896707e5ae6f'
    }, $httpProvider);
}]);

//  codeSnip.controller('addSnipController', function($scope){
//     alert('123');
//     // $scope.Submit = function(){
//     //     alert($scope.title);
//     // };
// }); 