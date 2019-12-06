var codeSnip = angular.module('codeSnip', ['ngRoute','AdalAngular', 'ui.bootstrap']);

// var json = $.getJSON({'url': "config.json", 'async': false});  
// json = JSON.parse(json.responseText); 
//alert(json.ApiUrl);

angular.module("codeSnip")
.constant("ApiUrl", "https://codesnippetsapi.azurewebsites.net/api");


codeSnip.config(['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider',
function($routeProvider, $httpProvider, adalProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'user/codesnippets/listCodeSnippets.html',
        requireADlogin :true
    })
    .when("/admin",{
        templateUrl:'admin/admin.html',
        requireADlogin :true
    })
    .when("/manageCategories", {
        templateUrl: 'admin/category/listcategories.html'
    })
    .when("/addCategory",{
        templateUrl:'admin/category/addcategory.html'
    })
    .when("/editCategory/:ID",{
        templateUrl:'admin/category/editcategory.html'
    })
    .when("/reviewcodesnippet", {
        templateUrl: "admin/reviewcodesnippets.html"
    })
    .when('/snipDetail/:ID',{
        templateUrl: 'user/codesnippetdetail/codeSnipDetail.html'
    })
    .when('/editSnipDetail/:ID',{
        templateUrl: 'user/codesnippetdetail/editCodeSnipDetail.html'
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